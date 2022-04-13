import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { background, color } from "@chakra-ui/react";
import "../../assets/css/feedback.css";
const Feedback = () => {
  const url = "http://localhost:5000/api/feedbacks";
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

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
        name: data.name,
        email: data.email,
        feedback: data.feedback,
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/feedbacks/");
    setUsers(response.data);
    console.log(response.data);
    console.log("--test");
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="feedbackH">
        <h2>Testimonials</h2>
      </div>
      <div className="feedback login-wrap">
        <div class="login-form login-html">
          <form onSubmit={(e) => submit(e)}>
            <div class="group">
              <label>Name: </label>
              <input
                type="text"
                onChange={(e) => handle(e)}
                id="name"
                value={data.name}
              />
            </div>
            <br />
            <br />
            <label>Email: </label>
            <input
              type="text"
              onChange={(e) => handle(e)}
              id="email"
              value={data.email}
            />
            <br />
            <br />
            <label>Your Feedback</label>
            <textarea
              name="feedback"
              onChange={(e) => handle(e)}
              id="feedback"
              value={data.feedback}
            />
            <br />
            <br />
            <input className="submit" type="submit" value="Submit" />
            <input className="reset" type="reset" value="Clear" />
          </form>
        </div>
      </div>
      {users.map((currElem) => {
        return (
          <div class="container">
            <div class="oneslide">
              <blockquote>
                <span class="leftq quotes">&ldquo;</span>
                {currElem.feedback}
                <span class="rightq quotes">&bdquo; </span>
              </blockquote>
              <img
                src="//c2.staticflickr.com/8/7310/buddyicons/24846422@N06_r.jpg"
                width="70"
                height="70"
              />
              <h2>{currElem.name}</h2>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Feedback;
