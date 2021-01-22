// https://github.com/shoto2020/assignment-js


//! Problem-Solution 01

function kilometerToMeter(kilo) {

    var meter = 0;

    if (kilo < 0){
        return "Neagtive values not allow";
    }
    else {
         meter = (kilo * 1000);
    }

    return meter;
}

var meter = kilometerToMeter(12.5);
console.log(meter);




//! Problem-Solution 02

function budgetCalculator(watch, phone, laptop) {

    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    var total = 0;

    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Neagtive values not allow";
    }
    else if(watch >= 0 || phone >= 0 || laptop >= 0) {
        watchPrice = watch * watchPrice,
        phonePrice = phone * phonePrice,
        laptopPrice = laptop * laptopPrice
    
        total = watchPrice + phonePrice + laptopPrice;
        return total;
    }
    else {
        total = watchPrice + phonePrice + laptopPrice;
        return total;
    }

    return total;
}

var result = budgetCalculator(0, 5, 1);
console.log(result);




//! Problem-Solution 03

function hotelCost(days) {
    var before10 = 100;
    var before20 = 80;
    var after20 = 50;

    var totalCost = 0;

    if(days <= 0) {
        return "Neagtive values not allow";
    }
    else if(days <= 10) {
        totalCost = days * before10;
    }
    else if (days <=20) {
        
        var afterTenDays = days - 10;
        before10 = 10 * 100;
        before20 = afterTenDays * before20;

        totalCost = before10 + before20;

    }
    else {
        
        var afterTwentyDays = days - 20;
        before10 = 10 * 100;
        before20 = 10 * 80;
        after20 = afterTwentyDays * after20;

        totalCost = before10 + before20 + after20;

    }

    return totalCost;
}

var totalCost = hotelCost(71);
console.log(totalCost);




//! Practice solution 04

var friends = ["satodhru", " ", "das", "nondondas", "sdasdasdasdasdasdas"];

function megaFriend(name) {
    
    var megaFriend = [];
    var largeName = name[0];
    var length = 0;
    
    for (var i = 0; i < name.length; i++) {
        
        var element = name[i].length;

        if (element > length) {

            length = element;
            largeName = name[i];
            megaFriend[0] = largeName; 
        }
    }

    return megaFriend;
}

var output = megaFriend(friends);
console.log(output);

