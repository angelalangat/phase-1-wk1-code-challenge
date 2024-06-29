// Function to calculate net salary based on basic salary and benefits
function netSalaryCalculator(basicSalary, benefits) {
    // Calculate gross salary by adding basic salary and benefits
    const grossSalary = basicSalary + benefits;
    console.log(`Gross Salary: ${grossSalary}`);

    let NHIF;
    // Determine NHIF based on gross salary ranges
    if (grossSalary <= 5999) {
        NHIF = 150;
    } else if (grossSalary <= 7999) {
        NHIF = 300;
    } else if (grossSalary <= 11999) {
        NHIF = 400;
    } else if (grossSalary <= 14999) {
        NHIF = 500;
    } else if (grossSalary <= 19999) {
        NHIF = 600;
    } else if (grossSalary <= 24999) {
        NHIF = 750;
    } else if (grossSalary <= 29999) {
        NHIF = 850;
    } else if (grossSalary <= 34999) {
        NHIF = 900;
    } else if (grossSalary <= 39999) {
        NHIF = 950;
    } else if (grossSalary <= 44999) {
        NHIF = 1000;
    } else if (grossSalary <= 49999) {
        NHIF = 1100;
    } else if (grossSalary <= 59999) {
        NHIF = 1200;
    } else if (grossSalary <= 69999) {
        NHIF = 1300;
    } else if (grossSalary <= 79999) {
        NHIF = 1400;
    } else if (grossSalary <= 89999) {
        NHIF = 1500;
    } else if (grossSalary <= 99999) {
        NHIF = 1600;
    } else {
        NHIF = 1700;
    }
    console.log(`NHIF: ${NHIF}`);

    let NSSF;
    // Calculate NSSF based on gross salary ranges
    if (grossSalary <= 6000) {
        NSSF = grossSalary * 0.06;
    } else if (grossSalary > 6000 && grossSalary < 12000) {
        NSSF = (6000 * 0.06) + (grossSalary - 6000) * 0.06;
    } else {
        NSSF = 720; // NSSF capped at 720 for gross salary above 12000
    }
    console.log(`NSSF: ${NSSF}`);

    // Calculate taxable income by subtracting NSSF from gross salary
    const taxableIncome = grossSalary - NSSF;

    let PAYE;
    // Determine PAYE based on taxable income ranges
    if (taxableIncome <= 24000) {
        PAYE = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        PAYE = taxableIncome * 0.25;
    } else if (taxableIncome <= 500000) {
        PAYE = taxableIncome * 0.3;
    } else if (taxableIncome <= 800000) {
        PAYE = taxableIncome * 0.325;
    } else {
        PAYE = taxableIncome * 0.35;
    }
    console.log(`PAYE: ${PAYE}`);

    // Calculate net salary by subtracting NHIF, NSSF, and PAYE from gross salary
    const netSalary = grossSalary - NHIF - NSSF - PAYE;
    console.log(`Net Salary: ${netSalary}`);

    // Return an object containing all calculated values
    return { grossSalary, NHIF, NSSF, PAYE, netSalary };
}

// Example usage: calculate net salary for a basic salary of 5000 and benefits of 1000
netSalaryCalculator(5000, 1000);
