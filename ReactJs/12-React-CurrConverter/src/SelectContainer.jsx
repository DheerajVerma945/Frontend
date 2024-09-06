import countryList from "./Components/country";

function SelectContainer(props) {
    return (
        <div className="dropdown">
            <select name={props.name} value={props.selected} onChange={props.onChange}>
                {Object.values(countryList).map((countryVal, index) => (
                    <option key={index} value={countryVal}>
                        {countryVal}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectContainer;
