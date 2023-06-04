import { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function OrderFilter() {
  const [orderFilter, setOrderFilter] = useState({
    order: {
      column: 'population',
      sort: 'ASC',
    },
  });
  const { planets, filteredPlanets, filterPlanets } = useContext(PlanetsContext);
  const [data, setData] = useState();

  function handleChange({ target }) {
    setOrderFilter({
      order: {
        ...orderFilter.order,
        [target.name]: target.value,
      },
    });
  }

  useEffect(() => {
    setData(filteredPlanets || planets);
  }, [filteredPlanets, planets]);

  function handleClick() {
    const { order: { column, sort } } = orderFilter;
    const semUnknown = data.filter((e) => e[column] !== 'unknown');
    const unknown = data.filter((e) => e[column] === 'unknown');
    const teste1 = semUnknown.sort((a, b) => (sort === 'ASC'
      ? Number(a[column]) - Number(b[column])
      : Number(b[column]) - Number(a[column])));
    console.log([...teste1, ...unknown]);
    filterPlanets([...teste1, ...unknown]);
  }

  return (
    <div>
      <form>
        <select
          name="column"
          data-testid="column-sort"
          onChange={ handleChange }
          // value={ orderFilter.order.column }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          name="sort"
          value="ASC"
          onChange={ handleChange }
        />
        ASC
        <input
          type="radio"
          name="sort"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ handleChange }
        />
        DESC
      </form>
      <button
        onClick={ handleClick }
        data-testid="column-sort-button"
        type="button"
      >
        Ordernar
      </button>
    </div>
  );
}

export default OrderFilter;
