document.getElementById("reservationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;
  const seats = parseInt(document.getElementById("seats").value);

  // implement further logic here, like making a reservation request to the backend.
  // For this example, we'll just show an alert with the reservation details.
  const reservationDetails = `Name: ${name}\nFrom: ${from}\nTo: ${to}\nDate: ${date}\nSeats: ${seats}`;
  alert(reservationDetails);

  // Reset the form after submitting
  document.getElementById("reservationForm").reset();
});
