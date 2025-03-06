import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import { DateRange } from 'react-day-picker';
import { SCDatePicker } from '@/components/custom/datePicker/SCDatePicker';
import { addDays } from 'date-fns';
import { useState } from 'react';

const meta: Meta<typeof SCDatePicker> = {
    title: 'Components/SCDatePicker',
    component: SCDatePicker,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        componentSubtitle: '날짜 선택을 위한 캘린더 컴포넌트',
        docs: {
            description: {
                component: `
# 날짜 선택 컴포넌트

\`SCDatePicker\` 컴포넌트는 사용자가 날짜를 선택할 수 있는 캘린더 UI를 제공합니다.

## 기본 기능
- 단일 날짜 선택 지원
- 날짜 범위 선택 지원 (2개월 표시)
- 다국어 지원 (한국어, 영어)
- 날짜 형식 커스터마이징
- 프리셋 선택 지원
- 날짜 제한 설정 (최소/최대 날짜)
`,
            },
        },
    },
    argTypes: {
        mode: {
            control: 'radio',
            options: ['single', 'range'],
            description: '날짜 선택 모드 (단일/범위)',
            table: {
                defaultValue: { summary: 'single' },
            },
        },
        locale: {
            control: 'radio',
            options: ['en', 'ko'],
            description: '언어 설정',
            table: {
                defaultValue: { summary: 'en' },
            },
        },
        withPresets: {
            control: 'boolean',
            description: '프리셋 사용 여부',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        disabled: {
            control: 'boolean',
            description: '비활성화 여부',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCDatePicker>;

export const Default: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: '기본적인 날짜 선택 컴포넌트입니다.',
            },
        },
    },
};

export const DateRangePicker: Story = {
    args: {
        mode: 'range',
        dateRange: {
            from: new Date(2023, 0, 20),
            to: addDays(new Date(2023, 0, 20), 20),
        },
    },
    parameters: {
        docs: {
            description: {
                story: '날짜 범위를 선택할 수 있는 컴포넌트입니다. 기본적으로 2개월이 표시됩니다.',
            },
        },
    },
};

export const WithPresets: Story = {
    args: {
        withPresets: true,
    },
    parameters: {
        docs: {
            description: {
                story: '날짜 선택 프리셋이 있는 컴포넌트입니다. 빠른 날짜 선택이 가능합니다.',
            },
        },
    },
};

export const DisabledState: Story = {
    args: {
        disabled: true,
    },
    parameters: {
        docs: {
            description: {
                story: '비활성화된 상태의 날짜 선택 컴포넌트입니다.',
            },
        },
    },
};

export const WithDateLimits: Story = {
    args: {
        minDate: new Date(),
        maxDate: addDays(new Date(), 30),
    },
    parameters: {
        docs: {
            description: {
                story: '선택 가능한 날짜 범위가 제한된 컴포넌트입니다.',
            },
        },
    },
};

export const KoreanLanguage: Story = {
    args: {
        locale: 'ko',
    },
    parameters: {
        docs: {
            description: {
                story: '한국어로 표시되는 날짜 선택 컴포넌트입니다.',
            },
        },
    },
};

export const KoreanRangePicker: Story = {
    args: {
        locale: 'ko',
        mode: 'range',
        dateRange: {
            from: new Date(2023, 0, 20),
            to: addDays(new Date(2023, 0, 20), 20),
        },
    },
    parameters: {
        docs: {
            description: {
                story: '한국어로 표시되는 날짜 범위 선택 컴포넌트입니다.',
            },
        },
    },
};

export const KoreanWithPresets: Story = {
    args: {
        locale: 'ko',
        withPresets: true,
    },
    parameters: {
        docs: {
            description: {
                story: '한국어로 표시되는 프리셋이 있는 날짜 선택 컴포넌트입니다.',
            },
        },
    },
};

export const ControlledComponent: Story = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());
        const [open, setOpen] = useState(false);

        return (
            <div className="space-y-4">
                <SCDatePicker date={date} onDateChange={setDate} open={open} onOpenChange={setOpen} />
                <div className="flex gap-2">
                    <Button onClick={() => setDate(new Date())}>오늘로 설정</Button>
                    <Button onClick={() => setDate(undefined)} variant="outline">
                        초기화
                    </Button>
                    <Button onClick={() => setOpen(!open)} variant="secondary">
                        팝오버 {open ? '닫기' : '열기'}
                    </Button>
                </div>
                <div className="rounded-md bg-muted p-4">
                    <p>선택된 날짜: {date ? date.toLocaleDateString() : '없음'}</p>
                    <p>팝오버 상태: {open ? '열림' : '닫힘'}</p>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: '제어 컴포넌트로 사용하는 예제입니다. 외부에서 날짜와 팝오버 상태를 제어할 수 있습니다.',
            },
        },
    },
};

export const ControlledRangeComponent: Story = {
    render: () => {
        const [dateRange, setDateRange] = useState<DateRange | undefined>({
            from: new Date(),
            to: addDays(new Date(), 7),
        });

        return (
            <div className="space-y-4">
                <SCDatePicker mode="range" dateRange={dateRange} onDateRangeChange={setDateRange} />
                <div className="flex gap-2">
                    <Button
                        onClick={() =>
                            setDateRange({
                                from: new Date(),
                                to: addDays(new Date(), 7),
                            })
                        }
                    >
                        이번 주로 설정
                    </Button>
                    <Button onClick={() => setDateRange(undefined)} variant="outline">
                        초기화
                    </Button>
                </div>
                <div className="rounded-md bg-muted p-4">
                    <p>
                        선택된 범위:{' '}
                        {dateRange?.from
                            ? `${dateRange.from.toLocaleDateString()} - ${dateRange.to?.toLocaleDateString() || ''}`
                            : '없음'}
                    </p>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: '날짜 범위를 제어 컴포넌트로 사용하는 예제입니다.',
            },
        },
    },
};
