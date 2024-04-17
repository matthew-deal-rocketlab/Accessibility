'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import HeaderTag from '../header'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  confirmPassword: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
})

export default function BadForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    form.reset()
  }

  return (
    <section className="p-8">
      <HeaderTag level="h2" text="Bad Form" className="mb-4" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Username</FormLabel>
                <FormControl>
                  <Input
                    tabIndex={1}
                    placeholder="Username"
                    {...field}
                    className="border-none placeholder:text-gray-700"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Password</FormLabel>
                <FormControl>
                  <Input
                    tabIndex={3}
                    placeholder="Password"
                    {...field}
                    className="border-none placeholder:text-gray-700"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    tabIndex={2}
                    placeholder="Confirm Password"
                    className="border-none placeholder:text-gray-700"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button tabIndex={4} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  )
}
