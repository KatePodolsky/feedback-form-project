import { Stack, alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Material.css';
import s from './Pnotify.module.scss'

function pnotifyMessage(type,alertType) {
   if (typeof window === 'undefined') {
    window = new Stack({
      dir1: 'down',
      dir2: 'right',
      firstpos1: 25,
      firstpos2: 25,
      push: 'top',
      maxStrategy: 'close'
    });
  }

    const opts = {
        title: 'Info',
        text: `message`,
        delay: 6000,
        addClass: s.optsStylesSuccess,
    };

    const optsError = {
        title: 'Error',
        text: `message`,
        delay: 6000,
        addClass: s.optsStylesSuccess,
    };

    switch (type) {
    case 'confirmation':
      opts.title = 'Thank you,';
      opts.text = 'we will contact you as soon as possible.';
        break;
    case 'sendingError':
      optsError.title = 'Sorry,';
      optsError.text = 'something went wrong, the message was not sent';
        break;
  }
  switch (alertType) {
      case 'opts':
          alert(opts);
          break;
      case 'optsError':
          alert(optsError);
          break;
  }
}
export{ pnotifyMessage }