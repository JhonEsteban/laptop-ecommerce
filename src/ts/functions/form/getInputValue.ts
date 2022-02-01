import { LaptopList } from '../../classes';

const getInputValue = (laptopList: LaptopList, $form: HTMLFormElement) => {
  const $input = document.getElementById('formSearchInput') as HTMLInputElement;
  const inputValue = $input.value.trim();

  laptopList.searchLaptopsByName(inputValue);
  $form.reset();
};

export default getInputValue;
