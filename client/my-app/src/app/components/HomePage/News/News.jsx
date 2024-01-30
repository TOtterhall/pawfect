`use client`;
import React from "react";
import Image from "next/image";
import Golden from "../../../../../public/assets/carousel/golden_dog.jpg";
import Pagination from "../../../../../public/assets/pictures/pagination.svg";
import "./News.css";
export default function News() {
  return (
    <div>
      <div className="leker-kategorier">KATEGORIER?</div>
      <br />
      <br />
      <br />
      <h1 class="card-title news text-center">NYHETER</h1>
      <br />
      <br />
      <br />

      <div class="card-group">
        <div class="card">
          <Image
            className="d-block w-100 img-fluid"
            src={Golden}
            alt="Golden Dog"
            width={200}
            height={300}
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <Image
            className="d-block w-100 img-fluid"
            src={Golden}
            alt="Golden Dog"
            width={200}
            height={300}
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <Image
            className="d-block w-100 img-fluid"
            src={Golden}
            alt="Golden Dog"
            width={200}
            height={300}
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* <Image
          className="d-block w-100 img-fluid"
          src={Pagination}
          alt="Pagination"
          width={0.1}
          height={0.1}
        /> */}

      {/* <nav aria-label="Page navigation ">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}
