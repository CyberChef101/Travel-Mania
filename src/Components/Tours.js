import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan With Traveliayaaaa</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        //passing a key is good practice in map function nad index passing is not good {THUMB RULE}
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;