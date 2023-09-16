
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
    switch(range){
        case range[0] == null && range[1] == null:
            break;
        case range[0] == null && range[1] != null:
            if(target > range[1])
            return false;
            break;
        case range[0] != null && range[1] == null:
            if(target < range[0])
            return false;
            break;
        case range[0] != null && range[1] != null:
            if(target < range[0] || target > range[1]){
                return false;
            }
            break;
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
     * @param {*} required:= patient object of things that are must, !!!!! all params are arrays!!!!!
     * @param {*} desired:= same as above
     */
    constructor(required, desired) {
        this.required = required;
        this.desired = desired;
        }
    /**
     * 
     * @param {*} sex:= must be male or female
     * @param {*} age_range:= in the form [min, max] ie: [18, null] (18+) [null, 55] (<55)
     * @param {*} race_range;= allowed races ie: [black, white mexican]
     * @param {*} medical_history:= required medical conditionsie: [highbp, stroke, ...]
     * @param {*} income_index_range:= required sociostatus [min, max]
     */
    set_required_params(sex, age_range, race_range, medical_history, income_index_range){
        this.required = new Patient(sex, age_range, race_range, medical_history, income_index_range);
    }
    set_desired_params(sex, age_range, race_range, medical_history, income_index_range){
        this.desired = new Patient(sex, age_range, race_range, medical_history, income_index_range);
    }

    /** for required paraneters
     * @param {*} required is a patient class
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

/** for desired parameters */
    fitness_check(){}
}


function printpat(a){
    console.log(a.sex);
    console.log(a.age);
    console.log(a.race);
    console.log(a.medical_history);
    console.log(a.income_index);
}

const x = new Patient ("male", 5,["black"], ["fever", "high bp"], 3);
const required = new Patient ("male", [3, null], ["black"], ["fever", "high bp"], 3);
const desired = new Patient(null, 3, ["black", "mexican"]);
const a = new Institution(required, desired);

// printpat(desired);
console.log(a.basic_check(x));

// console.log(x.get_income());
// x.add_medical_history("balls");
// console.log(x.medical_history);
// x.remove_medical_history("balls")
// console.log(x.medical_history);