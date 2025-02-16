import Botao from '../../componentes/Botao';
import Card from '../../componentes/Card';
import styles from './Secao2.module.css';
import img1 from './imgs/secao2_01.jpg'
import img2 from './imgs/secao2_02.jpg'
import img3 from './imgs/secao2_03.jpg'
import img4 from './imgs/secao2_04.jpg'
import { TfiThought } from 'react-icons/tfi';

const Secao2 = () => {
    return (
        <div className={styles.secao}>
            <h2 className={styles.titulo}>A Hipnoterapia é excelente para:</h2>
            <div className={styles.conteudo}>
                <Card
                    alter={"Imagem pessoa sorrindo"}
                    imagem={img1}
                    textinho={"Complementar tratamentos de desequilíbrios mentais"}
                />
                <Card
                    alter={"Imagem pessoa feliz"}
                    imagem={img2}
                    textinho={"Tratar desequilíbrios emocionais e comportamentais"}
                />
                <Card
                    alter={"Imagem pessoa realizada"}
                    imagem={img3}
                    textinho={"Emagrecer"}
                />
                <Card
                    alter={"Imagem pessoa satisfeita"}
                    imagem={img4}
                    textinho={"Superar desafios pessoais e profissionais"}
                />
            </div>
            <p className={styles.texto}>A técnica consiste em identificar e ressignificar as causas de:</p>
            <ul>
                <li key={"1.2"}>
                    <TfiThought className={styles.icon} size={30} />
                    Depressão, ansiedade, síndrome do pânico ou burnout, traumas, bipolaridade.
                </li>
                <li key={"2.2"}>
                    <TfiThought className={styles.icon} size={30} />
                    Medos, fobias, baixa autoestima, inseguranças, timidez, stress, TOC, gagueira e vícios.
                </li>
                <li key={"3.2"}>
                    <TfiThought className={styles.icon} size={30} />
                    Compulsão ou compensação alimentar.
                </li>
                <li key={"4.2"}>
                    <TfiThought className={styles.icon} size={30} />
                    Dificuldades no alcance de resultados, metas, relacionamentos.
                </li>
            </ul>
            <Botao styles={{
                    backgroundColor: 'var(--vermelho)',
                    margin: '10px 0 0 0'
                }}>
                    AGENDE UMA AVALIAÇÃO
                </Botao>
        </div>
    );
}

export default Secao2;
