import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PlaceItem(props) {
  return (
    <li
      key={props.name}
      className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 hover:bg-gray-700"
    >
      <div className="card space-y-6 xl:space-y-10">
        {/* <Avatar image={props.image} alt={props.name} className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"/> */}
        {/* <Image src={props.image} alt={props.title} layout="fill" /> */}
        <img src={props.image} alt={props.name} className="mx-auto h-40 w-40 xl:w-56 xl:h-56" />
        <div className="mt-4 space-y-2 xl:flex xl:items-center xl:justify-center">
          <div className="space-y-1">
            <h3 className="text-white text-lg leading-6 font-medium">
              {props.title}
            </h3>
            <p className="text-indigo-400">{props.address}</p>
          </div>
          <Link href={`/places/${props.id}`}>Voir le lieu</Link>
        </div>
        
      </div>
    </li>
  );
}
