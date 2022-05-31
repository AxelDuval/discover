import UserList from "../../components/Users/UserList";

export default function index(props) {

  return (
    <>
     <UserList items={props} />
    </>
  );
}
export async function getStaticProps() {

  const response = await fetch(`https://placesdiscover.herokuapp.com/api/users`);
  const users = await response.json();
  return {
    props: {
      users,
    },
  };
}
