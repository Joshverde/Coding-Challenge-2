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

let customers = [
    {
        name: "Helga",
        email: "helga@hotmail.com",
        purchaseAmount:35
    },
    {   
        name: "John",
        email: "john@hotmail",
        purchaseAmount: 42
    },
    {   
        name: "jake",
        email:"jake@hotmail",
        purchaseAmount: 47
    },
    ]
    customers.push( {
        name: "David",
        email: "David@hotmail",
        purchaseAmount: 37});
       

    console.log(customers)

    function calculateTax () 
    {
        return order.amount * taxrate
    };
let order = {
            orderId: 12345,
            customerName: "Jannet Holmes",
            amount: 700
        };
let taxrate = .10
    
orderTax = calculateTax()
console.log(order)
console.log(orderTax)

