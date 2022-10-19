function isWin(element){
    return(element.result === "W");
}
function superbowlWin(record){
    if (record.find(isWin) === undefined){
        return undefined;
    }
    else {return record.find(isWin).year};
}
