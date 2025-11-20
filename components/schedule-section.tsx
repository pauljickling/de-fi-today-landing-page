import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

const scheduleItems = [
  {
    time: "10:00 AM - 10:30 AM",
    title: "DeFi-ing Institutions",
    speaker: "Danny Ryan, Co-Founder and President at Etherealize",
    type: "keynote",
    session: "Opening Keynote",
  },
  {
    time: "10:30 AM - 11:00 AM",
    title: "Stablecoins' Edge on TradFi",
    panelists: [
      "Haonan Li, Co-Founder and CEO at Codex",
      "Benjamin S.P. Founder of Cap",
    ],
    moderator: "Ash Morgan, Enterprise Acceleration at Ethereum Foundation",
    type: "panel",
    session: "Panel",
  },
  {
    time: "11:00 AM - 11:30 AM",
    title: "Fund Tokenization",
    panelists: ["Theo Golden, Investment Manager at Baillie Gifford"],
    moderator: "Matthew Dawson, Enterprise Acceleration at Ethereum Foundation",
    type: "panel",
    session: "Fireside Chat",
  },
  {
    time: "11:30 AM - 12:00 PM",
    title: "Coffee Break",
    type: "break",
  },
  {
    time: "12:00 PM - 12:30 PM",
    title: "The Evolution of On-Chain Credit Markets",
    panelists: ["Merlin Egalite, Co-Founder of Morpho", "Rahul Goyal, Head of Institutional Partnerships at Gauntlet", "Marcin Kazmiercza, Co-Founder of RedStone and Credora"],
    moderator: "Ben Rodriguez, Protocol Specialist at Coinbase",
    type: "panel",
    session: "Panel",
  },
  {
    time: "12:30 PM - 1:00 PM",
    title: "Enhancing Liquidity through RFQs and AMMs",
    panelists: [
      "Nicolas Baum, Senior Engineer at 0xProject",
      "Nikita Ovchinnik, CEO at Barter",
      "Kenneth Ng, Co-Founder of Uniswap Foundation",
    ],
    moderator: "Danning Sui, Research Director at Pantera Capital",
    type: "panel",
    session: "Panel",
  },
  {
    time: "1:00 PM - 2:00 PM",
    title: "Lunch",
    type: "break",
  },
  {
    time: "2:00 PM - 2:30 PM",
    title: "Money for the Internet Era: Stablecoins & Tokenized Assets",
    speaker: "Stani Kulechov, Founder of Aave Labs",
    type: "keynote",
    session: "Keynote",
  },
  {
    time: "2:30 PM - 3:00 PM",
    title: "Fluid DEX v2",
    speaker: "DMH, COO at Fluid",
    type: "talk",
    session: "Talk",
  },
  {
    time: "3:00 PM - 3:30 PM",
    title: "Stablecoin Banking",
    speaker: "Mike Silagadze, Founder and CEO at EtherFi",
    type: "talk",
    session: "Talk",
  },
  {
    time: "3:30 PM - 4:00 PM",
    title: "Coffee Break",
    type: "break",
  },
  {
    time: "4:00 PM - 4:30 PM",
    title: "Institutional Privacy on Ethereum",
    speaker: "Oskar Thorén, Lead Institutional Privacy Task Force at Ethereum Foundation",
    type: "talk",
    session: "Talk",
  },
  {
    time: "4:30 PM - 5:00 PM",
    title: "Skeuomorphic Markets",
    speaker: "Austin Adams, Founder of Whetstone Research",
    type: "keynote",
    session: "Closing Keynote",
  },
]

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-4 md:py-8 bg-white">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">Event Schedule</h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-4 w-full">
          {scheduleItems.map((item, index) => (
            <Card
              key={index}
              className={`border-l-4 transition-all hover:shadow-md ${
                item.type === "keynote"
                  ? "border-l-primary bg-accent/20"
                  : item.type === "break"
                    ? "border-l-muted bg-muted/30"
                    : "border-l-primary/40 bg-white"
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">{item.time}</span>
                      {item.session && <span className="text-sm italic text-muted-foreground">• {item.session}</span>}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    {item.description && <CardDescription className="mt-1.5">{item.description}</CardDescription>}
                  </div>
                </div>
              </CardHeader>
              {(item.speaker || item.panelists) && (
                <CardContent className="pt-0">
                  {item.panelists ? (
                    <div className="space-y-2">
                      <div className="space-y-1">
                        {item.panelists.map((panelist, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground italic">
                            {panelist}
                          </p>
                        ))}
                      </div>
                      {item.moderator && (
                        <p className="text-sm text-muted-foreground italic pt-1">Moderated by {item.moderator}</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">{item.speaker}</p>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
