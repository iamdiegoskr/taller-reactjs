import React,{useState} from 'react'
import TableUsers from './TableUsers'
import '../styles/User.css'

function UserForm() {

    const [listUsers, setlistUsers] = useState([])

    const [users, setUsers] = useState({
        nombre: '',
        edad: '',
        ocupacion: 'estudiante',
        descripcion: ''
    })

    const handleInputChange = (event) => {
        setUsers({
            ...users,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()

        let description = '';

        if(users.edad>=0 && users.edad<=12){
            description = `Al niñ@ ${users.nombre} de ${users.edad} años,
            le recomendamos disfrutar de su niñez,aprender y respetar`;
        }else if(users.edad<=30){
            description = `Al Joven ${users.nombre} de ${users.edad} años,
                le recomendamos tener presente el compromiso, el esfuerzo y el respeto como principales valores
                para obtener un buen resultado como ${users.ocupacion}`;
        }else if(users.edad<=50){
            description = `Al Adulto ${users.nombre} de ${users.edad} años,
                le recomendamos tener presente la paciencia como ${users.ocupacion}`;
        }else{
            description = `Al Mayor ${users.nombre} de ${users.edad} años,
                le recomendamos disfrutar sus ultimos dias`;
        }

        users.descripcion = description;

        setlistUsers(listUsers => [...listUsers, users]);

        clear(event.target)
    }

    function clear(event){
        event.reset();
    }

    return (
        <div>

            <form className="user-section"  onSubmit={enviarDatos}>
                <input type="text" className="user" placeholder="Ingrese su nombre"
                        onChange={handleInputChange} name="nombre" required /> <br/>

                <input type="number" min="0" max="200" className="user-age" placeholder="Ingrese su edad"
                        onChange={handleInputChange} name="edad" required /><br/>

                <select name="ocupacion" id="ocupacion" onChange={handleInputChange}>
                    <option value="estudiante">Estudiante</option>
                    <option value="empleado">Empleado</option>
                    <option value="jubilado">Jubilado</option>
                </select><br/>

                <button type="submit" className="btn-register" >Registrarse</button>
            </form>

            <hr/>
            <TableUsers infoUsers={listUsers}/>
        </div>

    );
}

export default UserForm;