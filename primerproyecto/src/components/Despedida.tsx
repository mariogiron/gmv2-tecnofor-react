import React from 'react';

class Despedida extends React.Component<{ nombre: string }> {

    render() {
        return <>
            <p>Esta es la despedida</p>
            <p>Otro párrafo</p>
            <p>{this.props.nombre}</p>
        </>
    }

}

export default Despedida;