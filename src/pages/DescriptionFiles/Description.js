import styles from '../../cssFiles/Description.module.css'
import Avatar from './avatar.jpg'
import { AboutPageContent } from '../WebpageText';







function Description(){


    return(

            <>
            <div className={styles.page}>
                    <div className={styles.leftPartPage}>
                        <div className={styles.boxText}>
                            <p className={styles.paragraph}>
{AboutPageContent.PierwszaPolowaTesktu}                            </p>
                           <h3>{AboutPageContent.Pomiedzy}</h3> 
                    <p className={styles.paragraph}>
{AboutPageContent.DrugaPolowaTekstu}  </p>
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