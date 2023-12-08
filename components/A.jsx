import Link from "next/link";
import css from "../styles/A.module.css";

const A = ({ text, href }) => {
  return (
    <Link href={href} className={css.navList__link}>
      {text}
    </Link>
  );
};

export default A;
