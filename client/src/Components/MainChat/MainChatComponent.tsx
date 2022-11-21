import React from "react";
import { Header } from "./ChatHeader/ChatHeader";
import { MainLayout } from "./MainLayout/MainLayout";
import { ChatList } from "./ChatList/ChatList";
import { ChatFooter } from "./ChatFooter/ChatFooter";

export function MainChatComponent() {
    
    return <>
            <Header />
            <MainLayout>
                <ChatList />
                <ChatFooter />
            </MainLayout>
          </>
}
