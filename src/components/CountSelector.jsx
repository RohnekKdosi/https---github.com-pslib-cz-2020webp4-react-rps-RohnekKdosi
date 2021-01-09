import React from "react";
import { Button } from 'reactstrap';

export const CountSelectorInner = props => {
    console.log(props);
    return <p>{props.children}</p>
}

const CountSelector = ({value, setValue, ...rest}) => {
    let display;
    switch(value) {
        case 69:
        case 420:
            display = "Nice"
            break;
        default:
            if(value < 1) {
                value = 666 + value;
            }
            else if (value > 666) {
                value = value - 666;
            }
            display = value;
    }
    return (
        <div className="countselector">
            <Button size="sm" onClick={e => {
                setValue(value = value - 100);
                if(value < 1) {
                    setValue(value = 666 + value);
                }
                }}>-100</Button>
            <Button size="sm" onClick={e => {setValue(value = value - 10);
                if(value < 1) {
                    setValue(value = 666 + value);
                }
                }}>-10</Button>
            <Button size="sm" onClick={e => {setValue(value = value - 5);
                if(value < 1) {
                    setValue(value = 666 + value);
                }
                }}>-5</Button>
            <Button size="sm" onClick={e => {setValue(value = value - 1);
                if(value < 1) {
                    setValue(value = 666 + value);
                }
                }}>-1</Button>
            <span className="selection">{display}</span>
            <Button size="sm" onClick={e => {setValue(value = value + 1)}}>+1</Button>
            <Button size="sm" onClick={e => {setValue(value = value + 5)}}>+5</Button>
            <Button size="sm" onClick={e => {setValue(value = value + 10)}}>+10</Button>
            <Button size="sm" onClick={e => {setValue(value = value + 100)}}>+100</Button>
        </div>
    );
}

export default CountSelector;