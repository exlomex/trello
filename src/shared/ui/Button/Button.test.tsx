import { fireEvent, render, screen } from '@testing-library/react';
import { debug } from 'node:util';
import { Button } from './Button';

jest.mock('../../../shared/layouts/IconLayout', () => ({
    IconLayout: jest.fn(),
}));

describe('Button', () => {
    test('Button variants', () => {
        render(<Button variant={'DefaultButton'}>DefaultButton</Button>);
        expect(screen.getByText('DefaultButton')).toHaveTextContent(
            'DefaultButton',
        );
        expect(screen.getByText('DefaultButton')).toHaveClass('DefaultButton');

        render(<Button variant={'DeleteButton'}>DeleteButton</Button>);
        expect(screen.getByText('DeleteButton')).toHaveTextContent(
            'DeleteButton',
        );
        expect(screen.getByText('DeleteButton')).toHaveClass('DeleteButton');

        render(
            <Button variant={'LeftAddonPopoverButton'}>
                LeftAddonPopoverButton
            </Button>,
        );
        expect(screen.getByText('LeftAddonPopoverButton')).toHaveTextContent(
            'LeftAddonPopoverButton',
        );
        expect(screen.getByText('LeftAddonPopoverButton')).toHaveClass(
            'LeftAddonPopoverButton',
        );

        render(
            <Button variant={'LeftAddonAddButton'}>LeftAddonAddButton</Button>,
        );
        expect(screen.getByText('LeftAddonAddButton')).toHaveTextContent(
            'LeftAddonAddButton',
        );
        expect(screen.getByText('LeftAddonAddButton')).toHaveClass(
            'LeftAddonAddButton',
        );

        render(<Button variant={'IconButton'}>IconButton</Button>);
        expect(screen.getByText('IconButton')).toHaveTextContent('IconButton');
        expect(screen.getByText('IconButton')).toHaveClass('IconButton');

        render(
            <Button variant={'LeftAddonCreateButton'}>
                LeftAddonCreateButton
            </Button>,
        );
        expect(screen.getByText('LeftAddonCreateButton')).toHaveTextContent(
            'LeftAddonCreateButton',
        );
        expect(screen.getByText('LeftAddonCreateButton')).toHaveClass(
            'LeftAddonCreateButton',
        );
    });

    test('Button size', () => {
        render(<Button size={'l'}>size</Button>);
        expect(screen.getByText('size')).toHaveClass('l');
    });

    test('Button border', () => {
        render(<Button borderRadius={'6'}>border</Button>);
        expect(screen.getByText('border')).toHaveClass('border6');
    });

    test('Button disabled', () => {
        render(<Button disabled={true}>disabled</Button>);
        expect(screen.getByText('disabled')).toHaveAttribute('disabled');
    });

    test('Button fullWidth', () => {
        render(<Button fullWidth={true}>fullWidth</Button>);
        expect(screen.getByText('fullWidth')).toHaveClass('fullWidth');
    });
});
