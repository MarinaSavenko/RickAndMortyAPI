import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Characters } from "../ram-form/RamForm";
import './RaMPage.css'

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
            <p><h2>Character {id}</h2></p> 
            <div>
                 {listid &&
                    <div>
                        <img src={listid.image} alt={listid.name} width={300} />  
                        <h2>{listid.name}</h2>  
                        <p><strong>Status:</strong> {listid.status}</p>  
                        <p><strong>Species:</strong> {listid.species}</p>  
                        <p><strong>Gender:</strong> {listid.gender}</p> 
                        <p><strong>Location:</strong> {listid.location.name}</p>  
                        <p><strong>Origin:</strong> {listid.origin.name}</p>  
                        {/*<p><strong>Episode:</strong> {listid.episode}</p>*/}
                        <p><strong>Created:</strong> {listid.created}</p>
                    </div>
                 }
            </div>
        </>
    
                 
    );
}
export default RaMPage;