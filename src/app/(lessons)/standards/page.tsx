import WCAGStandardsCard from '@/components/ui/standardsCard'
import { A, AA, AAA } from '@/data/data'

export default function Page() {
  return (
    <main>
      <section className="grid grid-cols-2 sm:grid-cols-3">
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
