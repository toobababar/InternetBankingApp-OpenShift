// Function to fetch and display account balance
async function getBalance() {
    try {
        const response = await fetch('/api/balance');
        const data = await response.json();
        document.getElementById('balance').innerText = `Balance: $${data.account_balance}`;
    } catch (error) {
        console.error('Error fetching balance:', error);
        document.getElementById('balance').innerText = 'Error fetching balance';
    }
}

// Function to handle fund transfer
async function makeTransfer() {
    const amount = document.getElementById('amount').value;
    const recipientAccount = document.getElementById('recipient').value;

    try {
        const response = await fetch('/api/transfer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, recipient_account: recipientAccount })
        });
        const data = await response.json();
        document.getElementById('transferResult').innerText = data.message;
    } catch (error) {
        console.error('Error making transfer:', error);
        document.getElementById('transferResult').innerText = 'Error processing transfer';
    }
}

// Function to handle payments
async function makePayment() {
    const amount = document.getElementById('payAmount').value;
    const merchant = document.getElementById('merchant').value;

    try {
        const response = await fetch('/api/payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, merchant })
        });
        const data = await response.json();
        document.getElementById('paymentResult').innerText = data.message;
    } catch (error) {
        console.error('Error making payment:', error);
        document.getElementById('paymentResult').innerText = 'Error processing payment';
    }
}

