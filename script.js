let vacationType;

while (vacationType !== ("musical" || "tropical" || "adventurous")) {
    vacationType = prompt ("What type of vacation do you want to go on- musical, tropical or adventurous?");

    if (vacationType === "musical") {
        var destination = ("New Orleans");
        break
    } else if (vacationType === "tropical") {
        destination = ("Beach Vacation in Mexico");
        break
    } else if (vacationType === "adventurous") {
        destination = ("Whitewater Rafting the Grand Canyon");
        break
    } else {
        alert ("Please choose musical, tropical, or adventurous.");
    }
}

console.log(destination)

let groupSize = 0;

while (isNaN(groupSize) || groupSize <=0) { 
    groupSize = prompt ("How many are in your group?")

    if (groupSize <=2) {
        var transportation = ("First Class Flight")
    } else if (groupSize <= 5) {
        transportation = ("Helicopter")
    } else if (groupSize >= 6) {
        transportation = ("Charter Flight")
    } else {
        alert ("Please use a numeric value greater than 0.")
    }
}

console.log(transportation)


let output = alert ("Since you’re a group of " + groupSize + " going on a " + vacationType +
" vacation, you should take a " + transportation + " to " + destination + ".");

console.log(output)