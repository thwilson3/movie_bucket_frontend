import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpForm({ signup }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
    "SignUpForm",
    "signup=",
    typeof signup,
    "formData=",
    formData,
    "formErrors",
    formErrors
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if not successful, sets errors.
   */
  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    try {
      await signup(formData);
      navigate("/");
    } catch (err) {
      setFormErrors(err);
    }
  }

  /** Update form data field */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;
    setFormData((l) => ({ ...l, [name]: value }));
  }

  return (
    <div className="bg-inherit opacity-100">
      <form onSubmit={handleSubmit}>
      <div className="border-2 flex flex-row border-black mt-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <label className="bg-black outline outline-black outline-2 text-white p-3">email</label>
          <input
            name="email"
            className="px-1 bg-white"
            value={formData.email}
            onChange={handleChange}
            autoComplete="current-email"
            required
          />
        </div>
        <div className="border-2 flex flex-row border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <label className="bg-black outline outline-black outline-2 text-white p-3">username</label>
          <input
            name="username"
            className="px-1 bg-white"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </div>
        <div className="border-2 flex flex-row border-black mt-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <label className="bg-black outline outline-black outline-2 text-white p-3">password</label>
          <input
            name="password"
            className="px-1 bg-white"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
        </div>

        {/* {formErrors.length ? (
          <Alert type="danger" messages={formErrors} />
        ) : null} */}

        <div className="flex justify-end">
          <button
            className="bg-primary mt-4 font-bold w-20 p-2 outline outline-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}
