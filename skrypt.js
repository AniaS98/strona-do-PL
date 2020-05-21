var facultiesData = {
			"WGiG": [{"id": "WGiG_B", "name" : "Budownictwo"}, {"id": "WGiG_IG","name" :"Inżynieria Górnicza"} , {"id": "WGiG_IiZPP", "name" :"Inżynieria i Zarządzanie Procesami Przemysłowymi"} , {"id": "WGiG_IKS", "name" :"Inżynieria Kształtowania Środowiska"} , {"id": "WGiG_RTZ", "name" :"Rewitalizacja Terenów Zdegredowanych"}],
			"WIMiIP": [{"id": "WIMiIP_M", "name" :"Metalurgia"}, {"id": "WIMiIP_IM", "name" :"Inżynieria Materiałowa"} , {"id": "WIMiIP_ETI", "name" :"Edukacja Techniczno-informatyczna"} , {"id": "WIMiIP_IT", "name" :"Informatyka Techniczna"} , {"id": "WIMiIP_IO", "name" :"Inżynieria Obliczeniowa"} , {"id": "WIMiIP_IC", "name" :"Inżynieria Ciepła"}],
			"WEAIiIB": [{"id": "WEAIiIB_AiR", "name":"Automatyka i Robotyka"},{"id": "WEAIiIB_E", "name":"Elektrotechnika"},{"id": "WEAIiIB_IB", "name":"Inżynieria Biomedyczna"}, {"id": "WEAIiIB_I", "name":"Informatyka"}, {"id": "WEAIiIB_MwTiM", "name":"Mikroelektronika w Technice i Medycynie"}, {"id": "WEAIiIB_CS", "name":"Computer Science"}],
			"WIEiT": [{"id": "WIEiT_E", "name" : "Elektronika"}, {"id": "WIEiT_EiT", "name" : "Elektronika i Telekomunikacja"}, {"id": "WIEiT_I", "name" : "Informatyka"}, {"id": "WIEiT_T", "name" : "Teleinformatyla"}, {"id": "WIEiT_C", "name" : "Cyberbezpieczeństwo"}, {"id": "WIEiT_NTwK", "name" : "Nowoczesne Technologie w Kryminalistyce"}, {"id": "WIEiT_EaT", "name" : "Electronics and Telecommunications"}],
			"WIMiR": [{"id": "WIMiR_MiBD", "name" : "Mechanika i Budowa Maszyn"}, {"id": "WIMiR_APiR", "name" : "Automatyka Przemysłowa i Robotyka"}, {"id": "WIMiR_IM", "name" : "Inżynieria Mechatroniczna"}, {"id": "WIMiR_IA", "name" : "Inżynieria Akustyczna"}, {"id": "WIMiR_IMiM", "name" : "Inżynieria Mechaniczna i Materiałowa"}, {"id": "WIMiR_ME", "name" : "Mechatronic Engineering"}],
			"WGGiOS": [{"id": "WGGiOS_EZE", "name" : "Ekologiczne Źródła Energii"}, {"id": "WGGiOS_Gf", "name" : "Geofizyka"}, {"id": "WGGiOS_Gi", "name" : "Geoinformatyka"}, {"id": "WGGiOS_GS", "name" : "Geologia Stosowana"}, {"id": "WGGiOS_IiAD", "name" : "Inżynieria i Analiza Danych"}, {"id": "WGGiOS_IiMS", "name" : "Inżynieria i Monitoring Środowiska"}, {"id": "WGGiOS_IiOS", "name" : "Inżynieria i Ochrona Środowiska"}, {"id": "WGGiOS_Gt", "name" : "Geoturystyka"}],
			"WGGiIS": [{"id": "WGGiIS_GiK", "name" : "Geodezja i Kartografia"}, {"id": "WGGiIS_G", "name" : "Geoinformacja"},{"id": "WGGiIS_IiMS", "name" : "Inżynieria i Monitoring Środowiska"}],
			"WIMiC": [{"id": "WIMiC_TC", "name" : "Technologia Chemiczna"}, {"id": "WIMiC_IM", "name" : "Inżynieria Materiałowa"}, {"id": "WIMiC_C", "name" : "Ceramika"}, {"id": "WIMiC_CB", "name" : "Chemia Budowlana"}],
			"WO": [{"id": "WO_IPO", "name" : "Inżynieria Procesów Odlewniczych"}, {"id": "WO_KWPI", "name" : "Komputerowe Wspomaganie Procesów Inżynierskich"}, {"id": "WO_TiTM", "name" : "Tworzywa i Technologie Motoryzacyjne"}],
			"WMN": [{"id": "WMN_RiM", "name" : "Recykling i Metalurgia"}, {"id": "WMN_IMN", "name" : "Inżynieria Metali Nieżelaznych"}, {"id": "WMN_IPiJ", "name" : "Inżynieria Produkcji i Jakości"}],
			"WWNiG": [{"id": "WWNiG_GiGO", "name" : "Geoinżynieria i Górnictwo Otworowe"}, {"id": "WWNiG_INiG", "name" : "Inżynieria Naftowa i Gazownicza"}],
			"WZ": [{"id": "WZ_Z", "name" : "Zarządzanie"}, {"id": "WZ_ZiIP", "name" : "Zarządzanie i Inżynieria Produkcji"}, {"id": "WZ_IiE", "name" : "Informatyka i Ekonometria"}],
			"WEiP": [{"id": "WEiP_TC", "name" : "Technologia Chemiczna"}, {"id": "WEiP_E", "name" : "Energetyka"}, {"id": "WEiP_EOiZE", "name" : "Energetyka Odnawialna i Zarządzanie Energią"}, {"id": "WEiP_PiS", "name" : "Paliwa i Środowiska"}],
			"WFiIS": [{"id": "WFiIS_FM", "name" : "Fizyka Medyczna"}, {"id": "WFiIS_FT", "name" : "Fizyka Techniczna"}, {"id": "WFiIS_IS", "name" : "Informatyka Stosowana"}, {"id": "WFiIS_MiNwB", "name" : "Mikro- i Nanotechnologie w Biofizyce"}],
			"WMS": [{"id": "WMS_M", "name" : "Matematyka"}],
			"WH": [{"id": "WH_K", "name" : "Kulturoznawstwo"}, {"id": "WH_S", "name" : "Socjologia"}, {"id": "WH_IS", "name" : "Informatyka Społeczna"}],
		}

	
function faculties(selelctedVal)
{
	//alert("Faculty działa");
	var data = facultiesData; 
	var val = selelctedVal.value;
			
	var vals = new Array();
	var ids = new Array();
		
	switch(val)
	{
		case "WGiG":
		{
			for(var element in data.WGiG)
			{
				vals.push([data.WGiG[element].name]);
				ids.push([data.WGiG[element].id]);
			}
			break;
		}
		case "WIMiIP":
		{
			for(var element in data.WIMiIP)
			{
				vals.push([data.WIMiIP[element].name]);
				ids.push([data.WIMiIP[element].id]);
			}
			break;
		}
		case "WEAIiIB":
		{
			for(var element in data.WEAIiIB)
			{
				vals.push([data.WEAIiIB[element].name]);
				ids.push([data.WEAIiIB[element].id]);
			}
			break;
		}
		case "WIEiT":
		{
			for(var element in data.WIEiT)
			{
				vals.push([data.WIEiT[element].name]);
				ids.push([data.WIEiT[element].id]);
			}
			break;
		}
		case "WIMiR":
		{
			for(var element in data.WIMiR)
			{
				vals.push([data.WIMiR[element].name]);
				ids.push([data.WIMiR[element].id]);
			}
			break;
		}
		case "WGGiOS":
		{
			for(var element in data.WGGiOS)
			{
				vals.push([data.WGGiOS[element].name]);
				ids.push([data.WGGiOS[element].id]);
			}
			break;
		}
		case "WGGiIS":
		{
			for(var element in data.WGGiIS)
			{
				vals.push([data.WGGiIS[element].name]);
				ids.push([data.WGGiIS[element].id]);
			}
			break;
		}
		case "WIMiC":
		{
			for(var element in data.WIMiC)
			{
				vals.push([data.WIMiC[element].name]);
				ids.push([data.WIMiC[element].id]);
			}
			break;
		}
		case "WO":
		{
			for(var element in data.WO)
			{
				vals.push([data.WO[element].name]);
				ids.push([data.WO[element].id]);
			}
			break;
		}
		case "WMN":
		{
			for(var element in data.WMN)
			{
				vals.push([data.WMN[element].name]);
				ids.push([data.WMN[element].id]);
			}
			break;
		}
		case "WWNiG":
		{
			for(var element in data.WWNiG)
			{
				vals.push([data.WWNiG[element].name]);
				ids.push([data.WWNiG[element].id]);
			}
			break;
		}
		case "WZ":
		{
			for(var element in data.WZ)
			{
				vals.push([data.WZ[element].name]);
				ids.push([data.WZ[element].id]);
			}
			break;
		}
		case "WEiP":
		{
			for(var element in data.WEiP)
			{
				vals.push([data.WEiP[element].name]);
				ids.push([data.WEiP[element].id]);
			}
			break;
		}
		case "WFiIS":
		{
			for(var element in data.WFiIS)
			{
				vals.push([data.WFiIS[element].name]);
				ids.push([data.WFiIS[element].id]);
			}
			break;
		}
		case "WMS":
		{
			for(var element in data.WMS)
			{
				vals.push([data.WMS[element].name]);
				ids.push([data.WMS[element].id]);
			}
			break;
		}
		case "WH":
		{
			for(var element in data.WH)
			{
				vals.push([data.WH[element].name]);
				ids.push([data.WH[element].id]);
			}
			break;
		}			
	}
	var i;
	for(i=0;i<vals.length;i++)
	{
		document.getElementById('faculty').options[i+1]=new Option(vals[i],ids[i]);
	}
	var size =document.getElementById('faculty').options.length; 
	var j=i+1;
	for(i++;i<size;i++)
	{
		//alert(i);
		document.getElementById('faculty').remove(j);
	}
};

function warrant(selelctedVal)
{
	//alert("Warrant działa");
	if(selelctedVal.value === "WGGiIS_GiK")
	{
		var myLabel = document.getElementById("warrantLabel");
		myLabel.hidden=false;
		
		var myParent = document.getElementById("warrant");
		myParent.hidden=false;
		
		myParent.options[1] = new Option("Tak", "Tak");
		myParent.options[2] = new Option("Nie", "Nie");
	}
};

function validateForm()
{
	if(document.getElementById('department').value == "base")
	{
		alert("Uzupełnij wszystikie elementy formularza!");
		return false;
	}
	else if(document.getElementById('faculty').value == "base")
	{
		alert("Uzupełnij wszystikie elementy formularza!");
		return false;
	}
	else if(document.getElementById('degree').value == "base")
	{
		alert("Uzupełnij wszystikie elementy formularza!");
		return false;
	}
	
	var ID = document.getElementById('faculty').value
	localStorage.setItem("FacultyID", ID);
	
	window.location.replace("https://anias98.github.io/strona-do-PL/result.html");
	
}

