import * as React from 'react';

import { AlertDialogAction } from '@/components/ui/alert-dialog';
import { SCButton } from '@/components/custom/button/SCButton';
import { cn } from '@/lib/utils';

type ButtonVariant = 'default' | 'primary' | 'destructive' | 'secondary' | 'outline' | 'ghost' | 'link';

/**
 * 알림 다이얼로그의 액션 버튼 컴포넌트
 * @component SCAlertDialogAction
 * @property {ButtonVariant} [variant='default'] - 버튼 스타일 변형
 * @property {boolean} [isLoading] - 로딩 상태 표시 여부
 */
const SCAlertDialogAction = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof AlertDialogAction> & {
        variant?: ButtonVariant;
        isLoading?: boolean;
    }
>(({ className, variant = 'default', isLoading, onClick, ...props }, ref) => {
    // 버튼 스타일 매핑
    const variantStyles = {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        primary: 'bg-blue-500 text-white hover:bg-blue-500/80',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
    };

    return (
        <AlertDialogAction asChild>
            <SCButton
                ref={ref}
                variant={variant}
                isLoading={isLoading}
                className={cn(variantStyles[variant], className)}
                onClick={onClick}
                {...props}
            />
        </AlertDialogAction>
    );
});

SCAlertDialogAction.displayName = 'SCAlertDialogAction';

export { SCAlertDialogAction };
