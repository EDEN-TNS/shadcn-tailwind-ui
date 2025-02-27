import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SCTabs } from '@/components/custom/tabs/SCTabs';

const meta: Meta<typeof SCTabs> = {
    title: 'Components/SCTabs',
    component: SCTabs,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
## 사용법
탭 아이템은 다음과 같은 구조로 정의합니다:

\`\`\`typescript
interface TabItem {
    value: string;    // 탭의 고유 값
    label: string;    // 탭 레이블
    content: React.ReactNode;  // 탭 내용
    disabled?: boolean;  // 비활성화 여부
}
\`\`\`
                `,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCTabs>;

export const Basic: Story = {
    args: {
        items: [
            {
                value: 'account',
                label: '계정',
                content: (
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium">계정 설정을 변경하실 수 있습니다.</h4>
                        <div className="space-y-2">
                            <Label htmlFor="name">이름</Label>
                            <Input id="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="username">사용자명</Label>
                            <Input id="username" defaultValue="@peduarte" />
                        </div>
                        <Button>변경사항 저장</Button>
                    </div>
                ),
            },
            {
                value: 'password',
                label: '비밀번호',
                content: '비밀번호를 변경하실 수 있습니다.',
            },
            {
                value: 'disabled',
                label: '비활성화 탭',
                content: '이 탭은 비활성화되어 있습니다.',
                disabled: true,
            },
        ],
        className: 'w-[400px]',
    },
    parameters: {
        docs: {
            description: {
                story: '기본적인 탭 컴포넌트 예제입니다.',
            },
        },
    },
};

export const WithCallback: Story = {
    args: {
        items: [
            {
                value: 'tab1',
                label: '첫 번째 탭',
                content: '첫 번째 탭 내용',
            },
            {
                value: 'tab2',
                label: '두 번째 탭',
                content: '두 번째 탭 내용',
            },
        ],
    },
    render: args => (
        <SCTabs
            {...args}
            onChange={value => {
                alert(`선택된 탭: ${value}`);
                console.log('탭 변경:', value);
            }}
        />
    ),
    parameters: {
        docs: {
            description: {
                story: '탭 변경 시 콜백 함수를 실행하는 예제입니다.',
            },
        },
    },
};
