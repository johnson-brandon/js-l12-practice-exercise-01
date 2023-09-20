const selectUserNumber=document.querySelector("select#users");
const randomFolks = document.querySelector(".random-peeps");
// console.log(selectUserNumber);

const getData= async function(numUsers){
    const userRequest= await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data= await userRequest.json();
    //console.log(data);

    const userResults=data.results;
    console.log(userResults);

    displayUsers(userResults);
};
getData(1);

const displayUsers= function(userResults) {
    randomFolks.innerHTML="";

    for(let user of userResults) {
        const country=user.location.country;
        const name=user.name.first;
        const imageUrl=user.picture.medium;
        const userDiv=document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar" />
            `;
        randomFolks.append(userDiv);
    }
};
// THERE IS SOMETHING WRONG IN THIS FUNCTION. 9/18/23 @ 2000 HOURS
selectUserNumber.addEventListener("change", function(e){
    let numUsers=e.target.value;
    getData(numUsers);
});