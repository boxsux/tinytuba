const tubaNoise = document.getElementById('tuba');
tubaNoise.load();

const tubaImage = document.getElementById('tubaImg');

tubaImage.addEventListener('click', () => {
    tubaNoise.play();
});
