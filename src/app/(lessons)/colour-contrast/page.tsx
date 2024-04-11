import HeaderTag from '@/components/header'
import Article from '@/components/ui/article'

export default function Page() {
  return (
    <main>
      <section className="space-y-4 ">
        <Article>
          <p>
            Colour contrast is the difference in brightness between the text and
            the background. Its important to ensure that text is readable by
            everyone, including those with visual impairments.
          </p>
          <p>
            The Web Content Accessibility Guidelines (WCAG) recommend a contrast
            ratio of at least 4.5:1 for normal text and 3:1 for large text.
          </p>
          <p>
            To check the contrast ratio of your text, you can use a tool like{' '}
            <a
              href="https://contrastchecker.com/"
              target="_blank"
              className="text-blue-400 underline">
              CONTRAST CHECKER
            </a>
            .
          </p>

          <HeaderTag level="h2" text="Examples" />
          <p>
            Here are some examples of text with good and bad contrast ratios.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <p className="rounded-md bg-black p-2 text-white">
                Good contrast ratio: <strong>20:1</strong>
              </p>
            </li>
            <li>
              <p className="rounded-md bg-gray-600 p-2 text-white">
                Good contrast ratio: <strong>7:1</strong>
              </p>
            </li>
            <li>
              <p className="rounded-md bg-gray-500 p-2 text-white">
                Ok contrast ratio: <strong>2:1</strong>
              </p>
            </li>
            <li>
              <p className="rounded-md bg-gray-400 p-2 text-white">
                Bad contrast ratio: <strong>1:1</strong>
              </p>
            </li>
          </ul>

          <HeaderTag level="h2" text="Colour Examples" />
          <p>
            Here are some examples of text with good and bad contrast ratios
            with colour.
          </p>
          <ul className="flex flex-col space-y-4">
            {/* Good Contrast Examples */}
            <li>
              <p className="rounded-md bg-blue-700 p-2 text-blue-50">
                Good contrast ratio: Blue text on dark blue background
              </p>
            </li>
            <li>
              <p className="rounded-md bg-green-700 p-2 text-green-50">
                Good contrast ratio: Green text on dark green background
              </p>
            </li>

            {/* Bad Contrast Examples */}
            <li>
              <p className="rounded-md bg-yellow-200 p-2 text-yellow-600">
                Bad contrast ratio: Yellow text on light yellow background
              </p>
            </li>
            <li>
              <p className="rounded-md bg-red-200 p-2 text-red-500">
                Bad contrast ratio: Red text on light red background
              </p>
            </li>
          </ul>
        </Article>
      </section>
    </main>
  )
}
