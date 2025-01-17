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
                        <table className="m-4 ">
                            <thead>
                                <tr>
                                    <th colSpan={2} className="p-4 text-center">
                                        <img src={listid.image} alt={listid.name} width={300} className="rounded mb-4"  /> 
                                        <h2 className="text-[20px] font-[Roboto] font-bold text-orange-500">{listid.name}</h2>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                    <tr>  
                                         
                                        <td ><strong className="text-zinc-400">Status:</strong> </td>
                                        <td className="text-gray-100 font-roboto">{listid.status}</td>                        
                                    </tr> 
                                    <tr>   
                                        <td ><strong className="text-zinc-400">Species:</strong> </td>
                                        <td className="text-gray-100 font-roboto">{listid.species}</td>
                                    </tr>
                                    <tr>
                                        <td ><strong className="text-zinc-400">Gender:</strong> </td>
                                        <td className="text-gray-100 font-roboto">{listid.gender}</td>
                                    </tr>
                                    <tr>
                                        <td ><strong className="text-zinc-400">Location:</strong></td>
                                        <td className="text-gray-100 font-roboto"> {listid.location.name}</td>
                                    </tr>       
                                    
                                    <tr>
                                        <td ><strong className="text-zinc-400">Origin:</strong> </td>
                                        <td className="text-gray-100 font-roboto">{listid.origin.name}</td>
                                    </tr>
                                    <tr>
                                        <td ><strong className="text-zinc-400">Created:</strong> </td>
                                        <td className="text-gray-100 font-roboto">{listid.created}</td>
                                    </tr>    
                                             
                                            {/*<p><strong>Episode:</strong> {listid.episode}</p>*/}
                               
                            </tbody>
                        </table>
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


