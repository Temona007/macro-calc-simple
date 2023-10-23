/* ====== AOV Calculator ========= */

function MacroCalc() {

	// Hide result block
	document.getElementById('result-block').style.display = 'none';

	// Checked Pritain and Day by default
	document.getElementById('protein-moderate').checked = true;
	document.getElementById('mealAll').checked          = true;

	let userHeightFeet = 0;
	document.getElementById('caloriePerMealtext').innerHTML = "Calories Per Day";

	// Input values:
	let userAge 		     = document.getElementById('userAge').value * 1;
	let userSex 		     = document.querySelector('input[name="userSex"]:checked').value;
	let userWeight		   = document.getElementById('userWeight').value * 1;
		  userHeightFeet   = document.getElementById('userHeightFeet').value * 1;
	let userHeightInches = document.getElementById('userHeightInches').value * 1;
	let activity    		 = document.querySelector('input[name="activity"]:checked').value;
	let goalPercentage   = document.querySelector('input[name="goalPercent"]:checked').value;

	let userHeight;
	let bmr;
	let activityLevel;
	let caloriePerMeal;
	let proteinCalories;
	let proteinGrams;
	let fatCalories;
	let fatGrams;
	let carbsCalories;
	let carbsGrams;

	if (userAge > 0 && userWeight > 0 && (userHeightFeet > 0 || userHeightInches > 0)) {
		// show result block
		document.getElementById('result-block').style.display     = 'block';
		document.getElementById('validationButton').style.display = 'none';

		// ------ Calculations ---------
		// Height in inches
		userHeight = (userHeightFeet * 12) + userHeightInches;

		// for Male
		if (userSex == 'male') {
			console.log('MALE');
			bmr = 66 + ( 6.23 * userWeight) + (12.7 * userHeight) - (6.8 * userAge);
		// for Female
		} else {
			console.log('FEMALE');
			bmr = 655 + ( 4.35 * userWeight) + (4.7 * userHeight) - (4.7 * userAge);
		}

		activityLevel   = bmr * activity;
		caloriePerMeal  = activityLevel * goalPercentage;

		proteinCalories = caloriePerMeal * 0.31;
		fatCalories 		= caloriePerMeal * 0.29;
		carbsCalories		= caloriePerMeal * 0.4;

		proteinGrams    = proteinCalories / 4;
		carbsGrams 			= carbsCalories / 4;
		fatGrams				= fatCalories / 9;


		// Results
		console.log(userAge);
		document.getElementById('bmr').innerHTML             = bmr;
		document.getElementById('activityLevel').innerHTML   = activityLevel;
		document.getElementById('caloriePerMeal').innerHTML  = caloriePerMeal.toFixed(0);

		document.getElementById('carbsCalories').innerHTML   = carbsCalories.toFixed(0) + " cal";
		document.getElementById('carbsGrams').innerHTML      = carbsGrams.toFixed(0) + " g";
		document.getElementById('proteinCalories').innerHTML = proteinCalories.toFixed(0) + " cal";
		document.getElementById('proteinGrams').innerHTML    = proteinGrams.toFixed(0) + " g";
		document.getElementById('fatCalories').innerHTML     = fatCalories.toFixed(0) + " cal";
		document.getElementById('fatGrams').innerHTML        = fatGrams.toFixed(0) + " g";
		document.getElementById('carbsPercent').innerHTML    = "40%";
		document.getElementById('proteinPercent').innerHTML  = "30%";
		document.getElementById('fatPercent').innerHTML      = "30%";

		// Helpers:
		document.getElementById('caloriePerMealreserv').innerHTML  = caloriePerMeal.toFixed(0);
	} 
	else {
		document.getElementById('validationButton').style.display = 'block';
		console.log('qjehfgjkwehfgejwf')
	}
}

function adjustMealsPerDay() {
	const calorieAll = document.getElementById('caloriePerMealreserv').innerHTML * 1;
	document.getElementById('caloriePerMealtext').innerHTML = "Calories Per Meal";

	// ALL
	if (document.getElementById('mealAll').checked) {
		// Callorie per day
		const calorieValue = document.getElementById('caloriePerMealreserv').innerHTML * 1;

		document.getElementById('caloriePerMeal').innerHTML     = calorieAll;
		document.getElementById('caloriePerMealtext').innerHTML = "Calories Per Day";
		// LOW
		if (document.getElementById('protein-low').checked) {
			let proteinCalories = calorieValue * 0.3;
			let fatCalories 		= calorieValue * 0.2;
			let carbsCalories		= calorieValue * 0.5;

			let proteinGrams    = proteinCalories / 4;
			let carbsGrams 			= carbsCalories / 4;
			let fatGrams				= fatCalories / 9;

			document.getElementById('carbsCalories').innerHTML   = carbsCalories.toFixed(0) + " cal";
			document.getElementById('carbsGrams').innerHTML      = carbsGrams.toFixed(0) + " g";
			document.getElementById('proteinCalories').innerHTML = proteinCalories.toFixed(0) + " cal";
			document.getElementById('proteinGrams').innerHTML    = proteinGrams.toFixed(0) + " g";
			document.getElementById('fatCalories').innerHTML     = fatCalories.toFixed(0) + " cal";
			document.getElementById('fatGrams').innerHTML        = fatGrams.toFixed(0) + " g";

			document.getElementById('carbsPercent').innerHTML    = "50%";
			document.getElementById('proteinPercent').innerHTML  = "20%";
			document.getElementById('fatPercent').innerHTML      = "30%";
			return;
		}
		// MODERATE
		if (document.getElementById('protein-moderate').checked) {
			let proteinCalories = calorieValue * 0.3;
			let fatCalories 		= calorieValue * 0.3;
			let carbsCalories		= calorieValue * 0.4;

			let proteinGrams    = proteinCalories / 4;
			let carbsGrams 			= carbsCalories / 4;
			let fatGrams				= fatCalories / 9;

			document.getElementById('carbsCalories').innerHTML   = carbsCalories.toFixed(0) + " cal";
			document.getElementById('carbsGrams').innerHTML      = carbsGrams.toFixed(0) + " g";
			document.getElementById('proteinCalories').innerHTML = proteinCalories.toFixed(0) + " cal";
			document.getElementById('proteinGrams').innerHTML    = proteinGrams.toFixed(0) + " g";
			document.getElementById('fatCalories').innerHTML     = fatCalories.toFixed(0) + " cal";
			document.getElementById('fatGrams').innerHTML        = fatGrams.toFixed(0) + " g";

			document.getElementById('carbsPercent').innerHTML    = "40%";
			document.getElementById('proteinPercent').innerHTML  = "30%";
			document.getElementById('fatPercent').innerHTML      = "30%";
			return;
		}
		// HIGH
		if (document.getElementById('protein-high').checked) {
			let proteinCalories = calorieValue * 0.35;
			let fatCalories 		= calorieValue * 0.3;
			let carbsCalories		= calorieValue * 0.35;

			let proteinGrams    = proteinCalories / 4;
			let carbsGrams 			= carbsCalories / 4;
			let fatGrams				= fatCalories / 9;

			document.getElementById('carbsCalories').innerHTML   = carbsCalories.toFixed(0) + " cal";
			document.getElementById('carbsGrams').innerHTML      = carbsGrams.toFixed(0) + " g";
			document.getElementById('proteinCalories').innerHTML = proteinCalories.toFixed(0) + " cal";
			document.getElementById('proteinGrams').innerHTML    = proteinGrams.toFixed(0) + " g";
			document.getElementById('fatCalories').innerHTML     = fatCalories.toFixed(0) + " cal";
			document.getElementById('fatGrams').innerHTML        = fatGrams.toFixed(0) + " g";

			document.getElementById('carbsPercent').innerHTML    = "35%";
			document.getElementById('proteinPercent').innerHTML  = "35%";
			document.getElementById('fatPercent').innerHTML      = "30%";
			return;
		}
		return;
	}

	// 2 times
	if (document.getElementById('meal2').checked) {
		// Callorie 2 times a day
		const calorieValue = document.getElementById('caloriePerMealreserv').innerHTML / 2;

		const caloriePerDay2 = calorieAll / 2;
		document.getElementById('caloriePerMeal').innerHTML = caloriePerDay2.toFixed(0);
		// LOW
		if (document.getElementById('protein-low').checked) {
			let proteinCalories = calorieValue * 0.3 ;
			let fatCalories 		= calorieValue * 0.2 ;
			let carbsCalories		= calorieValue * 0.5 ;

			let proteinGrams    = proteinCalories / 4 ;
			let carbsGrams 			= carbsCalories / 4 ;
			let fatGrams				= fatCalories / 9 ;

			document.getElementById('carbsCalories').innerHTML   = carbsCalories.toFixed(0) + " cal";
			document.getElementById('carbsGrams').innerHTML      = carbsGrams.toFixed(0) + " g";
			document.getElementById('proteinCalories').innerHTML = proteinCalories.toFixed(0) + " cal";
			document.getElementById('proteinGrams').innerHTML    = proteinGrams.toFixed(0) + " g";
			document.getElementById('fatCalories').innerHTML     = fatCalories.toFixed(0) + " cal";
			document.getElementById('fatGrams').innerHTML        = fatGrams.toFixed(0) + " g";

			document.getElementById('carbsPercent').innerHTML    = "50%";
			document.getElementById('proteinPercent').innerHTML  = "20%";
			document.getElementById('fatPercent').innerHTML      = "30%";
			return;
		}
		// MODERATE
		if (document.getElementById('protein-moderate').checked) {
			let proteinCalories = calorieValue * 0.3 ;
			let fatCalories 		= calorieValue * 0.3 ;
			let carbsCalories		= calorieValue * 0.4 ;

			let proteinGrams    = proteinCalories / 4 ;
			let carbsGrams 			= carbsCalories / 4 ;
			let fatGrams				= fatCalories / 9 ;

			document.getElementById('carbsCalories').innerHTML   = carbsCalories.toFixed(0) + " cal";
			document.getElementById('carbsGrams').innerHTML      = carbsGrams.toFixed(0) + " g";
			document.getElementById('proteinCalories').innerHTML = proteinCalories.toFixed(0) + " cal";
			document.getElementById('proteinGrams').innerHTML    = proteinGrams.toFixed(0) + " g";
			document.getElementById('fatCalories').innerHTML     = fatCalories.toFixed(0) + " cal";
			document.getElementById('fatGrams').innerHTML        = fatGrams.toFixed(0) + " g";


			document.getElementById('carbsPercent').innerHTML    = "40%";
			document.getElementById('proteinPercent').innerHTML  = "30%";
			document.getElementById('fatPercent').innerHTML      = "30%";
			return;
		}
		// HIGH
		if (document.getElementById('protein-high').checked) {
			let proteinCalories = calorieValue * 0.35 ;
			let fatCalories 		= calorieValue * 0.3 ;
			let carbsCalories		= calorieValue * 0.35 ;

			let proteinGrams    = proteinCalories / 4 ;
			let carbsGrams 			= carbsCalories / 4 ;
			let fatGrams				= fatCalories / 9 ;

			document.getElementById('carbsCalories').innerHTML   = carbsCalories.toFixed(0) + " cal";
			document.getElementById('carbsGrams').innerHTML      = carbsGrams.toFixed(0) + " g";
			document.getElementById('proteinCalories').innerHTML = proteinCalories.toFixed(0) + " cal";
			document.getElementById('proteinGrams').innerHTML    = proteinGrams.toFixed(0) + " g";
			document.getElementById('fatCalories').innerHTML     = fatCalories.toFixed(0) + " cal";
			document.getElementById('fatGrams').innerHTML        = fatGrams.toFixed(0) + " g";

			document.getElementById('carbsPercent').innerHTML    = "35%";
			document.getElementById('proteinPercent').innerHTML  = "35%";
			document.getElementById('fatPercent').innerHTML      = "30%";
			return;
		}
		return;
	}

	// 3 times
	if (document.getElementById('meal3').checked) {
		// Callorie 3 times a day
		const calorieValue = document.getElementById('caloriePerMealreserv').innerHTML / 3;

		const caloriePerDay3 = calorieAll / 3;
		document.getElementById('caloriePerMeal').innerHTML = caloriePerDay3.toFixed(0);
		// LOW
		if (document.getElementById('protein-low').checked) {
			let proteinCalories = calorieValue * 0.3;
			let fatCalories 		= calorieValue * 0.2;
			let carbsCalories		= calorieValue * 0.5;

			let proteinGrams    = proteinCalories / 4;
			let carbsGrams 			= carbsCalories / 4 ;
			let fatGrams				= fatCalories / 9 ;

			document.getElementById('carbsCalories').innerHTML   = carbsCalories.toFixed(0) + " cal";
			document.getElementById('carbsGrams').innerHTML      = carbsGrams.toFixed(0) + " g";
			document.getElementById('proteinCalories').innerHTML = proteinCalories.toFixed(0) + " cal";
			document.getElementById('proteinGrams').innerHTML    = proteinGrams.toFixed(0) + " g";
			document.getElementById('fatCalories').innerHTML     = fatCalories.toFixed(0) + " cal";
			document.getElementById('fatGrams').innerHTML        = fatGrams.toFixed(0) + " g";

			document.getElementById('carbsPercent').innerHTML    = "50%";
			document.getElementById('proteinPercent').innerHTML  = "20%";
			document.getElementById('fatPercent').innerHTML      = "30%";
			return;
		}
		// MODERATE
		if (document.getElementById('protein-moderate').checked) {
			let proteinCalories = calorieValue * 0.3 ;
			let fatCalories 		= calorieValue * 0.3 ;
			let carbsCalories		= calorieValue * 0.4 ;

			let proteinGrams    = proteinCalories / 4;
			let carbsGrams 			= carbsCalories / 4 ;
			let fatGrams				= fatCalories / 9 ;

			document.getElementById('carbsCalories').innerHTML   = carbsCalories.toFixed(0) + " cal";
			document.getElementById('carbsGrams').innerHTML      = carbsGrams.toFixed(0) + " g";
			document.getElementById('proteinCalories').innerHTML = proteinCalories.toFixed(0) + " cal";
			document.getElementById('proteinGrams').innerHTML    = proteinGrams.toFixed(0) + " g";
			document.getElementById('fatCalories').innerHTML     = fatCalories.toFixed(0) + " cal";
			document.getElementById('fatGrams').innerHTML        = fatGrams.toFixed(0) + " g";


			document.getElementById('carbsPercent').innerHTML    = "40%";
			document.getElementById('proteinPercent').innerHTML  = "30%";
			document.getElementById('fatPercent').innerHTML      = "30%";
			return;
		}
		// HIGH
		if (document.getElementById('protein-high').checked) {
			let proteinCalories = calorieValue * 0.35;
			let fatCalories 		= calorieValue * 0.3;
			let carbsCalories		= calorieValue * 0.35;

			let proteinGrams    = proteinCalories / 4;
			let carbsGrams 			= carbsCalories / 4;
			let fatGrams				= fatCalories / 9;

			document.getElementById('carbsCalories').innerHTML   = carbsCalories.toFixed(0) + " cal";
			document.getElementById('carbsGrams').innerHTML      = carbsGrams.toFixed(0) + " g";
			document.getElementById('proteinCalories').innerHTML = proteinCalories.toFixed(0) + " cal";
			document.getElementById('proteinGrams').innerHTML    = proteinGrams.toFixed(0) + " g";
			document.getElementById('fatCalories').innerHTML     = fatCalories.toFixed(0) + " cal";
			document.getElementById('fatGrams').innerHTML        = fatGrams.toFixed(0) + " g";

			document.getElementById('carbsPercent').innerHTML    = "35%";
			document.getElementById('proteinPercent').innerHTML  = "35%";
			document.getElementById('fatPercent').innerHTML      = "30%";
			return;
		}
		return;
	}

	// 4 times
	if (document.getElementById('meal4').checked) {
		// Callorie 4 times a day
		const calorieValue = document.getElementById('caloriePerMealreserv').innerHTML / 4;

		const caloriePerDay4 = calorieAll / 4;
		document.getElementById('caloriePerMeal').innerHTML = caloriePerDay4.toFixed(0);
		// LOW
		if (document.getElementById('protein-low').checked) {
			let proteinCalories = calorieValue * 0.3;
			let fatCalories 		= calorieValue * 0.2;
			let carbsCalories		= calorieValue * 0.5;

			let proteinGrams    = proteinCalories / 4;
			let carbsGrams 			= carbsCalories / 4;
			let fatGrams				= fatCalories / 9;

			document.getElementById('carbsCalories').innerHTML   = carbsCalories.toFixed(0) + " cal";
			document.getElementById('carbsGrams').innerHTML      = carbsGrams.toFixed(0) + " g";
			document.getElementById('proteinCalories').innerHTML = proteinCalories.toFixed(0) + " cal";
			document.getElementById('proteinGrams').innerHTML    = proteinGrams.toFixed(0) + " g";
			document.getElementById('fatCalories').innerHTML     = fatCalories.toFixed(0) + " cal";
			document.getElementById('fatGrams').innerHTML        = fatGrams.toFixed(0) + " g";

			document.getElementById('carbsPercent').innerHTML    = "50%";
			document.getElementById('proteinPercent').innerHTML  = "20%";
			document.getElementById('fatPercent').innerHTML      = "30%";
			return;
		}
		// MODERATE
		if (document.getElementById('protein-moderate').checked) {
			let proteinCalories = calorieValue * 0.3;
			let fatCalories 		= calorieValue * 0.3;
			let carbsCalories		= calorieValue * 0.4;

			let proteinGrams    = proteinCalories / 4;
			let carbsGrams 			= carbsCalories / 4;
			let fatGrams				= fatCalories / 9;

			document.getElementById('carbsCalories').innerHTML   = carbsCalories.toFixed(0) + " cal";
			document.getElementById('carbsGrams').innerHTML      = carbsGrams.toFixed(0) + " g";
			document.getElementById('proteinCalories').innerHTML = proteinCalories.toFixed(0) + " cal";
			document.getElementById('proteinGrams').innerHTML    = proteinGrams.toFixed(0) + " g";
			document.getElementById('fatCalories').innerHTML     = fatCalories.toFixed(0) + " cal";
			document.getElementById('fatGrams').innerHTML        = fatGrams.toFixed(0) + " g";


			document.getElementById('carbsPercent').innerHTML    = "40%";
			document.getElementById('proteinPercent').innerHTML  = "30%";
			document.getElementById('fatPercent').innerHTML      = "30%";
			return;
		}
		// HIGH
		if (document.getElementById('protein-high').checked) {
			let proteinCalories = calorieValue * 0.35;
			let fatCalories 		= calorieValue * 0.3;
			let carbsCalories		= calorieValue * 0.35;

			let proteinGrams    = proteinCalories / 4;
			let carbsGrams 			= carbsCalories / 4;
			let fatGrams				= fatCalories / 9;

			document.getElementById('carbsCalories').innerHTML   = carbsCalories.toFixed(0) + " cal";
			document.getElementById('carbsGrams').innerHTML      = carbsGrams.toFixed(0) + " g";
			document.getElementById('proteinCalories').innerHTML = proteinCalories.toFixed(0) + " cal";
			document.getElementById('proteinGrams').innerHTML    = proteinGrams.toFixed(0) + " g";
			document.getElementById('fatCalories').innerHTML     = fatCalories.toFixed(0) + " cal";
			document.getElementById('fatGrams').innerHTML        = fatGrams.toFixed(0) + " g";

			document.getElementById('carbsPercent').innerHTML    = "35%";
			document.getElementById('proteinPercent').innerHTML  = "35%";
			document.getElementById('fatPercent').innerHTML      = "30%";
			return;
		}
		return;
	}
}

function adjustProteinAmount() {
	console.log('');	
	
}

// Limitation to input by characters
function enforceMaxLength(element, maxLength) {
  if (element.value.length > maxLength) {
    element.value = element.value.slice(0, maxLength);
  }
}
