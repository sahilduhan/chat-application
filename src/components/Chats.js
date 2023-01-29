import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../components/firebase";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

function Chats() {
  // const [history, setHistory] = useState(nu)

  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  // console.log(user);

  const history = useHistory();
  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
    window.location.reload();
  };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = response.blob();

    return new File([data], "userPhoto.jpeg", { type: "image/jpeg" });
  };
  useEffect(() => {
    if (!user) history.push("/");
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "ac121054-a324-4bc8-9da5-9a33928d30ab",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users", formData, {
              headers: {
                "private-key": "273d57f1-c2b4-4262-8326-2c203269762d",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  if (!user || loading) return "Loading";

  return (
    <div className="chats-page">
      {/* <h1>Chats</h1> */}
      <div className="nav-bar">
        <div className="logo-tab">Chat App</div>

        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="ac121054-a324-4bc8-9da5-9a33928d30ab"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}

export default Chats;
