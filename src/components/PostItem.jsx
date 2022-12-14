import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MyButton } from '../components/UI/button/MyButton'

const PostItem = (props) => {
    const navigate = useNavigate();
    console.log(navigate);
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.id}, {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>

            <div className="post__btns">
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>open</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
            </div>

        </div >
    );
}

export default PostItem;
