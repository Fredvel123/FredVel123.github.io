import React, { Fragment, useState, useEffect } from "react";

function DogApi() {
  const [Animal, setAnimal] = useState([]);
  // get the Api.
  const getApiDogs = async () => {
    const url = await fetch('https://dog.ceo/api/breeds/image/random');
    const dogs = await url.json();
    setAnimal(dogs);
  }
  useEffect(()=> {
    getApiDogs();
  }, [])
  return (
    <Fragment>
      <div className="principal-card">
        <div className="card">
          <h2>Find a Random Dog</h2>
          {<img src={Animal.message} alt="some value" />}
          <div className="next">
            <button
              onClick={() => getApiDogs()}
              type="button"
              value="actualizar"
            >
              <h3>Next</h3>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default DogApi;
