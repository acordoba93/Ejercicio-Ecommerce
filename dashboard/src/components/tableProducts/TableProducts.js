import { Component } from "react";

class TableCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRowsData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/products/")
      .then(response => {
        return response.json()
      })
      .then((coffee) => {
        this.setState({
          tableRowsData: coffee.products[0],
        });
      });
  }
  render() {
    
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {this.state.tableRowsData.map((row) => {
            return (
              <tr key={row.product_id}>
                <td>{row.nombre}</td>
                <td>{row.descripcion}</td>
                <td>$ {row.precio} COP</td>
              </tr>
            );
          })}
        </tbody>
        {/* <tfoot>
          <tr>
            <th>Titulo</th>
            <th>Duracion</th>
            <th>Rating</th>
            <th>Genero</th>
            <th>Premios</th>
          </tr>
        </tfoot> */}
      </table>
    );
  }
}

export default TableCoffee;
