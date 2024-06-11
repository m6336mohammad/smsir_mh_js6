import axios from 'axios';

const sendAlertSMSIR = async (to, message, apiKey, templateId) => {
  // Prepare the data payload
  const data = JSON.stringify({
    mobile: to,
    templateId: templateId,
    parameters: [
      { name: 'CONTACTS', value: message }
    ],
  });

  // Configure the request
  const config = {
    method: 'post',
    url: 'https://api.sms.ir/v1/send/verify',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'text/plain',
      'X-API-KEY': apiKey
    },
    data: data
  };

  // Send the request and handle the response
  try {
    const response = await axios(config);
    console.info(JSON.stringify(response.data));
  } catch (error) {
    // Enhanced error logging for better debugging
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
  }
};

export default sendAlertSMSIR;

// Example usage (commented out):
// sendAlertSMSIR("09100059323", "35f389", "your_api_key_here", "750016");
