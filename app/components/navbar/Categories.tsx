'use client';

import { usePathname, useSearchParams } from 'next/navigation';
// import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsPersonWorkspace, BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla, MdComputer } from 'react-icons/md';
import {FaMicrophoneAlt} from 'react-icons/fa';
import { TfiWrite } from 'react-icons/tfi';
import { GiGuitarBassHead, GiPianoKeys, GiDrumKit } from 'react-icons/gi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { VscEditorLayout } from 'react-icons/vsc';
import { HiOutlineHome } from 'react-icons/hi';
import { MdOutlineGroups } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Commercial Studio',
    icon: MdOutlineVilla,
    description: ''
  },
  {
    label: 'Home Setup',
    icon: HiOutlineHome,
    description: ''
  },
  {
    label: 'Recording Booth',
    icon: FaMicrophoneAlt,
    description: ''
  },
  {
    label: 'Vocal Coach',
    icon: BsPersonWorkspace,
    description: ''
  },
  {
    label: 'Lyricist',
    icon: TfiWrite,
    description: ''
  },
  {
    label: 'Artist',
    icon: BsFillPersonLinesFill,
    description: ''
  },
  {
    label: 'Band',
    icon: MdOutlineGroups,
    description: ''
  },
  {
    label: 'Instrument',
    icon: GiDrumKit,
    description: ''
  },
  {
    label: 'Editor',
    icon: VscEditorLayout,
    description: ''
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;