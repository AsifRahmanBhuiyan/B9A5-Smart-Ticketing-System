// Seat Functionality
const seatPositions = document.querySelectorAll('.seat-positions');

for (let index = 0; index < seatPositions.length; index++) {
    const seatPosition = seatPositions[index];

    seatPosition.addEventListener("click", function () {

        // Select Seat 
        let selectedSeatCount = document.getElementById('selected-seat-count');
        let selectedSeatCountValue = parseInt(selectedSeatCount.innerText);
        if (seatPosition.classList.contains('bg-[#f7f8f8]') && selectedSeatCountValue < 4) {
            selectSeat(seatPosition);
        }
        // Deselect Seat
        else if (seatPosition.classList.contains('bg-[#1dd100]')) {
            deselectSeat(seatPosition);
        }
        else {
            alert("You can't select more than 4 tickets at a time!");
        }
    })

}


// Coupon Functionality
const couponApply = document.getElementById('coupon-apply');

couponApply.addEventListener("click", function () {
    const couponInput = document.getElementById('coupon-input');
    let selectedSeatCount = document.getElementById('selected-seat-count');
    let selectedSeatCountValue = parseInt(selectedSeatCount.innerText);

    if (couponInput.value === "NEW15" && selectedSeatCountValue === 4) {
        let grandTotalPrice = document.getElementById('grand-total-price');
        let grandTotalPriceValue = grandTotalPrice.innerText;
        let newGrandTotalPrice = grandTotalPriceValue - (grandTotalPriceValue * 0.15);
        grandTotalPrice.innerText = newGrandTotalPrice;

        const couponApplied = document.getElementById('coupon-applied');
        couponApplied.classList.add('hidden');
    }
    else if (couponInput.value === "Couple 20" && selectedSeatCountValue === 4) {
        let grandTotalPrice = document.getElementById('grand-total-price');
        let grandTotalPriceValue = grandTotalPrice.innerText;
        let newGrandTotalPrice = grandTotalPriceValue - (grandTotalPriceValue * 0.2);
        grandTotalPrice.innerText = newGrandTotalPrice;

        const couponApplied = document.getElementById('coupon-applied');
        couponApplied.classList.add('hidden');
    }
    else if (selectedSeatCountValue === 4) {
        alert("Enter a valid coupon");
    }

})



function inputCheck() {
    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber.value.length);

    let selectedSeatCount = document.getElementById('selected-seat-count');
    let selectedSeatCountValue = parseInt(selectedSeatCount.innerText);

    const nextButton = document.getElementById('next-button');
    console.log(nextButton);

    if (selectedSeatCountValue > 0 && phoneNumber.value.length > 0) {
        nextButton.classList.remove('bg-gray-300');
        nextButton.classList.add('bg-[#1dd100]');
    }
    else {
        nextButton.classList.remove('bg-[#1dd100]');
        nextButton.classList.add('bg-gray-300');
    }

}


function scrollInto() {
    var elmnt = document.getElementById('ticket-section');
    elmnt.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}

const buyTicket = document.getElementById("buy-ticket");
buyTicket.addEventListener("click", function () {
    buyTicket.scroll()
})
