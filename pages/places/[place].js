import React from "react";
import PlaceDetail from "../../components/Places/PlaceDetail";

export default function place(props) {
  return (
    <>
   
    <PlaceDetail items={props} />
  </>
  )
}

export async function getStaticProps(context) {
  const id = context.params.place;
  const response = await fetch(`https://placesdiscover.herokuapp.com/api/places/${id}`);
  const place = await response.json();
  return {
    props: {
      place,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://placesdiscover.herokuapp.com/api/places");
  const places = await response.json();

  const paths = places.places.map((item) => ({
    params: { place: item.id },
  }));
  return {
    paths,
    fallback: false,
  };
}
