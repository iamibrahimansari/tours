import Button from './Button';
import {useState} from 'react';

const Card = ({img: {url, width, height}, name, tourDays, desc, price, onClick}) =>{
    const [description, setDescription] = useState('');
    const [text, setText] = useState('Read About It');
    const [flag, setFlag] = useState(false);
    const toggleDescription = () =>{
        flag ? setDescription('') : setDescription(desc);
        setFlag(flag ? false : true);
        setText(flag ? 'Read About It' : 'Hide Description');
    }
    return(
        <section className="card" key={name}>
            <div className="img-container">
                <img src={url} alt={name + ' photo'} width={width} height={height} />
            </div>
            <div className="about-container">
                <h2 className="subtitle">Best Of {name} In {tourDays} Days Tour</h2>
                <Button text={text} className="read-btn" onClick={toggleDescription} />
                <p className="para">{description}</p>
                <Button text="Not Interested" className="card-btn" onClick={onClick} />
            </div>
            <p className="price">{price}</p>
        </section>
    )
}

export default Card;