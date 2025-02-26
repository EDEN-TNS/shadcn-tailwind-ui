import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SCInput } from '@/components/custom/input/SCInput';
import { SCLabel } from '@/components/custom/label/SCLabel';

const meta: Meta<typeof SCLabel> = {
    title: 'Components/SCLabel',
    component: SCLabel,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '폼 요소에 사용되는 레이블 컴포넌트',
    },
};

export default meta;
type Story = StoryObj<typeof SCLabel>;

export const Default: Story = {
    args: {
        children: '기본 레이블',
        htmlFor: 'input',
    },
};

export const Required: Story = {
    args: {
        children: '이메일',
        htmlFor: 'email',
    },
};

export const WithError: Story = {
    args: {
        children: '에러 상태 레이블',
        htmlFor: 'error-input',
        error: true,
    },
};

export const WithCustomClass: Story = {
    args: {
        children: '커스텀 스타일 레이블',
        htmlFor: 'custom-input',
        className: 'text-blue-500 font-bold',
    },
};

export const WithInput: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <SCLabel htmlFor="email">이메일</SCLabel>
            <SCInput type="email" id="email" placeholder="이메일을 입력하세요" />
        </div>
    ),
};

export const RequiredWithInput: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <SCLabel htmlFor="email">이메일</SCLabel>
            <SCInput type="email" id="email" placeholder="이메일을 입력하세요" required />
        </div>
    ),
};

export const ErrorWithInput: Story = {
    render: function ErrorWithInput() {
        const [value, setValue] = React.useState('invalid-email');
        const hasError = !value.includes('@');

        return (
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <SCLabel htmlFor="email" error={hasError}>
                    이메일
                </SCLabel>
                <SCInput
                    type="email"
                    id="email"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    error={hasError}
                    helperText={hasError ? '올바른 이메일 형식이 아닙니다.' : undefined}
                />
            </div>
        );
    },
};
