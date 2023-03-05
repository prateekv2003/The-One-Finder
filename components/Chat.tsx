import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import "stream-chat-react/dist/css/v2/index.css";

type Props = {};

const ChatComponent = (props: Props) => {
  let username = localStorage.getItem("name");
  if (!username) username = "omkarbhostekar";
  return (
    <div className=" h-screen w-screen">
      <SendbirdApp
        appId="1D5D3CA6-7A75-4BE6-8E9F-252A61BADBF7"
        userId={username}
      />
    </div>
  );
};

export default ChatComponent;
