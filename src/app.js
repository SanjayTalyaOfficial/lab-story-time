function moreAboutHome()
{
    
}

//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren()
{
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

function doesFriendExist(ageInNumber)
{
    var ageInNumber=20;
    if(ageInNumber==NaN)
    {
        document.write("age in Text is not a number");
    }
    else{
        document.write("age in Number is not a number")
    }
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

var lilyKaren =x;
var karenAte = y;
var sweetsConsumedByKaren = z;
var metersToTravel = n;
var totalNoOfSweets = a;
var sweetsConsumedInMeters = z*n;
y = ((y+x+sweetsConsumedInMeters);
var remain = v;
v = y/a;
var eachOfThem;
eachOfThem = v/2;


function sweetTooth()
{
    return eachOfThem;
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function farenheitToCelcius(fahrenheit)
{
    var celcius = (5/9) * (fahrenheit - 32);
    return celcius;

}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice)
{
    switch(choice)
    {
        case 1: "Take her daughter to a doctor"; break; 
        case 2: "Talk to her husband about it"; break;
        case 3: "Counsel her daughter herself"; break;
        case 4: "Lock her daughter in her room"; break;  
    }
}
//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
function consoleKaren()
{
    var str1="strategy 1";
    var str2="strategy 2";
    var str3="strategy 3";
    var str4="strategy 4";
    var str5="strategy 5";
    var str6="strategy 6";
    var res = st1.concat(str2, str3, str4, str5, str6);
    var length = res.length;
}
