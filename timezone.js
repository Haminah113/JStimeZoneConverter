function convertTime() {
  // Get the user's input
  let inputTime = document.getElementById("input-time").value;
  let inputTimeZone = document.getElementById("input-timezone").value;
  let outputTimeZone = document.getElementById("output-timezone").value;

  // Convert the input time to UTC
  let inputDate = new Date(inputTime + " " + inputTimeZone);
  let inputUtcOffset = inputDate.getTimezoneOffset() * 60 * 1000;
  let inputUtcTime = inputDate.getTime() + inputUtcOffset;

  // Convert the UTC time to the output time zone
  let outputDate = new Date(inputUtcTime);
  let outputUtcOffset = outputDate.getTimezoneOffset() * 60 * 1000;
  let outputUtcTime = outputDate.getTime() + outputUtcOffset;
  let outputTime = new Date(outputUtcTime).toLocaleTimeString("en-US", {timeZone: outputTimeZone});

  // Update the output time
  document.getElementById("output-time").innerHTML = outputTime;
}
