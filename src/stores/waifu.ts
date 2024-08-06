import { WAIFU_LIST } from '../constants';
import { create } from 'zustand';

// Define the interface for a Waifu object
export interface Waifu {
  img?: string;  // Make fields optional if they can be undefined
  name?: string;
  description?: string;
}

// Define the interface for the store's state and actions
interface WaifuStore extends Waifu {
  generateWaifu: (name: string) => void;
  resetWaifu: () => void;
}

// Default waifu state
const defaultWaifu: Partial<Waifu> = {
  img: undefined,
  name: undefined,
  description: undefined,
};

const getAscii = (name:string): number=>{
  return name.toLowerCase().replace(" ","").split("")
  .reduce((prev,cur)=>{
    return prev+cur.charCodeAt(0);
  },0)
}

// Create the Zustand store
export const useWaifuStore = create<WaifuStore>((set) => ({
  ...defaultWaifu,
  generateWaifu: (name: string) => {
    const WAIFU = WAIFU_LIST[getAscii(name)] ?? WAIFU_LIST[0]
    set(WAIFU);
  },
  resetWaifu: () => set(defaultWaifu),
}))