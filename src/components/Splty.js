import React from 'react';

const Splty = ({ name, id, handleUpdate, handleDelete }) => {
  return (
    <>
      <li className="splty-container w-full px-6 py-3 flex justify-between">
        {name}
        <div className="flex gap-4">
          <button onClick={() => handleUpdate(id)}>
            <img src="/editar.png" alt="edit-icon" />
          </button>
          <button onClick={() => handleDelete(id)}>
            <img src="/eliminar.png" alt="delete-icon" />
          </button>
        </div>
      </li>
      <hr />
    </>
  );
};

export default Splty;
