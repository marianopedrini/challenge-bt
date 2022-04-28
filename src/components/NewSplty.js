import axios from 'axios';
import { useState } from 'react';
import useUser from '../hook/useUser';
import FormGroup from './FormGroup';

const NewSplty = ({ handleCreate }) => {
  const [splty, setSplty] = useState({ name: '', description: '' });
  const userToken = useUser();

  const handleChange = (e) => {
    setSplty({ ...splty, [e.target.name]: e.target.value });
  };

  return (
    <div className="border px-6 py-6">
      <h2 className="text-xl text-center font-bold pb-6">
        Agregar Especialidad
      </h2>
      <div className=" text-gray-800">
        <form
          className=" rounded-md w-80"
          onSubmit={(e) => handleCreate(e, splty)}
        >
          <FormGroup
            type={'text'}
            label={'Especialidad'}
            name={'name'}
            value={splty.name}
            handleChange={handleChange}
          />

          <FormGroup
            type={'text'}
            label={'Descripción'}
            name={'description'}
            value={splty.description}
            handleChange={handleChange}
          />

          <button
            type="submit"
            className="inline-block px-7 py-3 bg-cyan-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewSplty;
