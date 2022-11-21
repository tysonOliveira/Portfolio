
export function Banner() {
  return (
    <div className='bg-banner bg-contain bg-no-repeat bg-right max-lg:bg-cover '>

      <div className='h-screen p-28 text-3xl flex items-center max-lg:justify-center max-lg:p-0' >
        <h1 className='flex flex-col font-light max-lg:items-center max-md:font-medium max-lg:text-gray-300'>
          Olá, eu sou
          <span className='my-1 text-6xl font-bold text-[#E36125] max-lg:text-gray-100 max-sm:text-4xl' > Thaison Oliveira </span>
          <span className='text-3xl font-semibold max-sm:text-xl max-lg:text-gray-300' >Desenvolvedor Front-End</span>
        </h1>
      </div>
    </div>
  )
}
