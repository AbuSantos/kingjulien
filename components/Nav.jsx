'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathName = usePathname()
  //   let isActive = false

  const isActive = (pathname) => {
    return pathName === pathname ? 'text-[#28C76F]' : ''
  }

  return (
    <div>
      <nav className="h-24 bg-gradient-to-b from-black to-gray-900 ">
        <ul className=" flex items-center justify-between p-8 text-gray-400">
          <li className={`${isActive('/')}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${isActive('/about')}`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`${isActive('/projects')}`}>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <a
              href="https://medium.com/@abusomwansantos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500"
            >
              Articles
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
