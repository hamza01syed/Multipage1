// components/Navbar.tsx
import Link from 'next/link';
import { FC } from 'react';
import "@/styles/style.css"
const Navbar: FC = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
