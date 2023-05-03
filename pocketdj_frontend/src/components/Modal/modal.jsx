import React from 'react';
import Modal from 'react-modal';
import Button from '../Button/button';
import "./modal.css"

const customStyles = {
  content: {

  },
};

const AddModal = ({ onClose, Component, isModalOpen }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <Modal className={"modal"}
      isOpen={isModalOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <Component />
      <Button className={"button modal_btn"} name ={"Close"} onSubmit={onClose}></Button>
    </Modal>
  );
};

export default AddModal;
