function playVideo() {
        const container = document.querySelector(".video-thumbnail");
        container.innerHTML = `
      <iframe
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/nk4RL5OZzqs?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style="width: 100%; display: block; max-width: 100%;"
      ></iframe>
    `;
      }

document.addEventListener("DOMContentLoaded", function () {
  const openCouponPopupBtn = document.getElementById("openCouponPopup");
  const couponPopup = document.getElementById("couponPopup");

  openCouponPopupBtn.addEventListener("click", function (event) {
    event.preventDefault();
    couponPopup.style.display = "flex";
  });

  window.addEventListener("click", function (event) {
    if (event.target == couponPopup) {
      couponPopup.style.display = "none";
    }
  });
});