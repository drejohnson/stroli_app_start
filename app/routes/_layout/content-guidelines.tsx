import React, { useState } from "react";
import { createFileRoute } from '@tanstack/react-router'
import { ChevronDown, ChevronUp } from "lucide-react";

export const Route = createFileRoute('/_layout/content-guidelines')({
  component: ContentGuidelines
})

interface ExpandedSections {
  [key: string]: boolean;
}

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function ContentGuidelines() {
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
      {expandedSections[id] && <div className="w-[80vw] pl-4">{children}</div>}
    </div>
  );

  return (
    <div className="container w-[90vw] p-6">
      <h1 className="text-3xl font-bold mb-6">STROLI Content Guidelines</h1>
      <p className="mb-4">Last Updated: July 27, 2024</p>

      <p className="mb-4">
        STROLI strives to maintain a safe and brand-friendly environment for
        creators and fans to engage together. Help us foster this community by
        following our Terms of Service as well as the following guidelines.
      </p>

      <Section id="follow-law" title="Follow the law">
        <p>
          STROLI is not a place to support or praise terrorism, organized crime,
          or hate groups. Offering sexual services, buying or selling firearms,
          alcohol, and tobacco products between private individuals, and buying
          or selling non-medical or pharmaceutical drugs are also not allowed.
          We also remove content that attempts to trade, co-ordinate the trade
          of, donate, gift, or ask for non-medical drugs, as well as content
          that either admits to personal use (unless in the recovery context) or
          coordinates or promotes the use of non-medical drugs. STROLI also
          prohibits the sale of live animals between private individuals, though
          brick-and-mortar stores may offer these sales. No one may coordinate
          poaching or selling of endangered species or their parts.
        </p>
      </Section>

      <Section
        id="harmful-content"
        title="Refrain from posting harmful/sensitive content"
      >
        <p>
          Do not post content that promotes illegal activities (such as
          promoting counterfeit goods, or materials for faking drug tests). Do
          not post content that promotes using any endangered or threatened
          animal species (such as ivory) or human remains. Do not impersonate
          other individuals or spread misleading information through deep-fake
          tools, voice-cloning software or other similar AI-enabled
          technologies. Do not share or post sensitive personal data or
          proprietary information.
        </p>
      </Section>

      <Section
        id="content-rights"
        title="Share only videos that you've taken or have the right to share"
      >
        <p>
          As always, you own the content you post on STROLI. Remember to post
          authentic content, and don't post anything you've copied or collected
          from the Internet that you don't have the right to post.
        </p>
      </Section>

      <Section
        id="appropriate-content"
        title="Post videos that are appropriate for a diverse audience"
      >
        <p>
          Any videos that contain any form of nudity has to be reviewed by our
          content review team before being allowed to be shared on our platform.
          This includes photos, videos, and some digitally-created content that
          show sexual intercourse, genitals, and close-ups of fully-nude
          buttocks. It also includes some photos of female nipples, but photos
          in the context of breastfeeding, birth giving and after-birth moments,
          health-related situations (for example, post-mastectomy, breast cancer
          awareness or gender confirmation surgery) or an act of protest are
          allowed. Nudity in photos of paintings and sculptures is OK, too.
        </p>
      </Section>

      <Section
        id="genuine-interactions"
        title="Foster meaningful and genuine interactions"
      >
        <p>
          Help us stay spam-free by not artificially collecting Fans, posting
          repetitive content (including comments), or repeatedly contacting
          people for commercial purposes without their consent. Don't offer
          money or giveaways of money in exchange for Fans, comments or other
          engagement. Don't post content that engages in, promotes, encourages,
          facilitates, or admits to the offering, solicitation or trade of fake
          and misleading user reviews or ratings.
        </p>
      </Section>

      <Section
        id="respect-community"
        title="Respect other members of the STROLI community"
      >
        <p>
          We want to foster a positive, diverse community. We remove content
          that contains credible threats or hate speech, content that targets
          private individuals to degrade or shame them, personal information
          meant to blackmail or harass someone, and repeated unwanted messages.
          We do generally allow stronger conversation around people who are
          featured in the news or have a large public audience due to their
          profession or chosen activities.
        </p>
      </Section>

      <Section
        id="self-injury"
        title="Maintain our supportive environment by not glorifying self-injury"
      >
        <p>
          The STROLI community cares for each other and is often a place where
          people facing difficult issues such as eating disorders, cutting, or
          other kinds of self-injury come together to create awareness or find
          support. Encouraging or urging people to embrace self-injury is
          counter to our environment of support, and we'll remove it or disable
          accounts if it's reported to us.
        </p>
      </Section>

      <Section
        id="newsworthy-events"
        title="Be thoughtful when posting newsworthy events"
      >
        <p>
          We understand that many people use STROLI to share important and
          newsworthy events. Some of these issues can involve graphic images.
          Because so many different people and age groups use STROLI, we may
          remove videos of intense, graphic violence to make sure STROLI stays
          appropriate for everyone. We understand that people often share this
          kind of content to condemn, raise awareness or educate. If you do
          share content for these reasons, we encourage you to caption your
          photo with a warning about graphic violence.
        </p>
      </Section>

      <Section
        id="keep-community-strong"
        title="Help us keep the community strong"
      >
        <ul className="list-disc pl-6">
          <li>
            If you see something that you think may violate our guidelines,
            please report this to us at hello@stroli.io.
          </li>
          <li>
            You may find content that you don't like, but doesn't violate our
            guidelines. If that happens, you can unsubscribe to (as a fan) or
            block (as a creator) the person who posted it.
          </li>
          <li>
            Many disputes and misunderstandings can be resolved directly between
            members of the community.
          </li>
          <li>
            We may work with law enforcement, including when we believe that
            there's risk of physical harm or threat to public safety.
          </li>
        </ul>
      </Section>

      <p className="mt-8 text-sm text-gray-600">
        By using STROLI, you agree to follow these Content Guidelines. If you do
        not agree, please do not use our services.
      </p>
    </div>
  );
};