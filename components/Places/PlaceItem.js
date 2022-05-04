import React from "react";
import Link from "next/link";
import Button from "../UIElements/Button";

export default function PlaceItem(props) {
  return (
    <li
      key={props.name}
      className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 hover:bg-gray-700"
    >
      <div className="card space-y-6 xl:space-y-10">
        <div className="h-56 overflow-hidden">
          <img
            src={props.image}
            alt={props.title}
            className="min-h-100 object-cover"
          />
        </div>
        <div className="mt-4 space-y-2 xl:flex xl:items-center xl:justify-center">
          <div className="space-y-1">
            <h3 className="text-white text-lg leading-6 font-medium">
              {props.title}
            </h3>
            <p className="text-gray-400">{props.address}</p>
          </div>
        </div>

        <Button size="md" textColor="white" bgColor="bg-gray-600">
          <Link href={`/places/${props.id}`}> Voir le lieu</Link>
        </Button>
      </div>
    </li>
  );
}
