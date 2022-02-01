import { LaptopList } from '../../classes';

const getSelectValue = (e: Event, laptopList: LaptopList) => {
  const select = e.target as HTMLSelectElement;
  const selectValue = select.value;

  laptopList.filterLaptopsByBrand(selectValue);
};

export default getSelectValue;
