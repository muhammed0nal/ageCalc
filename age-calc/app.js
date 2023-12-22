const btnEl = document.getElementById("sub-btn");
const h1_year = document.getElementById("h1-year");
const h1_month = document.getElementById("h1-month");
const h1_day = document.getElementById("h1-day");
const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");
const day_warn = document.getElementById("day-warn");
const month_warn = document.getElementById("month-warn");
const year_warn = document.getElementById("year-warn");
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

btnEl.addEventListener("click", () => {
    if (inputDay.value !== "" && inputMonth.value !== "" && inputYear.value !== "") {
        if (inputDay.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (inputMonth.value > month) {
            month = month + 12;
            year = year - 1;
        }

        let d = day - inputDay.value;
        let m = month - inputMonth.value;
        let y = year - inputYear.value;
        if (d > 31) {
            m++;
            d = d - day + 1;
        }
        if (m > 12) {
            y++;
            m = m - 12;
        }
        h1_year.innerHTML = `<h1 id="h1-year">${y} <span id="span-year">years</span></h1>`;
        h1_month.innerHTML = `<h1 id="h1-month">${m} <span id="span-month">month</span></h1>`;
        h1_day.innerHTML = `<h1 id="h1-day">${d} <span id="span-day">day</span></h1>`;
    }
    const warning = [day_warn, month_warn, year_warn];
    const warning_2 = [inputDay, inputMonth, inputYear];
    for (let i = 0; i < 3; i++) {
        if (warning_2[i].value == "") {
            warning[i].style.display = "block";
            warning_2[i].addEventListener("keydown", () => {
                warning[i].style.display = "none";
            }); warning_2[i].addEventListener("click", () => {
                warning[i].style.display = "none";
            });
        }
    }
});
