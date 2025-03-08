import { useEffect, useState } from "react";

import axiosClient from "../../api/axios";

import {  useDispatch, useSelector } from "react-redux";
import { User } from "lucide-react";
// import echo from "../../config/echo";

const ChatConversation = ({showConversation ,ColseshowConversation ,Contact}) => {
    // const [messages, setMessages] = useState([]);
    const { messages }=useSelector(state=>state.servicesReducer)
    const {user}=useSelector(state=>state.auth)
    const [newMessage, setNewMessage] = useState('');
    const dispatch=useDispatch()
    useEffect(() => {
        if(Contact){
            fetchMessages();
        }
    }, [Contact]);

    const fetchMessages = async () => {
        
          await axiosClient.get('/messages/'+Contact?.id)
          .then((res)=>{
              // setMessages(res.data)
              dispatch({type:'FETCH_MESSAGES', payload:res.data})
              console.log(res.data)
             
          });
        
        
    };

    const sendMessage = async () => {
        const data={ message: newMessage ,receiver_id:Contact.id}
        // dispatch({type:'SEND_MESSAGE', payload:newMessage})
        console.log(data)
        await axiosClient.post('/send-message',data)
        .then((res)=>{
          console.log(res.data)
          fetchMessages();})
        .catch((err)=>console.log(err));
        setNewMessage('');
        
    };
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() === "") return;
    
        // const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        sendMessage()
        
    
        setNewMessage("");
      };
    

    

    if(!showConversation) return null;
    return (<>
        {/* Right chat area - visible only when a conversation is active */}
        
            <div className="h-100 w-100 d-flex flex-column" style={{ overflow: "hidden" }}>
              {/* Chat header */}
              <div className="p-3 d-flex justify-content-between align-items-center bg-white shadow-sm">
                <div className="d-flex align-items-center">
                  {/* Back button */}
                  <button
                    className="btn btn-light rounded-circle me-2"
                    onClick={()=>ColseshowConversation(false)}
                  >
                    <i className="bi bi-arrow-left"></i>
                  </button>

                  <div className="position-relative me-3">
                    <img
                      src={`http://127.0.0.1:8000/storage/${Contact?.profile?.avatar}`}
                      alt={Contact.user_name}
                      className="rounded-circle"
                      style={{ width: "45px", height: "45px", objectFit: "cover" }}
                    />
                    {true && (
                      <span
                        className="position-absolute bg-success rounded-circle"
                        style={{
                          width: "10px",
                          height: "10px",
                          bottom: "3px",
                          right: "3px",
                          border: "2px solid white"
                        }}
                      ></span>
                    )}
                  </div>
                  <div>
                    <h5 className="mb-0 fw-semibold">{Contact.user_name}</h5>
                    <small className="text-muted">{true ? 'Online now' : 'Offline'}</small>
                  </div>
                </div>
                <div>
                  <button className="btn btn-success rounded-circle me-2" onClick={()=>fetchMessages()}>
                    <i className="bi bi-telephone text-primary"></i>
                  </button>
                  <button className="btn btn-light rounded-circle">
                    <i className="bi bi-three-dots-vertical text-primary"></i>
                  </button>
                </div>
              </div>

              {/* Chat messages */}
              <div
                className="p-4 flex-grow-1"
                style={{
                  overflowY: "auto",
                  backgroundColor: "#f5f7fb"
                }}
              >
                <div className="text-center mb-4">
                  <small className="text-muted px-3 py-1 bg-white rounded-pill">Today</small>
                </div>

                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`d-flex ${message.sender_id === user.id ? "justify-content-end" : "justify-content-start"} mb-3`}
                  >
                    {message.sender === Contact.id && (
                      <img
                        src={`http://127.0.0.1:8000/storage/${Contact?.profile?.avatar}`}
                        alt={Contact.user_name}
                        className="rounded-circle me-2 align-self-end"
                        style={{ width: "30px", height: "30px", objectFit: "cover" }}
                      />
                    )}
                    <div
                      className={`p-3 rounded-3 ${message.sender_id === user.id
                          ? "bg-primary text-white"
                          : "bg-white"
                        }`}
                      style={{
                        maxWidth: "70%",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                      }}
                    >
                      <div>{message.message}</div>
                      <div
                        className={`text-end ${message.sender_id === user.id ? "text-white" : "text-muted"}`}
                        style={{
                          fontSize: "0.7rem",
                          opacity: 0.8,
                          marginTop: "4px"
                        }}
                      >
                        {message.created_at}
                        {message.sender_id === user.id && (
                          <i className="bi bi-check-all ms-1"></i>
                        )}
                      </div>
                    </div>
                    {message.sender_id === user.id && (
                      <div className="align-self-end ms-2" style={{ width: "30px" }}></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Chat input */}
              <div className="p-3 border-top bg-white">
                <form onSubmit={handleSendMessage} className="d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-light rounded-circle me-2"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="bi bi-emoji-smile text-primary"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-light rounded-circle me-2"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="bi bi-paperclip text-primary"></i>
                  </button>

                  <div className="input-group bg-light rounded-pill me-2">
                    <input
                      type="text"
                      className="form-control bg-transparent border-0 py-2"
                      placeholder="Type your message"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn bg-transparent border-0"
                    >
                      <i className="bi bi-mic text-primary"></i>
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary rounded-circle d-flex justify-content-center align-items-center"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <i className="bi bi-send-fill"></i>
                  </button>
                </form>
              </div>
            </div>
        </>
    );
};

export default ChatConversation;
