import React, { useState } from "react";
import { createFileRoute } from '@tanstack/react-router'
import { ChevronDown, ChevronUp } from "lucide-react";

export const Route = createFileRoute('/_layout/legal')({
  component: TermsOfService
})

interface ExpandedSections {
  [key: string]: boolean;
}

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function TermsOfService() {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>(
    {}
  );

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const Section: React.FC<SectionProps> = ({ id, title, children }) => (
    <div className="mb-6">
      <h2
        className="text-xl font-bold mb-2 cursor-pointer flex items-center justify-between"
        onClick={() => toggleSection(id)}
      >
        {title}
        {expandedSections[id] ? (
          <ChevronUp size={20} />
        ) : (
          <ChevronDown size={20} />
        )}
      </h2>
      {expandedSections[id] && <div className="px-4 w-[80vw]">{children}</div>}
    </div>
  );

  return (
    <div className="container w-[90vw] p-6">
      <h1 className="text-3xl font-bold mb-6">
        STROLI GENERAL TERMS OF SERVICE
      </h1>
      <p className="mb-4">Last Updated: July 26, 2024</p>

      <p className="mb-4">
        Welcome to STROLI! This is a legal document. By using STROLI, you agree
        to terms below.
      </p>

      <Section id="introduction" title="Introduction">
        <p>
          This Agreement is entered into by and between you and STROLI, Inc
          ("we", "our", or "us") and pertains to your use of
          https://www.STROLI.io/ any services provided therein, including mobile
          applications, sub-domains, clickable URL, and websites with a link to
          these Terms of Service (collectively, "STROLI").
        </p>
      </Section>

      <Section id="user-eligibility" title="User Eligibility">
        <p>
          Adults only! Only individuals over the age of 18 may use the services
          or provide Personal Data (subject to our Privacy Policy) through
          STROLI.
        </p>
        <p>
          No repeat offenders. By using STROLI, you represent and warrant your
          access to STROLI has never been suspended or terminated for any
          reason.
        </p>
      </Section>

      <Section id="disclaimer-notice" title="Disclaimer Notice">
        <p>
          No Professional Advice. THE INFORMATION PROVIDED AS PART OF YOUR USE
          OF AND ACCESS TO STROLI IS FOR PERSONAL, INFORMATIONAL PURPOSES ONLY,
          AND DOES NOT CONSTITUTE LEGAL, MEDICAL, OR OTHER PROFESSIONAL ADVICE.
        </p>
      </Section>

      <Section id="arbitration-notice" title="Arbitration Notice">
        <p>
          These Terms of Service contain an arbitration provision in Section 9
          that requires both Parties to resolve disputes by binding arbitration
          instead of in court.
        </p>
      </Section>

      <Section id="what-we-do" title="1. What We Do">
        <p>
          STROLI is an exclusive-content platform that empowers Creators to make
          money while doing what they love. We are the home of Fans who interact
          daily with their favorite Creators and foster a safe and
          brand-friendly environment to engage together.
        </p>
      </Section>

      <Section id="your-account" title="2. Your Account">
        <p>
          Your Account gives you the ability to access STROLI and additional
          functionalities that we may establish and maintain from time to time
          and in our sole discretion.
        </p>
      </Section>

      <Section id="acceptable-conduct" title="3. Acceptable Conduct">
        <p>
          For a variety of reasons, we need to set some house rules on what
          products, know-how, and materials that you can promote and share, and
          how you interact with each other through STROLI.
        </p>
      </Section>

      <Section
        id="your-content"
        title="4. Your Content, Feedback, and Referrals"
      >
        <p>
          We strive to deliver a great experience to improve your experience as
          a User of the STROLI community. Therefore, we respect each other's
          intellectual property rights.
        </p>
      </Section>

      <Section id="privacy-security" title="5. Privacy and Security">
        <p>
          Your information is important to you and us. Let's work together to
          keep it confidential, safe, and secure.
        </p>
      </Section>

      <Section
        id="warranties-disclaimers"
        title="6. Warranties and Disclaimers"
      >
        <p>
          We need your commitment that you only post Content that you have
          permission to share with the STROLI community. Further, while we
          strive to deliver a great experience for all Users, there are things
          that we have no control over and therefore cannot be responsible for.
        </p>
      </Section>

      <Section id="limitation-liability" title="7. Limitation of Liability">
        <p>
          We need to manage our risks. If you suffer any losses as a result of
          your use of STROLI, our payment to you is limited to the amount that
          we have earned during the last 12-month of your use of STROLI.
        </p>
      </Section>

      <Section id="indemnification" title="8. Indemnification">
        <p>
          If we get sued because of your use of STROLI, your Content, or your
          conduct in interacting with other Users, you are responsible to pay
          for it.
        </p>
      </Section>

      <Section
        id="dispute-resolution"
        title="9. Governing Laws; Dispute Resolution"
      >
        <p>
          If you have any concerns, we encourage you to bring them up to us. Any
          disputes you have with STROLI will be resolved through binding
          arbitration in your individual capacity in New York, under the New
          York laws.
        </p>
      </Section>

      <Section id="third-party-sites" title="10. Third Party Sites & Content">
        <p>
          We do not have control over websites or content provided by a third
          party.
        </p>
      </Section>

      <Section
        id="suspension-termination"
        title="11. Suspension and Termination"
      >
        <p>
          Here's what we have to do if we part ways or if we have to modify,
          suspend, or terminate your access.
        </p>
      </Section>

      <Section id="updates" title="12. Updates">
        <p>
          STROLI is constantly evolving. With the launch of new products and
          features, we need the flexibility to make changes, update this
          Agreement, impose limits, and occasionally alter certain aspects of
          STROLI.
        </p>
      </Section>

      <Section
        id="miscellaneous"
        title="13. Miscellaneous; General Information"
      >
        <p>
          There's a few more things we need to say before you can use STROLI.
        </p>
      </Section>

      <Section id="service-addendum" title="14. Service Addendum">
        <p>
          This Service Addendum forms a part of the Terms of Service between us
          and Users and governs Users' access to and use of certain features of
          STROLI.
        </p>
      </Section>

      <Section
        id="technical-data"
        title="15. Consent to Collect Technical Data"
      >
        <p>
          We use session replay software to record your interactions when you
          use STROLI and collect certain technical data. By using STROLI, you
          are consenting to the collection and use of information using session
          replay software.
        </p>
      </Section>

      <p className="mt-8 text-sm text-gray-600">
        By using STROLI, you agree to these Terms of Service. If you do not
        agree, please do not use our services.
      </p>
    </div>
  );
};