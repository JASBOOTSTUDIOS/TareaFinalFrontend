import React from "react";

interface ModalProps {
  show: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const ModalBootstrap: React.FC<ModalProps> = ({ show, handleClose, title, children }) => {
  return (
    <div className={`modal fade ${show ? "show d-block" : "d-none"}`} tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

