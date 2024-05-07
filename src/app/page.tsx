'use client';

import React from 'react';
import { AsideMenu } from '@/widgets/AsideMenu';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { BoardsList } from '@/features/BoardsList';
import { BoardCards } from '../features/BoardCards';

export default function Home() {
    return <MainLayout asideMenu={<AsideMenu />} content={<BoardsList />} />;
}
