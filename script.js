// we want to select output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

// input elements
let isValid = false;
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");

// error elements
const year_error = document.querySelector(".year-error");
const month_error = document.querySelector(".month-error");
const day_error = document.querySelector(".day-error");

submit_btn.addEventListener('click', calculateDate)

input_day.addEventListener("input", (e) => {

  if (+input_day.value > 31) {
    day_error.textContent = "Must be valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    day_error.textContent = "";
  }

  if (+input_day.value === 0) {
    isValid = false;
    day_error.textContent = "This field is required";
    return;
  } else {
    day_error.textContent = "";
  }
});

input_month.addEventListener("input", (e) => {
  
  if (+input_month.value > 12) {
    month_error.textContent = "Must be valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    month_error.textContent = "";
  }

  if (+input_month.value === 0) {
    isValid = false;
    month_error.textContent = "This field is required";
    return;
  } else {
    month_error.textContent = "";
  }
})

input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2023) {
    year_error.textContent = "Must be valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    year_error.textContent = "";
  }

  if (+input_year.value === 0) {
    isValid = false;
    year_error.textContent = "This field is required";
    return;
  } else {
    year_error.textContent = "";
  }
});

function calculateDate() {
  if(isValid) {
    let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
    console.log(birthday)

    let bithDayObj = new Date(birthday);
    let ageDiffMill = Date.now() - bithDayObj;
    let ageDate = new Date(ageDiffMill);
    let ageYear = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay();

    output_day.textContent = ageDay;
    output_month.textContent = ageMonth;
    output_year.textContent = ageYear;
  } else {
    alert("error")
  }
}