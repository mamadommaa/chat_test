const MessageMe = (props) => {
    return (
        <div className="messageMe">
            <p className="messageMe__body">{props.message}</p>
        </div>
    );
};

export default MessageMe;
