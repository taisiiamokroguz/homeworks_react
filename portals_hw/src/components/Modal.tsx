import { createPortal } from "react-dom";
import React, { ReactNode } from "react";
import "./Modal.css";


interface ModalProps {
  open: boolean;
  closeModal: () => void;
  children: ReactNode; 
}

const modalNode = document.getElementById("modal") as HTMLElement;

const renderContent = (props: ModalProps) => {
  return createPortal(
    <div>
      <div className="background" onClick={props.closeModal} />
      <div className="modal">
        <button className="modal__close" onClick={props.closeModal}>
          &times;
        </button>
        {props.children}
      </div>
    </div>,
    modalNode
  );
};

const Modal: React.FC<ModalProps> = (props) => {
  return props.open ? renderContent(props) : null;
};

export default Modal;
