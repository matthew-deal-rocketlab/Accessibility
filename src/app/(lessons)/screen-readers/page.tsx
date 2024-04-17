'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function Page() {
  const [isChecked, setIsChecked] = useState(false)

  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <main>
      <a
        target="_blank"
        className="text-blue-500 underline"
        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques">
        Aria attributes{' '}
      </a>
      <section className="mx-auto mt-44 max-w-sm p-8">
        <div className="flex items-center space-x-4">
          <div
            onClick={toggleCheckbox}
            onKeyDown={e => e.key === ' ' && toggleCheckbox()}
            className={cn(
              `flex h-20 w-20 items-center justify-center rounded border-2 focus:border-4`,
              `${isChecked ? 'border-blue-500 bg-blue-500' : 'border-gray-400'} cursor-pointer`,
            )}>
            {isChecked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-check">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            )}
          </div>
          <label
            className="cursor-pointer select-none text-2xl"
            onClick={toggleCheckbox}>
            custom checkbox
          </label>
        </div>
      </section>
    </main>
  )
}

// role="checkbox"
// aria-checked={isChecked}
// tabIndex={0}
