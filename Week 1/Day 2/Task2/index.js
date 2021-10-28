const fs = require("fs");

let folder = "./Odev";
let fileName = "/emploees.json";
let filePath = folder + fileName;
let employee = {"name": "Employee 1 Name", "salary": 2000};
let employee2 = {"name": "Employee 2 Name", "salary": 3500};

// Creating "Odev" directory
fs.mkdir(folder, (err) => {
    if (!err){
        console.log("1- Directory created successfully.");
    } else {
        throw err;
    }
});

// CREATE File with given data.
setTimeout( () => {
    fs.writeFile(filePath, JSON.stringify(employee2), (err) => {
        if (!err) {
            console.log("2- File created successfully");
        } else {
            throw err;
        }
    });
}, 1000);
 
// READ file.
setTimeout( () => {
    fs.readFile(filePath, (err, data) => {
        if (!err) {
            console.log("3- File read successfully:", JSON.parse(data));
        } else {
            throw err;
        }
    });
}, 2000);


// UPDATE file
setTimeout( () => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            throw err;
        } else {
            let readData = JSON.parse(data);
            [ readData.name, readData.salary ] = [ employee2.name, employee2.salary ];
            fs.writeFile(filePath, JSON.stringify(employee2), (err) => {
                if (!err) {
                    console.log("4- File updated successfully");
                } else {
                    throw err;
                }
            });
        }
    });    
}, 3000);

// DELETE file.
setTimeout( () => {
    fs.unlink(filePath, (err) => {
        if (err) {
            throw err;
        } else {
            console.log("5- File deleted successfully.");
        }
    })
}, 4000);