import styles from './Secao4.module.css'
import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai'
import iceberg from './imgs/iceberg.jpg'
import tabela1 from './imgs/tabela1.png'
import tabela2 from './imgs/tabela2.PNG'
import tabela3 from './imgs/tabela3.PNG'
import Botao from '../../componentes/Botao';

const Secao4 = () => {

    const [benef1, setBenef1] = useState(false)
    const [benef2, setBenef2] = useState(false)
    const [benef3, setBenef3] = useState(false)

    return (
        <div className={styles.secao}>
            <h3>Principais Benefícios</h3>
            <div className={styles.topico} onClick={() => setBenef1(!benef1)}>
                <p>Resultados profundos, rápidos e transformadores</p>
                <AiFillPlusCircle style={{ color: 'var(--laranja)' }} size={35} />
            </div>
            {
                benef1 ?
                    <div className={`${styles.detalhe1} ${benef1 ? styles.aparecendo : ''}`} >
                        <p>A maioria dos tratamentos terapêuticos são realizados através da mente consciente, que representa apenas 5% da mente.  A hipnoterapia permite acessarmos a mente subconsciente, que representa os outros 95% da mente. Atuar a nível subconsciente, identificar as causas raízes de transtornos que podem estar reprimidas e trabalha-las resulta em uma transformação significativamente mais rápida.</p>
                        <img src={iceberg} alt="Foto Iceberg explciando o que fica na superficie e o que fica nas profundezas" />
                        <p>O Dr. Alfred Barrios, PhD em Psicologia Clínica pela Universidade da Califórnia, em seu artigo científico “Hipnoterapia” revela o resultado da sua pesquisa cientifica que comparava os resultados observados entre a Psicanálise, Terapia Cognitivo-Comportamental e Hipnoterapia:</p>
                        <img src={tabela1} alt="tabela com comparação entre tipos de tratamento" />
                        <p className={styles.italico}>“Descobrimos que para a Psicanálise podemos esperar uma taxa de recuperação de 38% após aproximadamente 600 sessões. Para Terapia Comportamental, podemos esperar recuperação de 72% após média de 22 sessões. Para a Hipnose Clínica, podemos esperar uma taxa de recuperação de 93% após uma média de 6 sessões.”</p>
                        <h4>A nossa metodologia tem apresentado resultados na 1° sessão e recuperação em 3 sessões, em média.</h4>
                        <Botao styles={{
                            backgroundColor: 'var(--vermelho)',
                            margin: '10px 0 0 0'
                        }}>
                            AGENDE UMA AVALIAÇÃO
                        </Botao>
                    </div>
                    : null
            }
            <div className={styles.topico} onClick={() => setBenef2(!benef2)}>
                <p>Aumenta a possibilidade de  ter alta de remédios psiquiátricos</p>
                <AiFillPlusCircle style={{ color: 'var(--laranja)' }} size={35} />
            </div>
            {
                benef2 ?
                    <div className={styles.detalhe2}>
                        <p>Os remédios atuam nos sintomas e não tratam a causa dos transtornos, podendo levar à:</p>
                        <ul>
                            <li>Dependência Química</li>
                            <li>Aumento de Dosagem</li>
                            <li>Sintomas Não Resolvidos Totalmente</li>
                            <li>Efeitos Colaterais</li>
                            <li>Altos Custos de Médicos e Medicação</li>
                        </ul>
                        <p>À seguir, trazemos uma simulação quanto aos possíveis custos médios incorridos num tratamento, considerando acompanhamento psiquiátrico, terapêutico e medicamentos em 1 ano:</p>
                        <img src={tabela2} alt="tabela mostrando custos de tratamentos psiquiatra" />
                    </div>
                    : null
            }
            <div className={styles.topico} onClick={() => setBenef3(!benef3)}>
                <p>Superar desafios pessoais e profissionais</p>
                <AiFillPlusCircle style={{ color: 'var(--laranja)' }} size={35} />
            </div>
            {
                benef3 ?
                    <div className={styles.detalhe3}>
                        <p>
                            As dificuldades profissionais e pessoais podem atrapalhar ou impedir, inconscientemente, de alcançar seus objetivos. Veja algumas causas das dificuldades:
                        </p>
                        <img src={tabela3} alt="tabela mostrando questões e possíveis traumas tratáveis" />
                    </div>
                    : null
            }
            <Botao styles={{
                backgroundColor: 'var(--vermelho)',
                margin: '5vh 0 0 0'
            }}>
                AGENDE UMA AVALIAÇÃO
            </Botao>

        </div>
    )
}

export default Secao4;