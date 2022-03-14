import React from 'react';
import './App.css';
import people from './mock-data/people';

import widgets from './mock-data/widgets';
import searchByQuery from './utils/searchByQuery';

function App() {
  const query = ''
  return (
    <div className="App">
      <div>
        {widgets.filter((widget) => searchByQuery(widget, ["title", "description"], query, false)).map(widget => {
          return (<div> 
            <h3>{widget.title}</h3>
          </div>)
        })}
      </div>
      <div>
      {people.filter((person) => searchByQuery(person, ["firstName", "lastName"], query, false)).map(person => {
          return (<div>
            <h3>{person.firstName} {person.lastName}</h3>
          </div>)
        })}
      </div>
      <h2>test</h2>
    </div>
  );
}

export default App;
