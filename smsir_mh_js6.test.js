import sendAlertSMSIR from './smsir_mh_js6.js';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('sendAlertSMSIR', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it('should send a message successfully', async () => {
    const to = '09100059323';
    const message = 'Hello,this test message!';
    const apiKey = 'test_api_key';
    const templateId = '750016';

    mock.onPost('https://api.sms.ir/v1/send/verify').reply(200, { success: true });

    await sendAlertSMSIR(to, message, apiKey, templateId);

    expect(mock.history.post.length).toBe(1);
    const requestData = JSON.parse(mock.history.post[0].data);
    expect(requestData).toEqual({
      mobile: to,
      templateId: templateId,
      parameters: [
        { name: 'CONTACTS', value: message }
      ],
    });
  });

  it('should handle a request error', async () => {
    const to = '09100059323';
    const message = 'Hello,this test message!';
    const apiKey = 'test_api_key';
    const templateId = '750016';

    mock.onPost('https://api.sms.ir/v1/send/verify').networkError();

    await sendAlertSMSIR(to, message, apiKey, templateId);

    expect(mock.history.post.length).toBe(1);
  });

  it('should handle a response error', async () => {
    const to = '09100059323';
    const message = 'Hello,this test message!';
    const apiKey = 'test_api_key';
    const templateId = '750016';

    mock.onPost('https://api.sms.ir/v1/send/verify').reply(400, { error: 'Bad Request' });

    await sendAlertSMSIR(to, message, apiKey, templateId);

    expect(mock.history.post.length).toBe(1);
  });
});
