import Image from 'next/image'
import { Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react'
import { RiLinkedinLine, RiGithubFill, RiMailSendLine } from 'react-icons/ri';

// import logo from '../assets/Logo-tyson.png'
import logo from '../assets/g2785.png'

export function Header() {
  return (
    <div className='h-16 w-full flex fixed justify-between backdrop-blur-sm px-16 py-2 items-center border-b-[1px] border-[#68190E] max-md:justify-around max-md:px-0 max-sm:flex-col max-sm:h-24'>
      <a href="#" className='w-60 relative cursor-default' >
        <Image src={logo} alt="" />
      </a>

      <div className='flex gap-5 text-gray-300 relative '>
        <a href="https://www.linkedin.com/in/thaison-oliveira-68a263160/" className='hover:text-[#E36125] transition' >
          <RiLinkedinLine size={36} />
        </a>
        <a href="https://github.com/tysonOliveira" className='hover:text-[#E36125] transition' >
          <RiGithubFill size={36} />
        </a>
      </div>
    </div>
  )
}