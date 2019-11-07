import React from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../actions';

function List (props) {
    console.log('propsList', props);

    const fetchCharacters = e => {
        e.preventDefault();
        props.fetchList();
    }

    return (
        <div>
            <h2>Wonderful Characters of OverWatch</h2>
            <div>
                {props.list.map(ow => (
                    <h4 key={ow.id}>{ow.name}</h4>
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