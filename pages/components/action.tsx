/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w9AZEZq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client';
import { Button, TextInput } from 'flowbite-react';
import Link from "next/link"

export default function Component() {
  return (
    <section className="h-screen py-6 md:py-12 lg:py-20 xl:py-24 bg-black">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 items-center">
      <div className="flex flex-col justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            訂閱我們的最新消息
          </h1>
          <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
            立刻訂閱，不錯過重大更新！
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2 mx-auto">
          <form className="flex space-x-2">
            <TextInput
              className="max-w-lg flex-1 bg-gray-800 text-white border-gray-900"
              placeholder="Enter your email"
              type="email"
            />
            <Button className="bg-white text-black" type="submit">
              訂閱
            </Button>
          </form>
          <p className="text-xs text-zinc-200 dark:text-zinc-100">
            訂閱前要接受我們的
            <Link className="underline underline-offset-2 text-white" href="/p">
              服務條款
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

