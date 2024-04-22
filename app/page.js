import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'
import {useState, useEffect} from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect

  const [dogNum, setDogNum] = useState(3)
  const [imgDog, setImgdog] = useState([])
//fetching data
  useEffect(() => {
    fetchData();
  }, [dogNum]);

    const fetchData = async() => {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
      const data = await response.json();
      setImgdog(data.message);
    }
  function handleNumDogs(event){
    setDogNum(event.target.value)
  }
   return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      {/* This page should receive the images array */}
      <Form 
      numOfDogs={dogNum} 
      onChangeNums={handleNumDogs}
      
      />
      <DogList dogImage={imgDog} />
    </div>
  );
}

