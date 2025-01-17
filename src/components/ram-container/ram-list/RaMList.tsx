import { NavLink } from "react-router";
import { Characters } from "../ram-form/RamForm";
import { useParams } from "react-router";


  interface Props {
    characters: Characters[];
  }


const RaMList = ({ characters  }: Props) => {
  const { count = 1 } = useParams();
  return (
      <ul className="flex flex-row flex-wrap justify-center gap-5 pb-5">
        {characters.map((character) => (
         <li key={character.id} className="w-1/3 bg-zinc-700  rounded-lg" >
          <div className="flex flex-row gap-4 items-center">
            <div >
              <img src={character.image} alt={character.name} width={300} height={300} className=" rounded-bl rounded-tl"/>
            </div>
            <div >
              <NavLink to={`/${count}/${character.id}`} > <h3 className="text-gray-100 font-roboto  text-[20px] font-bold">{character.name}</h3> </NavLink>
              <p className="text-gray-100 font-roboto"><strong className="text-zinc-400">Status: </strong>{character.status}</p>
              <p className="text-gray-100 font-roboto"><strong className="text-zinc-400">Species:</strong> {character.species}</p>
              <p className="text-gray-100 font-roboto"><strong className="text-zinc-400">Gender:</strong> {character.gender}</p>
            </div>
            
          </div>
        </li>
     ))}
     </ul>
     );
 };
 

export default RaMList;