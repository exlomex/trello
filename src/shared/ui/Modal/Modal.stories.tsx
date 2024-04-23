import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HideIcon } from '@/shared/ui/Icons/HideIcon';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    // args: { onClick: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const modalLight: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aanimi aperiam cum dicta ea, enim in iusto nesciunt nulla quamqui quo, repellendus saepe sapiente suscipit tempora totamveniam voluptatibus. Nesciunt, quod tempora. Adipisci eligendieveniet nemo nesciunt officiis perferendis velit? Accusamus adanimi architecto assumenda aut blanditiis cum cumque debitisdicta doloribus ea error et id illum ipsa itaque iure laborelaborum molestias mollitia nam natus non nulla obcaecati omnispariatur quaerat quas, quibusdam reiciendis reprehenderittempora tempore tenetur totam vel veniam, voluptas voluptatum.Accusantium asperiores aspernatur doloremque doloribus esselabore laudantium magni necessitatibus, nisi, soluta vel, voluptates voluptatum!',
        isOpen: true,
        isPortal: false,
    },
};

export const modalDark: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aanimi aperiam cum dicta ea, enim in iusto nesciunt nulla quamqui quo, repellendus saepe sapiente suscipit tempora totamveniam voluptatibus. Nesciunt, quod tempora. Adipisci eligendieveniet nemo nesciunt officiis perferendis velit? Accusamus adanimi architecto assumenda aut blanditiis cum cumque debitisdicta doloribus ea error et id illum ipsa itaque iure laborelaborum molestias mollitia nam natus non nulla obcaecati omnispariatur quaerat quas, quibusdam reiciendis reprehenderittempora tempore tenetur totam vel veniam, voluptas voluptatum.Accusantium asperiores aspernatur doloremque doloribus esselabore laudantium magni necessitatibus, nisi, soluta vel, voluptates voluptatum!',
        isOpen: true,
        className: 'dark',
        isPortal: false,
    },
};
