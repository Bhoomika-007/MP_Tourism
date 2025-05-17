import React from 'react';
import { Link } from 'react-router-dom';  // For navigation to detail page
import asset from '../../assets/asset';  // Assuming your images are in the assets folder

const templeData = [
  { 
    id: 1,
    name: "Shree Mahakaleshwar Temple", 
    location: "Ujjain", 
    imageUrl: asset.Mahakal_temple, 
    description: 'Shree Mahakaleshwar Temple is one of the 12 Jyotirlingas, located in Ujjain, Madhya Pradesh. It is a major pilgrimage site for Hindus and an architectural marvel.'
  },
  { 
    id: 2,
    name: "Shri Kaal Bhairav Temple", 
    location: "Ujjain", 
    imageUrl: asset.Kaal_bhairav, 
    description: 'Shri Kaal Bhairav Temple is dedicated to Kaal Bhairav, the god of time, in Ujjain. The temple holds great significance for those who seek protection from negative forces.'
  },
  { 
    id: 3,
    name: "Shri Omkareshwar Jyotirlinga Temple", 
    location: "Omkareshwar", 
    imageUrl: asset.Omkareshwar_temp, 
    description: 'Shree Mahakaleshwar Temple is one of the 12 Jyotirlingas, located in Ujjain, Madhya Pradesh. It is a major pilgrimage site for Hindus and an architectural marvel.'
  },
  { 
    id: 4,
    name: "Narmada Udgam Temple", 
    location: "Amarkantak", 
    imageUrl: asset.narmada_udgam, 
    description: 'Shri Kaal Bhairav Temple is dedicated to Kaal Bhairav, the god of time, in Ujjain. The temple holds great significance for those who seek protection from negative forces.'
  },
  { 
    id: 5,
    name: "Sati Anasuya Temple", 
    location: "Chitrakoot", 
    imageUrl: asset.Sati_Anasuya, 
    description: 'Shree Mahakaleshwar Temple is one of the 12 Jyotirlingas, located in Ujjain, Madhya Pradesh. It is a major pilgrimage site for Hindus and an architectural marvel.'
  },
  { 
    id: 6,
    name: "Bharat Milap Temple", 
    location: "Chitrakoot", 
    imageUrl: asset.Bharat_milap, 
    description: 'Shri Kaal Bhairav Temple is dedicated to Kaal Bhairav, the god of time, in Ujjain. The temple holds great significance for those who seek protection from negative forces.'
  },
  { 
    id: 7,
    name: "Shree Pashupatinath Temple", 
    location: "Mandsaur", 
    imageUrl: asset.Pashupatinath, 
    description: 'Shree Mahakaleshwar Temple is one of the 12 Jyotirlingas, located in Ujjain, Madhya Pradesh. It is a major pilgrimage site for Hindus and an architectural marvel.'
  },
  { 
    id: 8,
    name: "Chausath Yogini Temple", 
    location: "Bhedaghat", 
    imageUrl: asset.Chausath_yogin, 
    description: 'Shri Kaal Bhairav Temple is dedicated to Kaal Bhairav, the god of time, in Ujjain. The temple holds great significance for those who seek protection from negative forces.'
  },
  { 
    id: 9,
    name: "Kandariya Mahadeva Temple", 
    location: "Khajuraho", 
    imageUrl: asset.Kandariya_Mahadev_temp, 
    description: 'Shree Mahakaleshwar Temple is one of the 12 Jyotirlingas, located in Ujjain, Madhya Pradesh. It is a major pilgrimage site for Hindus and an architectural marvel.'
  },
  { 
    id: 10,
    name: "Bhojeshwar Mahadev Temple", 
    location: "Bhojpur", 
    imageUrl: asset.Bhojeshwar_Mahadev, 
    description: 'Shri Kaal Bhairav Temple is dedicated to Kaal Bhairav, the god of time, in Ujjain. The temple holds great significance for those who seek protection from negative forces.'
  },
  { 
    id: 11,
    name: "Shri Ram Raja Mandir", 
    location: "Orcha", 
    imageUrl: asset.Raja_Ram_mandir, 
    description: 'Shree Mahakaleshwar Temple is one of the 12 Jyotirlingas, located in Ujjain, Madhya Pradesh. It is a major pilgrimage site for Hindus and an architectural marvel.'
  },
  { 
    id: 12,
    name: "Ratangarh Mata Temple", 
    location: "Ratangarh", 
    imageUrl: asset.Ratan_garh_temp, 
    description: 'Shri Kaal Bhairav Temple is dedicated to Kaal Bhairav, the god of time, in Ujjain. The temple holds great significance for those who seek protection from negative forces.'
  },
  { 
    id: 13,
    name: "Shri Annapurna Temple", 
    location: "Indore", 
    imageUrl: asset.Annapurna_temp, 
    description: 'Shree Mahakaleshwar Temple is one of the 12 Jyotirlingas, located in Ujjain, Madhya Pradesh. It is a major pilgrimage site for Hindus and an architectural marvel.'
  },
  { 
    id: 14,
    name: "Maa Sharda Devi Temple", 
    location: "Maihar", 
    imageUrl: asset.Sharda_maa_temp, 
    description: 'Shri Kaal Bhairav Temple is dedicated to Kaal Bhairav, the god of time, in Ujjain. The temple holds great significance for those who seek protection from negative forces.'
  },
  { 
    id: 15,
    name: "The Virateshwar Temple", 
    location: "Shahdol", 
    imageUrl: asset.Virateshwar_temple, 
    description: 'Shree Mahakaleshwar Temple is one of the 12 Jyotirlingas, located in Ujjain, Madhya Pradesh. It is a major pilgrimage site for Hindus and an architectural marvel.'
  },
  { 
    id: 16,
    name: "Ramvan Temple", 
    location: "Satna", 
    imageUrl: asset.Ramvan_temp, 
    description: 'Shri Kaal Bhairav Temple is dedicated to Kaal Bhairav, the god of time, in Ujjain. The temple holds great significance for those who seek protection from negative forces.'
  },
  // Add other temples here...
];

function Card({ name, location, imageUrl, id }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={imageUrl} alt={name} className="card-image" />
        <h3>{name}</h3>
        <p>{location}</p>
        <Link to={`/temples/${id}`}>Read More</Link>  {/* Link to individual temple details */}
      </div>
    </div>
  );
}

function Temples() {
  return (
    <>
      <center><h1 className="temp_title">Temples</h1></center>
      <div className="loc-cont">
        {templeData.map((temple) => (
          <Card 
            key={temple.id}  // Use the unique ID as key
            name={temple.name} 
            location={temple.location} 
            imageUrl={temple.imageUrl} 
            id={temple.id}  // Pass the unique ID here
          />
        ))}
      </div>
    </>
  );
}

export default Temples;
