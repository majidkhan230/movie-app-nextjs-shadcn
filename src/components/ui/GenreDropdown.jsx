import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const GenreDropdown = () => {
    const data = [
        { id: 1, genre: "Action" },
        { id: 2, genre: "Adventure" },
        { id: 3, genre: "Comedy" },
        { id: 4, genre: "Drama" },
        { id: 5, genre: "Fantasy" },
        { id: 6, genre: "Horror" },
        { id: 7, genre: "Mystery" },
        { id: 8, genre: "Romance" },
        { id: 9, genre: "Sci-Fi" },
        { id: 10, genre: "Thriller" }
      ];
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>Genre  <ChevronDown /> </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
          <DropdownMenuSeparator />
      {data.map((item)=>{
        return(
            <DropdownMenuItem key={item.id}>
                <Link href={`/genre/${item?.id}?genre=${item.genre}`}>{item.genre}</Link>
            </DropdownMenuItem>
        )
      })}
       
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default GenreDropdown;
