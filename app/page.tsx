import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark mx-auto"
          src="/mutants-and-masterminds-full-text-logo.jpg"
          alt="Mutants and Masterminds logo"
          width={511}
          height={172}
          priority
        />
        <div className="flex flex-col p-2 shadow-lg w-full h-max gap-3">
          <div className="p-4 m-4 shadow-lg rounded-lg border border-black place-self-center items-center bg-gradient-to-tr from-blue-600 to-sky-300 via-sky-500">
            <h1 className="text-2xl font-bold">Mutants and masterminds TTRPG Web App</h1>
          </div>
          <div className="w-1/2 hover:w-3/5 text-center p-4 m-4 shadow-lg rounded-lg border border-black place-self-center items-center bg-gradient-to-tr from-orange-600 to-orange-400 via-amber-500">
            {/* <a href="/player/">Players</a> */}
            <Link href={`/login/`}>Login</Link>
          </div>
          <div className="w-1/2 hover:w-3/5 text-center p-4 m-4 shadow-lg rounded-lg border border-black place-self-center items-center bg-gradient-to-tr from-orange-600 to-orange-400 via-amber-500">
            {/* <a href="/gm/">GM's</a> */}
            <Link href={`/signup/`}>New user? Signup here</Link>
          </div>
          {/* <div className="w-1/2 hover:w-3/5 text-center p-4 m-4 shadow-lg rounded-lg border border-black place-self-center items-center bg-gradient-to-tr from-orange-600 to-orange-400 via-amber-500">
            <a href="/create/">Create Homebrew Content</a>
          </div> */}
        </div>
      </main>

    </div>
  );
}
