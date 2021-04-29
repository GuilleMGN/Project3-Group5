import React from "react";
import "./HomeLayout.css";

const HomeLayout = () => {
  return (
    <div className="container">
      <div class="jumbotron">
        <h1 class="display-4">Hello, PurrCoin!</h1>
        <p class="lead">
          {/* This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information. */}
        </p>
        <hr class="my-4"></hr>
        <p>
          Join the Community today and get <strong><em>500 Points !!</em></strong>
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="/" role="button">
            Learn more
          </a>
        </p>
      </div>
      <p class="lead">Categories</p>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src="./car.jpeg" class="card-img-top" alt=""></img>
            <div class="card-body">
              <h5 class="card-title">Cars</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="./weights.jpeg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Work-Out</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="./speakers.jpeg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Accessories</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="jumbotron jumbotron-fluid jumbo">
        <div class="container">
          <h1 class="display-4">Start Today</h1>
          <p class="lead">
            Prepare to be your own boss and manage your own portfolio with <strong><em>PurrCoin.</em></strong>
          </p>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src="./book.jpeg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Books</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      
    </div>
  );
};

export default HomeLayout;
