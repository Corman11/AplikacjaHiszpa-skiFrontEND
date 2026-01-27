import styles from '../../cssFiles/Description.module.css'
import Avatar from './avatar.jpg'








function Description(){


    return(

            <>
            <div className={styles.page}>
                    <div className={styles.leftPartPage}>
                        <div className={styles.boxText}>
                            <p className={styles.paragraph}>
 Soy la profesora de español, Profe Bea. Trabajo en tercer y cuarto curso de secundaria. Nunca te aburrirás conmigo gracias a mi energía desbordante y un poco loca. Mis clases son muy interesantes y están llenas de música, canto y baile. Viví en España, Portugal e Inglaterra durante varios años. Cada día obtengo energía del flamenco, la zumba y el aquagym. Me apasiona encontrar nuevos métodos para enseñar lenguas extranjeras.
                            </p>
                           <h3>Cita:</h3> 
                    <p className={styles.paragraph}>
Me identifico con la idea de la vida expresada en Don Quijote de Miguel de Cervantes:
«Cuando la vida misma parece una locura, ¿quién sabe dónde reside la locura? Quizá ser demasiado práctico sea una locura. Renunciar a los sueños… eso puede ser locura».
                        </p>
                </div>
                    
                </div>
                    <div className={styles.rightPartPage}>
                        <div>
                                <img src={Avatar} alt="flaga" style={{
                                height: '600px',
                                borderRadius: '65px',  
                                border: '10px solid #f0f0f0'
                            }}/>
                        </div>

                    </div>

                    </div>
               
                
            
            
            
            
            
            
            </>


    )

}



export default Description ;