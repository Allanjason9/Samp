"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

type Item = {
  name: string
  originalPrice: number
  discountedPrice: number
}

export default function BuyItem() {
  const [items, setItems] = useState<Item[]>([
    { name: 'Apples', originalPrice: 2.00, discountedPrice: 1.00 },
    { name: 'Bread', originalPrice: 3.00, discountedPrice: 1.50 },
    { name: 'Milk', originalPrice: 4.00, discountedPrice: 2.00 },
    { name: 'Eggs', originalPrice: 5.00, discountedPrice: 2.50 },
    { name: 'Cheese', originalPrice: 6.00, discountedPrice: 3.00 },
    { name: 'Yogurt', originalPrice: 3.50, discountedPrice: 1.75 },
  ])

  return (
    <motion.div 
      className="container mx-auto py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Buy Discounted Items</h2>
      <motion.ul 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            className="p-4 border rounded-lg shadow-md bg-background"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
            <p className="text-muted-foreground line-through">Original: ${item.originalPrice.toFixed(2)}</p>
            <p className="text-primary font-bold">Discounted: ${item.discountedPrice.toFixed(2)}</p>
            <Button className="mt-4" size="sm">Buy Now</Button>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

