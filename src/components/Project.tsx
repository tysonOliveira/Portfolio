import Image from "next/image";

export function Project() {
  return (
    <a className='w-96 h-96 p-5 bg-[#0f0f0f] cursor-pointer '  >
      <div className='rounded-lg w-full h-1 bg-[#E36125]' />

      <div className='flex gap-3 flex-col items-start p-5 font-semibold text-xl text-gray-100' >
        Projeto github
        <div className='w-full h-44 bg-slate-600 rounded-lg overflow-hidden '>

        </div>

        <div className='flex flex-col items-start gap-7 font-medium'>
          Plataforma de cursos
          <span className='font-light text-lg text-[#E36125]'>HTML, JavaScript, CSS3</span>
        </div>

      </div>
    </a>
  )
}