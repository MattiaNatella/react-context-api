import { useGlobalContext } from "../context/GlobalContext"
import PostCard from "./PostCard"

const PostsLists = () => {

    //recupero la lista dei post destrutturando la proprietà postsList dall'oggetto useGlobalContext
    const { postsList } = useGlobalContext()
    console.log(postsList)

    return (
        <div className="container">
            <div className="row">
                {postsList.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}

            </div>
        </div>

    )
}

export default PostsLists