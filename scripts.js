// Пример обработки количества билетов на странице оплаты
const ticketCount = new URLSearchParams(window.location.search).get('tickets') || 1;
document.getElementById('ticketCount').textContent = ticketCount;

function initiatePayment() {
    // Здесь будет логика для начала оплаты через API (например, CoinGate)
    alert('Начинаем оплату!');
}
