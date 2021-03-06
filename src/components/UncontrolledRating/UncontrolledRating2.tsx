import React, {useState} from 'react';
import s from '../UncontrolledRating/UncontrolledRating2.module.css';


export function UncontrolledRating2() {

    const resetStyle = {
        marginLeft: '15px',
        cursor: 'pointer'
    }


    let [value, setValue] = useState(0)


    return (
        <div className={s.wrapper}>
            <h4>7. callback, onClick at Rating Uncontrolled component</h4>

            <div className={s.starBlock}>
                <Star selected={value >= 1} setValue={setValue} value={1}/>
                <Star selected={value >= 2} setValue={setValue} value={2}/>
                <Star selected={value >= 3} setValue={setValue} value={3}/>
                <Star selected={value >= 4} setValue={setValue} value={4}/>
                <Star selected={value >= 5} setValue={setValue} value={5}/>

                <button onClick={() => {
                    setValue(0)
                }} style={resetStyle}>Reset
                </button>
            </div>

        </div>
    )
}


type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}


function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.setValue(props.value)
    }} className={s.star}>{props.selected ? <b>star</b> : 'star'}</span>
}
