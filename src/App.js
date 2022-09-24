import './App.css';
import logo from './imagenes/freeCodeCamp_logo.png'
import { Boton } from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear'
import { useState } from 'react'; // para asignar estado al componente
import { evaluate } from 'mathjs';


function App() {
	const [input, setInput] = useState('');
	
	const agregarInput = val => {
		setInput(input + val);
	}
	
	const calcularResultado= () => {
		if(input) { //cadena de caracteres llena es truthy, cadena de caracteres vacia es falsy
			setInput(evaluate(input));
		} 
	}
	
  return (
    <div className="App">
		<div className="freeCodeCamp-logo-contenedor">
			<img className="freeCodeCamp-logo" src={logo} alt="Logo de Free Code Camp" />
		</div>
		<div className = "contenedor-calculadora">
			<Pantalla input={input}/>
			<div className="fila">
				<Boton manejarClick={agregarInput}>1</Boton>
				<Boton manejarClick={agregarInput}>2</Boton>
				<Boton manejarClick={agregarInput}>3</Boton>
				<Boton manejarClick={agregarInput}>+</Boton>
			</div>
			<div className="fila">
				<Boton manejarClick={agregarInput}>4</Boton>
				<Boton manejarClick={agregarInput}>5</Boton>
				<Boton manejarClick={agregarInput}>6</Boton>
				<Boton manejarClick={agregarInput}>-</Boton>
			</div>
			<div className="fila">
				<Boton manejarClick={agregarInput}>7</Boton>
				<Boton manejarClick={agregarInput}>8</Boton>
				<Boton manejarClick={agregarInput}>9</Boton>
				<Boton manejarClick={agregarInput}>*</Boton>
			</div>
			<div className="fila">
				<Boton manejarClick={calcularResultado}>=</Boton>
				<Boton manejarClick={agregarInput}>0</Boton>
				<Boton manejarClick={agregarInput}>.</Boton>
				<Boton manejarClick={agregarInput}>/</Boton>
			</div>
			<div className="fila">
				<BotonClear manejarClear ={()=> setInput('')}>Clear</BotonClear>
			</div>
		</div>
    </div>
  );
}

export default App;
