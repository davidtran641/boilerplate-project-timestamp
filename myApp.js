
const parseTime = (input) => {
    if (input == null) {
        return makeResponse(new Date());
    }
    if(isValidNumber(input)) {
        return makeResponse(new Date(parseInt(input)));
    }
    
    const date = new Date(input);
    console.log(date);
    if (isNaN(date)) {
        return {error : "Invalid Date"}
    }
    return makeResponse(date);
}

function isValidNumber(input) {
    return /^\d+$/.test(input)
}
function makeResponse(date) {
    return {unix: date.getTime(), utc: date.toUTCString()};
};

exports.parseTime = parseTime;
exports.isValidNumber = isValidNumber;
