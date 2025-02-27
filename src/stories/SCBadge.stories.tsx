import type { Meta, StoryObj } from '@storybook/react';

import { SCBadge } from '@/components/custom/badge/SCBadge';

const meta: Meta<typeof SCBadge> = {
    title: 'Components/SCBadge',
    component: SCBadge,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary', 'outline', 'destructive', 'primary'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCBadge>;

export const Default: Story = {
    args: {
        children: '기본 뱃지',
        variant: 'default',
    },
};

export const Secondary: Story = {
    args: {
        children: '보조 뱃지',
        variant: 'secondary',
    },
};

export const Outline: Story = {
    args: {
        children: '아웃라인 뱃지',
        variant: 'outline',
    },
};

export const Destructive: Story = {
    args: {
        children: '경고 뱃지',
        variant: 'destructive',
    },
};

export const Primary: Story = {
    args: {
        children: '주요 뱃지',
        variant: 'primary',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <SCBadge variant="default">기본</SCBadge>
            <SCBadge variant="secondary">보조</SCBadge>
            <SCBadge variant="outline">아웃라인</SCBadge>
            <SCBadge variant="destructive">경고</SCBadge>
            <SCBadge variant="primary">주요</SCBadge>
        </div>
    ),
};
