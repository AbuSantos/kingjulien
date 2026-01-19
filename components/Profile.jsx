import profilepicture from '@/public/profilepicture.svg'
import Image from 'next/image'

const Profile = () => {
  return (
    <>
      <div className="flex items-center space-x-4 mt-14 ">
        <div>
          <Image src={profilepicture} alt="profile-image" className="h-44 " />
        </div>
        <div className="">
          <p className="text-lg">Abusomwan</p>
          <div className="space-x-4 text-xl text-gray-300">
            <a href="https://www.linkedin.com/in/abusomwan-santos/">LinkedIn</a>
            <a href="https://dribbble.com/kingJulien">Dribbble</a>
            <a href="https://github.com/AbuSantos?tab=repositories">Github</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
