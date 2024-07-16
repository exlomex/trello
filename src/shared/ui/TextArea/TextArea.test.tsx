import { fireEvent, render, screen } from '@testing-library/react';
import { debug } from 'node:util';
import { TextArea } from './TextArea';

jest.mock('../../../shared/layouts/IconLayout', () => ({
    IconLayout: jest.fn(),
}));

const onChange = jest.fn();

describe('Textarea tests', () => {
    test('Textarea render', () => {
        render(
            <TextArea value={'default'} onChange={onChange}>
                default
            </TextArea>,
        );
        const testTextArea = screen.getByDisplayValue('default');
        expect(testTextArea).toBeInTheDocument();
    });

    test('Textarea placeholder test', () => {
        render(
            <TextArea
                value={'default'}
                onChange={onChange}
                placeholder={'131231'}
            ></TextArea>,
        );
        expect(screen.getByDisplayValue('default')).toBeInTheDocument();
    });

    test('Textarea onClose test', () => {
        render(<TextArea value={'default'} onChange={onChange}></TextArea>);
        const testInput = screen.getByDisplayValue('default');

        fireEvent.change(testInput, { target: { value: 'R' } });
        fireEvent.change(testInput, { target: { value: 'Re' } });
        expect(onChange).toBeCalledTimes(2);
    });
});
