"use strict";
{
    var add = function (param1, param2) {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    var result1 = add("2", "3");
    console.log(result1);
    var getUser = function (user) {
        if ("role" in user) {
            console.log("My name is ".concat(user.name, " and my role is ").concat(user.role));
        }
        else {
            console.log("My name is ".concat(user.name));
        }
    };
    var normalUser = {
        name: "Mr. Normal Bhai",
    };
    var adminUser = {
        name: "Mr. Admin Bhai",
        role: "admin",
    };
    getUser(adminUser);
    //
}
