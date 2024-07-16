import { fireEvent, render, screen } from '@testing-library/react';
import { debug } from 'node:util';
import { Modal } from './Modal';

jest.mock('../../../shared/layouts/IconLayout', () => ({
    IconLayout: jest.fn(),
}));

const onClose = jest.fn();

describe('Modal tests', () => {
    test('Modal render', () => {
        render(<Modal isOpen={true} onClose={onClose}></Modal>);
        const testInput = screen.getByTestId('modal');
        expect(testInput).toHaveClass('opened');
        expect(testInput.querySelector('.overlay')).toBeInTheDocument();
        expect(testInput.querySelector('.content')).toBeInTheDocument();
    });

    test('Modal childrens', () => {
        render(
            <Modal isOpen={true} onClose={onClose}>
                test text
            </Modal>,
        );
        const testInput = screen.getByTestId('modal');
        expect(testInput.querySelector('.content')).toHaveTextContent(
            'test text',
        );
    });

    test('Modal render without isOpen flag', () => {
        render(<Modal isOpen={false} onClose={onClose}></Modal>);
        const testInput = screen.getByTestId('modal');
        expect(testInput.querySelector('.content')).not.toHaveClass('opened');
    });

    test('Modal onClose test', () => {
        render(<Modal isOpen={true} onClose={onClose}></Modal>);
        const ModalOverlay = screen.getByTestId('modalOverlay');
        fireEvent.click(ModalOverlay);
        fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
        expect(onClose).toBeCalledTimes(2);
    });
});
