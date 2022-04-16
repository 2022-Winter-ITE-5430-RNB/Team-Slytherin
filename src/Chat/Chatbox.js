import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
const Chatbox = () => {
  const toast = useToast();
  //   const { selectedChat } = ChatState();

  const url = "http://localhost:5000/api/response";
  const [busers, bsetUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({
    response: "",
  });
  // const {
  //   setSelectedChat,
  //   user,
  //   notification,
  //   setNotification,
  //   chats,
  //   setChats,
  // } = ChatState();
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        response: data.response,
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/response");
    const botresponse = await axios.get(
      "http://localhost:5000/api/botresponse"
    );
    setLoading(false);

    for (var i = 0; i < 1; i++) {
      if (response.data[i].response == "hello") {
        var names = [botresponse.data];
        var names2 = [response.data];
        // console.log(names);
        bsetUsers(names);
        setUsers(names2);
        toast({
          title: "Bot is Active in this chat",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {busers.map((currElem) => {
        var bot = [];

        var usersDiv2 = [];

        for (var i = 0; i < currElem.length; i++) {
          bot.push(currElem[i].botresponse);
        }

        for (var i = 0; i < bot.length; i++) {
          var two = <div>{bot[i]}</div>;
          usersDiv2.push(two);
        }
        {
          /* console.log(two); */
        }
        return (
          <div className="oneslide">
            <div className="label2">
              <label>user2</label>
              <div className="user2text">{two}</div>
            </div>
          </div>
        );
      })}
      {users.map((currElem2) => {
        var client1 = [];

        var usersDiv1 = [];

        for (var i = 0; i < currElem2.length; i += 1) {
          client1.push(currElem2[i].response);
        }

        for (var i = 0; i < client1.length; i++) {
          var one = <div>{client1[i]}</div>;
          usersDiv1.push(one);
        }

        return (
          <div className="oneslide">
            <div className="label1">
              <label>user 1 </label>
              <div className="user1text">{one}</div>
            </div>
          </div>
        );
      })}

      <div className="login-wrap2">
        <div className="login-form login-html">
          <form onSubmit={(e) => submit(e)}>
            <div className="group2">
              <label>message </label>

              <input
                className="res"
                type="text"
                onChange={(e) => handle(e)}
                id="response"
                value={data.response}
              />
            </div>

            <input className="send" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
