import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios'; // Import axios for making HTTP requests

const EditModal = ({ isOpen, closeModal, tableData, tableNumber, handleSubmitUpdate }) => {
  const [formData, setFormData] = useState({
    newSeatNumber: tableData.seatNumber,
    newName: tableData.reservedBy,
    newTableName: tableData.tableName || '',
    tableNumber: tableNumber, // Initialize formData with tableNumber
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    handleSubmitUpdate(formData); // Include tableNumber in the form data
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Table Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2>Edit Table Information</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          New Seat Number:
          <input type="text" name="newSeatNumber" value={formData.newSeatNumber} onChange={handleChange} />
        </label>
        <label>
          New Name:
          <input type="text" name="newName" value={formData.newName} onChange={handleChange} />
        </label>
        <label>
          New Table Name:
          <input type="text" name="newTableName" value={formData.newTableName} onChange={handleChange} />
        </label>
        {/* Hidden input to store tableNumber */}
        <label>
          New Table Number:
        <input type="hidden" name="tableNumber" value={formData.tableNumber} onChange={handleChange} />
        <button type="submit">Update</button>
        <button type="button" onClick={closeModal}>Cancel</button>
        </label>
      </form>
    </Modal>
  );
};

export default EditModal;
