import { LaptopList } from '../../classes';

const loadEvent = (laptopList: LaptopList) => {
  window.addEventListener('DOMContentLoaded', () => {
    laptopList.loadLaptops();
  });
};

export default loadEvent;
