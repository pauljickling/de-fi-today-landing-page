import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is DeFi Today?",
    answer:
      "DeFi Today explores Ethereum's cutting-edge Decentralized Finance ecosystem. The event brings together leading financial institutions operating on Ethereum, the top DeFi protocols, and innovative founders. Expect talks and fireside chats on Real-World Assets, DeFi Primitives, Institutional Adoption, and Innovation. Hosted by the Ethereum Foundation and free from sponsors, this is a shill-free DeFi event focused on today's market realities.  Join us on the 21st of November 2025 from 10 AM to 5 PM in Buenos Aires, Argentina at the La Rural Devconnect venue!",
  },
  {
    question: "What can attendees expect and who should attend this event?",
    answer: (
      <>
        <p className="mb-4">
          Attendees can look forward to talks and fireside chats with industry leaders covering Real-World Assets, DeFi
          Primitives, Institutional Adoption, and Innovation in the Ethereum DeFi ecosystem. There will also be
          dedicated breaks for networking.
        </p>
        <p>
          This event is ideal for DeFi professionals, founders, innovators, financial institutions exploring blockchain,
          and curious hobbyists. No prior experience is required.
        </p>
      </>
    ),
  },
  {
    question: "How do I register and how expensive are tickets?",
    answer: (
      <>
        Register{" "}
        <a href="https://luma.com/lklh3u0v" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
          here
        </a>{" "}
        to get your ticket! Tickets are free of charge but{" "}
        <strong>attendees are required to have a Devconnect ticket</strong>. Get your Devconnect ticket{" "}
        <a
          href="https://tickets.devconnect.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Do I need a Devconnect ticket?",
    answer: (
      <>
        Yes, a Devconnect ticket is required to attend DeFi Today. Attendees can purchase a Devconnect ticket{" "}
        <a
          href="https://tickets.devconnect.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Will the sessions be streamed or recorded?",
    answer: (
      <>
        All sessions will be live streamed and recorded. Recordings will be posted to{" "}
        <a
          href="https://www.youtube.com/@ethconomicsdevconnect8398"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          our YouTube account
        </a>{" "}
        afterwards.
      </>
    ),
  },
  {
    question: "Will food and drinks be provided?",
    answer:
      "Coffee and small snacks are served during the two coffee breaks (11:30 - 12:00 and 15:30 - 16:00). There is a lunch break from 13:00 to 14:00. Lunch is not provided but can be purchased at food trucks within the Devconnect venue.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-accent/20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">Everything you need to know about DeFi Today</p>
        </div>

        <div className="mx-auto max-w-3xl w-full">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
