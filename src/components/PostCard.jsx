import { useGlobalContext } from "../context/GlobalContext"
const PostCard = () => {
    const { postsList } = useGlobalContext()
    return (
        <div className="col-4">
            <div className="card">
                <img src={postsList?.image} className="card-img-top" alt={postsList?.title} />
                <div className="card-body">
                    <h5 className="card-title">{postsList?.title}</h5>
                    <p className="card-text">{postsList?.content}</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard