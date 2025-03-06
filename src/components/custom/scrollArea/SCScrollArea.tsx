import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import React from 'react';
import { cn } from '@/lib/utils';

export interface SCScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
    className?: string;
    viewportClassName?: string;
    orientation?: 'vertical' | 'horizontal' | 'both';
    scrollHideDelay?: number;
}

export const SCScrollArea = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Root>, SCScrollAreaProps>(
    ({ className, children, viewportClassName, orientation = 'vertical', scrollHideDelay = 600, ...props }, ref) => (
        <ScrollAreaPrimitive.Root ref={ref} className={cn('relative overflow-hidden', className)} {...props}>
            <ScrollAreaPrimitive.Viewport className={cn('h-full w-full rounded-[inherit]', viewportClassName)}>
                {children}
            </ScrollAreaPrimitive.Viewport>
            <ScrollAreaPrimitive.Scrollbar
                orientation="horizontal"
                className={cn(
                    'flex h-2.5 touch-none select-none border-t border-t-transparent p-[1px]',
                    orientation === 'vertical' && 'hidden',
                )}
                {...(orientation === 'both' || orientation === 'horizontal' ? { forceMount: true } : {})}
            >
                <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-border" />
            </ScrollAreaPrimitive.Scrollbar>
            <ScrollAreaPrimitive.Scrollbar
                orientation="vertical"
                className={cn(
                    'flex w-2.5 touch-none select-none border-l border-l-transparent p-[1px]',
                    orientation === 'horizontal' && 'hidden',
                )}
                {...(orientation === 'both' || orientation === 'vertical' ? { forceMount: true } : {})}
            >
                <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-border" />
            </ScrollAreaPrimitive.Scrollbar>
            <ScrollAreaPrimitive.Corner />
        </ScrollAreaPrimitive.Root>
    ),
);
SCScrollArea.displayName = 'SCScrollArea';
