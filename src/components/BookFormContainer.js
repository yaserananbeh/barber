import React, { useState } from "react";
import swal from "sweetalert";
import "../style/BookFormContainer.scss";

function BookFormContainer({ setBookFormToggle, data }) {
  const [error, setError] = useState(false);
  const handleBookFormSubmit = (e) => {
    e.preventDefault();

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
          swal(
            "Can't Book",
            "The Barber Not Available, Try Another Time",
            "error",
            {
              button: "Close",
            }
          );
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
          setBookFormToggle(false);
          swal(
            "You have booked successfully",
            "Thank you for using our services",
            "success",
            {
              button: "Close",
            }
          );
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
        setBookFormToggle(false);
        swal(
          "You have booked successfully",
          "Thank you for using our services",
          "success",
          {
            button: "Close",
          }
        );
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
      setBookFormToggle(false);
      swal(
        "You have booked successfully",
        "Thank you for using our services",
        "success",
        {
          button: "Close",
        }
      );
    }
  };
  let today = new Date();
  let date =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);

  return (
    <div className="bookFormContainer">
      <form onSubmit={handleBookFormSubmit}>
        <label htmlFor="date">Pick A date</label>
        <input type="date" min={date} name="date" required />
        <label htmlFor="time">Pick An hour</label>
        <input
          type="number"
          step="1"
          min="1"
          max="11"
          name="time"
          required
        />{" "}
        <p>1-11</p>
        {error && <p>error</p>}
        <button>Book</button>
      </form>
    </div>
  );
}

export default BookFormContainer;
