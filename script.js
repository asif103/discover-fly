function handleTicketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount>0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    let ticketTotal = 0;
    if (ticket == 'firstClass') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'economyClass') {
        ticketTotal = ticketNewCount * 100;
    }
    document.getElementById(ticket + '-total').value =  ticketTotal;

    calculateTotal();
}

function calculateTotal() {
    var subtotal = parseInt(document.getElementById('firstClass-total').value) + parseInt(document.getElementById('economyClass-total').value);
    document.getElementById('subtotal').innerText = subtotal;
    var vat = subtotal * 0.10;
    document.getElementById('vat').innerText = vat;
    var total = subtotal + vat;
    document.getElementById('total').innerText = total;
}

function bookingDetail() {
    document.getElementById('booking-detail').style.display = 'block';
    document.getElementById('total-firstclass-ticket').innerText = document.getElementById('firstClass-count').value;
    document.getElementById('total-economyclass-ticket').innerText = document.getElementById('economyClass-count').value;
    document.getElementById('show-subtotal').innerText = document.getElementById('subtotal').innerText;
    document.getElementById('show-vat').innerText = document.getElementById('vat').innerText;
    document.getElementById('show-total').innerText = document.getElementById('total').innerText;
}