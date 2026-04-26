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
        document.getElementById("resultMessage").innerText =
            "Please select date and time first";
        return;
    }

    if (fromZone === toZone) {
        document.getElementById("resultMessage").innerText =
            "Both time zones are same";
        return;
    }

    let dateTimeString = date + "T" + time;

    let fromDate = new Date(dateTimeString);

    let converted = fromDate.toLocaleString("en-US", {
        timeZone: toZone
    });

    let fromName = getSelectedText("fromZone");
    let toName = getSelectedText("toZone");

    document.getElementById("resultMessage").innerText =
        "Conversion completed successfully";

    document.getElementById("fromName").innerText = fromName;
    document.getElementById("toName").innerText = toName;
    document.getElementById("originalTime").innerText = date + " " + time;
    document.getElementById("convertedTime").innerText = converted;

    document.getElementById("historyText").innerText =
        fromName + "--->" + toName;
}

function useCurrentTime() {
    let now = new Date();

    document.getElementById("date").value =
        now.toISOString().split("T")[0];

    document.getElementById("time").value =
        now.toTimeString().slice(0,5);
}

function swapZones() {
    let from = document.getElementById("fromZone");
    let to = document.getElementById("toZone");

    let temp = from.value;
    from.value = to.value;
    to.value = temp;
}

function resetAll() {
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";

    document.getElementById("resultMessage").innerText =
        "No conversion done yet.";

    document.getElementById("fromName").innerText = "-";
    document.getElementById("toName").innerText = "-";
    document.getElementById("originalTime").innerText = "-";
    document.getElementById("convertedTime").innerText = "-";

    document.getElementById("historyText").innerText =
        "Nothing converted yet.";
}