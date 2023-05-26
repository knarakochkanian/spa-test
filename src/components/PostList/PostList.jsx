import {useEffect} from "react";
import './PostList.css'
import Comment from "../Comments/Comments";
import {connect} from 'react-redux'
import {getPosts} from '../../store/actions/postsActions'

const PostList = ({getPosts,data})=> {

    useEffect(() => {
        console.log(getPosts(), "////////////////////////////////")
    }, []);

    console.log(data.posts,'data')
    return(
        <section>
            <div>
                Users
                {data.posts.map((item, i) => {
                    return (
                        <div key={i}>
                            <button className='post-list__button'>
                                <img className='post-list__avatar' src='https://avatars.mds.yandex.net/i?id=fea2a83037a3cef3f5e6c66584f387a169d71df0-6926872-images-thumbs&n=13' alt='avatarka'/>
                            </button>
                            <h4>{item.title}</h4>
                            <p>{item.body}</p>
                            <Comment/>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

const mapStateToProps  = (state) => ({data:state.posts})

export default connect(mapStateToProps, {getPosts})(PostList)