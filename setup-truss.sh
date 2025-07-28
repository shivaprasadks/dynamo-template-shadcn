#!/bin/bash

# Exit on error
set -e

echo "Starting setup script..."

# Check if pnpm is installed
if command -v pnpm &> /dev/null; then
    echo "Using pnpm for package management"
    PACKAGE_MANAGER="pnpm"
elif command -v yarn &> /dev/null; then
    echo "Using yarn for package management"
    PACKAGE_MANAGER="yarn"
else
    echo "Neither pnpm nor yarn is installed. Please install one of them and try again."
    exit 1
fi

# Install all packages
echo "Installing all packages..."
if [ "$PACKAGE_MANAGER" = "pnpm" ]; then
    pnpm install
else
    yarn install
fi

# Add and install @cleartax/truss
echo "Adding @cleartax/truss@0.36.0..."
if [ "$PACKAGE_MANAGER" = "pnpm" ]; then
    pnpm add @cleartax/truss@0.36.0
else
    yarn add @cleartax/truss@0.36.0
fi

# Transform component imports from '@/components/ui/component' to '@cleartax/truss/component'
echo "Transforming component imports in all .tsx files..."

# Define common components to look for
COMPONENTS="accordion alert alertdialog aspect-ratio avatar badge button calendar card carousel checkbox collapsible combobox command context-menu dialog drawer dropdown-menu form hover-card input label menubar navigation-menu popover progress radio-group resizable scroll-area select separator sheet skeleton slider sonner switch table tabs textarea toast toggle tooltip"



# Check if ui folder exists and delete it
echo "Checking for ui folder..."
if [ -d "components/ui" ]; then
    echo "Deleting components/ui folder..."
    rm -rf components/ui
    echo "components/ui folder deleted."
elif [ -d "src/components/ui" ]; then
    echo "Deleting src/components/ui folder..."
    rm -rf src/components/ui
    echo "src/components/ui folder deleted."
else
    echo "ui folder not found in components/ or src/components/. Skipping deletion."
fi


# Process each component
for COMPONENT in $COMPONENTS; do
    echo "Processing component: $COMPONENT"
    # Replace double-quoted imports
    find . -name "*.tsx" -type f -exec sed -i '' "s/from \"@\/components\/ui\/$COMPONENT\"/from \"@cleartax\/truss\/$COMPONENT\"/g" {} \;
    # Replace single-quoted imports
    find . -name "*.tsx" -type f -exec sed -i '' "s/from '@\/components\/ui\/$COMPONENT'/from '@cleartax\/truss\/$COMPONENT'/g" {} \;
done

# Also handle any custom components not in the predefined list
echo "Scanning for additional components..."
for TSX_FILE in $(find . -name "*.tsx" -type f); do
    # Extract any remaining @/components/ui imports
    grep -o 'from ["\x27]@/components/ui/[^"\x27]*["\x27]' "$TSX_FILE" 2>/dev/null | while read -r IMPORT; do
        # Extract component name
        COMP=$(echo "$IMPORT" | sed -E 's/.*\/([^/"'\'']+)["\x27]$/\1/')
        if [ ! -z "$COMP" ]; then
            echo "Found additional component: $COMP"
            # Replace double-quoted imports
            sed -i '' "s/from \"@\/components\/ui\/$COMP\"/from \"@cleartax\/truss\/$COMP\"/g" "$TSX_FILE"
            # Replace single-quoted imports
            sed -i '' "s/from '@\/components\/ui\/$COMP'/from '@cleartax\/truss\/$COMP'/g" "$TSX_FILE"
        fi
    done
done


# Add Truss global CSS import to src/main.tsx
echo "Adding Truss global CSS import to src/main.tsx..."
if [ -f "src/main.tsx" ]; then
    # Insert the import line after the first line of the file
    sed -i '' '1a\
import '\''../node_modules/@cleartax/truss/dist/styles/globals.css'\''
' src/main.tsx
    echo "Added Truss global CSS import to src/main.tsx."
else
    echo "src/main.tsx not found. Skipping adding Truss global CSS import."
fi

echo "Setup completed successfully!"