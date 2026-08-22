const expenseRadio = document.querySelector("#expense-radio");
const incomeRadio = document.querySelector("#income-radio");
const itemName = document.querySelector("#item-name");
const itemQty = document.querySelector("#item-qty");
const amount = document.querySelector("#amount");
const src = document.querySelector("#src");
const expenseType = document.querySelector("#expense-type");
const date = document.querySelector("#date");
const note = document.querySelector("#note");
const summary = document.querySelector("#transaction-summary");
const history = document.querySelector("#history-summary");
const incomeGroup = document.querySelector("#income-wrapper");
const expenseGroup = document.querySelector("#expense-wrapper");

const toggleFields = function () {
  if (incomeRadio.checked) {
    incomeGroup.hidden = false;
    expenseGroup.hidden = true;
  } else if (expenseRadio.checked) {
    expenseGroup.hidden = false;
    incomeGroup.hidden = true;
  } else {
    incomeGroup.hidden = true;
    expenseGroup.hidden = true;
  }
};
toggleFields();

incomeRadio.addEventListener("change", toggleFields);
expenseRadio.addEventListener("change", toggleFields);
