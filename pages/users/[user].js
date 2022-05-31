import React from "react";
import PlaceList from "../../components/Places/PlaceList";

export default function user(props) {
  return <PlaceList items={props} />;
}

export async function getStaticProps(context) {
  const id = context.params.user;
  const response = await fetch(`https://placesdiscover.herokuapp.com/api/places/users/${id}`);
  const places = await response.json();
  return {
    props: {
      places,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://placesdiscover.herokuapp.com/api/users");
  const users = await response.json();

  const paths = users.users.map((item) => ({
    params: { user: item.id },
  }));
  return {
    paths,
    fallback: false,
  };
}
