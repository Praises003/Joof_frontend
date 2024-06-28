import React, { useState } from 'react';
import Modal from 'react-modal';

const EditModal = ({ isOpen, closeModal, tableData, handleSubmitUpdate }) => {
  const [formData, setFormData] = useState({
    newTableNumber: tableData?.tableNumber || '',
    newSeatNumber: tableData?.seatNumber || '',
    newName: tableData?.reservedBy || '',
    newTableName: tableData?.tableName || '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    handleSubmitUpdate({  tableNumber: tableData.tableNumber, seatNumber: tableData.seatNumber, ...formData, }); // Include tableNumber in the form data
    closeModal();
  };

  console.log(formData)

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Table Modal"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="overlay"
    >
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Table Information</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">
              New Seat Number:
              <input
                type="text"
                name="newSeatNumber"
                value={formData.newSeatNumber}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div>
            <label className="block mb-2">
              New Name:
              <input
                type="text"
                name="newName"
                value={formData.newName}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div>
            <label className="block mb-2">
              New Table Name:
              <input
                type="text"
                name="newTableName"
                value={formData.newTableName}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
          </div>
          {/* Adding a hidden input to hold the tableNumber */}
          <div className="">
            <label className="block mb-2">
              New Table Number:
                <input type="number"
                 onChange={handleChange}
                 className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" name="newTableNumber" value={formData.newTableNumber} />
            </label>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              Update
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditModal;
