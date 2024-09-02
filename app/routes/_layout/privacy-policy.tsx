import React, { useState } from "react";
import { createFileRoute } from '@tanstack/react-router'
import { ChevronDown, ChevronUp } from "lucide-react";

export const Route = createFileRoute('/_layout/privacy-policy')({
  component: PrivacyPolicy
})

interface ExpandedSections {
  [key: string]: boolean;
}

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function PrivacyPolicy() {
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
      <h1 className="text-3xl font-bold mb-6">STROLI Privacy Policy</h1>
      <p className="mb-4">Last Updated: July 26, 2024</p>

      <Section id="introduction" title="1. Introduction">
        <p>
          STROLI, Inc (collectively, "Company", "we", "us", or "our") takes data
          privacy and security seriously and believes in transparency. This
          Privacy Policy ("Policy") describes how we collect, use, share, and
          protect Personal Data that we collect from individuals who use, access
          or interact with our Business Operations.
        </p>
      </Section>

      <Section
        id="data-collection"
        title="2. What Personal Data We May Collect"
      >
        <p>
          We collect various types of Personal Data, including but not limited
          to:
        </p>
        <ul className="list-disc pl-6">
          <li>Contact Data</li>
          <li>Device Data</li>
          <li>Geolocation Data</li>
          <li>Profile Data</li>
          <li>Feedback</li>
          <li>Transaction Data</li>
          <li>Usage Data</li>
          <li>Social Network Data</li>
          <li>Marketing Data</li>
        </ul>
      </Section>

      <Section id="data-use" title="3. How We May Use Your Information">
        <p>We may use your Personal Data for various purposes, including:</p>
        <ul className="list-disc pl-6">
          <li>Providing and improving STROLI</li>
          <li>Communicating with you and conducting marketing outreach</li>
          <li>Analytics and performance measurement</li>
          <li>Protecting ourselves, our users, and others</li>
        </ul>
      </Section>

      <Section
        id="data-sharing"
        title="4. How We May Share or Disclose Personal Data"
      >
        <p>We may share your Personal Data with:</p>
        <ul className="list-disc pl-6">
          <li>Corporate Affiliates</li>
          <li>Service Providers and Business Partners</li>
          <li>Companies Involved in Mergers and Acquisitions Transactions</li>
          <li>Professional Advisors</li>
          <li>Law Enforcement, Government Agencies, and Courts</li>
          <li>Other Users (in accordance with your settings)</li>
        </ul>
      </Section>

      <Section
        id="data-protection"
        title="5. How We Protect Your Personal Data"
      >
        <p>
          We use commercially reasonable physical, technical, and organizational
          security measures to protect Personal Data from unauthorized access,
          acquisition, use, alteration, or accidental loss.
        </p>
      </Section>

      <Section
        id="user-rights"
        title="6. Accessing, Updating, or Deleting Personal Data"
      >
        <p>
          You can access, correct, or delete your Personal Data through your
          Account settings or by contacting us directly.
        </p>
      </Section>

      <Section id="data-retention" title="7. Data Retention">
        <p>
          We retain your Personal Data only for as long as necessary to fulfill
          the purposes for which we collected it, to provide STROLI, or as
          required by applicable laws.
        </p>
      </Section>

      <Section id="cookies" title="8. Cookies and Similar Technologies">
        <p>
          We use various types of cookies and similar technologies, including
          essential cookies, functionality cookies, performance cookies, and
          marketing cookies. You can control cookie settings through your
          browser preferences.
        </p>
      </Section>

      <Section
        id="user-choices"
        title="9. Your Choices to Control Your Information"
      >
        <p>
          You have various options to control how we interact with you,
          including opting out of email communications, text messages, and push
          notifications.
        </p>
      </Section>

      <Section id="childrens-privacy" title="10. Children's Privacy">
        <p>
          STROLI is not directed to children under the age of 18, and we do not
          knowingly collect Personal Data from individuals under 18.
        </p>
      </Section>

      <Section
        id="international-transfers"
        title="11. International Data Transfers"
      >
        <p>
          We may transfer your Personal Data to countries outside of your home
          jurisdiction. We comply with applicable legal requirements when
          transferring Personal Data internationally.
        </p>
      </Section>

      <Section
        id="third-party-links"
        title="12. Third Party Websites and Links"
      >
        <p>
          This Policy does not apply to third-party websites or applications
          linked from STROLI. We encourage you to review the privacy policies of
          these third parties.
        </p>
      </Section>

      <Section id="updates" title="13. Updates to This Policy">
        <p>
          We may modify or update this Policy from time to time. We will notify
          you of material changes as appropriate under the circumstances.
        </p>
      </Section>

      <Section id="contact" title="14. How to Contact Us">
        <p>
          If you have any questions or concerns about this Policy, please
          contact us at:
        </p>
        <p>
          STROLI, Inc
          <br />
          Attn: Privacy Officer
          <br />
          9800 Wilshire Boulevard, Suite 206
          <br />
          Beverly Hills, CA 90212
          <br />
          Privacy@STROLI.io
        </p>
      </Section>

      <Section id="eu-addendum" title="15. EU/EEA/UK Addendum">
        <p>
          This section provides additional information for users in the EU, EEA,
          UK, and Switzerland, including details on the legal basis for data
          processing and data subject rights under the GDPR.
        </p>
      </Section>

      <Section
        id="state-privacy"
        title="16. Other Addendum: State Privacy Rights"
      >
        <p>
          This section addresses privacy rights for residents of various U.S.
          states, including California, Virginia, Colorado, Utah, Connecticut,
          Iowa, Indiana, Montana, Tennessee, and Texas.
        </p>
      </Section>
    </div>
  );
};