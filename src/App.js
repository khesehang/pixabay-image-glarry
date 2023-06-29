import { useEffect, useState } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo}`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  })
  
  return (
    <div className="container app">

    <ImageSearch searchText={(text) => setTerm(text)} />
    
    {!isLoading && images.length === 0 && <h1 style={{fontSize:"40px",
    textAlign:'center', margin: '0 auto', marginTop:"32px"
  }}>Loading...</h1>}

    {isLoading ? <h1  style={{fontSize:"50px",
    textAlign:'center', margin: '0 auto', marginTop:"32px"
  }}>Loading...</h1>:<div className='app-grid'>
    {images.map(image => (
    <ImageCard key={image.id} image={image} />
    ))}
    </div>}
      
    </div>
  );
}

export default App;
