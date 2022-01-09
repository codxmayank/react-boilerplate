import React from 'react';

/**
 * App: main component of project
 * @returns
 */
const App = () => {
  const displayLine = 'Hello';
  const displayName = 'World';

  return (
    <div>
      <h1 className="helloWorld">{`${displayLine} ${displayName}`}</h1>
    </div>
  );
};

export default App;
