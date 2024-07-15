let person = "Enrolled Member"
let accessLevel;

switch(person) {
    case "Employee":
    case "Enrolled Member":
        accessLevel = "Full access"
        break;
    case "Subscriber":
        accessLevel = "Partial"
        break;
    default:
        accessLevel = "Not enrolled in system. Please enroll or subscribe to access this facility";
}

console.log("User Status: ", person)
console.log("User Access Level: ", accessLevel)

let dieticianAccess = false;
switch(person) {
    case "Enrolled Member":
        dieticianAccess = true;
    default:
        dieticianAccess = false; 
}


console.log("According to our records you are a ",person, "and your access level is ", accessLevel)
let dieticianString = dieticianAccess == true ? console.log("You have access to one-on-one dietician resources") : console.log("You do not have access to the dietician")