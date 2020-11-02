function visitLink(path) {
	switch(path)
	{
		case 'Page1':
			let VisPage1 = localStorage.getItem('VisitesPage1');
			if(VisPage1 === null) VisPage1=0;
			VisPage1++;
			localStorage.setItem('VisitesPage1', VisPage1);
			break;
		case 'Page2':
			let VisPage2 = localStorage.getItem('VisitesPage2');
			if(VisPage2 === null) VisPage2=0;
			VisPage2++;
			localStorage.setItem('VisitesPage2', VisPage2);
			break;
		case 'Page3':
			let VisPage3 = localStorage.getItem('VisitesPage3');
			if(VisPage3 === null) VisPage3=0;
			VisPage3++;
			localStorage.setItem('VisitesPage3', VisPage3);
			break;
	}
}

function viewResults() {
	let VisPage1 = localStorage.getItem('VisitesPage1');
	if(VisPage1 === null) VisPage1=0;
	let VisPage2 = localStorage.getItem('VisitesPage2');
	if(VisPage2 === null) VisPage2=0;
	let VisPage3 = localStorage.getItem('VisitesPage3');
	if(VisPage3 === null) VisPage3=0;

	let resList = document.getElementsByClassName('resList');
	if(resList[0] != undefined){
		document.body.removeChild(resList[0]);
	}
	let ul = document.createElement('ul');
	ul.className = 'resList';
	document.body.appendChild(ul);

	  let li1 = document.createElement('li');
      li1.textContent = `You visited Page1 ${VisPage1} time(s)`;
	  ul.append(li1);
	  let li2 = document.createElement('li');
      li2.textContent = `You visited Page2 ${VisPage2} time(s)`;
	  ul.append(li2);
	  let li3 = document.createElement('li');
      li3.textContent = `You visited Page3 ${VisPage3} time(s)`;
	  ul.append(li3);

	localStorage.clear();
}
