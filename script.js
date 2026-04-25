function convertTime() {
    let fromZone = document.getElementById("fromZone").value;
    let toZone = document.getElementById("toZone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (date === "" || time === "") {
        document.getElementById("result").innerText = "Please Select Date And Time";
        return;
    }

    let dateTimeString = date + "T" + time;

    let fromDate = new Date(dateTimeString);

    let converted = fromDate.toLocaleString("en-US", {timeZone: toZone});

    document.getElementById("result").innerText = "Converted Time: " + converted;
}