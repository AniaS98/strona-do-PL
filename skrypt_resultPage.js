window.onload = function()
{ 
	var tag = localStorage.getItem("FacultyID");
	var outLibrary = library[tag];
	
	var outContent ={"offers":[]};
	var counter = 0;
	//data=getJSON();
	
	
	for(var element in outLibrary)//datavar
	{
		//alert(outLibrary[element]);
		//alert(data[outLibrary[element]]);
		if (datavar[outLibrary[element]]!=[])
		{
			for(var o in datavar[outLibrary[element]])
			{
				//alert("działa2");
				//alert(type(data[outLibrary[element]][o]));
				outContent.offers.push(datavar[outLibrary[element]][o]);	
				counter++;
			}
		}
	}

	document.getElementById("content").innerHTML=("Znalezionych ofert: "+counter+"<br><br>");
	
	if(counter>0)
	{
		for(var element in outContent["offers"])
		{
			var offer = document.createElement("div");
			offer.setAttribute('class','offer_pane');
			var name = document.createElement("p");
			name.innerHTML = outContent["offers"][element].name;
			var company = document.createElement("p");
			company.innerHTML = outContent["offers"][element].company;
			offer.appendChild(name);
			offer.appendChild(company);
			var a = document.createElement("a");
			a.setAttribute('class','offer_href');
			a.appendChild(document.createTextNode("Sprawdź ofertę!"));
			a.href = outContent["offers"][element].urls;
			offer.appendChild(a);

			document.getElementById("content").appendChild(offer);
		}
	}
	else
	{
		var podpis = document.createElement("p");
		podpis.innerHTML = "Niestety nie znaleziono ofert pracy dla tego kierunku :( Może jutro się uda?";
		document.getElementById("content").appendChild(podpis);
	}

}
/*
function getJSON() {
		var json = null;
		var Tab = $.ajax({
			url: "https://anias98.github.io/strona-do-PL/wyniki.json",
			async: false,
		dataType: 'json'}).responseJSON;
		alert(typeof(Tab));
		
		
		
		return Tab;
	}*/


var library ={
  "WGiG_B": [ "1", "2", "3", "4", "5", "6" ],
  "WGiG_IG": [ "7", "8", "9", "10", "11", "12" ],
  "WGiG_IiZPP": [ "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25" ],
  "WGiG_IKS": [ "26", "27", "28", "29", "30", "31", "28", "32", "33", "34", "35" ],
  "WGiG_RTZ": [ "36", "37", "38", "39", "28" ],
  "WIMiIP_M": [ "40", "41" ],
  "WIMiIP_IM": [ "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56" ],
  "WIMiIP_ETI": [ "0", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66" ],
  "WIMiIP_IT": [ "0", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76" ],
  "WIMiIP_IO": [ "0", "77", "78", "59", "79" ],
  "WIMiIP_IC": [ "80", "81", "82", "46", "83", "84", "85", "86", "87" ],
  "WEAIiIB_AiR": [ "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98" ],
  "WEAIiIB_E": [ "99", "100", "101", "102", "93", "103", "104" ],
  "WEAIiIB_IB": [ "105", "106", "107", "108", "109" ],
  "WEAIiIB_I": [ "0", "60", "110", "59", "111", "112", "113", "114", "115", "116", "117" ],
  "WEAIiIB_MwTiM": [ "118", "119", "120", "121", "122", "123", "124", "125" ],
  "WEAIiIB_CS": [ "0", "60", "110", "59", "111", "112", "113", "114", "115", "116", "117" ],
  "WIEiT_E": [ "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "119", "138", "139", "140" ],
  "WIEiT_EiT": [ "0", "137", "119", "141", "142", "126", "143", "144", "145", "59", "146", "147", "148", "149", "134", "135", "139", "150" ],
  "WIEiT_I": [ "0", "60", "110", "59", "111", "112", "113", "114", "115", "116", "117" ],
  "WIEiT_T": [ "0", "68", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160" ],
  "WIEiT_C": [ "0", "95", "161", "162", "163" ],
  "WIEiT_NtwK": [ "0", "157", "67", "164", "165", "166", "167", "168", "169", "170", "171" ],
  "WIEiT_EaT": [ "0", "137", "119", "141", "142", "126", "143", "144", "145", "59", "146", "147", "148", "149", "134", "135", "139", "150" ],
  "WIMiR_MiBD": [ "172", "173", "174", "175", "176", "177", "178", "46", "179", "180" ],
  "WIMiR_APiR": [ "88", "181", "182", "183", "184", "185", "186", "187", "188" ],
  "WIMiR_IM": [ "189", "190", "25", "191" ],
  "WIMiR_IA": [ "192", "193", "194", "195", "196", "197", "198", "199", "200", "201", "202", "172", "203" ],
  "WIMiR_IMiM": [ "189", "204", "205", "206", "207", "208", "209", "172", "210" ],
  "WIMiR_ME": [ "211", "212", "172", "173", "175", "191" ],
  "WGGiOS_EZE": [ "213", "214", "215", "216", "82", "217", "218", "219", "220" ],
  "WGGiOS_Gf": [ "221", "222", "36", "223", "224", "225", "226", "227", "228" ],
  "WGGiOS_Gi": [ "151", "229", "221", "230", "231", "67", "232", "233", "234", "235" ],
  "WGGiOS_GS": [ "222", "236", "36", "237", "98", "238", "239", "240", "241", "242", "243", "244" ],
  "WGGiOS_IiAD": [ "0", "245", "246", "247", "248", "249", "250", "67", "251", "252", "253", "254", "255", "256" ],
  "WGGiOS_IiMS": [ "257", "258", "259", "260", "261", "262", "263", "264", "265", "266", "267", "268", "23", "269", "270", "213", "271", "272", "273" ],
  "WGGiOS_IiOS": [ "274", "275", "28", "276", "27", "28", "267", "277" ],
  "WGGiOS_Gt": [ "278", "279", "280", "281", "282" ],
  "WGGiIS_GiK": [ "283", "284", "285", "286", "287" ],
  "WGGiIS_GiK_u": [ "288", "289", "290" ],
  "WGGiIS_G": [ "291", "235", "157", "248", "292" ],
  "WGGiIS_IiMS": [ "0", "245", "246", "247", "248", "249", "250", "67", "251", "252", "253", "254", "255", "256" ],
  "WIMiC_TC": [ "293", "294", "295", "296", "297", "298", "297", "299", "300", "301", "302", "55", "47", "303", "49" ],
  "WIMiC_IM": [ "304", "43", "44", "305", "46", "47", "303", "49", "50", "51", "52", "53", "54", "55", "306", "307" ],
  "WIMiC_C": [ "300", "308", "309", "310", "311", "312", "311", "313", "299", "314", "315", "316", "317" ],
  "WIMiC_CB": [ "318", "319", "302", "320" ],
  "WO_IPO": [ "321", "322", "323", "324", "190", "43", "325", "326", "327" ],
  "WO_KWPI": [ "324", "328", "329", "330", "331", "43", "325", "332", "333" ],
  "WO_TiTM": [ "334", "295", "335", "43", "325", "336", "337", "338" ],
  "WMN_RiM": [ "339", "340", "341", "333", "342" ],
  "WMN_IMN": [ "343", "49", "344", "345", "346", "347", "348" ],
  "WMN_IpiJ": [ "349", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359", "360" ],
  "WWNiG_GiGO": [ "361", "362", "363", "364", "365", "366", "367", "368", "369", "370", "267", "371" ],
  "WWNiG_INiG": [ "372", "373", "374", "375", "376", "377", "378", "379" ],
  "WZ_Z": [ "380", "381", "382" ],
  "WZ_ZiIP": [ "383", "384", "385", "386", "387" ],
  "WZ_IiE": [ "0", "60", "110", "388", "111", "112", "113", "114", "115", "389", "390", "391", "392" ],
  "WEiP_TC": [ "393", "394", "295", "296", "297", "298", "297", "299", "300", "301", "302", "55", "47", "303", "49" ],
  "WEiP_E": [ "189", "190", "129", "395", "46", "396" ],
  "WEiP_EOiZE": [ "189", "190", "129", "395", "46" ],
  "WEiP_PiS": [ "397", "46", "398", "399", "400", "401", "402", "403", "404" ],
  "WFiIS_FM": [ "0", "121", "405", "406", "407", "408", "409", "410", "411" ],
  "WFiIS_FT": [ "0", "412", "405", "410", "411" ],
  "WFiIS_IS": [ "0", "59", "69", "413", "67", "414", "415" ],
  "WFiIS_MiNwB": [ "416", "417", "418", "49", "419", "420", "421", "422", "423", "424", "425", "426", "427", "428" ],
  "WMS_M": [ "429", "430", "431", "432", "433", "434", "435", "436", "437", "438", "439", "440", "441", "442", "443", "68", "444" ],
  "WH_K": [ "445", "446", "415", "447", "448", "449", "450", "451", "452" ],
  "WH_S": [ "453", "452", "454", "455", "456", "457", "458", "459", "460", "461", "462", "463", "464", "465", "466", "467", "468", "469" ],
  "WH_IS": [ "470", "471", "472", "473", "462", "474", "475", "476", "477", "478", "479", "480", "481", "482", "483", "484", "114", "485", "486", "487", "488", "463", "489", "490", "62" ]
}


var datavar={
  "0": [
    {
      "name": " AppDynamics EUM/BizIQ Software Engineer ",
      "company": " Cisco Systems ",
      "urls": "https://nofluffjobs.com//pl/job/appdynamics-eum-biziq-software-engineer-cisco-systems-krakow-4bj6q1tu"
    },
    {
      "name": " Atlassian Support Engineer ",
      "company": " Mindbox S.A. ",
      "urls": "https://nofluffjobs.com//pl/job/atlassian-support-engineer-mindbox-krakow-coitnsbl"
    },
    {
      "name": " Software Developer in Test ",
      "company": " Akamai Technologies ",
      "urls": "https://nofluffjobs.com//pl/job/software-developer-in-test-akamai-technologies-krakow-r6pfykqu"
    },
    {
      "name": " Junior Fullstack Java Developer ",
      "company": " Metrosoft ",
      "urls": "https://nofluffjobs.com//pl/job/junior-fullstack-java-developer-metrosoft-krakow-9okg1hms"
    },
    {
      "name": " Junior AIOps Software Consultant ",
      "company": " AppDynamics ",
      "urls": "https://nofluffjobs.com//pl/job/junior-aiops-software-consultant-appdynamics-krakow-fk4pa29r"
    },
    {
      "name": " Junior Frontend Developer ",
      "company": " Kambu Sp. z o.o. ",
      "urls": "https://nofluffjobs.com//pl/job/junior-frontend-developer-kambu-krakow-kncsmspq"
    },
    {
      "name": " IT Analyst with Dutch and English ",
      "company": " Soitron Sp. z o.o. ",
      "urls": "https://nofluffjobs.com//pl/job/it-analyst-with-dutch-and-english-soitron-krakow-vsxbyibu"
    },
    {
      "name": " Junior RPA Developer ",
      "company": " ESGROUP ",
      "urls": "https://nofluffjobs.com//pl/job/junior-rpa-developer-esgroup-krakow-lacjmjb6"
    }
  ],
  "1": [
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
    },
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    },
    {
      "name": "Architekt",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/architekt_3405096.html#e74e44fa57f1b17b1241aeb592c4df29"
    }
  ],
  "2": [
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    }
  ],
  "3": [
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    }
  ],
  "4": [
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    }
  ],
  "5": [],
  "6": [
    {
      "name": "Specjalista ds. kosztorysowania - branża sanitarna",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com/viewjob?jk=b0e6e3e41a8cd955&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Kierownik Budowy",
      "company": "EPCM",
      "urls": "https://pl.indeed.com/viewjob?jk=2d57e544bd1aeef8&fccid=a877bb8252ef54dd&vjs=3"
    },
    {
      "name": "Starszy Specjalista ds Ofertowania",
      "company": "controlprocess",
      "urls": "https://pl.indeed.com/viewjob?jk=d1e2f39450f2d69c&fccid=66aef5497a72caee&vjs=3"
    },
    {
      "name": "Rekrutacja na stanowisko Specjalisty ds",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com/viewjob?jk=f899e98d6395e7ff&fccid=dd616958bd9ddc12&vjs=3"
    }
  ],
  "7": [],
  "8": [],
  "9": [],
  "10": [],
  "11": [],
  "12": [],
  "13": [
    {
      "name": "Inżynier budowy",
      "company": "TOR-KRAK",
      "urls": "https://pl.indeed.com/viewjob?jk=45ea9c17e10c90e6&fccid=7b6043ac7d4ffc11&vjs=3"
    },
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Elektronik – Konstruktor",
      "company": "2Bora",
      "urls": "https://pl.indeed.com/viewjob?jk=1412ed0791ddda41&fccid=81eeaa9aaf867a65&vjs=3"
    },
    {
      "name": "Inżynier ds kalkulacji / przygotowania produkcji (m / k",
      "company": "STRABAG Infrastruktura Południe Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=e67453e66a025c10&fccid=91ff00d5203b00da&vjs=3"
    },
    {
      "name": "Inżynier Wsparcia Technicznego IP - z językiem angielskim",
      "company": "ELFON",
      "urls": "https://pl.indeed.com/viewjob?jk=b679e1353319d5c7&fccid=2c4afa11216a4599&vjs=3"
    },
    {
      "name": "Inżynier Automatyk PLC",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=db5567b482026e7b&fccid=8768f8af165a1d65&vjs=3"
    },
    {
      "name": "Mistrz Produkcji",
      "company": "Myworknet Sylwia Ottka",
      "urls": "https://pl.indeed.com/viewjob?/Myworknet-Sylwia-Ottka/jobs/Mistrz-Produkcji-3435f660d9377a14?fccid=056638f96335ad64&vjs=3"
    },
    {
      "name": "Inżynier Procesu Automotive Greenfield",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=83af8b65d67f08d7&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Senior Software Engineer",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com/viewjob?jk=562c72dc7345b279&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Sales Engineer",
      "company": "CELLCO COMMUNICATIONS",
      "urls": "https://pl.indeed.com/viewjob?jk=0525b90c6ac868da&fccid=b4f11fc1f32b29f5&vjs=3"
    },
    {
      "name": "EMBEDDED SOFTWARE ENGINEER",
      "company": "Loycon",
      "urls": "https://pl.indeed.com/viewjob?jk=ea6bcccc13cf9ce4&fccid=7129a6c6479d89d1&vjs=3"
    },
    {
      "name": "Active Safety Systems Engineer",
      "company": "",
      "urls": "Aptiv"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3",
      "company": "Frontend Software Engineer",
      "urls": "Grafton Recruitment Polska"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=f9282b19d2eca2cf&fccid=062f71e131e87cf0&vjs=3",
      "company": "Java Software Engineer",
      "urls": "Grafton Recruitment Polska"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=036ee4e6506ca4c2&fccid=062f71e131e87cf0&vjs=3",
      "company": "Service Engineer",
      "urls": "Manpower"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=c29a6065307d745d&fccid=1a17983a910f73d8&vjs=3",
      "company": "xxx",
      "urls": "14"
    },
    {
      "name": "Kierownik Budowy",
      "company": "EPCM",
      "urls": "https://pl.indeed.com/viewjob?jk=2d57e544bd1aeef8&fccid=a877bb8252ef54dd&vjs=3"
    },
    {
      "name": "MANAGER DS. SPRZEDAŻY - KEY ACCOUNT MANAGER nr ref KAM/2020",
      "company": "Guard 360 Sp. z o. o. S.K.",
      "urls": "https://pl.indeed.com/viewjob?jk=9e794435d631e55a&fccid=9bd5f6f55915eae9&vjs=3"
    }
  ],
  "15": [
    {
      "name": "Opiekun Finansowy",
      "company": "Stefczyk Finanse - Towarzystwo Zarzdzajce SKOK Sp. z o.o. S.K.A.",
      "urls": "https://www.pracuj.pl/praca/opiekun-finansowy-krakow,oferta,1000244310"
    },
    {
      "name": "Sta z Lwem w Sieci Korporacyjnej",
      "company": "ING Bank lski S.A.",
      "urls": "https://www.pracuj.pl/praca/staz-z-lwem-w-sieci-korporacyjnej-krakow,oferta,1000262894"
    },
    {
      "name": "Sta z Lwem w Sieci Detalicznej - edycja letnia",
      "company": "ING Bank lski S.A.",
      "urls": "https://www.pracuj.pl/praca/staz-z-lwem-w-sieci-detalicznej-edycja-letnia-krakow,oferta,1000258945"
    },
    {
      "name": "Credit and Collections Junior Specialist with Dutch",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/credit-and-collections-junior-specialist-with-dutch-krakow,oferta,7469720"
    },
    {
      "name": "Doradca Klienta",
      "company": "Compensa Towarzystwo Ubezpieczeń na Życie S.A. Vienna Insurance Group",
      "urls": "https://www.praca.pl/doradca-klienta_3420320.html#2640201031278b6ee74c7ef09d9df650"
    }
  ],
  "16": [
    {
      "name": "Modszy Specjalista - Specjalista w Zespole ds. Kontroli i Audytu",
      "company": "Narodowe Centrum Nauki",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-specjalista-w-zespole-ds-kontroli-i-audytu-krakow,oferta,1000240165"
    },
    {
      "name": "(FCR Ops) Junior Investigator Transaction Monitoring with German",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fcr-ops-junior-investigator-transaction-monitoring-with-german-krakow,oferta,1000260226"
    },
    {
      "name": "Starszy Asystent / Supervisor w Dziale Audytu Ogólnego",
      "company": "KPMG",
      "urls": "https://www.praca.pl/starszy-asystent-supervisor-w-dziale-audytu-ogolnego_3381340.html#c07039fb3869757a41e934ab1e2dd177"
    },
    {
      "name": "Kontroler wewnętrzny (ds. inwestycyjnych w branżach: drogowo-mostowej, automatyka i telekomunikacja lub energetycznej)",
      "company": "PKP Polskie Linie Kolejowe S.A",
      "urls": "https://www.praca.pl/kontroler-wewnetrzny-ds-inwestycyjnych-w-branzach-drogowo-mostowej,automatyka-i-telekomunikacja-lub-energetycznej_3420150.html#c07039fb3869757a41e934ab1e2dd177"
    }
  ],
  "17": [
    {
      "name": "Modszy specjalista ds. przygotowania produkcji",
      "company": "Pilkington IGP Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-przygotowania-produkcji-krakow,oferta,1000224390"
    },
    {
      "name": "Operator Systemu Mobile Mapping",
      "company": "Vimap Sp. z o.o.",
      "urls": "https://www.praca.pl/operator-systemu-mobile-mapping_3326702.html#db46f02c15610ad64c8c9f8929d96403"
    },
    {
      "name": "Planista produkcyjny",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/planista-produkcyjny_3397350.html#db46f02c15610ad64c8c9f8929d96403"
    }
  ],
  "18": [
    {
      "name": "Internship  Valuation Controller",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/internship-valuation-controller-krakow,oferta,1000265089"
    },
    {
      "name": "Junior Financial Analyst",
      "company": "ArcelorMittal Tubular Products Krakw Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-financial-analyst-krakow,oferta,1000256444"
    },
    {
      "name": "Fund Accounting Junior Analyst",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fund-accounting-junior-analyst-krakow,oferta,1000227197"
    },
    {
      "name": "Securities Operations Junior Analyst",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/securities-operations-junior-analyst-krakow,oferta,1000227196"
    },
    {
      "name": "Junior Financial Controller, Accounting to Reporting",
      "company": "Lundbeck Group Business Services",
      "urls": "https://www.pracuj.pl/praca/junior-financial-controller-accounting-to-reporting-krakow,oferta,1000231192"
    },
    {
      "name": "Junior Reporting Analyst with Spanish",
      "company": "PepsiCo GBS Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-reporting-analyst-with-spanish-krakow,oferta,1000220904"
    },
    {
      "name": "Power Grids  Internship  Controlling Support",
      "company": "ABB PG BUSINESS SERVICES SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/power-grids-internship-controlling-support-krakow,oferta,1000250561"
    },
    {
      "name": "Tax Analyst - Intern",
      "company": "AKAMAI TECHNOLOGIES POLAND SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/tax-analyst-intern-krakow,oferta,1000201333"
    },
    {
      "name": "Kontroler Finansowy/ Manager Działu Kontrolingu",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/kontroler-finansowy-manager-dzialu-kontrolingu_3380982.html#eba3e508dad11bda6148877019662394"
    },
    {
      "name": "Technical Project Manager - German Speaker",
      "company": "Merit Poland Sp. z o.o.",
      "urls": "https://www.praca.pl/technical-project-manager-german-speaker_3365180.html#eba3e508dad11bda6148877019662394"
    },
    {
      "name": "Project Controls Specialist",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/project-controls-specialist_3389654.html#eba3e508dad11bda6148877019662394"
    }
  ],
  "19": [
    {
      "name": "Analityk treści (Content Analyst) - język francuski [Online...",
      "company": "Majorel",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0CNK_eYI_piGz_o9hgXSGx7T7x29qxg32K7jE7Cx6W9IvzrK4I0F6Q0jhCMwvliNANl9aJhI3Oy0OkguyTpkQ2CzVIpuxQRZSQanwFhWJv1hRDe0Jhp8k1QrW6f6canFICqihJYZhtF40hFHoGdq92GH7YbUt75wn7L91zHiE8gZm1n5wNtS_sQda1LuKYXR42NYXacSJxGgtY6CfTyByDzWYfcs-YE-_Wm08xku-wbk0mPx7JUaNGNrn9eKaUF24NzywQLMP8nNcE6IBcFZ5G0MDX2B11kzedEfvfNVHoQsYV3ZB-g08pnggscZNEZc34VSBhqdMw7Q3fQ9r75w9vP_SUWQ4hVkRXCTlBXqnK54xUA95yw98Ylc7bXBvYUzh6ayTOJDT4Sk4Y5URigYE8ksPNltXKgkha9cEbWm4cwmluRftb-LX2c1WkizpycgV97e07WmsZC5ifpAxvdnObzHYQJ_W7mMa1o-Q2h5YV-PWSoZQ0XLfwJNogJhwd3Zuj9q_zIG8lAJ4226u84Ql1evvJ-JsLAqv4Wv1EddHGAIGG5coaCLs3aRAL8raw8etfxehhGnjC8zcwh4KQ0bCu3FnFa3EWa8EkKPmRlw6I0CQ==&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Analityk treści (Content Analyst) - język hiszpański [Online...",
      "company": "Majorel",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0CNK_eYI_piGz_o9hgXSGx7T7x29qxg32K7jE7Cx6W9IvzrK4I0F6Q0jhCMwvliNANl9aJhI3Oy0Cl_L9F-2LIMFCpEdFQ5FSxsHDJGS88GXpy7zawOufZsRAwSQlXKqc4czsP0DSpM1FdJY52HIsIJI_AFV9dNxQC5xCg6RIhR-Ul0IRQHZafDY4SCUZS0IeRscVEtbTJcbABw50ROqQOxyW5RAOjiqRls_ZkY1HwqBojV5aU5h2ZsmH1Zh7tp0slj1Fo_wFpNaVWmhdh1LGH954ZQYYkt-5YW-9qXl-C0uhZ-nJP7dDwdzvU8z3LVjrjf54tFLmmT-w2V0J24IefaUsERUE4F66ni7iJZBE08zIxWSv3buayCZ1F13EbhtsYnKbAt6ek_3o8Q-RybWHhwmeMZzb9V8mRxgDPeWj8VNMiCTSdr8k27RrPL8EW9FXlkQj92EuGqp4Bwr2XUJflhOjxqmyD8MCmlklzsEBjf8JwXmoVE_yIruJxofcN9NNeFCW1jN4EyKrZf9hy6Kvn8A17_SACCr6oskyOehnz7iNu7MOBkL64GYmCUPIjJGY2MGYcyB5Oij9ZLE9Un0SL84ap9tRrWyhQ=&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Pełnomocnik ds. systemów zarządzania jakością",
      "company": "FOODjobs",
      "urls": "https://pl.indeed.com/viewjob?jk=9a1658aee4e0b149&fccid=5f6e0f1f9bb64728&vjs=3"
    },
    {
      "name": "Koordynator Testów",
      "company": "ProData Consult",
      "urls": "https://pl.indeed.com/viewjob?jk=8236f470a9027b02&fccid=fa336ade0bd80ccd&vjs=3"
    },
    {
      "name": "Szef Kuchni - renomowany catering dietetyczny",
      "company": "Strategie Personalne",
      "urls": "https://pl.indeed.com/viewjob?/Strategie-Personalne/jobs/Szef-Kuchni-5cb4f3497d90ba49?fccid=29ef11a4e93c431f&vjs=3"
    },
    {
      "name": "Szef Kuchni (Lider zmiany)",
      "company": "Strategie Personalne",
      "urls": "https://pl.indeed.com/viewjob?jk=18a47788b2739be7&fccid=29ef11a4e93c431f&vjs=3"
    },
    {
      "name": "Kierownik Jakości - Konstrukcje Metalowe - Automotive - Truc...",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?jk=fca22cd6ecdaaac9&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Inżynier Budowy - elewacje klinkierowe",
      "company": "Stone Group Klinkier",
      "urls": "https://pl.indeed.com/viewjob?jk=2446c33a55ad38da&fccid=678c79800cc6fc48&vjs=3"
    },
    {
      "name": "Quality Team Leader",
      "company": "Devire",
      "urls": "https://pl.indeed.com/viewjob?jk=a474307fdfc2adad&fccid=dac7798bc9cb142c&vjs=3"
    }
  ],
  "20": [
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3410826.html#033436968b55cbe2d68d9311f368a9e5"
    },
    {
      "name": "CSR Online Advertising Specialist - Hungarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-hungarian-speaker-online-recruitment_3410830.html#033436968b55cbe2d68d9311f368a9e5"
    },
    {
      "name": "CSR Online Advertising Specialist - Latvian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-latvian-speaker-online-recruitment_3410834.html#033436968b55cbe2d68d9311f368a9e5"
    },
    {
      "name": "CSR Online Advertising Specialist - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-romanian-speaker-online-recruitment_3410836.html#033436968b55cbe2d68d9311f368a9e5"
    },
    {
      "name": "CSR Online Advertising Specialist – Czech or Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-czech-or-slovak-speaker-online-recruitment_3410776.html#033436968b55cbe2d68d9311f368a9e5"
    },
    {
      "name": "CSR Online Advertising Specialist - Lithuanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-lithuanian-speaker-online-recruitment_3410778.html#033436968b55cbe2d68d9311f368a9e5"
    },
    {
      "name": "CSR Online Advertising Specialist - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3410782.html#033436968b55cbe2d68d9311f368a9e5"
    },
    {
      "name": "CSR Online Advertising Specialist – Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-speaker-online-recruitment_3410788.html#033436968b55cbe2d68d9311f368a9e5"
    },
    {
      "name": "CSR Online Advertising Specialist - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-spanish-speaker-online-recruitment_3410794.html#033436968b55cbe2d68d9311f368a9e5"
    },
    {
      "name": "CSR Online Advertising Specialist - Russian/Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-ukrainian-speaker-online-recruitment_3410798.html#033436968b55cbe2d68d9311f368a9e5"
    }
  ],
  "21": [
    {
      "name": "Power Grids - Quality and Continuous Improvement Specialist",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqDUsVUkfH4EkrN84Gz9KZzMWLpWhyY86qBLFyf-lZ5_fhPr0f8HZO_XXiGXp7BNC9cAkHDzsSB9KHk6nTcvhXp0OjBk17CLkjWapyd5cEZ0GslgoenjWdnpqdOrHYWnY7K9cVX_YnEGIrgBApEqnAkG81g2OMu9dBs6z8X_kiujoRo3Uj3bPGGN3eWjiBCD_u3nhQBLXq8jafofN1fSHuV2-IkgJUrmYsNK3ATvI4MID-cimBQqsEMqZv82zh1IBK4rYImtmos82Ar9Jd-MLN9CKXErTAtRD4iVtKKeiOCUlFTE5hYjN1ykm0qAew3HrXhQaDfonlu5gus768gXOylT3_KgL8PoZ5joaTApebk63N9SEjhl0zne0mGdF2MD9-VAGudJtahvHmohMwcymfOnnZFSXOF_UVu_KuojlEQyBOcbxuDUbyiDtoX2_wIsoX96B_SYiQ3sJ9M8N-KsWVxmuwld1ciDGuZD5hd_irGMTuzACV07Su4-ddFCLHq5szPyD9Hyaig7fNpSXXSPVN5j25qEvd9q0LAp_FGcDyLFrL81DlI2zNTZxI8-Vma2tx3kUleseCWnvi_ng-w_OXN13268aP6EzuPa1l5RlSDMyeSnUHkM0IRlFlP4xwiJ0Hk__6jt0olI5Y1N4ma_PWkEUSBo0GXBX5lbO0izpxKZpKlnkREyP9Jat5ATLn4g0VNR9y491q9E5eaRwPE3q6s=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Specjalista ds. Procesów Magazynowych",
      "company": "FIEGE Logistik Stiftung & Co. KG",
      "urls": "https://pl.indeed.com/viewjob?jk=ad5637f900265eef&fccid=c21abee0de715f4a&vjs=3"
    },
    {
      "name": "Strategic Buyer - Chemicals",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com/viewjob?jk=ea14d83e547b0a07&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Project Manager",
      "company": "Grape Up",
      "urls": "https://pl.indeed.com/viewjob?jk=9dd3e9dfc8a55e7d&fccid=cb56c19f081a65a1&vjs=3"
    },
    {
      "name": "Reporting & Analytics Specialist",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=c104036147ca9061&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Transformation Coordinator - PMO",
      "company": "PepsiCo",
      "urls": "https://pl.indeed.com/viewjob?jk=4af96b7c26ffbf3f&fccid=2973259ddc967948&vjs=3"
    },
    {
      "name": "Scrum Master",
      "company": "TechRecruiters",
      "urls": "https://pl.indeed.com/viewjob?/TechRecruiters/jobs/Scrum-Master-4266128d04b816ed?fccid=ed77772f31d2b9b9&vjs=3"
    },
    {
      "name": "Cyber Insider Threat Analyst",
      "company": "UBS",
      "urls": "https://pl.indeed.com/viewjob?jk=75bf34e864036e30&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Global Customer Service Manager",
      "company": "Accenture",
      "urls": "https://pl.indeed.com/viewjob?jk=17fc9d817015d098&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Strategic Buyer - Electro Mechanics",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com/viewjob?jk=8a4ffcfde3f127e6&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Delivery Manager",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=7665c948967f4ece&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Strategic Buyer - Electronics",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com/viewjob?jk=7b92787b3738d086&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Scrum Master",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=69e10406280091df&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Procurement Business Process Expert",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com/viewjob?jk=53eb823859017842&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "Technology Risk Management Regional Lead",
      "company": "UBS",
      "urls": "https://pl.indeed.com/viewjob?jk=85a82c4bd4b12308&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "L1 Local Product Owner",
      "company": "NOKIA",
      "urls": "https://pl.indeed.com/viewjob?jk=6785edf2e1227ddc&fccid=3444e7c94299ba32&vjs=3"
    },
    {
      "name": "Finance Manager",
      "company": "Zurich Insurance Group",
      "urls": "https://pl.indeed.com/viewjob?jk=fe7b3569335cf178&fccid=40f6e1ba1aac8472&vjs=3"
    },
    {
      "name": "Finance Manager",
      "company": "Zurich",
      "urls": "https://pl.indeed.com/viewjob?jk=4ef3ca1f88812291&fccid=34938366d45106af&vjs=3"
    },
    {
      "name": "GLOBAL COMPLIANCE & TRADE COMPLIANCE MONITORING & AUDIT LEAD...",
      "company": "Cytiva",
      "urls": "https://pl.indeed.com/viewjob?jk=954c65303ee4cc83&fccid=c46411dafcae5d08&vjs=3"
    },
    {
      "name": "IT Program Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=ef3c8c56cc9c5b26&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "iOS Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=91880854e40498a9&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Lean Six Sigma Black Belt",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=87294ff6effd6333&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Business Analyst",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=5a29a012e62e2d94&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Lean Finance Champion",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=cd300873b4bc839d&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=223e749b80e8beb0&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Senior Procurement Analyst",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com/viewjob?jk=0c5268c3deb19212&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "Quality and Continuous Improvement Senior Specialist",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=e3cb6013f28c01a5&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "SUPPLY CHAIN IMPROVEMENT MANAGER",
      "company": "Wyser",
      "urls": "https://pl.indeed.com/viewjob?jk=b86e234b0b7effa6&fccid=4a8713d2b6afc645&vjs=3"
    },
    {
      "name": "GL Accountant with English",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=84707b02c58483e7&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Project Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=99054ffcffc4070d&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=870ff626a78c8081&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Business Analyst",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfyZbLKOePed3PsGKxoOres_QDVabVAyXJ2yUPi9I8bzRp-k6hgmK3q9kCbUfEKXyis_vPJJ1TPB1qlxzSPudLBX8xSlktqP3UrnnBhD89duFks6rggIJ1m6Etcek7StuU8JjX8-0ZYSLyDH3OoZP8INUA9M2YticwriYIW2qLEB3e1xHyplUARt4gCuqwyoOfozz7IqX5n-Yr-rTiqPVKtxWIcRoBihr1pm54AkE7CsTEk_fzVdHBIy8edEv3220_BSTdZT__D1un3ZXxFtsbjErTS9OXn5x5BFzByElZTAMMWzCSwkol0ZbrbyLKfkZF763zqDj-_1KUCGCeTBxzCDLuow7a0MbmFdX4hSK14HrwO2m1hfIwiBb5h6c8Sc2NbsUaMAD22C8JvMTKUc5h974L4J-DSZV5kBt1SYXLFssFcsuRrq1czLUz_ip5-ViTmklqmB6FHDYAbMXdaZAqFBiDTpv9VSm3Sg-LBxxPdG1KOAx-wT6TSYpPMW1frhYotQyHZ8qjB7nv8HSQzTKkcEmAon7XV7PTnEcuU_l6LQF2wQkjs5zZyy5lWKqyrQuqKZ8dYwcm1uceGKodBKeOYQ-m0d1TMHETf_1Jj4XIUY-1oe1gyjugC&p=10&fvj=0&vjs=3"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcth7foDEj52dGZgeuEPu9enIlBGomDuRPbABSYtT_wnUF6Zt_nAlKZGD_7qKog4KHU_dCR22fcdDAiplELewuiI1jm9nH1-6g2k-bCLi5E8NF-4aozzJ-leq1_APz6lnmARQ-Pywz8emCudk9kdd7nTnW9wGw_f2-82XUmYuugVv6g17yXPN4EpwN3CFrsF-EKGosd37qghn5liTD92EFMySQQW5vX-IppEHChpkhDJJSco4m2fA9PtELOR1OsJHvlWRZHf-hw9JDxBJCrhrNhDAuSEA9Wn0INtdYUcX8pUN5e-vAcLvef4U39LWasJ47VXA8tM6BEykgWDZcGuZ0QQNJ5-9eVTdGAOkVKUlGOb_7m4M8zyb5aYmSNJWMPoFTRV-zMVflbEF6U7lLl7m4FobCxKT6G52gJ0lopY9ZnK--H4ldmyvP43szgzICIBDMiu9oO3Ztk5l4JL5IrII0D64UuDabmkuvx9PTF_pXgfq24g1YIKZzUlersxp9iT1o_B_OhFzMGFSFVKdKN2ltu7H8aCCUTNFn7pCQq_4QW5iFVXvvez2g_OPkw523sMEcKMgS4dZkZUi6TJNG7hAvEm0Zx_7ILK09P4rAmPPB1-ruQVBhPwdX0H4rlaMzSzSHsGj7dDl5YRg==&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Mobile Application Development",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com/viewjob?jk=795a6f0c9f4ce820&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "Virtual Desktop Product Owner",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=a5727b7d0abc382c&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Java Team Lead",
      "company": "Verita HR Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=2d6026d11d864db3&fccid=e265b982603f34bc&vjs=3"
    },
    {
      "name": "Kierownik Budowy - Hydrotechnika (m / k)",
      "company": "STRABAG Sp. z o.o. / Dyrekcja Budownictwa Ogólnego...",
      "urls": "https://pl.indeed.com/viewjob?jk=a469b27a8e6b9cb1&fccid=8fdcbe58c8fef8e5&vjs=3"
    },
    {
      "name": "IT Project Leader/Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=598ff89cac1e7ffe&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Fullstack Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=5f5b61ba67911394&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Senior Product Manager",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com/viewjob?jk=b1a26f8b9145c41f&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "Order to Cash (AR) Manager",
      "company": "Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=b5de0e6d32b0bf1f&fccid=eb3baf007981cd9e&vjs=3"
    },
    {
      "name": "Senior Finance Analyst - Manufacturing",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=d3a4a5ecfc758ccd&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Credit Assessment Analyst - German Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=55ed90ecf2c3d1f3&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Senior Commodity Segement Leader - Electronics",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com/viewjob?jk=e5fc283856da5b31&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Senior iOS Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=f2c79a96074148e7&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Sr Risk Analyst (Information Security & Compliance)",
      "company": "GE Healthcare",
      "urls": "https://pl.indeed.com/viewjob?jk=944c7b6997c3b1a5&fccid=65b5f2aba4dbd31f&vjs=3"
    },
    {
      "name": "Mobile Product Owner",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=3849912cc284c37d&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Advanced Safety Domain Controllers Systems Engineering Inter...",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=1cf8358e8f25ba3e&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Scrum Master IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=da10fa8c9a262518&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Scrum Master (Google Cloud)",
      "company": "ITDS Business Consultants",
      "urls": "https://pl.indeed.com/viewjob?jk=dd89ff2701c9413b&fccid=21699bef93fe8799&vjs=3"
    },
    {
      "name": "Senior Android Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=9272dfdc35a5629e&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Senior AWS Solution Architect",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=c1105d8598d01bbb&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "CI/CD Solution Architect",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=75ef623508a7e56b&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "How to go-live with your product in less than 3 months?",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com/viewjob?jk=d46b35a9e6f85c13&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "Procurement Process Manager with German(m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?jk=a44b398c47317f40&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Senior Mobile Engineer",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=f1788aaf725a970c&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Senior Java Application Engineer",
      "company": "UBS",
      "urls": "https://pl.indeed.com/viewjob?jk=f11bb8dee68dd141&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Backend Developer (Ruby on Rails or Node.js)",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=a5a2d4703d45a641&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Process Lead Global IM&S Source-to-Pay",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=160bd361a453c522&fccid=38b4474838e7b7a1&vjs=3"
    }
  ],
  "22": [
    {
      "name": "Operator / Operatorka Linii Produkcyjnej",
      "company": "Valeo",
      "urls": "https://www.praca.pl/operator-operatorka-linii-produkcyjnej_3343454.html#2c3b7be57c6c0efeda4047e48a3a806d"
    },
    {
      "name": "Production Manager",
      "company": "NES Global Talent",
      "urls": "https://www.praca.pl/production-manager_3422782.html#2c3b7be57c6c0efeda4047e48a3a806d"
    },
    {
      "name": "Produkt Manager w segmencie systemów rurowych",
      "company": "RADPOL S.A.",
      "urls": "https://www.praca.pl/produkt-manager-w-segmencie-systemow-rurowych_3389062.html#2c3b7be57c6c0efeda4047e48a3a806d"
    },
    {
      "name": "Aparatowy mycia w Wydziale Produkcji Szczepionek",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/aparatowy-mycia-w-wydziale-produkcji-szczepionek_3369922.html#2c3b7be57c6c0efeda4047e48a3a806d"
    },
    {
      "name": "Młodszy Ustawiacz",
      "company": "Lajkonik Snacks Sp. z o.o.",
      "urls": "https://www.praca.pl/mlodszy-ustawiacz_3378560.html#2c3b7be57c6c0efeda4047e48a3a806d"
    },
    {
      "name": "Inżynier Budowy / Kontroler Jakości [rekrutacja online]",
      "company": "JT S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy-kontroler-jakosci-rekrutacja-online_3348204.html#2c3b7be57c6c0efeda4047e48a3a806d"
    },
    {
      "name": "Junior Maintenance Manager",
      "company": "NES Global Talent",
      "urls": "https://www.praca.pl/junior-maintenance-manager_3344126.html#2c3b7be57c6c0efeda4047e48a3a806d"
    },
    {
      "name": "Ustawiacz - Operator automatów pakujących",
      "company": "ManpowerGroup",
      "urls": "https://www.praca.pl/ustawiacz-operator-automatow-pakujacych_3370388.html#2c3b7be57c6c0efeda4047e48a3a806d"
    },
    {
      "name": "Inżynier Automatyk PLC",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-automatyk-plc_3339232.html#2c3b7be57c6c0efeda4047e48a3a806d"
    }
  ],
  "23": [],
  "24": [
    {
      "name": "Inżynier budowy ds. harmonogramowania",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com/viewjob?jk=d6477185d20a40e6&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier budowy (infrastruktura kolejowa)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com/viewjob?jk=8ff37e86b231019e&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier budowy",
      "company": "General Automatic",
      "urls": "https://pl.indeed.com/viewjob?jk=d4934c90208a0436&fccid=e71c30062ae7e5a9&vjs=3"
    },
    {
      "name": "Inżynier Automatyk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=0f9e18031e6d937f&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Elektryk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=2aba904252e64b02&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Elektronik – Konstruktor",
      "company": "2Bora",
      "urls": "https://pl.indeed.com/viewjob?jk=1412ed0791ddda41&fccid=81eeaa9aaf867a65&vjs=3"
    },
    {
      "name": "Inżynier budowy – Kierownik robót w specjalności konstrukcyj...",
      "company": "MKBUD SP. Z O.O.",
      "urls": "https://pl.indeed.com/viewjob?jk=860f2474b6a58a9c&fccid=b47f5492509d49c9&vjs=3"
    },
    {
      "name": "Kierownik Robót Drogowych lub Torowych/Inżynier Budowy",
      "company": "KZN RAIL Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=fe99701bd1cf7c37&fccid=be21bffde79d2ca7&vjs=3"
    },
    {
      "name": "Inżynier budowy ds. elektrycznych (kolejowa sieć trakcyjna)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com/viewjob?jk=547e48eef077b940&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Asystent specjalisty Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=dc8e82ea96d316d6&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "INŻYNIER DS. WSPARCIA TECHNICZNEGO",
      "company": "Awex",
      "urls": "https://pl.indeed.com/viewjob?jk=c53c91b7d2204066&fccid=27a13086689515e8&vjs=3"
    },
    {
      "name": "Delivery Manager",
      "company": "j-labs",
      "urls": "https://pl.indeed.com/viewjob?jk=b2aa9eeada8b4637&fccid=a4750d1f1c80cb70&vjs=3"
    },
    {
      "name": "Kierownik robót / inżynier budowy ds. elektroenergetycznych",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com/viewjob?jk=a107187dbce3bb50&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Specjalista Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=8447c63c8105e086&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Inżynier Systemów Elektronicznych",
      "company": "Knorr-Bremse",
      "urls": "https://pl.indeed.com/viewjob?jk=7eb2acdb5809182c&fccid=a23b36e1d6d2d53f&vjs=3"
    },
    {
      "name": "Inżynier Automatyk - rekrutacja prowadzona online",
      "company": "Fitech",
      "urls": "https://pl.indeed.com/viewjob?jk=d8931e2ecdfc3385&fccid=52d48f1974e43ed4&vjs=3"
    },
    {
      "name": "F5 Engineer - Global F5 Centric Footprint",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=d9bb1a6473ca6702&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Inżynier ds kalkulacji / przygotowania produkcji (m / k",
      "company": "STRABAG Infrastruktura Południe Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=e67453e66a025c10&fccid=91ff00d5203b00da&vjs=3"
    },
    {
      "name": "Inżynier sprzedaży systemów bezpieczeństwa przemysłowego",
      "company": "GRUPA WOLFF",
      "urls": "https://pl.indeed.com/viewjob?jk=d85a4988a3bbd086&fccid=3d99fb61e9e62f24&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Ochrony Środowiska...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=315cad0381ee06a8&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Praca w dziale IT!",
      "company": "TalentU",
      "urls": "https://pl.indeed.com/viewjob?jk=fabbb38bf2e16007&fccid=ca5f1e138a78fd90&vjs=3"
    },
    {
      "name": "Inżynier Produktu - transformatory i przekaźniki",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?jk=5c4eba35016d76ab&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "DevOps Engineer with GCP",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=bb2427305a7d5720&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "KEY ACCOUNT MANAGER",
      "company": "IT FORCE",
      "urls": "https://pl.indeed.com/viewjob?jk=c21b723d3430859d&fccid=ce0f058ecc872287&vjs=3"
    },
    {
      "name": "Software Engineer",
      "company": "Moyyn",
      "urls": "https://pl.indeed.com/viewjob?/Moyyn-Group/jobs/Software-Engineer-2b8f8c1ad63eb565?fccid=6cb95f95e73cdc07&vjs=3"
    },
    {
      "name": "Security Engineer Zscaler",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=3add5ef8110732b9&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Kierownik/Inżynier ds. teletechnicznych i/lub elektrycznych",
      "company": "P.U.T INTERCOR",
      "urls": "https://pl.indeed.com/viewjob?jk=40d97171e6c3f4af&fccid=7e97b2d9f0af32d4&vjs=3"
    },
    {
      "name": "System Engineer / Support Analyst",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=8588890611fa51b8&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Inżynier Procesu Automotive Greenfield",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=83af8b65d67f08d7&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Inżynier ds. Testów",
      "company": "Grupa Unity",
      "urls": "https://pl.indeed.com/viewjob?jk=1f2ed1cc4252a137&fccid=9a34138d512ebeaf&vjs=3"
    },
    {
      "name": "Junior/Regular Test Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=d02bbc2622234f68&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Account manager/inżynier sprzedaży",
      "company": "AMC TECH Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=3d5b339baae31c7e&fccid=9ea9ac0db41cd67b&vjs=3"
    },
    {
      "name": "Test Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=a9fa915fb33533ba&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Senior Engineer - Zscaler",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=18c74018c01b8f91&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Kierownik robót drogowych i torowych",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com/viewjob?jk=373d3be4d9cd22f2&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Senior Engineer - Firewall",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=11ff1eb2acbd80df&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Inżynier Budowy - elewacje klinkierowe",
      "company": "Stone Group Klinkier",
      "urls": "https://pl.indeed.com/viewjob?jk=2446c33a55ad38da&fccid=678c79800cc6fc48&vjs=3"
    },
    {
      "name": "QA Engineer",
      "company": "S-Labs",
      "urls": "https://pl.indeed.com/viewjob?jk=3300678035fa06a4&fccid=ce4f4701fb5e9335&vjs=3"
    },
    {
      "name": "Software Engineer in Test | Kraków",
      "company": "VSOFT",
      "urls": "https://pl.indeed.com/viewjob?jk=d0c7fadd70c81e3e&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Full Stack Engineer - IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=c4dde19424a8a8f0&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Network & Security IT Infrastructure Engineers",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=7a893ebad30c92c9&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Projektant Sieci Wodno-Kanalizacyjnych",
      "company": "K&K Selekt",
      "urls": "https://pl.indeed.com/viewjob?jk=80c55476fee329df&fccid=afe1f520a63ae3d3&vjs=3"
    },
    {
      "name": "SysOps Engineer",
      "company": "Transmission Dynamics Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?/Transmission-Dynamics-Poland-Sp.-z-o.o./jobs/Sysops-Engineer-a0430a2f02f16537?fccid=71edca8a792a88bd&vjs=3"
    },
    {
      "name": "Senior Engineer – F5",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=a5a0ee9c0889b08b&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "DevOps - Site Reliability Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=79f8370551cad57e&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "SysOps Engineer",
      "company": "Transmissmion Dynamics Poland sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?jk=bbcb7f974af392f7&fccid=7a35d02c61858789&vjs=3"
    },
    {
      "name": "Senior ETL Developer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=6037b9c19177ed07&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Pracownik pompowni na plantacji truskawek",
      "company": "Polski Instytut Truskawki",
      "urls": "https://pl.indeed.com/viewjob?jk=9fcf93e7aa0b97c5&fccid=960c74acaf07f159&vjs=3"
    },
    {
      "name": "KIEROWNIK ROBÓT SANITARNYCH / HVAC",
      "company": "ACE Group Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=c3d5f59730eeba99&fccid=9c25831738ee5606&vjs=3"
    },
    {
      "name": "QA Engineer",
      "company": "KUBO Sp. z o. o. Spółka komandytowa",
      "urls": "https://pl.indeed.com/viewjob?jk=31e8d7ac4e0e6fa5&fccid=3192074ede128056&vjs=3"
    },
    {
      "name": "Senior System Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=1ecef9ed69a02b4c&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "DevOps Engineer",
      "company": "Accenture",
      "urls": "https://pl.indeed.com/viewjob?jk=b948b73b9e7969cd&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Software Automation Engineer",
      "company": "SKELIA",
      "urls": "https://pl.indeed.com/viewjob?jk=b331cc71439dbe8b&fccid=4b7f4b3718395175&vjs=3"
    },
    {
      "name": "Senior Network Engineer for Remote Access Services",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=22e9fa8b6f4d3372&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Senior DevOps Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=3156f24e20870fbe&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Consultant Engineer (m/f/d)",
      "company": "FM Insurance Europe",
      "urls": "https://pl.indeed.com/viewjob?jk=73ed1a754671f517&fccid=61e8892c332e49a1&vjs=3"
    },
    {
      "name": "Big Data – Senior Systems Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=4097dcda43e67034&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Software Engineer in Test with manual QA background",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=48701fc98a5fb56b&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Senior Big Data Developer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=6c053339660c79e7&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Test Automation Engineer",
      "company": "VSoft",
      "urls": "https://pl.indeed.com/viewjob?jk=b4827e645cd8df91&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Senior Software Testing Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=8f95045e62483bbd&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead .NET Engineer",
      "company": "VSoft",
      "urls": "https://pl.indeed.com/viewjob?jk=8166e48816d8c6b6&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Lead / Senior Test Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=eb6fc96496fef00f&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Java Developer",
      "company": "TalentU",
      "urls": "https://pl.indeed.com/viewjob?jk=2c1ab5b1bbaf1101&fccid=ca5f1e138a78fd90&vjs=3"
    },
    {
      "name": "Lead Systems Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=26e5af3a72eb7fb8&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead/Senior FullStack Developer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=58c8a6b0776b300a&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Java Full Stack Developer with Angular/React",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=cd25e2d51a0a578f&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead / Senior Software Engineer in Test",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=4434f382028c2dda&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Software Engineer in Test",
      "company": "TalentU",
      "urls": "https://pl.indeed.com/viewjob?jk=e3c6a80fe694419a&fccid=ca5f1e138a78fd90&vjs=3"
    },
    {
      "name": "Linux Engineer / DevOps",
      "company": "EuroLinux",
      "urls": "https://pl.indeed.com/viewjob?jk=8b01b29c719cc453&fccid=d91fbdc82addbd64&vjs=3"
    },
    {
      "name": "QA Automation Engineer with travel/airline experience/Kraków",
      "company": "NewPerspective",
      "urls": "https://pl.indeed.com/viewjob?jk=1ef8f4f17587f141&fccid=659d40811d5fc07a&vjs=3"
    },
    {
      "name": "Lead/Senior Test Automation Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=74132a55a97b887d&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Java Full Stack Lead Software Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=d4af96d0b85ba8d8&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead/Senior Java Software Developer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=8aad2d6a5441beef&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "QA Automation Engineer / Kraków (aktualnie zdalnie)",
      "company": "NewPerspective",
      "urls": "https://pl.indeed.com/viewjob?jk=209f361bf869ac31&fccid=659d40811d5fc07a&vjs=3"
    },
    {
      "name": "Senior Full Stack Software Engineer (Java and/or Angular)",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=21cb3a753bdbd2cf&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead JavaScript Developer with Angular",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=a7561ed7a2f41388&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Expired: DevOps Engineer",
      "company": "Moorgate",
      "urls": "https://pl.indeed.com/viewjob?jk=a102f09f32086a58&fccid=f9e2ae1d4db307bf&vjs=3"
    },
    {
      "name": "Software Test Automation Engineer – C#",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=ac5a57dd0d23435f&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Lead Cloud DevOps & Infrastructure Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=25c4208c381e90f1&fccid=532afac41b2663f7&vjs=3"
    }
  ],
  "25": [
    {
      "name": "Inżynier wsparcia technicznego (f/m/d)",
      "company": "Zuken",
      "urls": "https://pl.indeed.com/viewjob?jk=f4a6b201c652db65&fccid=8b93b2b181fbb926&vjs=3"
    },
    {
      "name": "Inżynier Produktu - transformatory i przekaźniki",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?jk=5c4eba35016d76ab&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Inżynier Automatyk PLC",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=db5567b482026e7b&fccid=8768f8af165a1d65&vjs=3"
    },
    {
      "name": "Systems Engineer",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=765c477ed5c5aed6&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Inżynier Systemowy",
      "company": "WebCon",
      "urls": "https://pl.indeed.com/viewjob?jk=8b18c4dea14c573b&fccid=9a428be99da93220&vjs=3"
    },
    {
      "name": "Product Owner",
      "company": "MyNetwork Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=d10275cba2e72df5&fccid=b05ca52483c8c34f&vjs=3"
    },
    {
      "name": "C++ Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=e00def048e72773c&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Specialized Software Engineer",
      "company": "ESET",
      "urls": "https://pl.indeed.com/viewjob?jk=1322adda79909f76&fccid=8e1474db6974999b&vjs=3"
    },
    {
      "name": "Regular/Senior Front-end Engineer",
      "company": "Link Group Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=88d0e4742346bebc&fccid=ec288624c0917878&vjs=3"
    },
    {
      "name": "Product Owner",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com/viewjob?jk=b4746daed12ac439&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Agile Test Engineer II (Enterprise team)",
      "company": "ESET",
      "urls": "https://pl.indeed.com/viewjob?jk=7e770c4f4da27f39&fccid=8e1474db6974999b&vjs=3"
    },
    {
      "name": "Active Safety Systems Engineer",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "DevOps Engineer",
      "company": "Accenture",
      "urls": "https://pl.indeed.com/viewjob?jk=b948b73b9e7969cd&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Regular/Senior Software Engineer, Java",
      "company": "Link Group Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=f115686214e8e70d&fccid=ec288624c0917878&vjs=3"
    },
    {
      "name": "Systems Engineer - Advanced Safety",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=9fdd7d1ebbee0aca&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": ".Net Software Engineer (Audiovideo)",
      "company": "Ailleron SA",
      "urls": "https://pl.indeed.com/viewjob?/Ailleron/jobs/Net-Software-Engineer-cc8a8c81e61536d7?fccid=e008354530941776&vjs=3"
    },
    {
      "name": "Programista C++",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=68be23111168efe6&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Oracle Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=939751af5d5af958&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "26": [],
  "27": [
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
    }
  ],
  "28": [
    {
      "name": "Pracownik w Sekcji Administracji",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://www.praca.pl/pracownik-w-sekcji-administracji_3345160.html#4dd372c997467f9144dfd16a8191deb6"
    }
  ],
  "29": [],
  "30": [
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
    },
    {
      "name": "Asystent Projektanta Instalatora",
      "company": "OTS-IP sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-instalatora-krakow,oferta,500033908"
    },
    {
      "name": "Kierownik Robót Mechanicznych i Sanitarnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-mechanicznych-i-sanitarnych_3410188.html#a3352288f100c079b8a51937b244d276"
    },
    {
      "name": "Kierownik budowy \\ Kierownik robót",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-kierownik-robot_3410224.html#a3352288f100c079b8a51937b244d276"
    },
    {
      "name": "Projektant Instalacji HVAC",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-instalacji-hvac_3425568.html#a3352288f100c079b8a51937b244d276"
    },
    {
      "name": "Specjalista ds. kosztorysowania (sieci sanitarne)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-kosztorysowania-sieci-sanitarne_3417220.html#a3352288f100c079b8a51937b244d276"
    }
  ],
  "31": [],
  "32": [
    {
      "name": "Kierownik budowy \\ Kierownik robót",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-kierownik-robot_3410224.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik Robót Mechanicznych i Sanitarnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-mechanicznych-i-sanitarnych_3410188.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik budowy",
      "company": "Przedsiębiorstwo Remontowo-Budowlane AGAD Sp z.o.o",
      "urls": "https://www.praca.pl/kierownik-budowy_3366550.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik Budowy / Kierownik Kontraktu na budowie Oczyszczalni Ścieków",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-kierownik-kontraktu-na-budowie-oczyszczalni-sciekow_3376616.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik robót elektrycznych ",
      "company": "TRAKCJA PRKiI S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-elektrycznych_3372304.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik Robót Mostowych",
      "company": "Primost Południe Sp. z o.o.",
      "urls": "https://www.praca.pl/kierownik-robot-mostowych_3417020.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik Robót",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/kierownik-robot_3338936.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik robót ds. elektroenergetycznych (kolejowa sieć trakcyjna)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-ds-elektroenergetycznych-kolejowa-siec-trakcyjna_3417244.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik robót elektrycznych (infrastruktura miejska)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-elektrycznych-infrastruktura-miejska_3385134.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik Robót Sprężalniczych",
      "company": "BBR Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/kierownik-robot-sprezalniczych_3398774.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik robót drogowych i torowych (infrastruktura miejska)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-drogowych-i-torowych-infrastruktura-miejska_3385908.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik Projektu / Project Manager branża budownictwa ogólnego",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-projektu-project-manager-branza-budownictwa-ogolnego_3369996.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik Kontraktu na budowie Oczyszczalni Ścieków",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-kontraktu-na-budowie-oczyszczalni-sciekow_3384734.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Mistrz Budowy",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/mistrz-budowy_3336942.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Manager ds. sprzedaży na rynki zagraniczne",
      "company": "Diskus Polska sp. z o.o.",
      "urls": "https://www.praca.pl/manager-ds-sprzedazy-na-rynki-zagraniczne_3383718.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik Projektu",
      "company": "PILE ELBUD S.A.",
      "urls": "https://www.praca.pl/kierownik-projektu_3396494.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik Robót Drogowych",
      "company": "GruntBudowa",
      "urls": "https://www.praca.pl/kierownik-robot-drogowych_3396248.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik Robót - sieć trakcyjna",
      "company": "TRAKCJA PRKiI S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-siec-trakcyjna_3383044.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik robót branży elektrycznej",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-branzy-elektrycznej_3368676.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Cost Specialist / Inżynier ds. Przygotowania Inwestycji",
      "company": "EPCM Executive Search",
      "urls": "https://www.praca.pl/cost-specialist-inzynier-ds-przygotowania-inwestycji_3331604.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik budowy (branża kolejowa)",
      "company": "TRAKCJA PRKiI S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-branza-kolejowa_3366506.html#c28a76f90fec6aedd7dee160bde9e0cc"
    }
  ],
  "33": [
    {
      "name": "Asystent Projektanta Instalatora",
      "company": "OTS-IP sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-instalatora-krakow,oferta,500033908"
    }
  ],
  "34": [
    {
      "name": "praca na wakacje: studenci/technicy/absolwenci",
      "company": "Mateusz Biedka MATGAB",
      "urls": "https://pl.indeed.com/viewjob?jk=dedb70017ec63eaa&fccid=b0b10848ce8f4228&vjs=3"
    }
  ],
  "35": [],
  "36": [],
  "37": [],
  "38": [
    {
      "name": "Windykator Terenowy",
      "company": "CAPITAL SERVICE",
      "urls": "https://www.praca.pl/windykator-terenowy_3372896.html#60b6e5c773c0d92b46cbbbd7a702c91f"
    }
  ],
  "39": [
    {
      "name": "Pracownik Fizyczny (recykling kabli miedzianych)",
      "company": "TP Teltech Sp. z o.o.",
      "urls": "https://www.praca.pl/pracownik-fizyczny-recykling-kabli-miedzianych_3376228.html#ceefa5070190b65ebfde5568dbc9c916"
    }
  ],
  "40": [],
  "41": [],
  "42": [
    {
      "name": "Konstruktor / Projektant",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor-projektant_3339236.html#647825a48277f480d10a0451ba4d5c7f"
    }
  ],
  "43": [
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    }
  ],
  "44": [
    {
      "name": "Inżynier ds. Produktu z językiem niemieckim",
      "company": "BWI Group",
      "urls": "https://pl.indeed.com/viewjob?jk=35e6066b29f2f67a&fccid=c7c05cae7fee6d42&vjs=3"
    }
  ],
  "45": [
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Magento Backend Developer (Mid/Senior)",
      "company": "Exorigo-Upos S.A.",
      "urls": "https://www.praca.pl/magento-backend-developer-mid-senior_3416848.html#d5c9d0080dca6b1cb827a34a86e91f2c"
    }
  ],
  "46": [
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#649452e956a828e4b810c6b5b30c0095"
    },
    {
      "name": "Młodszy Koordynator Projektu [rekrutacja online]",
      "company": "Eneria Sp. z o.o.",
      "urls": "https://www.praca.pl/mlodszy-koordynator-projektu-rekrutacja-online_3364464.html#649452e956a828e4b810c6b5b30c0095"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#649452e956a828e4b810c6b5b30c0095"
    },
    {
      "name": "Specjalista ds. układów kogeneracyjnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-ukladow-kogeneracyjnych_3386364.html#649452e956a828e4b810c6b5b30c0095"
    },
    {
      "name": "Business Developer OPEX (oil&gas, chemical)",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/business-developer-opex-oil-gas,chemical_3385702.html#649452e956a828e4b810c6b5b30c0095"
    },
    {
      "name": "Wiceprezes / Członek Zarządu firmy świadczącej usługi zarządzania i nadzoru (inżyniera kontraktu) nad kontraktami budowlanymi w sektorze ochrony środowiska, przemysłu, transportu, energetyki i innych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/wiceprezes-czlonek-zarzadu-firmy-swiadczacej-uslugi-zarzadzania-i-nadzoru-inzyniera-kontraktu-nad-kontraktami-budowlanymi-w-sektorze-ochrony-srodowiska,przemyslu,transportu,energetyki-i-innych_3368116.html#649452e956a828e4b810c6b5b30c0095"
    },
    {
      "name": "Doradca energetyczny",
      "company": "Nasza Energetyka Sp. z o.o.",
      "urls": "https://www.praca.pl/doradca-energetyczny_3366434.html#649452e956a828e4b810c6b5b30c0095"
    },
    {
      "name": "Elektromonter",
      "company": "Eltel Networks Energetyka S.A.",
      "urls": "https://www.praca.pl/elektromonter_3370354.html#649452e956a828e4b810c6b5b30c0095"
    }
  ],
  "47": [],
  "48": [],
  "49": [
    {
      "name": "Working Student - FPGA Design Verification Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-design-verification-engineer-krakow,oferta,1000256977"
    },
    {
      "name": "FPGA Design Verification Engineer  Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-design-verification-engineer-working-student-krakow,oferta,1000197226"
    },
    {
      "name": "Płatne praktyki dla studentów na kierunku elektronika, elektrotechnika itp.",
      "company": "Budimex SA",
      "urls": "https://www.praca.pl/platne-praktyki-dla-studentow-na-kierunku-elektronika,elektrotechnika-itp_3391812.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "Linux Platform Engineer",
      "company": "Power Media",
      "urls": "https://www.praca.pl/linux-platform-engineer_3386258.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "Technik serwisu / Specjalista do spraw serwisu",
      "company": "EuroClean Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-serwisu-specjalista-do-spraw-serwisu_3420790.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "Technical Project Manager - German Speaker",
      "company": "Merit Poland Sp. z o.o.",
      "urls": "https://www.praca.pl/technical-project-manager-german-speaker_3365180.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "Mechanik / Elektronik / Specjalista IT",
      "company": "Diskus Polska sp. z o.o.",
      "urls": "https://www.praca.pl/mechanik-elektronik-specjalista-it_3386324.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "Test Automation Engineer (Java) [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/test-automation-engineer-java-rekrutacja-online_3407618.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "Serwisant urządzeń klimatyzacyjnych oraz grzewczo-wentylacyjnych",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://www.praca.pl/serwisant-urzadzen-klimatyzacyjnych-oraz-grzewczo-wentylacyjnych_3343490.html#5762b554a8fb4df0655169e6f92640bb"
    }
  ],
  "50": [],
  "51": [],
  "52": [
    {
      "name": "Spawacz metodą TIG+MIG",
      "company": "Gastop Production Sp. z o.o.",
      "urls": "https://www.praca.pl/spawacz-metoda-tig-mig_3378858.html#e52eb953462ac72e4fa2b600c711715a"
    },
    {
      "name": "Ślusarz / Spawacz",
      "company": "TNS Sp. z o.o.",
      "urls": "https://www.praca.pl/slusarz-spawacz_3398542.html#e52eb953462ac72e4fa2b600c711715a"
    }
  ],
  "53": [],
  "54": [
    {
      "name": "Inżynier ds. Produktu z językiem niemieckim",
      "company": "BWI Group",
      "urls": "https://pl.indeed.com/viewjob?jk=35e6066b29f2f67a&fccid=c7c05cae7fee6d42&vjs=3"
    }
  ],
  "55": [
    {
      "name": "Mistrz Produkcji",
      "company": "Strategie Personalne",
      "urls": "https://pl.indeed.com/viewjob?jk=b74179e3165d6f16&fccid=29ef11a4e93c431f&vjs=3"
    }
  ],
  "56": [
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    }
  ],
  "57": [
    {
      "name": "Specjalista ds. Badawczych",
      "company": "Cebrio",
      "urls": "https://pl.indeed.com/viewjob?jk=0bcbb25d41fdae14&fccid=1cd25ec87a06c80b&vjs=3"
    },
    {
      "name": "Referent ds. normatywów technicznych",
      "company": "Kolejowe Zakłady Nawierzchniowe",
      "urls": "https://pl.indeed.com/viewjob?jk=319d6227c6e8362f&fccid=640acb9e5c3b5646&vjs=3"
    }
  ],
  "58": [
    {
      "name": "Asystent Projektanta Technologa",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com/viewjob?jk=4a5f55654c2c7d6d&fccid=5c065c1c92843790&vjs=3"
    },
    {
      "name": "Projektant - Technolog",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com/viewjob?jk=d28797d8ccec234f&fccid=5c065c1c92843790&vjs=3"
    },
    {
      "name": "Staż w Zespole R&D, Industrial Designu, Logistyki, IT, Finan...",
      "company": "Green Cell",
      "urls": "https://pl.indeed.com/viewjob?jk=a8bea13316b4b94e&fccid=7520988c97ff0996&vjs=3"
    },
    {
      "name": "Płatny staż w Zespole R&D, Industrial Design, Prawnym, Finan...",
      "company": "Świat Baterii",
      "urls": "https://pl.indeed.com/viewjob?jk=2e1540d8c32bb5c8&fccid=88fb836afb9cbe07&vjs=3"
    },
    {
      "name": "Młodszy konsultant wsparcia technicznego",
      "company": "enova365",
      "urls": "https://pl.indeed.com/viewjob?jk=7f504c9f85e6734b&fccid=84584f1aa6973ca8&vjs=3"
    },
    {
      "name": "Analityk Systemów Informatycznych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=1cf477ef5681870a&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Młodszy programista Java/Scala w Telco BSS",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=d7949852202824e4&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Konsultant ds. wdrożeń (moduł Kadry Płace i HR)",
      "company": "enova365",
      "urls": "https://pl.indeed.com/viewjob?jk=617f2b3b339d0c72&fccid=84584f1aa6973ca8&vjs=3"
    },
    {
      "name": "Programista backend",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=566ca7dd3181aab6&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Java Developer",
      "company": "Citycom",
      "urls": "https://pl.indeed.com/viewjob?jk=401efb906feef79f&fccid=8744805f51010781&vjs=3"
    },
    {
      "name": "Scala developer - IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=2e54e0eb0e7c6ea2&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Operator obrabiarek CNC",
      "company": "Bamet",
      "urls": "https://pl.indeed.com/viewjob?jk=0cd40272cb997607&fccid=55f842c9b66dbe5b&vjs=3"
    },
    {
      "name": "Programista backend (bankowość)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=713c0aa3b7241615&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Software Engineer in Test | Kraków",
      "company": "VSOFT",
      "urls": "https://pl.indeed.com/viewjob?jk=d0c7fadd70c81e3e&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Full Stack Engineer - IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=c4dde19424a8a8f0&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Starszy konsultant projektu księgowość",
      "company": "enova365",
      "urls": "https://pl.indeed.com/viewjob?jk=43a847df99809592&fccid=84584f1aa6973ca8&vjs=3"
    },
    {
      "name": "Operator szlifierki CNC",
      "company": "Bamet",
      "urls": "https://pl.indeed.com/viewjob?jk=687e1ecd956daac9&fccid=55f842c9b66dbe5b&vjs=3"
    },
    {
      "name": "Product Owner",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com/viewjob?jk=b4746daed12ac439&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Kierownik projektu IT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=fc4d070c679ac3ee&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Technolog Procesu",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=cad1d7c6f30b2502&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Senior .Net",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com/viewjob?jk=d4077fa00ea254a3&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Inżynier Systemowy - DevOps IoT Platform",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=2cebae1656b21935&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Expired: QA Engineer",
      "company": "Moorgate",
      "urls": "https://pl.indeed.com/viewjob?jk=ac0581821b0efafb&fccid=f9e2ae1d4db307bf&vjs=3"
    }
  ],
  "59": [
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "Working Student - FPGA Algorithm Modeling Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-algorithm-modeling-engineer-krakow,oferta,1000256972"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "Junior SQL Developer",
      "company": "AG TEST HR Spka z ograniczon odpowiedzialnoci sp.k.",
      "urls": "https://www.pracuj.pl/praca/junior-sql-developer-krakow,oferta,1000194416"
    },
    {
      "name": "Praktykant Salesforce  get the HOT Salesforce skill",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,7468135"
    },
    {
      "name": "Praktykant/ Junior - Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,7468131"
    },
    {
      "name": " C/C++ Embedded Senior Software Developer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/c-c-embedded-senior-software-developer-rekrutacja-online_3415764.html#7c55e5aaf0f590efa0698495dc21f21f"
    }
  ],
  "60": [
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "Working Student - FPGA Algorithm Modeling Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-algorithm-modeling-engineer-krakow,oferta,1000256972"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "RF Test Engineer - Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/rf-test-engineer-working-student-krakow,oferta,1000197222"
    },
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "Junior Quality Engineer",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-quality-engineer-krakow,oferta,7477572"
    },
    {
      "name": "Junior Software Engineer Java",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-software-engineer-java-krakow,oferta,1000190736"
    },
    {
      "name": "Junior SQL Developer",
      "company": "AG TEST HR Spka z ograniczon odpowiedzialnoci sp.k.",
      "urls": "https://www.pracuj.pl/praca/junior-sql-developer-krakow,oferta,1000194416"
    },
    {
      "name": "Praktykant Salesforce  get the HOT Salesforce skill",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,7468135"
    },
    {
      "name": "Praktykant/ Junior - Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,7468131"
    }
  ],
  "61": [
    {
      "name": "Modszy specjalista ds. integracji danych",
      "company": "Maspex",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-integracji-danych-krakow-okolice,oferta,1000196270"
    },
    {
      "name": "File Transfer Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/file-transfer-engineer_3413000.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://www.praca.pl/administrator-it-specjalista-it_3399002.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Specjalista ds. utrzymania baz danych",
      "company": "MOTOKARIERA S.C.",
      "urls": "https://www.praca.pl/specjalista-ds-utrzymania-baz-danych_3416378.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Senior Teradata Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-teradata-developer_3337184.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Teradata Technical Analyst ",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/teradata-technical-analyst_3337152.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Specjalista IT [rekrutacja prowadzona online]",
      "company": "ZIKO Apteka Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-it-rekrutacja-prowadzona-online_3356916.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Cloud Database Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-database-architect_3415430.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "System Administrator Linux",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/system-administrator-linux_3413118.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Administrator Baz Danych PostgreSQL",
      "company": "Solid Security Sp. z o.o.",
      "urls": "https://www.praca.pl/administrator-baz-danych-postgresql_3333996.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Databases Administrator MySQL/PostgreSQL",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/databases-administrator-mysql-postgresql_3376656.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Data Center Engineer",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/data-center-engineer_3347770.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Administrator baz danych (DBA) / SQL Developer",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/administrator-baz-danych-dba-sql-developer_3396678.html#4dfda4bb11f7b9d46579d2e61821394d"
    }
  ],
  "62": [
    {
      "name": "Symfony Fullstack Developer [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/symfony-fullstack-developer-rekrutacja-online_3420696.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "Workflow Developer",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/workflow-developer_3420392.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "Full stack developer ",
      "company": "Prisjakt Poland Sp. z o.o.",
      "urls": "https://www.praca.pl/full-stack-developer_3416904.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "Angular Developer",
      "company": "Power Media",
      "urls": "https://www.praca.pl/angular-developer_3335760.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "Web Magento Developer (Mid/Senior) ",
      "company": "Exorigo-Upos S.A.",
      "urls": "https://www.praca.pl/web-magento-developer-mid-senior_3416886.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "React Native Developer [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/react-native-developer-rekrutacja-online_3383578.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "Laravel Fullstack Developer [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/laravel-fullstack-developer-rekrutacja-online_3380656.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "Web Design Developer",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/web-design-developer_3378608.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    }
  ],
  "63": [
    {
      "name": "Junior Graphic Designer",
      "company": "Morele.net Sp. z o.o. ",
      "urls": "https://www.pracuj.pl/praca/junior-graphic-designer-krakow,oferta,1000257192"
    },
    {
      "name": "Nauczyciel grafiki komputerowej",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-grafiki-komputerowej_3411470.html#97678f7786db6bd26378e94bb723a9bb"
    }
  ],
  "64": [
    {
      "name": "Asystent projektanta w brany budowlano-konstrukcyjnej",
      "company": "Inter-Raf P.E.S. Polska Spka z ograniczon odpowiedzialnoci Spka Komandytowa ",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-w-branzy-budowlano-konstrukcyjnej-krakow,oferta,1000222836"
    },
    {
      "name": "Asystent Projektanta Instalatora",
      "company": "OTS-IP sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-instalatora-krakow,oferta,500033908"
    },
    {
      "name": "Asystent projektanta konstrukcji budowlanych",
      "company": "HW constructions, Henryk Wrbel",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-konstrukcji-budowlanych-krakow,oferta,500033646"
    },
    {
      "name": "BIM Asystent",
      "company": "Arup Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/bim-asystent-krakow,oferta,7467013"
    },
    {
      "name": "Projektant Instalacji HVAC",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-instalacji-hvac_3425568.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Koordynator projektu [rekrutacja online]",
      "company": "HERKULES  S.A.",
      "urls": "https://www.praca.pl/koordynator-projektu-rekrutacja-online_3407586.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Projektant [rekrutacja online]",
      "company": "Impel Tech Solutions Sp. Z o.o. Sp. K",
      "urls": "https://www.praca.pl/projektant-rekrutacja-online_3378674.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Inżynier w Dziale Inwestycji i Eksploatacji",
      "company": "Instytut Fizyki Jądrowej PAN",
      "urls": "https://www.praca.pl/inzynier-w-dziale-inwestycji-i-eksploatacji_3389454.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "P1 CAD Software Test Automation Engineer (C#) [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/p1-cad-software-test-automation-engineer-c-rekrutacja-online_3407616.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Konstruktor",
      "company": "TNS Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor_3398606.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Inżynier Budowy / Kontroler Jakości [rekrutacja online]",
      "company": "JT S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy-kontroler-jakosci-rekrutacja-online_3348204.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Asystent Technologa / Technolog",
      "company": "Euronova Sp.z o.o. Sp.k.",
      "urls": "https://www.praca.pl/asystent-technologa-technolog_3324544.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Inżynier budowy",
      "company": "Dach i Strych Sp. z o. o.",
      "urls": "https://www.praca.pl/inzynier-budowy_3337406.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Konstruktor / Projektant",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor-projektant_3339236.html#849ede6d971d66992625aa386af538a2"
    }
  ],
  "65": [
    {
      "name": "Inżynier Automatyk - rekrutacja prowadzona online",
      "company": "Fitech",
      "urls": "https://pl.indeed.com/viewjob?jk=d8931e2ecdfc3385&fccid=52d48f1974e43ed4&vjs=3"
    },
    {
      "name": "Specjalista ds. Badawczych",
      "company": "Cebrio",
      "urls": "https://pl.indeed.com/viewjob?jk=0bcbb25d41fdae14&fccid=1cd25ec87a06c80b&vjs=3"
    },
    {
      "name": "PROGRAMISTA/OPERATOR TOKARKI CNC",
      "company": "SpecialTech",
      "urls": "https://pl.indeed.com/viewjob?jk=1b2937533654c0e7&fccid=7c5949c4b44aef0d&vjs=3"
    },
    {
      "name": "Programista CNC",
      "company": "Kolejowe Zakłady Nawierzchniowe",
      "urls": "https://pl.indeed.com/viewjob?jk=d1d0859a7d3ec611&fccid=640acb9e5c3b5646&vjs=3"
    }
  ],
  "66": [
    {
      "name": "Nauczyciel przedmiotów ogólnokształcących",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-ogolnoksztalcacych_3372410.html#1a327aa0388a8f8114b0719fcc488baa"
    },
    {
      "name": "Nauczyciel przedmiotów zawodowych",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-zawodowych_3372442.html#1a327aa0388a8f8114b0719fcc488baa"
    }
  ],
  "67": [
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Junior Customer Support",
      "company": "Reality Games Polska sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-customer-support-krakow,oferta,1000238785"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Accounts Payable Associate - Junior",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/accounts-payable-associate-junior-krakow,oferta,1000197328"
    },
    {
      "name": "Junior Software Engineer Java",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-software-engineer-java-krakow,oferta,1000190736"
    },
    {
      "name": "Junior SQL Developer",
      "company": "AG TEST HR Spka z ograniczon odpowiedzialnoci sp.k.",
      "urls": "https://www.pracuj.pl/praca/junior-sql-developer-krakow,oferta,1000194416"
    },
    {
      "name": "Modszy specjalista ds. integracji danych",
      "company": "Maspex",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-integracji-danych-krakow-okolice,oferta,1000196270"
    },
    {
      "name": "Junior Accountant  German speaker",
      "company": "People Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-accountant-german-speaker-krakow,oferta,1000194275"
    },
    {
      "name": "Video Content Analyst with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/video-content-analyst-with-french_3422886.html#cb4b6710a47123eafde81a931a85ab0c"
    }
  ],
  "68": [
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "Working Student - FPGA Algorithm Modeling Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-algorithm-modeling-engineer-krakow,oferta,1000256972"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "Junior SQL Developer",
      "company": "AG TEST HR Spka z ograniczon odpowiedzialnoci sp.k.",
      "urls": "https://www.pracuj.pl/praca/junior-sql-developer-krakow,oferta,1000194416"
    },
    {
      "name": "Praktykant Salesforce  get the HOT Salesforce skill",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,7468135"
    },
    {
      "name": "Praktykant/ Junior - Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,7468131"
    },
    {
      "name": " C/C++ Embedded Senior Software Developer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/c-c-embedded-senior-software-developer-rekrutacja-online_3415764.html#7c55e5aaf0f590efa0698495dc21f21f"
    }
  ],
  "69": [
    {
      "name": "Administrator systemów IT (IT Administrator)",
      "company": "Mota-Engil Central Europe S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=d14105c2d54c1e37&fccid=bcf0bf1f4707d6c6&vjs=3"
    },
    {
      "name": "PRACA: Specjalista ds. sprzedaży systemów GIS",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=72e1402fc1022a52&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "Administrator systemów IT",
      "company": "Core Logic",
      "urls": "https://pl.indeed.com/viewjob?jk=bde5b539ade97c2e&fccid=67e7d62a7f3782fd&vjs=3"
    },
    {
      "name": "Key Account Manager",
      "company": "Unima 2000",
      "urls": "https://pl.indeed.com/viewjob?jk=8630ed50ee083c5e&fccid=c554e56e32acd5b0&vjs=3"
    },
    {
      "name": "Administrator platformy wirtualizacji i konteneryzacji",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=a583943e826cfdc1&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Linux Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com/viewjob?jk=9736159eca14bfe1&fccid=e6ed5490b8bccdea&vjs=3"
    },
    {
      "name": "Administrator serwerów aplikacyjnych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=dac9b3439cb88043&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Administrator DB2",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=9f869437ba043921&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Młodszy Administrator IT",
      "company": "polskapress",
      "urls": "https://pl.indeed.com/viewjob?jk=160e623d21004309&fccid=9db9c1f7bc99b9e7&vjs=3"
    },
    {
      "name": "Administrator baz danych PostgreSQL",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com/viewjob?jk=9e48f67dd7c81c5c&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "PRACA w Dziale IT: Back-End Developer",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=4e97eb203f795080&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "Senior Administrator IT",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com/viewjob?jk=3fd43b821d3b8916&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=8b9014a2145ea0aa&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator systemów Linux",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com/viewjob?jk=d4c9c5f23fa99f77&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://pl.indeed.com/viewjob?jk=a2d8276d0b025799&fccid=3080be87afc8f4e8&vjs=3"
    },
    {
      "name": "Administrator IT",
      "company": "TRAX elektronik",
      "urls": "https://pl.indeed.com/viewjob?jk=7936623bf2cea870&fccid=a938d49a88a78b9e&vjs=3"
    },
    {
      "name": "Administrator Baz Danych PostgreSQL",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=0a7610c0f3795a6c&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Database Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com/viewjob?jk=90fd55042e132238&fccid=e6ed5490b8bccdea&vjs=3"
    },
    {
      "name": "Konsultant Systemów ERP",
      "company": "IT Vision Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=184423f0229d73fa&fccid=e9e72d43a9959ff4&vjs=3"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "Lobo HR",
      "urls": "https://pl.indeed.com/viewjob?jk=cb2df588d0fb3500&fccid=42ea513863db8ce0&vjs=3"
    }
  ],
  "70": [
    {
      "name": "Administrator systemów IT (IT Administrator)",
      "company": "Mota-Engil Central Europe S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=d14105c2d54c1e37&fccid=bcf0bf1f4707d6c6&vjs=3"
    },
    {
      "name": "Administrator systemów IT",
      "company": "Core Logic",
      "urls": "https://pl.indeed.com/viewjob?jk=bde5b539ade97c2e&fccid=67e7d62a7f3782fd&vjs=3"
    },
    {
      "name": "Linux Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com/viewjob?jk=9736159eca14bfe1&fccid=e6ed5490b8bccdea&vjs=3"
    },
    {
      "name": "Młodszy Administrator IT",
      "company": "polskapress",
      "urls": "https://pl.indeed.com/viewjob?jk=160e623d21004309&fccid=9db9c1f7bc99b9e7&vjs=3"
    },
    {
      "name": "Administrator ORACLE",
      "company": "ASTEK Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=4b1b78a374344ddc&fccid=bade360f8bbb30c6&vjs=3"
    },
    {
      "name": "administrator lokalnej sieci komputerowej w Dziale Informaty...",
      "company": "Politechnika Krakowska",
      "urls": "https://pl.indeed.com/viewjob?jk=e10a11bf01e66b14&fccid=dbf078d8db93f693&vjs=3"
    },
    {
      "name": "Administrator IT",
      "company": "TRAX elektronik",
      "urls": "https://pl.indeed.com/viewjob?jk=7936623bf2cea870&fccid=a938d49a88a78b9e&vjs=3"
    },
    {
      "name": "Database Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com/viewjob?jk=90fd55042e132238&fccid=e6ed5490b8bccdea&vjs=3"
    }
  ],
  "71": [],
  "72": [],
  "73": [
    {
      "name": "Modszy Projekt Manager",
      "company": "JANTAR Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-projekt-manager-krakow,oferta,1000263878"
    }
  ],
  "74": [
    {
      "name": "Inżynier elektryk / Projektant instalacji elektrycznych",
      "company": "ELSTA",
      "urls": "https://pl.indeed.com/viewjob?jk=10d6f43157880baf&fccid=507fba9e43be3921&vjs=3"
    }
  ],
  "75": [
    {
      "name": "IBM Poland Internship - Watson Machine Learning/Watson OpenS...",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=8b999a8552cd5d4a&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "PLANISTA/ WDROŻENIOWIEC SYSTEMÓW OPARTYCH NA QGIS ORAZ CAD",
      "company": "GLOBAL SOFTELNET",
      "urls": "https://pl.indeed.com/viewjob?jk=60c8b70adc91d110&fccid=87f74a987fba589f&vjs=3"
    },
    {
      "name": "Front-end Developer",
      "company": "Futurum Technology LTD. sp. k.",
      "urls": "https://pl.indeed.com/viewjob?jk=2dceff3dc576590a&fccid=c97cfd271c22eb24&vjs=3"
    },
    {
      "name": "FTM QA Developer",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=607e5080e4790e02&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Software Developer",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=6e68974b0364eb94&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Software Development Manager",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=2fde0bae5be91402&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Dział ds. Osób Niepełnosprawnych - Pracownik IT",
      "company": "Uniwersytet Jagielloński - Dział ds. Osób Niepełno...",
      "urls": "https://pl.indeed.com/viewjob?jk=1882a228597ed431&fccid=4cfdfea619565a49&vjs=3"
    },
    {
      "name": "Młodszy administrator / serwisant",
      "company": "Softelnet spółka akcyjna sp.k.",
      "urls": "https://pl.indeed.com/viewjob?jk=c3de9f0405325c9a&fccid=c120232169b76303&vjs=3"
    },
    {
      "name": "Software Developer QA",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=a1f1df050441fdc4&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Data & AI Architect",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=03552730e217d16e&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Software Developer JavaScript/React",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=323e237b9797c4ff&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "DB2 Support Engineer",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=ea619088c13a4668&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Technical Support Engineer",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=bb0348a019bc196d&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Software Developer - Quality Assurance",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=268fc67f4b8a5f35&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Junior/Specialist IT Support with German",
      "company": "QVC POLAND GLOBAL SERVICES SP Z O O",
      "urls": "https://pl.indeed.com/viewjob?jk=82cb5f10bd543d1a&fccid=d82b729ef7602eb5&vjs=3"
    }
  ],
  "76": [
    {
      "name": "Projektant - Technolog",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com/viewjob?jk=d28797d8ccec234f&fccid=5c065c1c92843790&vjs=3"
    },
    {
      "name": "PROJEKTANT - DESIGNER",
      "company": "NEWAG GROUP",
      "urls": "https://pl.indeed.com/viewjob?jk=24c2ff2105232369&fccid=b1b38fabe5e92cf0&vjs=3"
    }
  ],
  "77": [],
  "78": [],
  "79": [
    {
      "name": "Administrator systemów IT (IT Administrator)",
      "company": "Mota-Engil Central Europe S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=d14105c2d54c1e37&fccid=bcf0bf1f4707d6c6&vjs=3"
    },
    {
      "name": "PRACA: Specjalista ds. sprzedaży systemów GIS",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=72e1402fc1022a52&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "Administrator systemów IT",
      "company": "Core Logic",
      "urls": "https://pl.indeed.com/viewjob?jk=bde5b539ade97c2e&fccid=67e7d62a7f3782fd&vjs=3"
    },
    {
      "name": "Key Account Manager",
      "company": "Unima 2000",
      "urls": "https://pl.indeed.com/viewjob?jk=8630ed50ee083c5e&fccid=c554e56e32acd5b0&vjs=3"
    },
    {
      "name": "Administrator platformy wirtualizacji i konteneryzacji",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=a583943e826cfdc1&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Linux Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com/viewjob?jk=9736159eca14bfe1&fccid=e6ed5490b8bccdea&vjs=3"
    },
    {
      "name": "Administrator serwerów aplikacyjnych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=dac9b3439cb88043&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Administrator DB2",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=9f869437ba043921&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Młodszy Administrator IT",
      "company": "polskapress",
      "urls": "https://pl.indeed.com/viewjob?jk=160e623d21004309&fccid=9db9c1f7bc99b9e7&vjs=3"
    },
    {
      "name": "Administrator baz danych PostgreSQL",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com/viewjob?jk=9e48f67dd7c81c5c&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "PRACA w Dziale IT: Back-End Developer",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=4e97eb203f795080&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "Senior Administrator IT",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com/viewjob?jk=3fd43b821d3b8916&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=8b9014a2145ea0aa&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator systemów Linux",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com/viewjob?jk=d4c9c5f23fa99f77&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://pl.indeed.com/viewjob?jk=a2d8276d0b025799&fccid=3080be87afc8f4e8&vjs=3"
    },
    {
      "name": "Administrator IT",
      "company": "TRAX elektronik",
      "urls": "https://pl.indeed.com/viewjob?jk=7936623bf2cea870&fccid=a938d49a88a78b9e&vjs=3"
    },
    {
      "name": "Administrator Baz Danych PostgreSQL",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=0a7610c0f3795a6c&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Database Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com/viewjob?jk=90fd55042e132238&fccid=e6ed5490b8bccdea&vjs=3"
    },
    {
      "name": "Konsultant Systemów ERP",
      "company": "IT Vision Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=184423f0229d73fa&fccid=e9e72d43a9959ff4&vjs=3"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "Lobo HR",
      "urls": "https://pl.indeed.com/viewjob?jk=cb2df588d0fb3500&fccid=42ea513863db8ce0&vjs=3"
    }
  ],
  "80": [],
  "81": [
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#c6e7b152e38eedf796af0676ce8eadd2"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#c6e7b152e38eedf796af0676ce8eadd2"
    }
  ],
  "82": [
    {
      "name": "Customer Care Manager",
      "company": "Green Cell",
      "urls": "https://pl.indeed.com/viewjob?jk=d986136e0aaa85c5&fccid=7520988c97ff0996&vjs=3"
    },
    {
      "name": "Customer Care Manager",
      "company": "Świat Baterii",
      "urls": "https://pl.indeed.com/viewjob?jk=5f7bf8d18b34b854&fccid=88fb836afb9cbe07&vjs=3"
    }
  ],
  "83": [
    {
      "name": "Praktykant / Praktykantka w Dziale Zakupów [rekrutacja prowadzona on-line]",
      "company": "Abra S.A.",
      "urls": "https://www.praca.pl/praktykant-praktykantka-w-dziale-zakupow-rekrutacja-prowadzona-on-line_3365122.html#a5cd6f0f36cc1be2cd76846ca8f85df7"
    },
    {
      "name": "Senior NLP / AI Data Scientist",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-nlp-ai-data-scientist_3382962.html#a5cd6f0f36cc1be2cd76846ca8f85df7"
    },
    {
      "name": "Specjalista",
      "company": "cj",
      "urls": "https://www.praca.pl/specjalista_3418496.html#a5cd6f0f36cc1be2cd76846ca8f85df7"
    }
  ],
  "84": [
    {
      "name": "Staż lub praktyka zdalna, 14 kierunków i więcej do wyboru",
      "company": "Krajowy Instytut Rozwoju Gospodarki",
      "urls": "https://pl.indeed.com/viewjob?jk=1c5dd6a055dcfbbb&fccid=5429572581cdb0aa&vjs=3"
    }
  ],
  "85": [],
  "86": [],
  "87": [],
  "88": [
    {
      "name": "Praktykant/ Junior - Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,7468131"
    },
    {
      "name": "Młodszy Inżynier",
      "company": "Gegenbauer Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/mlodszy-inzynier_3425890.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Technik Mechanik (K/M)  [rekrutacja online]",
      "company": "Apleona HSG Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-mechanik-k-m-rekrutacja-online_3372586.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Inżynier Utrzymania Ruchu – Nowe uruchomienia (mechanika lub automatyka)",
      "company": "Moltton",
      "urls": "https://www.praca.pl/inzynier-utrzymania-ruchu-nowe-uruchomienia-mechanika-lub-automatyka_3404300.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Kontroler wewnętrzny (ds. inwestycyjnych w branżach: drogowo-mostowej, automatyka i telekomunikacja lub energetycznej)",
      "company": "PKP Polskie Linie Kolejowe S.A",
      "urls": "https://www.praca.pl/kontroler-wewnetrzny-ds-inwestycyjnych-w-branzach-drogowo-mostowej,automatyka-i-telekomunikacja-lub-energetycznej_3420150.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Automatyk",
      "company": "Bilfinger Industrial Services Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/automatyk_3411550.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Video Solutions Firmware Senior Test Engineer (Python) [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/video-solutions-firmware-senior-test-engineer-python-rekrutacja-online_3416964.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Mechanik / Elektronik / Specjalista IT",
      "company": "Diskus Polska sp. z o.o.",
      "urls": "https://www.praca.pl/mechanik-elektronik-specjalista-it_3386324.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Business Developer OPEX (oil&gas, chemical)",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/business-developer-opex-oil-gas,chemical_3385702.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Test Automation Engineer (Java) [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/test-automation-engineer-java-rekrutacja-online_3407618.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Technik – Automatyk (K/M)  [rekrutacja online]",
      "company": "Apleona HSG Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-automatyk-k-m-rekrutacja-online_3378226.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Technik Serwisu - Docelowa specjalizacja Elektryk Automatyk, Elektomechanik, Mechanik",
      "company": "Hert Sp. z o.o. Serwis Sp.k.",
      "urls": "https://www.praca.pl/technik-serwisu-docelowa-specjalizacja-elektryk-automatyk,elektomechanik,mechanik_3380732.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Elektromechanik [rekrutacja online]",
      "company": "Lafarge",
      "urls": "https://www.praca.pl/elektromechanik-rekrutacja-online_3373114.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Dyrektor Sprzedaży / Sales manager",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/dyrektor-sprzedazy-sales-manager_3017216.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Inżynier Automatyk PLC",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-automatyk-plc_3339232.html#08421fbf2061793ed97761471aad46e0"
    }
  ],
  "89": [
    {
      "name": "Asystent ds. zdalnej obsugi biura",
      "company": "ULTIMA PACK sp. z o.o. SPӣKA KOMANDYTOWA",
      "urls": "https://www.pracuj.pl/praca/asystent-ds-zdalnej-obslugi-biura-krakow,oferta,500036867"
    },
    {
      "name": "Junior Logistics Operator",
      "company": "Veritas Alpha ltd sk",
      "urls": "https://www.pracuj.pl/praca/junior-logistics-operator-krakow,oferta,1000257762"
    },
    {
      "name": "Platform Operations Technician (III shift)",
      "company": "AKAMAI TECHNOLOGIES POLAND SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/platform-operations-technician-iii-shift-krakow,oferta,7521969"
    },
    {
      "name": "Modszy Specjalista ds. Social Media",
      "company": "Chemitech Sp. z o.o.o",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-social-media-krakow,oferta,1000234496"
    },
    {
      "name": "Modszy Ksigowy ds. Funduszy",
      "company": "HedgeServ",
      "urls": "https://www.pracuj.pl/praca/mlodszy-ksiegowy-ds-funduszy-krakow,oferta,1000233978"
    },
    {
      "name": "Sta w dziale ksigowoci funduszy",
      "company": "HedgeServ",
      "urls": "https://www.pracuj.pl/praca/staz-w-dziale-ksiegowosci-funduszy-krakow,oferta,1000233981"
    },
    {
      "name": "Asystentka / Sekretarka - Concierge online",
      "company": "Recruit Europe Takeshige Yokota",
      "urls": "https://www.pracuj.pl/praca/asystentka-sekretarka-concierge-online-krakow,oferta,1000227254"
    },
    {
      "name": "Modszy specjalista ds. obsugi klienta wgierskojzycznego i tumacz",
      "company": "Marketing Investment Group S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-wegierskojezycznego-i-tlumacz-krakow,oferta,1000258752"
    },
    {
      "name": "Asystent /-ka Kierownika Projektu",
      "company": "Enervigo sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-kierownika-projektu-krakow,oferta,1000223118"
    },
    {
      "name": "Modszy Specjalista ds. Obsugi Klienta z jzykiem rumuskim",
      "company": "Marketing Investment Group S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-z-jezykiem-rumunskim-krakow,oferta,1000218174"
    },
    {
      "name": "Junior Accountant",
      "company": "Adecco Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-accountant-krakow,oferta,1000222833"
    },
    {
      "name": "Full Time Administrative Assistant - Remote",
      "company": "WEB BESPOKERS FILIP KOTLARZ",
      "urls": "https://www.pracuj.pl/praca/full-time-administrative-assistant-remote-krakow-okolice,oferta,1000204756"
    },
    {
      "name": "Asystent ds. Sprzeday i Obsugi Klienta Biznesowego",
      "company": "MISBEHAVE MISBHV sp. z o.o. sp.k.",
      "urls": "https://www.pracuj.pl/praca/asystent-ds-sprzedazy-i-obslugi-klienta-biznesowego-krakow,oferta,7472955"
    },
    {
      "name": "Finance Associate z j.niemieckim",
      "company": "Randstad Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/finance-associate-z-j-niemieckim-krakow,oferta,7474145"
    },
    {
      "name": "Modszy Specjalista ds. Technicznego Wsparcia Sprzeday",
      "company": "BAKOTECH Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-technicznego-wsparcia-sprzedazy-krakow,oferta,7471445"
    },
    {
      "name": "Monitoring Architect ",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/monitoring-architect_3406776.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Cloud Automation Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-automation-architect_3406644.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Senior Subject Matter Expert – VDI & SRA [rekrutacja online]",
      "company": "ING Tech Poland",
      "urls": "https://www.praca.pl/senior-subject-matter-expert-vdi-sra-rekrutacja-online_3422830.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Kierownik ds. E-commerce",
      "company": "heban sp. z o.o. sp. komandytowa",
      "urls": "https://www.praca.pl/kierownik-ds-e-commerce_3404394.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "L 1 Security Engineer ",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/l-1-security-engineer_3355836.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Senior DevOps Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-devops-engineer_3383732.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Administrator Sieci",
      "company": "Solid Security Sp. z o.o.",
      "urls": "https://www.praca.pl/administrator-sieci_3334000.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Generalny dyrektor operacyjny ds. monitorowania transakcji",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/generalny-dyrektor-operacyjny-ds-monitorowania-transakcji_3408194.html#afa6638b90a471dbf4fa517b806872ca"
    }
  ],
  "90": [
    {
      "name": "Modszy Projekt Manager",
      "company": "JANTAR Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-projekt-manager-krakow,oferta,1000263878"
    },
    {
      "name": "Przedstawiciel Handlowy Systemy Diagnostyki Pojazdów Wow ",
      "company": "Wurth Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy-systemy-diagnostyki-pojazdow-wow_3406956.html#1b16b0fb89813537b5dcefaaac466ca8"
    },
    {
      "name": "Technik Mechanik (K/M)  [rekrutacja online]",
      "company": "Apleona HSG Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-mechanik-k-m-rekrutacja-online_3372586.html#1b16b0fb89813537b5dcefaaac466ca8"
    },
    {
      "name": "Technik – Automatyk (K/M)  [rekrutacja online]",
      "company": "Apleona HSG Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-automatyk-k-m-rekrutacja-online_3378226.html#1b16b0fb89813537b5dcefaaac466ca8"
    },
    {
      "name": "Lekarza specjalista w radiologii i diagnostyki obrazowej - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/lekarza-specjalista-w-radiologii-i-diagnostyki-obrazowej-branza-medyczna_3378812.html#1b16b0fb89813537b5dcefaaac466ca8"
    }
  ],
  "91": [
    {
      "name": "Asystent projektanta w brany budowlano-konstrukcyjnej",
      "company": "Inter-Raf P.E.S. Polska Spka z ograniczon odpowiedzialnoci Spka Komandytowa ",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-w-branzy-budowlano-konstrukcyjnej-krakow,oferta,1000222836"
    },
    {
      "name": "Asystent /-ka Kierownika Projektu",
      "company": "Enervigo sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-kierownika-projektu-krakow,oferta,1000223118"
    },
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    },
    {
      "name": "Kierownik Robót Mechanicznych i Sanitarnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-mechanicznych-i-sanitarnych_3410188.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik budowy \\ Kierownik robót",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-kierownik-robot_3410224.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik budowy",
      "company": "Przedsiębiorstwo Remontowo-Budowlane AGAD Sp z.o.o",
      "urls": "https://www.praca.pl/kierownik-budowy_3366550.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Menadżer Kontraktów",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/menadzer-kontraktow_3364656.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Inżynier Działu Jakości ds. Fit out",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-dzialu-jakosci-ds-fit-out_3378846.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Projektant Mostowy",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-mostowy_3391892.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Asystent Projektanta Mostowego",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/asystent-projektanta-mostowego_3391896.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Brygadzista robót elektrycznych [rekrutacja online]",
      "company": "Synago Małgorzata Jankowska",
      "urls": "https://www.praca.pl/brygadzista-robot-elektrycznych-rekrutacja-online_3405072.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Pracownik do robót ogólnobudowlanych (także ekipa)",
      "company": "J. Cezar Sp. z o.o.",
      "urls": "https://www.praca.pl/pracownik-do-robot-ogolnobudowlanych-takze-ekipa_3376716.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik Budowy / Kierownik Kontraktu na budowie Oczyszczalni Ścieków",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-kierownik-kontraktu-na-budowie-oczyszczalni-sciekow_3376616.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Cieśla - Zbrojarz",
      "company": "Primost Południe Sp. z o.o.",
      "urls": "https://www.praca.pl/ciesla-zbrojarz_3419886.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik robót elektrycznych ",
      "company": "TRAKCJA PRKiI S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-elektrycznych_3372304.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik Robót",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/kierownik-robot_3338936.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik Robót Mostowych",
      "company": "Primost Południe Sp. z o.o.",
      "urls": "https://www.praca.pl/kierownik-robot-mostowych_3417020.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik robót ds. elektroenergetycznych (kolejowa sieć trakcyjna)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-ds-elektroenergetycznych-kolejowa-siec-trakcyjna_3417244.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik robót elektrycznych (infrastruktura miejska)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-elektrycznych-infrastruktura-miejska_3385134.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik Robót Sprężalniczych",
      "company": "BBR Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/kierownik-robot-sprezalniczych_3398774.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik robót drogowych i torowych (infrastruktura miejska)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-drogowych-i-torowych-infrastruktura-miejska_3385908.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Inżynier Działu Due Diligence",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-dzialu-due-diligence_3372768.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Mistrz Budowy",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/mistrz-budowy_3336942.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik robót branży elektrycznej",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-branzy-elektrycznej_3368676.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik Robót - sieć trakcyjna",
      "company": "TRAKCJA PRKiI S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-siec-trakcyjna_3383044.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik Robót Drogowych",
      "company": "GruntBudowa",
      "urls": "https://www.praca.pl/kierownik-robot-drogowych_3396248.html#11f7293a565ea6e3c1cf8f956026adf1"
    }
  ],
  "92": [
    {
      "name": "Drukarz / Specjalista do obsługi ploterów",
      "company": "Drops Print Sp. z o.o.",
      "urls": "https://www.praca.pl/drukarz-specjalista-do-obslugi-ploterow_3381552.html#8700aba4dd2cea5d16e8dd0e95cb8625"
    },
    {
      "name": "Stolarz meblowy / Operator CNC",
      "company": "Euronova Sp.z o.o. Sp.k.",
      "urls": "https://www.praca.pl/stolarz-meblowy-operator-cnc_3348166.html#8700aba4dd2cea5d16e8dd0e95cb8625"
    }
  ],
  "93": [
    {
      "name": "Inżynier Utrzymania Ruchu [rekrutacja online]",
      "company": "Moltton",
      "urls": "https://www.praca.pl/inzynier-utrzymania-ruchu-rekrutacja-online_3337244.html#70c8bdcb4dd39940089c496cad819ba8"
    },
    {
      "name": "Inżynier Utrzymania Ruchu – Nowe uruchomienia (mechanika lub automatyka)",
      "company": "Moltton",
      "urls": "https://www.praca.pl/inzynier-utrzymania-ruchu-nowe-uruchomienia-mechanika-lub-automatyka_3404300.html#70c8bdcb4dd39940089c496cad819ba8"
    },
    {
      "name": "Elektryk",
      "company": "Gi Group Sp z o.o.",
      "urls": "https://www.praca.pl/elektryk_3360022.html#70c8bdcb4dd39940089c496cad819ba8"
    },
    {
      "name": "Technik – Automatyk (K/M)  [rekrutacja online]",
      "company": "Apleona HSG Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-automatyk-k-m-rekrutacja-online_3378226.html#70c8bdcb4dd39940089c496cad819ba8"
    },
    {
      "name": "Inżynier Automatyk PLC",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-automatyk-plc_3339232.html#70c8bdcb4dd39940089c496cad819ba8"
    }
  ],
  "94": [
    {
      "name": "PROGRAMISTA SCADA/PLC",
      "company": "Areltec",
      "urls": "https://pl.indeed.com/viewjob?jk=0decd56c8a17e966&fccid=fdba018cd7bb7f9d&vjs=3"
    },
    {
      "name": "Inżynier Automatyk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=0f9e18031e6d937f&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Automatyk-Programista",
      "company": "",
      "urls": "Frapol"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=86eb220d2ea80d09&fccid=9c2047b7b01199b2&vjs=3",
      "company": "Senior Solar Engineer – Due Diligence",
      "urls": "The Green Recruitment Company"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=a4362774ce0a52d4&fccid=55ab05b56eddf8a9&vjs=3",
      "company": "C++ Software Developer [online recruitment]",
      "urls": "FEV Polska sp. z.o.o."
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=52ce9e669f910ec9&fccid=55e92ccd2de02ad4&vjs=3",
      "company": "Software Automation Engineer",
      "urls": "SKELIA"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=b331cc71439dbe8b&fccid=4b7f4b3718395175&vjs=3",
      "company": "xxx",
      "urls": "95"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "Solid Security Sp. z o.o.",
      "urls": "https://www.praca.pl/administrator-systemow-linux_3333998.html#d9a9fa3f92e7917e050de2a76db4fad0"
    },
    {
      "name": "Virtual Platform Systems Administrator",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/virtual-platform-systems-administrator_3368708.html#d9a9fa3f92e7917e050de2a76db4fad0"
    }
  ],
  "96": [
    {
      "name": "Investment Operations Officer ",
      "company": "Antal International Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/investment-operations-officer-krakow,oferta,1000266489"
    },
    {
      "name": "Sta z Lwem w Sieci Korporacyjnej",
      "company": "ING Bank lski S.A.",
      "urls": "https://www.pracuj.pl/praca/staz-z-lwem-w-sieci-korporacyjnej-krakow,oferta,1000262894"
    },
    {
      "name": "Securities Operations Junior Analyst",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/securities-operations-junior-analyst-krakow,oferta,1000227196"
    },
    {
      "name": "Senior Financial Accountant",
      "company": "Network eG",
      "urls": "https://www.pracuj.pl/praca/senior-financial-accountant-krakow,oferta,1000233731"
    },
    {
      "name": "Sta z Lwem w Sieci Detalicznej - edycja letnia",
      "company": "ING Bank lski S.A.",
      "urls": "https://www.pracuj.pl/praca/staz-z-lwem-w-sieci-detalicznej-edycja-letnia-krakow,oferta,1000258945"
    },
    {
      "name": "Accounts Payable Associate - Junior",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/accounts-payable-associate-junior-krakow,oferta,1000197328"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3342178.html#a9c91d76c72a3acb877897b0b7a390a3"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#a9c91d76c72a3acb877897b0b7a390a3"
    },
    {
      "name": "Doradca Klienta",
      "company": "Credit Agricole Bank Polska S.A.",
      "urls": "https://www.praca.pl/doradca-klienta_3326722.html#a9c91d76c72a3acb877897b0b7a390a3"
    }
  ],
  "97": [
    {
      "name": "Asystentka Dyrektora Zarzdzajcego",
      "company": "DACHY POLSKI sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-dyrektora-zarzadzajacego-krakow,oferta,500036709"
    },
    {
      "name": "Asystent/ka Zarzdu",
      "company": "MKS Cracovia Sportowa Spka Akcyjna",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-zarzadu-krakow,oferta,1000234174"
    },
    {
      "name": "Asystent/ka Zarzdu z j. angielskim",
      "company": "W.KRUK S.A.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-zarzadu-z-j-angielskim-krakow,oferta,1000256472"
    },
    {
      "name": "Asystent Biznesowy - Business Assistant (MBA/MS/MA)",
      "company": "Humtap Inc.",
      "urls": "https://www.pracuj.pl/praca/asystent-biznesowy-business-assistant-mba-ms-ma-krakow,oferta,1000201645"
    }
  ],
  "98": [],
  "99": [],
  "100": [
    {
      "name": "Fullstack Java Developer (Spring, Angular)",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=9ea1966a6d7e2882&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "101": [
    {
      "name": "Konstruktor Elektronik",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "xxx",
      "urls": "102"
    },
    {
      "name": "Trader / Specjalista ds. rynku energii i gazu",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/trader-specjalista-ds-rynku-energii-i-gazu_3416592.html#13bb3b6ed16456dfdeb65e09556f884c"
    },
    {
      "name": "Specjalista ds. układów kogeneracyjnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-ukladow-kogeneracyjnych_3386364.html#13bb3b6ed16456dfdeb65e09556f884c"
    }
  ],
  "103": [],
  "104": [
    {
      "name": "Working Student - FPGA Algorithm Modeling Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-algorithm-modeling-engineer-krakow,oferta,1000256972"
    },
    {
      "name": "Working Student - FPGA Design Verification Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-design-verification-engineer-krakow,oferta,1000256977"
    },
    {
      "name": "FPGA Design Verification Engineer  Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-design-verification-engineer-working-student-krakow,oferta,1000197226"
    },
    {
      "name": "FPGA DSP Designer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/fpga-dsp-designer-rekrutacja-online_3393862.html#804d2504dad072a0c45d3924562ce191"
    }
  ],
  "105": [],
  "106": [],
  "107": [],
  "108": [],
  "109": [],
  "110": [
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#8c7f6c4ecbdac056738f9d6526320c31"
    },
    {
      "name": "Cloud Oriented Network Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-oriented-network-architect_3409108.html#8c7f6c4ecbdac056738f9d6526320c31"
    },
    {
      "name": "Projektant Mostowy",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-mostowy_3391892.html#8c7f6c4ecbdac056738f9d6526320c31"
    },
    {
      "name": "Architekt",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/architekt_3405096.html#8c7f6c4ecbdac056738f9d6526320c31"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://www.praca.pl/administrator-it-specjalista-it_3399002.html#8c7f6c4ecbdac056738f9d6526320c31"
    },
    {
      "name": "Azure Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/azure-architect_3415422.html#8c7f6c4ecbdac056738f9d6526320c31"
    },
    {
      "name": "Integrated Catchment Modeller (InfoWorks ICM)",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/integrated-catchment-modeller-infoworks-icm_3396890.html#8c7f6c4ecbdac056738f9d6526320c31"
    }
  ],
  "111": [
    {
      "name": "Menadżer IT plus eCommerce",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcl7SaLP_MpaOcC0R1fREk1o9tOKV_PSlZgoYyESvbDEc98tycvB0Ry408scwOFYAiwNaCggxKhWhkZhVFIaAhg4rgnpOSlBm8qI_Fmy4BHWLtsF1OJC9efiDAfaUAmQ62Gm9lGZZdZ6Td7s-gFDNfLy96pV5G1KK9IP8QhHsGhRoQrm7YJ8eL8BJ7X_aJ1zjx1o3kJ74eWcgM4wIAeUG6ACaTS2FAT3IEx2xCGLiGCE7o-IeotLvV6lFLBT0tZlwiJtKLRgDGMFMLYrJKSkvQ-ZIqpknF7nHAjpRGHeQCPBUa874x0SueMnI3_ZpMMJVeFFwAkGB2-3kt7o4OEwQl_RexbazbV8Y8AJEY5xENtfbF0kOCgybTebVrF8Ab2va0hduF9FTqrdLeoaPoCZs6-fwpQNxQx4X-lugu8_a0qCGNjE1pAUPpplfQWQq7_57mIkWZto5y_T5BF5D_bMzYgDg7BorCCSr1fQ6KJ6-IGlQ3_WiZ1syGaJcWQOUEHP-eIsn7LvwVNBCl2bYo5Z2ru5K8jcP9IjKoIGzHrSGZZHn4dVAMt-G0jxZ7kBzqNxMuZpG2mh1UuH-PSlmuBOhpfRATi7S1tvV--HlEUDPb3h44qkFzuand0qbvNkNGku6ynPe9ogAlBbI2NqVXvsZryVhCUYLgYaTQ=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Kierownik Zmiany",
      "company": "FIEGE Logistik Stiftung & Co. KG",
      "urls": "https://pl.indeed.com/viewjob?jk=2de8f5b4cc3c48c3&fccid=c21abee0de715f4a&vjs=3"
    },
    {
      "name": "Kierownik Zespołu Marketingu",
      "company": "Talent IN sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=c505ca6b23914db1&fccid=49823f2949651ec8&vjs=3"
    },
    {
      "name": "Kierownik projektów marketingowych",
      "company": "AKRA Polska",
      "urls": "https://pl.indeed.com/viewjob?/Akra-Polska/jobs/Kierownik-Projekt%C3%B3w-Marketingowych-89bc7aa040bf07a8?fccid=d270f52b1f6ccba6&vjs=3"
    },
    {
      "name": "Product Manager (biura rachunkowe)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=692ebe743f5a7a7a&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Kierownik projektu IT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=fc4d070c679ac3ee&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Menadżer IT plus eCommerce NOWA",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=588a10cfd05ac937&fccid=503ed6c94c8786f6&vjs=3"
    },
    {
      "name": "Kierownik Zespołu Handlowego - rekrutacja prowadzona zdalnie",
      "company": "Futuriti",
      "urls": "https://pl.indeed.com/viewjob?jk=8199866ac6429e4d&fccid=14f634228675fb3a&vjs=3"
    },
    {
      "name": "Cloud Product Manager",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=593d5b3ac0507a69&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Kierownik ds. rozwoju biznesu IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=9406f6cc7a335725&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista C embedded",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com/viewjob?jk=3cc3f8784b0e4603&fccid=45c7d019cc96de8e&vjs=3"
    }
  ],
  "112": [
    {
      "name": "Modszy Projekt Manager",
      "company": "JANTAR Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-projekt-manager-krakow,oferta,1000263878"
    },
    {
      "name": "IT Project Manager [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/it-project-manager-rekrutacja-online_3407364.html#8340b7c0fa56d555f2ad6e3d20e2a4a4"
    },
    {
      "name": "Senior Subject Matter Expert – VDI & SRA [rekrutacja online]",
      "company": "ING Tech Poland",
      "urls": "https://www.praca.pl/senior-subject-matter-expert-vdi-sra-rekrutacja-online_3422830.html#8340b7c0fa56d555f2ad6e3d20e2a4a4"
    },
    {
      "name": "Project Management Officer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/project-management-officer_3388214.html#8340b7c0fa56d555f2ad6e3d20e2a4a4"
    },
    {
      "name": "Project Accounting Manager [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/project-accounting-manager-rekrutacja-online_3394348.html#8340b7c0fa56d555f2ad6e3d20e2a4a4"
    }
  ],
  "113": [
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "Working Student - FPGA Algorithm Modeling Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-algorithm-modeling-engineer-krakow,oferta,1000256972"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "Junior SQL Developer",
      "company": "AG TEST HR Spka z ograniczon odpowiedzialnoci sp.k.",
      "urls": "https://www.pracuj.pl/praca/junior-sql-developer-krakow,oferta,1000194416"
    },
    {
      "name": "Praktykant Salesforce  get the HOT Salesforce skill",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,7468135"
    },
    {
      "name": "Praktykant/ Junior - Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,7468131"
    }
  ],
  "114": [
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "Working Student - FPGA Algorithm Modeling Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-algorithm-modeling-engineer-krakow,oferta,1000256972"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "Junior SQL Developer",
      "company": "AG TEST HR Spka z ograniczon odpowiedzialnoci sp.k.",
      "urls": "https://www.pracuj.pl/praca/junior-sql-developer-krakow,oferta,1000194416"
    },
    {
      "name": "Praktykant Salesforce  get the HOT Salesforce skill",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,7468135"
    },
    {
      "name": "Praktykant/ Junior - Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,7468131"
    },
    {
      "name": " C/C++ Embedded Senior Software Developer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/c-c-embedded-senior-software-developer-rekrutacja-online_3415764.html#ee277a6c055d2b7dabe1e040f80c0613"
    }
  ],
  "115": [
    {
      "name": "Modszy specjalista ds. integracji danych",
      "company": "Maspex",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-integracji-danych-krakow-okolice,oferta,1000196270"
    },
    {
      "name": " C/C++ Embedded Senior Software Developer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/c-c-embedded-senior-software-developer-rekrutacja-online_3415764.html#777869ed96b80987a8e46258f867cca3"
    }
  ],
  "116": [
    {
      "name": "specjalista/starszy specjalista w Biurze Strategii i Rozwoju",
      "company": "Politechnika Krakowska",
      "urls": "https://pl.indeed.com/viewjob?jk=a1e83735c9c23ddc&fccid=dbf078d8db93f693&vjs=3"
    },
    {
      "name": "Starszy Specjalista ds. Rekrutacji",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=c842a1edfae83a3f&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Senior IT Recruiter/ Starszy Specjalista ds. Rekrutacji IT",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=16254ea575b179ad&fccid=062f71e131e87cf0&vjs=3"
    }
  ],
  "117": [
    {
      "name": "Platform Operations Technician (III shift)",
      "company": "AKAMAI TECHNOLOGIES POLAND SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/platform-operations-technician-iii-shift-krakow,oferta,7521969"
    },
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Junior Customer Support",
      "company": "Reality Games Polska sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-customer-support-krakow,oferta,1000238785"
    },
    {
      "name": "Investment Operations Officer ",
      "company": "Antal International Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/investment-operations-officer-krakow,oferta,1000266489"
    },
    {
      "name": "Modszy Specjalista ds. obsugi Klienta",
      "company": "FarmaProm Polska Sp. z o.o. Sp. K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-krakow,oferta,1000259564"
    },
    {
      "name": "Support Specialist with Dutch",
      "company": "Skelia Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/support-specialist-with-dutch-krakow,oferta,7508819"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "(FCR Ops) Assistant Manager - FCC Operations with German",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fcr-ops-assistant-manager-fcc-operations-with-german-krakow,oferta,1000260227"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "Working Student - FPGA Algorithm Modeling Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-algorithm-modeling-engineer-krakow,oferta,1000256972"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Modszy Specjalista ds. Technicznej Obsugi Klienta",
      "company": "nazwa.pl Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-technicznej-obslugi-klienta-krakow,oferta,1000257596"
    },
    {
      "name": "RF Test Engineer - Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/rf-test-engineer-working-student-krakow,oferta,1000197222"
    },
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "Modszy Specjalista Serwisu",
      "company": "IMS r&d Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-serwisu-krakow,oferta,1000218461"
    },
    {
      "name": "Power Grids  Internship  Technical Support",
      "company": "ABB PG BUSINESS SERVICES SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/power-grids-internship-technical-support-krakow,oferta,1000247591"
    },
    {
      "name": "Modszy Specjalista ds. Helpdesk",
      "company": "Columbus Energy S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-helpdesk-krakow,oferta,1000204350"
    },
    {
      "name": "Junior Quality Engineer",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-quality-engineer-krakow,oferta,7477572"
    },
    {
      "name": "Junior Software Engineer Java",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-software-engineer-java-krakow,oferta,1000190736"
    },
    {
      "name": "Junior SQL Developer",
      "company": "AG TEST HR Spka z ograniczon odpowiedzialnoci sp.k.",
      "urls": "https://www.pracuj.pl/praca/junior-sql-developer-krakow,oferta,1000194416"
    },
    {
      "name": "Modszy Specjalista ds. Technicznego Wsparcia Sprzeday",
      "company": "BAKOTECH Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-technicznego-wsparcia-sprzedazy-krakow,oferta,7471445"
    },
    {
      "name": "Modszy specjalista ds. integracji danych",
      "company": "Maspex",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-integracji-danych-krakow-okolice,oferta,1000196270"
    },
    {
      "name": "Praktykant Salesforce  get the HOT Salesforce skill",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,7468135"
    },
    {
      "name": "Praktykant/ Junior - Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,7468131"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/it-support-analyst_3401260.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Analyst with German & English ",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-german-english_3341804.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Specialist (Senior Analyst) (L2 Support) with English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-specialist-senior-analyst-l2-support-with-english_3389752.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Freelancer - Specjalista ds. Rekrutacji IT",
      "company": "Power Media",
      "urls": "https://www.praca.pl/freelancer-specjalista-ds-rekrutacji-it_3405216.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Digital Workplace Consultant ",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/digital-workplace-consultant_3406740.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Monitoring Architect ",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/monitoring-architect_3406776.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Service Management SACM Consultant",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/service-management-sacm-consultant_3406630.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://www.praca.pl/administrator-it-specjalista-it_3399002.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Analyst with Italian & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-italian-english_3376422.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Analyst with French & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-french-english_3376426.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Senior IT Rekruter / Starszy Specjalista ds. Rekrutacji IT",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-it-rekruter-starszy-specjalista-ds-rekrutacji-it_3357798.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Specjalista IT [rekrutacja prowadzona online]",
      "company": "ZIKO Apteka Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-it-rekrutacja-prowadzona-online_3356916.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Analyst with Dutch and English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-dutch-and-english_3339228.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Azure Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/azure-architect_3415422.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Specjalista ds. Wdrożeń ",
      "company": "Konica Minolta Business Solutions Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen_3373040.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Support Analyst with Hungarian & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-support-analyst-with-hungarian-english_3322704.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Support Analyst with Romanian & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-support-analyst-with-romanian-english_3323824.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Support Analyst with Czech & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-support-analyst-with-czech-english_3323834.html#53bd8c377d38166ec24900205dfb63ba"
    }
  ],
  "118": [],
  "119": [],
  "120": [
    {
      "name": "Monter / Serwisant - instalacji z zakresu telekomunikacji",
      "company": "OPTIMA",
      "urls": "https://pl.indeed.com/viewjob?jk=b8bb773291188d51&fccid=5cdf4ecfa8db6b9c&vjs=3"
    }
  ],
  "121": [],
  "122": [
    {
      "name": "Mechanik / Elektronik / Specjalista IT",
      "company": "Diskus Polska sp. z o.o.",
      "urls": "https://www.praca.pl/mechanik-elektronik-specjalista-it_3386324.html#3b40509fce3183c1f28d4a4a26e15118"
    },
    {
      "name": "Elektryk",
      "company": "Gi Group Sp z o.o.",
      "urls": "https://www.praca.pl/elektryk_3360022.html#3b40509fce3183c1f28d4a4a26e15118"
    },
    {
      "name": "Inżynier serwisowy sprzętu medycznego",
      "company": "P.P.H.U. BOR-POL",
      "urls": "https://www.praca.pl/inzynier-serwisowy-sprzetu-medycznego_3385800.html#3b40509fce3183c1f28d4a4a26e15118"
    }
  ],
  "123": [],
  "124": [
    {
      "name": "Programista Embedded",
      "company": "Green Cell",
      "urls": "https://pl.indeed.com/viewjob?jk=8c1525665ce0cb01&fccid=7520988c97ff0996&vjs=3"
    },
    {
      "name": "Programista Embedded",
      "company": "UNICARD",
      "urls": "https://pl.indeed.com/viewjob?jk=282e7cff0c77523e&fccid=6ec19a37860139d8&vjs=3"
    },
    {
      "name": "Programista embedded IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=3cfd39e2b6e9f689&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista Embedded C/C++",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=9b169d1843e0fb48&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista aplikacji mobilnych iOS - IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=93b24dfedaf9c272&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista aplikacji mobilnych Android- IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=0066fb4d9d8fdbc9&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Senior Embedded Software Engineer",
      "company": "Nordic Semiconductor Poland Sp.zo.o",
      "urls": "https://pl.indeed.com/viewjob?jk=4d978fdb2ed382ab&fccid=cf2e34e68d284cb8&vjs=3"
    }
  ],
  "125": [],
  "126": [],
  "127": [
    {
      "name": "Mechanik / Elektronik / Specjalista IT",
      "company": "Diskus Polska sp. z o.o.",
      "urls": "https://www.praca.pl/mechanik-elektronik-specjalista-it_3386324.html#070263672c8f06cd54bce8dd97c2493e"
    }
  ],
  "128": [],
  "129": [
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#c6e7b152e38eedf796af0676ce8eadd2"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#c6e7b152e38eedf796af0676ce8eadd2"
    }
  ],
  "130": [],
  "131": [],
  "132": [],
  "133": [
    {
      "name": "Dokumentalista urządzeń medycznych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=462582c3fee8f4f4&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Tester urządzeń medycznych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=a0cad3e097038a81&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Konstruktor Elektronik",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Inspektor ochrony przeciwpożarowej",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=719fbd25dbd10ed9&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista Embedded C/C++",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=9b169d1843e0fb48&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "134": [],
  "135": [
    {
      "name": "Programista Embedded",
      "company": "UNICARD",
      "urls": "https://pl.indeed.com/viewjob?jk=282e7cff0c77523e&fccid=6ec19a37860139d8&vjs=3"
    }
  ],
  "136": [
    {
      "name": "PROJEKTANT INSTALACJI FOTOWOLTAICZNEJ",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=9e39e1810c029b8a&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Projektant w branży elektronergetycznej",
      "company": "MLElectric Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?/Mlelectric-Sp.-z-o.o./jobs/Projektant-W-Bran%C5%BCy-Elektronergetycznej-afc44b00e11824a2?fccid=19f4a348bbabfcc0&vjs=3"
    },
    {
      "name": "Projektant",
      "company": "Grupa Projekt",
      "urls": "https://pl.indeed.com/viewjob?jk=e16befb455fe6d1e&fccid=37607da95fc8dee9&vjs=3"
    },
    {
      "name": "Inżynier/ Elektryk Projektant E-PLAN",
      "company": "Axamo Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=494a424cfbfab4d1&fccid=f86175c7ba708305&vjs=3"
    }
  ],
  "137": [
    {
      "name": "Asystent Projektanta w brany elektrycznej",
      "company": "Inter-Raf P.E.S. Polska Spka z ograniczon odpowiedzialnoci Spka Komandytowa ",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-w-branzy-elektrycznej-krakow,oferta,1000222835"
    }
  ],
  "138": [
    {
      "name": "Konstruktor Elektronik",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "139": [
    {
      "name": "Elektryk / Elektronik",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=e24a25c607b2349d&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Elektromonter sieci SN i nN w Jednostce Terenowej Nowa Huta",
      "company": "TAURON Dystrybucja S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=94dca86b723a4f6e&fccid=5a376901cebad8b2&vjs=3"
    },
    {
      "name": "Inżynier Budowy - Mistrz budowy",
      "company": "Przedsiębiorstwo Robót Inżynieryjnych INKOP",
      "urls": "https://pl.indeed.com/viewjob?jk=1d3dd98638ee466d&fccid=a695411d8904b8ca&vjs=3"
    },
    {
      "name": "Elektryk – monter instalacji",
      "company": "DC Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=0761574bb77f2628&fccid=102922c917c5bfe4&vjs=3"
    },
    {
      "name": "Elektromonter instalacji fotowoltaicznych",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=c2a6d2d934717452&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Technik / Inżynier serwisu",
      "company": "SUPO Cerber Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=8c2c19b653aa10a0&fccid=f4a1a5f8d716fe58&vjs=3"
    },
    {
      "name": "Pomiarowiec - Kierowca kat. B",
      "company": "Sanpro Synergy Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=4fd6f4259177a4fe&fccid=6af571eef33d6b4d&vjs=3"
    },
    {
      "name": "Monter instalacji fotowoltaicznych",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=f86bb269d7d12e01&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "STARSZY ASYSTENT PROJEKTANTA BRANŻY MOSTOWEJ",
      "company": "REJPROJECT",
      "urls": "https://pl.indeed.com/viewjob?jk=fafe0e31168e602b&fccid=7606770ec5e96388&vjs=3"
    },
    {
      "name": "Szlifierz",
      "company": "Bamet",
      "urls": "https://pl.indeed.com/viewjob?jk=146cd26516c29922&fccid=55f842c9b66dbe5b&vjs=3"
    },
    {
      "name": "Specjalista ds. światłowodowych technik pomiarowych",
      "company": "SHM System Sp. z o.o. Sp. kom.",
      "urls": "https://pl.indeed.com/viewjob?jk=c6990eca8feb3614&fccid=0d0b93e7fe8514c2&vjs=3"
    },
    {
      "name": "Monter / Serwisant - instalacji z zakresu telekomunikacji",
      "company": "OPTIMA",
      "urls": "https://pl.indeed.com/viewjob?jk=b8bb773291188d51&fccid=5cdf4ecfa8db6b9c&vjs=3"
    }
  ],
  "140": [
    {
      "name": "Kierownik projektu IT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=fc4d070c679ac3ee&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "141": [
    {
      "name": "Modszy Inynier",
      "company": "Gegenbauer Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-inzynier-krakow,oferta,1000267545"
    },
    {
      "name": "Asystent Projektanta w brany elektrycznej",
      "company": "Inter-Raf P.E.S. Polska Spka z ograniczon odpowiedzialnoci Spka Komandytowa ",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-w-branzy-elektrycznej-krakow,oferta,1000222835"
    }
  ],
  "142": [],
  "143": [
    {
      "name": "Specjalista ds. Zarządzania Systemami Informatycznymi",
      "company": "EmiTel S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=6e3c42055e6c585a&fccid=2b7614ab81f2843c&vjs=3"
    }
  ],
  "144": [
    {
      "name": "React Native Developer [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/react-native-developer-rekrutacja-online_3383578.html#46c75effafa1661a16731f20d88d3756"
    }
  ],
  "145": [
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Praktykant Salesforce  get the HOT Salesforce skill",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,7468135"
    },
    {
      "name": "Fullstack .NET Developer (Regular / Senior)",
      "company": "Power Media",
      "urls": "https://www.praca.pl/fullstack-net-developer-regular-senior_3422794.html#01a3e5422ba1d5a5567c06a9f205565b"
    },
    {
      "name": "C#/ .NET Developer",
      "company": "KPMG",
      "urls": "https://www.praca.pl/c-net-developer_3368360.html#01a3e5422ba1d5a5567c06a9f205565b"
    },
    {
      "name": "Senior .NET Developer",
      "company": "KPMG",
      "urls": "https://www.praca.pl/senior-net-developer_3368358.html#01a3e5422ba1d5a5567c06a9f205565b"
    },
    {
      "name": "Angular Developer (Junior/Mid)",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/angular-developer-junior-mid_3420188.html#01a3e5422ba1d5a5567c06a9f205565b"
    },
    {
      "name": "Projektant Java [rekrutacja online]",
      "company": "Asseco Poland S.A.",
      "urls": "https://www.praca.pl/projektant-java-rekrutacja-online_3330020.html#01a3e5422ba1d5a5567c06a9f205565b"
    },
    {
      "name": "Python Developer (Django + Django Rest Framework)",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/python-developer-django-django-rest-framework_3372540.html#01a3e5422ba1d5a5567c06a9f205565b"
    },
    {
      "name": "Java Developer (Mid)",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/java-developer-mid_3396308.html#01a3e5422ba1d5a5567c06a9f205565b"
    }
  ],
  "146": [],
  "147": [
    {
      "name": "Modszy Inynier",
      "company": "Gegenbauer Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-inzynier-krakow,oferta,1000267545"
    },
    {
      "name": "Asystent Projektanta w brany elektrycznej",
      "company": "Inter-Raf P.E.S. Polska Spka z ograniczon odpowiedzialnoci Spka Komandytowa ",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-w-branzy-elektrycznej-krakow,oferta,1000222835"
    }
  ],
  "148": [],
  "149": [
    {
      "name": "Dokumentalista urządzeń medycznych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=462582c3fee8f4f4&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Tester urządzeń medycznych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=a0cad3e097038a81&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Konstruktor Elektronik",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Product Implementation Specialist",
      "company": "Dotlinkers",
      "urls": "https://pl.indeed.com/viewjob?jk=2baf7071b198aece&fccid=c62351057abf05f6&vjs=3"
    },
    {
      "name": "Front-end Developer",
      "company": "Dotlinkers",
      "urls": "https://pl.indeed.com/viewjob?jk=984df2d96643e03f&fccid=c62351057abf05f6&vjs=3"
    },
    {
      "name": "Programista Embedded C/C++",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=9b169d1843e0fb48&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Java Developer",
      "company": "Dotlinkers",
      "urls": "https://pl.indeed.com/viewjob?jk=e456367b46634ea3&fccid=c62351057abf05f6&vjs=3"
    }
  ],
  "150": [
    {
      "name": "Kierownik Projektu (Contact Center)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=77d3d8045b8d70e3&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "151": [
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#9571477933dca269f999e1ac25c31844"
    },
    {
      "name": "Asystent Projektanta Mostowego",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/asystent-projektanta-mostowego_3391896.html#9571477933dca269f999e1ac25c31844"
    },
    {
      "name": "Projektant Mostowy",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-mostowy_3391892.html#9571477933dca269f999e1ac25c31844"
    },
    {
      "name": "Architekt",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/architekt_3405096.html#9571477933dca269f999e1ac25c31844"
    },
    {
      "name": "Integrated Catchment Modeller (InfoWorks ICM)",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/integrated-catchment-modeller-infoworks-icm_3396890.html#9571477933dca269f999e1ac25c31844"
    }
  ],
  "152": [],
  "153": [
    {
      "name": "Cloud Oriented Network Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-oriented-network-architect_3409108.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Network Solution Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/network-solution-architect_3406634.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://www.praca.pl/administrator-it-specjalista-it_3399002.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Cloud Database Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-database-architect_3415430.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Specjalista IT [rekrutacja prowadzona online]",
      "company": "ZIKO Apteka Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-it-rekrutacja-prowadzona-online_3356916.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Administrator Sieci",
      "company": "Solid Security Sp. z o.o.",
      "urls": "https://www.praca.pl/administrator-sieci_3334000.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "Solid Security Sp. z o.o.",
      "urls": "https://www.praca.pl/administrator-systemow-linux_3333998.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Virtual Platform Systems Administrator",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/virtual-platform-systems-administrator_3368708.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Data Center Engineer",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/data-center-engineer_3347770.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Security / Network Engineer",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/security-network-engineer_3326828.html#571e3ad5364317747c2506f7998d9538"
    }
  ],
  "154": [
    {
      "name": "Specjalista ds. bezpieczeństwa IT - Analityk",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=47fcb3de2f8ac0e5&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Senior .NET Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=38cbe55b7abe8e57&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Linux Platform Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=116274200f0a0fb2&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "155": [],
  "156": [
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
    },
    {
      "name": "Projektant Instalacji HVAC",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-instalacji-hvac_3425568.html#c7c21f31a4cbc16c9bfeb57869d5ab02"
    },
    {
      "name": "Projektant instalacji elektrycznych",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-instalacji-elektrycznych_3425564.html#c7c21f31a4cbc16c9bfeb57869d5ab02"
    }
  ],
  "157": [
    {
      "name": "Junior Medical Data Analyst",
      "company": "Cardiomatics sp.z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-medical-data-analyst-krakow,oferta,1000238986"
    },
    {
      "name": "Data Management Junior Analyst with Spanish",
      "company": "PepsiCo GBS Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/data-management-junior-analyst-with-spanish-krakow,oferta,1000220916"
    },
    {
      "name": "Video Content Analyst with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/video-content-analyst-with-french_3422886.html#930e3ab82934b374718d73e23d781eb3"
    }
  ],
  "158": [
    {
      "name": "Junior Graphic Designer",
      "company": "Morele.net Sp. z o.o. ",
      "urls": "https://www.pracuj.pl/praca/junior-graphic-designer-krakow,oferta,1000257192"
    }
  ],
  "159": [
    {
      "name": "Unity Developer",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIdmL4h2EI-6MRw8RO0nGTpT8vVegrXL598BCXOuZn_EVvK3v4yyJTLHuvbPXyZqzaVcSn0l4WMoPN9P4S-o6u5Ys8pmf8MRxcXA84hqDd6po6K4UnQr6NMvR5MWOkhftIYiNsaKWMd0xb0b8BXewf5L_Nk0USj0RgRgjEoSyKZXVnmW4ixLu2CTxjymft3v6gykyuZzPXAZYnEigpl-9JkmrdSYGjcMcnhOwc3JoqUaxCVFZ42LpHbxJw6ha24uF8plQ7wS5BZz8ZGegR5uM69zDtMMGLpyVJR3w3mPE-ruj2rwkpb_vhpbfgo-9FsgIOsn_2Vg1RcDveYAbQTC6JtYBtl_s-Ue3pOQB1d8I1sUmr-lm-dylQbHMUlN_ifsVyn-zW_QgO3prIByF61A5F1JgboVBK66ZmuGzA_jmJR-vOZR2UNFuiURDYxn_nak9uX2VvWhzB1oBxUgL0Q3OHxbcYZh_Z4Q5vfPyA3Sf02ojGjlHG31zD6cIWeaevmWXmiwmRt7ixuoTkcugTy3GPfYz83lFe0DvTPWjKyANAB8d66CFjO1GOGruDgmwIqF1ngAATpXpbVjQnIBzmPuHp23KLRg6UBRR42WZ5begRUVUN7f1gNtAVAV&p=0&fvj=0&vjs=3"
    },
    {
      "name": "C++ Developer",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIdmL4h2EI-6MQT2MYWoVlecMS8xnsoteCGiEtSz-foVW7HkJMHDsENdzpVrc7Li9PFtd06QpKc6HANdp6RnYHdsAtIhgFPThFSnnVT4TZYHfqEJ2YWXrHkHIisN7W0YCe3bCOlXj01GD2iAGRvyLm7ZyV49Q-RusDuN8EP6FT1vXPHvBabpC5StVQdNsez2TNnmKWOcwh1ZMk87U29OglqpUYNzg5T2ZGl6GrqlsI2kmAJIXgP0BV757LwR6VNxNYk-iHAVy4wGaGYB3En1rWD2ei93apDt0tUWbIYC6-Zz09s6PQAWIoYpgMX8j_N_3JRlPgjQpT1wKLxuoqmZgcPG8t88gGBzhtRupcNNCPKeX8v_zRiq4TAzOUKVoE47OzOf2KyaL0Ll5yyy2CaFapMZc8p5Ya9GU486lgRuT6BYfw42RVahekYg8QvV-05NMlPnDCxGFUWZBym6yvE1Sx90DfHFpJ6Txgxr81yGZeZNLNMFZeB_98VjreMRykqPHeesD84gSdCPI8ngrYhwJ21PwUSfxzdPy5GHHJPKojBcm_f_5-TboFPX60jXu6E7ezwxn-unQYFfcy9FA-48lsZT3y5Zk2k1Ke_h02iQYk_e-uEwusXIbkwq&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Senior 2D Artist",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIe2p3w8AVQ8AF1CNKCocOR5N61pW2gIho3cmGXMIgrg--EuYi0bCDiJu02KGoEmjdKUh39RPm4vQK5LjwhCZvlg7CTS930RcY1y_xOIbLiehnzVlIZxM0X4pVID3SGz3T4nQQukGmlIUcYL-4ofs4QLk_6ejqUCEoek62WGEXOQ1uWw6H7_MXnBhKgIntkehd3-9NyDSVfg3kMsBL8Aw94-WuHpYsPzjpfXSgigj6HBbGXcVfJ3l3R7HT4R7S3pLBHGoZK8A0P17kDUESl1899Wfm6-OJyAXfnj5XC8rWc2zoOCohR7_-j_muHVUjwU8o6Gc-o3rkya5W-4uZTCSgvzCjxfi932ldkvhUyN28X1aKteAzgwww2aRypvMYXtwA-RtoRFB-liX-S540Q4wZwxJ2kRBVxf4GvonAgcKVU2vkJWlX8iYdXgZbgXK-84667Ey6C_4_Tp09KIJs_q00QkAJ_Ix4B1kB3LEpwwkbSryu6mDICiRS7K3BDH2-WIrj7Uv77d54Ovjtin23C89lwt3V90-fMC9S6cqaXqtprKRw60IHbYeuYGqV3MjwPS52wFjZbdbLrbccrBncXmULDg2ILNcdQb1IeHrHyTMxB7R8WJu_zC6xSS&p=2&fvj=0&vjs=3"
    },
    {
      "name": "Junior Unity Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=c0237ee5350d7803&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "TEAM",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com/viewjob?jk=c9c4c99adb4009f6&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "JavaScript Game Developer",
      "company": "Yggdrasil Gaming Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=f368832ab03e1c78&fccid=fe29cc37d9c271c4&vjs=3"
    },
    {
      "name": "Unity 3D Developer",
      "company": "Rage Quit Games",
      "urls": "https://pl.indeed.com/viewjob?jk=146c2eadc80a4a13&fccid=bccdcb935f65afcb&vjs=3"
    },
    {
      "name": "Junior Android Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=59fe3f5ccaaf8bf0&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Junior IOS Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=23bdec6af0967160&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Scala Developer",
      "company": "Two Up Digital",
      "urls": "https://pl.indeed.com/viewjob?jk=a243de175a674bb1&fccid=50829994782ef656&vjs=3"
    },
    {
      "name": "Praca w dziale IT!",
      "company": "TalentU",
      "urls": "https://pl.indeed.com/viewjob?jk=fabbb38bf2e16007&fccid=ca5f1e138a78fd90&vjs=3"
    },
    {
      "name": "Game Mathematician",
      "company": "Yggdrasil Gaming Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=cb0548e1fb1c159a&fccid=fe29cc37d9c271c4&vjs=3"
    },
    {
      "name": "Junior Ruby on Rails Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=3ee2b30b299dfdcc&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Technical Writer",
      "company": "Nordic Semiconductor",
      "urls": "https://pl.indeed.com/viewjob?jk=f8246d3814b02998&fccid=d468e34edcbad731&vjs=3"
    },
    {
      "name": "Unity Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=0e322586897ab54a&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Java Game Developer",
      "company": "NetEnt",
      "urls": "https://pl.indeed.com/viewjob?jk=23714aef762b6f70&fccid=594e59f84614d19c&vjs=3"
    },
    {
      "name": "Fullstack Developer - Portfolio Team",
      "company": "NetEnt",
      "urls": "https://pl.indeed.com/viewjob?jk=4b37a6dde9f7ba3e&fccid=594e59f84614d19c&vjs=3"
    },
    {
      "name": "UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=be38b941f8b99086&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Senior Unity Developer",
      "company": "Gamesture Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=1ce181e40e31f0f2&fccid=e37c997fadbffaa1&vjs=3"
    },
    {
      "name": "Senior Unity Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=61579c27a6a09935&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Rendering Software Developer",
      "company": "Sperasoft",
      "urls": "https://pl.indeed.com/viewjob?jk=fbe55a5ea903f97a&fccid=72575fa3d1ce8c23&vjs=3"
    },
    {
      "name": "Backend Developer",
      "company": "Kalamba Games",
      "urls": "https://pl.indeed.com/viewjob?jk=3fb2dc37ce9addc8&fccid=59c814054300dbd5&vjs=3"
    },
    {
      "name": "React Native Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=1580b5bf1a221038&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "UE4/C++ Software Developer",
      "company": "Sperasoft",
      "urls": "https://pl.indeed.com/viewjob?jk=9b282913d9d97640&fccid=72575fa3d1ce8c23&vjs=3"
    },
    {
      "name": "Ruby on Rails Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=6f7e6c22857a22b8&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Senior Backend Developer",
      "company": "NetEnt",
      "urls": "https://pl.indeed.com/viewjob?jk=822e15a43ff1b9fc&fccid=594e59f84614d19c&vjs=3"
    },
    {
      "name": "Senior Frontend Developer",
      "company": "Columbus",
      "urls": "https://pl.indeed.com/viewjob?jk=32266f8fdd1392f9&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Senior IOS Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=2638928b4c2fd8e8&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Senior Unity 3D Developer",
      "company": "Rage Quit Games",
      "urls": "https://pl.indeed.com/viewjob?jk=c16502d0c77f6823&fccid=bccdcb935f65afcb&vjs=3"
    },
    {
      "name": "Game Designer",
      "company": "Gamesture Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=328a28ca9f6e5482&fccid=e37c997fadbffaa1&vjs=3"
    },
    {
      "name": "Senior .NET Developer interested in e-commerce",
      "company": "Columbus",
      "urls": "https://pl.indeed.com/viewjob?jk=6720b8b2c62254ce&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Senior Unity 3DDeveloper",
      "company": "Swift Apps",
      "urls": "https://pl.indeed.com/viewjob?jk=39aa5f08bc35feeb&fccid=3950800b528a0e46&vjs=3"
    },
    {
      "name": "Senior Front End Developer",
      "company": "Grand Parade",
      "urls": "https://pl.indeed.com/viewjob?jk=c4cb2108e96e2df5&fccid=05868c54e0d72a0d&vjs=3"
    },
    {
      "name": "Android Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=2476a52e4e64bd39&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Magento 2 Developer",
      "company": "Jobs",
      "urls": "https://pl.indeed.com/viewjob?jk=9f331fd549e9d967&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Senior Front End Developer",
      "company": "William Hill",
      "urls": "https://pl.indeed.com/viewjob?jk=a27daada7ed9e008&fccid=8cb222cc2614b8d7&vjs=3"
    },
    {
      "name": "Software Engineer - Developer Productivity",
      "company": "Pegasystems",
      "urls": "https://pl.indeed.com/viewjob?jk=fb197a9f582e0bb8&fccid=1b567d66763b30ee&vjs=3"
    },
    {
      "name": "Senior Android Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=09f391641b2871d2&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "IOS Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=33b966b3e7110a7e&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Senior C# Developer",
      "company": "Verita HR Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=52c17df4e65aad8f&fccid=e265b982603f34bc&vjs=3"
    },
    {
      "name": "Backend Developer [online recruitment]",
      "company": "Two Up Digital",
      "urls": "https://pl.indeed.com/viewjob?jk=a76cabc1a51e85a2&fccid=50829994782ef656&vjs=3"
    },
    {
      "name": "Senior C++/UE4 Software Developer",
      "company": "Sperasoft",
      "urls": "https://pl.indeed.com/viewjob?jk=3f2ff4a02e96a4b8&fccid=72575fa3d1ce8c23&vjs=3"
    },
    {
      "name": "Senior SW Test Developer",
      "company": "Nordic Semiconductor",
      "urls": "https://pl.indeed.com/viewjob?jk=fb9e906eb4e2477d&fccid=d468e34edcbad731&vjs=3"
    },
    {
      "name": "Unity Developer NOWA",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=5821fd7c8edaa4b6&fccid=503ed6c94c8786f6&vjs=3"
    },
    {
      "name": "Senior SQL//VBA/Coric developer",
      "company": "Luxoft Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=31adeec521c28893&fccid=8f1b5b8da4c009f1&vjs=3"
    },
    {
      "name": "Senior Java Developer",
      "company": "SolarWinds",
      "urls": "https://pl.indeed.com/viewjob?jk=6526d6eed334c475&fccid=8fac7c785ef64f5e&vjs=3"
    },
    {
      "name": "Senior .Net Developer",
      "company": "Luxoft Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=cb09515a56849333&fccid=8f1b5b8da4c009f1&vjs=3"
    },
    {
      "name": "Mid/Senior Front-end developer (React)",
      "company": "British Pearl",
      "urls": "https://pl.indeed.com/viewjob?jk=c4fb471c6066e62d&fccid=42ad542846f2fdc4&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=e60f52063a358e4d&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Programista WEB / WEB Developer / JavaScript",
      "company": "Talent",
      "urls": "https://pl.indeed.com/viewjob?jk=2680591648117a21&fccid=869725dc34bbb516&vjs=3"
    },
    {
      "name": "Senior C++ Game Engine Developer",
      "company": "",
      "urls": "Keywords Studios"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=b4c805aa2f542eac&fccid=c26d104f25f1364f&vjs=3",
      "company": "Regular or Senior Java Developer",
      "urls": "Verita HR Polska Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=cae688964a729524&fccid=e265b982603f34bc&vjs=3",
      "company": "Senior Front-End Developer (Angular)",
      "urls": "Sperasoft"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=33985f3223f960bc&fccid=72575fa3d1ce8c23&vjs=3",
      "company": "C# Azure Developer for ABB Marine",
      "urls": "ABB"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=3e5d6b58db40c1a5&fccid=38b4474838e7b7a1&vjs=3",
      "company": "Senior Java Developer",
      "urls": "Luxoft Poland Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=114c4c4b02429253&fccid=8f1b5b8da4c009f1&vjs=3",
      "company": "QA Engineer (Mobile Apps)",
      "urls": "Luxoft Poland Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=6c4b27456fe79c05&fccid=8f1b5b8da4c009f1&vjs=3",
      "company": "UE4/C++ Software Developer",
      "urls": "Keywords Studios"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=34ff09ac29e580a2&fccid=c26d104f25f1364f&vjs=3",
      "company": "Rendering Software Developer",
      "urls": "Keywords Studios"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=543335685ca43dc0&fccid=c26d104f25f1364f&vjs=3",
      "company": "Lead KDB/Q Developer",
      "urls": "Luxoft Poland Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=949b6d6a5d2beea7&fccid=8f1b5b8da4c009f1&vjs=3",
      "company": "Sr Java Developer- NetEnt Live (back-end/platform)",
      "urls": "NetEnt"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=65bd51100a25331c&fccid=594e59f84614d19c&vjs=3",
      "company": "Senior C++/UE4 Software Developer",
      "urls": "Keywords Studios"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=935d5f2e38592a67&fccid=c26d104f25f1364f&vjs=3",
      "company": "Senior FE Developer (Angular) with UX experience",
      "urls": "Keywords Studios"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=874cd0439c8dbb8f&fccid=c26d104f25f1364f&vjs=3",
      "company": "xxx",
      "urls": "160"
    },
    {
      "name": "Modszy Projekt Manager",
      "company": "JANTAR Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-projekt-manager-krakow,oferta,1000263878"
    }
  ],
  "161": [
    {
      "name": "Developer hurtowni danych i procesów ETL",
      "company": "TAURON Obsługa Klienta sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=41b46dd738ac971e&fccid=ea7ff02b118a8686&vjs=3"
    }
  ],
  "162": [
    {
      "name": "Chemik - Analityk",
      "company": "Fagron",
      "urls": "https://pl.indeed.com/viewjob?jk=e8bdaffe45ca143e&fccid=2e783b99e903700c&vjs=3"
    },
    {
      "name": "Chemik-Analityk",
      "company": "Fagron sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=bc975d87ec77a43f&fccid=97a7ff87a28d46e9&vjs=3"
    },
    {
      "name": "Młodszy redaktor Głosu Seniora",
      "company": "Stowarzyszenie Manko",
      "urls": "https://pl.indeed.com/viewjob?jk=d100a78f03b99569&fccid=d6f2dc62b6541590&vjs=3"
    },
    {
      "name": "Specjalista ds. Marketingu i PR",
      "company": "FiberLink",
      "urls": "https://pl.indeed.com/viewjob?jk=6638adf262b414f4&fccid=c72cb3bd11befc58&vjs=3"
    },
    {
      "name": "Główny Technolog",
      "company": "HRWISE",
      "urls": "https://pl.indeed.com/viewjob?jk=05cacf566091a547&fccid=e834468dcd30ed28&vjs=3"
    },
    {
      "name": "Praca z językiem francuskim",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=7dac36495597ec92&fccid=31670bef3ae6497b&vjs=3"
    }
  ],
  "163": [],
  "164": [],
  "165": [],
  "166": [],
  "167": [],
  "168": [],
  "169": [],
  "170": [
    {
      "name": "Pracownik produkcji",
      "company": "Pilkington",
      "urls": "https://pl.indeed.com/viewjob?jk=c5ab79c07079aa5f&fccid=59d593c4eb037805&vjs=3"
    },
    {
      "name": "Doradca Handlowy",
      "company": "Castorama",
      "urls": "https://pl.indeed.com/viewjob?jk=04d170c282e96003&fccid=e8bd5065322a50fc&vjs=3"
    },
    {
      "name": "AGENT OCHRONY",
      "company": "Hipermarket Auchan",
      "urls": "https://pl.indeed.com/viewjob?jk=996c4f56faac24ae&fccid=591ff26ed17ce192&vjs=3"
    },
    {
      "name": "inspektor",
      "company": "Kancelaria Prezesa Rady Ministrów",
      "urls": "https://pl.indeed.com/viewjob?jk=640383fea1ae4d42&fccid=5565c12aed7d6662&vjs=3"
    },
    {
      "name": "Opiekun/Opiekunka Medyczny/Medyczna",
      "company": "Scanmed S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=534248c88c23fd92&fccid=5baf87fca2a86ad0&vjs=3"
    },
    {
      "name": "Project manager/Koordynator projektu",
      "company": "Agencja Harmonic",
      "urls": "https://pl.indeed.com/viewjob?jk=307043beeac6b2aa&fccid=c9d938964f9d001d&vjs=3"
    },
    {
      "name": "Mechanik maszyn produkcyjnych",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=23814c08b5e9cc4a&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Specjalisty ds. Obsługi Klienta z językiem słoweńskim",
      "company": "Elefanco Sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?/Elefanco-Sp.-z-o.-o./jobs/Specjalisty-Do-Spraw-Obs%C5%82ugi-Klienta-Z-J%C4%99zykiem-S%C5%82owe%C5%84skim-65147b5faf394926?fccid=2e2e58fb05ca54d0&vjs=3"
    },
    {
      "name": "Specjalisty ds. Obsługi Klienta z językiem fińskim",
      "company": "Elefanco Sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?/Elefanco-Sp.-z-o.-o./jobs/Specjalisty-Do-Spraw-Obs%C5%82ugi-Klienta-Z-J%C4%99zykiem-Fi%C5%84skim-5bab2b692e7df5bb?fccid=2e2e58fb05ca54d0&vjs=3"
    },
    {
      "name": "Wychowawca kolonijny",
      "company": "English Immersion American Camps",
      "urls": "https://pl.indeed.com/viewjob?/English-Immersion-American-Camps/jobs/Wychowawca-Kolonijny-4e632dc8786d453c?fccid=135bd608892caf6e&vjs=3"
    },
    {
      "name": "Specjalista ds. obsługi klienta z językiem słoweńskim",
      "company": "Elefanco Sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?/Elefanco-Sp.-z-o.-o./jobs/Specjalista-Do-Spraw-Obs%C5%82ugi-Klienta-Z-J%C4%99zykiem-S%C5%82owe%C5%84skim-ae117662c6d1e4c6?fccid=644317124a048cc5&vjs=3"
    },
    {
      "name": "Specjalisty ds. Obsługi Klienta z językiem czeskim/słowackim",
      "company": "Elefanco Sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?/Elefanco-Sp.-z-o.-o./jobs/Specjalisty-Do-Spraw-Obs%C5%82ugi-Klienta-Z-J%C4%99zykiem-Czeskim-S%C5%82owackim-9d828cb3a602904d?fccid=2e2e58fb05ca54d0&vjs=3"
    },
    {
      "name": "Specjalisty ds. Obsługi Klienta z językiem węgierskim",
      "company": "Elefanco Sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?/Elefanco-Sp.-z-o.-o./jobs/Specjalisty-Do-Spraw-Obs%C5%82ugi-Klienta-Z-J%C4%99zykiem-W%C4%99gierskim-4a27b950c00a3c99?fccid=2e2e58fb05ca54d0&vjs=3"
    },
    {
      "name": "Specjalista ds. obsługi klienta z językiem fińskim",
      "company": "Elefanco Sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?/Elefanco-Sp.-z-o.-o./jobs/Specjalista-Do-Spraw-Obs%C5%82ugi-Klienta-Z-J%C4%99zykiem-Fi%C5%84skim-b6c24f62f951da6a?fccid=644317124a048cc5&vjs=3"
    },
    {
      "name": "Kierownik Robót Drogowych lub Torowych/Inżynier Budowy",
      "company": "KZN RAIL Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=fe99701bd1cf7c37&fccid=be21bffde79d2ca7&vjs=3"
    },
    {
      "name": "AGENCJA NIANIA z POWOŁANIA zaprasza szukające pracy Nianie",
      "company": "NIANIA z POWOŁANIA",
      "urls": "https://pl.indeed.com/viewjob?jk=9a8b06857ae4efdb&fccid=e9dbfd3fc0c21bdc&vjs=3"
    },
    {
      "name": "Specjalista ds. komunikacji",
      "company": "Eurovia Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=8865b386b0e44f0c&fccid=6df22a29a2de0162&vjs=3"
    },
    {
      "name": "Specjalista ds. systemu zarządzania",
      "company": "Eurovia Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=f281babe523d5627&fccid=6df22a29a2de0162&vjs=3"
    },
    {
      "name": "Specjalista ds. obsługi klienta z językiem węgierskim",
      "company": "Elefanco Sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?/Elefanco-Sp.-z-o.-o./jobs/Specjalista-Do-Spraw-Obs%C5%82ugi-Klienta-Z-J%C4%99zykiem-W%C4%99gierskim-6f146e8dc73a9784?fccid=644317124a048cc5&vjs=3"
    },
    {
      "name": "Cloud Sales Specialist - praca zdalna",
      "company": "Fly on the cloud",
      "urls": "https://pl.indeed.com/viewjob?jk=fd6556889f8eb894&fccid=ca95fa460a86e499&vjs=3"
    },
    {
      "name": "Elektromechanik",
      "company": "LafargeHolcim",
      "urls": "https://pl.indeed.com/viewjob?/LafargeHolcim/jobs/Elektromechanik-fd4d5d0b77e928d7?fccid=7618bab885a58aa7&vjs=3"
    },
    {
      "name": "Specjalista ds. obsługi klienta z językiem czeskim/słowackim",
      "company": "Elefanco Sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?/Elefanco-Sp.-z-o.-o./jobs/Specjalista-Do-Spraw-Obs%C5%82ugi-Klienta-Z-J%C4%99zykiem-Czeskim-S%C5%82owackim-edd1c22ff53efe47?fccid=644317124a048cc5&vjs=3"
    },
    {
      "name": "Network Designer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=233bc43d4a0c3cc6&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Wordpress Developer",
      "company": "Amsterdam Standard Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=bce63c99351ac966&fccid=fb1b22023a56f66a&vjs=3"
    },
    {
      "name": "Inżynier sprzedaży systemów bezpieczeństwa przemysłowego",
      "company": "GRUPA WOLFF",
      "urls": "https://pl.indeed.com/viewjob?jk=d85a4988a3bbd086&fccid=3d99fb61e9e62f24&vjs=3"
    },
    {
      "name": "Senior Engineer - Zscaler",
      "company": "NEXT TECHNOLOGY PROFESSIONALS SPÓŁKA Z OGRANICZONĄ...",
      "urls": "https://pl.indeed.com/viewjob?jk=62cb83177c4aaaf4&fccid=cf2c9f69c3e83d61&vjs=3"
    },
    {
      "name": "Menadżer IT plus eCommerce NOWA",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=588a10cfd05ac937&fccid=503ed6c94c8786f6&vjs=3"
    },
    {
      "name": "Full stack Python Developer",
      "company": "OnWelo",
      "urls": "https://pl.indeed.com/viewjob?jk=25ecc715ae546e6e&fccid=f0576bc2d3ad81bd&vjs=3"
    },
    {
      "name": "Szukam kochającej dzieci niani dla 4 letniego synka! - Krakó...",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com/viewjob?jk=8bffd0772830087e&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Programista Systemów audiowizualnych / CRESTRON",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com/viewjob?jk=97f5a0f322033bad&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Menadżer IT plus eCommerce",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcl7SaLP_MpaOcC0R1fREk1o9tOKV_PSlZgoYyESvbDEc98tycvB0Ry408scwOFYAiwNaCggxKhWhkZhVFIaAhgyE626dktIbRfdRiPOTRFGE4PAxL8hocMEmktlI2-62YtwKFV60cICbBDNiVnzROPXESsjONjezNcooinM7URd2-Htbv3MMRAAHrd4gPFn1WCAK78EMC1ymUj8ZZeR9TXBvjouB7d2QY16fjVjNsOOBhYAQw8T6MSqRtkk5ixDXN__f7jB7ZtKcssOBH8cB6AB5glrYjRq4ISuxsTJIEmdhHRZOKaEjsbLNcCh1duTDwmipnCkVQeLFNqInEVSSniBBxHQSduvH9kPwHrKTdn2oqOOk7ANApuw-cGddBG0fsPkEiTbg0q-2Flh6xlpME0KxQ2E5jXxGbn-urWKgwnk4bVh4gGvlD6BJlCkGFW4bY8I_qWWbaxMeReBNN-9zniHQsRlsVB6TNHTCXhajBm7608qpZzO_Lxl4tJwWAqkUuNvmF_yCaBqWssNpxmyRiyM5UA8Oe0sySMFd3r7GTpVXfeReepoUrQqER2IhNVWmuYSI0dMQKEC1hrKLCOOZ0gTH2cFAk_d8xkru0FE9A2LMs00Yo5WqV6fduChN-SkAse6hPuBIiCEBxBpODUG7YC&p=10&fvj=0&vjs=3"
    },
    {
      "name": "Specjalista ds. bezpieczeństwa IT - Pentester",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=24eedc38ba74a46d&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Inżynier ds. Testów",
      "company": "Grupa Unity",
      "urls": "https://pl.indeed.com/viewjob?jk=1f2ed1cc4252a137&fccid=9a34138d512ebeaf&vjs=3"
    },
    {
      "name": "Przedstawiciel handlowy / Handlowiec / Business Development...",
      "company": "Futurum Technology Ltd.",
      "urls": "https://pl.indeed.com/viewjob?jk=580e48f49f7a4bc6&fccid=228edc79f2ff9b7a&vjs=3"
    },
    {
      "name": "Core Software Engineer",
      "company": "ESET",
      "urls": "https://pl.indeed.com/viewjob?jk=679d04578bab853a&fccid=8e1474db6974999b&vjs=3"
    },
    {
      "name": "Full Stack JavaScript node.js/react developer",
      "company": "NBC Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=ce2f0c70d0e5cce6&fccid=2f45a6829d6c88f6&vjs=3"
    },
    {
      "name": "Kierownik Projektu (Contact Center)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=77d3d8045b8d70e3&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Senior iOS Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=f2c79a96074148e7&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Administrator Systemowo-Sieciowy",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=f48d068553c6e9d6&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Full-Stack Developer | React, Node.js",
      "company": "Jcommerce",
      "urls": "https://pl.indeed.com/viewjob?jk=01fd8fe3d05d0a53&fccid=99a536694443ad83&vjs=3"
    },
    {
      "name": "DevOps Engineer",
      "company": "AUTENTI Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=e04b9be8f24aaf24&fccid=5fc90b16cbf43e55&vjs=3"
    },
    {
      "name": "Opiekunka do żłobka Stare Miasto Kraków",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com/viewjob?jk=f0b61105c64e49c2&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Cieśla – stolarz (zakład prefabrykacji)",
      "company": "Exbud Konstrukcje",
      "urls": "https://pl.indeed.com/viewjob?jk=43c911afc457cf2e&fccid=ee8699c4d4b9889c&vjs=3"
    },
    {
      "name": "Pilot Turystyczny/Kierownik Turystyczny",
      "company": "Poltur Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=60e4be1302387e9d&fccid=91af239b1666ea7e&vjs=3"
    },
    {
      "name": "System Configuration Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=f1ca667f6be02989&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "SysOps / DevOps",
      "company": "Sky Shop",
      "urls": "https://pl.indeed.com/viewjob?jk=16fb8082519ca0a1&fccid=1772abda90a2c59d&vjs=3"
    },
    {
      "name": "Senior Network Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=bb0af94e2bcc84b1&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Fullstack Developer",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com/viewjob?jk=d663cc7049b01d6a&fccid=4fcb59d2ba8f65d1&vjs=3"
    },
    {
      "name": "Poszukujemy nauczyciela wychowania przedszkolnego, Kraków, G...",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com/viewjob?jk=3c5d37922ac3f50c&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Full-Stack Developer (PHP)",
      "company": "Dotlinkers",
      "urls": "https://pl.indeed.com/viewjob?jk=df048f3e979c321e&fccid=c62351057abf05f6&vjs=3"
    },
    {
      "name": "Inżynier sieci / Network Engineer - Kraków",
      "company": "FRG Technology Consulting",
      "urls": "https://pl.indeed.com/viewjob?jk=20e6d13e23b4bf6a&fccid=79a4f894c1383f39&vjs=3"
    },
    {
      "name": "Network Engineer / Inżynier sieci",
      "company": "Washington Frank",
      "urls": "https://pl.indeed.com/viewjob?jk=5fcad688fe10a7d9&fccid=cb9285e8f83d93f4&vjs=3"
    },
    {
      "name": "Inżynier sieci, Network Engineer",
      "company": "Dynamics Jobs",
      "urls": "https://pl.indeed.com/viewjob?jk=7d6046df99c179ce&fccid=e7223e3ece47a796&vjs=3"
    },
    {
      "name": "Network Engineer / Inżynier sieci",
      "company": "FRG Technology Consulting",
      "urls": "https://pl.indeed.com/viewjob?jk=8e4724c72dd3e0f9&fccid=79a4f894c1383f39&vjs=3"
    },
    {
      "name": "Network Engineer, Inżynier sieci",
      "company": "Dynamics Jobs",
      "urls": "https://pl.indeed.com/viewjob?jk=94e68e21c80930c6&fccid=e7223e3ece47a796&vjs=3"
    },
    {
      "name": "DevOps Engineer (Senior)",
      "company": "Edge Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=2668fcd9c6bd2fef&fccid=b18ecb623e949f74&vjs=3"
    },
    {
      "name": "Linux Engineer / DevOps",
      "company": "EuroLinux",
      "urls": "https://pl.indeed.com/viewjob?jk=8b01b29c719cc453&fccid=d91fbdc82addbd64&vjs=3"
    },
    {
      "name": "C++ Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=47c1a64d70ecbd81&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "JAVA Software Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=821fc79b534c0c18&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Fullstack Java Developer (Spring, Angular)",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=9ea1966a6d7e2882&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "C#/.NET Software Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=e93aa1aa69a78a4f&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "DevOps / Java Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=25d6aad26c03ae89&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "171": [
    {
      "name": "DevOps Engineer",
      "company": "AUTENTI Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=e04b9be8f24aaf24&fccid=5fc90b16cbf43e55&vjs=3"
    }
  ],
  "172": [
    {
      "name": "Inżynier ds. integracji i testowania sieci 4G/5G - KRAKÓW",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=3dc0d8f7a439242b&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Active Safety Systems Engineer",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "DevOps Engineer",
      "company": "Accenture",
      "urls": "https://pl.indeed.com/viewjob?jk=b948b73b9e7969cd&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Systems Engineer - Advanced Safety",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=9fdd7d1ebbee0aca&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Oracle Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=939751af5d5af958&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "173": [
    {
      "name": "Inżynier ds. integracji i testowania sieci 4G/5G - KRAKÓW",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=3dc0d8f7a439242b&fccid=062f71e131e87cf0&vjs=3"
    }
  ],
  "174": [
    {
      "name": "Tester urządzeń medycznych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=a0cad3e097038a81&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista C/C++",
      "company": "AFA Polska Sp. Z O.O.",
      "urls": "https://pl.indeed.com/viewjob?/AFA-Polska-Sp.-Z-O.O./jobs/Programista-C-C++-2ec03acf738fb287?fccid=41029eff8c311fca&vjs=3"
    },
    {
      "name": "Firmware Developer",
      "company": "S-Labs",
      "urls": "https://pl.indeed.com/viewjob?jk=bb00bd7b7f7d3aba&fccid=ce4f4701fb5e9335&vjs=3"
    },
    {
      "name": "Młodszy Programista Java (Telekomunikacja)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=5c9e473ed9230c95&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Technik Instalator Kraków",
      "company": "Electronic Control Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=9189559198aae9be&fccid=9e826fe22370d20d&vjs=3"
    },
    {
      "name": "Inżynier/ Elektryk Projektant E-PLAN",
      "company": "Axamo Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=494a424cfbfab4d1&fccid=f86175c7ba708305&vjs=3"
    }
  ],
  "175": [
    {
      "name": "Inżynier ds. Laboratorium",
      "company": "Nidec",
      "urls": "https://pl.indeed.com/viewjob?jk=53b0c6ef005c0330&fccid=ab31e8d9e75d2fe7&vjs=3"
    }
  ],
  "176": [],
  "177": [
    {
      "name": "SZWALNIA ZATRUDNI SZWACZKI MASZYNOWE",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com/viewjob?jk=43f30c67b6ca6522&fccid=dd616958bd9ddc12&vjs=3"
    }
  ],
  "178": [],
  "179": [],
  "180": [],
  "181": [
    {
      "name": "Automatyk-Programista",
      "company": "Frapol",
      "urls": "https://pl.indeed.com/viewjob?jk=86eb220d2ea80d09&fccid=9c2047b7b01199b2&vjs=3"
    }
  ],
  "182": [],
  "183": [],
  "184": [
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    }
  ],
  "185": [
    {
      "name": "Java Architect | Architekt Java",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com/viewjob?jk=b8884d3fc88b47a5&fccid=4fcb59d2ba8f65d1&vjs=3"
    }
  ],
  "186": [
    {
      "name": "Staż w Zespole R&D, Industrial Designu, Logistyki, IT, Finan...",
      "company": "Green Cell",
      "urls": "https://pl.indeed.com/viewjob?jk=a8bea13316b4b94e&fccid=7520988c97ff0996&vjs=3"
    },
    {
      "name": "Płatny staż w Zespole R&D, Industrial Design, Prawnym, Finan...",
      "company": "Świat Baterii",
      "urls": "https://pl.indeed.com/viewjob?jk=2e1540d8c32bb5c8&fccid=88fb836afb9cbe07&vjs=3"
    },
    {
      "name": "Inżynier Automatyk - rekrutacja prowadzona online",
      "company": "Fitech",
      "urls": "https://pl.indeed.com/viewjob?jk=d8931e2ecdfc3385&fccid=52d48f1974e43ed4&vjs=3"
    }
  ],
  "187": [],
  "188": [
    {
      "name": "C# DEVELOPER",
      "company": "Loycon",
      "urls": "https://pl.indeed.com/viewjob?jk=7992640fdefd0c02&fccid=7129a6c6479d89d1&vjs=3"
    },
    {
      "name": "EMBEDDED SOFTWARE ENGINEER",
      "company": "Loycon",
      "urls": "https://pl.indeed.com/viewjob?jk=ea6bcccc13cf9ce4&fccid=7129a6c6479d89d1&vjs=3"
    }
  ],
  "189": [
    {
      "name": "Konstruktor / Projektant",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor-projektant_3339236.html#181eb7471f31aa73d67e87884cd742c5"
    }
  ],
  "190": [
    {
      "name": "Konstruktor / Projektant",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor-projektant_3339236.html#c213ce9c6231a712887afb6906bcd63f"
    }
  ],
  "191": [
    {
      "name": "Młodszy Inżynier",
      "company": "Gegenbauer Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/mlodszy-inzynier_3425890.html#c3465a1e3e55ad12e63a45c23ac18a4e"
    },
    {
      "name": "Automatyk",
      "company": "Bilfinger Industrial Services Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/automatyk_3411550.html#c3465a1e3e55ad12e63a45c23ac18a4e"
    },
    {
      "name": "Technical Project Manager - German Speaker",
      "company": "Merit Poland Sp. z o.o.",
      "urls": "https://www.praca.pl/technical-project-manager-german-speaker_3365180.html#c3465a1e3e55ad12e63a45c23ac18a4e"
    },
    {
      "name": "Technik – Automatyk (K/M)  [rekrutacja online]",
      "company": "Apleona HSG Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-automatyk-k-m-rekrutacja-online_3378226.html#c3465a1e3e55ad12e63a45c23ac18a4e"
    }
  ],
  "192": [],
  "193": [
    {
      "name": "Asystent Technologa / Technolog",
      "company": "Euronova Sp.z o.o. Sp.k.",
      "urls": "https://www.praca.pl/asystent-technologa-technolog_3348164.html#7cea369f2ba737d85d73b1edbd750fef"
    }
  ],
  "194": [],
  "195": [],
  "196": [],
  "197": [],
  "198": [],
  "199": [],
  "200": [],
  "201": [],
  "202": [],
  "203": [
    {
      "name": "Active Safety Systems Engineer",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3"
    }
  ],
  "204": [
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
    }
  ],
  "205": [
    {
      "name": "Konstruktor / Projektant",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor-projektant_3339236.html#c213ce9c6231a712887afb6906bcd63f"
    }
  ],
  "206": [
    {
      "name": "Młodszy Konstruktor CAD",
      "company": "GROS Engineering",
      "urls": "https://pl.indeed.com/viewjob?jk=b2cc3d07a98c79a1&fccid=83800432e0dffe2b&vjs=3"
    },
    {
      "name": "KONSTRUKTOR MASZYN I URZĄDZEŃ",
      "company": "SANT-TECH",
      "urls": "https://pl.indeed.com/viewjob?jk=7a2e68957957539e&fccid=4cff40bef3e8ba30&vjs=3"
    },
    {
      "name": "INŻYNIER KONSTRUKTOR w dziale R&D",
      "company": "EC Engineering",
      "urls": "https://pl.indeed.com/viewjob?jk=c3afdef0a16e8ffd&fccid=dd2bc65880e72b4a&vjs=3"
    },
    {
      "name": "Konstruktor CATIA V5",
      "company": "GROS Engineering",
      "urls": "https://pl.indeed.com/viewjob?jk=5e1f6738935f23bd&fccid=83800432e0dffe2b&vjs=3"
    },
    {
      "name": "Inżynier konstruktor hardware",
      "company": "dataconsult",
      "urls": "https://pl.indeed.com/viewjob?jk=15df3a55808d8f83&fccid=45d5bb47777eab56&vjs=3"
    },
    {
      "name": "KONSTRUKTOR CAD",
      "company": "NEWAG GROUP",
      "urls": "https://pl.indeed.com/viewjob?jk=1a2ae86b043ab153&fccid=b1b38fabe5e92cf0&vjs=3"
    },
    {
      "name": "Konstruktor",
      "company": "Bamet",
      "urls": "https://pl.indeed.com/viewjob?jk=7d5976e66bee868c&fccid=55f842c9b66dbe5b&vjs=3"
    },
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Konstruktor",
      "company": "Arche Consulting",
      "urls": "https://pl.indeed.com/viewjob?jk=a042c6832bf9f7aa&fccid=c665c35cf349dff1&vjs=3"
    },
    {
      "name": "Konstruktor Elektronik",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "207": [
    {
      "name": "Inżynier Niezawodności",
      "company": "HRWISE",
      "urls": "https://pl.indeed.com/viewjob?jk=7f83c74c7de57131&fccid=e834468dcd30ed28&vjs=3"
    }
  ],
  "208": [],
  "209": [],
  "210": [],
  "211": [
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
    },
    {
      "name": "Working Student - 5G L1 FPGA Design Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-5g-l1-fpga-design-engineer-krakow,oferta,1000256965"
    },
    {
      "name": "Working Student - FPGA Design Verification Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-design-verification-engineer-krakow,oferta,1000256977"
    },
    {
      "name": "Junior Graphic Designer",
      "company": "Morele.net Sp. z o.o. ",
      "urls": "https://www.pracuj.pl/praca/junior-graphic-designer-krakow,oferta,1000257192"
    },
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    },
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Projektant Instalacji HVAC",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-instalacji-hvac_3425568.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Projektant instalacji elektrycznych",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-instalacji-elektrycznych_3425564.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Koordynator projektu [rekrutacja online]",
      "company": "HERKULES  S.A.",
      "urls": "https://www.praca.pl/koordynator-projektu-rekrutacja-online_3407586.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Asystent Projektanta Mostowego",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/asystent-projektanta-mostowego_3391896.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Asystent Projektanta [rekrutacja online]",
      "company": "Impel Tech Solutions Sp. Z o.o. Sp. K",
      "urls": "https://www.praca.pl/asystent-projektanta-rekrutacja-online_3378658.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Projektant [rekrutacja online]",
      "company": "Impel Tech Solutions Sp. Z o.o. Sp. K",
      "urls": "https://www.praca.pl/projektant-rekrutacja-online_3378674.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Projektant Mostowy",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-mostowy_3391892.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3415642.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "CE Digital Learning Design Manager",
      "company": "Tesco Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/ce-digital-learning-design-manager_3383684.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Architekt",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/architekt_3405096.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Integrated Catchment Modeller (InfoWorks ICM)",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/integrated-catchment-modeller-infoworks-icm_3396890.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Senior Teradata Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-teradata-developer_3337184.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Młodszy projektant odzieży marki Wólczanka",
      "company": "VRG S.A.",
      "urls": "https://www.praca.pl/mlodszy-projektant-odziezy-marki-wolczanka_3368456.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Konstruktor",
      "company": "TNS Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor_3398606.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Asystent Technologa / Technolog",
      "company": "Euronova Sp.z o.o. Sp.k.",
      "urls": "https://www.praca.pl/asystent-technologa-technolog_3324544.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Projektant Java [rekrutacja online]",
      "company": "Asseco Poland S.A.",
      "urls": "https://www.praca.pl/projektant-java-rekrutacja-online_3330020.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Konstruktor - Technolog",
      "company": "KMW INVEST SP. Z O.O.",
      "urls": "https://www.praca.pl/konstruktor-technolog_3368046.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Konstruktor / Projektant",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor-projektant_3339236.html#b88b03819a9dfb57bab9964aaadd03a3"
    }
  ],
  "212": [
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    },
    {
      "name": "Projektant Mostowy",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-mostowy_3391892.html#269c3ee803dee6dedf08d2382347530c"
    },
    {
      "name": "Asystent Projektanta Mostowego",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/asystent-projektanta-mostowego_3391896.html#269c3ee803dee6dedf08d2382347530c"
    },
    {
      "name": "Teradata Technical Analyst ",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/teradata-technical-analyst_3337152.html#269c3ee803dee6dedf08d2382347530c"
    },
    {
      "name": "Konstruktor",
      "company": "TNS Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor_3398606.html#269c3ee803dee6dedf08d2382347530c"
    },
    {
      "name": "Konstruktor - Technolog",
      "company": "KMW INVEST SP. Z O.O.",
      "urls": "https://www.praca.pl/konstruktor-technolog_3368046.html#269c3ee803dee6dedf08d2382347530c"
    },
    {
      "name": "Konstruktor / Projektant",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor-projektant_3339236.html#269c3ee803dee6dedf08d2382347530c"
    }
  ],
  "213": [
    {
      "name": "Młodszy Koordynator Operacyjny",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=b66c7ff9f63fa7b3&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Monter instalacji fotowoltaicznych",
      "company": "OZE TEAM",
      "urls": "https://pl.indeed.com/viewjob?jk=dd17d79ce695867f&fccid=05a14b789a2a80a9&vjs=3"
    },
    {
      "name": "Elektryka lub/i montera instalacji grzewczych OZE",
      "company": "ECO-TECHNIKA Piotr Dunas",
      "urls": "https://pl.indeed.com/viewjob?jk=d45df006c66a91cd&fccid=0991c0a1f1fdf628&vjs=3"
    },
    {
      "name": "Projektant PV",
      "company": "Standard Power Development Sp. z o.o. I Sp. k.",
      "urls": "https://pl.indeed.com/viewjob?/Standard-Power-Development-Sp.-z-o.o.-I-Sp.-k./jobs/Projektant-Pv-6852b6a537f0a2ea?fccid=c6c5923a3b20f069&vjs=3"
    },
    {
      "name": "Doradca Energetyczny ds. fotowoltaiki",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=3da517f5b6b5a3a4&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Konsultant ds. realizacji",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=33f285a610ec0c64&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Przedstawiciel Handlowy ds. Fotowoltaiki (B2B)",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=db6cf90593a8d111&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Monter instalacji fotowoltaicznych",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=f86bb269d7d12e01&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Dyrektor ds Sprzedaży | Regionu Południe | PV",
      "company": "Kelly Services",
      "urls": "https://pl.indeed.com/viewjob?jk=5c2b7fd4bafec090&fccid=26a0583287ba1940&vjs=3"
    },
    {
      "name": "Dyrektor ds Sprzedaży | Regionu Południe | PV",
      "company": "Kelly Services PL",
      "urls": "https://pl.indeed.com/viewjob?jk=28f15d9891e16360&fccid=26a0583287ba1940&vjs=3"
    },
    {
      "name": "Doradca Energetyczny – Przedstawiciel ds. Fotowoltaiki",
      "company": "Hymon Energy Sp z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=f8ee21d7e6363eef&fccid=2da66c87c199269b&vjs=3"
    },
    {
      "name": "Senior Engineer (Renewable Energy)",
      "company": "Devire",
      "urls": "https://pl.indeed.com/viewjob?jk=49b765392196258d&fccid=dac7798bc9cb142c&vjs=3"
    },
    {
      "name": "Doradca sprzedaży instalacji fotowoltaicznych",
      "company": "H4H Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=c57b6d08798e2dfd&fccid=4f9cb417d6f6258b&vjs=3"
    }
  ],
  "214": [],
  "215": [
    {
      "name": "Administrator systemów Linux",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com/viewjob?jk=d4c9c5f23fa99f77&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=8b9014a2145ea0aa&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Młodszy administrator / serwisant",
      "company": "Softelnet spółka akcyjna sp.k.",
      "urls": "https://pl.indeed.com/viewjob?jk=c3de9f0405325c9a&fccid=c120232169b76303&vjs=3"
    }
  ],
  "216": [],
  "217": [],
  "218": [],
  "219": [],
  "220": [],
  "221": [
    {
      "name": "Umowa o pracę",
      "company": "Grupa Geofusion",
      "urls": "https://pl.indeed.com/viewjob?jk=a492ba147eec7a28&fccid=9ba243eceb908812&vjs=3"
    },
    {
      "name": "Geodeta",
      "company": "Grupa Geofusion Sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?jk=e611db10bf29ed0f&fccid=f6b17eee343803a9&vjs=3"
    }
  ],
  "222": [
    {
      "name": "Umowa o pracę",
      "company": "Grupa Geofusion",
      "urls": "https://pl.indeed.com/viewjob?jk=a492ba147eec7a28&fccid=9ba243eceb908812&vjs=3"
    },
    {
      "name": "Geodeta",
      "company": "Grupa Geofusion Sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?jk=e611db10bf29ed0f&fccid=f6b17eee343803a9&vjs=3"
    }
  ],
  "223": [],
  "224": [
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Elektromonter",
      "company": "FBSERWIS SA",
      "urls": "https://www.praca.pl/elektromonter_3378988.html#3cd5aee553da467d40a91e8e671a0464"
    }
  ],
  "225": [],
  "226": [],
  "227": [],
  "228": [],
  "229": [],
  "230": [
    {
      "name": "Inżynier budowy",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy_3410072.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik Robót Mechanicznych i Sanitarnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-mechanicznych-i-sanitarnych_3410188.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik budowy \\ Kierownik robót",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-kierownik-robot_3410224.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik budowy",
      "company": "Przedsiębiorstwo Remontowo-Budowlane AGAD Sp z.o.o",
      "urls": "https://www.praca.pl/kierownik-budowy_3366550.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Menadżer Kontraktów",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/menadzer-kontraktow_3364656.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Geodeta",
      "company": "Budimex SA",
      "urls": "https://www.praca.pl/geodeta_3407686.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Inspektor Nadzoru Elektrycznego [rekrutacja prowadzona online]",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/inspektor-nadzoru-elektrycznego-rekrutacja-prowadzona-online_3378950.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Geodeta",
      "company": "G4 Geodezja Sp. z o.o.",
      "urls": "https://www.praca.pl/geodeta_3406892.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Inżynier Budowy Mostów",
      "company": "Primost Południe Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-budowy-mostow_3389088.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Monter / Pomocnik operatora wiertnicy",
      "company": "NAWITEL SP. Z O. O.",
      "urls": "https://www.praca.pl/monter-pomocnik-operatora-wiertnicy_3405188.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik Budowy / Kierownik Kontraktu na budowie Oczyszczalni Ścieków",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-kierownik-kontraktu-na-budowie-oczyszczalni-sciekow_3376616.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Pracownik Budowlany -  Brukarz",
      "company": "Intrakt Sp.z o.o.",
      "urls": "https://www.praca.pl/pracownik-budowlany-brukarz_3389116.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Brygadzista robót elektrycznych [rekrutacja online]",
      "company": "Synago Małgorzata Jankowska",
      "urls": "https://www.praca.pl/brygadzista-robot-elektrycznych-rekrutacja-online_3405072.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Monter sieci / Pomocnik operatora wiertnicy",
      "company": "NAWITEL SP. Z O. O.",
      "urls": "https://www.praca.pl/monter-sieci-pomocnik-operatora-wiertnicy_3415968.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Pracownik do robót ogólnobudowlanych (także ekipa)",
      "company": "J. Cezar Sp. z o.o.",
      "urls": "https://www.praca.pl/pracownik-do-robot-ogolnobudowlanych-takze-ekipa_3376716.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Architekt",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/architekt_3405096.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik robót elektrycznych ",
      "company": "TRAKCJA PRKiI S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-elektrycznych_3372304.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Inżynier Budowy",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy_3338932.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Inspektor ds. ofertowania i kosztorysowania",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/inspektor-ds-ofertowania-i-kosztorysowania_3337376.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik Robót Mostowych",
      "company": "Primost Południe Sp. z o.o.",
      "urls": "https://www.praca.pl/kierownik-robot-mostowych_3417020.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik robót ds. elektroenergetycznych (kolejowa sieć trakcyjna)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-ds-elektroenergetycznych-kolejowa-siec-trakcyjna_3417244.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik Robót",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/kierownik-robot_3338936.html#0e2a990a13378c31c963f05cff55ac1d"
    }
  ],
  "231": [],
  "232": [
    {
      "name": "Integrated Catchment Modeller (InfoWorks ICM)",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/integrated-catchment-modeller-infoworks-icm_3396890.html#f06205909efcc4197a4a85ccb9d56501"
    },
    {
      "name": "Analityk Danych Terenowych FOTO / LiDAR ",
      "company": "Vimap Sp. z o.o.",
      "urls": "https://www.praca.pl/analityk-danych-terenowych-foto-lidar_3326748.html#f06205909efcc4197a4a85ccb9d56501"
    }
  ],
  "233": [],
  "234": [],
  "235": [],
  "236": [],
  "237": [
    {
      "name": "STAŻ: Dział Przetwarzania Danych",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=072ae257db6a8cef&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "PLANISTA/ WDROŻENIOWIEC SYSTEMÓW OPARTYCH NA QGIS ORAZ CAD",
      "company": "GLOBAL SOFTELNET",
      "urls": "https://pl.indeed.com/viewjob?jk=60c8b70adc91d110&fccid=87f74a987fba589f&vjs=3"
    }
  ],
  "238": [],
  "239": [],
  "240": [],
  "241": [],
  "242": [],
  "243": [],
  "244": [],
  "245": [
    {
      "name": "Modszy Specjalista ds. obsugi Klienta",
      "company": "FarmaProm Polska Sp. z o.o. Sp. K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-krakow,oferta,1000259564"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Modszy Specjalista ds. Technicznej Obsugi Klienta",
      "company": "nazwa.pl Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-technicznej-obslugi-klienta-krakow,oferta,1000257596"
    },
    {
      "name": "Full Time Administrative Assistant - Remote",
      "company": "WEB BESPOKERS FILIP KOTLARZ",
      "urls": "https://www.pracuj.pl/praca/full-time-administrative-assistant-remote-krakow-okolice,oferta,1000204756"
    },
    {
      "name": "Asystent(ka) Dziau Handlowego",
      "company": "ZAMAK MERCATOR SP. Z O.O.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-dzialu-handlowego-krakow-okolice,oferta,1000198624"
    },
    {
      "name": "Modszy Specjalista ds. Technicznego Wsparcia Sprzeday",
      "company": "BAKOTECH Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-technicznego-wsparcia-sprzedazy-krakow,oferta,7471445"
    }
  ],
  "246": [],
  "247": [
    {
      "name": "Senior NLP / AI Data Scientist",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-nlp-ai-data-scientist_3382962.html#a6045400a5350d622fc87d8e09c4177f"
    },
    {
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen-systemow-analitycznych_3405276.html#a6045400a5350d622fc87d8e09c4177f"
    }
  ],
  "248": [
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Modszy Specjalista ds. obsugi Klienta",
      "company": "FarmaProm Polska Sp. z o.o. Sp. K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-krakow,oferta,1000259564"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "Working Student - FPGA Algorithm Modeling Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-algorithm-modeling-engineer-krakow,oferta,1000256972"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Working Student - FPGA Design Verification Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-design-verification-engineer-krakow,oferta,1000256977"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Junior Investment Solutions Group Portfolio Management Analyst with State Street Global Advisors, Officer",
      "company": "State Street Bank Polska",
      "urls": "https://www.pracuj.pl/praca/junior-investment-solutions-group-portfolio-management-analyst-with-state-street-krakow,oferta,1000219275"
    },
    {
      "name": "RF Test Engineer - Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/rf-test-engineer-working-student-krakow,oferta,1000197222"
    },
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "FPGA Design Verification Engineer  Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-design-verification-engineer-working-student-krakow,oferta,1000197226"
    },
    {
      "name": "Junior Quality Engineer",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-quality-engineer-krakow,oferta,7477572"
    },
    {
      "name": "Junior Software Engineer Java",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-software-engineer-java-krakow,oferta,1000190736"
    },
    {
      "name": "Junior SQL Developer",
      "company": "AG TEST HR Spka z ograniczon odpowiedzialnoci sp.k.",
      "urls": "https://www.pracuj.pl/praca/junior-sql-developer-krakow,oferta,1000194416"
    },
    {
      "name": "Praktykant Salesforce  get the HOT Salesforce skill",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,7468135"
    },
    {
      "name": "Praktykant/ Junior - Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,7468131"
    }
  ],
  "249": [
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#11723b3082ffeaefebb47759d4100709"
    },
    {
      "name": "Senior Process Engineering Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-process-engineering-analyst_3396702.html#11723b3082ffeaefebb47759d4100709"
    },
    {
      "name": "Business Analyst [rekrutacja online]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/business-analyst-rekrutacja-online_3343528.html#11723b3082ffeaefebb47759d4100709"
    }
  ],
  "250": [
    {
      "name": " C/C++ Embedded Senior Software Developer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/c-c-embedded-senior-software-developer-rekrutacja-online_3415764.html#c9f3717e4ee48e0ae35bb371e45c32e3"
    }
  ],
  "251": [
    {
      "name": "Platform Operations Technician (III shift)",
      "company": "AKAMAI TECHNOLOGIES POLAND SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/platform-operations-technician-iii-shift-krakow,oferta,7521969"
    },
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
    },
    {
      "name": "Modszy Projekt Manager",
      "company": "JANTAR Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-projekt-manager-krakow,oferta,1000263878"
    },
    {
      "name": "Sta z Lwem w Sieci Korporacyjnej",
      "company": "ING Bank lski S.A.",
      "urls": "https://www.pracuj.pl/praca/staz-z-lwem-w-sieci-korporacyjnej-krakow,oferta,1000262894"
    },
    {
      "name": "Asystentka / Sekretarka - Concierge online",
      "company": "Recruit Europe Takeshige Yokota",
      "urls": "https://www.pracuj.pl/praca/asystentka-sekretarka-concierge-online-krakow,oferta,1000227254"
    },
    {
      "name": "Modszy Specjalista ds. Wsparcia Agencyjnych Sieci Sprzeday",
      "company": "Columbus Energy S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-wsparcia-agencyjnych-sieci-sprzedazy-krakow,oferta,1000220310"
    },
    {
      "name": "Sta z Lwem w Sieci Detalicznej - edycja letnia",
      "company": "ING Bank lski S.A.",
      "urls": "https://www.pracuj.pl/praca/staz-z-lwem-w-sieci-detalicznej-edycja-letnia-krakow,oferta,1000258945"
    },
    {
      "name": "Modszy Specjalista Serwisu",
      "company": "IMS r&d Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-serwisu-krakow,oferta,1000218461"
    },
    {
      "name": "Modszy Specjalista ds. Helpdesk",
      "company": "Columbus Energy S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-helpdesk-krakow,oferta,1000204350"
    },
    {
      "name": "Asystent Projektanta Instalatora",
      "company": "OTS-IP sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-instalatora-krakow,oferta,500033908"
    },
    {
      "name": "Modszy Specjalista ds. Technicznego Wsparcia Sprzeday",
      "company": "BAKOTECH Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-technicznego-wsparcia-sprzedazy-krakow,oferta,7471445"
    },
    {
      "name": "Praktykant / Praktykantka w Dziale Zakupów [rekrutacja prowadzona on-line]",
      "company": "Abra S.A.",
      "urls": "https://www.praca.pl/praktykant-praktykantka-w-dziale-zakupow-rekrutacja-prowadzona-on-line_3365122.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Praktykant / Praktykantka w Dziale Logistyki [rekrutacja prowadzona on-line]",
      "company": "Abra S.A.",
      "urls": "https://www.praca.pl/praktykant-praktykantka-w-dziale-logistyki-rekrutacja-prowadzona-on-line_3365124.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Przedstawiciel Handlowy - Ogrodzenia / kanał B2B",
      "company": "Work & Business Solutions",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy-ogrodzenia-kanal-b2b_3394316.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Kierownik Robót Mechanicznych i Sanitarnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-mechanicznych-i-sanitarnych_3410188.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Kierownik budowy \\ Kierownik robót",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-kierownik-robot_3410224.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Specjalista ds. Komunikacji Marketingowej (dla sieci partnerów produkcyjnych) [rekrutacja online]",
      "company": "TBS Consulting",
      "urls": "https://www.praca.pl/specjalista-ds-komunikacji-marketingowej-dla-sieci-partnerow-produkcyjnych-rekrutacja-online_3364750.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Projektant instalacji elektrycznych",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-instalacji-elektrycznych_3425564.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Projektant Instalacji HVAC",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-instalacji-hvac_3425568.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Kierownik Oddziałów Serwisu Maszyn",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/kierownik-oddzialow-serwisu-maszyn_3425552.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Cloud Oriented Network Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-oriented-network-architect_3409108.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": " Wordpress Developer",
      "company": "Amsterdam Standard Sp. z o.o.",
      "urls": "https://www.praca.pl/wordpress-developer_3392102.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Kierownik strefy – menadżer ds. sprzedaży w sieci dealerskiej",
      "company": "mFinanse S.A.",
      "urls": "https://www.praca.pl/kierownik-strefy-menadzer-ds-sprzedazy-w-sieci-dealerskiej_3378960.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "R&D Lab Support Engineer",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/r-d-lab-support-engineer_3366800.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Inspektor Nadzoru Elektrycznego [rekrutacja prowadzona online]",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/inspektor-nadzoru-elektrycznego-rekrutacja-prowadzona-online_3378950.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Network Solution Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/network-solution-architect_3406634.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Digital Workplace Architect (Connected/Smart Office Area)",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/digital-workplace-architect-connected-smart-office-area_3406660.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Doradca Klienta",
      "company": "Adreams",
      "urls": "https://www.praca.pl/doradca-klienta_3378790.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Linux Platform Engineer",
      "company": "Power Media",
      "urls": "https://www.praca.pl/linux-platform-engineer_3386258.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "IT Specialist (Senior Analyst) (L2 Support) with English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-specialist-senior-analyst-l2-support-with-english_3389752.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Geodeta",
      "company": "G4 Geodezja Sp. z o.o.",
      "urls": "https://www.praca.pl/geodeta_3406892.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Key Account Manager",
      "company": "Eurocash S.A.",
      "urls": "https://www.praca.pl/key-account-manager_3411412.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Digital Workplace Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/digital-workplace-architect_3406640.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Cloud Automation Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-automation-architect_3406644.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    }
  ],
  "252": [
    {
      "name": "Modszy Projekt Manager",
      "company": "JANTAR Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-projekt-manager-krakow,oferta,1000263878"
    }
  ],
  "253": [
    {
      "name": "Delivery Manager",
      "company": "j-labs",
      "urls": "https://pl.indeed.com/viewjob?jk=b2aa9eeada8b4637&fccid=a4750d1f1c80cb70&vjs=3"
    }
  ],
  "254": [],
  "255": [],
  "256": [
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen-systemow-analitycznych_3405276.html#192bc54349cbae22e6fdd9549a384c0d"
    },
    {
      "name": "Video Solutions - Media Streaming Expert [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/video-solutions-media-streaming-expert-rekrutacja-online_3378106.html#192bc54349cbae22e6fdd9549a384c0d"
    },
    {
      "name": "Java Developer (Mid)",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/java-developer-mid_3396308.html#192bc54349cbae22e6fdd9549a384c0d"
    }
  ],
  "257": [],
  "258": [
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
    }
  ],
  "259": [],
  "260": [],
  "261": [],
  "262": [],
  "263": [
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
    }
  ],
  "264": [],
  "265": [
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
    }
  ],
  "266": [
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
    }
  ],
  "267": [
    {
      "name": "Asystent specjalisty Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=dc8e82ea96d316d6&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Specjalista Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=8447c63c8105e086&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Ochrony Środowiska...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=315cad0381ee06a8&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Referent ds. logistyki odpadów specjalnych",
      "company": "",
      "urls": "REMONDIS Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=cdbbed117d36ce4b&fccid=e18a11f1af6d217e&vjs=3",
      "company": "Specjalista ds. BHP i ochrony środowiska",
      "urls": "Kolejowe Zakłady Nawierzchniowe"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=5a141607248b0fc1&fccid=640acb9e5c3b5646&vjs=3",
      "company": "Projektant Architektury Krajobrazu",
      "urls": "Park-M"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=aa4cd446002a2698&fccid=9820092e2d13814c&vjs=3",
      "company": "Pracownik w Sekcji Administracji",
      "urls": "SP ZOZ Szpital Uniwersytecki w Krakowie"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=e5140e2be1bcd905&fccid=dbd17c00e0be7954&vjs=3",
      "company": "GEODETA/Specjalista ds. detekcji infrastruktury podziemnej",
      "urls": "GISonLine"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=0752b9dea00bed12&fccid=f3a59a13accc2eb6&vjs=3",
      "company": "GEODETA/Specjalista ds. baz danych GESUT i BDOT",
      "urls": "GISonLine"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=d6ce492234ce6414&fccid=f3a59a13accc2eb6&vjs=3",
      "company": "Specjalista ds. układów kogeneracyjnych",
      "urls": "CONTROL PROCESS S.A."
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=a5f702f39c8819b4&fccid=1cd754675a5b8353&vjs=3",
      "company": "xxx",
      "urls": "268"
    },
    {
      "name": "Konsultant Asysty Technicznej (Telekomunikacja, BSS)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=61e3d7eade51641a&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "ORNITOLOG/PRZYRODNIK",
      "company": "Future Green Innovations",
      "urls": "https://pl.indeed.com/viewjob?jk=2b0968afbc1faf41&fccid=5981b74173f9ac17&vjs=3"
    },
    {
      "name": "Administrator systemów IT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=875beb0934c9602f&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Koordynator ds. Infrastruktury",
      "company": "HRWISE",
      "urls": "https://pl.indeed.com/viewjob?jk=8d0b6a1cc2632713&fccid=e834468dcd30ed28&vjs=3"
    }
  ],
  "269": [],
  "270": [],
  "271": [
    {
      "name": "Junior Project Manager / Project Manager – Kraków/Rzeszów",
      "company": "HR Design Group",
      "urls": "https://pl.indeed.com/viewjob?jk=a1e0b2971ed6e546&fccid=bbb0d4b7a797817a&vjs=3"
    }
  ],
  "272": [],
  "273": [],
  "274": [],
  "275": [
    {
      "name": "Pracownik biurowy",
      "company": "Greifbau",
      "urls": "https://pl.indeed.com/viewjob?jk=6907b4acb312f882&fccid=39a7f86e54a19f83&vjs=3"
    },
    {
      "name": "Kierownik Sprzedaży usług geotechnicznych",
      "company": "SM Polska Sp. z o.o. S.K.",
      "urls": "https://pl.indeed.com/viewjob?jk=473a58fc4f4e4109&fccid=7c2f0c51584bdcd6&vjs=3"
    }
  ],
  "276": [],
  "277": [],
  "278": [
    {
      "name": "Nauczyciel przedmiotów zawodowych",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-zawodowych_3372442.html#de9a9175b007100a828145b8829da531"
    }
  ],
  "279": [
    {
      "name": "Asystent specjalisty Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=dc8e82ea96d316d6&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Specjalista Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=8447c63c8105e086&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Ochrony Środowiska...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=315cad0381ee06a8&fccid=8ab640d69ddcb83d&vjs=3"
    }
  ],
  "280": [],
  "281": [],
  "282": [],
  "283": [
    {
      "name": "Geodeta",
      "company": "Budimex SA",
      "urls": "https://www.praca.pl/geodeta_3407686.html#e49c363a49ea008ad82b8057827dcbfb"
    },
    {
      "name": "Geodeta",
      "company": "G4 Geodezja Sp. z o.o.",
      "urls": "https://www.praca.pl/geodeta_3406892.html#e49c363a49ea008ad82b8057827dcbfb"
    },
    {
      "name": "Geodeta [rekrutacja online]",
      "company": "Impel Tech Solutions Sp. Z o.o. Sp. K",
      "urls": "https://www.praca.pl/geodeta-rekrutacja-online_3357264.html#e49c363a49ea008ad82b8057827dcbfb"
    },
    {
      "name": "Geodeta / Inżynier Budowy",
      "company": "GruntBudowa",
      "urls": "https://www.praca.pl/geodeta-inzynier-budowy_3355898.html#e49c363a49ea008ad82b8057827dcbfb"
    }
  ],
  "284": [
    {
      "name": "Pracownik Biurowy w midzynarodowej organizacji z jzykiem fiskim (m/k) [rekrutacja prowadzona zdalnie]",
      "company": "CPL Jobs Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/pracownik-biurowy-w-miedzynarodowej-organizacji-z-jezykiem-finskim-m-k-rekrutacj-krakow,oferta,1000243220"
    },
    {
      "name": "Asystent ds. Administracji i Rozlicze",
      "company": "Interseroh Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ds-administracji-i-rozliczen-krakow,oferta,1000267588"
    },
    {
      "name": "Asystentka Dyrektora Zarzdzajcego",
      "company": "DACHY POLSKI sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-dyrektora-zarzadzajacego-krakow,oferta,500036709"
    },
    {
      "name": "Bussines Support Assitant",
      "company": "DOLINA CZEREMCHY WIESAWA CZAJKOWSKA",
      "urls": "https://www.pracuj.pl/praca/bussines-support-assitant-krakow,oferta,500036657"
    },
    {
      "name": "Asystentka/Asystent ds. administracyjnych",
      "company": "NEO HOSPITAL sp. z o.o. ONE SPӣKA KOMANDYTOWA",
      "urls": "https://www.pracuj.pl/praca/asystentka-asystent-ds-administracyjnych-krakow,oferta,500036548"
    },
    {
      "name": "Asystent/ka Oddziau",
      "company": "Nowodworski Estates Sp. z o.o. Sp. k.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-oddzialu-krakow,oferta,1000237166"
    },
    {
      "name": "Asystent/ka ds. Administracji",
      "company": "Colliers International Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-ds-administracji-krakow,oferta,1000262269"
    },
    {
      "name": "Asystentka rady nadzorczej",
      "company": "GD&K Consulting Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-rady-nadzorczej-krakow,oferta,1000251661"
    },
    {
      "name": "Administrative Assistant",
      "company": "CONSONANCE SOLUTIONS SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/administrative-assistant-krakow,oferta,1000253510"
    },
    {
      "name": "Asystentka",
      "company": "Gegenbauer Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-krakow,oferta,1000252419"
    },
    {
      "name": "Asystentka / Sekretarka - Concierge online",
      "company": "Recruit Europe Takeshige Yokota",
      "urls": "https://www.pracuj.pl/praca/asystentka-sekretarka-concierge-online-krakow,oferta,1000227254"
    },
    {
      "name": "Asystent/ka Zarzdu",
      "company": "MKS Cracovia Sportowa Spka Akcyjna",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-zarzadu-krakow,oferta,1000234174"
    },
    {
      "name": "Asystentka - Tumaczka",
      "company": "FPH METAL - TECH",
      "urls": "https://www.pracuj.pl/praca/asystentka-tlumaczka-krakow,oferta,1000235380"
    },
    {
      "name": "Sta w Dziale Finansowym i Administracji",
      "company": "Nordkalk Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/staz-w-dziale-finansowym-i-administracji-krakow,oferta,1000257079"
    },
    {
      "name": "Asystent Biura z bieg znajomoci jzyka angielskiego ",
      "company": "PI MANAGEMENT SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/asystent-biura-z-biegla-znajomoscia-jezyka-angielskiego-krakow,oferta,500033363"
    },
    {
      "name": "Asystent/ka Zarzdu z j. angielskim",
      "company": "W.KRUK S.A.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-zarzadu-z-j-angielskim-krakow,oferta,1000256472"
    },
    {
      "name": "Asystent /-ka Kierownika Projektu",
      "company": "Enervigo sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-kierownika-projektu-krakow,oferta,1000223118"
    },
    {
      "name": "Asystentka ds. administracyjno-personalnych",
      "company": "SWIETELSKY RAIL POLSKA Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-ds-administracyjno-personalnych-krakow,oferta,1000254635"
    },
    {
      "name": "Pracownik do obsugi klienta biznesowego z jzykiem fiskim (M/K)",
      "company": "CPL Jobs Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/pracownik-do-obslugi-klienta-biznesowego-z-jezykiem-finskim-m-k-krakow,oferta,1000228407"
    },
    {
      "name": "Recepcjonistka - Asystent biura",
      "company": "Doniec Grecki & Partnerzy Sp.k. ",
      "urls": "https://www.pracuj.pl/praca/recepcjonistka-asystent-biura-krakow,oferta,500035089"
    },
    {
      "name": "Modszy Specjalista ds. wsparcia administracyjnego z j. wgierskim (m/k)",
      "company": "CPL Jobs Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-wsparcia-administracyjnego-z-j-wegierskim-m-k-krakow,oferta,1000221605"
    },
    {
      "name": "Project Quality and Compliance Assistant",
      "company": "Creativ-Ceutical Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/project-quality-and-compliance-assistant-krakow,oferta,1000212167"
    },
    {
      "name": "Asystent/-ka Administracyjny/-a - Recepcjonista/-ka",
      "company": "Berlitz Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-administracyjny-a-recepcjonista-ka-krakow,oferta,1000245389"
    },
    {
      "name": "Full Time Administrative Assistant - Remote",
      "company": "WEB BESPOKERS FILIP KOTLARZ",
      "urls": "https://www.pracuj.pl/praca/full-time-administrative-assistant-remote-krakow-okolice,oferta,1000204756"
    },
    {
      "name": "Asystentka biura",
      "company": "TOP CLEANING SERVICE Halina Juszczak",
      "urls": "https://www.pracuj.pl/praca/asystentka-biura-krakow,oferta,1000191761"
    },
    {
      "name": "Asystent / Asystentka ds. administracyjnych",
      "company": "G4 GARAGE sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-asystentka-ds-administracyjnych-krakow,oferta,1000218023"
    },
    {
      "name": "Asystent biurowo - ksigowy",
      "company": "SKALSKI Spka z ograniczon odpowiedzialnoci Spka Komandytowa",
      "urls": "https://www.pracuj.pl/praca/asystent-biurowo-ksiegowy-krakow,oferta,7473629"
    },
    {
      "name": "Administrative Specialist with German",
      "company": "Znajd wymarzonego pracodawc",
      "urls": "https://www.pracuj.pl/praca/administrative-specialist-with-german-krakow,oferta,7473240"
    },
    {
      "name": "Asystent Biznesowy - Business Assistant (MBA/MS/MA)",
      "company": "Humtap Inc.",
      "urls": "https://www.pracuj.pl/praca/asystent-biznesowy-business-assistant-mba-ms-ma-krakow,oferta,1000201645"
    },
    {
      "name": "Management Assistant",
      "company": "Summa Linguae Spka Akcyjna ",
      "urls": "https://www.pracuj.pl/praca/management-assistant-krakow,oferta,7467462"
    },
    {
      "name": "Office Assistant / Asystent/ka Biura",
      "company": "People Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/office-assistant-asystent-ka-biura-krakow,oferta,1000192663"
    },
    {
      "name": "CE Operations Support Specialist",
      "company": "Tesco Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/ce-operations-support-specialist_3420908.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    }
  ],
  "285": [
    {
      "name": "Stanowisko urzędnicze ds. wdrażania (projektów EFS)",
      "company": "Wojewódzki Urząd Pracy w Krakowie",
      "urls": "https://pl.indeed.com/viewjob?jk=be5a4bfcbeb51cc2&fccid=d81219123eed79f6&vjs=3"
    },
    {
      "name": "Analityk IT (systemy ERP)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=5fef55ba2379d594&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "286": [
    {
      "name": "Asystent/ka ds. Administracji",
      "company": "Colliers International EMEA",
      "urls": "https://pl.indeed.com/viewjob?jk=d00f0e53c01bd9b8&fccid=ad9a461c6934bf2c&vjs=3"
    },
    {
      "name": "Administrator nieruchomości mieszkaniowych",
      "company": "PROMOS Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?/PROMOS-Facility-Services/jobs/Administrator-Nieruchomo%C5%9Bci-Mieszkaniowych-e5691a9ca97e20c2?fccid=4670259d1e1c248e&vjs=3"
    },
    {
      "name": "Menedżer w Dziale Galerii Handlowych ds. Zarządzania Galeria...",
      "company": "Carrefour",
      "urls": "https://pl.indeed.com/viewjob?jk=eece2c7d9e166ce8&fccid=669350d87ae4a4a6&vjs=3"
    },
    {
      "name": "ZARZĄDCA NIERUCHOMOŚCI",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com/viewjob?jk=a9580fd9372fc93a&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Zarządca/Administrator Nieruchomości KRAKÓW",
      "company": "Piotr Bondal",
      "urls": "https://pl.indeed.com/viewjob?jk=0dab6d83ceb7bb07&fccid=ec7868fb5eee7c1d&vjs=3"
    },
    {
      "name": "Administrator nieruchomości/Asystent Zarządcy Nieruchomości",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com/viewjob?jk=13b3f20b9dcdaf86&fccid=dd616958bd9ddc12&vjs=3"
    }
  ],
  "287": [
    {
      "name": "Agent Nieruchomości",
      "company": "Małopolska Grupa Inwestycyjna",
      "urls": "https://pl.indeed.com/viewjob?jk=65eeb43471e2a18f&fccid=9a225a2dd190d3d8&vjs=3"
    },
    {
      "name": "Pośrednik w Obrocie Nieruchomościami / Doradca Klienta / Age...",
      "company": "Metropolia Nieruchomości",
      "urls": "https://pl.indeed.com/viewjob?jk=61b1f89af2224064&fccid=e96f618ebe1b46d8&vjs=3"
    },
    {
      "name": "Specjalista ds. nieruchomości",
      "company": "GET.PL Nieruchomości",
      "urls": "https://pl.indeed.com/viewjob?jk=b0bb089c1817581e&fccid=f1dbbd5c5d751072&vjs=3"
    },
    {
      "name": "SPECJALISTA DS. NIERUCHOMOŚCI - ASYSTENT POŚREDNIKA",
      "company": "ALODIA NIERUCHOMOŚCI",
      "urls": "https://pl.indeed.com/viewjob?jk=53c8c98179486c14&fccid=a616ce5d562b43e0&vjs=3"
    },
    {
      "name": "Dyrektor ds. rozwoju rynku - finansowanie przedsiębiorców",
      "company": "Monument Support Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=af0492e6b15ab635&fccid=1f0952e23cca8b8c&vjs=3"
    },
    {
      "name": "Pośrednik / Doradca ds. Nieruchomości",
      "company": "GRUPA NIERUCHOMOŚCI KRAKÓW",
      "urls": "https://pl.indeed.com/viewjob?jk=1c222ef944f9feb8&fccid=6996c5e19b48c9db&vjs=3"
    },
    {
      "name": "POŚREDNIK NIERUCHOMOŚCI",
      "company": "ALODIA NIERUCHOMOŚCI",
      "urls": "https://pl.indeed.com/viewjob?jk=f6ad2ca5f41d60a4&fccid=a616ce5d562b43e0&vjs=3"
    },
    {
      "name": "Specjalista ds. Sprzedaży",
      "company": "LIVEKID SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "urls": "https://pl.indeed.com/viewjob?jk=7e21618a9f584da7&fccid=cdcf0761c7478cc8&vjs=3"
    },
    {
      "name": "Koordynator ds. Najmu",
      "company": "MBE sp. zo. o. sk",
      "urls": "https://pl.indeed.com/viewjob?jk=4716a61627f7db94&fccid=427c831ce3bc873d&vjs=3"
    },
    {
      "name": "Doradca Klienta",
      "company": "Phinance S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=80a59ee8cecf4ea1&fccid=14c5790bc3c37481&vjs=3"
    },
    {
      "name": "Doradca ds. Nieruchomości",
      "company": "PÓŁNOC Nieruchomości Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=f8b8059935969306&fccid=b37c260c5e2c2084&vjs=3"
    },
    {
      "name": "Sprzedaż usług prawniczych- bez doświadczenia",
      "company": "LEXNONSTOP",
      "urls": "https://pl.indeed.com/viewjob?jk=49b4fbd64d284694&fccid=3e731c18cdaac904&vjs=3"
    },
    {
      "name": "Pośrednika lub agenta przyjmę do pracy",
      "company": "Galus Nieruchomości",
      "urls": "https://pl.indeed.com/viewjob?jk=2513e2ffb8f19300&fccid=7ad28750b843173f&vjs=3"
    },
    {
      "name": "Specjalista ds. Sprzedaży",
      "company": "STOWARZYSZENIE INSTYTUT KOSCIUSZKI",
      "urls": "https://pl.indeed.com/viewjob?jk=be643eeb423e30d5&fccid=e6b265f5aeb2a147&vjs=3"
    },
    {
      "name": "Junior Reporting Analyst with Spanish",
      "company": "PEPSICO GLOBAL BUSINESS SERVICES POLAND SP Z O O",
      "urls": "https://pl.indeed.com/viewjob?jk=e79ed36a217c7728&fccid=f313dd74235845bc&vjs=3"
    },
    {
      "name": "Junior Reporting Analyst with French",
      "company": "PEPSICO GLOBAL BUSINESS SERVICES POLAND SP Z O O",
      "urls": "https://pl.indeed.com/viewjob?jk=0015939483648f78&fccid=f313dd74235845bc&vjs=3"
    }
  ],
  "288": [],
  "289": [],
  "290": [],
  "291": [
    {
      "name": "PRACA: Specjalista ds. sprzedaży systemów GIS",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=72e1402fc1022a52&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "PRACA: Dział Przetwarzania Danych – Zespół Terenowy",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=b57c65db31653072&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "STAŻ: Dział Przetwarzania Danych",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=072ae257db6a8cef&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "Senior JavaScript Developer",
      "company": "j-labs",
      "urls": "https://pl.indeed.com/viewjob?jk=c4d6013e661ccd5b&fccid=a4750d1f1c80cb70&vjs=3"
    }
  ],
  "292": [
    {
      "name": "Asystent/ka Oddziau",
      "company": "Nowodworski Estates Sp. z o.o. Sp. k.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-oddzialu-krakow,oferta,1000237166"
    },
    {
      "name": "Full Time Administrative Assistant - Remote",
      "company": "WEB BESPOKERS FILIP KOTLARZ",
      "urls": "https://www.pracuj.pl/praca/full-time-administrative-assistant-remote-krakow-okolice,oferta,1000204756"
    },
    {
      "name": "Modszy Specjalista ds. Technicznego Wsparcia Sprzeday",
      "company": "BAKOTECH Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-technicznego-wsparcia-sprzedazy-krakow,oferta,7471445"
    }
  ],
  "293": [
    {
      "name": "Projektant procesów technologicznych",
      "company": "Devire",
      "urls": "https://pl.indeed.com/viewjob?jk=f62d862eae7aa79e&fccid=dac7798bc9cb142c&vjs=3"
    }
  ],
  "294": [],
  "295": [
    {
      "name": "Asystent(ka) Dziau Handlowego",
      "company": "ZAMAK MERCATOR SP. Z O.O.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-dzialu-handlowego-krakow-okolice,oferta,1000198624"
    },
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#cf32a7e1e1249a31dced6f86de8d2bac"
    },
    {
      "name": "Technolog Piekarnictwa",
      "company": "MA-TRANS Stachecki Sp.k.",
      "urls": "https://www.praca.pl/technolog-piekarnictwa_3410852.html#cf32a7e1e1249a31dced6f86de8d2bac"
    },
    {
      "name": "Młodszy projektant odzieży marki Wólczanka",
      "company": "VRG S.A.",
      "urls": "https://www.praca.pl/mlodszy-projektant-odziezy-marki-wolczanka_3368456.html#cf32a7e1e1249a31dced6f86de8d2bac"
    },
    {
      "name": "Asystent Technologa / Technolog",
      "company": "Euronova Sp.z o.o. Sp.k.",
      "urls": "https://www.praca.pl/asystent-technologa-technolog_3324544.html#cf32a7e1e1249a31dced6f86de8d2bac"
    },
    {
      "name": "Konstruktor - Technolog",
      "company": "KMW INVEST SP. Z O.O.",
      "urls": "https://www.praca.pl/konstruktor-technolog_3368046.html#cf32a7e1e1249a31dced6f86de8d2bac"
    },
    {
      "name": "Technolog robót wykończeniowych",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/technolog-robot-wykonczeniowych_3397352.html#cf32a7e1e1249a31dced6f86de8d2bac"
    }
  ],
  "296": [],
  "297": [],
  "298": [
    {
      "name": "Modszy Przedstawiciel Handlowy",
      "company": "Solid Group Sp. z o. o. sp. k.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-przedstawiciel-handlowy-krakow,oferta,1000236473"
    },
    {
      "name": "Asystent/ka Przedstawiciela Handlowego",
      "company": "Solid Group Sp. z o. o. sp. k.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-przedstawiciela-handlowego-krakow,oferta,1000259756"
    }
  ],
  "299": [
    {
      "name": "Nauczyciel przedmiotów ogólnokształcących",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-ogolnoksztalcacych_3372410.html#8e12ab6f4ef7b3ad6612c7ed841f8383"
    },
    {
      "name": "Nauczyciel / Korepetytor",
      "company": "Moose Polecane Korepetycje Zuzanna Łoś, Marek Łoś Spółka Jawna",
      "urls": "https://www.praca.pl/nauczyciel-korepetytor_3343584.html#8e12ab6f4ef7b3ad6612c7ed841f8383"
    }
  ],
  "300": [
    {
      "name": "SPECJALISTA DO SPRAW ZAMÓWIEŃ, LOGISTYKI I OBSŁUGI KLIENTA",
      "company": "MONOstudio",
      "urls": "https://pl.indeed.com/viewjob?jk=fd1547044be442bc&fccid=f21426e8a7bce1ed&vjs=3"
    },
    {
      "name": "Wychowawca - Instruktor zajęć plastycznych",
      "company": "Stowarzyszenie SIEMACHA",
      "urls": "https://pl.indeed.com/viewjob?jk=198716fc57864994&fccid=277d9d49eab72fcb&vjs=3"
    }
  ],
  "301": [],
  "302": [
    {
      "name": "LOGISTYK / MAGAZYNIER",
      "company": "Leroy Merlin Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=a44521d81005c722&fccid=cd30c4ea8664400d&vjs=3"
    },
    {
      "name": "DORADCA KLIENTA – SEKTOR TECHNIKA",
      "company": "Leroy Merlin Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=eb2997d215e3ea42&fccid=cd30c4ea8664400d&vjs=3"
    },
    {
      "name": "DORADCA KLIENTA",
      "company": "Leroy Merlin Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=d4cab9cf32984d3a&fccid=cd30c4ea8664400d&vjs=3"
    },
    {
      "name": "PRACOWNIK GRUPY TOWARUJĄCEJ",
      "company": "Leroy Merlin Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=a751bb5a4be2de03&fccid=cd30c4ea8664400d&vjs=3"
    },
    {
      "name": "KASJER/KASJERKA",
      "company": "Leroy Merlin Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=d7ed6078ff58a140&fccid=cd30c4ea8664400d&vjs=3"
    },
    {
      "name": "DORADCA KLIENTA – SEKTOR OGRÓD",
      "company": "Leroy Merlin Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=10fa608d21ac0393&fccid=cd30c4ea8664400d&vjs=3"
    },
    {
      "name": "Przedstawiciel handlowy (materiały budowlane) - Kraków",
      "company": "Alhar Klinkier",
      "urls": "https://pl.indeed.com/viewjob?jk=fd29de4ae89af837&fccid=557d3d9263148d15&vjs=3"
    },
    {
      "name": "Doradca Techniczno-Handlowy (materiały budowlane)",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=12cd1acc985da782&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Przedstawiciel handlowy - Elewacje klinkierowe",
      "company": "Alhar sp. z o.o. sp.k.",
      "urls": "https://pl.indeed.com/viewjob?jk=10c223fd27728e7f&fccid=7e6b573a8cbf605a&vjs=3"
    }
  ],
  "303": [],
  "304": [],
  "305": [
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    }
  ],
  "306": [
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    }
  ],
  "307": [
    {
      "name": "Konsultant ds. rozwiązań biznesowych (telekomunikacja BSS/OS...",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=b83dd00cf2be1af4&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "308": [],
  "309": [],
  "310": [],
  "311": [],
  "312": [
    {
      "name": "Regionalny Menadżer ds. Sprzedaży",
      "company": "AxPro Concept Sp. zo.o",
      "urls": "https://www.praca.pl/regionalny-menadzer-ds-sprzedazy_3348232.html#81ede161c75e8e37bf4025dd8449b55b"
    }
  ],
  "313": [],
  "314": [
    {
      "name": "Nauczyciel przedmiotów ogólnokształcących",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-ogolnoksztalcacych_3372410.html#2f00bda55a8ab0cf534130ec5db5bebc"
    },
    {
      "name": "Nauczyciel / Korepetytor",
      "company": "Moose Polecane Korepetycje Zuzanna Łoś, Marek Łoś Spółka Jawna",
      "urls": "https://www.praca.pl/nauczyciel-korepetytor_3343584.html#2f00bda55a8ab0cf534130ec5db5bebc"
    }
  ],
  "315": [
    {
      "name": "Doradca naukowy (sprzęt laboratoryjny) / Przedstawiciel handlowy",
      "company": "Gi Group Sp z o.o.",
      "urls": "https://www.praca.pl/doradca-naukowy-sprzet-laboratoryjny-przedstawiciel-handlowy_3372676.html#d67741c4648d0cb72b1976f95a34e141"
    }
  ],
  "316": [],
  "317": [],
  "318": [
    {
      "name": "Specjalista ds. Badawczych",
      "company": "Cebrio",
      "urls": "https://pl.indeed.com/viewjob?jk=0bcbb25d41fdae14&fccid=1cd25ec87a06c80b&vjs=3"
    }
  ],
  "319": [
    {
      "name": "Asystent(ka) Dziau Handlowego",
      "company": "ZAMAK MERCATOR SP. Z O.O.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-dzialu-handlowego-krakow-okolice,oferta,1000198624"
    }
  ],
  "320": [
    {
      "name": "Kierownik Robót Budowlanych",
      "company": "EPCM",
      "urls": "https://pl.indeed.com/viewjob?jk=ee00c6e4d872a098&fccid=a877bb8252ef54dd&vjs=3"
    },
    {
      "name": "Kierownik robót",
      "company": "TOR-KRAK",
      "urls": "https://pl.indeed.com/viewjob?jk=d7c16a1770219df5&fccid=7b6043ac7d4ffc11&vjs=3"
    },
    {
      "name": "Kierownik Robót (Solution Deployment Manager)",
      "company": "Thales Group",
      "urls": "https://pl.indeed.com/viewjob?jk=71ab7b696762fe62&fccid=b920aab5fd60595d&vjs=3"
    },
    {
      "name": "Kierownik Projektu",
      "company": "OPTIVO consulting",
      "urls": "https://pl.indeed.com/viewjob?jk=4b72311c7929fd41&fccid=1e7ed4fb4a610679&vjs=3"
    }
  ],
  "321": [],
  "322": [],
  "323": [],
  "324": [
    {
      "name": "Asystent(ka) Dziau Handlowego",
      "company": "ZAMAK MERCATOR SP. Z O.O.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-dzialu-handlowego-krakow-okolice,oferta,1000198624"
    }
  ],
  "325": [
    {
      "name": "Junior Quality Engineer",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-quality-engineer-krakow,oferta,7477572"
    }
  ],
  "326": [],
  "327": [],
  "328": [
    {
      "name": "Inżynier Budowy",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy_3338932.html#b0149aa83a7ebf6909dcc7b3964f89cd"
    }
  ],
  "329": [],
  "330": [
    {
      "name": "Asystent(ka) Dziau Handlowego",
      "company": "ZAMAK MERCATOR SP. Z O.O.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-dzialu-handlowego-krakow-okolice,oferta,1000198624"
    },
    {
      "name": "Chemik - Analityk",
      "company": "Fagron sp. z o.o.",
      "urls": "https://www.praca.pl/chemik-analityk_3409814.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Analityk laboratoryjny",
      "company": "Philip Morris International",
      "urls": "https://www.praca.pl/analityk-laboratoryjny_3339282.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Laborant",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/laborant_3404996.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Młodszy Specjalista Analityk w Laboratorium Biologicznym Działu Kontroli Jakości",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/mlodszy-specjalista-analityk-w-laboratorium-biologicznym-dzialu-kontroli-jakosci_3396516.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": " Diagnosta laboratoryjny - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/diagnosta-laboratoryjny-branza-medyczna_3378768.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Asystent Genetyka - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/asystent-genetyka-branza-medyczna_3378764.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Specjalista od titratorów [rekrutacja online]",
      "company": "Labindex",
      "urls": "https://www.praca.pl/specjalista-od-titratorow-rekrutacja-online_3370450.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    }
  ],
  "331": [],
  "332": [
    {
      "name": "Dyrektor Kontraktów – sektor Oil&Gas",
      "company": "controlprocess",
      "urls": "https://pl.indeed.com/viewjob?jk=b18ed159d3add9dd&fccid=66aef5497a72caee&vjs=3"
    },
    {
      "name": "Kierownik Budowy",
      "company": "EPCM",
      "urls": "https://pl.indeed.com/viewjob?jk=2d57e544bd1aeef8&fccid=a877bb8252ef54dd&vjs=3"
    },
    {
      "name": "Specjalista ds. Finansowo-Księgowych",
      "company": "AERO-GSE",
      "urls": "https://pl.indeed.com/viewjob?/AERO--GSE-Sp.-z-o.o.-Sp.-K./jobs/Specjalista-Do-Spraw-Finansowo-Ksi%C4%99gowych-af77ea3cf7793208?fccid=d906003c284344e7&vjs=3"
    },
    {
      "name": "Junior Full Stack Developer",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com/viewjob?jk=346cc28ca0d2e4cc&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "Konsultant pomocy technicznej systemu ERP Streamsoft Prestiż",
      "company": "Streamsoft",
      "urls": "https://pl.indeed.com/viewjob?jk=2d62f62131c64c6f&fccid=1240fd6f430e60df&vjs=3"
    },
    {
      "name": "Brand Manager",
      "company": "HEADHUNTERS GROUP",
      "urls": "https://pl.indeed.com/viewjob?jk=962d397e2ef9ab2c&fccid=2626896dbec10c5d&vjs=3"
    },
    {
      "name": "Dyrektor ds. Sprzedaży - produkcja prefabrykowanych konstruk...",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com/viewjob?jk=09b3123c70bbdca1&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Key Account Manager - Project Manager",
      "company": "Klient firmy Talenthouse",
      "urls": "https://pl.indeed.com/viewjob?jk=41d921305563df2f&fccid=e73219c89efeb2f6&vjs=3"
    },
    {
      "name": "Senior Full Stack Developer",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com/viewjob?jk=663aad59306ff336&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "Regular PHP Developer",
      "company": "Mobilem Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=6a771b72c07c33b3&fccid=18942caf6173fed4&vjs=3"
    },
    {
      "name": "Full Stack PHP Developer",
      "company": "Mobilem Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=eabfdbe67971e30c&fccid=18942caf6173fed4&vjs=3"
    },
    {
      "name": "Pracownik biurowy z j. hiszpańskim (student/ka)",
      "company": "Genpact PL",
      "urls": "https://pl.indeed.com/viewjob?jk=70f331d8e9cf4c0b&fccid=afe30394bfba1470&vjs=3"
    },
    {
      "name": "Chief Operating Officer",
      "company": "Strategie Personalne",
      "urls": "https://pl.indeed.com/viewjob?jk=661e92d9a4f5524d&fccid=29ef11a4e93c431f&vjs=3"
    },
    {
      "name": "Senior User Acquisition Manager",
      "company": "Strategie Personalne",
      "urls": "https://pl.indeed.com/viewjob?jk=2ec69d0c1f94999e&fccid=29ef11a4e93c431f&vjs=3"
    }
  ],
  "333": [],
  "334": [
    {
      "name": "Inżynier Procesu / Produkcji - oferta z pakietem relokacyjny...",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=eba88f7f76130589&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Elektronik – Konstruktor",
      "company": "2Bora",
      "urls": "https://pl.indeed.com/viewjob?jk=1412ed0791ddda41&fccid=81eeaa9aaf867a65&vjs=3"
    },
    {
      "name": "Inżynier ds kalkulacji / przygotowania produkcji (m / k",
      "company": "STRABAG Infrastruktura Południe Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=e67453e66a025c10&fccid=91ff00d5203b00da&vjs=3"
    },
    {
      "name": "Inżynier Procesu Automotive Greenfield",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=83af8b65d67f08d7&fccid=062f71e131e87cf0&vjs=3"
    }
  ],
  "335": [
    {
      "name": "Mechanik, Serwisant wózków widłowych",
      "company": "Emtor Spółka z o.o.",
      "urls": "https://www.praca.pl/mechanik,serwisant-wozkow-widlowych_3389614.html#931435cae6afd62258f90d68dda88132"
    },
    {
      "name": "Kierownik strefy – menadżer ds. sprzedaży w sieci dealerskiej",
      "company": "mFinanse S.A.",
      "urls": "https://www.praca.pl/kierownik-strefy-menadzer-ds-sprzedazy-w-sieci-dealerskiej_3378960.html#931435cae6afd62258f90d68dda88132"
    },
    {
      "name": "Senior / Advanced Software Developer",
      "company": "Merit Poland Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-advanced-software-developer_3365188.html#931435cae6afd62258f90d68dda88132"
    },
    {
      "name": "Sprzedawca samochodów dostawczych",
      "company": "MOTOKARIERA S.C.",
      "urls": "https://www.praca.pl/sprzedawca-samochodow-dostawczych_3416436.html#931435cae6afd62258f90d68dda88132"
    },
    {
      "name": "Doradca serwisowy",
      "company": "MOTOKARIERA S.C.",
      "urls": "https://www.praca.pl/doradca-serwisowy_3416416.html#931435cae6afd62258f90d68dda88132"
    },
    {
      "name": "Mechanik Samochodowy / Mechanik Sprzętu Budowlanego / Pomocnik Mechanika",
      "company": "PBU \"GOMIBUD\" Sp. z o.o.",
      "urls": "https://www.praca.pl/mechanik-samochodowy-mechanik-sprzetu-budowlanego-pomocnik-mechanika_3333714.html#931435cae6afd62258f90d68dda88132"
    },
    {
      "name": "Handlowiec",
      "company": "OPOLTRANS Spółka z o.o.",
      "urls": "https://www.praca.pl/handlowiec_3378358.html#931435cae6afd62258f90d68dda88132"
    }
  ],
  "336": [
    {
      "name": "Specjalista ds. Procesów Magazynowych",
      "company": "FIEGE Logistik Stiftung & Co. KG",
      "urls": "https://pl.indeed.com/viewjob?jk=ad5637f900265eef&fccid=c21abee0de715f4a&vjs=3"
    },
    {
      "name": "Kierownik ds. Logistyki",
      "company": "Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=f0cb1db02f3b3d64&fccid=eb3baf007981cd9e&vjs=3"
    },
    {
      "name": "Kierownik ds. rozwoju biznesu (international sales)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=558013ecbe824cb6&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "337": [
    {
      "name": "Asystent/ka ds. Exportu umowa o pracę",
      "company": "Euro-Trade",
      "urls": "https://pl.indeed.com/viewjob?jk=f6585873e3a0de3f&fccid=2eeccc37137128ae&vjs=3"
    }
  ],
  "338": [
    {
      "name": "Asystent(ka) Dziau Handlowego",
      "company": "ZAMAK MERCATOR SP. Z O.O.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-dzialu-handlowego-krakow-okolice,oferta,1000198624"
    },
    {
      "name": "Chemik - Analityk",
      "company": "Fagron sp. z o.o.",
      "urls": "https://www.praca.pl/chemik-analityk_3409814.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Analityk laboratoryjny",
      "company": "Philip Morris International",
      "urls": "https://www.praca.pl/analityk-laboratoryjny_3339282.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Laborant",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/laborant_3404996.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Młodszy Specjalista Analityk w Laboratorium Biologicznym Działu Kontroli Jakości",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/mlodszy-specjalista-analityk-w-laboratorium-biologicznym-dzialu-kontroli-jakosci_3396516.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": " Diagnosta laboratoryjny - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/diagnosta-laboratoryjny-branza-medyczna_3378768.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Asystent Genetyka - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/asystent-genetyka-branza-medyczna_3378764.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Specjalista od titratorów [rekrutacja online]",
      "company": "Labindex",
      "urls": "https://www.praca.pl/specjalista-od-titratorow-rekrutacja-online_3370450.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    }
  ],
  "339": [],
  "340": [],
  "341": [],
  "342": [],
  "343": [
    {
      "name": "Referent ds. Spedycji Krajowej",
      "company": "JAS-FBG S.A.",
      "urls": "https://www.pracuj.pl/praca/referent-ds-spedycji-krajowej-krakow,oferta,1000264546"
    },
    {
      "name": "Export Assistant",
      "company": "Maspex",
      "urls": "https://www.pracuj.pl/praca/export-assistant-krakow-okolice,oferta,1000234122"
    },
    {
      "name": "Logistyk / Magazynier",
      "company": "Leroy Merlin Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/logistyk-magazynier_3383214.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca - dostawca sprzedaży internetowej",
      "company": "Tesco Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/kierowca-dostawca-sprzedazy-internetowej_3366910.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/it-support-analyst_3401260.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Przedstawiciel Handlowy",
      "company": "E100 International Trade sp. z o.o",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy_3390054.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca Samochodu Ciężarowego / Operator HDS ",
      "company": "Primost Południe Sp. z o.o.",
      "urls": "https://www.praca.pl/kierowca-samochodu-ciezarowego-operator-hds_3419880.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Cieśla - Zbrojarz",
      "company": "Primost Południe Sp. z o.o.",
      "urls": "https://www.praca.pl/ciesla-zbrojarz_3419886.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Spedytor międzynarodowy",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/spedytor-miedzynarodowy_3404358.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Spedytor / Starszy Spedytor FTL",
      "company": "PEKAES Sp. z o.o.",
      "urls": "https://www.praca.pl/spedytor-starszy-spedytor-ftl_3372602.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Elektryk Przemysłowy",
      "company": "PERFECT TEAM Marcin Kaszta",
      "urls": "https://www.praca.pl/elektryk-przemyslowy_3396140.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Mechanik - Elektromechanik",
      "company": "SETMIL Sp. z o.o.",
      "urls": "https://www.praca.pl/mechanik-elektromechanik_3372726.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca / Magazynier",
      "company": "MGsolutions MGJJ Sp. z o. o.  Sp. k.",
      "urls": "https://www.praca.pl/kierowca-magazynier_3413790.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Wiceprezes / Członek Zarządu firmy świadczącej usługi zarządzania i nadzoru (inżyniera kontraktu) nad kontraktami budowlanymi w sektorze ochrony środowiska, przemysłu, transportu, energetyki i innych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/wiceprezes-czlonek-zarzadu-firmy-swiadczacej-uslugi-zarzadzania-i-nadzoru-inzyniera-kontraktu-nad-kontraktami-budowlanymi-w-sektorze-ochrony-srodowiska,przemyslu,transportu,energetyki-i-innych_3368116.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca kat. C+E",
      "company": "Nowak-Mosty Sp. z o.o.",
      "urls": "https://www.praca.pl/kierowca-kat-c-e_3335298.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Spedytor Drogowy Międzynarodowy ",
      "company": "PBSG Spółka Komandytowa",
      "urls": "https://www.praca.pl/spedytor-drogowy-miedzynarodowy_3413558.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca kat. C+E lub C+E+HDS",
      "company": "PBU \"GOMIBUD\" Sp. z o.o.",
      "urls": "https://www.praca.pl/kierowca-kat-c-e-lub-c-e-hds_3333708.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Operator ładowarki teleskopowej obrotowej",
      "company": "Nowak-Mosty Sp. z o.o.",
      "urls": "https://www.praca.pl/operator-ladowarki-teleskopowej-obrotowej_3335316.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Program Praktyk Letnich",
      "company": "ROHLIG SUUS Logistics SA",
      "urls": "https://www.praca.pl/program-praktyk-letnich_3410442.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca międzynarodowy z kategorią C+E i ADR",
      "company": "Professional Thermo Logistics Sp. z o.o",
      "urls": "https://www.praca.pl/kierowca-miedzynarodowy-z-kategoria-c-e-i-adr_3380868.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca C+E CE (międzynarodowy - EU Europa)",
      "company": "MAGTRANS Sp. z o. o.",
      "urls": "https://www.praca.pl/kierowca-c-e-ce-miedzynarodowy-eu-europa_3378348.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca międzynarodowy kat. B",
      "company": "WISE INVESTMENTS SP Z O O SPÓŁKA KOMANDYTOWA",
      "urls": "https://www.praca.pl/kierowca-miedzynarodowy-kat-b_3398460.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Dekarz",
      "company": "PERFECT TEAM Marcin Kaszta",
      "urls": "https://www.praca.pl/dekarz_3370206.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Specjalista ds. Sprzedaży Usług Transportowych",
      "company": "MOTOKARIERA S.C.",
      "urls": "https://www.praca.pl/specjalista-ds-sprzedazy-uslug-transportowych_3380770.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Dostawca potraw",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/dostawca-potraw_3424320.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca taxi kat. b",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/kierowca-taxi-kat-b_3400120.html#f039daed501b9d552e9f6ed171a37da2"
    }
  ],
  "344": [
    {
      "name": "Asystent-ka Kierownika Kontraktu",
      "company": "\"TK-Bud spka z ograniczon odpowiedzialnoci\" sp. k.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-kierownika-kontraktu-krakow,oferta,500036082"
    },
    {
      "name": "Asystent /-ka Kierownika Projektu",
      "company": "Enervigo sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-kierownika-projektu-krakow,oferta,1000223118"
    },
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    },
    {
      "name": "Asystent Projektanta Instalatora",
      "company": "OTS-IP sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-instalatora-krakow,oferta,500033908"
    },
    {
      "name": "Asystent projektanta konstrukcji budowlanych",
      "company": "HW constructions, Henryk Wrbel",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-konstrukcji-budowlanych-krakow,oferta,500033646"
    },
    {
      "name": "Przedstawiciel Handlowy - Ogrodzenia / kanał B2B",
      "company": "Work & Business Solutions",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy-ogrodzenia-kanal-b2b_3394316.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Inżynier budowy",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy_3410072.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Kierownik Robót Mechanicznych i Sanitarnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-mechanicznych-i-sanitarnych_3410188.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Kierownik budowy \\ Kierownik robót",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-kierownik-robot_3410224.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Kierownik budowy",
      "company": "Przedsiębiorstwo Remontowo-Budowlane AGAD Sp z.o.o",
      "urls": "https://www.praca.pl/kierownik-budowy_3366550.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Menadżer Kontraktów",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/menadzer-kontraktow_3364656.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Inspektor Nadzoru Elektrycznego [rekrutacja prowadzona online]",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/inspektor-nadzoru-elektrycznego-rekrutacja-prowadzona-online_3378950.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Geodeta",
      "company": "Budimex SA",
      "urls": "https://www.praca.pl/geodeta_3407686.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Inżynier Budowy Mostów",
      "company": "Primost Południe Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-budowy-mostow_3389088.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Geodeta",
      "company": "G4 Geodezja Sp. z o.o.",
      "urls": "https://www.praca.pl/geodeta_3406892.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Kierownik Budowy / Kierownik Kontraktu na budowie Oczyszczalni Ścieków",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-kierownik-kontraktu-na-budowie-oczyszczalni-sciekow_3376616.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Pracownik Budowlany -  Brukarz",
      "company": "Intrakt Sp.z o.o.",
      "urls": "https://www.praca.pl/pracownik-budowlany-brukarz_3389116.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Brygadzista robót elektrycznych [rekrutacja online]",
      "company": "Synago Małgorzata Jankowska",
      "urls": "https://www.praca.pl/brygadzista-robot-elektrycznych-rekrutacja-online_3405072.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Monter / Pomocnik operatora wiertnicy",
      "company": "NAWITEL SP. Z O. O.",
      "urls": "https://www.praca.pl/monter-pomocnik-operatora-wiertnicy_3405188.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Monter sieci / Pomocnik operatora wiertnicy",
      "company": "NAWITEL SP. Z O. O.",
      "urls": "https://www.praca.pl/monter-sieci-pomocnik-operatora-wiertnicy_3415968.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Pracownik do robót ogólnobudowlanych (także ekipa)",
      "company": "J. Cezar Sp. z o.o.",
      "urls": "https://www.praca.pl/pracownik-do-robot-ogolnobudowlanych-takze-ekipa_3376716.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Architekt",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/architekt_3405096.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Inżynier Budowy",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy_3338932.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Kierownik robót elektrycznych ",
      "company": "TRAKCJA PRKiI S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-elektrycznych_3372304.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Inspektor ds. ofertowania i kosztorysowania",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/inspektor-ds-ofertowania-i-kosztorysowania_3337376.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Specjalista ds. ofertowania",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-ofertowania_3417214.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": " Specjalista ds. kosztorysowania – obiekty kubaturowe",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-kosztorysowania-obiekty-kubaturowe_3417216.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    }
  ],
  "345": [],
  "346": [],
  "347": [
    {
      "name": "Nauczyciel przedmiotów ogólnokształcących",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-ogolnoksztalcacych_3372410.html#4baee2d36736a8d1c17df099730fa50d"
    },
    {
      "name": "Nauczyciel / Korepetytor",
      "company": "Moose Polecane Korepetycje Zuzanna Łoś, Marek Łoś Spółka Jawna",
      "urls": "https://www.praca.pl/nauczyciel-korepetytor_3343584.html#4baee2d36736a8d1c17df099730fa50d"
    }
  ],
  "348": [
    {
      "name": "Specjalista ds. dokumentacji technicznej z jęz. angielskim (...",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=65fbe80ad0e233b0&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "xxx",
      "urls": "349"
    }
  ],
  "350": [
    {
      "name": "Junior Quality Engineer",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-quality-engineer-krakow,oferta,7477572"
    }
  ],
  "351": [],
  "352": [],
  "353": [
    {
      "name": "Modszy Specjalista ds. obsugi Klienta",
      "company": "FarmaProm Polska Sp. z o.o. Sp. K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-krakow,oferta,1000259564"
    },
    {
      "name": "Full Time Administrative Assistant - Remote",
      "company": "WEB BESPOKERS FILIP KOTLARZ",
      "urls": "https://www.pracuj.pl/praca/full-time-administrative-assistant-remote-krakow-okolice,oferta,1000204756"
    },
    {
      "name": "Asystent(ka) Dziau Handlowego",
      "company": "ZAMAK MERCATOR SP. Z O.O.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-dzialu-handlowego-krakow-okolice,oferta,1000198624"
    },
    {
      "name": "Modszy Specjalista ds. Technicznego Wsparcia Sprzeday",
      "company": "BAKOTECH Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-technicznego-wsparcia-sprzedazy-krakow,oferta,7471445"
    },
    {
      "name": "Praktykant Salesforce  get the HOT Salesforce skill",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,7468135"
    },
    {
      "name": "Senior L2 Support Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-l2-support-engineer_3382876.html#7605e72f142d936e264b97f1dae90a1d"
    }
  ],
  "354": [
    {
      "name": "PRAKTYKANT/STAŻYSTA DS. OCHRONY ŚRODOWISKA",
      "company": "Future Green Innovations",
      "urls": "https://pl.indeed.com/viewjob?jk=58177fbf054c4edd&fccid=5981b74173f9ac17&vjs=3"
    }
  ],
  "355": [
    {
      "name": "Kierownik Projektu",
      "company": "EC Engineering",
      "urls": "https://pl.indeed.com/viewjob?jk=7aae45b0fed6b2fa&fccid=dd2bc65880e72b4a&vjs=3"
    },
    {
      "name": "Pracownik administracyjny",
      "company": "Collegium Medicum Uniwersytetu Jagiellońskiego w K...",
      "urls": "https://pl.indeed.com/viewjob?jk=8416e8d4ab908cf4&fccid=f0638f9cf4b08fa5&vjs=3"
    },
    {
      "name": "Product Implementation Specialist",
      "company": "Dotlinkers",
      "urls": "https://pl.indeed.com/viewjob?jk=2baf7071b198aece&fccid=c62351057abf05f6&vjs=3"
    },
    {
      "name": "Business Process Improvement Manager",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com/viewjob?jk=64e5a4c6893162f1&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "Senior Business Controller – Kraków",
      "company": "People Service Recruitment Group",
      "urls": "https://pl.indeed.com/viewjob?jk=c5745aa8a0cd9280&fccid=b2795a71c9d1222d&vjs=3"
    },
    {
      "name": "Koordynator Testów",
      "company": "ProData Consult",
      "urls": "https://pl.indeed.com/viewjob?jk=8236f470a9027b02&fccid=fa336ade0bd80ccd&vjs=3"
    },
    {
      "name": "Social Media Specialist",
      "company": "Veneo",
      "urls": "https://pl.indeed.com/viewjob?jk=4c363984e58a6a2b&fccid=d055a1ba91135454&vjs=3"
    },
    {
      "name": "Doświadczony Asystent/Senior, Business Tax Advisory, Kraków/...",
      "company": "EY",
      "urls": "https://pl.indeed.com/viewjob?jk=24d4bcdc2792fbfe&fccid=1544766d4c2915b0&vjs=3"
    },
    {
      "name": "IT Support Technician",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com/viewjob?jk=0842ddbe0837035a&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Assistant Manager z j. niemieckim",
      "company": "dotCommunity",
      "urls": "https://pl.indeed.com/viewjob?/dotCommunity/jobs/Assistant-Manager-Z-Niemieckim-1c159297550ea523?fccid=b24c832dd0dc2a5d&vjs=3"
    },
    {
      "name": "Kierownik projektu (bankowość)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=8641baceed963f2f&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Global Injection Molding Expert for Supplier Quality",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=f3464b3a6356f584&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=0dbe208d18437dbd&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "IT Project Manager",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com/viewjob?jk=e14af56a0c91384f&fccid=4fcb59d2ba8f65d1&vjs=3"
    }
  ],
  "356": [
    {
      "name": "Specjalista ds. Procesów Magazynowych",
      "company": "FIEGE Logistik Stiftung & Co. KG",
      "urls": "https://pl.indeed.com/viewjob?jk=ad5637f900265eef&fccid=c21abee0de715f4a&vjs=3"
    },
    {
      "name": "Praca w j. obcych: niderlandzki / czeski",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=a751f995651b5d10&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Pracownik Działu Magazynu",
      "company": "Alfa Laval",
      "urls": "https://pl.indeed.com/viewjob?jk=e0e0427218496ece&fccid=ec4917fdb79e20eb&vjs=3"
    },
    {
      "name": "Tokarz",
      "company": "Alfa Laval",
      "urls": "https://pl.indeed.com/viewjob?jk=33e12058e4c2a749&fccid=ec4917fdb79e20eb&vjs=3"
    },
    {
      "name": "Specjalista ds. Obsługi Klienta z jęz. niemieckim C1",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=5d48ab48926b2611&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Transformation Coordinator - PMO",
      "company": "PepsiCo",
      "urls": "https://pl.indeed.com/viewjob?jk=4af96b7c26ffbf3f&fccid=2973259ddc967948&vjs=3"
    },
    {
      "name": "Lean Six Sigma Black Belt",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=87294ff6effd6333&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Global Customer Service Manager",
      "company": "Accenture",
      "urls": "https://pl.indeed.com/viewjob?jk=17fc9d817015d098&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Business Process Improvement Manager",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com/viewjob?jk=64e5a4c6893162f1&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "CONTINUOUS IMPROVEMENT MANAGER",
      "company": "ENGINEERINGjobs",
      "urls": "https://pl.indeed.com/viewjob?jk=baaa2ca228514c09&fccid=6b8601288f8172d5&vjs=3"
    },
    {
      "name": "Procurement Business Process Expert",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com/viewjob?jk=53eb823859017842&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "Aftermarket Sales Account Manager",
      "company": "Cummins Inc.",
      "urls": "https://pl.indeed.com/viewjob?jk=b8534e75d0fcecf9&fccid=36ccedc5bfdf19b1&vjs=3"
    },
    {
      "name": "Praca w językach obcych: niemiecki i angielski",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=12e8add399599ee4&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Senior Procurement Analyst",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com/viewjob?jk=0c5268c3deb19212&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "GL Accountant with English",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=84707b02c58483e7&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Customer Service Professional - Dutch / Czech Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=111399b68cac266a&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Quality and Continuous Improvement Senior Specialist",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=e3cb6013f28c01a5&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Transition Manager",
      "company": "Lobo HR",
      "urls": "https://pl.indeed.com/viewjob?jk=10d7615c6b0054de&fccid=42ea513863db8ce0&vjs=3"
    },
    {
      "name": "Senior Quality and Technology Engineer",
      "company": "Motorola Solutions",
      "urls": "https://pl.indeed.com/viewjob?jk=afde5e76332b3188&fccid=22ec6ef3cc441ac2&vjs=3"
    },
    {
      "name": "Customer Operations Specialist - Dutch / Czech Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=cc47f69968015c3c&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Power Grids - Quality and Continuous Improvement Specialist",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqDUsVUkfH4EkrN84Gz9KZzMWLpWhyY86qBLFyf-lZ5_fhPr0f8HZO_XXiGXp7BNC9cAkHDzsSB9KHk6nTcvhXp0OjBk17CLkjWapyd5cEZ0__eVIuTQ3CDvhjOpCg_hfpNJ5i6JiKhMZ287AXXPdpI3BbYi39fxZXZIXO7MatJ1--snK8JiaAkWchzALeZk_2BRGRo3dY5DUw7RC320t4zb6aIC1NDJO4GLzJ7G795fI0YoK0Ci3HFhJCXQtk7jNGVr3L-Y4cGWvOE1lgWkmboctj5CvrX5-u_8mG_k-_DKfc6bR3FId0FrZn555Uo6Vx97wL9fPRZYZHLSlXU9DIn4mTDtDHz4u7DU6e1QKwliBMztUJuex_VDC8-qzzKFJsqLuygRMPKo29KbkEqKensA9YxMHvmErFcSnTJOskYJSHNLRKJhjWNeyhzBoFwKqgYYCq0eXYyQdBcSg-UDd8zlKOyX4zXiMEFayEMW5rGmhcQaKwjHzOn7Hm9duxVGr85MzfExYXKczKSrkZl78MaRxCJx2gTCWoKiOoAzvBIysmW3j-WovZ7tYsbXIX7bhId5UmwWACKhLrdwpoC1z63O56zLlk3FipOX2lbe3I-fFzSo9wcNVIfxRA0nAn_hB9jXIWJBQjbUxDPZzEi_ViVs2QzuYxUzGqE_Z0a_0cc5Jc-KYnURXG7KKHn-S6z8wXcM_fbJvwEShc9aSjYFhR0=&p=10&fvj=0&vjs=3"
    },
    {
      "name": "Procurement Process Manager with German(m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfucIIF8zkAKeR29XnHrb3EEZ-bm54Fw-xMGpP9_toSXcGQEiLzHfbL7aNA0B38KmURasfOOYuL8KejputNyDSdGeXK0RTE8nrwWrFKvoGVQG0ROBWWncIJV09zRqH7tumuNWlVRn_XxUjyaL0ludO0gOcjTNTNjccwq39KPJLaMzZ_It1lCIa0Bh2pDr9uQ3_-P3AB_3Uf52y_ElyUxLlLZEfVmHKjyzjH5cNIq1BVXb1bNO1_Hbele8uxEOeuY6WzVngsdMdKYTlSAtaaGCvBVKn_jjFbDlRcL541UBMX1u0elb2hR2dJjSeyIGbTXeCEDzf1ouTNz7L8gmyF8eWbXs2FjqOyMp_zAvEKwkrtsfCVj7O6DbWDT5M9nOzJ5_QolkF7NTU7seM4z6ZBZwqginoAtrfIFYlqAK2BPU4iNnt5mWyTx6rW-vN3aFQAHu-IRhSb3JBUK7LL-oAFBB5uFkUWnZouG4c8msI5TH5PcsEJRZilfF35FatVKMuwFyuMqCvWr2oEjbaCvOTnwdlfqhlGjcs7-quVPfmNj7kSA4lAcr-tg5OVnmILR5mSKs-On0P5jOrLHX_VQoAomUdzrMhL3LJNjmTKoPmNRyU6P_YhAySTdSG7nmrIJXoeq63VawWZ8MESPqzXt6J7L6OPQbHs_DxDeR8=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Technology Risk Management Regional Lead",
      "company": "UBS",
      "urls": "https://pl.indeed.com/viewjob?jk=85a82c4bd4b12308&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Order to Cash (AR) Manager",
      "company": "Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=b5de0e6d32b0bf1f&fccid=eb3baf007981cd9e&vjs=3"
    },
    {
      "name": "Credit Assessment Analyst - German Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=55ed90ecf2c3d1f3&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Quality Team Leader",
      "company": "Devire",
      "urls": "https://pl.indeed.com/viewjob?jk=a474307fdfc2adad&fccid=dac7798bc9cb142c&vjs=3"
    },
    {
      "name": "Business Process and Data Analyst",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=0d5eb26cd1e21d14&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "(Senior) IT Business Analyst",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com/viewjob?/HRO-Digital/jobs/IT-Business-Analyst-7fb7704b0368f151?fccid=4fcb59d2ba8f65d1&vjs=3"
    },
    {
      "name": "Procure to Pay (P2P) Project Specialist",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=410f6ed5770f38b2&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Customer Service Professional - German Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=4fef3ac07ce82bc5&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Customer Operations Specialist - German Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=ec764ac10fababf9&fccid=868f0a680c88fba8&vjs=3"
    }
  ],
  "357": [
    {
      "name": "Production Manager",
      "company": "NES Global Talent",
      "urls": "https://www.praca.pl/production-manager_3422782.html#be94a39164cef99dab7651dfbed05318"
    },
    {
      "name": "Junior Maintenance Manager",
      "company": "NES Global Talent",
      "urls": "https://www.praca.pl/junior-maintenance-manager_3344126.html#be94a39164cef99dab7651dfbed05318"
    }
  ],
  "358": [
    {
      "name": "Business Process Improvement Manager",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com/viewjob?jk=64e5a4c6893162f1&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "Kierownik Działu Marketingu",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com/viewjob?jk=514f21a3f3227484&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Doradca klienta biznesowego",
      "company": "Kaizen Rent",
      "urls": "https://pl.indeed.com/viewjob?jk=f53e01aecfe88bd2&fccid=74d925eec5d24464&vjs=3"
    },
    {
      "name": "Procurement Process Manager with German(m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?jk=a44b398c47317f40&fccid=77087bd1709a8148&vjs=3"
    }
  ],
  "359": [
    {
      "name": "Product Manager - Industry 4.0",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=7d4ed6e6853f9d9a&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Client Success Manager",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com/viewjob?jk=b9999e64aef721d6&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "Tester Automatyzujący - rekrutacja prowadzona online",
      "company": "Fitech",
      "urls": "https://pl.indeed.com/viewjob?jk=aca13f17601ca2b2&fccid=52d48f1974e43ed4&vjs=3"
    },
    {
      "name": "Specjalista ds dokumentacji technicznej - rekrutacja prowadz...",
      "company": "Fitech",
      "urls": "https://pl.indeed.com/viewjob?jk=6cd8122e22bcd3d7&fccid=52d48f1974e43ed4&vjs=3"
    },
    {
      "name": "Full Stack Developer - rekrutacja prowadzona online",
      "company": "Fitech",
      "urls": "https://pl.indeed.com/viewjob?jk=b1a566a4f363f736&fccid=52d48f1974e43ed4&vjs=3"
    },
    {
      "name": "BI Consultant / Data Analyst",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com/viewjob?jk=2cf8a0c761706e63&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "Industralization Engineer",
      "company": "OCTOPUS Recruitment Agency",
      "urls": "https://pl.indeed.com/viewjob?jk=cc1c9fd7dff9cce0&fccid=b51d728789e5a630&vjs=3"
    },
    {
      "name": "Kierownik ds. rozwoju biznesu IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=9406f6cc7a335725&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Java Developer (ERP)",
      "company": "OnWelo",
      "urls": "https://pl.indeed.com/viewjob?jk=a272cfa66555d017&fccid=f0576bc2d3ad81bd&vjs=3"
    }
  ],
  "360": [],
  "361": [],
  "362": [],
  "363": [],
  "364": [],
  "365": [],
  "366": [],
  "367": [],
  "368": [],
  "369": [],
  "370": [
    {
      "name": "Inżynier Automatyk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=0f9e18031e6d937f&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Elektryk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=2aba904252e64b02&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier sprzedaży systemów bezpieczeństwa przemysłowego",
      "company": "GRUPA WOLFF",
      "urls": "https://pl.indeed.com/viewjob?jk=d85a4988a3bbd086&fccid=3d99fb61e9e62f24&vjs=3"
    }
  ],
  "371": [],
  "372": [
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
    },
    {
      "name": "Projektant Instalacji HVAC",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-instalacji-hvac_3425568.html#2d2410adfd79268083ad52f1daabf356"
    }
  ],
  "373": [],
  "374": [],
  "375": [],
  "376": [],
  "377": [],
  "378": [],
  "379": [],
  "380": [
    {
      "name": "Modszy Projekt Manager",
      "company": "JANTAR Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-projekt-manager-krakow,oferta,1000263878"
    },
    {
      "name": "Asystent/ka Kierownika Projektu",
      "company": "Madkom S.A.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-kierownika-projektu-krakow,oferta,1000265954"
    },
    {
      "name": "Project Manager Assistant - Coordinator",
      "company": "Argos Translations Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/project-manager-assistant-coordinator-krakow,oferta,1000166234"
    },
    {
      "name": "Sta  Asystent  Modszy Project Manager",
      "company": "IMI-POLSKA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/staz-asystent-mlodszy-project-manager-krakow,oferta,500033753"
    }
  ],
  "381": [],
  "382": [],
  "383": [
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Utrzymania Ruchu - oferta z pakietem relokacyjnym",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=8cc9df27a319674b&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Inżynier Procesu / Produkcji - oferta z pakietem relokacyjny...",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=eba88f7f76130589&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Inżynier systemowy w kulturze DevOps",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=08b9aa853b5c438b&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Kierownik robót drogowych i torowych",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com/viewjob?jk=373d3be4d9cd22f2&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier Procesu Automotive Greenfield",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=83af8b65d67f08d7&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "SysOps Engineer",
      "company": "Transmission Dynamics Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?/Transmission-Dynamics-Poland-Sp.-z-o.o./jobs/Sysops-Engineer-a0430a2f02f16537?fccid=71edca8a792a88bd&vjs=3"
    },
    {
      "name": "Projektant Sieci Wodno-Kanalizacyjnych",
      "company": "K&K Selekt",
      "urls": "https://pl.indeed.com/viewjob?jk=80c55476fee329df&fccid=afe1f520a63ae3d3&vjs=3"
    },
    {
      "name": "Automatyk PLC",
      "company": "Axamo Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=f79baa9790b90f7c&fccid=f86175c7ba708305&vjs=3"
    },
    {
      "name": "SysOps Engineer",
      "company": "Transmissmion Dynamics Poland sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?jk=bbcb7f974af392f7&fccid=7a35d02c61858789&vjs=3"
    },
    {
      "name": "DevOps Engineer (ELK Stack)",
      "company": "EuroLinux",
      "urls": "https://pl.indeed.com/viewjob?jk=899a325ee5bed5a2&fccid=d91fbdc82addbd64&vjs=3"
    }
  ],
  "384": [
    {
      "name": "Inżynier Wsparcia Technicznego IP - z językiem angielskim",
      "company": "ELFON",
      "urls": "https://pl.indeed.com/viewjob?jk=b679e1353319d5c7&fccid=2c4afa11216a4599&vjs=3"
    }
  ],
  "385": [],
  "386": [
    {
      "name": "QA Engineer",
      "company": "S-Labs",
      "urls": "https://pl.indeed.com/viewjob?jk=3300678035fa06a4&fccid=ce4f4701fb5e9335&vjs=3"
    },
    {
      "name": "Inżynier ds. integracji i testowania sieci 4G/5G - KRAKÓW",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=3dc0d8f7a439242b&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "QA Automation Engineer with travel/airline experience/Kraków",
      "company": "NewPerspective",
      "urls": "https://pl.indeed.com/viewjob?jk=1ef8f4f17587f141&fccid=659d40811d5fc07a&vjs=3"
    },
    {
      "name": "QA Automation Engineer / Kraków (aktualnie zdalnie)",
      "company": "NewPerspective",
      "urls": "https://pl.indeed.com/viewjob?jk=209f361bf869ac31&fccid=659d40811d5fc07a&vjs=3"
    }
  ],
  "387": [
    {
      "name": "Inżynier Systemowy DevOps - Business Support Systems",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=fc035be427bad32e&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Desktop Support Engineer",
      "company": "Novomatic Technologies Poland",
      "urls": "https://pl.indeed.com/viewjob?jk=ba5801dc8134cd05&fccid=3f7f841f88eb8db3&vjs=3"
    },
    {
      "name": "Software Engineer in Test | Kraków",
      "company": "VSOFT",
      "urls": "https://pl.indeed.com/viewjob?jk=d0c7fadd70c81e3e&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Inżynier sieci, Network Engineer",
      "company": "Dynamics Jobs",
      "urls": "https://pl.indeed.com/viewjob?jk=7d6046df99c179ce&fccid=e7223e3ece47a796&vjs=3"
    },
    {
      "name": "Inżynier sieci / Network Engineer - Kraków",
      "company": "FRG Technology Consulting",
      "urls": "https://pl.indeed.com/viewjob?jk=20e6d13e23b4bf6a&fccid=79a4f894c1383f39&vjs=3"
    },
    {
      "name": "Network Engineer / Inżynier sieci",
      "company": "Washington Frank",
      "urls": "https://pl.indeed.com/viewjob?jk=5fcad688fe10a7d9&fccid=cb9285e8f83d93f4&vjs=3"
    },
    {
      "name": "Data Science Engineer",
      "company": "Spring Professional",
      "urls": "https://pl.indeed.com/viewjob?jk=8593ed384a623ca7&fccid=5b9b13c05b84001b&vjs=3"
    },
    {
      "name": "Network Engineer / Inżynier sieci",
      "company": "FRG Technology Consulting",
      "urls": "https://pl.indeed.com/viewjob?jk=8e4724c72dd3e0f9&fccid=79a4f894c1383f39&vjs=3"
    },
    {
      "name": "Network Engineer, Inżynier sieci",
      "company": "Dynamics Jobs",
      "urls": "https://pl.indeed.com/viewjob?jk=94e68e21c80930c6&fccid=e7223e3ece47a796&vjs=3"
    },
    {
      "name": "Senior Full Stack .NET Developer | Kraków",
      "company": "VSOFT",
      "urls": "https://pl.indeed.com/viewjob?jk=eaaafaa77c430288&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Oracle Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=939751af5d5af958&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "388": [
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Senior Xceptor Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-xceptor-developer_3338594.html#1cfcda44ac5207c38ac4bebe38ef711d"
    },
    {
      "name": "Magento Backend Developer (Mid/Senior)",
      "company": "Exorigo-Upos S.A.",
      "urls": "https://www.praca.pl/magento-backend-developer-mid-senior_3416848.html#1cfcda44ac5207c38ac4bebe38ef711d"
    }
  ],
  "389": [
    {
      "name": "(FCR Ops) Assistant Manager - FCC Operations with German",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fcr-ops-assistant-manager-fcc-operations-with-german-krakow,oferta,1000260227"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-business-analyst_3393580.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3342178.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3415642.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior Xceptor Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-xceptor-developer_3338594.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Analityk biznesowy / Business Analyst ESG",
      "company": "Sustainalytics",
      "urls": "https://www.praca.pl/analityk-biznesowy-business-analyst-esg_3322480.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Business Analyst [rekrutacja online]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/business-analyst-rekrutacja-online_3343528.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior Business Analyst",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/senior-business-analyst_3365278.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Analityk ilościowy ryzyka depozytowego",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/analityk-ilosciowy-ryzyka-depozytowego_3397392.html#0f62d1b55b419916af66d52811ec7c83"
    }
  ],
  "390": [],
  "391": [
    {
      "name": "Konsultant systemów BI",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=d23cc3f39a81bc9a&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "392": [],
  "393": [
    {
      "name": "Specjalista ds. bezpieczeństwa wybuchowego i procesowego",
      "company": "ATEX",
      "urls": "https://pl.indeed.com/viewjob?jk=b1dacffabd195771&fccid=61a3b49ca08b05a5&vjs=3"
    }
  ],
  "394": [],
  "395": [
    {
      "name": "Kierownik projektu/montażu/budowy",
      "company": "GRUPA WOLFF",
      "urls": "https://pl.indeed.com/viewjob?jk=0bc000c39cdbf8e9&fccid=3d99fb61e9e62f24&vjs=3"
    },
    {
      "name": "Kierownik robót elektrycznych (infrastruktura miejska)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com/viewjob?jk=513a71b7c97067b6&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Projektant procesów technologicznych",
      "company": "Devire",
      "urls": "https://pl.indeed.com/viewjob?jk=f62d862eae7aa79e&fccid=dac7798bc9cb142c&vjs=3"
    }
  ],
  "396": [
    {
      "name": "Asystent Projektanta (branża sanitarna)",
      "company": "P3 Projekt Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=2da7111ea96bc1c9&fccid=60b9b6db9314e9bf&vjs=3"
    }
  ],
  "397": [],
  "398": [
    {
      "name": "Kontroler jakości",
      "company": "PGNiG Technologie S.A.",
      "urls": "https://www.praca.pl/kontroler-jakosci_3385844.html#8e352a8af0c281e6c707e1886cd00a6f"
    },
    {
      "name": "Inżynier Budowy / Kontroler Jakości [rekrutacja online]",
      "company": "JT S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy-kontroler-jakosci-rekrutacja-online_3348204.html#8e352a8af0c281e6c707e1886cd00a6f"
    }
  ],
  "399": [],
  "400": [
    {
      "name": "Asystent specjalisty Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=dc8e82ea96d316d6&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Specjalista Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=8447c63c8105e086&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Referent ds. logistyki odpadów specjalnych",
      "company": "REMONDIS Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=cdbbed117d36ce4b&fccid=e18a11f1af6d217e&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Ochrony Środowiska...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=315cad0381ee06a8&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Specjalista ds. BHP i ochrony środowiska",
      "company": "Kolejowe Zakłady Nawierzchniowe",
      "urls": "https://pl.indeed.com/viewjob?jk=5a141607248b0fc1&fccid=640acb9e5c3b5646&vjs=3"
    },
    {
      "name": "Projektant Architektury Krajobrazu",
      "company": "Park-M",
      "urls": "https://pl.indeed.com/viewjob?jk=aa4cd446002a2698&fccid=9820092e2d13814c&vjs=3"
    },
    {
      "name": "Pracownik w Sekcji Administracji",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://pl.indeed.com/viewjob?jk=e5140e2be1bcd905&fccid=dbd17c00e0be7954&vjs=3"
    },
    {
      "name": "GEODETA/Specjalista ds. detekcji infrastruktury podziemnej",
      "company": "GISonLine",
      "urls": "https://pl.indeed.com/viewjob?jk=0752b9dea00bed12&fccid=f3a59a13accc2eb6&vjs=3"
    },
    {
      "name": "GEODETA/Specjalista ds. baz danych GESUT i BDOT",
      "company": "GISonLine",
      "urls": "https://pl.indeed.com/viewjob?jk=d6ce492234ce6414&fccid=f3a59a13accc2eb6&vjs=3"
    },
    {
      "name": "Specjalista ds. układów kogeneracyjnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=a5f702f39c8819b4&fccid=1cd754675a5b8353&vjs=3"
    }
  ],
  "401": [],
  "402": [],
  "403": [],
  "404": [],
  "405": [
    {
      "name": "Modszy Inynier",
      "company": "Gegenbauer Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-inzynier-krakow,oferta,1000267545"
    },
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Customer Service Junior Specialist",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/customer-service-junior-specialist-krakow,oferta,1000243672"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "Working Student - FPGA Algorithm Modeling Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-algorithm-modeling-engineer-krakow,oferta,1000256972"
    },
    {
      "name": "Working Student - 5G L1 FPGA Design Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-5g-l1-fpga-design-engineer-krakow,oferta,1000256965"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Working Student - FPGA Design Verification Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-design-verification-engineer-krakow,oferta,1000256977"
    },
    {
      "name": "Asystent Inyniera Projektu  Patny Sta",
      "company": "Real Construct Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-inzyniera-projektu-platny-staz-krakow,oferta,500036363"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    },
    {
      "name": "RF Test Engineer - Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/rf-test-engineer-working-student-krakow,oferta,1000197222"
    },
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "FPGA Design Verification Engineer  Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-design-verification-engineer-working-student-krakow,oferta,1000197226"
    },
    {
      "name": "Junior Quality Engineer",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-quality-engineer-krakow,oferta,7477572"
    },
    {
      "name": "Junior Software Engineer Java",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-software-engineer-java-krakow,oferta,1000190736"
    },
    {
      "name": "Asystent(ka) Dziau Handlowego",
      "company": "ZAMAK MERCATOR SP. Z O.O.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-dzialu-handlowego-krakow-okolice,oferta,1000198624"
    },
    {
      "name": "Junior SQL Developer",
      "company": "AG TEST HR Spka z ograniczon odpowiedzialnoci sp.k.",
      "urls": "https://www.pracuj.pl/praca/junior-sql-developer-krakow,oferta,1000194416"
    },
    {
      "name": "Praktykant Salesforce  get the HOT Salesforce skill",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,7468135"
    },
    {
      "name": "Praktykant/ Junior - Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,7468131"
    }
  ],
  "406": [],
  "407": [],
  "408": [],
  "409": [
    {
      "name": "Pracownik Administracyjny – Sekcja Administracji",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://www.praca.pl/pracownik-administracyjny-sekcja-administracji_3359184.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Asystent Genetyka - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/asystent-genetyka-branza-medyczna_3378764.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": " Diagnosta laboratoryjny - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/diagnosta-laboratoryjny-branza-medyczna_3378768.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Lekarz specjalista w dziedzinie anestezjologii i intensywnej terapii lub chorób wewnętrznych lub kardiologii - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/lekarz-specjalista-w-dziedzinie-anestezjologii-i-intensywnej-terapii-lub-chorob-wewnetrznych-lub-kardiologii-branza-medyczna_3378802.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Lekarz onkologii klinicznej - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/lekarz-onkologii-klinicznej-branza-medyczna_3378804.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Lekarz - specjalista chorób zakaźnych - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/lekarz-specjalista-chorob-zakaznych-branza-medyczna_3378810.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Lekarza specjalista w radiologii i diagnostyki obrazowej - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/lekarza-specjalista-w-radiologii-i-diagnostyki-obrazowej-branza-medyczna_3378812.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Pielęgniarka - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/pielegniarka-branza-medyczna_3378816.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Pulmonolog - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/pulmonolog-branza-medyczna_3378818.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Rejestratorka medyczna - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/rejestratorka-medyczna-branza-medyczna_3378822.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Pracownik w Sekcji Administracji",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://www.praca.pl/pracownik-w-sekcji-administracji_3345160.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Serwisant urządzeń klimatyzacyjnych oraz grzewczo-wentylacyjnych",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://www.praca.pl/serwisant-urzadzen-klimatyzacyjnych-oraz-grzewczo-wentylacyjnych_3343490.html#43cf8f196d336d38543b2eea0fb50c1d"
    }
  ],
  "410": [
    {
      "name": "Senior NLP / AI Data Scientist",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-nlp-ai-data-scientist_3382962.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior Oracle DB Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-oracle-db-developer_3382924.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-business-analyst_3393580.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Test Manager",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/test-manager_3393584.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3342178.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen-systemow-analitycznych_3405276.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior Product Owner",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-product-owner_3413396.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Resource Management Lead",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/resource-management-lead_3406628.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior SQL//VBA/Coric developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-sql-vba-coric-developer_3409588.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "ETL Developer",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/etl-developer_3420402.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Bioinformatyk",
      "company": "Vendo Krzysztof Domagała",
      "urls": "https://www.praca.pl/bioinformatyk_3385522.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Przedstawiciel Handlowy ds. Horeca",
      "company": "MAKRO Cash and Carry Polska S.A.",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy-ds-horeca_3345436.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior FP&A Analyst with German [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/senior-fp-a-analyst-with-german-rekrutacja-online_3389128.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior FP&A Analyst [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/senior-fp-a-analyst-rekrutacja-online_3389134.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3415642.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Analityk biznesowy / Business Analyst ESG",
      "company": "Sustainalytics",
      "urls": "https://www.praca.pl/analityk-biznesowy-business-analyst-esg_3322480.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Business Analyst [rekrutacja online]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/business-analyst-rekrutacja-online_3343528.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior Business Analyst",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/senior-business-analyst_3365278.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Przedstawiciel Handlowy ds. Sprzedaży Tradycyjnej",
      "company": "Ustronianka Sp. z o.o.",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy-ds-sprzedazy-tradycyjnej_3372622.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Analityk ilościowy ryzyka depozytowego",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/analityk-ilosciowy-ryzyka-depozytowego_3397392.html#6b69987c8a278d258930347b01de8034"
    }
  ],
  "411": [
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    }
  ],
  "412": [
    {
      "name": "Inżynier Budowy",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy_3338932.html#e45a85cfe0ab0419c9c27b162f63d4ae"
    }
  ],
  "413": [],
  "414": [],
  "415": [
    {
      "name": "Junior Graphic Designer",
      "company": "Morele.net Sp. z o.o. ",
      "urls": "https://www.pracuj.pl/praca/junior-graphic-designer-krakow,oferta,1000257192"
    },
    {
      "name": "Nauczyciel grafiki komputerowej",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-grafiki-komputerowej_3411470.html#246b35f55cc1bcd1bfe973a8708cd36b"
    }
  ],
  "416": [
    {
      "name": "Specjalista ds. Badawczych",
      "company": "Cebrio",
      "urls": "https://pl.indeed.com/viewjob?jk=0bcbb25d41fdae14&fccid=1cd25ec87a06c80b&vjs=3"
    }
  ],
  "417": [
    {
      "name": "Technik Mechanik (K/M)  [rekrutacja online]",
      "company": "Apleona HSG Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-mechanik-k-m-rekrutacja-online_3372586.html#e47a11504f3229f5dbc4e8d13678ece5"
    }
  ],
  "418": [
    {
      "name": "Sprzedawca Salonu Optycznego / Doradca Klienta",
      "company": "BELLEVUE POLSKA Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=b18a47013c2bff4f&fccid=53e9661535e3b9f3&vjs=3"
    },
    {
      "name": "Technik Optyk",
      "company": "Scanmed S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=19e04b6af858e6f4&fccid=5baf87fca2a86ad0&vjs=3"
    },
    {
      "name": "Specjalista techniczno-handlowy",
      "company": "Level Work",
      "urls": "https://pl.indeed.com/viewjob?jk=2b26b6d7eed77a74&fccid=e92a6365b8535226&vjs=3"
    },
    {
      "name": "Doradca Techniczno-Handlowy",
      "company": "Smart-HR",
      "urls": "https://pl.indeed.com/viewjob?jk=b220dfb79b01f20d&fccid=2ad7bb13c81995c1&vjs=3"
    },
    {
      "name": "Konsultant / Specjalista techniczno-handlowy",
      "company": "Strategie Personalne",
      "urls": "https://pl.indeed.com/viewjob?jk=a71c89ac62d35126&fccid=29ef11a4e93c431f&vjs=3"
    }
  ],
  "419": [],
  "420": [],
  "421": [],
  "422": [
    {
      "name": "Cloud Oriented Network Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-oriented-network-architect_3409108.html#ae141d5b766b2fd8895bba9750612037"
    },
    {
      "name": "Lead .NET Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/lead-net-developer_3382862.html#ae141d5b766b2fd8895bba9750612037"
    },
    {
      "name": "Technical Project Manager",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/technical-project-manager_3382918.html#ae141d5b766b2fd8895bba9750612037"
    },
    {
      "name": "Senior/Regular QA Automation Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-regular-qa-automation-engineer_3420972.html#ae141d5b766b2fd8895bba9750612037"
    },
    {
      "name": "Tech Lead/Expert/Senior Full-Stack Developer ",
      "company": "IT CONNECT Sp. z o.o.",
      "urls": "https://www.praca.pl/tech-lead-expert-senior-full-stack-developer_3327020.html#ae141d5b766b2fd8895bba9750612037"
    }
  ],
  "423": [],
  "424": [],
  "425": [],
  "426": [],
  "427": [],
  "428": [],
  "429": [
    {
      "name": "Doradca naukowy (sprzęt laboratoryjny) / Przedstawiciel handlowy",
      "company": "Gi Group Sp z o.o.",
      "urls": "https://www.praca.pl/doradca-naukowy-sprzet-laboratoryjny-przedstawiciel-handlowy_3372676.html#d67741c4648d0cb72b1976f95a34e141"
    }
  ],
  "430": [
    {
      "name": "Nauczyciel na kierunku rejestratorka medyczna",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-na-kierunku-rejestratorka-medyczna_3413244.html#b85418b7ea7ccf98185b756124bcf26a"
    },
    {
      "name": "Nauczyciel języka migowego",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-jezyka-migowego_3411502.html#b85418b7ea7ccf98185b756124bcf26a"
    }
  ],
  "431": [
    {
      "name": "North America Procurement Operations Senior Analyst",
      "company": "KIMBERLY CLARK EMEA GBS SERVICES SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/north-america-procurement-operations-senior-analyst-krakow,oferta,1000253384"
    },
    {
      "name": "Junior Financial Analyst",
      "company": "ArcelorMittal Tubular Products Krakw Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-financial-analyst-krakow,oferta,1000256444"
    },
    {
      "name": "(FCR Ops) Assistant Manager - FCC Operations with German",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fcr-ops-assistant-manager-fcc-operations-with-german-krakow,oferta,1000260227"
    },
    {
      "name": "Junior Medical Data Analyst",
      "company": "Cardiomatics sp.z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-medical-data-analyst-krakow,oferta,1000238986"
    },
    {
      "name": "Fund Accounting Junior Analyst",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fund-accounting-junior-analyst-krakow,oferta,1000227197"
    },
    {
      "name": "Securities Operations Junior Analyst",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/securities-operations-junior-analyst-krakow,oferta,1000227196"
    },
    {
      "name": "Junior Investment Solutions Group Portfolio Management Analyst with State Street Global Advisors, Officer",
      "company": "State Street Bank Polska",
      "urls": "https://www.pracuj.pl/praca/junior-investment-solutions-group-portfolio-management-analyst-with-state-street-krakow,oferta,1000219275"
    },
    {
      "name": "Junior Reporting Analyst with Spanish",
      "company": "PepsiCo GBS Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-reporting-analyst-with-spanish-krakow,oferta,1000220904"
    },
    {
      "name": "Data Management Junior Analyst with Spanish",
      "company": "PepsiCo GBS Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/data-management-junior-analyst-with-spanish-krakow,oferta,1000220916"
    },
    {
      "name": "Tax Analyst - Intern",
      "company": "AKAMAI TECHNOLOGIES POLAND SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/tax-analyst-intern-krakow,oferta,1000201333"
    },
    {
      "name": "Credit and Collections Junior Specialist with Dutch",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/credit-and-collections-junior-specialist-with-dutch-krakow,oferta,7469720"
    },
    {
      "name": "Video Content Analyst with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/video-content-analyst-with-french_3422886.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    }
  ],
  "432": [
    {
      "name": "Junior Logistics Operator",
      "company": "Veritas Alpha ltd sk",
      "urls": "https://www.pracuj.pl/praca/junior-logistics-operator-krakow,oferta,1000257762"
    },
    {
      "name": "Modszy Specjalista ds. Wsparcia i zamwie",
      "company": "Sunday Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-wsparcia-i-zamowien-krakow,oferta,1000224892"
    },
    {
      "name": "Modszy Logistyk",
      "company": "PARETTI spka z ograniczon odpowiedzialnoci spka komandytowa",
      "urls": "https://www.pracuj.pl/praca/mlodszy-logistyk-krakow,oferta,1000257240"
    },
    {
      "name": "Logistyk / Magazynier",
      "company": "Leroy Merlin Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/logistyk-magazynier_3383214.html#00a848f9498101b0d4989a79ebe59fc5"
    },
    {
      "name": "Młodszy Specjalista ds. Logistyki",
      "company": "Smart - HR",
      "urls": "https://www.praca.pl/mlodszy-specjalista-ds-logistyki_3420186.html#00a848f9498101b0d4989a79ebe59fc5"
    },
    {
      "name": "Kierownik magazynu / Koordynator działu logistyki",
      "company": "Drops Print Sp. z o.o.",
      "urls": "https://www.praca.pl/kierownik-magazynu-koordynator-dzialu-logistyki_3381488.html#00a848f9498101b0d4989a79ebe59fc5"
    },
    {
      "name": "Logistyk i zaopatrzeniowiec magazynu firmy",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/logistyk-i-zaopatrzeniowiec-magazynu-firmy_3424344.html#00a848f9498101b0d4989a79ebe59fc5"
    }
  ],
  "433": [],
  "434": [],
  "435": [
    {
      "name": "Specjalista ds. Finansowo-Księgowych",
      "company": "AERO-GSE",
      "urls": "https://pl.indeed.com/viewjob?/AERO--GSE-Sp.-z-o.o.-Sp.-K./jobs/Specjalista-Do-Spraw-Finansowo-Ksi%C4%99gowych-af77ea3cf7793208?fccid=d906003c284344e7&vjs=3"
    }
  ],
  "436": [
    {
      "name": "Specjalista - Konsultant ds. Funduszy Europejskich",
      "company": "KPPM Doradztwo",
      "urls": "https://pl.indeed.com/viewjob?jk=b26b1b4b4d90a4d5&fccid=c89511e6220cd981&vjs=3"
    },
    {
      "name": "Specjalista ds. pozyskiwania funduszy UE",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=6fc86fa4f20daac8&fccid=062f71e131e87cf0&vjs=3"
    }
  ],
  "437": [],
  "438": [],
  "439": [
    {
      "name": "Specjalista ds. Zarządzania Kapitałowego",
      "company": "",
      "urls": "BNP Paribas Bank Polska"
    },
    {
      "name": "https://pl.indeed.com/viewjob?jk=da5e07bd7b02f36f&fccid=1392500f835bba92&vjs=3",
      "company": "xxx",
      "urls": "440"
    }
  ],
  "441": [
    {
      "name": "Doradca Techniczny ds. Inwestycji",
      "company": "4INSTALL Sp. z o.o.",
      "urls": "https://www.praca.pl/doradca-techniczny-ds-inwestycji_3391856.html#152f4815b528e41a17bc4bbdc1ccfc85"
    },
    {
      "name": "Doradca ds. Klientów Zamożnych [rekrutacja online]",
      "company": "Aragonit Asset Management Sàrl",
      "urls": "https://www.praca.pl/doradca-ds-klientow-zamoznych-rekrutacja-online_3396840.html#152f4815b528e41a17bc4bbdc1ccfc85"
    },
    {
      "name": "Partner ds. Sprzedaży produktów inwestycyjnych [rekrutacja online]",
      "company": "LEXITOR SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "urls": "https://www.praca.pl/partner-ds-sprzedazy-produktow-inwestycyjnych-rekrutacja-online_3335484.html#152f4815b528e41a17bc4bbdc1ccfc85"
    },
    {
      "name": "Ekspert finansowy",
      "company": "Expander",
      "urls": "https://www.praca.pl/ekspert-finansowy_3404718.html#152f4815b528e41a17bc4bbdc1ccfc85"
    },
    {
      "name": "Mobilny Ekspert Finansowy",
      "company": "Expander",
      "urls": "https://www.praca.pl/mobilny-ekspert-finansowy_3404582.html#152f4815b528e41a17bc4bbdc1ccfc85"
    },
    {
      "name": "Doradca Klienta",
      "company": "Credit Agricole Bank Polska S.A.",
      "urls": "https://www.praca.pl/doradca-klienta_3326722.html#152f4815b528e41a17bc4bbdc1ccfc85"
    }
  ],
  "442": [],
  "443": [],
  "444": [
    {
      "name": "Referent ds. Spedycji Krajowej",
      "company": "JAS-FBG S.A.",
      "urls": "https://www.pracuj.pl/praca/referent-ds-spedycji-krajowej-krakow,oferta,1000264546"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Modszy specjalista ds. przygotowania produkcji",
      "company": "Pilkington IGP Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-przygotowania-produkcji-krakow,oferta,1000224390"
    },
    {
      "name": "Full Time Administrative Assistant - Remote",
      "company": "WEB BESPOKERS FILIP KOTLARZ",
      "urls": "https://www.pracuj.pl/praca/full-time-administrative-assistant-remote-krakow-okolice,oferta,1000204756"
    },
    {
      "name": "Copywriter SEO / Redaktor portalu Geex",
      "company": "X-KOM Sp. z o.o.",
      "urls": "https://www.praca.pl/copywriter-seo-redaktor-portalu-geex_3426280.html#d05c698fb6d4bfb447052f9fc4f80d75"
    },
    {
      "name": "FPGA DSP Designer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/fpga-dsp-designer-rekrutacja-online_3393862.html#d05c698fb6d4bfb447052f9fc4f80d75"
    },
    {
      "name": "Senior NLP / AI Data Scientist",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-nlp-ai-data-scientist_3382962.html#d05c698fb6d4bfb447052f9fc4f80d75"
    },
    {
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen-systemow-analitycznych_3405276.html#d05c698fb6d4bfb447052f9fc4f80d75"
    },
    {
      "name": "Production Manager",
      "company": "NES Global Talent",
      "urls": "https://www.praca.pl/production-manager_3422782.html#d05c698fb6d4bfb447052f9fc4f80d75"
    },
    {
      "name": "Starszy Programista Java (lider techniczny) [rekrutacja online]",
      "company": "Asseco Poland S.A.",
      "urls": "https://www.praca.pl/starszy-programista-java-lider-techniczny-rekrutacja-online_3378494.html#d05c698fb6d4bfb447052f9fc4f80d75"
    },
    {
      "name": "Senior Subject Matter Expert – VDI & SRA [rekrutacja online]",
      "company": "ING Tech Poland",
      "urls": "https://www.praca.pl/senior-subject-matter-expert-vdi-sra-rekrutacja-online_3422830.html#d05c698fb6d4bfb447052f9fc4f80d75"
    },
    {
      "name": "Senior Teradata Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-teradata-developer_3337184.html#d05c698fb6d4bfb447052f9fc4f80d75"
    },
    {
      "name": "Kierownik Robót Drogowych",
      "company": "GruntBudowa",
      "urls": "https://www.praca.pl/kierownik-robot-drogowych_3396248.html#d05c698fb6d4bfb447052f9fc4f80d75"
    },
    {
      "name": "Web Design Developer",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/web-design-developer_3378608.html#d05c698fb6d4bfb447052f9fc4f80d75"
    }
  ],
  "445": [
    {
      "name": "Junior Graphic Designer",
      "company": "Morele.net Sp. z o.o. ",
      "urls": "https://www.pracuj.pl/praca/junior-graphic-designer-krakow,oferta,1000257192"
    },
    {
      "name": "Projektant Java [rekrutacja online]",
      "company": "Asseco Poland S.A.",
      "urls": "https://www.praca.pl/projektant-java-rekrutacja-online_3330020.html#23a9ad297403a7ca2eee3e2a374e4f94"
    }
  ],
  "446": [],
  "447": [
    {
      "name": "Specjalista ds. reklamy prasowej i internetowej",
      "company": "Rabatem",
      "urls": "https://pl.indeed.com/viewjob?jk=697bdc008cd4e215&fccid=a7f787da57db1cab&vjs=3"
    },
    {
      "name": "Specjalista ds. obsługi klienta / tłumacz",
      "company": "inTurs.net",
      "urls": "https://pl.indeed.com/viewjob?jk=95b1c40a0545553e&fccid=8d74c43df3dcb871&vjs=3"
    },
    {
      "name": "Specjalista ds. SEM",
      "company": "Marketing Investment Group",
      "urls": "https://pl.indeed.com/viewjob?jk=a06ca781ae7fe113&fccid=0ee62b7fa1ca038c&vjs=3"
    },
    {
      "name": "Staż lub praktyka zdalna, 14 kierunków i więcej do wyboru",
      "company": "Krajowy Instytut Rozwoju Gospodarki",
      "urls": "https://pl.indeed.com/viewjob?jk=1c5dd6a055dcfbbb&fccid=5429572581cdb0aa&vjs=3"
    },
    {
      "name": "Account Manager",
      "company": "WEBISO",
      "urls": "https://pl.indeed.com/viewjob?jk=f85e1ccb99f52999&fccid=e3fb43dbacbc0492&vjs=3"
    },
    {
      "name": "Specjalista ds. sprzedaży i promocji na terenie Małopolski",
      "company": "ABW Graf Group s.c.",
      "urls": "https://pl.indeed.com/viewjob?jk=cab4f46c03932a1a&fccid=e2fcf67f4bc7d4cd&vjs=3"
    }
  ],
  "448": [],
  "449": [],
  "450": [],
  "451": [],
  "452": [
    {
      "name": "Dziennikarz / specjalizacja aranżacja wnętrz",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com/viewjob?jk=c9c057e9413611c2&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja język angielski",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com/viewjob?jk=9e98f59d7644521c&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Staż lub praktyka zdalna, 14 kierunków i więcej do wyboru",
      "company": "Krajowy Instytut Rozwoju Gospodarki",
      "urls": "https://pl.indeed.com/viewjob?jk=1c5dd6a055dcfbbb&fccid=5429572581cdb0aa&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja medycyna",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com/viewjob?jk=212407a166cb424b&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja prawo",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com/viewjob?jk=5fb987265d56c63f&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja A. I.",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com/viewjob?jk=b42bf38433fda4d3&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja rolnictwo",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com/viewjob?jk=ba4e4a6ba6e51be7&fccid=ab8a0dae1fe54ce8&vjs=3"
    }
  ],
  "453": [],
  "454": [],
  "455": [
    {
      "name": "Modszy Specjalista ds. Social Media",
      "company": "Chemitech Sp. z o.o.o",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-social-media-krakow,oferta,1000234496"
    },
    {
      "name": "Junior Marketing Automation Specialist",
      "company": "Dreamcommerce S.A.",
      "urls": "https://www.pracuj.pl/praca/junior-marketing-automation-specialist-krakow,oferta,1000226401"
    }
  ],
  "456": [
    {
      "name": "Junior Graphic Designer",
      "company": "Morele.net Sp. z o.o. ",
      "urls": "https://www.pracuj.pl/praca/junior-graphic-designer-krakow,oferta,1000257192"
    },
    {
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3426290.html#7202358ecfe053a90fe6f1f9060b86e5"
    }
  ],
  "457": [
    {
      "name": "Praktykant/ka w zespole Doradztwa Podatkowego",
      "company": "Crido",
      "urls": "https://www.pracuj.pl/praca/praktykant-ka-w-zespole-doradztwa-podatkowego-krakow,oferta,1000201162"
    }
  ],
  "458": [
    {
      "name": "Modszy Specjalista ds. Kadr",
      "company": "TMF Group",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-kadr-krakow,oferta,1000262981"
    },
    {
      "name": "Internship in Talent Acquisition",
      "company": "BROWN BROTHERS HARRIMAN (POLAND) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/internship-in-talent-acquisition-krakow,oferta,1000233962"
    },
    {
      "name": "Modszy Specjalista ds. Rekrutacji i Kadr (m/k)",
      "company": "Trenkwalder Polska",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-rekrutacji-i-kadr-m-k-krakow,oferta,1000234599"
    },
    {
      "name": "Asystent/ka ds. Rekrutacji i Kadr",
      "company": "Trenkwalder Polska",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-ds-rekrutacji-i-kadr-krakow,oferta,1000234691"
    },
    {
      "name": "Asystentka ds. administracyjno-personalnych",
      "company": "SWIETELSKY RAIL POLSKA Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-ds-administracyjno-personalnych-krakow,oferta,1000254635"
    },
    {
      "name": "Modszy Specjalista ds. Rekrutacji ",
      "company": "Aterima Sp. z o.o. Sp.K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-rekrutacji-krakow,oferta,1000226628"
    },
    {
      "name": "Modszy Specjalista ds. Rekrutacji z Jzykiem Niemieckim ",
      "company": "Aterima Sp. z o.o. Sp.K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-rekrutacji-z-jezykiem-niemieckim-krakow,oferta,1000225060"
    },
    {
      "name": "Modszy specjalista ds. obsugi klienta z j. holenderskim",
      "company": "PRIORITY SALE - MARCIN SOJKA",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-z-j-holenderskim-krakow,oferta,1000191851"
    },
    {
      "name": "Kierownik Działu Zatrudnienia i Płac ",
      "company": "KRAKBAU S.A.",
      "urls": "https://www.praca.pl/kierownik-dzialu-zatrudnienia-i-plac_3394258.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specjalista ds. rekrutacji z językiem angielskim",
      "company": "DEKRA Praca Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-rekrutacji-z-jezykiem-angielskim_3426094.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Benefit Policy Analyst with Spanish [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/benefit-policy-analyst-with-spanish-rekrutacja-online_3379030.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Payroll Senior Specialist/Team Leader/Process Owner - nowy projekt (m/k)",
      "company": "CPL JOBS Sp. z o.o.",
      "urls": "https://www.praca.pl/payroll-senior-specialist-team-leader-process-owner-nowy-projekt-m-k_3392056.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Resource Management Lead",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/resource-management-lead_3406628.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specjalista ds. kadr i płac ",
      "company": "Gegenbauer Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-kadr-i-plac_3390004.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Freelancer - Specjalista ds. Rekrutacji IT",
      "company": "Power Media",
      "urls": "https://www.praca.pl/freelancer-specjalista-ds-rekrutacji-it_3405216.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Praktykant / Praktykantka w Dziale Kadr i Płac [rekrutacja prowadzona on-line]",
      "company": "Abra S.A.",
      "urls": "https://www.praca.pl/praktykant-praktykantka-w-dziale-kadr-i-plac-rekrutacja-prowadzona-on-line_3361728.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Młodszy Specjalista ds. Logistyki",
      "company": "Smart - HR",
      "urls": "https://www.praca.pl/mlodszy-specjalista-ds-logistyki_3420186.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Senior IT Rekruter / Starszy Specjalista ds. Rekrutacji IT",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-it-rekruter-starszy-specjalista-ds-rekrutacji-it_3357798.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specjalista ds kadr i płac",
      "company": "VRG S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-kadr-i-plac_3372572.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specjalista / Specjalistka ds. Kadr [rekrutacja online]",
      "company": "Crowe Poland",
      "urls": "https://www.praca.pl/specjalista-specjalistka-ds-kadr-rekrutacja-online_3372792.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specjalista ds. Personalnych",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-personalnych_3396854.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "HR Process Junior Specialist Dutch Speaker",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/hr-process-junior-specialist-dutch-speaker_3412950.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specialist with Dutch (Work Opportunities for School Graduates)",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/specialist-with-dutch-work-opportunities-for-school-graduates_3413078.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specjalista ds. Kadr i Płac [rekrutacja prowadzona online]",
      "company": "ZIKO Apteka Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-kadr-i-plac-rekrutacja-prowadzona-online_3333604.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specjalista ds. Kadr i Płac",
      "company": "Services Center",
      "urls": "https://www.praca.pl/specjalista-ds-kadr-i-plac_3345394.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "(Senior) Payroll Specialist",
      "company": "ManpowerGroup",
      "urls": "https://www.praca.pl/senior-payroll-specialist_3370552.html#ef711b463501f14e78e697a3ad0f8263"
    }
  ],
  "459": [
    {
      "name": "Asystent ds. obsugi klienta biznesowego",
      "company": "EWA BIE EWA BIEN",
      "urls": "https://www.pracuj.pl/praca/asystent-ds-obslugi-klienta-biznesowego-krakow-okolice,oferta,1000251625"
    },
    {
      "name": "Asystentka Dyrektora Zarzdzajcego",
      "company": "DACHY POLSKI sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-dyrektora-zarzadzajacego-krakow,oferta,500036709"
    },
    {
      "name": "Bussines Support Assitant",
      "company": "DOLINA CZEREMCHY WIESAWA CZAJKOWSKA",
      "urls": "https://www.pracuj.pl/praca/bussines-support-assitant-krakow,oferta,500036657"
    },
    {
      "name": "Asystent/ka Przedstawiciela Handlowego",
      "company": "Solid Group Sp. z o. o. sp. k.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-przedstawiciela-handlowego-krakow,oferta,1000259756"
    },
    {
      "name": "Modszy Specjalista ds. Wsparcia i zamwie",
      "company": "Sunday Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-wsparcia-i-zamowien-krakow,oferta,1000224892"
    },
    {
      "name": "Asystentka - Tumaczka",
      "company": "FPH METAL - TECH",
      "urls": "https://www.pracuj.pl/praca/asystentka-tlumaczka-krakow,oferta,1000235380"
    },
    {
      "name": "Sta z Lwem w Sieci Detalicznej - edycja letnia",
      "company": "ING Bank lski S.A.",
      "urls": "https://www.pracuj.pl/praca/staz-z-lwem-w-sieci-detalicznej-edycja-letnia-krakow,oferta,1000258945"
    },
    {
      "name": "Asystent/ka Dziau Wsparcia Sprzeday Projektowej",
      "company": "ROMI Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-dzialu-wsparcia-sprzedazy-projektowej-krakow,oferta,500035780"
    },
    {
      "name": "Full Time Administrative Assistant - Remote",
      "company": "WEB BESPOKERS FILIP KOTLARZ",
      "urls": "https://www.pracuj.pl/praca/full-time-administrative-assistant-remote-krakow-okolice,oferta,1000204756"
    }
  ],
  "460": [
    {
      "name": "Asystentka Dziau Marketingu",
      "company": "TACTICA Pharmaceuticals Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-dzialu-marketingu-krakow,oferta,1000266871"
    },
    {
      "name": "Summer Internship in Marketing",
      "company": "Amway Global Business Services",
      "urls": "https://www.pracuj.pl/praca/summer-internship-in-marketing-krakow,oferta,1000265743"
    },
    {
      "name": "Junior Marketing Automation Specialist",
      "company": "Dreamcommerce S.A.",
      "urls": "https://www.pracuj.pl/praca/junior-marketing-automation-specialist-krakow,oferta,1000226401"
    },
    {
      "name": "Junior Customer Success Specialist",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-customer-success-specialist-krakow,oferta,1000236667"
    },
    {
      "name": "Modszy specjalista ds. obsugi klienta wgierskojzycznego i tumacz",
      "company": "Marketing Investment Group S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-wegierskojezycznego-i-tlumacz-krakow,oferta,1000258752"
    },
    {
      "name": "Retail Marketing Executive Assistant",
      "company": "Shell Business Operations",
      "urls": "https://www.pracuj.pl/praca/retail-marketing-executive-assistant-krakow,oferta,1000255364"
    },
    {
      "name": "Staysta ds. marketingu",
      "company": "CCC S.A.",
      "urls": "https://www.pracuj.pl/praca/stazysta-ds-marketingu-krakow,oferta,1000254190"
    },
    {
      "name": "Modszy Specjalista ds. Obsugi Klienta z jzykiem rumuskim",
      "company": "Marketing Investment Group S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-z-jezykiem-rumunskim-krakow,oferta,1000218174"
    },
    {
      "name": "Ambasador Poziom Wyej",
      "company": "EY Polska",
      "urls": "https://www.pracuj.pl/praca/ambasador-poziom-wyzej-krakow,oferta,1000211984"
    },
    {
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3426290.html#c07a636253615519fbd73fb82da5263d"
    }
  ],
  "461": [],
  "462": [],
  "463": [],
  "464": [],
  "465": [
    {
      "name": "Negocjator Terenowy ds. postępowań sądowo-egzekucyjnych ",
      "company": "Intrum Sp. z o.o",
      "urls": "https://www.praca.pl/negocjator-terenowy-ds-postepowan-sadowo-egzekucyjnych_3425912.html#0359d24e18f4ecf5d79ebd232be56407"
    },
    {
      "name": "Przedstawiciel Ubezpieczeniowy - Sprzedaż Zdalna ",
      "company": "Nationale-Nederlanden",
      "urls": "https://www.praca.pl/przedstawiciel-ubezpieczeniowy-sprzedaz-zdalna_3385732.html#0359d24e18f4ecf5d79ebd232be56407"
    }
  ],
  "466": [
    {
      "name": "Modszy Specjalista ds. Social Media",
      "company": "Chemitech Sp. z o.o.o",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-social-media-krakow,oferta,1000234496"
    },
    {
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3426290.html#7641eb0788d0c3bc1469f61984eb5bdc"
    }
  ],
  "467": [
    {
      "name": "Global Customer Service Manager",
      "company": "Accenture Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfbky0Q4V8_qA3LkMKFNe6k8yBDkMflz49F0cU8uHECpHv_v7-r3KSu077dY4VNgszpQ7gXKQweV3cfgpugdZhaQqmdoMGDj5AS1_mKdkECMbxUjmSzEOj8ePpewbtxe8r8HrmLAWXy7n8N7JEJsZs2s4IOH-gl2Dcu8dauE9KEqEFVuyI0DLrz0FxbtG-lpRwPSO1z4G7ZHh6FhEWO6YFHAW9Bhm65rp-YrXzDKI-Lmdv5U7NMoLbyyHDOGJgmun6s8FTzzlKGsGFv-UBPSrGxI8ml7iPSVvxGWQ8q1HYjwQbWxFkdQuJXkNuAwJYuLXOl9HA_BDb7zwcoBihYJxV04Hg9e3J44BiOc6psluaR5HDyhOO1BfZL7DTa9MvIh-bJNH63t4nV9Xbicut2eBD2fTx-NftysAYaoIwWgSYaWklV2KORPb0EsJRJMYSZ1qigD265XNAqS7fG_cW8_CNv02vty8ltt5WG1d567cgx8mlweWBocYYOFMoFZ__kCVsQtEZzc5aBT8NL2lPgFfSuV2lONKz4YohfKwQIpZvZxVGtY0MYqz1vnCYodyVAT96PawKnfeFBnOwywjiWMFsQuebGxQq0ZqpQRUL5ZiytvEMk-XeYQMd86yZJHp45xOQPVgtj3ud8luFsF--z4Nuw&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Risk Manager",
      "company": "Brown Brothers Harriman",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcHax6Hk4AJ0TiAaLfVmtOrTvHYw3ojiBYPnnFNqZHzGRV-wdPgaMRTNVLc5oc9JR6kN6Gr_yID2QZMxrT648VrFckW5dC5WuGrPpMaiP7esXvx4FiqSuwVzh1IGU7G-JU62ymdWuC03CMQE4R4NGsDovpZM8qSPII50NfYJsF0qePa6addwWF4E9PPLIloIbwX-VZBJkOqBM25yHMPVKG6ur4ndAQiTG06KaB4iB5jmqp4RexJ8xnRaSVusBNLdW_6anJ-LHDwdOhFPeCEI5BGGbWD0JbKh6Lcz2M1sBGnNXd8ZcOmeuGN7x2EP6_XCGJj7ELe4ItD45F9l6j5aPKImpaJSSuNoGTKWsMsshIaPhAWIHWxK0cQljFmxaIqV10B_CVtGJnb5c6sTQTvcuUnvqx5o9Oh0FinzN0J3dcmBE1PvYMthtGXJI-NaUtD-NDIEpBnuWmqBFUTGpd5muvsCmG8wP4DXBOLKccDlpuej_AxMjUVYN7g8cwvGOeyZZfLUIGhUCdIcOTa7RPKKchZgSIdKmBHXzOOUqY31LoS94YgbRyPZa8NbhnvvbCXdqvFvyBCg_AJbcS2HznSxD8tisMorK8VEGSsiO8_MSHlzGw93qztIoNG1ex0mFtbab8=&p=1&fvj=0&vjs=3"
    },
    {
      "name": "HR Manager (m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfAI6fxB1XP-YvUy0b7utziOC8GwtUolm25Z1pr20B8BC5dRZjx7C8CAIzG8LoE243lvpcXJwuk1RFj_72LHK2y0OM-PXHgQBFA-IiT543LpiYUy64qVVC-FH-2n3xH5LgunzIp4_7Pj9Sxy01hAH3yZOrVIcW8mg6JIQn_ItK3Rl2bbfvsC8-4eiFA-eYuXh_Q5AVVptRDdhHC5dj3qNGty3rthpKqf4WF8ZStnQqBohpsc_3QTINVGtZNeOooix8VP4rLSmEY5akCVgvqxeemxEcafLp5rfjjX-K7GLse3mYpnx5Qw2K-GeHrvUmAfVXKxZkPWmgzph2XGz4UkruAYjT5RbVJ2HupcC3e8hVIY6sO7SlrLRrRsf0O65xaMmreoX9SJJYLhIJEB_JSvL4W38ci90RGtq_62g7t3gai831_oAvqdd_2tfGmuKVcOkeYEAs_bPRptcU9EqThYx2eUzRCsTz_XG5c8ssS4jfvcjwlp1qDUfPa002BdX7VdoT2BXUm689ViK37QRgEUtEE3nIA2cdpIp_SwpzO8bcWDNPmKohcecUlP_QAweKB8YGdOKIMxPlpB9IQTna97SmYoJPk73xpf18NerVi1DAnzRTEqsquN8ptWj9L5ashwYY=&p=2&fvj=0&vjs=3"
    },
    {
      "name": "Global Process & Control Improvement Manager",
      "company": "HEINEKEN Kraków",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeK4Ua-GAZKMJzrCaubrT9mtvUK-6LFgdN1o30UP3gH83eY7Rt7z2s6Qd3cWkKCwklH-M71U2C9T22slcis0tb5qmxPJOYJTOLpGWLu4DF2SL6_M-AIfGRtsUivCIauJczHtfGZkw78kaPDupdfhDE5Up6awP3MWPyebTUcDC0S-dkIHxI2My8unE7tsiLFuMVNole0lJxGn9-TsQ_1tw0QyITsaSVhd-YWW6MyUtIq1AENWpVN9WGDmr88ApbFOPf_-jaip9GWgn_ewjswOugwde2o9Vdx_Aj7n4nhFDNhOG1_xqv2_At5y-EhyP_7Rt8gnM73d79BHt5R-hS0j-UrW231OVSM8yreVceaTtsfAeh2xGzUNZmmAhOcGhgqIV-2RzIBrTBE29aHDc0PRbp3tjLkOnNRbLCJK3RYEw9fM14bclZWqzOEnADbRdYi1xLTD_eVOadrVDrUTCZUbsaTB5wyVMtPhaNd1UL_QCasvzkPBMkqMruvsTsQyqjb-Fzk8B1cCPM5N7A_oAdxGUggdS40I_ioIu6gV4rjqflbq67NQxPiZsHNAtA_3eYs3Uupxa0XKmSz3dAUMNCV8nGsFzyPpRLmphaQIioEGFRfsjOd8ifRlJf_18c3qQQqzS7OLDb4mcBvWe1fGRTvxm3a1VZqXycAwXcp7DXfMILmfQ==&p=3&fvj=0&vjs=3"
    },
    {
      "name": "Alliance Manager",
      "company": "Ardigen",
      "urls": "https://pl.indeed.com/viewjob?jk=62be891a69ab27ba&fccid=0caf54c974d1fc7f&vjs=3"
    },
    {
      "name": "Program Manager - Force Multiplier ()",
      "company": "Cisco Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=34eb41bb4fbe4056&fccid=dfc44f3b8c44a6db&vjs=3"
    },
    {
      "name": "Clinical Project Manager",
      "company": "Ardigen",
      "urls": "https://pl.indeed.com/viewjob?jk=4e307bb2f390b172&fccid=0caf54c974d1fc7f&vjs=3"
    },
    {
      "name": "Duty Operations Manager - Krakow",
      "company": "Discovery Communications",
      "urls": "https://pl.indeed.com/viewjob?jk=a98e8ee03e26eac8&fccid=f17180ffbe436a3c&vjs=3"
    },
    {
      "name": "Demand Center Manager",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=919eb17bd825b859&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "TEAM",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com/viewjob?jk=c9c4c99adb4009f6&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "CTO Agile Team Manager",
      "company": "Motorola Solutions",
      "urls": "https://pl.indeed.com/viewjob?jk=e3d0616dede13931&fccid=22ec6ef3cc441ac2&vjs=3"
    },
    {
      "name": "Product Manager",
      "company": "Caspio",
      "urls": "https://pl.indeed.com/viewjob?jk=f3f99abdc985be44&fccid=204aafbc9b36f228&vjs=3"
    },
    {
      "name": "New Business Manager",
      "company": "Funktional",
      "urls": "https://pl.indeed.com/viewjob?jk=8f1cdf8b8304a759&fccid=014e16512e5e89bd&vjs=3"
    },
    {
      "name": "Global Customer Service Manager",
      "company": "Accenture",
      "urls": "https://pl.indeed.com/viewjob?jk=17fc9d817015d098&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Marketing Automation Specialist",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeYC8izo8kVgSPErBS1SFXQfIRrKfg_28WJqNWhTKLQpbZkDzclwr1s-TPqGu1xZOBz3jHgI3oHQWRVU18oGiu_P-TnJKJ4tPIC4Ffw3kSC9b5ye5H3iMQp2o9hdaZYgBXgvExzaZiUNRn-dFvowcXI4BYW7AuGbFl8maCwq-4VsTmFWvwmOAiWDuCNQwv2ixW65Yrg0Eqs0zH6myY9r_S3mNWV9YrJB80pWo90hqHb4wbFeNhFTzy08vPZwZVx20yYnCk-XC0gDG36tkz54sUs_DPM-FByJLJq8R7YfLJyuTs-20ZqBfKll3nK8WnHDBJyKtDQOQqnhD_fZc6ulIFF_OCWuD0fNJnP98gvaJIP3uqM5hVOM9_3YjmXAyZEX6KwCPkcTtyG2yJhpROttH9yGLaNHajWEj4YJFADbT107MkeQ4QIlXBXjdwrrUWm01i-MfUuNO88WBsA2XJnWlimeCdBJRkTdoUWHJdzhPhLDM2HPGVOGOSa88Qo3fcvBB0XVkM3Ir_A9XRUBLHpmFEjQMD-YRLRJ8FehjK1lBo0n4layAPZj750awu0U8T-HnUUmM8rSJtR7OdLiC820G2Ffd_w_mTXzlQKwpu15Hfdlc09zr-Oyiz5RH6bNBOCtVHp7o6R9niV1Puix_II3MiH&p=14&fvj=0&vjs=3"
    },
    {
      "name": "Client Success Manager",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com/viewjob?jk=b9999e64aef721d6&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "Sales Support Team Manager",
      "company": "PepsiCo",
      "urls": "https://pl.indeed.com/viewjob?jk=1bb4f1edd9688a74&fccid=2973259ddc967948&vjs=3"
    },
    {
      "name": "Product Manager (Tutoring Team)",
      "company": "Brainly",
      "urls": "https://pl.indeed.com/viewjob?jk=f91aaf79e429bfcd&fccid=0087ede1ae181969&vjs=3"
    },
    {
      "name": "Internal Control over Financial Reporting Team Manager",
      "company": "Zurich",
      "urls": "https://pl.indeed.com/viewjob?jk=40897084ce50dc3c&fccid=34938366d45106af&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com/viewjob?jk=f906cf3cfe85651a&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Senior Facilities Manager",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com/viewjob?jk=1b9df29dcbe1cf7b&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "Business Development Manager",
      "company": "Go Global Services",
      "urls": "https://pl.indeed.com/viewjob?jk=63532278a698d471&fccid=07981464a31ce167&vjs=3"
    },
    {
      "name": "Project Manager",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=585f27dc3417fa82&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Web Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com/viewjob?jk=9bd2b12f90e69e28&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Internal Control Expert",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqDUsVUkfH4EkrN84Gz9KZxfTNKGDbceuFgVKP__EcoUq1VCYNkQ2Mt2fu7q3ynIywXEnKyFHdVb47sP44_nhLig9wWvYGUl-9rd1Zf-LUTDIY5Viyc0urFp3iyk8er9Ph-Cm1TuZJ9HtQpOErKdBGqFDcYu7nKQCfxmv4-P4aPCH1gdxUxHsxYZ7QXbeZgdzYrFSEs0_YMi7AA3kfX0lxtx3XAtFE2maK6UZJjwTuMxVxplpLdpjSakxVD70DsYF1soeu2Wh28MWs5jrstfOBsnAKcg7Qnn0gd7ngb7Xs4a552Kh1PrZai0LntH5mbCVSxLiZD1JUC1JBgzqCamS74hHiLjCCbIHWm2nUd_E2AjUPqNfKAak-jtcYAdvcq6bYAAroBjrWIFFqGoAtq2tAilA5rp_WvPUgcAI93fsqtVdgGOtICLmuuju5-SAXSlw5oPQ43r6sjkAgzg25LC4ztiwQwIlg5NNww95J1oVH5B7FDswVJnRgb8YeRjBBtZeE7oXJrUEU_rZjCUMTe9zNyi0Vdx8WCp3ZEK9Ex48E1BPwrxOEXvSMyk5pBcYPOXT4KqXsYzfKrXKdWI9tTAHTJiFRDFQEUaACm-z-8HlW2YKPFM-WE2g4VxHzjPqzbZufHIuILXA_aoZUMDrRAtgl1dERyGScSBy9nmC96y3ju5&p=13&fvj=0&vjs=3"
    },
    {
      "name": "Global Project Manager of Talent Acquisition and Development",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeLBcVY6sRL-4D6o1idFR5weTHlYU4GwZ9Mx9yiW9uWdgae6WNBkYnK6RKEydEEqVr03gwjyRFE_iqkTxJ-6BcUIc2g1il_XEKbMzvBhM-LHh9omgISdHSX8SQs509giUNTwuME9uyRLt10SbzLMLR4v53qclFdHgjLuQErCmVUKTIdigg0OQNWEh8mm3Xge4XsUTnpBJd8-pn3TGsvrd1NwziroWzLlkpKfMPVBHjBfVYC6NpSP1N91_aREq8bG5gP_mIgdRH2TRDthwAlWzhETbKKHPNdMTIp-Md39dfyS2C-8OmOXS3Bg3gQhXiPRoeWxXIhElKsBg0HwBz4J0f40QOWJfz9xd6rgE_J5nBV7MASUTvOlOYKDhvK_Me94R_ZHPx3QPhUZYXQZE1CiwchfPrnN9Y1VEOBTWLiM3nBK4E2OT4vPvxnRaO5f0oFuQ-AZboWnTX3X6iSK0OcTeMgNTvDP12Y1sZORbK7oJLA6Lu8gsG_Knv0KWgqv-Ew1SP5qL_JjZ_1v0D09WiY_0diaayuLKPmj_hbZCJVV2MstxMGPvJPcKpAuX3Zz-G2D4MZ1E2VEWPkDTB-kTPkhPoKbEXEQUlbkRsi1gHrKEY6ZtZYAKHO8fewnR9Hkscxca4uWSy0O3KkXv02DktjYqVCy3EP8kYhn61V1nZ6WvamsUfgQl2z_PQ_sNtnKgZNtWg=&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Product Manager",
      "company": "WorldRemit",
      "urls": "https://pl.indeed.com/viewjob?jk=087ecfb805c28f7f&fccid=507acd357fe68a6f&vjs=3"
    },
    {
      "name": "Process Manager PTP",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=227acb7253867431&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Infrastructure Delivery Manager",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com/viewjob?/HRO-Digital/jobs/Infrastructure-Delivery-Manager-5f15cbc8bd9ab683?fccid=4fcb59d2ba8f65d1&vjs=3"
    },
    {
      "name": "Operational Buyer Spanish",
      "company": "IBM",
      "urls": "https://pl.indeed.com/viewjob?jk=c59f7db620804b71&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "IT Program Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=ef3c8c56cc9c5b26&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Software Engineering Manager, PL",
      "company": "QVC",
      "urls": "https://pl.indeed.com/viewjob?jk=d26c2d49561fd0dd&fccid=8a4535c948d32e2a&vjs=3"
    },
    {
      "name": "Network Implementation Manager",
      "company": "Akamai",
      "urls": "https://pl.indeed.com/viewjob?jk=5d08568ad2230f76&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "PLEC - Project Director",
      "company": "Air Liquide",
      "urls": "https://pl.indeed.com/viewjob?jk=fac34a13dfcde33b&fccid=0bfc42f123844c30&vjs=3"
    },
    {
      "name": "License Business Process Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=b41c0ada009670c6&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Customer Experience Manager with Dutch",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeLBcVY6sRL-0XMa5oE6oB7e5sebT4Y_MJA7Y4njKFlG7Q_bt_l79bWZDFJT8ARPPk7VDFZXLUyZT1InMXwBU1OoxR9zP7IqoFBiqHPma-qxEiNXXFxGpS8o9pbUE7yj1yFUJVxoAdcHuKyYtKk2Ku7v0l_saEN0Oa10Ep4Re-Gm3rMzPSrn-91j9Az2X_KpwBpxaXDeAd5zsjksg6QE4BDrS3LCk7W_QigTq1AWB2kIb_T3W8_g8s4DV1IPfBR2bAo8ApDwawFK-1CXpfrkayETQxV6D9ozQqHPlJVITl3xy_slUSTVMddfRhVGKkjIn7Px9Q--iSN2g_kw2G94hq_r1mr1VRGD3496lU7xMZXywBuLPX65W7t_2X5Q7ZcebELo5yM2tnQPbOPHLEbCoe5wUs4WL7WL56ici-7oYHSWGFud90M9MtizsSpoUIY7-GMOoeozZaoKCKCeoVp0cWnMPoNFEXwBkDdSO8LzTaNWxyrp3GjFovuRjLAhK09nbA0dLp9lBUTOpZqK5l4WVS-nJpJs2OnwhVSflkW6gOwx0xt6LSmitA0YiYuHpt2bBUo3vaTD0Ka9brc-o2RXjupFG4_MkJ3sAqcp3LUvxjZC8ENKlqahOEYRjY56GjfJ-ATKMj_38IwhEuqYDhLg6acBLqDPpLRoa8=&p=12&fvj=0&vjs=3"
    },
    {
      "name": "EMEA Senior Accounting (RtR) Manager",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeprGjfbmrFeVpkfH1wm39tRgF6UlvCyYo5_8EwaEy321wKt-ypL0JZdDPDNfDBwI94BGjtesgKJ6lzmDW-xWRHIn954zLsY3MmaF2qYxnz97sCEik3SXlyZZ2S6uialhslcN0oSWHWJx0XvGHdLTYtNIQvVQOJPm-1zUudc6YtY0clMPHjKra9HvW1D78eWjpGJzDB75VcqFkesDntz4pGUNwo4brCRVe3rczY1p3T-qHI0FVi0cSlWa7YXxHjSlGrb99NbyY3B6cdWpcKIsR4z9Ah-0prRpA1lg8W7sJvb4XjhWT4NFGlQr-wJoPajMi7o7UkLenUtakXad_ozvjZZO7Cp1_JSujHab7Tdx_SCvlcLjM3K5x8zZB_aYWt-zr_m4DV9Nxhe1njWvRQmyfWtirHFgje4OVPz-mhEWSZQr5W4bVKJiesMZB5WezBeiOalkI6-44stVjH-X4Ezpw7uu8X4_iz5r6hBOsWBEDU2piPS4ZcdzcOB6GFDAAvc8EiFTGqIkOCZhc6I3W8BUGYKDbWXNRRzKil9YZmXs9feW04hRce9yuMNhf9zzxG7Vj1ZnvjvfmJABP5MUNYyv5T4gBUHncN55mZjgykGFqGALPs7n2AAhAf73ltdLs73q1v7zngPXP1W7KNpaBA2LNx8ow0Z1eTDw8=&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=223e749b80e8beb0&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "HR & PAYROLL MANAGER EASTERN EUROPE (f/m/d)",
      "company": "beeline Group",
      "urls": "https://pl.indeed.com/viewjob?jk=e2ea808b0aa8024f&fccid=3f24b309557a3d43&vjs=3"
    },
    {
      "name": "Associate Project Manager",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=b4b92b1dc5b646f3&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Service Delivery Manager - Salesforce",
      "company": "IBM",
      "urls": "https://pl.indeed.com/viewjob?jk=f54b2e3adbb2f40e&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Business Change Manager",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=3033122a08b22199&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Security Technical Project Manager",
      "company": "Akamai",
      "urls": "https://pl.indeed.com/viewjob?jk=cde9a8d8aa34cad6&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Customer Experience Manager with Dutch",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=260feccc0aa5f271&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "R2R Team Leader",
      "company": "TE Connectivity",
      "urls": "https://pl.indeed.com/viewjob?jk=d49f03bfd53644f6&fccid=adb7c04d7caa1bd2&vjs=3"
    },
    {
      "name": "Aftermarket Sales Account Manager",
      "company": "Cummins Inc.",
      "urls": "https://pl.indeed.com/viewjob?jk=b8534e75d0fcecf9&fccid=36ccedc5bfdf19b1&vjs=3"
    },
    {
      "name": "Product Development Team",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com/viewjob?jk=6553258faf5f1535&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "Junior Project Manager",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=7d9c91bd296a415f&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Performance Marketing Specialist",
      "company": "Funktional",
      "urls": "https://pl.indeed.com/viewjob?jk=9465348003acef44&fccid=014e16512e5e89bd&vjs=3"
    },
    {
      "name": "Category Buyer",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=a3ed7e33cd29604a&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Freelancer Publicist",
      "company": "TOP Agency",
      "urls": "https://pl.indeed.com/viewjob?jk=6a37f8dab922c48a&fccid=95ba0f0f3bc059a8&vjs=3"
    },
    {
      "name": "Training and Quality Analyst",
      "company": "Splunk",
      "urls": "https://pl.indeed.com/viewjob?jk=3be782a1f20f660d&fccid=aef928e89977f7f0&vjs=3"
    },
    {
      "name": "Project Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=99054ffcffc4070d&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "EMEA Logistics Manager",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=e74d3d5583294b7c&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Senior Technical Product Manager, MES BA",
      "company": "Cytiva",
      "urls": "https://pl.indeed.com/viewjob?jk=798e7752fce79ede&fccid=c46411dafcae5d08&vjs=3"
    },
    {
      "name": "Junior AR Analyst/ AR Analyst OTC Spanish",
      "company": "IBM",
      "urls": "https://pl.indeed.com/viewjob?jk=c394da4bf1d0b604&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Senior PR Manager",
      "company": "Bidroom Poland",
      "urls": "https://pl.indeed.com/viewjob?jk=18700326f3ece834&fccid=3661982007b43fee&vjs=3"
    },
    {
      "name": "Infrastructure Delivery Manager",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=8e513b4ccfef4bb3&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Account Strategist",
      "company": "Strike Social",
      "urls": "https://pl.indeed.com/viewjob?jk=743e3c2f13fca29c&fccid=cf4976b1a250fb07&vjs=3"
    },
    {
      "name": "Finance Project Manager",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=b6a0dadfb078d607&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "IT Project Leader/Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=598ff89cac1e7ffe&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Senior Delivery Manager",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=7c959fbf65bf488c&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Senior Product Manager",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com/viewjob?jk=b1a26f8b9145c41f&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "Delivery Lead",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com/viewjob?/HRO-Digital/jobs/Delivery-Lead-886e6c2ba3c53aea?fccid=4fcb59d2ba8f65d1&vjs=3"
    },
    {
      "name": "Procurement Business Process Expert",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com/viewjob?jk=53eb823859017842&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "HCM Deck",
      "urls": "https://pl.indeed.com/viewjob?jk=16eeaa9db7daf93b&fccid=183a60f9194ba681&vjs=3"
    },
    {
      "name": "Operations Support Intern",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=ae80507a7d2c7239&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Junior AR Analyst OTC French",
      "company": "IBM",
      "urls": "https://pl.indeed.com/viewjob?jk=8b87ab12f769b28b&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Marketing Automation Specialist",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=3e0fbc67c95568e5&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Senior Talent Acquisition Partner",
      "company": "PepsiCo",
      "urls": "https://pl.indeed.com/viewjob?jk=9b4c09f9d4a21151&fccid=2973259ddc967948&vjs=3"
    },
    {
      "name": "R2R Team Leader with French",
      "company": "TE Connectivity",
      "urls": "https://pl.indeed.com/viewjob?jk=480e4ee516fd0a03&fccid=adb7c04d7caa1bd2&vjs=3"
    },
    {
      "name": "Business Development Manager (HR Solutions)",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=1fe408682bda58b8&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Senior Talent Partner",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=774aba820bf5c07b&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Solution Engineer – Business Application Services",
      "company": "ALK-Abelló",
      "urls": "https://pl.indeed.com/viewjob?jk=5b0bff2ff8beffba&fccid=b534993dafd4bb7f&vjs=3"
    },
    {
      "name": "Customer Experience Engineer - Collaboration (Customer Succe...",
      "company": "Cisco Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=33f7a65e9d3eead3&fccid=dfc44f3b8c44a6db&vjs=3"
    },
    {
      "name": "IT Buyer",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=5015a8e3d058ce00&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "CRM & Lead Generation Manager",
      "company": "Goodminds",
      "urls": "https://pl.indeed.com/viewjob?jk=3ae9b6871fb43fab&fccid=11f0d4057730c23d&vjs=3"
    },
    {
      "name": "Procurement Process Manager with German(m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?jk=a44b398c47317f40&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Director for the Centre for Computational Medicine – Interna...",
      "company": "ExecMind Life Science Executive Search",
      "urls": "https://pl.indeed.com/viewjob?jk=87b9a2ac226f6051&fccid=4dda44caa328da25&vjs=3"
    },
    {
      "name": "Team Lead",
      "company": "Working Smart Limited",
      "urls": "https://pl.indeed.com/viewjob?jk=a0e31eef6dd61352&fccid=eb81f98123301883&vjs=3"
    },
    {
      "name": "Technical Marketing Manager - Automotive Electronics ( f/m)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?jk=43efdbb974beda71&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Workday Financials Data Solutions Lead Consultant",
      "company": "Alight",
      "urls": "https://pl.indeed.com/viewjob?jk=193a7f106db385c4&fccid=c35833abe06c86e0&vjs=3"
    },
    {
      "name": "Junior Ruby on Rails Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=3ee2b30b299dfdcc&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Chief Accountant, Accounting to Reporting",
      "company": "Lundbeck",
      "urls": "https://pl.indeed.com/viewjob?jk=d79b9f54d9f22ae0&fccid=884e0310e97a8b3a&vjs=3"
    },
    {
      "name": "Ruby on Rails Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=6f7e6c22857a22b8&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "React Native Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=1580b5bf1a221038&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Global Senior Risk and Internal Control Manager",
      "company": "Goodminds",
      "urls": "https://pl.indeed.com/viewjob?jk=df109f7a62d6c8ae&fccid=11f0d4057730c23d&vjs=3"
    },
    {
      "name": "InfoSec Senior Analyst Risk Awareness",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=9ae39cf3803b8f46&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Senior Software Engineer - Mulesoft",
      "company": "QVC",
      "urls": "https://pl.indeed.com/viewjob?jk=4a0941d4fbb67e1f&fccid=8a4535c948d32e2a&vjs=3"
    },
    {
      "name": "Senior Software Engineer - React",
      "company": "WP Engine",
      "urls": "https://pl.indeed.com/viewjob?jk=1979abe89866df75&fccid=966a8dd715d10eb7&vjs=3"
    }
  ],
  "468": [
    {
      "name": "Senior SQL//VBA/Coric developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-sql-vba-coric-developer_3409588.html#275e57321ddc9e808b89121358aa9b6f"
    }
  ],
  "469": [
    {
      "name": "opis oferty",
      "company": "MAXTO",
      "urls": "https://pl.indeed.com/viewjob?jk=9b1ab4b7fbde4e55&fccid=6e3a4fe249b84d43&vjs=3"
    },
    {
      "name": "Specjalista ds. nowych biznesów",
      "company": "Mia Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=6d5cb76e96f658d5&fccid=0c143c026c0aaa11&vjs=3"
    },
    {
      "name": "Python Senior Developer",
      "company": "Investio",
      "urls": "https://pl.indeed.com/viewjob?jk=81de3d8912c00032&fccid=c5b0414455b5af46&vjs=3"
    },
    {
      "name": "Senior Brand Manager CEE",
      "company": "HEADHUNTERS GROUP",
      "urls": "https://pl.indeed.com/viewjob?jk=fee091c2def42c3f&fccid=2626896dbec10c5d&vjs=3"
    }
  ],
  "470": [
    {
      "name": "Digital Analytics Specialist",
      "company": "Bidroom Poland",
      "urls": "https://pl.indeed.com/viewjob?jk=e2f78629f64f82a5&fccid=3661982007b43fee&vjs=3"
    }
  ],
  "471": [],
  "472": [],
  "473": [
    {
      "name": "Ambasador Poziom Wyej",
      "company": "EY Polska",
      "urls": "https://www.pracuj.pl/praca/ambasador-poziom-wyzej-krakow,oferta,1000211984"
    }
  ],
  "474": [
    {
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3426290.html#55a0434a5c48694965301d14f33b295c"
    }
  ],
  "475": [
    {
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3426290.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    }
  ],
  "476": [
    {
      "name": "Junior Medical Data Analyst",
      "company": "Cardiomatics sp.z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-medical-data-analyst-krakow,oferta,1000238986"
    },
    {
      "name": "Data Management Junior Analyst with Spanish",
      "company": "PepsiCo GBS Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/data-management-junior-analyst-with-spanish-krakow,oferta,1000220916"
    },
    {
      "name": "Video Content Analyst with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/video-content-analyst-with-french_3422886.html#35149d941c62dd9bfa41889f97912f14"
    }
  ],
  "477": [
    {
      "name": "Content Analyst - Portuguese Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-portuguese-speaker-online-recruitment_3410800.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-bulgarian-speaker-online-recruitment_3410804.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Finnish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-finnish-speaker-online-recruitment_3410806.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Greek Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-greek-speaker-online-recruitment_3410808.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-italian-speaker-online-recruitment_3410812.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Norwegian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-norwegian-speaker-online-recruitment_3410814.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-romanian-speaker-online-recruitment_3410816.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-spanish-speaker-online-recruitment_3410820.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Turkish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-turkish-speaker-online-recruitment_3410822.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-ukrainian-speaker-online-recruitment_3410824.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3410826.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "CSR Online Advertising Specialist - Hungarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-hungarian-speaker-online-recruitment_3410830.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "CSR Online Advertising Specialist - Latvian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-latvian-speaker-online-recruitment_3410834.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "CSR Online Advertising Specialist - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-romanian-speaker-online-recruitment_3410836.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Analyst - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-french-speaker-online-recruitment_3410740.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Analyst - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-german-speaker-online-recruitment_3410746.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Analyst - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-italian-speaker-online-recruitment_3410748.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Analyst - Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-russian-speaker-online-recruitment_3410750.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Analyst - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-spanish-speaker-online-recruitment_3410752.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Dutch Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-dutch-speaker-online-recruitment_3410756.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-french-speaker-online-recruitment_3410758.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-german-speaker-online-recruitment_3410760.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-online-recruitment_3410762.html#a0e5184996d917155857d91461689a30"
    }
  ],
  "478": [
    {
      "name": "Graphic Designer",
      "company": "Jacobs",
      "urls": "https://pl.indeed.com/viewjob?jk=b5c0fd255ad29aae&fccid=de56d7554bea5214&vjs=3"
    },
    {
      "name": "Visual Media Designer",
      "company": "Jacobs",
      "urls": "https://pl.indeed.com/viewjob?jk=9b3ba8c1b66b6a33&fccid=de56d7554bea5214&vjs=3"
    },
    {
      "name": "Visual Designer (Freelancer)",
      "company": "Miquido",
      "urls": "https://pl.indeed.com/viewjob?jk=775a02a02a2720b8&fccid=b7117f8974cf5be7&vjs=3"
    },
    {
      "name": "Web Designer",
      "company": "MOTIFE",
      "urls": "https://pl.indeed.com/viewjob?jk=1bf1743c91e11e4d&fccid=4c6f3b2aba1982e4&vjs=3"
    },
    {
      "name": "UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=be38b941f8b99086&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "User Experience Designer",
      "company": "Akamai",
      "urls": "https://pl.indeed.com/viewjob?jk=b3906c9801f98ae2&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=e60f52063a358e4d&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=dc96c47533aa4f92&fccid=3e41fd04722e7f1d&vjs=3"
    }
  ],
  "479": [
    {
      "name": "Office 365 Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/office-365-architect_3406648.html#0bc2e04889106693323793456bee0742"
    }
  ],
  "480": [
    {
      "name": "L&D Agile Program Designer, Officer",
      "company": "State Street Bank Poland",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfN7IR8G37v-c8dsh7Me_BkIY-G6Ks5y8G-fdlyy7ndDdukxOzR7ITx1bl3BheSYL1VblLAEcl8nybcIUEszD8HDdJMBlUyN-KDqHVJMVei2luFkTSmRtGTnSBn16EaQdYyD_iCJCrXamnVxDZPYF-LzBz2GWZA2W0DrdulxdGMu5E--krw1gSlN-MVZLuKQYKWLl2ZfZ1lnb9Sul-gWOaKflkzaKKPkCbv-lT0ZB20vLGfBT5wpUwRpVEAznUtRSY95fK08kIWIV7bQ4EBnUni6Wg9sblHFo4iVtDWTOMvXpoIc2qT5vfwLHXQBNBpjxz6zhT6SmKCur8H5dlFnJdVWezKVOJZcDldfCFms1qdNMR3iqmJrkBdZTBU4H6TpOY9zsgGhA42mZAxKAikv0uh5zN4kR_qc-LamCToCXaO8Q5W14cKq0-_wzs7seWPzmbIu6BXQazQjOcs3xZfpVpuQMtGecD_gOME5HoYiWy_B8fjVkUyRcACcoBDdG5rKRZ81KkCRY9sg0BtcKbJVWwr2Ndva4QEAIWafbhKo0yCvkRQh7JSumX99hYaMR7MhZYuPMAdDqGHtIjlDjb4HMnBpVX-9pYf6fG1qLBUpQBUF1M1chPJPeX_P6UBzFBOBnjsAKhtiaLQ916Gy8rC1Cpcji7m858NnDU=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "L&D Agile Program Designer, Officer",
      "company": "State Street",
      "urls": "https://pl.indeed.com/viewjob?jk=c388c159d470ec3b&fccid=92f1ccd9154b0139&vjs=3"
    },
    {
      "name": "Electronics Designer – Hardware",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=c635afe05988b155&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Electronics Designer – Hardware & Firmware",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=f52253779d54ebd3&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Senior Graphic Designer&Team Leader (Principles Team)",
      "company": "Admind",
      "urls": "https://pl.indeed.com/viewjob?jk=4150914dadcd5f9f&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Senior Game Designer",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com/viewjob?jk=5ee6464614937cb7&fccid=c26d104f25f1364f&vjs=3"
    }
  ],
  "481": [
    {
      "name": "Web Designer",
      "company": "MOTIFE",
      "urls": "https://pl.indeed.com/viewjob?jk=1bf1743c91e11e4d&fccid=4c6f3b2aba1982e4&vjs=3"
    }
  ],
  "482": [
    {
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#58ec3734becff61310d83aee90bba3f5"
    },
    {
      "name": "Senior Product Owner",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-product-owner_3413396.html#58ec3734becff61310d83aee90bba3f5"
    },
    {
      "name": "Product Manager HVAC",
      "company": "FERRO Spółka Akcyjna",
      "urls": "https://www.praca.pl/product-manager-hvac_3383660.html#58ec3734becff61310d83aee90bba3f5"
    },
    {
      "name": "Junior/ Mid Scrum Product Owner",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/junior-mid-scrum-product-owner_3379050.html#58ec3734becff61310d83aee90bba3f5"
    }
  ],
  "483": [
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3410826.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Hungarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-hungarian-speaker-online-recruitment_3410830.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Latvian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-latvian-speaker-online-recruitment_3410834.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-romanian-speaker-online-recruitment_3410836.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist – Czech or Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-czech-or-slovak-speaker-online-recruitment_3410776.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Lithuanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-lithuanian-speaker-online-recruitment_3410778.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3410782.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist – Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-speaker-online-recruitment_3410788.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-spanish-speaker-online-recruitment_3410794.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Russian/Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-ukrainian-speaker-online-recruitment_3410798.html#f6165d6af9b20f1fdaeaf0cd71539960"
    }
  ],
  "484": [
    {
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3426290.html#02df4f061b58bf8b20fd41aba0c30fb6"
    }
  ],
  "485": [
    {
      "name": "Specjalista ds. Marketingu Internetowego",
      "company": "Veneo",
      "urls": "https://pl.indeed.com/viewjob?jk=2a129de4bbf6d38c&fccid=d055a1ba91135454&vjs=3"
    },
    {
      "name": "Specjalista ds. kampanii marketingowych (SEM)",
      "company": "PromoTraffic",
      "urls": "https://pl.indeed.com/viewjob?jk=01fecd4da9a94534&fccid=e29fd57cbddac110&vjs=3"
    }
  ],
  "486": [
    {
      "name": "Specjalista ds. Kalkulacji - Hydrotechnika (m / k)",
      "company": "STRABAG Sp. z o.o. / Dyrekcja Budownictwa Ogólnego...",
      "urls": "https://pl.indeed.com/viewjob?jk=1393ffc3f31db815&fccid=8fdcbe58c8fef8e5&vjs=3"
    }
  ],
  "487": [
    {
      "name": "Fulfilment Planner",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=4529547ae3200662&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Strategic Planner",
      "company": "Admind",
      "urls": "https://pl.indeed.com/viewjob?jk=2752f0b14716c99e&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com/viewjob?jk=f906cf3cfe85651a&fccid=a7f110d3869433f8&vjs=3"
    }
  ],
  "488": [
    {
      "name": "Traffic Manager",
      "company": "BeDigital",
      "urls": "https://pl.indeed.com/viewjob?jk=ffe147b33eaa3cc2&fccid=d216bde0f83047fa&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com/viewjob?jk=f906cf3cfe85651a&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Web Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com/viewjob?jk=9bd2b12f90e69e28&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Digital Analytics Specialist",
      "company": "Bidroom Poland",
      "urls": "https://pl.indeed.com/viewjob?jk=e2f78629f64f82a5&fccid=3661982007b43fee&vjs=3"
    },
    {
      "name": "F5 Engineer - Global F5 Centric Footprint",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=d9bb1a6473ca6702&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Logistics Specialist",
      "company": "Akamai",
      "urls": "https://pl.indeed.com/viewjob?jk=5d55e66d613ca9f5&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Service Transition Manager",
      "company": "Mindbox S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=fe37d45fdb9ebd8a&fccid=90b22c4f2ae1e58b&vjs=3"
    },
    {
      "name": "Project Manager - Infrastructure Delivery",
      "company": "Akamai",
      "urls": "https://pl.indeed.com/viewjob?jk=a6dcf4accd3d66de&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Security Engineer Zscaler",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=3add5ef8110732b9&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Kierownik Robót (Solution Deployment Manager)",
      "company": "Thales Group",
      "urls": "https://pl.indeed.com/viewjob?jk=71ab7b696762fe62&fccid=b920aab5fd60595d&vjs=3"
    },
    {
      "name": "Client Service Manager (CSM) with Italian",
      "company": "Devire",
      "urls": "https://pl.indeed.com/viewjob?jk=3a0780603895ed42&fccid=dac7798bc9cb142c&vjs=3"
    },
    {
      "name": "E-commerce Marketing Specialist",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=81c413859cfc1c03&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Senior Solutions Architect",
      "company": "Akamai",
      "urls": "https://pl.indeed.com/viewjob?jk=9d7366fd5f08bb98&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Client Service Manager (CSM) with French or German",
      "company": "Devire",
      "urls": "https://pl.indeed.com/viewjob?jk=3e26c7de837ac00c&fccid=dac7798bc9cb142c&vjs=3"
    },
    {
      "name": "Solutions Architect II with French",
      "company": "Akamai",
      "urls": "https://pl.indeed.com/viewjob?jk=f3868be17eec4177&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Senior Software Engineer - React",
      "company": "WP Engine",
      "urls": "https://pl.indeed.com/viewjob?jk=1979abe89866df75&fccid=966a8dd715d10eb7&vjs=3"
    },
    {
      "name": "JD for Senior Consulting Engineer DC Compute",
      "company": "Tech Talent Consulting",
      "urls": "https://pl.indeed.com/viewjob?jk=8cef2a87c2d17f6c&fccid=3bf38324457ca337&vjs=3"
    }
  ],
  "489": [
    {
      "name": "User Experience Designer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=3639792924b8f77b&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "User Experience Designer",
      "company": "Akamai",
      "urls": "https://pl.indeed.com/viewjob?jk=b3906c9801f98ae2&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Junior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=05561223627ea708&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Product Designer",
      "company": "Motorola Solutions",
      "urls": "https://pl.indeed.com/viewjob?jk=dc9bd51d858022fa&fccid=22ec6ef3cc441ac2&vjs=3"
    },
    {
      "name": "UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=be38b941f8b99086&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Web Designer",
      "company": "MOTIFE",
      "urls": "https://pl.indeed.com/viewjob?jk=1bf1743c91e11e4d&fccid=4c6f3b2aba1982e4&vjs=3"
    },
    {
      "name": "UX Designer (Finanse)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=e92f69f00f53fe48&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Senior Product Designer",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com/viewjob?jk=5834b9e123fc4492&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "Senior Product designer",
      "company": "unatrix",
      "urls": "https://pl.indeed.com/viewjob?jk=fde36f7e3231afa1&fccid=04a193c8b03a233d&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=e60f52063a358e4d&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "UX Designer (ERP)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=0bad393ae110a11c&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Web Designer / UX specialist",
      "company": "Webchefs",
      "urls": "https://pl.indeed.com/viewjob?jk=cdf0c98992eb4aa5&fccid=458dd1bc5b9928b4&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=dc96c47533aa4f92&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Senior Graphic Designer&Team Leader (Principles Team)",
      "company": "Admind",
      "urls": "https://pl.indeed.com/viewjob?jk=4150914dadcd5f9f&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "ABOUT US",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com/viewjob?jk=59c0c356987323eb&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "Senior Game Designer",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com/viewjob?jk=5ee6464614937cb7&fccid=c26d104f25f1364f&vjs=3"
    },
    {
      "name": "Learning Designer&Training System Specialist",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=1426a67502f515f9&fccid=3e41fd04722e7f1d&vjs=3"
    }
  ],
  "490": [
    {
      "name": "Microservices Integration Engineer",
      "company": "Amway Global Business Services",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIdMwMc7ezk_p_PkoolEgBmKR83BBGTCCDQM4nphSgDarbGN7399hkJjUAmutZUxvjS5Hegv_4q140K2yUWF6Fzcdh4Oqbj74iHwZEzCzXIyDEMJa_2LkjwU9EOTBFHHERInxtZ7AYwBSufV9vvkIf4VhO4qCkXLlfmplUdkiMky3Q6wctI2H-6DhmzRVX8xlmFEy3jwKVRvI85ZRLUhy4zNz3Hwv8LrKirVo85EUgxODRjH2N1SsX2D5rbbwKl6a7pwIkFdlS1URkdxQ86NWKIbKbPChiFEmZh0nvUhrZd-ey74I_A4z18Vc1Bg2nUYDj_VaYO_C7jNW03dQGi2-qFnxOe1dAUiAXyHs76TPicRumukFNUMt7_3aap7SFxIQ_iTceKvRmZZGQoHQsKKiPkgwrzOgwZA3eqcjLNn1aL_bhMtEnWnNfPYesG1iQaouYfXMiUBkx7PrUJCUPcmwvUQdlEVl6FTgPR3Eta4KJqS6l24_y6pQ4wiXKwHNnu_dQmm_d72udHNBgJ7L6NCt3hI-v21rXP_6WVdESKs_MZBYK7_0wq3HnxmvfpqqyvPg-F8_Z0m15nLXKQ5xupnjMSZLMCxWUrpgGijRGxbKuyIiofZ0BriOuWNJ-QDSGJPOhaZsZsekI573XUsZ4RJyjkG&p=0&fvj=0&vjs=3"
    },
    {
      "name": "UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=be38b941f8b99086&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Front End Software Developer - (Krakow)",
      "company": "h2o.ai",
      "urls": "https://pl.indeed.com/viewjob?jk=cfbb605157c80b53&fccid=41a5a100828398e1&vjs=3"
    },
    {
      "name": "React Developer",
      "company": "Making Waves",
      "urls": "https://pl.indeed.com/viewjob?jk=d3f63dcb1100ffc1&fccid=eb14cce8232d9a6c&vjs=3"
    },
    {
      "name": "Power Grids - C#/.NET Developer for Network Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=4edfed7f8a320bcb&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Software Developer Level",
      "company": "CRIF",
      "urls": "https://pl.indeed.com/viewjob?jk=72594e5ab1bb228c&fccid=7a2798bb3678d68a&vjs=3"
    },
    {
      "name": "Full Stack Developer",
      "company": "Try Codnet",
      "urls": "https://pl.indeed.com/viewjob?jk=8017d91a0e626e42&fccid=6938dd7585d85504&vjs=3"
    },
    {
      "name": "Software Developer II",
      "company": "CRIF",
      "urls": "https://pl.indeed.com/viewjob?jk=1349d8bf9d6ef3f9&fccid=7a2798bb3678d68a&vjs=3"
    },
    {
      "name": "Frontend Developer",
      "company": "ManpowerGroup Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=18f63657b6889da6&fccid=1a17983a910f73d8&vjs=3"
    },
    {
      "name": "Senior Javascript Developer",
      "company": "ProData Consult",
      "urls": "https://pl.indeed.com/viewjob?jk=4a6eb7a2b0ff7fed&fccid=fa336ade0bd80ccd&vjs=3"
    },
    {
      "name": "Web Developer",
      "company": "Working Smart Limited",
      "urls": "https://pl.indeed.com/viewjob?jk=5527b145aa3574c1&fccid=eb81f98123301883&vjs=3"
    },
    {
      "name": "ReactJS Software Engineer",
      "company": "Pulsate Mobile",
      "urls": "https://pl.indeed.com/viewjob?jk=8c4d9b58f1ecece7&fccid=b4056e2de55537c8&vjs=3"
    },
    {
      "name": "iOS Developer",
      "company": "Net2source Global Workforce Solutions Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=9f9718eed86b11da&fccid=96ad8dbc86ceeb6e&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=e60f52063a358e4d&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Angular Developer",
      "company": "At provider Poland sp.z.o.o.",
      "urls": "https://pl.indeed.com/viewjob?/At-provider-Poland-sp.z.o.o./jobs/Angular-Developer-df588b893954ff5a?fccid=3cb053f83959b623&vjs=3"
    },
    {
      "name": "AngularJS Developer",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=30da4a75737f2bc7&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Senior Front-End Developer",
      "company": "Webchefs",
      "urls": "https://pl.indeed.com/viewjob?jk=d1154792805ef342&fccid=458dd1bc5b9928b4&vjs=3"
    },
    {
      "name": "Frontend Developer",
      "company": "Experis",
      "urls": "https://pl.indeed.com/viewjob?jk=70625b732d603d00&fccid=ca2b244e2a15ca5c&vjs=3"
    },
    {
      "name": "Java Fullstack Developer",
      "company": "Sii Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=fe548fe8d4b2d9de&fccid=291f67da0c0c0d67&vjs=3"
    },
    {
      "name": "Mid Full Stack Developer",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=b17119c38db3e8f2&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Microservices Integration Engineer",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIedI4sSciZdaKzWKVg_T1zuyhd9feKXm3basbMG59gzq1gS21GAqSJ_K7dFzUvkpHWX6E7e-Ngf4uiCTPQmtne5BzCwIels-8S4R1HBmsnIoNm5cz7qgIhmZ7XgtHkGUK2vau6CfFf0blwGyjEgeSb6Vi-rvMH0dREIhiSwml7Srcyk4EdJUyzBAaMT7IvR5IWfX34i2k4Ni7Sy9x_Ycts15W6TaKI_V0HdmGX_6LBJ3D5T2HDtM9kl1p1WH3coACZI1fyZ7lDKFHW38lOBls6vpus0NSbaSoFZF8o50OmVgsNQR4uaCwm9tO9Nnvm4LTHPC6Np5oUyB5dc0Wfx1X-8775i6oxx-hs886K7LVx6y1X96NpXTEUtvwmEvoMB3q7DFzg4wm3XXkss3zuMutx6ZkJBSt1TkZvgG9XSTKq1Spt6hLXXapUFDlqKcKxStJmpHVKYf8CV11Vt_bqAmykWhO3PcKFERPo6xsdEdrfswPWOLLgUGYXOPW6hI1FlzzBDM7xqJzFdNKl--QclVBj1WSGe-haG68EWLCh_tAVG-Fw2Ru94NiarxHFW9ViwyJ2hNrHgjq73Rd-3inOq1D7tw5s3DZScJrdu3NQIUDTIzPySmx6YoC04YTaSI8lMEyv7AJqzw5Atq_9DD0R4ivkvLZjyRoiD996mUvlaJR0hvw==&p=9&fvj=0&vjs=3"
    },
    {
      "name": "API / Microservices Integration Engineer",
      "company": "Amway Global Business Services",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIe8teuQF_6LdakARRgEohZHICrnz84_fBqEj0p7PLXIfltdUz7pCh8GeAQhGighDB6NuU9OhZEJ8uMhn6SjQs7DfUdwpO1PtKPETzG1VWxGp8U_Ag6uTAS8NHj5CM9rLum6ANITHxB0p97og56P_3bPdmXkUXDjY27-jsbMnHUgM4ZLOTxUVGUGnuBIbhFfUcM2_WaRra3Er8EoFl-r6XlTkJerDGQ6CDA86LXJW48X-0xMXjttueaBuD6agJwUXfxDm_hURbZgkwyRPmbceAvMCnpdZDVjnWTUbJcqBndEugCTMLPgA4nW47w95KFP7cebEe38c0-jUyFoKCzTtdU8HIwmJLvF4tOtMyS2qInHeUV6yLORRnly4FIyBZno3rmavYxxQlz-2wHMUP091VVzPl573VhKpYcrq0LND4czUZCxWDLsoGmIERd8tcIZyaoAgaJtOxvWYQWRVtJcNBZFScxf_0uvgZwG256Iw-Qcd7RwBXvvKsekv_N2DqOPDI8pVa2Afaq5jDWlmBbeD3O1q1kELTgnWRuSMx2AaTaVlp2LoBczxNv5DY4uDXkxQsJ_iS79iN_W1A8Uko2HAg6NBcP0_peDMjxX0HOUixZhmhpcJScBYNSClr85JnTUCEAIkS-2ajMBDVPJUKcmx9vzN_iyPHF5VpU=&p=10&fvj=0&vjs=3"
    },
    {
      "name": "IOS Developer",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=e6bd5b7e408cbb4d&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Java 8 Full-stack Developer",
      "company": "Verita HR Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=b20dec846e560f66&fccid=e265b982603f34bc&vjs=3"
    },
    {
      "name": "Senior Full Stack Software Engineer (Java and/or Angular)",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=21cb3a753bdbd2cf&fccid=532afac41b2663f7&vjs=3"
    }
  ],
  "491": [
    {
      "name": "Szef Działu Wentylacji i Klimatyzacji",
      "company": "Proguest Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=66916e99a659fd5b&fccid=e9bc886abaa81536&vjs=3"
    },
    {
      "name": "Praca Hydraulik-Monter/Pomocnik Instalacji Sanit.,Went.-Klim",
      "company": "Firma Instalacyjna Wentylacyjno Klimatyzacyjna",
      "urls": "https://pl.indeed.com/viewjob?jk=67281c722e6d3322&fccid=9e665fb383a2cec8&vjs=3"
    },
    {
      "name": "Praca Monter/Pomocnik Instalacji Klimatyzacji",
      "company": "Firma Instalacyjna Wentylacyjno Klimatyzacyjna",
      "urls": "https://pl.indeed.com/viewjob?jk=bc153864344c3a28&fccid=9e665fb383a2cec8&vjs=3"
    },
    {
      "name": "Inżynier sprzedaży, branża HVAC",
      "company": "Proguest Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=974674f4ab75c076&fccid=e9bc886abaa81536&vjs=3"
    }
  ]
}
