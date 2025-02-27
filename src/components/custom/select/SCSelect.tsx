import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { ScrollArea } from '@/components/ui/scroll-area';

export interface Option {
    value: string;
    label: string;
    group?: string;
}

interface SCSelectProps {
    options: Option[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
    scrollable?: boolean;
    maxHeight?: number;
    disabled?: boolean;
}

export const SCSelect = ({
    options,
    value,
    onChange,
    placeholder = '선택해주세요',
    className = 'w-[180px]',
    scrollable = false,
    maxHeight = 200,
    disabled = false,
}: SCSelectProps) => {
    // 옵션들을 그룹별로 정리
    const groupedOptions = options.reduce(
        (acc, option) => {
            const group = option.group || 'default';
            if (!acc[group]) {
                acc[group] = [];
            }
            acc[group].push(option);
            return acc;
        },
        {} as Record<string, Option[]>,
    );

    const renderContent = () => {
        const content = (
            <>
                {Object.entries(groupedOptions).map(([group, groupOptions]) =>
                    group === 'default' ? (
                        groupOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))
                    ) : (
                        <SelectGroup key={group}>
                            <SelectLabel>{group}</SelectLabel>
                            {groupOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    ),
                )}
            </>
        );

        return scrollable ? <ScrollArea className={`h-[${maxHeight}px]`}>{content}</ScrollArea> : content;
    };

    return (
        <Select value={value} onValueChange={onChange} disabled={disabled}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>{renderContent()}</SelectContent>
        </Select>
    );
};
