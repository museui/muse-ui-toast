import Vue from 'vue';
import MuseUI from 'muse-ui';
import Toast from '../src';
import getMessage from '../src/message';

Vue.use(MuseUI);
test('Test config', () => {
  const config = Toast.config({
    position: 'top',
    close: false,
    time: 1500
  });
  expect(config).toEqual({
    position: 'top',
    time: 1500,
    closeIcon: 'close',
    close: false,
    successIcon: 'check_circle',
    infoIcon: 'info',
    warningIcon: 'priority_high',
    errorIcon: 'warning'
  });
});

test('Test install', () => {
  Vue.use(Toast, {
    position: 'top'
  });
  expect(Toast.config().position).toBe('top');
});

test('Test message', () => {
  Toast.message('hello world');
  const message = getMessage();
  expect(message.messages.length).toBe(1);
  const item = message.messages[0];
  expect(item).toEqual({
    time: Toast.config().time,
    position: Toast.config().position,
    close: Toast.config().close,
    open: true,
    id: 'toast_id_20141223',
    message: 'hello world'
  });
  Toast.close(item.id);
  expect(item.open).toBe(false);
});
