import Link from "next/link"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import logo from "@/assets/images/logo.png"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-8">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={logo} alt="logo" className="h-auto flex-wrap w-20"/>
        <span className="inline-block text-xl font-bold">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}
