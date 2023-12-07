'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathName = usePathname()
  let isActive = false

  if (pathName === Link) {
    isActive = true
  }

  return (
    <div>
      <nav className="h-24 bg-gradient-to-b from-black to-gray-900">
        <ul className=" flex items-center justify-between p-8 text-gray-400">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li
            onClick={() =>
              (window.location.href = 'https://medium.com/AbuSantos')
            }
          >
            Articles
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
