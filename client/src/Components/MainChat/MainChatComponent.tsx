import React from "react";
import { Header } from "./ChatHeader/ChatHeader";
import { MainLayout } from "./MainLayout/MainLayout";
import { ChatList } from "./ChatList/ChatList";
import { ChatFooter } from "./ChatFooter/ChatFooter";
import { io } from "socket.io-client";

const socket = io('http://localhost:3000');

const socketMessage = (msg: string) => {
    socket.emit('chat message', msg);
}

export function MainChatComponent() {
    
    return <>
            <Header />
            <MainLayout>
                <ChatList />
                <ChatFooter socketFn={socketMessage}/>
            </MainLayout>
          </>
}
