"use strict";
const catavanControlMain = () => {
    //alreadySetMovements: movements already having been activated 
    var alreadySetMovements = { AIsAlreadySet: false, BIsAlreadySet: false, CIsAlreadySet: false, DIsAlreadySet: false, EIsAlreadySet: false };
    var configuration = { configurationName: "", mechanicalMovementsSequenceInOrder: [] }; //Note we should make this a struct in C 
    var mechanicalMovements = ["A", "B", "C", "D", "E"];
    var configurations = []; //Array of configuration objects 
    while (true) {
        //User inputs based finite state machine we specify a case for each configuration plus an idle state for when the program does nothing don't forget the default configuration for which we use the unsetAllMechanicalMovementsToGetToDefaultConfiguration function
    }
};
const unsetAllMechanicalMovementsToGetToDefaultConfiguration = () => {
    //Undo all movements as we iterate through mechanical movements and use another switch 
};
const setAGivenConfiguration = (configuration, alreadySetMechanicalMovements) => {
    setMechanicalMovementsInSequenceForAGivenConfiguration(configuration.mechanicalMovementsSequenceInOrder);
};
const setMechanicalMovementsInSequenceForAGivenConfiguration = (mechanicalMovementsSequenceInOrder) => {
    var mechanicalMovementName = "A";
    for (var i = 0; i < mechanicalMovementsSequenceInOrder.length; i++) {
        mechanicalMovementName = mechanicalMovementsSequenceInOrder[i];
        if (checkIfAGivenMechanicalMovementIsSet(mechanicalMovementName)) { //If this movement has been made already we skip it 
            continue;
        }
        setAGivenMechanicalMovement(mechanicalMovementName);
    }
};
const setAGivenMechanicalMovement = (mechanicalMovementName) => {
    switch (mechanicalMovementName) {
        case "A": {
            setMechanicalMovementA();
            break;
        }
        //case "B": {
        //  setMechanicalMovementB()
        //  break
        //} And so it repeats for each movement
    }
};
const checkIfAGivenMechanicalMovementIsSet = (mechanicalMovementName) => {
    var mechanicalMovementGivenAsParameterIsAlreadySet = false;
    switch ((mechanicalMovementName)) {
        case "A": {
            //
            return checkIfTheAMechanicalMovementIsAlreadySet();
        }
        case "B": {
            return checkIfTheBMechanicalMovementIsAlreadySet();
        }
        //case "C": And so it repeats on and on for each movement...
        default: {
            //Throw exception for wrong input 
        }
    }
};
const checkIfTheAMechanicalMovementIsAlreadySet = () => {
    return true;
};
const checkIfTheBMechanicalMovementIsAlreadySet = () => {
    return true;
};
const setMechanicalMovementA = () => {
    //Read input data and write output data for the A movement to be performed for example read from sensorX or write to output pin x 
};
const readingFromSensorX = () => {
};
const writingToOutputPinX = () => {
};
catavanControlMain();
