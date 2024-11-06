"use client"; // for dynamic interactivity with js and react hooks
import Image from "next/image";
import NavBar from "@/components/navBar";
import ProjectCard from "@/components/projectCard";
import AboutSection from "@/components/aboutSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const projectInfo = [
  { 
    title: 'Nooz',
    content: 'Java program that uses MVC architecture to read, edit, create, sort, display, and store news article data through a graphical user interface'
  },
  {
    title: 'EclipseR',
    content: 'C++ database manager for eclipses that utilizes hash tables, linked lists, and AVL trees Features include merging/purging data, sorting/finding by any meta data, hash table display, linked list display, pre/post-order AVL tree display, and general output'
  },
  {
    title: 'Meteor Mayhem',
    content: 'Video game demo built in Godot using their GDScript scripting language. Player has to dodge randomly generated boulders using exaggerated visual elements'
  },
  {
    title: 'Python Pong',
    content: 'Python program that imitates gameplay of the Pong arcade game against a computer using the Pygame library'
  }
];
 

export default function Home() {
  return (
    <div>
      <NavBar />

      <main>
        <section id="home" className="section">
        <p>
          I’m [Your Name], a [Your Job Title] with a passion for [key skill/field, e.g., web development, design, or data science]. With [X years] of experience, I specialize in [specific tools/technologies] and enjoy creating innovative, user-friendly solutions. Outside of work, I’m always learning and exploring new challenges, whether it’s [mention a hobby or interest]. Let’s connect if you’re interested in collaborating or sharing ideas!
        </p>
        </section>

        <section id="about" className="section mt-3">
          About Me
          <p>Hi there! I'm [Your Name], a dedicated [Your Profession/Title] with a passion for [Your Key Interest or Specialization]. My journey in [Your Field/Industry] started with [Brief Introduction or Origin], and since then, I’ve been fortunate to work on [Key Projects or Achievements]. I thrive on solving complex problems and continuously learning new skills to stay ahead in the ever-evolving landscape of [Your Industry or Field]. Outside of work, I enjoy [Your Hobbies or Interests], which helps me stay creative and balanced. Whether it's [Specific Hobby/Activity] or [Another Interest], I believe in the power of blending personal interests with professional growth. Feel free to connect with me on [Your Preferred Contact Method] or explore my work and projects on [Your Website/Social Media].</p>
        </section>
        <AboutSection />
        <section id="projects" className="section py-12">
          Projects
          {projectInfo.map(project => (
            <>
              <li>{project.title}</li>
              <p>{project.content}</p>
            </>
          ))}
        </section>
        <section id="project-cards" className="section py-12">
          Project Cards
          <div className="flex flex-wrap gap-4 p-4">
            {projectInfo.map((project) => (
              <ProjectCard title={project.title} content={project.content} />
            ))}
          </div>
        </section>
        <section id="contact" className="section">Contact</section>

        
        {/* <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        FOOTER
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
      </footer>
    </div>
  );
}
