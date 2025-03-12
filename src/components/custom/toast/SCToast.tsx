import 'react-toastify/dist/ReactToastify.css';

import {
    Bounce,
    Flip,
    Id,
    ToastTransition as RTToastTransition,
    ToastContainer as ReactToastContainer,
    Slide,
    UpdateOptions,
    Zoom,
    toast as reactToastify,
} from 'react-toastify';

import React from 'react';
import { cn } from '@/lib/utils';

export type ToastType = 'info' | 'success' | 'warning' | 'error' | 'default';
export type ToastPosition = 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
export type ToastTheme = 'light' | 'dark' | 'colored';
export type ToastTransition = 'bounce' | 'slide' | 'zoom' | 'flip';

export interface SCToastProps {
    position?: ToastPosition;
    autoClose?: number | false;
    hideProgressBar?: boolean;
    closeOnClick?: boolean;
    pauseOnHover?: boolean;
    draggable?: boolean;
    theme?: ToastTheme;
    transition?: ToastTransition;
    className?: string;
    limit?: number;
    newestOnTop?: boolean;
    rtl?: boolean;
    pauseOnFocusLoss?: boolean;
}

export interface ToastMessageProps {
    message: React.ReactNode;
    type?: ToastType;
    position?: ToastPosition;
    autoClose?: number | false;
    hideProgressBar?: boolean;
    closeOnClick?: boolean;
    pauseOnHover?: boolean;
    draggable?: boolean;
    progress?: number;
    theme?: ToastTheme;
    transition?: ToastTransition;
    className?: string;
}

export interface ToastUpdateProps extends UpdateOptions {
    toastId: Id;
    message?: React.ReactNode;
    type?: ToastType;
    options?: Omit<ToastMessageProps, 'message' | 'type'>;
}

const getTransition = (transition?: ToastTransition): RTToastTransition | undefined => {
    if (!transition) return undefined;

    switch (transition) {
        case 'bounce':
            return Bounce;
        case 'slide':
            return Slide;
        case 'zoom':
            return Zoom;
        case 'flip':
            return Flip;
        default:
            return Bounce;
    }
};

export const toast = {
    show: ({ message, type = 'default', className, theme = 'colored', ...options }: ToastMessageProps): Id => {
        const transition = getTransition(options.transition as ToastTransition);

        return reactToastify(message, {
            ...options,
            type,
            theme,
            transition,
            className: cn(className),
        });
    },

    info: (message: React.ReactNode, options?: Omit<ToastMessageProps, 'message' | 'type'>) =>
        toast.show({ message, type: 'info', ...options }),

    success: (message: React.ReactNode, options?: Omit<ToastMessageProps, 'message' | 'type'>) =>
        toast.show({ message, type: 'success', ...options }),

    warning: (message: React.ReactNode, options?: Omit<ToastMessageProps, 'message' | 'type'>) =>
        toast.show({ message, type: 'warning', ...options }),

    error: (message: React.ReactNode, options?: Omit<ToastMessageProps, 'message' | 'type'>) =>
        toast.show({ message, type: 'error', ...options }),

    default: (message: React.ReactNode, options?: Omit<ToastMessageProps, 'message' | 'type'>) =>
        toast.show({ message, type: 'default', ...options }),

    update: ({ toastId, message, type, options }: ToastUpdateProps) => {
        const transition = options?.transition ? getTransition(options.transition) : undefined;

        reactToastify.update(toastId, {
            render: message,
            type,
            ...options,
            transition,
        });
    },

    dismiss: (toastId?: Id) => {
        reactToastify.dismiss(toastId);
    },

    dismissAll: () => {
        reactToastify.dismiss();
    },

    promise: <T extends Promise<any>>(
        promise: T,
        {
            pending,
            success,
            error,
        }: {
            pending: React.ReactNode;
            success: React.ReactNode | ((data: Awaited<T>) => React.ReactNode);
            error: React.ReactNode | ((err: any) => React.ReactNode);
        },
        options?: Omit<ToastMessageProps, 'message' | 'type'>,
    ) => {
        const transition = options?.transition ? getTransition(options.transition) : undefined;
        const theme = options?.theme || 'colored';

        return reactToastify.promise(promise, { pending, success, error } as any, {
            ...options,
            theme,
            transition,
            className: cn(options?.className),
        });
    },

    isActive: (toastId: Id) => {
        return reactToastify.isActive(toastId);
    },
};

export const SCToast = React.memo(
    ({
        position = 'top-right',
        autoClose = 5000,
        hideProgressBar = false,
        closeOnClick = true,
        pauseOnHover = true,
        draggable = true,
        theme = 'colored',
        transition = 'bounce',
        className,
        limit,
        newestOnTop,
        rtl,
        pauseOnFocusLoss,
        ...props
    }: SCToastProps) => {
        const transitionValue = getTransition(transition);

        return (
            <ReactToastContainer
                position={position}
                autoClose={autoClose}
                hideProgressBar={hideProgressBar}
                closeOnClick={closeOnClick}
                pauseOnHover={pauseOnHover}
                draggable={draggable}
                theme={theme}
                transition={transitionValue}
                className={cn(className)}
                limit={limit}
                newestOnTop={newestOnTop}
                rtl={rtl}
                pauseOnFocusLoss={pauseOnFocusLoss}
                {...props}
            />
        );
    },
);

SCToast.displayName = 'SCToast';
