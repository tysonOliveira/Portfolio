import Image from 'next/image'
import { RiLinkedinLine, RiGithubFill, RiContactsLine, RiContactsBook2Line } from 'react-icons/ri';



// import logo from '../assets/Logo-tyson.png'
import logo from '../assets/g855.png'

export function Header() {
  return (
    <div className='h-16 w-full flex fixed justify-between backdrop-blur-sm px-16 py-2 items-center border-b-[1px] border-[#68190E] border-opacity-50 max-md:justify-around max-md:px-0 max-sm:flex-col max-sm:h-24 z-30'>
      <a href="#" className='w-60 relative cursor-default' >
        <Image src={logo} alt="" className='w-44' />
      </a>

      <div className='flex gap-5 text-gray-300'>
        <a href="https://www.linkedin.com/in/thaison-oliveira-68a263160/" className='hover:text-[#E36125] transition'  >
          <RiLinkedinLine size={35} />
        </a>
        <a href="https://github.com/tysonOliveira" className='hover:text-[#E36125] transition' >
          <RiGithubFill size={35} />
        </a>
        <a href="" className='hover:text-[#E36125] transition' >
          <RiContactsBook2Line size={35} />
        </a>
      </div>
    </div>
  )
}
