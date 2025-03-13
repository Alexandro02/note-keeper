import { PlusCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <main className="w-full flex flex-col gap-20 mt-10">
        <h1 className="text-4xl">Welcome to Note Keeper!</h1>
        <button className="p-3 bg-amber-600 hover:bg-amber-500 duration-200 transition-discrete rounded-full w-35 flex items-center justify-between cursor-pointer">
          <Link href="#">Create Note</Link> <PlusCircleIcon width={24} height={24} />
        </button>
      </main>
    </>
  );
}

export default Home