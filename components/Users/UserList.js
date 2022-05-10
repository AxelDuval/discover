import UserItem from "./UserItem";

export default function UsersList(props) {
  if (props.items.users.users.length === 0) {
    return (
      <div>
        <h2>Pas d'utilisateurs trouvés</h2>
      </div>
    );
  }
  return (
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <ul
          role="list"
          className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
        >
          {props.items.users.users.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places.length}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
