import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");
const inputEmailEl = formEl.querySelector('input[name="email"]');
const inputMessageEl = formEl.querySelector('textarea[name="message"]');

const FORM_DATA_STORAGE_KEY = "feedback-form-state";

const formData = {};

const onFormSubmit = (e) => {
  e.preventDefault();

  console.log(localStorage.getItem(FORM_DATA_STORAGE_KEY));

  localStorage.removeItem(FORM_DATA_STORAGE_KEY);

  e.target.reset();
};

const onFormInput = (e) => {
  formData[e.target.name] = e.target.value;
  const formDataJSON = JSON.stringify(formData);

  localStorage.setItem(FORM_DATA_STORAGE_KEY, formDataJSON);
};

const formDataSaved = () => {
  const formDataParsJSON = JSON.parse(
    localStorage.getItem(FORM_DATA_STORAGE_KEY)
  );

  if (formDataParsJSON) {
    inputEmailEl.value = formDataParsJSON.email || "";
    inputMessageEl.value = formDataParsJSON.message || "";
  }
};

formEl.addEventListener("submit", onFormSubmit);

formEl.addEventListener("input", throttle(onFormInput, 500));

formDataSaved();
