// LECTURE

function repeat (source : string , count : number) : string {
    let result : string = "";
    
    for (let i = 0; i < count ; i++){
        result += source;
    }
    return result ;
    /* Using "return" we define what function returns to its caller */
}

export function testing (){
    const fourTests : string = repeat (" Test ", 4) ;
    const fiveAces : string = repeat ("Ace", 5) ;
    const n : number = 2 ;
    const tenAces : string = repeat ( fiveAces , n) ;
    const callInExpr : string = repeat ("A", 2) + repeat ("B", 3) ;
    return callInExpr;
}


//  Store cart total with VAT calculation

export function cartTotal(prices : number [] , vatPercentage : number) : number{
    // Step one
    const total : number = sumNumbers (prices);
    // Step two
    const vat : number = getFraction (total , vatPercentage);
    // Step three
    return total + vat;
}

function sumNumbers(nums : number [] ) : number {
    let sum : number = 0;

    for (let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
    }
    return sum;
}

function getFraction(num : number , percentage : number) : number {
    return num * percentage / 100;
}



// Ohrans Exercises

/* 1) Assuming that there is the vehicle that is traveling in a straight line at
constant speed. Calculate its speed (in kilometers per hour) when distance
(in kilometers) and time (in hours) in which vehicle traveled that distance
are given. */

export function vehicleSpeed(distance : number , time : number) : number{
    let speed : any = distance / time ; 
    return speed;
}

/* 2) There is a car race. Racetrack is straight line (for every racer) and
every racer travels at the constant speed. Racetrack is 200 kilometers long.
For every racer that participates in race, time in minutes is given. That
time represents how long did it take for particular racer to finish the race.
Calculate the speed of the fastest racer. */

export function fastestRacerSpeed(time : number []) : number {
    const distance : number = 200;
    let speed : number[] = [];
    let winner : number = 0;
    
    for(let i = 0; i < time.length; i++){
        speed.push(vehicleSpeed(distance, minutesToHours(time[i])));
    }

    for(let i = 0; i < speed.length; i++){
        if (winner < speed[i] ) {
            winner = speed[i];
        }
    }

    return winner;
}


function minutesToHours (time : number) : number {
    let timeInHours : number = time / 60;
    return timeInHours;
}


/* 3) Calculate the speed of the slowest racer in previous exercise. */

export function slowestRacerSpeed(time : number []) : number {
    const distance : number = 200;
    let speed : number[] = [];
    let loser : number = 0;
    
    for(let i = 0; i < time.length; i++){
        speed.push(vehicleSpeed(distance, minutesToHours(time[i])));
        loser = loser + vehicleSpeed(distance, minutesToHours(time[i]));
    }

    for(let i = 0; i < speed.length; i++){
        if (loser > speed[i] ) {
            loser = speed[i];
        }
    }

    return loser;
    
}



/* 4) Dollar Cost Averaging (DCA) is investment strategy that consists of
continual buying of some company stocks for the same finances amount.
Since stock price fluctuates during time, different amount of stocks are
bought during different purchases. Investor invested amount of $200 in
every purchase and amount of stocks investor retrieved for every purchase is
given. Calculate for which price per stock investor needs to sell all bought
stocks to make the profit of 20% of its investment. */

