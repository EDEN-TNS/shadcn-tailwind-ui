import React, { useId } from 'react';

import { Checkbox } from '@/components/ui/checkbox';

interface SCCheckboxProps extends React.ComponentPropsWithoutRef<typeof Checkbox> {
    label?: string;
}

export const SCCheckbox = React.memo(({ label, className, id: propId, ...props }: SCCheckboxProps) => {
    const generatedId = useId();
    const id = propId || generatedId;

    return (
        <div className="flex items-center space-x-2">
            <Checkbox id={id} className={className} {...props} />
            {label && (
                <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
        </div>
    );
});

SCCheckbox.displayName = 'SCCheckbox';
