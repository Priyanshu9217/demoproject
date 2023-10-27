const addUserBtn = document.getElementById('addUser')
const userNameTextField = document.getElementById('username')

let userArray = [];

addUserBtn.onclick =()=>
{
    // alert("hello")
    const name = userNameTextField.value
    // alert(name)
    userArray.push({'name':name});
    // console.log(userArray);
    saveData(userArray)

}
function saveData(userArray)
{
    // console.log(userArray)
    let str = JSON.stringify(userArray);
    localStorage.setItem('users',str);
}