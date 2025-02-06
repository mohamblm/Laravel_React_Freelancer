import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import axiosClient from '../../api/axios';
import Highlighter from 'react-highlight-words';

export default function SearchBar() {
  const [suggestions, setSuggestions] = useState(null); // raw suggestions from the API

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Navigate when the user submits the search form (if needed)
  const handleSubmit = () => {
    setSuggestions(null)
    if(query){
      navigate(`/services?query=${query}`);
    }
  };

  // Navigate when a service is clicked
  const handleServiceClick = (selectedItem) => {
    setSuggestions(null)
    if (selectedItem) {
      navigate(`/services?service=${selectedItem}`);
    }
  };
  // Navigate when a semiCategory is clicked
  const handlesemiCategoryClick = (selectedItem) => {
    setSuggestions(null)
    if (selectedItem) {
      navigate(`/services?semicategoryId=${selectedItem}`);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Debounced API call: only fetch suggestions if the query length is >= 5 and after a 300ms delay
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.length >= 5) {
        console.log('mchat')
        axiosClient
          .get(`search/fetchSuggestions?query=${query}`)
          .then((res) => {
            console.log(res)
            setSuggestions(res.data)})
          .catch((err) => console.error(err));
      } else {
        // Clear suggestions if query is too short
        setSuggestions(null);

      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);



  return (
    <div style={{ position: 'relative', maxWidth: '600px' }}>
      <div className="d-flex position-relative w-100">
        <input
        id='searchinput'
          type="text"
          value={query}
          placeholder="Search for any service..."
          className="form-control pe-5 m-0"
          aria-label="Search for any service"
          onChange={handleChange}
        />
        <Search
          className="position-absolute text-secondary"
          style={{ cursor: 'pointer', right: 10, top: 10 }}
          size={20}
          onClick={handleSubmit}
        />
      </div>

      {query && (suggestions?.services.length > 0 || suggestions?.semiCategories.length > 0) && (
        <div
          className="position-absolute p-1 w-100"
          style={{
            background: '#f6f6f6',
            borderRadius: '10px',
            border: '1px solid blue',
            zIndex: 1000,
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {suggestions?.services.map((item, index) => (
              <li
                key={index}
                onClick={() => handleServiceClick(item.title)}
                style={{ marginBottom: 5, cursor: 'pointer' }}
              >
                <Highlighter
                  highlightClassName="highlight"
                  searchWords={[query]}
                  autoEscape={true}
                  textToHighlight={item.title}
                />
              </li>

            ))}
            {suggestions?.semiCategories.map((item, index) => (
              <li
                key={index}
                onClick={() => handlesemiCategoryClick(item.id)}
                style={{ marginBottom: 5, cursor: 'pointer' }}
              >
                <Highlighter
                  highlightClassName="highlight"
                  searchWords={[query]}
                  autoEscape={true}
                  textToHighlight={item.name}
                />
              </li>

            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
