import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NameFilter() {
  const { planets, filterPlanets } = useContext(PlanetsContext);

  function handleChange(e) {
    const filteredPlanets = planets
      .filter(({ name }) => name.includes(e.target.value));
    filterPlanets(filteredPlanets);
  }

  return (
    <form>
      <label htmlFor="name-input">
        <input
          type="text"
          placeholder="Try texting"
          data-testid="name-filter"
          id="name-input"
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}

export default NameFilter;
