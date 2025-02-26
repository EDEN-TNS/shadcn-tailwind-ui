import * as React from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

/**
 * 입력 필드 컴포넌트 props 인터페이스
 * @interface SCInputProps
 * @extends {React.InputHTMLAttributes<HTMLInputElement>}
 * @property {boolean} [error] - 에러 상태
 * @property {string} [helperText] - 도움말 텍스트
 * @property {string} [className] - 추가 스타일 클래스
 */
interface SCInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    helperText?: string;
}

const SCInputBase = React.forwardRef<HTMLInputElement, SCInputProps>(
    ({ className, error = false, helperText, ...props }, ref) => {
        const hasError = error === true;
        const helperId = helperText ? 'input-helper-text' : undefined;

        return (
            <div className="flex flex-col gap-1.5">
                <Input
                    className={cn(hasError && 'border-red-500 focus-visible:ring-red-500', className)}
                    ref={ref}
                    aria-invalid={hasError}
                    aria-describedby={helperId}
                    {...props}
                />
                {helperText && (
                    <p id={helperId} className={cn('text-sm', hasError ? 'text-red-500' : 'text-muted-foreground')}>
                        {helperText}
                    </p>
                )}
            </div>
        );
    },
);

SCInputBase.displayName = 'SCInput';

export const SCInput = React.memo(SCInputBase);
