import { useState } from 'react';
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

function App() {
  let [selectedTopics, setTopics] = useState(null);
  function handleSelect(onSelectedTopics) {
    setTopics(onSelectedTopics);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopics) {
    tabContent = (<div id='tab-content'>
    <h3>{EXAMPLES[selectedTopics].title}</h3>
    <p>{EXAMPLES[selectedTopics].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopics].code}
      </code>
    </pre>
  </div>);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (<CoreConcept key={item.title} {...item}></CoreConcept>))}
          </ul>
        </section>
        <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isActive={selectedTopics === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isActive={selectedTopics === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isActive={selectedTopics === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isActive={selectedTopics === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
