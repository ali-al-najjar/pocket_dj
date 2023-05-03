import React from 'react';
import Modal from 'react-modal';
import Button from '../Button/button';
import "./modal.css"

const AddModal = ({ onClose, Component, isModalOpen,name }) => {
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
      <h2 className="heading">Upload new {name}</h2>
      <Component />
      <Button className={"button modal_btn"} name ={"Close"} onSubmit={onClose}></Button>
    </Modal>
  );
};

export default AddModal;
