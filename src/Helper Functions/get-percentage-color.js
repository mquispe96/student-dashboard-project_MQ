const getPercentageColor = percent => {
    const number = Number(percent.match(/\d+/g));
    if(90 <= number){
        return 'green';
    }
    else if(80 <= number && number < 90){
        return 'rgb(255, 211, 0)';
    }
    else if(70 <= number && number < 80){
        return 'orange';
    }
    else{
        return 'red';
    }
}

export default getPercentageColor;