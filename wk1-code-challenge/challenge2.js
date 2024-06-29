// Function to detect speeding and calculate demerit points
function speedDetector(speed) {
    // Check if speed is not a number or if it's negative
    if (isNaN(speed) || speed < 0) {
        console.log('Invalid input!'); // Print 'Invalid input!' if speed is invalid
        return;
    }

    const speedLimit = 70; // Define the speed limit

    if (speed <= speedLimit) {
        console.log('Ok'); // Print 'Ok' if speed is within the speed limit
        return; 
    } else {
        // Calculate demerit points based on exceeding speed limit
        let demeritPoints = (speed - speedLimit) / 5;
        console.log('Points: ' + demeritPoints);

        if (demeritPoints > 12) {
            console.log('License suspended'); // Print 'License suspended' if demerit points exceed 12
        }
        return;
    }
}

speedDetector();
