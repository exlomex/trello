import { render, screen } from '@testing-library/react';
import { AsideMenu } from '@/widgets/AsideMenu';

jest.mock('../../../shared/layouts/IconLayout', () => ({
    IconLayout: jest.fn(),
}));

describe('sidebar', () => {
    test('instanceSidebar', () => {
        render(<AsideMenu />);
        expect(screen.getByTestId('asideMenu')).toBeInTheDocument();
        screen.debug();
    });
});
