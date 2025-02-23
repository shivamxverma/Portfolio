'use client'
import Image from "next/image";
import react from "react";
import Link from 'next/link'
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Technical } from "@/components/technical";
import Project from "@/components/project";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
     <>
       // Navbar
       <div>
            <Button onClick={()=>{router.push('/edit')}}>
              Edit
            </Button>
           /*
             Shivam Kumar Verma
             

             About
             Skills
             Achievements
             CodeLab
             Blog
             Contact
             Resume
           */
       </div>

       // Information About Self 
       <div>
          <h1>FullStack Developer</h1>
          <p>Building Interesting Website and Solving RealWorld Problem</p>
          <div>
            <button>Get in Touch</button>
          </div>
          <div>
            <button>View Projects</button>
          </div>
          <div>
          <Link href="https://www.linkedin.com/in/shivamv99/"><IoLogoLinkedin/></Link>
          
          <Link href="https://github.com/shivamxverma"><DiGithubBadge/></Link>

          <Link href="https://x.com/Shivam_v99"><AiFillTwitterCircle/></Link>
          
          <div>Code Block</div>



          <div>
            <h1>About Me</h1>
            <p>Passionate about building scalable fullstack application and solving complex algorithmic challenges</p>
            
            <div>
              <h3>Education</h3>
              <p>Indian Institute of Information Technology Nagpur</p>
              <p>Bachelor of Technology in Computer Science</p>

              <div>
              Relevant Coursework
              Data Structures and Algorithms
              Database Management Systems
              Computer Networks
              Object-Oriented Programming
              Operating Systems
              </div>

            </div>
          </div>

          <div>
            Technical Skills
            <Technical title = "Languages" skills = {["Pyton","C/C++","JavaScript/TypeScript"]}
            />
            <Technical title = "Web Development" skills = {["Reactjs/Nextjs","Node.js/Express.js","Docker/Kubernates"]}
            />
            <Technical title = "Databases" skills = {["PostgreSQL","MongoDB","MySQL","GraphQL","vector Sql"]}
            />

            <div>
              <h1>Features Projects</h1>
              {/* <Project
               name = "Payment Exchange Application"
              /> */}
            </div>
          </div>
        
            
          </div>
       </div>
     </>
  );
}
