import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [get, SetGet] = useState([])
  useEffect(() => { getDataApi() }, [])
  const getDataApi = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        console.log(res.data.products)
        SetGet([...res.data.products])
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="App">
      <NavBar />
      {/* <div className='w-full h-96'></div>
      <div className='w-full h-96'></div> */}
      <div className="flex flex-wrap">
        {get.map((x, i) => (

          <div className=" w-[300px] rounded shadow-lg border m-3 p-3" key={i}>
            <img src={x.images} alt="Description of the image" />
            <p className="text-xl font-bold"> {x.title}</p>
            <p className="">{x.description}</p>
            {/* <p>userId: {x.userId}</p> */}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
