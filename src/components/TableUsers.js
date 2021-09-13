import React from "react";
import '../styles/Table.css'

function TableUsers(props) {

    const users = props.infoUsers;

    if(users.length > 0){

        return (
            <div className="table-users">
                <table id="users">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Ocupacion</th>
                            <th>Descripcion</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                            <tr key={index}>
                                {Object.values(user).map((val,i) => (<td key={i}>{val}</td>))}
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }else{
        return (
            <div className="no-results">
                <h2>No hay usuarios registrados</h2>
            </div>
        );
    }

}

export default TableUsers;