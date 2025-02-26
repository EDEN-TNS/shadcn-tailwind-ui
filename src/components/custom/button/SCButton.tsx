import * as React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * 기본 버튼 컴포넌트를 확장한 커스텀 버튼 props 인터페이스
 * @interface SCButtonProps
 * @extends {Omit<ButtonProps, 'variant'>}
 * @property {boolean} [isLoading] - 로딩 상태 표시
 * @property {React.ReactNode} [loadingIcon] - 커스텀 로딩 아이콘
 * @property {string} [loadingText] - 로딩 중 표시할 텍스트
 * @property {ButtonProps['variant'] | 'primary'} [variant] - 버튼 스타일 변형
 */
interface SCButtonProps extends Omit<ButtonProps, 'variant'> {
    isLoading?: boolean;
    loadingIcon?: React.ReactNode;
    loadingText?: string;
    variant?: ButtonProps['variant'] | 'primary';
}

export const SCButton = React.forwardRef<HTMLButtonElement, SCButtonProps>(
    ({ className, variant = 'default', isLoading, loadingIcon, loadingText, children, disabled, ...props }, ref) => {
        const variantClasses = variant === 'primary' ? 'bg-blue-600 hover:bg-blue-700 text-white' : '';

        return (
            <Button
                ref={ref}
                variant={variant === 'primary' ? 'default' : variant}
                className={cn(variantClasses, className)}
                disabled={isLoading || disabled}
                aria-disabled={isLoading || disabled}
                aria-busy={isLoading}
                {...props}
            >
                {isLoading ? (
                    <div role="status" aria-label="로딩 중" className="flex items-center space-x-2">
                        {loadingIcon || (
                            <span className="mr-2 h-4 w-4 animate-spin" aria-hidden="true">
                                ⏳
                            </span>
                        )}
                        <span>{loadingText || children}</span>
                        <span className="sr-only">버튼 로딩 중입니다</span>
                    </div>
                ) : (
                    children
                )}
            </Button>
        );
    },
);

SCButton.displayName = 'SCButton';
