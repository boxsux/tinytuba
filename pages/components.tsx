import styles from '../styles/Home.module.css';
import Image from 'next/image';

export const Tuba = () => {
    return (
        <main className={styles.main}>
            <Image src="/assets/tuba.jpg" alt="tuba" width="60" height="48" id="tubaImg" />
            <audio id="tuba">
                <source src="/assets/tuba.mp3" type="audio/mp3" />
            </audio>
        </main>
    );
};

export const TubaPlayer = () => {
    return (
        <script>
            $(document).on('ready', (){' '}
            {$('#tubaImg').on('click', function () {
                $('#tuba').load();
                $('#tuba').play();
            })}
            );
        </script>
    );
};
