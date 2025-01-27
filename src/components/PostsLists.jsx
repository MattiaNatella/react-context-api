import { useGlobalContext } from "../context/GlobalContext"

const PostsLists = () => {

    const { postsList } = useGlobalContext()

    return (
        <ul className="list-group">
            {postsList.map(post => (
                <li key={post.id} className="list-group-item">{post.title}</li>
            ))}
        </ul>
    )
}

export default PostsLists