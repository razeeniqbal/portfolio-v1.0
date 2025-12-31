"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "./AnimatedList"

interface Item {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

let notifications = [
  {
    name: "Bachelor in Engineering",
    description: "UMPSA - CGPA 3.42",
    time: "2022",
    icon: "🎓",
    color: "#3498DB",
  },
  {
    name: "Engineer",
    description: "G&P Geotechnic",
    time: "Aug 2022",
    icon: "⚙️",
    color: "#16A085",
  },
  {
    name: "Power BI PL-300",
    description: "Microsoft Certified",
    time: "2023",
    icon: "📊",
    color: "#F39C12",
  },
  {
    name: "Master's in AI",
    description: "UMPSA - CGPA 3.68",
    time: "2023",
    icon: "🎓",
    color: "#E67E22",
  },
  {
    name: "Data Analyst",
    description: "EISmartwork",
    time: "May 2024",
    icon: "📊",
    color: "#9B59B6",
  },
  {
    name: "BigQuery ML Certified",
    description: "Google Cloud Platform",
    time: "2025",
    icon: "📜",
    color: "#4285F4",
  },
  {
    name: "Top 20 AWS National",
    description: "LLM Training Competition",
    time: "2025",
    icon: "🥉",
    color: "#1E86FF",
  },
  {
    name: "Google Speaker",
    description: "AI Build 2025",
    time: "2025",
    icon: "🎤",
    color: "#FF3D71",
  },
  {
    name: "Champion Award",
    description: "Axiata Innovation Challenge",
    time: "2025",
    icon: "🏆",
    color: "#FFB800",
  },
  {
    name: "Data Engineer Role",
    description: "AEM Energy Solutions",
    time: "Jun 2025",
    icon: "💼",
    color: "#00C9A7",
  },
]

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

export function AnimatedListDemo({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-6",
        className
      )}
    >
      <AnimatedList delay={2000}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-transparent dark:from-transparent"></div>
    </div>
  )
}
