const xhr = new XMLHttpRequest();
const site = "https://api.github.com/users/";
var infor;



function buscar() {
    var user = `${site}${document.getElementById('inp_name').value}`;
    xhr.open('GET', `${user}`, true)
    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let resposta = xhr.responseText;
            infor = JSON.parse(resposta);

            document.querySelector('#nome').innerHTML = `<a href='${infor.html_url}' target='blank'>${infor.name}</a>`;
            document.querySelector('#avatar').src = infor.avatar_url;
            document.querySelector('#following').innerText = infor.following;
            document.querySelector('#followers').innerText = infor.followers;
            document.querySelector('#created_at').innerText = infor.created_at;
            document.querySelector('#updated_at').innerText = infor.updated_at;        
        }
    }
    
}

function showtab(tabNum) {
    let tab_all = document.querySelectorAll(".aba");
    let tab = document.getElementById(`aba_${tabNum}`);

    tab_all.forEach(tab_hide);
    tab.style.display = "inline";

}

function tab_hide (item) {
    item.style.display = "none";
}