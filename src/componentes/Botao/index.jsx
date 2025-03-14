import ReactWhatsapp from 'react-whatsapp';
import style from './Botao.module.css'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Botao = ({ children, styles, clique, acao }) => {

    return (
        <div className={style.div}>
            {
                clique === 'rolagem'?
                <button className={style.botao} style={styles} onClick={acao}>{children}</button> 
                :   <ReactWhatsapp className={style.botao} style={styles} number='+5511991636906' message='Olá, gostaria de saber mais!'>{children}</ReactWhatsapp>
            }
        </div>
    );
}

export default Botao;
