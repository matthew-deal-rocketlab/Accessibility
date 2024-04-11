export const Links = [
  { name: 'Semantic HTML', path: '/semantic-html' },
  { name: 'Colour Contrast', path: '/colour-contrast' },
  { name: 'Keyboard Navigation', path: '/keyboard-navigation' },
  { name: 'Screen Readers and ARIA', path: '/screen-readers' },
  { name: 'Accessibility Standards', path: '/standards' },
] as const

export const routes = {
  home: '/',
  semanticHtml: '/semantic-html',
  colourContrast: '/colour-contrast',
  keyboardNavigation: '/keyboard-navigation',
  screenReaders: '/screen-readers',
  otherRules: '/standards',
} as const
