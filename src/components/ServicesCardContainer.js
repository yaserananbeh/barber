import React, { useState } from "react";
import barberApiData from "./BarbersApi.json";
function ServicesCardContainer() {
  return (
    <div>
      {barberApiData.map((data, index) => {
        return (
          <div key={index}>
            <BarberCardContainer data={data} index={index} />
          </div>
        );
      })}
    </div>
  );
}

export function BarberCardContainer({ index, data }) {
  const [bookFormToggle, setBookFormToggle] = useState(false);

  return (
    <div className="barberCardContainer" key={index}>
      <div className="imageContainer">
        <img
          style={{ width: "200px" }}
          src={data.barberImg}
          alt={data.barberName}
        />
      </div>
      <div className="contentContainer">
        <h2>{data.barberName}</h2>
        <h2>{data.barberPrice}$</h2>
        <p>{data.barberExp}</p>
        <p>{data.barberDes}</p>
        <button
          onClick={() => {
            setBookFormToggle(!bookFormToggle);
          }}
        >
          book
        </button>
        {bookFormToggle && (
          <>
            <BookFormContainer setBookFormToggle={setBookFormToggle} />
          </>
        )}
      </div>
    </div>
  );
}

export function BookFormContainer({ setBookFormToggle }) {
  const handleBookFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.date.value);
    // console.log(e.target.time.value);
    // let today = new Date();
    // let date =
    //   today.getFullYear() +
    //   "-" +
    //   (today.getMonth() + 1) +
    //   "-" +
    //   today.getDate();
    // console.log(typeof String(today.getMonth() + 1));
    setBookFormToggle(false);
  };
  let today = new Date();

  console.log(typeof String(today.getMonth() + 1));

  return (
    <div>
      <form onSubmit={handleBookFormSubmit}>
        <label htmlFor="date">date</label>
        <input type="date" min={"2022-01-04"} name="date" required />
        <label htmlFor="time">Time</label>
        <input type="time" name="time" required />
        <button>Book</button>
      </form>
    </div>
  );
}

export default ServicesCardContainer;
