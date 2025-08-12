import s from "../styles/UserForm.module.scss";
import signIn from "../assets/img/ic-signin.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserForm() {
  const [user, setUser] = useState({
    username: "",
    role: "dev",
    company: "cmc",
    address: "",
  });
  const [msg, setMsg] = useState("");
  let timeoutID;
  const navigate = useNavigate();
  const params = useParams();

  function onSubmit(event) {
    event.preventDefault();
    clearTimeout(timeoutID);

    if (!user?.username?.trim()?.length || !user?.address?.trim()?.length) {
      setMsg("All fields are required!");
      return;
    }

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    }).then(() => {
      setMsg("Created user sucessfully!");
      timeoutID = setTimeout(() => {
        navigate("/");
      }, 500);
    });
  }

  function onCancel() {
    navigate("/");
  }

  function fetchUserDetail() {
    fetch(`http://localhost:3001/users/${params?.id}`)
      .then((res) => res.json())
      .then((userDetail) => setUser({ ...userDetail }));
  }

  useEffect(
    function () {
      if (params?.id) {
        fetchUserDetail();
      }
    },
    [params?.id]
  );

  return (
    <section className={s.form}>
      <div>
        <p className={s.form_msg}>{msg}</p>
        <div className={s.form_wrap}>
          <div className={s.form_item}>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Larry"
              value={user?.user}
              onChange={(event) => {
                setUser({
                  ...user,
                  username: event.target.value,
                });
                setMsg("");
              }}
            />
          </div>
          <div className={s.form_item}>
            <label htmlFor="role">Role</label>
            <select
              name="role"
              id="role"
              value={user?.role}
              onChange={(event) => {
                setUser({
                  ...user,
                  role: event.target.value,
                });
                setMsg("");
              }}
            >
              <option value="dev">Developer</option>
              <option value="ba">Business Analyst</option>
              <option value="tester">Tester</option>
            </select>
          </div>
          <div className={s.form_item}>
            <label htmlFor="company">Company</label>
            <select
              name="company"
              id="company"
              value={user?.company}
              onChange={(event) => {
                setUser({
                  ...user,
                  company: event.target.value,
                });
                setMsg("");
              }}
            >
              <option value="cmc">CMC Global</option>
              <option value="fpt">FPT Software</option>
              <option value="vti">VTI Group</option>
            </select>
          </div>
          <div className={s.form_item}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Larry"
              value={user?.address}
              onChange={(event) => {
                setUser({
                  ...user,
                  address: event.target.value,
                });
                setMsg("");
              }}
            />
          </div>
          <div className={s.form_btn_group}>
            <button onClick={onSubmit}>Submit</button>
            <button onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </section>
  );
}
