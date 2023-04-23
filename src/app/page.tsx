import { Footer } from '@/components/footer/Footer';
import { PlayLists } from '@/components/molecules/playLists/PlayLists';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { Home as HomeIcon, Search,  Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Volume, Maximize, Laptop2} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6" > 
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1"><ChevronLeft /></button>
            <button className="rounded-full bg-black/40 p-1"><ChevronRight /></button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
            <PlayLists />        
          <h2 className='font-semibold text-2xl mt-10'>Made for Dioendtsx</h2>
          <div className="grid grid-cols-5 gap-4 mr-4">
            <a href='#' className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10 group relative">
              <Image className="w-full" src="/cover00.jpg" width={104} height={104} alt="capado album"/>
              <button className="absolute bottom-32 left-40 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition-transform duration-1000 translate-x-1 translate-y-3"><Play /></button>
              <strong className="font-semibold">Daile Mix 1</strong>
              <span className="text-sm text-zinc-400">Walloms, COIN, girl in red and more.</span>
            </a>
            <a href='#' className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10 group relative">
              <Image className="w-full" src="/cover02.jpg" width={104} height={104} alt="capado album"/>
              <button className="absolute bottom-32 left-40 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition-transform duration-1000 translate-x-1 translate-y-3"><Play /></button>
              <strong className="font-semibold">Trabalhando de Casa</strong>
              <span className="text-sm text-zinc-400">Uma seleção de hits pra te acompanhar no home office.</span>
            </a>
            <a href='#' className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10 group relative">
              <Image className="w-full" src="/cover03.jpg" width={104} height={104} alt="capado album"/>
              <button className="absolute bottom-32 left-40 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition-transform duration-1000 translate-x-1 translate-y-3"><Play /></button>
              <strong className="font-semibold">Uplifting Soul Classics</strong>
              <span className="text-sm text-zinc-400">Whenever you need a soulful boost.</span>
            </a>
            <a href='#' className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10 group relative">
              <Image className="w-full" src="/cover04.jpg" width={104} height={104} alt="capado album"/>
              <button className="absolute bottom-32 left-40 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition-transform duration-1000 translate-x-1 translate-y-3"><Play /></button>
              <strong className="font-semibold">This Is Pearl Jam</strong>
              <span className="text-sm text-zinc-400">This is Pearl Jam. Todos os maiores hits em uma só playlist.</span>
            </a>
            <a href='#' className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10 group relative">
              <Image className="w-full" src="/cover05.jpg" width={104} height={104} alt="capado album"/>
              <button className="absolute bottom-32 left-40 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition-transform duration-1000 translate-x-1 translate-y-3"><Play /></button>
              <strong className="font-semibold">Rock Classics</strong>
              <span className="text-sm text-zinc-400">Rock legends & epic songs that continue to inspire generations.</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
