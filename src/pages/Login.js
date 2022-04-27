import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormGroup from '../components/FormGroup';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    typeUser: '',
  });
  let navigate = useNavigate();
  const baseUrl =
    'https://xyfjdr4uvj.execute-api.us-east-1.amazonaws.com/dev/ave-auth/api/v1/auth/login';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password || !formData.typeUser) {
      return alert('Debes completar todos los campos');
    }
    login();
  };

  const login = () => {
    const bodyParams = {
      username: formData.username,
      password: formData.password,
      type_user: formData.typeUser,
    };

    const loginData = axios.post(baseUrl, bodyParams).then((res) => {
      if (!res.data.token) {
        alert(res.data.error);
      }
      if (res.data.token) {
        localStorage.setItem('data', JSON.stringify(res.data));
        return navigate('/admin');
      }
    });
    console.log(loginData);
  };

  return (
    <div className="login-container h-screen">
      <div className=" px-6 py-6 h-full ">
        <div className="flex justify-center items-center flex-wrap h-full text-gray-800 ">
          <form className="border rounded-md w-80" onSubmit={handleSubmit}>
            <img src="/cruz-icon.png" className="mx-auto mb-6" alt="logo" />

            <FormGroup
              type={'text'}
              label="Usuario"
              name={'username'}
              value={formData.username}
              handleChange={handleChange}
            />

            <FormGroup
              type={'password'}
              label="Contraseña"
              name={'password'}
              value={formData.password}
              handleChange={handleChange}
            />
            <FormGroup
              type={'text'}
              label="Tipo de usuario"
              name={'typeUser'}
              value={formData.typeUser}
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
    </div>
  );
};

export default Login;
