const formatFullname = nameObj => {
    const {preferredName, middleName, surname} = nameObj;
    return `${preferredName} ${middleName[0]}. ${surname}`;
}

export default formatFullname;