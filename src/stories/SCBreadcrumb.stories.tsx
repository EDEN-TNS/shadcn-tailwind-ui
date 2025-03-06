import { ChevronRight, Slash } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';

import { SCBreadcrumb } from '@/components/custom/breadcrumb/SCBreadcrumb';

const meta: Meta<typeof SCBreadcrumb> = {
    title: 'Components/SCBreadcrumb',
    component: SCBreadcrumb,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        componentSubtitle: '현재 페이지의 경로를 계층적으로 표시하는 네비게이션 컴포넌트',
        docs: {
            description: {
                component: `
# 브레드크럼 컴포넌트

\`SCBreadcrumb\` 컴포넌트는 사용자가 현재 위치한 페이지의 경로를 계층적으로 표시하는 네비게이션 요소입니다.

## 기본 기능
- 경로 아이템을 props로 받아 자동 렌더링
- 커스텀 구분자(separator) 지원
- 드롭다운 메뉴 지원
- 경로가 길 때 생략 기능 지원
- 반응형 디자인 지원 (모바일에서는 드로어, 데스크탑에서는 드롭다운)
- 현재 페이지 표시 기능

## 사용법

\`\`\`jsx
import { SCBreadcrumb } from '@edentns/shadcn-tailwind-ui';
import { Slash } from 'lucide-react';

// 기본 사용법
<SCBreadcrumb 
  items={[
    { label: '홈', href: '/' },
    { label: '컴포넌트', href: '/components' },
    { label: '브레드크럼', isCurrentPage: true }
  ]} 
/>

// 커스텀 구분자
<SCBreadcrumb 
  items={[
    { label: '홈', href: '/' },
    { label: '컴포넌트', href: '/components' },
    { label: '브레드크럼', isCurrentPage: true }
  ]}
  separator={<Slash className="h-4 w-4" />}
/>

// 드롭다운 메뉴가 있는 아이템
<SCBreadcrumb 
  items={[
    { label: '홈', href: '/' },
    { 
      label: '컴포넌트', 
      dropdownItems: [
        { label: '버튼', href: '/components/button' },
        { label: '카드', href: '/components/card' },
        { label: '탭', href: '/components/tabs' }
      ]
    },
    { label: '브레드크럼', isCurrentPage: true }
  ]}
/>

// 경로 생략 기능
<SCBreadcrumb 
  items={[
    { label: '홈', href: '/' },
    { label: '문서', href: '/docs' },
    { label: '컴포넌트', href: '/docs/components' },
    { label: 'UI', href: '/docs/components/ui' },
    { label: '브레드크럼', isCurrentPage: true }
  ]}
  maxItems={3}
/>

// 반응형 브레드크럼
<SCBreadcrumb 
  items={[
    { label: '홈', href: '/' },
    { label: '문서', href: '/docs' },
    { label: '컴포넌트', href: '/docs/components' },
    { label: 'UI', href: '/docs/components/ui' },
    { label: '브레드크럼', isCurrentPage: true }
  ]}
  maxItems={3}
  responsive={true}
/>
\`\`\`
`,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCBreadcrumb>;

export const Basic: Story = {
    args: {
        items: [
            { label: '홈', href: '/' },
            { label: '컴포넌트', href: '/components' },
            { label: '브레드크럼', isCurrentPage: true },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: '기본적인 브레드크럼 컴포넌트 예제입니다.',
            },
        },
    },
};

export const CustomSeparator: Story = {
    args: {
        items: [
            { label: '홈', href: '/' },
            { label: '컴포넌트', href: '/components' },
            { label: '브레드크럼', isCurrentPage: true },
        ],
        separator: <Slash className="h-4 w-4" />,
    },
    parameters: {
        docs: {
            description: {
                story: '커스텀 구분자를 사용한 브레드크럼 예제입니다.',
            },
        },
    },
};

export const WithDropdown: Story = {
    args: {
        items: [
            { label: '홈', href: '/' },
            {
                label: '컴포넌트',
                dropdownItems: [
                    { label: '버튼', href: '/components/button' },
                    { label: '카드', href: '/components/card' },
                    { label: '탭', href: '/components/tabs' },
                ],
            },
            { label: '브레드크럼', isCurrentPage: true },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: '드롭다운 메뉴가 있는 브레드크럼 예제입니다.',
            },
        },
    },
};

export const Collapsed: Story = {
    args: {
        items: [
            { label: '홈', href: '/' },
            { label: '문서', href: '/docs' },
            { label: '컴포넌트', href: '/docs/components' },
            { label: 'UI', href: '/docs/components/ui' },
            { label: '브레드크럼', isCurrentPage: true },
        ],
        maxItems: 3,
    },
    parameters: {
        docs: {
            description: {
                story: '경로가 길 때 생략 기능을 사용한 브레드크럼 예제입니다.',
            },
        },
    },
};

export const Responsive: Story = {
    args: {
        items: [
            { label: '홈', href: '/' },
            { label: '문서', href: '/docs' },
            { label: '컴포넌트', href: '/docs/components' },
            { label: '데이터 가져오기', href: '/docs/components/data-fetching' },
            { label: '캐싱 및 재검증', isCurrentPage: true },
        ],
        maxItems: 3,
        responsive: true,
    },
    parameters: {
        docs: {
            description: {
                story: '반응형 디자인을 지원하는 브레드크럼 예제입니다. 화면 크기에 따라 드롭다운 또는 드로어로 표시됩니다.',
            },
        },
    },
};

export const ComplexExample: Story = {
    args: {
        items: [
            { label: '홈', href: '/' },
            {
                label: '제품',
                dropdownItems: [
                    { label: '소프트웨어', href: '/products/software' },
                    { label: '하드웨어', href: '/products/hardware' },
                    { label: '서비스', href: '/products/services' },
                ],
            },
            { label: '소프트웨어', href: '/products/software' },
            { label: '클라우드 솔루션', href: '/products/software/cloud' },
            { label: '데이터 분석', isCurrentPage: true },
        ],
        maxItems: 4,
        responsive: true,
        separator: <ChevronRight className="h-3 w-3" />,
    },
    parameters: {
        docs: {
            description: {
                story: '여러 기능을 조합한 복합적인 브레드크럼 예제입니다.',
            },
        },
    },
};
