import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';

import { Button } from '@/components/ui/button';
import React from 'react';
import { cn } from '@/lib/utils';

interface SCSidebarTriggerProps {
    triggerIcon?: React.ReactNode;
    triggerClassName?: string;
    hideToggle?: boolean;
}

export const SCSidebarTrigger = React.memo(
    ({ triggerIcon, triggerClassName, hideToggle = false }: SCSidebarTriggerProps) => {
        const CustomTrigger = React.useCallback(() => {
            const { toggleSidebar } = useSidebar();
            return (
                <Button
                    onClick={toggleSidebar}
                    data-sidebar="trigger"
                    variant="ghost"
                    size="icon"
                    className={cn('h-7 w-7', triggerClassName)}
                >
                    {triggerIcon}
                    <span className="sr-only">Toggle Sidebar</span>
                </Button>
            );
        }, [triggerClassName, triggerIcon]);

        if (hideToggle) return null;

        return triggerIcon ? <CustomTrigger /> : <SidebarTrigger className={triggerClassName} />;
    },
);

SCSidebarTrigger.displayName = 'SCSidebarTrigger';
