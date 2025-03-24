import * as React from 'react';

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

export const useMediaQuery = () => {
    const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);
    const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined);

    React.useEffect(() => {
        const mobileMql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const tabletMql = window.matchMedia(
            `(min-width: ${MOBILE_BREAKPOINT}px) and (max-width: ${TABLET_BREAKPOINT - 1}px)`,
        );

        const onChange = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            setIsTablet(window.innerWidth >= MOBILE_BREAKPOINT && window.innerWidth < TABLET_BREAKPOINT);
        };

        mobileMql.addEventListener('change', onChange);
        tabletMql.addEventListener('change', onChange);

        // 초기 상태 설정
        onChange();

        return () => {
            mobileMql.removeEventListener('change', onChange);
            tabletMql.removeEventListener('change', onChange);
        };
    }, []);

    return {
        isMobile: !!isMobile,
        isTablet: !!isTablet,
        isSmallScreen: !!isMobile || !!isTablet,
    };
};
