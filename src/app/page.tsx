"use client";
import profilePicture from "@/assets/profile-picture.svg";
import { NameLogoSvg } from "@/components/name-log-svg";
import Image from "next/image";
import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Home() {
  const [section, setSection] = useState<"about" | "projects" | "technologies">(
    "projects"
  );

  const AboutContent = () => (
    <div className="flex h-full w-full flex-col rounded-b-2xl bg-zinc-600 p-5 text-2xl">
      <div className="prose prose-invert">
        <h1>Fellipe Lauton</h1>
        <div className="prose prose-invert ">
          <h3>Minas Gerais - Brasil</h3>
          <p>
            Atuo há dois anos como desenvolvedor, sendo a maior parte da minha
            experiência com Typescript, Node.js e React.js.
          </p>
          <p>
            Formado em Análise e desenvolvimento de sistemas, com os cursos
            complementares:
          </p>
          <li>Javascript e Typescript do básico ao avançado</li>
          <li>Node.Js, Typescript, TDD, DDD, Clean Architecture e SOLID</li>
          <li>React.Js e Next.Js</li>
          <li>TOTVS Protheus - ADVPL do básico ao Avançado</li>
          <li>PRO FIGMA | UI DESIGN</li>
        </div>
      </div>
    </div>
  );

  const ProjectsContent = () => (
    <div className="grid h-full w-full grid-cols-projects flex-col rounded-b-2xl bg-zinc-600 px-5 text-2xl">
      <div className="prose prose-invert border-r py-5 pr-5">
        <p>Renda Máxima</p>
        <p>PRP - Prática</p>
        <p>Coméx - Prática</p>
      </div>
      <div className="py-5 pl-5">
        <div className="prose prose-invert">
          <div className="prose prose-invert ">
            <h3>Minas Gerais - Brasil</h3>
            <p>
              Atuo há dois anos como desenvolvedor, sendo a maior parte da minha
              experiência com Typescript, Node.js e React.js.
            </p>
            <p>
              Formado em Análise e desenvolvimento de sistemas, com os cursos
              complementares:
            </p>
            <li>Javascript e Typescript do básico ao avançado</li>
            <li>Node.Js, Typescript, TDD, DDD, Clean Architecture e SOLID</li>
            <li>React.Js e Next.Js</li>
            <li>TOTVS Protheus - ADVPL do básico ao Avançado</li>
            <li>PRO FIGMA | UI DESIGN</li>
          </div>
        </div>
      </div>
    </div>
  );

  const TechnologiesContent = () => (
    <div className="flex h-full w-full flex-col items-center rounded-b-2xl bg-zinc-600 p-5 text-2xl">
      <div className="prose prose-invert h-full"></div>
      <div className="prose prose-invert mt-5 border-t pt-2">
        <h4 className="text-center font-light">
          Essas são algumas tecnologias que ja utilizei ou utilizo no dia a dia
          e tenho domínio em implementar ou dar manutenção.
        </h4>
      </div>
    </div>
  );

  const renderMainContent = () => {
    switch (section) {
      case "about":
        return <AboutContent />;

      case "projects":
        return <ProjectsContent />;

      case "technologies":
        return <TechnologiesContent />;

      default:
        return <AboutContent />;
    }
  };

  return (
    <main className="flex h-screen min-h-screen flex-col bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-500 to-zinc-900 p-24">
      <div className="flex h-full w-full items-center justify-center sm:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-evenly">
          <h1 className="text-center text-5xl font-bold text-zinc-200">
            Olá, eu sou O Dev...
          </h1>
          <div
            id="pictureProfile"
            className="mb-4 mt-8 flex items-center justify-center rounded-full border-2 p-1 shadow-2xl hover:border-emerald-400"
          >
            <Image
              src={profilePicture}
              width={280}
              height={280}
              alt="Profile Picture"
              className="rounded-full bg-white/30 backdrop-brightness-125"
            />
          </div>
          <NameLogoSvg />
          <div className="mt-8 flex items-center justify-center gap-10 rounded-lg bg-black/10 p-6 px-24 transition-all duration-300 hover:shadow-xl">
            <a
              href="https://www.linkedin.com/in/fellipe-lauton/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="h-12 w-12 cursor-pointer fill-zinc-200 transition-all duration-200 hover:scale-125 hover:fill-emerald-400" />
            </a>
            <a
              href="https://github.com/FeLauton"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="h-12 w-12 cursor-pointer fill-zinc-200 transition-all duration-200 hover:scale-125 hover:fill-emerald-400" />
            </a>
            <a
              href="mailto:lipelauton@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdOutlineMarkEmailRead className="h-12 w-12 cursor-pointer fill-zinc-200 transition-all duration-200 hover:scale-125 hover:fill-emerald-400" />
            </a>
          </div>
        </div>
        <div className="flex h-full w-full flex-col rounded-2xl shadow-2xl">
          <div className="relative flex h-8 w-full items-end gap-5 rounded-t-2xl border-b border-zinc-400 bg-zinc-800 px-5">
            <div className="flex h-full items-center justify-center gap-3">
              <div className="h-3 w-3 cursor-pointer rounded-full bg-red-500/70 transition-all duration-500 hover:bg-red-500" />
              <div className="h-3 w-3 cursor-pointer rounded-full bg-yellow-500/70 transition-all duration-500 hover:bg-yellow-500" />
              <div className="h-3 w-3 cursor-pointer rounded-full bg-green-500/70 transition-all duration-500 hover:bg-green-500" />
            </div>
            <div
              onClick={() => setSection("projects")}
              className={`mt-1 flex h-6 w-24 cursor-pointer items-center justify-center rounded-t-lg bg-white/10 px-4 transition-all duration-200 hover:backdrop-brightness-150 ${
                section === "projects"
                  ? "backdrop-brightness-150"
                  : "backdrop-brightness-75"
              }`}
            >
              <h3>Projetos</h3>
            </div>
            <div
              onClick={() => setSection("technologies")}
              className={`mt-1 flex h-6 w-24 cursor-pointer items-center justify-center rounded-t-lg bg-white/10 px-4 transition-all duration-200 hover:backdrop-brightness-150 ${
                section === "technologies"
                  ? "backdrop-brightness-150"
                  : "backdrop-brightness-75"
              }`}
            >
              <h3>Tecnologias</h3>
            </div>
            <div
              onClick={() => setSection("about")}
              className={`mt-1 flex h-6 w-24 cursor-pointer items-center justify-center rounded-t-lg bg-white/10 px-4 transition-all duration-200 hover:backdrop-brightness-150 ${
                section === "about"
                  ? "backdrop-brightness-150"
                  : "backdrop-brightness-75"
              }`}
            >
              <h3>Sobre</h3>
            </div>
          </div>
          {renderMainContent()}
        </div>
      </div>
    </main>
  );
}
