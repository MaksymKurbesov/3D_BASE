window.addEventListener("load", () => {
  replaceImage();
  waitForAndRemoveButton();
});

function replaceImage() {
  const element = document.querySelector("[alt='onchain summer']");
  element.srcset = "./images/getstarted-hero-img.webp";
}

function waitForAndRemoveButton() {
  const intervalTime = 100; // Интервал проверки (в миллисекундах)
  const maxTime = 5000; // Максимальное время ожидания (5 секунд)
  const startTime = Date.now();

  // Функция для поиска и удаления кнопки
  function checkAndRemoveButton() {
    const buttons = document.querySelectorAll("button");
    const targetButton = Array.from(buttons).find((button) => {
      const span = button.querySelector("span");
      return span && span.textContent.trim() === "Connect";
    });

    if (targetButton) {
      console.log("Кнопка найдена и удалена:", targetButton);
      const button = document.createElement("button");
      button.textContent = "Connect";
      button.className =
        "open text-md px-4 py-2 whitespace-nowrap flex items-center justify-center disabled:opacity-40 disabled:pointer-events-none transition-all bg-blue text-white border border-blue hover:bg-blue-80 active:bg-[#06318E] text-md px-4 py-2 gap-3 rounded-full w-auto";
      const dataRkWrapper = document.querySelectorAll("[data-rk]");
      targetButton.remove();
      dataRkWrapper[1].appendChild(button);
      window.upgradeFinished = true;

      return; // Прекращаем выполнение, так как цель достигнута
    }

    // Проверяем, не истекло ли максимальное время
    if (Date.now() - startTime < maxTime) {
      setTimeout(checkAndRemoveButton, intervalTime);
    } else {
      console.log("Кнопка не найдена в течение 5 секунд.");
    }
  }

  // Запускаем первый вызов
  checkAndRemoveButton();
}
