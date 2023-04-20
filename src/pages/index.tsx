import { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import AddModal from "@/modules/AddModal";
import Button from "@/components/Button";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isModalOpen, toggleModal] = useState<boolean>(false);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-around p-24">
        <Image
          src="/logo.png"
          alt="Logo"
          width={180}
          height={37}
          priority
        />
        <Button onClick={() => toggleModal(true)}>Open Modal</Button>
      </main>
      <AddModal title="Add area" isModalOpen={isModalOpen} onCloseModal={() => toggleModal(false)} />
    </>
  )
}
