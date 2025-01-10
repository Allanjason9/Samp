"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

const blogPosts = [
  {
    title: "5 Ways to Reduce Food Waste in Your Home",
    excerpt: "Discover simple yet effective strategies to minimize food waste and save money...",
    date: "2023-07-15",
  },
  {
    title: "The Environmental Impact of Food Waste",
    excerpt: "Learn about the surprising effects of food waste on our planet and what we can do...",
    date: "2023-07-10",
  },
  {
    title: "Cooking with Near-Expiry Ingredients: Tips and Tricks",
    excerpt: "Get creative in the kitchen and learn how to make delicious meals with ingredients...",
    date: "2023-07-05",
  },
  {
    title: "Understanding Food Expiration Dates",
    excerpt: "Demystify the confusing world of 'best before', 'use by', and 'sell by' dates...",
    date: "2023-06-30",
  },
  {
    title: "Community Spotlight: Local Food Banks Making a Difference",
    excerpt: "Explore how local food banks are fighting hunger and reducing waste in our community...",
    date: "2023-06-25",
  },
]

export default function Blog() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-green-50 to-white">
      <motion.div 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">FreshTrack Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-green-700 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="text-green-600 hover:underline">
                  Read more
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

