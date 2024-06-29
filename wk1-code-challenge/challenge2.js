function speedDetector(speed){
    if (isNaN(speed) || speed<0){
        console.log('Invalid!:');
        return;
    }
    const speedLimit = 70;
    if (speed<=speedLimit){
        console.log('Ok');
        return;
    } else{
        let demeritpoints= ((speed-speedLimit)/5);
        console.log('Points:' + demeritpoints);
        if (demeritpoints > 12){
            console.log('License suspended');
        }
        return;
    }
}
speedDetector(150);