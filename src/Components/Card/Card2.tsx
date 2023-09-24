interface Props {
    Name: string;
    Brand: string;
    Price: number;

};

export const Card = ({Name, Brand, Price}: Props) => {
    return <div className="product-card">
        <img className="product-image" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3314&q=80" alt="img"/>
        <div className="details">
            <h2>{Name}</h2>
            <p>{Brand}</p>
            <p>{Price}</p>
        </div>
        <p className="info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, doloremque.
        </p>
    </div>;
}