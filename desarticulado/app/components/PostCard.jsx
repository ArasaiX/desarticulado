
export default function PostCard( { post, key}) {
    console.log(post, key)
    return (
        <div>
            <h1 className='text-white'>{key}</h1>
            <article>{post}</article>
        </div>
    )
}
