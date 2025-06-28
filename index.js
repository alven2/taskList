function addTask() {
    
    const $taskInput = document.querySelector('.taskInput');
    const $taskText = $taskInput.value.trim();
    
    if ($taskText !== '') {
        
    const $taskList = document.querySelector('.taskList');
    const li = document.createElement('li');
    li.textContent = $taskText;
    
    li.onclick = function() {
        if (li.style.textDecoration === 'line-through') {
            li.style.textDecoration = 'none'
        } else {
            li.style.textDecoration = 'line-through'
        }
    }
    
    const erase = document.createElement('button');
            erase.textContent = 'x';
    erase.onclick = function() {
            $taskList.removeChild(li)
    }
   
    // despliege //
    $taskList.appendChild(li)
    $taskInput.value = '';
    li.appendChild(erase);
    }