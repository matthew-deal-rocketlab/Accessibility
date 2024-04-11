import React from 'react'
import { Card } from './card'
import HeaderTag from '../header'

type WCAGStandardsCardProps = {
  title: string
  standards: string[]
}

const WCAGStandardsCard: React.FC<WCAGStandardsCardProps> = ({
  title,
  standards,
}) => {
  return (
    <Card className="max-w-md space-y-4 overflow-hidden rounded-lg border-2 bg-zinc-800 p-6 shadow-lg *:text-white">
      <HeaderTag className="text-xl font-bold " level="h2" text={title} />
      <ul className="prose list-disc space-y-2 pl-5 text-lg ">
        {standards.map((standard, index) => (
          <li key={index}>{standard}</li>
        ))}
      </ul>
    </Card>
  )
}

export default WCAGStandardsCard
