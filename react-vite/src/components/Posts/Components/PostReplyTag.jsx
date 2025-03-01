
function PostReplyTag({parentPost}){
    let postName = ""
    if(parentPost.Topic_Profile) postName = parentPost.Topic_Profile.name
    else postName = parentPost.username
    return (
        <div className={"PostReplyTag"}>
            Reply to {postName} <a href={`#post${parentPost.id}`}>View</a>
        </div>
    )
}

export default PostReplyTag;
