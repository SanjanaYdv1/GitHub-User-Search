import React,{useState} from 'react'

function SearchBar({onSearch}) {
  const [input,setInput] = useState("");

  const handleSearch = () =>{
    if (input.trim()){
      onSearch(input);
    }
  }
const handleKeyPress = (e) =>{
  if (e.key === 'Enter'){
    handleSearch();
    }
}

  return (
    <div className='search-bar'>
      <input
      type='text' placeholder='Search GitHub username...'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
