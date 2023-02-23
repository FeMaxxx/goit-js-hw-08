import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");

const FORM_DATA_STORAGE_KEY = "feedback-form-state";

const onFormSubmit = (e) => {
  e.preventDefault();

  console.log(localStorage.getItem(FORM_DATA_STORAGE_KEY));

  localStorage.removeItem(FORM_DATA_STORAGE_KEY);

  e.target.reset();
};

const onFormInput = () => {
  const formData = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  };
  const formDataJSON = JSON.stringify(formData);

  localStorage.setItem(FORM_DATA_STORAGE_KEY, formDataJSON);
};

const formDataSaved = () => {
  const formDataParsJSON = JSON.parse(
    localStorage.getItem(FORM_DATA_STORAGE_KEY)
  );

  if (formDataParsJSON) {
    formEl.elements.email.value = formDataParsJSON.email || "";
    formEl.elements.message.value = formDataParsJSON.message || "";
  }
};

formEl.addEventListener("submit", onFormSubmit);
formEl.addEventListener("input", throttle(onFormInput, 500));

formDataSaved();
