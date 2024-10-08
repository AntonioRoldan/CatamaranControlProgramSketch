
const catavanControlMain = () => {
    //alreadySetMovements: movements already having been activated 
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

const setAGivenConfiguration = (configuration: {configurationName: String, mechanicalMovementsSequenceInOrder: String[]}) => {
    setMechanicalMovementsInSequenceForAGivenConfiguration(configuration.mechanicalMovementsSequenceInOrder)
}

const setMechanicalMovementsInSequenceForAGivenConfiguration = (mechanicalMovementsSequenceInOrder: String[]) => {
    var mechanicalMovementName: String = "A"
    for(var i = 0; i < mechanicalMovementsSequenceInOrder.length; i++){
        //We iterate through each mechanical movement belonging to a given configuration object and execute them sequentially unless it is already set from a previous configuration setup
        mechanicalMovementName = mechanicalMovementsSequenceInOrder[i]
        // if(checkIfAGivenMechanicalMovementIsSet(mechanicalMovementName)){ //If this movement has been made already we skip it 
        //     continue 
        // } NOTE: We don't need this if statement with its respective function because reading from the sensor in the while loop is enough for the non repeating functionality to be achieved because if the sensor is already sending data to our program we know the movement is made and automatically the movement won't be made 
        // we can just read from the sensor and use this reading as the condition of a while loop add the commented code below inside each case wiithin the setAGivenMechanicalMovement function instead 
        //while(!readDesiredDataFromSensorForTheAGivenMovement()) { it can be one of two sensors depending on the movement we want to make we read from the sensor that activates when the movement has been finished
        //  writeOutputForMovementA
        //} 
        // stop writingOutputForMovementA
        setAGivenMechanicalMovement(mechanicalMovementName)
    }
}

const setAGivenMechanicalMovement = (mechanicalMovementName: String) => {
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


const checkIfAGivenMechanicalMovementIsSet = (mechanicalMovementName: String , ) => {
    var mechanicalMovementGivenAsParameterIsAlreadySet: boolean = false 
    switch((mechanicalMovementName)) {
        case "A": {
            //
            return checkIfTheAMechanicalMovementIsAlreadySet() //Read sensor to know if this movement is already set 
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

const checkIfTheBMechanicalMovementIsAlreadySet = (): boolean => { //It reads from sensors to know if mechanical movement B has already been made 
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