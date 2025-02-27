import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import React from 'react';

interface SCCardProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    content?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    headerClassName?: string;
    contentClassName?: string;
    footerClassName?: string;
}

export const SCCard = React.memo(
    ({
        title,
        description,
        content,
        footer,
        className,
        headerClassName,
        contentClassName,
        footerClassName,
    }: SCCardProps) => {
        return (
            <Card className={className}>
                {(title || description) && (
                    <CardHeader className={headerClassName}>
                        {title && <CardTitle>{title}</CardTitle>}
                        {description && <CardDescription>{description}</CardDescription>}
                    </CardHeader>
                )}
                {content && <CardContent className={contentClassName}>{content}</CardContent>}
                {footer && <CardFooter className={footerClassName}>{footer}</CardFooter>}
            </Card>
        );
    },
);

SCCard.displayName = 'SCCard';
