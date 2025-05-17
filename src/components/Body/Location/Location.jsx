import React from 'react';
import './Location.css';
import asset from '../../../assets/asset.js';

// Import other images as before...


    const templeData = [
        { name: "Shree Mahakaleshwar Temple", location: "Ujjain", imageUrl:asset.Mahakal_temple },
        { name: "Shri Kaal Bhairav Temple", location: "Ujjain", imageUrl: asset.Kaal_bhairav },
        { name: "Shri Omkareshwar Jyotirlinga Temple", location: "Omkareshwar", imageUrl: asset.Omkareshwar_temp },
        { name: "Narmada Udgam Temple", location: "Amarkantak", imageUrl: asset.narmada_udgam },
        { name: "Sati Anasuya Temple", location: "Chitrakoot", imageUrl:asset.Sati_Anasuya },
        { name: "Bharat Milap Temple", location: "Chitrakoot", imageUrl:asset.Bharat_milap },
        { name: "Shree Pashupatinath Temple", location: "Mandsaur", imageUrl: asset.Pashupatinath },
        { name: "Chausath Yogini Temple", location: "Bhedaghat", imageUrl: asset.Chausath_yogin },
        { name: "Chausath Yogini Temple", location: "Jabalpur", imageUrl: asset.Chausath_Yogini_jab },
        { name: "Bhojeshwar Mahadev Temple", location: "Bhojpur Bhopal", imageUrl: asset.Bhojeshwar_Mahadev },
        { name: "Shri Ram Raja Mandir", location: "Orcha Jhansi", imageUrl: asset.Raja_Ram_mandir },
        { name: "Ratangarh Mata Temple", location: "Ratangarh Gwalior", imageUrl: asset.Ratan_garh_temp },
        { name: "Shri Annapurna Temple", location: "Indore", imageUrl: asset.Annapurna_temp },
        { name: "Maa Sharda Devi Temple", location: "Maihar", imageUrl: asset.Sharda_maa_temp },
        { name: "The Virateshwar Temple", location: "Shahdol", imageUrl: asset.Virateshwar_temple },
        { name: "Ramvan Temple", location: "Satna", imageUrl: asset.Ramvan_temp }
      ];

      function Card({ name, location, imageUrl }) {
        return (
        <div className="card-container">
          <div className="card card-c">
            <img src={imageUrl} alt={name} className="card-image" />
            <h3>{name}</h3>
            <p>{location}</p>
          </div>
        </div>
        );
      }
      
      function Location() {
        return (
            <>
            <center><h1 className="temp_title">Temples</h1></center>
          <div className="loc-cont">

            {templeData.map((temple, index) => (
              <Card 
                key={index} 
                name={temple.name} 
                location={temple.location} 
                imageUrl={temple.imageUrl} 
              />
            ))}
          </div>
          </>
        );
      }
export default Location;
//   return (
//     <div className="loc-cont">
//       {templeData.map((temple, index) => (
//         <Card 
//           key={index} 
//           name={temple.name} 
//           location={temple.location} 
//           imageUrl={temple.imageUrl} 
//         />
//       ))}
//     </div>
//   );
// }

