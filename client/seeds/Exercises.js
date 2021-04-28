import React, { useState, useEffect } from "react";
// const cars = ["urus", "lambo"];
// console.log(cars);

const users = [
  {
    image_url:
      "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    category: "workout",
    collection: "workout",
    description: "",
    cost: 3456,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1584827387150-8ae4caebe906?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "",
    collection: "workout",
    description: "",
    cost: 5789,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1493690283958-32df2c86326e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1348&q=80",
    category: "",
    collection: "workout",
    description: "",
    cost: 4545,
    Date: Date.now()
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    image_url:
      "https://images.unsplash.com/photo-1517344800994-80b20463999c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "",
    collection: "workout",
    description: "",
    cost: 3489,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1557330359-ffb0deed6163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "",
    collection: "workout",
    description: "",
    cost: 1789,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80",
    category: "",
    collection: "workout",
    description: "",
    cost: 2545,
    Date: Date.now()
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    image_url:
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80",
    category: "",
    collection: "workout",
    description: "",
    cost: 3456,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1540111970170-b1c4d4fbadaa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "",
    collection: "workout",
    description: "",
    cost: 5789,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1585342565162-3704ff9b221d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "",
    collection: "workout",
    description: "",
    cost: 545,
    Date: Date.now()
  },
  ///////,,,,,,,,,,,,,,,///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    image_url:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "",
    collection: "workout",
    description: "",
    cost: 1489,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80",
    category: "",
    collection: "workout",
    description: "",
    cost: 789,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1578762560042-46ad127c95ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "",
    collection: "workout",
    description: "",
    cost: 1545,
    Date: Date.now()
  }
];
// console.log(users)

function Exercises() {
  const [state, setUsers] = useState([]);

  useEffect(() => {
    setUsers({ users: users });
    console.log(users);
  }, []);

  return (
    <div className="container">
      {users.map((user, index) => {
        return (
          <div key={index}>
        
              <div className="col">
                <div className="card h-100">
                  <img
                    src={user.image_url}
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{user.category}</h5>
                    <p className="card-text">
                      Coins: <strong>{user.cost}</strong>
                    </p>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="btn btn-success"
                        style={{ color: "yellow" }}
                        className="btn btn-primary"
                      >
                        Add to Cart
                      </button>
                      {/* <button type="button" className="btn btn-outline-primary">Delete</button> */}
                    </div>
                    {/* <p>{user.collection}</p> */}
                  </div>
                  <div className="card-footer">
                    <small className="text-muted"><em>Refer and get 50 points!!</em></small>
                  </div>
                </div>
              </div>
              <hr></hr>
              <br></br>
        </div>
         
        );
      })}
    </div>
  );
}

export default Exercises;
