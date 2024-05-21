import React, { forwardRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'> & {
    droppableProps?: any;
    innerRef?: React.Ref<HTMLDivElement>;
};

export const HStack = forwardRef<HTMLDivElement, HStackProps>((props, ref) => {
    const {
        droppableProps,
        innerRef,
        className,
        gap,
        wrap,
        align,
        children,
        ...rest
    } = props;

    return (
        <Flex
            direction="row"
            wrap={wrap || 'wrap'}
            align={align}
            gap={gap}
            ref={ref}
            className={classNames('', {}, [className])}
            {...droppableProps}
            {...rest}
        >
            {children}
        </Flex>
    );
});
