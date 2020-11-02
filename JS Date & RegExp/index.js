//1
function getAge(date){
    const hundred = 1000;
    const sixty = 60;
    const twentyFour = 24;
    const forYaear = 365.25;
    let now = new Date();
    return Math.floor((now-date)/hundred/sixty/sixty/twentyFour/forYaear);
}

//2
function getWeekDay(date){
    let day = new Date(date);
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[day.getDay()];
}

//3
function getProgrammersDay(year){
    const progDay = 256;
let date = new Date(year, 0, progDay);
let mouths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
alert(date.getDay());
return `${date.getDate()} ${mouths[date.getMonth()]}, ${year} (${getWeekDay(date)})`;
 
}

//4
function howFarIs(str){
    const two = 2;
    const three = 3;
    const four = 4;
    const five = 5;
    const six = 6;
    let days = 0;
    let day = 0;
    let now = new Date();
    let nowWeekday = now.getDay();
    let specifiedWeekday = '';
    if(str.match(/sunday/gi)){
        day =0;
        specifiedWeekday = 'Sunday';
    }
    if(str.match(/monday/gi)){
        day=1;
        specifiedWeekday = 'Monday';
    }
    if(str.match(/tuesday/gi)){
        day=two;
        specifiedWeekday = 'Tuesday';
    }
    if(str.match(/wednesday/gi)){
        day=three;
        specifiedWeekday = 'Wednesday';
    }
    if(str.match(/thursday/gi)){
        day=four;
        specifiedWeekday = 'Thursday';
    }
    if(str.match(/friday/gi)){
        day=five;
        specifiedWeekday = 'Friday';
    }
    if(str.match(/saturday/gi)){
        day=six;
        specifiedWeekday = 'Saturday';
    }
    days = day - nowWeekday;
    if (days === 0){
        return `Hey, today is ${ getWeekDay(now) } =)`; 
    }
    return `It's ${ days } day(s) left till ${ specifiedWeekday }`;
}

//5
function isValidIdentifier(str){
    if(str.match(/[^A-Za-z0-9_$]/)||!str.match(/./)||str.match(/\b[0-9]/g)){
        return false;
    }
    return true;
}

//6
function capitalize(str){
    return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}

//7
function isValidAudioFile(str){
    let exp = /[^A-Za-z]{1,}/;
    let index = str.lastIndexOf('.');
    let name = str.substring(0,index);
    if(!str.match(/.mp3$/) && !str.match(/.flac$/) 
    && !str.match(/.alac$/) && !str.match(/.aac$/)||exp.test(name)){ 
        return false;
    }else{
        return true;
    }
}

//8
function getHexadecimalColors(str){
    return str.match(/#([a-f0-9]{3}){1,2}\b/gi);
}

//9
function isValidPassword(str){
    if(str.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g) === null){
        return false;
    }else{
        return true;
    }
}

//10
function addThousandsSeparators(strNum){
    let str = `${strNum}`;
    const three =3;
    const four =4;
    if(str.length>three){
    let index = 1;
    while(index < str.length){
        str = str.replace(new RegExp(`(.){${index}}`), '$&,');
        index +=four;
        
    }
    }
        return str;
}


