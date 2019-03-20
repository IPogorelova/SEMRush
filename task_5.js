var inArray = function (item, arr) {           //item - элемент, arr - массив, в котором производится поиск
    var result = false;                 //задаём флаг со значением false
    if (arr.indexOf(item) !== -1) {     //если элемент существует в массиве (его индекс - целое число, не равное -1),
        result = true                   //флаг меняет своё значение на true
    }
    return result                       //в результате функция inArray возвращает значение флага
}


console.log(inArray(1, [0, 1, 2, 3, 4])) //выведет true
console.log(inArray(8, [6, 3, 9, 2.5, 0])) //выведет false
