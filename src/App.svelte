<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const tubaNoise = document.getElementById('tuba');
        tubaNoise.load();

        const tubaImage = document.getElementById('tubaImg');

        tubaImage.addEventListener('click', () => {
            tubaNoise.play();
        });
    });
</script>

<main>
    <img src="../assets/tuba.jpg" alt="tuba" width="60" height="48" id="tubaImg" class="tuba" />
    <audio id="tuba">
        <source src="../assets/tuba.mp3" type="audio/mp3" />
    </audio>
</main>

<style>
    * {
        box-sizing: border-box;
    }

    main {
        min-height: 100vh;
        padding: 4rem 2rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .tuba {
        cursor: pointer;
    }
</style>
