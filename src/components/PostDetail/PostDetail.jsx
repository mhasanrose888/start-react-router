import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id, title, useId, body} = post;
    const navigate = useNavigate();

    const handlGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>Post Details here: {id}</h3>
            <h4>{title}</h4>
            <h5>{useId}</h5>
            <h6>{body}</h6>
            <button onClick={handlGoBack}>Go Back</button>

        </div>
    );
};

export default PostDetail;