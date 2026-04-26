function getSelectedText(selectId) {
    let select = document.getElementById(selectId);
    return select.options[select.selectedIndex].text;
}

function convertTime() {
    let fromZone = document.getElementById("fromZone").value;
    let toZone = document.getElementById("toZone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (date === "" || time === "") {
        document.getElementById("resultMessage").innerText = "Please Select Date And Time";
        return;
    }

    let dateTimeString = date + "T" + time;

    let fromDate = new Date(dateTimeString);

    let converted = fromDate.toLocaleString("en-US", { 
        timeZone: toZone,
        dateStyle: "medium",
        timeStyle: "short"
    });

        let fromName = getSelectedText("fromZone");
        let toName = getSelectedText("toZone");

        document.getElementById("resultMessage").innerText = "Converesion Completed";

        document.getElementById("fromName").innerText = fromName;
        document.getElementById("toName").innerText = toName;
        document.getElementById("originalTime").innerText = date + " " + time;
        document.getElementById("convertedTime").innerText = converted;
        document.getElementById("historyText").innerText = fromName + " to " + toName + " was converted recently.";
}