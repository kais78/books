import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ShowBook() {
    let { id } = useParams();
  const [film, setFilm] = useState("");

  const getFilm = async (id) => {
    let res = await fetch("/rest/films/" + id);
    res = await res.json();
    setFilm(res);
  };

  useEffect(() => {
    getFilm(id);
  }, []);

  return (
    <div>
      <h3>THis is One Film Page</h3>
      {film.film_name}
    </div>
    )
}
