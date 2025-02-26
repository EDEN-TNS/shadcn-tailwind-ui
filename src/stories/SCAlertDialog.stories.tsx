import type { Meta, StoryObj } from '@storybook/react';

import { SCAlertDialog } from '@/components/custom/alertDialog/SCAlertDialog';
import { SCButton } from '@/components/custom/button/SCButton';

const meta: Meta<typeof SCAlertDialog> = {
    title: 'Components/SCAlertDialog',
    component: SCAlertDialog,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '사용자 확인이 필요한 작업을 위한 다이얼로그',
    },
};

export default meta;
type Story = StoryObj<typeof SCAlertDialog>;

export const Default: Story = {
    args: {
        trigger: <SCButton>다이얼로그 열기</SCButton>,
        title: '작업 확인',
        description: '이 작업을 진행하시겠습니까?',
    },
};

export const Destructive: Story = {
    args: {
        trigger: <SCButton variant="destructive">삭제</SCButton>,
        title: '삭제 확인',
        description: '이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
        variant: 'destructive',
        confirmText: '삭제',
    },
};

export const CustomButtons: Story = {
    args: {
        trigger: <SCButton>커스텀 버튼</SCButton>,
        title: '커스텀 버튼',
        description: '다양한 버튼 스타일을 적용할 수 있습니다.',
        confirmText: '확인',
        cancelText: '취소',
        confirmVariant: 'primary',
        cancelVariant: 'ghost',
    },
};

export const WithLoading: Story = {
    args: {
        trigger: <SCButton>비동기 작업</SCButton>,
        title: '비동기 작업',
        description: '비동기 작업 실행 중에는 로딩 상태가 표시됩니다.',
        onConfirm: () => new Promise(resolve => setTimeout(resolve, 2000)),
    },
};
