"use client";
import AboutJumbo from "../components/HomePage/Jumbotrons/AboutJumbo";
export default function Aboutus() {
  return (
    <main>
      <div className="jumbotron-page my-5 d-flex justify-content-center ">
        <div className="">
          <div className="">
            <div className="card-body">
              <h1 className="">SÅHÄR BÖRJADE DET...</h1>
              <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-4" />
              <p>
                It uses utility classNamees for typography and spacing to space
                content out within the larger container.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutJumbo />
    </main>
  );
}
