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
    // 공백으로 분리된 이름에서 첫 글자만 추출
    const words = name.split(' ');
    // 각 단어의 첫 글자만 추출 (한글, 영문 모두 지원)
    const initials = words
        .map(word => {
            // 단어가 비어있지 않은 경우에만 첫 글자 추출
            return word.length > 0 ? word.charAt(0) : '';
        })
        .join('');

    // 최대 2글자까지만 사용
    return initials.toUpperCase().slice(0, 2);
};

SCAvatar.displayName = 'SCAvatar';
