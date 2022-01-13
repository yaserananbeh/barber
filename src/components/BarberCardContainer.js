import React, { useState } from "react";
import BookFormContainer from "./BookFormContainer";
import "../style/BarberCardContainer.scss";

function BarberCardContainer({ index, data }) {
  const [bookFormToggle, setBookFormToggle] = useState(false);

  return (
    <div className="barberCardContainer" key={index}>
      <div className="imageContainer">
        <img src={data.barberImg} alt={data.barberName} />
      </div>
      <div className="contentContainer">
        <h2>{data.barberName}</h2>
        <h4>{data.barberPrice}$</h4>
        <p>{data.barberExp} Years of experience</p>
        <p>{data.barberDes}</p>
        <button
          onClick={() => {
            setBookFormToggle(!bookFormToggle);
          }}
        >
          Schedule
        </button>
        <hr />
        {bookFormToggle && (
          <>
            <BookFormContainer
              setBookFormToggle={setBookFormToggle}
              data={data}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default BarberCardContainer;
