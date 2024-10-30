#!/usr/bin/env python3





from flask import Flask, jsonify, request, render_template


app = Flask(__name__, static_folder = 'static', template_folder = 'templates')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/balance', methods=['GET'])
def get_balance():
    # Placeholder response
    balance = {"account_balance": 1000.0}
    return jsonify(balance)

@app.route('/api/transfer', methods=['POST'])
def transfer():
    data = request.json
    # Extract details from request data
    amount = data.get('amount')
    recipient_account = data.get('recipient_account')
    # Placeholder for transaction processing
    response = {"status": "success", "message": f"{amount} transferred to {recipient_account}"}
    return jsonify(response)

@app.route('/api/payment', methods=['POST'])
def make_payment():
    data = request.json
    amount = data.get('amount')
    merchant = data.get('merchant')
    # Placeholder for payment processing
    response = {"status": "success", "message": f"Payment of {amount} made to {merchant}"}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)

