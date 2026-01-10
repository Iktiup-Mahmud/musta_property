import React from "react";
import Button from "../../../../../common/button/button";

// export default function OwnerMessagesTab({
//   conversations,
//   selectedConversationId,
//   setSelectedConversationId,
//   messages,
//   newMessage,
//   setNewMessage,
//   handleSendMessage
// }) {
//   const currentConversation = conversations.find(c => c.id === selectedConversationId);

//   return (
//     <div className="owner-messages-tab">
//       <div className="conversations-list">
//         {conversations.map(c => (
//           <div
//             key={c.id}
//             onClick={() => setSelectedConversationId(c.id)}
//             className={`conversation-card ${c.id === selectedConversationId ? "active" : ""}`}
//           >
//             <div className="property-title">{c.propertyTitle}</div>
//             <div className="buyer-name">{c.buyerName}</div>
//             <div className="last-message">{c.lastMessage}</div>
//           </div>
//         ))}
//       </div>

//       <div className="chat-window">
//         {currentConversation ? (
//           <div className="messages-area">
//             {messages.map(m => (
//               <div key={m.id} className={`message ${m.from === "me" ? "sent" : "received"}`}>
//                 {m.text}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="no-chat">Select a conversation</div>
//         )}
//         {currentConversation && (
//           <div className="message-input">
//             <input
//               value={newMessage}
//               onChange={(e) => setNewMessage(e.target.value)}
//               placeholder="Type your message..."
//               onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//             />
//             <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>Send</Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


//import React from "react";
import { MessageSquare } from "lucide-react";
//import Button from "../../../common/button/button";
// import "./message.css";
// import "./tab.css";
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
                <div className="font-extrabold">{c.property_id?.title}</div>
                <div className="with-name">{c.owner_id?.name}</div>
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
            <h4>New Message</h4>
          )}
        </div>

        <div className="chat-messages custom-scrollbar">
          {messages.length === 0 ? (
            <p className="empty-chat">
              Write a message to start the conversation.
            </p>
          ) : (
            messages.map(m => (
              <div
                key={m._id}
                className={`chat-row ${m.from === "me" ? "me" : "other"}`}
              >
                <div className={`chat-bubble ${m.from}`}>
                  {m.text}
                </div>
              </div>
            ))
          )}
        </div>

        {/* INPUT ALWAYS VISIBLE */}
        <div className="chat-input-container">
          <input
            placeholder="Type your message..."
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSendMessage()}
          />
          <Button
            variant="orange"
            size="small"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            Send
          </Button>
        </div>
        {/* {selectedConversationId && (
          <div className="chat-input-container">
            <input
              placeholder="Type your message..."
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSendMessage()}
            />
            <Button
              variant="orange"
              size="small"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
            >
              Send
            </Button>
          </div>
        )} */}

      </div>
    </div>
  );
}
