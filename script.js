const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
const allMain = document.querySelectorAll('#content main');
const Main = document.querySelectorAll('.main');
const main_1 = document.getElementById('main_1');
const main_2 = document.getElementById('main_2');
const main_3 = document.getElementById('main_3');
const main_4 = document.getElementById('main_4');


allSideMenu.forEach(item=> {
	const li = item.parentElement;
	const main = allMain.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
		const first_nav =  document.getElementById('dash');
        const second_nav =  document.getElementById('store');
        const third_nav =  document.getElementById('analytics');
        const fourth_nav = document.getElementById('message');

if(first_nav.classList.contains('active')){
	first_nav.addEventListener('click', function(){
		allMain.forEach(m=> {
			m.classList.remove('visible');
		})
		main_1.classList.add('visible');
	})
}
if(second_nav.classList.contains('active')){
	second_nav.addEventListener('click', function(){
		allMain.forEach(m=> {
			m.classList.remove('visible');
		})
		main_2.classList.add('visible');
	})
}
if(third_nav.classList.contains('active')){
	third_nav.addEventListener('click', function(){
		allMain.forEach(m=> {
			m.classList.remove('visible');
		})
		main_3.classList.add('visible');
	})
}
if(fourth_nav.classList.contains('active')){
	fourth_nav.addEventListener('click', function(){
		allMain.forEach(m=> {
			m.classList.remove('visible');
		})
		main_4.classList.add('visible');
	})
}
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})