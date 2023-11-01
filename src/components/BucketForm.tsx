import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieBucketAPI from "../api";

export default function BucketForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bucketName: "",
    description: "",
    genre: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
    "BucketForm",
    "formData=",
    formData,
    "formErrors",
    formErrors
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if not successful, sets errors.
   */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
        console.log("inside create function");
        const { bucketName, description, genre } = formData
        await MovieBucketAPI.createBucket(bucketName, description, genre);
        navigate("/buckets");
    } catch (err) {
        setFormErrors(err);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((l) => ({ ...l, [name]: value }));
  }

  return (
    <div className="bg-inherit">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="border-2 flex flex-row mt-8 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <label className="bg-black outline outline-black outline-2 text-white p-3">bucket name</label>
          <input
            name="bucketName"
            className="px-1 bg-white"
            value={formData.bucketName}
            onChange={handleChange}
            autoComplete="current-bucketName"
            required
          />
        </div>
        <div className="border-2 flex flex-row border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <label className="bg-black outline outline-black outline-2 text-white p-3">description</label>
          <input
            name="description"
            className="px-1 bg-white w-full resize-y"
            value={formData.description}
            onChange={handleChange}
            autoComplete="description"
          />
        </div>
        <div className="border-2 flex flex-row border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <label className="bg-black outline outline-black outline-2 text-white p-3">genre</label>
          <input
            name="genre"
            className="px-1 bg-white w-full"
            value={formData.genre}
            onChange={handleChange}
            autoComplete="current-genre"
          />
        </div>

        {/* {formErrors.length ? (
          <Alert type="danger" messages={formErrors} />
        ) : null} */}

        <div className="flex justify-end">
          <button
            className="bg-primary mt-4 font-bold w-20 p-2 outline outline-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
