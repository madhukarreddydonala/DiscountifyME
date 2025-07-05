"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { DealCard } from "@/components/deal-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin, Filter, TrendingUp, Store, Users, Heart, Star, Smartphone } from "lucide-react"
import { mockDeals, categories } from "@/lib/mock-data"

export default function HomePage() {
  const [deals, setDeals] = useState(mockDeals)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [location, setLocation] = useState("Current Location")

  useEffect(() => {
    let filteredDeals = mockDeals

    if (searchTerm) {
      filteredDeals = filteredDeals.filter(
        (deal) =>
          deal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          deal.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          deal.merchant.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory !== "all") {
      filteredDeals = filteredDeals.filter((deal) => deal.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    setDeals(filteredDeals)
  }, [searchTerm, selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navigation />

      {/* Hero Section - Clean Design */}
      <div className="relative bg-gradient-to-br from-emerald-500 via-blue-600 to-purple-700 dark:from-emerald-600 dark:via-blue-700 dark:to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find Local Deals
              <br />
              <span className="text-yellow-300">Save Big!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto">
              Discover amazing discounts from nearby stores. Save money while supporting local businesses.
            </p>

            {/* Simple Search */}
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                <Input
                  placeholder="Search deals near you..."
                  className="pl-12 h-16 text-gray-900 dark:text-white text-lg border-0 shadow-2xl rounded-2xl bg-white dark:bg-gray-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button size="lg" className="absolute right-2 top-2 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl">
                  <MapPin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Simple CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl rounded-xl px-8">
                <Smartphone className="h-5 w-5 mr-2" />
                Get App
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-2 border-white hover:bg-white hover:text-blue-600 bg-transparent shadow-xl rounded-xl px-8"
              >
                <Store className="h-5 w-5 mr-2" />
                List Store
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats - Simplified */}
      <div className="bg-white dark:bg-gray-900 py-12 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Users", value: "50K+" },
              { icon: Store, label: "Stores", value: "2K+" },
              { icon: Heart, label: "Deals", value: "10K+" },
              { icon: Star, label: "Rating", value: "4.8" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white p-3 rounded-2xl w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories - Cleaner Design */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Shop by Category</h2>
          <p className="text-gray-600 dark:text-gray-400">Find exactly what you're looking for</p>
        </div>

        <div className="flex overflow-x-auto space-x-4 pb-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`whitespace-nowrap px-6 py-3 rounded-xl transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg"
                  : "hover:shadow-md dark:border-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="mr-2 text-lg">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Deals Section - Better Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-emerald-500 mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Hot Deals</h2>
              <p className="text-gray-600 dark:text-gray-400">
                <Badge variant="secondary" className="mr-2">
                  {deals.length} deals
                </Badge>
                Updated now
              </p>
            </div>
          </div>
          <Button variant="outline" className="rounded-xl bg-transparent dark:border-gray-700">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {deals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-6">
              <Search className="h-20 w-20 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-4">No deals found</h3>
            <p className="text-gray-500 dark:text-gray-500 mb-6">Try different keywords or categories</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              className="rounded-xl"
            >
              Show All Deals
            </Button>
          </div>
        )}
      </div>

      {/* How It Works - Simple */}
      <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Simple steps to start saving</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Find Deals",
                description: "Search for deals near your location",
                icon: Search,
              },
              {
                step: "2",
                title: "Save Money",
                description: "Get verified discounts from local stores",
                icon: Heart,
              },
              {
                step: "3",
                title: "Enjoy Shopping",
                description: "Visit stores and claim your savings",
                icon: Star,
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all rounded-2xl border-0 shadow-md dark:bg-gray-800"
              >
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2">STEP {step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA - Simplified */}
      <div className="bg-gradient-to-br from-emerald-500 via-blue-600 to-purple-700 dark:from-emerald-600 dark:via-blue-700 dark:to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Saving Today!</h2>
          <p className="text-xl opacity-95 mb-8">Join thousands of smart shoppers saving money every day</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl rounded-xl px-8">
              <Smartphone className="h-5 w-5 mr-2" />
              Download Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-2 border-white hover:bg-white hover:text-blue-600 bg-transparent shadow-xl rounded-xl px-8"
            >
              <Store className="h-5 w-5 mr-2" />
              Add Your Store
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
