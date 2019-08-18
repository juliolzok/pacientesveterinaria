import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInicial =  {
        cita:{
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        },
        error: false
}

class NuevaCita extends Component {
    state = { ...stateInicial  }
    // cuando el usuario escribe en el imput
    handleChange = (e) => {
        // colocar lo que le ususario esribe en el state
        this.setState({
            cita:{
                ...this.state.cita,
                [e.target.name]:e.target.value
            }
        })
    }
    
    //cuando el usuario envia el formulario
    handleSubmit = (e) => {
        e.preventDefault();
        // extraer los valores del state\
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
        // validar que todos los campos esten llenos
        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            this.setState({
                error: true
            });
            // detener la ejecucion 
            return;
        }

        const nuevaCita = {...this.state.cita}
        nuevaCita.id = uuid();
        // Agregar la cita al state de App
        this.props.crearNuevaCita(nuevaCita);
          // colocar en el state el stateInicial
        this.setState({
            ...stateInicial
        })

    }

    render(){

        // extraer valor del state

        const { error } = this.state;
        return (
            <div className='card mt-5 py-5'>
                <div className='card-body'>
                    <h2 className='card-title card-header text-center mb-5'>
                        Llena el formulario para crear una nueva cita
                    </h2>
                    { error ? <div className='alert alert-danger mt-2 mb-5 text-center'>Todos lo campos son obligatorios</div> : null}
                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Nombre de Mascota</label>
                            <div className='col-sm-8 col-lg-10'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre de Mascota'
                                    name='mascota'
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}    
                                />
                            </div> 
                        </div>{/* form group */}
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Nombre del propietario</label>
                            <div className='col-sm-8 col-lg-10'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre del propietario'
                                    name='propietario'
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}      
                                />
                            </div> 
                        </div>{/* form group */}
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Fecha</label>
                            <div className='col-sm-8 col-lg-4'>
                                <input
                                    type='date'
                                    className='form-control'
                                    name='fecha'
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div> 
                            <label className='col-sm-4 col-lg-2 col-form-label'>Hora</label>
                            <div className='col-sm-8 col-lg-4'>
                                <input
                                    type='time'
                                    className='form-control'
                                    name='hora'
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div> 
                        </div>{/* form group */}
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Sintomas</label>
                            <div className='col-sm-8 col-lg-10'>
                                <textarea
                                    className='form-control'
                                    name='sintomas'
                                    placeholder='Describe los sintomas'
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                >
                                </textarea>            
                            </div> 
                        </div>{/* form group */}
                        <input type='submit' className='py-3 mt-2 btn btn-success btn-block' value='Agregar Nueva Cita'/>
                    </form>
                </div>
            </div>          
        );
    }
}
NuevaCita.propTypes = {
    crearNuevaCita: PropTypes.func.isRequired
}

export default NuevaCita;