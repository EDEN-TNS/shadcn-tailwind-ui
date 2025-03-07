import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';

interface SCSidebarProviderProps {
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export const SCSidebarProvider = ({ children, defaultOpen = true }: SCSidebarProviderProps) => {
    return <SidebarProvider defaultOpen={defaultOpen}>{children}</SidebarProvider>;
};
