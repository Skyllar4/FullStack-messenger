import React from "react";

interface dataItem {
    id: string,
    chatList: string
}

export function GeneralChat() {

    const [chatList, setChatList] = React.useState(Array<dataItem>)

    const fetchChatList = async () => {
        await fetch("/chat")
        .then(res => res.json())
        .then(res => setChatList(res))
    }
    
    React.useEffect(() => {
        fetchChatList();
    }, [chatList]);

     const listItems = chatList.map((item) => <li key={item.id}>{item.chatList}</li>); // проблема с key

    // !!!!!!!!!!!!!!! Проблема с компонентом, компонент отрисовывается 3 раза, пока временно вписал chatList в 20 строчку, это вызвает бесконенчое срабатывание useEffect, но в только в таком случае функционал рабоатает
    // Хотя я не уверен, если вжарить console.log() то он будет выводится постоянно, хотя сам компонент вроде как не перерисовывается
    return <ul>
              {listItems}
           </ul>

}