import Head from 'next/head';
import Script from 'next/script';
import styles from '../styles/Home.module.css';
import { Tuba } from './components';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>tiny tuba</title>
                <meta name="description" content="da tooba is so tiny :D" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="scripts/tuba.js"></Script>
            <Tuba />
        </div>
    );
}
