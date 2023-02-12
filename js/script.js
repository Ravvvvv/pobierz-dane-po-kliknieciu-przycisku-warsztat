console.log('AJAX warsztat pobierz dane po kliknieciu');


let btn = document.getElementById("btn1")
// console.log(btn);


const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {
            // console.log(data);


            let = pID = document.createElement('p');
            let  pUserId = document.createElement('p');
            let  pTitle = document.createElement('p');
            let  pBody = document.createElement('p');
            let hr = document.createElement('hr')

            pID.innerText = `Post ID: ${data.id}`;
            pUserId.innerText = `User ID:${data.userId}`;
            pTitle.innerText = `Title: ${data.title}`;
            pBody.innerText = `Body: ${data.body}`;


            document.body.appendChild(pID);
            document.body.appendChild( pUserId);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);
            // console.log('pBody');
        })
        .catch(error => {
            console.error(error);
        })
}


btn.addEventListener('click', getData);



