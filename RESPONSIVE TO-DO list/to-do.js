var ol = document.getElementById('tasks_ol')

function addtodo(){
    var a = document.getElementById('new-task-input')
    var li = document.createElement('li')
    var liText = document.createTextNode(a.value)
    li.appendChild(liText)
    ol.appendChild(li)
    a.value = ''

    li.setAttribute('class','task_li item')

    var deleteBtn = document.createElement('button')
    var deleteBtnText = document.createTextNode('Delete')
    deleteBtn.appendChild(deleteBtnText)
    li.appendChild(deleteBtn)
    deleteBtn.setAttribute('onclick','deleteli(this)')

    var editBtn = document.createElement('button')
    var editBtnText = document.createTextNode('Edit')
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)

    editBtn.setAttribute('onclick','editfun(this)')
    deleteBtn.setAttribute('class','btn btn-danger')
    editBtn.setAttribute('class','btn btn-info ')

    deleteBtn.setAttribute('id','delete_btn')
    editBtn.setAttribute('id','edit_btn')
}

function deleteli(e){
    e.parentNode.remove()
}

function deleteall(){
    ol.innerHTML = ''
}

function editfun(e){
    var a = prompt('Enter updated value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
}

