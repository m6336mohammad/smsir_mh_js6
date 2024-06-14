# smsir_mh_js6

This package is for using SMS service from sms.ir should get API and templetId from sms.ir javaScript, ES6 support

After installation, go to package.json and add "type":"module".

## Test Resalt

npm test

PASS ./smsir_mh_js6.test.js
sendAlertSMSIR
√ should send a message successfully (33 ms)  
√ should handle a request error (130 ms)  
√ should handle a response error (12ms)  
Test Suites: 1 passed, 1 total  
Tests: 3 passed, 3 total  
Snapshots: 0 total
Time: 1.157 s
Ran all test suites.

## Author

Mohammad Hadi  
Email: mmm.6336@gmail.com

Donate address : TS3ZnWGHfDnW7FcG8p6BYrWAis2nzX3gDG //USDT TRC20

## Installation

To install the package, run:

```bash

#npm
npm install axios
npm install smsir_mh_js6


#yarn
yarn add axios
yarn add smsir_mh_js6


# Example use:

import SendAlertSMSIR from 'smsir_mh_js6';

const apiKey = '121212121212121212121';  //Example API Key
const to = '09100059323';  //Example Phone Number
const message = 'Hello,this test message!'; //Max 24 Character Length
const templateId = '750016';  //Example template ID

SendAlertSMSIR(to, message, apiKey, templateId);


```
