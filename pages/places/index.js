import PlaceList from "../../components/Places/PlaceList";

export default function index(props) {
  return <PlaceList items={props} />;
}

export async function getStaticProps() {
  const response = await fetch(`http://localhost:5000/api/places`);
  const places = await response.json();
  return {
    props: {
      places,
    },
  };
}
