import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode,
    domNode?: HTMLElement
}

export const Portal:FC<PortalProps> = (props) => {
    const {
        children,
        domNode = document.body,
    } = props;

    return createPortal(
        children,
        domNode,
    );
};
