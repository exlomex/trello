'use client';

import React from 'react';
import { AsideMenu } from '@/widgets/AsideMenu';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { BoardsList } from '@/features/BoardsList';
import { usePutRequest } from '@/app/providers/apiCheck/putRequestCheck';
import { BoardCards } from '../features/BoardCards';

export default function Home() {
    const { data, isLoading } = usePutRequest(null);

    return <MainLayout asideMenu={<AsideMenu />} content={<BoardsList />} />;
}
