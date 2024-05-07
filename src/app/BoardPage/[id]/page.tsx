'use client';

import React from 'react';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AsideMenu } from '@/widgets/AsideMenu';
import { BoardCards } from '@/features/BoardCards';

export default function BoardPage({ params }: { params: { id: string } }) {
    return <MainLayout asideMenu={<AsideMenu />} content={<BoardCards />} />;
}
