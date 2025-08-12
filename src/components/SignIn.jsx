import s from "../styles/SignIn.module.scss";
import icLogo from "../assets/img/ic-logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  let timeoutID;
  const navigate = useNavigate();
  function onSubmit(event) {
    event.preventDefault();
    clearTimeout(timeoutID);

    if (!user?.username?.trim()?.length || !user?.password?.trim()?.length) {
      setMsg("All fields are required!");
      return;
    }
    if (
      user?.username?.trim() !== "larry" ||
      user?.password?.trim() !== "larry"
    ) {
      setMsg("Account incorrect!");
      return;
    }
    if (
      user?.username?.trim() === "larry" &&
      user?.password?.trim() === "larry"
    ) {
      localStorage.setItem("user", JSON.stringify(user));
      setMsg("Signin successfully!");
      timeoutID = setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }

  function changeUsername(event) {
    setUser({
      ...user,
      username: event.target.value,
    });
    setMsg("");
  }
  function changePassword(event) {
    setUser({
      ...user,
      password: event.target.value,
    });
    setMsg("");
  }

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
          <p className={s.signin_msg}>{msg}</p>
          <form action="" onSubmit={onSubmit}>
            <div className={s.signin_item}>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Larry"
                value={user.username}
                onChange={changeUsername}
              />
            </div>
            <div className={s.signin_item}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="larry123"
                value={user.password}
                onChange={changePassword}
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
