import React from 'react'
import Link from 'next/link'
import Avatar from './Avatar'

export default function UserItem(props) {
  return (
    <li
      key={props.name}
      className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 hover:bg-gray-700"
    >
      <div className="card space-y-6 xl:space-y-10">
          <Avatar image={props.image} alt={props.name} className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"/>
          <div className="mt-4 space-y-2 xl:flex xl:items-center xl:justify-center">
            <div className="space-y-1">
              <h3 className="text-white text-lg leading-6 font-medium">{props.name} - {props.id}</h3>
              {props.placeCount !=0 && 
              <Link href={`/users/${props.id}`}>
              <p className="text-indigo-400 pt-2">
                {props.placeCount}
                {props.placeCount === 1 ? " lieu partagé" : " lieux partagés"}
              </p>
              </Link>
              }
            </div>
          </div>        
      </div>
    </li>
  )
}
