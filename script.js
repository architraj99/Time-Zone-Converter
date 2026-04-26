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
        document.getElementById("resultMessage").innerText = "Please Select Date And Time First";
        return;
    }

    if (fromZone === toZone) {
        document.getElementById("resultMessage").innerText = "'From' and 'To' time zones are same"
        return;
    }

    let dateTimeString = date + "T" + time;

    let fromDate = new Date(dateTimeString);

    let converted = fromDate.toLocaleString("en-US", { 
            timeZone: toZone,
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
    });

    let original = fromDate.toLocaleString("en-US",
    {
        timeZone: fromZone,
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });

        let fromName = getSelectedText("fromZone");
        let toName = getSelectedText("toZone");

        document.getElementById("resultMessage").innerText = "Conversion Successful";

        document.getElementById("fromName").innerText = fromName;
        document.getElementById("toName").innerText = toName;
        document.getElementById("originalTime").innerText = original;
        document.getElementById("convertedTime").innerText = converted;
        document.getElementById("historyText").innerText = fromName + " to " + toName + " was converted recently.";
}

function useCurrentTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2,"0");
    let day = String(now.getDate()).padStart(2,"0");

    let hours = String(now.getHours()).padStart(2,"0");
    let minutes = String(now.getMinutes()).padStart(2,"0");
    document.getElementById("date").value = year + "-" + month + "-" + day;
    document.getElementById("time").value = hours + ":" + minutes;
    document.getElementById("resultMessage").innerText = "Current date and time added";
}

function swapZones() {
    let fromSelect = document.getElementById("fromZone");
    let toSelect = document.getElementById("toZone");

    let oldFrom = fromSelect.value;
    let oldTo = toSelect.value;

    fromSelect.value = oldTo;
    toSelect.value = oldFrom;
    document.getElementById("resultMessage").innerText = "Time Zones Swapped";
}