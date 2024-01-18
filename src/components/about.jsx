import React from 'react'

const About = () => {

  const acadamics = [
    {
      id: 1,
      Degree: "B.E (Computer Science and Engineering)",
      duration:"2019-2023",
      college: "University College of Engineering, Osmania University",
      cgpa: "8.14"
    },
    {
      id: 2,
      Degree: "MPC",
      duration:"2017-2019",
      college: "Sri Chaitanya Junior College",
      cgpa: 9.61
    },
    {
      id: 2,
      Degree: "SSC",
      duration:"2016-2017",
      college: "Vijaya High School",
      cgpa: 9.5
    }
  ]

  return (
    <>
<div id='about' className='container ml-24 flex justify-center items-center flex-col mt-44 mb-48'>
        <div className="border-2 border-gray-400 px-[15.7rem] py-6">
          <h1 className="text-7xl font-extrabold tracking-widest text-center">ABOUT ME</h1>

        </div>
        <div className='mt-24'>
          <p className='text-center'>I'm <strong className='text-xl font-serif'>Jadhav Praful Nayak</strong> student of Computer Science graduate passionate about engineering. Highly-capable leader, Proficient
            in a range of modern technologies including Java and allows me to utilize my technical skills
            and creativity to contribute to the success of the company.</p>
        </div>
        <strong className='font-extrabold mt-3 text-xl underline underline-offset-4'>Academic Profile</strong>
        <div className='mt-8 text-lg grid grid-cols-3 space-x-5'>
          {acadamics.map((item)=>(
            
          <form key={item.id} className='border-2 border-blue-400 shadow-md shadow-orange-700'>
            <body className='px-6 py-4'>
                <h1 className=' font-bold'>{item.Degree}</h1>
              <h1 className='font-semibold'>{item.college}</h1>
              <h1 className='font-semibold'>CGPA: {item.cgpa}</h1>
            </body>
            <footer className='px-6'>{item.duration}</footer>
          </form>
          ))}

        </div>
      </div>
      


    </>
  )
}

export default About