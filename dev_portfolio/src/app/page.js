import Image from "next/image";
import Head from "next/head";
import Link from 'next/link'
import { TbLetterL, TbLetterI, TbLetterM } from "react-icons/tb";
import { GrStackOverflow } from "react-icons/gr";
import {FaNodeJs} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaCcStripe} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {SiJquery} from 'react-icons/si'
import {SiSpring} from 'react-icons/si'
import {SiSequelize} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiIntellijidea} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'
import {BiLogoPostgresql} from 'react-icons/bi'

export default function Home() {
  return (
    <main className="bg-blue-shirtBlue px-10 p-4 min-h-screen outline-double max-w-full flex flex-col justify-between">
      <nav className="py-10 mb-12 flex justify-center">
        <div>
          <h1 className="text-center text-3xl font-sans font-semibold bg-white p-8 outline-double rounded-full align-middle">
            Lewis Innes-Miller
          </h1>
          <div className="flex justify-center mt-9 py-9 text-7xl outline-double rounded-full">
            <GrStackOverflow className="" />
          </div>
        </div>
        <div className="mt-9">
          <Image
            src="/lewisPhoto3.png"
            width={310}
            height={310}
            className="rounded-lg hidden sm:block"
          />
        </div>
        <ul className="flex items-center">
          <div className="flex flex-col gap-4">
            <li className="bg-yellow-sunYellow px-4 py-2 rounded-md ml-8 cursor-pointer hover:bg-white shadow-lg">
              <a href="//linkedin.com/in/lewis-im" target="_blank" className="">
                Linkedin
              </a>
            </li>
            <li className="bg-yellow-sunYellow px-4 py-2 rounded-md ml-8 cursor-pointer hover:bg-white">
              <a href="//github.com/Lewi-5" target="_blank">GitHub</a>
            </li>
            <li className="bg-yellow-sunYellow px-4 py-2 rounded-md ml-8 cursor-pointer hover:bg-white">
              <a href="mailto: lewinnesmiller@gmail.com">Email Me</a>
            </li>
            <Link href="./LewisInnesMillerCV.docx" download>
            <li className="bg-yellow-sunYellow px-4 py-2 rounded-md ml-8 cursor-pointer hover:bg-white">
              <a href="">My CV</a>
            </li>
            </Link>
          </div>
        </ul>
      </nav>
      <section className="min-h-">
        <h2 className="font-bold text-5xl font-sans text-center p-5 underline">
          Full Stack Developer
        </h2>
        <p className="ml-9 mr-9 mt-9 font-normal text-lg  text-center relative hover:scale-125 transform transition duration-500">
        &quot;Keep striving for progress over perfection. A little progress, every
          day, will go a <span className="underline">very</span> long way.&quot;
        </p>
        <p className="flex justify-center text-lg mb-9">-dave gray</p>
      </section>

      <div>
        <div className="w-2/4">
          <hr />
        </div>
        <div className="w-2/4"></div>
      </div>
      <section className="flex flex-col mt-9 p-9 align-middle">
        <div className="flex justify-center">
          <h3 className="text-4xl bg-white p-3.5 rounded-full inline font-sans outline-double font-semibold">
            About Me
          </h3>
        </div>
        <div className="flex justify-center flex-col items-center mb-9">
          <p className="text-lg text-center mt-3 max-w-md line leading-snug">
            I like getting to the{" "}
            <span style={{ textDecoration: "underline" }}>bottom</span> of
            things - to really understand them beyond a passing familiarity. And
            that, in a nutshell, is the great <strong>promise</strong> - and{" "}
            <strong>challenge</strong> - of full stack development.
          </p>{" "}
          <br />
          <p className="text-lg text-center mt-3 max-w-md line leading-snug">
            In this line of work, you can <em>always</em> go deeper; there&apos;s
            always a lower or higher level of implementation to discover. At
            some point, even the world&apos;s greatest developer has to simply trust
            the abstraction built by another. But we can always aim beyond these
            thresholds, and that&apos;s what excites me on a daily basis.
          </p>
        </div>
        <div className="container flex items-center mt-9">
          <div className="w-2/4"></div>
          <div className="w-2/4 flex justify-center">
            <hr className="w-full" />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <ul className="text-4xl">
            <li className="cursor-pointer">
              <details>
                <summary className="font-sans">
                  Passionate and Motivated
                </summary>
                <span className="bg-white p-2.5 rounded-full m-4 outline-double text-base max-w-md">
                  {" "}
                  Development is a equally a profession and a passion to me.
                </span>
              </details>
            </li>
            <br />
            <li className="cursor-pointer">
              <details>
                <summary className="font-sans">
                  Versatile Professional Experience
                </summary>
                <span className="bg-white p-2.5 rounded-full m-4 text-base outline-double max-w-md">
                  I bring diverse expertise and leadership experience to bear in
                  my work.
                </span>
              </details>
            </li>
            <br />
            <li className="cursor-pointer">
              <details>
                <summary className="font-sans">
                  Proven Autonomous Learner
                </summary>
                <span className="bg-white p-2.5 rounded-full m-4 outline-double text-base max-w-md">
                  I excel in environments that demand self-reliance and
                  self-teaching.
                </span>
              </details>
            </li>
            <br />
            <li className="cursor-pointer">
              <details>
                <summary className="font-sans">A Keen Collaborator</summary>
                <span className="bg-white p-2.5 rounded-full m-4 outline-double text-base max-w-md">
                  Demonstrated ability to collaborate, lead, and thrive in teams.{" "}
                </span>
              </details>
            </li>
            <br />
          </ul>
        </div>
        <hr />
      </section>
      <div className="flex justify-center">
      <h3 className="text-4xl bg-white p-3.5 rounded-full text-center inline font-sans outline-double font-semibold">
          Skills and Projects
        </h3>
        </div>
      <section className="mt-9 flex flex-col justify-evenly sm:flex-row mb-9">
      <div className="max-w-sm flex flex-col items-center gap-5">
          
          <h3 className="text-2xl underline mb-12 text-center">Driven Auto Rental Application</h3>
          <Image
            src="/DrivenScreenShot.JPG"
            width={310}
            height={310}
            className="rounded-lg hidden sm:block"
          />
          <ul className="flex items-center mb-5">
              <div className="flex flex-col gap-4 w-full text-center">
              <Link href="./projectProposal.docx" download><li className="bg-yellow-sunYellow px-4 py-2 rounded-md ml-8 cursor-pointer hover:bg-white">Project Charter</li></Link>
          <a href="http://car-rental-lewis-miral.canadacentral.cloudapp.azure.com:3000/login" target="_blank"><li className="bg-yellow-sunYellow px-4 py-2 rounded-md ml-8 cursor-pointer hover:bg-white">Live Demo</li></a>
          <a href="https://github.com/myselfmiral2023/Web-Development-II" target="_blank"><li className="bg-yellow-sunYellow px-4 py-2 rounded-md ml-8 cursor-pointer hover:bg-white">Source Code</li></a>
          <a href=""><li className="bg-gray-400 px-4 py-2 rounded-md ml-8 cursor-default">Presentation (Coming soon!)</li></a>
          
          </div>
          </ul>
          
          <div className="flex flex-row justify-evenly outline-dashed mb-4 p-2"><span className="iconsNode">{<FaNodeJs />}</span> <span className="iconsMySQL">{<SiMysql/>}</span><span className="iconsReact">{<FaReact/>}</span><span className="iconsStripe">{<FaCcStripe/>}</span><span className="iconsSequelize">{<SiSequelize/>}</span></div>
          <p className="text-center leading-snug"><span className="font-bold">Role(s)</span>: Team Lead, Scrum Master. </p>
          <p className="text-center leading-snug"><span className="font-bold">Summary</span>: Group project with Miral Patel. Building on top of NodeJs fundamentals, implemented a full stack application for an auto rental business. Implemented JWT authentication. Furthered MySQL proficiency with more complex queries, sub-queries, and multi-table joins. On the frontend, rapidly gained proficiency with both ReactJS JavaScript library and Tailwind CSS framework. Learned how to implement an Object Relational Model via Sequelize. Utilized many npm packages and learned how to parse new documentation quickly. Continued to improve fluency in Git version control and software development team dynamics via Scrum and Kanban.    </p>
        </div>
        <div className="max-w-md flex flex-col items-center gap-5">
          <h3 className="text-2xl underline mb-12 text-center">WorkRight Job Posting App</h3>
          <div className="h-30 mt-5 hidden sm:block">
          <Image
            src="/WorkRight.JPG"
            width={1000}
            height={750}
            className="rounded-lg hidden sm:block ml-4"
          />
          </div>
          <div className="flex flex-col gap-5 mb-5 w-full">
            <ul className="flex items-center">
              <div className="flex flex-col gap-4 w-full text-center">
              <Link href="./ProjectProposalTeamLewisDustinJing.docx" download><li className="bg-yellow-sunYellow px-4 py-2 rounded-md ml-8 cursor-pointer hover:bg-white">Project Charter</li></Link>
          <a href="https://sleepy-ridge-80270.herokuapp.com/" target="_blank"><li className="bg-yellow-sunYellow px-4 py-2 rounded-md ml-8 cursor-pointer hover:bg-white">Live Demo</li></a>
          <a href="https://github.com/Lewi-5/WorkRight" target="_blank"><li className="bg-yellow-sunYellow px-4 py-2 rounded-md ml-8 cursor-pointer hover:bg-white">Source Code</li></a>
          <Link href="./ProjectPresentation.pptx" download><li className="bg-yellow-sunYellow px-4 py-2 rounded-md ml-8 cursor-pointer hover:bg-white">Presentation</li></Link>
          </div>
          </ul>
          </div>
          <div className="flex flex-row justify-evenly outline-dashed mb-4 p-2 w-full"><span className="iconsNode">{<FaNodeJs />}</span> <span className="iconsMySQL">{<SiMysql/>}</span><span className="iconsJquery">{<SiJquery/>}</span><span className="iconsGit">{<BsGit/>}</span><span className="iconsJs">{<SiJavascript/>}</span></div>
          <p className="text-center leading-snug"><span className="font-bold">Role(s)</span>: Team Lead, Scrum Master. </p>
          <p className="text-center leading-snug"><span className="font-bold">Summary</span>: Group project with Dustin Ruck and Jing Wei. Implemented a NodeJs + Express backend with dozens of API calls to a MySQL database hosted on Azure to create a RESTful CRUD application. Implemented a Front-end with HTML5, CSS3, and JavaScript with jQuery. Deepened understanding of MVC architecture, user role Authentication, version control (via Git) and Kanban (via Trello).  </p>
        </div>
        <div className="max-w-sm ">
          <h3 className="text-2xl underline mb-4 mb-20 text-center">BookPro Java Spring Boot Project</h3>
          <div className="flex justify-center">
          <Image
            src="/BookPro.jpg"
            width={230}
            height={250}
            className="rounded-lg hidden sm:block "
          />
          </div>
          <ul className="flex items-center mt-8 mb-8 ">
              <div className="flex flex-col gap-4 w-full text-center">
              
          <a href=""><li className="bg-gray-400 px-4 py-2 rounded-md ml-8 cursor-default">Live Demo (Coming soon!)</li></a>
          <a href="https://github.com/Lewi-5/BookPro" target="_blank"><li className="bg-yellow-sunYellow px-4 py-2 rounded-md ml-8 cursor-pointer hover:bg-white">Source Code</li></a>
          
          </div>
          </ul>
          
          <div className="flex flex-row justify-evenly outline-dashed mb-4 p-2"><span className="iconsJava">{<FaJava />}</span> <span className="iconsSpring">{<SiSpring/>}</span><span className="iconsPostgresql">{<BiLogoPostgresql/>}</span><span className="iconsIntellij">{<SiIntellijidea/>}</span></div>
          <p className="text-center leading-snug"><span className="font-bold">Role(s)</span>: Independent Project </p>
          <p className="text-center leading-snug"><span className="font-bold">Summary</span>: Backend oriented project. Created a full stack application using Java Spring, Spring Boot, and Spring Security on the backend. Learned how to implement a PostgresQL database with Hibernate. Improved understanding of exception handling and debugging with Java. Learned how to implement role authentication using Spring security. Implemented a Front-end with ThymeLeaf templating. Deepened understanding of CRUD and API interactions, specifically through concepts like Data Transfer Objects, Model View Controller dynamics, and SQL dialects. Deepened proficiency with Intellij IDE.</p>
        </div>
        
        
      </section>
      <hr className="mt-9" />
      <section className="mt-12 mb-24 flex flex-col items-center ">
        <h3 className="font-bold text-5xl font-sans text-center p-5 underline">Education</h3>
        <Image
            src="/JOHN-ABBOTT-BIBLIO-2.jpg"
            width={380}
            height={275}
            className="rounded-lg hidden sm:block "
          />
          <p className="text-center max-w-md">Previously, I earned my B.A. in Greek and Latin at McGill University. I am currently completing my AEC in Full Stack Development at John Abbott College.</p>
          <div className="flex flex-row justify-center items-baseline p-4">
          <Image
            src="/JA-SIGN.png"
            width={215}
            height={151}
            className="rounded-lg hidden sm:block "
          />
          <h4 className="font-extrabold underline text-xl max-w-md">John Abbott College Full Stack Developer (AEC LEA.BN) Course Progression</h4>
          </div>
        <ul className="max-w-md flex flex-col gap-3">
            <li>
              420-WA5-AB: Foundations of Web Development
            </li>
            <hr />
            <li>
            420-JA4-AB: <span>Programming I</span> (Java)
            </li>
            <hr />
            <li>
            420-JB4-AB: <span>Programming II</span> (Java)
            </li>
            <hr />
            <li>
            420-SA5-AB: <span>Database</span> (MySQL, MSSQL, SQLite)
            </li>
            <hr />
            <li>
              420-WB4-AB: <span>Website Design</span> (HTML5, CSS3, Figma)
            </li>
            <hr />
            <li>
              420-WC4-AB: <span>User Interfaces</span> (JavaScript, AJAX, jQuery)
            </li>
            <hr />
            <li>
              420-WD4-AB: Web Services (NodeJS, MySQL, jQuery)
            </li>
            <hr />
            <li>
            420-WE6-AB: Web Development I (Php, Laravel)
            </li>
            <hr />
            <li>
              420-SB3-AB: Cloud Administration & Security (AWS, Linux, Docker)
            </li>
            <hr />
            <li>
              420-JD5-AB: Programming III (Java Spring, PostgresQL)
            </li>
            <hr />
            <li>
              420-JC3-AB: Data Structures & Algorithms (Java, OOP Design Patterns)
            </li>
            <hr />
            <li>
              420-JE5-AB: Web Development II (React, NodeJs, Sequelize)
            </li>
            <hr />
            <li>
              420-WF4-AB: Application Development I (C#, .NET)
            </li>
            <hr />
            <li>
              420-WG4-AB: Application Development II 
            </li>
            <hr />
            <li>
              420-WH6-AB: Integration Project<span></span>
            </li>
            <hr />
        </ul>
      </section>
      <footer className="bg-blue-950 h-11 p-9 flex justify-center items-center">
            <p className="font-sans text-center text-white">2023 Lewis Innes-Miller</p> <a href="#top"><div className="bg-yellow-sunYellow px-4 py-2 rounded-md ml-8 cursor-pointer hover:bg-white">Back to Top</div></a>
      </footer>
    </main>
  );
}
