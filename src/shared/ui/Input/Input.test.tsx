import { fireEvent, render, screen } from '@testing-library/react';
import { debug } from 'node:util';
import { Input } from './Input';

jest.mock('../../../shared/layouts/IconLayout', () => ({
    IconLayout: jest.fn(),
}));

const onChange = jest.fn();

describe('Input tests', () => {
    test('Input render', () => {
        render(<Input value={'default'} onChange={onChange}></Input>);
        const testInput = screen.getByDisplayValue('default');
        expect(testInput).toBeInTheDocument();
        expect(testInput).toHaveClass('Input');
    });

    test('Input placeholder test', () => {
        render(
            <Input
                value={'default'}
                onChange={onChange}
                placeholder={'131231'}
            ></Input>,
        );
        const testInput = screen.getByPlaceholderText('131231');
        expect(testInput).toBeInTheDocument();
    });

    test('Input onChange checking', () => {
        render(<Input value={'default'} onChange={onChange}></Input>);
        const testInput = screen.getByDisplayValue('default');

        fireEvent.change(testInput, { target: { value: 'R' } });
        fireEvent.change(testInput, { target: { value: 'Re' } });
        expect(onChange).toBeCalledTimes(2);
    });

    test('Input len checking', () => {
        render(
            <Input
                value={''}
                onChange={onChange}
                placeholder={'default'}
                maxLength={50}
            ></Input>,
        );
        const testInput = screen.getByPlaceholderText('default');
        expect(testInput).toHaveAttribute('maxlength', '50');
    });
});
