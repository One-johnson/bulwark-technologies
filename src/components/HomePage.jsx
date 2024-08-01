import React from 'react';
import { Button } from 'primereact/button';

const HomePage = () => {

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold">Welcome to Bulwark Technologies</h1>
      <p>Your trusted IT partner.</p>
      <Button 
        label="Learn More" 
        icon="pi pi-info" 
        className="p-button-primary mt-4 w-full sm:w-auto" 
 
      />
    </div>
  );
};

export default HomePage;
