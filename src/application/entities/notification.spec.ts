import { Content } from './content';
import { Notification } from './notification';

describe('Nofification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade'),
      category: 'friendship',
      recipientId: '123456',
    });

    expect(notification).toBeTruthy();
  });
});
