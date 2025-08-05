import { Link } from "react-router-dom";
import style from "../styles/Header.module.scss";
import signIn from "../assets/img/ic-signin.png";

export default function Header() {
  return (
    <section className={style.header}>
      <Link to="/">
        <img
          src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"
          alt="ECME"
        />
      </Link>
      <div className={style.header_author}>
        <p className={style.header_username}>
          Morning, <strong>Larry!</strong>
        </p>
        <p>|</p>
        <button className={style.header_cta}>
          <span>Signin</span>
          <span>
            <img src={signIn} alt="" />
          </span>
        </button>
      </div>
    </section>
  );
}
