import React, {useState} from "react";
import PlaceDetail from "../../components/Places/PlaceDetail";

export default function place(props) {
    const [isLoading, setIsLoading] = useState(false);
  return (
    <>
    {isLoading && (
      <div className="center">
        <LoadingSpinner />
      </div>
    )}
    {!isLoading && <PlaceDetail items={props} />}
  </>
  )
}

// FONCTIONS QUI PERMETTENT UN RENDU DE PAGE STATIQUE
export async function getStaticProps(context) {
  const id = context.params.place;
  const response = await fetch(`http://localhost:5000/api/places/${id}`);
  const place = await response.json();
  return {
    props: {
      place,
    },
  };
}

// export async function getStaticPaths() {
//   const response = await fetch("http://localhost:5000/api/places");
//   const places = await response.json();

//   // GOOD PATH
//   const paths = places.places.map((item) => ({
//     params: { place: item.id },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }
