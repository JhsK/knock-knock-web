import { createPortal } from "react-dom";

interface IModalProps {
  show: boolean;
  children: React.ReactNode;
}

function Modal({ show, children }: IModalProps) {
  return show
    ? createPortal(
        <div
          className="fixed top-0 left-0 w-[500px] h-[300px] bg-white shadow-lg"
          style={{ zIndex: 1000 }}
        >
          {children}
        </div>,
        document.body
      )
    : null;
}

export default Modal;
