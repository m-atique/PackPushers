import Link from "next/link"
import Image from "next/image"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { featue1 } from "@/config/contents"

export default function FeatureSection1() {
  return (
    <section className="container">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                src={featue1.image}
                width={500}
                height={500}
                alt="Header image"
              />
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Transfer your money to other currency only using one apps.
              </h2>

              <p className="mt-4 text-gray-600">
                You can transfer your money to another currency from our apps. You don&apos;t need to exchange your money first.
              </p>

              {/* <a
                href="#"
                className="mt-8 inline-block rounded border border-indigo-600 bg-blue-400 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Get in Touch
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
