import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupFunction } from "../interfaces";

export default function SignUpForm({ signup }: {signup: SignupFunction}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  // const [formErrors, setFormErrors] = useState([]);

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
      console.error(err);
    }
  }

  /** Update form data field */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;
    setFormData((l) => ({ ...l, [name]: value }));
  }

  return (
    <div className="bg-inherit">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <p className="flex flex-col text-sm opacity-60 mt-3 absolute top-16">
            *all fields required
          </p>

          <div className="border-2 flex flex-row relative mt-8 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="bg-black outline outline-black outline-2 text-white p-3">
              email
            </label>
            <input
              name="email"
              className="px-1 bg-white w-full"
              value={formData.email}
              onChange={handleChange}
              autoComplete="current-email"
              required
            />
          </div>
        </div>
        <div className="border-2 flex flex-row border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <label className="bg-black outline outline-black outline-2 text-white p-3">
            username
          </label>
          <input
            name="username"
            className="px-1 bg-white w-full resize-y"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </div>
        <div className="border-2 flex flex-row border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <label className="bg-black outline outline-black outline-2 text-white p-3">
            password
          </label>
          <input
            name="password"
            className="px-1 bg-white w-full"
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
          <button className="bg-primary mt-4 font-bold w-20 p-2 outline outline-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
