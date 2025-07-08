import React from 'react'

const Header = () => {
  return (
    <header className= "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md fixed top-0 flex-0 w-full z-10">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center  ">
        <a href="/"className="text-2xl font-bold tracking-wide">
        Tasty Recipes

        </a>
        <nav>
            <ul className="flex space-x-6">
                {["Home","Recipes","About","Contact"].map((item) => (
                   <li className="cursor-pointer hover:text-orange-200 transition-colors duration-300" >
                     {item}
                   </li>
                ))}
                
            </ul>   
        </nav>
    </div>
  </header>
  );
}

export default Header;
