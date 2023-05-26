import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import './Comments.css';
import {connect} from "react-redux";
import {getComment} from "../../store/actions/commentAction";

function Comment({getComment, data}) {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(getComment(), "comments")
    }, []);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                bs-btn-color='secondary'
                aria-expanded={open}
            >
                Comment
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    { data.comment.map((com)=> {
                        return <div key={com.id} className='comments-wrapper'>
                            <p>{com.email}</p>
                            <p>{com.body}</p>
                            </div>
                    })}
                </div>
            </Collapse>
        </>
    );
}

const mapStateToProps  = (state) => ({data:state.comment})

export default connect(mapStateToProps, {getComment})(Comment)