import { Moon, Sun } from 'lucide-react';

import { SCButton } from '@/components/custom/button/SCButton';
import { useTheme } from '@/components/custom/theme/SCThemeContext';

interface SCThemeToggleProps {
    className?: string;
}

export const SCThemeToggle = ({ className }: SCThemeToggleProps) => {
    const { theme, setTheme } = useTheme();

    return (
        <SCButton
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={className}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">테마 전환</span>
        </SCButton>
    );
};
