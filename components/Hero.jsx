import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

const Hero = () => {
  return (
    <div>
      <div className="mt-16 sm:mt-96">
        <p
          className={`${rubik.className} text-5xl md:text-6xl w-11/12 lg:w-10/12 font-semibold`}
        >
          <small className="text-[#28C76F]">i</small> Design, Build & Code
          Digital Products
        </p>

        <p className="mt-28 text-[16px] text-gray-300 max-w-3xl">
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
