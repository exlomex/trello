'use client';

import React from 'react';
import { AsideMenu } from '@/widgets/AsideMenu';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { BoardCards } from '../features/BoardCards';

export default function Home() {
    return <MainLayout asideMenu={<AsideMenu />} content={<BoardCards />} />;
}
