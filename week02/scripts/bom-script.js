const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '')
    {
        let chapterList = document.createElement('li');
        let deleteButton = document.createElement('button');

        chapterList.innerHTML = input.value;
        deleteButton.innerHTML = '❌';
        chapterList.append(deleteButton);
        list.append(chapterList);

        deleteButton.addEventListener('click', function() {
            list.removeChild(chapterList);
            input.focus();
        })

        input.value = '';
        input.focus();
    }
});