'use client';

import React from 'react';
import { AsideMenu } from '@/widgets/AsideMenu';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { usePutRequest } from '@/app/providers/apiCheck/putRequestCheck';
import { BoardsList } from '@/widgets/BoardsList';

export default function Home() {
    const { data, isLoading } = usePutRequest(null);

    return <MainLayout asideMenu={<AsideMenu />} content={<BoardsList />} />;
}
