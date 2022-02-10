import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Agenda() {
	return (
		<div className='container border border-gray shadow p-3 mb-5 bg-white rounded col-md-12'>
			<div className='row'>
				<div className='col-md-12 text-secondary'>
					<h1>
						<strong>Job Details</strong>
					</h1>
				</div>
			</div>
			<div className='row'>
				<div className='col-md-12'>
					<div className='border'>employee pic</div>
				</div>
			</div>
			<div className='row'>
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
