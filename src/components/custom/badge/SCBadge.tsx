import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface SCBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'primary';
    children: React.ReactNode;
    className?: string;
}

export const SCBadge = ({ variant = 'default', children, className, ...props }: SCBadgeProps) => {
    return (
        <Badge
            variant={variant === 'primary' ? 'default' : variant}
            className={cn(variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-500/80', className)}
            {...props}
        >
            {children}
        </Badge>
    );
};
