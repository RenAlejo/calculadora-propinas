
/**
 * @param  __formData object
 * @returns getPerPersonAmount
 * @returns getTotalAccount
 * */
class Calculator {

    constructor( __formData ) {
        this.formData = __formData;
    }
    
    /**
     * @returns perPersonAmount:Number
     * */
    getPerPersonAmount() {

        if( !this.formData.accountAmount || !this.formData.amountOfPeople ) return;
        const amountOfPeople = parseInt( this.formData.amountOfPeople );
        const perPersonAmount = this.getTotalAccount() / amountOfPeople;

        return perPersonAmount;

    } 

    /**
     * @returns totalAmount:Number
     * */
    getTotalAccount() {

        if( !this.formData.accountAmount || !this.formData.percentage ) return;

        const accountAmount = Number( this.formData.accountAmount.replace(/[.,]/g, ''));
        const percentage = Number( this.formData.percentage );
        const roundType = Number( this.formData.round );
        const accountWithPercentage =  ( accountAmount / 100  ) * percentage;
        let totalAmount = accountWithPercentage + accountAmount;

        switch ( roundType ) {
            case 2:
                totalAmount = Math.ceil( totalAmount );
                break;
            case 3:
                totalAmount = Math.floor( totalAmount );
        }

        return totalAmount;
        
    }

}

export { Calculator };