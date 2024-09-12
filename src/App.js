import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100">
      <header className="flex justify-between bg-black p-4 shadow-md">
        <h1 className="text-white text-3xl font-bold">SenaiNews</h1>
        <nav className="flex gap-8">
          <a className="text-white text-lg hover:text-red-700 transition duration-300" href="#">Home</a>
          <a className="text-white text-lg hover:text-red-700 transition duration-300" href="#">Sobre</a>
          <a className="text-white text-lg hover:text-red-700 transition duration-300" href="#">Contato</a>
        </nav>
      </header>

      <main className="mx-4 flex-1">
        <h1 className="mt-8 text-2xl font-black text-slate-800">Principais Notícias</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://s1.static.brasilescola.uol.com.br/be/2023/12/logotipo-do-palmeiras.png" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-slate-950">porcos reis</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WYQJG5uREtiqoh8DgMgKnBgYRAcqisNRHg&s" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">porcos reis</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>


          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://i.pinimg.com/736x/1a/c9/78/1ac97896eb21d9e603bbbcd9d19de028.jpg" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-slate-950">porcos reis</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8Z4U0iAb78nSAvSO0MzWFZGHKfQvOcWWZw&s" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-slate-950">porcos reis</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTrARH9Ss8WRObS3Pjzfo40oL8cv7e8mnrw&s" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">porcos reis</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>


          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0ij5V27uSDS7HLpsScJfKt60SorALTfCsw&s" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">porcos reis</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-black text-white text-center p-4 mt-10">
        <h4 className="text-lg">Todos os direitos reservados - 2024</h4>
      </footer>
    </div>

  );
}

export default App;

