import PlaceItem from "./PlaceItem";

export default function PlaceList(props) {
  if (props.items.places.places.length === 0) {
    return <div><h2>No places found.</h2></div>;
  }
  return (
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <ul
            role="list"
            className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
          >
            {props.items.places.places.map((place) => (
              <PlaceItem
                key={place.id}
                id={place.id}
                image={place.image}
                title={place.title}
                address={place.address}
                creator={place.creator}
                onDelete={props.onDeletePlace}
              />
            ))}
          </ul>
        </div>
      </div>
  );
}