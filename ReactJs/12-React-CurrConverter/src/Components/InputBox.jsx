import React from 'react';

function InputBox(props) {
    return (
        <div className={props.type}>
            <br />
            <label htmlFor={props.type}>{props.label}</label>
            <input
                type="number"
                disabled={props.disabled}
                onChange={props.change}
                value={props.value || ""}
            />
        </div>
    );
}

export default InputBox;
