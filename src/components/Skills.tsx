import { SiCss3, SiHtml5, SiJavascript, SiReact, SiGit, SiGithub, SiTailwindcss, SiDocker } from 'react-icons/si';
import { MdOutlineDevices } from 'react-icons/md'

export function Skill() {
  return (
    <div className='bg-[#0f0f0f] text-black  mx-28 mb-32 p-5'>
      <div className='rounded-lg w-full h-1 bg-[#E36125]' />

      <div className='flex flex-wrap justify-center gap-5 text-[#E36125] p-5'>
        <span className='flex flex-col gap-2 items-center hover:text-gray-100 transition'>
          <SiCss3 size={96} />
          CSS3
        </span>
        <span className='flex flex-col gap-2 items-center hover:text-gray-100 transition'>
          <SiHtml5 size={96} />
          HTML5
        </span>
        <span className='flex flex-col gap-2 items-center hover:text-gray-100 transition'>
          <SiJavascript size={96} />
          JavaScript
        </span>
        <span className='flex flex-col gap-2 items-center hover:text-gray-100 transition'>
          <SiReact size={96} />
          React
        </span>
        <span className='flex flex-col gap-2 items-center hover:text-gray-100 transition'>
          <SiGit size={96} />
          Git
        </span>
        <span className='flex flex-col gap-2 items-center hover:text-gray-100 transition'>
          <SiGithub size={96} />
          GitHub
        </span>
        <span className='flex flex-col gap-2 items-center hover:text-gray-100 transition'>
          <SiTailwindcss size={96} />
          Tailwindcss
        </span>
        <span className='flex flex-col gap-2 items-center hover:text-gray-100 transition'>
          <SiDocker size={96} />
          Docker
        </span>
        <span className='flex flex-col gap-2 items-center hover:text-gray-100 transition'>
          <MdOutlineDevices size={96} />
          Responsive Design
        </span>
      </div>
    </div>
  )
}
