import { Mail } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';
import { SCButton } from '@/components/custom/button/SCButton';

const meta: Meta<typeof SCButton> = {
    title: 'Components/SCButton',
    component: SCButton,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '다양한 스타일과 상태를 지원하는 버튼 컴포넌트',
    },
};

export default meta;
type Story = StoryObj<typeof SCButton>;

export const Default: Story = {
    args: {
        children: '기본 버튼',
    },
};

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: '주요 버튼',
    },
};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <Mail className="mr-2 h-4 w-4" /> 이메일 보내기
            </>
        ),
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
        children: '로딩 중',
    },
};

export const LoadingWithCustomIcon: Story = {
    args: {
        isLoading: true,
        loadingIcon: <span className="mr-2">🔄</span>,
        loadingText: '처리 중...',
        children: '클릭',
    },
};

export const Variants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <SCButton variant="default">Default</SCButton>
            <SCButton variant="primary">Primary</SCButton>
            <SCButton variant="destructive">Destructive</SCButton>
            <SCButton variant="outline">Outline</SCButton>
            <SCButton variant="secondary">Secondary</SCButton>
            <SCButton variant="ghost">Ghost</SCButton>
            <SCButton variant="link">Link</SCButton>
        </div>
    ),
};
