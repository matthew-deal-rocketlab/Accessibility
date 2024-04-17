import WCAGStandardsCard from '@/components/ui/standardsCard'
import { A, AA, AAA } from '@/data/data'

export default function Page() {
  return (
    <main>
      <a
        target="_blank"
        href="https://www.accessibility.org.au/guides/what-is-the-wcag-standard/#:~:text=In%20Australia%2C%20mainstream%20organisations%20are,at%20the%20AA%20conformance%20level"
        className="font-bold text-blue-500">
        WCAG Standards
      </a>
      <section className="mt-4 grid grid-cols-2 sm:grid-cols-3 ">
        <WCAGStandardsCard
          title="Level A - Basic Accessibility"
          standards={A}
        />
        <WCAGStandardsCard
          title="Level AA - Intermediate Accessibility"
          standards={AA}
        />
        <WCAGStandardsCard
          title="Level AAA - Advanced Accessibility
"
          standards={AAA}
        />
      </section>
    </main>
  )
}
