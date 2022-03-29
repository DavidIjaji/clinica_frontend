import "./Inicio.css";
import Slider from "../Slider/Slider";
import {Table} from 'reactstrap'

function Inicio() {
  return (
    <section id="inicio">
      <div className="inicio_container">
        <Slider></Slider>
      </div>
      <div class="div2">
        <center>
        <Table className="table1" borderless="true" hover="true" responsive="sm">
        
            <tr>
              <th scope="col">Atención al ciudadano</th>
              <br></br>
              <th scope="col">Servicio en Línea</th>
              <br></br>
              <th scope="col">Nuestras redes sociales</th>
            </tr>
          
            <tr>
              <td>Directorio telefónico</td>
              <br></br>
              <td>Certificado de afiliacion</td>
              <br></br>
              <td>Facebook</td>
            </tr>
            <tr>
              <td>Mapa del sitio</td>
              <br></br>
              <td>Recuperar contraseña</td>
              <br></br>
              <td>Instagram</td>
            </tr>
            <tr>
              <td>Normativa</td>
              <br></br>
              <td>Sede electronica</td>
              <br></br>
              <td>Twitter</td>
            </tr>
            <tr>
              <td>Notificaciones judiciales</td>
              <br></br>
              <td>Pide tu cita</td>

              <td></td>
            </tr>
            <tr>
              <td>Preguntas frecuentes</td>
              <br></br>
              <td>Verificación de citas</td>
              <br></br>
              <td></td>
            </tr>
        </Table>
        </center>
      </div>
    </section>
  );
}

export default Inicio;