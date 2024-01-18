import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import next from "../assets/next.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node-js.png";
import sql from "../assets/mysql.png";
import react from "../assets/react.png";
const Resume = () => {
  const skill = [
    {
      id: 1,
      name: "HTML",
      img: html,
      color: "#ef8009",
    },
    {
      id: 2,
      name: "CSS",
      img: css,
      color: "#2f4ecc",
    },
    {
      id: 3,
      name: "JavaScript",
      img: js,
      color: "#e7d824",
    },
    {
      id: 4,
      name: "Next JS",
      img: next,
      color: "#767676",
    },
    {
      id: 5,
      name: "TailWind CSS",
      img: tailwind,
      color: "#69e4e8",
    },
    {
      id: 6,
      name: "Node JS",
      img: node,
      color: "#2dce67",
    },
    {
      id: 7,
      name: "My SQL",
      img: sql,
      color: "#25758b",
    },
    {
      id: 8,
      name: "React JS",
      img: react,
      color: "#72c0d6",
    },
  ];
  return (
    <div id="resume" className="flex justify-evenly items-center">
      <div className="left container w-1/2">
        <div className="skills border-2 border-gray-400 px-[7rem] py-6">
          <h1 className="text-4xl font-extrabold tracking-widest text-center">
            Professional Experience
          </h1>
        </div>
        <strong className="mt-2 mb-3 ml-60">Worked At Pega Systems</strong>
        <form className='border-2 border-blue-400 shadow-md'>
            <body className='px-6 py-4'>
                <h1 className=' font-bold'>04.2023 –- 10.2023 : Intern -- Pega Systems, Hyderabad</h1>
                <section>
          <h1></h1>
          <ul>
            <li>Task 1: Writing Test Cases for Plugin</li>
            <ol>
              <li>
                Written the Unit test cases for the implementation of a Plugin
              </li>
              <li>Successfully executed the testcases.</li>
            </ol>
            <br/>
            <li>Task 2: UPDATE THE PLUGINS</li>
            <ol>
              <li>
                Backporting the established changes to all the releases present.
              </li>
              <li>
                Made those updated changes for all the branches for successful
                execution and made it work successfully.
              </li>
            </ol>
            <br/>
            <li>Task 3: Moving OUT OF BAND PIPELINES</li>
            <ol>
              <li>
                Written the Unit test cases for the implementation of a Plugin
              </li>
              <li>Successfully executed the testcases.</li>
              <li>
                Created the new pipeline for ReadyToAdopt and ReadyToShip Stages
                from complete testing pipeline
              </li>
              <li>
                Which helps the testing team to save cost and reduce the time
                for execution of the pipeline
              </li>
              <li>
                Worked on high priority bugs that are troubleshooting other
                project and resolved them
              </li>
              <br/>
            </ol>
          </ul>
        </section>
            </body>
          </form>
      
      </div>
      <div className="right">
        <div className="flex justify-center items-center flex-col">
          <div className="skills border-2 border-gray-400 px-[7rem] py-6">
            <h1 className="text-4xl font-extrabold tracking-widest text-center">
              Skills
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-16 mt-10">
            {skill.map((items) => (
              <section
                key={items.id}
                style={{ boxShadow: `0 0 20px ${items.color}` }}
                className="border-2 border-gray-600 w-20 flex flex-col justify-center items-center hover:scale-105 duration-300 hover:cursor-pointer"
              >
                <body>
                  <h1 className="text-center font-medium">{items.name}</h1>
                  <img
                    width={40}
                    height={40}
                    src={items.img}
                    alt="image of skill"
                  />
                </body>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
