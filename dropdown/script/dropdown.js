const targetArea = document.querySelector('.js-dropdown-root');


const toogleDropdown = () => {
    const input = document.querySelector('.c-dropdown__input');
    input.classList.toggle('input--active');

    const list = document.querySelector('.c-dropdown__list');

    if (list.style.display === 'none') {
        list.removeAttribute('style');

    } else {
        list.style.display = 'none';
    }
}

const selectOption = (id, name) => {
    console.log('selectOption()');

    const t = document.querySelector('.input__placeholder-text');
    t.textContent = name;
    t.classList.add('placeholder-text--selected');

    const oAll = document.querySelectorAll('.list-option');
    oAll.forEach(option => {
        option.classList.remove('list-option--selected');

        if (option.id == id) {
            option.classList.add('list-option--selected');
        }
    });

    toogleDropdown();
}

const createList = () => {
    const list = document.createElement('div');
    list.classList.add('c-dropdown__list');
    list.style.display = 'none';

    users.forEach(user => {
        const {id, name, title} = user;

        const option = document.createElement('div');
        option.classList.add('list-option');
        option.setAttribute('id', id);
        option.addEventListener('click', () => selectOption(id, name));

        const n = document.createElement('span');
        n.textContent = name;

        const t = document.createElement('span');
        t.textContent = ` (${title})`;

        option.append(n, t);
        list.append(option);
    });

    return list;
}

const createInput = () => {
    const input = document.createElement('div');
    input.classList.add('c-dropdown__input');
    input.addEventListener('click', toogleDropdown);

    const placeholderText = document.createElement('span');
    placeholderText.classList.add('input__placeholder-text');
    placeholderText.textContent = 'Select option';

    const dropdownIcon = document.createElement('span');
    dropdownIcon.classList.add('input__dropdown-icon');
    dropdownIcon.textContent = ' v';

    input.append(placeholderText, dropdownIcon);

    return input;
}

const dropdown = () => {
    const component = document.createElement('section');
    component.classList.add('c-dropdown');

    const input = createInput();
    const list = createList();

    component.append(input, list);
    targetArea.append(component);
}

dropdown();