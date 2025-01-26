let products = new Array ("Civc", "Accord", "CR-V", "Ridgeline", "Pilot");
products.push("HR-V");
products.pop("HR-V")
console.log(products);

let scores = [1,3,5,7,9];
scores[1]  = 100;
let average =(scores[0] + scores[1]+ scores[2]+ scores[3]+ scores[4]) / scores.length;
console.log(average)

let employee = {
    name: "Jane",
    age: 25,
    department: "HR",
    isActive: true
};
employee.department = "Sales";
employee.postion =  "External Sales Manager";
console.log(employee);
