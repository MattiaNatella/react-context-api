
const PostCard = ({ post }) => {

    return (
        <div className="col-4 p-2">
            <div className="card">
                <img src={post?.image} className="card-img-top" alt={post?.title} />
                <div className="card-body">
                    <h5 className="card-title">{post?.title}</h5>
                    <p className="card-text">{post?.content}</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard