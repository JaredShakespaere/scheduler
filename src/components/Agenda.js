import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import blankAvatar from '../pics/avatar placeholder.png';

function Agenda(props) {
	//State
	const [employeePic, setEmployeePic] = useState(blankAvatar);

	//event handlers

	return (
		<div className='container border border-gray shadow p-3 mb-5 bg-white rounded col-md-12'>
			<div className='row '>
				<div className='col-md-12 text-secondary'>
					<h1>
						<strong>Job Details</strong>
					</h1>
				</div>
			</div>
			<div className='row '>
				<div className='col-md-12'>
					<div className='border row'>
						<img className='shadow rounded border'
							src={employeePic}
							alt='employee'
						/>
					</div>
				</div>
			</div>
			<br></br>
			<div className='row border rounded'>
				<div className='card'>
					<div className='card-body'>
						<div className='col-md-4'>
							<div className='card-text '>
								<div className='d-flex flex-column'>
									<div className='p-2'>Employee Name:</div>
									<div className='p-2'>Day:</div>
									<div className='p-2'>Timeframe:</div>
									<div className='p-2'>Decription:</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-4'></div>
				<div className='col-md-4'></div>
			</div>
		</div>
	);
}

export default Agenda;
