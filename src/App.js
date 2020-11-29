import React from 'react';

import './App.css';

//components
import Row from './Components/Row';
import Banner from './Components/Banner';
import request from './requests';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <Row
        title='NETFLIX ORIGINAL'
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending now' fetchUrl={request.fetchTreanding} />
      <Row title='Action movies' fetchUrl={request.fetchActionMovies} />
      <Row title='Comedy movies' fetchUrl={request.fetchComedyMovies} />
      <Row title='Horror movies' fetchUrl={request.fetchHorrorMovies} />
      <Row title='Romantic movies' fetchUrl={request.fetchRomanticMovies} />
      <Row title='Documentries' fetchUrl={request.fetchDocumentries} />
    </div>
  );
}

export default App;
