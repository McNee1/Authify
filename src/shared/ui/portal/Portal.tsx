import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface AppPortalProps {
  children: ReactNode;
  domNode?: Element | DocumentFragment;
}

export const Portal = ({ children, domNode = document.body }: AppPortalProps) => {
  return createPortal(children, domNode);
};
