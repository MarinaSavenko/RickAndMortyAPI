import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Characters } from "../ram-form/RamForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";



const RaMPage = () => {
    const { id } = useParams();
    const [listid, setlistid] = useState<Characters>();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((e: Characters) => {
           setlistid(e);
           console.log({e});
           // setlistid(e.results?.map(({ id })=> id));
           //console.log(e.results?.map(({ id })=> id));
            });
        }, [])
      


    return(
        <>   
        <div className="flex flex-col items-center gap-4"> 
       
            <p><h2 className="text-[40px] font-[Roboto] font-bold text-gray-800 pt-4">Character {id}</h2></p> 
            <div className="flex flex-col gap-3 items-center bg-gray-800 rounded">
                 {listid &&
                    <div >
                        <div>
                            <img src={listid.image} alt={listid.name} width={300} className="rounded-tr rounded-tl" /> 
                        </div>
                        <div className="flex flex-col p-4 ">  
                            <h2 className="text-[20px] font-[Roboto] font-bold text-orange-500">{listid.name}</h2>  
                            <p className="text-gray-100 font-roboto"><strong className="text-zinc-400">Status:</strong> {listid.status}</p>  
                            <p className="text-gray-100 font-roboto"><strong className="text-zinc-400">Species:</strong> {listid.species}</p>  
                            <p className="text-gray-100 font-roboto"><strong className="text-zinc-400">Gender:</strong> {listid.gender}</p> 
                            <p className="text-gray-100 font-roboto"><strong className="text-zinc-400">Location:</strong> {listid.location.name}</p>  
                            <p className="text-gray-100 font-roboto"><strong className="text-zinc-400">Origin:</strong> {listid.origin.name}</p>  
                            {/*<p><strong>Episode:</strong> {listid.episode}</p>*/}
                            <p className="text-gray-100 font-roboto"><strong className="text-zinc-400">Created:</strong> {listid.created}</p>
                        </div> 
                        
                    </div>
                 }
            </div>
         <Button asChild className=" bg-gray-800 w-[300px]">
            <Link to="/">
                Back
            </Link>
         </Button>

        </div>    
        </>
    
                 
    );
}

export default RaMPage;


