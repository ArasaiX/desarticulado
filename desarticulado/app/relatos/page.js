
export default async function relatos() {
    // const urlBase = "https://cdn.contentful.com"
    // const response = fetch(urlBase + "/spaces/6dn5livowt6n/environments/master/entries/5ok19jriGKKAWAdvg4GB3?access_token=XKABukt99QSy7MvNFmfbZ0WZUSK_wHT1bTILOIAXrig")
    // .then(response => response.json)
    // .then(data => console.log(data, "7777"))

    // console.log(response, "222222")

    // si uso fetch o lo de abajo y recupero post, fetch ya está bien en realidad y despues 
    // le meto un map o algo así y los voy mostrando segun alguna propiedad que me convenga o los meto
    // en array y alli hago el sort (o object)
    
  //   const contentful = require('contentful')

  //   const client = contentful.createClient({
  //   space: '6dn5livowt6n',
  //   environment: 'master', // defaults to 'master' if not set
  //   accessToken: 'XKABukt99QSy7MvNFmfbZ0WZUSK_wHT1bTILOIAXrig'
  //   })

  //   // client.getEntry('5ok19jriGKKAWAdvg4GB3')
  //   // .then((entry) => console.log("!",entry.metadata.tags, "2"))
  //   // .catch(console.error)

  // const [desiredValue, setDesiredValue] = useState(null);
  // const [error, setError] = useState(null);

  const contentful = require('contentful')

  const client = contentful.createClient({
    space: "6dn5livowt6n", //process.env.SPACE,
    environment: process.env.ENVIRONMENT, // defaults to 'master' if not set
    accessToken: "1eZD6Re_LcCw9SMeRQ5A6xBWb0e6Kh3ASfdJdJYW1kQ" //process.env.ACCES_TOKEN
  })

  const response = await client.getEntries({
    content_type: 'posts'
  })
  // console.log(response.items[0].fields)

  const title = response.items[0].fields.title

  // console.log("TITLE", title)

  const posts = response.items[0].fields.text.content
  
  let render = []

  Object.values(posts).map(post => {
    Object.values(post.content).map(content => {
      render.push(content.value)
      console.log(content.value)
    })
  })

  // console.log("posts", posts, "typeeeeeee", typeof(posts))

  // client.getEntries({
  //   content_type: 'posts'
  // })
  // .then((response) => console.log(response.items))
  // .catch(console.error)


  // useEffect(() => {
  //   // URL of the API endpoint
  //   client.getEntries()
  //   .then((response) => {
  //       console.log(data.items[0].fields.firstTest.content[0].content[0].value,"33333333333333333333")})
  //   .catch(console.error)

     
  // }, []); // Empty dependency array to run effect only once

  return (
    <div className="bg-white text-black">
     <h1 className="bg-white text-black">
     {title}
     </h1>
     <div>
      {render}
     </div>
    </div>
  );
}