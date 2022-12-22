import { useState } from "react";

let m = [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
];
let valorTurno = true;
const siGanador = (f, c) => {
    const x = m[f][c];
    if (m[f][0] === x && m[f][1] === x && m[f][2] === x)
        return true;
    if (m[0][c] === x && m[1][c] === x && m[2][c] === x)
        return true;

    if (f === c) {
        if (m[0][0] === x && m[1][1] === x && m[2][2] === x)
            return true;
        if (m[2][0] === x && m[1][1] === x && m[0][2] === x)
            return true;
    }
    if (f === 0 && c === 0 || f === 2 && c === 2) {
        if (m[0][0] === x && m[1][1] === x && m[2][2] === x)
            return true;
    }
    if (f === 2 && c === 0 || f === 0 && c === 2) {
        if (m[2][0] === x && m[1][1] === x && m[0][2] === x)
            return true;
    }
    return false;
};
export const App = () => {
    const [stateWin, setStateWin] = useState({
        siWin: false,
        win: ''
    });
    const [turno, setTurno] = useState('X');
    const [matriz, setMatriz] = useState([
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.']
    ]);
    const onClick = (f, c) => {
        if (m[f][c] !== '.') {
            return;
        }
        m[f][c] = turno;
        setMatriz(m);
        if (siGanador(f, c)) {
            setStateWin({ siWin: true, win: turno });
        }
        valorTurno = !valorTurno;
        if (valorTurno) setTurno('X');
        else setTurno('O');
        //console.log(m);
    }
    return (
        <>
            <div className="cuerpo">

                <div><h1>Turno: {turno}</h1></div>

                <div>
                    <button onClick={() => onClick(0, 0)}>{matriz[0][0]}</button>
                    <button onClick={() => onClick(0, 1)}>{matriz[0][1]}</button>
                    <button onClick={() => onClick(0, 2)}>{matriz[0][2]}</button>
                </div>
                <div>
                    <button onClick={() => onClick(1, 0)}>{matriz[1][0]}</button>
                    <button onClick={() => onClick(1, 1)}>{matriz[1][1]}</button>
                    <button onClick={() => onClick(1, 2)}>{matriz[1][2]}</button>
                </div>
                <div>
                    <button onClick={() => onClick(2, 0)}>{matriz[2][0]}</button>
                    <button onClick={() => onClick(2, 1)}>{matriz[2][1]}</button>
                    <button onClick={() => onClick(2, 2)}>{matriz[2][2]}</button>
                </div>
                {
                    stateWin.siWin
                        ? (<div><h1>Ganador: {stateWin.win} </h1></div>)
                        : ''
                }
            </div>

        </>
    )
}
