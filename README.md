# Tic Tac Toe

Demo: <a href="https://hellsgor.github.io/tic-tac-toe/" target="_blank">https://hellsgor.github.io/tic-tac-toe/</a>

---

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61dafb" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007acc?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-593d88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Headless_UI-000000?style=for-the-badge" alt="Headless UI" />
  <img src="https://img.shields.io/badge/Heroicons-000000?style=for-the-badge" alt="Heroicons" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier" />
</p>

## Фичи | Features

*in Russian*

- **Классическая игра 3x3** – реализация популярной игры «крестики-нолики» на поле 3x3 для двух игроков (X и O) на одном устройстве. Игроки ходят по очереди.
- **Переключение ходов** – после каждого хода автоматически сменяется текущий игрок (X ⇄ O).
- **Логика победы и ничьей** – после каждого хода осуществляется проверка всех выигрышных комбинаций. Если один из игроков заполнил ряд из трех символов – игра завершается победой этого игрока. Если все клетки заполнены и ни одной выигрышной комбинации нет – фиксируется ничья.
- **Подсветка победной комбинации** – при победе три клетки, образующие победный ряд, подсвечиваются цветом (для X и O – разный оттенок фона, соответствующий их символу).
- **Отображение статуса игры** – в интерфейсе отображается текущий статус: чей сейчас ход (игрок X или O), порядковый номер хода, а по окончании игры выводится сообщение о результате (победа X/O или ничья Draw).
- **Ограничение времени на ход** – каждый ход ограничен по времени (примерно 10 секунд). Таймер отображается в интерфейсе рядом с номером хода. Если игрок не успевает сделать ход до истечения времени, ему автоматически засчитывается техническое поражение (победа присуждается оппоненту).
- **Сброс и новая игра** – после окончания партии доступны кнопки Play again («сыграть ещё раз») и New game («новая игра»). При бездействии новая партия запускается автоматически через ~10 секунд.
- **Информация о игроках** – интерфейс отображает профили двух игроков с именами, рейтингом и символом (X или O).

*in English*

- **Classic 3x3 Game** – implementation of the popular tic-tac-toe game on a 3x3 grid for two players (X and O) on a single device. Players take turns.
- **Turn Switching** – after each move, the active player automatically switches (X ⇄ O).
- **Win and Draw Logic** – after every move, all winning combinations are checked. If a player fills a row of three symbols, the game ends with that player’s victory. If all cells are filled without any winner – the game ends in a draw.
- **Winning Combination Highlight** – the three cells forming the winning row are highlighted with a background color (different for X and O).
- **Game Status Display** – the interface shows the current status: whose turn it is (X or O), the move number, and after the game ends, a message about the result (winner X/O or draw).
- **Turn Time Limit** – each move is time-limited (approx. 10 seconds). A countdown timer is shown in the UI. If a player fails to make a move in time, they forfeit, and the opponent wins.
- **Reset and New Game** – after a game ends, "Play again" and "New game" buttons are available. If no action is taken, a new game starts automatically after ~10 seconds.
- **Player Info** – the interface shows profiles for both players, including names, rating, and symbols (X or O).

### Технологический стек | Tech Stack

- Next.js
- React
- TypeScript
- Redux Toolkit + React-Redux
- Tailwind CSS
- Headless UI
- Heroicons
- ESLint + Prettier

### Структура проекта | Project Structure

```python
tic-tac-toe/
├── src/
│   ├── app/                 # Next.js App Router: страницы и общий макет приложения
│   │   ├── layout.tsx       # Корневой компонент макета (оформление <html>, <body>), подключает глобальные стили, провайдер хранилища и шапку
│   │   ├── page.tsx         # Главная страница приложения – игровое поле и информационная панель
│   │   ├── StoreProvider.tsx# Компонент-провайдер Redux Store для App Router (обёртка над React-Redux Provider)
│   │   └── globals.css      # Глобальные стили (подключение Tailwind CSS, определение CSS-переменных темы)
│   ├── components/          # Общие компоненты приложения (не зависят от конкретной логики игры)
│   │   ├── Header/          # Шапка приложения с логотипом и профилем пользователя
│   │   └── Player/          # Компоненты для отображения профиля игрока (аватар, имя, рейтинг)
│   ├── lib/                 # Логика приложения и хранилище состояний
│   │   ├── store.ts         # Конфигурация Redux Store (собранные редьюсеры)
│   │   ├── reducers.ts      # Корневой редьюсер, подключает слайсы (игровой reducer и др.)
│   │   ├── hooks.ts         # Вспомогательные хуки `useAppDispatch`, `useAppSelector` для типизированного доступа к Redux
│   │   └── features/        # Реализация функциональных модулей (фич). В данном проекте основная фича – игра Tic Tac Toe
│   │       └── game/        # Модуль игры крестики-нолики
│   │           ├── game.ts  # Redux-slice игры: начальное состояние, reducers (ход, победа, ничья, сброс и т.д.)
│   │           ├── selectors.ts  # Селекторы для выборки данных игры из состояния (например, состояние конкретной клетки)
│   │           ├── thunks/       # Thunk-функции (асинхронная или комплексная логика):
│   │           │   └── checkGame.ts  # Проверка состояния игры после каждого хода (выявление победы или ничьи)
│   │           ├── hooks/          # Специфичные хуки для игровой логики:
│   │           │   ├── useDoMove.ts    # Хук для выполнения хода: обрабатывает нажатие на клетку (обновляет состояние и запускает проверки)
│   │           │   └── useMoveTimer.ts # Хук таймера хода: отсчитывает время на ход, при нуле инициирует техническую победу другого игрока
│   │           └── components/     # UI-компоненты, связанные с игровым процессом:
│   │               ├── Field/      # Компоненты игрового поля
│   │               │   └── Field.tsx    # Поле 3x3, состоящее из ячеек (клеток) 
│   │               ├── Cell/       # Компоненты ячейки поля
│   │               │   ├── Cell.tsx     # Отдельная клетка поля (кнопка) с логикой хода
│   │               │   ├── CellIcon.tsx # Отображение иконки X/O внутри клетки (с учетом состояния и наведения)
│   │               │   └── getClasses.ts# Определение CSS-классов для клетки (обычная, выигрышная и т.д.)
│   │               └── Info/       # Компоненты информационной панели игры
│   │                   ├── Info.tsx       # Контейнер панели: отображает информацию о двух игроках, статус и действия 
│   │                   ├── InfoPlayer.tsx # Компонент отображения профиля игрока (имя, рейтинг, символ)
│   │                   ├── InfoMove.tsx   # Компонент отображения хода: номер хода, статус (чей ход/результат) и таймер
│   │                   ├── InfoActions.tsx# Компонент действий после игры: кнопки "Play again" и "New game", с таймером автоматического рестарта
│   │                   └── Status/Status.tsx # Компонент статуса игры (текущий игрок или победитель/ничья) с соответствующей иконкой
│   ├── UI/                  # Набор универсальных UI-компонентов (используются в разных частях приложения)
│   │   ├── Button/          # Кнопка (с использованием React.memo для оптимизации)
│   │   ├── Container/       # Контейнер для центровки контента (задает max-width и отступы)
│   │   ├── Modal/           # Модальное окно (обертка для отображения всплывающих панелей)
│   │   ├── Panel/           # Панель (контейнер с фоном и скругленными углами для блоков интерфейса)
│   │   ├── Avatar/          # Аватар (круглый контейнер для изображения игрока или иконки по умолчанию)
│   │   ├── Logo/            # Логотип приложения (текстовая ссылка "Tic Tac Toe")
│   │   ├── InputText/       # Компоненты для текстового поля ввода (с меткой, сообщением об ошибке и пр.)
│   │   ├── Select/          # Выпадающий список (select) на базе Headless UI для выбора значений
│   │   └── icons/           # SVG-иконки приложения:
│   │       ├── XIcon.tsx    # Иконка крестика (X) 
│   │       └── OIcon.tsx    # Иконка нолика (O)
│   ├── constants/           # Константы, используемые в логике игры и настройках
│   │   ├── winCombinations.ts  # Набор выигрышных комбинаций для поля 3x3 (массив из индексов клеток)
│   │   ├── durations.ts       # Настройки таймеров (длительность хода, время до автоматического рестарта игры и др.)
│   │   └── basePath.ts        # Базовый путь для приложения (используется при развертывании на подкаталоге, например GitHub Pages)
│   ├── models/             # Модели данных и типы TypeScript
│   │   ├── game.ts         # Описание интерфейсов игрового состояния (GameState) и типов (ход, победитель и пр.)
│   │   ├── playerSymbol.ts # Enum типа игрока (X или O)
│   │   └── cell.ts         # Определение типа клетки (значение X/O или пусто) и структур для передачи данных о ходе
│   └── hooks/              # Глобальные хуки общего назначения
│       ├── useTimer.ts     # Универсальный таймер-хук (логика запуска/остановки таймера, отсчет времени в секундах)
│       └── useNow.ts       # Вспомогательный хук для получения текущего времени с заданным интервалом (используется внутри таймера)
├── public/                 # Статические файлы, доступные напрямую в приложении
│   ├── fonts/              # Шрифты (например, Chivo Mono, подключаемый для интерфейса)
│   └── images/             # Изображения (аватары игроков по умолчанию, иконки и др.)
├── package.json            # Файл с информацией о проекте, списком зависимостей и сценариев (scripts)
├── next.config.ts          # Конфигурация Next.js (напр. `basePath` для деплоя приложения в подкаталог `/tic-tac-toe`)
├── tailwind.config.js      # Конфигурация Tailwind CSS (настройки путей, тема с использованием CSS-переменных цвета и пр.)
├── tsconfig.json           # Конфигурация TypeScript
└── ... и другие файлы конфигураций (.eslintrc, .prettierrc, .gitignore и т.д.)
```

### Скрипты | Scripts

The project defines the following npm scripts for building and running the application:

- `npm run dev` – starts the development server with hot reload at `http://localhost:3000`
- `npm run build` – builds the project for production into the out directory
- `npm run start` – runs the production build using a Node.js server (used only for SSR; for static export, serve out folder)
- `npm run lint` – runs ESLint to check code style and issues

### Запуск проекта | Run Locally

```bash
git clone https://github.com/hellsgor/tic-tac-toe.git
cd tic-tac-toe
npm install
npm run dev
```

Открыть в браузере | Open your browser at: `http://localhost:3000`
