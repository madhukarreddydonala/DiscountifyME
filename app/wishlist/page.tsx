"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { DealCard } from "@/components/deal-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingBag, Bell, Trash2 } from "lucide-react"
import { mockDeals } from "@/lib/mock-data"
import { useToast } from "@/hooks/use-toast"

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<string[]>([])
  const [wishlistDeals, setWishlistDeals] = useState<any[]>([])
  const { toast } = useToast()

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setWishlistItems(wishlist)

    const deals = mockDeals.filter((deal) => wishlist.includes(deal.id))
    setWishlistDeals(deals)
  }, [])

  const clearWishlist = () => {
    localStorage.setItem("wishlist", JSON.stringify([]))
    setWishlistItems([])
    setWishlistDeals([])
    toast({
      title: "Wishlist cleared",
      description: "All items have been removed from your wishlist.",
    })
  }

  const enableNotifications = () => {
    toast({
      title: "Notifications enabled",
      description: "You'll be notified when prices drop on your wishlist items.",
    })
  }

  if (wishlistDeals.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Heart className="h-12 w-12 text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start adding deals to your wishlist to keep track of your favorite offers and get notified when prices
              drop.
            </p>
            <Button size="lg" asChild>
              <a href="/">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Browse Deals
              </a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">My Wishlist</h1>
              <p className="text-lg opacity-90">
                {wishlistDeals.length} {wishlistDeals.length === 1 ? "deal" : "deals"} saved
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="secondary" onClick={enableNotifications}>
                <Bell className="h-4 w-4 mr-2" />
                Enable Alerts
              </Button>
              {wishlistDeals.length > 0 && (
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                  onClick={clearWishlist}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{wishlistDeals.length}</div>
              <div className="text-gray-600">Saved Deals</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Badge className="h-8 w-8 bg-green-100 text-green-600 mx-auto mb-2 flex items-center justify-center">
                ₹
              </Badge>
              <div className="text-2xl font-bold text-gray-900">
                ₹{wishlistDeals.reduce((total, deal) => total + (deal.originalPrice - deal.discountedPrice), 0)}
              </div>
              <div className="text-gray-600">Potential Savings</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Bell className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {wishlistDeals.filter((deal) => deal.expiresAt === "Today").length}
              </div>
              <div className="text-gray-600">Expiring Today</div>
            </CardContent>
          </Card>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">💡 Wishlist Tips</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
                <div>• Enable notifications to get alerted when prices drop</div>
                <div>• Check your wishlist regularly for limited-time offers</div>
                <div>• Share deals with friends to help them save too</div>
                <div>• Remove expired deals to keep your list organized</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
