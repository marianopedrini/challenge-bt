import useUser from '../hook/useUser';

const NavBar = () => {
  const user = useUser();

  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src="/cruz-icon.png" alt="logo" />

        <p>{user ? 'User Loged' : 'No data'}</p>
      </div>
    </div>
  );
};

export default NavBar;
