import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import placeholder from "../../public/assets/projects-screenshots/placeholder.png"
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. Ableton MCP Server project
    id: "1",
    category: "Model Context Protocol(MCP) | Python",
    title: "Ableton MCP Server",
    src: "/assets/projects-screenshots/abletonmcp/1.png",
    screenshots: ["/assets/projects-screenshots/placeholder.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.maven,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Ableton MCP Server
          </TypographyP>
          <TypographyP className="font-mono ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illo sed iusto aliquam quia ipsum eos minima beatae quisquam, natus est, neque delectus adipisci velit molestiae laboriosam suscipit eaque provident inventore, quae nesciunt. Est dignissimos quibusdam quasi dicta minus assumenda.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">ℹ About Project </TypographyH3>
          <p className="font-mono mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio alias, accusamus maxime provident porro autem consequuntur voluptatum, illum dolor magnam non nam vel recusandae aliquam quaerat dicta odit nostrum ipsum?<br />
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolorem! <br />
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolorem! <br />
            3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, laborum.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/placeholder.png`,
              `${BASE_PATH}/placeholder.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">🔗 How did I connect</TypographyH3>
          <p className="font-mono mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a nesciunt perspiciatis incidunt at molestiae veniam autem maiores ea, fugit, modi provident est earum similique. Animi nam quidem, nesciunt fugiat odit ipsam consectetur tempora sed, eum ipsa tempore? Iusto, iste id numquam nostrum possimus placeat voluptates veritatis consequatur odit et at soluta distinctio facilis officiis earum aliquam modi dolores inventore ea laboriosam cupiditate quae harum. Molestiae aliquid quaerat voluptas provident, accusantium ad. Esse minima dolore, molestias in praesentium vitae maxime. Dolorem, voluptatum deserunt. Odio eos sunt quasi veniam, dolor, natus fugit voluptatem rem nemo ipsa voluptatibus, obcaecati iure suscipit eligendi.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/placeholder.png`,
              `${BASE_PATH}/placeholder.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">❓ Why this project</TypographyH3>

          <p className="font-mono mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut officia id corrupti amet dolore quibusdam totam ullam culpa nemo blanditiis at voluptates modi autem similique possimus animi, sapiente dicta repellendus voluptatibus. Velit ab excepturi corrupti repellendus nemo praesentium sit porro impedit repudiandae! Reiciendis aut officia obcaecati beatae perferendis in vero iure aliquam quibusdam, laudantium expedita esse consequatur debitis nesciunt doloremque veniam. Nihil commodi sapiente quis possimus placeat harum voluptas perspiciatis recusandae praesentium quibusdam, repellendus iure eaque, soluta officia ratione atque nisi sint nulla dolorum. Animi nesciunt magni laboriosam. Quae..
          </p>
          <TypographyH3 className="my-4 mt-8">📖 What did I learn </TypographyH3>
          <p className="font-mono mb-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque explicabo ipsa. Nulla, ut fugit. Quia quasi commodi nesciunt natus sapiente, excepturi ipsa nostrum ad hic. Odit fugiat ratione ducimus.
          </p>
        </div>
      );
    },
  },
  { // 02. AI Dockerfile Optimizer project
    id: "2",
    category: "AI and DevOps",
    title: "AI Dockerfile Optimizer",
    src: "/assets/projects-screenshots/aidockerfileoptimizer/thumbnail.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://ai-docker-file-optimizer.vercel.app/",
    github: "https://github.com/amey0307/AI-Dockerfile-Analyzer-",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.openai, PROJECT_SKILLS.netlify],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            AI-Docker-file-optimizer helps optimize Dockerfiles for smaller, more efficient images.
            Simply paste your Dockerfile, and the app analyzes it for best practices and size
            optimization tips. It then provides a refactored, optimized version of the Dockerfile.
            Deployed on Vercel, it ensures fast and easy access to Dockerfile optimization.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/aidockerfileoptimizer/1.png`,
              `${BASE_PATH}/aidockerfileoptimizer/2.png`,
              `${BASE_PATH}/aidockerfileoptimizer/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 03. Portfolio project
    id: "3",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/myportfolio/landing.png",
    screenshots: ["assets/projects-screenshots/myportfolio/landing.png"],
    live: "https://portfolio-me-kappa-bay.vercel.app/",
    github: "https://github.com/amey0307/portfolio-me",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/myportfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/projects.png`,
              `${BASE_PATH}/myportfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  { // 05. Time Tracker Chrome Extension
    id: "5",
    category: "Full stack",
    title: "Time Tracker Chrome Extension",
    src: "/assets/projects-screenshots/time-tracker/thumbnail.png",
    screenshots: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png"],
    live: "#",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores error assumenda explicabo id sapiente blanditiis, deserunt cum qui! Unde esse ratione nam quasi voluptatibus rerum aliquid recusandae distinctio, dolorem nobis facere aut incidunt doloribus eum rem numquam tempora dolores fugiat maiores! Minus itaque nam maiores porro exercitationem eos consequuntur!
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/placeholder.png`,
              `${BASE_PATH}/placeholder.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 06. Shipping Prediction for E-commerce project
    id: "6",
    category: "Web Development",
    title: "Shipping Prediction for E-commerce",
    src: "/assets/projects-screenshots/shipping-pred/thumbnail.png",
    screenshots: ["01.png", "02.png", "03.png", "04.png", "05.png"],
    live: "#",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, facere laudantium officiis assumenda saepe aut cumque porro. Soluta inventore voluptas delectus ipsa voluptatum totam maxime amet assumenda dolorum, atque aliquam fugiat esse earum quae sit eum vitae magni ratione alias officia repellendus iste. Adipisci temporibus sequi voluptates porro, sint rem ut, molestias quod quos, quibusdam amet laborum eaque quae nulla.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/placeholder.png`,
              `${BASE_PATH}/placeholder.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 07. Blog Application project
    id: "7",
    category: "Web Development",
    title: "Full Stack Blog Application",
    src: "/assets/projects-screenshots/full-stack-blog/thumbnail.jpg",
    screenshots: [],
    live: "#",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, facere laudantium officiis assumenda saepe aut cumque porro. Soluta inventore voluptas delectus ipsa voluptatum totam maxime amet assumenda dolorum, atque aliquam fugiat esse earum quae sit eum vitae magni ratione alias officia repellendus iste. Adipisci temporibus sequi voluptates porro, sint rem ut, molestias quod quos, quibusdam amet laborum eaque quae nulla.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/placeholder.png`,
              `${BASE_PATH}/placeholder.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
