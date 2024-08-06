import React, { useState } from 'react';
import * as stores from "../stores";
import { Container } from "./style";

export default function LandingPage() {
    // State to manage the input value
  const [inputValue, setInputValue] = useState('');
  const { name, img, description, generateWaifu } = stores.useWaifuStore();
  const [isLoading, setIsLoading] = useState(false);
  const headerText = name ?? 'Waifu Matcher';
  const subheaderText = description ??'Find out your Destined Waifu. based on your Name' ;
    const headerImg = img;

  // Function to handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e: any) => {
    setIsLoading(true)

    setTimeout(() => {
        console.log('Submitted value:', inputValue);
        generateWaifu(inputValue)
        setIsLoading(false)
      }, 1000); // Example async operation duration
    // You can add further logic here, such as sending the form data to a server
  };


  return (
    <>
        <Container>
          aa
        </Container>
    </>
  )
}
