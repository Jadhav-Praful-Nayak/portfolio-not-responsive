import React from 'react'
import netflix from '../assets/netfliximage.png'
const portfolio = () => {
  const project=[
    {
      id:1,
      name:"Netflix Clone",
      img:netflix,
      SourceCodeLink:"https://github.com/Jadhav-Praful-Nayak/Netflix-clone-nextjs",
      LiveDemoLink:"https://netflix-clone-nextjs-hgm2rspap-jadhav-praful-nayaks-projects.vercel.app/login"

    },
    {
      id:2,
      name:"Netflix Clone",
      img:netflix,
      SourceCodeLink:"https://github.com/Jadhav-Praful-Nayak/Netflix-clone-nextjs",
      LiveDemoLink:"https://netflix-clone-nextjs-hgm2rspap-jadhav-praful-nayaks-projects.vercel.app/login"

    },
    {
      id:3,
      name:"Netflix Clone",
      img:netflix,
      SourceCodeLink:"https://github.com/Jadhav-Praful-Nayak/Netflix-clone-nextjs",
      LiveDemoLink:"https://netflix-clone-nextjs-hgm2rspap-jadhav-praful-nayaks-projects.vercel.app/login"

    }
  ]
  return (
    <div>
    <div id='portfolio' className='flex justify-center items-center flex-col mt-48 mb-40'>
    <div className="border-2 border-gray-400 px-[20rem] py-6">
          <h1 className="text-7xl font-extrabold tracking-widest text-center">Portfolio</h1>
        </div>
        <strong className="text-3xl mt-4 underline underline-offset-8">Projects</strong>
        <div className='mt-6 text-lg grid grid-cols-3 space-x-5'>
          {project.map((item)=>(
          <section key={item.id} className='border-2 border-blue-400 shadow-md shadow-orange-700  hover:scale-105 duration-300 hover:cursor-pointer'>
            <h1 className='text-center'>{item.name}</h1>
            <header>
              <img className='text-center' src={item.img} alt="Netflix image" width={400} height={400}/>
            </header>
            <footer className='flex justify-evenly mt-3 mb-3'>
              <a href={item.SourceCodeLink} target="_blank" rel="noopener noreferrer" className='border-2 bg-slate-400 px-3 py-2 rounded-md font-semibold active:text-black focus:bg-green-400'>Source Code</a>
              <a href={item.LiveDemoLink} target="_blank" rel="noopener noreferrer"  className='border-2 bg-slate-400 px-3 py-2 rounded-md font-semibold active:text-black focus:bg-green-400'>Live Demo</a>
            </footer>
          </section>
          ))}




        </div>
        

    </div>
    </div>
  )
}

export default portfolio