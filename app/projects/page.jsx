import { Poppins } from 'next/font/google'
import { data } from '../../data'
const poppins = Poppins({ subsets: ['latin'], weight: '400' })

const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-1 text-gray-200 mb-10">
        <p className={`${poppins.className}`}>
          Currently building{' '}
          <a href="https://www.bullchord.app" style={{ color: 'red' }}>
            {' '}
            Bullchord
          </a>
          , a decentralized platform for music artistes and content managers,
          below are my recent projects
        </p>
        <div className="mt-4 ">
          {data.map((project) => {
            const { projectName, stack, link, src, index } = project
            return (
              <div
                className="flex items-center border border-[#63f2b438] m-2 p-1"
                key={index}
              >
                <div className="mt-4">
                  <p>{projectName}</p>
                  <small className="truncate w-5">{stack}</small>
                </div>
                <div className="ml-4">
                  <a href={src}>view code</a> <a href="#">live demo</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Projects
