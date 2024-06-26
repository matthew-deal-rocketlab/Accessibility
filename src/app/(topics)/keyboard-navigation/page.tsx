import { codeToHtml } from 'shiki'

import BadForm from '@/components/keyboard/badForm'
import GoodForm from '@/components/keyboard/goodForm'
import Article from '@/components/ui/article'
import HeaderTag from '@/components/header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default async function Page() {
  const code = ` <Button
  type="button"
  onKeyDown={e => {
    if (e.key === 'Enter' || e.key === ' ') {
        handleClick()
    }
  }}
/>
`
  const html = await codeToHtml(code, {
    lang: 'javascript',
    theme: 'night-owl',
  })

  return (
    <main>
      <section>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Forms </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2">
                <BadForm />
                <GoodForm />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Things to consider </AccordionTrigger>
            <AccordionContent>
              <Article>
                <HeaderTag level="h2" text="Considerations" className="mb-4" />
                <p>
                  Other things to consider are things like how does a user using
                  a keyboard use a Button, or a Checkbox?
                </p>
                <HeaderTag
                  level="h3"
                  text="Button"
                  className="mb-4 mt-8 text-lg"
                />
                <p>
                  A button should be focusable and should be able to be
                  activated by pressing the Enter or Spacebar keys.
                </p>
                <p> The code to do that might look like this </p>
                <div
                  className="prose "
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <HeaderTag
                  level="h3"
                  text="Patterns"
                  className="mb-4 mt-8 text-lg"
                />
                <a
                  target="_blank"
                  className="text-blue-400 underline"
                  href="https://www.w3.org/WAI/ARIA/apg/patterns/">
                  ARIA patterns
                </a>
              </Article>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}
