import { Poppins } from 'next/font/google'
import { data } from '../../data'
const poppins = Poppins({ subsets: ['latin'], weight: '400' })

const Projects = () => {
  return (
    <>
      <div className="min-h-screen px-4 md:p-12 text-gray-200">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
            <p className={`${poppins.className} text-lg text-gray-300 leading-relaxed`}>
              Currently building{' '}
              <a 
                href="https://www.pocketshuttle.app" 
                className="text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                Pocketshuttle
              </a>
              , a decentralized platform for music artistes and content managers.
              Below are my recent projects.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-4 mb-16">
            {data.map((project) => {
              const { projectName, stack, link, src, index } = project
              return (
                <div
                  key={index}
                  className="group border border-[#63f2b438] hover:border-[#63f2b4] bg-gradient-to-r from-slate-900/50 to-transparent p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#63f2b420]"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#63f2b4] transition-colors">
                        {projectName}
                      </h3>
                      <p className="text-sm text-gray-400">{stack}</p>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href={src}
                        className="px-4 py-2 bg-[#63f2b438] hover:bg-[#63f2b4] text-white rounded transition-colors duration-200 text-sm font-medium"
                      >
                        View Code
                      </a>
                      <a 
                        href={link}
                        className="px-4 py-2 border border-[#63f2b4] hover:bg-[#63f2b438] text-white rounded transition-colors duration-200 text-sm font-medium"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects