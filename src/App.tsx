import * as React from "react";
import "./App.css";
import SearchFilter from "./components/SearchFilter";
import people from "./mock-data/people";

import widgets from "./mock-data/widgets";
import genericSort from "./utils/genericSort";
import searchByQuery from "./utils/searchByQuery";

function App() {
  const [query, setSearchQuery] = React.useState("");
  return (
    <div className="App">
      <SearchFilter setSearchQuery={setSearchQuery} />
      <div>
        {widgets
          .filter((widget) =>
            searchByQuery(widget, ["title", "description"], query, false)
          )
          .sort((a, b) => genericSort(a, b, "title"))
          .map((widget) => {
            return (
              <div>
                <h3>{widget.title}</h3>
              </div>
            );
          })}
      </div>
      <div>
        {people
          .filter((person) =>
            searchByQuery(person, ["firstName", "lastName"], query, false)
          )
          .map((person) => {
            return (
              <div>
                <h3>
                  {person.firstName} {person.lastName}
                </h3>
              </div>
            );
          })}
      </div>
      <h2>test</h2>
    </div>
  );
}

export default App;
