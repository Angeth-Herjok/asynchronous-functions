// Write an asynchronous function that accepts a message string 
// and a delay time in milliseconds. The function should log the 
// message to the console after the specified delay time.
async function delayingMessage(message,delayTime){
    await new Promise(resolve =>
        setTimeout(resolve,delayTime))
         console.log(message);
};
delayingMessage("I am learning Javascript",1000)
// or
async function messages(message,delay){
  setTimeout(()=>{console.log(message)},delay)
}
messages("Hello")

// You have an array of user IDs and a function getUserData(id) 
// that returns a Promise with user data when given a user ID. 
// Write an asynchronous function that fetches and logs 
// the data for each user ID one by one, in sequence.
// async function fetchesAndLogsUserData(userIds){
//   for(let id of userIds){
//     await userIds
//     console.log(id);
//   }
// }
// console.log(fetchesAndLogsUserData([124,562,455]))

// const getUserData=(id)=>{
//   return new Promise((resolve,reject)){
//     id(id)
//     setTimeout(()=>{resolve([{id:id,name:`user ${id}`}])},2000)
//   }
//   else{
//     setTimeout(()=>{XMLHttpRequestEventTarget("No user found"),2000})
//   }
// }
// async singleUserData=(userids)=>{
//   for(let id in userids){
//     const data=await.getUserData(id)
//     return data
//   }
// }

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
//  let success=true
// async  function performTask=()=>{
//   return new promise ((resolve,reject)=>{
//     setTimeout(()=>{success? resolve():reject()},2000);
//   })

// }
// const successful=async()=>{
//   try{
//     await performTask();
//     console.log("Task succesful");
//   }
// }


// async const succesful=()=>{
//   try{
//     await performTask();
//     console.log("Task fails");
//   }
//   catch{
//     throw new Error("Task failed")
//   }
// }
let success=true
const performTask=()=>{
  return new Promise((resolve, reject) => {
    setTimeout(()=>{success? resolve():reject()},2000)
  })
}
const succesful=async()=>{
  try {
    await performTask()
    console.log("Task successful");
    
  } catch {
    console.log("Task failed");
    throw new Error("Task failed")
  }
}
succesful()