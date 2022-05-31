import { useState, useRef, useContext } from "react";
import React from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth-context";



export default function SignIn() {
  const [error, setError] = useState();
  const formRef = useRef([]);
  const router = useRouter();
  const auth = useContext(AuthContext);




  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://placesdiscover.herokuapp.com/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputs.current[0].value,
          email: inputs.current[1].value,
          password: inputs.current[2].value,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      auth.login(responseData.userId, responseData.token);
      router.push("/");
    } catch (err) {
      setError(err.message || "Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-2 text-center text-3xl font-extrabold text-white">
              S'inscrire
            </h2>
          </div>
          <form
            className="mt-2 space-y-6"
            onSubmit={authSubmitHandler}
            ref={formRef}
          >
            <div className="rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Nom d'utilisateur
                </label>
                <input
                  ref={addInputs}
                  id="name"
                  name="name"
                  type="text"
                  required
                  className=" relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Nom d'utilisateur"
                />
              </div>
            </div>

            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  ref={addInputs}
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Mot de passe
                </label>
                <input
                  ref={addInputs}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Mot de passe"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
