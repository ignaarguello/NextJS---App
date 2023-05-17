import '../../styles/styles.css'

const fetchPost = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
}

export default async function PostsPage() {

    const posts = await fetchPost()

    return (
        <div>
            {posts.slice(0,10).map(post => (
                <section key={post.id} id="container-posts">
                    <h2 className='text-blue-700'>{post.title}</h2>
                    <p>{post.body}</p>
                </section>
            ))}
        </div>
    )
}