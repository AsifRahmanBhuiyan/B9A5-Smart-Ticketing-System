function selectSeat(seatPosition) {
    seatPosition.classList.remove('bg-[#f7f8f8]');
    seatPosition.classList.add('bg-[#1dd100]');


    // Increase Select Seat Count
    let selectedSeatCount = document.getElementById('selected-seat-count');
    let selectedSeatCountValue = parseInt(selectedSeatCount.innerText);
    selectedSeatCountValue++;
    selectedSeatCount.innerText = selectedSeatCountValue;


    //Get Total Price
    let totalPrice = document.getElementById('total-price');
    let newTotalPrice = 550 * selectedSeatCountValue;
    totalPrice.innerText = newTotalPrice;

    if(selectedSeatCountValue === 4) {
        const couponApplication = document.getElementById('coupon-apply');
        couponApplication.classList.remove('bg-gray-300');
        couponApplication.classList.add('bg-[#1dd100]');
    }

    //Get Grand Total Price
    let grandTotalPrice = document.getElementById('grand-total-price');
    let newGrandTotalPrice = newTotalPrice;
    grandTotalPrice.innerText = newGrandTotalPrice;


    // Add Seat Number
    const seatNumber = document.createElement('p');
    seatNumber.innerText = seatPosition.innerText;
    const addSeat = document.getElementById('add-seat');
    addSeat.appendChild(seatNumber);

    // Add Seat Class
    const seatClass = document.createElement('p');
    seatClass.innerText = 'Economy';
    const addClass = document.getElementById('add-class');
    addClass.appendChild(seatClass);

    // Add Seat Price
    const seatPrice = document.createElement('p');
    seatPrice.innerText = '550';
    const addPrice = document.getElementById('add-price');
    addPrice.appendChild(seatPrice);

    // Decrease Available Seats
    let availableSeats = document.getElementById('available-seats');
    let availableSeatsValue = parseInt(availableSeats.innerText);
    availableSeatsValue--;
    availableSeats.innerText = availableSeatsValue;


}

function deselectSeat(seatPosition) {
    seatPosition.classList.remove('bg-[#1dd100]');
    seatPosition.classList.add('bg-[#f7f8f8]');


    // Decrease Select Seat Count
    let selectedSeatCount = document.getElementById('selected-seat-count');
    let selectedSeatCountValue = parseInt(selectedSeatCount.innerText);
    selectedSeatCountValue--;
    selectedSeatCount.innerText = selectedSeatCountValue;

    //Get Total Price
    let totalPrice = document.getElementById('total-price');
    let newTotalPrice = 550 * selectedSeatCountValue;
    totalPrice.innerText = newTotalPrice;

    if(selectedSeatCountValue !== 4) {
        const couponApplication = document.getElementById('coupon-apply');
        couponApplication.classList.remove('bg-[#1dd100]');
        couponApplication.classList.add('bg-gray-300');

        const couponApplied = document.getElementById('coupon-applied');
        couponApplied.classList.remove('hidden');
    }

    //Get Grand Total Price
    let grandTotalPrice = document.getElementById('grand-total-price');
    let newGrandTotalPrice = newTotalPrice;
    grandTotalPrice.innerText = newGrandTotalPrice;

    //Remove Seat Number
    const removeSeat = document.getElementById('add-seat');

    for (let index = 0; index < removeSeat.childNodes.length; index++) {
        const element = removeSeat.childNodes[index];
        if (element.innerText == seatPosition.innerText) {
            removeSeat.removeChild(element);
        }
    }

    // Remove Seat Class
    const removeClass = document.getElementById('add-class');
    removeClass.removeChild(removeClass.childNodes[1]);

    // Remove Seat Price
    const removePrice = document.getElementById('add-price');
    removePrice.removeChild(removePrice.childNodes[1]);


    // Increase Available Seats
    let availableSeats = document.getElementById('available-seats');
    let availableSeatsValue = parseInt(availableSeats.innerText);
    availableSeatsValue++;
    availableSeats.innerText = availableSeatsValue;

}