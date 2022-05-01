import { useRef, useContext } from "react";
import { AuthContext } from "../../../context/auth-context";

export default function UpdatePlace(props) {
  const auth = useContext(AuthContext);
  const formRef = useRef([]);
  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const token = auth.token;
  const access_token = `Bearer ${token}`;
  const userId = auth.userId;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/places", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": access_token
        },
        body: JSON.stringify({
          title: inputs.current[0].value,
          description: inputs.current[1].value,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
    } catch (err) {
      console.log(err);
    }
  }
  console.log(props);

  return (
    <>
      <div>Modifier un lieu</div>
      <form
        className=" my-10 p-5 bg-gray-200"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        {/* {isLoading && <LoadingSpinner />} */}

        <div className="mb-3 pt-4">
          <label>Titre</label>
          <input
            ref={addInputs}
            value={props}
            id="title"
            name="title"
            htmlFor="title"
            type="text"
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>

        <div className="mb-3 pt-4">
          <label>Description</label>
          <textarea
            ref={addInputs}
            id="description"
            name="description"
            htmlFor="description"
            type="text"
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>

        <button type="submit" className="bg-gray-500 text-white">
          Modifier le lieu
        </button>
      </form>
    </>

  );

}

export async function getServerSideProps() {
  const id = context.params.place;
  const res = await fetch(`http://localhost:5000/api/places/${id}`);
  const place = await res.json();
  return { props: { place } };
}

