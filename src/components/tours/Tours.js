import React from "react";
import Title from "../title/Title";
import { tours } from "../../data";

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="featured" subtitle="tours" />

        <div className="section-center featured-center">
          {tours.map((tour) => {
            const { id, img, title, description, location, duration, price } =
              tour;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={img} alt="" />
                  <p className="tour-date">august 26th, 2020</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{description}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>
                      {location}
                    </p>
                    <p>{duration}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
