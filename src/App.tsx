import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/Logo-imc.png';
import calculator from './assets/calculator.png'
import { GridItem } from './components/GridItem';
import { levels, calculateImc, Level} from './helpers/imc';
import {Footer} from './components/Footer/Footer'

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField))
    } else {
      alert("Preencha todos os campos!")
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="logo-Rennan" width={120}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculadora de IMC</h1>
          <p>
          IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite sua altura. Ex: 1.70 (Em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled = {toShow ? true:false}
          />
           <input
            type="number"
            placeholder="Digite seu peso. Ex: 60.4 (Em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled = {toShow ? true:false}
          />

          <button onClick={handleCalculateButton} disabled = {toShow ? true:false} >Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
          <div className={styles.grid}>
            {levels.map((item,key)=>(
              <GridItem key={key} item={item} />
            ))}
          </div>
          }     
        {toShow &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={calculator} alt="voltar" width = {40} />
            </div>
            <GridItem item={toShow} />
          </div>
        }
       </div>
      </div>
        <Footer />
    </div>
  );
};

export default App
