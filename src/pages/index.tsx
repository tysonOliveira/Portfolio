import { useEffect, useState } from 'react'
import Image from 'next/image'
import ScrollReveal from 'scrollreveal'
import { useForm, useWatch, Control } from 'react-hook-form'
import { ImSpinner10, ImSpinner3 } from 'react-icons/im'
import { CgSpinnerTwo } from 'react-icons/cg'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Project } from '../components/Project'
import { Skill } from '../components/Skills'

type FormValues = {
  firstName: string;
  email: string;
  text: string;
};

function IsolateReRender({ control }: { control: Control<FormValues> }) {
  const firstName = useWatch({
    control,
    name: "firstName",
    defaultValue: "default"
  });

  return <div>{firstName}</div>;
}

export default function Home() {
  const { register, control, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => console.log(data));

  // onsole.log(register)

  return (
    <div className="bg-background-900 text-gray-100 ">
      <Header />
      <Banner />

      <div className='bg-background-800 h-96 mx-28 my-5 mt-32 mb-60 p-5 rounded'>
        <div className='rounded-lg w-full h-1 ' />
        <div className='flex gap-5 p-5'>

          <div className='w-60 h-72 bg-slate-600 border-4 overflow-hidden border-[#68190E] rounded'>

          </div>

          <div className='w-3/4'>
            <h2 className='font-bold text-2xl mt-5' >Sobre mim </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In praesentium voluptas, reprehenderit rerum quas animi labore cupiditate dolorem quis ad vero, consectetur quia reiciendis laudantium ex earum cumque culpa repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis omnis mollitia quaerat veniam animi quasi quo suscipit velit ex iste cumque deserunt doloribus minima consectetur quis, atque perspiciatis aliquam. Similique?
            </p>
          </div>
        </div>
      </div>

      <div className='h-[700px] flex flex-col'>
        <h2 className='text-4xl font-bold mx-28 mb-5 text-gray-100 border-l-4 border-orange-500 px-1' >
          Projetos
        </h2>
        <div className='flex flex-wrap justify-around gap-5 mx-28 '>

          <Project />
          <Project />
          <Project />
        </div>
      </div>

      <div className={`h-[700px] flex flex-col`}>
        <div>
          <h2 className='text-4xl font-bold mx-28 mb-5 text-gray-100 border-l-4 border-orange-500 px-1' >Habilidades</h2>
        </div>
        <Skill />
      </div>

      {/* <h2 className='text-4xl font-bold mx-28 mb-5 text-gray-100 border-l-4 border-orange-500 px-1' >Habilidades</h2> */}

      <div className='bg-background-800 py-5 flex items-center justify-center max-lg:gap-10 max-lg:flex-col' >
        <div className='flex flex-col items-center w-1/2 text-2xl '>
          Thaison Reis de Oliveira
        </div>

        <div className='absolute w-[1px] h-80 bg-neutral-800 max-lg:max-w-0' />

        <div className='flex w-1/2 justify-center'>
          <form onSubmit={onSubmit} className='flex flex-col w-80 gap-3' >
            <label htmlFor="" className='text-2xl' >Contato</label>
            <input
              {...register("firstName", { required: true })}
              maxLength={50}
              placeholder="Nome"
              className='rounded outline-none border-2 border-neutral-800 focus:border-orange-500 p-1 bg-background-800 placeholder-neutral-700'
            />

            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="E-Mail"
              className='rounded outline-none border-2 border-neutral-800 focus:border-orange-500 p-1 bg-background-800 placeholder-neutral-700'
            />

            <textarea
              {...register("text", { required: true })}
              maxLength={1000}
              placeholder="Mensagem"
              className='outline-none border-2 border-neutral-800 focus:border-orange-500 p-1 rounded h-40 bg-background-800 placeholder-neutral-700'
            />

            {/*<CgSpinnerTwo size={20} className='animate-spin text-teal-400' />*/}

            <input
              type="submit"
              value="Enviar"
              className={`w-80 bg-orange-500 rounded hover:bg-orange-700 `}
            />
          </form>
        </div>
      </div>
    </div>
  )
}
