let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick =() => {
    login.classList.toggle('active');
}
let navbar =document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
const swiper = new Swiper('.gallery-slider', {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
    }
})
});

function showDonationForm() {
  document.getElementById('donationForm').style.display = 'flex';
}

document.getElementById('donationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('donorName').value;
  const amount = document.getElementById('donationAmount').value;
  const contact = document.getElementById('donorContact').value;

  // Show QR code
  document.getElementById('qrCode').style.display = 'block';

  // Create CSV content
  const csv = "Name,Amount,Contact\n" + `${name},${amount},${contact}\n`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.setAttribute("href", url);
  link.setAttribute("download", "donor_details.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Optionally reset the form
  document.getElementById('donationForm').reset();
});
