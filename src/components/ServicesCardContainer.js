import React, { useState } from "react";
import barberApiData from "./BarbersApi.json";
function ServicesCardContainer() {
  return (
    <div style={{ color: "white" }}>
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

export function BookFormContainer({ setBookFormToggle, data }) {
  // const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(false);
  const handleBookFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.date.value);
    // console.log(e.target.time.value);
    // console.log(data.barberName);
    // console.log("==================");

    if (localStorage.getItem(data.barberName + "dates")) {
      let prevArrOfDates = JSON.parse(
        localStorage.getItem(data.barberName + "dates")
      );
      let existDate = false;
      let indexExistDate = null;
      prevArrOfDates.forEach((item, index) => {
        if (item.date === e.target.date.value) {
          existDate = true;
          indexExistDate = index;
          return;
        }
      });
      if (existDate) {
        let existTime = false;
        prevArrOfDates[indexExistDate].times.forEach((item, index) => {
          if (item.time === e.target.time.value) {
            existTime = true;
            return;
          }
        });
        if (existTime) {
          //true
          alert("choose another time");
        } else {
          let tempArr = prevArrOfDates;
          tempArr[indexExistDate].times.push({
            time: e.target.time.value,
            userEmail: localStorage.getItem("loggedInUser")
              ? JSON.parse(localStorage.getItem("loggedInUser")).email
              : "guest@email.com",
          });
          localStorage.setItem(
            data.barberName + "dates",
            JSON.stringify(tempArr)
          );
          alert("added");
        }
      } else {
        localStorage.setItem(
          data.barberName + "dates",
          JSON.stringify([
            ...prevArrOfDates,
            {
              date: e.target.date.value,
              times: [
                {
                  time: e.target.time.value,
                  userEmail: localStorage.getItem("loggedInUser")
                    ? JSON.parse(localStorage.getItem("loggedInUser")).email
                    : "guest@email.com",
                },
              ],
            },
          ])
        );
        alert("added");
      }
    } else {
      localStorage.setItem(
        data.barberName + "dates",
        JSON.stringify([
          {
            date: e.target.date.value,
            times: [
              {
                time: e.target.time.value,
                userEmail: localStorage.getItem("loggedInUser")
                  ? JSON.parse(localStorage.getItem("loggedInUser")).email
                  : "guest@email.com",
              },
            ],
          },
        ])
      );
      alert("added");
    }

    // setBookFormToggle(false);
  };
  let today = new Date();
  let date =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);

  return (
    <div>
      <form onSubmit={handleBookFormSubmit}>
        <label htmlFor="date">date</label>
        <input type="date" min={date} name="date" required />
        <label htmlFor="time">Hour</label>
        <input
          type="number"
          step="1"
          min="1"
          max="11"
          name="time"
          required
        />{" "}
        <p>o'Clock</p>
        {error && <p>error</p>}
        <button>Book</button>
      </form>
    </div>
  );
}

export default ServicesCardContainer;
