const cards = document.querySelectorAll(".job-card");

const jobCount = document.getElementById("job-count");
const total = document.getElementById("total");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const deleteBtn = document.querySelectorAll(".delete");

// Function to recalculate counts based on current cards in DOM
function updateTotal() {
  const currentCards = document.querySelectorAll(".job-card");
  let interview = 0;
  let rejected = 0;

  currentCards.forEach(card => {
    const interviewToggle = card.querySelector(".interview-toggle");
    const rejectedToggle = card.querySelector(".rejected-toggle");

    if (interviewToggle && !interviewToggle.classList.contains("hidden")) {
      interview++;
    }
    if (rejectedToggle && !rejectedToggle.classList.contains("hidden")) {
      rejected++;
    }
  });

  interviewCount.innerHTML = interview;
  rejectedCount.innerHTML = rejected;
  total.innerHTML = interview + rejected;
  jobCount.innerHTML = currentCards.length;
}

// Delete button functionality
deleteBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".job-card").remove();
    updateTotal();
  });
});

// Initialize total on page load
updateTotal();

// Setup interview/rejected buttons for each card
cards.forEach(card => {
  let currentStatus = null; // "interview" | "rejected" | null

  const interviewBtn = card.querySelector(".interview-btn");
  const rejectedBtn = card.querySelector(".rejected-btn");
  const notApplied = card.querySelector(".notApplied");

  const interviewToggle = card.querySelector(".interview-toggle");
  const rejectedToggle = card.querySelector(".rejected-toggle");

  interviewBtn.addEventListener("click", () => {
    if (currentStatus === "interview") return;

    currentStatus = "interview";

    interviewToggle.classList.remove("hidden");
    rejectedToggle.classList.add("hidden");
    notApplied.classList.add("hidden");

    updateTotal();
  });

  rejectedBtn.addEventListener("click", () => {
    if (currentStatus === "rejected") return;

    currentStatus = "rejected";

    rejectedToggle.classList.remove("hidden");
    interviewToggle.classList.add("hidden");
    notApplied.classList.add("hidden");

    updateTotal();
  });
});