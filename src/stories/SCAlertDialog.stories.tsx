import type { Meta, StoryObj } from '@storybook/react';

import { SCAlertDialog } from '@/components/custom/alertDialog/SCAlertDialog';
import { SCButton } from '@/components/custom/button/SCButton';

const meta: Meta<typeof SCAlertDialog> = {
    title: 'Components/SCAlertDialog',
    component: SCAlertDialog,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '사용자 확인이 필요한 작업을 위한 다이얼로그',
        docs: {
            description: {
                component: `
# 알림 다이얼로그 컴포넌트

\`SCAlertDialog\` 컴포넌트는 사용자의 확인이 필요한 중요한 작업을 수행하기 전에 표시되는 모달 다이얼로그입니다.

## 기본 기능
- 사용자 확인이 필요한 작업에 대한 경고 표시
- 확인 및 취소 버튼 커스터마이징 지원
- 다양한 버튼 스타일 지원 (primary, destructive 등)
- 비동기 작업 처리 중 로딩 상태 표시
- 접근성을 고려한 키보드 네비게이션 지원

## 사용 방법

\`\`\`jsx
import { SCAlertDialog } from '@edentns/shadcn-tailwind-ui';
import { SCButton } from '@edentns/shadcn-tailwind-ui';

<SCAlertDialog
  trigger={<SCButton>다이얼로그 열기</SCButton>}
  title="작업 확인"
  description="이 작업을 진행하시겠습니까?"
  onConfirm={() => console.log('확인됨')}
/>
\`\`\`

## 속성

| 속성 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| trigger | React.ReactNode | required | 다이얼로그를 열기 위한 트리거 요소 |
| title | string | undefined | 다이얼로그 제목 |
| description | string | undefined | 다이얼로그 설명 |
| variant | 'default' \| 'destructive' | 'default' | 다이얼로그 스타일 변형 |
| confirmText | string | '확인' | 확인 버튼 텍스트 |
| cancelText | string | '취소' | 취소 버튼 텍스트 |
| confirmVariant | ButtonVariant | 'default' | 확인 버튼 스타일 |
| cancelVariant | ButtonVariant | 'outline' | 취소 버튼 스타일 |
| onConfirm | () => void \| Promise<void> | undefined | 확인 버튼 클릭 시 호출되는 함수 |
| onCancel | () => void | undefined | 취소 버튼 클릭 시 호출되는 함수 |
`,
            },
        },
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
        confirmVariant: 'destructive',
        cancelVariant: 'outline',
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
