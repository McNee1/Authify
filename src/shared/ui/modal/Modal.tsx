import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';
import './modal.css';

interface ModalProps {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal = ({ children, onClose, isOpen, className }: ModalProps) => {
  const modalRef = useRef(null);

  const handleCloseModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);

      const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = 'hidden';

      document.body.style.paddingRight = scrollWidth + 'px';
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);

      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen, onKeyDown]);

  return (
    <CSSTransition
      classNames='modal'
      nodeRef={modalRef}
      timeout={300}
      in={isOpen}
      unmountOnExit
    >
      <div
        className={clsx('modal', className)}
        onClick={handleCloseModal}
        ref={modalRef}
        aria-hidden
      >
        <div className={'overlay'}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={'content'}
            aria-hidden
          >
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
