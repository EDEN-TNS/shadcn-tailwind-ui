import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface SCCheckboxProps extends React.ComponentPropsWithoutRef<typeof Checkbox> {
    label?: string;
}

export const SCCheckbox = React.memo(({ label, className, ...props }: SCCheckboxProps) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox className={className} {...props} />
            {label && (
                <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor={props.id}
                >
                    {label}
                </label>
            )}
        </div>
    );
});

SCCheckbox.displayName = 'SCCheckbox';
