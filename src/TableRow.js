import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  constructor(props){
    super(props)
    this.delete = this.delete.bind(this)
  }
  delete() {
    axios.get('http://localhost:4000/portfolio/delete/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .then(this.props.onDelete)
        .catch(err => console.log(err))

}
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.portfolio_name}
          </td>
          <td>
            {this.props.obj.description}
          </td>
          <td>
          <Link to={"/view/"+this.props.obj._id} className="btn btn-success">View</Link>
          </td>
          <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;