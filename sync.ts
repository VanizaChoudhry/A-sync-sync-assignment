// //================================== Question # 1=====================================
// // Write a simple asynchronous TypeScript function fetchGreeting that returns a 




async function fetchGreeting(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hey! Whats up");
        }, 2000);
    });
}

// Example usage:
async function main() {
    const greeting = await fetchGreeting();
    console.log(greeting);
}

main();



// //================================Question # 2======================================
// // Write a function simulateTask that simulates a task by logging "Task started", 


function simulateTask() {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task completed");
    }, 1000);
}

simulateTask();



// //=================================== Question # 3===========================
// // Write a function fetchData that returns a Promise which resolves with the string 




function fetchData1(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

// Example usage:
fetchData().then(console.log);




// //================================ Question # 4================================
// // Write a function fetchWithError that returns a Promise. It should randomly either 



function fetchWithError(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly resolve or reject
            if (Math.random() < 0.5) {
                resolve("Data fetched successfully!");
            } else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}

// Example usage:
fetchWithError()
    .then(console.log)
    .catch(console.error);



// //============================== Question # 5===============================
// // Write a function executeSequentially that executes two functions fetchData and 



function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

function processData(data: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed: ${data}`);
        }, 1000);
    });
}

function executeSequentially() {
    fetchData()
        .then((fetchResult) => {
            console.log(fetchResult);
            return processData(fetchResult);
        })
        .then((processResult) => {
            console.log(processResult);
        })
        .catch(console.error);
}

executeSequentially();
