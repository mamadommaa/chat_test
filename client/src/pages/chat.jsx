import Message from "../components/message";
import MessageMe from "../components/messageMe";
import { fetchMessages, sendMessage } from "../redux/slices/messages";
import { useDispatch, useSelector } from "react-redux";
import React, { useRef, useEffect, useState } from "react";
import send from "../img/send.svg";

const Chat = () => {
    const dispatch = useDispatch();
    const { messages } = useSelector((state) => state.messages);
    const messagesEndRef = useRef(null);
    const [inputValue, setInputValue] = useState("");

    // Загружаем сообщения при монтировании компонента
    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    // Отправка сообщения
    const handleClick = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return; // Проверка на пустое сообщение

        sendMessage(inputValue);
        setInputValue("");
        dispatch(fetchMessages());
    };

    // Скроллим к низу при изменении сообщений
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Функция скролла к низу
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({
                behavior: "instant",
                block: "end",
            });
        }
    };

    return (
        <div className="chat__container">
            <div className="chat__info">
                <img
                    className="chat__info-img"
                    src="https://avatars.dzeninfra.ru/get-zen_doc/1591100/pub_6337fc4e3c55cc1557bfa59e_6337fd24334727708fb79b40/scale_1200"
                    alt=""
                />
                <div>
                    <p className="chat__info-name">Подслушано Тибет</p>
                    <p className="chat__info-member">859 участников</p>
                </div>
            </div>
            <div className="chat__messages">
                {messages.status === "loaded" &&
                    messages.items.messages.map((message, index) =>
                        message.name ? (
                            <Message
                                key={index}
                                name={message.name}
                                surname={message.surname}
                                message={message.message}
                                img={message.img}
                            />
                        ) : (
                            <MessageMe key={index} message={message.message} />
                        )
                    )}
                <div ref={messagesEndRef}></div>
            </div>
            <div className="chat__send">
                <form onSubmit={handleClick} className="chat__form">
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        type="text"
                        className="chat__input"
                        placeholder="Введите сообщение..."
                    />
                    <button type="submit" className="chat__button">
                        <img src={send} alt="" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
