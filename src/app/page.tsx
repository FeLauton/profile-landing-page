import profilePicture from "@/assets/profile-picture.svg";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex h-screen min-h-screen flex-col bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-500 to-zinc-900 p-24">
      <div className="flex h-full w-full items-center justify-center sm:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-evenly">
          <h1 className="text-center text-5xl font-bold text-zinc-200">
            Olá, eu sou O Dev...
          </h1>
          <div className="mt-5 flex h-80 w-80 items-center justify-center rounded-full border-4 shadow-2xl transition-all duration-300 hover:scale-105">
            <Image
              src={profilePicture}
              width={300}
              height={300}
              alt="Profile Picture"
              className="rounded-full bg-white/30 backdrop-brightness-125 "
            />
          </div>
          <div className="mt-10 flex items-center justify-center gap-10 rounded-lg bg-black/10 p-6 px-24 transition-all duration-300 hover:shadow-xl">
            <a
              href="https://github.com/FeLauton"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="h-12 w-12 cursor-pointer fill-zinc-200 transition-all duration-200 hover:scale-125" />
            </a>
            <a
              href="https://www.linkedin.com/in/fellipe-lauton/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="h-12 w-12 cursor-pointer fill-zinc-200 transition-all duration-200 hover:scale-125" />
            </a>
            <a
              href="mailto:lipelauton@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdOutlineMarkEmailRead className="h-12 w-12 cursor-pointer fill-zinc-200 transition-all duration-200 hover:scale-125" />
            </a>
          </div>
        </div>
        <div className="flex h-full w-full flex-col rounded-2xl shadow-2xl">
          <div className="relative flex h-8 w-full items-end justify-center gap-5 rounded-t-2xl border-b border-zinc-400 bg-zinc-800">
            <div className="absolute left-5 flex h-full items-center justify-center gap-3">
              <div className="h-3 w-3 cursor-pointer rounded-full bg-red-600" />
              <div className="h-3 w-3 cursor-pointer rounded-full bg-yellow-600" />
              <div className="h-3 w-3 cursor-pointer rounded-full bg-green-600" />
            </div>
            <div className="mt-1 flex h-6 w-24 cursor-pointer items-center justify-center rounded-t-lg bg-white/10 px-4 backdrop-brightness-75 transition-all duration-200 hover:backdrop-brightness-100">
              <h3>Sobre</h3>
            </div>
            <div className="mt-1 flex h-6 w-24 cursor-pointer items-center justify-center rounded-t-lg bg-white/10 px-4 backdrop-brightness-75 transition-all duration-200 hover:backdrop-brightness-100">
              <h3>Projetos</h3>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center rounded-b-2xl bg-zinc-600 p-5 text-2xl">
            <div className="prose prose-invert">
              <h1></h1>
              <span>
                Aqui vai uma breve descrição sobre mim, minha história e links
                para meus projetos
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
