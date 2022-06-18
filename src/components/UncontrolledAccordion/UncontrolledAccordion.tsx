import React, {useState} from 'react';


type UncontrolledAccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}


function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {


    let [collapsed, setCollapsed] = useState(true);


    const onClickToggle = () => {
        setCollapsed(!collapsed);
    };


    return (
        <div>
            <AccordionTitle titleValueNext={props.titleValue}/>
            <button onClick={onClickToggle}>Toggle
            </button>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}


type AccordionTitlePropsType = {
    titleValueNext: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.titleValueNext}</h3>;
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}


export default UncontrolledAccordion;