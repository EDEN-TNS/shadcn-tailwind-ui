import { AlertTriangle, Bell, Check, Info, X } from 'lucide-react';
import { Meta, StoryObj } from '@storybook/react';
import { SCToast, toast } from '@/components/custom/toast/SCToast';

import { Button } from '@/components/ui/button';

const meta: Meta<typeof SCToast> = {
    title: 'ETC/SCToast',
    component: SCToast,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
# 토스트 컴포넌트

\`SCToast\` 컴포넌트는 사용자에게 일시적인 알림을 표시하는 컴포넌트입니다. 이 컴포넌트는 인기 있는 라이브러리인 \`react-toastify\`를 기반으로 구현되었으며, 프로젝트의 디자인 시스템에 맞게 래핑되었습니다.

## react-toastify 기반
- \`react-toastify\` 라이브러리의 모든 기능을 활용
- 기본 테마로 \`colored\` 옵션을 사용하여 타입별 배경색 적용
- 라이브러리의 기본 스타일링을 최대한 활용하여 일관된 디자인 제공

## 기본 기능
- 다양한 타입 지원 (info, success, warning, error, default)
- 다양한 위치 옵션 지원
- 자동 닫힘 타이머 설정 가능
- 드래그로 닫기 지원
- 프로그레스 바 표시 옵션
- 다양한 전환 효과 지원
- 프로미스 기반 토스트 지원

## 사용법
토스트 컴포넌트는 다음과 같은 구조로 정의합니다:

\`\`\`typescript
interface SCToastProps {
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
    autoClose?: number | false;
    hideProgressBar?: boolean;
    closeOnClick?: boolean;
    pauseOnHover?: boolean;
    draggable?: boolean;
    theme?: 'light' | 'dark' | 'colored';
    transition?: 'bounce' | 'slide' | 'zoom' | 'flip';
    className?: string;
    limit?: number;
    newestOnTop?: boolean;
    rtl?: boolean;
    pauseOnFocusLoss?: boolean;
}
\`\`\`
                `,
            },
        },
    },
    decorators: [
        Story => (
            <div>
                <Story />
                <SCToast theme="colored" />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof SCToast>;

export const Basic: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">기본 토스트</h2>
            <div className="flex flex-wrap gap-2">
                <Button onClick={() => toast.default('기본 토스트 메시지')}>기본 토스트</Button>
                <Button onClick={() => toast.info('정보 토스트 메시지')}>정보 토스트</Button>
                <Button onClick={() => toast.success('성공 토스트 메시지')}>성공 토스트</Button>
                <Button onClick={() => toast.warning('경고 토스트 메시지')}>경고 토스트</Button>
                <Button onClick={() => toast.error('오류 토스트 메시지')}>오류 토스트</Button>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '기본적인 토스트 타입을 보여주는 예제입니다.',
            },
        },
    },
};

export const WithIcons: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">아이콘이 있는 토스트</h2>
            <div className="flex flex-wrap gap-2">
                <Button
                    onClick={() =>
                        toast.info(
                            <div className="flex items-center gap-2">
                                <Info className="h-4 w-4" />
                                <span>정보 메시지</span>
                            </div>,
                        )
                    }
                >
                    정보 토스트
                </Button>
                <Button
                    onClick={() =>
                        toast.success(
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4" />
                                <span>성공 메시지</span>
                            </div>,
                        )
                    }
                >
                    성공 토스트
                </Button>
                <Button
                    onClick={() =>
                        toast.warning(
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4" />
                                <span>경고 메시지</span>
                            </div>,
                        )
                    }
                >
                    경고 토스트
                </Button>
                <Button
                    onClick={() =>
                        toast.error(
                            <div className="flex items-center gap-2">
                                <X className="h-4 w-4" />
                                <span>오류 메시지</span>
                            </div>,
                        )
                    }
                >
                    오류 토스트
                </Button>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '아이콘이 포함된 토스트 예제입니다.',
            },
        },
    },
};

export const Positions: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">위치 옵션</h2>
            <div className="flex flex-wrap gap-2">
                <Button onClick={() => toast.info('상단 오른쪽', { position: 'top-right' })}>상단 오른쪽</Button>
                <Button onClick={() => toast.info('상단 중앙', { position: 'top-center' })}>상단 중앙</Button>
                <Button onClick={() => toast.info('상단 왼쪽', { position: 'top-left' })}>상단 왼쪽</Button>
                <Button onClick={() => toast.info('하단 오른쪽', { position: 'bottom-right' })}>하단 오른쪽</Button>
                <Button onClick={() => toast.info('하단 중앙', { position: 'bottom-center' })}>하단 중앙</Button>
                <Button onClick={() => toast.info('하단 왼쪽', { position: 'bottom-left' })}>하단 왼쪽</Button>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '토스트의 다양한 위치 옵션을 보여주는 예제입니다.',
            },
        },
    },
};

export const Themes: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">테마 옵션</h2>
            <div className="flex flex-wrap gap-2">
                <Button onClick={() => toast.info('라이트 테마', { theme: 'light' })}>라이트 테마</Button>
                <Button onClick={() => toast.info('다크 테마', { theme: 'dark' })}>다크 테마</Button>
                <Button onClick={() => toast.info('컬러 테마', { theme: 'colored' })}>컬러 테마</Button>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '토스트의 다양한 테마 옵션을 보여주는 예제입니다. 기본값은 colored입니다.',
            },
        },
    },
};

export const Transitions: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">전환 효과</h2>
            <div className="flex flex-wrap gap-2">
                <Button onClick={() => toast.info('바운스 효과', { transition: 'bounce' })}>바운스 효과</Button>
                <Button onClick={() => toast.info('슬라이드 효과', { transition: 'slide' })}>슬라이드 효과</Button>
                <Button onClick={() => toast.info('줌 효과', { transition: 'zoom' })}>줌 효과</Button>
                <Button onClick={() => toast.info('플립 효과', { transition: 'flip' })}>플립 효과</Button>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '토스트의 다양한 전환 효과를 보여주는 예제입니다.',
            },
        },
    },
};

export const PromiseExample: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">프로미스 토스트</h2>
            <Button
                onClick={() => {
                    const promise = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (Math.random() > 0.3) {
                                resolve('데이터 로드 성공!');
                            } else {
                                reject('데이터 로드 실패!');
                            }
                        }, 3000);
                    });

                    toast.promise(promise, {
                        pending: '데이터 로딩 중...',
                        success: data => `${data}`,
                        error: err => `${err}`,
                    });
                }}
            >
                프로미스 토스트 보기
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '프로미스 기반 토스트 예제입니다. 비동기 작업의 상태를 표시하는 데 유용합니다.',
            },
        },
    },
};

export const CustomOptions: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">커스텀 옵션</h2>
            <div className="flex flex-wrap gap-2">
                <Button
                    onClick={() =>
                        toast.info('자동 닫힘 없음', {
                            autoClose: false,
                        })
                    }
                >
                    자동 닫힘 없음
                </Button>
                <Button
                    onClick={() =>
                        toast.info('프로그레스 바 숨김', {
                            hideProgressBar: true,
                        })
                    }
                >
                    프로그레스 바 숨김
                </Button>
                <Button
                    onClick={() =>
                        toast.info('클릭으로 닫기 비활성화', {
                            closeOnClick: false,
                        })
                    }
                >
                    클릭으로 닫기 비활성화
                </Button>
                <Button
                    onClick={() =>
                        toast.info('드래그 비활성화', {
                            draggable: false,
                        })
                    }
                >
                    드래그 비활성화
                </Button>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '토스트의 다양한 커스텀 옵션을 보여주는 예제입니다.',
            },
        },
    },
};

export const NotificationExample: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">알림 예제</h2>
            <div className="flex flex-wrap gap-2">
                <Button
                    onClick={() =>
                        toast.info(
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <Bell className="h-4 w-4" />
                                    <span className="font-semibold">새 알림</span>
                                </div>
                                <p className="text-sm">새로운 메시지가 도착했습니다.</p>
                            </div>,
                        )
                    }
                >
                    알림 토스트
                </Button>
                <Button
                    onClick={() =>
                        toast.success(
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    <span className="font-semibold">결제 완료</span>
                                </div>
                                <p className="text-sm">주문이 성공적으로 처리되었습니다.</p>
                            </div>,
                        )
                    }
                >
                    결제 완료 토스트
                </Button>
                <Button
                    onClick={() =>
                        toast.error(
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <X className="h-4 w-4" />
                                    <span className="font-semibold">오류 발생</span>
                                </div>
                                <p className="text-sm">서버에 연결할 수 없습니다.</p>
                            </div>,
                        )
                    }
                >
                    오류 토스트
                </Button>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '실제 알림 시나리오에서 사용할 수 있는 토스트 예제입니다.',
            },
        },
    },
};
