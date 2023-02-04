import { Link } from "react-router-dom";

 

const Card = ({ photo, deletePhoto }) => {

  if(photo.imageUrl.length === 0){
                photo.image3 = photo.image3
            }
            else if (photo.imageUrl.length >1){
                photo.image3 = photo.imageUrl}
  const imagess = [
            'img/photoprofil1.png', 
            'img/photoprofil2.png', 
            'img/photoprofil3.png', 
            'img/photoprofil4.png', 
            'img/photoprofil5.png', 
            'img/photoprofil6.png', 
            'img/photoprofil4.png',
            'img/figure1.png',  
            'img/figure2.png',
            'img/figure3.png',
            'img/figure4.png',
            
        ];
const imageInputs = imagess[Math.floor(Math.random() * imagess.length)];
  return (
    <div className="card bg-white hover:shadow-2xl rounded-3xl overflow-hidden p-7 pt-0 xl:pb-0 md:pb-0">
      <img className="card-image pb-4 h-48 w-full object-cover" src={photo.image3} alt={photo.id} />
      <div className="card-content text-gray-700 text-base mb-4 pl-14 text-justify">
        <div class="flex items-center">
        <img src={imageInputs} alt="Profile Image" class=" w-12 h-12 rounded-full mr-4"></img>
        <div class="text-sm">
        <h2 class="font-bold text-xl md:text-sm text-gray-900 leading-none">{photo.profil}</h2>
        </div>
        </div>
        
        <p className="captions text-gray-700 text-base mb-4 pl-14 text-justify " data-testid="photo-caption">{photo.captions}</p>
        <div className="flex justify-center py-4 gap-3">
        <button className="edit-btn bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-xl  ">
          <Link className="bg-blue-500 hover:bg-green-500 text-white font-bold " to={`${photo.id}`}>Edit</Link>
        </button>
        <button className="delete-btn bg-red-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-xl " onClick={() => deletePhoto(photo.id)}>Delete</button>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
