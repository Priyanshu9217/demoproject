const addUserBtn = document.getElementById('addUser')
const userNameTextField = document.getElementById('username')

let userArray = [];

let objstr=localStorage.getItem('users')
// console.log(objstr)
if(objstr !=null)
{
    userArray=JSON.parse(objstr)
}
// console.log(userArray)
displayData()
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

function displayData()
{
    
    let data='';
    userArray.forEach((user,i)=>
    {
        // console.log(user)
        data +=`
        <tr>
        <th>${i+1}</th>
        <td>${user.name}</td>
        </tr>`
        console.log(data)
    })
}
