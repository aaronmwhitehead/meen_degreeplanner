import React, { Component } from "react/cjs/react.development";
import ReactDOM from "react-dom";
// import ReactDOMServer from 'react-dom/server';
// import data from "./data.json";
// import "./styles/styles.css";
// import Board from "./board";

// var flag, counter; 

// const thermoElectives = ReactDOMServer.renderToStaticMarkup(
// 	<div className="choose-elective-container">
// 		<select name="electives" className="choose-elective" onChange="chooseElective(20)">
// 		<option value="MEEN406">MEEN 406 - Energy Management in Industry</option>
// 		<option value="MEEN410">MEEN 410 - Internal Combustion Engines</option>
// 		<option value="MEEN414">MEEN 414 - Principles of Turbomachinery</option>
// 		<option value="MEEN-417">MEEN 417 - Basics of Plasma Engineering and Applications</option>
// 		</select>
// 		<button>Button A</button>
// 		<button>Button B</button>
// 	</div>
// );

// function showDescription(cardId, metadata, laneId) {
// 	var container = document.querySelector('.check-body');
// 	var title = document.querySelector('.description-title');
// 	var credit = document.querySelector('.description-credit');
// 	var body = document.querySelector('.description-body');
// 	var footer = document.querySelector('.description-footer');
// 	var elective;
// 	var electivePicker;

// 	container.innerHTML = '';
// 	title.innerHTML = '';
// 	credit.innerHTML = '';
// 	body.innerHTML = '';
// 	footer.innerHTML = '';

// 	if(!cardId.startsWith('newCard')) {
// 		switch(cardId) {
// 		case 'MEENELE1':
// 			elective = document.querySelector(`[data-id="${cardId}"]`)
// 			title.innerHTML = 'Thermo-fluid and Energy Systems Electives';
// 			// body.innerHTML = thermoElectives;
// 			// electivePicker.setAttribute('onchange', `chooseElective(${document.querySelector('.choose-elective').value})`);
// 			break;

// 		case 'MEENELE2': 
// 			elective = document.querySelector(`[data-id="${cardId}"]`)
// 			title.innerHTML = 'Mechanical and Manufacturing Systems Electives';
// 			break;

// 		case 'MEENELE3':
// 			elective = document.querySelector(`[data-id="${cardId}"]`)  
// 			title.innerHTML = 'Techical Electives';
// 			break;

// 		case 'MEENELE4':
// 			elective = document.querySelector(`[data-id="${cardId}"]`)  
// 			title.innerHTML = 'MEEN/Non-MEEN Technical Electives';
// 			break;

// 		case 'GENELE':
// 			elective = document.querySelector(`[data-id="${cardId}"]`)  
// 			title.innerHTML = 'General Electives';
// 			break; 

// 		case 'UCC1':
// 		case 'UCC2':
// 		case 'UCC3':
// 		case 'UCC4':
// 		case 'UCC5':
// 		case 'UCC6':
// 			title.innerHTML = 'UCC Elective';
// 			body.innerHTML = '• POLS 206, POLS 207\n • 6 credits of American History<br> • 3 credits of Creative Arts<br> • 3 credits of Social/Behavioral Sciences<br><br> 6 credits of International, Cultural Diversity (ICD) must be taken and can be fulfilled by these UCC electives.';
// 			footer.innerHTML = '<a href="https://core.tamu.edu/" target="_blank">core.tamu.edu</a>';
// 			break;

// 		default:
// 			var description;
// 			metadata === undefined ? description = 'none' : description = JSON.parse(JSON.stringify(metadata));

// 			title.innerHTML = description.title;
// 			credit.innerHTML = description.credit;
// 			body.innerHTML = description.body;
// 			footer.innerHTML = description.footer;
// 			break;
// 		}
// 	}
// }

// class NewCard extends Component {
// 	updateField = (field, evt) => {
// 		this.setState({ [field]: evt.target.value })
// 	}

// 	handleAdd = () => {
// 		this.props.onAdd(this.state)
// 	}

// 	confirmAdd = () => {
// 		var name = document.querySelector('.course-name').value;
// 		var hours = document.querySelector('.course-hours').value
// 		var error = document.querySelector('.error');

// 		if(name.length > 20) {
// 			error.innerHTML = '*Course name too long.';
// 			return;
// 		} else if(name.length === 0) {
// 			error.innerHTML = '*Please enter a valid course title';
// 			return;
// 		} else if(Number(hours).toString() === 'NaN' || Number(hours) > 6 || hours === '' || hours.length > 1) {
// 			error.innerHTML = '*Please enter a course number between 0 and 6';
// 			return;
// 		} else {
// 			return this.handleAdd();
// 		}
// 	}

// 	render() {
// 		const { onCancel } = this.props
// 		return (
// 		<div className='form-container'>
// 			<div className='box'>
// 				<div className='check-header'>Add Course</div>
// 				<div className="add-course">
// 				<input type="text" className='course-name' onChange={evt => this.updateField('title', evt)} placeholder="Title" />
// 				<input type="text" className='course-hours' onChange={evt => this.updateField('label', evt)} placeholder="Hours" />
// 				<div className='modal-buttons'>
// 					<div className='button' onClick={this.confirmAdd}>Add</div>
// 					<div className='button' onClick={onCancel}>Cancel</div>
// 				</div>
// 				<div className='error'></div>
// 				</div>
// 			</div>
// 		</div>
// 		)
// 	}
// }

// class CheckCourses extends Component {
//   render() {
//   	return(
//       	<div className='check-container'>
// 			<header className="check-header"></header>
// 			<div className="check-instructions">
// 				Add a semester or course by clicking +
// 			</div>
// 			<div className="check-body"></div>
// 			<div className="check-output">
// 				<div className="description-title"></div>
// 				<div className="description-credit"></div>
// 				<div className="description-body"></div>
// 				<div className="description-footer"></div>
// 			</div>
//      	 </div>
//     );
//   }
// }

// function check(post, index, p, list) {
// 	var body = document.querySelector('.check-body');
// 	// body.innerHTML = '';
// 	// var parent = document.querySelector(`[data-id="${list[0]}"]`).closest('.react-trello-lane').dataset.index;

// 	// console.log(`Thing: ${thing}, Index: ${index}, P: ${p}, List: ${list}`);
// 	list.forEach((course) => {
// 		var parent = document.querySelector(`[data-id="${course}"]`).closest('.react-trello-lane');
// 		course = [course.slice(0, 4), ' ', course.slice(4)].join('');
// 		post = [post.slice(0, 4), ' ', post.slice(4)].join('');
// 		if(Number(parent.dataset.index) >= Number(index) && p) {
// 			flag = true; 
// 			counter++;
// 			if(counter === 1) { body.innerHTML = ''; }
// 			body.innerHTML += `${course} is a prereq of ${post}` + '<br>';
// 		} else if(Number(parent.dataset.index) > Number(index) && !p) {
// 			flag = true;
// 			counter++;
// 			if(counter === 1) { body.innerHTML = ''; }
// 			body.innerHTML += `${course} is a coreq of ${post} \n` + '<br>';
// 		}
// 	});

// 	if(!flag) {
// 		document.querySelector('.check-body').innerHTML = 'All of your courses are good.';
// 		console.log('Body Empty');
// 	}
// }

// function checkCourses() {
// 	document.querySelector('.check-body').innerHTML = '';
// 	document.querySelector('.description-title').innerHTML = '';
// 	document.querySelector('.description-title').innerHTML = '';
// 	document.querySelector('.description-credit').innerHTML = '';
// 	document.querySelector('.description-body').innerHTML = '';
// 	document.querySelector('.description-footer').innerHTML = '';
// 	flag = false;
// 	counter = 0; 

// 	// var cardParent = firstCard.closest('.react-trello-lane');
// 	// console.log(cardParent.dataset.order);

// 	var allCourses = document.querySelectorAll('.react-trello-card');

// 	allCourses.forEach((course) => {
// 		if (course.dataset.id[8] === undefined) {
// 			var currentParent = course.closest('.react-trello-lane');
// 			var currentParentIndex = currentParent.dataset.index;
// 			var prereqs = course.dataset.prereqs;
// 			var coreqs = course.dataset.coreqs;

// 			coreqs = coreqs.split(',');
// 			prereqs = prereqs.split(',');

// 			if(prereqs[0] === '' && coreqs[0] === '') {
// 				return;
// 			}

// 			if(prereqs[0] !== '') {
// 				check(course.dataset.id, currentParentIndex, true, prereqs);
// 			}

// 			if (coreqs[0] !== '') {
// 				check(course.dataset.id, currentParentIndex, false, coreqs);
// 			}

// 			return;
// 		}
// 	});
// }

function App() {
	return (
		// <div className="App">
		// <Board className='Board' 
		// 	data={data} 
		// 	draggable 
		// 	editable 
		// 	cardDragClass="draggingCard"
		// 	laneDragClass="draggingLane" 
		// 	laneDraggable={false} 
		// 	addCardLink={<i className="fas fa-plus"></i>} 
		// 	newCardTemplate={<NewCard />}
		// 	onCardClick={showDescription}
		// ></Board>
		// <div className="actions">
		// 	<CheckCourses />
		// 	<div onClick={checkCourses} className='check-courses-btn'>Check Courses</div>
		// </div>
		// </div>
		<div>Howdy</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// // Onload functions and mutation watcher
// window.onload = function() {
// 	const lanes = document.querySelectorAll('.react-trello-lane');
// 	const add = document.querySelectorAll('.fa-plus');
// 	const remove = document.querySelectorAll('.jVkGUj');
// 	const transfer = document.createElement('div');
// 	const links = document.createElement('i');
// 	const info = document.createElement('i');

// 	document.querySelector('.check-body').innerHTML = 'All of your courses are good.';
// 	document.querySelectorAll('.react-trello-card').forEach((card) => { card.removeAttribute('title'); });
	
// 	transfer.setAttribute('class', 'year-title-container');
// 	transfer.innerHTML = 'AP & DUAL CREDIT';

// 	links.setAttribute('class', 'fas fa-info-circle');
// 	links.setAttribute('onclick', 'openLinks()');
// 	transfer.appendChild(links);

// 	info.setAttribute('class', 'fas fa-info-circle info');
// 	info.setAttribute('onclick', 'displayInfo()')
// 	document.querySelector('.check-header').appendChild(info);

// 	lanes[0].style.zIndex = "1";
// 	lanes[0].classList.add('transfer');
// 	lanes[0].parentElement.prepend(transfer);

// 	lanes.forEach((lane) => {
// 		var labels = lane.querySelectorAll('.hQTJYT');
// 		var totalHours = 0; 

// 		labels.forEach((label) => {
// 		totalHours += Number(label.innerHTML);
// 		});
// 	});

// 	// Remove the + signs from all of the semesters
// 	for(let i = 0; i < add.length; i++) {
// 		if(i !== 0) {
// 			add[i].remove();
// 		}
// 	}

// 	// Remove the x's from all the courses (shouldn't be removable)
// 	for(let i = 0; i < remove.length; i++) {
// 		remove[i].remove();
// 	}

// 	// Add the HTML for the year titles and add summer buttons
// 	for(let i = 0; i < lanes.length; i++) {
// 		const yearTitleContainer = document.createElement('div');
// 		const yearTitle = document.createElement('div');
// 		const addSemesterButton = document.createElement('div');

// 		addSemesterButton.innerHTML = 'Add Summer';

// 		yearTitle.setAttribute('class', 'year-title');
// 		yearTitle.innerHTML = `Year ${i/3 + 1}`;
// 		addSemesterButton.setAttribute('class', 'add-summer-button');
// 		addSemesterButton.setAttribute('onclick', `addSummer(${i/3 + 1})`);

// 		yearTitleContainer.appendChild(yearTitle);
// 		yearTitleContainer.appendChild(addSemesterButton);

// 		yearTitleContainer.setAttribute('class', 'year-title-container');

// 		if(i < 14) {
// 			if(i % 3 === 0) {
// 				lanes[i+1].parentElement.prepend(yearTitleContainer);
// 			}
// 		}
// 		if ((i + 1) % 3 === 0) {
// 			lanes[i+1].parentElement.classList.add('summer');
// 			lanes[i+1].parentElement.classList.add('summer-' + ((i + 1) / 3).toString());
// 		}
// 	}

// 	// Watch for changes on the page - fixes issue with x's reappearing after card is moved to new lane
// 	var mutationObserver = new MutationObserver(function (mutations) {
// 		var x = document.querySelectorAll('.jVkGUj');
// 		document.querySelectorAll('.react-trello-card').forEach((card) => { card.removeAttribute('title'); });
// 		if(x.length !== 0) {
// 			x.forEach((x) => {
// 				if(x !== null && x.parentNode.parentNode.dataset.id.startsWith('newCard')) {
// 					x.parentElement.parentElement.style.backgroundColor = '#286DA8';
// 				} else {
// 					x.remove();
// 				}
// 			});
// 		}
// 	});

// 	mutationObserver.observe(document.querySelector('#root'), {
// 		attributes: true,
// 		characterData: true,
// 		childList: true,
// 		subtree: true,
// 		attributeOldValue: true,
// 		characterDataOldValue: true
// 	});
// }