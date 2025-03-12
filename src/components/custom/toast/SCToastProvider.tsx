import { SCToast, SCToastProps } from '@/components/custom/toast/SCToast';

import React from 'react';

export interface SCToastProviderProps extends SCToastProps {
    children?: React.ReactNode;
}

export const SCToastProvider = ({ children, ...props }: SCToastProviderProps) => {
    return (
        <>
            {children}
            <SCToast {...props} />
        </>
    );
};

SCToastProvider.displayName = 'SCToastProvider';
