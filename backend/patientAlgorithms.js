/**
 * sex: binary value (M/F)
 * age: single number
 * race: array (some people can be biracial)
 * medical_history: array of conditions
 * income: range from 0-1
        <20k:    0
        20k-40k: 1
        40-60k: 2
        60-80k: 3
        80-100k: 4
  
 */

class Patient{
    constructor(sex = null, age = null, race = null, medical_history = null, income_index = null) {
    this.sex = sex;
    this.age = age;
    this.race = race;
    this.medical_history = medical_history;
    this.income_index = income_index;
        }

    get_income(){
        return [this.income_index * 20000, (this.income_index + 1) * 20000];
        }
    /** 
     * @param {*} condition  
     * call after each selection for medical history
    */
    add_medical_history(condition){
        this.medical_history.push(condition);
        }
    /**
     * 
     * @param {*} condition 
     * call after each deselection for medical history
     */
    remove_medical_history(condition){
        for(let i = 0; i < this.medical_history.length; i++){
            if(this.medical_history[i] == condition){
                this.medical_history.splice(i, 1);
            }
        }
        }

}

//range compare
function range_compare(range, target){
    if (range[0] == null && range[1] == null){
        return true;}
    if(range[0] == null && range[1] != null){
        if(target > range[1]) return false;}
    if(range[0] != null && range[1] == null){
        if(target < range[0]) return false;}
    if(range[0] != null && range[1] != null){
        if(target < range[0] || target > range[1]){
            return false;
        }
    }
    return true;
}
//set compare
function set_compare(desired_arr, target_arr){
    let status = false;
    const new_set = new Set(desired_arr);
    for (const element of target_arr) {
        if (new_set.has(element)) {
            status = true; // Found a common element
        }
    }
    return status;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------
class Institution{
    /**
     * 
     * @param {*} required:= patient object of things that are must, !!!!! all params are arrays, expect sex!!!!!!
     * @param {*} desired:= same as above
     * @param {*} significance_arr:= array that is 5 elements long, contains integers from 0-10
     */
    constructor() {
        this.required;
        this.desired;
        this.significance;
        }
    /**
     * 
     * @param {*} sex:= must be male or female
     * @param {*} age_range:= in the form [min, max] ie: [18, null] (18+) [null, 55] (<55)
     * @param {*} race_range;= allowed races ie: [black, white mexican]
     * @param {*} medical_history:= required medical conditionsie: [highbp, stroke, ...]
     * @param {*} income_index_range:= required sociostatus [min, max]
     */
    set_required_params(sex = null, age_range = [null, null], race_range = [null, null], medical_history = [null], income_index_range = [null]){
        this.required = new Patient(sex, age_range, race_range, medical_history, income_index_range);
    }
    set_desired_params(sex = null, age_range = [null, null], race_range = [null, null], medical_history = [null], income_index_range = [null]){
        this.desired = new Patient(sex, age_range, race_range, medical_history, income_index_range);
    }
    set_significance_array(arr){
        this.significance = arr;
    }

    /** for required paraneters
     * @param {*} target is a patient class
     * returns true or false value
     */
    basic_check(target){
        if(target instanceof Patient){
            //sex
            if(this.required.sex != null && this.required.sex != target.sex){ return false;}
            //age compare
            if(!range_compare(this.required.age, target.age)){ return false;}
            //income compare
            if(!range_compare(this.required.income_index, target.income_index)){return false;}
            //race compare
            if(!set_compare(this.required.race, target.race)){return false;}
            //medical history
            if(!set_compare(this.required.medical_history, target.medical_history)){return false;}
        } else{
            throw new Error('Invalid argument type: arg not patient')
        }
        return true;
    }

    /** for desired paraneters
     * @param {*} target is a patient class
     * returns true or false value
     */
    fitness_check(target, significance_arr = [0,0,0,0,0]){
        if(significance_arr == [0,0,0,0,0]){
            return 1;
        }
        let maxpoints = 0;
        for(let i = 0; i < significance_arr.length; i++){
            maxpoints += significance_arr[i];
        }  
        let points_gained = 0;
        if(target instanceof Patient){
            //sex
            if(this.desired.sex != null && this.desired.sex != target.sex){
                points_gained += significance_arr[0] * .1;}
            //age compare
            if(!range_compare(this.desired.age, target.age)){
                points_gained += significance_arr[1] * .1;}
            //income compare
            if(!range_compare(this.desired.income_index, target.income_index)){
                points_gained += significance_arr[2] * .1;}
            //race compare
            if(!set_compare(this.desired.race, target.race)){
                points_gained += significance_arr[3] * .1;}
            //medical history
            if(!set_compare(this.desired.medical_history, target.medical_history)){
                points_gained += significance_arr[4] * .1;}
        } else{
            throw new Error('Invalid argument type: arg not patient')
        }
        return points_gained;
    }
}


function printpat(a){
    console.log(a.sex);
    console.log(a.age);
    console.log(a.race);
    console.log(a.medical_history);
    console.log(a.income_index);
}

const x = new Patient ("male", 5,["black"], ["fever", "high bp"], 3);
const sigarr = [0, 1, 3, 4, 5];
const a = new Institution(sigarr);
a.set_desired_params(null, [1,5]);
a.set_required_params("male", [null, 5], ["black", "Mexican"], ["fever", "high bp", "hon"], [0,4]);
a.set_significance_array(sigarr);

// printpat(desired);
console.log(a.basic_check(x));
console.log(a.fitness_check(x, sigarr));

// console.log(x.get_income());
// x.add_medical_history("balls");
// console.log(x.medical_history);
// x.remove_medical_history("balls")
// console.log(x.medical_history);