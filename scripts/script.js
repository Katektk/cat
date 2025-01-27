// Получаем элементы стрелок
const leftPanelArrow = document.querySelector('.arrowPanelLeft');
const rightPanelArrow = document.querySelector('.arrowPanelRight');

// Получаем секции вкладок
const tabs = document.querySelectorAll('.cards > div');

// Текущий индекс активной вкладки
let currentTabIndex = 0;

// Функция для обновления видимости вкладок
function updateTabs(index) {
  tabs.forEach((tab, i) => {
    tab.style.display = i === index ? 'block' : 'none';
  });
}

// Обработчик для левой стрелки
leftPanelArrow.addEventListener('click', () => {
  currentTabIndex = (currentTabIndex - 1 + tabs.length) % tabs.length;
  updateTabs(currentTabIndex);
});

// Обработчик для правой стрелки
rightPanelArrow.addEventListener('click', () => {
  currentTabIndex = (currentTabIndex + 1) % tabs.length;
  updateTabs(currentTabIndex);
});

// Инициализация — показываем первую вкладку
updateTabs(currentTabIndex);
 document.addEventListener("DOMContentLoaded", () => {
    // Переменные для слоев кота
    const layers = {
        body: document.getElementById("body"),
        eys: document.getElementById("eys"),
        ears: document.getElementById("ears"),
        scarf: document.getElementById("scarf"),
        tail: document.getElementById("tail"),
    };

    // Текущая поза кота
    let currentPose = "pose1";

    // Обработчик клика для всех кнопок
    document.querySelectorAll(".card1, .card2, .card3, .card4").forEach((button) => {
        button.addEventListener("click", () => {
            const layer = button.dataset.layer; // Какой слой изменяем (body, eys, ears и т.д.)
            const pose = button.dataset.pose;   // Поза (только для хвоста)
            const img = button.querySelector("img"); // Изображение внутри кнопки

            // Если меняем хвост, учитываем текущую позу
            if (layer === "tail") {
                if (pose === currentPose) {
                    layers.tail.src = img.src;
                }
            } 
            // Меняем остальные слои
            else if (layers[layer]) {
                layers[layer].src = img.src;
            }
        });
    });
    document.querySelectorAll(".card1[data-layer='body']").forEach((button) => {
      button.addEventListener("click", () => {
          const pose = button.dataset.pose; // Новая поза
          currentPose = pose;
  
          // Убедимся, что панель хвостов остается видимой
          const tailPanel = document.querySelector(".cardWool");
          if (tailPanel) {
              tailPanel.style.display = "block"; // Панель хвостов всегда видима
          }
  
          // Показываем только хвосты для текущей позы
          document.querySelectorAll(".card1[data-layer='tail']").forEach((tailButton) => {
              if (tailButton.dataset.pose === pose) {
                  tailButton.style.display = "inline-block"; // Показываем хвосты текущей позы
              } else {
                  tailButton.style.display = "none"; // Скрываем хвосты других поз
              }
          });
  
          // Меняем тело кота
          
  
          // Меняем хвост, если доступен для текущей позы
          const tailButton = document.querySelector(
              `.card1[data-layer='tail'][data-pose='${pose}']`
          );
          if (tailButton) {
              layers.tail.src = tailButton.querySelector("img").src;
          }
      });
  });
 

  // Индекс текущего персонажа
  let currentCharacterIndex = 0;
  
  // Массив с данными персонажей (разные позы и аксессуары)
  const characters = [
      {
          elipse: "image/elipse.svg",
          body: "image/body_1.svg",
          eyes: "image/eys_1.svg",
          ears: "image/ears_1.svg",
          scarf: "image/scarf_2.svg",
          tail: "image/tail_1_pose1brown.svg"
      },
      {
        elipse: "image/elipse.svg",
        body: "image/body_1black.svg",
        eyes: "image/eys_2black.svg",
        ears: "image/ears_2.svg",
        scarf: "image/scarf_2pink.svg",
        tail: "image/tail_2_pose1black.svg"
     },
      {
          elipse: "image/elipse.svg",
          body: "image/body_1grey.svg",
          eyes: "image/eys_2blue.svg",
          ears: "image/ears_2.svg",
          scarf: "image/scarf_1blue.svg",
          tail: "image/tail_2_pose1grey.svg"
      }
      
     
  ];
  
  // Функция для смены персонажа при клике на стрелку
  function changeCharacter(direction) {
      console.log('Button clicked, direction:', direction);
  
      // Логика изменения индекса персонажа
      if (direction === 'left') {
          currentCharacterIndex = (currentCharacterIndex === 0) ? characters.length - 1 : currentCharacterIndex - 1;
      } else if (direction === 'right') {
          currentCharacterIndex = (currentCharacterIndex === characters.length - 1) ? 0 : currentCharacterIndex + 1;
      }
  
      console.log("New character index:", currentCharacterIndex);
  
      const character = characters[currentCharacterIndex];
  
      // Обновление изображений
      document.getElementById('elipse').src = character.elipse;
      document.getElementById('body').src = character.body;
      document.getElementById('eys').src = character.eyes;
      document.getElementById('ears').src = character.ears;
      document.getElementById('scarf').src = character.scarf;
      document.getElementById('tail').src = character.tail;
  }
  document.querySelector('.left-arrow').addEventListener('click', () => {
    console.log('Left arrow clicked');
    changeCharacter('left');
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    console.log('Right arrow clicked');
    changeCharacter('right');
});

});