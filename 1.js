const addButton = document.getElementById('add');

const updateLSData = () => {
    const textareaData = document.querySelectorAll('textarea');
    const notes = [];
    console.log(textareaData);
    textareaData.forEach((note) => {
        return notes.push(note.value);
    })

    console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
}

const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `
    <div class="operation">
    <button class="edit"><i class="bi bi-pencil-square"></i></button>
    <button class="trash"><i class="bi bi-trash-fill"></i></button>
   
</div>
<div class="main ${text ? "" : "hidden"} "></div>
<textarea class=" ${text ? "hidden" : ""}"></textarea>
`;

    note.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(note);


   




    const trashButton = note.querySelector('.trash');
    const editButton = note.querySelector('.edit');
    const mainDiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    trashButton.addEventListener('click', () => {
        note.remove();
    })

    textarea.value = text;
    mainDiv.innerHTML = text;


    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;
        updateLSData();
    })

    document.body.appendChild(note);

}
const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) { notes.forEach((note) => addNewNote(note)) };


addButton.addEventListener('click', () => addNewNote());