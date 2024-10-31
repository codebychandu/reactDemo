
import style from './button.module.css'
export const ButtonContainer = ({onButtonClick}) => {
    const ButtonNames = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
    


    return (
        <div className={style.buttonContainer}>        
        {ButtonNames.map((ButtonName) => (

           <button className={style.button} onClick={() => onButtonClick(ButtonName)}>
            {ButtonName}
           </button>
        ))} 
           
      </div>
    );
}

