# phase-1-wk1-code-challenge
This repository contains solutions to three toy problems involving JavaScript functions:

Challenge 1: Student Grade Generator
Challenge 2: Speed Detector
Challenge 3: Net Salary Calculator
## Challenge 1: Student Grade Generator
Description

This function prompts the user to input student marks. It then calculates and prints the corresponding grade based on the marks provided.

Grade Criteria
A > 79
B: 60 to 79
C: 50 to 59
D: 40 to 49
E: less than 40

Usage

Call the function studentGradeGenerator with a number between 0 and 100.
for example 75 marks
const grade = studentGradeGenerator(75);
// Output: The grade is: B

## Challenge 2: Speed Detector
Description
This program takes the speed of a car as input. It checks if the speed is above or below the speed limit (70 km/h). If above, it calculates demerit points and checks if the license should be suspended.

Demerit Points Calculation
1 demerit point for every 5 km/h above the speed limit.
Usage
Call the function speedDetector with a number representing the speed of the car.
For example 80km/s
speedDetector(80);
// Output: Points: 2
If demerit points exceed 12, the function will print: "License suspended".

## Challenge 3: Net Salary Calculator
Description
This program calculates an individual’s net salary based on their basic salary and benefits. It calculates gross salary, deductions (NHIF, NSSF, PAYE), and net salary using predefined rates.
I used net salary = gross salary - NHIF - NSSF - PAYE ;

Usage
Call the function netSalaryCalculator with two numbers: basic salary and benefits.

netSalaryCalculator(50000, 5000);
// Example output details the gross salary, NHIF, NSSF, PAYE, and net salary.
Visit the provided links for more information on tax rates and deductions:
ARENA Tax Rates
KRA Tax Calculator

