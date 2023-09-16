
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

class Institution{
    constructor() {
        this.required_params = new Patient(sex, age, race, medical_history, income_index);
        this.desired_params = new Patient(sex, age, race, medical_history, income_index);
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
        this.required_params(sex, age_range, race_range, medical_history, income_index_range);
    }
    set_desired_params(sex, age_range, race, medical_history, income_index){
        this.required_params(sex, age_range, race_range, medical_history, income_index_range);
    }

    /** for required paraneters
     * @param {*} required_params is a patient class
     */
    basic_check(target, required_params){
        if(target instanceof Patient){
            //sex
            if(this.required_params.sex != null && this.required_params.sex != target.sex){ return false;}
            //age range
            const age = this.required_params.age;
            switch(age){
                case age[0] == null && age[1] == null:
                    break;
                case age[0] == null && age[1] != null:
                    if(target.age > age[1])
                    return false;
                    break;
                case age[0] != null && age[1] == null:
                    if(target.age < age[0])
                    return false;
                    break;
                case age[0] != null && age[1] != null:
                    if(target.age < age[0] || target.age > age[1]){
                        return false;
                    }
                    break;
            }
             //income_index range
             const income = this.required_params.income_index;
             switch(income){
                 case income_index[0] > target.income_index:
                     return false;
                 case income_index[1] < target.income_index:
                     return false;
             }
            //race
            let race_status = true;
            for (const element of this.required_params.race) {
                if (target.race.has(element)) {
                  race_status = true; // Found a common element
                }
            }
            
        } else{
            throw new Error('Invalid argument type: arg not patient')
        }
    }

/** for desired parameters */
    fitness_check(){}
}




const x = new Patient ("male", 5, "black", ["fever", "high bp"], 3);
console.log(x.get_income());
x.add_medical_history("balls");
console.log(x.medical_history);
x.remove_medical_history("balls")
console.log(x.medical_history);