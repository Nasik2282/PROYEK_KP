import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../components/Card';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [sort, setSort] = useState(null);
  const [submited, setSubmited] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePhoto = (id) => {
    // TODO: answer here
    fetch(`https://gallery-app-server.vercel.app/photos` + id, { method: 'DELETE' })
      .then((res) => {
        res.json();
        setPhotos(photos.filter((p) => p.id !== id));
      })
      .catch((err) => setError(true));
  };

  useEffect(() => {
    setLoading(true);
    // TODO: answer here
    if (submited) {
      fetch(`https://gallery-app-server.vercel.app/photos?_sort=id&_order=${sort}&q=${submited}`)
        .then((res) => res.json())
        .then((ress) => {
          setPhotos(ress);
          setLoading(false);
        })
        .catch((err) => setError(true));
    } else if (sort) {
      fetch(`https://gallery-app-server.vercel.app/photos?_sort=id&_order=${sort}`)
        .then((res) => res.json())
        .then((ress) => {
          setPhotos(ress);
          setLoading(false);
        })
        .catch((err) => setError(true));
    } else {
      fetch(`https://gallery-app-server.vercel.app/photos`)
        .then((res) => res.json())
        .then((ress) => {
          setPhotos(ress);
          setLoading(false);
        })
        .catch((err) => setError(true));
    }
  }, [sort, submited]);

  if (error) return <h1 style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>Error!</h1>;

  return (
    <>
      <div className="container">
        <div className="options">
          <select onChange={(e) => setSort(e.target.value)} data-testid="sort" className="form-select" style={{}}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmited(search);
            }}
          >
            <input type="text" data-testid="search" onChange={(e) => setSearch(e.target.value)} className="form-input" />
            <input type="submit" value="Search" data-testid="submit" className="form-btn" />
          </form>
        </div>
        <div className="content md:grid xl:grid xl:grid-cols-3 md:grid-cols-2 gap-14 ">
          {loading ? (
            <h1 style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>Loading...</h1>
          ) : (
            photos.map((photo) => {
              return <Card key={photo.id} photo={photo} deletePhoto={deletePhoto} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Photos;
