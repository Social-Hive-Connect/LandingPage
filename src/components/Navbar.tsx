"use client"
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/../public/hivelogocolor.png";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo da empresa */}
        <div className="flex items-center">
          <Image src={Logo} alt="Logo da Empresa" className="h-12 w-auto" />
          <h3 className="text-gray-800 ml-2">Hive.Connect</h3>
        </div>

        {/* Botão de menu hamburguer para mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {/* Alterna entre o ícone de menu e o ícone de fechar */}
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Links de navegação - visíveis apenas no desktop */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-blue-500"> Home </Link>
          <Link href="/quem-somos" className="text-gray-800 hover:text-blue-500"> Quem Somos </Link>
          <Link href="/contato" className="text-gray-800 hover:text-blue-500"> Contato </Link>
        </div>
      </div>

      {/* Links de navegação para mobile - visíveis apenas quando o menu hamburguer está ativado */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="text-gray-800 hover:text-blue-500 block"> Home </Link>
            <Link href="/quem-somos" className="text-gray-800 hover:text-blue-500 block"> Quem Somos </Link>
            <Link href="/contato" className="text-gray-800 hover:text-blue-500 block"> Contato </Link>
          </div>
        </div>
      )}
    </nav>
  );
}