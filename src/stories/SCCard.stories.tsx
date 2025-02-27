import { BellRing, Check } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import { SCCard } from '@/components/custom/card/SCCard';
import { Switch } from '@/components/ui/switch';

const meta: Meta<typeof SCCard> = {
    title: 'Components/SCCard',
    component: SCCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
## 사용법
카드 컴포넌트는 다음과 같은 구조로 정의합니다:

\`\`\`typescript
interface SCCardProps {
    title?: React.ReactNode;       // 카드 제목
    description?: React.ReactNode; // 카드 설명
    content?: React.ReactNode;     // 카드 내용
    footer?: React.ReactNode;      // 카드 하단
    className?: string;            // 카드 전체 스타일
    headerClassName?: string;      // 헤더 스타일
    contentClassName?: string;     // 내용 스타일
    footerClassName?: string;      // 하단 스타일
}
\`\`\`
                `,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCCard>;

export const Basic: Story = {
    args: {
        title: '카드 제목',
        description: '카드에 대한 설명입니다.',
        content: '카드의 주요 내용이 들어갑니다.',
        footer: '카드 하단 영역입니다.',
        className: 'w-[350px]',
    },
};

export const WithButtons: Story = {
    args: {
        title: '알림',
        description: '새로운 메시지가 3개 있습니다.',
        content: (
            <div className="space-y-4">
                <div className="flex justify-between">
                    <div>
                        <h4 className="font-semibold">통화가 확인되었습니다.</h4>
                        <p className="text-sm text-muted-foreground">1시간 전</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h4 className="font-semibold">새로운 메시지가 있습니다!</h4>
                        <p className="text-sm text-muted-foreground">1시간 전</p>
                    </div>
                </div>
            </div>
        ),
        footer: (
            <div className="flex w-full justify-end">
                <Button variant="outline">모두 읽음 처리</Button>
            </div>
        ),
        className: 'w-[380px]',
    },
};

export const CustomStyling: Story = {
    args: {
        title: '맞춤 스타일',
        description: '각 섹션별로 스타일을 적용할 수 있습니다.',
        content: '내용 영역입니다.',
        footer: '하단 영역입니다.',
        className: 'w-[350px] border-blue-500',
        headerClassName: 'bg-slate-50',
        contentClassName: 'bg-white',
        footerClassName: 'bg-slate-50',
    },
};

export const NotificationCard: Story = {
    args: {
        title: (
            <div className="flex items-center space-x-2">
                <span>Notifications</span>
            </div>
        ),
        description: 'You have 3 unread messages.',
        content: (
            <div className="grid gap-4">
                <div className="flex items-center gap-4 space-x-4 rounded-md border p-4">
                    <BellRing className="h-4 w-4" />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Push Notifications</p>
                        <p className="text-sm text-muted-foreground">Send notifications to device.</p>
                    </div>
                    <Switch />
                </div>
                <div>
                    {[
                        {
                            title: 'Your call has been confirmed.',
                            description: '1 hour ago',
                        },
                        {
                            title: 'You have a new message!',
                            description: '1 hour ago',
                        },
                        {
                            title: 'Your subscription is expiring soon!',
                            description: '2 hours ago',
                        },
                    ].map((notification, index) => (
                        <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{notification.title}</p>
                                <p className="text-sm text-muted-foreground">{notification.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        footer: (
            <Button className="w-full">
                <Check className="mr-2 h-4 w-4" /> Mark all as read
            </Button>
        ),
        className: 'w-[380px]',
    },
    parameters: {
        docs: {
            description: {
                story: '알림 목록을 보여주는 카드 예제입니다.',
            },
        },
    },
};
