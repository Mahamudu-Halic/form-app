import Empty from "../empty";

function CommunityChatBox({isLight, topicHeading, scrollContainerRef, chatMessages, handleSend}) {
    return (
    <div className="chatbox" style={isLight ? {background: "#F2F4F6"} : {background: "#191919",color: "#fff"}}>
        {
        topicHeading.length !== 0 && <div className="topic-heading">
                <h2>{topicHeading}</h2>
            </div> // : <div className="overlay"></div>
        }

        {/* chat messages */}
        <div ref={scrollContainerRef} className="chat-messages">
            {//if message is empty
            chatMessages.length === 0 && <Empty message={"No message found"} />
            }
            {//show messages
            chatMessages.map(message => <div className="user-chat">
                <div className="user-profile">
                    <img src={message.profile} alt="" />
                </div>
                <div className="message" style={isLight ? {background: "#c0bdbd"} : {background: "#1d1d1d"}}>
                        <p className="name">{message.name}</p>
                        <p className="message-txt">{message.message}</p>
                        <p className="time">{message.time}</p>
                    </div>
                </div>
            )}
        </div>

        {/* entry field */}
        <form className="entry-field" onSubmit={handleSend}>
            <input type="text" placeholder="Type a message" required style={isLight ? {background: "#c0bdbd",color: "#121212"} : {background: "#1d1d1d"}} />
            <button><i className="bi bi-send"></i></button>
        </form>
    </div>);
}

export default CommunityChatBox