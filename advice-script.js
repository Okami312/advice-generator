const generateAdviceButton = document.querySelector(".generate-advice-button");
const generateAdviceButtonIcon = document.querySelector(
  ".generate-advice-button img"
);
const adviceIdElement = document.querySelector(".advice-id");
const adviceContentElement = document.querySelector(".advice-content");
const loadingSpinner = document.querySelector(".spinner");

const handleGenerateAdvice = async () => {
  // 1. show loading spinner
  loadingSpinner.classList.remove("hide");
  generateAdviceButtonIcon.classList.add("hide");

  // 2. request for a new advice
  const response = await fetch(
    `https://api.adviceslip.com/advice?timestamp=${Date.now()}`,
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();

  // 3. show the new advice in page
  adviceIdElement.innerText = data.slip.id;
  adviceContentElement.innerText = `"${data.slip.advice}"`;

  // 4. hide loading spinner
  loadingSpinner.classList.add("hide");
  generateAdviceButtonIcon.classList.remove("hide");
};

generateAdviceButton.addEventListener("click", handleGenerateAdvice);
