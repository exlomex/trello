import { render, screen } from '@testing-library/react';
import { VStack } from './VStack';

describe('HStack tests', () => {
    test('HStack render', () => {
        render(<VStack>default</VStack>);
        const testHStack = screen.getByText('default');
        expect(testHStack).toBeInTheDocument();
        screen.debug();
    });

    test('VStack default properties test', () => {
        render(<VStack>default</VStack>);
        const testVStack = screen.getByText('default');
        expect(testVStack).toHaveClass(
            'Flex justifyStart alignCenter directionColumn nowrap',
        );
    });

    test('VStack custom properties test', () => {
        render(
            <VStack gap={'4'} wrap={'wrap'} align={'end'} justify={'between'}>
                default
            </VStack>,
        );
        const testVStack = screen.getByText('default');
        expect(testVStack).toHaveClass(
            'Flex justifyBetween alignEnd directionColumn wrap gap4',
        );
        screen.debug();
    });
});
