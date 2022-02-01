const openShoppingCart = () => {
  const $modalCart = document.getElementById('modalCart') as HTMLElement;

  $modalCart.classList.toggle('open');
};

export default openShoppingCart;
