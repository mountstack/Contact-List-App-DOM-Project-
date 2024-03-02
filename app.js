

let name = document.getElementById('name');
let phone = document.getElementById('phone');
let btn = document.getElementById('btn');

let list = document.getElementById('list');



btn.addEventListener('click',function() {
    const obj = { 
        name: name.value, 
        phone: phone.value 
    } 

    addList(obj)
}) 


function addList(obj) {
    let li = document.createElement('li'); 
    li.className = 'my-[5px]'

    li.innerHTML = `
        <div class="flex justify-between p-[10px] bg-blue-200 w-[300px]">
            <div class="">
                <h2>${obj.name}</h2>
                <h3>${obj.phone}</h3>
            </div>

            <div>
                <button class="bg-blue-500 p-2 my-2">
                    Edit
                </button>
                <button class="bg-green-500 p-2 my-2" onClick=deleteItem(this)>
                    Delete
                </button>
            </div>
        </div>
    `; 

    list.appendChild(li);
}


function deleteItem(tag) {
    tag.parentElement.parentElement.parentElement.remove();
}

