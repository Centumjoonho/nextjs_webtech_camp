import { useState } from "react";
export function EspressoCountBtn() {
    const [espresso, setEspresso] = useState(0);
    return (<div className="btn-group">
        <button className="btn btn-light btn-sm">-</button>
        <button className="btn btn-light btn-sm">{espresso}</button>
        <button className="btn btn-light btn-sm">+</button>
    </div>)
}
export function AmericanoCountBtn() {
    const [americano, setAmericano] = useState(0);
    return (<div className="btn-group">
        <button className="btn btn-light btn-sm">-</button>
        <button className="btn btn-light btn-sm">{americano}</button>
        <button className="btn btn-light btn-sm">+</button>
    </div>)
}
export function LatteCountBtn() {
    const [latte, setLatte] = useState(0);
    return (<div className="btn-group">
        <button className="btn btn-light btn-sm">-</button>
        <button className="btn btn-light btn-sm">{latte}</button>
        <button className="btn btn-light btn-sm">+</button>
    </div>)
}