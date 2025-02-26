import * as React from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { SCButton } from '../button/SCButton';

type ButtonVariant = 'default' | 'primary' | 'destructive' | 'secondary' | 'outline' | 'ghost' | 'link';

/**
 * 알림 다이얼로그 컴포넌트의 props 인터페이스
 * @interface SCAlertDialogProps
 * @property {React.ReactNode} trigger - 다이얼로그를 트리거할 요소
 * @property {string} title - 다이얼로그 제목
 * @property {string} description - 다이얼로그 설명
 * @property {string} [cancelText='취소'] - 취소 버튼 텍스트
 * @property {string} [confirmText='확인'] - 확인 버튼 텍스트
 * @property {() => void | Promise<void>} [onConfirm] - 확인 버튼 클릭 핸들러
 * @property {'default' | 'destructive'} [variant='default'] - 다이얼로그 변형
 */
interface SCAlertDialogProps {
    trigger: React.ReactNode;
    title: string;
    description: string;
    cancelText?: string;
    confirmText?: string;
    onConfirm?: () => void | Promise<void>;
    variant?: 'default' | 'destructive';
    confirmVariant?: ButtonVariant;
    cancelVariant?: ButtonVariant;
    className?: string;
}

/**
 * SCAlertDialog 컴포넌트는 사용자 확인이 필요한 작업에 대한 다이얼로그를 제공합니다.
 */
export const SCAlertDialog = React.memo(
    ({
        trigger,
        title,
        description,
        cancelText = '취소',
        confirmText = '확인',
        onConfirm,
        variant = 'default',
        className,
        confirmVariant = variant,
        cancelVariant = 'outline',
    }: SCAlertDialogProps) => {
        const [isLoading, setIsLoading] = React.useState(false);

        const handleConfirm = async () => {
            if (!onConfirm) return;
            setIsLoading(true);
            try {
                await onConfirm();
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <AlertDialog>
                <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
                <AlertDialogContent className={className}>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{title}</AlertDialogTitle>
                        <AlertDialogDescription>{description}</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel asChild>
                            <SCButton variant={cancelVariant} disabled={isLoading}>
                                {cancelText}
                            </SCButton>
                        </AlertDialogCancel>
                        <AlertDialogAction asChild>
                            <SCButton variant={confirmVariant} onClick={handleConfirm} isLoading={isLoading}>
                                {confirmText}
                            </SCButton>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        );
    },
);

SCAlertDialog.displayName = 'SCAlertDialog';
