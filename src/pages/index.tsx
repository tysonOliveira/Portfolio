import Link from 'next/link'
import { Header } from '../components/Header'
import Image from 'next/image'
import { Banner } from '../components/Banner'
import { Project } from '../components/Project'
import { Footer } from '../components/Footer'
import { Skill } from '../components/Skills'

export default function Home() {
  return (
    <div className="bg-[#080808] text-white">
      <Header />
      <Banner />

      <div className='bg-[#0f0f0f] h-96 mx-28 my-5 mt-32 mb-32 p-5'>
        <div className='rounded-lg w-full h-1 bg-[#E36125]' />

        <div className='flex gap-5 p-5'>
          <div className='w-60 h-72 bg-slate-600 border-4 overflow-hidden border-[#68190E] '>
            <img src="https://img.freepik.com/fotos-gratis/silhueta-de-retrato-classico-do-homem_23-2149706985.jpg?w=740&t=st=1668926130~exp=1668926730~hmac=4d0387a9bd74cb45a762ff0702bed0ec1488554eedcca15450e78a11e41fae77" alt="" />
          </div>

          <div className='w-3/4'>
            <h2 className='font-bold text-2xl mt-5' >Sobre mim </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In praesentium voluptas, reprehenderit rerum quas animi labore cupiditate dolorem quis ad vero, consectetur quia reiciendis laudantium ex earum cumque culpa repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis omnis mollitia quaerat veniam animi quasi quo suscipit velit ex iste cumque deserunt doloribus minima consectetur quis, atque perspiciatis aliquam. Similique?
            </p>
          </div>
        </div>
      </div>

      <h2 className='text-2xl font-bold mx-28 mt-16 mb-5 text-gray-100 border-l-4 border-[#E36125] px-1' >Projetos realizados</h2>
      <div className='flex flex-wrap justify-center gap-5 mb-32 '>
        <Project />
        <Project />
        <Project />
      </div>

      <h2 className='text-2xl font-bold mx-28 mt-16 mb-5 text-gray-100 border-l-4 border-[#E36125] px-1' >Habilidades</h2>
      <Skill />
      <Footer />
    </div>
  )
}


