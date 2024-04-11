'use client'

import HeaderTag from '@/components/header'
import LinkButton from '../link'
import { routes } from '@/constants'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathName = usePathname()

  let heading = ''
  let nextRoute = ''
  let backRoute = ''

  switch (pathName) {
    case routes.semanticHtml:
      heading = 'Understanding Semantic HTML'
      backRoute = routes.home
      nextRoute = routes.colourContrast
      break
    case routes.colourContrast:
      heading = 'Colour Contrast'
      backRoute = routes.semanticHtml
      nextRoute = routes.keyboardNavigation
      break
    case routes.keyboardNavigation:
      heading = 'Keyboard Navigation'
      backRoute = routes.colourContrast
      nextRoute = routes.screenReaders
      break
    case routes.screenReaders:
      heading = 'Screen Readers'
      backRoute = routes.keyboardNavigation
      nextRoute = routes.otherRules
      break
    case routes.otherRules:
      heading = 'Accessibility Standards'
      backRoute = routes.screenReaders
      nextRoute = routes.home
      break
    default:
      heading = 'Understanding Semantic HTML'
      backRoute = routes.home
      nextRoute = routes.colourContrast
  }

  return (
    <nav className="mt-4 flex flex-row justify-between px-4">
      <section className="flex flex-col px-4">
        <LinkButton className="mb-2" href={backRoute}>
          {' '}
          Back{' '}
        </LinkButton>
        <HeaderTag
          level="h1"
          text={heading}
          className="mb-2 mt-2 text-3xl font-bold"
        />
      </section>
      <LinkButton href={nextRoute}> Next </LinkButton>
    </nav>
  )
}
