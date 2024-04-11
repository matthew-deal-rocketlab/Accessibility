import Nav from '@/components/ui/nav/nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="flex flex-col">
        <Nav />
        <div className="p-8">{children}</div>
      </div>
    </main>
  )
}
