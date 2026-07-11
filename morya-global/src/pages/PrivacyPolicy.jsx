import { useEffect, useState } from 'react'
import PageTransition from '../components/PageTransition.jsx'
import SEO from '../components/SEO.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: [
      'Morya Global Enterprises ("Morya", "we", "us" or "our") provides industrial engineering, manufacturing, fabrication, plant maintenance and industrial product services. This Privacy Policy explains how we collect, use, disclose and protect information when you visit our website, submit an enquiry, request a quotation, or otherwise interact with us.',
      'By using this website or submitting your information to us, you agree to the practices described in this policy.',
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      'We may collect information you provide directly, such as your name, company name, designation, email address, phone number, project requirements and any documents shared as part of an enquiry or quotation request.',
      'We may also collect technical information automatically, including IP address, browser type, device information, pages visited and referring website, primarily through cookies and similar technologies.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    content: [
      'We use collected information to respond to enquiries and quotation requests, prepare technical proposals, deliver engineering, fabrication, maintenance and product services, process orders and contracts, and communicate project or service updates.',
      'We may also use information to improve our website, understand customer needs, and comply with applicable legal and regulatory obligations relevant to industrial manufacturing and supply.',
    ],
  },
  {
    id: 'quotation-and-enquiry-data',
    title: 'Quotation & Enquiry Requests',
    content: [
      'Information submitted through our enquiry or contact forms, including technical specifications and project details, is used solely to evaluate and respond to your request. This information may be shared internally with our engineering, sales and operations teams as necessary to prepare an accurate response.',
    ],
  },
  {
    id: 'customer-data',
    title: 'Customer Data',
    content: [
      'For active clients and ongoing projects, we may retain commercial and technical information such as purchase orders, drawings, specifications and correspondence for the duration of the business relationship and as required for legal, tax and warranty purposes.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies & Tracking Technologies',
    content: [
      'Our website may use cookies and similar technologies to remember preferences, understand website usage, and improve performance. You can control or disable cookies through your browser settings; doing so may affect certain website functionality.',
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: [
      'We implement reasonable technical and organizational measures to protect the information we hold from unauthorized access, alteration, disclosure or destruction. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing & Disclosure',
    content: [
      'We do not sell your personal information. We may share information with trusted vendors, sub-contractors, logistics partners or professional advisors strictly for the purpose of delivering our services, and with authorities where required by law or to protect our legal rights.',
    ],
  },
  {
    id: 'legal-compliance',
    title: 'Legal Compliance',
    content: [
      'We process and retain information in accordance with applicable Indian data protection and industrial regulatory requirements. Where local laws impose additional obligations, we aim to comply with those requirements as they apply to our operations.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights & Choices',
    content: [
      'You may request access to, correction of, or deletion of your personal information held by us, subject to applicable legal and contractual obligations, by contacting us using the details below.',
    ],
  },
  {
    id: 'policy-updates',
    title: 'Updates to This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The updated version will be posted on this page with a revised effective date.',
    ],
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: [
      'If you have questions about this Privacy Policy or how we handle your information, please contact us at enquiry@moryaglobal.com or through the contact details listed on our Contact page.',
    ],
  },
]

export default function PrivacyPolicy() {
  const [activeId, setActiveId] = useState(sections[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <PageTransition>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Morya Global Enterprises covering data collection, quotation enquiries, customer data, cookies, security and legal compliance."
        path="/privacy-policy"
      />

      <section className="border-b border-hairline bg-section-bg pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <RevealOnScroll>
            <p className="eyebrow text-gold-dark">Legal</p>
            <h1 className="mt-4 font-display text-display-lg font-extrabold text-primary-dark">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-muted">Effective Date: Placeholder Date</p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-6 md:grid-cols-[260px_1fr] md:gap-16 md:px-8">
          <aside className="hidden md:block">
            <div className="sticky top-28">
              <p className="eyebrow text-muted">On This Page</p>
              <nav className="mt-5 flex flex-col gap-1 border-l border-hairline pl-4">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`py-1.5 text-sm transition-colors duration-200 ${
                      activeId === section.id
                        ? 'font-semibold text-primary-dark'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="max-w-2xl space-y-16">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-display text-xl font-bold text-primary-dark md:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-sm leading-relaxed text-muted md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
