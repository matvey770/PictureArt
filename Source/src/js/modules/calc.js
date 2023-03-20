import { postData } from "../services/requests";

const calc = (size, material, options, promo, result, arr) => {  //неплохо было бы вернуться и подключить цены из db.json
    const selectorSize = document.querySelector(size),
          selectorMaterial = document.querySelector(material),
          selectorOptions = document.querySelector(options),
          inputPromo = document.querySelector(promo),
          resultBlock = document.querySelector(result),
          btnOrder = document.querySelector('.button-order');

    let resultPrice = 0;

    function calcPrice() {
            resultPrice = Math.round(Number(selectorSize.value) * Number(selectorMaterial.value) + Number(selectorOptions.value));
            if (selectorSize.value == "" || selectorMaterial.value == "") {
                resultBlock.textContent = "Для расчета нужно выбрать размер картины и материал картины";
            } else if (inputPromo.value === "IWANTPOPART") {
                resultBlock.textContent = Math.round(resultPrice * 0.7);
                arr.price = resultPrice * 0.7;
                resultPrice = arr.price;
                arr.promo = true;
            } else {
                resultBlock.textContent = resultPrice;
                arr.promo = false;
            }
            return resultPrice;
    }

    selectorSize.addEventListener('change', () => {
        calcPrice();
        arr.size = selectorSize.value;
        arr.price = resultPrice;
        console.log(arr);
    });
    selectorMaterial.addEventListener('change', () => {
        calcPrice();
        arr.material = selectorMaterial.value;
        arr.price = resultPrice;
        console.log(arr);
    });
    selectorOptions.addEventListener('change', () => {
        calcPrice();
        arr.options = selectorOptions.value;
        arr.price = resultPrice;
        console.log(arr);
    });
    inputPromo.addEventListener('input', () => {
        calcPrice();
        arr.price = resultPrice;
        console.log(arr);
    });
};

export default calc;