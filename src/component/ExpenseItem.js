import React from 'react'
import {TiDelete} from 'react-icons/ti';
import Badge from 'react-bootstrap/Badge';

const ExpenseItem = (props) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span className='mr-3'><Badge bg="primary" style={{marginRight: "12px"}}>£{props.cost}</Badge></span>
				<TiDelete size='1.5em'  /> 
			</div>
		</li>
    )
}

export default ExpenseItem;