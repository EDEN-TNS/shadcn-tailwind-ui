import { Folder, Home, Settings, Users } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';

import { SCSidebar } from '@/components/custom/sidebar/SCSidebar';

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

## 사용법

\`\`\`jsx
import { SCSidebar } from '@edentns/shadcn-tailwind-ui';
import { Home, Settings, Users } from 'lucide-react';

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

<SCSidebar
  menuItems={menuItems}
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
\`\`\`
`,
            },
        },
    },
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

export const Default: Story = {
    args: {
        menuItems: defaultMenuItems,
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

export const WithoutUser: Story = {
    args: {
        menuItems: defaultMenuItems,
        organization: {
            name: '샘플 조직',
            logo: '🏢',
        },
    },
};

export const WithCurrentPath: Story = {
    args: {
        ...Default.args,
        currentPath: '/settings/security',
    },
};
