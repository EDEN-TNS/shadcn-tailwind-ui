import { Folder, Home, Menu, Settings, Users } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';

import { SCSidebar } from '@/components/custom/sidebar/SCSidebar';
import { SCSidebarProvider } from '@/components/custom/sidebar/SCSidebarProvider';
import { SCSidebarTrigger } from '@/components/custom/sidebar/SCSidebarTrigger';

const meta: Meta<typeof SCSidebar> = {
    title: 'Components/SCSidebar',
    component: SCSidebar,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '섹션과 서브메뉴를 지원하는 사이드바 컴포넌트',
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# 사이드바 컴포넌트

\`SCSidebar\` 컴포넌트는 웹 애플리케이션의 네비게이션을 위한 사이드바를 제공합니다.

## 기본 기능
- 섹션별 메뉴 그룹화 지원
- 서브메뉴 지원
- 아이콘 지원
- 현재 경로 하이라이팅
- 사용자 프로필 표시
- 조직 정보 표시
- 반응형 디자인 지원
- 독립적인 토글 트리거 컴포넌트

## 컴포넌트 구조
- \`SCSidebarProvider\`: 사이드바의 상태를 관리하는 컨텍스트 제공자
- \`SCSidebar\`: 메인 사이드바 컴포넌트
- \`SCSidebarTrigger\`: 사이드바 토글 버튼 컴포넌트

## 사용법

\`\`\`jsx
import { SCSidebarProvider } from '@/components/custom/sidebar/SCSidebarProvider';
import { SCSidebar } from '@/components/custom/sidebar/SCSidebar';
import { SCSidebarTrigger } from '@/components/custom/sidebar/SCSidebarTrigger';
import { Home, Menu, Settings, Users } from 'lucide-react';

const menuItems = [
  {
    icon: Home,
    label: '대시보드',
    href: '/',
    section: 'Platform',
  },
  {
    icon: Settings,
    label: '설정',
    section: 'Platform',
    items: [
      { label: '일반', href: '/settings/general' },
      { label: '보안', href: '/settings/security' },
    ],
  },
  {
    icon: Users,
    label: '팀',
    href: '/teams',
    section: 'Projects',
  },
];

// 기본 사용 예시
function MyLayout() {
  return (
    <SCSidebarProvider>
      <div className="flex flex-1 w-full">
        <SCSidebar
          menuItems={menuItems}
          sections={['Platform', 'Projects']}
          organization={{
            name: '샘플 조직',
            logo: '🏢',
          }}
          user={{
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
          }}
          currentPath="/settings/security"
        />
        <main className="relative flex-1">
          <SCSidebarTrigger
            triggerIcon={<Menu className="h-4 w-4" />}
            triggerClassName="absolute left-[-12px] top-4"
          />
          {/* 메인 콘텐츠 */}
        </main>
      </div>
    </SCSidebarProvider>
  );
}
\`\`\`
`,
            },
        },
    },
    decorators: [
        Story => (
            <SCSidebarProvider>
                <Story />
            </SCSidebarProvider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof SCSidebar>;

const defaultMenuItems = [
    {
        icon: Home,
        label: '대시보드',
        href: '/',
        section: 'Platform',
    },
    {
        icon: Settings,
        label: '설정',
        section: 'Platform',
        items: [
            { label: '일반', href: '/settings/general' },
            { label: '보안', href: '/settings/security' },
        ],
    },
    {
        icon: Folder,
        label: '프로젝트',
        href: '/projects',
        section: 'Projects',
    },
    {
        icon: Users,
        label: '팀',
        href: '/teams',
        section: 'Projects',
    },
];

// 섹션 그룹이 있는 사이드바
export const WithSections: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

// 섹션 그룹이 없는 사이드바
export const WithoutSections: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        menuItems: defaultMenuItems,
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

export const WithoutUser: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
        },
    },
};

export const WithCurrentPath: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        ...WithSections.args,
        currentPath: '/settings/security',
    },
};

export const WithoutSubText: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

export const WithLongSubText: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '매우 긴 서브텍스트가 있는 엔터프라이즈 버전 - 텍스트가 잘리는지 확인',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

export const CustomLogoBackground: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
            logoBgColor: 'bg-blue-500',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

export const NonCollapsible: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1" />
        </div>
    ),
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
        collapsible: false,
    },
};

export const GradientLogoBackground: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
            logoBgColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

// 많은 메뉴 아이템으로 스크롤 테스트를 위한 예제
export const WithManyItems: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        menuItems: [
            ...defaultMenuItems,
            // 추가 메뉴 아이템들
            {
                icon: Home,
                label: '메뉴 아이템 1',
                href: '/item1',
                section: 'Extra',
            },
            {
                icon: Settings,
                label: '메뉴 아이템 2',
                href: '/item2',
                section: 'Extra',
            },
            {
                icon: Folder,
                label: '메뉴 아이템 3',
                href: '/item3',
                section: 'Extra',
            },
            {
                icon: Users,
                label: '메뉴 아이템 4',
                href: '/item4',
                section: 'Extra',
            },
            {
                icon: Home,
                label: '메뉴 아이템 5',
                href: '/item5',
                section: 'More',
            },
            {
                icon: Settings,
                label: '메뉴 아이템 6',
                href: '/item6',
                section: 'More',
            },
            {
                icon: Folder,
                label: '메뉴 아이템 7',
                href: '/item7',
                section: 'More',
            },
            {
                icon: Users,
                label: '메뉴 아이템 8',
                href: '/item8',
                section: 'More',
            },
        ],
        sections: ['Platform', 'Projects', 'Extra', 'More'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
        className: 'h-[500px]',
    },
    parameters: {
        docs: {
            description: {
                story: '많은 메뉴 아이템을 포함하여 스크롤 기능을 테스트하는 예제입니다.',
            },
        },
    },
};

export const WithManySubItems: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        menuItems: [
            {
                icon: Settings,
                label: '설정',
                section: 'Platform',
                items: Array.from({ length: 15 }, (_, i) => ({
                    label: `설정 항목 ${i + 1}`,
                    href: `/settings/item${i + 1}`,
                })),
            },
            ...defaultMenuItems.filter(item => item.label !== '설정'),
        ],
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
        className: 'h-[500px]',
    },
    parameters: {
        docs: {
            description: {
                story: '많은 서브메뉴 아이템을 포함하여 스크롤 기능을 테스트하는 예제입니다.',
            },
        },
    },
};

// 다양한 트리거 위치 예제들
export const TopRightTrigger: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger
                    triggerIcon={<Menu className="h-4 w-4" />}
                    triggerClassName="absolute right-4 top-4 bg-background border rounded-full p-1 shadow-sm"
                />
            </main>
        </div>
    ),
    args: {
        ...WithSections.args,
    },
    parameters: {
        docs: {
            description: {
                story: '트리거 버튼을 우측 상단에 위치시킨 예제입니다.',
            },
        },
    },
};

export const BottomRightTrigger: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger
                    triggerIcon={<Menu className="h-4 w-4" />}
                    triggerClassName="absolute right-4 bottom-4 bg-background border rounded-full p-1 shadow-sm"
                />
            </main>
        </div>
    ),
    args: {
        ...WithSections.args,
    },
    parameters: {
        docs: {
            description: {
                story: '트리거 버튼을 우측 하단에 위치시킨 예제입니다.',
            },
        },
    },
};

export const WithoutTrigger: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1" />
        </div>
    ),
    args: {
        ...WithSections.args,
    },
    parameters: {
        docs: {
            description: {
                story: '트리거 버튼 없이 사이드바만 사용하는 예제입니다.',
            },
        },
    },
};
