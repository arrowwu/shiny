const findShinyNumbers = target => {
    const result = [];

    while(result.length < 100) {
        target++;
        if(target.toString().split('').sort((a, b) => a - b).join('') === target.toString()) {
            result.push(target);
        }
    }
    console.log(result);
    return result;
}

findShinyNumbers(-142);
findShinyNumbers(1542);