import { render, screen } from '@testing-library/react';
import { Flex } from './Flex';

describe('Flex tests', () => {
    test('Flex render', () => {
        render(<Flex>default</Flex>);
        const testFlex = screen.getByText('default');
        expect(testFlex).toBeInTheDocument();
    });

    test('Flex properties test', () => {
        render(
            <Flex
                gap={'16'}
                wrap={'wrap'}
                align={'end'}
                justify={'between'}
                direction={'row'}
            >
                default
            </Flex>,
        );
        const testFlex = screen.getByText('default');
        expect(testFlex).toHaveClass(
            'Flex justifyBetween alignEnd directionRow wrap gap16',
        );
    });
});
