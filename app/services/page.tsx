import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Bell,
  Heart,
  Search,
  Store,
  BarChart3,
  Users,
  Smartphone,
  Clock,
  Shield,
  Zap,
  Target,
} from "lucide-react"

export default function ServicesPage() {
  const userServices = [
    {
      icon: Search,
      title: "Smart Deal Discovery",
      description: "Find the best deals near you with our intelligent search and filtering system.",
      features: ["Location-based search", "Category filtering", "Price comparison", "Real-time updates"],
    },
    {
      icon: Bell,
      title: "Price Drop Alerts",
      description: "Get notified instantly when prices drop on items in your wishlist.",
      features: ["Instant notifications", "Customizable alerts", "Email & SMS options", "Deal expiry reminders"],
    },
    {
      icon: Heart,
      title: "Wishlist Management",
      description: "Save your favorite deals and track price changes over time.",
      features: ["Unlimited wishlist items", "Price history tracking", "Share with friends", "Quick access"],
    },
    {
      icon: MapPin,
      title: "Location Services",
      description: "Discover deals within your preferred radius and get directions to stores.",
      features: ["GPS integration", "Distance calculation", "Store directions", "Area-based deals"],
    },
  ]

  const merchantServices = [
    {
      icon: Store,
      title: "Merchant Dashboard",
      description: "Easy-to-use dashboard for posting and managing your deals and promotions.",
      features: ["Deal posting", "Inventory management", "Customer insights", "Performance tracking"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Detailed analytics to understand customer behavior and optimize your deals.",
      features: ["Customer demographics", "Deal performance", "Revenue tracking", "Trend analysis"],
    },
    {
      icon: Users,
      title: "Customer Engagement",
      description: "Connect with your customers through reviews, ratings, and direct messaging.",
      features: ["Customer reviews", "Rating system", "Direct messaging", "Feedback management"],
    },
    {
      icon: Target,
      title: "Targeted Marketing",
      description: "Reach the right customers with location-based and interest-based targeting.",
      features: ["Location targeting", "Interest-based ads", "Demographic filtering", "Campaign management"],
    },
  ]

  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices with a responsive design that works everywhere.",
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Get instant updates on new deals, price changes, and limited-time offers.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security and privacy measures.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick loading times and smooth performance for the best user experience.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Comprehensive solutions for both deal seekers and local merchants to create a thriving marketplace
            </p>
          </div>
        </div>
      </div>

      {/* User Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            For Customers
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services for Deal Seekers</h2>
          <p className="text-lg text-gray-600">Everything you need to discover and save on local deals</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {userServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Merchant Services */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              For Merchants
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Services for Local Businesses</h2>
            <p className="text-lg text-gray-600">Powerful tools to reach customers and grow your business</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {merchantServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Platform Features
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose DiscountifyME?</h2>
          <p className="text-lg text-gray-600">Built with cutting-edge technology for the best user experience</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8">Join our community of smart shoppers and successful merchants</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Finding Deals
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Become a Merchant
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
