import HeaderTag from '@/components/header'
import Article from '@/components/ui/article'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Page() {
  return (
    <main>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
        target="_blank"
        className="text-blue-400 underline">
        MDN HTML Elements Reference
      </a>
      <section>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Semantic HTML </AccordionTrigger>
            <AccordionContent>
              {' '}
              <Article>
                <section>
                  <HeaderTag
                    level="h2"
                    text="Nav"
                    className="text-2xl font-semibold"
                  />
                  <p>
                    Defines a block of navigation links. Ideal for the main menu
                    of a website.
                  </p>
                  <p className="mt-2 w-fit rounded-lg bg-zinc-700 p-2">
                    {'<nav />'}
                  </p>
                </section>

                <section>
                  <HeaderTag
                    level="h2"
                    text="Main"
                    className="text-2xl font-semibold"
                  />
                  <p>
                    Specifies the main content of a document. Important for
                    accessibility, as it allows screen readers to quickly
                    navigate to the main content.
                  </p>
                  <p className="mt-2 w-fit rounded-lg bg-zinc-700 p-2">
                    {'<main />'}
                  </p>
                </section>

                <section>
                  <HeaderTag
                    level="h2"
                    text="Header"
                    className="text-2xl font-semibold"
                  />
                  <p>
                    Defines the header of a page or section. Typically contains
                    navigational elements or introductory content.
                  </p>
                  <p className="mt-2 w-fit rounded-lg bg-zinc-700 p-2">
                    {'<header />'}
                  </p>
                </section>

                <section>
                  <HeaderTag
                    level="h2"
                    text="Heading Tags"
                    className="text-2xl font-semibold"
                  />
                  <p className="mb-2">
                    Represents headings in a document. Ranges from h1 (most
                    important) to h6 (least important).
                  </p>

                  <span className="mr-2 w-fit rounded-lg bg-zinc-700 p-2">
                    {'<h1 />'}
                  </span>
                  <span className="w-fit rounded-lg bg-zinc-700 p-2">
                    {' '}
                    {'<h2 />'}
                  </span>
                </section>

                <section>
                  <HeaderTag
                    level="h2"
                    text="Article"
                    className="text-2xl font-semibold"
                  />
                  <p>
                    Defines content that stands alone and could be independently
                    distributed. Ideal for blog posts, news articles, etc.
                  </p>
                  <p className="mt-2 w-fit rounded-lg bg-zinc-700 p-2">
                    {'<article />'}
                  </p>
                </section>

                <section>
                  <HeaderTag
                    level="h2"
                    text="Section"
                    className="text-2xl font-semibold"
                  />
                  <p>
                    Represents a standalone section of content within a
                    document. Typically includes a heading.
                  </p>
                  <p className="mt-2 w-fit rounded-lg bg-zinc-700 p-2">
                    {'<section />'}
                  </p>
                </section>

                <section>
                  <HeaderTag
                    level="h2"
                    text="Aside"
                    className="text-2xl font-semibold"
                  />
                  <p>
                    Defines content indirectly related to the main content, such
                    as sidebars, call-out boxes, or advertisements.
                  </p>
                  <p className="mt-2 w-fit rounded-lg bg-zinc-700 p-2">
                    {' '}
                    {'<aside/>'}
                  </p>
                </section>

                <section>
                  <HeaderTag
                    level="h2"
                    text="Footer"
                    className="text-2xl font-semibold"
                  />
                  <p>
                    Defines the footer of a document or section. Contains
                    information like copyright, authorship, and related links.
                  </p>
                  <p className="mt-2 w-fit rounded-lg bg-zinc-700 p-2">
                    {'<footer />'}
                  </p>
                </section>
                <section>
                  <HeaderTag
                    level="h2"
                    text="Many others"
                    className="text-2xl font-semibold"
                  />

                  <div className="mt-2 flex flex-row gap-1">
                    <span className="mr-2 w-fit rounded-lg bg-zinc-700 p-2">
                      {'<p />'}
                    </span>
                    <span className="mr-2 w-fit rounded-lg bg-zinc-700 p-2">
                      {'<div />'}
                    </span>
                    <span className="w-fit rounded-lg bg-zinc-700 p-2">
                      {'<strong />'}
                    </span>
                    <span className="w-fit rounded-lg bg-zinc-700 p-2">
                      {'<span />'}
                    </span>
                    <span className="mr-2 w-fit rounded-lg bg-zinc-700 p-2">
                      {'<i />'}
                    </span>
                    <span className="mr-2 w-fit rounded-lg bg-zinc-700 p-2">
                      {'<time />'}
                    </span>
                    <span className="mr-2 w-fit rounded-lg bg-zinc-700 p-2">
                      {'<address />'}
                    </span>
                    <span className="mr-2 w-fit rounded-lg bg-zinc-700 p-2">
                      {'and so on..'}
                    </span>
                  </div>
                </section>
              </Article>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}
