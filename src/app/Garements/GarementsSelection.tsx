import React, { useState } from 'react';
import './styles.css';
// import { Spotlight } from "../../Components/ui/Spotlight";
import { WavyBackground } from "../../Components/ui/wavy-background";

interface Garment {
  id: number;
  name: string;
  image: string;
}

function GarmentsSelection() {
  const [selectedGarment, setSelectedGarment] = useState<Garment | null>(null);
  const [cart, setCart] = useState<Garment[]>([]);
  const [cartResponse, setCartResponse] = useState<string>('');

  const garments: Garment[] = [
    { id: 1, name: 'T-Shirt', image: 'data/tshirt.jpg' },
    { id: 2, name: 'Jeans', image: '/data/jeans.jpg' },
    { id: 3, name: 'Dress', image: '/data/dress.jpg' },
    { id: 4, name: 'Jacket', image: '/data/jacket.jpg' }
  ];

  const handleGarmentClick = (garment: Garment) => {
    setSelectedGarment(garment);
  };

  const handleAddToCart = () => {
    if (selectedGarment) {
      setCart([...cart, selectedGarment]);
      setSelectedGarment(null);
    }
  };

  const handleSaveCart = async (e: any) => {
    e.preventDefault();
    // Submit cart data to the database (you can replace this with your API call)
    const res = await fetch("Garements/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({cart})
    });
  
    const { msg } = await res.json();
    console.log(msg);
  };  

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-indigo-400 flex flex-col justify-center items-center">
      <WavyBackground className="min-h-screen items-center p-40" backgroundFill="black">
      <h2 className="text-3xl font-semibold text-white mb-6">Choose Your Garment</h2>
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <div className="grid grid-cols-4 gap-4">
        {garments.map((garment) => (
          <img
            key={garment.id}
            src={garment.image}
            alt={garment.name}
            className={selectedGarment === garment ? "border-4 border-indigo-600 rounded-md cursor-pointer garment-img" : "rounded-md cursor-pointer garment-img"}
            onClick={() => handleGarmentClick(garment)}
            style={{ width: '200px', height: '200px' }}
          />
        ))}
      </div>
      {selectedGarment && (
        <div className="text-center mt-6">
          <h3 className="text-lg font-semibold text-white mb-2">Selected Garment: {selectedGarment.name}</h3>
          <img src={selectedGarment.image} alt={selectedGarment.name} className="mx-auto rounded-md garment-img" style={{ width: '150px', height: '150px' }} />
          <button onClick={handleAddToCart} className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md focus:outline-none focus:bg-indigo-700 hover:bg-indigo-700">Add to Cart</button>
        </div>
      )}
      <div className="text-center mt-6">
        <button onClick={handleSaveCart} className="py-2 px-4 bg-indigo-600 text-white rounded-md focus:outline-none focus:bg-indigo-700 hover:bg-indigo-700">Save Cart</button>
        {cartResponse && <p className="text-white mt-2">{cartResponse}</p>}
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-white mb-2">Cart:</h3>
        {cart.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <img src={item.image} alt={item.name} className="w-8 h-8 rounded-md mr-2 garment-img" style={{ width: '150px', height: '150px' }} />
            <span className="text-white">{item.name}</span>
          </div>
        ))}
      </div>
      </WavyBackground>
    </div>
  );
}

export default GarmentsSelection;
