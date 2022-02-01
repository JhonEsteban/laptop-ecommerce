import { LaptopList } from '../../classes';

import getSelectValue from '../form/getSelectValue';

const selectChangeEvent = (laptopList: LaptopList) => {
  const $select = document.getElementById('formSelect') as HTMLSelectElement;

  $select.addEventListener('change', (e: Event) => {
    getSelectValue(e, laptopList);
  });
};

export default selectChangeEvent;
