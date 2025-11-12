"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const speakers = [
  {
    name: "Austin Adams",
    title: "Founder, Whetstone Research",
    image: "/speakers/austin-adams.jpeg",
  },
  {
    name: "Stani Kulechov",
    title: "Founder, Aave Labs",
    image: "/speakers/stani-kulechov.jpg",
  },
  {
    name: "Danny Ryan",
    title: "Co-founder and President, Etherealize",
    image: "/speakers/danny-ryan.png",
  },
  {
    name: "Merlin Egalite",
    title: "Co-founder, Morpho",
    image: "/speakers/merlin-egalite.jpeg",
  },
  {
    name: "DMH",
    title: "COO, Fluid",
    image: "/speakers/DMH.jpeg",
  },
  {
    name: "Mike Silagadze",
    title: "Founder and CEO, EtherFi",
    image: "/speakers/mike-silagadze.jpeg",
  },
  {
    name: "Haonan Li",
    title: "Co-founder and CEO, Codex",
    image: "/speakers/haonan-li.jpg",
  },
  {
    name: "Ben Rodriguez",
    title: "Protocol Specialist, Coinbase",
    image: "/speakers/ben-rodriguez.jpg",
  },
  {
    name: "Rahul Goyal",
    title: "Head of Institutional Partnerships, Gauntlet",
    image: "/speakers/rahul-goyal.jpeg",
  },
  {
    name: "Benjamin S.P.",
    title: "Founder, Cap",
    image: "/speakers/Benjamin_s_p.jpg",
  },
  {
    name: "Sam MacPherson",
    title: "Co-Founder and CEO, Phoenix Labs",
    image: "/speakers/sam_macpherson.jpg",
  },
  {
    name: "Nicolas Baum",
    title: "Senior Engineer, 0xProject",
    image: "/speakers/nicolas_baum.jpg",
  },
  {
    name: "Nikita Ovchinnik",
    title: "CEO, Barter",
    image: "/speakers/nova.jpeg",
  },
  {
    name: "Kenneth Ng",
    title: "Co-Founder, Uniswap Foundation",
    image: "/speakers/kenneth_ng.jpg",
  },
  {
    name: "Danning Sui",
    title: "Research Director, Pantera Capital",
    image: "/speakers/danning_sui.jpg",
  },
  {
    name: "Oskar Thorén",
    title: "Lead Institutional Privacy Task Force, Ethereum Foundation",
    image: "speakers/oskar-thoren.jpg",
  },
]

export function SpeakersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  const infiniteSpeakers = [...speakers, ...speakers, ...speakers]
  const speakerWidth = 192 + 24
  const totalOriginalWidth = speakers.length * speakerWidth

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      if (!hasInteracted) {
        setHasInteracted(true)
        // Set initial position to middle set on first interaction
        scrollContainerRef.current.scrollLeft = totalOriginalWidth + 50
      }

      const scrollAmount = 300
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      })

      setTimeout(() => {
        if (!scrollContainerRef.current) return
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const threshold = speakerWidth / 2

        if (scrollLeft <= threshold) {
          scrollContainerRef.current.scrollLeft = scrollLeft + totalOriginalWidth
        } else if (scrollLeft >= totalOriginalWidth * 2 - threshold) {
          scrollContainerRef.current.scrollLeft = scrollLeft - totalOriginalWidth
        }
      }, 500)
    }
  }

  return (
    <section id="speakers" className="py-16 md:py-24 bg-background flex justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Featured Speakers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance">
            {" "}
            Our speakers include founders of the largest DeFi protocols and leaders of financial institutions.
          </p>
        </div>

        <div className="relative flex justify-center">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex bg-white/95 backdrop-blur shadow-lg"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="relative max-w-[1100px] overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background via-background/60 to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {infiniteSpeakers.map((speaker, index) => (
                <div key={index} className="flex-shrink-0 w-48 flex flex-col items-center gap-3">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10 shadow-lg">
                    <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">{speaker.name}</h3>
                    <p className="text-sm text-muted-foreground">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background via-background/60 to-transparent z-10 pointer-events-none" />
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex bg-white/95 backdrop-blur shadow-lg"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
