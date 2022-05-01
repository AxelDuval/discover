import Link from "next/link";
import React from "react";
import Button from "../UIElements/Button";

export default function PlaceDetail(props) {
  return (
    <>
      <div
        key={props.items.place.place.title}
        className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10"
      >
        <div className="card space-y-6 xl:space-y-10">
          <img
            src={props.items.place.place.image}
            alt={props.items.place.place.title}
            className="mx-auto h-40 w-40 xl:w-56 xl:h-56"
          />
          <div className="mt-4 space-y-2 xl:flex xl:items-center xl:justify-center">
            <div className="space-y-1">
              <h3 className="text-white text-lg leading-6 font-medium">
                {props.items.place.place.title}
              </h3>
              <p className="text-white">{props.items.place.place.address}</p>
              <p className="text-white">
                {props.items.place.place.description}
              </p>
            </div>
          </div>
          <div>
            <span className="mx-2 mt-2">
              <Button size="xl" textColor="white" bgColor="bg-warning-700">
              <Link href={`edit/${props.items.place.place.id}`}>Modifier</Link>
              </Button>
            </span>
            <span className="mx-2 mt-2">
              <Button size="xl" textColor="white" bgColor="bg-red-800">
                Supprimer
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
