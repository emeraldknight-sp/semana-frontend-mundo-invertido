import {
    subscribeToHellfireClube
} from './data/hellfire-clube.js';

(function main() {
    const txtName = document.getElementById('txtName');
    const txtEmail = document.getElementById('txtEmail');
    const txtLevel = document.getElementById('txtLevel');
    const txtCharacter = document.getElementById('txtCharacter');

    const btnSubscribe = document.getElementById('btnSubscribe');

    btnSubscribe.addEventListener('click', async () => {
        const subscribe = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value
        }

        const id = await subscribeToHellfireClube(subscribe);
        alert(`${txtName.value}, sua inscrição foi adicionada com sucesso!`);
    });
})();