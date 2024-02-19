const seatPositions = document.querySelectorAll('.seat-positions');

for (let index = 0; index < seatPositions.length; index++) {
    const seatPosition = seatPositions[index];

    seatPosition.addEventListener("click", function () {

        // Select Seat 
        let selectedSeatCount = document.getElementById('selected-seat-count');
        let selectedSeatCountValue = parseInt(selectedSeatCount.innerText);
        console.log(selectedSeatCountValue);
        if (seatPosition.classList.contains('bg-[#f7f8f8]') && selectedSeatCountValue < 4) {
            selectSeat(seatPosition);
        }
        // Deselect Seat
        else if(seatPosition.classList.contains('bg-[#1dd100]')) {
            deselectSeat(seatPosition);
        }
        else{
            alert("You can't select more than 4 tickets at a time!");
        }
    })

}

