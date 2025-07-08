import React, { useState } from 'react'
import Header from './components/Header'
import recepies from './DB';


function App() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Header/>  
      <RecepiesPage/>
      <footer className="fixed bottom-0 w-full bg-gray-900 text-white text-center py-6">
       <div>
        <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2025 Tasty Recepies. All rights reserved. 

        </p>
        </div>
       </div>
      </footer>
    </div>
  );
}

export default App; 

//recepies
const RecepiesPage = () => {
  const [recepiesList, setRecepiesList] =  useState(recepies);
  return (
    <main className="pt-20 px-4 pb-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recepiesList.map((recepie, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                <img 
                  src={recepie.image} 
                  alt={recepie.title} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{recepie.title}</h3>
                <p className="text-green-600 font-semibold text-xl">${recepie.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

