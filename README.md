# Internet Banking API

## Overview
This is a simple API for core internet banking functionalities, designed to handle secure and reliable transaction processing. The purpose of creating this API was to practice deploying the app using OpenShift.

## Features

- Fund transfer between accounts
- Online payments
- Balance check

## Technologies Used
- Python
- Flask
- OpenShift for deployment


## Getting Started

### Prerequisites
- Python 3.x
- Flask
- OpenShift CLI

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/internet-banking-app.git
   cd InternetBankingApp-OpenShift

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   

### Running the application

To run the application locally use:
    ```bash
   flask run

## Deployment on OpenShift

1. **Login to your OpenShift cluster:**
   ```bash
   oc login <your-cluster-url>

2. **Create a new project**:
   ```bash
   oc new-project internet-banking

3. **Deploy the application using the Git repository**:
   ```bash
   oc new-app your-username/internet-banking-app

4. **Expose the service**:
   ```bash
   oc expose svc/internet-banking-api


## API Endpoints

### Banking Operations
    ```POST /api/fund-transfer - Transfer funds between accounts```
    
    ```POST /api/online-payment - Make an online payment```
    
    ```GET /api/balance-check - Check account balance```

## Contributing

Contributions are welcome! Please create a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

Flask for the web framework

OpenShift for the deployment platform

