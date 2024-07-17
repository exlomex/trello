import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => {
    const { align = 'start', gap, wrap, justify } = props;
    return <Flex {...props} direction="column" />;
};
