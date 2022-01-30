import { LaptopList } from '../classes';

import { loadEvent } from './events';

const runEvents = () => {
  const laptopList = new LaptopList();

  loadEvent(laptopList);
};

export default runEvents;
