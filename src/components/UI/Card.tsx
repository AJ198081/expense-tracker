import "./Card.css"

interface CardPropsType {
    children: React.ReactNode;
    className?: string
}

const Card = (props: CardPropsType) => {


    return (<div className={`card-container ${props.className}`}>
        {props.children}
    </div>);
}

export default Card;