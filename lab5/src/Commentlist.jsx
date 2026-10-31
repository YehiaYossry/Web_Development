import Comment from "./Comment"

function CommentList(props){
const commentList = props.commentlist;
const commentsComponents = commentList.map(comment=>{
    return(
    <Comment text={comment.text} name={comment.sender} likes={comment.likes}></Comment>
    )
})
return (
    <div>
      {commentsComponents}
    </div>
  );
}

export default CommentList