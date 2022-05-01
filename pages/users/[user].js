import React from "react";
import PlaceList from "../../components/Places/PlaceList";

export default function user(props) {
  return (
    <>
      <div>USER / places</div>
      <PlaceList items={props} />
    </>
  );
}

// FONCTIONS QUI PERMETTENT UN RENDU DE PAGE STATIQUE // TROUVE LES LIEUX PAR L'ID UTILISATEUR
export async function getStaticProps(context) {
  const id = context.params.user;
  const response = await fetch(`http://localhost:5000/api/places/users/${id}`);
  const places = await response.json();
  return {
    props: {
      places,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:5000/api/users");
  const users = await response.json();

  // GOOD PATH
  const paths = users.users.map((item) => ({
    params: { user: item.id },
  }));
  return {
    paths,
    fallback: false,
  };
}
