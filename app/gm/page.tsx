import Link from "next/link";

export default function GmHome() {
    return (
        <div id="gm_container" className="p-2 shadow-lg flex flex-col w-full h-max sm:gap-y-1">
            <div className="w-1/2 p-4 m-4 shadow-lg rounded-lg border border-black place-self-center items-center bg-gradient-to-tr from-blue-600 to-sky-300 via-sky-500">
                <h1 className="p-4 m-4 text-center text-2xl font-bold">Game Masters Home</h1>
            </div>

            <Link href={`/gm/view-campaigns`} className="font-bold w-1/2 p-4 m-4 shadow-lg rounded-lg border border-black place-self-center text-center bg-gradient-to-tr from-orange-600 to-orange-400 via-amber-500 hover:text-white hover:w-3/5">View Campaigns</Link>
            <Link href={`/gm/view-encounters`} className="font-bold w-1/2 p-4 m-4 shadow-lg rounded-lg border border-black place-self-center text-center bg-gradient-to-tr from-orange-600 to-orange-400 via-amber-500 hover:text-white hover:w-3/5">View Encounters</Link>
            <Link href={`/create/`} className="font-bold w-1/2 p-4 m-4 shadow-lg rounded-lg border border-black place-self-center text-center bg-gradient-to-tr from-orange-600 to-orange-400 via-amber-500 hover:text-white hover:w-3/5">Create Homebrew Content</Link>

        </div>
    )
}