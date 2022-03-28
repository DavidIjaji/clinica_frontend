import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownItem} from 'reactstrap';
import "./PideCita.css";
import OurDropdown from '../Comunes/DropDown/DropDown';

function PideCita() {
    var especialidadesItems = [];
    var medicosItems = [];
    var fechasHorasItems = [];
    //resolver para que quede asincrono
    const getSpecilities = () => {
        try {
            var response =  require('./ej_backend_especialidades.json')
            return(response.especialidades);
        }
        catch {
            console.log("Fallo api de especialidades");
        }
    };
    const getDoctors = () => {
        try {
            var response =  require('./ej_backend_medicos.json')
            return(response.medicos);
        }
        catch {
            console.log("Fallo api de medicos");
        }
    };
    const getSchedule = () => {
        try {
            var response = require('./ej_backend_fechas_horas.json')
            console.log(response.dias_disponibles)
            return(response.dias_disponibles);
        }
        catch {
            console.log("Fallo api de horarios");
        }
    };
    
    //cambiar a que se llame apenas abra la pagina una vez
    especialidadesItems= getSpecilities();
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
            <DropdownItem>{item.nombres+' '+item.PrimerApellido}</DropdownItem>
        );
    })
    const fechas = fechasHorasItems.map((item) => {
        return (
            <DropdownItem>{item.dia}</DropdownItem>
        );
    })
    //falta organizar para que filtre por el día escogido
    const horas = fechasHorasItems.map((item) => {
            return (
                <DropdownItem>{item.horas.length}</DropdownItem>
            );
        
    })


    return (
        [<OurDropdown dropdownTitle="Elige una especialidad medica" dropdownItems={especialidades} dropdownHeader="Header"></OurDropdown>,
        <OurDropdown dropdownTitle="Elige un medico" dropdownItems={medicos} dropdownHeader="Header"></OurDropdown>,
        <OurDropdown dropdownTitle="Elige la fecha" dropdownItems={fechas} dropdownHeader="Header"></OurDropdown>,
        <OurDropdown dropdownTitle="Elige la hora" dropdownItems={horas} dropdownHeader="Header"></OurDropdown>]
    );
}
export default PideCita;