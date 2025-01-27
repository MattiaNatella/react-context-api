import { useGlobalContext } from "../context/GlobalContext"
import PostCard from "./PostCard"

const PostsLists = () => {

    //recupero la lista dei post destrutturando la proprietà postsList dall'oggetto useGlobalContext
    const { postsList } = useGlobalContext()

    return (
        <div className="container">
            <div className="row">
                <PostCard />
            </div>
        </div>

    )
}

export default PostsLists