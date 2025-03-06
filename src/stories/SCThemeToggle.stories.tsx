import type { Meta, StoryObj } from '@storybook/react';

import { SCButton } from '@/components/custom/button/SCButton';
import { SCCard } from '@/components/custom/card/SCCard';
import { SCThemeToggle } from '@/components/custom/theme/SCThemeToggle';
import { ThemeProvider } from '@/components/custom/theme/ThemeContext';

const meta: Meta<typeof SCThemeToggle> = {
    title: 'Theme/SCThemeToggle',
    component: SCThemeToggle,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
# 테마 토글 컴포넌트

\`SCThemeToggle\` 컴포넌트는 사용자가 라이트 모드와 다크 모드 사이를 쉽게 전환할 수 있게 해주는 버튼입니다.

## 기본 기능
- 현재 테마 상태 표시
- 클릭 시 테마 전환
- 시스템 테마 감지 및 자동 적용
- 사용자 선택 테마 저장
- 커스텀 스타일링 지원
- 다양한 UI 요소와 통합 가능

## 사용법

\`\`\`jsx
import { SCThemeToggle } from '@edentns/shadcn-tailwind-ui';
import { ThemeProvider } from '@edentns/shadcn-tailwind-ui';

// ThemeProvider로 애플리케이션 래핑
<ThemeProvider>
  <YourApp>
    {/* 네비게이션 바나 사이드바에 배치 */}
    <SCThemeToggle />
  </YourApp>
</ThemeProvider>

// 커스텀 스타일 적용
<SCThemeToggle className="border border-border rounded-full p-2" />
\`\`\`

## 주의사항
- 반드시 \`ThemeProvider\` 내부에서 사용해야 합니다.
- 테마 변경은 전체 애플리케이션에 적용됩니다.
`,
            },
        },
    },
    decorators: [
        Story => (
            <div className="sb-unstyled">
                <ThemeProvider>
                    <SCCard className="flex min-h-[200px] items-center justify-center p-6">
                        <Story />
                    </SCCard>
                </ThemeProvider>
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof SCThemeToggle>;

export const Docs: Story = {
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const Default: Story = {
    args: {},
};

export const WithCustomClass: Story = {
    args: {
        className: 'border border-border rounded-full p-2',
    },
};

export const InNavbar: Story = {
    render: args => (
        <SCCard className="mx-auto w-full max-w-screen-lg overflow-hidden">
            <div className="flex items-center justify-between border-b p-4">
                <div className="text-xl font-bold">로고</div>
                <nav className="flex items-center gap-4">
                    <SCButton variant="link" className="p-0">
                        홈
                    </SCButton>
                    <SCButton variant="link" className="p-0">
                        소개
                    </SCButton>
                    <SCButton variant="link" className="p-0">
                        서비스
                    </SCButton>
                    <SCButton variant="link" className="p-0">
                        연락처
                    </SCButton>
                    <SCThemeToggle {...args} />
                </nav>
            </div>
            <div className="p-6">
                <h1 className="mb-4 text-2xl font-bold">다크 모드 데모</h1>
                <p className="mb-4">이 예제는 네비게이션 바에서 테마 토글을 사용하는 방법을 보여줍니다.</p>
                <p>오른쪽 상단의 버튼을 클릭하여 테마를 전환해보세요.</p>
            </div>
        </SCCard>
    ),
};

export const InSidebar: Story = {
    render: args => (
        <div className="flex h-[400px]">
            <SCCard className="w-64 rounded-r-none p-4">
                <div className="mb-6">
                    <h2 className="mb-4 text-xl font-bold">대시보드</h2>
                    <ul className="space-y-2">
                        <li>
                            <SCButton variant="ghost" className="w-full justify-start">
                                홈
                            </SCButton>
                        </li>
                        <li>
                            <SCButton variant="ghost" className="w-full justify-start">
                                프로필
                            </SCButton>
                        </li>
                        <li>
                            <SCButton variant="ghost" className="w-full justify-start">
                                설정
                            </SCButton>
                        </li>
                        <li>
                            <SCButton variant="ghost" className="w-full justify-start">
                                통계
                            </SCButton>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-sm">테마 변경</span>
                    <SCThemeToggle {...args} />
                </div>
            </SCCard>
            <SCCard className="flex-1 rounded-l-none p-6">
                <h1 className="mb-4 text-2xl font-bold">콘텐츠 영역</h1>
                <p className="mb-4">이 예제는 사이드바에서 테마 토글을 사용하는 방법을 보여줍니다.</p>
                <p>왼쪽 사이드바 하단의 버튼을 클릭하여 테마를 전환해보세요.</p>
            </SCCard>
        </div>
    ),
};
