import axios from "axios";
import { useEffect, useState } from "react";


const GetStarwarsInfoRandom = () => {
  const getRequest = async () => {
    try {
      const randomNum = Math.floor(Math.random() * 82) + 1; //ToDo update this hardcode dynamically, from the `people` endpoint (total count)

      const response = await axios.get(
        `https://swapi.dev/api/people/${randomNum}`
      );
      //setState({ foo: '', bar: '' })
      setRequest({
        name: response.data.name,
        hair_color: response.data.hair_color,
        skin_color: response.data.skin_color,
        birth_year: response.data.birth_year,
      });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const [request, setRequest] = useState([]);
  //Use Effect calls the get request function, hits API
  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div>
      <h1>{request.name}</h1>
      <ul>
        <li>Hair: {request.hair_color}</li>
        <li>Skin Color: {request.skin_color}</li>
        <li>Birth Year: {request.birth_year} </li>
      </ul>
      <button className="block" onClick={getRequest}>Click for another Fressshhh Starwars API hit!</button>
    </div>
  );
};
export default GetStarwarsInfoRandom;

// Sample from Request URL: https://swapi.dev/api/people/72

// {
//   "name": "Lama Su",
//   "height": "229",
//   "mass": "88",
//   "hair_color": "none",
//   "skin_color": "grey",
//   "eye_color": "black",
//   "birth_year": "unknown",
//   "gender": "male",
//   "homeworld": "https://swapi.dev/api/planets/10/",
//   "films": [
//       "https://swapi.dev/api/films/5/"
//   ],
//   "species": [
//       "https://swapi.dev/api/species/32/"
//   ],
//   "vehicles": [],
//   "starships": [],
//   "created": "2014-12-20T17:30:50.416000Z",
//   "edited": "2014-12-20T21:17:50.473000Z",
//   "url": "https://swapi.dev/api/people/72/"
// }
