import { useEffect, useReducer, useState } from 'react';
import spltyReducer from '../reducers/spltyReducer';
import Splty from './Splty';
import useUser from '../hook/useUser';
import axios from 'axios';

const SpltiesContainer = () => {
  const [users, setUsers] = useState([]);
  const [state, dispatch] = useReducer(spltyReducer, users);
  const user = useUser();
  const url = 'https://dev-ave.online/api/v1/speciality';

  useEffect(() => {
    // dispatch({ type: 'getAllData' });
    console.log(user.user.toke);
    const headers = { headers: { Authorization: `Bearer ${user.user.token}` } };
    const data = axios
      .get(url, headers)
      .then((res) => setUsers(res.data.data.item));
  }, [user]);

  // const createSplty = () => {};
  const updateSplty = (id) => {
    dispatch({ type: 'updateData', payload: id });
    console.log('Updating item', id);
  };
  const deleteSplty = (id) => {
    console.log('Deleting item', id);
  };
  return (
    <div className="splties-container h-screen">
      <ul className="m-auto w-80 text-sm font-medium text-white border rounded-lg dark:bg-cyan-500 dark:border-cyan-400 dark:text-white ">
        {/* {state.map((splty) => (
          <Splty
            key={splty.id}
            name={splty.name}
            id={splty.id}
            handleUpdate={updateSplty}
            handleDelete={deleteSplty}
          ></Splty>
        ))} */}
      </ul>
    </div>
  );
};

export default SpltiesContainer;
