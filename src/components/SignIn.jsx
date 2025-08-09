import s from "../styles/SignIn.module.scss";
import icLogo from "../assets/img/ic-logo.png";

export default function SignIn() {
  return (
    <div className={s.signin_container}>
      <section className={s.signin}>
        <div className={s.signin_intro}>
          <p className={s.signin_logo_wrap}>
            <img src={icLogo} alt="" className={s.signin_logo} />
          </p>
          <h1 className={s.signin_heading}>Welcome back!</h1>
          <p className={s.signin_subheading}>
            Please enter your credentials to sign in!
          </p>
        </div>
        <div>
          <form action="">
            <div className={s.signin_item}>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Larry"
              />
            </div>
            <div className={s.signin_item}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="larry123"
              />
            </div>
            <div>
              <button>Sign In</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
