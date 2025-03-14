import Botao from '../../componentes/Botao';
import styles from './Secao1.module.css'

const Secao1 = ({ rolar }) => {
    return (
        <div className={styles.secao}>
            <div className={styles.conteudo}>
                <h1 className={styles.titlo_grande}>Hipnoterapia</h1>
                <h2 className={styles.subtitulo}>Erica Alana</h2>
                <p className={styles.texto}>
                    Método com foco em resultado
                </p>
            </div >
            <div className={styles.botao}>
                <Botao    
                    acao={rolar}
                    clique={'rolagem'}
                    styles={{
                        backgroundColor: 'var(--vermelho)',
                        margin: '10px 0 0 0'
                    }}>
                    Saiba Mais
                </Botao>
            </div>
        </div>
    );
}

export default Secao1;
