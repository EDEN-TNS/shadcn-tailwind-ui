import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import React from 'react';

interface SCAvatarProps {
    src?: string;
    alt?: string;
    fallback?: string;
    className?: string;
    imageClassName?: string;
    fallbackClassName?: string;
    onError?: () => void;
}

export const SCAvatar = React.memo(
    ({ src, alt, fallback, className, imageClassName, fallbackClassName, onError }: SCAvatarProps) => {
        return (
            <Avatar className={className}>
                <AvatarImage src={src} alt={alt} className={imageClassName} onError={onError} />
                <AvatarFallback
                    className={fallbackClassName}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    {fallback || (alt ? getInitials(alt) : 'NA')}
                </AvatarFallback>
            </Avatar>
        );
    },
);

// 이름에서 이니셜을 추출하는 헬퍼 함수
const getInitials = (name: string): string => {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

SCAvatar.displayName = 'SCAvatar';
