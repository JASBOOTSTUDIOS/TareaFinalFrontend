import { textColorPrimary } from "../../../components/themesAndColors/TemesAndColors";
import { CredentialsTable } from "../../../components/Tables/CredentialsTable";
import { ModalBootstrap } from "../../../components/Modals/ModalProps";
import { useState } from "react";

export default function UsuariosDashboard() {
  const [showModal, useShowModal] = useState(false);
  return (
    <>
      <div className="row">
        <button className="btn btn-info" onClick={() => useShowModal(true)}>
          Abrir Modal
        </button>
        <ModalBootstrap
          show={showModal}
          handleClose={() => useShowModal(false)}
          title="Modal de Prueva"
        >
          <h1 className={`${textColorPrimary}`}>Mi Modal Funciona</h1>
        </ModalBootstrap>
        <h1 className={`${textColorPrimary}`}>Tabla de Usuarios</h1>
        <CredentialsTable />
      </div>
    </>
  );
}
