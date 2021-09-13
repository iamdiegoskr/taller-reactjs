import React,{useState} from 'react'
import TableUsers from './TableUsers'
import '../styles/User.css'
import { useForm } from "react-hook-form";

function UserForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [listUsers, setlistUsers] = useState([])

    const onSubmit = (user, event) =>{

        let newUser = {
            nombre : user.nombre,
            edad : user.edad,
            ocupacion : user.ocupacion,
            descripcion : messageByAge(user),
        }

        newUser.categoria = getCategoria(newUser.edad);

        setlistUsers(listUsers => [...listUsers, newUser]);

        alert(newUser.descripcion);

        event.target.reset()

    }

    const getCategoria = (edad)=>{
        if(edad>=0&&edad<=12){
            return "Niño"
        }else if(edad<=30){
            return "Joven"
        }else if(edad<=50){
            return "Adulto"
        }else{
            return "Mayor"
        }
    }

    const messageByAge = (user)=>{

        let {edad, nombre, ocupacion} = user;

        if(edad>=0 && edad<=12){
            return `Al niñ@ ${nombre} de ${edad} años,le recomendamos disfrutar de su niñez,aprender y respetar`;
        }else if(edad<=30){
            return `Al Joven ${nombre} de ${edad} años,le recomendamos tener presente el compromiso, el esfuerzo y el respeto como principales valores para obtener un buen resultado como ${ocupacion}`
        }else if(edad<=50){
            return `Al Adulto ${nombre} de ${edad} años, le recomendamos tener presente la paciencia como ${ocupacion}`
        }else{
            return `Al Mayor ${nombre} de ${edad} años, le recomendamos compartir sus experiencias vividas con los demas, enseñando lo aprendido y disfrutando como nunca de la vida`
        }
    }


    return (
        <div>

            <form className="user-section" onSubmit={handleSubmit(onSubmit)}>

                <input  type="text"
                        className="user"
                        placeholder="Ingrese su nombre"
                        {...register("nombre", {
                            required: true,
                            maxLength: 30,
                            pattern: /^[A-Za-z]+$/i
                        })}
                /><br/>
                {errors?.nombre?.type === "required" && <p className="error">El nombre es obligatorio</p>}

                <input
                    type="number"
                    className="user-age"
                    placeholder="Ingrese su edad"
                    {...register("edad", { required: true ,min: 0, max: 99 })} /><br/>
                {errors.edad && (
                    <p className="error">Ingresa una edad valida</p>
                )}

                <select name="ocupacion" {...register("ocupacion")} >
                    <option value="estudiante">Estudiante</option>
                    <option value="empleado">Empleado</option>
                    <option value="jubilado">Jubilado</option>
                </select><br/>

                <input type="submit" className="btn-register" />
            </form>

            <hr/>
            <TableUsers infoUsers={listUsers}/>
        </div>

    );
}

export default UserForm;