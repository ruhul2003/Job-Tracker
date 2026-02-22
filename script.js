var cards = document.querySelectorAll(".job-card");

var jobCount = document.getElementById("job-count");
var total = document.getElementById("total");
var interviewCount = document.getElementById("interview-count");
var rejectedCount = document.getElementById("rejected-count");

var interviewFilter = document.getElementById("interview-filter");
var rejectedFilter = document.getElementById("rejected-filter");
var allFilter = document.querySelector(".btn-primary");

var emptyMessage = document.getElementById("empty-message");

var jobs = [];

// store all cards in array
cards.forEach(function (card) {

  var job = {
    element: card,
    status: "none"
  };

  jobs.push(job);

  var interviewBtn = card.querySelector(".interview-btn");
  var rejectedBtn = card.querySelector(".rejected-btn");
  var deleteBtn = card.querySelector(".delete");

  var interviewToggle = card.querySelector(".interview-toggle");
  var rejectedToggle = card.querySelector(".rejected-toggle");
  var notApplied = card.querySelector(".notApplied");

  // interview click
  interviewBtn.addEventListener("click", function () {
    job.status = "interview";

    interviewToggle.classList.remove("hidden");
    rejectedToggle.classList.add("hidden");
    notApplied.classList.add("hidden");

    updateTotal();
  });

  // reject click
  rejectedBtn.addEventListener("click", function () {
    job.status = "rejected";

    rejectedToggle.classList.remove("hidden");
    interviewToggle.classList.add("hidden");
    notApplied.classList.add("hidden");

    updateTotal();
  });

  // delete card
  deleteBtn.addEventListener("click", function () {
    card.remove();

    for (var i = 0; i < jobs.length; i++) {
      if (jobs[i].element === card) {
        jobs.splice(i, 1);
        break;
      }
    }

    updateTotal();
  });

});

// update counts
function updateTotal() {
  var interview = 0;
  var rejected = 0;

  for (var i = 0; i < jobs.length; i++) {
    if (jobs[i].status === "interview") interview++;
    if (jobs[i].status === "rejected") rejected++;
  }

  total.innerHTML = jobs.length;
  jobCount.innerHTML = jobs.length;
  interviewCount.innerHTML = interview;
  rejectedCount.innerHTML = rejected;
}

// filter jobs
function filterJobs(type) {
  var visible = 0;

  for (var i = 0; i < jobs.length; i++) {

    if (type === "all" || jobs[i].status === type) {
      jobs[i].element.style.display = "block";
      visible++;
    } else {
      jobs[i].element.style.display = "none";
    }

  }

  // update job count based on visible cards
  jobCount.innerHTML = visible;

  // show empty message
  if (visible === 0) {
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.classList.add("hidden");
  }
}

// filter buttons
allFilter.addEventListener("click", function () {
  filterJobs("all");
});

interviewFilter.addEventListener("click", function () {
  filterJobs("interview");
});

rejectedFilter.addEventListener("click", function () {
  filterJobs("rejected");
});

// initial count
updateTotal();