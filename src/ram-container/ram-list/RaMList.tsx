import { NavLink } from "react-router";
import { Characters } from "../ram-form/RamForm";
import './RaMList.css'

  interface Props {
    characters: Characters[];
  }


const RaMList = ({ characters  }: Props) => {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
           <div>
            <NavLink to={`${character.id}`}> <h3>{character.name}</h3> </NavLink>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
          </div>
          <img src={character.image} alt={character.name} width={300} height={300} />
        </li>
     ))}
     </ul>
   );
 };
 

export default RaMList;