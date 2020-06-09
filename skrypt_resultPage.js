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
      "urls": "https://pl.indeed.com//rc/clk?jk=b0e6e3e41a8cd955&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Kierownik Budowy",
      "company": "EPCM",
      "urls": "https://pl.indeed.com//rc/clk?jk=2d57e544bd1aeef8&fccid=a877bb8252ef54dd&vjs=3"
    },
    {
      "name": "Starszy Specjalista ds Ofertowania",
      "company": "controlprocess",
      "urls": "https://pl.indeed.com//rc/clk?jk=d1e2f39450f2d69c&fccid=66aef5497a72caee&vjs=3"
    },
    {
      "name": "Rekrutacja na stanowisko Specjalisty ds",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com//rc/clk?jk=f899e98d6395e7ff&fccid=dd616958bd9ddc12&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=45ea9c17e10c90e6&fccid=7b6043ac7d4ffc11&vjs=3"
    },
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Elektronik – Konstruktor",
      "company": "2Bora",
      "urls": "https://pl.indeed.com//rc/clk?jk=1412ed0791ddda41&fccid=81eeaa9aaf867a65&vjs=3"
    },
    {
      "name": "Inżynier ds kalkulacji / przygotowania produkcji (m / k",
      "company": "STRABAG Infrastruktura Południe Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=e67453e66a025c10&fccid=91ff00d5203b00da&vjs=3"
    },
    {
      "name": "Inżynier Wsparcia Technicznego IP - z językiem angielskim",
      "company": "ELFON",
      "urls": "https://pl.indeed.com//rc/clk?jk=b679e1353319d5c7&fccid=2c4afa11216a4599&vjs=3"
    },
    {
      "name": "Inżynier Automatyk PLC",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=db5567b482026e7b&fccid=8768f8af165a1d65&vjs=3"
    },
    {
      "name": "Mistrz Produkcji",
      "company": "Myworknet Sylwia Ottka",
      "urls": "https://pl.indeed.com//company/Myworknet-Sylwia-Ottka/jobs/Mistrz-Produkcji-3435f660d9377a14?fccid=056638f96335ad64&vjs=3"
    },
    {
      "name": "Inżynier Jakości - oferta z pakietem relokacyjnym",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c335b71aa6443013&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Inżynier Procesu Automotive Greenfield",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=83af8b65d67f08d7&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Senior Software Engineer",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com//rc/clk?jk=562c72dc7345b279&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Inżynier Procesu / Produkcji - oferta z pakietem relokacyjny...",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=525bfd3e48fc6f63&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Sales Engineer",
      "company": "CELLCO COMMUNICATIONS",
      "urls": "https://pl.indeed.com//rc/clk?jk=0525b90c6ac868da&fccid=b4f11fc1f32b29f5&vjs=3"
    },
    {
      "name": "EMBEDDED SOFTWARE ENGINEER",
      "company": "Loycon",
      "urls": "https://pl.indeed.com//rc/clk?jk=ea6bcccc13cf9ce4&fccid=7129a6c6479d89d1&vjs=3"
    },
    {
      "name": "Active Safety Systems Engineer",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Lider Działu Inżynierii Procesu",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c94802d34ca011fe&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Frontend Software Engineer",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=f9282b19d2eca2cf&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Service Engineer",
      "company": "Manpower",
      "urls": "https://pl.indeed.com//rc/clk?jk=c29a6065307d745d&fccid=1a17983a910f73d8&vjs=3"
    },
    {
      "name": "Java Software Engineer",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=036ee4e6506ca4c2&fccid=062f71e131e87cf0&vjs=3"
    }
  ],
  "14": [
    {
      "name": "Kierownik Budowy",
      "company": "EPCM",
      "urls": "https://pl.indeed.com//rc/clk?jk=2d57e544bd1aeef8&fccid=a877bb8252ef54dd&vjs=3"
    },
    {
      "name": "MANAGER DS. SPRZEDAŻY - KEY ACCOUNT MANAGER nr ref KAM/2020",
      "company": "Guard 360 Sp. z o. o. S.K.",
      "urls": "https://pl.indeed.com//rc/clk?jk=9e794435d631e55a&fccid=9bd5f6f55915eae9&vjs=3"
    }
  ],
  "15": [
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
      "name": "Opiekun Finansowy",
      "company": "Stefczyk Finanse - Towarzystwo Zarzdzajce SKOK Sp. z o.o. S.K.A.",
      "urls": "https://www.pracuj.pl/praca/opiekun-finansowy-krakow,oferta,1000244310"
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
      "name": "(FCR Ops) Junior Investigator Transaction Monitoring with German",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fcr-ops-junior-investigator-transaction-monitoring-with-german-krakow,oferta,1000260226"
    },
    {
      "name": "Modszy Specjalista - Specjalista w Zespole ds. Kontroli i Audytu",
      "company": "Narodowe Centrum Nauki",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-specjalista-w-zespole-ds-kontroli-i-audytu-krakow,oferta,1000240165"
    },
    {
      "name": "Kontroler wewnętrzny (ds. inwestycyjnych w branżach: drogowo-mostowej, automatyka i telekomunikacja lub energetycznej)",
      "company": "PKP Polskie Linie Kolejowe S.A",
      "urls": "https://www.praca.pl/kontroler-wewnetrzny-ds-inwestycyjnych-w-branzach-drogowo-mostowej,automatyka-i-telekomunikacja-lub-energetycznej_3420150.html#c07039fb3869757a41e934ab1e2dd177"
    },
    {
      "name": "Starszy Asystent / Supervisor w Dziale Audytu Ogólnego",
      "company": "KPMG",
      "urls": "https://www.praca.pl/starszy-asystent-supervisor-w-dziale-audytu-ogolnego_3381340.html#c07039fb3869757a41e934ab1e2dd177"
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
      "name": "Project Controls Specialist",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/project-controls-specialist_3389654.html#eba3e508dad11bda6148877019662394"
    },
    {
      "name": "Technical Project Manager - German Speaker",
      "company": "Merit Poland Sp. z o.o.",
      "urls": "https://www.praca.pl/technical-project-manager-german-speaker_3365180.html#eba3e508dad11bda6148877019662394"
    },
    {
      "name": "Kontroler Finansowy/ Manager Działu Kontrolingu",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/kontroler-finansowy-manager-dzialu-kontrolingu_3380982.html#eba3e508dad11bda6148877019662394"
    },
    {
      "name": "Kierownik kontrolingu kosztów / supervisor cost controlling",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/kierownik-kontrolingu-kosztow-supervisor-cost-controlling_3400168.html#eba3e508dad11bda6148877019662394"
    }
  ],
  "19": [
    {
      "name": "Analityk treści (Content Analyst) - język francuski [Online...",
      "company": "Majorel",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0CNK_eYI_piGz_o9hgXSGx7T7x29qxg32K7jE7Cx6W9IvzrK4I0F6Q0jhCMwvliNANl9aJhI3Oy0OkguyTpkQ2CzVIpuxQRZSQanwFhWJv1hRDe0Jhp8k1QrW6f6canFICqihJYZhtF40hFHoGdq92GH7YbUt75wn6k6KmLL_f5QvSWZ3FXpqmiuBhi9gQWL3bnGW_AkOEAW_mYcLb4gCINOqRNbJqiZUf521zzjisOZlm8Ecm4sl6mkfTwoXU9avY8goyd9iX3Y6fDG1u2ZYz9GM2h6dUzLJXp0yoj-stTc-Q9wnSen_OThzl7zhqbczi0ywxyu6TUQFXyLbKKqt10cro_tatN7DTZw5wau_SBEXS3zDfM_ai379Vj6IU8qIJ7pJkgAykXRiKgoDCYn6c0iY4akw2-s_V10wd6fiU3dRKukeYqWJ1AE1jbKNELOUlqHSIgXgjUd5HNA8ILaWG8_bhjxDJ8KY7VU2joN1YcQr3JdJyUZGW0sv5lS7TqjHS6mBuW8zzhi01NqeGbrQj_SnLYvM3-eydqj1xNko5g2zb6v8jLKS7adPiuVtFsmWM-W0H7QPAZCiVAh8d49q1Yv96j0jQEQhHsGxdVle7IZA==&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Analityk treści (Content Analyst) - język hiszpański [Online...",
      "company": "Majorel",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0CNK_eYI_piGz_o9hgXSGx7T7x29qxg32K7jE7Cx6W9IvzrK4I0F6Q0jhCMwvliNANl9aJhI3Oy0Cl_L9F-2LIMFCpEdFQ5FSxsHDJGS88GXpy7zawOufZsRAwSQlXKqc4czsP0DSpM1FdJY52HIsIJI_AFV9dNxQAVhj6n8kI0TsfkYCGC5dVvdTso8nmMgXehSJcGfsLRE4JG_y3nH6CUn_XHXscQQS0NhfkLREUk77Cnbz1KPZeDpRav2GPc_J7BtoBJZ9rT5viEmJy6itkTk3_21i5PLY_lKNgqTTaQceI3SNklyLtyURVkKYdZUZqGXMhOySG7daYYjFI5rGNGBBeXhiJmlLJYwGoX6NOFChADHc_gj0piMtY17QVQFWb2qoK70NO0ol85JZGRQa3zcZQo7HapXhjPEzyd3aR5D-zgxrHBZ1u7PjDeTkxfl-8Dv0k-Wc47h_LoHFCCJwOqWo6i7ERy2zMg3AZM-qlw4tdIuKS_ASvWecq1ohsIJSP18LdBNQKYjWovi_n5UDC7y4Jv1qd5A5qHUWaoaeGL4E6JEvtU2DiRf8g8tn8AunTVF6a8zUe3q_p96QLvbwp-jZFD9Z8W0_Q=&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Pełnomocnik ds. systemów zarządzania jakością",
      "company": "FOODjobs",
      "urls": "https://pl.indeed.com//rc/clk?jk=9a1658aee4e0b149&fccid=5f6e0f1f9bb64728&vjs=3"
    },
    {
      "name": "Szef Kuchni - renomowany catering dietetyczny",
      "company": "Strategie Personalne",
      "urls": "https://pl.indeed.com//company/Strategie-Personalne/jobs/Szef-Kuchni-5cb4f3497d90ba49?fccid=29ef11a4e93c431f&vjs=3"
    },
    {
      "name": "Koordynator Testów",
      "company": "ProData Consult",
      "urls": "https://pl.indeed.com//rc/clk?jk=8236f470a9027b02&fccid=fa336ade0bd80ccd&vjs=3"
    },
    {
      "name": "Szef Kuchni (Lider zmiany)",
      "company": "Strategie Personalne",
      "urls": "https://pl.indeed.com//rc/clk?jk=18a47788b2739be7&fccid=29ef11a4e93c431f&vjs=3"
    },
    {
      "name": "Inżynier Budowy - elewacje klinkierowe",
      "company": "Stone Group Klinkier",
      "urls": "https://pl.indeed.com//rc/clk?jk=2446c33a55ad38da&fccid=678c79800cc6fc48&vjs=3"
    },
    {
      "name": "Kierownik Jakości - Konstrukcje Metalowe - Automotive - Truc...",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//rc/clk?jk=fca22cd6ecdaaac9&fccid=77087bd1709a8148&vjs=3"
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
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqDUsVUkfH4EkrN84Gz9KZzMWLpWhyY86qBLFyf-lZ5_fhPr0f8HZO_XXiGXp7BNC9cAkHDzsSB9KHk6nTcvhXp0OjBk17CLkjWapyd5cEZ0F-2z9iPQI2px6oVZ9Ahz1wKgm7ljMkZzVsf3xC5h4d6h0oke5fj5duUECKEgjwj9C_6uKIc8fOT80i6ke0rg1IEZbpcSxvVr_jdUCjZ1wR1Sg7mUwUX--jp1F0ULMN09wzIqeJ-vnDvR8IYOele3ZLiP5Y66fYmIpk-hixeNGFarhhAK9tgBXZ-5oJH0z6B8EdcWGPwMMrVCCbuo2-rbkt-blJvNJ9oPg-oQIjAJFpxaPMCobswVY4xbiV0ibtyoU3h6wbgxJ9I7-auaQJxQ1eX_evauwS4WGRNjAijddqcMf3-YeOMxRoAlWMtsFIj_o_ydOWZ_Z8KX13dkBqa7znQqQbLwYFVoGZ1H8PLPRF2mjbRvYq4EmrTvgaWWJqU61JiQbSsV8Sax5Fxg1KtGtjIG5C6empCAVeBcR-6uJdp_kPQUGNVaSp-k6mvbgdLQwIbqJjK32F2iDIwlDsPhLiaAo6KzHkbyKDsEd44rFpwbQdmroIApU1jq7-gwUDcTd7wxTcl-UAXYWL_qNAdFk5YB8JUjebRvxvzt7Zu9Wr_pbjbbnM6NZHdhhPTbFC5XaTHn8LLQpfXYozAqG-nBzRs4ZToIixhYuDcIkO-z9KV-zMh3EMx0d9lk7XzDqepn&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Kierownik Budowy - Hydrotechnika (m/k)",
      "company": "STRABAG",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0CrOs_aCXrtuVRUo5udUwhQgQCCuHMpeM2SQfFxFRQfISk4aqobRnqxqoflj2fBVU4k8NKyCst2OXYNUK7eQA4JdMECUZbcz8cg02s6cFh81LXVKmoQOB8zrzJ8zI5G2zb_lSQnREo7IDnkJU-xXi3AvJBOBHALsq0lmTm2zqhZ0kH-IPmHwlLsgyAkfeN0Y-h8VISh747gWnDy0BhYrD5jedtQKjqHCRcBLSHOel93UEpmhU2YFkO7iHzhs-l6CU0E8ZdJFEBtJLTLuvFuc3pRbmFe32Ub2wJOZEYl2rWcY4xQLnxQZXgfcxCKKra-Xiw-6JiCcQ05Oi-Pg5rMzqKbQ9jaPbRZRjw3koOX5W6M683Wws7ZJi6QVRhp6hnm_ROnxeq91pU3m0q3LSxXgUu9RxxwKdq6mhcjVkyjK7AudLVEwwxmx8kL2m4J3yEzu0tQ3dLvLLq7Jq3Tfoaq40jBNOAhBhZnjNKvIWuuaOby96B_0a413VB-b81rrmLJ3wMIqGIx1s9uZqUH5E-zCkiHeF7OCg1HQlJsg7x5YDKk--g_2Pxs2ZjUiIjt-MCfSbUwj6-zIpagEDba0zGSKDIQjNz38gPysZ2e3VMHxkoYmw==&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Specjalista ds. Procesów Magazynowych",
      "company": "FIEGE Logistik Stiftung & Co. KG",
      "urls": "https://pl.indeed.com//rc/clk?jk=ad5637f900265eef&fccid=c21abee0de715f4a&vjs=3"
    },
    {
      "name": "Strategic Buyer - Chemicals",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com//rc/clk?jk=ea14d83e547b0a07&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Transformation Coordinator - PMO",
      "company": "PepsiCo",
      "urls": "https://pl.indeed.com//rc/clk?jk=4af96b7c26ffbf3f&fccid=2973259ddc967948&vjs=3"
    },
    {
      "name": "Project Manager",
      "company": "Grape Up",
      "urls": "https://pl.indeed.com//rc/clk?jk=9dd3e9dfc8a55e7d&fccid=cb56c19f081a65a1&vjs=3"
    },
    {
      "name": "Scrum Master",
      "company": "TechRecruiters",
      "urls": "https://pl.indeed.com//company/TechRecruiters/jobs/Scrum-Master-4266128d04b816ed?fccid=ed77772f31d2b9b9&vjs=3"
    },
    {
      "name": "Cyber Insider Threat Analyst",
      "company": "UBS",
      "urls": "https://pl.indeed.com//rc/clk?jk=75bf34e864036e30&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Global Customer Service Manager",
      "company": "Accenture",
      "urls": "https://pl.indeed.com//rc/clk?jk=17fc9d817015d098&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Strategic Buyer - Electronics",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com//rc/clk?jk=7b92787b3738d086&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Strategic Buyer - Electro Mechanics",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com//rc/clk?jk=8a4ffcfde3f127e6&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Delivery Manager",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=7665c948967f4ece&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Procurement Business Process Expert",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com//rc/clk?jk=53eb823859017842&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "Finance Manager",
      "company": "Zurich Insurance Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=fe7b3569335cf178&fccid=40f6e1ba1aac8472&vjs=3"
    },
    {
      "name": "Finance Manager",
      "company": "Zurich",
      "urls": "https://pl.indeed.com//rc/clk?jk=4ef3ca1f88812291&fccid=34938366d45106af&vjs=3"
    },
    {
      "name": "Scrum Master",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=69e10406280091df&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Technology Risk Management Regional Lead",
      "company": "UBS",
      "urls": "https://pl.indeed.com//rc/clk?jk=85a82c4bd4b12308&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "IT Program Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=ef3c8c56cc9c5b26&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Lean Management Coordinator",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=8e1c711f30e4c0b7&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "L1 Local Product Owner",
      "company": "NOKIA",
      "urls": "https://pl.indeed.com//rc/clk?jk=6785edf2e1227ddc&fccid=3444e7c94299ba32&vjs=3"
    },
    {
      "name": "Senior Procurement Analyst",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com//rc/clk?jk=0c5268c3deb19212&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "Business Analyst",
      "company": "Shell",
      "urls": "https://pl.indeed.com//rc/clk?jk=5a29a012e62e2d94&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Quality and Continuous Improvement Senior Specialist",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=e3cb6013f28c01a5&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Lean Finance Champion",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=cd300873b4bc839d&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Lean Six Sigma Black Belt",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=87294ff6effd6333&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "iOS Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=91880854e40498a9&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=223e749b80e8beb0&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "GLOBAL COMPLIANCE & TRADE COMPLIANCE MONITORING & AUDIT LEAD...",
      "company": "Cytiva",
      "urls": "https://pl.indeed.com//rc/clk?jk=954c65303ee4cc83&fccid=c46411dafcae5d08&vjs=3"
    },
    {
      "name": "GL Accountant with English",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=84707b02c58483e7&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Project Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=99054ffcffc4070d&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Shell",
      "urls": "https://pl.indeed.com//rc/clk?jk=870ff626a78c8081&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "SUPPLY CHAIN IMPROVEMENT MANAGER",
      "company": "Wyser",
      "urls": "https://pl.indeed.com//rc/clk?jk=b86e234b0b7effa6&fccid=4a8713d2b6afc645&vjs=3"
    },
    {
      "name": "Business Analyst",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfyZbLKOePed3PsGKxoOres_QDVabVAyXJ2yUPi9I8bzRp-k6hgmK3q9kCbUfEKXyis_vPJJ1TPB1qlxzSPudLBjxI5lRb10ZX5VYLygsfRenI2hQC069K2pKCN0oObG28WzRg3tFLlOk7RX9A8TCdDe51S-VisgPxkCE7uY45kyfdpdl5_x0P9ICLjPXaJCOwFqA41vHo1X_vIDNsvJF2taTMRIWZuR6Pxo4onH9efR5X3hTzs05tciigwVNw_gq3xh3Mqg3x76YsNe56MYmpAlSUMgTJl2950Y6HOZkCf30h58qPi2706RO9myPfrbfnswmbYrIRmCVoh-4sT2kAGdloA6xRODTTsAvYEL2S3gfD4H4FRUXgv937iOs5IbCpjP1zQs2thGuwZYFDjKpCwvROUBh7Tbr7wjl6JQOZK5rpPLwdOvg7BNwjr-2WUCg7hvTeUoNu5JlZS_gAM-bR0oIpQEvGyjKwTffmvN4B3sWQW9izROjr0Aj0sa5_I_FonC0Grlh312WZ975Su6U7cJM2UAUkgRY11eMmK4J6EyQuKq2HMO-HP2EutIpLYEeeeyUz231IVZuwLDCQ9lY9IB2U9b6eLXYHo6YHGH-F5HZ4ANsqkq_7XaOzWDTOiCDpyG1kW-uSbZw==&p=11&fvj=0&vjs=3"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcth7foDEj52dGZgeuEPu9enIlBGomDuRPbABSYtT_wnUF6Zt_nAlKZGD_7qKog4KHU_dCR22fcdDAiplELewuitrGHe_ehyAwi8CKd30m7nMdq6AgUzSqYyZ-JbuCIgCuRP0xDwGyry-Fx7N0skSi96jXk-ArtcQAixRJwv9ZVpF9_85WAZCUjprQYFBYpj-KVXP5T3l2fWvsnf6dE6wj7GA6oaO6VS0jYwxO5GjWeM5VQbNkf4FyHDpfkEScSwJccJl-yqmrEEq1m-HBOTKLI4cwmkVZSjp3eYQSbGWDydd99rls6NJxSAYCBAdbh0X0QqfBXYhqdRvimkHLSHkAHjbFXTkROfIWphx1GrTU3eoLXrzjoNNLjQG6B6D8FjikOx8872EN6TJFAz3WnRFIN5mkMMDD0TmwTHaQKNhDBZps7jgBrOrYfZewI_Qn04ef0NHZ9dqWySUkQ-Ixzaeh5_FaTqnnMfCFiJa5VIeeSDOXPvd0He-AlHyW7smdKGiYTm-scV1JS0vf_oI_BSJf4ScyZ89iHENMCNEmlHeHcVy1fLd73eVUCLScBRck93Mj6BCMHF7Ue5aJqRCbaTyMlAlpr5yTtE907Gbw8SrKyJJ13aJrW5ouFoGtOhyAXAfoMWJGHAjJILClzvQixPTbuY42WuE4Acf8=&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Mobile Application Development",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com//rc/clk?jk=795a6f0c9f4ce820&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "Kierownik Budowy - Hydrotechnika (m / k)",
      "company": "STRABAG Sp. z o.o. / Dyrekcja Budownictwa Ogólnego...",
      "urls": "https://pl.indeed.com//rc/clk?jk=a469b27a8e6b9cb1&fccid=8fdcbe58c8fef8e5&vjs=3"
    },
    {
      "name": "IT Project Leader/Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=598ff89cac1e7ffe&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Java Team Lead",
      "company": "Verita HR Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=2d6026d11d864db3&fccid=e265b982603f34bc&vjs=3"
    },
    {
      "name": "Senior Product Manager",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com//rc/clk?jk=b1a26f8b9145c41f&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "Virtual Desktop Product Owner",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=a5727b7d0abc382c&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Fullstack Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=5f5b61ba67911394&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Order to Cash (AR) Manager",
      "company": "Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=b5de0e6d32b0bf1f&fccid=eb3baf007981cd9e&vjs=3"
    },
    {
      "name": "Mobile Product Owner",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=3849912cc284c37d&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Senior Commodity Segement Leader - Electronics",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com//rc/clk?jk=e5fc283856da5b31&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Senior Finance Analyst - Manufacturing",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=d3a4a5ecfc758ccd&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Sr Risk Analyst (Information Security & Compliance)",
      "company": "GE Healthcare",
      "urls": "https://pl.indeed.com//rc/clk?jk=944c7b6997c3b1a5&fccid=65b5f2aba4dbd31f&vjs=3"
    },
    {
      "name": "Senior iOS Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=f2c79a96074148e7&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Advanced Safety Domain Controllers Systems Engineering Inter...",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=1cf8358e8f25ba3e&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Scrum Master IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=da10fa8c9a262518&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Scrum Master (Google Cloud)",
      "company": "ITDS Business Consultants",
      "urls": "https://pl.indeed.com//rc/clk?jk=dd89ff2701c9413b&fccid=21699bef93fe8799&vjs=3"
    },
    {
      "name": "Senior Android Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=9272dfdc35a5629e&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "CI/CD Solution Architect",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=75ef623508a7e56b&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "How to go-live with your product in less than 3 months?",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com//rc/clk?jk=d46b35a9e6f85c13&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "Senior AWS Solution Architect",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=c1105d8598d01bbb&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Senior Java Application Engineer",
      "company": "UBS",
      "urls": "https://pl.indeed.com//rc/clk?jk=f11bb8dee68dd141&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Procurement Process Manager with German(m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//rc/clk?jk=a44b398c47317f40&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Backend Developer (Ruby on Rails or Node.js)",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=a5a2d4703d45a641&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Process Lead Global IM&S Source-to-Pay",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=160bd361a453c522&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Senior Mobile Engineer",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=f1788aaf725a970c&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Credit Assessment Analyst - German Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com//rc/clk?jk=23e05716598e9cd1&fccid=868f0a680c88fba8&vjs=3"
    }
  ],
  "22": [
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
      "name": "Produkt Manager w segmencie systemów rurowych",
      "company": "RADPOL S.A.",
      "urls": "https://www.praca.pl/produkt-manager-w-segmencie-systemow-rurowych_3389062.html#2c3b7be57c6c0efeda4047e48a3a806d"
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
      "name": "Operator / Operatorka Linii Produkcyjnej",
      "company": "Valeo",
      "urls": "https://www.praca.pl/operator-operatorka-linii-produkcyjnej_3343454.html#2c3b7be57c6c0efeda4047e48a3a806d"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=d6477185d20a40e6&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier budowy (infrastruktura kolejowa)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=8ff37e86b231019e&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier budowy",
      "company": "General Automatic",
      "urls": "https://pl.indeed.com//rc/clk?jk=d4934c90208a0436&fccid=e71c30062ae7e5a9&vjs=3"
    },
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Automatyk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=0f9e18031e6d937f&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Elektryk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=2aba904252e64b02&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier budowy – Kierownik robót w specjalności konstrukcyj...",
      "company": "MKBUD SP. Z O.O.",
      "urls": "https://pl.indeed.com//rc/clk?jk=860f2474b6a58a9c&fccid=b47f5492509d49c9&vjs=3"
    },
    {
      "name": "Kierownik Robót Drogowych lub Torowych/Inżynier Budowy",
      "company": "KZN RAIL Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=fe99701bd1cf7c37&fccid=be21bffde79d2ca7&vjs=3"
    },
    {
      "name": "Inżynier Elektronik – Konstruktor",
      "company": "2Bora",
      "urls": "https://pl.indeed.com//rc/clk?jk=1412ed0791ddda41&fccid=81eeaa9aaf867a65&vjs=3"
    },
    {
      "name": "Inżynier budowy ds. elektrycznych (kolejowa sieć trakcyjna)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=547e48eef077b940&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "INŻYNIER DS. WSPARCIA TECHNICZNEGO",
      "company": "Awex",
      "urls": "https://pl.indeed.com//rc/clk?jk=c53c91b7d2204066&fccid=27a13086689515e8&vjs=3"
    },
    {
      "name": "Asystent specjalisty Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=dc8e82ea96d316d6&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Kierownik robót / inżynier budowy ds. elektroenergetycznych",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=a107187dbce3bb50&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Delivery Manager",
      "company": "j-labs",
      "urls": "https://pl.indeed.com//rc/clk?jk=b2aa9eeada8b4637&fccid=a4750d1f1c80cb70&vjs=3"
    },
    {
      "name": "Inżynier Automatyk - rekrutacja prowadzona online",
      "company": "Fitech",
      "urls": "https://pl.indeed.com//rc/clk?jk=d8931e2ecdfc3385&fccid=52d48f1974e43ed4&vjs=3"
    },
    {
      "name": "Inżynier Systemów Elektronicznych",
      "company": "Knorr-Bremse",
      "urls": "https://pl.indeed.com//rc/clk?jk=7eb2acdb5809182c&fccid=a23b36e1d6d2d53f&vjs=3"
    },
    {
      "name": "Specjalista Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=8447c63c8105e086&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "F5 Engineer - Global F5 Centric Footprint",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com//rc/clk?jk=d9bb1a6473ca6702&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Inżynier ds kalkulacji / przygotowania produkcji (m / k",
      "company": "STRABAG Infrastruktura Południe Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=e67453e66a025c10&fccid=91ff00d5203b00da&vjs=3"
    },
    {
      "name": "Inżynier sprzedaży systemów bezpieczeństwa przemysłowego",
      "company": "GRUPA WOLFF",
      "urls": "https://pl.indeed.com//rc/clk?jk=d85a4988a3bbd086&fccid=3d99fb61e9e62f24&vjs=3"
    },
    {
      "name": "System Engineer / Support Analyst",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=8588890611fa51b8&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Inżynier Produktu - transformatory i przekaźniki",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//rc/clk?jk=5c4eba35016d76ab&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "KEY ACCOUNT MANAGER",
      "company": "IT FORCE",
      "urls": "https://pl.indeed.com//rc/clk?jk=c21b723d3430859d&fccid=ce0f058ecc872287&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Ochrony Środowiska...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=315cad0381ee06a8&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Praca w dziale IT!",
      "company": "TalentU",
      "urls": "https://pl.indeed.com//rc/clk?jk=fabbb38bf2e16007&fccid=ca5f1e138a78fd90&vjs=3"
    },
    {
      "name": "Security Engineer Zscaler",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com//rc/clk?jk=3add5ef8110732b9&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Software Engineer",
      "company": "Moyyn",
      "urls": "https://pl.indeed.com//company/Moyyn-Group/jobs/Software-Engineer-2b8f8c1ad63eb565?fccid=6cb95f95e73cdc07&vjs=3"
    },
    {
      "name": "Kierownik/Inżynier ds. teletechnicznych i/lub elektrycznych",
      "company": "P.U.T INTERCOR",
      "urls": "https://pl.indeed.com//rc/clk?jk=40d97171e6c3f4af&fccid=7e97b2d9f0af32d4&vjs=3"
    },
    {
      "name": "Inżynier Procesu Automotive Greenfield",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=83af8b65d67f08d7&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Full Stack Engineer - IoT w Comarch",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0CrOs_aCXrtuVRUo5udUwhQgQCCuHMpeM2SQfFxFRQfISk4aqobRnqxqoflj2fBVU76SvZHuRfdYC7ydvdYa0Nk_N34TkVJpCrWJCcLZWGIlJkPPiVy8jbbzGHapl-uO2WaLmQRA3S0fh-VEZTfP1eVw1BYWzNSkHc2O7bX-Q3u2M4J6L-Dh2tZhqUZj04OXmZOI2pk_kDFiOjhPj2Dcmns2TMzWKWRn9vODMraN0fMP58n5IF00J3lVRqEY_dqJM6PH52l6Z-RNTrK_RWfGigaByOpBYPZAU-0M7mFoPOKlzjzkCBNcDPc1KkxNKqeBG3UikTUbwGn3sXaoQx-ECPMZ8YS1CPJnXiBs1TeNhuhtGFdFJfoMYx85uwCrnsuXbntb6IPav5y3tsqdnkrLaVngDcqzJMo5qPyqZlHelktj030LEN_9wpNga3yUvHcUZtH7ikV3ouigWZZ679scrD92jROFy1hRU6Lo7oh00i-6c34lJnyXrAb09lSpUnbARxxBRjP3084AmCoo5mFFc2vc-AHQJAPMVpWmeBVmZV2XG6e3GNdII7i5yLhzfuT1FagPHf_arI2tA_EDGNOPnq9w2pIf_wIloA3nEqdFBGHf55yW8ZU5wNV&p=10&fvj=0&vjs=3"
    },
    {
      "name": "Inżynier ds. Testów",
      "company": "Grupa Unity",
      "urls": "https://pl.indeed.com//rc/clk?jk=1f2ed1cc4252a137&fccid=9a34138d512ebeaf&vjs=3"
    },
    {
      "name": "Inżynier Jakości - oferta z pakietem relokacyjnym",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c335b71aa6443013&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Account manager/inżynier sprzedaży",
      "company": "AMC TECH Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=3d5b339baae31c7e&fccid=9ea9ac0db41cd67b&vjs=3"
    },
    {
      "name": "Kierownik robót drogowych i torowych",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=373d3be4d9cd22f2&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Senior Engineer - Zscaler",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com//rc/clk?jk=18c74018c01b8f91&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Inżynier Budowy - elewacje klinkierowe",
      "company": "Stone Group Klinkier",
      "urls": "https://pl.indeed.com//rc/clk?jk=2446c33a55ad38da&fccid=678c79800cc6fc48&vjs=3"
    },
    {
      "name": "Lider Działu Inżynierii Procesu",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c94802d34ca011fe&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Senior Engineer - Firewall",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com//rc/clk?jk=11ff1eb2acbd80df&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "QA Engineer",
      "company": "S-Labs",
      "urls": "https://pl.indeed.com//rc/clk?jk=3300678035fa06a4&fccid=ce4f4701fb5e9335&vjs=3"
    },
    {
      "name": "Full Stack Engineer - IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=c4dde19424a8a8f0&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Inżynier Procesu / Produkcji - oferta z pakietem relokacyjny...",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=525bfd3e48fc6f63&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Network & Security IT Infrastructure Engineers",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com//rc/clk?jk=7a893ebad30c92c9&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "SysOps Engineer",
      "company": "Transmission Dynamics Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com//company/Transmission-Dynamics-Poland-Sp.-z-o.o./jobs/Sysops-Engineer-a0430a2f02f16537?fccid=71edca8a792a88bd&vjs=3"
    },
    {
      "name": "Projektant Sieci Wodno-Kanalizacyjnych",
      "company": "K&K Selekt",
      "urls": "https://pl.indeed.com//rc/clk?jk=80c55476fee329df&fccid=afe1f520a63ae3d3&vjs=3"
    },
    {
      "name": "DevOps - Site Reliability Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=79f8370551cad57e&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "KIEROWNIK ROBÓT SANITARNYCH / HVAC",
      "company": "ACE Group Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=c3d5f59730eeba99&fccid=9c25831738ee5606&vjs=3"
    },
    {
      "name": "SysOps Engineer",
      "company": "Transmissmion Dynamics Poland sp. z o. o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=bbcb7f974af392f7&fccid=7a35d02c61858789&vjs=3"
    },
    {
      "name": "Senior Engineer – F5",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com//rc/clk?jk=a5a0ee9c0889b08b&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Senior ETL Developer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=6037b9c19177ed07&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Pracownik pompowni na plantacji truskawek",
      "company": "Polski Instytut Truskawki",
      "urls": "https://pl.indeed.com//rc/clk?jk=9fcf93e7aa0b97c5&fccid=960c74acaf07f159&vjs=3"
    },
    {
      "name": "QA Engineer",
      "company": "KUBO Sp. z o. o. Spółka komandytowa",
      "urls": "https://pl.indeed.com//rc/clk?jk=31e8d7ac4e0e6fa5&fccid=3192074ede128056&vjs=3"
    },
    {
      "name": "DevOps Engineer",
      "company": "Accenture",
      "urls": "https://pl.indeed.com//rc/clk?jk=b948b73b9e7969cd&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Lean Management Coordinator",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=8e1c711f30e4c0b7&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Software Automation Engineer",
      "company": "SKELIA",
      "urls": "https://pl.indeed.com//rc/clk?jk=b331cc71439dbe8b&fccid=4b7f4b3718395175&vjs=3"
    },
    {
      "name": "Senior Software Testing Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=8f95045e62483bbd&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Senior Big Data Developer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=6c053339660c79e7&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Senior Network Engineer for Remote Access Services",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com//rc/clk?jk=22e9fa8b6f4d3372&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Software Engineer in Test with manual QA background",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=48701fc98a5fb56b&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Senior DevOps Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=3156f24e20870fbe&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Consultant Engineer (m/f/d)",
      "company": "FM Insurance Europe",
      "urls": "https://pl.indeed.com//rc/clk?jk=73ed1a754671f517&fccid=61e8892c332e49a1&vjs=3"
    },
    {
      "name": "Senior Software Engineer in Test",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=3eac3c710811f004&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Test Automation Engineer",
      "company": "VSoft",
      "urls": "https://pl.indeed.com//rc/clk?jk=b4827e645cd8df91&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Lead .NET Engineer",
      "company": "VSoft",
      "urls": "https://pl.indeed.com//rc/clk?jk=8166e48816d8c6b6&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Lead / Senior Test Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=eb6fc96496fef00f&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Software Engineer in Test | Kraków",
      "company": "Vsoft",
      "urls": "https://pl.indeed.com//rc/clk?jk=ee63930a2a2139bc&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Lead/Senior FullStack Developer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=58c8a6b0776b300a&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Java Developer",
      "company": "TalentU",
      "urls": "https://pl.indeed.com//rc/clk?jk=2c1ab5b1bbaf1101&fccid=ca5f1e138a78fd90&vjs=3"
    },
    {
      "name": "Lead Systems Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=26e5af3a72eb7fb8&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Senior Java/AWS Developer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=928ee7981e6e1e98&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Java Full Stack Developer with Angular/React",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=cd25e2d51a0a578f&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead / Senior Software Engineer in Test",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=4434f382028c2dda&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Software Engineer in Test",
      "company": "TalentU",
      "urls": "https://pl.indeed.com//rc/clk?jk=e3c6a80fe694419a&fccid=ca5f1e138a78fd90&vjs=3"
    },
    {
      "name": "Java Full Stack Lead Software Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=d4af96d0b85ba8d8&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "QA Automation Engineer with travel/airline experience/Kraków",
      "company": "NewPerspective",
      "urls": "https://pl.indeed.com//rc/clk?jk=1ef8f4f17587f141&fccid=659d40811d5fc07a&vjs=3"
    },
    {
      "name": "Linux Engineer / DevOps",
      "company": "EuroLinux",
      "urls": "https://pl.indeed.com//rc/clk?jk=8b01b29c719cc453&fccid=d91fbdc82addbd64&vjs=3"
    },
    {
      "name": "Lead/Senior Test Automation Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=74132a55a97b887d&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead/Senior Java Software Developer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=8aad2d6a5441beef&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead JavaScript Developer with Angular",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=a7561ed7a2f41388&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Senior Full Stack Software Engineer (Java and/or Angular)",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=21cb3a753bdbd2cf&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Expired: DevOps Engineer",
      "company": "Moorgate",
      "urls": "https://pl.indeed.com//rc/clk?jk=a102f09f32086a58&fccid=f9e2ae1d4db307bf&vjs=3"
    },
    {
      "name": "QA Automation Engineer / Kraków (aktualnie zdalnie)",
      "company": "NewPerspective",
      "urls": "https://pl.indeed.com//rc/clk?jk=209f361bf869ac31&fccid=659d40811d5fc07a&vjs=3"
    },
    {
      "name": "Software Test Automation Engineer – C#",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=ac5a57dd0d23435f&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Lead Cloud DevOps & Infrastructure Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=25c4208c381e90f1&fccid=532afac41b2663f7&vjs=3"
    }
  ],
  "25": [
    {
      "name": "Inżynier wsparcia technicznego (f/m/d)",
      "company": "Zuken",
      "urls": "https://pl.indeed.com//rc/clk?jk=f4a6b201c652db65&fccid=8b93b2b181fbb926&vjs=3"
    },
    {
      "name": "Inżynier Produktu - transformatory i przekaźniki",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//rc/clk?jk=5c4eba35016d76ab&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Inżynier Automatyk PLC",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=db5567b482026e7b&fccid=8768f8af165a1d65&vjs=3"
    },
    {
      "name": "Systems Engineer",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=765c477ed5c5aed6&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Inżynier Systemowy",
      "company": "WebCon",
      "urls": "https://pl.indeed.com//rc/clk?jk=8b18c4dea14c573b&fccid=9a428be99da93220&vjs=3"
    },
    {
      "name": "Specialized Software Engineer",
      "company": "ESET",
      "urls": "https://pl.indeed.com//rc/clk?jk=1322adda79909f76&fccid=8e1474db6974999b&vjs=3"
    },
    {
      "name": "Regular/Senior Front-end Engineer",
      "company": "Link Group Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=88d0e4742346bebc&fccid=ec288624c0917878&vjs=3"
    },
    {
      "name": "Product Owner",
      "company": "MyNetwork Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=d10275cba2e72df5&fccid=b05ca52483c8c34f&vjs=3"
    },
    {
      "name": "C++ Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=e00def048e72773c&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Product Owner",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com//rc/clk?jk=b4746daed12ac439&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Inżynier ds. integracji i testowania sieci 4G/5G - KRAKÓW",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=3dc0d8f7a439242b&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Active Safety Systems Engineer",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Regular/Senior Software Engineer, Java",
      "company": "Link Group Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=f115686214e8e70d&fccid=ec288624c0917878&vjs=3"
    },
    {
      "name": "Systems Engineer - Advanced Safety",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=4ee81201a3beef10&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Agile Test Engineer II (Enterprise team)",
      "company": "ESET",
      "urls": "https://pl.indeed.com//rc/clk?jk=7e770c4f4da27f39&fccid=8e1474db6974999b&vjs=3"
    },
    {
      "name": "DevOps Engineer",
      "company": "Accenture",
      "urls": "https://pl.indeed.com//rc/clk?jk=b948b73b9e7969cd&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": ".Net Software Engineer (Audiovideo)",
      "company": "Ailleron SA",
      "urls": "https://pl.indeed.com//company/Ailleron/jobs/Net-Software-Engineer-cc8a8c81e61536d7?fccid=e008354530941776&vjs=3"
    },
    {
      "name": "Programista C++",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=68be23111168efe6&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Oracle Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=939751af5d5af958&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "26": [],
  "27": [
    {
      "name": "PRAKTYKANT/STAŻYSTA DS. OCHRONY ŚRODOWISKA",
      "company": "Future Green Innovations",
      "urls": "https://pl.indeed.com//rc/clk?jk=58177fbf054c4edd&fccid=5981b74173f9ac17&vjs=3"
    },
    {
      "name": "stanowisko Asystenta/ki projektanta melioracyjnego/hydrotech...",
      "company": "WTU",
      "urls": "https://pl.indeed.com//rc/clk?jk=bbec6ae89ebbe480&fccid=2ae63731d99baae6&vjs=3"
    },
    {
      "name": "Staż lub praktyka zdalna, 14 kierunków i więcej do wyboru",
      "company": "Krajowy Instytut Rozwoju Gospodarki",
      "urls": "https://pl.indeed.com//rc/clk?jk=1c5dd6a055dcfbbb&fccid=5429572581cdb0aa&vjs=3"
    },
    {
      "name": "staż/praktykę studencką",
      "company": "WTU",
      "urls": "https://pl.indeed.com//rc/clk?jk=a8737bed0342ffc9&fccid=2ae63731d99baae6&vjs=3"
    },
    {
      "name": "Asystent projektanta instalacji sanitarnych",
      "company": "PRACOWNIA PROJEKTOWA",
      "urls": "https://pl.indeed.com//rc/clk?jk=7f0d0faa7b64ae80&fccid=1323085d7566e336&vjs=3"
    },
    {
      "name": "ASYSTENT PROJEKTANTA / PROJEKTANT",
      "company": "SPRINGAP",
      "urls": "https://pl.indeed.com//rc/clk?jk=0b65fe4820457332&fccid=5e7110847abc8027&vjs=3"
    },
    {
      "name": "Inżynier Budowy - Mistrz budowy",
      "company": "Przedsiębiorstwo Robót Inżynieryjnych INKOP",
      "urls": "https://pl.indeed.com//rc/clk?jk=1d3dd98638ee466d&fccid=a695411d8904b8ca&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Infrastruktury w Kr...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=5fb98467260afae4&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "SPECJALISTA DS. PROJEKTÓW ŚRODOWISKOWYCH",
      "company": "Future Green Innovations",
      "urls": "https://pl.indeed.com//rc/clk?jk=e6795431a27d1b55&fccid=5981b74173f9ac17&vjs=3"
    },
    {
      "name": "Asystent Projektanta (branża sanitarna)",
      "company": "P3 Projekt Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=2da7111ea96bc1c9&fccid=60b9b6db9314e9bf&vjs=3"
    },
    {
      "name": "Python Developer",
      "company": "S-Labs",
      "urls": "https://pl.indeed.com//rc/clk?jk=835901db346dc65f&fccid=ce4f4701fb5e9335&vjs=3"
    },
    {
      "name": "Asystent/Asystentka Projektanta Instalacji Sanitarnych Pilne",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com//rc/clk?jk=66e9e20ce990674d&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Specjalista ds. układów kogeneracyjnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=a5f702f39c8819b4&fccid=1cd754675a5b8353&vjs=3"
    },
    {
      "name": "stanowisko BIM Modeler",
      "company": "WTU",
      "urls": "https://pl.indeed.com//rc/clk?jk=2acf29ac609eb1b3&fccid=2ae63731d99baae6&vjs=3"
    },
    {
      "name": "Doradca techniczno-handlowy",
      "company": "Kliweko",
      "urls": "https://pl.indeed.com//rc/clk?jk=6a0b41e389e2d73b&fccid=9a2758de8b1030b8&vjs=3"
    },
    {
      "name": "Technical Product Manager",
      "company": "HRO Digital dla klienta z branży bankowej",
      "urls": "https://pl.indeed.com//rc/clk?jk=f6329ce8b231dcf0&fccid=d1b438001cc64a55&vjs=3"
    },
    {
      "name": "Doradca Techniczno-Handlowy (HVAC)",
      "company": "Business Bridge Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=b48343c6f3be6089&fccid=569f2bbcd274ba32&vjs=3"
    },
    {
      "name": "Doradca Techniczno-Handlowy (HVAC)",
      "company": "Business Bridge Group Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=3a90ac5240dc195f&fccid=49d7637e841a56e6&vjs=3"
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
      "name": "Specjalista ds. kosztorysowania (sieci sanitarne)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-kosztorysowania-sieci-sanitarne_3417220.html#a3352288f100c079b8a51937b244d276"
    }
  ],
  "31": [],
  "32": [
    {
      "name": "Kierownik Budowy / Kierownik Kontraktu na budowie Oczyszczalni Ścieków",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-kierownik-kontraktu-na-budowie-oczyszczalni-sciekow_3376616.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
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
      "name": "Kierownik robót elektrycznych ",
      "company": "TRAKCJA PRKiI S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-elektrycznych_3372304.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#c28a76f90fec6aedd7dee160bde9e0cc"
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
      "name": "Kierownik robót elektrycznych (infrastruktura miejska)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-elektrycznych-infrastruktura-miejska_3385134.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik robót ds. elektroenergetycznych (kolejowa sieć trakcyjna)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-ds-elektroenergetycznych-kolejowa-siec-trakcyjna_3417244.html#c28a76f90fec6aedd7dee160bde9e0cc"
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
      "name": "Cost Specialist / Inżynier ds. Przygotowania Inwestycji",
      "company": "EPCM Executive Search",
      "urls": "https://www.praca.pl/cost-specialist-inzynier-ds-przygotowania-inwestycji_3331604.html#c28a76f90fec6aedd7dee160bde9e0cc"
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
      "name": "Kierownik budowy (branża kolejowa)",
      "company": "TRAKCJA PRKiI S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-branza-kolejowa_3366506.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik budowy",
      "company": "Przedsiębiorstwo Remontowo-Budowlane AGAD Sp z.o.o",
      "urls": "https://www.praca.pl/kierownik-budowy_3366550.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik robót torowych (branża kolejowa)",
      "company": "TRAKCJA PRKiI S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-torowych-branza-kolejowa_3366518.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Majster / Mistrz robót mostowych",
      "company": "Nowak-Mosty Sp. z o.o.",
      "urls": "https://www.praca.pl/majster-mistrz-robot-mostowych_3378464.html#c28a76f90fec6aedd7dee160bde9e0cc"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=dedb70017ec63eaa&fccid=b0b10848ce8f4228&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=35e6066b29f2f67a&fccid=c7c05cae7fee6d42&vjs=3"
    }
  ],
  "45": [
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
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
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#649452e956a828e4b810c6b5b30c0095"
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
      "name": "Młodszy Koordynator Projektu [rekrutacja online]",
      "company": "Eneria Sp. z o.o.",
      "urls": "https://www.praca.pl/mlodszy-koordynator-projektu-rekrutacja-online_3364464.html#649452e956a828e4b810c6b5b30c0095"
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
      "name": "Linux Platform Engineer",
      "company": "Power Media",
      "urls": "https://www.praca.pl/linux-platform-engineer_3386258.html#5762b554a8fb4df0655169e6f92640bb"
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
      "name": "Płatne praktyki dla studentów na kierunku elektronika, elektrotechnika itp.",
      "company": "Budimex SA",
      "urls": "https://www.praca.pl/platne-praktyki-dla-studentow-na-kierunku-elektronika,elektrotechnika-itp_3391812.html#5762b554a8fb4df0655169e6f92640bb"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=35e6066b29f2f67a&fccid=c7c05cae7fee6d42&vjs=3"
    }
  ],
  "55": [
    {
      "name": "Mistrz Produkcji",
      "company": "Strategie Personalne",
      "urls": "https://pl.indeed.com//rc/clk?jk=b74179e3165d6f16&fccid=29ef11a4e93c431f&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=0bcbb25d41fdae14&fccid=1cd25ec87a06c80b&vjs=3"
    },
    {
      "name": "Referent ds. normatywów technicznych",
      "company": "Kolejowe Zakłady Nawierzchniowe",
      "urls": "https://pl.indeed.com//rc/clk?jk=319d6227c6e8362f&fccid=640acb9e5c3b5646&vjs=3"
    }
  ],
  "58": [
    {
      "name": "Asystent Projektanta Technologa",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com//rc/clk?jk=4a5f55654c2c7d6d&fccid=5c065c1c92843790&vjs=3"
    },
    {
      "name": "Projektant - Technolog",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com//rc/clk?jk=d28797d8ccec234f&fccid=5c065c1c92843790&vjs=3"
    },
    {
      "name": "Staż w Zespole R&D, Industrial Designu, Logistyki, IT, Finan...",
      "company": "Green Cell",
      "urls": "https://pl.indeed.com//rc/clk?jk=a8bea13316b4b94e&fccid=7520988c97ff0996&vjs=3"
    },
    {
      "name": "Płatny staż w Zespole R&D, Industrial Design, Prawnym, Finan...",
      "company": "Świat Baterii",
      "urls": "https://pl.indeed.com//rc/clk?jk=2e1540d8c32bb5c8&fccid=88fb836afb9cbe07&vjs=3"
    },
    {
      "name": "Młodszy konsultant wsparcia technicznego",
      "company": "enova365",
      "urls": "https://pl.indeed.com//rc/clk?jk=7f504c9f85e6734b&fccid=84584f1aa6973ca8&vjs=3"
    },
    {
      "name": "Analityk Systemów Informatycznych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=1cf477ef5681870a&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Młodszy programista Java/Scala w Telco BSS",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=d7949852202824e4&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Konsultant ds. wdrożeń (moduł Kadry Płace i HR)",
      "company": "enova365",
      "urls": "https://pl.indeed.com//rc/clk?jk=617f2b3b339d0c72&fccid=84584f1aa6973ca8&vjs=3"
    },
    {
      "name": "Programista backend",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=566ca7dd3181aab6&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Scala developer - IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=2e54e0eb0e7c6ea2&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Operator obrabiarek CNC",
      "company": "Bamet",
      "urls": "https://pl.indeed.com//rc/clk?jk=0cd40272cb997607&fccid=55f842c9b66dbe5b&vjs=3"
    },
    {
      "name": "Programista backend (bankowość)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=713c0aa3b7241615&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Full Stack Engineer - IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=c4dde19424a8a8f0&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Starszy konsultant projektu księgowość",
      "company": "enova365",
      "urls": "https://pl.indeed.com//rc/clk?jk=43a847df99809592&fccid=84584f1aa6973ca8&vjs=3"
    },
    {
      "name": "Operator szlifierki CNC",
      "company": "Bamet",
      "urls": "https://pl.indeed.com//rc/clk?jk=687e1ecd956daac9&fccid=55f842c9b66dbe5b&vjs=3"
    },
    {
      "name": "Kierownik projektu IT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=fc4d070c679ac3ee&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Product Owner",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com//rc/clk?jk=b4746daed12ac439&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Technolog Procesu",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=cad1d7c6f30b2502&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Senior .Net",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com//rc/clk?jk=d4077fa00ea254a3&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Software Engineer in Test | Kraków",
      "company": "Vsoft",
      "urls": "https://pl.indeed.com//rc/clk?jk=ee63930a2a2139bc&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Full Stack Engineer - IoT w Comarch",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0CrOs_aCXrtuVRUo5udUwhQgQCCuHMpeM2SQfFxFRQfISk4aqobRnqxqoflj2fBVU76SvZHuRfdYC7ydvdYa0Nk_N34TkVJpCrWJCcLZWGIlJkPPiVy8jbbzGHapl-uO2WaLmQRA3S0fh-VEZTfP1eVw1BYWzNSkHfTmomuJLYkvLaQqtKGbuQWg_i2CwZnfR3uhny1bv6SbX3AgagnL8aLP3ETqVZun9j2PPcX_O0_UhPlVNxgIQCaT38H2tAMMNuxA7fB7_c2gE_mzqd4WnO1AxIn4khj9e0Syqc8SikosWEX2-1gpm7aqPuFaMnhSJms9vXeu5HWbVgatTGU2kspiV4Qvz7rDqPeR3va3ruCRO7Fg5Ax8w5o74PvSXWNXiWTokOcBd1YlnLTUgqBzFP1q2J1JIzxjGPxMAxQCiXG7bkGtsnBKpckp2ERb0hWoWW0qsl8Ujiuh4lFCh2l6rw5AJcQFjIYW01bqqrJa2Kp07b-uKCJHbdd941NrHXd9hsCVlQtU93CXb_wP91NKYXR_URIMsnDYfxf1ac9pZCAEudgLaN71v2UClC-Q2PzpuHBQlEieKaX_fk8oV4AKgt9YnkEdQNz5-PL072osrbBrbF6MH1zBUVt6Lw-919pHZg=&p=10&fvj=0&vjs=3"
    },
    {
      "name": "Inżynier Systemowy - DevOps IoT Platform",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=2cebae1656b21935&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Expired: QA Engineer",
      "company": "Moorgate",
      "urls": "https://pl.indeed.com//rc/clk?jk=ac0581821b0efafb&fccid=f9e2ae1d4db307bf&vjs=3"
    }
  ],
  "59": [
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
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
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
    },
    {
      "name": "FPGA DSP Designer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/fpga-dsp-designer-rekrutacja-online_3393862.html#7c55e5aaf0f590efa0698495dc21f21f"
    }
  ],
  "60": [
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
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
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
      "name": "System Administrator Linux",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/system-administrator-linux_3413118.html#4dfda4bb11f7b9d46579d2e61821394d"
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
      "name": "Inżynier w Dziale Inwestycji i Eksploatacji",
      "company": "Instytut Fizyki Jądrowej PAN",
      "urls": "https://www.praca.pl/inzynier-w-dziale-inwestycji-i-eksploatacji_3389454.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Koordynator projektu [rekrutacja online]",
      "company": "HERKULES  S.A.",
      "urls": "https://www.praca.pl/koordynator-projektu-rekrutacja-online_3407586.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "P1 CAD Software Test Automation Engineer (C#) [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/p1-cad-software-test-automation-engineer-c-rekrutacja-online_3407616.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Projektant [rekrutacja online]",
      "company": "Impel Tech Solutions Sp. Z o.o. Sp. K",
      "urls": "https://www.praca.pl/projektant-rekrutacja-online_3332068.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Konstruktor",
      "company": "TNS Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor_3398606.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Asystent Technologa / Technolog",
      "company": "Euronova Sp.z o.o. Sp.k.",
      "urls": "https://www.praca.pl/asystent-technologa-technolog_3324544.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Inżynier Budowy / Kontroler Jakości [rekrutacja online]",
      "company": "JT S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy-kontroler-jakosci-rekrutacja-online_3348204.html#849ede6d971d66992625aa386af538a2"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=d8931e2ecdfc3385&fccid=52d48f1974e43ed4&vjs=3"
    },
    {
      "name": "Specjalista ds. Badawczych",
      "company": "Cebrio",
      "urls": "https://pl.indeed.com//rc/clk?jk=0bcbb25d41fdae14&fccid=1cd25ec87a06c80b&vjs=3"
    },
    {
      "name": "PROGRAMISTA/OPERATOR TOKARKI CNC",
      "company": "SpecialTech",
      "urls": "https://pl.indeed.com//rc/clk?jk=1b2937533654c0e7&fccid=7c5949c4b44aef0d&vjs=3"
    },
    {
      "name": "Programista CNC",
      "company": "Kolejowe Zakłady Nawierzchniowe",
      "urls": "https://pl.indeed.com//rc/clk?jk=d1d0859a7d3ec611&fccid=640acb9e5c3b5646&vjs=3"
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
      "name": "Summer Internship in Finance",
      "company": "Amway Global Business Services",
      "urls": "https://www.pracuj.pl/praca/summer-internship-in-finance-krakow,oferta,1000262446"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
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
      "name": "File Transfer Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/file-transfer-engineer_3413000.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen-systemow-analitycznych_3405276.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Senior Symfony Developer [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-symfony-developer-rekrutacja-online_3420664.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Symfony Fullstack Developer [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/symfony-fullstack-developer-rekrutacja-online_3420696.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "CE Digital Learning Design Manager",
      "company": "Tesco Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/ce-digital-learning-design-manager_3383684.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Programista/Developer Microsoft Dynamics AX",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/programista-developer-microsoft-dynamics-ax_3420584.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "ETL Developer",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/etl-developer_3420402.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Senior .NET Developer",
      "company": "KPMG",
      "urls": "https://www.praca.pl/senior-net-developer_3368358.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "C#/ .NET Developer",
      "company": "KPMG",
      "urls": "https://www.praca.pl/c-net-developer_3368360.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://www.praca.pl/administrator-it-specjalista-it_3399002.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "C# .NET Developer ",
      "company": "Wojciech Martko Software Development",
      "urls": "https://www.praca.pl/c-net-developer_3420210.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Senior Java Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-java-developer_3420190.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Angular Developer (Junior/Mid)",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/angular-developer-junior-mid_3420188.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Data Associate with German",
      "company": "ManpowerGroup",
      "urls": "https://www.praca.pl/data-associate-with-german_3422244.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Ruby on Rails Developer",
      "company": "Power Media",
      "urls": "https://www.praca.pl/ruby-on-rails-developer_3380544.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Bioinformatyk",
      "company": "Vendo Krzysztof Domagała",
      "urls": "https://www.praca.pl/bioinformatyk_3385522.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Specjalista ds. utrzymania baz danych",
      "company": "MOTOKARIERA S.C.",
      "urls": "https://www.praca.pl/specjalista-ds-utrzymania-baz-danych_3416378.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Senior Teradata Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-teradata-developer_3337184.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Teradata Technical Analyst ",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/teradata-technical-analyst_3337152.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Senior Xceptor Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-xceptor-developer_3338594.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Specjalista ds. rozwoju portfolio",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-rozwoju-portfolio_3369914.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Azure Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/azure-architect_3415422.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Specjalista IT [rekrutacja prowadzona online]",
      "company": "ZIKO Apteka Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-it-rekrutacja-prowadzona-online_3356916.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Ruby on Rails Developer",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/ruby-on-rails-developer_3383238.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "System Administrator Linux",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/system-administrator-linux_3413118.html#cb4b6710a47123eafde81a931a85ab0c"
    }
  ],
  "68": [
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
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
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
    },
    {
      "name": "FPGA DSP Designer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/fpga-dsp-designer-rekrutacja-online_3393862.html#7c55e5aaf0f590efa0698495dc21f21f"
    }
  ],
  "69": [
    {
      "name": "Administrator systemów IT (IT Administrator)",
      "company": "Mota-Engil Central Europe S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=d14105c2d54c1e37&fccid=bcf0bf1f4707d6c6&vjs=3"
    },
    {
      "name": "PRACA: Specjalista ds. sprzedaży systemów GIS",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=72e1402fc1022a52&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "Administrator systemów IT",
      "company": "Core Logic",
      "urls": "https://pl.indeed.com//rc/clk?jk=bde5b539ade97c2e&fccid=67e7d62a7f3782fd&vjs=3"
    },
    {
      "name": "Administrator platformy wirtualizacji i konteneryzacji",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=a583943e826cfdc1&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Key Account Manager",
      "company": "Unima 2000",
      "urls": "https://pl.indeed.com//rc/clk?jk=8630ed50ee083c5e&fccid=c554e56e32acd5b0&vjs=3"
    },
    {
      "name": "Linux Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com//rc/clk?jk=9736159eca14bfe1&fccid=e6ed5490b8bccdea&vjs=3"
    },
    {
      "name": "Administrator serwerów aplikacyjnych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=dac9b3439cb88043&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Administrator DB2",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=9f869437ba043921&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Młodszy Administrator IT",
      "company": "polskapress",
      "urls": "https://pl.indeed.com//rc/clk?jk=160e623d21004309&fccid=9db9c1f7bc99b9e7&vjs=3"
    },
    {
      "name": "Administrator baz danych PostgreSQL",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com//rc/clk?jk=9e48f67dd7c81c5c&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://pl.indeed.com//rc/clk?jk=a2d8276d0b025799&fccid=3080be87afc8f4e8&vjs=3"
    },
    {
      "name": "Senior Administrator IT",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com//rc/clk?jk=3fd43b821d3b8916&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "PRACA w Dziale IT: Back-End Developer",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=4e97eb203f795080&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=8b9014a2145ea0aa&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator IT",
      "company": "TRAX elektronik",
      "urls": "https://pl.indeed.com//rc/clk?jk=7936623bf2cea870&fccid=a938d49a88a78b9e&vjs=3"
    },
    {
      "name": "Administrator systemów Linux",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com//rc/clk?jk=d4c9c5f23fa99f77&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator Baz Danych PostgreSQL",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=0a7610c0f3795a6c&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Database Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com//rc/clk?jk=90fd55042e132238&fccid=e6ed5490b8bccdea&vjs=3"
    },
    {
      "name": "Konsultant Systemów ERP",
      "company": "IT Vision Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=184423f0229d73fa&fccid=e9e72d43a9959ff4&vjs=3"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "Lobo HR",
      "urls": "https://pl.indeed.com//rc/clk?jk=cb2df588d0fb3500&fccid=42ea513863db8ce0&vjs=3"
    }
  ],
  "70": [
    {
      "name": "Administrator systemów IT (IT Administrator)",
      "company": "Mota-Engil Central Europe S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=d14105c2d54c1e37&fccid=bcf0bf1f4707d6c6&vjs=3"
    },
    {
      "name": "Administrator systemów IT",
      "company": "Core Logic",
      "urls": "https://pl.indeed.com//rc/clk?jk=bde5b539ade97c2e&fccid=67e7d62a7f3782fd&vjs=3"
    },
    {
      "name": "Linux Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com//rc/clk?jk=9736159eca14bfe1&fccid=e6ed5490b8bccdea&vjs=3"
    },
    {
      "name": "Młodszy Administrator IT",
      "company": "polskapress",
      "urls": "https://pl.indeed.com//rc/clk?jk=160e623d21004309&fccid=9db9c1f7bc99b9e7&vjs=3"
    },
    {
      "name": "Administrator ORACLE",
      "company": "ASTEK Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=4b1b78a374344ddc&fccid=bade360f8bbb30c6&vjs=3"
    },
    {
      "name": "Administrator IT",
      "company": "TRAX elektronik",
      "urls": "https://pl.indeed.com//rc/clk?jk=7936623bf2cea870&fccid=a938d49a88a78b9e&vjs=3"
    },
    {
      "name": "administrator lokalnej sieci komputerowej w Dziale Informaty...",
      "company": "Politechnika Krakowska",
      "urls": "https://pl.indeed.com//rc/clk?jk=e10a11bf01e66b14&fccid=dbf078d8db93f693&vjs=3"
    },
    {
      "name": "Database Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com//rc/clk?jk=90fd55042e132238&fccid=e6ed5490b8bccdea&vjs=3"
    }
  ],
  "71": [],
  "72": [],
  "73": [
    {
      "name": "Specjalista ds. Wsparcia Technicznego IT z językiem niemieck...",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIczjBpMsplYC-tdu2ES2BVxhiar79OoBogfZvw_mjR5o_Cd5o52GhBuve0zqGqz0Sy5-QXZIw2XTvfZp-uPvpX_kHKw0bWlyr9FAyB4ERsyfpjO7XQQYSYVq_ImHkZbIjGK1XEZEHgP4Xqf3sqaDpAIAO5FyIPBnpPNkyYsIGwNWtGNrng3r9trI5PeePUTcA8vf6kH9ljC3IYHnEb5zEav9o_E6quXlGgo_8NjThGww-i3-U35lJqJibHncHa321mSySIwU4jNHi4YGkGfMhKvuvskog1zDQezY-8YlfYgF51ocCYcC2ZlIJZRaa7Qer_Mtf9T0l4QE0a1POmBXnJbjk-smIEXuUE8GbNUKi6H8lxhV7W4NHYbF4H7JtdXddsKKRszuX6xCvn9c99DEl6RhHzXvDWNDO_QfU6qJAZPQPUvURrwjgokPJajk4q134e3mfcWKjJ6E4yz-HZKmw2TRMChVwpqc4IlSSNuSSkVAiXhUjh8VyWoH4YJgf9Dqz5SeBtqaAS0vMU32AWc6Hgbet98R5YaTfqPc5_rcJhDhNiC3PPwADXEn0Ro-_a7rFs2tfSVF_bh2844lyESftNh8deVdkUPCtaYtZnlhb3XA0BBi0gCwwoZJNPPkzZXETuuy89pr66pTgmE3yHZx3RYlkUeDBAMWiw043Ivef-bK-IWTQ1RAVHzUGMGiR0qbKlB8FDatEE8Lg==&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Customer Service Representative - German Speaker",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfjRCP-evild3--b-jEwZItZTDv2XvQMBaWZyMl11bLcFjvL8jH82XcCpgvan5cY3bGDJYSxaJq2v3Ho-L--KtVi9TzcFTKnD4X6d-KvffIbRhbPCtEzZ0R9FYj_4vCTEECHTD2OKFUVaG6NJteqpz-_CfVAT17ch4FI-fC5xvvUnw8epKPZKT5cEmmEBNmlXlEbdHLrpI8ayHvuBLhySkAkGpVUR--F3zmYmhU0c-O4y81YwTOJlt9mQQw3lFuhJ394N_wd2NKpLSvszesrAbDS-PgBnh3Bt7eRE0iK8m7qGIMRl5zTLmhqjUervJsUkR1k-80PesAThJxPvo-TqV0stjCys-RLcsQt6QnAWEnTHt68c9mmOHvIaTUUYxzebkppldQHOkYd3j6dQMBQIRAK5XJzp8coJOp_DhAzkQuOd8LghlVbMfFVxPGPAy_fulPzjvnbjQUJi7Imves12AwOB71kkQHrqbdksVAW85eafndLGB13bPd9r5oyzFF8rh2kNkcioAADgG3CSeZrgisSdhuMigUL3JInPAMYgExlgUNC2RoYcMWdwERQ4_zPaA3eUDt-SCv8Baa6c5yB1kGhoOj8kmoAzVDv5U_qtUUFHoE0GeO8XzEInJrAtD8k9QFbx9QMSjabPgXWw5Jv3XUT9-OYHYMxxxcJGzb25_oTg==&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Specjalista ds. komunikacji",
      "company": "Eurovia Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=8865b386b0e44f0c&fccid=6df22a29a2de0162&vjs=3"
    },
    {
      "name": "IT Support Technician",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com//rc/clk?jk=0842ddbe0837035a&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Lider Działu Inżynierii Procesu",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c94802d34ca011fe&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "LIDER ZESPOŁU WDROŻENIOWEGO ERP",
      "company": "POLKAS",
      "urls": "https://pl.indeed.com//rc/clk?jk=52f21e8904610eef&fccid=34152a3d3613ca17&vjs=3"
    },
    {
      "name": "Performance Media Team Leader",
      "company": "Intredo",
      "urls": "https://pl.indeed.com//rc/clk?jk=cabdd414a6bf76b2&fccid=ddeef73797f17f05&vjs=3"
    },
    {
      "name": "Starszy Programista Java (lider techniczny)",
      "company": "Asseco Poland",
      "urls": "https://pl.indeed.com//rc/clk?jk=2abf15e40e09d936&fccid=50ff968648ffa038&vjs=3"
    },
    {
      "name": "Tester Automatyzujący w Javie",
      "company": "Sii Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=23f45d86c429e5d5&fccid=291f67da0c0c0d67&vjs=3"
    }
  ],
  "74": [
    {
      "name": "Inżynier elektryk / Projektant instalacji elektrycznych",
      "company": "ELSTA",
      "urls": "https://pl.indeed.com//rc/clk?jk=10d6f43157880baf&fccid=507fba9e43be3921&vjs=3"
    }
  ],
  "75": [
    {
      "name": "IBM Poland Internship - Watson Machine Learning/Watson OpenS...",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=8b999a8552cd5d4a&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "PLANISTA/ WDROŻENIOWIEC SYSTEMÓW OPARTYCH NA QGIS ORAZ CAD",
      "company": "GLOBAL SOFTELNET",
      "urls": "https://pl.indeed.com//rc/clk?jk=60c8b70adc91d110&fccid=87f74a987fba589f&vjs=3"
    },
    {
      "name": "Front-end Developer",
      "company": "Futurum Technology LTD. sp. k.",
      "urls": "https://pl.indeed.com//rc/clk?jk=2dceff3dc576590a&fccid=c97cfd271c22eb24&vjs=3"
    },
    {
      "name": "FTM QA Developer",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=607e5080e4790e02&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Software Developer",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=6e68974b0364eb94&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Młodszy administrator / serwisant",
      "company": "Softelnet spółka akcyjna sp.k.",
      "urls": "https://pl.indeed.com//rc/clk?jk=c3de9f0405325c9a&fccid=c120232169b76303&vjs=3"
    },
    {
      "name": "Dział ds. Osób Niepełnosprawnych - Pracownik IT",
      "company": "Uniwersytet Jagielloński - Dział ds. Osób Niepełno...",
      "urls": "https://pl.indeed.com//rc/clk?jk=1882a228597ed431&fccid=4cfdfea619565a49&vjs=3"
    },
    {
      "name": "Software Development Manager",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=2fde0bae5be91402&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Software Developer QA",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=a1f1df050441fdc4&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Data & AI Architect",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=03552730e217d16e&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Software Developer JavaScript/React",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=323e237b9797c4ff&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "DB2 Support Engineer",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=ea619088c13a4668&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Technical Support Engineer",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=bb0348a019bc196d&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Software Developer - Quality Assurance",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=268fc67f4b8a5f35&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Junior/Specialist IT Support with German",
      "company": "QVC POLAND GLOBAL SERVICES SP Z O O",
      "urls": "https://pl.indeed.com//rc/clk?jk=82cb5f10bd543d1a&fccid=d82b729ef7602eb5&vjs=3"
    },
    {
      "name": "Cloud DevOps Site Reliability Engineering (SRE) Developer",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=ab59f9eb24f5b6d8&fccid=de71a49b535e21cb&vjs=3"
    }
  ],
  "76": [
    {
      "name": "Projektant - Technolog",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com//rc/clk?jk=d28797d8ccec234f&fccid=5c065c1c92843790&vjs=3"
    },
    {
      "name": "PROJEKTANT - DESIGNER",
      "company": "NEWAG GROUP",
      "urls": "https://pl.indeed.com//rc/clk?jk=24c2ff2105232369&fccid=b1b38fabe5e92cf0&vjs=3"
    }
  ],
  "77": [],
  "78": [],
  "79": [
    {
      "name": "Administrator systemów IT (IT Administrator)",
      "company": "Mota-Engil Central Europe S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=d14105c2d54c1e37&fccid=bcf0bf1f4707d6c6&vjs=3"
    },
    {
      "name": "PRACA: Specjalista ds. sprzedaży systemów GIS",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=72e1402fc1022a52&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "Administrator systemów IT",
      "company": "Core Logic",
      "urls": "https://pl.indeed.com//rc/clk?jk=bde5b539ade97c2e&fccid=67e7d62a7f3782fd&vjs=3"
    },
    {
      "name": "Administrator platformy wirtualizacji i konteneryzacji",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=a583943e826cfdc1&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Linux Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com//rc/clk?jk=9736159eca14bfe1&fccid=e6ed5490b8bccdea&vjs=3"
    },
    {
      "name": "Key Account Manager",
      "company": "Unima 2000",
      "urls": "https://pl.indeed.com//rc/clk?jk=8630ed50ee083c5e&fccid=c554e56e32acd5b0&vjs=3"
    },
    {
      "name": "Administrator serwerów aplikacyjnych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=dac9b3439cb88043&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Administrator DB2",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=9f869437ba043921&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Młodszy Administrator IT",
      "company": "polskapress",
      "urls": "https://pl.indeed.com//rc/clk?jk=160e623d21004309&fccid=9db9c1f7bc99b9e7&vjs=3"
    },
    {
      "name": "Administrator baz danych PostgreSQL",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com//rc/clk?jk=9e48f67dd7c81c5c&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://pl.indeed.com//rc/clk?jk=a2d8276d0b025799&fccid=3080be87afc8f4e8&vjs=3"
    },
    {
      "name": "PRACA w Dziale IT: Back-End Developer",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=4e97eb203f795080&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "Senior Administrator IT",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com//rc/clk?jk=3fd43b821d3b8916&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "Administrator systemów Linux",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com//rc/clk?jk=d4c9c5f23fa99f77&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=8b9014a2145ea0aa&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator IT",
      "company": "TRAX elektronik",
      "urls": "https://pl.indeed.com//rc/clk?jk=7936623bf2cea870&fccid=a938d49a88a78b9e&vjs=3"
    },
    {
      "name": "Database Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com//rc/clk?jk=90fd55042e132238&fccid=e6ed5490b8bccdea&vjs=3"
    },
    {
      "name": "Administrator Baz Danych PostgreSQL",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=0a7610c0f3795a6c&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Konsultant Systemów ERP",
      "company": "IT Vision Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=184423f0229d73fa&fccid=e9e72d43a9959ff4&vjs=3"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "Lobo HR",
      "urls": "https://pl.indeed.com//rc/clk?jk=cb2df588d0fb3500&fccid=42ea513863db8ce0&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=d986136e0aaa85c5&fccid=7520988c97ff0996&vjs=3"
    },
    {
      "name": "Customer Care Manager",
      "company": "Świat Baterii",
      "urls": "https://pl.indeed.com//rc/clk?jk=5f7bf8d18b34b854&fccid=88fb836afb9cbe07&vjs=3"
    }
  ],
  "83": [
    {
      "name": "Senior NLP / AI Data Scientist",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-nlp-ai-data-scientist_3382962.html#a5cd6f0f36cc1be2cd76846ca8f85df7"
    },
    {
      "name": "Praktykant / Praktykantka w Dziale Zakupów [rekrutacja prowadzona on-line]",
      "company": "Abra S.A.",
      "urls": "https://www.praca.pl/praktykant-praktykantka-w-dziale-zakupow-rekrutacja-prowadzona-on-line_3365122.html#a5cd6f0f36cc1be2cd76846ca8f85df7"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=1c5dd6a055dcfbbb&fccid=5429572581cdb0aa&vjs=3"
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
      "name": "Kontroler wewnętrzny (ds. inwestycyjnych w branżach: drogowo-mostowej, automatyka i telekomunikacja lub energetycznej)",
      "company": "PKP Polskie Linie Kolejowe S.A",
      "urls": "https://www.praca.pl/kontroler-wewnetrzny-ds-inwestycyjnych-w-branzach-drogowo-mostowej,automatyka-i-telekomunikacja-lub-energetycznej_3420150.html#08421fbf2061793ed97761471aad46e0"
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
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#08421fbf2061793ed97761471aad46e0"
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
      "name": "Platform Operations Technician (III shift)",
      "company": "AKAMAI TECHNOLOGIES POLAND SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/platform-operations-technician-iii-shift-krakow,oferta,7521969"
    },
    {
      "name": "Asystentka / Sekretarka - Concierge online",
      "company": "Recruit Europe Takeshige Yokota",
      "urls": "https://www.pracuj.pl/praca/asystentka-sekretarka-concierge-online-krakow,oferta,1000227254"
    },
    {
      "name": "Staysta w Dziale Finansw",
      "company": "Sappi Europe (Polska)",
      "urls": "https://www.pracuj.pl/praca/stazysta-w-dziale-finansow-krakow,oferta,1000228597"
    },
    {
      "name": "Modszy specjalista ds. obsugi klienta wgierskojzycznego i tumacz",
      "company": "Marketing Investment Group S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-wegierskojezycznego-i-tlumacz-krakow,oferta,1000258752"
    },
    {
      "name": "Junior Logistics Operator",
      "company": "Veritas Alpha ltd sk",
      "urls": "https://www.pracuj.pl/praca/junior-logistics-operator-krakow,oferta,1000257762"
    },
    {
      "name": "Asystent /-ka Kierownika Projektu",
      "company": "Enervigo sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-kierownika-projektu-krakow,oferta,1000223118"
    },
    {
      "name": "Modszy Specjalista ds. Social Media",
      "company": "Chemitech Sp. z o.o.o",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-social-media-krakow,oferta,1000234496"
    },
    {
      "name": "Modszy Specjalista ds. Obsugi Klienta z jzykiem rumuskim",
      "company": "Marketing Investment Group S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-z-jezykiem-rumunskim-krakow,oferta,1000218174"
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
      "name": "Cloud Automation Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-automation-architect_3406644.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Kierownik ds. E-commerce",
      "company": "heban sp. z o.o. sp. komandytowa",
      "urls": "https://www.praca.pl/kierownik-ds-e-commerce_3404394.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Senior Subject Matter Expert – VDI & SRA [rekrutacja online]",
      "company": "ING Tech Poland",
      "urls": "https://www.praca.pl/senior-subject-matter-expert-vdi-sra-rekrutacja-online_3361102.html#afa6638b90a471dbf4fa517b806872ca"
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
      "name": "Monitoring Architect ",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/monitoring-architect_3406776.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Generalny dyrektor operacyjny ds. monitorowania transakcji",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/generalny-dyrektor-operacyjny-ds-monitorowania-transakcji_3408194.html#afa6638b90a471dbf4fa517b806872ca"
    }
  ],
  "90": [
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
    },
    {
      "name": "Przedstawiciel Handlowy Systemy Diagnostyki Pojazdów Wow ",
      "company": "Wurth Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy-systemy-diagnostyki-pojazdow-wow_3406956.html#1b16b0fb89813537b5dcefaaac466ca8"
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
      "name": "Kierownik robót ds. elektroenergetycznych (kolejowa sieć trakcyjna)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-ds-elektroenergetycznych-kolejowa-siec-trakcyjna_3417244.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik robót drogowych i torowych (infrastruktura miejska)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-drogowych-i-torowych-infrastruktura-miejska_3385908.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Inżynier Działu Due Diligence",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-dzialu-due-diligence_3372768.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik Robót Drogowych",
      "company": "GruntBudowa",
      "urls": "https://www.praca.pl/kierownik-robot-drogowych_3396248.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Mistrz Budowy",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/mistrz-budowy_3336942.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Cost Specialist / Inżynier ds. Przygotowania Inwestycji",
      "company": "EPCM Executive Search",
      "urls": "https://www.praca.pl/cost-specialist-inzynier-ds-przygotowania-inwestycji_3331604.html#11f7293a565ea6e3c1cf8f956026adf1"
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
      "name": "Technik – Automatyk (K/M)  [rekrutacja online]",
      "company": "Apleona HSG Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-automatyk-k-m-rekrutacja-online_3378226.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Majster / Mistrz robót mostowych",
      "company": "Nowak-Mosty Sp. z o.o.",
      "urls": "https://www.praca.pl/majster-mistrz-robot-mostowych_3378464.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik robót torowych (branża kolejowa)",
      "company": "TRAKCJA PRKiI S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-torowych-branza-kolejowa_3366518.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Inżynier Działu Jakości ds. Fit out",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-dzialu-jakosci-ds-fit-out_3378846.html#11f7293a565ea6e3c1cf8f956026adf1"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=0decd56c8a17e966&fccid=fdba018cd7bb7f9d&vjs=3"
    },
    {
      "name": "Inżynier Automatyk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=0f9e18031e6d937f&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Automatyk-Programista",
      "company": "Frapol",
      "urls": "https://pl.indeed.com//rc/clk?jk=86eb220d2ea80d09&fccid=9c2047b7b01199b2&vjs=3"
    },
    {
      "name": "C++ Software Developer [online recruitment]",
      "company": "FEV Polska sp. z.o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=52ce9e669f910ec9&fccid=55e92ccd2de02ad4&vjs=3"
    },
    {
      "name": "Senior Solar Engineer – Due Diligence",
      "company": "The Green Recruitment Company",
      "urls": "https://pl.indeed.com//rc/clk?jk=a4362774ce0a52d4&fccid=55ab05b56eddf8a9&vjs=3"
    },
    {
      "name": "Software Automation Engineer",
      "company": "SKELIA",
      "urls": "https://pl.indeed.com//rc/clk?jk=b331cc71439dbe8b&fccid=4b7f4b3718395175&vjs=3"
    }
  ],
  "95": [
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
      "name": "Letnia Akademia BGK",
      "company": "Bank Gospodarstwa Krajowego",
      "urls": "https://www.pracuj.pl/praca/letnia-akademia-bgk-krakow,oferta,1000208231"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#a9c91d76c72a3acb877897b0b7a390a3"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#a9c91d76c72a3acb877897b0b7a390a3"
    },
    {
      "name": "Doradca Klienta",
      "company": "Credit Agricole Bank Polska S.A.",
      "urls": "https://www.praca.pl/doradca-klienta_3326722.html#a9c91d76c72a3acb877897b0b7a390a3"
    }
  ],
  "97": [
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
      "urls": "https://pl.indeed.com//rc/clk?jk=9ea1966a6d7e2882&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "101": [
    {
      "name": "Konstruktor Elektronik",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "102": [
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
  "105": [
    {
      "name": "Lekarza specjalista w radiologii i diagnostyki obrazowej - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/lekarza-specjalista-w-radiologii-i-diagnostyki-obrazowej-branza-medyczna_3378812.html#b1175d6ff1a97d35f2648daf19d1ebb9"
    }
  ],
  "106": [],
  "107": [],
  "108": [],
  "109": [],
  "110": [
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
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#8c7f6c4ecbdac056738f9d6526320c31"
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
    }
  ],
  "111": [
    {
      "name": "Menadżer IT plus eCommerce",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcl7SaLP_MpaOcC0R1fREk1o9tOKV_PSlZgoYyESvbDEc98tycvB0Ry408scwOFYAiwNaCggxKhWhkZhVFIaAhgEySp7i_hfTxW1ewZgBVmzDwY-e7n7Fys_8endx3w9oB4e5zZwunTz-LrV1zXPVxOE8gcWMoFcREQTE5q83G80JZ6KTYUtVLksblC8kcB1qTLlDgY4oH6QxmLZUg_x0LLp0kPmKiYU1RZ6ztQhKwDbNdwGdm89HhUH7QWGpV14CGzGJHOh31WkDKfEGX1xKnN8ucejiUe293eA18FABKRDHsB3-O6ucKpGrSVn_XshSkCSxhBbiOTNKj5F9diUkJR2_BDd2xoxUXSTG9ctBzcVcjAZ6cOvfFMFMbQBRndgxU2VjKDMIbdV9wuQv730okTt6PVvyINtpQqEhaMZwBKuPe78b-Ir7HNbvII54lM7j4oP3dK9KYdYwqO_RYDlcMKwoHBqo3xBs_RUAINxkCwR897NHk2Z9alxic21k66aL3Ky5qSbNRVvOIg62n5TiUOgsVt3xyDCgZ4TNrADyrVRPhdSERUz0RojeVQk4y7XMnYe-MExwP0EwC29FDWpzagCFnkLVl3E_HIURW7EnIW8YO5x9YKDAPkAu0moT625_R4FvkPNJp5rUwR4xKu6gn8vsaoVoMWJ8Q=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Kierownik Zmiany",
      "company": "FIEGE Logistik Stiftung & Co. KG",
      "urls": "https://pl.indeed.com//rc/clk?jk=2de8f5b4cc3c48c3&fccid=c21abee0de715f4a&vjs=3"
    },
    {
      "name": "Kierownik projektu IT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=fc4d070c679ac3ee&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Product Manager (biura rachunkowe)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=692ebe743f5a7a7a&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Kierownik Zespołu Handlowego - rekrutacja prowadzona zdalnie",
      "company": "Futuriti",
      "urls": "https://pl.indeed.com//rc/clk?jk=8199866ac6429e4d&fccid=14f634228675fb3a&vjs=3"
    },
    {
      "name": "Cloud Product Manager",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=593d5b3ac0507a69&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Menadżer IT plus eCommerce NOWA",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=588a10cfd05ac937&fccid=503ed6c94c8786f6&vjs=3"
    },
    {
      "name": "Kierownik ds. rozwoju biznesu IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=9406f6cc7a335725&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista C embedded",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com//rc/clk?jk=3cc3f8784b0e4603&fccid=45c7d019cc96de8e&vjs=3"
    }
  ],
  "112": [
    {
      "name": "Senior Subject Matter Expert – VDI & SRA [rekrutacja online]",
      "company": "ING Tech Poland",
      "urls": "https://www.praca.pl/senior-subject-matter-expert-vdi-sra-rekrutacja-online_3361102.html#8340b7c0fa56d555f2ad6e3d20e2a4a4"
    },
    {
      "name": "Project Management Officer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/project-management-officer_3388214.html#8340b7c0fa56d555f2ad6e3d20e2a4a4"
    },
    {
      "name": "IT Project Manager [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/it-project-manager-rekrutacja-online_3407364.html#8340b7c0fa56d555f2ad6e3d20e2a4a4"
    },
    {
      "name": "Project Accounting Manager [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/project-accounting-manager-rekrutacja-online_3394348.html#8340b7c0fa56d555f2ad6e3d20e2a4a4"
    },
    {
      "name": "IT Projekt Manager",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/it-projekt-manager_3364422.html#8340b7c0fa56d555f2ad6e3d20e2a4a4"
    }
  ],
  "113": [
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
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
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
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=a1e83735c9c23ddc&fccid=dbf078d8db93f693&vjs=3"
    },
    {
      "name": "Senior IT Recruiter/ Starszy Specjalista ds. Rekrutacji IT",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=16254ea575b179ad&fccid=062f71e131e87cf0&vjs=3"
    }
  ],
  "117": [
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
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
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
      "name": "Digital Workplace Consultant ",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/digital-workplace-consultant_3406740.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Service Management SACM Consultant",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/service-management-sacm-consultant_3406630.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/it-support-analyst_3401260.html#53bd8c377d38166ec24900205dfb63ba"
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
      "name": "IT Analyst with Dutch and English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-dutch-and-english_3339228.html#53bd8c377d38166ec24900205dfb63ba"
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
      "name": "Azure Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/azure-architect_3415422.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Monitoring Architect ",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/monitoring-architect_3406776.html#53bd8c377d38166ec24900205dfb63ba"
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
    },
    {
      "name": "IT Analyst with German & English ",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-german-english_3341804.html#53bd8c377d38166ec24900205dfb63ba"
    }
  ],
  "118": [],
  "119": [],
  "120": [
    {
      "name": "Monter / Serwisant - instalacji z zakresu telekomunikacji",
      "company": "OPTIMA",
      "urls": "https://pl.indeed.com//rc/clk?jk=b8bb773291188d51&fccid=5cdf4ecfa8db6b9c&vjs=3"
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
      "name": "Inżynier serwisowy sprzętu medycznego",
      "company": "P.P.H.U. BOR-POL",
      "urls": "https://www.praca.pl/inzynier-serwisowy-sprzetu-medycznego_3385800.html#3b40509fce3183c1f28d4a4a26e15118"
    },
    {
      "name": "Elektryk",
      "company": "Gi Group Sp z o.o.",
      "urls": "https://www.praca.pl/elektryk_3360022.html#3b40509fce3183c1f28d4a4a26e15118"
    }
  ],
  "123": [],
  "124": [
    {
      "name": "Programista Embedded",
      "company": "Green Cell",
      "urls": "https://pl.indeed.com//rc/clk?jk=8c1525665ce0cb01&fccid=7520988c97ff0996&vjs=3"
    },
    {
      "name": "Programista Embedded",
      "company": "UNICARD",
      "urls": "https://pl.indeed.com//rc/clk?jk=282e7cff0c77523e&fccid=6ec19a37860139d8&vjs=3"
    },
    {
      "name": "Programista embedded IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=3cfd39e2b6e9f689&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista Embedded C/C++",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=9b169d1843e0fb48&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista aplikacji mobilnych iOS - IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=93b24dfedaf9c272&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista aplikacji mobilnych Android- IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=0066fb4d9d8fdbc9&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Senior Embedded Software Engineer",
      "company": "Nordic Semiconductor Poland Sp.zo.o",
      "urls": "https://pl.indeed.com//rc/clk?jk=4d978fdb2ed382ab&fccid=cf2e34e68d284cb8&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=462582c3fee8f4f4&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Tester urządzeń medycznych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=a0cad3e097038a81&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Konstruktor Elektronik",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Inspektor ochrony przeciwpożarowej",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=719fbd25dbd10ed9&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista Embedded C/C++",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=9b169d1843e0fb48&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "134": [],
  "135": [
    {
      "name": "Programista Embedded",
      "company": "UNICARD",
      "urls": "https://pl.indeed.com//rc/clk?jk=282e7cff0c77523e&fccid=6ec19a37860139d8&vjs=3"
    }
  ],
  "136": [
    {
      "name": "PROJEKTANT INSTALACJI FOTOWOLTAICZNEJ",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=9e39e1810c029b8a&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Projektant w branży elektronergetycznej",
      "company": "MLElectric Sp. z o.o.",
      "urls": "https://pl.indeed.com//company/Mlelectric-Sp.-z-o.o./jobs/Projektant-W-Bran%C5%BCy-Elektronergetycznej-afc44b00e11824a2?fccid=19f4a348bbabfcc0&vjs=3"
    },
    {
      "name": "Projektant",
      "company": "Grupa Projekt",
      "urls": "https://pl.indeed.com//rc/clk?jk=e16befb455fe6d1e&fccid=37607da95fc8dee9&vjs=3"
    },
    {
      "name": "Inżynier/ Elektryk Projektant E-PLAN",
      "company": "Axamo Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=494a424cfbfab4d1&fccid=f86175c7ba708305&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "139": [
    {
      "name": "Technik / Inżynier serwisu",
      "company": "SUPO Cerber Sp. z o.o.",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0CrOs_aCXrtuVRUo5udUwhQgQCCuHMpeM2SQfFxFRQfISk4aqobRnqxqoflj2fBVU7I4MXnu5EkqSc35z-XNvsdsspmv0HvJZ8I89HUk_E-Wd3ZbmFMM71FOiAPs50RnvZVth8E8mDkB4pJQpk6iqVbnkBLweAVKo7nr4du67b7hKz3Dbk0NM_SiP74zPSCLW7wpmxt-Vg2AAjphjBhrgc90jXPO5_csypgK2ARPHPt6tJvfT5MujACf2AZ7010ar8GYsK4IDg5CEDMirMPIB1XeYefoitJdmDJr36LxLOmTKJ67kZXDvWGg4pJjGlIi8-3QCnkO7rPTfTT1osN0Q6lBazEhwmrZ28LYCx8E_pbvPzeW-iI-3ednkV0ppPLvPQ2lqRNxvfNND5LvDf6SeRKQz9gswWSCgiieCud3hm6XyeXEClx1iTSiQ0WkxMmrhvL0dLzdALhbYX0TZBpVavnuDmZEXHj7DOAPJYYRMOLbner1Yi-tvswm2dxjTHWIHAM8TEb2hL1WrzsczZ6c_c5v2ARjCToU5e7etUskZCO4ZfikIdr0NeHuRzpNwvBu3GnXO2LROEcObAvaRgHYQNr2XYnPDdRX3FdBM1TpMIkOw==&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Elektromonter sieci SN i nN w Jednostce Terenowej Nowa Huta",
      "company": "TAURON Dystrybucja S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=94dca86b723a4f6e&fccid=5a376901cebad8b2&vjs=3"
    },
    {
      "name": "Elektryk / Elektronik",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=e24a25c607b2349d&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Budowy - Mistrz budowy",
      "company": "Przedsiębiorstwo Robót Inżynieryjnych INKOP",
      "urls": "https://pl.indeed.com//rc/clk?jk=1d3dd98638ee466d&fccid=a695411d8904b8ca&vjs=3"
    },
    {
      "name": "Elektryk – monter instalacji",
      "company": "DC Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=0761574bb77f2628&fccid=102922c917c5bfe4&vjs=3"
    },
    {
      "name": "Elektromonter instalacji fotowoltaicznych",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=c2a6d2d934717452&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Telemonter liniowy",
      "company": "TP TELTECH Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=8ba93ec51e31b61a&fccid=0de7b0e6198b73e8&vjs=3"
    },
    {
      "name": "Pomiarowiec - Kierowca kat. B",
      "company": "Sanpro Synergy Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=4fd6f4259177a4fe&fccid=6af571eef33d6b4d&vjs=3"
    },
    {
      "name": "Monter instalacji fotowoltaicznych",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=f86bb269d7d12e01&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "STARSZY ASYSTENT PROJEKTANTA BRANŻY MOSTOWEJ",
      "company": "REJPROJECT",
      "urls": "https://pl.indeed.com//rc/clk?jk=fafe0e31168e602b&fccid=7606770ec5e96388&vjs=3"
    },
    {
      "name": "Szlifierz",
      "company": "Bamet",
      "urls": "https://pl.indeed.com//rc/clk?jk=146cd26516c29922&fccid=55f842c9b66dbe5b&vjs=3"
    },
    {
      "name": "Specjalista ds. światłowodowych technik pomiarowych",
      "company": "SHM System Sp. z o.o. Sp. kom.",
      "urls": "https://pl.indeed.com//rc/clk?jk=c6990eca8feb3614&fccid=0d0b93e7fe8514c2&vjs=3"
    },
    {
      "name": "Monter / Serwisant - instalacji z zakresu telekomunikacji",
      "company": "OPTIMA",
      "urls": "https://pl.indeed.com//rc/clk?jk=b8bb773291188d51&fccid=5cdf4ecfa8db6b9c&vjs=3"
    }
  ],
  "140": [
    {
      "name": "Kierownik projektu IT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=fc4d070c679ac3ee&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "141": [
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
      "urls": "https://pl.indeed.com//rc/clk?jk=6e3c42055e6c585a&fccid=2b7614ab81f2843c&vjs=3"
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
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Praktykant Salesforce  get the HOT Salesforce skill",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,7468135"
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
      "name": "Python Developer (Django + Django Rest Framework)",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/python-developer-django-django-rest-framework_3372540.html#01a3e5422ba1d5a5567c06a9f205565b"
    },
    {
      "name": "Projektant Java [rekrutacja online]",
      "company": "Asseco Poland S.A.",
      "urls": "https://www.praca.pl/projektant-java-rekrutacja-online_3330020.html#01a3e5422ba1d5a5567c06a9f205565b"
    },
    {
      "name": "Java Developer (Mid)",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/java-developer-mid_3396308.html#01a3e5422ba1d5a5567c06a9f205565b"
    },
    {
      "name": "Fullstack .NET Developer (Regular / Senior)",
      "company": "Power Media",
      "urls": "https://www.praca.pl/fullstack-net-developer-regular-senior_3317810.html#01a3e5422ba1d5a5567c06a9f205565b"
    }
  ],
  "146": [],
  "147": [
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
      "urls": "https://pl.indeed.com//rc/clk?jk=462582c3fee8f4f4&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Tester urządzeń medycznych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=a0cad3e097038a81&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Konstruktor Elektronik",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Front-end Developer",
      "company": "Dotlinkers",
      "urls": "https://pl.indeed.com//rc/clk?jk=984df2d96643e03f&fccid=c62351057abf05f6&vjs=3"
    },
    {
      "name": "Programista Embedded C/C++",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=9b169d1843e0fb48&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Java Developer",
      "company": "Dotlinkers",
      "urls": "https://pl.indeed.com//rc/clk?jk=e456367b46634ea3&fccid=c62351057abf05f6&vjs=3"
    }
  ],
  "150": [
    {
      "name": "Kierownik Projektu (Contact Center)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=77d3d8045b8d70e3&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "151": [
    {
      "name": "Architekt",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/architekt_3405096.html#9571477933dca269f999e1ac25c31844"
    },
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#9571477933dca269f999e1ac25c31844"
    },
    {
      "name": "Integrated Catchment Modeller (InfoWorks ICM)",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/integrated-catchment-modeller-infoworks-icm_3396890.html#9571477933dca269f999e1ac25c31844"
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
    }
  ],
  "152": [],
  "153": [
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
      "name": "Cloud Oriented Network Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-oriented-network-architect_3409108.html#571e3ad5364317747c2506f7998d9538"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=47fcb3de2f8ac0e5&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Senior .NET Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=38cbe55b7abe8e57&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Linux Platform Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=116274200f0a0fb2&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "155": [],
  "156": [
    {
      "name": "Projektant w branży elektronergetycznej",
      "company": "MLElectric Sp. z o.o.",
      "urls": "https://pl.indeed.com//company/Mlelectric-Sp.-z-o.o./jobs/Projektant-W-Bran%C5%BCy-Elektronergetycznej-afc44b00e11824a2?fccid=19f4a348bbabfcc0&vjs=3"
    },
    {
      "name": "Projektant sieci sanitarnych",
      "company": "Lobo HR",
      "urls": "https://pl.indeed.com//rc/clk?jk=761d971eaf07ae0c&fccid=42ea513863db8ce0&vjs=3"
    },
    {
      "name": "IBM Poland Internship - Watson Machine Learning/Watson OpenS...",
      "company": "",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=8b999a8552cd5d4a&fccid=de71a49b535e21cb&vjs=3",
      "company": "Projektant Sieci Wodno-Kanalizacyjnych",
      "urls": "K&K Selekt"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=80c55476fee329df&fccid=afe1f520a63ae3d3&vjs=3",
      "company": "Projektant FTTH Kraków",
      "urls": "Electronic Control Systems"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=3a33fa5cf06de182&fccid=9e826fe22370d20d&vjs=3",
      "company": "Projektant branży elektrycznej",
      "urls": "Lobo HR"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=09595878d58aa570&fccid=42ea513863db8ce0&vjs=3",
      "company": "Projektant",
      "urls": "Grupa Projekt"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=e16befb455fe6d1e&fccid=37607da95fc8dee9&vjs=3",
      "company": "PLANISTA/ WDROŻENIOWIEC SYSTEMÓW OPARTYCH NA QGIS ORAZ CAD",
      "urls": "GLOBAL SOFTELNET"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=60c8b70adc91d110&fccid=87f74a987fba589f&vjs=3",
      "company": "Inżynier/ Elektryk Projektant E-PLAN",
      "urls": "Axamo Recruitment"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=494a424cfbfab4d1&fccid=f86175c7ba708305&vjs=3",
      "company": "Front-end Developer",
      "urls": "Futurum Technology LTD. sp. k."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=2dceff3dc576590a&fccid=c97cfd271c22eb24&vjs=3",
      "company": "FTM QA Developer",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=607e5080e4790e02&fccid=de71a49b535e21cb&vjs=3",
      "company": "Software Developer",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=6e68974b0364eb94&fccid=de71a49b535e21cb&vjs=3",
      "company": "Młodszy administrator / serwisant",
      "urls": "Softelnet spółka akcyjna sp.k."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=c3de9f0405325c9a&fccid=c120232169b76303&vjs=3",
      "company": "Dział ds. Osób Niepełnosprawnych - Pracownik IT",
      "urls": "Uniwersytet Jagielloński - Dział ds. Osób Niepełno..."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=1882a228597ed431&fccid=4cfdfea619565a49&vjs=3",
      "company": "Software Development Manager",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=2fde0bae5be91402&fccid=de71a49b535e21cb&vjs=3",
      "company": "Software Developer QA",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=a1f1df050441fdc4&fccid=de71a49b535e21cb&vjs=3",
      "company": "Data & AI Architect",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=03552730e217d16e&fccid=de71a49b535e21cb&vjs=3",
      "company": "Software Developer JavaScript/React",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=323e237b9797c4ff&fccid=de71a49b535e21cb&vjs=3",
      "company": "DB2 Support Engineer",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=ea619088c13a4668&fccid=de71a49b535e21cb&vjs=3",
      "company": "Technical Support Engineer",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=bb0348a019bc196d&fccid=de71a49b535e21cb&vjs=3",
      "company": "Software Developer - Quality Assurance",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=268fc67f4b8a5f35&fccid=de71a49b535e21cb&vjs=3",
      "company": "Junior/Specialist IT Support with German",
      "urls": "QVC POLAND GLOBAL SERVICES SP Z O O"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=82cb5f10bd543d1a&fccid=d82b729ef7602eb5&vjs=3",
      "company": "Cloud DevOps Site Reliability Engineering (SRE) Developer",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=ab59f9eb24f5b6d8&fccid=de71a49b535e21cb&vjs=3",
      "company": "xxx",
      "urls": "157"
    },
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
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen-systemow-analitycznych_3405276.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3415642.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Senior FP&A Analyst with German [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/senior-fp-a-analyst-with-german-rekrutacja-online_3389128.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Senior FP&A Analyst [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/senior-fp-a-analyst-rekrutacja-online_3389134.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Data Associate with German",
      "company": "ManpowerGroup",
      "urls": "https://www.praca.pl/data-associate-with-german_3422244.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Expert in Pricing with Hungarian [online recruitment]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/expert-in-pricing-with-hungarian-online-recruitment_3359952.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-business-analyst_3393580.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Teradata Technical Analyst ",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/teradata-technical-analyst_3337152.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Senior Xceptor Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-xceptor-developer_3338594.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Analityk Finansowy",
      "company": "Fagron sp. z o.o.",
      "urls": "https://www.praca.pl/analityk-finansowy_3409816.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Analityk Danych Terenowych FOTO / LiDAR ",
      "company": "Vimap Sp. z o.o.",
      "urls": "https://www.praca.pl/analityk-danych-terenowych-foto-lidar_3326748.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Data Analyst with Python",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/data-analyst-with-python_3372270.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Data Center Engineer",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/data-center-engineer_3347770.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Analityk biznesowy / Business Analyst ESG",
      "company": "Sustainalytics",
      "urls": "https://www.praca.pl/analityk-biznesowy-business-analyst-esg_3322480.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Business Analyst [rekrutacja online]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/business-analyst-rekrutacja-online_3343528.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Senior Business Analyst",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/senior-business-analyst_3365278.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Konsultant ds. strategicznej zmiany biznesowej",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/konsultant-ds-strategicznej-zmiany-biznesowej_3400166.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Analityk ilościowy ryzyka depozytowego",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/analityk-ilosciowy-ryzyka-depozytowego_3397392.html#930e3ab82934b374718d73e23d781eb3"
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
      "name": "React/Vanilla Developer - Digital TV",
      "company": "Manpower",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0CQARiGTJ5yzaSecuB3R6Z35iUhZxnT2WfcYRSBT_3PPIOuQ7NG3JI7GWU_sR9U7klIs3hSDrR3lgT0W4Bsoq3M3CqbWR3PQPsLW-j42jVmJBTdYlHZEdPPCw7v2OLuocW6013vq0nsJW7jOGHIvIx5MX4UAkzbzKmWnmC-h1aoIY15gzWphetucJsQvQoyd8iRRArG1XrXoIJWXheQwhbglJGg_JKGR0jbVpwrVas1hAnlenH2eebbjdbJy02hnXUqcOysc0NgfvnfIRVrSCb7u2-iOLQQ9tm0kdmdfkDuFhq73c89gQct6w5MemM2b4wMRwc-SO4M2wzj5y-MiGOCVLMuqWAu855jqog3eyCa7virALUItfN2sRi_vBs16-czy8lsC-japn3hr0smPRaiu4rw6zpw8EgMEKbWrREmKNgVwwguZbG9eGGhp7ldNlkNCEJddiEIdF_MvsUhgNEm35p4Fl5t1_gh77_ggEN14UC897xdbaic9FUqpSeMVcEy0EsYZ8SggfpTlv98nEJCQJsabz94IMekQHMPkS8QgqbOJI59DZMaS2P7646e-c7YAvLIHeb1w-BQOvrzOmRanF4S6ybpcFygTdNaPyp_h7YBX5J1MRo26BVgNK7vvZGbuGRvSvITw3trSa7VAbvDWoh6z3NDLVs=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Unity Developer",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIdmL4h2EI-6MRw8RO0nGTpT8vVegrXL598BCXOuZn_EVvK3v4yyJTLHuvbPXyZqzaVcSn0l4WMoPN9P4S-o6u5YFS0V7eFwWD6QfdIPn6sJB8qa7hL0uNHWUBPdcO6BJ-T5IXV4Gb-WHYNOQCfnjLICJcOVuRyKsPjMwm06HfDKKiQiY67yoWzFb0mvC-xkQgKalOPoClgdWcmhhvMJBDxGEnfuMlmlagZKURvTuVxR437JfNyYrYXMAsZwRb0v6-MD9Or_7VwMSWidAC3eTfU8TbjSrItplIb1JK33VkvTU9IHx3gEf7ISpXIjwRceOEke3OT9ZMmwuURK2YZpu8KkvgtAQFd56ExIfw6yyzrzjQO30BM3nSDG8Ly0JuIbQTy8vYFBxo2OlGUM4besu0ovSamyimlxeImFusN_uiXNaD8wRFpKowvpgNnIhRsSUXnol5gzxpJMD4XK6027D0xxWgaVl4d1L97za3tOzLpKYQQSW8WUNdQZtccJxTHgbzhrH3FBFjfD57hrpqKJHOgQsluMXFW7rYZHSBgLSJh8bapuzqUi3eer-dWplXDERRSc9lof7lJKdpHWzjWj7XvyTeVI4CId5zPZkCi6r6-yVTy8-pzuhSmP&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Senior 2D Artist",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIe2p3w8AVQ8AF1CNKCocOR5N61pW2gIho3cmGXMIgrg--EuYi0bCDiJu02KGoEmjdKUh39RPm4vQK5LjwhCZvlgyJQZz7vko7YrRgmBNwXGJL2Hvn3U4HXWicVj6SSowXCQfGiW0Id3tO8NYuzwlB47yjA2uw92bVJYAzvPqEhXkPBzDIbHJfIUFC6YLofCELcoLhAMfd68dQQevogvpW5FH1iKru3bZGg2T4rOTbqN644bXPbpaxRqkMFPaGVyZ1bgEKvuWFOCUje0Agh9c6LEYlXjYuookkrdRPC4aH3BzMnipnPUoan_J5px3yUQkrlWMuWzhU5tomnMs-UzeE66thSKmmzZvtlRIXUeB4CYbDpwy1GL-HxUJYiDD0FhF_Rwl_sgNO21A1vQ29-pZUFaYsmXJpCWDewjPCA_Oqqk6lRqnEnKweYKXsbgt3Cn7PeJ-_Mv-N-Skfpx7OO8q74ofaDcyTs3aLeFRlzm8di-qMNFc2BEXAMZ4YBXB-GdfZ8zfThPVBKgW3amacZFdpdWgprzL3QdRhmG7rui9F022qv21-UiyuAW6rU1jGSuKzt2Taxh_bF28mRRmVHhFrRxIEXye3WWqqn0ZY6PSBvAFszjmU6VD_xU&p=2&fvj=0&vjs=3"
    },
    {
      "name": "Junior Unity Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=c0237ee5350d7803&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "TEAM",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com//rc/clk?jk=c9c4c99adb4009f6&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "JavaScript Game Developer",
      "company": "Yggdrasil Gaming Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=f368832ab03e1c78&fccid=fe29cc37d9c271c4&vjs=3"
    },
    {
      "name": "Unity 3D Developer",
      "company": "Rage Quit Games",
      "urls": "https://pl.indeed.com//rc/clk?jk=146c2eadc80a4a13&fccid=bccdcb935f65afcb&vjs=3"
    },
    {
      "name": "Junior Android Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=59fe3f5ccaaf8bf0&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Junior IOS Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=23bdec6af0967160&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Scala Developer",
      "company": "Two Up Digital",
      "urls": "https://pl.indeed.com//rc/clk?jk=a243de175a674bb1&fccid=50829994782ef656&vjs=3"
    },
    {
      "name": "Praca w dziale IT!",
      "company": "TalentU",
      "urls": "https://pl.indeed.com//rc/clk?jk=fabbb38bf2e16007&fccid=ca5f1e138a78fd90&vjs=3"
    },
    {
      "name": "Game Mathematician",
      "company": "Yggdrasil Gaming Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=cb0548e1fb1c159a&fccid=fe29cc37d9c271c4&vjs=3"
    },
    {
      "name": "Junior Ruby on Rails Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com//rc/clk?jk=3ee2b30b299dfdcc&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "C++ Developer",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIdmL4h2EI-6MQT2MYWoVlecMS8xnsoteCGiEtSz-foVW7HkJMHDsENdzpVrc7Li9PFtd06QpKc6HANdp6RnYHdsc3NE7yFA-JTNvKzOfBY9FLIdyFQR0p3rN215yLsvIUWIuHAUkCyBeVwwVaNsybzeD1VxXuSy7-p9e1hD4xIIas_G0as4v4VJpeZudejOgd5UXoZZPd0LRUIM8d1AXQt6G_3rYccP07faou7GhoLAXah6L0uIcL26NqMVhyLMdZ-ew1GbzlkKaqASWJsldNROypJKt3L_xeIfd8qf2Pu6_6uzGHIqRxTP-pjDXFE38QVnaeCnqgnp0tU45lm1qNaHSfZaqxBdaRx-aG9Ppq9Ve6Rj-zOXBmHMA5IpL84uyrolTDywWAhmmqm64Sxqk8oH26MMF87mZp5GgqGAJUOeD8NEPvDDs8W3tMJ0J_MSiTKVwOAxkiMF0TgR_u82OD4vQlwoxXnosZuxsERXs8JIwjuGlxqcoLclAR0o6EBHj4Y-ip3iivWA7KMG2dgk6NVNjnvQ77Ydmos0Sh6MKWwMVgEKBinJ65kIHymyPNpkQedejGlWu-QnAhzPTJVF53gV2wYDb-WPU7yw-o0a6CCaAWT3eFLdKogs&p=13&fvj=0&vjs=3"
    },
    {
      "name": "Unity Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=0e322586897ab54a&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "React Native Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com//rc/clk?jk=1580b5bf1a221038&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Java Game Developer",
      "company": "NetEnt",
      "urls": "https://pl.indeed.com//rc/clk?jk=23714aef762b6f70&fccid=594e59f84614d19c&vjs=3"
    },
    {
      "name": "Fullstack Developer - Portfolio Team",
      "company": "NetEnt",
      "urls": "https://pl.indeed.com//rc/clk?jk=4b37a6dde9f7ba3e&fccid=594e59f84614d19c&vjs=3"
    },
    {
      "name": "Senior Unity Developer",
      "company": "Gamesture Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=1ce181e40e31f0f2&fccid=e37c997fadbffaa1&vjs=3"
    },
    {
      "name": "UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=be38b941f8b99086&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Backend Developer",
      "company": "Kalamba Games",
      "urls": "https://pl.indeed.com//rc/clk?jk=3fb2dc37ce9addc8&fccid=59c814054300dbd5&vjs=3"
    },
    {
      "name": "Senior Unity Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=61579c27a6a09935&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Rendering Software Developer",
      "company": "Sperasoft",
      "urls": "https://pl.indeed.com//rc/clk?jk=fbe55a5ea903f97a&fccid=72575fa3d1ce8c23&vjs=3"
    },
    {
      "name": "Technical Writer",
      "company": "Nordic Semiconductor",
      "urls": "https://pl.indeed.com//rc/clk?jk=f8246d3814b02998&fccid=d468e34edcbad731&vjs=3"
    },
    {
      "name": "iOS Developer - Video Streaming",
      "company": "Manpower",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0CQARiGTJ5yzaSecuB3R6Z35iUhZxnT2WfcYRSBT_3PPIOuQ7NG3JI7GWU_sR9U7km9pYB6WapZXEIGLVsYV0v9vq6tFCao2nUURvczb4SZ9YfP9idBWHHdfCFSHNd5brnKO1Ieu-mFtZsQ2gWtmbIV01leKPzDcWCW24wgEVTp6cI3YfhGK4HU4ldzuN8vRk9HcoQLvGH0f909AahRMzHuSmBOec7jBLc-OEyjYFWY1QfhXHbOpRGPVcwOBJh92sOqmIK2YtWA99WlSvVf7oJzNtZguRHqzQCGnapGueAWMNvcbJ1PHMeN5ukGfe3Mg1yvCTEhcLAi7Mpukz_grW1tLfvo2sl95oAUXRq9dzvlOPU0P-PEvZWvlzDkE8d-tfxRH-iJhK64cFxzkHBYPjl4r5tvnZZSyFuuyFar1bpr2yH-aTTjBTO8sLGoSgwV6hl-I8SgMoF-bc5Odbv5VpTinfz_Ue7GTjOOLaShOJNd6syZcOMFvTy-puoXwntQkQZGqwORqItXbMqY6iZFQXXZeAjfpHGKDLOQ68iHbG2PJ6gb0N6lBRg8jYLLc0XyavxtKAaogRn2SgDUX1l6o33VeRxrkMC9BMy3-H-7uSmjheh1itwwHEx_MRUorWLTPOu7uFuMvekU2B2883Q_ZacYduMGCKJXTcI=&p=13&fvj=0&vjs=3"
    },
    {
      "name": "UE4/C++ Software Developer",
      "company": "Sperasoft",
      "urls": "https://pl.indeed.com//rc/clk?jk=9b282913d9d97640&fccid=72575fa3d1ce8c23&vjs=3"
    },
    {
      "name": "Ruby on Rails Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com//rc/clk?jk=6f7e6c22857a22b8&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Senior Backend Developer",
      "company": "NetEnt",
      "urls": "https://pl.indeed.com//rc/clk?jk=822e15a43ff1b9fc&fccid=594e59f84614d19c&vjs=3"
    },
    {
      "name": "Senior Frontend Developer",
      "company": "Columbus",
      "urls": "https://pl.indeed.com//rc/clk?jk=32266f8fdd1392f9&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Senior Unity 3D Developer",
      "company": "Rage Quit Games",
      "urls": "https://pl.indeed.com//rc/clk?jk=c16502d0c77f6823&fccid=bccdcb935f65afcb&vjs=3"
    },
    {
      "name": "Android Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=2476a52e4e64bd39&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Senior Front End Developer",
      "company": "William Hill",
      "urls": "https://pl.indeed.com//rc/clk?jk=a27daada7ed9e008&fccid=8cb222cc2614b8d7&vjs=3"
    },
    {
      "name": "Backend Developer [online recruitment]",
      "company": "Two Up Digital",
      "urls": "https://pl.indeed.com//rc/clk?jk=a76cabc1a51e85a2&fccid=50829994782ef656&vjs=3"
    },
    {
      "name": "Senior Front End Developer",
      "company": "Grand Parade",
      "urls": "https://pl.indeed.com//rc/clk?jk=c4cb2108e96e2df5&fccid=05868c54e0d72a0d&vjs=3"
    },
    {
      "name": "Senior Unity 3DDeveloper",
      "company": "Swift Apps",
      "urls": "https://pl.indeed.com//rc/clk?jk=39aa5f08bc35feeb&fccid=3950800b528a0e46&vjs=3"
    },
    {
      "name": "Senior IOS Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=2638928b4c2fd8e8&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Game Designer",
      "company": "Gamesture Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=328a28ca9f6e5482&fccid=e37c997fadbffaa1&vjs=3"
    },
    {
      "name": "Senior Android Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=09f391641b2871d2&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "IOS Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=33b966b3e7110a7e&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Software Engineer - Developer Productivity",
      "company": "Pegasystems",
      "urls": "https://pl.indeed.com//rc/clk?jk=fb197a9f582e0bb8&fccid=1b567d66763b30ee&vjs=3"
    },
    {
      "name": "Senior C# Developer",
      "company": "Verita HR Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=52c17df4e65aad8f&fccid=e265b982603f34bc&vjs=3"
    },
    {
      "name": "Senior .NET Developer interested in e-commerce",
      "company": "Columbus",
      "urls": "https://pl.indeed.com//rc/clk?jk=6720b8b2c62254ce&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Senior C++/UE4 Software Developer",
      "company": "Sperasoft",
      "urls": "https://pl.indeed.com//rc/clk?jk=3f2ff4a02e96a4b8&fccid=72575fa3d1ce8c23&vjs=3"
    },
    {
      "name": "Unity Developer NOWA",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=5821fd7c8edaa4b6&fccid=503ed6c94c8786f6&vjs=3"
    },
    {
      "name": "Senior SW Test Developer",
      "company": "Nordic Semiconductor",
      "urls": "https://pl.indeed.com//rc/clk?jk=fb9e906eb4e2477d&fccid=d468e34edcbad731&vjs=3"
    },
    {
      "name": "Senior SQL//VBA/Coric developer",
      "company": "Luxoft Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=31adeec521c28893&fccid=8f1b5b8da4c009f1&vjs=3"
    },
    {
      "name": "Senior Java Developer",
      "company": "SolarWinds",
      "urls": "https://pl.indeed.com//rc/clk?jk=6526d6eed334c475&fccid=8fac7c785ef64f5e&vjs=3"
    },
    {
      "name": "Senior .Net Developer",
      "company": "Luxoft Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=cb09515a56849333&fccid=8f1b5b8da4c009f1&vjs=3"
    },
    {
      "name": "Mid/Senior Front-end developer (React)",
      "company": "British Pearl",
      "urls": "https://pl.indeed.com//rc/clk?jk=c4fb471c6066e62d&fccid=42ad542846f2fdc4&vjs=3"
    },
    {
      "name": "Senior Front-End Developer (Angular)",
      "company": "Sperasoft",
      "urls": "https://pl.indeed.com//rc/clk?jk=33985f3223f960bc&fccid=72575fa3d1ce8c23&vjs=3"
    },
    {
      "name": "C# Azure Developer for ABB Marine",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=3e5d6b58db40c1a5&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=e60f52063a358e4d&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Programista WEB / WEB Developer / JavaScript",
      "company": "Talent",
      "urls": "https://pl.indeed.com//rc/clk?jk=2680591648117a21&fccid=869725dc34bbb516&vjs=3"
    },
    {
      "name": "Regular or Senior Java Developer",
      "company": "Verita HR Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=cae688964a729524&fccid=e265b982603f34bc&vjs=3"
    },
    {
      "name": "Senior Java Developer",
      "company": "Luxoft Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=98f140d78d5c861d&fccid=8f1b5b8da4c009f1&vjs=3"
    },
    {
      "name": "Senior C++ Game Engine Developer",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com//rc/clk?jk=b4c805aa2f542eac&fccid=c26d104f25f1364f&vjs=3"
    },
    {
      "name": "QA Engineer (Mobile Apps)",
      "company": "Luxoft Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=6c4b27456fe79c05&fccid=8f1b5b8da4c009f1&vjs=3"
    },
    {
      "name": "UE4/C++ Software Developer",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com//rc/clk?jk=34ff09ac29e580a2&fccid=c26d104f25f1364f&vjs=3"
    },
    {
      "name": "Lead KDB/Q Developer",
      "company": "Luxoft Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=949b6d6a5d2beea7&fccid=8f1b5b8da4c009f1&vjs=3"
    },
    {
      "name": "Rendering Software Developer",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com//rc/clk?jk=543335685ca43dc0&fccid=c26d104f25f1364f&vjs=3"
    },
    {
      "name": "Sr Java Developer- NetEnt Live (back-end/platform)",
      "company": "NetEnt",
      "urls": "https://pl.indeed.com//rc/clk?jk=65bd51100a25331c&fccid=594e59f84614d19c&vjs=3"
    },
    {
      "name": "Senior C++/UE4 Software Developer",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com//rc/clk?jk=935d5f2e38592a67&fccid=c26d104f25f1364f&vjs=3"
    },
    {
      "name": "Senior FE Developer (Angular) with UX experience",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com//rc/clk?jk=874cd0439c8dbb8f&fccid=c26d104f25f1364f&vjs=3"
    }
  ],
  "160": [
    {
      "name": "Menadżer IT plus eCommerce",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcl7SaLP_MpaOcC0R1fREk1o9tOKV_PSlZgoYyESvbDEc98tycvB0Ry408scwOFYAiwNaCggxKhWhkZhVFIaAhg1WF83KVo-WfgnmF0Kt0H3aK-eqAwaCFJL2PCSwECjCaVUOMSYUxCgGDuWl4HJ6fEzKCF8cDKmupKyv2H56EyriNxoeBAiJMK5tyH9TGhgdzGj06jMqCtp4U42PNzTMjikM2zJUdw6XZwyQF64IQxIvNI033-6ebeU81O9ecC_ynD-SZ8qcTCmVtpJT5YrJKTh5FpuHPo5Utru72aYA88ozfWIhpDtIuJjc58W46hhC7cUdUQr9KY3XvkGOjbb6PM0BynSQ6rPVoIUS0AZFsc5ghRvMxGcHoHlwq-YN8wxAAdHU0iCdhBAKtfjqfnFoSHSQgvCToHm1VPefYJ-7AF_vT7bjaejWNQnIkLhYPKt4N-ZSU4j1_BPaEL1L-VVI9gyuJoqLOnRCpfmx0kwQwivqw6mZlbf7XQFYHC-mFJ1ghvlWRk8ufyN7P7muSG0BsPpysWRYyYYHomdWLAgnyxnPrMmNcwm1LGwYkaqTa6sJ1Jy_hOIDjs4P8WA5pqa-yRBuXbOQC34AMQZQyRIULuXjXURA__GFmaERWzQSqfR6ZlSN_73sf0HC8kOOvop3TMYpiCRIk-ahM=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Specjalista ds. Procesów Magazynowych",
      "company": "FIEGE Logistik Stiftung & Co. KG",
      "urls": "https://pl.indeed.com//rc/clk?jk=ad5637f900265eef&fccid=c21abee0de715f4a&vjs=3"
    },
    {
      "name": "Junior IT Project Manager",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=2e41d83352ae3142&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Kierownik projektu IT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=fc4d070c679ac3ee&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Account Manager",
      "company": "Shoper",
      "urls": "https://pl.indeed.com//rc/clk?jk=2fcbf82d7f5288d0&fccid=49e74efc00a52447&vjs=3"
    },
    {
      "name": "Młodszy kierownik projektu",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=98fc311dd0e49999&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Administrator Systemu Windows",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com//rc/clk?jk=18644513f89f8584&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Senior .Net",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com//rc/clk?jk=d4077fa00ea254a3&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Programista C embedded",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com//rc/clk?jk=3cc3f8784b0e4603&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Tester .Net",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com//rc/clk?jk=5774b8d562de52f1&fccid=45c7d019cc96de8e&vjs=3"
    }
  ],
  "161": [
    {
      "name": "Developer hurtowni danych i procesów ETL",
      "company": "TAURON Obsługa Klienta sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=41b46dd738ac971e&fccid=ea7ff02b118a8686&vjs=3"
    }
  ],
  "162": [
    {
      "name": "Chemik - Analityk",
      "company": "Fagron",
      "urls": "https://pl.indeed.com//rc/clk?jk=e8bdaffe45ca143e&fccid=2e783b99e903700c&vjs=3"
    },
    {
      "name": "Trener Wewnętrzny",
      "company": "Shoper",
      "urls": "https://pl.indeed.com//rc/clk?jk=cf58d1f369365be6&fccid=49e74efc00a52447&vjs=3"
    },
    {
      "name": "Specjalista ds. Marketingu i PR",
      "company": "FiberLink",
      "urls": "https://pl.indeed.com//rc/clk?jk=6638adf262b414f4&fccid=c72cb3bd11befc58&vjs=3"
    },
    {
      "name": "Chemik-Analityk",
      "company": "Fagron sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=bc975d87ec77a43f&fccid=97a7ff87a28d46e9&vjs=3"
    },
    {
      "name": "Młodszy redaktor Głosu Seniora",
      "company": "Stowarzyszenie Manko",
      "urls": "https://pl.indeed.com//rc/clk?jk=d100a78f03b99569&fccid=d6f2dc62b6541590&vjs=3"
    },
    {
      "name": "Główny Technolog",
      "company": "HRWISE",
      "urls": "https://pl.indeed.com//rc/clk?jk=05cacf566091a547&fccid=e834468dcd30ed28&vjs=3"
    },
    {
      "name": "Praca z językiem francuskim",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=7dac36495597ec92&fccid=31670bef3ae6497b&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=c5ab79c07079aa5f&fccid=59d593c4eb037805&vjs=3"
    },
    {
      "name": "AGENT OCHRONY",
      "company": "Hipermarket Auchan",
      "urls": "https://pl.indeed.com//rc/clk?jk=996c4f56faac24ae&fccid=591ff26ed17ce192&vjs=3"
    },
    {
      "name": "Opiekun/Opiekunka Medyczny/Medyczna",
      "company": "Scanmed S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=534248c88c23fd92&fccid=5baf87fca2a86ad0&vjs=3"
    },
    {
      "name": "inspektor",
      "company": "Kancelaria Prezesa Rady Ministrów",
      "urls": "https://pl.indeed.com//rc/clk?jk=640383fea1ae4d42&fccid=5565c12aed7d6662&vjs=3"
    },
    {
      "name": "Specjalista ds. obsługi klienta z językiem fińskim",
      "company": "Elefanco Sp. z o. o.",
      "urls": "https://pl.indeed.com//company/Elefanco-Sp.-z-o.-o./jobs/Specjalista-Do-Spraw-Obs%C5%82ugi-Klienta-Z-J%C4%99zykiem-Fi%C5%84skim-b6c24f62f951da6a?fccid=644317124a048cc5&vjs=3"
    },
    {
      "name": "Project manager/Koordynator projektu",
      "company": "Agencja Harmonic",
      "urls": "https://pl.indeed.com//rc/clk?jk=307043beeac6b2aa&fccid=c9d938964f9d001d&vjs=3"
    },
    {
      "name": "Wychowawca kolonijny",
      "company": "English Immersion American Camps",
      "urls": "https://pl.indeed.com//company/English-Immersion-American-Camps/jobs/Wychowawca-Kolonijny-4e632dc8786d453c?fccid=135bd608892caf6e&vjs=3"
    },
    {
      "name": "Specjalista ds. obsługi klienta z językiem czeskim/słowackim",
      "company": "Elefanco Sp. z o. o.",
      "urls": "https://pl.indeed.com//company/Elefanco-Sp.-z-o.-o./jobs/Specjalista-Do-Spraw-Obs%C5%82ugi-Klienta-Z-J%C4%99zykiem-Czeskim-S%C5%82owackim-edd1c22ff53efe47?fccid=644317124a048cc5&vjs=3"
    },
    {
      "name": "Kierownik Robót Drogowych lub Torowych/Inżynier Budowy",
      "company": "KZN RAIL Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=fe99701bd1cf7c37&fccid=be21bffde79d2ca7&vjs=3"
    },
    {
      "name": "AGENCJA NIANIA z POWOŁANIA zaprasza szukające pracy Nianie",
      "company": "NIANIA z POWOŁANIA",
      "urls": "https://pl.indeed.com//rc/clk?jk=9a8b06857ae4efdb&fccid=e9dbfd3fc0c21bdc&vjs=3"
    },
    {
      "name": "Specjalista ds. komunikacji",
      "company": "Eurovia Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=8865b386b0e44f0c&fccid=6df22a29a2de0162&vjs=3"
    },
    {
      "name": "Specjalista ds. systemu zarządzania",
      "company": "Eurovia Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=f281babe523d5627&fccid=6df22a29a2de0162&vjs=3"
    },
    {
      "name": "Cloud Sales Specialist - praca zdalna",
      "company": "Fly on the cloud",
      "urls": "https://pl.indeed.com//rc/clk?jk=fd6556889f8eb894&fccid=ca95fa460a86e499&vjs=3"
    },
    {
      "name": "Senior Engineer - Zscaler",
      "company": "NEXT TECHNOLOGY PROFESSIONALS SPÓŁKA Z OGRANICZONĄ...",
      "urls": "https://pl.indeed.com//rc/clk?jk=62cb83177c4aaaf4&fccid=cf2c9f69c3e83d61&vjs=3"
    },
    {
      "name": "Elektromechanik",
      "company": "LafargeHolcim",
      "urls": "https://pl.indeed.com//company/LafargeHolcim/jobs/Elektromechanik-fd4d5d0b77e928d7?fccid=7618bab885a58aa7&vjs=3"
    },
    {
      "name": "Network Designer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=233bc43d4a0c3cc6&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Wordpress Developer",
      "company": "Amsterdam Standard Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=bce63c99351ac966&fccid=fb1b22023a56f66a&vjs=3"
    },
    {
      "name": "Inżynier sprzedaży systemów bezpieczeństwa przemysłowego",
      "company": "GRUPA WOLFF",
      "urls": "https://pl.indeed.com//rc/clk?jk=d85a4988a3bbd086&fccid=3d99fb61e9e62f24&vjs=3"
    },
    {
      "name": "Menadżer IT plus eCommerce NOWA",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=588a10cfd05ac937&fccid=503ed6c94c8786f6&vjs=3"
    },
    {
      "name": "Przedstawiciel handlowy / Handlowiec / Business Development...",
      "company": "Futurum Technology Ltd.",
      "urls": "https://pl.indeed.com//rc/clk?jk=580e48f49f7a4bc6&fccid=228edc79f2ff9b7a&vjs=3"
    },
    {
      "name": "Menadżer IT plus eCommerce",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcl7SaLP_MpaOcC0R1fREk1o9tOKV_PSlZgoYyESvbDEc98tycvB0Ry408scwOFYAiwNaCggxKhWhkZhVFIaAhg8u-VWAaUUvJLXzD8ZfCvhKQqm6qy7G2cEGYJ9rT9IJGXnH5gL45fna422EV8e8fGrOFkR5GL2ccTOz79dYfH7i1nipmEwg8Tq6zsaOZLwbebD_E8nmzEEIz0AgpXYwZvGvGoAx2l-Um6SwVZ9CbCeaDANQkYxBiDO0OWtsGqzFpqd85i7zO_7VGrAC_gMF_jDYnX6czvcyRCkso9_Yvb7GHpuNAQyqfWZQU7WcneLi-WEnQLao6TJc1lB47-N0b3K3EH-sP799iGy8Tu5d9tRiEtWFMYaS7yBAunFTS-l0Rr46Ik-MRxKCN9HcKPLofQ_duNtmt5r3Q6fbMPf0HFczKlmbnzADXZiXX-exXlkrVHMHMVDTLeF3kIKrxj2dTnvVYOnEHJ8QB6DGb1w9v_veoizFotP8D_1SR5vyAKxTCF7ZDNkvqiUAjdiHt924VAt6DqQjgcAUjRJ4-COlZCfFjnvt2n4xo1Ui7ILjwAy51uKkp0YW7CC45KUwy1uI9PsuabwHs-8G7Y0FVUq7v4vXjZkmaq9-eQPx_gXXaJ5c4ATUHGzkeg47HXD9JfFYy_&p=10&fvj=0&vjs=3"
    },
    {
      "name": "Szukam kochającej dzieci niani dla 4 letniego synka! - Krakó...",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com//rc/clk?jk=8bffd0772830087e&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Full stack Python Developer",
      "company": "OnWelo",
      "urls": "https://pl.indeed.com//rc/clk?jk=25ecc715ae546e6e&fccid=f0576bc2d3ad81bd&vjs=3"
    },
    {
      "name": "Full-Stack Developer | React, Node.js",
      "company": "Jcommerce",
      "urls": "https://pl.indeed.com//rc/clk?jk=01fd8fe3d05d0a53&fccid=99a536694443ad83&vjs=3"
    },
    {
      "name": "Programista Systemów audiowizualnych / CRESTRON",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com//rc/clk?jk=97f5a0f322033bad&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Specjalista ds. bezpieczeństwa IT - Pentester",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=24eedc38ba74a46d&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Core Software Engineer",
      "company": "ESET",
      "urls": "https://pl.indeed.com//rc/clk?jk=679d04578bab853a&fccid=8e1474db6974999b&vjs=3"
    },
    {
      "name": "Kierownik Projektu (Contact Center)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=77d3d8045b8d70e3&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "DevOps Engineer",
      "company": "AUTENTI Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=e04b9be8f24aaf24&fccid=5fc90b16cbf43e55&vjs=3"
    },
    {
      "name": "Senior iOS Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=f2c79a96074148e7&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Inżynier ds. Testów",
      "company": "Grupa Unity",
      "urls": "https://pl.indeed.com//rc/clk?jk=1f2ed1cc4252a137&fccid=9a34138d512ebeaf&vjs=3"
    },
    {
      "name": "Full Stack JavaScript node.js/react developer",
      "company": "NBC Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=ce2f0c70d0e5cce6&fccid=2f45a6829d6c88f6&vjs=3"
    },
    {
      "name": "Administrator Systemowo-Sieciowy",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=f48d068553c6e9d6&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Pilot Turystyczny/Kierownik Turystyczny",
      "company": "Poltur Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=60e4be1302387e9d&fccid=91af239b1666ea7e&vjs=3"
    },
    {
      "name": "SysOps / DevOps",
      "company": "Sky Shop",
      "urls": "https://pl.indeed.com//rc/clk?jk=16fb8082519ca0a1&fccid=1772abda90a2c59d&vjs=3"
    },
    {
      "name": "Cieśla – stolarz (zakład prefabrykacji)",
      "company": "Exbud Konstrukcje",
      "urls": "https://pl.indeed.com//rc/clk?jk=43c911afc457cf2e&fccid=ee8699c4d4b9889c&vjs=3"
    },
    {
      "name": "Senior Network Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=bb0af94e2bcc84b1&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Fullstack Developer",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com//rc/clk?jk=d663cc7049b01d6a&fccid=4fcb59d2ba8f65d1&vjs=3"
    },
    {
      "name": "System Configuration Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=f1ca667f6be02989&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Full-Stack Developer (PHP)",
      "company": "Dotlinkers",
      "urls": "https://pl.indeed.com//rc/clk?jk=df048f3e979c321e&fccid=c62351057abf05f6&vjs=3"
    },
    {
      "name": "Inżynier sieci / Network Engineer - Kraków",
      "company": "FRG Technology Consulting",
      "urls": "https://pl.indeed.com//rc/clk?jk=20e6d13e23b4bf6a&fccid=79a4f894c1383f39&vjs=3"
    },
    {
      "name": "Network Engineer / Inżynier sieci",
      "company": "FRG Technology Consulting",
      "urls": "https://pl.indeed.com//rc/clk?jk=8e4724c72dd3e0f9&fccid=79a4f894c1383f39&vjs=3"
    },
    {
      "name": "Inżynier sieci, Network Engineer",
      "company": "Dynamics Jobs",
      "urls": "https://pl.indeed.com//rc/clk?jk=7d6046df99c179ce&fccid=e7223e3ece47a796&vjs=3"
    },
    {
      "name": "Network Engineer, Inżynier sieci",
      "company": "Dynamics Jobs",
      "urls": "https://pl.indeed.com//rc/clk?jk=94e68e21c80930c6&fccid=e7223e3ece47a796&vjs=3"
    },
    {
      "name": "Network Engineer / Inżynier sieci",
      "company": "Washington Frank",
      "urls": "https://pl.indeed.com//rc/clk?jk=5fcad688fe10a7d9&fccid=cb9285e8f83d93f4&vjs=3"
    },
    {
      "name": "Poszukujemy nauczyciela wychowania przedszkolnego, Kraków, G...",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com//rc/clk?jk=3c5d37922ac3f50c&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "DevOps Engineer (Senior)",
      "company": "Edge Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=2668fcd9c6bd2fef&fccid=b18ecb623e949f74&vjs=3"
    },
    {
      "name": "Linux Engineer / DevOps",
      "company": "EuroLinux",
      "urls": "https://pl.indeed.com//rc/clk?jk=8b01b29c719cc453&fccid=d91fbdc82addbd64&vjs=3"
    },
    {
      "name": "C++ Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=47c1a64d70ecbd81&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "JAVA Software Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=821fc79b534c0c18&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Fullstack Java Developer (Spring, Angular)",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=9ea1966a6d7e2882&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "C#/.NET Software Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=e93aa1aa69a78a4f&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "DevOps / Java Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=25d6aad26c03ae89&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "171": [
    {
      "name": "DevOps Engineer",
      "company": "AUTENTI Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=e04b9be8f24aaf24&fccid=5fc90b16cbf43e55&vjs=3"
    }
  ],
  "172": [
    {
      "name": "Inżynier ds. integracji i testowania sieci 4G/5G - KRAKÓW",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=3dc0d8f7a439242b&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Active Safety Systems Engineer",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Systems Engineer - Advanced Safety",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=4ee81201a3beef10&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "DevOps Engineer",
      "company": "Accenture",
      "urls": "https://pl.indeed.com//rc/clk?jk=b948b73b9e7969cd&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Oracle Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=939751af5d5af958&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "173": [
    {
      "name": "Inżynier ds. integracji i testowania sieci 4G/5G - KRAKÓW",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=3dc0d8f7a439242b&fccid=062f71e131e87cf0&vjs=3"
    }
  ],
  "174": [
    {
      "name": "Tester urządzeń medycznych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=a0cad3e097038a81&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista C/C++",
      "company": "AFA Polska Sp. Z O.O.",
      "urls": "https://pl.indeed.com//company/AFA-Polska-Sp.-Z-O.O./jobs/Programista-C-C++-2ec03acf738fb287?fccid=41029eff8c311fca&vjs=3"
    },
    {
      "name": "Firmware Developer",
      "company": "S-Labs",
      "urls": "https://pl.indeed.com//rc/clk?jk=bb00bd7b7f7d3aba&fccid=ce4f4701fb5e9335&vjs=3"
    },
    {
      "name": "Młodszy Programista Java (Telekomunikacja)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=5c9e473ed9230c95&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Technik Instalator Kraków",
      "company": "Electronic Control Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=9189559198aae9be&fccid=9e826fe22370d20d&vjs=3"
    },
    {
      "name": "Inżynier/ Elektryk Projektant E-PLAN",
      "company": "Axamo Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=494a424cfbfab4d1&fccid=f86175c7ba708305&vjs=3"
    }
  ],
  "175": [
    {
      "name": "Inżynier ds. Laboratorium",
      "company": "Nidec",
      "urls": "https://pl.indeed.com//rc/clk?jk=53b0c6ef005c0330&fccid=ab31e8d9e75d2fe7&vjs=3"
    }
  ],
  "176": [],
  "177": [
    {
      "name": "SZWALNIA ZATRUDNI SZWACZKI MASZYNOWE",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com//rc/clk?jk=43f30c67b6ca6522&fccid=dd616958bd9ddc12&vjs=3"
    }
  ],
  "178": [],
  "179": [],
  "180": [],
  "181": [
    {
      "name": "Automatyk-Programista",
      "company": "Frapol",
      "urls": "https://pl.indeed.com//rc/clk?jk=86eb220d2ea80d09&fccid=9c2047b7b01199b2&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=b8884d3fc88b47a5&fccid=4fcb59d2ba8f65d1&vjs=3"
    }
  ],
  "186": [
    {
      "name": "Staż w Zespole R&D, Industrial Designu, Logistyki, IT, Finan...",
      "company": "Green Cell",
      "urls": "https://pl.indeed.com//rc/clk?jk=a8bea13316b4b94e&fccid=7520988c97ff0996&vjs=3"
    },
    {
      "name": "Płatny staż w Zespole R&D, Industrial Design, Prawnym, Finan...",
      "company": "Świat Baterii",
      "urls": "https://pl.indeed.com//rc/clk?jk=2e1540d8c32bb5c8&fccid=88fb836afb9cbe07&vjs=3"
    },
    {
      "name": "Inżynier Automatyk - rekrutacja prowadzona online",
      "company": "Fitech",
      "urls": "https://pl.indeed.com//rc/clk?jk=d8931e2ecdfc3385&fccid=52d48f1974e43ed4&vjs=3"
    }
  ],
  "187": [],
  "188": [
    {
      "name": "C# DEVELOPER",
      "company": "Loycon",
      "urls": "https://pl.indeed.com//rc/clk?jk=7992640fdefd0c02&fccid=7129a6c6479d89d1&vjs=3"
    },
    {
      "name": "EMBEDDED SOFTWARE ENGINEER",
      "company": "Loycon",
      "urls": "https://pl.indeed.com//rc/clk?jk=ea6bcccc13cf9ce4&fccid=7129a6c6479d89d1&vjs=3"
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
      "name": "Technical Project Manager - German Speaker",
      "company": "Merit Poland Sp. z o.o.",
      "urls": "https://www.praca.pl/technical-project-manager-german-speaker_3365180.html#c3465a1e3e55ad12e63a45c23ac18a4e"
    },
    {
      "name": "Automatyk",
      "company": "Bilfinger Industrial Services Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/automatyk_3411550.html#c3465a1e3e55ad12e63a45c23ac18a4e"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3"
    }
  ],
  "204": [
    {
      "name": "PROJEKTANT INSTALACJI FOTOWOLTAICZNEJ",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=9e39e1810c029b8a&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Elektronik/projektant",
      "company": "AMC TECH Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=38e50a4fcae071f9&fccid=9ea9ac0db41cd67b&vjs=3"
    },
    {
      "name": "Projektant - Technolog",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com//rc/clk?jk=d28797d8ccec234f&fccid=5c065c1c92843790&vjs=3"
    },
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Projektant CAD",
      "company": "MONIT SHM",
      "urls": "https://pl.indeed.com//rc/clk?jk=3b03b2349735d6b2&fccid=d9567c6e655060a8&vjs=3"
    },
    {
      "name": "Pracownik produkcji - praca z zamieszkaniem (wielkopolskie,...",
      "company": "Projektanci Kariery",
      "urls": "https://pl.indeed.com//rc/clk?jk=67afcde5971c9a6e&fccid=b65cab7ed2a9ca3b&vjs=3"
    },
    {
      "name": "Projektant w branży elektronergetycznej",
      "company": "MLElectric Sp. z o.o.",
      "urls": "https://pl.indeed.com//company/Mlelectric-Sp.-z-o.o./jobs/Projektant-W-Bran%C5%BCy-Elektronergetycznej-afc44b00e11824a2?fccid=19f4a348bbabfcc0&vjs=3"
    },
    {
      "name": "Projektant",
      "company": "Grupa Projekt",
      "urls": "https://pl.indeed.com//rc/clk?jk=e16befb455fe6d1e&fccid=37607da95fc8dee9&vjs=3"
    },
    {
      "name": "Inżynier/ Elektryk Projektant E-PLAN",
      "company": "Axamo Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=494a424cfbfab4d1&fccid=f86175c7ba708305&vjs=3"
    },
    {
      "name": "Projektant Instalacji Wodnych",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com//rc/clk?jk=e9b178b66a2ccaa7&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Młodszy administrator / serwisant",
      "company": "Softelnet spółka akcyjna sp.k.",
      "urls": "https://pl.indeed.com//rc/clk?jk=c3de9f0405325c9a&fccid=c120232169b76303&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=b2cc3d07a98c79a1&fccid=83800432e0dffe2b&vjs=3"
    },
    {
      "name": "KONSTRUKTOR MASZYN I URZĄDZEŃ",
      "company": "SANT-TECH",
      "urls": "https://pl.indeed.com//rc/clk?jk=7a2e68957957539e&fccid=4cff40bef3e8ba30&vjs=3"
    },
    {
      "name": "Konstruktor CATIA V5",
      "company": "GROS Engineering",
      "urls": "https://pl.indeed.com//rc/clk?jk=5e1f6738935f23bd&fccid=83800432e0dffe2b&vjs=3"
    },
    {
      "name": "INŻYNIER KONSTRUKTOR w dziale R&D",
      "company": "EC Engineering",
      "urls": "https://pl.indeed.com//rc/clk?jk=c3afdef0a16e8ffd&fccid=dd2bc65880e72b4a&vjs=3"
    },
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Konstruktor",
      "company": "Bamet",
      "urls": "https://pl.indeed.com//rc/clk?jk=7d5976e66bee868c&fccid=55f842c9b66dbe5b&vjs=3"
    },
    {
      "name": "Inżynier konstruktor hardware",
      "company": "dataconsult",
      "urls": "https://pl.indeed.com//rc/clk?jk=15df3a55808d8f83&fccid=45d5bb47777eab56&vjs=3"
    },
    {
      "name": "KONSTRUKTOR CAD",
      "company": "NEWAG GROUP",
      "urls": "https://pl.indeed.com//rc/clk?jk=1a2ae86b043ab153&fccid=b1b38fabe5e92cf0&vjs=3"
    },
    {
      "name": "Konstruktor Elektronik",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Konstruktor",
      "company": "Arche Consulting",
      "urls": "https://pl.indeed.com//rc/clk?jk=a042c6832bf9f7aa&fccid=c665c35cf349dff1&vjs=3"
    }
  ],
  "207": [
    {
      "name": "Inżynier Niezawodności",
      "company": "HRWISE",
      "urls": "https://pl.indeed.com//rc/clk?jk=7f83c74c7de57131&fccid=e834468dcd30ed28&vjs=3"
    }
  ],
  "208": [],
  "209": [],
  "210": [],
  "211": [
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
      "name": "CE Digital Learning Design Manager",
      "company": "Tesco Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/ce-digital-learning-design-manager_3383684.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3415642.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Architekt",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/architekt_3405096.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Koordynator projektu [rekrutacja online]",
      "company": "HERKULES  S.A.",
      "urls": "https://www.praca.pl/koordynator-projektu-rekrutacja-online_3407586.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Senior Teradata Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-teradata-developer_3337184.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Integrated Catchment Modeller (InfoWorks ICM)",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/integrated-catchment-modeller-infoworks-icm_3396890.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Młodszy projektant odzieży marki Wólczanka",
      "company": "VRG S.A.",
      "urls": "https://www.praca.pl/mlodszy-projektant-odziezy-marki-wolczanka_3368456.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Asystent Projektanta Mostowego",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/asystent-projektanta-mostowego_3391896.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Asystent Projektanta [rekrutacja online]",
      "company": "Impel Tech Solutions Sp. Z o.o. Sp. K",
      "urls": "https://www.praca.pl/asystent-projektanta-rekrutacja-online_3332022.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Projektant [rekrutacja online]",
      "company": "Impel Tech Solutions Sp. Z o.o. Sp. K",
      "urls": "https://www.praca.pl/projektant-rekrutacja-online_3332068.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Projektant Mostowy",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-mostowy_3391892.html#b88b03819a9dfb57bab9964aaadd03a3"
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
      "name": "Teradata Technical Analyst ",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/teradata-technical-analyst_3337152.html#269c3ee803dee6dedf08d2382347530c"
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
      "name": "Dyrektor Techniczno - Operacyjny",
      "company": "Sunday Polska",
      "urls": "https://pl.indeed.com//company/Sunday-Polska/jobs/Dyrektor-Techniczno-5e8415e34d4d91fb?fccid=9becebd58292bc7c&vjs=3"
    },
    {
      "name": "Młodszy Koordynator Operacyjny",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=b66c7ff9f63fa7b3&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Projektant PV",
      "company": "Standard Power Development Sp. z o.o. I Sp. k.",
      "urls": "https://pl.indeed.com//company/Standard-Power-Development-Sp.-z-o.o.-I-Sp.-k./jobs/Projektant-Pv-6852b6a537f0a2ea?fccid=c6c5923a3b20f069&vjs=3"
    },
    {
      "name": "Monter instalacji fotowoltaicznych",
      "company": "OZE TEAM",
      "urls": "https://pl.indeed.com//rc/clk?jk=dd17d79ce695867f&fccid=05a14b789a2a80a9&vjs=3"
    },
    {
      "name": "Elektryka lub/i montera instalacji grzewczych OZE",
      "company": "ECO-TECHNIKA Piotr Dunas",
      "urls": "https://pl.indeed.com//rc/clk?jk=d45df006c66a91cd&fccid=0991c0a1f1fdf628&vjs=3"
    },
    {
      "name": "Doradca Energetyczny ds. fotowoltaiki",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=3da517f5b6b5a3a4&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Konsultant ds. realizacji",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=33f285a610ec0c64&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Przedstawiciel Handlowy ds. Fotowoltaiki (B2B)",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=db6cf90593a8d111&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Monter instalacji fotowoltaicznych",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=f86bb269d7d12e01&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Project Manager Farm PV",
      "company": "Sunday Polska",
      "urls": "https://pl.indeed.com//company/Sunday-Polska/jobs/Project-Manager-Farm-Pv-9a7554fb4e6c141e?fccid=9becebd58292bc7c&vjs=3"
    },
    {
      "name": "Kierownik Robót Sanitarnych",
      "company": "Sunday Polska",
      "urls": "https://pl.indeed.com//company/Sunday-Polska/jobs/Kierownik-Rob%C3%B3t-Sanitarnych-eb990ab33782d700?fccid=9becebd58292bc7c&vjs=3"
    },
    {
      "name": "Dyrektor ds Sprzedaży | Regionu Południe | PV",
      "company": "Kelly Services",
      "urls": "https://pl.indeed.com//rc/clk?jk=5c2b7fd4bafec090&fccid=26a0583287ba1940&vjs=3"
    },
    {
      "name": "Dyrektor ds Sprzedaży | Regionu Południe | PV",
      "company": "Kelly Services PL",
      "urls": "https://pl.indeed.com//rc/clk?jk=28f15d9891e16360&fccid=26a0583287ba1940&vjs=3"
    },
    {
      "name": "Doradca Energetyczny – Przedstawiciel ds. Fotowoltaiki",
      "company": "Hymon Energy Sp z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=f8ee21d7e6363eef&fccid=2da66c87c199269b&vjs=3"
    },
    {
      "name": "Senior Engineer (Renewable Energy)",
      "company": "Devire",
      "urls": "https://pl.indeed.com//rc/clk?jk=49b765392196258d&fccid=dac7798bc9cb142c&vjs=3"
    },
    {
      "name": "Doradca sprzedaży instalacji fotowoltaicznych",
      "company": "H4H Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=c57b6d08798e2dfd&fccid=4f9cb417d6f6258b&vjs=3"
    }
  ],
  "214": [],
  "215": [
    {
      "name": "Administrator systemów Linux",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com//rc/clk?jk=d4c9c5f23fa99f77&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=8b9014a2145ea0aa&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Młodszy administrator / serwisant",
      "company": "Softelnet spółka akcyjna sp.k.",
      "urls": "https://pl.indeed.com//rc/clk?jk=c3de9f0405325c9a&fccid=c120232169b76303&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=a492ba147eec7a28&fccid=9ba243eceb908812&vjs=3"
    },
    {
      "name": "Geodeta",
      "company": "Grupa Geofusion Sp. z o. o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=e611db10bf29ed0f&fccid=f6b17eee343803a9&vjs=3"
    }
  ],
  "222": [
    {
      "name": "Umowa o pracę",
      "company": "Grupa Geofusion",
      "urls": "https://pl.indeed.com//rc/clk?jk=a492ba147eec7a28&fccid=9ba243eceb908812&vjs=3"
    },
    {
      "name": "Geodeta",
      "company": "Grupa Geofusion Sp. z o. o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=e611db10bf29ed0f&fccid=f6b17eee343803a9&vjs=3"
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
      "name": "Architekt",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/architekt_3405096.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Brygadzista robót elektrycznych [rekrutacja online]",
      "company": "Synago Małgorzata Jankowska",
      "urls": "https://www.praca.pl/brygadzista-robot-elektrycznych-rekrutacja-online_3405072.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Pracownik do robót ogólnobudowlanych (także ekipa)",
      "company": "J. Cezar Sp. z o.o.",
      "urls": "https://www.praca.pl/pracownik-do-robot-ogolnobudowlanych-takze-ekipa_3376716.html#0e2a990a13378c31c963f05cff55ac1d"
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
      "name": "Monter sieci / Pomocnik operatora wiertnicy",
      "company": "NAWITEL SP. Z O. O.",
      "urls": "https://www.praca.pl/monter-sieci-pomocnik-operatora-wiertnicy_3415968.html#0e2a990a13378c31c963f05cff55ac1d"
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
      "name": "Geodeta / Inżynier Budowy",
      "company": "GruntBudowa",
      "urls": "https://www.praca.pl/geodeta-inzynier-budowy_3355898.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Pomocnik - Monter instalacji fotowoltaicznych [rekrutacja online]",
      "company": "Charlie works Sp. z o.o.",
      "urls": "https://www.praca.pl/pomocnik-monter-instalacji-fotowoltaicznych-rekrutacja-online_3334088.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik Projektu / Project Manager branża budownictwa ogólnego",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-projektu-project-manager-branza-budownictwa-ogolnego_3369996.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik robót drogowych i torowych (infrastruktura miejska)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-drogowych-i-torowych-infrastruktura-miejska_3385908.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Pracownik Ogólnobudowlany",
      "company": "BBR Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/pracownik-ogolnobudowlany_3398740.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik Robót Sprężalniczych",
      "company": "BBR Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/kierownik-robot-sprezalniczych_3398774.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Przedstawiciel Wykonawcy ",
      "company": "NES Global Talent",
      "urls": "https://www.praca.pl/przedstawiciel-wykonawcy_3399128.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Kierownik Robót Mostowych",
      "company": "Primost Południe Sp. z o.o.",
      "urls": "https://www.praca.pl/kierownik-robot-mostowych_3417020.html#0e2a990a13378c31c963f05cff55ac1d"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=072ae257db6a8cef&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "PLANISTA/ WDROŻENIOWIEC SYSTEMÓW OPARTYCH NA QGIS ORAZ CAD",
      "company": "GLOBAL SOFTELNET",
      "urls": "https://pl.indeed.com//rc/clk?jk=60c8b70adc91d110&fccid=87f74a987fba589f&vjs=3"
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
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen-systemow-analitycznych_3405276.html#a6045400a5350d622fc87d8e09c4177f"
    },
    {
      "name": "Senior NLP / AI Data Scientist",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-nlp-ai-data-scientist_3382962.html#a6045400a5350d622fc87d8e09c4177f"
    }
  ],
  "248": [
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
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
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
      "name": "Senior Process Engineering Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-process-engineering-analyst_3396702.html#11723b3082ffeaefebb47759d4100709"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#11723b3082ffeaefebb47759d4100709"
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
      "name": "Monitoring Architect ",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/monitoring-architect_3406776.html#6df9b2ae561bff7346a0d9ee4f5acf22"
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
      "name": "Digital Workplace Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/digital-workplace-architect_3406640.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Cloud Automation Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-automation-architect_3406644.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Office 365 Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/office-365-architect_3406648.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Microsoft Solutions Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/microsoft-solutions-architect_3406654.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Key Account Manager",
      "company": "Eurocash S.A.",
      "urls": "https://www.praca.pl/key-account-manager_3411412.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "IT Specialist (Senior Analyst) (L2 Support) with English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-specialist-senior-analyst-l2-support-with-english_3389752.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://www.praca.pl/administrator-it-specjalista-it_3399002.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Przedstawiciel Handlowy - Ogrodzenia / kanał B2B",
      "company": "Work & Business Solutions",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy-ogrodzenia-kanal-b2b_3394316.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Monter sieci / Pomocnik operatora wiertnicy",
      "company": "NAWITEL SP. Z O. O.",
      "urls": "https://www.praca.pl/monter-sieci-pomocnik-operatora-wiertnicy_3415968.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Doradca Biznesowy sieci PLAY [Rekrutacja prowadzona online]",
      "company": "m-PLAY",
      "urls": "https://www.praca.pl/doradca-biznesowy-sieci-play-rekrutacja-prowadzona-online_3385438.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Monter",
      "company": "JT S.A.",
      "urls": "https://www.praca.pl/monter_3336922.html#6df9b2ae561bff7346a0d9ee4f5acf22"
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
      "name": "Project Management Officer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/project-management-officer_3388214.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Kierownik robót elektrycznych ",
      "company": "TRAKCJA PRKiI S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-elektrycznych_3372304.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Specjalista ds. kosztorysowania (sieci sanitarne)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-kosztorysowania-sieci-sanitarne_3417220.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Kierownik robót ds. elektroenergetycznych (kolejowa sieć trakcyjna)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-ds-elektroenergetycznych-kolejowa-siec-trakcyjna_3417244.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "L 1 Security Engineer ",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/l-1-security-engineer_3355836.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Linux Platform Engineer",
      "company": "Power Media",
      "urls": "https://www.praca.pl/linux-platform-engineer_3386258.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Video Solutions Firmware Senior Test Engineer (Python) [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/video-solutions-firmware-senior-test-engineer-python-rekrutacja-online_3416964.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    }
  ],
  "252": [
    {
      "name": "Media i PR Manager",
      "company": "Lobo HR",
      "urls": "https://pl.indeed.com//rc/clk?jk=25d0f028f0654622&fccid=42ea513863db8ce0&vjs=3"
    },
    {
      "name": "Marketing Manager",
      "company": "Lobo HR",
      "urls": "https://pl.indeed.com//rc/clk?jk=3ffb91d4052eaf76&fccid=42ea513863db8ce0&vjs=3"
    },
    {
      "name": "Project Manager IT",
      "company": "Lobo HR",
      "urls": "https://pl.indeed.com//rc/clk?jk=b9def007cb27cbe3&fccid=42ea513863db8ce0&vjs=3"
    }
  ],
  "253": [
    {
      "name": "Delivery Manager",
      "company": "j-labs",
      "urls": "https://pl.indeed.com//rc/clk?jk=b2aa9eeada8b4637&fccid=a4750d1f1c80cb70&vjs=3"
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
      "name": "Video Solutions - Media Streaming Expert [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/video-solutions-media-streaming-expert-rekrutacja-online_3378106.html#192bc54349cbae22e6fdd9549a384c0d"
    },
    {
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen-systemow-analitycznych_3405276.html#192bc54349cbae22e6fdd9549a384c0d"
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
      "name": "PROJEKTANT INSTALACJI FOTOWOLTAICZNEJ",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=9e39e1810c029b8a&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Elektronik/projektant",
      "company": "AMC TECH Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=38e50a4fcae071f9&fccid=9ea9ac0db41cd67b&vjs=3"
    },
    {
      "name": "Projektant - Technolog",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com//rc/clk?jk=d28797d8ccec234f&fccid=5c065c1c92843790&vjs=3"
    },
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Projektant CAD",
      "company": "MONIT SHM",
      "urls": "https://pl.indeed.com//rc/clk?jk=3b03b2349735d6b2&fccid=d9567c6e655060a8&vjs=3"
    },
    {
      "name": "Pracownik produkcji - praca z zamieszkaniem (wielkopolskie,...",
      "company": "Projektanci Kariery",
      "urls": "https://pl.indeed.com//rc/clk?jk=67afcde5971c9a6e&fccid=b65cab7ed2a9ca3b&vjs=3"
    },
    {
      "name": "Projektant w branży elektronergetycznej",
      "company": "MLElectric Sp. z o.o.",
      "urls": "https://pl.indeed.com//company/Mlelectric-Sp.-z-o.o./jobs/Projektant-W-Bran%C5%BCy-Elektronergetycznej-afc44b00e11824a2?fccid=19f4a348bbabfcc0&vjs=3"
    },
    {
      "name": "Projektant",
      "company": "Grupa Projekt",
      "urls": "https://pl.indeed.com//rc/clk?jk=e16befb455fe6d1e&fccid=37607da95fc8dee9&vjs=3"
    },
    {
      "name": "Inżynier/ Elektryk Projektant E-PLAN",
      "company": "Axamo Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=494a424cfbfab4d1&fccid=f86175c7ba708305&vjs=3"
    },
    {
      "name": "Projektant Instalacji Wodnych",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com//rc/clk?jk=e9b178b66a2ccaa7&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Młodszy administrator / serwisant",
      "company": "Softelnet spółka akcyjna sp.k.",
      "urls": "https://pl.indeed.com//rc/clk?jk=c3de9f0405325c9a&fccid=c120232169b76303&vjs=3"
    }
  ],
  "259": [],
  "260": [],
  "261": [],
  "262": [],
  "263": [],
  "264": [],
  "265": [
    {
      "name": "specjalisty ( (lub osoby do przyuczenia) na stanowisko pracy...",
      "company": "Hydraulik Kraków",
      "urls": "https://pl.indeed.com//rc/clk?jk=eb440ffecb4842ac&fccid=c05df9b424a26d27&vjs=3"
    }
  ],
  "266": [],
  "267": [
    {
      "name": "Asystent specjalisty Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=dc8e82ea96d316d6&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Specjalista Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=8447c63c8105e086&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Referent ds. logistyki odpadów specjalnyc",
      "company": "REMONDIS Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=cdbbed117d36ce4b&fccid=e18a11f1af6d217e&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Ochrony Środowiska...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=315cad0381ee06a8&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Specjalista ds. BHP i ochrony środowiska",
      "company": "Kolejowe Zakłady Nawierzchniowe",
      "urls": "https://pl.indeed.com//rc/clk?jk=5a141607248b0fc1&fccid=640acb9e5c3b5646&vjs=3"
    },
    {
      "name": "Projektant Architektury Krajobrazu",
      "company": "Park-M",
      "urls": "https://pl.indeed.com//rc/clk?jk=aa4cd446002a2698&fccid=9820092e2d13814c&vjs=3"
    },
    {
      "name": "GEODETA/Specjalista ds. detekcji infrastruktury podziemnej",
      "company": "GISonLine",
      "urls": "https://pl.indeed.com//rc/clk?jk=0752b9dea00bed12&fccid=f3a59a13accc2eb6&vjs=3"
    },
    {
      "name": "Pracownik w Sekcji Administracji",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://pl.indeed.com//rc/clk?jk=e5140e2be1bcd905&fccid=dbd17c00e0be7954&vjs=3"
    },
    {
      "name": "GEODETA/Specjalista ds. baz danych GESUT i BDOT",
      "company": "GISonLine",
      "urls": "https://pl.indeed.com//rc/clk?jk=d6ce492234ce6414&fccid=f3a59a13accc2eb6&vjs=3"
    },
    {
      "name": "Specjalista ds. układów kogeneracyjnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=a5f702f39c8819b4&fccid=1cd754675a5b8353&vjs=3"
    }
  ],
  "268": [
    {
      "name": "Konsultant Asysty Technicznej (Telekomunikacja, BSS)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=61e3d7eade51641a&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "ORNITOLOG/PRZYRODNIK",
      "company": "Future Green Innovations",
      "urls": "https://pl.indeed.com//rc/clk?jk=2b0968afbc1faf41&fccid=5981b74173f9ac17&vjs=3"
    },
    {
      "name": "Administrator systemów IT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=875beb0934c9602f&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Koordynator ds. Infrastruktury",
      "company": "HRWISE",
      "urls": "https://pl.indeed.com//rc/clk?jk=8d0b6a1cc2632713&fccid=e834468dcd30ed28&vjs=3"
    }
  ],
  "269": [],
  "270": [],
  "271": [
    {
      "name": "Junior Project Manager / Project Manager – Kraków/Rzeszów",
      "company": "HR Design Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=a1e0b2971ed6e546&fccid=bbb0d4b7a797817a&vjs=3"
    }
  ],
  "272": [],
  "273": [],
  "274": [],
  "275": [
    {
      "name": "Pracownik biurowy",
      "company": "Greifbau",
      "urls": "https://pl.indeed.com//rc/clk?jk=6907b4acb312f882&fccid=39a7f86e54a19f83&vjs=3"
    },
    {
      "name": "Kierownik Sprzedaży usług geotechnicznych",
      "company": "SM Polska Sp. z o.o. S.K.",
      "urls": "https://pl.indeed.com//rc/clk?jk=473a58fc4f4e4109&fccid=7c2f0c51584bdcd6&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=dc8e82ea96d316d6&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Specjalista Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=8447c63c8105e086&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Ochrony Środowiska...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=315cad0381ee06a8&fccid=8ab640d69ddcb83d&vjs=3"
    }
  ],
  "280": [],
  "281": [],
  "282": [],
  "283": [
    {
      "name": "Geodeta [rekrutacja online]",
      "company": "Impel Tech Solutions Sp. Z o.o. Sp. K",
      "urls": "https://www.praca.pl/geodeta-rekrutacja-online_3357264.html#e49c363a49ea008ad82b8057827dcbfb"
    },
    {
      "name": "Geodeta / Inżynier Budowy",
      "company": "GruntBudowa",
      "urls": "https://www.praca.pl/geodeta-inzynier-budowy_3355898.html#e49c363a49ea008ad82b8057827dcbfb"
    },
    {
      "name": "Geodeta",
      "company": "Budimex SA",
      "urls": "https://www.praca.pl/geodeta_3407686.html#e49c363a49ea008ad82b8057827dcbfb"
    },
    {
      "name": "Geodeta",
      "company": "G4 Geodezja Sp. z o.o.",
      "urls": "https://www.praca.pl/geodeta_3406892.html#e49c363a49ea008ad82b8057827dcbfb"
    }
  ],
  "284": [
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
      "name": "Pracownik Biurowy w midzynarodowej organizacji z jzykiem fiskim (m/k) [rekrutacja prowadzona zdalnie]",
      "company": "CPL Jobs Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/pracownik-biurowy-w-miedzynarodowej-organizacji-z-jezykiem-finskim-m-k-rekrutacj-krakow,oferta,1000243220"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=be5a4bfcbeb51cc2&fccid=d81219123eed79f6&vjs=3"
    },
    {
      "name": "stanowisko urzędnicze ds. dochodzenia zwrotu należności",
      "company": "Wojewódzki Urząd Pracy",
      "urls": "https://pl.indeed.com//rc/clk?jk=81350e339fac5205&fccid=bc471191f6853dba&vjs=3"
    },
    {
      "name": "Analityk IT (systemy ERP)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=5fef55ba2379d594&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "286": [
    {
      "name": "Asystent/ka ds. Administracji",
      "company": "Colliers International EMEA",
      "urls": "https://pl.indeed.com//rc/clk?jk=d00f0e53c01bd9b8&fccid=ad9a461c6934bf2c&vjs=3"
    },
    {
      "name": "Administrator nieruchomości mieszkaniowych",
      "company": "PROMOS Sp. z o.o.",
      "urls": "https://pl.indeed.com//company/PROMOS-Facility-Services/jobs/Administrator-Nieruchomo%C5%9Bci-Mieszkaniowych-e5691a9ca97e20c2?fccid=4670259d1e1c248e&vjs=3"
    },
    {
      "name": "Menedżer w Dziale Galerii Handlowych ds. Zarządzania Galeria...",
      "company": "Carrefour",
      "urls": "https://pl.indeed.com//rc/clk?jk=eece2c7d9e166ce8&fccid=669350d87ae4a4a6&vjs=3"
    },
    {
      "name": "Zarządca/Administrator Nieruchomości KRAKÓW",
      "company": "Piotr Bondal",
      "urls": "https://pl.indeed.com//rc/clk?jk=0dab6d83ceb7bb07&fccid=ec7868fb5eee7c1d&vjs=3"
    },
    {
      "name": "ZARZĄDCA NIERUCHOMOŚCI",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com//rc/clk?jk=a9580fd9372fc93a&fccid=dd616958bd9ddc12&vjs=3"
    }
  ],
  "287": [
    {
      "name": "Agent Nieruchomości",
      "company": "Małopolska Grupa Inwestycyjna",
      "urls": "https://pl.indeed.com//rc/clk?jk=65eeb43471e2a18f&fccid=9a225a2dd190d3d8&vjs=3"
    },
    {
      "name": "Specjalista ds. nieruchomości",
      "company": "GET.PL Nieruchomości",
      "urls": "https://pl.indeed.com//rc/clk?jk=b0bb089c1817581e&fccid=f1dbbd5c5d751072&vjs=3"
    },
    {
      "name": "Pośrednik w Obrocie Nieruchomościami / Doradca Klienta / Age...",
      "company": "Metropolia Nieruchomości",
      "urls": "https://pl.indeed.com//rc/clk?jk=61b1f89af2224064&fccid=e96f618ebe1b46d8&vjs=3"
    },
    {
      "name": "Dyrektor ds. rozwoju rynku - finansowanie przedsiębiorców",
      "company": "Monument Support Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=af0492e6b15ab635&fccid=1f0952e23cca8b8c&vjs=3"
    },
    {
      "name": "SPECJALISTA DS. NIERUCHOMOŚCI - ASYSTENT POŚREDNIKA",
      "company": "ALODIA NIERUCHOMOŚCI",
      "urls": "https://pl.indeed.com//rc/clk?jk=53c8c98179486c14&fccid=a616ce5d562b43e0&vjs=3"
    },
    {
      "name": "Pośrednik / Doradca ds. Nieruchomości",
      "company": "GRUPA NIERUCHOMOŚCI KRAKÓW",
      "urls": "https://pl.indeed.com//rc/clk?jk=1c222ef944f9feb8&fccid=6996c5e19b48c9db&vjs=3"
    },
    {
      "name": "POŚREDNIK NIERUCHOMOŚCI",
      "company": "ALODIA NIERUCHOMOŚCI",
      "urls": "https://pl.indeed.com//rc/clk?jk=f6ad2ca5f41d60a4&fccid=a616ce5d562b43e0&vjs=3"
    },
    {
      "name": "Specjalista ds. Sprzedaży",
      "company": "LIVEKID SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "urls": "https://pl.indeed.com//rc/clk?jk=7e21618a9f584da7&fccid=cdcf0761c7478cc8&vjs=3"
    },
    {
      "name": "Doradca Klienta",
      "company": "Phinance S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=80a59ee8cecf4ea1&fccid=14c5790bc3c37481&vjs=3"
    },
    {
      "name": "Koordynator ds. Najmu",
      "company": "MBE sp. zo. o. sk",
      "urls": "https://pl.indeed.com//rc/clk?jk=4716a61627f7db94&fccid=427c831ce3bc873d&vjs=3"
    },
    {
      "name": "Doradca ds. Nieruchomości",
      "company": "PÓŁNOC Nieruchomości Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=f8b8059935969306&fccid=b37c260c5e2c2084&vjs=3"
    },
    {
      "name": "Specjalista ds. Sprzedaży",
      "company": "STOWARZYSZENIE INSTYTUT KOSCIUSZKI",
      "urls": "https://pl.indeed.com//rc/clk?jk=be643eeb423e30d5&fccid=e6b265f5aeb2a147&vjs=3"
    },
    {
      "name": "Sprzedaż usług prawniczych- bez doświadczenia",
      "company": "LEXNONSTOP",
      "urls": "https://pl.indeed.com//rc/clk?jk=49b4fbd64d284694&fccid=3e731c18cdaac904&vjs=3"
    },
    {
      "name": "Junior Reporting Analyst with Spanish",
      "company": "PEPSICO GLOBAL BUSINESS SERVICES POLAND SP Z O O",
      "urls": "https://pl.indeed.com//rc/clk?jk=e79ed36a217c7728&fccid=f313dd74235845bc&vjs=3"
    },
    {
      "name": "Pośrednika lub agenta przyjmę do pracy",
      "company": "Galus Nieruchomości",
      "urls": "https://pl.indeed.com//rc/clk?jk=2513e2ffb8f19300&fccid=7ad28750b843173f&vjs=3"
    },
    {
      "name": "Junior Reporting Analyst with French",
      "company": "PEPSICO GLOBAL BUSINESS SERVICES POLAND SP Z O O",
      "urls": "https://pl.indeed.com//rc/clk?jk=0015939483648f78&fccid=f313dd74235845bc&vjs=3"
    }
  ],
  "288": [],
  "289": [],
  "290": [],
  "291": [
    {
      "name": "STAŻ: Dział Przetwarzania Danych",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=072ae257db6a8cef&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "PRACA: Dział Przetwarzania Danych – Zespół Terenowy",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=b57c65db31653072&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "PRACA: Specjalista ds. sprzedaży systemów GIS",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=72e1402fc1022a52&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "Senior JavaScript Developer",
      "company": "j-labs",
      "urls": "https://pl.indeed.com//rc/clk?jk=c4d6013e661ccd5b&fccid=a4750d1f1c80cb70&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=f62d862eae7aa79e&fccid=dac7798bc9cb142c&vjs=3"
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
      "name": "Nauczyciel / Korepetytor",
      "company": "Moose Polecane Korepetycje Zuzanna Łoś, Marek Łoś Spółka Jawna",
      "urls": "https://www.praca.pl/nauczyciel-korepetytor_3343584.html#8e12ab6f4ef7b3ad6612c7ed841f8383"
    },
    {
      "name": "Nauczyciel przedmiotów ogólnokształcących",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-ogolnoksztalcacych_3372410.html#8e12ab6f4ef7b3ad6612c7ed841f8383"
    }
  ],
  "300": [
    {
      "name": "SPECJALISTA DO SPRAW ZAMÓWIEŃ, LOGISTYKI I OBSŁUGI KLIENTA",
      "company": "MONOstudio",
      "urls": "https://pl.indeed.com//rc/clk?jk=fd1547044be442bc&fccid=f21426e8a7bce1ed&vjs=3"
    },
    {
      "name": "Wychowawca - Instruktor zajęć plastycznych",
      "company": "Stowarzyszenie SIEMACHA",
      "urls": "https://pl.indeed.com//rc/clk?jk=198716fc57864994&fccid=277d9d49eab72fcb&vjs=3"
    }
  ],
  "301": [],
  "302": [
    {
      "name": "LOGISTYK / MAGAZYNIER",
      "company": "Leroy Merlin Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=a44521d81005c722&fccid=cd30c4ea8664400d&vjs=3"
    },
    {
      "name": "DORADCA KLIENTA – SEKTOR TECHNIKA",
      "company": "Leroy Merlin Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=eb2997d215e3ea42&fccid=cd30c4ea8664400d&vjs=3"
    },
    {
      "name": "DORADCA KLIENTA",
      "company": "Leroy Merlin Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=d4cab9cf32984d3a&fccid=cd30c4ea8664400d&vjs=3"
    },
    {
      "name": "PRACOWNIK GRUPY TOWARUJĄCEJ",
      "company": "Leroy Merlin Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=a751bb5a4be2de03&fccid=cd30c4ea8664400d&vjs=3"
    },
    {
      "name": "KASJER/KASJERKA",
      "company": "Leroy Merlin Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=d7ed6078ff58a140&fccid=cd30c4ea8664400d&vjs=3"
    },
    {
      "name": "DORADCA KLIENTA – SEKTOR OGRÓD",
      "company": "Leroy Merlin Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=10fa608d21ac0393&fccid=cd30c4ea8664400d&vjs=3"
    },
    {
      "name": "Przedstawiciel handlowy (materiały budowlane) - Kraków",
      "company": "Alhar Klinkier",
      "urls": "https://pl.indeed.com//rc/clk?jk=fd29de4ae89af837&fccid=557d3d9263148d15&vjs=3"
    },
    {
      "name": "Doradca Techniczno-Handlowy (materiały budowlane)",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=12cd1acc985da782&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Przedstawiciel handlowy - Elewacje klinkierowe",
      "company": "Alhar sp. z o.o. sp.k.",
      "urls": "https://pl.indeed.com//rc/clk?jk=10c223fd27728e7f&fccid=7e6b573a8cbf605a&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=b83dd00cf2be1af4&fccid=68b975ecbbd7a58d&vjs=3"
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
      "name": "Nauczyciel / Korepetytor",
      "company": "Moose Polecane Korepetycje Zuzanna Łoś, Marek Łoś Spółka Jawna",
      "urls": "https://www.praca.pl/nauczyciel-korepetytor_3343584.html#2f00bda55a8ab0cf534130ec5db5bebc"
    },
    {
      "name": "Nauczyciel przedmiotów ogólnokształcących",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-ogolnoksztalcacych_3372410.html#2f00bda55a8ab0cf534130ec5db5bebc"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=0bcbb25d41fdae14&fccid=1cd25ec87a06c80b&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=ee00c6e4d872a098&fccid=a877bb8252ef54dd&vjs=3"
    },
    {
      "name": "Kierownik robót",
      "company": "TOR-KRAK",
      "urls": "https://pl.indeed.com//rc/clk?jk=d7c16a1770219df5&fccid=7b6043ac7d4ffc11&vjs=3"
    },
    {
      "name": "Kierownik Robót (Solution Deployment Manager)",
      "company": "Thales Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=71ab7b696762fe62&fccid=b920aab5fd60595d&vjs=3"
    },
    {
      "name": "Kierownik Projektu",
      "company": "OPTIVO consulting",
      "urls": "https://pl.indeed.com//rc/clk?jk=4b72311c7929fd41&fccid=1e7ed4fb4a610679&vjs=3"
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
      "name": "Chemik - Analityk",
      "company": "Fagron sp. z o.o.",
      "urls": "https://www.praca.pl/chemik-analityk_3409814.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=b18ed159d3add9dd&fccid=66aef5497a72caee&vjs=3"
    },
    {
      "name": "Kierownik Budowy",
      "company": "EPCM",
      "urls": "https://pl.indeed.com//rc/clk?jk=2d57e544bd1aeef8&fccid=a877bb8252ef54dd&vjs=3"
    },
    {
      "name": "Specjalista ds. Finansowo-Księgowych",
      "company": "AERO-GSE",
      "urls": "https://pl.indeed.com//company/AERO--GSE-Sp.-z-o.o./jobs/Specjalista-Do-Spraw-Finansowo-Ksi%C4%99gowych-af77ea3cf7793208?fccid=f93698bcb0cc9059&vjs=3"
    },
    {
      "name": "Junior Full Stack Developer",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com//rc/clk?jk=346cc28ca0d2e4cc&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "Konsultant pomocy technicznej systemu ERP Streamsoft Prestiż",
      "company": "Streamsoft",
      "urls": "https://pl.indeed.com//rc/clk?jk=2d62f62131c64c6f&fccid=1240fd6f430e60df&vjs=3"
    },
    {
      "name": "Brand Manager",
      "company": "HEADHUNTERS GROUP",
      "urls": "https://pl.indeed.com//rc/clk?jk=962d397e2ef9ab2c&fccid=2626896dbec10c5d&vjs=3"
    },
    {
      "name": "Dyrektor ds. Sprzedaży - produkcja prefabrykowanych konstruk...",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com//rc/clk?jk=09b3123c70bbdca1&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Key Account Manager - Project Manager",
      "company": "Klient firmy Talenthouse",
      "urls": "https://pl.indeed.com//rc/clk?jk=41d921305563df2f&fccid=e73219c89efeb2f6&vjs=3"
    },
    {
      "name": "Regular PHP Developer",
      "company": "Mobilem Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=6a771b72c07c33b3&fccid=18942caf6173fed4&vjs=3"
    },
    {
      "name": "Senior Full Stack Developer",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com//rc/clk?jk=663aad59306ff336&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "Full Stack PHP Developer",
      "company": "Mobilem Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=eabfdbe67971e30c&fccid=18942caf6173fed4&vjs=3"
    },
    {
      "name": "Chief Operating Officer",
      "company": "Strategie Personalne",
      "urls": "https://pl.indeed.com//rc/clk?jk=661e92d9a4f5524d&fccid=29ef11a4e93c431f&vjs=3"
    },
    {
      "name": "Pracownik biurowy z j. hiszpańskim (student/ka)",
      "company": "Genpact PL",
      "urls": "https://pl.indeed.com//rc/clk?jk=70f331d8e9cf4c0b&fccid=afe30394bfba1470&vjs=3"
    },
    {
      "name": "Senior User Acquisition Manager",
      "company": "Strategie Personalne",
      "urls": "https://pl.indeed.com//rc/clk?jk=2ec69d0c1f94999e&fccid=29ef11a4e93c431f&vjs=3"
    }
  ],
  "333": [],
  "334": [
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Elektronik – Konstruktor",
      "company": "2Bora",
      "urls": "https://pl.indeed.com//rc/clk?jk=1412ed0791ddda41&fccid=81eeaa9aaf867a65&vjs=3"
    },
    {
      "name": "Inżynier ds kalkulacji / przygotowania produkcji (m / k",
      "company": "STRABAG Infrastruktura Południe Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=e67453e66a025c10&fccid=91ff00d5203b00da&vjs=3"
    },
    {
      "name": "Inżynier Procesu Automotive Greenfield",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=83af8b65d67f08d7&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Inżynier Procesu / Produkcji - oferta z pakietem relokacyjny...",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=525bfd3e48fc6f63&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Inżynier Jakości - oferta z pakietem relokacyjnym",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c335b71aa6443013&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Lider Działu Inżynierii Procesu",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c94802d34ca011fe&fccid=062f71e131e87cf0&vjs=3"
    }
  ],
  "335": [
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
      "name": "Mechanik, Serwisant wózków widłowych",
      "company": "Emtor Spółka z o.o.",
      "urls": "https://www.praca.pl/mechanik,serwisant-wozkow-widlowych_3389614.html#931435cae6afd62258f90d68dda88132"
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
      "name": "Kierownik strefy – menadżer ds. sprzedaży w sieci dealerskiej",
      "company": "mFinanse S.A.",
      "urls": "https://www.praca.pl/kierownik-strefy-menadzer-ds-sprzedazy-w-sieci-dealerskiej_3378960.html#931435cae6afd62258f90d68dda88132"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=ad5637f900265eef&fccid=c21abee0de715f4a&vjs=3"
    },
    {
      "name": "Kierownik ds. Logistyki",
      "company": "Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=f0cb1db02f3b3d64&fccid=eb3baf007981cd9e&vjs=3"
    },
    {
      "name": "Kierownik ds. rozwoju biznesu (international sales)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=558013ecbe824cb6&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "337": [
    {
      "name": "Asystent/ka ds. Exportu umowa o pracę",
      "company": "Euro-Trade",
      "urls": "https://pl.indeed.com//rc/clk?jk=f6585873e3a0de3f&fccid=2eeccc37137128ae&vjs=3"
    }
  ],
  "338": [
    {
      "name": "Asystent(ka) Dziau Handlowego",
      "company": "ZAMAK MERCATOR SP. Z O.O.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-dzialu-handlowego-krakow-okolice,oferta,1000198624"
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
      "name": "Chemik - Analityk",
      "company": "Fagron sp. z o.o.",
      "urls": "https://www.praca.pl/chemik-analityk_3409814.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
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
      "name": "Spedytor międzynarodowy",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/spedytor-miedzynarodowy_3404358.html#f039daed501b9d552e9f6ed171a37da2"
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
      "name": "Elektryk Przemysłowy",
      "company": "PERFECT TEAM Marcin Kaszta",
      "urls": "https://www.praca.pl/elektryk-przemyslowy_3396140.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Spedytor / Starszy Spedytor FTL",
      "company": "PEKAES Sp. z o.o.",
      "urls": "https://www.praca.pl/spedytor-starszy-spedytor-ftl_3372602.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Mechanik - Elektromechanik",
      "company": "SETMIL Sp. z o.o.",
      "urls": "https://www.praca.pl/mechanik-elektromechanik_3372726.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Wiceprezes / Członek Zarządu firmy świadczącej usługi zarządzania i nadzoru (inżyniera kontraktu) nad kontraktami budowlanymi w sektorze ochrony środowiska, przemysłu, transportu, energetyki i innych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/wiceprezes-czlonek-zarzadu-firmy-swiadczacej-uslugi-zarzadzania-i-nadzoru-inzyniera-kontraktu-nad-kontraktami-budowlanymi-w-sektorze-ochrony-srodowiska,przemyslu,transportu,energetyki-i-innych_3368116.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Logistyk / Magazynier",
      "company": "Leroy Merlin Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/logistyk-magazynier_3383214.html#f039daed501b9d552e9f6ed171a37da2"
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
      "name": "Kierowca / Magazynier",
      "company": "MGsolutions MGJJ Sp. z o. o.  Sp. k.",
      "urls": "https://www.praca.pl/kierowca-magazynier_3413790.html#f039daed501b9d552e9f6ed171a37da2"
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
      "name": "Kierowca - dostawca sprzedaży internetowej",
      "company": "Tesco Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/kierowca-dostawca-sprzedazy-internetowej_3366910.html#f039daed501b9d552e9f6ed171a37da2"
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
      "name": "Kierowca taxi kat. b",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/kierowca-taxi-kat-b_3400120.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca - kurier",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/kierowca-kurier_3397382.html#f039daed501b9d552e9f6ed171a37da2"
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
      "name": "Inżynier Budowy Mostów",
      "company": "Primost Południe Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-budowy-mostow_3389088.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Monter / Pomocnik operatora wiertnicy",
      "company": "NAWITEL SP. Z O. O.",
      "urls": "https://www.praca.pl/monter-pomocnik-operatora-wiertnicy_3405188.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Architekt",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/architekt_3405096.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Brygadzista robót elektrycznych [rekrutacja online]",
      "company": "Synago Małgorzata Jankowska",
      "urls": "https://www.praca.pl/brygadzista-robot-elektrycznych-rekrutacja-online_3405072.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Pracownik do robót ogólnobudowlanych (także ekipa)",
      "company": "J. Cezar Sp. z o.o.",
      "urls": "https://www.praca.pl/pracownik-do-robot-ogolnobudowlanych-takze-ekipa_3376716.html#f1adf226fe906beeaf8fa26cfe8bfae3"
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
      "name": "Monter sieci / Pomocnik operatora wiertnicy",
      "company": "NAWITEL SP. Z O. O.",
      "urls": "https://www.praca.pl/monter-sieci-pomocnik-operatora-wiertnicy_3415968.html#f1adf226fe906beeaf8fa26cfe8bfae3"
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
      "name": "Kierownik Projektu / Project Manager branża budownictwa ogólnego",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-projektu-project-manager-branza-budownictwa-ogolnego_3369996.html#f1adf226fe906beeaf8fa26cfe8bfae3"
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
    },
    {
      "name": "Księgowa / Księgowy",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/ksiegowa-ksiegowy_3385922.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Kierownik robót drogowych i torowych (infrastruktura miejska)",
      "company": "ZUE S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-drogowych-i-torowych-infrastruktura-miejska_3385908.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Kierownik Robót Sprężalniczych",
      "company": "BBR Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/kierownik-robot-sprezalniczych_3398774.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Kierownik Robót Mostowych",
      "company": "Primost Południe Sp. z o.o.",
      "urls": "https://www.praca.pl/kierownik-robot-mostowych_3417020.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    }
  ],
  "345": [],
  "346": [],
  "347": [
    {
      "name": "Nauczyciel / Korepetytor",
      "company": "Moose Polecane Korepetycje Zuzanna Łoś, Marek Łoś Spółka Jawna",
      "urls": "https://www.praca.pl/nauczyciel-korepetytor_3343584.html#4baee2d36736a8d1c17df099730fa50d"
    },
    {
      "name": "Nauczyciel przedmiotów ogólnokształcących",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-ogolnoksztalcacych_3372410.html#4baee2d36736a8d1c17df099730fa50d"
    }
  ],
  "348": [
    {
      "name": "Specjalista ds. dokumentacji technicznej z jęz. angielskim (...",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=65fbe80ad0e233b0&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "xxx",
      "urls": "349"
    },
    {
      "name": "Lider Działu Inżynierii Procesu",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c94802d34ca011fe&fccid=062f71e131e87cf0&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=58177fbf054c4edd&fccid=5981b74173f9ac17&vjs=3"
    }
  ],
  "355": [
    {
      "name": "Kierownik Projektu",
      "company": "EC Engineering",
      "urls": "https://pl.indeed.com//rc/clk?jk=7aae45b0fed6b2fa&fccid=dd2bc65880e72b4a&vjs=3"
    },
    {
      "name": "Pracownik administracyjny",
      "company": "Collegium Medicum Uniwersytetu Jagiellońskiego w K...",
      "urls": "https://pl.indeed.com//rc/clk?jk=8416e8d4ab908cf4&fccid=f0638f9cf4b08fa5&vjs=3"
    },
    {
      "name": "Business Process Improvement Manager",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com//rc/clk?jk=64e5a4c6893162f1&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "Koordynator Testów",
      "company": "ProData Consult",
      "urls": "https://pl.indeed.com//rc/clk?jk=8236f470a9027b02&fccid=fa336ade0bd80ccd&vjs=3"
    },
    {
      "name": "Social Media Specialist",
      "company": "Veneo",
      "urls": "https://pl.indeed.com//rc/clk?jk=4c363984e58a6a2b&fccid=d055a1ba91135454&vjs=3"
    },
    {
      "name": "Senior Business Controller – Kraków",
      "company": "People Service Recruitment Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=c5745aa8a0cd9280&fccid=b2795a71c9d1222d&vjs=3"
    },
    {
      "name": "Doświadczony Asystent/Senior, Business Tax Advisory, Kraków/...",
      "company": "EY",
      "urls": "https://pl.indeed.com//rc/clk?jk=24d4bcdc2792fbfe&fccid=1544766d4c2915b0&vjs=3"
    },
    {
      "name": "Assistant Manager z j. niemieckim",
      "company": "dotCommunity",
      "urls": "https://pl.indeed.com//company/dotCommunity/jobs/Assistant-Manager-Z-Niemieckim-1c159297550ea523?fccid=b24c832dd0dc2a5d&vjs=3"
    },
    {
      "name": "IT Support Technician",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com//rc/clk?jk=0842ddbe0837035a&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Kierownik projektu (bankowość)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=8641baceed963f2f&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Lider Działu Inżynierii Procesu",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c94802d34ca011fe&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Global Injection Molding Expert for Supplier Quality",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=f3464b3a6356f584&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=0dbe208d18437dbd&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "IT Project Manager",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com//rc/clk?jk=e14af56a0c91384f&fccid=4fcb59d2ba8f65d1&vjs=3"
    }
  ],
  "356": [
    {
      "name": "Specjalista ds. Procesów Magazynowych",
      "company": "FIEGE Logistik Stiftung & Co. KG",
      "urls": "https://pl.indeed.com//rc/clk?jk=ad5637f900265eef&fccid=c21abee0de715f4a&vjs=3"
    },
    {
      "name": "Pracownik Działu Magazynu",
      "company": "Alfa Laval",
      "urls": "https://pl.indeed.com//rc/clk?jk=e0e0427218496ece&fccid=ec4917fdb79e20eb&vjs=3"
    },
    {
      "name": "Tokarz",
      "company": "Alfa Laval",
      "urls": "https://pl.indeed.com//rc/clk?jk=33e12058e4c2a749&fccid=ec4917fdb79e20eb&vjs=3"
    },
    {
      "name": "Specjalista ds. Obsługi Klienta z jęz. niemieckim C1",
      "company": "Shell",
      "urls": "https://pl.indeed.com//rc/clk?jk=5d48ab48926b2611&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Transformation Coordinator - PMO",
      "company": "PepsiCo",
      "urls": "https://pl.indeed.com//rc/clk?jk=4af96b7c26ffbf3f&fccid=2973259ddc967948&vjs=3"
    },
    {
      "name": "Global Customer Service Manager",
      "company": "Accenture",
      "urls": "https://pl.indeed.com//rc/clk?jk=17fc9d817015d098&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Lean Six Sigma Black Belt",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=87294ff6effd6333&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Business Process Improvement Manager",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com//rc/clk?jk=64e5a4c6893162f1&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "Procurement Business Process Expert",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com//rc/clk?jk=53eb823859017842&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "CONTINUOUS IMPROVEMENT MANAGER",
      "company": "ENGINEERINGjobs",
      "urls": "https://pl.indeed.com//rc/clk?jk=baaa2ca228514c09&fccid=6b8601288f8172d5&vjs=3"
    },
    {
      "name": "Aftermarket Sales Account Manager",
      "company": "Cummins Inc.",
      "urls": "https://pl.indeed.com//rc/clk?jk=b8534e75d0fcecf9&fccid=36ccedc5bfdf19b1&vjs=3"
    },
    {
      "name": "Senior Procurement Analyst",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com//rc/clk?jk=0c5268c3deb19212&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "GL Accountant with English",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=84707b02c58483e7&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Praca w językach obcych: niemiecki i angielski",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com//rc/clk?jk=12e8add399599ee4&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Quality and Continuous Improvement Senior Specialist",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=e3cb6013f28c01a5&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Transition Manager",
      "company": "Lobo HR",
      "urls": "https://pl.indeed.com//rc/clk?jk=10d7615c6b0054de&fccid=42ea513863db8ce0&vjs=3"
    },
    {
      "name": "Senior Quality and Technology Engineer",
      "company": "Motorola Solutions",
      "urls": "https://pl.indeed.com//rc/clk?jk=afde5e76332b3188&fccid=22ec6ef3cc441ac2&vjs=3"
    },
    {
      "name": "Technology Risk Management Regional Lead",
      "company": "UBS",
      "urls": "https://pl.indeed.com//rc/clk?jk=85a82c4bd4b12308&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Order to Cash (AR) Manager",
      "company": "Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=b5de0e6d32b0bf1f&fccid=eb3baf007981cd9e&vjs=3"
    },
    {
      "name": "Business Process and Data Analyst",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=0d5eb26cd1e21d14&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Power Grids - Quality and Continuous Improvement Specialist",
      "company": "ABB",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqDUsVUkfH4EkrN84Gz9KZzMWLpWhyY86qBLFyf-lZ5_fhPr0f8HZO_XXiGXp7BNC9cAkHDzsSB9KHk6nTcvhXp0OjBk17CLkjWapyd5cEZ0XrfXMW23NqD9o_e912TtnWyjxqbDt_cOOKE8QILCDw3JTtuB6d0V5v24Q-jXdepnfdPvuoHWp1qap2gF8i8Iz5-vLhYNscrCpMDrEviZThy5UMA84z4rOCwmehtgANSYHRiOZCRRh8TjNpQKssTJPUetuOAWwpj4OZL2uizD0BQQCN50DY9-G_Yz0n36kR3jmihCZvEh4jSQ3fMPVVtz6LBwUnqYyMSCg-TZXP9IWte_37HEwHkLM4d76H2aQo2kFevIOCcApbQhcgHeZyjq29bE5U-0GtrwT6PZN0UWP4PV9PmLIuoGy0oVs-R9i8grs3HY3IebFQsDRLve4VvRBh4dW0kHlO468_1urtlugib01VpbwK8o4n9MxHy4CR3I9aemgAx2iKiqadqgllUJCQJhQ8RSWoaYzz5rvYS1I5Wy0e6mw7Ndd4Vb687pUF0eYq8k-9f9pz9LwKYo-fZIR53NVbVTwSVV7whZ-rxsoR8Vp8kM__lyer5szIER1vL6wp1QEsgU8KAzmB5Hnq5N6GdAme3JM9QL_8OKCNSHeUYL0wnw_4Q6B7kZ8JT_fcBq7OPswkkEgcv8qefSCwTrlVpwhQtqXRMeMaUSeSuzaNs=&p=10&fvj=0&vjs=3"
    },
    {
      "name": "Procure to Pay (P2P) Project Specialist",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=410f6ed5770f38b2&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "(Senior) IT Business Analyst",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com//company/HRO-Digital/jobs/IT-Business-Analyst-7fb7704b0368f151?fccid=4fcb59d2ba8f65d1&vjs=3"
    },
    {
      "name": "Procurement Process Manager with German(m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//rc/clk?jk=a44b398c47317f40&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Customer Service Professional - German Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com//rc/clk?jk=4fef3ac07ce82bc5&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Credit Assessment Analyst - German Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com//rc/clk?jk=23e05716598e9cd1&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Customer Operations Specialist - German Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com//rc/clk?jk=ec764ac10fababf9&fccid=868f0a680c88fba8&vjs=3"
    }
  ],
  "357": [
    {
      "name": "Junior Maintenance Manager",
      "company": "NES Global Talent",
      "urls": "https://www.praca.pl/junior-maintenance-manager_3344126.html#be94a39164cef99dab7651dfbed05318"
    }
  ],
  "358": [
    {
      "name": "Procurement Process Manager with German(m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfucIIF8zkAKeR29XnHrb3EEZ-bm54Fw-xMGpP9_toSXcGQEiLzHfbL7aNA0B38KmURasfOOYuL8KejputNyDSd7SUFJdRKguwSFgSBX1fLlODj3REs3WXfeqRtWi7oedvcYkW5iymsAiBrl6yo1SD44nzQI5AvJO8QaB_yJKhdRkIcN8M8ySSxnoBYDbPeXcryEsWjvGNsPiZ3E3_Oh-53qru1zIhNDG0d5pXpzu4XBgMA4wH8ehEIkqTrncCUqOcQwo9OyIrXRkkcTXE_ie0lKwQLWe3XKFWB1xjTnfC1AA7TtLvbl2uNNyRCjz_JY3DRD2f7Q11YdCwP8uhiSoDsUhgUGRiGsTYhSVYoI-o9fRcc2v90LaIZAMUIiBJVN8aSeTdBv54ZJxvwYfFOtZcNhQvTl57PaTfd4X_mcv4_qkkBVPNtmBkyRbi-Slg52EGZ6KkvLqpj62AzHpKHYx45DlBZ2WUCzBaY9fQ-WrvYL3RI6XnvUcJh_a_TGVA1_PpmKAHrw8n-KBM2fhVw-6qfjYIEHXpIW3dQ5ExNgC1H9hSpIPrpRJ65W25Hl3rUPgujGa2nSZXRqOB4EF1MhpO1fVaZuLdDJaa5hpoPZkeNe5h1WifLvZj2ZPW_mip-MnufIm8LqocdQihqK4yH25kg&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Business Process Improvement Manager",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com//rc/clk?jk=64e5a4c6893162f1&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "Kierownik Działu Marketingu",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com//rc/clk?jk=514f21a3f3227484&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Doradca klienta biznesowego",
      "company": "Kaizen Rent",
      "urls": "https://pl.indeed.com//rc/clk?jk=f53e01aecfe88bd2&fccid=74d925eec5d24464&vjs=3"
    }
  ],
  "359": [
    {
      "name": "Product Manager - Industry 4.0",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=7d4ed6e6853f9d9a&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Client Success Manager",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com//rc/clk?jk=b9999e64aef721d6&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "Tester Automatyzujący - rekrutacja prowadzona online",
      "company": "Fitech",
      "urls": "https://pl.indeed.com//rc/clk?jk=aca13f17601ca2b2&fccid=52d48f1974e43ed4&vjs=3"
    },
    {
      "name": "Specjalista ds dokumentacji technicznej - rekrutacja prowadz...",
      "company": "Fitech",
      "urls": "https://pl.indeed.com//rc/clk?jk=6cd8122e22bcd3d7&fccid=52d48f1974e43ed4&vjs=3"
    },
    {
      "name": "BI Consultant / Data Analyst",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com//rc/clk?jk=2cf8a0c761706e63&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "Full Stack Developer - rekrutacja prowadzona online",
      "company": "Fitech",
      "urls": "https://pl.indeed.com//rc/clk?jk=b1a566a4f363f736&fccid=52d48f1974e43ed4&vjs=3"
    },
    {
      "name": "Industralization Engineer",
      "company": "OCTOPUS Recruitment Agency",
      "urls": "https://pl.indeed.com//rc/clk?jk=cc1c9fd7dff9cce0&fccid=b51d728789e5a630&vjs=3"
    },
    {
      "name": "Kierownik ds. rozwoju biznesu IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=9406f6cc7a335725&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Java Developer (ERP)",
      "company": "OnWelo",
      "urls": "https://pl.indeed.com//rc/clk?jk=a272cfa66555d017&fccid=f0576bc2d3ad81bd&vjs=3"
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
      "name": "Inżynier Elektryk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=2aba904252e64b02&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Automatyk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=0f9e18031e6d937f&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier sprzedaży systemów bezpieczeństwa przemysłowego",
      "company": "GRUPA WOLFF",
      "urls": "https://pl.indeed.com//rc/clk?jk=d85a4988a3bbd086&fccid=3d99fb61e9e62f24&vjs=3"
    }
  ],
  "371": [],
  "372": [
    {
      "name": "Projektant sieci sanitarnych",
      "company": "Lobo HR",
      "urls": "https://pl.indeed.com//rc/clk?jk=761d971eaf07ae0c&fccid=42ea513863db8ce0&vjs=3"
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
      "name": "Sta  Asystent  Modszy Project Manager",
      "company": "IMI-POLSKA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/staz-asystent-mlodszy-project-manager-krakow,oferta,500033753"
    },
    {
      "name": "Project Manager Assistant - Coordinator",
      "company": "Argos Translations Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/project-manager-assistant-coordinator-krakow,oferta,1000166234"
    }
  ],
  "381": [],
  "382": [],
  "383": [
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Utrzymania Ruchu - oferta z pakietem relokacyjnym",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=9c070024a06d86bb&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Inżynier systemowy w kulturze DevOps",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=08b9aa853b5c438b&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Kierownik robót drogowych i torowych",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=373d3be4d9cd22f2&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier Procesu Automotive Greenfield",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=83af8b65d67f08d7&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "SysOps Engineer",
      "company": "Transmission Dynamics Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com//company/Transmission-Dynamics-Poland-Sp.-z-o.o./jobs/Sysops-Engineer-a0430a2f02f16537?fccid=71edca8a792a88bd&vjs=3"
    },
    {
      "name": "Projektant Sieci Wodno-Kanalizacyjnych",
      "company": "K&K Selekt",
      "urls": "https://pl.indeed.com//rc/clk?jk=80c55476fee329df&fccid=afe1f520a63ae3d3&vjs=3"
    },
    {
      "name": "Inżynier Procesu / Produkcji - oferta z pakietem relokacyjny...",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=525bfd3e48fc6f63&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Automatyk PLC",
      "company": "Axamo Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=f79baa9790b90f7c&fccid=f86175c7ba708305&vjs=3"
    },
    {
      "name": "SysOps Engineer",
      "company": "Transmissmion Dynamics Poland sp. z o. o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=bbcb7f974af392f7&fccid=7a35d02c61858789&vjs=3"
    },
    {
      "name": "Lider Działu Inżynierii Procesu",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c94802d34ca011fe&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Lean Management Coordinator",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=8e1c711f30e4c0b7&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "DevOps Engineer (ELK Stack)",
      "company": "EuroLinux",
      "urls": "https://pl.indeed.com//rc/clk?jk=899a325ee5bed5a2&fccid=d91fbdc82addbd64&vjs=3"
    }
  ],
  "384": [
    {
      "name": "Inżynier Wsparcia Technicznego IP - z językiem angielskim",
      "company": "ELFON",
      "urls": "https://pl.indeed.com//rc/clk?jk=b679e1353319d5c7&fccid=2c4afa11216a4599&vjs=3"
    }
  ],
  "385": [],
  "386": [
    {
      "name": "QA Engineer",
      "company": "S-Labs",
      "urls": "https://pl.indeed.com//rc/clk?jk=3300678035fa06a4&fccid=ce4f4701fb5e9335&vjs=3"
    },
    {
      "name": "Inżynier ds. integracji i testowania sieci 4G/5G - KRAKÓW",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=3dc0d8f7a439242b&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "QA Automation Engineer with travel/airline experience/Kraków",
      "company": "NewPerspective",
      "urls": "https://pl.indeed.com//rc/clk?jk=1ef8f4f17587f141&fccid=659d40811d5fc07a&vjs=3"
    },
    {
      "name": "QA Automation Engineer / Kraków (aktualnie zdalnie)",
      "company": "NewPerspective",
      "urls": "https://pl.indeed.com//rc/clk?jk=209f361bf869ac31&fccid=659d40811d5fc07a&vjs=3"
    }
  ],
  "387": [
    {
      "name": "Desktop Support Engineer",
      "company": "Novomatic Technologies Poland",
      "urls": "https://pl.indeed.com//rc/clk?jk=ba5801dc8134cd05&fccid=3f7f841f88eb8db3&vjs=3"
    },
    {
      "name": "Inżynier Systemowy DevOps - Business Support Systems",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=fc035be427bad32e&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Inżynier sieci, Network Engineer",
      "company": "Dynamics Jobs",
      "urls": "https://pl.indeed.com//rc/clk?jk=7d6046df99c179ce&fccid=e7223e3ece47a796&vjs=3"
    },
    {
      "name": "Network Engineer, Inżynier sieci",
      "company": "Dynamics Jobs",
      "urls": "https://pl.indeed.com//rc/clk?jk=94e68e21c80930c6&fccid=e7223e3ece47a796&vjs=3"
    },
    {
      "name": "Inżynier sieci / Network Engineer - Kraków",
      "company": "FRG Technology Consulting",
      "urls": "https://pl.indeed.com//rc/clk?jk=20e6d13e23b4bf6a&fccid=79a4f894c1383f39&vjs=3"
    },
    {
      "name": "Network Engineer / Inżynier sieci",
      "company": "FRG Technology Consulting",
      "urls": "https://pl.indeed.com//rc/clk?jk=8e4724c72dd3e0f9&fccid=79a4f894c1383f39&vjs=3"
    },
    {
      "name": "Network Engineer / Inżynier sieci",
      "company": "Washington Frank",
      "urls": "https://pl.indeed.com//rc/clk?jk=5fcad688fe10a7d9&fccid=cb9285e8f83d93f4&vjs=3"
    },
    {
      "name": "Data Science Engineer",
      "company": "Spring Professional",
      "urls": "https://pl.indeed.com//rc/clk?jk=8593ed384a623ca7&fccid=5b9b13c05b84001b&vjs=3"
    },
    {
      "name": "Senior Full Stack .NET Developer | Kraków",
      "company": "VSOFT",
      "urls": "https://pl.indeed.com//rc/clk?jk=eaaafaa77c430288&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Software Engineer in Test | Kraków",
      "company": "Vsoft",
      "urls": "https://pl.indeed.com//rc/clk?jk=ee63930a2a2139bc&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Oracle Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=939751af5d5af958&fccid=cfa2a094a933b6fb&vjs=3"
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
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3415642.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-business-analyst_3393580.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior Xceptor Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-xceptor-developer_3338594.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#0f62d1b55b419916af66d52811ec7c83"
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
      "name": "Konsultant ds. strategicznej zmiany biznesowej",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/konsultant-ds-strategicznej-zmiany-biznesowej_3400166.html#0f62d1b55b419916af66d52811ec7c83"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=d23cc3f39a81bc9a&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "392": [],
  "393": [
    {
      "name": "Specjalista ds. bezpieczeństwa wybuchowego i procesowego",
      "company": "ATEX",
      "urls": "https://pl.indeed.com//rc/clk?jk=b1dacffabd195771&fccid=61a3b49ca08b05a5&vjs=3"
    }
  ],
  "394": [],
  "395": [
    {
      "name": "Kierownik projektu/montażu/budowy",
      "company": "GRUPA WOLFF",
      "urls": "https://pl.indeed.com//rc/clk?jk=0bc000c39cdbf8e9&fccid=3d99fb61e9e62f24&vjs=3"
    },
    {
      "name": "Kierownik robót elektrycznych (infrastruktura miejska)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=513a71b7c97067b6&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Projektant procesów technologicznych",
      "company": "Devire",
      "urls": "https://pl.indeed.com//rc/clk?jk=f62d862eae7aa79e&fccid=dac7798bc9cb142c&vjs=3"
    }
  ],
  "396": [
    {
      "name": "Asystent Projektanta (branża sanitarna)",
      "company": "P3 Projekt Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=2da7111ea96bc1c9&fccid=60b9b6db9314e9bf&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=dc8e82ea96d316d6&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Referent ds. logistyki odpadów specjalnych",
      "company": "REMONDIS Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=cdbbed117d36ce4b&fccid=e18a11f1af6d217e&vjs=3"
    },
    {
      "name": "Specjalista Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=8447c63c8105e086&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Ochrony Środowiska...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=315cad0381ee06a8&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Specjalista ds. BHP i ochrony środowiska",
      "company": "Kolejowe Zakłady Nawierzchniowe",
      "urls": "https://pl.indeed.com//rc/clk?jk=5a141607248b0fc1&fccid=640acb9e5c3b5646&vjs=3"
    },
    {
      "name": "Projektant Architektury Krajobrazu",
      "company": "Park-M",
      "urls": "https://pl.indeed.com//rc/clk?jk=aa4cd446002a2698&fccid=9820092e2d13814c&vjs=3"
    },
    {
      "name": "Pracownik w Sekcji Administracji",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://pl.indeed.com//rc/clk?jk=e5140e2be1bcd905&fccid=dbd17c00e0be7954&vjs=3"
    },
    {
      "name": "GEODETA/Specjalista ds. detekcji infrastruktury podziemnej",
      "company": "GISonLine",
      "urls": "https://pl.indeed.com//rc/clk?jk=0752b9dea00bed12&fccid=f3a59a13accc2eb6&vjs=3"
    },
    {
      "name": "Specjalista ds. układów kogeneracyjnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=a5f702f39c8819b4&fccid=1cd754675a5b8353&vjs=3"
    },
    {
      "name": "GEODETA/Specjalista ds. baz danych GESUT i BDOT",
      "company": "GISonLine",
      "urls": "https://pl.indeed.com//rc/clk?jk=d6ce492234ce6414&fccid=f3a59a13accc2eb6&vjs=3"
    }
  ],
  "401": [],
  "402": [],
  "403": [],
  "404": [],
  "405": [
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
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
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
      "name": "Resource Management Lead",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/resource-management-lead_3406628.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior Product Owner",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-product-owner_3413396.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen-systemow-analitycznych_3405276.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3415642.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "ETL Developer",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/etl-developer_3420402.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Przedstawiciel Handlowy ds. Horeca",
      "company": "MAKRO Cash and Carry Polska S.A.",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy-ds-horeca_3345436.html#6b69987c8a278d258930347b01de8034"
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
      "name": "Senior SQL//VBA/Coric developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-sql-vba-coric-developer_3409588.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Bioinformatyk",
      "company": "Vendo Krzysztof Domagała",
      "urls": "https://www.praca.pl/bioinformatyk_3385522.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#6b69987c8a278d258930347b01de8034"
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
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#6b69987c8a278d258930347b01de8034"
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
      "name": "Przedstawiciel Handlowy ds. Sprzedaży Tradycyjnej",
      "company": "Ustronianka Sp. z o.o.",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy-ds-sprzedazy-tradycyjnej_3372622.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior Business Analyst",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/senior-business-analyst_3365278.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Konsultant ds. strategicznej zmiany biznesowej",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/konsultant-ds-strategicznej-zmiany-biznesowej_3400166.html#6b69987c8a278d258930347b01de8034"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=0bcbb25d41fdae14&fccid=1cd25ec87a06c80b&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=b18a47013c2bff4f&fccid=53e9661535e3b9f3&vjs=3"
    },
    {
      "name": "Technik Optyk",
      "company": "Scanmed S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=19e04b6af858e6f4&fccid=5baf87fca2a86ad0&vjs=3"
    },
    {
      "name": "Doradca Techniczno-Handlowy",
      "company": "SMART-HR",
      "urls": "https://pl.indeed.com//company/Smart--HR/jobs/Doradca-Techniczno-Handlowy-5872d303071656ef?fccid=2ad7bb13c81995c1&vjs=3"
    },
    {
      "name": "Specjalista techniczno-handlowy",
      "company": "Level Work",
      "urls": "https://pl.indeed.com//rc/clk?jk=2b26b6d7eed77a74&fccid=e92a6365b8535226&vjs=3"
    },
    {
      "name": "Konsultant / Specjalista techniczno-handlowy",
      "company": "Strategie Personalne",
      "urls": "https://pl.indeed.com//rc/clk?jk=a71c89ac62d35126&fccid=29ef11a4e93c431f&vjs=3"
    }
  ],
  "419": [],
  "420": [],
  "421": [],
  "422": [
    {
      "name": "Senior/Regular QA Automation Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-regular-qa-automation-engineer_3420972.html#ae141d5b766b2fd8895bba9750612037"
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
      "name": "Cloud Oriented Network Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-oriented-network-architect_3409108.html#ae141d5b766b2fd8895bba9750612037"
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
      "name": "Nauczyciel na kierunku asystentka stomatologiczna",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-na-kierunku-asystentka-stomatologiczna_3409536.html#b85418b7ea7ccf98185b756124bcf26a"
    },
    {
      "name": "Nauczyciel na kierunku higienistka stomatologiczna",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-na-kierunku-higienistka-stomatologiczna_3409568.html#b85418b7ea7ccf98185b756124bcf26a"
    }
  ],
  "431": [
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
      "name": "North America Procurement Operations Senior Analyst",
      "company": "KIMBERLY CLARK EMEA GBS SERVICES SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/north-america-procurement-operations-senior-analyst-krakow,oferta,1000253384"
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
      "name": "Junior Reporting Analyst with French",
      "company": "PepsiCo GBS Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-reporting-analyst-with-french-krakow,oferta,1000220910"
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
      "name": "Analityk Należności z językiem niemieckim",
      "company": "Genpact PL",
      "urls": "https://www.praca.pl/analityk-naleznosci-z-jezykiem-niemieckim_3407210.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Analityk laboratoryjny",
      "company": "Philip Morris International",
      "urls": "https://www.praca.pl/analityk-laboratoryjny_3339282.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen-systemow-analitycznych_3405276.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "IT Specialist (Senior Analyst) (L2 Support) with English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-specialist-senior-analyst-l2-support-with-english_3389752.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3415642.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Project Controls Specialist",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/project-controls-specialist_3389654.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Customer Service Analyst with German",
      "company": "IBM BTO Business Consulting Services Sp. z o.o.",
      "urls": "https://www.praca.pl/customer-service-analyst-with-german_3405004.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Senior FP&A Analyst with German [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/senior-fp-a-analyst-with-german-rekrutacja-online_3389128.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "FP&A Analyst with German [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/fp-a-analyst-with-german-rekrutacja-online_3389132.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Senior FP&A Analyst [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/senior-fp-a-analyst-rekrutacja-online_3389134.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "FP&A Analyst [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/fp-a-analyst-rekrutacja-online_3389136.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Księgowy, Analityk ",
      "company": "Stowarzyszenie SIEMACHA",
      "urls": "https://www.praca.pl/ksiegowy,analityk_3413164.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Data Associate with German",
      "company": "ManpowerGroup",
      "urls": "https://www.praca.pl/data-associate-with-german_3422244.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "IT Analyst with Italian & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-italian-english_3376422.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "IT Analyst with French & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-french-english_3376426.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Kontroler Kredytowy",
      "company": "Zing Sp. z o.o.",
      "urls": "https://www.praca.pl/kontroler-kredytowy_3406940.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Senior Financial Analyst (Business Controllership) [Rekrutacja prowadzona online]",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-financial-analyst-business-controllership-rekrutacja-prowadzona-online_3411258.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Expert in Pricing with Hungarian [online recruitment]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/expert-in-pricing-with-hungarian-online-recruitment_3359952.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-business-analyst_3393580.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Junior AR Analyst with Italian",
      "company": "IBM BTO Business Consulting Services Sp. z o.o.",
      "urls": "https://www.praca.pl/junior-ar-analyst-with-italian_3398878.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "IT Analyst with Dutch and English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-dutch-and-english_3339228.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Teradata Technical Analyst ",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/teradata-technical-analyst_3337152.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Senior Xceptor Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-xceptor-developer_3338594.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Analyst - Portuguese Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-portuguese-speaker-online-recruitment_3410800.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    }
  ],
  "432": [
    {
      "name": "Modszy Specjalista ds. Wsparcia i zamwie",
      "company": "Sunday Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-wsparcia-i-zamowien-krakow,oferta,1000224892"
    },
    {
      "name": "Junior Logistics Operator",
      "company": "Veritas Alpha ltd sk",
      "urls": "https://www.pracuj.pl/praca/junior-logistics-operator-krakow,oferta,1000257762"
    },
    {
      "name": "Modszy Logistyk",
      "company": "PARETTI spka z ograniczon odpowiedzialnoci spka komandytowa",
      "urls": "https://www.pracuj.pl/praca/mlodszy-logistyk-krakow,oferta,1000257240"
    },
    {
      "name": "Młodszy Specjalista ds. Logistyki",
      "company": "Smart - HR",
      "urls": "https://www.praca.pl/mlodszy-specjalista-ds-logistyki_3420186.html#00a848f9498101b0d4989a79ebe59fc5"
    },
    {
      "name": "Logistyk / Magazynier",
      "company": "Leroy Merlin Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/logistyk-magazynier_3383214.html#00a848f9498101b0d4989a79ebe59fc5"
    },
    {
      "name": "Kierownik magazynu / Koordynator działu logistyki",
      "company": "Drops Print Sp. z o.o.",
      "urls": "https://www.praca.pl/kierownik-magazynu-koordynator-dzialu-logistyki_3381488.html#00a848f9498101b0d4989a79ebe59fc5"
    }
  ],
  "433": [],
  "434": [],
  "435": [
    {
      "name": "Specjalista ds. Finansowo-Księgowych",
      "company": "AERO-GSE",
      "urls": "https://pl.indeed.com//company/AERO--GSE-Sp.-z-o.o./jobs/Specjalista-Do-Spraw-Finansowo-Ksi%C4%99gowych-af77ea3cf7793208?fccid=f93698bcb0cc9059&vjs=3"
    }
  ],
  "436": [
    {
      "name": "Specjalista – Konsultant ds. Funduszy Europejskich",
      "company": "KPPM Doradztwo",
      "urls": "https://pl.indeed.com//rc/clk?jk=5134d071747a2355&fccid=c89511e6220cd981&vjs=3"
    },
    {
      "name": "Specjalista ds. pozyskiwania funduszy UE",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=6fc86fa4f20daac8&fccid=062f71e131e87cf0&vjs=3"
    }
  ],
  "437": [],
  "438": [],
  "439": [
    {
      "name": "Specjalista ds. Zarządzania Kapitałowego",
      "company": "BNP Paribas Bank Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=da5e07bd7b02f36f&fccid=1392500f835bba92&vjs=3"
    }
  ],
  "440": [],
  "441": [
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
    },
    {
      "name": "Doradca ds. Klientów Zamożnych [rekrutacja online]",
      "company": "Aragonit Asset Management Sàrl",
      "urls": "https://www.praca.pl/doradca-ds-klientow-zamoznych-rekrutacja-online_3396840.html#152f4815b528e41a17bc4bbdc1ccfc85"
    },
    {
      "name": "Doradca Techniczny ds. Inwestycji",
      "company": "4INSTALL Sp. z o.o.",
      "urls": "https://www.praca.pl/doradca-techniczny-ds-inwestycji_3391856.html#152f4815b528e41a17bc4bbdc1ccfc85"
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
      "name": "FPGA DSP Designer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/fpga-dsp-designer-rekrutacja-online_3393862.html#d05c698fb6d4bfb447052f9fc4f80d75"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=697bdc008cd4e215&fccid=a7f787da57db1cab&vjs=3"
    },
    {
      "name": "Specjalista ds. obsługi klienta / tłumacz",
      "company": "inTurs.net",
      "urls": "https://pl.indeed.com//rc/clk?jk=95b1c40a0545553e&fccid=8d74c43df3dcb871&vjs=3"
    },
    {
      "name": "Specjalista ds. SEM",
      "company": "Marketing Investment Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=a06ca781ae7fe113&fccid=0ee62b7fa1ca038c&vjs=3"
    },
    {
      "name": "Staż lub praktyka zdalna, 14 kierunków i więcej do wyboru",
      "company": "Krajowy Instytut Rozwoju Gospodarki",
      "urls": "https://pl.indeed.com//rc/clk?jk=1c5dd6a055dcfbbb&fccid=5429572581cdb0aa&vjs=3"
    },
    {
      "name": "Account Manager",
      "company": "WEBISO",
      "urls": "https://pl.indeed.com//rc/clk?jk=f85e1ccb99f52999&fccid=e3fb43dbacbc0492&vjs=3"
    },
    {
      "name": "Specjalista ds. sprzedaży i promocji na terenie Małopolski",
      "company": "ABW Graf Group s.c.",
      "urls": "https://pl.indeed.com//rc/clk?jk=cab4f46c03932a1a&fccid=e2fcf67f4bc7d4cd&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=c9c057e9413611c2&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja język angielski",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com//rc/clk?jk=9e98f59d7644521c&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja medycyna",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com//rc/clk?jk=212407a166cb424b&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Staż lub praktyka zdalna, 14 kierunków i więcej do wyboru",
      "company": "Krajowy Instytut Rozwoju Gospodarki",
      "urls": "https://pl.indeed.com//rc/clk?jk=1c5dd6a055dcfbbb&fccid=5429572581cdb0aa&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja prawo",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com//rc/clk?jk=5fb987265d56c63f&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja rolnictwo",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com//rc/clk?jk=ba4e4a6ba6e51be7&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja A. I.",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com//rc/clk?jk=b42bf38433fda4d3&fccid=ab8a0dae1fe54ce8&vjs=3"
    }
  ],
  "453": [],
  "454": [],
  "455": [
    {
      "name": "Junior Marketing Automation Specialist",
      "company": "Dreamcommerce S.A.",
      "urls": "https://www.pracuj.pl/praca/junior-marketing-automation-specialist-krakow,oferta,1000226401"
    },
    {
      "name": "Modszy Specjalista ds. Social Media",
      "company": "Chemitech Sp. z o.o.o",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-social-media-krakow,oferta,1000234496"
    }
  ],
  "456": [
    {
      "name": "Junior Graphic Designer",
      "company": "Morele.net Sp. z o.o. ",
      "urls": "https://www.pracuj.pl/praca/junior-graphic-designer-krakow,oferta,1000257192"
    },
    {
      "name": "Web Product Implementation Specialist with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-product-implementation-specialist-with-french_3406790.html#7202358ecfe053a90fe6f1f9060b86e5"
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
      "name": "Specjalista / Specjalistka ds. Kadr [rekrutacja online]",
      "company": "Crowe Poland",
      "urls": "https://www.praca.pl/specjalista-specjalistka-ds-kadr-rekrutacja-online_3372792.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specjalista ds kadr i płac",
      "company": "VRG S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-kadr-i-plac_3372572.html#ef711b463501f14e78e697a3ad0f8263"
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
      "name": "Kierownik Działu Zatrudnienia i Płac ",
      "company": "KRAKBAU S.A.",
      "urls": "https://www.praca.pl/kierownik-dzialu-zatrudnienia-i-plac_3394258.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Benefit Policy Analyst with Spanish [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/benefit-policy-analyst-with-spanish-rekrutacja-online_3379030.html#ef711b463501f14e78e697a3ad0f8263"
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
    },
    {
      "name": "Payroll Senior Specialist/Team Leader/Process Owner - nowy projekt (m/k)",
      "company": "CPL JOBS Sp. z o.o.",
      "urls": "https://www.praca.pl/payroll-senior-specialist-team-leader-process-owner-nowy-projekt-m-k_3392056.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#ef711b463501f14e78e697a3ad0f8263"
    }
  ],
  "459": [
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
      "name": "Asystent ds. obsugi klienta biznesowego",
      "company": "EWA BIE EWA BIEN",
      "urls": "https://www.pracuj.pl/praca/asystent-ds-obslugi-klienta-biznesowego-krakow-okolice,oferta,1000251625"
    },
    {
      "name": "Full Time Administrative Assistant - Remote",
      "company": "WEB BESPOKERS FILIP KOTLARZ",
      "urls": "https://www.pracuj.pl/praca/full-time-administrative-assistant-remote-krakow-okolice,oferta,1000204756"
    },
    {
      "name": "Modszy specjalista ds. e-commerce",
      "company": "Berner Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-e-commerce-krakow,oferta,7468266"
    }
  ],
  "460": [
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
      "name": "Key Account Manager",
      "company": "Eurocash S.A.",
      "urls": "https://www.praca.pl/key-account-manager_3411412.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Kierownik Działu Marketingu (k/m) ",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/kierownik-dzialu-marketingu-k-m_3420028.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Specjalista ds. Marketingu",
      "company": "NEWMOR Polska Sp. z o.o",
      "urls": "https://www.praca.pl/specjalista-ds-marketingu_3413752.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Chief Operating Officer",
      "company": "OneMoreGame.STUDIO Sp. z o.o.",
      "urls": "https://www.praca.pl/chief-operating-officer_3386216.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Telemarketer",
      "company": "Private Corporate Consulting Sp. z o.o.",
      "urls": "https://www.praca.pl/telemarketer_3372202.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Product Manager HVAC",
      "company": "FERRO Spółka Akcyjna",
      "urls": "https://www.praca.pl/product-manager-hvac_3383660.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Expert in Pricing with Hungarian [online recruitment]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/expert-in-pricing-with-hungarian-online-recruitment_3359952.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Analyst - Portuguese Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-portuguese-speaker-online-recruitment_3410800.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Reviewer - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-bulgarian-speaker-online-recruitment_3410804.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Reviewer - Finnish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-finnish-speaker-online-recruitment_3410806.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Reviewer - Greek Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-greek-speaker-online-recruitment_3410808.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Reviewer - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-italian-speaker-online-recruitment_3410812.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Reviewer - Norwegian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-norwegian-speaker-online-recruitment_3410814.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Reviewer - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-romanian-speaker-online-recruitment_3410816.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Reviewer - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-spanish-speaker-online-recruitment_3410820.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Reviewer - Turkish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-turkish-speaker-online-recruitment_3410822.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Reviewer - Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-ukrainian-speaker-online-recruitment_3410824.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3410826.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "CSR Online Advertising Specialist - Hungarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-hungarian-speaker-online-recruitment_3410830.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "CSR Online Advertising Specialist - Latvian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-latvian-speaker-online-recruitment_3410834.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "CSR Online Advertising Specialist - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-romanian-speaker-online-recruitment_3410836.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Sales and Customer Service Specialist with Slovenian",
      "company": "BPO International",
      "urls": "https://www.praca.pl/sales-and-customer-service-specialist-with-slovenian_3383468.html#c07a636253615519fbd73fb82da5263d"
    }
  ],
  "461": [],
  "462": [],
  "463": [],
  "464": [],
  "465": [
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
      "name": "Stażysta ds. marketingu",
      "company": "CCC S.A.",
      "urls": "https://www.praca.pl/stazysta-ds-marketingu_3405302.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3410826.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Hungarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-hungarian-speaker-online-recruitment_3410830.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Latvian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-latvian-speaker-online-recruitment_3410834.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-romanian-speaker-online-recruitment_3410836.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3410782.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist – Czech or Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-czech-or-slovak-speaker-online-recruitment_3410776.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Lithuanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-lithuanian-speaker-online-recruitment_3410778.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist – Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-speaker-online-recruitment_3410788.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-spanish-speaker-online-recruitment_3410794.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Russian/Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-ukrainian-speaker-online-recruitment_3410798.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "Moderator treści w social media z językiem niemieckim (m/k)",
      "company": "CPL JOBS Sp. z o.o.",
      "urls": "https://www.praca.pl/moderator-tresci-w-social-media-z-jezykiem-niemieckim-m-k_3407172.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3376758.html#7641eb0788d0c3bc1469f61984eb5bdc"
    }
  ],
  "467": [
    {
      "name": "Risk Manager",
      "company": "Brown Brothers Harriman",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqcnL7Z32D0mKD8hW9DUcGT8WJoTOsPdEBkmF4hDmllWxS0mNMYMMqzaJR70liAw7mj5_uYczh1Z92FdQFj766M2Y700dFDrfAl84FeDMJ34JCKe5nNWwJmcU4vYejce_ibNNq9-7nqPm4gCOUOqU7H-Zj9yn1XXWUdYwv208V7HAsPLpwDS2Ac8lWCPVfvjRKp7eA6gqwt9wwncOzoZsHFhxlHQ234TgfEighJ2oymNE-lxLS485uQg-U_3qgzFHiMeI0Y7PDIA_CbYlfvygWhr_VJqIU9Br6a-4FToB1q62xgSrmVxdBXcwyZ-Wu8INOafaI7eWiBZqBwYitlo_bwuBBqlfIEr9yWjrc2fytLI_NJ5w8cHdbPQ5Ew3rJEMVPoWVsrjlXSL9yBF-MXXYLsGfBfWmeEQjMf1jYecz2RO7qPQMGcSH36eLoIVpl2Ou9pu-P88R8uwH09pIPs9Du2ubKHw228bbHYXSwgZ19wqgFOanjkx_t_H537IzfdpZZvSXA9XQi6dGl5Ydc-A1nRGRNIlIEqtR_ks73Xzm9i_2QP0J5MP4L0NZL6OJwG35n0_G8foxew8HOQDLskN28JO132abR_XVBkfxSWcfeItqEt4QfJuTWBAK94JPzkljS7E4CSFSQ3oB7Rz_YPhKTipApysW5BO03L7MyeETqWvTT2u7Gd9fG4bt72flwskJ_8_QNH0qSIc&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Global Customer Service Manager",
      "company": "Accenture Operations",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfbky0Q4V8_qA3LkMKFNe6k8yBDkMflz49F0cU8uHECpHv_v7-r3KSu077dY4VNgszpQ7gXKQweV3cfgpugdZhays8wTfsZzcDLvU8IPEhf66Yc19n4TXIKh9INGCC5Peyne0KU-QHhEfznfsTfPI9WdPRCBRf0Ma7ZH08tccN6_dHY2DH-TOwOPbc8jfkzrrsPSrViKlpMpmQSxXlAaWnabZz9VIrXhsVAGCg4ah9UAa0omHH8ABpo1VFSE9c_kPAU--xv7tQ2Z4B6eA2ZhAjW_i0zUm285xzbxSk3iaA9jpYvhFHjFdTgGjt3Y_VK1fhospSO-ecI3SVpQ_4r9C2pj-UwoiKxQabqcyT2KQm6IiSnxs7IqxJ4IWsT05iu9BlnDjFVzEMlG4ou5XTute1jf1juUMNF7ngxO2vgH-4pzyzbo68YpgcE0v1mXcTk6TS1cYreeeUge7AG-7s07U6Z5Tjgm1-jiJqszydBaG9SGGw-tTVyJBua14LsY5WqCRdWOz7j7GLW1jIO91u33X6yqvRJVWvYWTzNTQKcLfHYUhcCyM5z31gb_IMRLorqdKMPsQ_VL4biD6OblGz-jiPfbef0fl5M1KD3dVrgaQtNscpxP8oUt0nQo3fSduZeCHGcN5BBJUnbim2TWb3tqJ_1&p=1&fvj=0&vjs=3"
    },
    {
      "name": "HR Manager (m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfAI6fxB1XP-YvUy0b7utziOC8GwtUolm25Z1pr20B8BC5dRZjx7C8CAIzG8LoE243lvpcXJwuk1RFj_72LHK2y-fmyETiRIkkPELQRpPf_kTrmOlcNuFnGGgLa32lnDs1xydWezY1QowMTZkkAMo8BPBb7MrP3Mwn4FiCvxybCELxHd63hrBjnY8GqQjiD-IqG8gDw08xAb0nvMt9EbzyQIm9UUpNCZLgx4vJfOlOI2Mx85TLWGZOXnqYXbukN7hAuYu62BsSo1hRhdUVQT_xoJhNa2d9-7zWyp-obJ2ZEV-XE7LZFV15qu9T9wdSkvvMbplUicrRbhjZuOus_hq8iT-RYNhmMOr-0aJyP3PIUP-SC_pnKDep3MtkIxRm3AwvtWUh9jD9HnVL-naj9KJwJXTYu4WClzCW5SIN0fWXYfhrQmEcEwprqBgQUWrfhE4760dpr7_JlJDH-SW0dGltrigj2J5X8JbTp3-BkUusmgok-A_b7enFJVtMbOxNNafMZBvoA5clvJUGP6MgWPuTT1Hdv2NIkRAJ9tgSbyjCS9oyIRYMi0mhvo3LtUVrVvbTZONGOYhHpfRnmnJq6o5hsXL6fKOVNAdGB4pbi24n70jWN02ol7VREpo4tF4x9KIk=&p=2&fvj=0&vjs=3"
    },
    {
      "name": "Program Manager - Force Multiplier ()",
      "company": "Cisco Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=34eb41bb4fbe4056&fccid=dfc44f3b8c44a6db&vjs=3"
    },
    {
      "name": "Alliance Manager",
      "company": "Ardigen",
      "urls": "https://pl.indeed.com//rc/clk?jk=62be891a69ab27ba&fccid=0caf54c974d1fc7f&vjs=3"
    },
    {
      "name": "Demand Center Manager",
      "company": "Shell",
      "urls": "https://pl.indeed.com//rc/clk?jk=919eb17bd825b859&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Duty Operations Manager - Krakow",
      "company": "Discovery Communications",
      "urls": "https://pl.indeed.com//rc/clk?jk=a98e8ee03e26eac8&fccid=f17180ffbe436a3c&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com//rc/clk?jk=f906cf3cfe85651a&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "TEAM",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com//rc/clk?jk=c9c4c99adb4009f6&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "CTO Agile Team Manager",
      "company": "Motorola Solutions",
      "urls": "https://pl.indeed.com//rc/clk?jk=e3d0616dede13931&fccid=22ec6ef3cc441ac2&vjs=3"
    },
    {
      "name": "Product Manager",
      "company": "Caspio",
      "urls": "https://pl.indeed.com//rc/clk?jk=f3f99abdc985be44&fccid=204aafbc9b36f228&vjs=3"
    },
    {
      "name": "Global Customer Service Manager",
      "company": "Accenture",
      "urls": "https://pl.indeed.com//rc/clk?jk=17fc9d817015d098&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Sales Support Team Manager",
      "company": "PepsiCo",
      "urls": "https://pl.indeed.com//rc/clk?jk=1bb4f1edd9688a74&fccid=2973259ddc967948&vjs=3"
    },
    {
      "name": "Marketing Automation Specialist",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeYC8izo8kVgSPErBS1SFXQfIRrKfg_28WJqNWhTKLQpbZkDzclwr1s-TPqGu1xZOBz3jHgI3oHQWRVU18oGiu_6XSFn3baTG_mUma_TCRoWuPmZb9tNmSzKJCqIcq01h6vdraai9-FzHbzX8xhguoNkBBfdxcqXKllWCsGoXUhbvuMm1TGOuGBTXIp4pt85fnhFoiujbLsGlT7x5iklL5ML1BxGCt4kgxJSNXAbegUo6DKpFD8ZE2L7yu7tvikksTO9XlH4juLaz-14Dhs94m-6yrPx7g3emICNyAPC4fuXpeF-iUyT5Jaz_ZFXyw7FDyW2_DqukTTFI5hXg4CdCjcwuG4druhRVPWvrQbWXbQyVPgFQM3mx-KU6eWarcr-RRM4_Ginefa05jcIpPmGldgnhaF2g5I5462Cdn_swodckOZmBJm88gZUTIgUgoncO_bmBcXjr3DQc7gUUSTlmeJuWI7pz4vgapUbboPgwZFbfEw3zWX-D629ZL-dSf70mTl4U9Gu4oDl3ZY4WqRpbY3yXAmrxa3LDqdmeHtILpg9a1hRyt3roGHJAOfLF1ew6Fw4BMdQDFZ2LcbZ0qB6GuFG1vtuqsKaua-7WerdqlaDiwEk4kGVVInFy7LDL9_2qZ6Xugh0GfsPY2iuVcHw5fM&p=13&fvj=0&vjs=3"
    },
    {
      "name": "Internal Control Expert",
      "company": "ABB",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqDUsVUkfH4EkrN84Gz9KZxfTNKGDbceuFgVKP__EcoUq1VCYNkQ2Mt2fu7q3ynIywXEnKyFHdVb47sP44_nhLig9wWvYGUl-9rd1Zf-LUTDKbA2GmS7IsEPM7qKUIzEkfkigZLoiO6OOi7xEuj1oKWIw1KPH0YB_UsC5vqBXoFCbSE3udd9jolbL_IuRrTvS3OkuvgIfaKb7ULVBNHyTE7MuibcF7mXlqTpM2FPLEsF92N_ha5R6u0F0pmHSpXDlLCyUCKr692_HX4_XvdodW0Nj_TWCxyChaPDk1O2Uuqbd8jYiwzP8gQsgAVy346mcawLZZzbv6Uxadgp3xI-67DqD3ziIEFSbZpPusogn4bFtikH53zer_GGJzjcRTlPI84-PXIBeRLGifj__a9LybjHiyqRS_ARehMBcDsD-TYJCKwjwtnDwv9EBIgcR-LacaBBImDpRsflue1mJaGyuuDU-8w_eWe-y08qJ3tsRu3_9TJUjmjK7oX5OTeo28-oNBHMArE-4vOkNxuKKCR5ZPmlmYEhb3Xy2vEaqvIdPbPnU_A94Rj2iUXwaFojQLQvARRd1457bKGVxClW6CI8s9i-dF4PR61E3hm79reZXUjmxXnVYwVvx5Wsd9wFA_l8BX_uNbAfgFe2WVQOGkUs3Xlv9-lvv-8eHfjGKevheYuC&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Global Process & Control Improvement Manager",
      "company": "HEINEKEN Kraków",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeK4Ua-GAZKMJzrCaubrT9mtvUK-6LFgdN1o30UP3gH83eY7Rt7z2s6Qd3cWkKCwklH-M71U2C9T22slcis0tb55LSu0gs_5z1YKRz6lXi_yTUOlCPXhHWJ_3_-XsAhrEN45McYFvk287exuXiy8iHQgGJfYI67_Y_XqGqe4EZB4xH3-3Sn9fZRNqkIn5WX4_ag4hzeIpcn96EqXzDCD5oCYAHP6KUZBZo4jb8rF3oFUf9fiHE55KNzMaiAfwza5kGeOhzRF5kqSK2OVmrIZDlzt7Kjqa3bXxZnX3fEomP8fHkbpA_F-glA8fWBEuixKlh883x_bgFO82NWjcc9HZQhAhlu049cT3ReLWvza1PmSi7-NzjMn5TuwEbUyCOrSITI0qvYGgQu7ee4kswItWKQig2X08OEJp4zK5tCHeDUS00sbE-nILmB5nOE2zd3c756yqkWN5GUBaXFtuxk-NBaiEYFwyPWLWA3s2ce6yiSAnXWQMfKMLBxN3G37_Rhxs-iQb6Qx10YhZg0y2rRbFd47iBePhDGYstaOdAWDha0hpJDeWncd0awLhu1F_rqzAUpgKZ262wq7gIrKUy5P6SvjAzopbQt2wgbzjmrYpCWe5zZF_Gvaq_09N4dU_7xRmKnJB5fxOPmKZam8XsDwfWr9uHIry0MXu73UB5RJx_Sow==&p=2&fvj=0&vjs=3"
    },
    {
      "name": "Internal Control over Financial Reporting Team Manager",
      "company": "Zurich",
      "urls": "https://pl.indeed.com//rc/clk?jk=40897084ce50dc3c&fccid=34938366d45106af&vjs=3"
    },
    {
      "name": "Client Success Manager",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com//rc/clk?jk=b9999e64aef721d6&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "Senior Facilities Manager",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com//rc/clk?jk=1b9df29dcbe1cf7b&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "New Business Manager",
      "company": "Funktional",
      "urls": "https://pl.indeed.com//rc/clk?jk=8f1cdf8b8304a759&fccid=014e16512e5e89bd&vjs=3"
    },
    {
      "name": "Operational Buyer Spanish",
      "company": "IBM",
      "urls": "https://pl.indeed.com//rc/clk?jk=c59f7db620804b71&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Infrastructure Delivery Manager",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com//company/HRO-Digital/jobs/Infrastructure-Delivery-Manager-5f15cbc8bd9ab683?fccid=4fcb59d2ba8f65d1&vjs=3"
    },
    {
      "name": "Web Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com//rc/clk?jk=9bd2b12f90e69e28&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Product Manager (Tutoring Team)",
      "company": "Brainly",
      "urls": "https://pl.indeed.com//rc/clk?jk=f91aaf79e429bfcd&fccid=0087ede1ae181969&vjs=3"
    },
    {
      "name": "Product Manager",
      "company": "WorldRemit",
      "urls": "https://pl.indeed.com//rc/clk?jk=087ecfb805c28f7f&fccid=507acd357fe68a6f&vjs=3"
    },
    {
      "name": "CSR and Communications Internship",
      "company": "UBS",
      "urls": "https://pl.indeed.com//rc/clk?jk=c63c24a76f90ee5c&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "EMEA Senior Accounting (RtR) Manager",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeprGjfbmrFeVpkfH1wm39tRgF6UlvCyYo5_8EwaEy321wKt-ypL0JZdDPDNfDBwI94BGjtesgKJ6lzmDW-xWRHwR2TYrkIev7g4t7QEfx7NFnVtfzRxdK_GoBVGMyX9MBrpXf_I-9SMU1IZwcrnrg26p3eNC8W4Fe9ZA2Iko0oQhZHBQcBe8ccdXGMuCUfnVyo4gXerunrd00Qn3ELnO36tAdly7pCeGIMkh2tAy0aTGuVfctxGSjTPY-02SWV7nLpcxRDKz4FkQTE8sVGptxfiLAqO1g_HVcEbdJLySgxkR4u0kIMnNvRiqLYJMMeT1CNSltgQArQn80qrxdBxYeKCkV_-BU2WFiZgqMn_rZ-lC0Unl6O28SzrnI8Qc0NL66qwOQKmp7fpe33-sWi7tdstIlNas9kKk46Whvbuh9b4dtOke-Y6wRtjLkM1P0s44QqEz52YOc4sUGDACzTTwSvGQw77W9cGiY5bTAxJEDb6PnWIPhKV38wWgiMo3akSdzU8peWIYndEt513zieBtdMm5nwrMmYAQ2ociJVgNfEh7aui5reJK8h7ve-QhdQSAbOh8JHRIlBlUoa96v2v1h7MYYFX3y26M9dFY59it6mSU-czcYfpRPzCDGbowDIT2iMiMhrcIQjfD_8MA03_K9lyZmM_kI4VdI=&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Project Manager",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=585f27dc3417fa82&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "IT Program Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=ef3c8c56cc9c5b26&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Business Development Manager",
      "company": "Go Global Services",
      "urls": "https://pl.indeed.com//rc/clk?jk=63532278a698d471&fccid=07981464a31ce167&vjs=3"
    },
    {
      "name": "Process Manager PTP",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=227acb7253867431&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "HR & PAYROLL MANAGER EASTERN EUROPE (f/m/d)",
      "company": "beeline Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=e2ea808b0aa8024f&fccid=3f24b309557a3d43&vjs=3"
    },
    {
      "name": "Network Implementation Manager",
      "company": "Akamai",
      "urls": "https://pl.indeed.com//rc/clk?jk=5d08568ad2230f76&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=223e749b80e8beb0&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Software Engineering Manager, PL",
      "company": "QVC",
      "urls": "https://pl.indeed.com//rc/clk?jk=d26c2d49561fd0dd&fccid=8a4535c948d32e2a&vjs=3"
    },
    {
      "name": "Customer Experience Manager with Dutch",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeLBcVY6sRL-0XMa5oE6oB7e5sebT4Y_MJA7Y4njKFlG7Q_bt_l79bWZDFJT8ARPPk7VDFZXLUyZT1InMXwBU1O31PgUx1QCkAxoYb8-ohBJaN1Iw4-OBfbAZzxseMBjt_WRbD4_MADqyfj0nQ922i5B4CbOyBoulJi53QaI81NlvoNik7DMVJNPYHxpwzR22y9ZCpQ-VeJwZlSB3cNw2X5sC9ceF_htHb9b7PkB14UOqYgEb_Ugqp7frIyYGOa7ZbSgfbsxdUzfxOy8PCch39ltm7MSLNgY5a13hJkwN109_EIhan0LZVkMd4-YY6FR03lYt0HVDEQhImWO8mL4kXVXpDsn354ANf1rRzMjYdWEJvDlma0ZSCsUYI28Jb_o-MutHvrScGenMk_toFrS0vddSvSinLXznBGvMfK3oy_Ccz_23knSwU-Yu269Hk1dmuWIu5pPBwxYOQ9WTqd8SXzGqq9VM8YupdnUJjizsd9lCuqZQqlT1HeLEf8XFM3SWJigJyhZDvqV2nQNII3XtbdiOrBphY0lxXspNlc1S71EEprw_6gxuanmrcosheFdI4MHFIdD7zU9ldSwEik3lzK8KLytZ-8zonyzRRRL2V4jDj2iFDJAtpfHugQ4ImsSdEbXGxqkQPbWnXA9yWf3riKOkz7Y7ASNiY=&p=12&fvj=0&vjs=3"
    },
    {
      "name": "Global Project Manager of Talent Acquisition and Development",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeLBcVY6sRL-4D6o1idFR5weTHlYU4GwZ9Mx9yiW9uWdgae6WNBkYnK6RKEydEEqVr03gwjyRFE_iqkTxJ-6BcUS30LWLgDLQ708yKl1-OavvLdzyGYSjUSYM8N1fFoOiij46Wf3ns-IihDzlhE6GY95BO5oH4k23KEgzy1JYGHutINr-5S9PM1y1NyWPC7S2zvDk8NmCKyBAdkxffed0BFE_dVZzIKNvJ0VD0NBNvHIaubxBcPKydLJjFlxUnIGCOaC_lM91kA34ecgdF7rCM8gOndjaoVB6kW8XTJf9Y2ie-qxlibBfHTR4QGGlZqNAEbPqOktJOh9gyS9hL2QUAwcGqhqp55t99cf-Oncbf4MqYhEe5EQQx0jZQ91V3C2LSjSlRuzKE_sKDQTaIX_54mEFawQd4YhIUwZJhQS5BZ6-Gyz1u6BCZ-U59uqR3tMVbSBm6nf-5TbU_0bJJUjPVzLOkzOLCf9QRDmcK416zfuUId3B2TW_Fthd_g1v0tyzUlmrhe3FUFFO5Itf7NoYEzZjVzpQuq4l4PmTieeHM6d4lgFruuQXViCFhlhWu-gTu7QxU-MBRBK4VWw82wbPJIeVgOScmwt6Nysjd6ivotsJlF7BjgMHwjPYGIDBh5oHB4D7A7NczLA_jeTUll6ihxnoFFhtX4sujrVo1Z6TMc04MlAmc1glMcOUZyGd4iT0g=&p=2&fvj=0&vjs=3"
    },
    {
      "name": "License Business Process Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=b41c0ada009670c6&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "PLEC - Project Director",
      "company": "Air Liquide",
      "urls": "https://pl.indeed.com//rc/clk?jk=fac34a13dfcde33b&fccid=0bfc42f123844c30&vjs=3"
    },
    {
      "name": "Aftermarket Sales Account Manager",
      "company": "Cummins Inc.",
      "urls": "https://pl.indeed.com//rc/clk?jk=b8534e75d0fcecf9&fccid=36ccedc5bfdf19b1&vjs=3"
    },
    {
      "name": "Service Delivery Manager - Salesforce",
      "company": "IBM",
      "urls": "https://pl.indeed.com//rc/clk?jk=f54b2e3adbb2f40e&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Customer Experience Manager with Dutch",
      "company": "Shell",
      "urls": "https://pl.indeed.com//rc/clk?jk=260feccc0aa5f271&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Associate Project Manager",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=b4b92b1dc5b646f3&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Junior Project Manager",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com//rc/clk?jk=7d9c91bd296a415f&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Business Change Manager",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=3033122a08b22199&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Security Technical Project Manager",
      "company": "Akamai",
      "urls": "https://pl.indeed.com//rc/clk?jk=cde9a8d8aa34cad6&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Product Development Team",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com//rc/clk?jk=6553258faf5f1535&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "R2R Team Leader",
      "company": "TE Connectivity",
      "urls": "https://pl.indeed.com//rc/clk?jk=d49f03bfd53644f6&fccid=adb7c04d7caa1bd2&vjs=3"
    },
    {
      "name": "Freelancer Publicist",
      "company": "TOP Agency",
      "urls": "https://pl.indeed.com//rc/clk?jk=6a37f8dab922c48a&fccid=95ba0f0f3bc059a8&vjs=3"
    },
    {
      "name": "Performance Marketing Specialist",
      "company": "Funktional",
      "urls": "https://pl.indeed.com//rc/clk?jk=9465348003acef44&fccid=014e16512e5e89bd&vjs=3"
    },
    {
      "name": "Category Buyer",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=ac1fb4cae9395e26&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Project Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=99054ffcffc4070d&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Customer Success Specialist Collaboration",
      "company": "Cisco Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=db55569bfff111b6&fccid=dfc44f3b8c44a6db&vjs=3"
    },
    {
      "name": "Senior Technical Product Manager, MES BA",
      "company": "Cytiva",
      "urls": "https://pl.indeed.com//rc/clk?jk=798e7752fce79ede&fccid=c46411dafcae5d08&vjs=3"
    },
    {
      "name": "Training and Quality Analyst",
      "company": "Splunk",
      "urls": "https://pl.indeed.com//rc/clk?jk=3be782a1f20f660d&fccid=aef928e89977f7f0&vjs=3"
    },
    {
      "name": "Senior PR Manager",
      "company": "Bidroom Poland",
      "urls": "https://pl.indeed.com//rc/clk?jk=18700326f3ece834&fccid=3661982007b43fee&vjs=3"
    },
    {
      "name": "EMEA Logistics Manager",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=e74d3d5583294b7c&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "IT Project Leader/Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=598ff89cac1e7ffe&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Junior AR Analyst/ AR Analyst OTC Spanish",
      "company": "IBM",
      "urls": "https://pl.indeed.com//rc/clk?jk=c394da4bf1d0b604&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "HCM Deck",
      "urls": "https://pl.indeed.com//rc/clk?jk=16eeaa9db7daf93b&fccid=183a60f9194ba681&vjs=3"
    },
    {
      "name": "Account Strategist",
      "company": "Strike Social",
      "urls": "https://pl.indeed.com//rc/clk?jk=743e3c2f13fca29c&fccid=cf4976b1a250fb07&vjs=3"
    },
    {
      "name": "Infrastructure Delivery Manager",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=8e513b4ccfef4bb3&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Marketing Automation Specialist",
      "company": "Shell",
      "urls": "https://pl.indeed.com//rc/clk?jk=3e0fbc67c95568e5&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Operations Support Intern",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com//rc/clk?jk=ae80507a7d2c7239&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Finance Project Manager",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=b6a0dadfb078d607&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Senior Product Manager",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com//rc/clk?jk=b1a26f8b9145c41f&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "Customer Success Team Leader",
      "company": "Splunk",
      "urls": "https://pl.indeed.com//rc/clk?jk=0799f9fde91c9d98&fccid=aef928e89977f7f0&vjs=3"
    },
    {
      "name": "Senior Delivery Manager",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=7c959fbf65bf488c&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Procurement Business Process Expert",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com//rc/clk?jk=53eb823859017842&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "Junior AR Analyst OTC French",
      "company": "IBM",
      "urls": "https://pl.indeed.com//rc/clk?jk=8b87ab12f769b28b&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Delivery Lead",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com//company/HRO-Digital/jobs/Delivery-Lead-886e6c2ba3c53aea?fccid=4fcb59d2ba8f65d1&vjs=3"
    },
    {
      "name": "Senior Talent Partner",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=774aba820bf5c07b&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Senior Talent Acquisition Partner",
      "company": "PepsiCo",
      "urls": "https://pl.indeed.com//rc/clk?jk=9b4c09f9d4a21151&fccid=2973259ddc967948&vjs=3"
    },
    {
      "name": "InfoSec Analyst Risk Awareness",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=9ae39cf3803b8f46&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "IT Buyer",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=5015a8e3d058ce00&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Customer Experience Engineer - Collaboration (Customer Succe...",
      "company": "Cisco Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=33f7a65e9d3eead3&fccid=dfc44f3b8c44a6db&vjs=3"
    },
    {
      "name": "Solution Engineer – Business Application Services",
      "company": "ALK-Abelló",
      "urls": "https://pl.indeed.com//rc/clk?jk=5b0bff2ff8beffba&fccid=b534993dafd4bb7f&vjs=3"
    },
    {
      "name": "R2R Team Leader with French",
      "company": "TE Connectivity",
      "urls": "https://pl.indeed.com//rc/clk?jk=480e4ee516fd0a03&fccid=adb7c04d7caa1bd2&vjs=3"
    },
    {
      "name": "Business Development Manager (HR Solutions)",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=1fe408682bda58b8&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "CRM & Lead Generation Manager",
      "company": "Goodminds",
      "urls": "https://pl.indeed.com//rc/clk?jk=3ae9b6871fb43fab&fccid=11f0d4057730c23d&vjs=3"
    },
    {
      "name": "Workday Financials Data Solutions Lead Consultant",
      "company": "Alight",
      "urls": "https://pl.indeed.com//rc/clk?jk=193a7f106db385c4&fccid=c35833abe06c86e0&vjs=3"
    },
    {
      "name": "Technical Marketing Manager - Automotive Electronics ( f/m)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//rc/clk?jk=43efdbb974beda71&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Team Lead",
      "company": "Working Smart Limited",
      "urls": "https://pl.indeed.com//rc/clk?jk=a0e31eef6dd61352&fccid=eb81f98123301883&vjs=3"
    },
    {
      "name": "Director for the Centre for Computational Medicine – Interna...",
      "company": "ExecMind Life Science Executive Search",
      "urls": "https://pl.indeed.com//rc/clk?jk=87b9a2ac226f6051&fccid=4dda44caa328da25&vjs=3"
    },
    {
      "name": "Procurement Process Manager with German(m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//rc/clk?jk=a44b398c47317f40&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Chief Accountant, Accounting to Reporting",
      "company": "Lundbeck",
      "urls": "https://pl.indeed.com//rc/clk?jk=d79b9f54d9f22ae0&fccid=884e0310e97a8b3a&vjs=3"
    },
    {
      "name": "React Native Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com//rc/clk?jk=1580b5bf1a221038&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Junior Ruby on Rails Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com//rc/clk?jk=3ee2b30b299dfdcc&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Ruby on Rails Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com//rc/clk?jk=6f7e6c22857a22b8&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Senior Software Engineer - Mulesoft",
      "company": "QVC",
      "urls": "https://pl.indeed.com//rc/clk?jk=4a0941d4fbb67e1f&fccid=8a4535c948d32e2a&vjs=3"
    },
    {
      "name": "Global Senior Risk and Internal Control Manager",
      "company": "Goodminds",
      "urls": "https://pl.indeed.com//rc/clk?jk=df109f7a62d6c8ae&fccid=11f0d4057730c23d&vjs=3"
    },
    {
      "name": "Senior Software Engineer - React",
      "company": "WP Engine",
      "urls": "https://pl.indeed.com//rc/clk?jk=1979abe89866df75&fccid=966a8dd715d10eb7&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=9b1ab4b7fbde4e55&fccid=6e3a4fe249b84d43&vjs=3"
    },
    {
      "name": "Python Senior Developer",
      "company": "Investio",
      "urls": "https://pl.indeed.com//rc/clk?jk=81de3d8912c00032&fccid=c5b0414455b5af46&vjs=3"
    },
    {
      "name": "Specjalista ds. nowych biznesów",
      "company": "Mia Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=6d5cb76e96f658d5&fccid=0c143c026c0aaa11&vjs=3"
    },
    {
      "name": "Senior Brand Manager CEE",
      "company": "HEADHUNTERS GROUP",
      "urls": "https://pl.indeed.com//rc/clk?jk=fee091c2def42c3f&fccid=2626896dbec10c5d&vjs=3"
    }
  ],
  "470": [
    {
      "name": "Digital Analytics Specialist",
      "company": "Bidroom Poland",
      "urls": "https://pl.indeed.com//rc/clk?jk=e2f78629f64f82a5&fccid=3661982007b43fee&vjs=3"
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
      "name": "Content Analyst - Portuguese Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-portuguese-speaker-online-recruitment_3410800.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-bulgarian-speaker-online-recruitment_3410804.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Finnish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-finnish-speaker-online-recruitment_3410806.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Greek Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-greek-speaker-online-recruitment_3410808.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-italian-speaker-online-recruitment_3410812.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Norwegian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-norwegian-speaker-online-recruitment_3410814.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-romanian-speaker-online-recruitment_3410816.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-spanish-speaker-online-recruitment_3410820.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Turkish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-turkish-speaker-online-recruitment_3410822.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-ukrainian-speaker-online-recruitment_3410824.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3410826.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "CSR Online Advertising Specialist - Hungarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-hungarian-speaker-online-recruitment_3410830.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "CSR Online Advertising Specialist - Latvian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-latvian-speaker-online-recruitment_3410834.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "CSR Online Advertising Specialist - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-romanian-speaker-online-recruitment_3410836.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Analyst - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-german-speaker-online-recruitment_3410746.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Analyst - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-french-speaker-online-recruitment_3410740.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Analyst - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-italian-speaker-online-recruitment_3410748.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Analyst - Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-russian-speaker-online-recruitment_3410750.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Analyst - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-spanish-speaker-online-recruitment_3410752.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-french-speaker-online-recruitment_3410758.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-german-speaker-online-recruitment_3410760.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Russian or Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-russian-or-ukrainian-speaker-online-recruitment_3410764.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-slovak-speaker-online-recruitment_3410766.html#55a0434a5c48694965301d14f33b295c"
    }
  ],
  "475": [
    {
      "name": "Content Analyst - Portuguese Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-portuguese-speaker-online-recruitment_3410800.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-bulgarian-speaker-online-recruitment_3410804.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Finnish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-finnish-speaker-online-recruitment_3410806.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Greek Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-greek-speaker-online-recruitment_3410808.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-italian-speaker-online-recruitment_3410812.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Norwegian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-norwegian-speaker-online-recruitment_3410814.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-romanian-speaker-online-recruitment_3410816.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-spanish-speaker-online-recruitment_3410820.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Turkish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-turkish-speaker-online-recruitment_3410822.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-ukrainian-speaker-online-recruitment_3410824.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3410826.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "CSR Online Advertising Specialist - Hungarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-hungarian-speaker-online-recruitment_3410830.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "CSR Online Advertising Specialist - Latvian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-latvian-speaker-online-recruitment_3410834.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "CSR Online Advertising Specialist - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-romanian-speaker-online-recruitment_3410836.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Analyst - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-french-speaker-online-recruitment_3410740.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Analyst - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-german-speaker-online-recruitment_3410746.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Analyst - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-italian-speaker-online-recruitment_3410748.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Analyst - Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-russian-speaker-online-recruitment_3410750.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Analyst - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-spanish-speaker-online-recruitment_3410752.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Dutch Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-dutch-speaker-online-recruitment_3410756.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-french-speaker-online-recruitment_3410758.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-german-speaker-online-recruitment_3410760.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-online-recruitment_3410762.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
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
      "name": "Senior FP&A Analyst with German [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/senior-fp-a-analyst-with-german-rekrutacja-online_3389128.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Senior FP&A Analyst [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/senior-fp-a-analyst-rekrutacja-online_3389134.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Data Associate with German",
      "company": "ManpowerGroup",
      "urls": "https://www.praca.pl/data-associate-with-german_3422244.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "FP&A Analyst with German [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/fp-a-analyst-with-german-rekrutacja-online_3389132.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "FP&A Analyst [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/fp-a-analyst-rekrutacja-online_3389136.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Senior Financial Analyst (Business Controllership) [Rekrutacja prowadzona online]",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-financial-analyst-business-controllership-rekrutacja-prowadzona-online_3411258.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Teradata Technical Analyst ",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/teradata-technical-analyst_3337152.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-business-analyst_3383726.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Analityk Finansowy",
      "company": "Fagron sp. z o.o.",
      "urls": "https://www.praca.pl/analityk-finansowy_3409816.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Benefit Policy Analyst with Spanish [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/benefit-policy-analyst-with-spanish-rekrutacja-online_3379030.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Data Analyst with Python",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/data-analyst-with-python_3372270.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Starszy analityk finansowy",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/starszy-analityk-finansowy_3412000.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Starszy analityk finansowy",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/starszy-analityk-finansowy_3408198.html#35149d941c62dd9bfa41889f97912f14"
    }
  ],
  "477": [
    {
      "name": "Kierownik ds. E-commerce",
      "company": "heban sp. z o.o. sp. komandytowa",
      "urls": "https://www.praca.pl/kierownik-ds-e-commerce_3404394.html#a0e5184996d917155857d91461689a30"
    },
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
    }
  ],
  "478": [
    {
      "name": "2D Motion Graphic Designer (Remote job)",
      "company": "BlueNovius B.V.",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0CxWL70UE5jkIv_noKNDoLK8y6OxADWStmAjDo5aoL6r4ENk27nIgGDBPxdr_lAbfesDglkbXJwCcdQXo9SLFmTVzjlMWDbbM8Gx-Rfwfw26QjghnUCp4nSdSyvCgaRhmJDZzhh5Dz6nO3SL7yyLMOnX9lVJvah5h3MHkBg83MtGplaQxCmEXze9WXw5KP6Jk57oQMiKYcl_y2oHuQC4LZBm5C6OEd1bxm_vMQoWqCqPTtkrAnNMMtnhklQkh9VdLNwH7wiaTx5WOHyDAD7myZfUOC6al1nnbEblw7dQWGvmuuFOFsgYmpjjI1piWc2ytU7nS3UjijnLIzBuqjzSKR5TMu89TkOJ-B1JFJ-bIIDBYDsg5_qGN68cd4jne6ChuPhwdIW96P7XY2Q3VwHcm-YvMxBZ03usqgmdXUXlUskqEzK3tfPn-JZl0iXJUADbOtOuQYswGKdR-i5gvNCmkcvxsixbGguXFo=&p=0&fvj=1&vjs=3"
    },
    {
      "name": "Visual Media Designer",
      "company": "Jacobs",
      "urls": "https://pl.indeed.com//rc/clk?jk=9b3ba8c1b66b6a33&fccid=de56d7554bea5214&vjs=3"
    },
    {
      "name": "Visual Designer (Freelancer)",
      "company": "Miquido",
      "urls": "https://pl.indeed.com//rc/clk?jk=775a02a02a2720b8&fccid=b7117f8974cf5be7&vjs=3"
    },
    {
      "name": "Web Designer",
      "company": "MOTIFE",
      "urls": "https://pl.indeed.com//rc/clk?jk=1bf1743c91e11e4d&fccid=4c6f3b2aba1982e4&vjs=3"
    },
    {
      "name": "UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=be38b941f8b99086&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Graphic Designer",
      "company": "Jacobs",
      "urls": "https://pl.indeed.com//rc/clk?jk=46d212bf696fd27e&fccid=de56d7554bea5214&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=e60f52063a358e4d&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=dc96c47533aa4f92&fccid=3e41fd04722e7f1d&vjs=3"
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
      "name": "Power Grids – Internship – User Experience Designer",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=1ade5f362c781f17&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Electronics Designer – Hardware",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=c635afe05988b155&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Electronics Designer – Hardware & Firmware",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=f52253779d54ebd3&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Senior Graphic Designer&Team Leader (Principles Team)",
      "company": "Admind",
      "urls": "https://pl.indeed.com//rc/clk?jk=4150914dadcd5f9f&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Senior Game Designer",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com//rc/clk?jk=5ee6464614937cb7&fccid=c26d104f25f1364f&vjs=3"
    }
  ],
  "481": [
    {
      "name": "Web Designer",
      "company": "MOTIFE",
      "urls": "https://pl.indeed.com//rc/clk?jk=1bf1743c91e11e4d&fccid=4c6f3b2aba1982e4&vjs=3"
    }
  ],
  "482": [
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
      "name": "Junior/Mid Scrum Product Owner",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/junior-mid-scrum-product-owner_3380806.html#58ec3734becff61310d83aee90bba3f5"
    },
    {
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#58ec3734becff61310d83aee90bba3f5"
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
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3410826.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Hungarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-hungarian-speaker-online-recruitment_3410830.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Latvian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-latvian-speaker-online-recruitment_3410834.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-romanian-speaker-online-recruitment_3410836.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3410782.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist – Czech or Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-czech-or-slovak-speaker-online-recruitment_3410776.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Lithuanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-lithuanian-speaker-online-recruitment_3410778.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist – Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-speaker-online-recruitment_3410788.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-spanish-speaker-online-recruitment_3410794.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Russian/Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-ukrainian-speaker-online-recruitment_3410798.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "Moderator treści w social media z językiem niemieckim (m/k)",
      "company": "CPL JOBS Sp. z o.o.",
      "urls": "https://www.praca.pl/moderator-tresci-w-social-media-z-jezykiem-niemieckim-m-k_3407172.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3376758.html#02df4f061b58bf8b20fd41aba0c30fb6"
    }
  ],
  "485": [
    {
      "name": "Specjalista ds. Marketingu Internetowego",
      "company": "Veneo",
      "urls": "https://pl.indeed.com//rc/clk?jk=2a129de4bbf6d38c&fccid=d055a1ba91135454&vjs=3"
    },
    {
      "name": "Specjalista ds. marketingu produktowego",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=969751576370afe5&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Specjalista ds. kampanii marketingowych (SEM)",
      "company": "PromoTraffic",
      "urls": "https://pl.indeed.com//rc/clk?jk=01fecd4da9a94534&fccid=e29fd57cbddac110&vjs=3"
    }
  ],
  "486": [
    {
      "name": "Specjalista ds. Kalkulacji - Hydrotechnika (m / k)",
      "company": "STRABAG Sp. z o.o. / Dyrekcja Budownictwa Ogólnego...",
      "urls": "https://pl.indeed.com//rc/clk?jk=1393ffc3f31db815&fccid=8fdcbe58c8fef8e5&vjs=3"
    }
  ],
  "487": [
    {
      "name": "Fulfilment Planner",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=4529547ae3200662&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Strategic Planner",
      "company": "Admind",
      "urls": "https://pl.indeed.com//rc/clk?jk=2752f0b14716c99e&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com//rc/clk?jk=f906cf3cfe85651a&fccid=a7f110d3869433f8&vjs=3"
    }
  ],
  "488": [
    {
      "name": "Service Transition Manager",
      "company": "Mindbox S.A.",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0BaDYljZMhkKDnc4AqWj36yHFwjJEy2Z3ebLnKcx54z9u5ukLvEIsA3ULbuXq8IiDyt5e0lZSyqY4Q81MG9RZSAUJKqJ1QdJmovzl3GwSFf8JHEjRNodKizTsgrXDfLxQ_BHqhalxjpajpa9-Hf_3nh1e7jyr0l8steWwdeqlTqw1sp99gPcFEAwln6KThX9VG1zzZNoJVzN0J_b4OohsS7RZ2xbN7EGK43oz6yvZbTwolLz6jw26a_QR9Ox_7loHBa3PjmmP3Iv0VUQKDtZ9HJg1R9cBc3JQBuML10RMKJ2es_STcxrllTdJMTuqQjCU5wzTsCBtTMNogO-ZtclHF1MtzyEO9TQoEjT0b9cR8o0vsZqPZgw8vNhkARN7-K3szkrxO0OH5vQ1Yp3LvtNprIKlBkUFQlZD-gZU9p-xnj4ozGGSRLsLHgIarStsC77NBgutuxuOEBxzhslTytQYc6u5ytdpkb9LTlUraCnCp-T-kMj_Xa5GQfgsnEledZXHGPzaVqnL6fZ3MSOGJ9AwiJQpU6UAWFwbl-wrY9DMpJ_fbr-_GD9Ql9ysPPdW3uXelGt4t4itMhytwtd33g99untBX998dZJfbQq7Fa5okk3wKC-zSzVqWbGlyY2OK6fJlVq4Cy9AripMltxQJxNCtlfmBnxmvaMdGLXhzJJg3-nKynOMYrQ76TE3hhUAAegQY=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Traffic Manager",
      "company": "BeDigital",
      "urls": "https://pl.indeed.com//rc/clk?jk=ffe147b33eaa3cc2&fccid=d216bde0f83047fa&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com//rc/clk?jk=f906cf3cfe85651a&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Web Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com//rc/clk?jk=9bd2b12f90e69e28&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Digital Analytics Specialist",
      "company": "Bidroom Poland",
      "urls": "https://pl.indeed.com//rc/clk?jk=e2f78629f64f82a5&fccid=3661982007b43fee&vjs=3"
    },
    {
      "name": "Logistics Specialist",
      "company": "Akamai",
      "urls": "https://pl.indeed.com//rc/clk?jk=5d55e66d613ca9f5&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "F5 Engineer - Global F5 Centric Footprint",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com//rc/clk?jk=d9bb1a6473ca6702&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Project Manager - Infrastructure Delivery",
      "company": "Akamai",
      "urls": "https://pl.indeed.com//rc/clk?jk=a6dcf4accd3d66de&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Security Engineer Zscaler",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com//rc/clk?jk=3add5ef8110732b9&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Client Service Manager (CSM) with Italian",
      "company": "Devire",
      "urls": "https://pl.indeed.com//rc/clk?jk=3a0780603895ed42&fccid=dac7798bc9cb142c&vjs=3"
    },
    {
      "name": "Kierownik Robót (Solution Deployment Manager)",
      "company": "Thales Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=71ab7b696762fe62&fccid=b920aab5fd60595d&vjs=3"
    },
    {
      "name": "E-commerce Marketing Specialist",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=81c413859cfc1c03&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Client Service Manager (CSM) with French or German",
      "company": "Devire",
      "urls": "https://pl.indeed.com//rc/clk?jk=3e26c7de837ac00c&fccid=dac7798bc9cb142c&vjs=3"
    },
    {
      "name": "Senior Solutions Architect",
      "company": "Akamai",
      "urls": "https://pl.indeed.com//rc/clk?jk=9d7366fd5f08bb98&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Solutions Architect II with French",
      "company": "Akamai",
      "urls": "https://pl.indeed.com//rc/clk?jk=f3868be17eec4177&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Senior Software Engineer - React",
      "company": "WP Engine",
      "urls": "https://pl.indeed.com//rc/clk?jk=1979abe89866df75&fccid=966a8dd715d10eb7&vjs=3"
    },
    {
      "name": "JD for Senior Consulting Engineer DC Compute",
      "company": "Tech Talent Consulting",
      "urls": "https://pl.indeed.com//rc/clk?jk=8cef2a87c2d17f6c&fccid=3bf38324457ca337&vjs=3"
    }
  ],
  "489": [
    {
      "name": "Power Grids – Internship – User Experience Designer",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=1ade5f362c781f17&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Junior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=05561223627ea708&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Product Designer",
      "company": "Motorola Solutions",
      "urls": "https://pl.indeed.com//rc/clk?jk=dc9bd51d858022fa&fccid=22ec6ef3cc441ac2&vjs=3"
    },
    {
      "name": "UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=be38b941f8b99086&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Web Designer",
      "company": "MOTIFE",
      "urls": "https://pl.indeed.com//rc/clk?jk=1bf1743c91e11e4d&fccid=4c6f3b2aba1982e4&vjs=3"
    },
    {
      "name": "UX Designer (Finanse)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=e92f69f00f53fe48&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Senior Product Designer",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com//rc/clk?jk=5834b9e123fc4492&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "Senior Product designer",
      "company": "unatrix",
      "urls": "https://pl.indeed.com//rc/clk?jk=fde36f7e3231afa1&fccid=04a193c8b03a233d&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=e60f52063a358e4d&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "UX Designer (ERP)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=0bad393ae110a11c&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Web Designer / UX specialist",
      "company": "Webchefs",
      "urls": "https://pl.indeed.com//rc/clk?jk=cdf0c98992eb4aa5&fccid=458dd1bc5b9928b4&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=dc96c47533aa4f92&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Senior Graphic Designer&Team Leader (Principles Team)",
      "company": "Admind",
      "urls": "https://pl.indeed.com//rc/clk?jk=4150914dadcd5f9f&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Senior Game Designer",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com//rc/clk?jk=5ee6464614937cb7&fccid=c26d104f25f1364f&vjs=3"
    },
    {
      "name": "ABOUT US",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com//rc/clk?jk=59c0c356987323eb&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "Learning Designer&Training System Specialist",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=1426a67502f515f9&fccid=3e41fd04722e7f1d&vjs=3"
    }
  ],
  "490": [
    {
      "name": "Angular Developer",
      "company": "At provider poland sp.z.o.o.",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0CrOs_aCXrtuVRUo5udUwhQgQCCuHMpeM2SQfFxFRQfISk4aqobRnqxqoflj2fBVU4hs85nyYZvt0d5Js1uFEOnNZHGhv9-xDfW_FAQQeE8_fP4AlTXc2BgfL2jwZ_S3sOT5yJko_TfI8KNXt9IXS_RTXwJhhbPA72sRmbsS9JCtWNa27rxgyVuRN5WP852YsW8aDLU5TRqpaYkZw1sBHNtCrYIIv6WSrQ2OPewKH2T_OCOxrxrDOoTMuIToTUHp68pZU70fnCIKue8KkEglLD3yhfstj-117U2DePsLwLaqj7eA63HNmnr0OP-zmQJnUFrucIUtZ2uiGf26pC9QzZjn_F9AppRpCCSmXVmhhVhiWYLIH0FyuwT86Ilnpyqz-fC1ggILVRR-a0alN3qf5E-vCH1RhMZ7LbgnniY1Y7biCp-liCOmttu-pvgwTPU_yzJSX-0gbIfzoSKZykB_IslIM-yOT1Q0FzoZjCbend7EpIqFmu6E6munN_NGMhnOyI1NFYeetMn_LDpnM58RaBbcgboEQ6lV3uxf6UushplnUSgUPgeQrxLYJY6uHfMtDYYn8BzEYOhYRdBaLJrqBs_TEOeis9gq9dT0JuKhkVT2UG9YxMHa73V&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Microservices Integration Engineer",
      "company": "Amway Global Business Services",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIdMwMc7ezk_p_PkoolEgBmKR83BBGTCCDQM4nphSgDarbGN7399hkJjUAmutZUxvjS5Hegv_4q140K2yUWF6FzcrpZZnQCOBleRaIkCzUAiWSxvFHyoRA6eNpmS1lHbigo1Aqb0FAQRzsaC9KB_SDpsH9zGwQMgFAE0HZuTy8epBaufLDSKBWys1g4tgLDs7pyPqlu2faWx4t-kxAyWx7ouEcfgyCtZdCE1YnXEjsQJ9k13tgrWhU7QP8I-VP5jm861FLhkwKzpuJoN5UFyQvvjbnB8Tb09ezvNLgoSkzRnx-c8cj2v9spDjIvGZxaa7kUgIJ6oOaCQOI1oRIOx6LB5nrxtmZFX0gRggGP9HFafaRCrIyVm-1zKpWh0CTg0DuqC8U4yFTt4PmyjmjHSoeRxucK_euWIUv5Up5vcPFStZ640oO1YGU3Dn0YQjh9Ak0VQlDF0G3HH_m5ACK8IoESa7vu4b02mLAQoWALOySU5zLZzVOZx3eCQ33dH0mARzFbT0vHVjGOwLPtEpjRCa1TbGfniwkf8lTLR1vsg63j02BYOEnI-J8XPFgBKrCzm6SZvsSzpNMNvOGE-Lh4UH3zFa8F5pdKYYf4sHZMvUBSua7haaIQedBbPDaEJbF3vdqW0-YO7cZiC_vSg3Jsjh5Ah&p=1&fvj=0&vjs=3"
    },
    {
      "name": "React Developer",
      "company": "Making Waves",
      "urls": "https://pl.indeed.com//rc/clk?jk=d3f63dcb1100ffc1&fccid=eb14cce8232d9a6c&vjs=3"
    },
    {
      "name": "UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=be38b941f8b99086&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Front End Software Developer - (Krakow)",
      "company": "h2o.ai",
      "urls": "https://pl.indeed.com//rc/clk?jk=cfbb605157c80b53&fccid=41a5a100828398e1&vjs=3"
    },
    {
      "name": "Power Grids - C#/.NET Developer for Network Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=4edfed7f8a320bcb&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Software Developer Level",
      "company": "CRIF",
      "urls": "https://pl.indeed.com//rc/clk?jk=72594e5ab1bb228c&fccid=7a2798bb3678d68a&vjs=3"
    },
    {
      "name": "Software Developer II",
      "company": "CRIF",
      "urls": "https://pl.indeed.com//rc/clk?jk=1349d8bf9d6ef3f9&fccid=7a2798bb3678d68a&vjs=3"
    },
    {
      "name": "Full Stack Developer",
      "company": "Try Codnet",
      "urls": "https://pl.indeed.com//rc/clk?jk=8017d91a0e626e42&fccid=6938dd7585d85504&vjs=3"
    },
    {
      "name": "Senior Javascript Developer",
      "company": "ProData Consult",
      "urls": "https://pl.indeed.com//rc/clk?jk=4a6eb7a2b0ff7fed&fccid=fa336ade0bd80ccd&vjs=3"
    },
    {
      "name": "Frontend Developer",
      "company": "ManpowerGroup Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=18f63657b6889da6&fccid=1a17983a910f73d8&vjs=3"
    },
    {
      "name": "ReactJS Software Engineer",
      "company": "Pulsate Mobile",
      "urls": "https://pl.indeed.com//rc/clk?jk=8c4d9b58f1ecece7&fccid=b4056e2de55537c8&vjs=3"
    },
    {
      "name": "iOS Developer",
      "company": "Net2source Global Workforce Solutions Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=9f9718eed86b11da&fccid=96ad8dbc86ceeb6e&vjs=3"
    },
    {
      "name": "Web Developer",
      "company": "Working Smart Limited",
      "urls": "https://pl.indeed.com//rc/clk?jk=5527b145aa3574c1&fccid=eb81f98123301883&vjs=3"
    },
    {
      "name": "Java Developer",
      "company": "Devire",
      "urls": "https://pl.indeed.com//rc/clk?jk=03ff31a72cddc973&fccid=dac7798bc9cb142c&vjs=3"
    },
    {
      "name": "AngularJS Developer",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=30da4a75737f2bc7&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=e60f52063a358e4d&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Senior Front-End Developer",
      "company": "Webchefs",
      "urls": "https://pl.indeed.com//rc/clk?jk=d1154792805ef342&fccid=458dd1bc5b9928b4&vjs=3"
    },
    {
      "name": "Senior .Net Developer",
      "company": "Eagle Eye Staffing Sp. Z.o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=0afdee461b0f4582&fccid=088c5427b376f0ee&vjs=3"
    },
    {
      "name": "Mid Full Stack Developer",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=b17119c38db3e8f2&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Frontend Developer",
      "company": "Experis",
      "urls": "https://pl.indeed.com//rc/clk?jk=70625b732d603d00&fccid=ca2b244e2a15ca5c&vjs=3"
    },
    {
      "name": "Microservices Integration Engineer",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIedI4sSciZdaKzWKVg_T1zuyhd9feKXm3basbMG59gzq1gS21GAqSJ_K7dFzUvkpHWX6E7e-Ngf4uiCTPQmtne5oA7EKvonwT9EmLzQagn1YCLEPjg2h0EF1WrwOy7dojLZVjrtQYzpCE6m2TRpIs6NCqj-CMjyhQP-J1pgnxTPhkcClfHp0rR8XQFXTbcahoVmrwWr5TFmAMaprO-fp0Irqr5n62ghS4LmreY-wti78NoaBRt4PAvGvwo9jfFWreZhTiJfu7c-k96GgwfFibpNXrHwxlpAQaoagJdRmA_K_Mcho7Boo_jsBE-hOZE5CTFwIgPtb_Z1p8NOPZGT1fV6NPJtfjdESO6PaWpfb8HByMogSiSYvfEFnC0zcdH7ej4I1J0TQ3a4Xu8h72jV4BZ74I22c88GCIN1vtqlPq5iDlBHlvTzZgUXVytUK4WEtmcIFdwMfs5Hqnlt66XTKmVTGN8zt6uY_2c1x856dJBT-du9LYkENEfybrgI4s1ejYoae_6jMITb9UYsIvPZ6UoXYGgrmf-eQB669T9irYdpI1KIPOAoPZMAZVe9zlg47NSIgN7mqcmoUni5fMJOBik-VthAGSGqBRHLI30UC9ZE8J_lace0iCtuXfvBZCE5kLV1ruZX8UY9Is8MqOfghSLHRZ9HWHXN5pAOuFXqnN721A==&p=12&fvj=0&vjs=3"
    },
    {
      "name": "API / Microservices Integration Engineer",
      "company": "Amway Global Business Services",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIe8teuQF_6LdakARRgEohZHICrnz84_fBqEj0p7PLXIfltdUz7pCh8GeAQhGighDB6NuU9OhZEJ8uMhn6SjQs7DsgGkZ5-jdKo3QRDCiov75XKV5QWJRTGnfeHjNEsAiMw89z-kEep-D-6wWc-Y6gkYcR89E0wraZaS7TiB2jELTNzMuffufyMw8_NoxE5QArtzCwXQgrnYEWvzhgHJK79d_7JZA_o7NQUTW0QrbP002vwlXLyvJ5Gk9YcWHhx75ScV5Y7Ybgd-Us73t3RI_uBKkylzxDdHbrW5Kzxo3zkHpOLsrFI4jaAQ_-QYmaKcZBivfeRSs5c-7Dw5GsWWKOfLtgCg43Jk5bxzH2MC6bSRTjSZ_ALR7kK1TejQw7AKkW-2vg-MX5lDVd-lzqXmovAXv44o0D-7k6DF4AVNA1s7-bLwPshZ97m3b5NsJaPoHT1x2vI4nhhuss7kLX85dCQrFcLQ3LdIlcc--yhbPawTTmquPFuLBMMEurZ727oz3F5H7UQ4jMcKd0Bf2eXmJQ6pC2ZvszP7PwzkpvB4rJHPIZnQXeXTD-1NqVnboRXGlo0AKHz6D-JgTACyqr_ntDfnslpFniayJ5BzfWHMnBxthlHMoQad4Tn6D5UkRfoNT7EOvsEEUP7bF9cUsCNCjGxUW2cVelDSM_k=&p=13&fvj=0&vjs=3"
    },
    {
      "name": "Java Fullstack Developer",
      "company": "Sii Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=fe548fe8d4b2d9de&fccid=291f67da0c0c0d67&vjs=3"
    },
    {
      "name": "IOS Developer",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=e6bd5b7e408cbb4d&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Senior Java Developer",
      "company": "Devire",
      "urls": "https://pl.indeed.com//rc/clk?jk=409cfacdf646944f&fccid=dac7798bc9cb142c&vjs=3"
    },
    {
      "name": "Java 8 Full-stack Developer",
      "company": "Verita HR Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=b20dec846e560f66&fccid=e265b982603f34bc&vjs=3"
    },
    {
      "name": "Senior Full Stack Software Engineer (Java and/or Angular)",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=21cb3a753bdbd2cf&fccid=532afac41b2663f7&vjs=3"
    }
  ],
  "491": [
    {
      "name": "Szef Działu Wentylacji i Klimatyzacji",
      "company": "Proguest Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=66916e99a659fd5b&fccid=e9bc886abaa81536&vjs=3"
    },
    {
      "name": "Praca Monter/Pomocnik Instalacji Klimatyzacji",
      "company": "Firma Instalacyjna Wentylacyjno Klimatyzacyjna",
      "urls": "https://pl.indeed.com//rc/clk?jk=bc153864344c3a28&fccid=9e665fb383a2cec8&vjs=3"
    },
    {
      "name": "Inżynier sprzedaży, branża HVAC",
      "company": "Proguest Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=974674f4ab75c076&fccid=e9bc886abaa81536&vjs=3"
    }
  ]
}
