import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { SCButton } from '@/components/custom/button/SCButton';
import { SCInput } from '@/components/custom/input/SCInput';

const meta: Meta<typeof SCInput> = {
    title: 'Components/SCInput',
    component: SCInput,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '에러 상태와 도움말을 지원하는 입력 컴포넌트',
    },
};

export default meta;
type Story = StoryObj<typeof SCInput>;

// 기본 입력
export const Default: Story = {
    args: {
        placeholder: '입력해주세요',
    },
};

// 도움말 텍스트
export const WithHelperText: Story = {
    args: {
        placeholder: '이메일',
        helperText: '업무용 이메일을 입력해주세요.',
    },
};

// 에러 상태
export const WithError: Story = {
    args: {
        placeholder: '이메일',
        error: true,
        helperText: '올바른 이메일 형식이 아닙니다.',
        defaultValue: 'invalid-email',
    },
};

// 비활성화
export const Disabled: Story = {
    args: {
        placeholder: '비활성화된 입력창',
        disabled: true,
    },
};

// 파일 입력
export const FileInput: Story = {
    args: {
        type: 'file',
        accept: 'image/*',
    },
};

// 버튼과 함께 사용
export const WithButton: Story = {
    render: () => (
        <div className="flex w-full max-w-sm gap-2">
            <SCInput placeholder="이메일을 입력하세요" type="email" />
            <SCButton type="submit">구독</SCButton>
        </div>
    ),
};

// 폼 예제
export const WithForm: Story = {
    render: () => {
        const [formData, setFormData] = React.useState({
            username: '',
            email: '',
        });
        const [submitted, setSubmitted] = React.useState('');

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            setSubmitted(JSON.stringify(formData, null, 2));
        };

        return (
            <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                <div className="space-y-2">
                    <label htmlFor="username" className="text-sm font-medium">
                        사용자 이름
                    </label>
                    <SCInput
                        id="username"
                        placeholder="사용자 이름"
                        value={formData.username}
                        onChange={e => setFormData(prev => ({ ...prev, username: e.target.value }))}
                        helperText="공개적으로 표시되는 이름입니다."
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                        이메일
                    </label>
                    <SCInput
                        id="email"
                        type="email"
                        placeholder="이메일"
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                </div>
                <SCButton type="submit">제출</SCButton>
                {submitted && (
                    <pre className="mt-4 rounded-lg bg-slate-950 p-4">
                        <code className="text-white">{submitted}</code>
                    </pre>
                )}
            </form>
        );
    },
};
