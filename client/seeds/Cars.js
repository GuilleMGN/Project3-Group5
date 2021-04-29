import React, { useState, useEffect } from "react";



const users = [
  {
    image_url:
      "https://images.unsplash.com/photo-1522037576655-7a93ce0f4d10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Lamborghini",
    collection: "cars",
    description: "Drive around town",
    cost: 3456,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1575650681837-c0ca3b1e7275?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    category: "Urus",
    collection: "cars",
    description: "King of the road",
    cost: 5789,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1530940031329-f884cdcf65c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Ferrari",
    collection: "cars",
    description: "Rariiii",
    cost: 4545,
    Date: Date.now()
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    image_url:
      "https://images.unsplash.com/photo-1558548724-6caa2e9f0314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    category: "Audi",
    collection: "cars",
    description: "Sporty",
    cost: 3489,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1612368764459-0446df792e36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Benz",
    collection: "cars",
    description: "Driving around city lights",
    cost: 1789,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1500509178313-4eaf2867f500?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Porsche",
    collection: "cars",
    description: "911 In a hurry",
    cost: 2545,
    Date: Date.now()
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    image_url:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    category: "Tesla",
    collection: "cars",
    description: "Self drive car",
    cost: 3456,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1427&q=80",
    category: "Jeep",
    collection: "cars",
    description: "offRoad",
    cost: 5789,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1610915504025-d806f0041582?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1306&q=80",
    category: "Ford Focus",
    collection: "cars",
    description: "Simple car on Sale",
    cost: 545,
    Date: Date.now()
  },
  ///////,,,,,,,,,,,,,,,///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    image_url:
      "https://images.unsplash.com/photo-1542046272227-d247df21628a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    category: "Honda",
    collection: "cars",
    description: "Sporty",
    cost: 1489,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1575090536203-2a6193126514?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    category: "Hyundai",
    collection: "cars",
    description: "Cheap Option",
    cost: 789,
    Date: Date.now()
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1598551292182-1df7b0c7504c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Toyota",
    collection: "cars",
    description: "New Toyota Lexus",
    cost: 1545,
    Date: Date.now()
  }
];
// console.log(users)

function Cars() {
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
            <div className="row row-cols-1 row-cols-md-3 g-4">
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
                        style={{ color: "#948a44" }}
                        className="btn btn-outline-primary"
                      >
                        Add to Cart
                      </button>
                      {/* <button type="button" className="btn btn-outline-primary">Delete</button> */}
                    </div>
                    {/* <p>{user.collection}</p> */}
                  </div>
                  <div className="card-footer">
                    {/* <small className="text-muted">{user.Date}</small> */}
                  </div>
                </div>
              </div>
              <hr></hr>
              <br></br>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cars;
