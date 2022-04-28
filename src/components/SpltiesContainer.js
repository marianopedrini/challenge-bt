import { useEffect, useReducer, useState } from 'react';
import SpltiesList from './SpltiesList';
import NewSplty from './NewSplty';

import spltyReducer from '../reducers/spltyReducer';
import useUser from '../hook/useUser';
import axios from 'axios';

const initialState = {
  isLoading: true,
  error: '',
  data: [],
};

const SpltiesContainer = () => {
  const [state, dispatch] = useReducer(spltyReducer, initialState);
  const userToken = useUser();
  const [splties, setSplties] = useState([]);

  const headers = { headers: { Authorization: `Bearer ${userToken}` } };

  useEffect(() => {
    const url = 'https://dev-ave.online/api/v1/speciality';
    if (userToken) {
      axios
        .get(url, headers)
        .then((res) => setSplties(res.data.data.items))
        .catch((err) => alert(err));
    }
  }, [userToken]);

  const handleCreate = (e, splty) => {
    e.preventDefault();
    const url = 'https://dev-ave.online/api/v1/speciality/create';
    if (userToken) {
      if (splty.name && splty.description)
        axios
          .post(url, splty, headers)
          .then((res) => {
            setSplties(splties.concat(res.data.data.items[0]));
          })
          .catch((err) => alert(err));
    }
  };

  const handleUpdate = (id) => {
    console.log('Updating item', id);
  };

  return (
    <div className="pt-20 flex justify-center">
      <div className="flex gap-8">
        <SpltiesList splties={splties} handleUpdate={handleUpdate} />
        <NewSplty splties={splties} handleCreate={handleCreate} />
      </div>
    </div>
  );
};

export default SpltiesContainer;
