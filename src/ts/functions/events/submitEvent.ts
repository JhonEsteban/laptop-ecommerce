import { LaptopList } from '../../classes';

import getInputValue from '../form/getInputValue';

const submitEvent = (laptopList: LaptopList) => {
  const $form = document.getElementById('form') as HTMLFormElement;

  $form.addEventListener('submit', (e) => {
    e.preventDefault();

    getInputValue(laptopList, $form);
  });
};

export default submitEvent;
