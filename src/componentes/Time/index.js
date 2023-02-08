import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) =>{
    const fundo = { backgroundColor: props.corSecundaria };

    const border = { borderColor: props.corPrimaria };
    return(
        <section className="time" style={fundo}>
            <h3 style={border}>{props.nome}</h3>
            <Colaborador/>
            <Colaborador/>
        </section>
    )
}
export default Time