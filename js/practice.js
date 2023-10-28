// const addUserBtn = document.getElementById('addUser')
// const userNameTextField = document.getElementById('username')

// let userArray=[];

// addUserBtn.onclick=()=>
// {
//     const name = userNameTextField.value
//     userArray.push({"name":name});
//     saveData(userArray)

// }

// function saveData(userArray)
// {
//     let str=JSON.stringify(userArray);
//     localStorage.setItem('user',str);
// }





// const addUserBtn=document.getElementById('addUser')
// const userNameTextField=document.getElementById('username')

// let userArray=[];

// addUserBtn.onclick=()=>
// {
//     const name=userNameTextField.value
//     userArray.push({'user':name})
//     saveData(userArray)
// }

// function saveData(userArray)
// {
//     let str=JSON.stringify(userArray)
//     localStorage.setItem('user',str)
// }




const addUserBtn=document.getElementById('addUser')
const userNameTextField=document.getElementById('username')

let userArray=[];

addUserBtn.onclick=()=>
{
    const name=userNameTextField.value
    userArray.push({'user':name})
    saveData(userArray)

}

function saveData(userArray)
{
    let str=JSON.stringify(userArray)
    localStorage.setItem('user',str)
}