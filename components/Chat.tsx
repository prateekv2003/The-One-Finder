import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  Thread,
  LoadingIndicator,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";

type Props = {};

const ChatComponent = (props: Props) => {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);

  const user = {
    id: "omkarbhostekar",
    name: "Omkar",
    image: "",
  };

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(
        process.env.STREAM_CHAT_SDK_KEY
      );
      await chatClient.connectUser(user, chatClient.devToken(user.id))

      const channel = chatClient.channel('messaging','react-talk', {
        image: 
      })
    }
    init();
  }, []);

  return <div className=" h-screen w-screen"></div>;
};

export default ChatComponent;
