import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPhoto = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [captions, setCaptions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const editPhoto = (e) => {
    e.preventDefault();
    // TODO: answer here
    fetch("https://gallery-app-server.vercel.app/photos/" + id, {
      method: "PATCH",
      body: JSON.stringify({
        imageUrl: imageUrl,
        captions: captions,
        updatedAt: Date.now(),
      }),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
    .then((data) => navigate("/photos"))
  };

  useEffect(() => {
    setLoading(true);
    // TODO: answer here
    async function fetchData(id) {
      const response = await fetch(`https://gallery-app-server.vercel.app/photos/${id}`);
      const cardData = await response.json();
      setImageUrl(cardData.imageUrl);
      setCaptions(cardData.captions);
      setLoading(false);
    }
    fetchData(id);
  }, [id]);

  if (error) return <div>Error!</div>;

  return (
    <>
      {loading ? (
        <h1 style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
          Loading...
        </h1>
      ) : (
        <div className="container">
          <form className="edit-form" onSubmit={editPhoto}>
            <label>
              Image Url:
              <input
                className="edit-input"
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </label>
            <label>
              Captions:
              <input
                className="edit-input"
                type="text"
                value={captions}
                data-testid="captions"
                onChange={(e) => setCaptions(e.target.value)}
              />
            </label>
            <input className="submit-btn" type="submit" value="Submit" data-testid="submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default EditPhoto;
