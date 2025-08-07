import eyeIcon from "../assets/img/ic-eye.png";
import editIcon from "../assets/img/ic-edit.png";
import removeIcon from "../assets/img/ic-trash.png";
import userIcon from "../assets/img/ic-user.png";
import s from "../styles/LayoutRoot.module.scss";

export default function HomePage() {
  return (
    <section className={s.users}>
      <div className={s.users_title}>
        <h1>Users</h1>
        <button className={s.users_cta}>
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
          <th>Department</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Larry</td>
          <td>Developer</td>
          <td>VTI Group</td>
          <td>Ha Noi</td>
          <td>
            <button>
              <img src={eyeIcon} alt="" />
            </button>
            <button>
              <img src={editIcon} alt="" />
            </button>
            <button>
              <img src={removeIcon} alt="" />
            </button>
          </td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>Developer</td>
          <td>VTI Group</td>
          <td>Ha Noi</td>
          <td>
            <button>
              <img src={eyeIcon} alt="" />
            </button>
            <button>
              <img src={editIcon} alt="" />
            </button>
            <button>
              <img src={removeIcon} alt="" />
            </button>
          </td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>Developer</td>
          <td>VTI Group</td>
          <td>Ha Noi</td>
          <td>
            <button>
              <img src={eyeIcon} alt="" />
            </button>
            <button>
              <img src={editIcon} alt="" />
            </button>
            <button>
              <img src={removeIcon} alt="" />
            </button>
          </td>
        </tr>
      </table>
    </section>
  );
}

// App.jsx / App.tsx
// javascript / typescript
