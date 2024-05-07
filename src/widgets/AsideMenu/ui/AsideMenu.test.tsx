import { render, screen } from '@testing-library/react';
import { AsideMenu } from '@/widgets/AsideMenu';
import { StoreProvider } from '@/app/providers/StoreProvider';

jest.mock('../../../shared/layouts/IconLayout', () => ({
    IconLayout: jest.fn(),
}));

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            prefetch: () => null,
        };
    },
}));

describe('sidebar', () => {
    test('instanceSidebar', () => {
        render(
            <StoreProvider>
                <AsideMenu />;
            </StoreProvider>,
        );
        expect(screen.getByTestId('asideMenu')).toBeInTheDocument();
    });
});
