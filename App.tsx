import { Button } from "@/components/ui/button"
import { Footer } from "./components/footer"
import { Navbar } from "./components/navbar"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-10">
        <section className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl text-muted-foreground mb-6">
            This is a sample website with a navigation bar and footer built with React and Shadcn/UI.
          </p>
          <div className="flex gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Feature One</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Feature Two</h2>
            <p className="text-muted-foreground">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Feature Three</h2>
            <p className="text-muted-foreground">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
