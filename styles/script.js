const wrapper = document.querySelector('.wrapper')

const cities = ['Москва', 'Ижевск', 'Санкт-Петербург', 'Калининград', 'Сочи', 'Пермь']
const degrees = new Array(6)



for (let i = 0; i < degrees.length; i+= 1) { 
  degrees[i] = +prompt(`Введите температуру для города ${cities[i]}`)
};
function max(list) {
  let max = list[0];
  list.forEach(function(e) {
  if (e > max) max = e;
  });
  return max;
  }
  function min(list) {
    let min = list[0];
    list.forEach(function(e) {
    if (e < min) min = e;
    });
    return min;
    }
  
console.log(degrees)


let firstCity = document.createElement('p');
firstCity.innerText = 'Погода в Москве: ' + degrees[0] + ' градусов.'
wrapper.appendChild(firstCity)
let secondCity = document.createElement('p');
secondCity.innerText = 'Погода в Ижевске: ' +  degrees[1] + ' градусов.'
wrapper.appendChild(secondCity)
let thirstCity = document.createElement('p');
thirstCity.innerText = 'Погода в Санкт-Петербурге: ' + degrees[2] + ' градусов.'
wrapper.appendChild(thirstCity)
let fourCity = document.createElement('p');
fourCity.innerText = 'Погода в Калининграде: ' + degrees[3] + ' градусов.'
wrapper.appendChild(fourCity)
let fithCity = document.createElement('p');
fithCity.innerText = 'Погода в Сочи : ' + degrees[4] + ' градусов.'
wrapper.appendChild(fithCity)
let sixthCity = document.createElement('p');
sixthCity.innerText = 'Погода в Перми: ' + degrees[5] + ' градусов.'
wrapper.appendChild(sixthCity)
let maxDegrees = document.createElement('p');
maxDegrees.innerText = 'Максимальная температура: ' + max(degrees) + ' градусов.'
wrapper.appendChild(maxDegrees)
let minDegrees = document.createElement('p');
minDegrees.innerText = 'Минимальная температура: ' + min(degrees) + ' градусов.'
wrapper.appendChild(minDegrees)






// const graduates = new Array(10);
//     for (let i = 0; i < graduates.length; i += 1) { graduates[i] = Math.round(Math.random()*100)};
//     const getAverage = (numbers) => { const sum = numbers.reduce((acc, number) => acc + number, 0); 
//     const length = numbers.length; return sum / length; };
//     console.log(graduates)
//     console.log(getAverage(graduates)) 
//     let max = graduates[0];
//     for (let i = 1; i < graduates.length; i++) {
//     if (graduates[i] > max) {
//     max = graduates[i];
//     }
//   }
// console.log(max)
// let min = graduates[0];
// for (let i = 1; i < graduates.length; i++) {
// if (graduates[i] < min) {
// min = graduates[i];
// }
// }
// console.log(min) 

// const filteredGoodGraduates = graduates.filter(el=>el >=60);
// const filteredBadGraduates = graduates.filter(el=>el <60);

// const wordGraduates = []
// if (graduates[0] >= 80)
//   {
//     wordGraduates.push('A');
//   } else if (graduates[0] >= 60)
//   { wordGraduates.push('B');
//   } else if (graduates[0] >= 40)
//   { wordGraduates.push('C');
//   } else if (graduates[0] >= 20)
//   { wordGraduates.push('D');
//   } else if (graduates[0] <20)
//   { wordGraduates.push('E');
//   }
// for (let i = 1; i <= graduates.length; i++ ){
//   if (graduates[i] >= 80)
//   {
//     wordGraduates.push('A');
//   } else if (graduates[i] >= 60)
//   { wordGraduates.push('B');
//   } else if (graduates[i] >= 40)
//   { wordGraduates.push('C');
//   } else if (graduates[i] >= 20)
//   { wordGraduates.push('D');
//   } else if (graduates[i] <20)
//   { wordGraduates.push('E');
//   }
// }
// console.log(wordGraduates)


// let firstLine = document.createElement('p');
// firstLine.innerText = 'Оценки студентов: ' + graduates 
// wrapper.appendChild(firstLine)
// let secondLine = document.createElement('p');
// secondLine.innerText = 'Средняя оценка: ' +  getAverage(graduates)
// wrapper.appendChild(secondLine)
// let thirstLine = document.createElement('p');
// thirstLine.innerText = 'Максимальная оценка: ' + max
// wrapper.appendChild(thirstLine)
// let fourLine = document.createElement('p');
// fourLine.innerText = 'Минимальная оценка: ' + min
// wrapper.appendChild(fourLine)
// let fithLine = document.createElement('p');
// fithLine.innerText = 'Количество положительных оценок : ' + filteredGoodGraduates.length
// wrapper.appendChild(fithLine)
// let sixthLine = document.createElement('p');
// sixthLine.innerText = 'Количество отрицательных оценок: ' + filteredBadGraduates.length
// wrapper.appendChild(sixthLine)
// let seventhLine = document.createElement('p');
// seventhLine.innerText = 'Оценки в буквенном формате : ' + wordGraduates
// wrapper.appendChil