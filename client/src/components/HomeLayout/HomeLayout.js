import React from "react";
import "./HomeLayout.css";

const HomeLayout = (props) => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Hello, PurrCoin! {props.name}</h1>
        <p className="lead">
          {/* This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information. */}
        </p>
        <hr className="my-4"></hr>
        <p>
          Join the Community today and get{" "}
          <strong>
            <em>500 Points !!</em>
          </strong>
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/" role="button">
            Learn more
          </a>
        </p>
      </div>
      <p className="lead">Categories</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="./car.jpeg" class="card-img-top" alt=""></img>
            <div className="card-body">
              <h5 className="card-title">Cars</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="./weights.jpeg" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Work-Out</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="./speakers.jpeg" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Accessories</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="jumbotron jumbotron-fluid jumbo">
        <div className="container">
          <h1 className="display-4">Start Today</h1>
          <p className="lead">
            Prepare to be your own boss and manage your own portfolio with{" "}
            <strong>
              <em>PurrCoin.</em>
            </strong>
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="./book.jpeg" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Books</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default HomeLayout;
