import { Play as Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Volume, Maximize, Laptop2} from 'lucide-react';
import Image from 'next/image';

export function Footer(){
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <Image className="w-full" src="/album3.jpg" width={48} height={48} alt="capado album"/>
            <div className="flex flex-col">
              <strong className="font-normal">Black Hole Sun</strong>
              <span className="text-xs text-zinc-400">Soundgarden</span>
            </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-500"/>
            <SkipBack size={20} className="text-zinc-500"/>
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-500"/>
            <Repeat size={20} className="text-zinc-500"/>
          </div>  
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>  
            </div>
            <span className="text-xs text-zinc-400">2:15</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>  
            </div>
          </div>
          <Maximize size={20} />
        </div>
      </footer>
    )
}