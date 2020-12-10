import React from 'react'
import PropTypes from 'prop-types'

//const mayorEdad = edad => edad>=18 ? "Si eres mayor de edad" : "Sorry BB";

//const contenido = {"curso": "POO con JS", "Precio": 10};

const Curso = ({title, image, price}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title}/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                {title}
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                    <div className="circle img-container">
                        <img src="https://lh3.googleusercontent.com/a-/AAuE7mDgrUmTETnhGEYWCSqQJCqsJD6hIYCwrrTtKbQiLA" alt=""/>
                    </div>
                    </div>
                    <span className="small">Alexys Lozada</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://www.google.com">$ {price}</a>
            </div>
        </div>
    </article>
)
Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string
}
//profesor: PropTypes.string
Curso.defaultProps = {
    title: "Titulo no disponible",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Pro_Evolution_Soccer_logo.png",
    price: "No disponible"
}
//profesor: "Profesor no disponible"
/*
const Curso = (props) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img 
            src={props.image ? props.image : "https://upload.wikimedia.org/wikipedia/commons/4/40/Pro_Evolution_Soccer_logo.png"}
            alt={props.title ? props.title : 'No hay titulo'}
            />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                {props.title ? props.title : 'Curso no disponible'}
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                    <div className="circle img-container">
                        <img src="https://lh3.googleusercontent.com/a-/AAuE7mDgrUmTETnhGEYWCSqQJCqsJD6hIYCwrrTtKbQiLA" alt=""/>
                    </div>
                    </div>
                    <span className="small">Alexys Lozada</span>
                </div>
            </div>
            <div className="s-main-center">
                {
                    props.price
                    ? <a className="button--ghost-alert button--tiny" href="https://www.google.com">$ {props.price}</a>
                    : <a className="button--ghost-alert button--tiny" href="#">No disponible</a>
                }
            </div>
        </div>
    </article>
)
const Curso = () => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://ux.ed.team/img/curso-portada.png" alt="Curso GO"/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                Programación orientada a objetos con Go
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                    <div className="circle img-container">
                        <img src="https://lh3.googleusercontent.com/a-/AAuE7mDgrUmTETnhGEYWCSqQJCqsJD6hIYCwrrTtKbQiLA" alt=""/>
                    </div>
                    </div>
                    <span className="small">Alexys Lozada</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://www.google.com">$ 20USD</a>
            </div>
        </div>
    </article>
)*/
export default Curso