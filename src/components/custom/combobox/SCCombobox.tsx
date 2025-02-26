import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { SCButton } from '../button/SCButton';

/**
 * 콤보박스 옵션 아이템 인터페이스
 * @interface Option
 * @property {string} value - 옵션 값
 * @property {string} label - 표시될 레이블
 */
interface Option {
    value: string;
    label: string;
}

/**
 * 콤보박스 컴포넌트 props 인터페이스
 * @interface SCComboboxProps
 * @property {Option[]} options - 선택 가능한 옵션 배열
 * @property {string} [value] - 현재 선택된 값
 * @property {(value: string) => void} [onValueChange] - 값 변경 핸들러
 * @property {string} [placeholder='선택하세요...'] - 기본 플레이스홀더
 */
interface SCComboboxProps {
    options: Option[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyText?: string;
    className?: string;
}

export const SCCombobox = React.memo(
    ({
        options,
        value,
        onValueChange,
        placeholder = '선택하세요...',
        searchPlaceholder = '검색...',
        emptyText = '검색 결과가 없습니다.',
        className,
    }: SCComboboxProps) => {
        const [open, setOpen] = React.useState(false);
        const [selectedValue, setSelectedValue] = React.useState(value || '');

        const handleSelect = React.useCallback(
            (currentValue: string) => {
                const newValue = currentValue === selectedValue ? '' : currentValue;
                setSelectedValue(newValue);
                onValueChange?.(newValue);
                setOpen(false);
            },
            [selectedValue, onValueChange],
        );

        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <SCButton variant="outline" role="combobox" aria-expanded={open} className={className}>
                        {selectedValue ? options.find(option => option.value === selectedValue)?.label : placeholder}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </SCButton>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder={searchPlaceholder} />
                        <CommandList>
                            <CommandEmpty>{emptyText}</CommandEmpty>
                            <CommandGroup>
                                {options.map(option => (
                                    <CommandItem key={option.value} value={option.value} onSelect={handleSelect}>
                                        <Check
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                selectedValue === option.value ? 'opacity-100' : 'opacity-0',
                                            )}
                                        />
                                        {option.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        );
    },
);

SCCombobox.displayName = 'SCCombobox';
