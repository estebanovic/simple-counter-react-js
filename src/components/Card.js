
function Card({col, inner}) {
    return (
    <div className={ col + " card mt-5 p-2 bg-dark"}>
        <div className="card-body text-light bg-dark text-center">
            <h1>{inner}</h1>
        </div>
    </div>
    );
  }
  
  export default Card;
  