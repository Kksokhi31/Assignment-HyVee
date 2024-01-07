"use client";
import { useState } from 'react';
import axios from 'axios';
import styles from '../app/page.module.css';
import Form from '../app/components/page';
import Result from './components/display/display';

const Home = () => {
  const [result, setResult] = useState({});

  const fetchData = async (selectedAnimal: string) => {
    try {
      let response;
      if (selectedAnimal === 'cat') {
        response = await axios.get('https://catfact.ninja/fact');
      } else {
        response = await axios.get('https://dog.ceo/api/breeds/image/random');
        console.log(response);
      }
      if (response && response.data) {
        setResult(response.data);
      } else {
        console.error('Invalid response data:', response);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className = {styles.container}>
      <h1 className = {styles.p}>Animal Facts and Images</h1>
      <Form onSubmit={fetchData} />
      <Result data={result} />
    </div>
  );
};

export default Home;
