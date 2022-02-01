import { LaptopList } from '../classes';

import { loadEvent, submitEvent, selectChangeEvent } from './events';

const runEvents = () => {
  const laptopList = new LaptopList();

  loadEvent(laptopList);
  submitEvent(laptopList);
  selectChangeEvent(laptopList);
};

export default runEvents;
