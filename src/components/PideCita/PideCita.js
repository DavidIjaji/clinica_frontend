import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, DropdownItem } from 'reactstrap';
import "./PideCita.css";
import OurDropdown from '../Comunes/DropDown/DropDown';

function PideCita() {
    var especialidadesItems = [];
    var medicosItems = [];
    var fechasHorasItems = [];
    //resolver para que quede asincrono
    const getSpecilities = () => {
        try {
            var response = require('./ej_backend_especialidades.json')
            return (response.especialidades);
        }
        catch {
            console.log("Fallo api de especialidades");
        }
    };
    const getDoctors = () => {
        try {
            var response = require('./ej_backend_medicos.json')
            return (response.medicos);
        }
        catch {
            console.log("Fallo api de medicos");
        }
    };
    const getSchedule = () => {
        try {
            var response = require('./ej_backend_fechas_horas.json')
            console.log(response.dias_disponibles)
            return (response.dias_disponibles);
        }
        catch {
            console.log("Fallo api de horarios");
        }
    };

    //cambiar a que se llame apenas abra la pagina una vez
    especialidadesItems = getSpecilities();
    medicosItems = getDoctors();
    fechasHorasItems = getSchedule();


    //voy a retornar los dropdownItems que salen del api 
    const especialidades = especialidadesItems.map((item) => {
        return (
            <DropdownItem>{item}</DropdownItem>
        );
    })
    const medicos = medicosItems.map((item) => {
        return (
            <DropdownItem>{item.nombres + ' ' + item.PrimerApellido}</DropdownItem>
        );
    })
    const fechas = fechasHorasItems.map((item) => {
        return (
            <DropdownItem>{item.dia}</DropdownItem>
        );
    })
    //falta organizar, por ahora con el dia quemado
    const horas = fechasHorasItems.map((item) => {
        if(item.dia == "martes"){
            item.horas.map((itemH)=>{
                return (
                    <DropdownItem>{itemH.hora}</DropdownItem>//error entrega indefinido
                );
            });
        }
    })
    return (
        [
            <div class="vertical-center">
                <section class="conainerForm">
                    <container class="container-cita">
                    <center>
                        <table>
                            <tr>
                                <td>1</td>
                                <td>Especialidad</td>
                                <td><OurDropdown dropdownTitle="Seleccionar" dropdownItems={especialidades} dropdownHeader="Header"></OurDropdown></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Médico</td>
                                <td><OurDropdown dropdownTitle="Seleccionar" dropdownItems={medicos} dropdownHeader="Header"></OurDropdown></td>

                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Fecha de cita</td>
                                <td><OurDropdown dropdownTitle="Seleccionar" dropdownItems={fechas} dropdownHeader="Header"></OurDropdown></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Hora de cita</td>
                                <td><OurDropdown dropdownTitle="Seleccionar" dropdownItems={horas} dropdownHeader="Header"></OurDropdown></td>
                            </tr>
                        </table>
                        <button type="button" class="btn-primary">Pedir cita</button>
                    </center>
                    </container>
                </section>
            </div>
        ]

    );
}
export default PideCita;