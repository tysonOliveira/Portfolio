export function Project() {
  return (
    <a className='w-96 h-96 p-5 bg-[#0f0f0f] cursor-pointer' href='#' >
      <div className='rounded-lg w-full h-1 bg-[#E36125]' />

      <div className='flex gap-3 flex-col items-start p-5 font-semibold text-xl text-gray-100' >
        Projeto github
        <div className='w-full h-44 bg-slate-600 rounded-lg overflow-hidden '>
          <img src="https://img.freepik.com/vetores-gratis/pagina-de-aterragem-de-tecnologia-com-foto-em-estilo-liquido_23-2148264603.jpg?w=996&t=st=1668926413~exp=1668927013~hmac=ec1544fa01f7c54ef1b92261916a75fea19c1f5cf88eb8239f495e147b70cd43" alt="" />
        </div>

        <div className='flex flex-col items-start gap-7 font-medium'>
          Plataforma de cursos
          <span className='font-light text-lg text-[#E36125]'>HTML, JavaScript, CSS3</span>
        </div>

      </div>
    </a>
  )
}