import styles from './Footer.module.css'

export const Footer = () => {

    return (
        <div className={styles.container}>
            <header className={styles.header}>
              <p>
                Layout construído durante o curso de ReactJS pela{" "}
                <a href="https://b7web.com.br/fullstack/" target="_blank">
                  B7Web
                </a>
                . <br />
                Modificado por{" "}
                <a href="https://github.com/Rennan20" target="_blank">
                  Rennan Silva
                </a>
                .
              </p>
            </header>
        </div>
    );
}