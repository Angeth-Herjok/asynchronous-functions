// Write an asynchronous function that accepts a message string 
// and a delay time in milliseconds. The function should log the 
// message to the console after the specified delay time.
async function delayingMessage(message,delayTime){
    await new Promise(resolve =>
        setTimeout(resolve,delayTime))
         console.log(message);
};
delayingMessage("I am learning Javascript",1000)


// You have an array of user IDs and a function getUserData(id) 
// that returns a Promise with user data when given a user ID. 
// Write an asynchronous function that fetches and logs 
// the data for each user ID one by one, in sequence.
async function fetchesAndLogsUserData(userIds){
  for(let id of userIds){
    await userIds
    console.log(id);
  }
}
console.log(fetchesAndLogsUserData([124,562,455]))



// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if
//  the task is successful, and a custom error message if there's an error.
async function performTask(){
}
async function taskSuccessAndError(){
    try {
      await performTask();
      console.log("Task is successful");
    } catch (error) {
      console.log("Task unsuccessful");
    }
  }
taskSuccessAndError()
