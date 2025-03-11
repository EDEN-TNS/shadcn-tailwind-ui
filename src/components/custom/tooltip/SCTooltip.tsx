import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/utils';

/**
 * 툴팁 컴포넌트 props 인터페이스
 * @interface SCTooltipProps
 * @property {React.ReactNode} children - 툴팁을 표시할 트리거 요소
 * @property {string | React.ReactNode} content - 툴팁 내용
 * @property {string} [side='top'] - 툴팁 표시 위치 (top, right, bottom, left)
 * @property {string} [align='center'] - 툴팁 정렬 (start, center, end)
 * @property {number} [delayDuration] - 툴팁 표시 지연 시간 (ms)
 * @property {number} [sideOffset] - 요소와의 간격 설정
 */
interface SCTooltipProps {
    children: React.ReactNode;
    content: string | React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
    delayDuration?: number;
    className?: string;
    sideOffset?: number;
}

const SCTooltipBase = React.forwardRef<HTMLDivElement, SCTooltipProps>(
    ({ children, content, side = 'top', align = 'center', delayDuration = 200, className, sideOffset = 4 }, ref) => {
        return (
            <TooltipPrimitive.Provider delayDuration={delayDuration}>
                <TooltipPrimitive.Root>
                    <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
                    <TooltipPrimitive.Content
                        ref={ref}
                        side={side}
                        align={align}
                        sideOffset={sideOffset}
                        className={cn(
                            'z-50 overflow-hidden rounded-md',
                            'bg-primary px-3 py-1.5 text-xs text-primary-foreground',
                            'duration-100 animate-in fade-in-0 zoom-in-95',
                            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
                            'data-[side=bottom]:slide-in-from-top-2',
                            'data-[side=left]:slide-in-from-right-2',
                            'data-[side=right]:slide-in-from-left-2',
                            'data-[side=top]:slide-in-from-bottom-2',
                            className,
                        )}
                    >
                        {content}
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Root>
            </TooltipPrimitive.Provider>
        );
    },
);

SCTooltipBase.displayName = 'SCTooltip';

export const SCTooltip = React.memo(SCTooltipBase);
