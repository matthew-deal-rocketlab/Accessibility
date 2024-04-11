type ArticleProps = {
  children: React.ReactNode
}

export default function Article({ children }: ArticleProps) {
  return (
    <article className="mt-4 space-y-6 rounded-xl border border-slate-600 bg-zinc-800 p-8">
      {children}
    </article>
  )
}
