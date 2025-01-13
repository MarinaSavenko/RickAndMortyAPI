import { useEffect, useState } from "react";
import RaMList from "../ram-list/RaMList";
import { NavLink } from "react-router";



export interface Characters {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin:{
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

const RaMForm = () => {
  const [list, setList] = useState<Characters[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((e: { results: Characters[] }) => {
        setList(e.results); 
      });
  }, []);

  return (
    <div>
      <h1>API Рика и Морти</h1>
        <RaMList characters={list} />
        
    </div>
  );
};

export default RaMForm;