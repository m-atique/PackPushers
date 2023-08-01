import Link from "next/link"
import Image from "next/image"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { hero, heroHeader } from "@/config/contents"

export default function HeroHeader() {
  return (
    
    <section className="">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">
				<span className="">
                Send your money around the world with us.
                </span>
                
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-500">
            You can transfer your money from anywhere anytime to other people around the world.

				{/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem /</br> */}
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-blue-400 text-gray-900">Track A Package</a>
				{/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 bg-gray-900">Login</a> */}
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <Image
            src={hero.image}
            width={500}
            height={500}
            alt="Header image"
          />
			{/* <img src="assets/hero.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
		</div>
	</div>
</section>

  )
}