import PlaceList from "../../components/Places/PlaceList";
import LoadingSpinner from "../../components/UIElements/LoadingSpinner";
import { useState } from "react";

export default function index(props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && <PlaceList items={props} />}
    </>
  );
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
