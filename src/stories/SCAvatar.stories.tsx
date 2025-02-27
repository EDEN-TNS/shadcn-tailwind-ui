import type { Meta, StoryObj } from '@storybook/react';

import { SCAvatar } from '@/components/custom/avatar/SCAvatar';

const meta: Meta<typeof SCAvatar> = {
    title: 'Components/SCAvatar',
    component: SCAvatar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
## 사용법
아바타 컴포넌트는 다음과 같은 구조로 정의합니다:

\`\`\`typescript
interface SCAvatarProps {
    src?: string;              // 이미지 URL
    alt?: string;              // 이미지 대체 텍스트
    fallback?: string;         // 이미지 로드 실패시 표시할 텍스트
    className?: string;        // 아바타 컨테이너 스타일
    imageClassName?: string;   // 이미지 스타일
    fallbackClassName?: string; // 폴백 스타일
    onError?: () => void;      // 이미지 로드 실패시 콜백
}
\`\`\`
                `,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCAvatar>;

export const Basic: Story = {
    args: {
        src: 'https://placedog.net/200/200?r',
        alt: 'User Avatar',
    },
};

export const WithFallback: Story = {
    args: {
        src: 'invalid-image-url',
        fallback: 'CN',
        className: 'bg-slate-100',
    },
};

export const CustomSizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <SCAvatar src="https://placedog.net/200/200?r" alt="Small Avatar" className="h-8 w-8" />
            <SCAvatar src="https://placedog.net/200/200?r" alt="Medium Avatar" className="h-12 w-12" />
            <SCAvatar src="https://placedog.net/200/200?r" alt="Large Avatar" className="h-16 w-16" />
        </div>
    ),
};

export const WithInitials: Story = {
    args: {
        alt: 'John Doe',
        fallbackClassName: '!bg-blue-500 text-white hover:!bg-blue-600',
    },
};

export const InitialsVariants: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <SCAvatar alt="John Doe" fallbackClassName="bg-blue-500 text-white" className="h-10 w-10" />
            <SCAvatar alt="Sarah Kim" fallbackClassName="bg-green-500 text-white" className="h-10 w-10" />
            <SCAvatar alt="Mike Brown" fallbackClassName="bg-purple-500 text-white" className="h-10 w-10" />
        </div>
    ),
};

export const WithError: Story = {
    args: {
        src: 'invalid-image-url',
        alt: 'Error Avatar',
        onError: () => console.log('Image failed to load'),
    },
};
