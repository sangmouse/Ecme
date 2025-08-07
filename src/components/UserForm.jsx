import s from "../styles/UserForm.module.scss";
import signIn from "../assets/img/ic-signin.png";

export default function UserForm() {
  return (
    <section className={s.form}>
      <div>
        <form action="">
          <div className={s.form_item}>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Larry"
            />
          </div>
          <div className={s.form_item}>
            <label htmlFor="role">Role</label>
            <select name="role" id="role">
              <option value="dev">Developer</option>
              <option value="ba">Business Analyst</option>
              <option value="tester">Tester</option>
            </select>
          </div>
          <div className={s.form_item}>
            <label htmlFor="company">Company</label>
            <select name="company" id="company">
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
            />
          </div>
          <div className={s.form_btn_group}>
            <button>Submit</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
}
