import eyeIcon from "../assets/img/ic-eye.png";
import editIcon from "../assets/img/ic-edit.png";
import removeIcon from "../assets/img/ic-trash.png";
import userIcon from "../assets/img/ic-user.png";
import s from "../styles/LayoutRoot.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const ROLE = [
  {
    value: "dev",
    label: "Developer",
  },
  {
    value: "ba",
    label: "Business Analyst",
  },
  {
    value: "tester",
    label: "Tester",
  },
];

export const COMPANY = [
  {
    value: "cmc",
    label: "CMC Global",
  },
  {
    value: "fpt",
    label: "FTP Software",
  },
  {
    value: "vti",
    label: "VTI Group",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  function onRemoveUser(id) {
    fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    });
  }

  useEffect(function () {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => setList(data));
  });

  return (
    <section className={s.users}>
      <div className={s.users_title}>
        <h1>Users</h1>
        <button
          className={s.users_cta}
          onClick={() => navigate("/user/create")}
        >
          <span>
            <img src={userIcon} alt="" />
          </span>
          <span>Add New</span>
        </button>
      </div>
      <table>
        <tr>
          <th>User</th>
          <th>Role</th>
          <th>Company</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
        {list?.map((user) => {
          return (
            <tr>
              <td>{user?.username}</td>
              <td>{ROLE.find((item) => item.value === user?.role).label}</td>
              <td>
                {COMPANY.find((item) => item.value === user?.company).label}
              </td>
              <td>{user?.address}</td>
              <td>
                <button onClick={() => navigate(`/user/${user?.id}/view`)}>
                  <img src={eyeIcon} alt="" />
                </button>
                <button onClick={() => navigate(`/user/${user?.id}/edit`)}>
                  <img src={editIcon} alt="" />
                </button>
                <button onClick={() => onRemoveUser(user?.id)}>
                  <img src={removeIcon} alt="" />
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </section>
  );
}

// App.jsx / App.tsx
// javascript / typescript
