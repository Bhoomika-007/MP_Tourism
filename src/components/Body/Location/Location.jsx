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
        { name: "Kandariya Mahadeva Temple", location: "Khajuraho", imageUrl: asset.Kandariya_Mahadev_temp },
        { name: "Bhojeshwar Mahadev Temple", location: "Bhojpur Bhopal", imageUrl: asset.Bhojeshwar_Mahadev },
        { name: "Shri Ram Raja Mandir", location: "Orcha Jhansi", imageUrl: asset.Raja_Ram_mandir },
        { name: "Ratangarh Mata Temple", location: "Ratangarh Gwalior", imageUrl: asset.Ratan_garh_temp },
        { name: "Shri Annapurna Temple", location: "Indore", imageUrl: asset.Annapurna_temp },
        { name: "Maa Sharda Devi Temple", location: "Maihar", imageUrl: asset.Sharda_maa_temp },
        { name: "The Virateshwar Temple", location: "Shahdol", imageUrl: asset.Virateshwar_temple },
        { name: "Ramvan Temple", location: "Satna", imageUrl: asset.Ramvan_temp },
        { name: "Shree Matangeshwar Temple", location: "Khajuraho", imageUrl: asset.Matangeshwar_Temple_17 },
        { name: "Shree 108 Prannath Ji Temple", location: "Panna", imageUrl: asset.Shree_108 },
        { name: "Shree Chintaman Ganesh", location: "Ujjain", imageUrl: asset.Shri_chintamani_Ganesh_Temple_19 },
        { name: "Pasupati Nath Temple", location: "Satna", imageUrl: asset.Pasupati_Nath_Temple_20 },
        { name: "Shri Kamta Nath Mandir", location: "Chitrakoot", imageUrl: asset.Kamta_Nath_21 },
        { name: "Chaturbhuj Temple", location: "Khajuraho", imageUrl: asset.Chaturbhuj_Temple_22 },
        { name: "Chaturbhuj Temple", location: "Orccha", imageUrl: asset.Chaturbhuj_Temple_23 },
        { name: "Siddheshwar Hanuman ji", location: "Simariya", imageUrl: asset.siddhesh_hanuman_24 },
        { name: "Shri Jugal Kishore Ji Temple", location: "Panna", imageUrl: asset.jugal_kishore_25 },
        { name: "Jatashankar Mandir", location: "Damoh", imageUrl: asset.jatasankar_26 },
        { name: "Narmada Ghat", location: "Dindori", imageUrl: asset.Narmada_27 },
        { name: "Dharmrajeshwar Temple", location: "Mandsaur", imageUrl: asset.Dharmarajeshwar_28 },
        { name: "Shree Adya Katyayani Shaktipeeth", location: "Chhatarpur", imageUrl: asset.Adya_29 },
        { name: "Godawal Dham Temple", location: "(Beohari) Shahdol", imageUrl: asset.Godawal_Dham_30 },
        { name: "Birla Mandir", location: "Bhopal", imageUrl: asset.Birla_31 },
        { name: "Bija Mandal Temple", location: "Vidisha", imageUrl: asset.Bija_mandir_32 }
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

