import React, { useEffect, useState } from "react";
import AccordionMenu from "./components/accordion/AccordionMenu";
import Loader from "./components/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [fields, setFields] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://mohsenfathipour.com/api/categories.json")
      .then((response) => response.json())
      .then((response) => setFields(response))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <p>{Error}</p>;
  }

  if (isLoading) {
    <Loader />;
  }

  if (fields.length === 0) {
    return <div>No fields found.</div>;
  }

  return (
    <div className="col-md-8 offset-md-2 d-flex align-items-center min-vh-100">
      <AccordionMenu fields={fields} />
    </div>
  );
}
