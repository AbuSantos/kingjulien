import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

const Hero = () => {
  return (
    <div>
      <div className="mt-12 sm:mt-96">
        <p className={`${rubik.className} text-6xl w-10/12 font-semibold`}>
          <small className="text-[#28C76F]">I</small> Design, Build & Code
          Digital Products
        </p>

        <p className="mt-16 text-xl text-gray-300 max-w-3xl">
          I am a <strong>Front-End and Full Stack Developer</strong> with
          experience in <strong>Web3</strong>, <strong>UI/UX design</strong>,
          and <strong>product development</strong>. I build scalable,
          high-performance web applications and user-centered digital
          experiences.
        </p>
      </div>
    </div>
  )
}

export default Hero
