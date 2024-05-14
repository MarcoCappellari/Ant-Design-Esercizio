//file EliminaPost.js
import React from 'react';
import { Modal } from 'antd';

const EliminaPost = ({ elimina, onCancel }) => {
    return (
      <Modal
        title="Elimina Post"
        open={true} // Utilizza uno stato locale per gestire la visibilità
        onOk={elimina}
        onCancel={onCancel} // Chiudi il modal senza eliminare il post
        okText="Elimina"
        cancelText="Annulla"
      >
        Sei sicuro di voler eliminare questo post?
      </Modal>
    );
  };
  

export default EliminaPost;