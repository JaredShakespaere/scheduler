import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././Agenda.css';

function Agenda({ hideModal, show, title, startDateAndTime, endDateAndTime, jobDescription }) {
	
	const showHideClass = show
		? ' modal d-block container border border-gray shadow p-3 mb-5 bg-white rounded col-md-12'
		: 'modal d-none';
	//State

	//event handlers

	return (
		<div className={showHideClass}>
			<button type='button' onClick={hideModal}>
				close
			</button>
			<div className='row '>
				<div className='col-md-12 text-secondary'>
					<h1>
						<strong>Job Details</strong>
					</h1>
				</div>
			</div>
			<div className='row '>
				<div className='col-md-12'>
					<div className='border row'></div>
				</div>
			</div>
			<br></br>
			<div className='row border rounded'>
				<div className='card'>
					<div className='card-body'>
						<div className='col-md-4'>
							<div className='card-text '>
								<div className='d-flex flex-column'>
									<div className='p-2'>
										Employee: {title}
									</div>
									<div className='p-2'>Start: {} </div>
									<div className='p-2'>End: {} </div>
									<div className='p-2'>
										Decription: {jobDescription}
									</div>
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
