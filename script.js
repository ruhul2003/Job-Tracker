const interview_btn = document.getElementById("interview-btn");
const rejected_btn = document.getElementById("rejected-btn");
const job_count = document.getElementById("job-count");

const toggle = document.getElementById("interview-toggle");
const toggle2 = document.getElementById("rejected-toggle");

const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");


// Delete function

const card = document.getElementById("job-card");
const delete_btn = document.getElementById("delete");
delete_btn.addEventListener("click", function () {
    card.remove();
    total.innerText = parseInt(total.innerText) - 1;
    job_count.innerText = parseInt(job_count.innerText) - 1;
})

let currentStatus = null; // "interview" | "rejected" | null

interview_btn.addEventListener("click", function () {

    if (currentStatus === "interview") return;

    if (currentStatus === "rejected") {
        rejectedCount.innerText =
            parseInt(rejectedCount.innerText) - 1;
    }

    interviewCount.innerText =
        parseInt(interviewCount.innerText) + 1;

    currentStatus = "interview";

    toggle.classList.remove("hidden");
    toggle2.classList.add("hidden");

    Number(total.innerText = parseInt(interviewCount.innerText) + parseInt(rejectedCount.innerText));
    Number(job_count.innerText = parseInt(interviewCount.innerText) + parseInt(rejectedCount.innerText));
});

rejected_btn.addEventListener("click", function () {

    if (currentStatus === "rejected") return;

    if (currentStatus === "interview") {
        interviewCount.innerText =
            parseInt(interviewCount.innerText) - 1;
    }

    rejectedCount.innerText =
        parseInt(rejectedCount.innerText) + 1;

    currentStatus = "rejected";

    toggle2.classList.remove("hidden");
    toggle.classList.add("hidden");

    Number(total.innerText = parseInt(interviewCount.innerText) + parseInt(rejectedCount.innerText));
    Number(job_count.innerText = parseInt(interviewCount.innerText) + parseInt(rejectedCount.innerText));
});

const rejectedList = [];
const interviewList = [];

if(currentStatus === "interview"){
    interviewList.push(card);
    console.log(interviewList);
}else if(currentStatus === "rejected"){
    rejectedList.push(card);
    console.log(rejectedList);
}

const filterInterview = document.getElementById("interview-filter");
const filterRejected = document.getElementById("rejected-filter");
const filterAll = document.getElementById("all-filter");

filterAll.addEventListener("click", function () {
    card.classList.remove("hidden");
});

filterInterview.addEventListener("click", function () {
    card.classList.remove("hidden");
    for (let i = 0; i < rejectedList.length; i++) {
        rejectedList[i].classList.add("hidden");
    }
});

filterRejected.addEventListener("click", function () {
    card.classList.remove("hidden");
    for (let i = 0; i < interviewList.length; i++) {
        interviewList[i].classList.add("hidden");
    }
});