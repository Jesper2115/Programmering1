		//Disse variabler har værdien nul, fordi de først bliver tildelt en værdi når onclick-eventet bliver aktiveret og kalder add-funktionen, hvilket får værdierne til at inkrementere henholdsvis med 1 og 4.
		var durianAntal = 0;
		var hmelonAntal = 0;
		var jackfrugtAntal = 0;
		var kmelonAntal = 0;
		var graeskarAntal = 0;
	
		var durianPris = 0;
		var hmelonPris = 0;
		var jackfrugtPris = 0;
		var kmelonPris = 0;
		var graeskarPris = 0;
	
	
		
		function add(frugt) { //Dette er funktionen der bliver kaldt når onlick-eventet bliver aktiveret, og som sørger for at værdierne for variablerne bliver inkrementeret. 
			var frugt;
			if (frugt === 'durian') { //Variablen "frugt" bliver kaldt og hvis frugt er lige med eks. durian, så stiger durians antal og pris med henholdsvis 1 og 4. 
				durianAntal++;
				document.getElementById("durianAntal").innerHTML = durianAntal;

				durianPris+=4;
				document.getElementById("durianPris").innerHTML = durianPris;
				}
			
			if (frugt === 'hmelon') {
				hmelonAntal++;
				document.getElementById("hmelonAntal").innerHTML = hmelonAntal;

				hmelonPris+=4;
				document.getElementById("hmelonPris").innerHTML = hmelonPris;
				}
			
			if (frugt === 'jackfrugt') {
				jackfrugtAntal++;
				document.getElementById("jackfrugtAntal").innerHTML = jackfrugtAntal;

				jackfrugtPris+=4;
				document.getElementById("jackfrugtPris").innerHTML = jackfrugtPris;
				}
			
			if (frugt === 'kmelon') {
				kmelonAntal++;
				document.getElementById("kmelonAntal").innerHTML = kmelonAntal;

				kmelonPris+=4;
				document.getElementById("kmelonPris").innerHTML = kmelonPris;
				}
			
			if (frugt === 'graeskar') {
				graeskarAntal++;
				document.getElementById("graeskarAntal").innerHTML = graeskarAntal;

				graeskarPris+=4;
				document.getElementById("graeskarPris").innerHTML = graeskarPris;
				}
			
			
				document.getElementById("antal").innerHTML = durianAntal + hmelonAntal + jackfrugtAntal + kmelonAntal + graeskarAntal; //Her regnes det samlede antal ud ved at lægge de individuelle antal sammen, hvilket den løbende gør.
			
				document.getElementById("pris").innerHTML = durianPris + hmelonPris + jackfrugtPris + kmelonPris + graeskarPris; //Her regnes den samlede pris ud ved at lægge de individuelle priser sammen, hvilket den løbende gør.
		}