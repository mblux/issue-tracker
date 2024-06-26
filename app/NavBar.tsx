"use client"
import classnames from "classnames"
import React from "react"
import Link from "next/link"
import { BsBugFill } from "react-icons/bs"
import { usePathname } from "next/navigation"

const NavBar = () => {
  //note: can only access browser APIs in client components.
  //this is why we translate this.
  const currentPath = usePathname()
  console.log(currentPath)

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },

    {
      label: "Issues",
      href: "/issues",
    },
  ]
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <BsBugFill />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
