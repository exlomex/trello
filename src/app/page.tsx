'use client';

import React, { useState } from 'react';
import { AsideMenu } from '@/widgets/AsideMenu';
import { Modal } from '@/shared/ui/Modal';
import cls from './page.module.scss';

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <AsideMenu />
            <button
                onClick={() => {
                    setModalOpen((prev) => !prev);
                }}
            >
                открыть ++
            </button>
            <Modal
                isPortal={true}
                isOpen={modalOpen}
                onClose={() => {
                    setModalOpen((prev) => !prev);
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                animi aperiam cum dicta ea, enim in iusto nesciunt nulla quam
                qui quo, repellendus saepe sapiente suscipit tempora totam
                veniam voluptatibus. Nesciunt, quod tempora. Adipisci eligendi
                eveniet nemo nesciunt officiis perferendis velit? Accusamus ad
                animi architecto assumenda aut blanditiis cum cumque debitis
                dicta doloribus ea error et id illum ipsa itaque iure labore
                laborum molestias mollitia nam natus non nulla obcaecati omnis
                pariatur quaerat quas, quibusdam reiciendis reprehenderit
                tempora tempore tenetur totam vel veniam, voluptas voluptatum.
                Accusantium asperiores aspernatur doloremque doloribus esse
                labore laudantium magni necessitatibus, nisi, soluta vel,
                voluptates voluptatum!
            </Modal>
        </>
    );
}
