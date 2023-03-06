import React from 'react';
import App from './App'
import { Link } from 'react-router-dom';
import './ManualUpdate.css'

class ManualUpdate extends React.Component {
    state = {
        tableName: "",
        uniqueColumn: "",
        columnName: "",

    }

    update = (e) => {
        e.preventDefault();
        // if(this.state.tableName === "" || this.state.uniqueColumn === "" || this.state.columnName === ""){
        //     alert("All the fields are mandatory!");
        // }
        this.props.updateHandler(this.state);
        this.setState({ tableName: "", uniqueColumn: "", columnName: "" })
    }

    button = () => {
        if(this.state.tableName === "" || this.state.uniqueColumn === "" || this.state.columnName === ""){
            alert("All the fields are mandatory!");
        }
    }

    render() {
        return (
            <form onSubmit={this.update}>
            <div className="tableName">
              <input type="text" className="textBox1" name="name" placeholder="Table Name" value={this.state.tableName} onChange={(e) => this.setState({ tableName: e.target.value })} />
            </div>
            <div className="columnId">
              <input type="text" className="textBox2" name="name" placeholder="Unique Column" value={this.state.uniqueColumn} onChange={(e) => this.setState({ uniqueColumn: e.target.value })} />
            </div>
            <div className="columnName">
              <input type="text" className="textBox3" name="name" placeholder="Column Name"value={this.state.columnName} onChange={(e) => this.setState({ columnName : e.target.value })} />
            </div>
            <Link to="/updated">
            <button onClick={this.button} className="button">Manual Update</button>
            </Link>
            </form>
        )
    }
}

export default ManualUpdate