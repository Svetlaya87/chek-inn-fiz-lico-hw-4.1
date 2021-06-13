


function chekInn() {
    let dataFromUser = dataInput.value;
    dataFromUser = dataFromUser.split('');
    console.log(dataFromUser);

    let n10 = ( (-1*dataFromUser[0]+5*dataFromUser[1]+7*dataFromUser[2]+9*dataFromUser[3]+4*dataFromUser[4]+6*dataFromUser[5]+10*dataFromUser[6]+5*dataFromUser[7]+7*dataFromUser[8]) %11) %10;

    if (dataFromUser.length != 10){
        Result.innerHTML = 'Не правильно введен ИНН. ИНН состоит из 10 чисел';

    }

    //n10=((-1n1+5n2+7n3+9n4+4n5+6n6+10n7+5n8+7n9) mod 11) mod 10
    else if (dataFromUser[9] == n10) {

        if (dataFromUser[8] %2 == 0 ){
            Result.innerHTML = 'ИНН корректен. Владелец номера-женщина';
        } else {
            Result.innerHTML = 'ИНН корректен. Владелец номера-мужчина';
        }

    } else {
        Result.innerHTML = 'ИНН не корректен.';
    }

    

    
    

 

 

    

}

