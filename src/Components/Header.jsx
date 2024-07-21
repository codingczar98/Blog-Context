import { useContext, useState } from 'react';
import { AppContext } from '../Contexts/AppState';
import AddPost from './AddPost';

const Header = () => {
  const { darkTheme } = useContext(AppContext);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <header className={`${darkTheme ? 'dark' : ''}`}>
      <h1>ByteBuddies</h1>
      <button onClick={() => setOpenModal(!openModal)}>Create Post</button>
      {openModal && <AddPost closeModal={closeModal} />}
    </header>
  );
};

export default Header;
