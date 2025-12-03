// Smooth fade-in effect
$(document).ready(function () {
    $("body").hide().fadeIn(700);
});

// ------------------------ PROFILE FORM VALIDATION + localStorage ---------------------
$("#profileForm").on("submit", function (e) {
    e.preventDefault();

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let phone = $("#phone").val().trim();
    let cls = $("#class").val().trim();

    if (name === "") {
        alert("Name is required!");
        return;
    }
    if (!email.includes("@")) {
        alert("Enter a valid email!");
        return;
    }
    if (isNaN(phone) || phone === "") {
        alert("Phone must be numeric!");
        return;
    }

    let student = { name, email, phone, class: cls };
    localStorage.setItem("studentProfile", JSON.stringify(student));

    $("#msg").html("Profile saved successfully!");
});

// ------------------------ COURSE SEARCH FILTER --------------------------
$("#search").on("keyup", function () {
    let value = $(this).val().toLowerCase();

    $(".course-box").filter(function () {
        $(this).toggle($(this).text().toLowerCase().includes(value));
    });
});

// ------------------------ RESULT CALCULATION --------------------------
$("#resultForm").on("submit", function (e) {
    e.preventDefault();

    let m1 = parseFloat($("#sub1").val());
    let m2 = parseFloat($("#sub2").val());
    let m3 = parseFloat($("#sub3").val());

    let total = m1 + m2 + m3;
    let percentage = (total / 300) * 100;
    let grade = "";

    if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "F";

    $("#resultOutput").html(`
        <b>Total:</b> ${total}<br>
        <b>Percentage:</b> ${percentage.toFixed(2)}%<br>
        <b>Grade:</b> ${grade}
    `);
});
