import React from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../actions';
import { Card, CardText, CardTitle, CardBody} from 'reactstrap';

function List (props) {
    console.log('propsList', props);

    const fetchCharacters = e => {
        e.preventDefault();
        props.fetchList();
    }

    return (
        <div>
            <h2>Wonderful Characters of OverWatch</h2>
            <div className="list">
                {props.list.map(char => (
                    <Card className='card' >
                        <CardBody>
                            <CardTitle className="title">{char.name}</CardTitle>
                            <CardText>{char.description}</CardText>
                            <CardText>Affiliation: {char.affiliation}</CardText>
                            <CardText>Base of Operations: {char.base_of_operations}</CardText>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <button onClick={fetchCharacters}>Get Characters</button>
        </div>
        
    )
}

const mapStateToProps = state => ({
    list: state.list,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(mapStateToProps, { fetchList })(List)