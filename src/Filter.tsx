import React, { useEffect, useState } from 'react'
import FilterItem from './components/FilterItem'
import { getFilters } from './API'

const Filter: React.FC = () => {
  const [filters, setFilters] = useState<IFilter[]>([])

  console.log("test");

  useEffect(() => {
    fetchFilters()
  }, [])

  const fetchFilters = (): void => {
    getFilters()
    .then(({ data: { filters } }: IFilter[] | any) => setFilters(filters))
    .catch((err: Error) => console.log(err))
  }

  return (
    <main className='App'>
      <h1>My Filters</h1>
      {filters.map((filter: IFilter) => (
        <FilterItem
          key={filter._id}
          filter={filter}
        />
      ))}
    </main>
  )
}

export default Filter
