let answer = function (arr) {

    let n10 = ( (-1*arr[0]+5*arr[1]+7*arr[2]+9*arr[3]+4*arr[4]+6*arr[5]+10*arr[6]+5*arr[7]+7*arr[8]) %11) %10;

    if (arr.length != 10){
        return 'Не правильно введен ИНН. ИНН состоит из 10 чисел';

    }

    //n10=((-1n1+5n2+7n3+9n4+4n5+6n6+10n7+5n8+7n9) mod 11) mod 10
    else if (arr[9] == n10) {

        if (arr[8] %2 == 0 ){
            return 'ИНН корректен. Владелец номера-женщина';
        } else {
            return 'ИНН корректен. Владелец номера-мужчина';
        }

    } else {
        return  'ИНН не корректен.';
    }
}



/*

function chekInn() {

    //inn1
    let dataFromUser = dataInput.value;
    dataFromUser = dataFromUser.split('');

    console.log(`Инн1 ${dataFromUser}`);
   
    

    Result.innerHTML=`${answer(dataFromUser)}`;

       

  

}


function chekInn2() {

 

    //inn2
    let dataFromUser2 = dataInput2.value;
    dataFromUser2 = dataFromUser2.split('');

    
    console.log(`Инн2 ${dataFromUser2}`);

    

    
    Result2.innerHTML=`${answer(dataFromUser2)}`;
    

  

}
*/

function chekInnX(inputElem, outputElem) {
    //innX
    let inn = inputElem.value;

    inn = inn.split('');
    console.log(`ИннX ${inn}`);

    outputElem.innerHTML=`${answer(inn)}`;


}

//chekInnX(dataInput, Result);

//chekInnX(dataInput2, Result2);





