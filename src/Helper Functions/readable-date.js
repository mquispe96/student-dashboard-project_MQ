const readableDate = date => date.replace(/([a-z])([0-9])/i, '$1 $2');

export default readableDate;