import { useRef, useContext } from "react";
import Button from "../../../components/UIElements/Button";
import { AuthContext } from "../../../context/auth-context";
import { useRouter } from "next/router";

export default function UpdatePlace(props) {
  const router = useRouter();
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
  const placeId = props.place.place.id;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/places/${placeId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: access_token,
          },
          body: JSON.stringify({
            title: inputs.current[0].value,
            description: inputs.current[1].value,
          }),
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
    } catch (err) {
      console.log(err);
    }
    router.back();
  }

  return (
    <div className="min-h-full mx-auto max-w-3xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <form
        className=" my-10 p-5 bg-gray-700"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className="mb-3 pt-4">
          <label className="text-white">Titre</label>
          <input
            ref={addInputs}
            defaultValue={props.place.place.title}
            id="title"
            name="title"
            htmlFor="title"
            type="text"
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>

        <div className="mb-3 pt-4">
          <label className="text-white">Description</label>
          <textarea
            ref={addInputs}
            defaultValue={props.place.place.description}
            id="description"
            name="description"
            htmlFor="description"
            type="text"
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
        <div className="mt-8">
          <Button
            type="submit"
            bgColor="bg-warning-700"
            textColor="white"
            size="sm"
          >
            Modifier le lieu
          </Button>
        </div>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.place;
  const res = await fetch(`http://localhost:5000/api/places/${id}`);
  const place = await res.json();
  return { props: { place } };
}
