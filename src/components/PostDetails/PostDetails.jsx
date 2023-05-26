import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPosts} from '../../store/actions/postsActions'

class postDetails extends Component {
    componentDidMount(){
        this.props.getPosts()

    }
    render() {
        const {posts} = this.props.posts
        console.log(posts)

        return (
            <div>
                {posts.map(u =>
                    <React.Fragment key={u.id}>
                        <h6 >{u.name}</h6>
                    </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({posts:state.posts})

export default connect(mapStateToProps, {getPosts})(postDetails)