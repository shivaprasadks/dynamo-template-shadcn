import { Button } from "@/components/ui/button"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              We are a company dedicated to providing high-quality products and services to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-muted-foreground">
              <p>123 Main Street</p>
              <p>Anytown, USA 12345</p>
              <p className="mt-2">Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for updates.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2023 Your Company. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
