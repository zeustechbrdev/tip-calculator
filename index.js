const calculatePercentage = (value, percentage) => {
  const percentageValue = (value / 100) * percentage;
  return percentageValue;
};

const calculateTip = (event) => {
  const tagTotalValue = document.getElementById("totalvalue");
  const tagTipvalue = document.getElementById("tipvalue");
  const tagOriginalValue = document.getElementById("originalvalue");
  event.preventDefault();
  console.log("TESTE");
  const formData = new FormData(event.target);
  const value = formData.get("value");
  const percentage = formData.get("percentage");
  const percentageValue = calculatePercentage(value, percentage);

  tagOriginalValue.textContent = value + "R$";
  tagTipvalue.textContent = percentageValue + "R$";
  tagTotalValue.textContent = `${Number(value) + percentageValue}R$`;

  console.log(value, percentage);
};

/*
        <h1 id="totalvalue" class="align-center mt-2">200R$</h1>
        <div class="flex gap-2 mt-4">
          <div>
            <p>Valor da gorjeta</p>
            <p id="tipvalue" class="mt-1">100 R$</p>
          </div>
          <div>
            <p>Valor original</p>
            <p id="originalvalue" class="mt-1">100 R$</p>
          </div>
*/
