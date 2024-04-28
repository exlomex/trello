import { Button } from '@/shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { CounterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string;
}

export const Counter = (props: CounterProps) => {
    const { className } = props;
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const decrement = () => {
        dispatch(CounterActions.decrement());
    };

    const increment = () => {
        dispatch(CounterActions.increment());
    };

    return (
        <div style={{ display: 'flex' }}>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="increment-btn">
                {'increment'}
            </Button>
            <Button data-testid="decrement-btn" onClick={decrement}>
                {'decrement'}
            </Button>
        </div>
    );
};
