import React from 'react';
import styles from './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component {
    state = {
      cantidad: 0
    }
  
    agregar = () => {
      this.setState( (state) => {
        cantidad: this.state.cantidad + 50
      })
    }
  
    quitar = () => {
      this.setState( (state) => {
        cantidad: this.state.cantidad - 50
      })
    }
  
    render(){

      const hasItems = this.state.cantidad > 0;
      const activeClass = hasItems ? styles['card--active'] : '';
      //const clases = `TarjetaFruta ${hasItems ? 'TarjetaFruta--active' : ''}`;
      const clases = `${styles.card} ${activeClass}`

      return (
        <div className={clases}>
          <h3>{this.props.name}</h3>
          <div>Cantidad: {this.state.cantidad}</div>
          <button 
            onClick={this.agregar}
          >Agregar</button>
          <button 
            onClick={this.quitar}
          >Quitar</button>
          <hr/>
          <p>{this.props.price}€</p>
        </div>
      )
    }
  }

  export default TarjetaFruta;