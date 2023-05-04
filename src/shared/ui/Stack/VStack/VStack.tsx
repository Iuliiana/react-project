import { Flex, FlexProps } from '../Flex/Flex';

export type VStackProps = Omit<FlexProps, 'direction'>;
export const VStack = (props: VStackProps) => (
    <Flex {...props} direction="column" />
);
