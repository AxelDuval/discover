import React from 'react'

export default function PlaceDetail(props) {
  console.log(props.items)
  return (
    <>
    <div
      key={props.items.place.place.name}
      className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10"
    >
      <div className="card space-y-6 xl:space-y-10">
        <img src={props.items.place.place.image} alt={props.items.place.place.name} className="mx-auto h-40 w-40 xl:w-56 xl:h-56" />
        <div className="mt-4 space-y-2 xl:flex xl:items-center xl:justify-center">
          <div className="space-y-1">
            <h3 className="text-white text-lg leading-6 font-medium">
              {props.title}
            </h3>
            <p className="text-indigo-400">{props.items.place.place.address}</p>
            <p className="text-indigo-400">{props.items.place.place.description}</p>

          </div>
        </div>
        
      </div>
    </div>
    </>
  );
}
