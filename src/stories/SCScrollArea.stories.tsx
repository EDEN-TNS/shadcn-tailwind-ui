import type { Meta, StoryObj } from '@storybook/react';

import { SCButton } from '@/components/custom/button/SCButton';
import { SCScrollArea } from '@/components/custom/scrollArea/SCScrollArea';

const meta: Meta<typeof SCScrollArea> = {
    title: 'Components/SCScrollArea',
    component: SCScrollArea,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
  # 스크롤 영역 컴포넌트
  
  \`SCScrollArea\` 컴포넌트는 사용자 정의 스타일링을 위한 크로스 브라우저 스크롤 기능을 제공합니다.
  
  ## 사용 방법
  
  \`\`\`jsx
  import { SCScrollArea } from '@edentns/shadcn-tailwind-ui';
  
  <SCScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
    긴 내용이 들어갑니다...
  </SCScrollArea>
  \`\`\`
  `,
            },
        },
    },
    decorators: [
        Story => (
            <div className="sb-unstyled">
                <div className="bg-background p-6 text-foreground">
                    <Story />
                </div>
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof SCScrollArea>;

export const VerticalScroll: Story = {
    render: () => (
        <SCScrollArea className="h-[200px] w-[350px] rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">알림</h4>
                {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="mb-4 last:mb-0">
                        <div className="text-sm">알림 {i + 1}</div>
                        <div className="text-sm text-muted-foreground">
                            이것은 알림 내용입니다. 스크롤 테스트를 위한 예제입니다.
                        </div>
                    </div>
                ))}
            </div>
        </SCScrollArea>
    ),
};

export const HorizontalScroll: Story = {
    render: () => (
        <div>
            <h3 className="mb-4 text-lg font-medium">가로 스크롤</h3>
            <SCScrollArea orientation="horizontal" className="w-[350px] rounded-md border">
                <div className="flex p-4">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div key={i} className="mr-4 flex-shrink-0 last:mr-0">
                            <div className="flex h-[100px] w-[100px] items-center justify-center rounded-md bg-muted">
                                항목 {i + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </SCScrollArea>
        </div>
    ),
};

export const BothScrollDirections: Story = {
    render: () => (
        <div>
            <h3 className="mb-4 text-lg font-medium">양방향 스크롤</h3>
            <SCScrollArea orientation="both" className="h-[350px] w-[350px] rounded-md border">
                <div style={{ width: '1000px', height: '1000px' }} className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">양방향 스크롤 예제</h4>
                    <div className="grid grid-cols-10 gap-4">
                        {Array.from({ length: 100 }).map((_, i) => (
                            <div
                                key={i}
                                className="flex h-[80px] w-[80px] items-center justify-center rounded-md bg-muted"
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </SCScrollArea>
        </div>
    ),
};

export const CardWithScrollArea: Story = {
    render: () => (
        <div>
            <h3 className="mb-4 text-lg font-medium">카드 내 스크롤 영역</h3>
            <div className="w-[400px] rounded-md border">
                <div className="border-b p-4">
                    <h4 className="text-sm font-medium">알림</h4>
                    <p className="text-sm text-muted-foreground">최근 알림 목록입니다.</p>
                </div>
                <SCScrollArea className="h-[300px]">
                    <div className="p-4">
                        {Array.from({ length: 50 }).map((_, i) => (
                            <div key={i} className="mb-4 border-b pb-4 last:mb-0 last:border-b-0">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium">알림 {i + 1}</div>
                                    <div className="text-xs text-muted-foreground">방금 전</div>
                                </div>
                                <div className="mt-1 text-sm">새로운 알림이 도착했습니다. 확인해보세요.</div>
                            </div>
                        ))}
                    </div>
                </SCScrollArea>
                <div className="border-t p-4">
                    <SCButton variant="outline" size="sm" className="w-full">
                        모든 알림 보기
                    </SCButton>
                </div>
            </div>
        </div>
    ),
};
