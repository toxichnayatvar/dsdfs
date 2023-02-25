function dsdfs() {
    let m = prompt('Введите свою массу (в килограммах):')
    let h = prompt('Введите свой рост (в метрах):')
    let imt = m / h**2
    document.getElementById('imt').innerText = imt
    if (imt <= 16) {
        document.getElementById('antihype').innerText = "Выраженный дефицит массы тела"
    } else if (16 < imt && imt <= 18.5) {
        console.log(imt);
        document.getElementById('antihype').innerText = ("Дефицит массы тела")
    } else if (18.5 < imt && imt<= 25) {
        document.getElementById('antihype').innerText = ("Норма")
    } else if (25 < imt && imt <= 30) {
        document.getElementById('antihype').innerText = ("Избыточная масса тела")
    } else if (30 < imt && imt <= 35) {
        document.getElementById('antihype').innerText = ("Ожирение первой степени")
    } else if (35 < imt && imt <= 40) {
        document.getElementById('antihype').innerText = ("Ожирение второй степени")
    } else {
        document.getElementById('antihype').innerText = ("Ожирение третьей степени")
    }
}