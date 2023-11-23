document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');

    userForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${name}</strong> (${email}) <button class="delete">Eliminar</button>`;
            userList.appendChild(listItem);

            userForm.reset();
        }
    });

    userList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete')) {
            event.target.parentElement.remove();
        }
    });
});
