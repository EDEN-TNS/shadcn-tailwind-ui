import type { Meta, StoryObj } from '@storybook/react';

import type { DateRange } from '@/components/custom/datePicker';
import React from 'react';
import { SCDatePicker } from '@/components/custom/datePicker/SCDatePicker';
import { addDays } from 'date-fns';

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

\`SCDatePicker\` 컴포넌트는 단일 날짜 또는 날짜 범위를 선택할 수 있는 컴포넌트입니다.

## 기본 기능
- 단일 날짜 선택 모드와 날짜 범위 선택 모드 지원
- 다국어 지원 (한국어, 영어)
- 커스텀 날짜 형식 지원
- 최소/최대 선택 가능 날짜 설정
- 날짜 범위 선택 시 최대 기간 제한 기능
- 프리셋 선택 옵션

## 사용법
\`\`\`tsx
// 단일 날짜 선택
<SCDatePicker 
  mode="single"
  onDateChange={(date) => console.log(date)}
/>

// 날짜 범위 선택
<SCDatePicker 
  mode="range"
  onDateRangeChange={(range) => console.log(range)}
/>
\`\`\`
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

export const SingleDate: Story = {
    args: {
        mode: 'single',
        locale: 'ko',
    },
    parameters: {
        docs: {
            description: {
                story: '단일 날짜를 선택할 수 있는 기본 모드입니다.',
            },
        },
    },
};

export const DateRangeExample: Story = {
    args: {
        mode: 'range',
        locale: 'ko',
    },
    parameters: {
        docs: {
            description: {
                story: '날짜 범위를 선택할 수 있는 모드입니다.',
            },
        },
    },
};

export const WithPresets: Story = {
    args: {
        mode: 'single',
        locale: 'ko',
        withPresets: true,
    },
    parameters: {
        docs: {
            description: {
                story: '프리셋 선택 옵션이 포함된 단일 날짜 선택기입니다.',
            },
        },
    },
};

export const CustomDateFormat: Story = {
    args: {
        mode: 'single',
        locale: 'ko',
        dateFormat: 'yyyy/MM/dd',
    },
    parameters: {
        docs: {
            description: {
                story: '커스텀 날짜 형식을 사용한 예제입니다.',
            },
        },
    },
};

export const CustomRangeDateFormat: Story = {
    args: {
        mode: 'range',
        locale: 'ko',
        rangeDateFormat: 'yyyy/MM/dd',
    },
    parameters: {
        docs: {
            description: {
                story: '커스텀 날짜 범위 형식을 사용한 예제입니다.',
            },
        },
    },
};

export const WithMaxDateRange: Story = {
    render: () => {
        const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
            from: new Date(),
            to: undefined,
        });

        return (
            <div className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">최대 7일까지 선택 가능</h2>
                <SCDatePicker
                    mode="range"
                    locale="ko"
                    dateRange={dateRange}
                    onDateRangeChange={setDateRange}
                    maxDateRange={7}
                    onMaxRangeExceeded={(days, maxAllowed, errorMessage) => {
                        console.log(errorMessage);
                        console.log(`선택한 기간(${days}일)이 최대 허용 기간(${maxAllowed}일)을 초과했습니다.`);
                    }}
                />
                <div className="text-sm text-muted-foreground">
                    {dateRange?.from && dateRange?.to
                        ? `선택된 기간: ${dateRange.from.toLocaleDateString()} - ${dateRange.to.toLocaleDateString()}`
                        : dateRange?.from
                          ? `시작일: ${dateRange.from.toLocaleDateString()}`
                          : '날짜를 선택해주세요'}
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: '최대 선택 가능한 날짜 범위를 제한하는 예제입니다. 이 예제에서는 최대 7일까지 선택할 수 있으며, 초과 시 에러 메시지가 표시됩니다.',
            },
        },
    },
};

export const WithMinMaxDates: Story = {
    args: {
        mode: 'single',
        locale: 'ko',
        minDate: new Date(),
        maxDate: addDays(new Date(), 30),
    },
    parameters: {
        docs: {
            description: {
                story: '최소/최대 선택 가능 날짜가 설정된 예제입니다. 오늘부터 30일 이내의 날짜만 선택할 수 있습니다.',
            },
        },
    },
};

export const FullWidth: Story = {
    render: () => (
        <div className="w-full max-w-md">
            <SCDatePicker mode="single" locale="ko" className="w-full" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '너비를 100%로 설정한 예제입니다. 부모 컨테이너의 너비에 맞게 자동으로 조정됩니다.',
            },
        },
    },
};

export const WithCallbacks: Story = {
    render: () => {
        const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined);
        const [selectedRange, setSelectedRange] = React.useState<DateRange | undefined>(undefined);
        const [mode, setMode] = React.useState<'single' | 'range'>('single');

        return (
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <button
                        className={`rounded px-4 py-2 ${mode === 'single' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                        onClick={() => setMode('single')}
                    >
                        단일 날짜
                    </button>
                    <button
                        className={`rounded px-4 py-2 ${mode === 'range' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                        onClick={() => setMode('range')}
                    >
                        날짜 범위
                    </button>
                </div>

                {mode === 'single' ? (
                    <SCDatePicker
                        mode="single"
                        locale="ko"
                        date={selectedDate}
                        onDateChange={date => {
                            setSelectedDate(date);
                            console.log(`선택된 날짜: ${date?.toLocaleDateString() || '없음'}`);
                        }}
                    />
                ) : (
                    <SCDatePicker
                        mode="range"
                        locale="ko"
                        dateRange={selectedRange}
                        onDateRangeChange={range => {
                            setSelectedRange(range);
                            if (range?.from && range?.to) {
                                console.log(
                                    `선택된 기간: ${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`,
                                );
                            }
                        }}
                        maxDateRange={7}
                        onMaxRangeExceeded={(days, maxAllowed, errorMessage) => {
                            console.log(errorMessage);
                        }}
                    />
                )}

                <div className="text-sm">
                    {mode === 'single' ? (
                        <div>선택된 날짜: {selectedDate?.toLocaleDateString() || '없음'}</div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <span> {'maxDateRange: 7'}</span>
                            <div>
                                {selectedRange?.from && selectedRange?.to
                                    ? `선택된 기간: ${selectedRange.from.toLocaleDateString()} - ${selectedRange.to.toLocaleDateString()}`
                                    : selectedRange?.from
                                      ? `시작일: ${selectedRange.from.toLocaleDateString()}`
                                      : '날짜를 선택해주세요'}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: '콜백 함수를 사용한 예제입니다. 날짜 선택 시 토스트 알림이 표시되고, 선택된 날짜/기간이 화면에 표시됩니다.',
            },
        },
    },
};
