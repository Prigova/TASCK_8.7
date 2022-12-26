    let minValue = parseInt(prompt('Минимальное знание числа для игры','0')); // принимает строку в качестве аргумента и возвращает целое число, поле ввода мин значения с предложением
    let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')); // принимает строку в качестве аргумента и возвращает целое число, поле ввода макс значения с предложением
    
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`); // поле с условием игры
    let answerNumber  = Math.floor((minValue + maxValue) / 2); // округляет в меньшую сторону и возвращает наибольшее целое число
    let orderNumber = 1;
    let gameRun = true;

    const orderNumberField = document.getElementById('orderNumberField'); // id div поляя "вопрос..."
    const answerField = document.getElementById('answerField'); // id div поля "вы загадали число..."

    orderNumberField.innerText = orderNumber; // Установка нового текста поля "вопрос..."
    answerField.innerText = `Вы загадали число ${answerNumber }?`; // Установка нового текста поля "вы загадали число..."

    //кнопка заново
    document.getElementById('btnRetry').addEventListener('click', function () {
        location.reload() 
    })


//кнопка меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue == answerNumber){ 
            const phraseRandom = Math.round(Math.random());
            answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1; // minValue меняем на maxValue + на -
            answerNumber  = Math.floor((minValue + maxValue) / 2); //  округляет в меньшую сторону и возвращает наибольшее целое число
            orderNumber++; // прибавляет порядковый номер вопросу
            orderNumberField.innerText = orderNumber; // Установка нового текста поля "вопрос №..."

            const phraseRandom = Math.round( Math.random()*2);
            answerPhrase = (phraseRandom === 1) ?
               `Вы загадали число ${answerNumber }?` :
               (phraseRandom === 2) ?
               `Может быть вы загадали число ${answerNumber }?` :
               `Последняя попытка, вы загадали ${answerNumber }?`;
            answerField.innerText = answerPhrase;
        }
    }
})

// кнопка больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            phraseRandom = Math.round(Math.random());
            answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            phraseRandom = Math.round( Math.random()*2);
            answerPhrase = (phraseRandom === 1) ?
               `Вы загадали число ${answerNumber }?` :
               (phraseRandom === 2) ?
               `Может быть вы загадали число ${answerNumber }?` :
               `Легко, вы загадали ${answerNumber }?`;
            answerField.innerText = answerPhrase;
        }
    }
})

// кнопка верно
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        const answerPhrase = (phraseRandom === 1) ?
        `Я всегда угадываю\n\u{1F60E}` :
        (phraseRandom === 2) ?
        `Уф, опять угадал\n\u{1F60E}` :
        `Там-да, угадал\n\u{1F973}`;

        answerField.innerText = answerPhrase 
        gameRun = false;
    }
})



