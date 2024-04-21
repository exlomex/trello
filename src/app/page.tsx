'use client';

import React from 'react';
import { AsideMenu } from '@/widgets/AsideMenu';
import { HideIcon } from '@/shared/ui/Icons/HideIcon';
import { Button } from '@/shared/ui/Button';

export default function Home() {
    return (
        <>
            <AsideMenu />
            <HideIcon />
        </>
    );
}
