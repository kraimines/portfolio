"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export default function ViewCounter() {
  const [views, setViews] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get current view count from localStorage
    const storedViews = localStorage.getItem("portfolio-views")
    const currentViews = storedViews ? parseInt(storedViews) : 0

    // Increment view count
    const newViews = currentViews + 1
    localStorage.setItem("portfolio-views", newViews.toString())
    
    // Store view timestamp
    const lastVisit = localStorage.getItem("portfolio-last-visit")
    const now = new Date().toISOString()
    
    // Only count as new view if more than 30 minutes since last visit
    if (!lastVisit || (Date.now() - new Date(lastVisit).getTime()) > 30 * 60 * 1000) {
      setViews(newViews)
      localStorage.setItem("portfolio-last-visit", now)
    } else {
      setViews(currentViews)
    }

    setIsLoading(false)
  }, [])

  if (isLoading) {
    return null
  }

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg px-4 py-2">
      <div className="flex items-center gap-2 text-cyan-400">
        <Eye className="w-4 h-4" />
        <span className="text-sm font-medium">
          {views.toLocaleString()} {views === 1 ? 'view' : 'views'}
        </span>
      </div>
    </div>
  )
}
