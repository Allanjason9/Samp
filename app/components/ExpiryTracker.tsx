"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Leaf, Trash2 } from 'lucide-react'

type FoodItem = {
  id: string
  name: string
  expiryDate: Date
}

export default function ExpiryTracker() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([])
  const [newItem, setNewItem] = useState({ name: '', expiryDate: '' })

  const addItem = () => {
    if (newItem.name && newItem.expiryDate) {
      setFoodItems([...foodItems, { 
        id: Date.now().toString(), 
        name: newItem.name, 
        expiryDate: new Date(newItem.expiryDate) 
      }])
      setNewItem({ name: '', expiryDate: '' })
    }
  }

  const removeItem = (id: string) => {
    setFoodItems(foodItems.filter(item => item.id !== id))
  }

  const getStatusColor = (expiryDate: Date) => {
    const daysUntilExpiry = Math.ceil((expiryDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    if (daysUntilExpiry <= 3) return 'bg-red-100 border-red-500 text-red-700'
    if (daysUntilExpiry <= 10) return 'bg-yellow-100 border-yellow-500 text-yellow-700'
    return 'bg-green-100 border-green-500 text-green-700'
  }

  return (
    <motion.div 
      className="container mx-auto py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-green-800">Expiry Date Tracker</h2>
      <div className="bg-green-50 p-8 rounded-lg shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <Label htmlFor="itemName" className="text-green-700">Item Name</Label>
            <Input
              id="itemName"
              type="text"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              placeholder="Enter food item name"
              className="border-green-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <Label htmlFor="expiryDate" className="text-green-700">Expiry Date</Label>
            <Input
              id="expiryDate"
              type="date"
              value={newItem.expiryDate}
              onChange={(e) => setNewItem({ ...newItem, expiryDate: e.target.value })}
              className="border-green-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="flex items-end">
            <Button onClick={addItem} className="w-full bg-green-600 hover:bg-green-700 text-white">
              Add Item
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {foodItems.length > 0 ? (
          <motion.ul 
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {foodItems.map((item) => (
              <motion.li 
                key={item.id} 
                className={`p-4 rounded-lg shadow-md border-l-4 ${getStatusColor(item.expiryDate)} flex justify-between items-center`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div>
                  <span className="font-semibold mr-2">{item.name}</span>
                  <span>Expires on: {item.expiryDate.toLocaleDateString()}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <motion.div 
            className="text-center text-gray-500 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Leaf className="mx-auto h-12 w-12 text-green-500 mb-2" />
            <p>No items added yet. Start tracking your food to reduce waste!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

