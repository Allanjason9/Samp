"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <motion.footer 
      className="bg-primary text-primary-foreground py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'Blog'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:underline">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@freshtrack.com</p>
            <p>Live Chat Support Available</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="hover:text-secondary"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-2">Subscribe to our newsletter for updates and tips on reducing food waste.</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="mr-2" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 FreshTrack. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

