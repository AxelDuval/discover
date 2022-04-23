import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRef } from "react";

import LoadingSpinner from "../../components/UIElements/LoadingSpinner";

export default function NewPlace() {
  // const validationSchema = Yup.object().shape({
  //   title: Yup.string().required("Le titre est requis"),
  //   description: Yup.string().required("La description est requise"),
  //   address: Yup.string().required("L'adresse est requise"),
  // });
  // const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  // const { register, reset, formState } = useForm(formOptions);
  // const { errors } = formState;

const title = useRef();
const description = useRef();
const address = useRef();

  
  async function handleSubmit(e) {
    e.preventDefault();
    const newPlace = {
     title: title.current.value,
     description: description.current.value,
     address: address.current.value
    }
    await console.log(title);
    try {
      const response = await fetch("http://localhost:5000/api/places", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newPlace
        })
        
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      // setIsLoading(false);
    } 
    catch (err) {
      // setIsLoading(false);
      // setError(err.message || "Une erreur s'est produite. Veuillez réessayer.");
    }
  }

  return (
    <>
      <div>NewPlace</div>
      <form className=" my-10 p-5 bg-gray-200" onSubmit={handleSubmit}>
        {/* {isLoading && <LoadingSpinner />} */}

        <div className="mb-3 pt-4">
          <label>Titre</label>
          <input
          ref={title}
            name="title"
            htmlFor='title'
            type="text"
            // {...register("title")}
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
          {/* <div className="">{errors.title?.message}</div> */}
        </div>

        <div className="mb-3 pt-4">
          <label>Description</label>
          <textarea
          ref={description}
            name="description"
            htmlFor="description"
            type="text"
            // {...register("description")}
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
          {/* <div className="">{errors.description?.message}</div> */}
        </div>

        <div className="mb-3 pt-4">
          <label>Adresse</label>
          <input
          ref={address}
            name="address"
            htmlFor="address"
            type="text"
            // {...register("address")}
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
          {/* <div className="">{errors.address?.message}</div> */}
        </div>

        <button type="submit" className="bg-gray-500 text-white">
          Ajouter un lieu
        </button>
      </form>
    </>
  );
}
