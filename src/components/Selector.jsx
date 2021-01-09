import React from "react";
import {Button} from "reactstrap";

export const SelectorInner = props => {
    console.log(props);
    return <p>{props.children}</p>
}

const Selector = ({value, setValue, ...rest}) => {
    let selection;
    switch(value) {
        case 0:
            selection = "Rock";
            break;
        case 1:
            selection = "Paper";
            break;
        case 2:
            selection = "Scissors";
            break;
        case 3:
            selection = "Lizard";
            break;
        case -1:
            value = 4;
        case 4:
            selection = "Spock";
            break;
        case 5:
            value = 0;
        default:
            value = 0;
    }
    return (
        <div className="selector">
            <Button size="sm" onClick={e => {setValue(value = (value - 1)%5)}}>&lt;-</Button>
            <span className="selection">{selection}</span>
            <Button size="sm" onClick={e => {setValue(value = (value + 1)%5)}}>-&gt;</Button>
        </div>
    );
}

export default Selector;