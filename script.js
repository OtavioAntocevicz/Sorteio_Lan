function sortearTimes() {
    // Obtém os nomes de cada pote
    const potes = [];
    for (let i = 1; i <= 5; i++) {
        const nome1 = document.getElementById(`pote${i}_1`).value.trim();
        const nome2 = document.getElementById(`pote${i}_2`).value.trim();
        if (nome1 && nome2) {
            potes.push([nome1, nome2]);
        } else {
            alert('Lista incompleta');
            return;
        }
    }

    // Inicializa os arrays dos times
    const time1 = [];
    const time2 = [];

    // Distribui uma pessoa de cada pote para os dois times
    potes.forEach(pote => {
        const shuffledPote = pote.sort(() => 0.5 - Math.random());
        time1.push(shuffledPote[0]);
        time2.push(shuffledPote[1]);
    });

    // Atualiza os nomes sorteados para os times
    const ulTime1 = document.getElementById('time1').querySelector('ul');
    const ulTime2 = document.getElementById('time2').querySelector('ul');

    ulTime1.innerHTML = '';
    ulTime2.innerHTML = '';

    time1.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        ulTime1.appendChild(li);
    });

    time2.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        ulTime2.appendChild(li);
    });

    // Remove a classe hidden para mostrar os times
    document.getElementById('time1').classList.remove('hidden');
    document.getElementById('time2').classList.remove('hidden');
}
