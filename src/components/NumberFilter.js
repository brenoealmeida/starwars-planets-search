import { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumberFilter() {
  const { planets, filteredPlanets, filterPlanets } = useContext(PlanetsContext);
  const [filterValues, setFilterValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [existingFilters, setExistingFilters] = useState();
  const [columns, setColumns] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  function filterD(data, values) {
    const filteredData = data ? data.filter((planet) => {
      if (values.comparison === 'maior que') {
        return Number(planet[values.column]) > Number(values.value);
      }
      if (values.comparison === 'menor que') {
        return Number(planet[values.column]) < Number(values.value);
      }
      return Number(planet[values.column]) === Number(values.value);
    }) : null;
    filterPlanets(filteredData);
  }

  function handleClick() {
    const data = filteredPlanets || planets;
    filterD(data, filterValues);
    setExistingFilters(existingFilters
      ? [...existingFilters, filterValues] : [filterValues]);
    setColumns(columns.filter((e) => e !== filterValues.column));
  }

  function handleChange({ target }) {
    const { value, name } = target;
    setFilterValues({
      ...filterValues,
      [name]: value,
    });
  }

  useEffect(() => {
    setFilterValues({
      column: columns[0],
      comparison: 'maior que',
      value: 0,
    });
  }, [columns]);

  useEffect(() => {
    if (existingFilters && existingFilters.length > 0) {
      existingFilters.forEach((element, index) => {
        const data = index === 0 ? planets : filteredPlanets;
        filterD(data, element);
      });
    } else {
      filterPlanets(planets);
    }
  }, [existingFilters]);

  function removeFilter({ target }) {
    setExistingFilters(existingFilters.filter((e, i) => i !== Number(target.id)));
    setColumns([...columns, target.name]);
  }

  function removeAllFilters() {
    setExistingFilters([]);
    setColumns(['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  }

  return (
    <>
      <form>
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handleChange }
          value={ filterValues.column }
        >
          {
            columns.map((e, index) => <option key={ index } value={ e }>{ e }</option>)
          }
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
          value={ filterValues.comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          placeholder="Value here"
          data-testid="value-filter"
          name="value"
          value={ filterValues.value }
          onChange={ handleChange }
        />
        <button
          type="button"
          onClick={ handleClick }
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </form>
      {
        existingFilters ? existingFilters.map(({ column, comparison, value }, index) => (
          <div key={ index } data-testid="filter">
            <span>{`${column} ${comparison}  ${value}`}</span>
            <button
              type="button"
              id={ index }
              name={ column }
              onClick={ removeFilter }
            >
              X
            </button>
          </div>)) : null
      }
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Remover filtros
      </button>
    </>
  );
}

export default NumberFilter;
