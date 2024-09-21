
const catavanControlMain = () => {
    //alreadySetMovements: movements already having been activated 
    var alreadySetMovements: {AIsAlreadySet: boolean, BIsAlreadySet: boolean, CIsAlreadySet: boolean, DIsAlreadySet: boolean, EIsAlreadySet: boolean} = {AIsAlreadySet: false, BIsAlreadySet: false, CIsAlreadySet: false, DIsAlreadySet: false, EIsAlreadySet: false}
    var configuration: {configurationName: String, mechanicalMovementsSequenceInOrder: String[]}= {configurationName: "", mechanicalMovementsSequenceInOrder: []} //Note we should make this a struct in C 
    var mechanicalMovements: String[] = ["A", "B", "C", "D", "E"]
    var configurations: {configurationName: String, mechanicalMovementsSequence: String[]}[] = [] //Array of configuration objects 
    while(true){
        //User inputs based finite state machine we specify a case for each configuration plus an idle state for when the program does nothing don't forget the default configuration for which we use the unsetAllMechanicalMovementsToGetToDefaultConfiguration function
    }
    
}

const unsetAllMechanicalMovementsToGetToDefaultConfiguration = () => {
    //Undo all movements as we iterate through mechanical movements and use another switch 
}

const moveToAGivenConfiguration = (configuration: {configurationName: String, mechanicalMovementsSequenceInOrder: String[]}, alreadySetMechanicalMovements: {AIsAlreadySet: boolean, BIsAlreadySet: boolean, CIsAlreadySet: boolean, DIsAlreadySet: boolean, EIsAlreadySet: boolean} ) => {
    setMechanicalMovementsInSequenceForAGivenConfiguration(configuration.mechanicalMovementsSequenceInOrder)
}

const setMechanicalMovementsInSequenceForAGivenConfiguration = (mechanicalMovementsSequenceInOrder: String[]) => {
    var mechanicalMovementName: String = "A"
    for(var i = 0; i < mechanicalMovementsSequenceInOrder.length; i++){
        mechanicalMovementName = mechanicalMovementsSequenceInOrder[i]
        if(checkIfAGivenMechanicalMovementIsSet(mechanicalMovementName)){ //If this movement has been made already we skip it 
            continue 
        }
        setAGivenMEchanicalMovement(mechanicalMovementName)
    }
}

const setAGivenMEchanicalMovement = (mechanicalMovementName: String) => {
    switch(mechanicalMovementName) {
        case "A": {
            setMechanicalMovementA()
            break
        }
        //case "B": {
        //  setMechanicalMovementB()
        //  break
        //} And so it repeats for each movement
    }
}


const checkIfAGivenMechanicalMovementIsSet = (mechanicalMovementName: String ) => {
    var mechanicalMovementGivenAsParameterIsAlreadySet: boolean = false 
    switch((mechanicalMovementName)) {
        case "A": {
            //
            return checkIfTheAMechanicalMovementIsAlreadySet()
        }
        case "B": {
            return checkIfTheBMechanicalMovementIsAlreadySet()
        } 
        //case "C": And so it repeats on and on for each movement...
        default: {
            //Throw exception for wrong input 
        }
    }
}

const checkIfTheAMechanicalMovementIsAlreadySet = (): boolean => { //It reads from sensors to know if mechanical movement A has already been made 
    return true 
}

const checkIfTheBMechanicalMovementIsAlreadySet = (): boolean => { //It reads from sensors to know if mechanical movement A has already been made 
    return true 
}

const setMechanicalMovementA = () => {
    //Read input data and write output data for the A movement to be performed for example read from sensorX or write to output pin x 
}

const readingFromSensorX = () => {

}

const writingToOutputPinX = () => {

}

catavanControlMain()