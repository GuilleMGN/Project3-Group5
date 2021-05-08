import React from "react";

function Welcome() {
  return (
    <div className="container">
      <span className="hide">{document.title = "Welcome to PurrChase"}</span>
      <div className="jumbo">
        <h1 className="display-4">Welcome to PurrChase! <i className="fas fa-cat"></i></h1>
        <hr />
        <p className="lead">
          Join today to earn a bonus <img src="./logo192.png" className="purrcoin" alt="." />
          <b><i> 500 PurrCoin! </i></b>
        </p>
        <a className="btn btn-outline-info" href="/login" role="button">Login</a>
      </div>
      <p>
        Prepare to be your own boss and manage your own portfolio with
        <b><i> PurrChase. </i></b>
        Buy and Sell items using
        <b><i> PurrCoin. </i></b>
      </p>
      <p className="lead">Explore Many Categories</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="./car.jpeg" className="card-img-top" alt="cars" />
            <div className="card-body">
              <h5 className="card-title">Cars and Vehicles</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="./weights.jpeg" className="card-img-top" alt="weights" />
            <div className="card-body">
              <h5 className="card-title">Sports and Fitness</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="./speakers.jpeg" className="card-img-top" alt="speakers" />
            <div className="card-body">
              <h5 className="card-title">Tech and Electronics</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="./book.jpeg" className="card-img-top" alt="books" />
            <div className="card-body">
              <h5 className="card-title">Books and Education</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Clothing and Fashion</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Pets and Animals</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Welcome;