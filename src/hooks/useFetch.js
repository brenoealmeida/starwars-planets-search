import { useEffect, useState } from 'react';

function useFetch(url) {
  const [planets, setPlanets] = useState();
  const [error, setError] = useState();
  const [filteredPlanets, setFilteredPlanets] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ results }) => {
        results.forEach((planet) => {
          delete planet.residents;
        });
        setPlanets(results);
      })
      .catch(setError);
  }, [url]);

  function filterPlanets(e) {
    setFilteredPlanets(e);
  }

  return { planets, error, filteredPlanets, filterPlanets };
}

export default useFetch;
