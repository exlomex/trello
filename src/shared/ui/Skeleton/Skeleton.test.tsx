import { render, screen } from '@testing-library/react';
import { debug } from 'node:util';
import { Skeleton } from './Skeleton';

jest.mock('../../../shared/layouts/IconLayout', () => ({
    IconLayout: jest.fn(),
}));

describe('Skeleton tests', () => {
    test('Skeleton render', () => {
        render(<Skeleton />);
        const testSkeleton = screen.getByTestId('skeleton');
        expect(testSkeleton).toBeInTheDocument();
    });

    test('Skeleton properties', () => {
        render(<Skeleton height={'20px'} width={'30px'} border={'13px'} />);
        const testSkeleton = screen.getByTestId('skeleton');
        expect(testSkeleton).toHaveStyle({
            width: '30px',
            height: '20px',
            borderRadius: '13px',
        });
    });
});
