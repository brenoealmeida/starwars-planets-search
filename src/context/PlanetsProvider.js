import PropTypes from 'prop-types';
import React from 'react';
import useFetch from '../hooks/useFetch';
import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const { planets, error, filteredPlanets, filterPlanets } = useFetch('https://swapi.dev/api/planets');
  if (error) console.error(error.message);
  return (
    <PlanetsContext.Provider value={ { planets, filteredPlanets, filterPlanets } }>
      <div>
        { children }
      </div>
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
