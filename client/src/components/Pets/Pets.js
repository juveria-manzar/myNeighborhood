import React from 'react';
import './style.scss';
import { Card } from 'react-bootstrap';
import cat from "../../images/cat.jpg";
 
function Pets() {
    return (
        <div className="pet-wrapper" style={{ display: 'flex', flexDirection: 'column', }}>
            <h1 style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '1rem' }}>Pets in the neighborhood</h1>
            <div style={{ display: 'flex', textAlign: 'center', marginTop: '3rem', marginBottom: '3rem', width: '80%', margin: 'auto', fontSize: '0.8rem'}}>
                <p>Have you seen me? Please contact my owner.</p>
            </div>
            <div className="petcard-wrapper" style={{ display: 'flex', flexWrap: 'wrap'}}>
            <Card id="pet-one" style={{ width: '10rem', margin: 'auto', marginBottom: '1rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
                <Card.Body>
                    <Card.Title>Spunky</Card.Title>
                    <Card.Text style={{fontSize:'0.7rem'}}>
                        Owner: Eddson
                        (530)555-5555
                        Approach with caution
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="pet-two" style={{ width: '10rem', margin: 'auto', marginBottom: '1rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
                <Card.Body>
                    <Card.Title>Coscu</Card.Title>
                    <Card.Text style={{fontSize:'0.7rem'}}>
                        Owner: Jo
                        (530)555-5555
                        Responds to Kitty
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="pet-three" style={{ width: '10rem', margin: 'auto', marginBottom: '1rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
                <Card.Body>
                    <Card.Title>Scrappy</Card.Title>
                    <Card.Text style={{fontSize:'0.7rem'}}>
                        Owner: Shane
                        Phone: (530)555-5555
                        Caution: Very cute
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="pet-four" style={{ width: '10rem', margin: 'auto', marginBottom: '1rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1562362228-80b828fd62e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
                <Card.Body>
                    <Card.Title>Doug</Card.Title>
                    <Card.Text style={{fontSize:'0.7rem'}}>
                        Owner: Stephanie
                        (530)555-5555
                        Loves kisses
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="pet-three" style={{ width: '10rem', margin: 'auto', marginBottom: '1rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1559214369-a6b1d7919865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
                <Card.Body>
                    <Card.Title>Tissues</Card.Title>
                    <Card.Text style={{fontSize:'0.7rem'}}>
                        Owner: Mr. Jenkins
                        Phone: (530)555-5555
                        Caution: Very cute
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="pet-three" style={{ width: '10rem', margin: 'auto', marginBottom: '1rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1533567767427-38bb7cbc0409?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
                <Card.Body>
                    <Card.Title>Malfoy</Card.Title>
                    <Card.Text style={{fontSize:'0.7rem'}}>
                        Owner: John
                        Phone: (530)555-5555
                        Caution: Very cute
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="pet-three" style={{ width: '10rem', margin: 'auto', marginBottom: '1rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
                <Card.Body>
                    <Card.Title>Rufus</Card.Title>
                    <Card.Text style={{fontSize:'0.7rem'}}>
                        Owner: Haffed
                        Phone: (530)555-5555
                        Caution: Very cute
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="pet-three" style={{ width: '10rem', margin: 'auto', marginBottom: '1rem' }}>
                <Card.Img variant="top" src={cat} />
                <Card.Body>
                    <Card.Title>Skittles</Card.Title>
                    <Card.Text style={{fontSize:'0.7rem'}}>
                        Owner: Austin
                        Phone: (530)555-5555
                        Stray cat, leave alone
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="pet-three" style={{ width: '10rem', margin: 'auto', marginBottom: '1rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
                <Card.Body>
                    <Card.Title>Miller</Card.Title>
                    <Card.Text style={{fontSize:'0.7rem'}}>
                        Owner: Kelen
                        Phone: (530)555-5555
                        Caution: Very cute
                </Card.Text>
                </Card.Body>
            </Card>
            <Card id="pet-three" style={{ width: '10rem', margin: 'auto', marginBottom: '1rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
                <Card.Body>
                    <Card.Title>Ben</Card.Title>
                    <Card.Text style={{fontSize:'0.7rem'}}>
                        Owner: Marie Bland
                        Gives back sass
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            
           

        </div>





    );
}
export default Pets;