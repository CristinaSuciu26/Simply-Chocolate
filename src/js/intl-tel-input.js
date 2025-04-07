export const telInput = () => {
  const inputs = document.querySelectorAll(".phone-input"); // Select multiple elements

  inputs.forEach(input => {
    window.intlTelInput(input, {
      initialCountry: "us",
      separateDialCode: true,
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
  });
};
