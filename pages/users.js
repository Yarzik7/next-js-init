import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer title="Users" keywords="users page">
      <h1>Users page</h1>
      <ul>
        {users.map(({ id, name }) => (
          <Link href={`/users/${id}`} key={id}>
            <li>
              <p>{name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export const getStaticProps = async (context) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: { users },
  };
};
