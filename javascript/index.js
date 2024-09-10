function updateTime() {
  let parisDateElement = document.querySelector("#paris-date");
  let parisTimeElement = document.querySelector("#paris-time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss [<small>]A[</small>] "
  );

  let newYorkDateElement = document.querySelector("#new-york-date");
  let newYorkTimeElement = document.querySelector("#new-york-time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>] "
  );
}

updateTime();
setInterval(updateTime, 1000);
