import { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState(""); // search value
  const [data, setData] = useState([]); // API data
  
  const onChange = async (e) => {
    setValue(e.target.value); 
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const responseData = await response.json(); 
    setData(responseData); 
  }

  return (
    <div className="App">
      <div className="search-box">
        <div className="row">
          <input type="text" onChange={onChange} value={value} placeholder="Search" />
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="result-box">
          {
            value && 
            data.filter(d => d.title.startsWith(value) && d.title !== value)
              .slice(0, 5)
              .map(item => <ul>
                <li key={item.id} onClick={(e) => setValue(item.title)}>
                  {item.title}
                </li>
                </ul>
              )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
