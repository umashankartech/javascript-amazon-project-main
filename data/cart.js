export let cart =[];
export function addtocart(productId){
    let matchingItem = null;
    cart.forEach((item) => {
        if (productId === item.productId) {
            matchingItem = item;
        }
    });
    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
  };