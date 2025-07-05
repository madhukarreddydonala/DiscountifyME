import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Heart, MapPin, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Partner Merchants", value: "2K+", icon: MapPin },
    { label: "Deals Posted", value: "10K+", icon: TrendingUp },
    { label: "Money Saved", value: "₹5M+", icon: Award },
  ]

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To connect middle-class users with the best local deals and help them save money on everyday purchases while supporting local businesses.",
    },
    {
      icon: Heart,
      title: "Our Vision",
      description:
        "To create a thriving ecosystem where consumers discover amazing deals and local merchants reach their ideal customers effortlessly.",
    },
    {
      icon: Award,
      title: "Our Values",
      description:
        "Transparency, community support, innovation, and making savings accessible to everyone in their neighborhood.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About DiscountifyME</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Empowering smart shopping decisions by connecting you with the best local deals and discounts in your
              neighborhood.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Founder</h2>
              <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">DR</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Donala Madhukar Reddy</h3>
              <p className="text-lg text-gray-600 mb-8">Founder & CEO, DiscountifyME</p>
            </div>

            <Card className="p-8">
              <blockquote className="text-xl text-gray-700 italic text-center mb-6">
                "Why should people miss out on local deals just because they don't know they exist?"
              </blockquote>
              <div className="text-lg text-gray-600 space-y-6">
                <p>
                  This simple question sparked the creation of DiscountifyME. As someone who grew up in a middle-class
                  family, I understood the importance of every rupee saved and the value of supporting local businesses.
                </p>
                <p>
                  I noticed that amazing deals were happening all around us - from the local restaurant offering lunch
                  combos to the neighborhood electronics store clearing inventory - but people simply didn't know about
                  them. Meanwhile, these local businesses were struggling to reach customers who would genuinely
                  appreciate their offerings.
                </p>
                <p>
                  DiscountifyME bridges this gap by connecting people to local savings while empowering businesses with
                  digital visibility. It's not just about discounts; it's about building stronger communities where
                  everyone benefits - customers save money, businesses grow, and neighborhoods thrive.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Connecting People to Local Savings</h2>
            <div className="text-lg text-gray-600 space-y-6">
              <p>
                DiscountifyME was born from a simple observation: middle-class families often miss out on great local
                deals because they don't know where to find them. Meanwhile, local merchants struggle to reach potential
                customers who would love their products and services.
              </p>
              <p>
                We realized that technology could bridge this gap. By creating a platform that connects deal-seeking
                consumers with local businesses offering discounts, we're not just helping people save money – we're
                strengthening local communities and supporting the backbone of our economy.
              </p>
              <p>
                Today, DiscountifyME serves thousands of users across multiple cities, helping them discover everything
                from restaurant deals to fashion discounts, electronics offers, and much more – all within walking
                distance of their homes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Drives Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-8">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Passionate individuals working to make local shopping more rewarding
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Donala Madhukar Reddy",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=200&width=200",
                description: "Visionary leader passionate about connecting communities through technology",
              },
              {
                name: "Priya Sharma",
                role: "Head of Operations",
                image: "/placeholder.svg?height=200&width=200",
                description: "Ensuring smooth operations and exceptional user experience",
              },
              {
                name: "Rahul Kumar",
                role: "CTO",
                image: "/placeholder.svg?height=200&width=200",
                description: "Building scalable technology solutions for local commerce",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of smart shoppers who are already discovering amazing local deals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              🎯 Personalized Deals
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              📍 Location-Based
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              💰 Real Savings
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
