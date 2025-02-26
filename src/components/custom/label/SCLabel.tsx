import * as React from 'react';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface SCLabelProps extends React.ComponentPropsWithoutRef<typeof Label> {
    error?: boolean;
}

export const SCLabel = React.forwardRef<HTMLLabelElement, SCLabelProps>(
    ({ className, children, error, ...props }, ref) => {
        return (
            <Label ref={ref} className={cn(error && 'text-red-500', className)} {...props}>
                {children}
            </Label>
        );
    },
);

SCLabel.displayName = 'SCLabel';
