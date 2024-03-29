let globalFoodCalObj = {
  ru: [
      { "id": 1, "name": "Баклажаны", "prot": 0.6, "fat": 0.1, "carb": 5.5, "calories": 24 },
      { "id": 2, "name": "Брюква", "prot": 1.2, "fat": 0.1, "carb": 8.1, "calories": 37 },
      { "id": 3, "name": "Горошек зеленый", "prot": 5.0, "fat": 0.2, "carb": 13.3, "calories": 72 },
      { "id": 4, "name": "Кабачки", "prot": 0.6, "fat": 0.3, "carb": 5.7, "calories": 27 },
      { "id": 5, "name": "Капуста белокочанная", "prot": 1.8, "fat": 0, "carb": 5.4, "calories": 28 },
      { "id": 6, "name": "Капуста краснокочанная", "prot": 1.8, "fat": 0, "carb": 6.1, "calories": 31 },
      { "id": 7, "name": "Капуста цветная", "prot": 2.5, "fat": 0, "carb": 4.9, "calories": 29 },
      { "id": 8, "name": "Картофель", "prot": 2.0, "fat": 0.1, "carb": 19.7, "calories": 83 },
      { "id": 9, "name": "Лук зеленый (перо)", "prot": 1.3, "fat": 0, "carb": 4.3, "calories": 22 },
      { "id": 10, "name": "Лук порей", "prot": 3.0, "fat": 0, "carb": 7.3, "calories": 40 },
      { "id": 11, "name": "Лук репчатый", "prot": 1.7, "fat": 0, "carb": 9.5, "calories": 43 },
      { "id": 12, "name": "Морковь красная", "prot": 1.3, "fat": 0.1, "carb": 7.0, "calories": 33 },
      { "id": 13, "name": "Огурцы грунтовые", "prot": 0.8, "fat": 0, "carb": 3.0, "calories": 15 },
      { "id": 14, "name": "Огурцы парниковые", "prot": 0.7, "fat": 0, "carb": 1.8, "calories": 10 },
      { "id": 15, "name": "Перец зеленый сладкий", "prot": 1.3, "fat": 0, "carb": 4.7, "calories": 23 },
      { "id": 16, "name": "Перец красный сладкий", "prot": 1.3, "fat": 0, "carb": 5.7, "calories": 27 },
      { "id": 17, "name": "Петрушка (зелень)", "prot": 3.7, "fat": 0, "carb": 8.1, "calories": 45 },
      { "id": 18, "name": "Петрушка (корень)", "prot": 1.5, "fat": 0, "carb": 11.0, "calories": 47 },
      { "id": 19, "name": "Ревень (черешковый)", "prot": 0.7, "fat": 0, "carb": 2.9, "calories": 16 },
      { "id": 20, "name": "Редис", "prot": 1.2, "fat": 0, "carb": 4.1, "calories": 20 },
      { "id": 21, "name": "Редька", "prot": 1.9, "fat": 0, "carb": 7.0, "calories": 34 },
      { "id": 22, "name": "Репа", "prot": 1.5, "fat": 0, "carb": 5.9, "calories": 28 },
      { "id": 23, "name": "Салат", "prot": 1.5, "fat": 0, "carb": 2.2, "calories": 14 },
      { "id": 24, "name": "Свекла", "prot": 1.7, "fat": 0, "carb": 10.8, "calories": 48 },
      { "id": 25, "name": "Томаты (грунтовые)", "prot": 0.6, "fat": 0, "carb": 4.2, "calories": 19 },
      { "id": 26, "name": "Томаты (парниковые)", "prot": 0.6, "fat": 0, "carb": 2.9, "calories": 14 },
      { "id": 27, "name": "Зеленая фасоль (стручок)", "prot": 4.0, "fat": 0, "carb": 4.3, "calories": 32 },
      { "id": 28, "name": "Хрен", "prot": 2.5, "fat": 0, "carb": 16.3, "calories": 71 },
      { "id": 29, "name": "Черемша", "prot": 2.4, "fat": 0, "carb": 6.5, "calories": 34 },
      { "id": 30, "name": "Чеснок", "prot": 6.5, "fat": 0, "carb": 21.2, "calories": 106 },
      { "id": 31, "name": "Шпинат", "prot": 2.9, "fat": 0, "carb": 2.3, "calories": 21 },
      { "id": 32, "name": "Щавель", "prot": 1.5, "fat": 0, "carb": 5.3, "calories": 28 },
      { "id": 33, "name": "Абрикосы", "prot": 0.9, "fat": 0, "carb": 10.5, "calories": 46 },
      { "id": 34, "name": "Айва", "prot": 0.6, "fat": 0, "carb": 8.9, "calories": 38 },
      { "id": 35, "name": "Алыча", "prot": 0.2, "fat": 0, "carb": 7.4, "calories": 34 },
      { "id": 36, "name": "Ананас", "prot": 0.4, "fat": 0, "carb": 11.8, "calories": 48 },
      { "id": 37, "name": "Бананы", "prot": 1.5, "fat": 0, "carb": 22.4, "calories": 91 },
      { "id": 38, "name": "Вишня", "prot": 0.8, "fat": 0, "carb": 11.3, "calories": 49 },
      { "id": 39, "name": "Гранат", "prot": 0.9, "fat": 0, "carb": 11.8, "calories": 52 },
      { "id": 40, "name": "Груша", "prot": 0.4, "fat": 0, "carb": 10.7, "calories": 42 },
      { "id": 41, "name": "Инжир", "prot": 0.7, "fat": 0, "carb": 13.9, "calories": 56 },
      { "id": 42, "name": "Кизил", "prot": 1.0, "fat": 0, "carb": 9.7, "calories": 45 },
      { "id": 43, "name": "Персики", "prot": 0.9, "fat": 0, "carb": 10.4, "calories": 44 },
      { "id": 44, "name": "Рябина садовая", "prot": 1.4, "fat": 0, "carb": 12.5, "calories": 58 },
      { "id": 45, "name": "Рябина черноплодная", "prot": 1.5, "fat": 0, "carb": 12.0, "calories": 54 },
      { "id": 46, "name": "Слива садовая", "prot": 0.8, "fat": 0, "carb": 9.9, "calories": 43 },
      { "id": 47, "name": "Финики", "prot": 2.5, "fat": 0, "carb": 72.1, "calories": 281 },
      { "id": 48, "name": "Хурма", "prot": 0.5, "fat": 0, "carb": 15.9, "calories": 62 },
      { "id": 49, "name": "Черешня", "prot": 1.1, "fat": 0, "carb": 12.3, "calories": 52 },
      { "id": 50, "name": "Шелковица", "prot": 0.7, "fat": 0, "carb": 12.7, "calories": 53 },
      { "id": 51, "name": "Яблоки", "prot": 0.4, "fat": 0, "carb": 11.3, "calories": 46 },
      { "id": 52, "name": "Апельсин", "prot": 0.9, "fat": 0, "carb": 8.4, "calories": 38 },
      { "id": 53, "name": "Грейпфрут", "prot": 0.9, "fat": 0, "carb": 7.3, "calories": 35 },
      { "id": 54, "name": "Лимон", "prot": 0.9, "fat": 0, "carb": 3.6, "calories": 31 },
      { "id": 55, "name": "Мандарин", "prot": 0.8, "fat": 0, "carb": 8.6, "calories": 38 },
      { "id": 56, "name": "Брусника", "prot": 0.7, "fat": 0, "carb": 8.6, "calories": 40 },
      { "id": 57, "name": "Виноград", "prot": 0.4, "fat": 0, "carb": 17.5, "calories": 69 },
      { "id": 58, "name": "Голубика", "prot": 1.0, "fat": 0, "carb": 7.7, "calories": 37 },
      { "id": 59, "name": "Ежевика", "prot": 2.0, "fat": 0, "carb": 5.3, "calories": 33 },
      { "id": 60, "name": "Земляника", "prot": 1.8, "fat": 0, "carb": 8.1, "calories": 41 },
      { "id": 61, "name": "Клюква", "prot": 0.5, "fat": 0, "carb": 4.8, "calories": 28 },
      { "id": 62, "name": "Крыжовник", "prot": 0.7, "fat": 0, "carb": 9.9, "calories": 44 },
      { "id": 63, "name": "Малина", "prot": 0.8, "fat": 0, "carb": 9.0, "calories": 41 },
      { "id": 64, "name": "Морошка", "prot": 0.8, "fat": 0, "carb": 6.8, "calories": 31 },
      { "id": 65, "name": "Облепиха", "prot": 0.9, "fat": 0, "carb": 5.5, "calories": 30 },
      { "id": 66, "name": "Смородина белая", "prot": 0.3, "fat": 0, "carb": 8.7, "calories": 39 },
      { "id": 67, "name": "Смородина красная", "prot": 0.6, "fat": 0, "carb": 8.0, "calories": 38 },
      { "id": 68, "name": "Смородина черная", "prot": 1.0, "fat": 0, "carb": 8.0, "calories": 40 },
      { "id": 69, "name": "Черника", "prot": 1.1, "fat": 0, "carb": 8.6, "calories": 40 },
      { "id": 70, "name": "Шиповник свежий", "prot": 1.6, "fat": 0, "carb": 24.0, "calories": 101 },
      { "id": 71, "name": "Шиповник сушеный", "prot": 4.0, "fat": 0, "carb": 60.0, "calories": 253 },
      { "id": 72, "name": "Урюк", "prot": 5.0, "fat": 0, "carb": 67.5, "calories": 278 },
      { "id": 73, "name": "Курага", "prot": 5.2, "fat": 0, "carb": 65.9, "calories": 272 },
      { "id": 74, "name": "Изюм с косточкой", "prot": 1.8, "fat": 0, "carb": 70.9, "calories": 276 },
      { "id": 75, "name": "Изюм кишмиш", "prot": 2.3, "fat": 0, "carb": 71.2, "calories": 279 },
      { "id": 76, "name": "Чернослив", "prot": 2.3, "fat": 0, "carb": 65.6, "calories": 264 },
      { "id": 77, "name": "Мед", "prot": 0.8, "fat": 0, "carb": 80.3, "calories": 308 },
      { "id": 78, "name": "Драже фруктовое", "prot": 3.7, "fat": 10.2, "carb": 73.1, "calories": 384 },
      { "id": 79, "name": "Зефир", "prot": 0.8, "fat": 0, "carb": 78.3, "calories": 299 },
      { "id": 80, "name": "Ирис", "prot": 3.3, "fat": 7.5, "carb": 81.8, "calories": 387 },
      { "id": 81, "name": "Мармелад", "prot": 0, "fat": 0.1, "carb": 77.7, "calories": 296 },
      { "id": 82, "name": "Карамель (в среднем)", "prot": 0, "fat": 0.1, "carb": 77.7, "calories": 296 },
      { "id": 83, "name": "Конфеты, глазированные шоколадом", "prot": 2.9, "fat": 10.7, "carb": 76.6, "calories": 396 },
      { "id": 84, "name": "Пастила", "prot": 0.5, "fat": 0, "carb": 80.4, "calories": 305 },
      { "id": 85, "name": "Сахар", "prot": 0.3, "fat": 0, "carb": 99.5, "calories": 374 },
      { "id": 86, "name": "Халва тахинная", "prot": 12.7, "fat": 29.9, "carb": 50.6, "calories": 510 },
      { "id": 87, "name": "Халва подсолнечная", "prot": 11.6, "fat": 29.7, "carb": 54, "calories": 516 },
      { "id": 88, "name": "Шоколад темный", "prot": 5.4, "fat": 35.3, "carb": 52.6, "calories": 540 },
      { "id": 89, "name": "Шоколад молочный", "prot": 6.9, "fat": 35.7, "carb": 52.4, "calories": 547 },
      { "id": 90, "name": "Вафли с фруктовыми начинками", "prot": 3.2, "fat": 2.8, "carb": 80.1, "calories": 342 },
      { "id": 91, "name": "Вафли с жиросодержащими начинками", "prot": 3.4, "fat": 30.2, "carb": 64.7, "calories": 530 },
      { "id": 92, "name": "Пирожное слоеное с кремом", "prot": 5.4, "fat": 38.6, "carb": 46.4, "calories": 544 },
      { "id": 93, "name": "Пирожное слоеное с яблоком", "prot": 5.7, "fat": 25.6, "carb": 52.7, "calories": 454 },
      { "id": 94, "name": "Пирожное бисквитное с фруктовой начинкой", "prot": 4.7, "fat": 9.3, "carb": 84.4, "calories": 344 },
      { "id": 95, "name": "Пряники", "prot": 4.8, "fat": 2.8, "carb": 77.7, "calories": 336 },
      { "id": 96, "name": "Торт бисквитный с фруктовой начинкой", "prot": 4.7, "fat": 20, "carb": 49.8, "calories": 386 },
      { "id": 97, "name": "Торт миндальный", "prot": 6.6, "fat": 35.8, "carb": 46.8, "calories": 524 },
      { "id": 98, "name": "Хлеб ржаной", "prot": 4.7, "fat": 0.7, "carb": 49.8, "calories": 214 },
      { "id": 99, "name": "Хлеб пшеничный из муки I сорта", "prot": 7.7, "fat": 2.4, "carb": 53.4, "calories": 254 },
      { "id": 100, "name": "Сдобная выпечка", "prot": 7.6, "fat": 4.5, "carb": 60.0, "calories": 297 },
      { "id": 101, "name": "Баранки", "prot": 10.4, "fat": 1.3, "carb": 68.7, "calories": 312 },
      { "id": 102, "name": "Сушки", "prot": 11.0, "fat": 1.3, "carb": 73.0, "calories": 330 },
      { "id": 103, "name": "Сухари пшеничные", "prot": 11.2, "fat": 1.4, "carb": 72.4, "calories": 331 },
      { "id": 104, "name": "Сухари сливочные", "prot": 8.5, "fat": 10.6, "carb": 71.3, "calories": 397 },
      { "id": 105, "name": "Мука пшеничная высшего сорта", "prot": 10.3, "fat": 0.9, "carb": 74.2, "calories": 327 },
      { "id": 106, "name": "Мука пшеничная I сорта", "prot": 10.6, "fat": 1.3, "carb": 73.2, "calories": 329 },
      { "id": 107, "name": "Мука пшеничная II сорта", "prot": 11.7, "fat": 1.8, "carb": 70.8, "calories": 328 },
      { "id": 108, "name": "Мука ржаная", "prot": 6.9, "fat": 1.1, "carb": 76.9, "calories": 326 },
      { "id": 109, "name": "Гречневая ядрица", "prot": 12.6, "fat": 2.6, "carb": 68.0, "calories": 329 },
      { "id": 110, "name": "Гречневая продел", "prot": 9.5, "fat": 1.9, "carb": 72.2, "calories": 326 },
      { "id": 111, "name": "Манная", "prot": 11.3, "fat": 0.7, "carb": 73.3, "calories": 326 },
      { "id": 112, "name": "Овсяная", "prot": 11.9, "fat": 5.8, "carb": 65.4, "calories": 345 },
      { "id": 113, "name": "Перловая", "prot": 9.3, "fat": 1.1, "carb": 73.7, "calories": 324 },
      { "id": 114, "name": "Пшено", "prot": 12.0, "fat": 2.9, "carb": 69.3, "calories": 334 },
      { "id": 115, "name": "Рисовая", "prot": 7.0, "fat": 0.6, "carb": 73.7, "calories": 323 },
      { "id": 116, "name": "Пшеничная \"Полтавская\"", "prot": 12.7, "fat": 1.1, "carb": 70.6, "calories": 325 },
      { "id": 117, "name": "Толокно", "prot": 12.2, "fat": 5.8, "carb": 68.3, "calories": 357 },
      { "id": 118, "name": "Ячневая", "prot": 10.4, "fat": 1.3, "carb": 71.7, "calories": 322 },
      { "id": 119, "name": "Геркулес", "prot": 13.1, "fat": 6.2, "carb": 65.7, "calories": 355 },
      { "id": 120, "name": "Кукурузная", "prot": 8.3, "fat": 1.2, "carb": 75.0, "calories": 325 },
      { "id": 121, "name": "Бобы", "prot": 6.0, "fat": 0.1, "carb": 8.3, "calories": 58 },
      { "id": 122, "name": "Горох лущеный", "prot": 23.0, "fat": 1.6, "carb": 57.7, "calories": 323 },
      { "id": 123, "name": "Горох цельный", "prot": 23.0, "fat": 1.2, "carb": 53.3, "calories": 303 },
      { "id": 124, "name": "Соя", "prot": 34.9, "fat": 17.3, "carb": 26.5, "calories": 395 },
      { "id": 125, "name": "Фасоль", "prot": 22.3, "fat": 1.7, "carb": 54.5, "calories": 309 },
      { "id": 126, "name": "Чечевица", "prot": 24.8, "fat": 1.1, "carb": 53.7, "calories": 310 },
      { "id": 127, "name": "Белые свежие (грибы)", "prot": 3.2, "fat": 0.7, "carb": 1.6, "calories": 25 },
      { "id": 128, "name": "Белые сушеные (грибы)", "prot": 27.6, "fat": 6.8, "carb": 10.0, "calories": 209 },
      { "id": 129, "name": "Подберезовики свежие (грибы)", "prot": 2.3, "fat": 0.9, "carb": 3.7, "calories": 31 },
      { "id": 130, "name": "Подосиновики свежие (грибы)", "prot": 3.3, "fat": 0.5, "carb": 3.4, "calories": 31 },
      { "id": 131, "name": "Сыроежи свежие (грибы)", "prot": 1.7, "fat": 0.3, "carb": 1.4, "calories": 17 },
      { "id": 132, "name": "Баранина", "prot": 16.3, "fat": 15.3, "carb": 0.0, "calories": 203 },
      { "id": 133, "name": "Говядина", "prot": 18.9, "fat": 12.4, "carb": 0.0, "calories": 187 },
      { "id": 134, "name": "Конина", "prot": 20.2, "fat": 7.0, "carb": 0.0, "calories": 143 },
      { "id": 135, "name": "Кролик", "prot": 20.7, "fat": 12.9, "carb": 0.0, "calories": 199 },
      { "id": 136, "name": "Свинина нежирная", "prot": 16.4, "fat": 27.8, "carb": 0.0, "calories": 316 },
      { "id": 137, "name": "Свинина жирная", "prot": 11.4, "fat": 49.3, "carb": 0.0, "calories": 489 },
      { "id": 138, "name": "Телятина", "prot": 19.7, "fat": 1.2, "carb": 0.0, "calories": 90 },
      { "id": 139, "name": "Бараньи Почки", "prot": 13.6, "fat": 2.5, "carb": 0.0, "calories": 77 },
      { "id": 140, "name": "Баранья Печень", "prot": 18.7, "fat": 2.9, "carb": 0.0, "calories": 101 },
      { "id": 141, "name": "Баранье Сердце", "prot": 13.5, "fat": 2.5, "carb": 0.0, "calories": 82 },
      { "id": 142, "name": "Говяжьи Мозги", "prot": 9.5, "fat": 9.5, "carb": 0.0, "calories": 124 },
      { "id": 143, "name": "Говяжья Печень", "prot": 17.4, "fat": 3.1, "carb": 0.0, "calories": 98 },
      { "id": 144, "name": "Говяжьи Почки", "prot": 12.5, "fat": 1.8, "carb": 0.0, "calories": 66 },
      { "id": 145, "name": "Говяжье Вымя", "prot": 12.3, "fat": 13.7, "carb": 0.0, "calories": 173 },
      { "id": 146, "name": "Говяжье Сердце", "prot": 15.0, "fat": 3.0, "carb": 0.0, "calories": 87 },
      { "id": 147, "name": "Говяжий Язык", "prot": 13.6, "fat": 12.1, "carb": 0.0, "calories": 163 },
      { "id": 148, "name": "Почки свинные", "prot": 13.0, "fat": 3.1, "carb": 0.0, "calories": 80 },
      { "id": 149, "name": "Печень свинная", "prot": 18.8, "fat": 3.6, "carb": 0.0, "calories": 108 },
      { "id": 150, "name": "Сердце свинное", "prot": 15.1, "fat": 3.2, "carb": 0.0, "calories": 89 },
      { "id": 151, "name": "Язык свинной", "prot": 14.2, "fat": 16.8, "carb": 0.0, "calories": 208 },
      { "id": 152, "name": "Гуси", "prot": 16.1, "fat": 33.3, "carb": 0.0, "calories": 364 },
      { "id": 153, "name": "Индейка", "prot": 21.6, "fat": 12.0, "carb": 0.8, "calories": 197 },
      { "id": 154, "name": "Куры", "prot": 20.8, "fat": 8.8, "carb": 0.6, "calories": 165 },
      { "id": 155, "name": "Куриная грудка (филе)", "prot": 23.6, "fat": 1.9, "carb": 0.4, "calories": 113 },
      { "id": 156, "name": "Цыплята", "prot": 18.7, "fat": 7.8, "carb": 0.4, "calories": 156 },
      { "id": 157, "name": "Утки", "prot": 16.5, "fat": 61.2, "carb": 0.0, "calories": 346 },
      { "id": 158, "name": "Вареная колбаса Диабетическая", "prot": 12.1, "fat": 22.8, "carb": 0.0, "calories": 254 },
      { "id": 159, "name": "Вареная колбаса Диетическая", "prot": 12.1, "fat": 13.5, "carb": 0.0, "calories": 170 },
      { "id": 160, "name": "Вареная колбаса Докторская", "prot": 13.7, "fat": 22.8, "carb": 0.0, "calories": 260 },
      { "id": 161, "name": "Вареная колбаса Любительская", "prot": 12.2, "fat": 28.0, "carb": 0.0, "calories": 301 },
      { "id": 162, "name": "Вареная колбаса Молочная", "prot": 11.7, "fat": 22.8, "carb": 0.0, "calories": 252 },
      { "id": 163, "name": "Вареная колбаса Отдельная", "prot": 10.1, "fat": 20.1, "carb": 1.8, "calories": 228 },
      { "id": 164, "name": "Вареная колбаса Телячья", "prot": 12.5, "fat": 29.6, "carb": 0.0, "calories": 316 },
      { "id": 165, "name": "Сардельки Свиные", "prot": 10.1, "fat": 31.6, "carb": 1.9, "calories": 332 },
      { "id": 166, "name": "Сосиски Молочные", "prot": 12.3, "fat": 25.3, "carb": 0.0, "calories": 277 },
      { "id": 167, "name": "Сосиски Русские", "prot": 12.0, "fat": 19.1, "carb": 0.0, "calories": 220 },
      { "id": 168, "name": "Сосиски Свиные", "prot": 11.8, "fat": 30.8, "carb": 0.0, "calories": 324 },
      { "id": 169, "name": "Варено-копченая Любительская", "prot": 17.3, "fat": 39.0, "carb": 0.0, "calories": 420 },
      { "id": 170, "name": "Варено-копченая Сервелат", "prot": 28.2, "fat": 27.5, "carb": 0.0, "calories": 360 },
      { "id": 171, "name": "Полукопченая Краковская", "prot": 16.2, "fat": 44.6, "carb": 0.0, "calories": 466 },
      { "id": 172, "name": "Полукопченая Минская", "prot": 23.0, "fat": 17.4, "carb": 2.7, "calories": 259 },
      { "id": 173, "name": "Полукопченая Полтавская", "prot": 16.4, "fat": 39.0, "carb": 0.0, "calories": 417 },
      { "id": 174, "name": "Полукопченая Украинская", "prot": 16.5, "fat": 34.4, "carb": 0.0, "calories": 376 },
      { "id": 175, "name": "Сырокопченая Любительская", "prot": 20.9, "fat": 47.8, "carb": 0.0, "calories": 514 },
      { "id": 176, "name": "Сырокопченая Московская", "prot": 24.8, "fat": 41.5, "carb": 0.0, "calories": 473 },
      { "id": 177, "name": "Говядина тушеная", "prot": 16.8, "fat": 18.3, "carb": 0.0, "calories": 232 },
      { "id": 178, "name": "Завтрак туриста (говядина)", "prot": 20.5, "fat": 10.4, "carb": 0.0, "calories": 176 },
      { "id": 179, "name": "Завтрак туриста (свинина)", "prot": 16.9, "fat": 15.4, "carb": 0.0, "calories": 206 },
      { "id": 180, "name": "Колбасный фарш", "prot": 15.2, "fat": 15.7, "carb": 2.8, "calories": 213 },
      { "id": 181, "name": "Свинина тушеная", "prot": 14.9, "fat": 32.2, "carb": 0.0, "calories": 349 },
      { "id": 182, "name": "Грудинка сырокопченая", "prot": 7.6, "fat": 66.8, "carb": 0.0, "calories": 632 },
      { "id": 183, "name": "Корейка сырокопченая", "prot": 10.5, "fat": 47.2, "carb": 0.0, "calories": 467 },
      { "id": 184, "name": "Ветчина", "prot": 22.6, "fat": 20.9, "carb": 0.0, "calories": 279 },
      { "id": 185, "name": "Жир бараний или говяжий топленый", "prot": 0.0, "fat": 99.7, "carb": 0.0, "calories": 897 },
      { "id": 186, "name": "Шпик свиной (без шкурки)", "prot": 1.4, "fat": 92.8, "carb": 0.0, "calories": 816 },
      { "id": 187, "name": "Маргарин молочный", "prot": 0.3, "fat": 82.3, "carb": 1.0, "calories": 746 },
      { "id": 188, "name": "Маргарин бутербродный", "prot": 0.5, "fat": 82.0, "carb": 1.2, "calories": 744 },
      { "id": 189, "name": "Майонез", "prot": 3.1, "fat": 67.0, "carb": 2.6, "calories": 627 },
      { "id": 190, "name": "Масло растительное", "prot": 0.0, "fat": 99.9, "carb": 0.0, "calories": 899 },
      { "id": 191, "name": "Масло сливочное", "prot": 0.6, "fat": 82.5, "carb": 0.9, "calories": 748 },
      { "id": 192, "name": "Масло топленое", "prot": 0.3, "fat": 98.0, "carb": 0.6, "calories": 887 },
      { "id": 193, "name": "Брынза из коровьего молока", "prot": 17.9, "fat": 20.1, "carb": 0.0, "calories": 260 },
      { "id": 194, "name": "Йогурт натуральный 1.5% жирности", "prot": 5.0, "fat": 1.5, "carb": 3.5, "calories": 51 },
      { "id": 195, "name": "Кефир нежирный", "prot": 3.0, "fat": 0.1, "carb": 3.8, "calories": 30 },
      { "id": 196, "name": "Кефир жирный", "prot": 2.8, "fat": 3.2, "carb": 4.1, "calories": 59 },
      { "id": 197, "name": "Молоко", "prot": 2.8, "fat": 3.2, "carb": 4.7, "calories": 58 },
      { "id": 198, "name": "Молоко ацидофильное", "prot": 2.8, "fat": 3.2, "carb": 10.8, "calories": 83 },
      { "id": 199, "name": "Молоко сухое цельное", "prot": 25.6, "fat": 25.0, "carb": 39.4, "calories": 475 },
      { "id": 200, "name": "Молоко сгущеное", "prot": 7.0, "fat": 7.9, "carb": 9.5, "calories": 135 },
      { "id": 201, "name": "Молоко сгущеное с сахаром", "prot": 7.2, "fat": 8.5, "carb": 56.0, "calories": 315 },
      { "id": 202, "name": "Простокваша", "prot": 2.8, "fat": 3.2, "carb": 4.1, "calories": 58 },
      { "id": 203, "name": "Ряженка", "prot": 3.0, "fat": 6.0, "carb": 4.1, "calories": 85 },
      { "id": 204, "name": "Сливки 10%", "prot": 3.0, "fat": 10.0, "carb": 4.0, "calories": 118 },
      { "id": 205, "name": "Сливки 20%", "prot": 2.8, "fat": 20.0, "carb": 3.6, "calories": 205 },
      { "id": 206, "name": "Сметана 10%", "prot": 3.0, "fat": 10.0, "carb": 2.9, "calories": 116 },
      { "id": 207, "name": "Сметана 20%", "prot": 2.8, "fat": 20.0, "carb": 3.2, "calories": 206 },
      { "id": 208, "name": "Сырки и масса творожные особые", "prot": 7.1, "fat": 23.0, "carb": 27.5, "calories": 340 },
      { "id": 209, "name": "Сыр российский", "prot": 23.4, "fat": 30.0, "carb": 0.0, "calories": 371 },
      { "id": 210, "name": "Сыр голландский", "prot": 26.8, "fat": 27.3, "carb": 0.0, "calories": 361 },
      { "id": 211, "name": "Сыр швейцарский", "prot": 24.9, "fat": 31.8, "carb": 0.0, "calories": 396 },
      { "id": 212, "name": "Сыр пошехонский", "prot": 26.0, "fat": 26.5, "carb": 0.0, "calories": 334 },
      { "id": 213, "name": "Сыр плавленный", "prot": 24.0, "fat": 13.5, "carb": 0.0, "calories": 226 },
      { "id": 214, "name": "Творог жирный", "prot": 14.0, "fat": 18.0, "carb": 1.3, "calories": 226 },
      { "id": 215, "name": "Творог полужирный", "prot": 16.7, "fat": 9.0, "carb": 1.3, "calories": 156 },
      { "id": 216, "name": "Творог нежирный", "prot": 18.0, "fat": 0.6, "carb": 1.5, "calories": 86 },
      { "id": 217, "name": "Яйцо куриное", "prot": 12.7, "fat": 11.5, "carb": 0.7, "calories": 157 },
      { "id": 218, "name": "Яичный порошок", "prot": 45.0, "fat": 37.3, "carb": 7.1, "calories": 542 },
      { "id": 219, "name": "Сухой белок", "prot": 73.3, "fat": 1.8, "carb": 7.0, "calories": 336 },
      { "id": 220, "name": "Сухой желток", "prot": 34.2, "fat": 52.2, "carb": 4.4, "calories": 623 },
      { "id": 221, "name": "Яйцо перепелиное", "prot": 11.9, "fat": 13.1, "carb": 0.6, "calories": 168 },
      { "id": 222, "name": "Бычки", "prot": 12.8, "fat": 8.1, "carb": 5.2, "calories": 145 },
      { "id": 223, "name": "Горбуша", "prot": 21.0, "fat": 7.0, "carb": 0.0, "calories": 147 },
      { "id": 224, "name": "Камбала", "prot": 16.1, "fat": 2.6, "carb": 0.0, "calories": 88 },
      { "id": 225, "name": "Карась", "prot": 17.7, "fat": 1.8, "carb": 0.0, "calories": 87 },
      { "id": 226, "name": "Карп", "prot": 16.0, "fat": 3.6, "carb": 0.0, "calories": 96 },
      { "id": 227, "name": "Кета", "prot": 22.0, "fat": 5.6, "carb": 0.0, "calories": 138 },
      { "id": 228, "name": "Корюшка", "prot": 15.5, "fat": 3.2, "carb": 0.0, "calories": 91 },
      { "id": 229, "name": "Ледяная", "prot": 15.5, "fat": 1.4, "carb": 0.0, "calories": 75 },
      { "id": 230, "name": "Лещ", "prot": 17.1, "fat": 4.1, "carb": 0.0, "calories": 105 },
      { "id": 231, "name": "Семга", "prot": 20.8, "fat": 15.1, "carb": 0.0, "calories": 219 },
      { "id": 232, "name": "Макрурус", "prot": 13.2, "fat": 0.8, "carb": 0.0, "calories": 60 },
      { "id": 233, "name": "Минога", "prot": 14.7, "fat": 11.9, "carb": 0.0, "calories": 166 },
      { "id": 234, "name": "Минтай", "prot": 15.9, "fat": 0.7, "carb": 0.0, "calories": 70 },
      { "id": 235, "name": "Мойва", "prot": 13.4, "fat": 11.5, "carb": 0.0, "calories": 157 },
      { "id": 236, "name": "Навага", "prot": 16.1, "fat": 1.0, "carb": 0.0, "calories": 73 },
      { "id": 237, "name": "Налим", "prot": 18.8, "fat": 0.6, "carb": 0.0, "calories": 81 },
      { "id": 238, "name": "Нототения мраморная", "prot": 14.8, "fat": 10.7, "carb": 0.0, "calories": 156 },
      { "id": 239, "name": "Окунь морской", "prot": 17.6, "fat": 5.2, "carb": 0.0, "calories": 117 },
      { "id": 240, "name": "Окунь речной", "prot": 18.5, "fat": 0.9, "carb": 0.0, "calories": 82 },
      { "id": 241, "name": "Осетр", "prot": 16.4, "fat": 10.9, "carb": 0.0, "calories": 164 },
      { "id": 242, "name": "Палтус", "prot": 18.9, "fat": 3.0, "carb": 0.0, "calories": 103 },
      { "id": 243, "name": "Путассу", "prot": 16.1, "fat": 0.9, "carb": 0.0, "calories": 72 },
      { "id": 244, "name": "Рыба-сабля", "prot": 20.3, "fat": 3.2, "carb": 0.0, "calories": 110 },
      { "id": 245, "name": "Рыбец каспийский", "prot": 19.2, "fat": 2.4, "carb": 0.0, "calories": 98 },
      { "id": 246, "name": "Сазан", "prot": 18.4, "fat": 5.3, "carb": 0.0, "calories": 121 },
      { "id": 247, "name": "Сайра крупная", "prot": 18.6, "fat": 20.8, "carb": 0.0, "calories": 262 },
      { "id": 248, "name": "Сайра мелкая", "prot": 20.4, "fat": 0.8, "carb": 0.0, "calories": 143 },
      { "id": 249, "name": "Салака", "prot": 17.3, "fat": 5.6, "carb": 0.0, "calories": 121 },
      { "id": 250, "name": "Сельдь", "prot": 17.7, "fat": 19.5, "carb": 0.0, "calories": 242 },
      { "id": 251, "name": "Сиг", "prot": 19.0, "fat": 7.5, "carb": 0.0, "calories": 144 },
      { "id": 252, "name": "Скумбрия", "prot": 18.0, "fat": 9.0, "carb": 0.0, "calories": 153 },
      { "id": 253, "name": "Сом", "prot": 16.8, "fat": 8.5, "carb": 0.0, "calories": 144 },
      { "id": 254, "name": "Ставрида", "prot": 18.5, "fat": 5.0, "carb": 0.0, "calories": 119 },
      { "id": 255, "name": "Стерлядь", "prot": 17.0, "fat": 6.1, "carb": 0.0, "calories": 320 },
      { "id": 256, "name": "Судак", "prot": 19.0, "fat": 0.8, "carb": 0.0, "calories": 83 },
      { "id": 257, "name": "Треска", "prot": 17.5, "fat": 0.6, "carb": 0.0, "calories": 75 },
      { "id": 258, "name": "Тунец", "prot": 22.7, "fat": 0.7, "carb": 0.0, "calories": 96 },
      { "id": 259, "name": "Угольная рыба", "prot": 13.2, "fat": 11.6, "carb": 0.0, "calories": 158 },
      { "id": 260, "name": "Угорь морской", "prot": 19.1, "fat": 1.9, "carb": 0.0, "calories": 94 },
      { "id": 261, "name": "Угорь", "prot": 14.5, "fat": 30.5, "carb": 0.0, "calories": 333 },
      { "id": 262, "name": "Хек", "prot": 16.6, "fat": 2.2, "carb": 0.0, "calories": 86 },
      { "id": 263, "name": "Щука", "prot": 18.8, "fat": 0.7, "carb": 0.0, "calories": 82 },
      { "id": 264, "name": "Язь", "prot": 18.2, "fat": 0.3, "carb": 0.0, "calories": 117 },
      { "id": 265, "name": "Креветка дальневосточная", "prot": 28.7, "fat": 1.2, "carb": 0.0, "calories": 134 },
      { "id": 266, "name": "Печень трески", "prot": 4.2, "fat": 65.7, "carb": 0.0, "calories": 613 },
      { "id": 267, "name": "Кальмар", "prot": 18.0, "fat": 0.3, "carb": 0.0, "calories": 75 },
      { "id": 268, "name": "Краб", "prot": 16.0, "fat": 0.5, "carb": 0.0, "calories": 69 },
      { "id": 269, "name": "Креветка", "prot": 18.0, "fat": 0.8, "carb": 0.0, "calories": 83 },
      { "id": 270, "name": "Морская капуста", "prot": 0.9, "fat": 0.2, "carb": 3.0, "calories": 5 },
      { "id": 271, "name": "Паста \"Океан\"", "prot": 18.9, "fat": 6.8, "carb": 0.0, "calories": 137 },
      { "id": 272, "name": "Трепанг", "prot": 7.3, "fat": 0.6, "carb": 0.0, "calories": 35 },
      { "id": 273, "name": "Кеты зернистая (икра)", "prot": 31.6, "fat": 13.8, "carb": 0.0, "calories": 251 },
      { "id": 274, "name": "Лещевая пробойная (икра)", "prot": 24.7, "fat": 4.8, "carb": 0.0, "calories": 142 },
      { "id": 275, "name": "Минтаевая пробойная (икра)", "prot": 28.4, "fat": 1.9, "carb": 0.0, "calories": 131 },
      { "id": 276, "name": "Осетровая зернистая (икра)", "prot": 28.9, "fat": 9.7, "carb": 0.0, "calories": 203 },
      { "id": 277, "name": "Осетровая пробойная (икра)", "prot": 36.0, "fat": 10.2, "carb": 0.0, "calories": 123 },
      { "id": 278, "name": "Фундук", "prot": 16.1, "fat": 66.9, "carb": 9.9, "calories": 704 },
      { "id": 279, "name": "Миндаль", "prot": 18.6, "fat": 57.7, "carb": 13.6, "calories": 645 },
      { "id": 280, "name": "Грецкий орех", "prot": 13.8, "fat": 61.3, "carb": 10.2, "calories": 648 },
      { "id": 281, "name": "Арахис", "prot": 26.3, "fat": 45.2, "carb": 9.7, "calories": 548 },
  ],
  ua: [ 
    { "id": 1, "name": "Баклажани", "prot": 0.6, "fat": 0.1, "carb": 5.5, "calories": 24},
    { "id": 2, "name": "Бруква", "prot": 1.2, "fat": 0.1, "carb": 8.1, "calories": 37 },
    { "id": 3, "name": "Горошок зелений", "prot": 5.0, "fat": 0.2, "carb": 13.3, "calories": 72 },
    { "id": 4, "name": "Кабачки", "prot": 0.6, "fat": 0.3, "carb": 5.7, "calories": 27 },
    { "id": 5, "name": "Капуста білокачанна", "prot": 1.8, "fat": 0, "carb": 5.4, "calories": 28},
    { "id": 6, "name": "Капуста червонокачанна", "prot": 1.8, "fat": 0, "carb": 6.1, "calories": 31},
    { "id": 7, "name": "Капуста цвітна", "prot": 2.5, "fat": 0, "carb": 4.9, "calories": 29},
    { "id": 8, "name": "Картопля", "prot": 2.0, "fat": 0.1, "carb": 19.7, "calories": 83 },
    { "id": 9, "name": "Цибуля зелена (перо)", "prot": 1.3, "fat": 0, "carb": 4.3, "calories": 22 },
    { "id": 10, "name": "Цибуля порей", "prot": 3.0, "fat": 0, "carb": 7.3, "calories": 40 },
    { "id": 11, "name": "Цибуля ріпчаста", "prot": 1.7, "fat": 0, "carb": 9.5, "calories": 43 },
    { "id": 12, "name": "Морква червона", "prot": 1.3, "fat": 0.1, "carb": 7.0, "calories": 33},
    { "id": 13, "name": "Огірки ґрунтові", "prot": 0.8, "fat": 0, "carb": 3.0, "calories": 15 },
    { "id": 14, "name": "Огірки парникові", "prot": 0.7, "fat": 0, "carb": 1.8, "calories": 10},
    { "id": 15, "name": "Перець зелений солодкий", "prot": 1.3, "fat": 0, "carb": 4.7, "calories": 23},
    { "id": 16, "name": "Перець червоний солодкий", "prot": 1.3, "fat": 0, "carb": 5.7, "calories": 27},
    { "id": 17, "name": "Петрушка (зелень)", "prot": 3.7, "fat": 0, "carb": 8.1, "calories": 45 },
    { "id": 18, "name": "Петрушка (корінь)", "prot": 1.5, "fat": 0, "carb": 11.0, "calories": 47},
    { "id": 19, "name": "Ревень (черешковий)", "prot": 0.7, "fat": 0, "carb": 2.9, "calories": 16 },
    { "id": 20, "name": "Редис", "prot": 1.2, "fat": 0, "carb": 4.1, "calories": 20},
    { "id": 21, "name": "Редька", "prot": 1.9, "fat": 0, "carb": 7.0, "calories": 34 },
    { "id": 22, "name": "Ріпа", "prot": 1.5, "fat": 0, "carb": 5.9, "calories": 28 },
    { "id": 23, "name": "Салат", "prot": 1.5, "fat": 0, "carb": 2.2, "calories": 14 },
    { "id": 24, "name": "Буряк", "prot": 1.7, "fat": 0, "carb": 10.8, "calories": 48 },
    { "id": 25, "name": "Томати (грунтові)", "prot": 0.6, "fat": 0, "carb": 4.2, "calories": 19},
    { "id": 26, "name": "Томати (парникові)", "prot": 0.6, "fat": 0, "carb": 2.9, "calories": 14},
    { "id": 27, "name": "Зелена квасоля (стручок)", "prot": 4.0, "fat": 0, "carb": 4.3, "calories": 32 },
    { "id": 28, "name": "Хрін", "prot": 2.5, "fat": 0, "carb": 16.3, "calories": 71 },
    { "id": 29, "name": "Черемша", "prot": 2.4, "fat": 0, "carb": 6.5, "calories": 34},
    { "id": 30, "name": "Часник", "prot": 6.5, "fat": 0, "carb": 21.2, "calories": 106},
    { "id": 31, "name": "Шпинат", "prot": 2.9, "fat": 0, "carb": 2.3, "calories": 21 },
    { "id": 32, "name": "Щавель", "prot": 1.5, "fat": 0, "carb": 5.3, "calories": 28},
    { "id": 33, "name": "Абрикоси", "prot": 0.9, "fat": 0, "carb": 10.5, "calories": 46},
    { "id": 34, "name": "Айва", "prot": 0.6, "fat": 0, "carb": 8.9, "calories": 38},
    { "id": 35, "name": "Алича", "prot": 0.2, "fat": 0, "carb": 7.4, "calories": 34 },
    { "id": 36, "name": "Ананас", "prot": 0.4, "fat": 0, "carb": 11.8, "calories": 48},
    { "id": 37, "name": "Банани", "prot": 1.5, "fat": 0, "carb": 22.4, "calories": 91 },
    { "id": 38, "name": "Вишня", "prot": 0.8, "fat": 0, "carb": 11.3, "calories": 49},
    { "id": 39, "name": "Гранат", "prot": 0.9, "fat": 0, "carb": 11.8, "calories": 52 },
    { "id": 40, "name": "Груша", "prot": 0.4, "fat": 0, "carb": 10.7, "calories": 42 },
    { "id": 41, "name": "Інжир", "prot": 0.7, "fat": 0, "carb": 13.9, "calories": 56 },
    { "id": 42, "name": "Кизил", "prot": 1.0, "fat": 0, "carb": 9.7, "calories": 45 },
    { "id": 43, "name": "Персики", "prot": 0.9, "fat": 0, "carb": 10.4, "calories": 44 },
    { "id": 44, "name": "Горобина садова", "prot": 1.4, "fat": 0, "carb": 12.5, "calories": 58},
    { "id": 45, "name": "Горобина чорноплідна", "prot": 1.5, "fat": 0, "carb": 12.0, "calories": 54 },
    { "id": 46, "name": "Слива садова", "prot": 0.8, "fat": 0, "carb": 9.9, "calories": 43},
    { "id": 47, "name": "Фініки", "prot": 2.5, "fat": 0, "carb": 72.1, "calories": 281},
    { "id": 48, "name": "Хурма", "prot": 0.5, "fat": 0, "carb": 15.9, "calories": 62 },
    { "id": 49, "name": "Черешня", "prot": 1.1, "fat": 0, "carb": 12.3, "calories": 52 },
    { "id": 50, "name": "Шовковиця", "prot": 0.7, "fat": 0, "carb": 12.7, "calories": 53},
    { "id": 51, "name": "Яблука", "prot": 0.4, "fat": 0, "carb": 11.3, "calories": 46 },
    { "id": 52, "name": "Апельсин", "prot": 0.9, "fat": 0, "carb": 8.4, "calories": 38},
    { "id": 53, "name": "Грейпфрут", "prot": 0.9, "fat": 0,"carb": 7.3, "calories": 35},
    { "id": 54, "name": "Лимон", "prot": 0.9, "fat": 0, "carb": 3.6, "calories": 31},
    { "id": 55, "name": "Мандарин", "prot": 0.8, "fat": 0, "carb": 8.6, "calories": 38},
    { "id": 56, "name": "Брусниця", "prot": 0.7, "fat": 0, "carb": 8.6, "calories": 40},
    { "id": 57, "name": "Виноград", "prot": 0.4, "fat": 0, "carb": 17.5, "calories": 69},
    { "id": 58, "name": "Голубика", "prot": 1.0, "fat": 0, "carb": 7.7, "calories": 37 },
    { "id": 59, "name": "Ожина", "prot": 2.0, "fat": 0, "carb": 5.3, "calories": 33 },
    { "id": 60, "name": "Суниця", "prot": 1.8, "fat": 0, "carb": 8.1, "calories": 41 },
    { "id": 61, "name": "Журавлина", "prot": 0.5, "fat": 0, "carb": 4.8, "calories": 28 },
    { "id": 62, "name": "Агрус", "prot": 0.7, "fat": 0, "carb": 9.9, "calories": 44 },
    { "id": 63, "name": "Малина", "prot": 0.8, "fat": 0, "carb": 9.0, "calories": 41},
    { "id": 64, "name": "Морошка", "prot": 0.8, "fat": 0, "carb": 6.8, "calories": 31 },
    { "id": 65, "name": "Обліпиха", "prot": 0.9, "fat": 0, "carb": 5.5, "calories": 30},
    { "id": 66, "name": "Смородина біла", "prot": 0.3, "fat": 0, "carb": 8.7, "calories": 39},
    { "id": 67, "name": "Смородина червона", "prot": 0.6, "fat": 0, "carb": 8.0, "calories": 38},
    { "id": 68, "name": "Смородина чорна", "prot": 1.0, "fat": 0, "carb": 8.0, "calories": 40},
    { "id": 69, "name": "Чорниця", "prot": 1.1, "fat": 0, "carb": 8.6, "calories": 40 },
    { "id": 70, "name": "Шипшина свіжа", "prot": 1.6, "fat": 0, "carb": 24.0, "calories": 101 },
    { "id": 71, "name": "Шипшина сушена", "prot": 4.0, "fat": 0, "carb": 60.0, "calories": 253},
    { "id": 72, "name": "Урюк", "prot": 5.0, "fat": 0, "carb": 67.5, "calories": 278},
    { "id": 73, "name": "Курага", "prot": 5.2, "fat": 0, "carb": 65.9, "calories": 272},
    { "id": 74, "name": "Ізюм з кісточкою", "prot": 1.8, "fat": 0, "carb": 70.9, "calories": 276},
    { "id": 75, "name": "Ізюм кишміш", "prot": 2.3, "fat": 0, "carb": 71.2, "calories": 279},
    { "id": 76, "name": "Чорнослив", "prot": 2.3, "fat": 0, "carb": 65.6, "calories": 264},
    { "id": 77, "name": "Мед", "prot": 0.8, "fat": 0, "carb": 80.3, "calories": 308 },
    { "id": 78, "name": "Драже фруктове", "prot": 3.7, "fat": 10.2, "carb": 73.1, "calories": 384},
    { "id": 79, "name": "Зефір", "prot": 0.8, "fat": 0, "carb": 78.3, "calories": 299},
    { "id": 80, "name": "Ірис", "prot": 3.3, "fat": 7.5, "carb": 81.8, "calories": 387},
    { "id": 81, "name": "Мармелад", "prot": 0, "fat": 0.1, "carb": 77.7, "calories": 296},
    { "id": 82, "name": "Карамель (у середньому)", "prot": 0, "fat": 0.1, "carb": 77.7, "calories": 296},
    { "id": 83, "name": "Цукерки, глазуровані шоколадом", "prot": 2.9, "fat": 10.7, "carb": 76.6, "calories": 396},
    { "id": 84, "name": "Пастила", "prot": 0.5, "fat": 0, "carb": 80.4, "calories": 305 },
    { "id": 85, "name": "Цукор", "prot": 0.3, "fat": 0, "carb": 99.5, "calories": 374},
    { "id": 86, "name": "Халва тахінна", "prot": 12.7, "fat": 29.9, "carb": 50.6, "calories": 510 },
    { "id": 87, "name": "Халва соняшникова", "prot": 11.6, "fat": 29.7, "carb": 54, "calories": 516 },
    { "id": 88, "name": "Шоколад темний", "prot": 5.4, "fat": 35.3, "carb": 52.6, "calories": 540 },
    { "id": 89, "name": "Шоколад молочний", "prot": 6.9, "fat": 35.7, "carb": 52.4, "calories": 547},
    { "id": 90, "name": "Вафлі з фруктовими начинками", "prot": 3.2, "fat": 2.8, "carb": 80.1, "calories": 342},
    { "id": 91, "name": "Вафлі з жировмісними начинками", "prot": 3.4, "fat": 30.2, "carb": 64.7, "calories": 530 },
    { "id": 92, "name": "Тистечко листкове з кремом", "prot": 5.4, "fat": 38.6, "carb": 46.4, "calories": 544 },
    { "id": 93, "name": "Тистечко листкове з яблуком", "prot": 5.7, "fat": 25.6, "carb": 52.7, "calories": 454 },
    { "id": 94, "name": "Тистечко бісквітне з фруктовою начинкою", "prot": 4.7, "fat": 9.3, "carb": 84.4, "calories": 344 },
    { "id": 95, "name": "Пряники", "prot": 4.8, "fat": 2.8, "carb": 77.7, "calories": 336},
    { "id": 96, "name": "Торт бісквітний з фруктовою начинкою", "prot": 4.7, "fat": 20, "carb": 49.8, "calories": 386},
    { "id": 97, "name": "Торт мигдальний", "prot": 6.6, "fat": 35.8, "carb": 46.8, "calories": 524},
    { "id": 98, "name": "Хліб житній", "prot": 4.7, "fat": 0.7, "carb": 49.8, "calories": 214},
    { "id": 99, "name": "Хліб пшеничний з борошна I сорту", "prot": 7.7, "fat": 2.4, "carb": 53.4, "calories": 254},
    { "id": 100, "name": "Здобна випічка", "prot": 7.6, "fat": 4.5, "carb": 60.0, "calories": 297},
    { "id": 101, "name": "Баранки", "prot": 10.4, "fat": 1.3, "carb": 68.7, "calories": 312 },
    { "id": 102, "name": "Сушіння", "prot": 11.0, "fat": 1.3, "carb": 73.0, "calories": 330 },
    { "id": 103, "name": "Сухарі пшеничні", "prot": 11.2, "fat": 1.4,"carb": 72.4, "calories": 331},
    { "id": 104, "name": "Сухарі вершкові", "prot": 8.5, "fat": 10.6, "carb": 71.3, "calories": 397},
    { "id": 105, "name": "Борошно пшеничне вищого ґатунку", "prot": 10.3, "fat": 0.9, "carb": 74.2, "calories": 327 },
    { "id": 106, "name": "Борошно пшеничне I сорту", "prot": 10.6, "fat": 1.3, "carb": 73.2, "calories": 329 },
    { "id": 107, "name": "Борошно пшеничне II сорту", "prot": 11.7, "fat": 1.8, "carb": 70.8, "calories": 328 },
    { "id": 108, "name": "Борошно житнє", "prot": 6.9, "fat": 1.1, "carb": 76.9, "calories": 326 },
    { "id": 109, "name": "Грецька ядриця", "prot": 12.6, "fat": 2.6, "carb": 68.0, "calories": 329 },
    { "id": 110, "name": "Грецька проділ", "prot": 9.5, "fat": 1.9, "carb": 72.2, "calories": 326 },
    { "id": 111, "name": "манна", "prot": 11.3, "fat": 0.7, "carb": 73.3, "calories": 326},
    { "id": 112, "name": "Вівсяна", "prot": 11.9, "fat": 5.8, "carb": 65.4, "calories": 345 },
    { "id": 113, "name": "Перлова", "prot": 9.3, "fat": 1.1, "carb": 73.7, "calories": 324},
    { "id": 114, "name": "Пшоно", "prot": 12.0, "fat": 2.9, "carb": 69.3, "calories": 334 },
    { "id": 115, "name": "Рисова", "prot": 7.0, "fat": 0.6, "carb": 73.7, "calories": 323},
    { "id": 116, "name": "Пшенична \"Полтавська\"", "prot": 12.7, "fat": 1.1, "carb": 70.6, "calories": 325 },
    { "id": 117, "name": "Толокно", "prot": 12.2, "fat": 5.8, "carb": 68.3, "calories": 357 },
    { "id": 118, "name": "Ячна", "prot": 10.4, "fat": 1.3, "carb": 71.7, "calories": 322 },
    { "id": 119, "name": "Геркулес", "prot": 13.1, "fat": 6.2, "carb": 65.7, "calories": 355},
    { "id": 120, "name": "Кукурузна", "prot": 8.3, "fat": 1.2, "carb": 75.0, "calories": 325 },
    { "id": 121, "name": "Боби", "prot": 6.0, "fat": 0.1, "carb": 8.3, "calories": 58 },
    { "id": 122, "name": "Горох лущений", "prot": 23.0, "fat": 1.6, "carb": 57.7, "calories": 323},
    { "id": 123, "name": "Горох цілісний", "prot": 23.0, "fat": 1.2, "carb": 53.3, "calories": 303},
    { "id": 124, "name": "Соя", "prot": 34.9, "fat": 17.3, "carb": 26.5, "calories": 395 },
    { "id": 125, "name": "Квасоля", "prot": 22.3, "fat": 1.7, "carb": 54.5, "calories": 309 },
    { "id": 126, "name": "Сочевиця", "prot": 24.8, "fat": 1.1, "carb": 53.7, "calories": 310},
    { "id": 127, "name": "Білі свіжі (гриби)", "prot": 3.2, "fat": 0.7, "carb": 1.6, "calories": 25 },
    { "id": 128, "name": "Білі сушені (гриби)", "prot": 27.6, "fat": 6.8, "carb": 10.0, "calories": 209 },
    { "id": 129, "name": "Підберезники свіжі (гриби)", "prot": 2.3, "fat": 0.9, "carb": 3.7, "calories": 31 },
    { "id": 130, "name": "Подосиновики свіжі (гриби)", "prot": 3.3, "fat": 0.5, "carb": 3.4, "calories": 31 },
    { "id": 131, "name": "Сироїжі свіжі (гриби)", "prot": 1.7, "fat": 0.3, "carb": 1.4, "calories": 17 },
    { "id": 132, "name": "Баранина", "prot": 16.3, "fat": 15.3, "carb": 0.0, "calories": 203},
    { "id": 133, "name": "яловичина", "prot": 18.9, "fat": 12.4, "carb": 0.0, "calories": 187},
    { "id": 134, "name": "Коніна", "prot": 20.2, "fat": 7.0, "carb": 0.0, "calories": 143},
    { "id": 135, "name": "Кролик", "prot": 20.7, "fat": 12.9, "carb": 0.0, "calories": 199},
    { "id": 136, "name": "Свинина нежирна", "prot": 16.4, "fat": 27.8, "carb": 0.0, "calories": 316},
    { "id": 137, "name": "Свинина жирна", "prot": 11.4, "fat": 49.3, "carb": 0.0, "calories": 489},
    { "id": 138, "name": "Телятина", "prot": 19.7, "fat": 1.2, "carb": 0.0, "calories": 90 },
    { "id": 139, "name": "Бараньї Нирки", "prot": 13.6, "fat": 2.5, "carb": 0.0, "calories": 77 },
    { "id": 140, "name": "Баранія Печінка", "prot": 18.7, "fat": 2.9, "carb": 0.0, "calories": 101 },
    { "id": 141, "name": "Барання Серце", "prot": 13.5, "fat": 2.5, "carb": 0.0, "calories": 82 },
    { "id": 142, "name": "Яловичі Мізки", "prot": 9.5, "fat": 9.5, "carb": 0.0, "calories": 124},
    { "id": 143, "name": "Яловича Печінка", "prot": 17.4, "fat": 3.1, "carb": 0.0, "calories": 98 },
    { "id": 144, "name": "яловичі нирки", "prot": 12.5, "fat": 1.8, "carb": 0.0, "calories": 66},
    { "id": 145, "name": "Яловиче Вим'я", "prot": 12.3, "fat": 13.7, "carb": 0.0, "calories": 173 },
    { "id": 146, "name": "Яловиче Серце", "prot": 15.0, "fat": 3.0, "carb": 0.0, "calories": 87 },
    { "id": 147, "name": "Яв'яча Мова", "prot": 13.6, "fat": 12.1, "carb": 0.0, "calories": 163},
    { "id": 148, "name": "Нирки свинячі", "prot": 13.0, "fat": 3.1, "carb": 0.0, "calories": 80},
    { "id": 149, "name": "Печень свиняча", "prot": 18.8, "fat": 3.6, "carb": 0.0, "calories": 108},
    { "id": 150, "name": "Серце свиняче", "prot": 15.1, "fat": 3.2, "carb": 0.0, "calories": 89},
    { "id": 151, "name": "Мова свинячий", "prot": 14.2, "fat": 16.8, "carb": 0.0, "calories": 208},
    { "id": 152, "name": "Гуси", "prot": 16.1, "fat": 33.3,"carb": 0.0, "calories": 364},
    { "id": 153, "name": "Індейка", "prot": 21.6, "fat": 12.0, "carb": 0.8, "calories": 197},
    { "id": 154, "name": "Кури", "prot": 20.8, "fat": 8.8, "carb": 0.6, "calories": 165},
    { "id": 155, "name": "Куриня грудка (філе)", "prot": 23.6, "fat": 1.9, "carb": 0.4, "calories": 113 },
    { "id": 156, "name": "Курчата", "prot": 18.7, "fat": 7.8, "carb": 0.4, "calories": 156 },
    { "id": 157, "name": "Качки", "prot": 16.5, "fat": 61.2, "carb": 0.0, "calories": 346},
    { "id": 158, "name": "Варена ковбаса Діабетична", "prot": 12.1, "fat": 22.8, "carb": 0.0, "calories": 254 },
    { "id": 159, "name": "Варена ковбаса Дієтична", "prot": 12.1, "fat": 13.5, "carb": 0.0, "calories": 170 },
    { "id": 160, "name": "Варена ковбаса Лікарська", "prot": 13.7, "fat": 22.8, "carb": 0.0, "calories": 260 },
    { "id": 161, "name": "Варена ковбаса Аматорська", "prot": 12.2, "fat": 28.0, "carb": 0.0, "calories": 301 },
    { "id": 162, "name": "Варена ковбаса Молочна", "prot": 11.7, "fat": 22.8, "carb": 0.0, "calories": 252 },
    { "id": 163, "name": "Варена ковбаса Окрема", "prot": 10.1, "fat": 20.1, "carb": 1.8, "calories": 228 },
    { "id": 164, "name": "Варена ковбаса Теляча", "prot": 12.5, "fat": 29.6, "carb": 0.0, "calories": 316 },
    { "id": 165, "name": "Сардельки Свинячі", "prot": 10.1, "fat": 31.6, "carb": 1.9, "calories": 332 },
    { "id": 166, "name": "Сосиски Молочні", "prot": 12.3, "fat": 25.3, "carb": 0.0, "calories": 277},
    { "id": 167, "name": "Сосиски Російські", "prot": 12.0, "fat": 19.1, "carb": 0.0, "calories": 220},
    { "id": 168, "name": "Сосиски Свинячі", "prot": 11.8, "fat": 30.8, "carb": 0.0, "calories": 324},
    { "id": 169, "name": "Варено-копчена Аматорська", "prot": 17.3, "fat": 39.0, "carb": 0.0, "calories": 420 },
    { "id": 170, "name": "Варено-копчена Сервелат", "prot": 28.2, "fat": 27.5, "carb": 0.0, "calories": 360 },
    { "id": 171, "name": "Напівкопчена Краківська", "prot": 16.2, "fat": 44.6, "carb": 0.0, "calories": 466 },
    { "id": 172, "name": "Напівкопчена Мінська", "prot": 23.0, "fat": 17.4, "carb": 2.7, "calories": 259 },
    { "id": 173, "name": "Напівкопчена Полтавська", "prot": 16.4, "fat": 39.0, "carb": 0.0, "calories": 417 },
    { "id": 174, "name": "Напівкопчена Українська", "prot": 16.5, "fat": 34.4, "carb": 0.0, "calories": 376 },
    { "id": 175, "name": "Сирокопчена Аматорська", "prot": 20.9, "fat": 47.8, "carb": 0.0, "calories": 514 },
    { "id": 176, "name": "Сирокопчена Московська", "prot": 24.8, "fat": 41.5, "carb": 0.0, "calories": 473},
    { "id": 177, "name": "Яловичина тушкована", "prot": 16.8, "fat": 18.3, "carb": 0.0, "calories": 232 },
    { "id": 178, "name": "Сніданок туриста (яловичина)", "prot": 20.5, "fat": 10.4, "carb": 0.0, "calories": 176},
    { "id": 179, "name": "Сніданок туриста (свинина)", "prot": 16.9, "fat": 15.4, "carb": 0.0, "calories": 206},
    { "id": 180, "name": "Ковбасний фарш", "prot": 15.2, "fat": 15.7, "carb": 2.8, "calories": 213},
    { "id": 181, "name": "Свинина тушкована", "prot": 14.9, "fat": 32.2, "carb": 0.0, "calories": 349},
    { "id": 182, "name": "Грудинка сирокопчена", "prot": 7.6, "fat": 66.8, "carb": 0.0, "calories": 632},
    { "id": 183, "name": "Корейка сирокопчена", "prot": 10.5, "fat": 47.2, "carb": 0.0, "calories": 467},
    { "id": 184, "name": "Шинка", "prot": 22.6, "fat": 20.9, "carb": 0.0, "calories": 279},
    { "id": 185, "name": "Жир баранячий або яловичий топлений", "prot": 0.0, "fat": 99.7, "carb": 0.0, "calories": 897},
    { "id": 186, "name": "Шпик свинячий (без шкірки)", "prot": 1.4, "fat": 92.8, "carb": 0.0, "calories": 816 },
    { "id": 187, "name": "Маргарин молочний", "prot": 0.3, "fat": 82.3, "carb": 1.0, "calories": 746},
    { "id": 188, "name": "Маргарин бутербродний", "prot": 0.5, "fat": 82.0, "carb": 1.2, "calories": 744},
    { "id": 189, "name": "Майонез", "prot": 3.1, "fat": 67.0, "carb": 2.6, "calories": 627},
    { "id": 190, "name": "Олія рослинна", "prot": 0.0, "fat": 99.9, "carb": 0.0, "calories": 899 },
    { "id": 191, "name": "Олія вершкове", "prot": 0.6, "fat": 82.5, "carb": 0.9, "calories": 748},
    { "id": 192, "name": "Олія топлена", "prot": 0.3, "fat": 98.0, "carb": 0.6, "calories": 887 },
    { "id": 193, "name": "Бринза з коров'ячого молока", "prot": 17.9, "fat": 20.1, "carb": 0.0, "calories": 260},
    { "id": 194, "name": "Йогурт натуральний 1.5% жирності", "prot": 5.0, "fat": 1.5, "carb": 3.5, "calories": 51 },
    { "id": 195, "name": "Кефір нежирний", "prot": 3.0, "fat": 0.1, "carb": 3.8, "calories": 30},
    { "id": 196, "name": "Кефір жирний", "prot": 2.8, "fat": 3.2, "carb": 4.1, "calories": 59},
    { "id": 197, "name": "Молоко", "prot": 2.8, "fat": 3.2, "carb": 4.7, "calories": 58},
    { "id": 198, "name": "Молоко ацидофільне", "prot": 2.8, "fat": 3.2, "carb": 10.8, "calories": 83},
    { "id": 199, "name": "Молоко сухе незбиране", "prot": 25.6, "fat": 25.0, "carb": 39.4, "calories": 475 },
    { "id": 200, "name": "Молоко згущене", "prot": 7.0, "fat": 7.9, "carb": 9.5, "calories": 135 },
    { "id": 201, "name": "Молоко згущене з цукром", "prot": 7.2, "fat": 8.5, "carb": 56.0, "calories": 315 },
    { "id": 202, "name": "Простокваша", "prot": 2.8, "fat": 3.2, "carb": 4.1, "calories": 58 },
    { "id": 203, "name": "Ряжанка", "prot": 3.0, "fat": 6.0, "carb": 4.1, "calories": 85 },
    { "id": 204, "name": "Вершки 10%", "prot": 3.0, "fat": 10.0, "carb": 4.0, "calories": 118},
    { "id": 205, "name": "Вершки 20%", "prot": 2.8, "fat": 20.0, "carb": 3.6, "calories": 205},
    { "id": 206, "name": "Сметана 10%", "prot": 3.0, "fat": 10.0, "carb": 2.9, "calories": 116},
    { "id": 207, "name": "Сметана 20%", "prot": 2.8, "fat": 20.0, "carb": 3.2, "calories": 206},
    { "id": 208, "name": "Сирки та маса сирні особливі", "prot": 7.1, "fat": 23.0, "carb": 27.5, "calories": 340},
    { "id": 209, "name": "Сир російський", "prot": 23.4, "fat": 30.0, "carb": 0.0, "calories": 371},
    { "id": 210, "name": "Сир голландський", "prot": 26.8, "fat": 27.3, "carb": 0.0, "calories": 361},
    { "id": 211, "name": "Сир швейцарський", "prot": 24.9, "fat": 31.8, "carb": 0.0, "calories": 396},
    { "id": 212, "name": "Сир пошехонський", "prot": 26.0, "fat": 26.5, "carb": 0.0, "calories": 334},
    { "id": 213, "name": "Сир плавлений", "prot": 24.0, "fat": 13.5, "carb": 0.0, "calories": 226},
    { "id": 214, "name": "Творог жирний", "prot": 14.0, "fat": 18.0, "carb": 1.3, "calories": 226 },
    { "id": 215, "name": "Напівжирний сир", "prot": 16.7, "fat": 9.0, "carb": 1.3, "calories": 156 },
    { "id": 216, "name": "Тир нежирний", "prot": 18.0, "fat": 0.6, "carb": 1.5, "calories": 86 },
    { "id": 217, "name": "Яйце куряче", "prot": 12.7, "fat": 11.5, "carb": 0.7, "calories": 157 },
    { "id": 218, "name": "Яєчний порошок", "prot": 45.0, "fat": 37.3, "carb": 7.1, "calories": 542},
    { "id": 219, "name": "Сухий білок", "prot": 73.3, "fat": 1.8, "carb": 7.0, "calories": 336},
    { "id": 220, "name": "Сухий жовток", "prot": 34.2, "fat": 52.2, "carb": 4.4, "calories": 623},
    { "id": 221, "name": "Яйце перепелине", "prot": 11.9, "fat": 13.1, "carb": 0.6, "calories": 168},
    { "id": 222, "name": "Бички", "prot": 12.8, "fat": 8.1, "carb": 5.2, "calories": 145},
    { "id": 223, "name": "Горбуша", "prot": 21.0, "fat": 7.0, "carb": 0.0, "calories": 147},
    { "id": 224, "name": "Камбала", "prot": 16.1, "fat": 2.6, "carb": 0.0, "calories": 88},
    { "id": 225, "name": "Карась", "prot": 17.7, "fat": 1.8, "carb": 0.0, "calories": 87},
    { "id": 226, "name": "Карп", "prot": 16.0, "fat": 3.6, "carb": 0.0, "calories": 96},
    { "id": 227, "name": "Кета", "prot": 22.0, "fat": 5.6, "carb": 0.0, "calories": 138},
    { "id": 228, "name": "Корюшка", "prot": 15.5, "fat": 3.2, "carb": 0.0, "calories": 91 },
    { "id": 229, "name": "Крижана", "prot": 15.5, "fat": 1.4, "carb": 0.0, "calories": 75 },
    { "id": 230, "name": "Лещ", "prot": 17.1, "fat": 4.1, "carb": 0.0, "calories": 105},
    { "id": 231, "name": "Сьомга", "prot": 20.8, "fat": 15.1, "carb": 0.0, "calories": 219 },
    { "id": 232, "name": "Макрурус", "prot": 13.2, "fat": 0.8, "carb": 0.0, "calories": 60},
    { "id": 233, "name": "Мінога", "prot": 14.7, "fat": 11.9, "carb": 0.0, "calories": 166},
    { "id": 234, "name": "Мінтай", "prot": 15.9, "fat": 0.7, "carb": 0.0, "calories": 70},
    { "id": 235, "name": "Мойва", "prot": 13.4, "fat": 11.5, "carb": 0.0, "calories": 157},
    { "id": 236, "name": "Навага", "prot": 16.1, "fat": 1.0, "carb": 0.0, "calories": 73},
    { "id": 237, "name": "Налим", "prot": 18.8, "fat": 0.6, "carb": 0.0, "calories": 81 },
    { "id": 238, "name": "Нототенія мармурова", "prot": 14.8, "fat": 10.7, "carb": 0.0, "calories": 156 },
    { "id": 239, "name": "Окунь морський", "prot": 17.6, "fat": 5.2, "carb": 0.0, "calories": 117},
    { "id": 240, "name": "Окунь річковий", "prot": 18.5, "fat": 0.9, "carb": 0.0, "calories": 82},
    { "id": 241, "name": "Осетр", "prot": 16.4, "fat": 10.9, "carb": 0.0, "calories": 164},
    { "id": 242, "name": "Палтус", "prot": 18.9, "fat": 3.0, "carb": 0.0, "calories": 103},
    { "id": 243, "name": "Путассу", "prot": 16.1, "fat": 0.9, "carb": 0.0, "calories": 72},
    { "id": 244, "name": "Риба-шабля", "prot": 20.3, "fat": 3.2, "carb": 0.0, "calories": 110},
    { "id": 245, "name": "Рибець каспійський", "prot": 19.2, "fat": 2.4, "carb": 0.0, "calories": 98},
    { "id": 246, "name": "Сазан", "prot": 18.4, "fat": 5.3, "carb": 0.0, "calories": 121},
    { "id": 247, "name": "Сайра велика", "prot": 18.6, "fat": 20.8, "carb": 0.0, "calories": 262},
    { "id": 248, "name": "Сайра дрібна", "prot": 20.4, "fat": 0.8, "carb": 0.0, "calories": 143 },
    { "id": 249, "name": "Салака", "prot": 17.3, "fat": 5.6, "carb": 0.0, "calories": 121},
    { "id": 250, "name": "Оселедець", "prot": 17.7, "fat": 19.5, "carb": 0.0, "calories": 242},
    { "id": 251, "name": "Сіг", "prot": 19.0, "fat": 7.5, "carb": 0.0, "calories": 144},
    { "id": 252, "name": "Скумбрія", "prot": 18.0, "fat": 9.0, "carb": 0.0, "calories": 153},
    { "id": 253, "name": "Сом", "prot": 16.8, "fat": 8.5, "carb": 0.0, "calories": 144},
    { "id": 254, "name": "Ставрида", "prot": 18.5, "fat": 5.0, "carb": 0.0, "calories": 119},
    { "id": 255, "name": "Стерлядь", "prot": 17.0, "fat": 6.1, "carb": 0.0, "calories": 320},
    { "id": 256, "name": "Судак", "prot": 19.0, "fat": 0.8, "carb": 0.0, "calories": 83},
    { "id": 257, "name": "Тріска", "prot": 17.5, "fat": 0.6, "carb": 0.0, "calories": 75 },
    { "id": 258, "name": "Тунець", "prot": 22.7, "fat": 0.7, "carb": 0.0, "calories": 96 },
    { "id": 259, "name": "Вугільна риба", "prot": 13.2, "fat": 11.6, "carb": 0.0, "calories": 158},
    { "id": 260, "name": "Вугор морський", "prot": 19.1, "fat": 1.9, "carb": 0.0, "calories": 94 },
    { "id": 261, "name": "Вугор", "prot": 14.5, "fat": 30.5, "carb": 0.0, "calories": 333},
    { "id": 262, "name": "Хек", "prot": 16.6, "fat": 2.2, "carb": 0.0, "calories": 86},
    { "id": 263, "name": "Щука", "prot": 18.8, "fat": 0.7, "carb": 0.0, "calories": 82},
    { "id": 264, "name": "Язь", "prot": 18.2, "fat": 0.3, "carb": 0.0, "calories": 117},
    { "id": 265, "name": "Креветка далекосхідна", "prot": 28.7, "fat": 1.2, "carb": 0.0, "calories": 134},
    { "id": 266, "name": "Печень тріски", "prot": 4.2, "fat": 65.7, "carb": 0.0, "calories": 613},
    { "id": 267, "name": "Кальмар", "prot": 18.0, "fat": 0.3, "carb": 0.0, "calories": 75},
    { "id": 268, "name": "Краб", "prot": 16.0, "fat": 0.5, "carb": 0.0, "calories": 69},
    { "id": 269, "name": "Креветка", "prot": 18.0, "fat": 0.8, "carb": 0.0, "calories": 83},
    { "id": 270, "name": "Морська капуста", "prot": 0.9, "fat": 0.2, "carb": 3.0, "calories": 5},
    { "id": 271, "name": "Паста \"Океан\"", "prot": 18.9, "fat": 6.8, "carb": 0.0, "calories": 137},
    { "id": 272, "name": "Трепанг", "prot": 7.3, "fat": 0.6, "carb": 0.0, "calories": 35},
    { "id": 273, "name": "Кети зерниста (ікра)", "prot": 31.6, "fat": 13.8, "carb": 0.0, "calories": 251 },
    { "id": 274, "name": "Ліщова пробійна (ікра)", "prot": 24.7, "fat": 4.8, "carb": 0.0, "calories": 142 },
    { "id": 275, "name": "Мінтаєва пробійна (ікра)", "prot": 28.4, "fat": 1.9, "carb": 0.0, "calories": 131 },
    { "id": 276, "name": "Осетрова зерниста (ікра)", "prot": 28.9, "fat": 9.7, "carb": 0.0, "calories": 203 },
    { "id": 277, "name": "Осетрова пробійна (ікра)", "prot": 36.0, "fat": 10.2, "carb": 0.0, "calories": 123 },
    { "id": 278, "name": "Фундук", "prot": 16.1, "fat": 66.9, "carb": 9.9, "calories": 704},
    { "id": 279, "name": "Миндаль", "prot": 18.6, "fat": 57.7, "carb": 13.6, "calories": 645},
    { "id": 280, "name": "Волоський горіх", "prot": 13.8, "fat": 61.3, "carb": 10.2, "calories": 648 },
    { "id": 281, "name": "Арахіс", "prot": 26.3, "fat": 45.2, "carb": 9.7, "calories": 548},
  ],
  en: [
        { "id": 1, "name": "Eggplant", "prot": 0.6, "fat": 0.1, "carb": 5.5, "calories": 24 },
        { "id": 2, "name": "Rutabaga", "prot": 1.2, "fat": 0.1, "carb": 8.1, "calories": 37 },
        { "id": 3, "name": "Green peas", "prot": 5.0, "fat": 0.2, "carb": 13.3, "calories": 72 },
        { "id": 4, "name": "Zucchini", "prot": 0.6, "fat": 0.3, "carb": 5.7, "calories": 27 },
        { "id": 5, "name": "White cabbage", "prot": 1.8, "fat": 0, "carb": 5.4, "calories": 28 },
        { "id": 6, "name": "Red cabbage", "prot": 1.8, "fat": 0, "carb": 6.1, "calories": 31 },
        { "id": 7, "name": "Cauliflower", "prot": 2.5, "fat": 0, "carb": 4.9, "calories": 29 },
        { "id": 8, "name": "Potato", "prot": 2.0, "fat": 0.1, "carb": 19.7, "calories": 83 },
        { "id": 9, "name": "Green onion (feather)", "prot": 1.3, "fat": 0, "carb": 4.3, "calories": 22 },
        { "id": 10, "name": "Leek", "prot": 3.0, "fat": 0, "carb": 7.3, "calories": 40 },
        { "id": 11, "name": "Onion", "prot": 1.7, "fat": 0, "carb": 9.5, "calories": 43 },
        { "id": 12, "name": "Red carrots", "prot": 1.3, "fat": 0.1, "carb": 7.0, "calories": 33 },
        { "id": 13, "name": "Ground cucumbers", "prot": 0.8, "fat": 0, "carb": 3.0, "calories": 15 },
        { "id": 14, "name": "Greenhouse cucumbers", "prot": 0.7, "fat": 0, "carb": 1.8, "calories": 10 },
        { "id": 15, "name": "Sweet green pepper", "prot": 1.3, "fat": 0, "carb": 4.7, "calories": 23 },
        { "id": 16, "name": "Sweet red pepper", "prot": 1.3, "fat": 0, "carb": 5.7, "calories": 27 },
        { "id": 17, "name": "Parsley (greens)", "prot": 3.7, "fat": 0, "carb": 8.1, "calories": 45 },
        { "id": 18, "name": "Parsley (root)", "prot": 1.5, "fat": 0, "carb": 11.0, "calories": 47 },
        { "id": 19, "name": "Rhubarb (petiole)", "prot": 0.7, "fat": 0, "carb": 2.9, "calories": 16 },
        { "id": 20, "name": "Radish", "prot": 1.2, "fat": 0, "carb": 4.1, "calories": 20 },
        { "id": 21, "name": "Radish", "prot": 1.9, "fat": 0, "carb": 7.0, "calories": 34 },
        { "id": 22, "name": "Turnip", "prot": 1.5, "fat": 0, "carb": 5.9, "calories": 28 },
        { "id": 23, "name": "Salad", "prot": 1.5, "fat": 0, "carb": 2.2, "calories": 14 },
        { "id": 24, "name": "Beets", "prot": 1.7, "fat": 0, "carb": 10.8, "calories": 48 },
        { "id": 25, "name": "Tomatoes (ground)", "prot": 0.6, "fat": 0, "carb": 4.2, "calories": 19 },
        { "id": 26, "name": "Tomatoes (greenhouse)", "prot": 0.6, "fat": 0, "carb": 2.9, "calories": 14 },
        { "id": 27, "name": "Green beans (pod)", "prot": 4.0, "fat": 0, "carb": 4.3, "calories": 32 },
        { "id": 28, "name": "Horseradish", "prot": 2.5, "fat": 0, "carb": 16.3, "calories": 71 },
        { "id": 29, "name": "Wilson", "prot": 2.4, "fat": 0, "carb": 6.5, "calories": 34 },
        { "id": 30, "name": "Garlic", "prot": 6.5, "fat": 0, "carb": 21.2, "calories": 106 },
        { "id": 31, "name": "Spinach", "prot": 2.9, "fat": 0, "carb": 2.3, "calories": 21 },
        { "id": 32, "name": "Sorrel", "prot": 1.5, "fat": 0, "carb": 5.3, "calories": 28 },
        { "id": 33, "name": "Apricots", "prot": 0.9, "fat": 0, "carb": 10.5, "calories": 46 },
        { "id": 34, "name": "Quince", "prot": 0.6, "fat": 0, "carb": 8.9, "calories": 38 },
        { "id": 35, "name": "Cherry plum", "prot": 0.2, "fat": 0, "carb": 7.4, "calories": 34 },
        { "id": 36, "name": "Pineapple", "prot": 0.4, "fat": 0, "carb": 11.8, "calories": 48 },
        { "id": 37, "name": "Bananas", "prot": 1.5, "fat": 0, "carb": 22.4, "calories": 91 },
        { "id": 38, "name": "Cherry", "prot": 0.8, "fat": 0, "carb": 11.3, "calories": 49 },
        { "id": 39, "name": "Pomegranate", "prot": 0.9, "fat": 0, "carb": 11.8, "calories": 52 },
        { "id": 40, "name": "Pear", "prot": 0.4, "fat": 0, "carb": 10.7, "calories": 42 },
        { "id": 41, "name": "Fig", "prot": 0.7, "fat": 0, "carb": 13.9, "calories": 56 },
        { "id": 42, "name": "Dogwood", "prot": 1.0, "fat": 0, "carb": 9.7, "calories": 45 },
        { "id": 43, "name": "Peaches", "prot": 0.9, "fat": 0, "carb": 10.4, "calories": 44 },
        { "id": 44, "name": "Rowan", "prot": 1.4, "fat": 0, "carb": 12.5, "calories": 58 },
        { "id": 45, "name": "Chokeberry", "prot": 1.5, "fat": 0, "carb": 12.0, "calories": 54 },
        { "id": 46, "name": "Garden plum", "prot": 0.8, "fat": 0, "carb": 9.9, "calories": 43 },
        { "id": 47, "name": "Dates", "prot": 2.5, "fat": 0, "carb": 72.1, "calories": 281 },
        { "id": 48, "name": "Persimmon", "prot": 0.5, "fat": 0, "carb": 15.9, "calories": 62 },
        { "id": 49, "name": "Cherry", "prot": 1.1, "fat": 0, "carb": 12.3, "calories": 52 },
        { "id": 50, "name": "Mulberry", "prot": 0.7, "fat": 0, "carb": 12.7, "calories": 53 },
        { "id": 51, "name": "Apples", "prot": 0.4, "fat": 0, "carb": 11.3, "calories": 46 },
        { "id": 52, "name": "Orange", "prot": 0.9, "fat": 0, "carb": 8.4, "calories": 38 },
        { "id": 53, "name": "Grapefruit", "prot": 0.9, "fat": 0,"carb": 7.3, "calories": 35 },
        { "id": 54, "name": "Lemon", "prot": 0.9, "fat": 0, "carb": 3.6, "calories": 31 },
        { "id": 55, "name": "Mandarin", "prot": 0.8, "fat": 0, "carb": 8.6, "calories": 38 },
        { "id": 56, "name": "Lingonberry", "prot": 0.7, "fat": 0, "carb": 8.6, "calories": 40 },
        { "id": 57, "name": "Grapes", "prot": 0.4, "fat": 0, "carb": 17.5, "calories": 69 },
        { "id": 58, "name": "Blueberry", "prot": 1.0, "fat": 0, "carb": 7.7, "calories": 37 },
        { "id": 59, "name": "Blackberry", "prot": 2.0, "fat": 0, "carb": 5.3, "calories": 33 },
        { "id": 60, "name": "Strawberry", "prot": 1.8, "fat": 0, "carb": 8.1, "calories": 41 },
        { "id": 61, "name": "Cranberry", "prot": 0.5, "fat": 0, "carb": 4.8, "calories": 28 },
        { "id": 62, "name": "Gooseberry", "prot": 0.7, "fat": 0, "carb": 9.9, "calories": 44 },
        { "id": 63, "name": "Raspberry", "prot": 0.8, "fat": 0, "carb": 9.0, "calories": 41 },
        { "id": 64, "name": "Cloudberry", "prot": 0.8, "fat": 0, "carb": 6.8, "calories": 31 },
        { "id": 65, "name": "Sea Buckthorn", "prot": 0.9, "fat": 0, "carb": 5.5, "calories": 30 },
        { "id": 66, "name": "White currant", "prot": 0.3, "fat": 0, "carb": 8.7, "calories": 39 },
        { "id": 67, "name": "Red currant", "prot": 0.6, "fat": 0, "carb": 8.0, "calories": 38 },
        { "id": 68, "name": "Black currant", "prot": 1.0, "fat": 0, "carb": 8.0, "calories": 40 },
        { "id": 69, "name": "Blueberry", "prot": 1.1, "fat": 0, "carb": 8.6, "calories": 40 },
        { "id": 70, "name": "Fresh rosehip", "prot": 1.6, "fat": 0, "carb": 24.0, "calories": 101 },
        { "id": 71, "name": "Dried rosehip", "prot": 4.0, "fat": 0, "carb": 60.0, "calories": 253 },
        { "id": 72, "name": "Uryuk", "prot": 5.0, "fat": 0, "carb": 67.5, "calories": 278 },
        { "id": 73, "name": "Apricots", "prot": 5.2, "fat": 0, "carb": 65.9, "calories": 272 },
        { "id": 74, "name": "Raisin with pit", "prot": 1.8, "fat": 0, "carb": 70.9, "calories": 276 },
        { "id": 75, "name": "Kishmish raisins", "prot": 2.3, "fat": 0, "carb": 71.2, "calories": 279 },
        { "id": 76, "name": "Prunes", "prot": 2.3, "fat": 0, "carb": 65.6, "calories": 264 },
        { "id": 77, "name": "Honey", "prot": 0.8, "fat": 0, "carb": 80.3, "calories": 308 },
        { "id": 78, "name": "Fruit dragee", "prot": 3.7, "fat": 10.2, "carb": 73.1, "calories": 384 },
        { "id": 79, "name": "Marshmallow", "prot": 0.8, "fat": 0, "carb": 78.3, "calories": 299 },
        { "id": 80, "name": "Iris", "prot": 3.3, "fat": 7.5, "carb": 81.8, "calories": 387 },
        { "id": 81, "name": "Marmalade", "prot": 0, "fat": 0.1, "carb": 77.7, "calories": 296 },
        { "id": 82, "name": "Caramel (average)", "prot": 0, "fat": 0.1, "carb": 77.7, "calories": 296 },
        { "id": 83, "name": "Chocolate coated candies", "prot": 2.9, "fat": 10.7, "carb": 76.6, "calories": 396 },
        { "id": 84, "name": "Pastilla", "prot": 0.5, "fat": 0, "carb": 80.4, "calories": 305 },
        { "id": 85, "name": "Sugar", "prot": 0.3, "fat": 0, "carb": 99.5, "calories": 374 },
        { "id": 86, "name": "Tahini halva", "prot": 12.7, "fat": 29.9, "carb": 50.6, "calories": 510 },
        { "id": 87, "name": "Sunflower halva", "prot": 11.6, "fat": 29.7, "carb": 54, "calories": 516 },
        { "id": 88, "name": "Dark chocolate", "prot": 5.4, "fat": 35.3, "carb": 52.6, "calories": 540 },
        { "id": 89, "name": "Milk chocolate", "prot": 6.9, "fat": 35.7, "carb": 52.4, "calories": 547 },
        { "id": 90, "name": "Waffles with fruit fillings", "prot": 3.2, "fat": 2.8, "carb": 80.1, "calories": 342 },
        { "id": 91, "name": "Waffles with fat-containing fillings", "prot": 3.4, "fat": 30.2, "carb": 64.7, "calories": 530 },
        { "id": 92, "name": "Puff pastry with cream", "prot": 5.4, "fat": 38.6, "carb": 46.4, "calories": 544 },
        { "id": 93, "name": "Puff pastry with apple", "prot": 5.7, "fat": 25.6, "carb": 52.7, "calories": 454 },
        { "id": 94, "name": "Sponge cake with fruit filling", "prot": 4.7, "fat": 9.3, "carb": 84.4, "calories": 344 },
        { "id": 95, "name": "Gingerbread", "prot": 4.8, "fat": 2.8, "carb": 77.7, "calories": 336 },
        { "id": 96, "name": "Sponge cake with fruit filling", "prot": 4.7, "fat": 20, "carb": 49.8, "calories": 386 },
        { "id": 97, "name": "Almond cake", "prot": 6.6, "fat": 35.8, "carb": 46.8, "calories": 524 },
        { "id": 98, "name": "Rye bread", "prot": 4.7, "fat": 0.7, "carb": 49.8, "calories": 214 },
        { "id": 99, "name": "Wheat bread from grade I flour", "prot": 7.7, "fat": 2.4, "carb": 53.4, "calories": 254 },
        { "id": 100, "name": "Butter baked goods", "prot": 7.6, "fat": 4.5, "carb": 60.0, "calories": 297 },
        { "id": 101, "name": "Baranki", "prot": 10.4, "fat": 1.3, "carb": 68.7, "calories": 312 },
        { "id": 102, "name": "Drying", "prot": 11.0, "fat": 1.3, "carb": 73.0, "calories": 330 },
        { "id": 103, "name": "Wheat crackers", "prot": 11.2, "fat": 1.4,"carb": 72.4, "calories": 331 },
        { "id": 104, "name": "Cream crackers", "prot": 8.5, "fat": 10.6, "carb": 71.3, "calories": 397 },
        { "id": 105, "name": "Premium wheat flour", "prot": 10.3, "fat": 0.9, "carb": 74.2, "calories": 327 },
        { "id": 106, "name": "I grade wheat flour", "prot": 10.6, "fat": 1.3, "carb": 73.2, "calories": 329 },
        { "id": 107, "name": "Grade II wheat flour", "prot": 11.7, "fat": 1.8, "carb": 70.8, "calories": 328 },
        { "id": 108, "name": "Rye flour", "prot": 6.9, "fat": 1.1, "carb": 76.9, "calories": 326 },
        { "id": 109, "name": "Buckwheat", "prot": 12.6, "fat": 2.6, "carb": 68.0, "calories": 329 },
        { "id": 110, "name": "Buckwheat", "prot": 9.5, "fat": 1.9, "carb": 72.2, "calories": 326 },
        { "id": 111, "name": "Semolina", "prot": 11.3, "fat": 0.7, "carb": 73.3, "calories": 326 },
        { "id": 112, "name": "Oatmeal", "prot": 11.9, "fat": 5.8, "carb": 65.4, "calories": 345 },
        { "id": 113, "name": "Pearl", "prot": 9.3, "fat": 1.1, "carb": 73.7, "calories": 324 },
        { "id": 114, "name": "Millet", "prot": 12.0, "fat": 2.9, "carb": 69.3, "calories": 334 },
        { "id": 115, "name": "Rice", "prot": 7.0, "fat": 0.6, "carb": 73.7, "calories": 323 },
        { "id": 116, "name": "Wheat \"Poltava\"", "prot": 12.7, "fat": 1.1, "carb": 70.6, "calories": 325 },
        { "id": 117, "name": "Oatmeal", "prot": 12.2, "fat": 5.8, "carb": 68.3, "calories": 357 },
        { "id": 118, "name": "Barley", "prot": 10.4, "fat": 1.3, "carb": 71.7, "calories": 322 },
        { "id": 119, "name": "Hercules", "prot": 13.1, "fat": 6.2, "carb": 65.7, "calories": 355 },
        { "id": 120, "name": "Corn", "prot": 8.3, "fat": 1.2, "carb": 75.0, "calories": 325 },
        { "id": 121, "name": "Beans", "prot": 6.0, "fat": 0.1, "carb": 8.3, "calories": 58 },
        { "id": 122, "name": "Split peas", "prot": 23.0, "fat": 1.6, "carb": 57.7, "calories": 323 },
        { "id": 123, "name": "Whole peas", "prot": 23.0, "fat": 1.2, "carb": 53.3, "calories": 303 },
        { "id": 124, "name": "Soy", "prot": 34.9, "fat": 17.3, "carb": 26.5, "calories": 395 },
        { "id": 125, "name": "Beans", "prot": 22.3, "fat": 1.7, "carb": 54.5, "calories": 309 },
        { "id": 126, "name": "Lentil", "prot": 24.8, "fat": 1.1, "carb": 53.7, "calories": 310 },
        { "id": 127, "name": "Fresh white (mushrooms)", "prot": 3.2, "fat": 0.7, "carb": 1.6, "calories": 25 },
        { "id": 128, "name": "Dried white mushrooms", "prot": 27.6, "fat": 6.8, "carb": 10.0, "calories": 209 },
        { "id": 129, "name": "Fresh boletus (mushrooms)", "prot": 2.3, "fat": 0.9, "carb": 3.7, "calories": 31 },
        { "id": 130, "name": "Fresh boletus (mushrooms)", "prot": 3.3, "fat": 0.5, "carb": 3.4, "calories": 31 },
        { "id": 131, "name": "Fresh russula (mushrooms)", "prot": 1.7, "fat": 0.3, "carb": 1.4, "calories": 17 },
        { "id": 132, "name": "Lamb", "prot": 16.3, "fat": 15.3, "carb": 0.0, "calories": 203 },
        { "id": 133, "name": "Beef", "prot": 18.9, "fat": 12.4, "carb": 0.0, "calories": 187 },
        { "id": 134, "name": "Horse", "prot": 20.2, "fat": 7.0, "carb": 0.0, "calories": 143 },
        { "id": 135, "name": "Rabbit", "prot": 20.7, "fat": 12.9, "carb": 0.0, "calories": 199 },
        { "id": 136, "name": "Lean pork", "prot": 16.4, "fat": 27.8, "carb": 0.0, "calories": 316 },
        { "id": 137, "name": "Pork fat", "prot": 11.4, "fat": 49.3, "carb": 0.0, "calories": 489 },
        { "id": 138, "name": "Veal", "prot": 19.7, "fat": 1.2, "carb": 0.0, "calories": 90 },
        { "id": 139, "name": "Lamb Kidneys", "prot": 13.6, "fat": 2.5, "carb": 0.0, "calories": 77 },
        { "id": 140, "name": "Lamb Liver", "prot": 18.7, "fat": 2.9, "carb": 0.0, "calories": 101 },
        { "id": 141, "name": "Lamb Heart", "prot": 13.5, "fat": 2.5, "carb": 0.0, "calories": 82 },
        { "id": 142, "name": "Beef Brains", "prot": 9.5, "fat": 9.5, "carb": 0.0, "calories": 124 },
        { "id": 143, "name": "Beef Liver", "prot": 17.4, "fat": 3.1, "carb": 0.0, "calories": 98 },
        { "id": 144, "name": "Beef Kidney", "prot": 12.5, "fat": 1.8, "carb": 0.0, "calories": 66 },
        { "id": 145, "name": "Beef Udder", "prot": 12.3, "fat": 13.7, "carb": 0.0, "calories": 173 },
        { "id": 146, "name": "Beef Heart", "prot": 15.0, "fat": 3.0, "carb": 0.0, "calories": 87 },
        { "id": 147, "name": "Beef Tongue", "prot": 13.6, "fat": 12.1, "carb": 0.0, "calories": 163 },
        { "id": 148, "name": "Pork kidneys", "prot": 13.0, "fat": 3.1, "carb": 0.0, "calories": 80 },
        { "id": 149, "name": "Pork liver", "prot": 18.8, "fat": 3.6, "carb": 0.0, "calories": 108 },
        { "id": 150, "name": "Pork heart", "prot": 15.1, "fat": 3.2, "carb": 0.0, "calories": 89 },
        { "id": 151, "name": "Pork tongue", "prot": 14.2, "fat": 16.8, "carb": 0.0, "calories": 208 },
        { "id": 152, "name": "Geese", "prot": 16.1, "fat": 33.3,"carb": 0.0, "calories": 364 },
        { "id": 153, "name": "Turkey", "prot": 21.6, "fat": 12.0, "carb": 0.8, "calories": 197 },
        { "id": 154, "name": "Chickens", "prot": 20.8, "fat": 8.8, "carb": 0.6, "calories": 165 },
        { "id": 155, "name": "Chicken breast (fillet)", "prot": 23.6, "fat": 1.9, "carb": 0.4, "calories": 113 },
        { "id": 156, "name": "Chickens", "prot": 18.7, "fat": 7.8, "carb": 0.4, "calories": 156 },
        { "id": 157, "name": "Ducks", "prot": 16.5, "fat": 61.2, "carb": 0.0, "calories": 346 },
        { "id": 158, "name": "Boiled sausage Diabetic", "prot": 12.1, "fat": 22.8, "carb": 0.0, "calories": 254 },
        { "id": 159, "name": "Boiled sausage Diet", "prot": 12.1, "fat": 13.5, "carb": 0.0, "calories": 170 },
        { "id": 160, "name": "Boiled Doctor's sausage", "prot": 13.7, "fat": 22.8, "carb": 0.0, "calories": 260 },
        { "id": 161, "name": "Boiled sausage Amateur", "prot": 12.2, "fat": 28.0, "carb": 0.0, "calories": 301 },
        { "id": 162, "name": "Boiled Milk Sausage", "prot": 11.7, "fat": 22.8, "carb": 0.0, "calories": 252 },
        { "id": 163, "name": "Cooked sausage Separate", "prot": 10.1, "fat": 20.1, "carb": 1.8, "calories": 228 },
        { "id": 164, "name": "Boiled Veal sausage", "prot": 12.5, "fat": 29.6, "carb": 0.0, "calories": 316 },
        { "id": 165, "name": "Pork sausages", "prot": 10.1, "fat": 31.6, "carb": 1.9, "calories": 332 },
        { "id": 166, "name": "Milk Sausages", "prot": 12.3, "fat": 25.3, "carb": 0.0, "calories": 277 },
        { "id": 167, "name": "Russian Sausages", "prot": 12.0, "fat": 19.1, "carb": 0.0, "calories": 220 },
        { "id": 168, "name": "Pork sausages", "prot": 11.8, "fat": 30.8, "carb": 0.0, "calories": 324 },
        { "id": 169, "name": "Boiled-smoked Amateur", "prot": 17.3, "fat": 39.0, "carb": 0.0, "calories": 420 },
        { "id": 170, "name": "Boiled-smoked Cervelat", "prot": 28.2, "fat": 27.5, "carb": 0.0, "calories": 360 },
        { "id": 171, "name": "Semi-smoked Krakow", "prot": 16.2, "fat": 44.6, "carb": 0.0, "calories": 466 },
        { "id": 172, "name": "Semi-smoked Minsk", "prot": 23.0, "fat": 17.4, "carb": 2.7, "calories": 259 },
        { "id": 173, "name": "Semi-smoked Poltava", "prot": 16.4, "fat": 39.0, "carb": 0.0, "calories": 417 },
        { "id": 174, "name": "Semi-smoked Ukrainian", "prot": 16.5, "fat": 34.4, "carb": 0.0, "calories": 376 },
        { "id": 175, "name": "Raw smoked Amateur", "prot": 20.9, "fat": 47.8, "carb": 0.0, "calories": 514 },
        { "id": 176, "name": "Raw smoked Moscow", "prot": 24.8, "fat": 41.5, "carb": 0.0, "calories": 473 },
        { "id": 177, "name": "Beef stew", "prot": 16.8, "fat": 18.3, "carb": 0.0, "calories": 232 },
        { "id": 178, "name": "Tourist Breakfast (beef)", "prot": 20.5, "fat": 10.4, "carb": 0.0, "calories": 176 },
        { "id": 179, "name": "Tourist's breakfast (pork)", "prot": 16.9, "fat": 15.4, "carb": 0.0, "calories": 206 },
        { "id": 180, "name": "Sausage mince", "prot": 15.2, "fat": 15.7, "carb": 2.8, "calories": 213 },
        { "id": 181, "name": "Stewed pork", "prot": 14.9, "fat": 32.2, "carb": 0.0, "calories": 349 },
        { "id": 182, "name": "Raw smoked brisket", "prot": 7.6, "fat": 66.8, "carb": 0.0, "calories": 632 },
        { "id": 183, "name": "Raw smoked loin", "prot": 10.5, "fat": 47.2, "carb": 0.0, "calories": 467 },
        { "id": 184, "name": "Ham", "prot": 22.6, "fat": 20.9, "carb": 0.0, "calories": 279 },
        { "id": 185, "name": "Rendered lamb or beef fat", "prot": 0.0, "fat": 99.7, "carb": 0.0, "calories": 897 },
        { "id": 186, "name": "Pork lard (without skin)", "prot": 1.4, "fat": 92.8, "carb": 0.0, "calories": 816 },
        { "id": 187, "name": "Milk margarine", "prot": 0.3, "fat": 82.3, "carb": 1.0, "calories": 746 },
        { "id": 188, "name": "Sandwich margarine", "prot": 0.5, "fat": 82.0, "carb": 1.2, "calories": 744 },
        { "id": 189, "name": "Mayonnaise", "prot": 3.1, "fat": 67.0, "carb": 2.6, "calories": 627 },
        { "id": 190, "name": "Vegetable oil", "prot": 0.0, "fat": 99.9, "carb": 0.0, "calories": 899 },
        { "id": 191, "name": "Butter", "prot": 0.6, "fat": 82.5, "carb": 0.9, "calories": 748 },
        { "id": 192, "name": "Ghee", "prot": 0.3, "fat": 98.0, "carb": 0.6, "calories": 887 },
        { "id": 193, "name": "Cow's milk cheese", "prot": 17.9, "fat": 20.1, "carb": 0.0, "calories": 260 },
        { "id": 194, "name": "Natural yoghurt 1.5% fat", "prot": 5.0, "fat": 1.5, "carb": 3.5, "calories": 51 },
        { "id": 195, "name": "Low-fat kefir", "prot": 3.0, "fat": 0.1, "carb": 3.8, "calories": 30 },
        { "id": 196, "name": "Fatty kefir", "prot": 2.8, "fat": 3.2, "carb": 4.1, "calories": 59 },
        { "id": 197, "name": "Milk", "prot": 2.8, "fat": 3.2, "carb": 4.7, "calories": 58 },
        { "id": 198, "name": "Milk acidophilus", "prot": 2.8, "fat": 3.2, "carb": 10.8, "calories": 83 },
        { "id": 199, "name": "Whole milk powder", "prot": 25.6, "fat": 25.0, "carb": 39.4, "calories": 475 },
        { "id": 200, "name": "Condensed milk", "prot": 7.0, "fat": 7.9, "carb": 9.5, "calories": 135 },
        { "id": 201, "name": "Condensed milk with sugar", "prot": 7.2, "fat": 8.5, "carb": 56.0, "calories": 315 },
        { "id": 202, "name": "Sour milk", "prot": 2.8, "fat": 3.2, "carb": 4.1, "calories": 58 },
        { "id": 203, "name": "Ryazhenka", "prot": 3.0, "fat": 6.0, "carb": 4.1, "calories": 85 },
        { "id": 204, "name": "Cream 10%", "prot": 3.0, "fat": 10.0, "carb": 4.0, "calories": 118 },
        { "id": 205, "name": "Cream 20%", "prot": 2.8, "fat": 20.0, "carb": 3.6, "calories": 205 },
        { "id": 206, "name": "Sour cream 10%", "prot": 3.0, "fat": 10.0, "carb": 2.9, "calories": 116 },
        { "id": 207, "name": "Sour cream 20%", "prot": 2.8, "fat": 20.0, "carb": 3.2, "calories": 206 },
        { "id": 208, "name": "Special cheeses and curd mass", "prot": 7.1, "fat": 23.0, "carb": 27.5, "calories": 340 },
        { "id": 209, "name": "Russian cheese", "prot": 23.4, "fat": 30.0, "carb": 0.0, "calories": 371 },
        { "id": 210, "name": "Dutch cheese", "prot": 26.8, "fat": 27.3, "carb": 0.0, "calories": 361 },
        { "id": 211, "name": "Swiss cheese", "prot": 24.9, "fat": 31.8, "carb": 0.0, "calories": 396 },
        { "id": 212, "name": "Poshekhonsky cheese", "prot": 26.0, "fat": 26.5, "carb": 0.0, "calories": 334 },
        { "id": 213, "name": "Processed cheese", "prot": 24.0, "fat": 13.5, "carb": 0.0, "calories": 226 },
        { "id": 214, "name": "Fatty cottage cheese", "prot": 14.0, "fat": 18.0, "carb": 1.3, "calories": 226 },
        { "id": 215, "name": "Bold cottage cheese", "prot": 16.7, "fat": 9.0, "carb": 1.3, "calories": 156 },
        { "id": 216, "name": "Low-fat cottage cheese", "prot": 18.0, "fat": 0.6, "carb": 1.5, "calories": 86 },
        { "id": 217, "name": "Chicken egg", "prot": 12.7, "fat": 11.5, "carb": 0.7, "calories": 157 },
        { "id": 218, "name": "Egg powder", "prot": 45.0, "fat": 37.3, "carb": 7.1, "calories": 542 },
        { "id": 219, "name": "Protein powder", "prot": 73.3, "fat": 1.8, "carb": 7.0, "calories": 336 },
        { "id": 220, "name": "Dry yolk", "prot": 34.2, "fat": 52.2, "carb": 4.4, "calories": 623 },
        { "id": 221, "name": "Quail egg", "prot": 11.9, "fat": 13.1, "carb": 0.6, "calories": 168 },
        { "id": 222, "name": "Bulls", "prot": 12.8, "fat": 8.1, "carb": 5.2, "calories": 145 },
        { "id": 223, "name": "Pink salmon", "prot": 21.0, "fat": 7.0, "carb": 0.0, "calories": 147 },
        { "id": 224, "name": "Flounder", "prot": 16.1, "fat": 2.6, "carb": 0.0, "calories": 88 },
        { "id": 225, "name": "Crucian carp", "prot": 17.7, "fat": 1.8, "carb": 0.0, "calories": 87 },
        { "id": 226, "name": "Carp", "prot": 16.0, "fat": 3.6, "carb": 0.0, "calories": 96 },
        { "id": 227, "name": "Chum salmon", "prot": 22.0, "fat": 5.6, "carb": 0.0, "calories": 138 },
        { "id": 228, "name": "Smelt", "prot": 15.5, "fat": 3.2, "carb": 0.0, "calories": 91 },
        { "id": 229, "name": "Ice", "prot": 15.5, "fat": 1.4, "carb": 0.0, "calories": 75 },
        { "id": 230, "name": "Bream", "prot": 17.1, "fat": 4.1, "carb": 0.0, "calories": 105 },
        { "id": 231, "name": "Salmon", "prot": 20.8, "fat": 15.1, "carb": 0.0, "calories": 219 },
        { "id": 232, "name": "Macrurus", "prot": 13.2, "fat": 0.8, "carb": 0.0, "calories": 60 },
        { "id": 233, "name": "Lamprey", "prot": 14.7, "fat": 11.9, "carb": 0.0, "calories": 166 },
        { "id": 234, "name": "Pollock", "prot": 15.9, "fat": 0.7, "carb": 0.0, "calories": 70 },
        { "id": 235, "name": "Capelin", "prot": 13.4, "fat": 11.5, "carb": 0.0, "calories": 157 },
        { "id": 236, "name": "Navaga", "prot": 16.1, "fat": 1.0, "carb": 0.0, "calories": 73 },
        { "id": 237, "name": "Bubot", "prot": 18.8, "fat": 0.6, "carb": 0.0, "calories": 81 },
        { "id": 238, "name": "Notothenia marble", "prot": 14.8, "fat": 10.7, "carb": 0.0, "calories": 156 },
        { "id": 239, "name": "Sea bass", "prot": 17.6, "fat": 5.2, "carb": 0.0, "calories": 117 },
        { "id": 240, "name": "River perch", "prot": 18.5, "fat": 0.9, "carb": 0.0, "calories": 82 },
        { "id": 241, "name": "Sturgeon", "prot": 16.4, "fat": 10.9, "carb": 0.0, "calories": 164 },
        { "id": 242, "name": "Halibut", "prot": 18.9, "fat": 3.0, "carb": 0.0, "calories": 103 },
        { "id": 243, "name": "White", "prot": 16.1, "fat": 0.9, "carb": 0.0, "calories": 72 },
        { "id": 244, "name": "Sablefish", "prot": 20.3, "fat": 3.2, "carb": 0.0, "calories": 110 },
        { "id": 245, "name": "Caspian fish", "prot": 19.2, "fat": 2.4, "carb": 0.0, "calories": 98 },
        { "id": 246, "name": "Carp", "prot": 18.4, "fat": 5.3, "carb": 0.0, "calories": 121 },
        { "id": 247, "name": "Large saury", "prot": 18.6, "fat": 20.8, "carb": 0.0, "calories": 262 },
        { "id": 248, "name": "Small saury", "prot": 20.4, "fat": 0.8, "carb": 0.0, "calories": 143 },
        { "id": 249, "name": "Herring", "prot": 17.3, "fat": 5.6, "carb": 0.0, "calories": 121 },
        { "id": 250, "name": "Herring", "prot": 17.7, "fat": 19.5, "carb": 0.0, "calories": 242 },
        { "id": 251, "name": "Sig", "prot": 19.0, "fat": 7.5, "carb": 0.0, "calories": 144 },
        { "id": 252, "name": "Mackerel", "prot": 18.0, "fat": 9.0, "carb": 0.0, "calories": 153 },
        { "id": 253, "name": "Som", "prot": 16.8, "fat": 8.5, "carb": 0.0, "calories": 144 },
        { "id": 254, "name": "Staurida", "prot": 18.5, "fat": 5.0, "carb": 0.0, "calories": 119 },
        { "id": 255, "name": "Sterlet", "prot": 17.0, "fat": 6.1, "carb": 0.0, "calories": 320 },
        { "id": 256, "name": "Pike-perch", "prot": 19.0, "fat": 0.8, "carb": 0.0, "calories": 83 },
        { "id": 257, "name": "Cod", "prot": 17.5, "fat": 0.6, "carb": 0.0, "calories": 75 },
        { "id": 258, "name": "Tuna", "prot": 22.7, "fat": 0.7, "carb": 0.0, "calories": 96 },
        { "id": 259, "name": "Coalfish", "prot": 13.2, "fat": 11.6, "carb": 0.0, "calories": 158 },
        { "id": 260, "name": "Sea eel", "prot": 19.1, "fat": 1.9, "carb": 0.0, "calories": 94 },
        { "id": 261, "name": "Eel", "prot": 14.5, "fat": 30.5, "carb": 0.0, "calories": 333 },
        { "id": 262, "name": "Hake", "prot": 16.6, "fat": 2.2, "carb": 0.0, "calories": 86 },
        { "id": 263, "name": "Pike", "prot": 18.8, "fat": 0.7, "carb": 0.0, "calories": 82 },
        { "id": 264, "name": "Ide", "prot": 18.2, "fat": 0.3, "carb": 0.0, "calories": 117 },
        { "id": 265, "name": "Far Eastern shrimp", "prot": 28.7, "fat": 1.2, "carb": 0.0, "calories": 134 },
        { "id": 266, "name": "Cod liver", "prot": 4.2, "fat": 65.7, "carb": 0.0, "calories": 613 },
        { "id": 267, "name": "Squid", "prot": 18.0, "fat": 0.3, "carb": 0.0, "calories": 75 },
        { "id": 268, "name": "Crab", "prot": 16.0, "fat": 0.5, "carb": 0.0, "calories": 69 },
        { "id": 269, "name": "Shrimp", "prot": 18.0, "fat": 0.8, "carb": 0.0, "calories": 83 },
        { "id": 270, "name": "Sea kale", "prot": 0.9, "fat": 0.2, "carb": 3.0, "calories": 5 },
        { "id": 271, "name": "Ocean Pasta", "prot": 18.9, "fat": 6.8, "carb": 0.0, "calories": 137 },
        { "id": 272, "name": "Sea cucumber", "prot": 7.3, "fat": 0.6, "carb": 0.0, "calories": 35 },
        { "id": 273, "name": "Chum salmon granular (caviar)", "prot": 31.6, "fat": 13.8, "carb": 0.0, "calories": 251 },
        { "id": 274, "name": "Bream breakout (caviar)", "prot": 24.7, "fat": 4.8, "carb": 0.0, "calories": 142 },
        { "id": 275, "name": "Pollock punch (caviar)", "prot": 28.4, "fat": 1.9, "carb": 0.0, "calories": 131 },
        { "id": 276, "name": "Sturgeon granular (caviar)", "prot": 28.9, "fat": 9.7, "carb": 0.0, "calories": 203 },
        { "id": 277, "name": "Sturgeon punch (caviar)", "prot": 36.0, "fat": 10.2, "carb": 0.0, "calories": 123 },
        { "id": 278, "name": "Hazelnut", "prot": 16.1, "fat": 66.9, "carb": 9.9, "calories": 704 },
        { "id": 279, "name": "Almond", "prot": 18.6, "fat": 57.7, "carb": 13.6, "calories": 645 },
        { "id": 280, "name": "Walnut", "prot": 13.8, "fat": 61.3, "carb": 10.2, "calories": 648 },
        { "id": 281, "name": "Peanut", "prot": 26.3, "fat": 45.2, "carb": 9.7, "calories": 548 },
  ]
}
let languages_obj = {
  ru: {
    header: "Рассчитывайте свою дневную норму калорий",
    nav_link: "Перейти на страницу статистики",
    meal_time_title: "Виберите прием пищи:",
    meal_date_title: "Выберите дату",
    quicFind: 'Введите продукт для быстрого поиска',
    foodSelected: 'Выбраная еда:',
    p_noEat: 'Еда не выбрана',
    tab: 'Таблица калорий',
    th1: 'Продукт',
    th2: 'Калории (кКал)',
    th3: 'Жиры',
    th4: 'Билки',
    th5: 'Углеводы',
    breakfast: 'Завтрак',
    lunch: 'Обед',
    dinner: 'Ужин',
    title: 'Калькулятор калорий',
  },
  ua: {
    header: "Розраховуйте свою денну норму калорій",
    nav_link: "Перейти на сторінку статистики",
    meal_time_title: "Виберіть прийом їжі:",
    meal_date_title: "Виберіть дату",
    quicFind: 'Введіть продукт для швидкого пошуку',
    foodSelected: 'Вибрана їжа:',
    p_noEat: 'Їжа не обрана',
    tab: 'Таблиця калорій',
    th1: 'Продукт',
    th2: 'Калорії (кКал)',
    th3: 'Жирі',
    th4: 'Білки',
    th5: 'Вуглеводи',
    breakfast: 'Сніданок',
    lunch: 'Обід',
    dinner: 'Вечеря',
    title: 'Калькулятор калорій',
  },
  en: {
    header: "Calculate your daily calorie allowance",
    nav_link: "Go to the statistics page",
    meal_time_title: "Pick a meal:",
    meal_date_title: "Select a date",
    quicFind: 'Enter a product to quickly find',
    foodSelected: 'Selected food:',
    p_noEat: 'No food selected',
    tab: 'Calorie table',
    th1: 'Product',
    th2: 'Calories (kCal)',
    th3: 'Fats',
    th4: 'Proteins',
    th5: 'Carbohydrates',
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    title: 'Calorie calculator',
  },
};

let languages_switcher = document.getElementById("languages");
let language = languages_switcher.value;

languages_switcher.addEventListener("change", function (e) {

  language = this.value;
  translateApp(languages_obj[language]);
});

let foodCalObj = globalFoodCalObj[language]

function translateApp(language_obj) {



  for (const key in language_obj) {
    document.querySelector(`.${key}`).textContent = language_obj[key];
  }
  foodCalObj =  globalFoodCalObj[language];
  filterEat();
}

let eat__input = document.querySelector(".eat__input");
let eat__but = document.querySelector(".eat__but");
let p_noEat = document.querySelector(".p_noEat");
let selectedFood = document.querySelector(".selectedFood");
let but = document.querySelector(".but");
let clearBut = document.querySelector(".clearBut");
let save = document.querySelector(".save");
let result = document.querySelector(".result");
let food_table = document.querySelector("#table_body");
let date = document.querySelector(".date");


function generateFoodList() {
  food_table.replaceChildren();
  for (const elem of foodCalObj) {
    food_table.insertAdjacentHTML(
      "beforeEnd",
      ` <tr id=${elem.id}>
            <td>${elem.name}</td>
            <td>${elem.calories}</td>
            <td>${elem.fat}</td>
            <td>${elem.prot}</td>
            <td>${elem.carb}</td>
        </tr>`
    );
  }
}

function restart() {
  but.classList.add("none");
  clearBut.classList.add("none");
  save.classList.add("none");
  generateFoodList();
}

restart();

let foodSelec = [];
let eatsForStorage = [];
let total_ccal = 0;

food_table.addEventListener("click", function (e) {
  clearSearchInput();
  let choisenEat;

  if (
    e.target.localName === "td" &&
    !foodSelec.includes(+e.target.parentElement.id)
  ) {
    let food_id = +e.target.parentElement.id;

    choisenEat = foodCalObj.find((foodObj) => foodObj.id === food_id);
    foodSelec.push(choisenEat.id);
    eatsForStorage.push(choisenEat);

    selectedFood.insertAdjacentHTML(
      "beforeEnd",
      ` <li id="list_item_${choisenEat.id}"> 
            <span>${choisenEat.name} </span>
            <input class="howMany" type="number" min="0" id="food_inp_${choisenEat.id}"> 
            <span id="ccal_food_${choisenEat.id}" class="single_food_ccal">0 ккал</span>
        </li>
        `
    );
    document
      .querySelector(`#food_inp_${choisenEat.id}`)
      .addEventListener("input", function () {
        if (this.value > 0) {
          this.nextElementSibling.textContent =
            (+this.value * choisenEat.calories) / 100 + " ккал";
          result.classList.remove("none");
          let total_ccal_tags = document.querySelectorAll(".single_food_ccal");
          total_ccal = calculateTotalCcal(total_ccal_tags);
          result.textContent = "Всего  сьедено " + total_ccal + " ккал";
        }
      });
  }

  filterEat();

  p_noEat.classList.add("none");
  but.classList.remove("none");
  clearBut.classList.remove("none");
});

function generateDate() {
  let month = new Date().getMonth()+1;
  let day = new Date().getDate();

  if (month <= 9) {
    month = "0" + month;
  };
  if (day <= 9) {
    day = "0" + day;
  };

  return [new Date().getFullYear(), month , day].join("-");
}

date.value = generateDate();

console.log(date.value);


but.addEventListener("click", function () {
  let eat_item = [
    {
      eat_name: eat__but.value,
      food: eatsForStorage,
      total_ccal: total_ccal,
    },
  ];
  let eated_food_graams = document.querySelectorAll(".howMany");
  
  eat_item.map((food_obj) => {
    food_obj.date = date.value;
  });

  eat_item[0].food.map((food_obj, index) => {
    food_obj.gramm = +eated_food_graams[index].value;
  });

  let json = JSON.stringify(eat_item);
  if (localStorage.getItem("meals_obj")) {
    let old_meal_obj = JSON.parse(localStorage.getItem("meals_obj"));
    old_meal_obj.push(eat_item[0]);
    localStorage.setItem("meals_obj", JSON.stringify(old_meal_obj));
  } else {
    localStorage.setItem("meals_obj", json);
  }
  save.classList.toggle("none");
});

eat__but.addEventListener("focus", () => {
  eat__but.style =
    "border-bottom-right-radius: 0; border-bottom-left-radius: 0;";
});
eat__but.addEventListener("change", () => {
  eat__but.style =
    "border-bottom-right-radius: 10px; border-bottom-left-radius: 10px;";
  eat__but.blur();
});

function clearSearchInput() {
  eat__input.value = "";
}

function calculate() {
  eat__but.classList.add("none");
  result.textContent = "Сумма: " + res + " килокалорий";
}

function filterEat() {
  food_table.replaceChildren();

  if (!eat__input.value) {
    generateFoodList(language);
  }else{
    foodCalObj.filter(function (eat) {
      if (
        eat.name
          .toLocaleLowerCase()
          .includes(eat__input.value.toLocaleLowerCase())
      ) {
        food_table.insertAdjacentHTML(
          "beforeEnd",
          ` <tr id=${eat.id}>
                <td>${eat.name}</td>
                <td>${eat.calories}</td>
                <td>${eat.fat}</td>
                <td>${eat.prot}</td>
                <td>${eat.carb}</td>
            </tr>`
        );
      }
    });
  }
}

eat__input.addEventListener("input", filterEat);

clearBut.addEventListener("click", () => {
  while (selectedFood.firstChild) {
    selectedFood.removeChild(selectedFood.firstChild);
  }
  restart();
  but.classList.add("none");
  p_noEat.classList.remove("none");
  result.classList.add('none');
  foodSelec = [];
  eatsForStorage = [];
  total_ccal = 0;
});

function calculateTotalCcal(nodeList) {
  let total_ccal = 0;
  nodeList.forEach((tag) => {
    total_ccal += +tag.textContent.split(" ")[0];
  });
  return total_ccal.toFixed(1);
}


