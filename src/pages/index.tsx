import { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import AddModal from "@/modules/AddModal";
import SuccessModal from "@/modules/SuccessModal";
import Button from "@/components/Button";
import { ApiStatus } from "@/types/FormData";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isAddModalOpen, toggleAddModal] = useState<boolean>(false);
  const [isSuccessModalOpen, toggleSuccessModal] = useState<boolean>(false);

  const handleAddResponse = (status: ApiStatus) => {
    if (status) {
      toggleSuccessModal(true);
    }
  }

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
        <Button onClick={() => toggleAddModal(true)}>Open Modal</Button>
      </main>
      <AddModal title="Add area" isModalOpen={isAddModalOpen} onCloseModal={() => toggleAddModal(false)} onResponseAdd={(status) => handleAddResponse(status)} />
      <SuccessModal isModalOpen={isSuccessModalOpen} onCloseModal={() => toggleSuccessModal(false)} />
    </>
  )
}
