import { render, screen } from '@testing-library/react';
import { HStack } from './HStack';

describe('HStack tests', () => {
    test('HStack render', () => {
        render(<HStack>default</HStack>);
        const testHStack = screen.getByText('default');
        expect(testHStack).toBeInTheDocument();
    });

    test('HStack default properties test', () => {
        render(<HStack>default</HStack>);
        const testHStack = screen.getByText('default');
        expect(testHStack).toHaveClass(
            'Flex justifyStart alignCenter directionRow wrap',
        );
    });

    test('HStack custom properties test', () => {
        render(
            <HStack gap={'4'} wrap={'wrap'} align={'end'} justify={'between'}>
                default
            </HStack>,
        );
        const testHStack = screen.getByText('default');
        expect(testHStack).toHaveClass(
            'Flex justifyBetween alignEnd directionRow wrap gap4',
        );
    });
});
