"use client"

import { motion } from 'framer-motion'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function CommunityService() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Meals Donated',
        data: [1200, 1900, 3000, 5000, 4000, 3000],
        backgroundColor: [
          'rgba(34, 197, 94, 0.6)',
          'rgba(22, 163, 74, 0.6)',
          'rgba(21, 128, 61, 0.6)',
          'rgba(22, 101, 52, 0.6)',
          'rgba(20, 83, 45, 0.6)',
          'rgba(6, 78, 59, 0.6)',
        ],
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Meal Donations',
        color: '#166534',
        font: {
          size: 20,
        },
      },
    },
  }

  return (
    <motion.section 
      className="py-16 bg-gradient-to-r from-green-50 to-green-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">Community Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Bar data={data} options={options} />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Donate Surplus Food</h3>
            <p className="text-green-600 mb-4">
              Have surplus food you can't use? We can help you connect with local NGOs to donate your excess food to nearby orphanages or old age homes. Together, we can make a difference in our community.
            </p>
            <p className="text-green-600 mb-4">
              Contact us to arrange a food donation:
            </p>
            <ul className="list-disc list-inside text-green-600 mb-4">
              <li>Phone: (123) 456-7890</li>
              <li>Email: donations@freshtrack.com</li>
            </ul>
            <Link href="/contact-us">
              <Button className="bg-green-600 text-white hover:bg-green-700">Contact Us for Donations</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

