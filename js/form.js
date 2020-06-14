var formButton = document.querySelector('.hotel-btn');
var bookingForm = document.querySelector('.booking-form');

  bookingForm.classList.remove('form-open');
  bookingForm.classList.add('form-close');

formButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    bookingForm.classList.toggle('form-close');
    bookingForm.classList.toggle('form-open');
})
