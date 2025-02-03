import Image from 'next/image';
import React from 'react';
import { assets } from '../assets/asset';

const Header = () => {
  return (
    <div className="flex justify-center">
      <Image src={assets.person} alt="" />
    </div>
  );
};

export default Header;
