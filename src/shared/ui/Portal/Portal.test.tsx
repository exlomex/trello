import { render, screen } from '@testing-library/react';
import { Portal } from './Portal';

jest.mock('../../../shared/layouts/IconLayout', () => ({
    IconLayout: jest.fn(),
}));

describe('Portal tests', () => {
    test('Portal render', () => {
        render(
            <Portal isPortal={true}>
                <div>testPortal</div>
            </Portal>,
        );
        const testPortal = screen.getByText('testPortal');
        expect(testPortal).toBeInTheDocument();
        screen.debug();
    });
});
