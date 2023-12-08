import A from "./A";
import Head from "next/head";
import css from "../styles/MainContainer.module.scss";

const MainContainer = ({ title, keywords, children }) => {
  return (
    <>
      <Head>
        <meta keywords={"Yarzik7" + keywords}></meta>
        <title>{title}</title>
      </Head>
      <header className={css.header}>
        <nav className={css.navbar}>
          <ul className={css.navList}>
            <li>
              <A href={"/"} text="Home" className={css.NavList__link} />
            </li>
            <li>
              <A href={"/users"} text="Users" className={css.NavList__link} />
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default MainContainer;
