"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Expiry Tracker', path: '/expiry-tracker' },
    { name: 'Buy Item', path: '/buy-item' },
    { name: 'Community Service', path: '/community-service' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <motion.header 
      className="bg-green-100 shadow-md fixed w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-green-800">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            FreshTrack
          </motion.span>
        </Link>
        <nav className="hidden md:block">
          <motion.ul className="flex space-x-4" variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="show"
          >
            {menuItems.map((item, index) => (
              <motion.li key={index} variants={{
                hidden: { opacity: 0, y: -20 },
                show: { opacity: 1, y: 0 },
              }}>
                <Link href={item.path}>
                  <motion.span
                    className="text-green-700 hover:text-green-900 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        <div className="hidden md:block">
          <Link href="/sign-in">
            <Button variant="outline" className="mr-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white">Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-green-700 text-white hover:bg-green-800">Sign Up</Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-green-700" /> : <Menu className="text-green-700" />}
        </button>
      </div>
      <motion.nav 
        className="md:hidden bg-green-100"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <ul className="flex flex-col items-center py-4">
          {menuItems.map((item, index) => (
            <motion.li key={index} variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: 20 },
            }}>
              <Link href={item.path}>
                <motion.span
                  className="block py-2 text-green-700 hover:text-green-900 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            </motion.li>
          ))}
          <motion.div variants={{
            open: { opacity: 1, y: 0 },
            closed: { opacity: 0, y: 20 },
          }}>
            <Link href="/sign-in">
              <Button variant="outline" className="mr-2 mt-4 border-green-700 text-green-700 hover:bg-green-700 hover:text-white">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="mt-4 bg-green-700 text-white hover:bg-green-800">Sign Up</Button>
            </Link>
          </motion.div>
        </ul>
      </motion.nav>
    </motion.header>
  )
}

