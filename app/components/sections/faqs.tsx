import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "@/lib/use-inview";

type AnswerPart = {
  type: "text" | "link";
  content: string;
  href?: string;
};

type FAQItem = {
  id: number;
  question: string;
  answer: AnswerPart[];
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How do I become a STROLI Creator?",
    answer: [
      { type: "text", content: "Fill out our " },
      {
        type: "link",
        content: "Creator Application",
        href: "/onboarding/creator",
      },
      {
        type: "text",
        content:
          " for approval. Our team will review your application and get back to you within 5-7 business days.",
      },
    ],
  },
  {
    id: 2,
    question: "How much can a STROLI Creator earn?",
    answer: [
      {
        type: "text",
        content:
          "Stroli Creators have total control of their earning power. The more views your content receives, the more you earn. You keep 80% of your ad revenue. Stroli keeps 20% to cover operations and maintain the platform.",
      },
    ],
  },
  {
    id: 3,
    question: "How old do I have to be to use STROLI?",
    answer: [
      {
        type: "text",
        content: "You must be at least 18 to use Stroli.",
      },
    ],
  },
  {
    id: 4,
    question: "Does STROLI allow mature content?",
    answer: [
      {
        type: "text",
        content:
          "Yes, content that is made for Mature Audiences Only has to be approved before being allowed on our platform.",
      },
    ],
  },
];

const Faqs: React.FC = () => {
  const headingRef = useInView<HTMLParagraphElement>();
  const renderAnswerPart = (item: AnswerPart, i: number) => {
    if (item.type === "text") {
      return <span key={i}>{item.content}</span>;
    } else if (item.type === "link") {
      return (
        <a
          key={i}
          href={item.href}
          className="text-cyan-500 hover:underline"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {item.content}
        </a>
      );
    }
    return null;
  };

  return (
    <section id="faq" className="max-h-screen snap-start snap-always py-24 overflow-clip">
      <h3 ref={headingRef} className="container mx-auto px-4 text-[clamp(1.5rem,4vw,3rem)] bg-clip-text mix-blend-darken text-gray-950 text-balance font-extrabold uppercase leading-tight translate-x-[-100px] opacity-0 mb-8">
        Frequently asked{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-sky-300">
          Questions
        </span>{" "}
        &{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500">
          Answers
        </span>
      </h3>
      <div className="container">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer.map(renderAnswerPart)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;