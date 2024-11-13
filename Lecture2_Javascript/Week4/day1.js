class testNumbers{

    numberComparison(){
        const int90 = 90;
        const float90 = 90.0;
        const result90 = int90 == float90;
        console.log(result90);
    
    }
    numberConversion(){
        const str12 ="12";
        const num12 = Number.parseInt(str12);
        console.log(num12, typeof(num12));
        const px50 = 'px50';
        const unit5_4 = '5.4';
    }

    numberIsNan(...args){
        args.forEach(arg => {
            console.log(arg, Number.isNaN(arg));
        })
    }

    checkForValidAgeParameter(ageParam){
        // checks for 3 conditions
        // 1. age-param is a proper number
        // 2. age-param is an integer like 21, 22, etc.
        // 3. age-param is within MIN_AGE and MAX_AGE
        const MIN_AGE = 20;
        const MAX_AGE = 100;

        const c1 = Number.isFinite(ageParam);
        const c2 = Number.isInteger(ageParam);
        const c3 = (ageParam >= MIN_AGE) && (ageParam <= MAX_AGE);
        return c1 && c2 && c3;

    }
}

const testNumber = new testNumbers;
testNumber.numberIsNan(NaN, "4", "number", 4, 2.3);

const isAgeValid = testNumber.checkForValidAgeParameter(23);
console.log(isAgeValid)


