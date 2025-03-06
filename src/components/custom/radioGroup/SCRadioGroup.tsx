import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { Circle } from 'lucide-react';
import React from 'react';
import { SCLabel } from '../label/SCLabel';
import { cn } from '@/lib/utils';

// 옵션 타입 정의
export interface RadioOption {
    value: string;
    label: string;
    id?: string;
    disabled?: boolean;
    description?: string;
}

// RadioGroup 컴포넌트 Props 정의
export interface SCRadioGroupProps
    extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, 'children'> {
    className?: string;
    options?: RadioOption[];
    withDescription?: boolean;
}

// RadioGroupItem 컴포넌트 Props 정의 (내부용)
interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
    className?: string;
}

// RadioGroupItem 컴포넌트 (내부용)
const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioGroupItemProps>(
    ({ className, ...props }, ref) => {
        return (
            <RadioGroupPrimitive.Item
                ref={ref}
                className={cn(
                    'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                    className,
                )}
                {...props}
            >
                <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                    <Circle className="h-2.5 w-2.5 fill-current text-current" />
                </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
        );
    },
);
RadioGroupItem.displayName = 'RadioGroupItem';

// SCRadioGroup 컴포넌트
export const SCRadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, SCRadioGroupProps>(
    ({ className, options = [], withDescription = false, ...props }, ref) => {
        return (
            <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref}>
                {options.map(option => {
                    const id = option.id || `radio-${option.value}`;
                    return (
                        <div key={option.value} className="flex flex-col space-y-1">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={option.value} id={id} disabled={option.disabled} />
                                <SCLabel htmlFor={id} className={option.disabled ? 'text-muted-foreground' : ''}>
                                    {option.label}
                                </SCLabel>
                            </div>
                            {withDescription && option.description && (
                                <p className="ml-6 text-sm text-muted-foreground">{option.description}</p>
                            )}
                        </div>
                    );
                })}
            </RadioGroupPrimitive.Root>
        );
    },
);
SCRadioGroup.displayName = 'SCRadioGroup';
