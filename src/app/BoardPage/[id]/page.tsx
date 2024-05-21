'use client';

import React, { useCallback, useEffect } from 'react';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AsideMenu } from '@/widgets/AsideMenu';
import { BoardCards } from '@/widgets/BoardCards';

// Функция для подавления предупреждений и ошибок

export default function BoardPage({ params }: { params: { id: string } }) {
    return <MainLayout asideMenu={<AsideMenu />} content={<BoardCards />} />;
}
