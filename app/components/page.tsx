"use client";
import { useState } from 'react';
import styles from './page.module.css';


interface FormProps {
  onSubmit: (selectedAnimal: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [selectedAnimal, setSelectedAnimal] = useState('cat');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(selectedAnimal);
  };

  return (
    <form className = {styles.form} onSubmit={handleSubmit}>
      <label className = {styles.label}>
        Select an animal: <br></br>
        <select className = {styles.select} value={selectedAnimal} onChange={(e) => setSelectedAnimal(e.target.value)}>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>
      </label>
      <button className = {styles.button} type="submit">Get Fact or Image</button>
    </form>
  );
};

export default Form;
