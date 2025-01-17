import {
    Pagination,
    PaginationContent,
    PaginationItem,
  } from "@/components/ui/pagination"
import { useState } from "react";
import { Link } from "react-router";

 const RaMPaggination = () => {
    const [count, setCount] = useState(1); 
    const decrement = () => {
      if (count > 1) {
        setCount(count - 1);
        }
      };
    const increment = () => setCount(count+1);
    return (
  <div className="bg-zinc-800 p-5"> 
  <Pagination>
    <PaginationContent className="flex flex-row gap-5">
      <PaginationItem>
      <Link to={`/${count - 1}`} onClick={decrement} className="text-gray-100 text-[30px] font-roboto "> Предыдущая </Link>
      </PaginationItem>
      <PaginationItem>
        <Link to={`/${count}`} className="text-gray-100 text-[30px] font-roboto"> {count} </Link>
      </PaginationItem>
      <PaginationItem>
      <Link to={`/${count + 1}`} onClick={increment} className="text-gray-100 text-[30px] font-roboto"> Следующая </Link>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  </div>
    )
  }
export default RaMPaggination;
