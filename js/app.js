const yourDate = new Date("2019-04-05");

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var rootTime = document.querySelector("time");

    document.querySelector("anni").textContent = `${
      yourDate.getDate() > 9 ? yourDate.getDate() : "0" + yourDate.getDate()
    }-${
      yourDate.getMonth() > 8
        ? yourDate.getMonth() + 1
        : "0" + (yourDate.getMonth() + 1)
    }-${yourDate.getFullYear()}`;

    document.querySelector("date").textContent =
      Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) +
      " DAYS";

    function olock() {
      var today = new Date(),
        hrs = Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60) % 24,
        min = Math.floor(Math.floor((today - yourDate) / 1000) / 60) % 60;
      rootTime.textContent = `${hrs > 9 ? hrs : "0" + hrs}:${
        min > 9 ? min : "0" + min
      }`;
    }
    olock();
  },
  false
);