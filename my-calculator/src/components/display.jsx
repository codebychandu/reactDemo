import style from './display.module.css'

let Display = ({displayValue}) => {
    return <input className={style.display} type="text" value={displayValue}/>;
}

export default Display;