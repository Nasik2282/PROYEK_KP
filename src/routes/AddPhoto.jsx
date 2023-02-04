import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { image3 } from './index.js'

const AddPhoto = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [captions, setCaptions] = useState('');
  const [secret, setSecret] = useState('');
  const [profil,setProfil]=useState('')
  // const[image2,setImage2]=useState('')
  // const [error, setError] = useState(null);
  const navigate = useNavigate();

  const addPhoto = async (e) => {
    
  
    e.preventDefault();
    const date = new Date().toISOString();
    // TODO: answer here
    await fetch(`https://gallery-app-server.vercel.app/photos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageUrl, captions, secret, createdAt: date, updatedAt: date, profil,image3 }),
    });
    navigate('/photos');
  };

  return (
    <>
      <div className="container">
        {/* {error && <div className="error-msg">{error}</div>} */}
        <form className="add-form" onSubmit={addPhoto}>
          <label>
            Image Url:
            <input className="add-input" type="text" data-testid="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </label>
          <label>
            Your Name:
            <input className="add-input" type="text" value={profil} data-testid="profil" onChange={(e) => setProfil(e.target.value)} />
          </label>
          <label>
            Captions:
            <input className="add-input" type="text" data-testid="captions" value={captions} onChange={(e) => setCaptions(e.target.value)} />
          </label>
          <label>
            Secret:
            <input className="add-input" type="text" value={secret} data-testid="secret" onChange={(e) => setSecret(e.target.value)} />
          </label>
          

          <input className="submit-btn" type="submit" value="Submit" data-testid="submit" />
          
        </form>
      </div>
    </>
  );
};

export default AddPhoto;
