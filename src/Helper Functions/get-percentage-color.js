const getPercentageColor = percent => {
    const number = Number(percent.match(/\d+/g));
    if(90 <= number){
        return 'green';
    }
    else if(80 <= number < 90){
        return 'yellow';
    }
    else if(70 <= number < 80){
        return 'orange';
    }
    else{
        return 'red';
    }
}

export default getPercentageColor;