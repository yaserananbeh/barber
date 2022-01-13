import React, { useState } from "react";
import BookFormContainer from "./BookFormContainer";


function BarberCardContainer({ index, data }) {
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
