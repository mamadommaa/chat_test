const Message = (props) => {
    // console.log(props.messages.messages[0]);
    return (
        <div className="message">
            <img className="message__img" src={props.img} alt="" />
            <div className="message__container">
                <p className="message__name">
                    {props.name} {props.surname}
                </p>
                <p className="message__body">{props.message}</p>
            </div>
        </div>
    );
};

export default Message;
