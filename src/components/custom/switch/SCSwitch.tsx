import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';

const SC_SWITCH_LABEL_POSITIONS = {
    top: 'flex-col',
    left: 'flex-row items-center',
    right: 'flex-row-reverse',
} as const;

/**
 * 스위치 컴포넌트 props 인터페이스
 * @interface SCSwitchProps
 * @extends {React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>}
 * @property {string} [label] - 스위치 레이블
 * @property {string} [description] - 스위치 설명
 * @property {boolean} [error] - 에러 상태
 * @property {keyof typeof SC_SWITCH_LABEL_POSITIONS} [labelPosition='left'] - 레이블 위치
 */
interface SCSwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
    label?: string;
    description?: string;
    error?: boolean;
    helperText?: string;
    labelPosition?: keyof typeof SC_SWITCH_LABEL_POSITIONS;
}

const SCSwitchBase = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SCSwitchProps>(
    ({ className, label, description, error, helperText, labelPosition = 'left', ...props }, ref) => {
        const labelContent = React.useMemo(
            () =>
                (label || description) && (
                    <div className="flex flex-col gap-0.5">
                        {label && (
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor={props.id}
                            >
                                {label}
                            </label>
                        )}
                        {description && (
                            <p className="text-sm text-muted-foreground" id={`${props.id}-description`}>
                                {description}
                            </p>
                        )}
                    </div>
                ),
            [label, description, props.id],
        );

        return (
            <div className={cn('flex gap-2', SC_SWITCH_LABEL_POSITIONS[labelPosition])}>
                {labelContent}
                <SwitchPrimitive.Root
                    ref={ref}
                    className={cn(
                        'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
                        error && 'border-red-500 focus-visible:ring-red-500',
                        className,
                    )}
                    aria-label={label}
                    aria-describedby={description ? `${props.id}-description` : undefined}
                    {...props}
                >
                    <SwitchPrimitive.Thumb
                        className={cn(
                            'pointer-events-none block h-4 w-4 rounded-full bg-background transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
                        )}
                    />
                </SwitchPrimitive.Root>
                {helperText && (
                    <p
                        className={cn('text-sm', error ? 'text-red-500' : 'text-muted-foreground')}
                        id={`${props.id}-helper`}
                    >
                        {helperText}
                    </p>
                )}
            </div>
        );
    },
);

SCSwitchBase.displayName = 'SCSwitch';

export const SCSwitch = React.memo(SCSwitchBase);
