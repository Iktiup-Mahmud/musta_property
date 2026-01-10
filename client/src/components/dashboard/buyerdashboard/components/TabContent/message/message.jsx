








// import React from "react";
// import { MessageSquare } from "lucide-react";
// import Button from "../../../common/button/button";
// import "./message.css";

// export default function MessagesTab({
//   conversations,
//   selectedConversationId,
//   setSelectedConversationId,
//   messages,
//   newMessage,
//   setNewMessage,
//   handleSendMessage,
//   loadingConversations
// }) {
//   const currentConversation =
//     conversations.find(c => c._id === selectedConversationId) || null;

//   const showEmptyState = conversations.length === 0;

//   return (
//     <div className="messages-tab-container">
//       {/* LEFT: Conversations */}
//       <div className="conversations-list">
//         <h3>
//           <MessageSquare size={18} /> Conversations
//         </h3>

//         {loadingConversations ? (
//           <p>Loading...</p>
//         ) : showEmptyState ? (
//           <p className="empty-text">
//             No conversations yet.
//             <br />
//             Start a message to contact an owner.
//           </p>
//         ) : (
//           <ul>
//             {conversations.map(c => (
//               <li
//                 key={c._id}
//                 onClick={() => setSelectedConversationId(c._id)}
//                 className={`conversation-item ${
//                   c._id === selectedConversationId ? "selected" : ""
//                 }`}
//               >
//                 <div className="font-extrabold">{c.property_id?.title}</div>
//                 <div className="with-name">{c.owner_id?.name}</div>
//                 <div className="last-message">
//                   {c.lastMessage || "Start conversation"}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* RIGHT: Chat Window */}
//       <div className="chat-window">
//         <div className="chat-header">
//           {currentConversation ? (
//             <>
//               <h4>{currentConversation.property_id?.title}</h4>
//               <p>Messaging {currentConversation.owner_id?.name}</p>
//             </>
//           ) : (
//             <h4>New Message</h4>
//           )}
//         </div>

//         <div className="chat-messages custom-scrollbar">
//           {messages.length === 0 ? (
//             <p className="empty-chat">
//               Write a message to start the conversation.
//             </p>
//           ) : (
//             messages.map(m => (
//               <div
//                 key={m._id}
//                 className={`chat-row ${m.from === "me" ? "me" : "other"}`}
//               >
//                 <div className={`chat-bubble ${m.from}`}>
//                   {m.text}
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* INPUT ALWAYS VISIBLE */}
//         <div className="chat-input-container">
//           <input
//             placeholder="Type your message..."
//             value={newMessage}
//             onChange={e => setNewMessage(e.target.value)}
//             onKeyDown={e => e.key === "Enter" && handleSendMessage()}
//           />
//           <Button
//             variant="orange"
//             size="small"
//             onClick={handleSendMessage}
//             disabled={!newMessage.trim()}
//           >
//             Send
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { MessageSquare } from "lucide-react";
import Button from "../../../../../common/button/button";
import "./message.css";

export default function MessagesTab({
  conversations,
  selectedConversationId,
  setSelectedConversationId,
  messages,
  newMessage,
  setNewMessage,
  handleSendMessage,
  loadingConversations
}) {
  const currentConversation =
    conversations.find(c => c._id === selectedConversationId) || null;

  const showEmptyState = conversations.length === 0;
  const isConversationSelected = !!selectedConversationId;

  return (
    <div className="messages-tab-container">
      {/* LEFT: Conversations */}
      <div className="conversations-list">
        <h3>
          <MessageSquare size={18} /> Conversations
        </h3>

        {loadingConversations ? (
          <p>Loading...</p>
        ) : showEmptyState ? (
          <p className="empty-text">
            No conversations yet.
            <br />
            Start a message to contact an owner.
          </p>
        ) : (
          <ul>
            {conversations.map(c => (
              <li
                key={c._id}
                onClick={() => setSelectedConversationId(c._id)}
                className={`conversation-item ${c._id === selectedConversationId ? "selected" : ""
                  }`}
              >
                <div className="font-extrabold">
                  {c.property_id?.title || "Property"}
                </div>
                <div className="with-name">
                  {c.owner_id?.name || "Owner"}
                </div>
                <div className="last-message">
                  {c.lastMessage || "Start conversation"}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* RIGHT: Chat Window */}
      <div className="chat-window">
        <div className="chat-header">
          {currentConversation ? (
            <>
              <h4>{currentConversation.property_id?.title}</h4>
              <p>Messaging {currentConversation.owner_id?.name}</p>
            </>
          ) : (
            <h4>Select a conversation</h4>
          )}
        </div>

        <div className="chat-messages custom-scrollbar">
          {!isConversationSelected ? (
            <p className="empty-chat">
              Select a conversation to start chatting.
            </p>
          ) : messages.length === 0 ? (
            <p className="empty-chat">
              Write a message to start the conversation.
            </p>
          ) : (
            messages.map(m => (
              <div
                key={m._id}
                className={`chat-row ${m.sender_id === "me" ? "me" : "other"
                  }`}
              >
                <div className="chat-bubble">
                  {m.text}
                </div>
                {/* <div key={m._id} className="chat-row">
                  <div className={`chat-bubble ${m.sender_id === "me" ? "me" : "other"}`}>
                    {m.text}
                  </div>
                </div> */}
              </div>
            ))
          )}
        </div>

        {/* INPUT */}
        <div className="chat-input-container">
          <input
            placeholder={
              isConversationSelected
                ? "Type your message..."
                : "Select a conversation first"
            }
            value={newMessage}
            disabled={!isConversationSelected}
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={e =>
              e.key === "Enter" &&
              isConversationSelected &&
              handleSendMessage()
            }
          />

          <Button
            variant="orange"
            size="small"
            onClick={handleSendMessage}
            disabled={!isConversationSelected || !newMessage.trim()}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
