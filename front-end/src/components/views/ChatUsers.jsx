import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import axiosClient from '../../api/axios';
import ChatConversation from './ChatConversation';

const ChatUsers = ({show,onClose}) => {

  const [ChatUsers, setChatUsers] = useState([]);
  const [Contact, setContact] = useState(null);
  const [showConversation, setShowConversation] = useState(false);

  useEffect(() => {
    fetchChatUsers()
  }, [show]);

  async function fetchChatUsers() {
    await axiosClient.get('/chat-users')
    .then((res)=>{
      setChatUsers(res.data)
      console.log(res.data)
    }) 
  }
 
  const handleContactClick = (contact) => {
    // if (contact.unread > 0) {
    //   const updatedChatUsers = ChatUsers.map(c =>
    //     c.id === contact.id ? { ...c, unread: 0 } : c
    //   );
    //   setChatUsers(updatedChatUsers);
    // }

    setContact(contact);
    console.log(contact)
    setShowConversation(true);
  };

  const handleCloseConversation = () => {
    setShowConversation(false);
    setActiveContact(null);
  };

  
 if(!show) return null;
  return (
    <div >
     
        <div
          className="position-fixed"
          style={{
            right: 0,
            top: 0,
            bottom: 0,
            width: "400px",
            zIndex: 1040,
            boxShadow: "-5px 0 15px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease-in-out"
          }}
        >
          <div className="d-flex flex-column h-100 bg-white">
            {/* Modal Header */}
            <div className="p-3 border-bottom d-flex justify-content-between align-items-center bg-primary text-white">
              <h5 className="mb-0">Messages</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={()=>onClose(false)}
                aria-label="Close"
              ></button>
            </div>

            {!showConversation && 
            <div className="flex-grow-1 d-flex" style={{ overflow: "hidden" }}>
              <div className={`${showConversation ? 'd-none d-md-block' : ''} h-100 w-100`}
                style={{ overflowY: "auto", borderRight: "1px solid #eaedf3" }}>

                {/* Search bar */}
                <div className="p-3">
                  <div className="input-group bg-light rounded-pill">
                    <span className="input-group-text bg-transparent border-0">
                      <i className="bi bi-search text-muted"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control bg-transparent border-0 py-2"
                      placeholder="Search conversations"
                    />
                  </div>
                </div>

                {/* ChatUsers list */}
                <div className="p-2">
                  {ChatUsers.map((contact) => (
                    <div
                      key={contact.id}
                      className="bg-white rounded-3 mb-2 p-3 shadow-sm"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleContactClick(contact)}
                    >
                      <div className="d-flex align-items-center">
                        <div className="position-relative me-3">
                          <img
                            src={`http://127.0.0.1:8000/storage/${contact?.profile?.avatar}`}
                            alt={contact.user_name}
                            className="rounded-circle"
                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                          />
                          {true && (
                            <span
                              className="position-absolute bg-success rounded-circle"
                              style={{
                                width: "12px",
                                height: "12px",
                                bottom: "2px",
                                right: "2px",
                                border: "2px solid white"
                              }}
                            ></span>
                          )}
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 fw-semibold">{contact.user_name}</h6>
                            <small className="text-muted">{contact.updated_at.slice(11,16)}</small>
                          </div>
                          <p className="text-muted mb-0 small text-truncate" style={{ maxWidth: "200px" }}>
                           lastMessage
                          </p>
                        </div>
                        {/* {contact.unread > 0 && (
                          <span className="badge rounded-pill bg-primary ms-2 px-2 py-1">
                            {contact.unread}
                          </span>
                        )} */}
                      </div>
                    </div>
                  ))}
                </div>
              </div> 

             
            </div>}
            <ChatConversation showConversation={showConversation} ColseshowConversation={setShowConversation} Contact={Contact} />
          </div>
        </div>
      
      
    </div>
  );
};

export default ChatUsers;