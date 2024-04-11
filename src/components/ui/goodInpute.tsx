'use client'

import { cn } from '@/lib/utils'
import { Input } from './input'

type GoodInputProps = {
  field: any
  placeHolder?: string
  className?: string
}

export default function GoodInput({
  field,
  placeHolder,
  className,
}: GoodInputProps) {
  return (
    <Input
      placeholder={placeHolder}
      {...field}
      className={cn(
        'w-full rounded-md p-2',
        'placeholder:text-gray-400 ',
        'focus:border-2 focus:border-white',
        className,
      )}
    />
  )
}
