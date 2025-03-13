'use client';

import * as React from 'react';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { addDays, differenceInDays, format } from 'date-fns';
import { enUS, ko } from 'date-fns/locale';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';

// 지원하는 언어 목록
const locales = {
    ko,
    en: enUS,
};

// 날짜 형식 (언어별)
const dateFormats = {
    ko: 'yyyy년 MM월 dd일',
    en: 'PPP',
};

// 범위 날짜 형식 (언어별)
const rangeDateFormats = {
    ko: 'yyyy년 MM월 dd일',
    en: 'LLL dd, y',
};

// 언어별 텍스트
const translations = {
    ko: {
        placeholder: '날짜 선택',
        selectPreset: '선택',
        today: '오늘',
        tomorrow: '내일',
        inThreeDays: '3일 후',
        inAWeek: '일주일 후',
        maxRangeError: '최대 선택 가능한 기간은 {0}일입니다.',
    },
    en: {
        placeholder: 'Pick a date',
        selectPreset: 'Select',
        today: 'Today',
        tomorrow: 'Tomorrow',
        inThreeDays: 'In 3 days',
        inAWeek: 'In a week',
        maxRangeError: 'Maximum allowed range is {0} days.',
    },
};

export interface SCDatePickerProps {
    /** 선택된 날짜 (단일 날짜 모드) */
    date?: Date;
    /** 선택된 날짜 범위 (범위 모드) */
    dateRange?: DateRange;
    /** 날짜 변경 핸들러 (단일 날짜 모드) */
    onDateChange?: (date: Date | undefined) => void;
    /** 날짜 범위 변경 핸들러 (범위 모드) */
    onDateRangeChange?: (range: DateRange | undefined) => void;
    /** 날짜 선택 모드 (단일/범위) */
    mode?: 'single' | 'range';
    /** 언어 설정 (기본값: 'en') */
    locale?: keyof typeof locales;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 프리셋 사용 여부 */
    withPresets?: boolean;
    /** 최소 선택 가능 날짜 */
    minDate?: Date;
    /** 최대 선택 가능 날짜 */
    maxDate?: Date;
    /** 선택 불가능한 날짜 */
    disabledDays?: Date[] | ((date: Date) => boolean);
    /** 팝오버 열림 상태 */
    open?: boolean;
    /** 팝오버 상태 변경 핸들러 */
    onOpenChange?: (open: boolean) => void;
    /** 커스텀 날짜 형식 (단일 날짜) */
    dateFormat?: string;
    /** 커스텀 날짜 형식 (범위) */
    rangeDateFormat?: string;
    /** 최대 선택 가능한 날짜 범위 (일 수) */
    maxDateRange?: number;
    /** 최대 날짜 범위 초과 시 콜백 */
    onMaxRangeExceeded?: (days: number, maxAllowed: number, errorMessage: string) => void;
}

export const SCDatePicker = ({
    date,
    dateRange,
    onDateChange,
    onDateRangeChange,
    mode = 'single',
    locale = 'en',
    className,
    disabled = false,
    withPresets = false,
    minDate,
    maxDate,
    disabledDays,
    open,
    onOpenChange,
    dateFormat,
    rangeDateFormat,
    maxDateRange,
    onMaxRangeExceeded,
}: SCDatePickerProps) => {
    // 내부 상태 관리
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(date);
    const [selectedRange, setSelectedRange] = React.useState<DateRange | undefined>(dateRange);
    const [isOpen, setIsOpen] = React.useState<boolean>(open || false);
    const [rangeError, setRangeError] = React.useState<boolean>(false);

    // 언어별 텍스트
    const currentTexts = translations[locale];

    // 날짜 형식
    const currentDateFormat = dateFormat || dateFormats[locale];
    const currentRangeDateFormat = rangeDateFormat || rangeDateFormats[locale];

    // 외부 상태와 동기화
    React.useEffect(() => {
        if (date !== undefined) {
            setSelectedDate(date);
        }
    }, [date]);

    React.useEffect(() => {
        if (dateRange !== undefined) {
            setSelectedRange(dateRange);
        }
    }, [dateRange]);

    React.useEffect(() => {
        if (open !== undefined) {
            setIsOpen(open);
        }
    }, [open]);

    // 팝오버 상태 변경 핸들러
    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        onOpenChange?.(open);
    };

    // 날짜 선택 핸들러 (단일 날짜)
    const handleSelectDate = (date: Date | undefined) => {
        setSelectedDate(date);
        onDateChange?.(date);
        if (date) {
            handleOpenChange(false);
        }
    };

    // 날짜 범위 선택 핸들러 (날짜 범위)
    const handleSelectRange = (range: DateRange | undefined) => {
        // 최대 날짜 범위 검사
        if (range?.from && range?.to && maxDateRange) {
            const days = differenceInDays(range.to, range.from) + 1;

            if (days > maxDateRange) {
                // 최대 범위 초과 시 에러 상태 설정
                setRangeError(true);

                // 에러 메시지 생성
                const errorMessage = currentTexts.maxRangeError.replace('{0}', maxDateRange.toString());

                // 콜백 호출 (에러 메시지 포함)
                onMaxRangeExceeded?.(days, maxDateRange, errorMessage);

                // 범위 선택 취소 (from 날짜만 유지)
                const newRange = { from: range.from, to: undefined };
                setSelectedRange(newRange);
                onDateRangeChange?.(newRange);
                return;
            }
        }

        // 에러 상태 초기화
        setRangeError(false);

        // 범위 업데이트
        setSelectedRange(range);
        onDateRangeChange?.(range);
    };

    // 프리셋 선택 핸들러
    const handlePresetSelect = (value: string) => {
        const days = parseInt(value);
        const newDate = addDays(new Date(), days);

        if (mode === 'single') {
            handleSelectDate(newDate);
        } else {
            // 최대 날짜 범위 검사
            if (maxDateRange && days > maxDateRange) {
                // 최대 범위 초과 시 에러 상태 설정
                setRangeError(true);

                // 에러 메시지 생성
                const errorMessage = currentTexts.maxRangeError.replace('{0}', maxDateRange.toString());

                // 콜백 호출 (에러 메시지 포함)
                onMaxRangeExceeded?.(days, maxDateRange, errorMessage);

                return;
            }

            handleSelectRange({
                from: new Date(),
                to: newDate,
            });
        }
    };

    // 날짜 표시 텍스트
    let dateDisplayText;

    if (mode === 'single') {
        dateDisplayText = selectedDate
            ? format(selectedDate, currentDateFormat, { locale: locales[locale] })
            : currentTexts.placeholder;
    } else {
        if (selectedRange?.from) {
            if (selectedRange.to) {
                dateDisplayText = (
                    <>
                        {format(selectedRange.from, currentRangeDateFormat, { locale: locales[locale] })} -{' '}
                        {format(selectedRange.to, currentRangeDateFormat, { locale: locales[locale] })}
                    </>
                );
            } else {
                dateDisplayText = format(selectedRange.from, currentRangeDateFormat, { locale: locales[locale] });
            }
        } else {
            dateDisplayText = <span>{currentTexts.placeholder}</span>;
        }
    }

    // 프리셋이 있는 단일 날짜 선택기
    if (withPresets && mode === 'single') {
        return (
            <Popover open={isOpen} onOpenChange={handleOpenChange}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className={cn(
                            'justify-start text-left font-normal',
                            !selectedDate && 'text-muted-foreground',
                            !className?.includes('w-') && 'w-[240px]',
                            className,
                        )}
                        disabled={disabled}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? (
                            format(selectedDate, currentDateFormat, { locale: locales[locale] })
                        ) : (
                            <span>{currentTexts.placeholder}</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="flex w-auto flex-col space-y-2 p-2">
                    <Select onValueChange={handlePresetSelect}>
                        <SelectTrigger>
                            <SelectValue placeholder={currentTexts.selectPreset} />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="0">{currentTexts.today}</SelectItem>
                            <SelectItem value="1">{currentTexts.tomorrow}</SelectItem>
                            <SelectItem value="3">{currentTexts.inThreeDays}</SelectItem>
                            <SelectItem value="7">{currentTexts.inAWeek}</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="rounded-md border">
                        <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={handleSelectDate}
                            initialFocus
                            locale={locales[locale]}
                            disabled={disabledDays}
                            fromDate={minDate}
                            toDate={maxDate}
                        />
                    </div>
                </PopoverContent>
            </Popover>
        );
    }

    // 단일 날짜 선택기
    if (mode === 'single') {
        return (
            <Popover open={isOpen} onOpenChange={handleOpenChange}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className={cn(
                            'justify-start text-left font-normal',
                            !selectedDate && 'text-muted-foreground',
                            !className?.includes('w-') && 'w-[240px]',
                            className,
                        )}
                        disabled={disabled}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? (
                            format(selectedDate, currentDateFormat, { locale: locales[locale] })
                        ) : (
                            <span>{currentTexts.placeholder}</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleSelectDate}
                        initialFocus
                        locale={locales[locale]}
                        disabled={disabledDays}
                        fromDate={minDate}
                        toDate={maxDate}
                    />
                </PopoverContent>
            </Popover>
        );
    }

    // 날짜 범위 선택기
    return (
        <div className={cn('grid gap-2', className)}>
            <Popover open={isOpen} onOpenChange={handleOpenChange}>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant="outline"
                        className={cn(
                            'justify-start text-left font-normal',
                            !selectedRange?.from && 'text-muted-foreground',
                            rangeError && 'border-destructive text-destructive',
                            !className?.includes('w-') && 'w-[300px]',
                            className,
                        )}
                        disabled={disabled}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateDisplayText}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    {maxDateRange && (
                        <div className="border-b p-3 text-sm text-muted-foreground">
                            {currentTexts.maxRangeError.replace('{0}', maxDateRange.toString())}
                        </div>
                    )}
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={selectedRange?.from}
                        selected={selectedRange}
                        onSelect={handleSelectRange}
                        numberOfMonths={2}
                        locale={locales[locale]}
                        disabled={disabledDays}
                        fromDate={minDate}
                        toDate={maxDate}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};
