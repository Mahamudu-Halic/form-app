function ChatDashboard({showDashboard, isLight, create, handleCreate, updateTopics, handleChange, topic, getChat, filteredTopics}) {
    return (
        <div className={`chat-dashbord ${showDashboard && "show-dashboard"}`} style={isLight ? {background: "#dad4d4", color: "#121212" } : { background: "#1d1d1d", color: "#fff" }}>

            {/* create topic */}
            <div className={`create-topic ${create && "create"}`}>
                <button onClick={handleCreate} style={{color: "#fff"}}><i className="fa-solid fa-close"></i></button>
                <form action="" onSubmit={updateTopics}>
                    <input type="text" placeholder="topic name" required />
                    <button>create</button>
                </form>
            </div>

            {/* chat navbar */}
            <div className="chat-navbar">
                <h3>Community</h3>
                <button title="create new topic" onClick={handleCreate} style={isLight ? {} : {color: "#fff"}}><i className="fa-solid fa-edit"></i></button>
            </div>
            <div className="searchbar">
                <input type="search" name="" id="" placeholder="search" onChange={handleChange} />
            </div>

            {/* topics */}
            <div className="topics">
                {//show topics
                    filteredTopics.map(topic => <button onClick={() => getChat(topic)} style={isLight ? {} : {color: "#fff"}}>{topic}</button>)
                }
            </div>
        </div>
    );
}

export default ChatDashboard