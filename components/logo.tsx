import { MapPin, Percent } from "lucide-react"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <div className="bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 p-2 rounded-xl shadow-lg">
          <MapPin className={`${sizeClasses[size]} text-white`} />
        </div>
        <div className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full p-1">
          <Percent className="h-3 w-3 text-white" />
        </div>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span
            className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent`}
          >
            DiscountifyME
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Save Smart, Shop Local</span>
        </div>
      )}
    </div>
  )
}
