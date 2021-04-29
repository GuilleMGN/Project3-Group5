import React, { useState, useEffect } from "react";
// const cars = ["urus", "lambo"];
// console.log(cars);

const users = [
  {
    image_url:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1346&q=80",
    category: "Sony accessories",
    collection: "accessories",
    description: "",
    cost: 3456,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1603946877690-d410437c29aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "",
    collection: "accessories",
    description: "",
    cost: 5789,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1611285565201-03b1700766a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "",
    collection: "accessories",
    description: "",
    cost: 4545,
    Date: Date.now()
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    image_url:
      "https://images.unsplash.com/photo-1571716846252-df1324ce17bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "",
    collection: "accessories",
    description: "",
    cost: 3489,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "",
    collection: "accessories",
    description: "",
    cost: 1789,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1600368140372-9052d7ab55a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "",
    collection: "accessories",
    description: "",
    cost: 2545,
    Date: Date.now()
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    image_url:
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    category: "",
    collection: "accessories",
    description: "",
    cost: 3456,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80",
    category: "",
    collection: "accessories",
    description: "",
    cost: 5789,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1513595086754-ae9ec42d7e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "",
    collection: "accessories",
    description: "",
    cost: 545,
    Date: Date.now()
  },
  ///////,,,,,,,,,,,,,,,///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    image_url:
      "https://images.unsplash.com/photo-1574771540177-1b67712f6c6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80",
    category: "",
    collection: "accessories",
    description: "",
    cost: 1489,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1619037961390-f2047d89bc55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    category: "",
    collection: "accessories",
    description: "",
    cost: 789,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1609788994700-73eda149ffb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    category: "",
    collection: "accessories",
    description: "",
    cost: 1545,
    Date: Date.now()
  }
];
// console.log(users)

function Accesories() {
  const [state, setUsers] = useState([]);
  console.log(state)
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

export default Accesories;
