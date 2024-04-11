import Link from 'next/link'
import HeaderTag from '../components/header'
import { Links } from '@/constants'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="m-auto max-w-3xl p-24">
      <HeaderTag
        level="h1"
        text="Accessibility"
        className="mb-4 text-center text-6xl font-bold"
      />
      <p className="mb-20 text-center text-[12px] text-gray-500">
        Can you read this?
      </p>
      <section className="flex">
        <section className="flex-1">
          <HeaderTag
            level="h2"
            text="Topics"
            className="mb-4 mt-10 text-left text-4xl font-bold"
          />
          <ul className="mt-4 list-disc space-y-2 p-4 pl-5">
            {Links.map((route, index) => (
              <li key={index}>
                <Link
                  className="p-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
                  href={route.path}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <aside className="flex-1">
          <Image
            src="/image.png"
            width={500}
            height={500}
            alt="Aceessibility logo"
            className="object-cover"
          />
        </aside>
      </section>
    </main>
  )
}
