import { Layout } from "../components/Layout"
import PostCard from "../components/PostCard"

export default async function relatos() {

    console.log("3333333333")

    const { data } = await fetch("https://api-eu-west-2.hygraph.com/v2/cljtttz1c12hv01uc8rnpf9wp/master", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${process.env.GRAPH_CMS_API_KEY}`
        },
        body: JSON.stringify({
            query: `
        query getPosts {
            posts {
            edges {
                node {
                title
                excerpt
                slug
                date
                }
            }
            }
        }
        `,
    }),
    next: { revalidate: 10 },
    }).then((res) => res.json());


    let blogPosts = data?.posts?.edges;

    console.log("Data", data)
    return (
        <div>
        {blogPosts?.map((post) => (
            <PostCard post={post.node} key={post.title} />
            
        ))}
        </div>
    );
}


//HAy que crear un layout no como compoenente si no como layout.js, buscar info, a ver si eso es el eror
// parano mostrar el contenido del fetch