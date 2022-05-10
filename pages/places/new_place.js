import { useRef, useContext } from "react";
import Button from "../../components/UIElements/Button";
import { AuthContext } from "../../context/auth-context";
import { useRouter } from "next/router";

export default function NewPlace() {
  const router = useRouter();
  const auth = useContext(AuthContext);
  console.log(auth);
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
          Authorization: access_token,
        },
        body: JSON.stringify({
          title: inputs.current[0].value,
          description: inputs.current[1].value,
          address: inputs.current[2].value,
          image: inputs.current[3].value,
          creator: userId,
        }),
      });
      console.log(response);

      const responseData = await response.json();
      console.log(responseData);

      if (!response.ok) {
        throw new Error(responseData.message);
      }
    } catch (err) {
      console.log(err);
    }
    router.push("/places");
  }

  return (
    <div className="min-h-full mx-auto max-w-3xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <form
        className="my-10 p-5 bg-gray-700"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className="mb-3 pt-4">
          <label className="text-white">Titre</label>
          <input
            ref={addInputs}
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
            id="description"
            name="description"
            htmlFor="description"
            type="text"
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>

        <div className="mb-3 pt-4">
          <label className="text-white">Adresse</label>
          <input
            ref={addInputs}
            id="address"
            name="address"
            htmlFor="address"
            type="text"
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>

        <div className="mb-3 pt-4">
          <label className="text-white">Lien de l'image</label>
          <input
            ref={addInputs}
            id="image"
            name="image"
            htmlFor="image"
            type="url"
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
        <div className="mt-10">
          <Button
            type="submit"
            bgColor="bg-success-300"
            textColor="black"
            size="sm"
          >
            Ajouter un lieu
          </Button>
        </div>
      </form>
    </div>
  );
}
