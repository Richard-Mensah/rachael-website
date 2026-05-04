import Hero from '@/components/features/home/Hero'
import ThesisSpotlight from '@/components/features/home/ThesisSpotlight'
import AboutSection from '@/components/features/home/AboutSection'
import ExpertiseGrid from '@/components/features/home/ExpertiseGrid'
import AcademicTimeline from '@/components/features/home/AcademicTimeline'
import CommunityPreview from '@/components/features/home/CommunityPreview'
import BlogPreview from '@/components/features/home/BlogPreview'
import ContactForm from '@/components/features/contact/ContactForm'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata = {
  title: 'Rachael Otuah | Finance Researcher & ESG Specialist',
  description:
    'MSc Accounting & Finance graduate, ESG researcher, and finance educator — bridging sustainability and financial performance.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThesisSpotlight />
      <AboutSection />
      <ExpertiseGrid />
      <AcademicTimeline />
      <CommunityPreview />
      <BlogPreview />

      {/* Contact Section */}
      <section id="contact" className="bg-brand-navy px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <SectionLabel className="mb-3 text-center">Get in Touch</SectionLabel>
          <h2 className="mb-3 text-3xl font-extrabold text-white md:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="mb-10 text-base text-brand-beige/70">
            Whether you&apos;re interested in research collaboration, speaking
            opportunities, or finance education — I&apos;d love to hear from you.
          </p>
          <ContactForm />
          <div className="mt-8 flex justify-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-sm text-brand-beige/50 hover:text-brand-gold transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-sm text-brand-beige/50 hover:text-brand-gold transition-colors">
              Twitter / X
            </a>
            <a href="mailto:rachael@example.com"
               className="text-sm text-brand-beige/50 hover:text-brand-gold transition-colors">
              Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
