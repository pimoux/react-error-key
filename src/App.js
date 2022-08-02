import { useState } from "react";
import Filter from "./components/Filter";
import filters from "./data/filters";
import "./assets/style.css";

function App() {
  const [filterList, setFilterList] = useState(filters);

  const removeFilter = (filter) => {
    const newFilters = [...filterList];
    const filterIndex = newFilters.findIndex((f) => f.label === filter.label);
    newFilters[filterIndex].selected = false;
    setFilterList(newFilters);
  };

  return (
    <div>
      {filterList
        .filter((filter) => filter.selected)
        .map((filter, i) => (
          <Filter key={i} filter={filter} onRemoveFilter={removeFilter} />
        ))}
    </div>
  );
}

export default App;
