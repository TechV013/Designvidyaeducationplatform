import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms and Conditions — Design Vidya",
  description:
    "The terms and conditions governing access to and use of the Design Vidya platform, courses and services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms and Conditions — Design Vidya",
    description:
      "The terms and conditions governing access to and use of the Design Vidya platform, courses and services.",
    type: "website",
    url: "https://www.designvidya.com/terms",
  },
};

function Section({
  n,
  title,
  id,
  children,
}: {
  n: string;
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-8" id={id}>
      <h2 className="text-lg font-semibold uppercase tracking-wide text-text mb-3">
        {n}. {title}
      </h2>
      <div className="text-sm text-muted leading-relaxed text-justify space-y-3">
        {children}
      </div>
    </section>
  );
}

const PrivacyPolicyLink = ({ children }: { children: ReactNode }) => (
  <Link href="/privacy" className="text-primary hover:underline">
    {children}
  </Link>
);

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
          Legal
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">
          Terms and Conditions
        </h1>
        <p className="text-muted mb-10">Last Updated: 6 October 2026</p>

        <Section n="1" title="Introduction">
          <p>
            Design Vidya (&ldquo;Design Vidya&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates an online education
            and learning platform providing courses, workshops, masterclasses,
            learning resources, mentorship, industry-expert interactions and
            related educational services (collectively, the
            &ldquo;Services&rdquo;). The Services may be made available through
            our website, online learning platform, applications, forms and other
            digital channels (collectively, the &ldquo;Platform&rdquo;). These
            Terms and Conditions of Access or Use (&ldquo;Terms&rdquo;) govern
            your access to and use of the Platform and Services. By accessing,
            registering on, purchasing from, or otherwise using the Platform or
            Services, you acknowledge that you have read, understood and agree
            to be legally bound by these Terms and our{" "}
            <PrivacyPolicyLink>Privacy Policy</PrivacyPolicyLink>. If you do not
            agree to these Terms, you must not access or use the Platform or
            Services.
          </p>
        </Section>

        <Section n="2" title="Definitions">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold text-text">
                &ldquo;Account&rdquo;
              </span>{" "}
              means a user account created to access features of the Platform.
            </li>
            <li>
              <span className="font-semibold text-text">&ldquo;Course&rdquo;</span>{" "}
              means an educational course, program, workshop, masterclass or
              learning product made available through Design Vidya.
            </li>
            <li>
              <span className="font-semibold text-text">
                &ldquo;Course Fee&rdquo;
              </span>{" "}
              means the price payable for a Course or other paid Service.
            </li>
            <li>
              <span className="font-semibold text-text">
                &ldquo;Content&rdquo;
              </span>{" "}
              means text, graphics, images, audio, video, software, documents,
              assignments, educational material and other material made
              available through the Platform.
            </li>
            <li>
              <span className="font-semibold text-text">
                &ldquo;Design Vidya Content&rdquo;
              </span>{" "}
              means Content created, owned, licensed or lawfully made available
              by Design Vidya.
            </li>
            <li>
              <span className="font-semibold text-text">
                &ldquo;User Content&rdquo;
              </span>{" "}
              means content submitted, uploaded, posted or otherwise provided by
              a user, including assignments, reviews, comments, project work and
              feedback.
            </li>
            <li>
              <span className="font-semibold text-text">
                &ldquo;Student&rdquo; or &ldquo;Learner&rdquo;
              </span>{" "}
              means a person who accesses or enrols in a Course or uses the
              educational Services.
            </li>
            <li>
              <span className="font-semibold text-text">
                &ldquo;Instructor&rdquo;
              </span>{" "}
              means a person engaged or approved by Design Vidya to create,
              teach, mentor or deliver educational content or Services.
            </li>
            <li>
              <span className="font-semibold text-text">
                &ldquo;Industry Expert&rdquo;
              </span>{" "}
              means a professional or practitioner whose profile or expertise
              may be made available for educational interaction, mentorship or
              expert-connect services.
            </li>
            <li>
              <span className="font-semibold text-text">
                &ldquo;Platform&rdquo;
              </span>{" "}
              means the Design Vidya website, applications, learning interfaces,
              forms and related digital services.
            </li>
          </ul>
        </Section>

        <Section n="3" title="Acceptance of Terms">
          <p>
            By using the Platform or Services, you agree to comply with these
            Terms, the <PrivacyPolicyLink>Privacy Policy</PrivacyPolicyLink>,
            applicable course-specific terms, refund policies and other policies
            published by Design Vidya. Certain Courses or Services may have
            additional terms. Where additional terms apply, they form part of
            your agreement with Design Vidya for that Course or Service. If you
            use the Platform on behalf of an organization, institution or other
            legal entity, you represent that you have authority to bind that
            entity to these Terms.
          </p>
        </Section>

        <Section n="4" title="Eligibility">
          <p>
            You must be legally capable of entering into a binding agreement
            under applicable Indian law to create an Account and purchase
            Services. Where a Course or Service is offered to a minor,
            registration, purchase or participation must be carried out with the
            involvement and consent of a parent or lawful guardian where
            required by applicable law. Design Vidya may restrict or refuse
            access where a user is unable to comply with applicable legal
            requirements or has previously had access suspended or terminated
            for violation of these Terms.
          </p>
        </Section>

        <Section n="5" title="Use of the Platform and Services">
          <p>
            Design Vidya provides an online learning environment through which
            users may discover, purchase, access and participate in educational
            Courses and related Services. Course descriptions, syllabus,
            duration, delivery format, schedules, inclusions and pricing may be
            displayed on the relevant Course page and may vary between Courses.
            Design Vidya may update, modify, suspend or discontinue any feature,
            Course, instructor, content or part of the Platform where reasonably
            necessary for operational, educational, technical, legal or business
            reasons.
          </p>
        </Section>

        <Section n="6" title="Account Registration">
          <p>
            Certain features require you to create an Account. You agree to
            provide accurate, current and complete information and to keep it
            updated. You must not create an Account using false identity
            information or impersonate another person. You are responsible for
            safeguarding your login credentials and for activities carried out
            through your Account. You must promptly notify Design Vidya if you
            believe that your Account has been accessed without authorization.
            Design Vidya may suspend or terminate an Account where information
            is materially inaccurate, fraudulent, misleading, or where the
            Account is used in violation of these Terms.
          </p>
        </Section>

        <Section n="7" title="Courses, Content and Learning Services">
          <p>
            Course content may include recorded lectures, live classes,
            demonstrations, downloadable resources, assignments, projects,
            assessments, community interaction and other educational material.
            The exact contents of a Course are determined by the applicable
            Course listing. Course access is generally provided for the period
            or duration specified on the applicable Course page. Unless
            expressly permitted by Design Vidya, Course access is personal to
            the enrolled user and may not be transferred, sold, shared or
            sublicensed. Educational outcomes may vary between learners. Design
            Vidya does not guarantee employment, income, examination results,
            admission, promotion, certification by an external body, or any
            particular professional outcome unless expressly stated in writing
            for a specific Service.
          </p>
        </Section>

        <Section n="8" title="Instructors and Industry Experts">
          <p>
            Design Vidya may work with instructors, mentors and industry experts
            to deliver educational Services. Their profiles, qualifications,
            experience and areas of expertise may be presented on the Platform
            based on information available to Design Vidya. An interaction with
            an instructor or industry expert does not create an employment,
            agency, partnership or joint venture relationship between the user
            and Design Vidya or between the user and the expert, except where
            expressly stated. Users must communicate respectfully with
            instructors and experts and must not request or exchange
            inappropriate, unlawful, confidential or unrelated personal
            information.
          </p>
        </Section>

        <Section n="9" title="Payments, Fees and Taxes">
          <p>
            Course Fees and applicable taxes will be displayed before
            completion of a paid transaction. Payments may be processed through
            authorized third-party payment gateways. Users agree to provide
            accurate billing and payment information and authorize the
            applicable payment provider to process the transaction. Design Vidya
            may issue invoices, receipts or payment confirmations in accordance
            with applicable law. Applicable GST or other taxes may be charged
            where required.
          </p>
        </Section>

        <Section n="10" title="Cancellations and Refunds">
          <p>
            Cancellation and refund eligibility will be governed by the refund
            or cancellation policy displayed for the relevant Course or Service
            at the time of purchase. Where no separate refund policy is
            displayed, Design Vidya&rsquo;s general refund policy will apply.
            Refunds, where approved, may be subject to payment gateway charges,
            applicable taxes, processing timelines and other conditions stated
            in the applicable refund policy. Access to a Course may be suspended
            or revoked following an approved refund where appropriate.
          </p>
        </Section>

        <Section n="11" title="User Conduct">
          <p>You agree that you will not:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Use the Platform for unlawful, fraudulent, abusive, harassing or
              harmful purposes.
            </li>
            <li>
              Impersonate another person or misrepresent your identity,
              qualifications or affiliation.
            </li>
            <li>
              Share, resell, sublicense, reproduce or commercially exploit paid
              Course access without written permission.
            </li>
            <li>
              Copy, download, record, redistribute or republish Course videos or
              other protected Content except where expressly permitted.
            </li>
            <li>
              Use bots, crawlers, scraping tools or automated methods to extract
              data from the Platform.
            </li>
            <li>
              Attempt to gain unauthorized access to accounts, systems, networks
              or non-public areas of the Platform.
            </li>
            <li>
              Upload malware, viruses, harmful code or material intended to
              disrupt the Platform.
            </li>
            <li>
              Post content that infringes intellectual property, privacy,
              publicity or other rights of another person.
            </li>
            <li>
              Harass, threaten, discriminate against or abuse another user,
              instructor, employee or expert.
            </li>
            <li>
              Use the Platform to promote unrelated commercial services, spam or
              unauthorized advertising.
            </li>
            <li>
              Circumvent payment systems or attempt to avoid fees payable for
              Services.
            </li>
            <li>
              Use another person&rsquo;s account or allow another person to use
              your account.
            </li>
            <li>
              Interfere with the learning experience, live classes, discussions
              or community spaces.
            </li>
            <li>
              Submit content that is unlawful, defamatory, obscene, hateful,
              threatening, sexually explicit or otherwise inappropriate.
            </li>
          </ul>
        </Section>

        <Section n="12" title="Intellectual Property">
          <p>
            The Platform, Design Vidya Content, branding, logos, trademarks,
            course structure, graphics, videos, text, software, educational
            materials and other proprietary materials are owned by or licensed
            to Design Vidya and are protected by applicable intellectual
            property laws. Subject to your compliance with these Terms, Design
            Vidya grants you a limited, non-exclusive, non-transferable and
            revocable right to access and use purchased Course Content solely
            for your personal, non-commercial educational purposes. Except where
            expressly permitted, you may not copy, reproduce, record, modify,
            translate, distribute, publish, sell, license, transmit, publicly
            display, commercially exploit or create derivative works from Design
            Vidya Content.
          </p>
        </Section>

        <Section n="13" title="User Content">
          <p>
            Where the Platform permits users to submit assignments, projects,
            reviews, comments, feedback, portfolio material or other User
            Content, you remain responsible for that content and represent that
            you have the necessary rights and permissions to submit it. You
            grant Design Vidya a non-exclusive, royalty-free, limited licence to
            host, store, reproduce and display User Content to the extent
            reasonably necessary to operate, provide and improve the Services.
            Any promotional use of identifiable user content will be subject to
            applicable law and required permissions.
          </p>
        </Section>

        <Section n="14" title="Feedback">
          <p>
            Feedback, suggestions and recommendations provided by users may be
            used by Design Vidya to improve its Platform, Courses and Services.
            By submitting feedback, you agree that Design Vidya may use such
            feedback without creating an obligation to compensate you, subject to
            applicable law.
          </p>
        </Section>

        <Section n="15" title="Third-Party Services and Links">
          <p>
            The Platform may use or link to third-party services, including
            payment gateways, communication tools, videoconferencing platforms,
            cloud services, online forms, analytics services and social media
            platforms. Third-party services are governed by their own terms and
            privacy policies. Design Vidya is not responsible for the
            independent operation or policies of third-party services.
          </p>
        </Section>

        <Section n="16" title="Privacy">
          <p>
            Design Vidya collects and processes personal information in
            accordance with its <PrivacyPolicyLink>Privacy Policy</PrivacyPolicyLink>
            . By using the Platform, you acknowledge that you have reviewed the
            Privacy Policy and understand how your information may be
            collected, used, stored and shared as described there. The Privacy
            Policy forms part of these Terms and is available through the
            Design Vidya Platform.
          </p>
        </Section>

        <Section n="17" title="Child Safety">
          <p>
            Design Vidya is committed to maintaining a safe learning
            environment. In any Service involving children or minors, users,
            instructors, experts, employees and other participants must maintain
            appropriate professional boundaries and respectful conduct.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Do not engage in abusive, exploitative, threatening or sexually
              inappropriate behaviour toward a child.
            </li>
            <li>
              Do not request unnecessary personal or confidential information
              from a child.
            </li>
            <li>
              Do not share a child&rsquo;s photograph, video or personal
              information without appropriate authorization.
            </li>
            <li>
              Do not use inappropriate, discriminatory, intimidating or
              sexually suggestive language.
            </li>
            <li>
              Any suspected child-safety concern should be reported to Design
              Vidya immediately through the designated grievance or support
              channel.
            </li>
          </ul>
        </Section>

        <Section n="18" title="Reporting Misconduct">
          <p>
            If you experience or observe harassment, abuse, inappropriate
            conduct, intellectual-property infringement, fraud, security
            concerns or other serious misconduct connected with the Platform,
            please report it to Design Vidya through the official support or
            grievance contact details. Where appropriate, users should also
            contact relevant law-enforcement or emergency authorities.
          </p>
        </Section>

        <Section n="19" title="Suspension and Termination">
          <p>
            Design Vidya may suspend, restrict or terminate access to an
            Account, Course or the Platform where reasonably necessary,
            including for material breach of these Terms, fraudulent activity,
            unauthorized sharing of Course Content, abusive behaviour,
            payment-related issues, security concerns, unlawful activity or
            actions that may harm users or the Platform. You may stop using the
            Services at any time. Termination or suspension does not
            automatically create an entitlement to a refund; refund eligibility
            will depend on the applicable refund policy and circumstances.
          </p>
        </Section>

        <Section n="20" title="Disclaimer of Warranties">
          <p>
            To the maximum extent permitted by applicable law, the Platform and
            Services are provided on an &ldquo;as available&rdquo; and
            &ldquo;as is&rdquo; basis. Design Vidya does not warrant that the
            Platform will always be uninterrupted, error-free, secure or
            available at all times. Design Vidya does not guarantee the
            accuracy, completeness or suitability of every piece of educational
            content, third-party resource or user-generated material. Users
            should exercise appropriate judgment when applying educational
            information to professional or practical situations.
          </p>
        </Section>

        <Section n="21" title="Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, Design Vidya and
            its officers, employees, contractors, instructors and service
            providers will not be liable for indirect, incidental, special,
            consequential or punitive losses arising from use of the Platform or
            Services, including loss of data, business opportunity, goodwill,
            income or anticipated results, except where such limitation is
            prohibited by law. Nothing in these Terms is intended to exclude or
            limit liability that cannot lawfully be excluded or limited under
            applicable law.
          </p>
        </Section>

        <Section n="22" title="Indemnification">
          <p>
            To the extent permitted by law, you agree to indemnify and hold
            harmless Design Vidya and its officers, employees, contractors and
            service providers from claims, losses, liabilities and reasonable
            expenses arising from your breach of these Terms, unlawful use of
            the Platform, infringement of third-party rights, or User Content
            submitted by you.
          </p>
        </Section>

        <Section n="23" title="Modification of Services and Terms">
          <p>
            Design Vidya may modify these Terms from time to time to reflect
            changes in Services, technology, business practices or applicable
            law. Updated Terms will be posted on the Platform with a revised
            effective date. Where required by law, we will provide additional
            notice or obtain consent for material changes. Continued use of the
            Platform after an updated version becomes effective constitutes
            acceptance of the revised Terms, to the extent permitted by law.
          </p>
        </Section>

        <Section n="24" title="Notices">
          <p>
            Notices relating to your Account or use of the Services may be
            provided through email, the Platform, in-app notifications or other
            contact details associated with your Account. You are responsible
            for maintaining accurate contact information.
          </p>
        </Section>

        <Section n="25" title="Governing Law and Jurisdiction">
          <p>
            These Terms shall be governed by the laws of India, subject to
            applicable law. Any dispute arising from or relating to these Terms
            or the Services shall be subject to the jurisdiction of the courts
            specified by Design Vidya in its final legal and corporate
            documentation, subject to applicable law. If Design Vidya elects to
            use arbitration for a particular dispute, such arbitration shall be
            conducted in accordance with the Arbitration and Conciliation Act,
            1996, as amended, and on terms separately communicated or agreed
            between the parties.
          </p>
        </Section>

        <Section n="26" title="No Waiver">
          <p>
            Failure by Design Vidya to enforce any provision of these Terms
            shall not constitute a waiver of its right to enforce that
            provision in the future. If any provision is held invalid or
            unenforceable, the remaining provisions will continue to the extent
            permitted by law.
          </p>
        </Section>

        <Section n="27" title="Entire Agreement">
          <p>
            These Terms, together with the{" "}
            <PrivacyPolicyLink>Privacy Policy</PrivacyPolicyLink>, applicable
            refund policy, Course-specific terms and other policies expressly
            incorporated by reference, constitute the agreement between you and
            Design Vidya concerning your use of the Platform and Services,
            subject to any separate written agreement that expressly applies to
            a particular Service.
          </p>
        </Section>

        <Section n="28" title="Contact Information" id="contact">
          <p>
            For questions, complaints, notices or requests relating to these
            Terms, please contact Design Vidya using the official contact
            information below:
          </p>
          <ul className="list-none space-y-1.5">
            <li>
              <span className="font-semibold text-text">Company:</span> Design
              Vidya
            </li>
            <li>
              <span className="font-semibold text-text">Website:</span>{" "}
              <a
                href="https://www.designvidya.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.designvidya.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-text">Email:</span>{" "}
              <a
                href="mailto:support@designvidya.com"
                className="text-primary hover:underline"
              >
                support@designvidya.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-text">Grievance Email:</span>{" "}
              <a
                href="mailto:grievance@designvidya.com"
                className="text-primary hover:underline"
              >
                grievance@designvidya.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-text">
                Registered Office:
              </span>{" "}
              [Complete Registered Office Address]
            </li>
            <li>
              <span className="font-semibold text-text">Phone:</span>{" "}
              7073722614
            </li>
            <li>
              <span className="font-semibold text-text">
                Grievance Officer / Authorized Contact:
              </span>{" "}
              [Name and Designation]
            </li>
          </ul>
        </Section>

        <Section n="29" title="Acknowledgement">
          <p className="uppercase">
            By accessing or using the Design Vidya Platform or Services, you
            acknowledge that you have read, understood and agree to these Terms
            and Conditions, together with the Design Vidya Privacy Policy and
            any applicable course-specific terms or policies.
          </p>
        </Section>

        <p className="text-sm text-muted leading-relaxed text-justify border-t border-border mt-10 pt-6">
          Design Vidya — Terms and Conditions · Last Updated: 6 October 2026
        </p>
      </div>
    </div>
  );
}
