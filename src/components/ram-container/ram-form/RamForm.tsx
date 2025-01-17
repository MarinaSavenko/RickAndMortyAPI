import { useEffect, useState } from "react";
import RaMList from "../ram-list/RaMList";
import RaMPaggination from "@/components/ram-paggin/RaMPagination";
import { useParams } from "react-router";




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
  const { count = 1 } = useParams();
  const [list, setList] = useState<Characters[]>([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
      .then((response) => response.json())
      .then((e: { results: Characters[] }) => {
        setList(e.results); 
      });
  }, [count]);

  return (
    
    <div className="flex flex-col">
      <div className="text-center p-40 text-[100px] font-[Roboto] font-bold text-zinc-800">
        <h1>API Рика и Морти</h1>
      </div>
    
      <div className="bg-zinc-800 pt-20">
        <RaMList characters={list} />
      </div> 
      <RaMPaggination />
    </div>
  );
};
  
export default RaMForm;