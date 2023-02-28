import { useSelector, useDispatch } from "react-redux";
import { asyncRemoveComment } from "../store/Reducer";

const Blog = () => {
    const comments = useSelector(state => state.comments);
    const dispatch = useDispatch();

    return (
        <div>
            {comments.length > 0 ?
                <div>
                    {comments.map(comment => {
                        return <>
                                    <div>
                                        <div style={{marginTop:15}}>{comment.name}</div>
                                        <div>{comment.email}</div>
                                        <div>{comment.body}</div>
                                    </div>
                                    <button onClick={() => dispatch(asyncRemoveComment(comment.id))}>Remove comment</button>
                                </>
                    })}
                </div> :
                <div>No comments</div>}
        </div>
        
    );
};

export default Blog;