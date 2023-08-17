'use client'
import React, { useState, useEffect } from 'react';

export default function relatos() {
    // const urlBase = "https://cdn.contentful.com"
    // const response = fetch(urlBase + "/spaces/6dn5livowt6n/environments/master/entries/5ok19jriGKKAWAdvg4GB3?access_token=XKABukt99QSy7MvNFmfbZ0WZUSK_wHT1bTILOIAXrig")
    // .then(response => response.json)
    // .then(data => console.log(data, "7777"))

    // console.log(response, "222222")

    // si uso fetch o lo de abajo y recupero post, fetch ya está bien en realidad y despues 
    // le meto un map o algo así y los voy mostrando segun alguna propiedad que me convenga o los meto
    // en array y alli hago el sort (o object)
    
    const contentful = require('contentful')

    const client = contentful.createClient({
    space: '6dn5livowt6n',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'XKABukt99QSy7MvNFmfbZ0WZUSK_wHT1bTILOIAXrig'
    })

    // client.getEntry('5ok19jriGKKAWAdvg4GB3')
    // .then((entry) => console.log("!",entry.metadata.tags, "2"))
    // .catch(console.error)

  const [desiredValue, setDesiredValue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL of the API endpoint
    client.getEntries()
    .then((response) => {
        console.log(data.items[0].fields.firstTest.content[0].content[0].value,"33333333333333333333")})
    .catch(console.error)

     
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="bg-white">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Desired value: {desiredValue}</p>
      )}
    </div>
  );
}