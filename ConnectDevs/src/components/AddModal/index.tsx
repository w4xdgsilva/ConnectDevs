import { useContext } from 'react';
import { EditPost } from './EditPost';
import { ProfileContext } from '../../providers/ProfileContext/ProfileContext';

export const AddModal = () => {
  const { setEditPost } = useContext(ProfileContext);
  return (
    <div>
      <div>
        <div>
          <h3>Detalhes do seu Post</h3>
          <button type='button' onClick={() => setEditPost(null)}>
            X
          </button>
        </div>
        <EditPost />
      </div>
    </div>
  );
};
