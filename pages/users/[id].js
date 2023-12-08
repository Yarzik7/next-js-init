import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import css from "../../styles/User.module.scss";

const User = ({ user }) => {
  const router = useRouter();
  const { query } = router;
  return (
    <MainContainer title={user.name} keywords={`user ${user.name}`}>
      <div className={css.user}>
        <h1>{`User with id ${query.id}`}</h1>
        <p>Username: {user.name}</p>
      </div>
    </MainContainer>
  );
};

export default User;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user },
  };
};
