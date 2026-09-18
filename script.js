const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const success = document.getElementById("form-success");

document.querySelectorAll(".details").forEach(btn => {
  btn.addEventListener("click", () => {
    modalTitle.textContent = btn.dataset.package + " — Detailed Itinerary";
    success.classList.remove("show");
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

document.querySelector(".close").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("lead-form").addEventListener("submit", e => {
  e.preventDefault();
  success.classList.add("show");
  e.target.reset();
});
