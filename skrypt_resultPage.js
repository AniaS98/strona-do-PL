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
      "name": " (Junior) Analyst ",
      "company": " Ework Group ",
      "urls": "https://nofluffjobs.com/pl/job/junior-analyst-ework-group-krakow-oaeuvq0m"
    },
    {
      "name": " Junior RPA Developer ",
      "company": " ESGROUP ",
      "urls": "https://nofluffjobs.com/pl/job/junior-rpa-developer-esgroup-krakow-lacjmjb6"
    },
    {
      "name": " Junior JavaScript Developer ",
      "company": " Black Label ",
      "urls": "https://nofluffjobs.com/pl/job/junior-javascript-developer-black-label-krakow-u3cvqfui"
    },
    {
      "name": " Junior Frontend Developer ",
      "company": " Kambu Sp. z o.o. ",
      "urls": "https://nofluffjobs.com/pl/job/junior-frontend-developer-kambu-krakow-kncsmspq"
    },
    {
      "name": " IT Analyst with Dutch and English ",
      "company": " Soitron Sp. z o.o. ",
      "urls": "https://nofluffjobs.com/pl/job/it-analyst-with-dutch-and-english-soitron-krakow-vsxbyibu"
    },
    {
      "name": " AppDynamics EUM/BizIQ Software Engineer ",
      "company": " Cisco Systems ",
      "urls": "https://nofluffjobs.com/pl/job/appdynamics-eum-biziq-software-engineer-cisco-systems-krakow-4bj6q1tu"
    },
    {
      "name": " Atlassian Support Engineer ",
      "company": " Mindbox S.A. ",
      "urls": "https://nofluffjobs.com/pl/job/atlassian-support-engineer-mindbox-krakow-coitnsbl"
    },
    {
      "name": " Software Developer in Test ",
      "company": " Akamai Technologies ",
      "urls": "https://nofluffjobs.com/pl/job/software-developer-in-test-akamai-technologies-krakow-r6pfykqu"
    }
  ],
  "1": [
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    },
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
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
    }
  ],
  "7": [
    {
      "name": "Kierownik Wiertni na powierzchni",
      "company": "Przedsiębiorstwo Budowy Kopalń PeBeKa S.A.",
      "urls": "https://www.pracuj.pl/praca/kierownik-wiertni-na-powierzchni-malopolskie,oferta,7521538"
    },
    {
      "name": "Spróbuj zaaplikować bez oferty!",
      "company": "Kopalnia Surowców Skalnych „Klęczany” Sp. z o. o.",
      "urls": "http://www.ksskleczany.pl/content.php?body=article&name=oferta-pracy&lang=pl"
    }
  ],
  "8": [],
  "9": [],
  "10": [],
  "11": [],
  "12": [],
  "13": [
    {
      "name": "Inżynier Elektronik – Konstruktor",
      "company": "2Bora",
      "urls": "https://pl.indeed.com/viewjob?jk=1412ed0791ddda41&fccid=81eeaa9aaf867a65&vjs=3"
    },
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier budowy",
      "company": "TOR-KRAK",
      "urls": "https://pl.indeed.com/viewjob?jk=45ea9c17e10c90e6&fccid=7b6043ac7d4ffc11&vjs=3"
    },
    {
      "name": "Inżynier Wsparcia Technicznego IP - z językiem angielskim",
      "company": "ELFON",
      "urls": "https://pl.indeed.com/viewjob?jk=b679e1353319d5c7&fccid=2c4afa11216a4599&vjs=3"
    },
    {
      "name": "Inżynier ds kalkulacji / przygotowania produkcji (m / k",
      "company": "STRABAG Infrastruktura Południe Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=e67453e66a025c10&fccid=91ff00d5203b00da&vjs=3"
    },
    {
      "name": "Praktyki dla studentów ze specjalizacją kolejową",
      "company": "Budimex",
      "urls": "https://pl.indeed.com/viewjob?jk=4cd9c0f30b46e8a5&fccid=5d51f1a9a1d3d458&vjs=3"
    },
    {
      "name": "Inżynier Jakości - oferta z pakietem relokacyjnym",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=a66331984ffbbc59&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Inżynier Automatyk PLC",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=db5567b482026e7b&fccid=8768f8af165a1d65&vjs=3"
    },
    {
      "name": "Senior Software Engineer",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com/viewjob?jk=562c72dc7345b279&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Active Safety Systems Engineer",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "EMBEDDED SOFTWARE ENGINEER",
      "company": "Loycon",
      "urls": "https://pl.indeed.com/viewjob?jk=ea6bcccc13cf9ce4&fccid=7129a6c6479d89d1&vjs=3"
    },
    {
      "name": "Inżynier Procesu Automotive Greenfield",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=83af8b65d67f08d7&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Mistrz Produkcji",
      "company": "Myworknet Sylwia Ottka",
      "urls": "https://pl.indeed.com/viewjob?/Myworknet-Sylwia-Ottka/jobs/Mistrz-Produkcji-3435f660d9377a14?fccid=056638f96335ad64&vjs=3"
    },
    {
      "name": "Inżynier Procesu / Produkcji - oferta z pakietem relokacyjny...",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=eba88f7f76130589&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Sales Engineer",
      "company": "CELLCO COMMUNICATIONS",
      "urls": "https://pl.indeed.com/viewjob?jk=0525b90c6ac868da&fccid=b4f11fc1f32b29f5&vjs=3"
    },
    {
      "name": "Frontend Software Engineer",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=f9282b19d2eca2cf&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Java Software Engineer",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=036ee4e6506ca4c2&fccid=062f71e131e87cf0&vjs=3"
    }
  ],
  "14": [
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
      "name": "Doradca Klienta Biznesowego",
      "company": "Inter Consult S.A.",
      "urls": "https://www.praca.pl/doradca-klienta-biznesowego_3444068.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Doradca ds. Klientów Zamożnych [rekrutacja online]",
      "company": "Aragonit Asset Management Sàrl",
      "urls": "https://www.praca.pl/doradca-ds-klientow-zamoznych-rekrutacja-online_3396840.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Junior Finance Specialist Portuguese Speaker",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/junior-finance-specialist-portuguese-speaker_3412940.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Credit and Collections Junior Specialist with Dutch",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/credit-and-collections-junior-specialist-with-dutch_3412948.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Starszy Opiekun Finansowy",
      "company": "Stefczyk Finanse",
      "urls": "https://www.praca.pl/starszy-opiekun-finansowy_3391924.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Opiekun Finansowy",
      "company": "Stefczyk Finanse",
      "urls": "https://www.praca.pl/opiekun-finansowy_3391926.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Przedstawiciel Ubezpieczeniowy Premium ",
      "company": "Nationale-Nederlanden",
      "urls": "https://www.praca.pl/przedstawiciel-ubezpieczeniowy-premium_3436464.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Doradca Klienta",
      "company": "Compensa Towarzystwo Ubezpieczeń na Życie S.A. Vienna Insurance Group",
      "urls": "https://www.praca.pl/doradca-klienta_3420320.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Doradca Ubezpieczeniowy [rekrutacja online]",
      "company": "PZU Życie S.A.",
      "urls": "https://www.praca.pl/doradca-ubezpieczeniowy-rekrutacja-online_3426012.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Ekspert finansowy",
      "company": "Expander",
      "urls": "https://www.praca.pl/ekspert-finansowy_3404718.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Mobilny Ekspert Finansowy",
      "company": "Expander",
      "urls": "https://www.praca.pl/mobilny-ekspert-finansowy_3404582.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Opiekun Klienta",
      "company": "mFinanse S.A.",
      "urls": "https://www.praca.pl/opiekun-klienta_3380474.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Specjalista w mKiosku",
      "company": "mFinanse S.A.",
      "urls": "https://www.praca.pl/specjalista-w-mkiosku_3380506.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Partner ds. Sprzedaży produktów inwestycyjnych [rekrutacja online]",
      "company": "LEXITOR SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "urls": "https://www.praca.pl/partner-ds-sprzedazy-produktow-inwestycyjnych-rekrutacja-online_3335484.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Asystent finansowy",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/asystent-finansowy_3417698.html#2640201031278b6ee74c7ef09d9df650"
    }
  ],
  "16": [
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
    }
  ],
  "18": [
    {
      "name": "Modszy Administrator ds. Funduszy Inwestycyjnych",
      "company": "HedgeServ",
      "urls": "https://www.pracuj.pl/praca/mlodszy-administrator-ds-funduszy-inwestycyjnych-krakow,oferta,1000275635"
    },
    {
      "name": "Internship  Valuation Controller",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/internship-valuation-controller-krakow,oferta,1000265089"
    },
    {
      "name": "Modszy Specjalista ds. Rozlicze i Analiz ",
      "company": "Aterima Sp. z o.o. Sp.K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-rozliczen-i-analiz-krakow,oferta,1000274862"
    },
    {
      "name": "Junior Financial Analyst",
      "company": "ArcelorMittal Tubular Products Krakw Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-financial-analyst-krakow,oferta,1000256444"
    },
    {
      "name": "Securities Operations Junior Analyst",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/securities-operations-junior-analyst-krakow,oferta,1000273321"
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
      "company": "Znajd wymarzonego pracodawc",
      "urls": "https://www.pracuj.pl/praca/tax-analyst-intern-krakow,oferta,1000201333"
    },
    {
      "name": "Project Controls Specialist",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/project-controls-specialist_3389654.html#eba3e508dad11bda6148877019662394"
    },
    {
      "name": "Kontroler Finansowy/ Manager Działu Kontrolingu",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/kontroler-finansowy-manager-dzialu-kontrolingu_3380982.html#eba3e508dad11bda6148877019662394"
    }
  ],
  "19": [
    {
      "name": "Power Grids - General Accounting Junior Specialist",
      "company": "ABB PG BUSINESS SERVICES SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/power-grids-general-accounting-junior-specialist-krakow,oferta,1000268577"
    }
  ],
  "20": [
    {
      "name": "CSR Online Advertising Specialist - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-bulgarian-speaker-online-recruitment_3410774.html#033436968b55cbe2d68d9311f368a9e5"
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
    },
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3410826.html#033436968b55cbe2d68d9311f368a9e5"
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
    }
  ],
  "21": [
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
      "name": "Strategic Buyer - Electro Mechanics",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com/viewjob?jk=8a4ffcfde3f127e6&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Technology Risk Management Regional Lead",
      "company": "UBS",
      "urls": "https://pl.indeed.com/viewjob?jk=85a82c4bd4b12308&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Lean Six Sigma Black Belt",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=87294ff6effd6333&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Strategic Buyer - Electronics",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com/viewjob?jk=7b92787b3738d086&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Transformation Coordinator - PMO",
      "company": "PepsiCo",
      "urls": "https://pl.indeed.com/viewjob?jk=4af96b7c26ffbf3f&fccid=2973259ddc967948&vjs=3"
    },
    {
      "name": "Project Manager",
      "company": "Grape Up",
      "urls": "https://pl.indeed.com/viewjob?jk=9dd3e9dfc8a55e7d&fccid=cb56c19f081a65a1&vjs=3"
    },
    {
      "name": "Scrum Master",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=69e10406280091df&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=223e749b80e8beb0&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Quality and Continuous Improvement Senior Specialist",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=e3cb6013f28c01a5&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "L1 Local Product Owner",
      "company": "NOKIA",
      "urls": "https://pl.indeed.com/viewjob?jk=6785edf2e1227ddc&fccid=3444e7c94299ba32&vjs=3"
    },
    {
      "name": "IT Program Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=ef3c8c56cc9c5b26&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Global Customer Service Manager",
      "company": "Accenture",
      "urls": "https://pl.indeed.com/viewjob?jk=17fc9d817015d098&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Reporting & Analytics Specialist",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=c104036147ca9061&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Finance Manager",
      "company": "Zurich",
      "urls": "https://pl.indeed.com/viewjob?jk=4ef3ca1f88812291&fccid=34938366d45106af&vjs=3"
    },
    {
      "name": "Finance Manager",
      "company": "Zurich Insurance Group",
      "urls": "https://pl.indeed.com/viewjob?jk=fe7b3569335cf178&fccid=40f6e1ba1aac8472&vjs=3"
    },
    {
      "name": "GBS Procure to Pay (P2P) Lead",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=1bf9012768a5586a&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "iOS Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=91880854e40498a9&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Project Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=99054ffcffc4070d&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Delivery Manager",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=7665c948967f4ece&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "GLOBAL COMPLIANCE & TRADE COMPLIANCE MONITORING & AUDIT LEAD...",
      "company": "Cytiva",
      "urls": "https://pl.indeed.com/viewjob?jk=954c65303ee4cc83&fccid=c46411dafcae5d08&vjs=3"
    },
    {
      "name": "Procurement Business Process Expert",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com/viewjob?jk=53eb823859017842&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "Cyber Insider Threat Analyst",
      "company": "UBS",
      "urls": "https://pl.indeed.com/viewjob?jk=75bf34e864036e30&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Order to Cash (AR) Manager",
      "company": "Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=b5de0e6d32b0bf1f&fccid=eb3baf007981cd9e&vjs=3"
    },
    {
      "name": "Virtual Desktop Product Owner",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=a5727b7d0abc382c&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Scrum Master",
      "company": "TechRecruiters",
      "urls": "https://pl.indeed.com/viewjob?/TechRecruiters/jobs/Scrum-Master-4266128d04b816ed?fccid=ed77772f31d2b9b9&vjs=3"
    },
    {
      "name": "IT Project Leader/Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=598ff89cac1e7ffe&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "GL Accountant with English",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=84707b02c58483e7&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Mobile Application Development",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com/viewjob?jk=795a6f0c9f4ce820&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "Business Analyst",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfyZbLKOePed3PsGKxoOres_QDVabVAyXJ2yUPi9I8bzRp-k6hgmK3q9kCbUfEKXyis_vPJJ1TPB1qlxzSPudLBq-bgCrEX9WvhlHX_rfAp5Z12ewMhPIUYeSpxKLu0hzFu_qtNC7oLgN1B7Rbwz_h0ir4KwbdoIMnDV3METGuP5t2AJokkAPnE6Ue6MzKK4Dh4xW3XpN98iJTd6Eb9E4aJF5YV-6fSDg7fTiQVFscSo9wLhcxPO1X6N1vj8UKxDdDtV0m8C9laa9nstG8Cw0mr-E0Z1kWWHZ2Qvt_V_eMgBHSgm4i-1s0p3Jgt2tDBlvEEGQZ8Ifdkz64_U9e3MiDDjR7KuuLdhhn6PSk1FvwVhb3TuO_h-w43H1tYLKFkg0MK1np5gfixRkiWetx3V1GX6z7nTJASWHhoHuxlb6_NKDovzCii72-iallQ0CLAD1j-RKFJESSc0jnotzZEmMtYYKl-HzYvAauqJ-Uco9mQw4Hck3flUiUIB3_CdwazANsoYLffmrP8bSsZ2-AN8Ameb3qEVApf1pqqiqte1GBSio4Ernu16eY9SpSA5V7r3jQqSzLdDQfDcL6voGn4DPRug-GqY5k9NnH330Y5yP2D9RpmYzjsJK6Z&p=10&fvj=0&vjs=3"
    },
    {
      "name": "Senior Commodity Segement Leader - Electronics",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com/viewjob?jk=e5fc283856da5b31&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "Senior Procurement Analyst",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com/viewjob?jk=0c5268c3deb19212&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "Senior Product Manager",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com/viewjob?jk=b1a26f8b9145c41f&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "Senior Android Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=9272dfdc35a5629e&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Fullstack Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=5f5b61ba67911394&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Java Team Lead",
      "company": "Verita HR Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=2d6026d11d864db3&fccid=e265b982603f34bc&vjs=3"
    },
    {
      "name": "Senior iOS Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=f2c79a96074148e7&fccid=d922f8f253da1011&vjs=3"
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
      "name": "Business Analyst",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=5a29a012e62e2d94&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcth7foDEj52dGZgeuEPu9enIlBGomDuRPbABSYtT_wnUF6Zt_nAlKZGD_7qKog4KHU_dCR22fcdDAiplELewuih8FUXZNEpfbRewvt9WgW_lQsnJ5PqtLUJ2GgMkNr6oA5RRDIto_GOFLjjTMr_jUjO-zudbB8D2F7bbd7ieTZOOTqGyyHh5WIYAQ2aASpGZUn2ZmN-RXuJJyqfF0eZ2muZ9AJZg7OZlRf6KMOztcCIwh0pIAGyB0V_Z0ssN2imVpkeTjD2Bhi8pT_suXZjl0tAdKKhr9oza39ygFCfZQhsIHVaRq4W73friYAwBTBSpGT0KCRt7b0LeROoe8s_ciU3av6P-JmHFWRFM_pTrT4p-LRHce8_FM_3FoU51tWhtR1chNvjKQu5Kq7NOXHTzkd7xwuEopPp4ddOdWLsCSUu8GBt4enR6Lwa3XvKVWLTpDxu8XDSqE-bGDuY923WBmnaFMjbpqXXhe-0cyFJXgO2wSseAAXR7J1Xc-wlvDRSRHyJC5x9sqC_Pvq3jEzLm5dcvmN23BdxXzp7WrVmoS_zTX9qg2qUUxRqs8GEB6dkQHa4Xy9-gB0EguB6SyuFYGP5ZdmpFtiY1Fx_p4pmlb8c8aajgJd0R7EgmihyF49llCwIOT1syN7Cg==&p=11&fvj=0&vjs=3"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=870ff626a78c8081&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Automation Developer",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=5718164de2a0bb48&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Kierownik Budowy - Hydrotechnika (m / k)",
      "company": "STRABAG Sp. z o.o. / Dyrekcja Budownictwa Ogólnego...",
      "urls": "https://pl.indeed.com/viewjob?jk=a469b27a8e6b9cb1&fccid=8fdcbe58c8fef8e5&vjs=3"
    },
    {
      "name": "Manager Supplier Partnerships",
      "company": "Pontoon Solutions",
      "urls": "https://pl.indeed.com/viewjob?jk=40fc0f60850bd967&fccid=4a96194bafd8dbb0&vjs=3"
    },
    {
      "name": "Senior Finance Analyst - Manufacturing",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=d3a4a5ecfc758ccd&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Sr Risk Analyst (Information Security & Compliance)",
      "company": "GE Healthcare",
      "urls": "https://pl.indeed.com/viewjob?jk=944c7b6997c3b1a5&fccid=65b5f2aba4dbd31f&vjs=3"
    },
    {
      "name": "Procurement Process Manager with German(m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?jk=a44b398c47317f40&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Mobile Product Owner",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=3849912cc284c37d&fccid=31670bef3ae6497b&vjs=3"
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
      "name": "Senior AWS Solution Architect",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=c1105d8598d01bbb&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Process Lead Global IM&S Source-to-Pay",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=160bd361a453c522&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "How to go-live with your product in less than 3 months?",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com/viewjob?jk=d46b35a9e6f85c13&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "CI/CD Solution Architect",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=75ef623508a7e56b&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Credit Assessment Analyst - German Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=55ed90ecf2c3d1f3&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Scrum Master (Google Cloud)",
      "company": "ITDS Business Consultants",
      "urls": "https://pl.indeed.com/viewjob?jk=dd89ff2701c9413b&fccid=21699bef93fe8799&vjs=3"
    }
  ],
  "22": [
    {
      "name": "Młodszy Ustawiacz",
      "company": "Lajkonik Snacks Sp. z o.o.",
      "urls": "https://www.praca.pl/mlodszy-ustawiacz_3378560.html#2c3b7be57c6c0efeda4047e48a3a806d"
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
      "name": "Koordynator Zarządzania Produkcją",
      "company": "DEKRA Praca Sp. z o.o.",
      "urls": "https://www.praca.pl/koordynator-zarzadzania-produkcja_3426404.html#2c3b7be57c6c0efeda4047e48a3a806d"
    },
    {
      "name": "Aparatowy mycia w Wydziale Produkcji Szczepionek",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/aparatowy-mycia-w-wydziale-produkcji-szczepionek_3432782.html#2c3b7be57c6c0efeda4047e48a3a806d"
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
      "name": "Inżynier budowy - branża drogowa (infrastruktura kolejowa)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com/viewjob?jk=8ff37e86b231019e&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier Elektronik – Konstruktor",
      "company": "2Bora",
      "urls": "https://pl.indeed.com/viewjob?jk=1412ed0791ddda41&fccid=81eeaa9aaf867a65&vjs=3"
    },
    {
      "name": "Inżynier budowy",
      "company": "General Automatic",
      "urls": "https://pl.indeed.com/viewjob?jk=d4934c90208a0436&fccid=e71c30062ae7e5a9&vjs=3"
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
      "name": "Inżynier Budowy - elewacje klinkierowe",
      "company": "Stone Group Klinkier",
      "urls": "https://pl.indeed.com/viewjob?jk=5f2fa269e02bff34&fccid=678c79800cc6fc48&vjs=3"
    },
    {
      "name": "Inżynier Automatyk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=0f9e18031e6d937f&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier budowy ds. elektrycznych (kolejowa sieć trakcyjna)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com/viewjob?jk=547e48eef077b940&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier Automatyk - rekrutacja prowadzona online",
      "company": "Fitech",
      "urls": "https://pl.indeed.com/viewjob?jk=6cd8122e22bcd3d7&fccid=52d48f1974e43ed4&vjs=3"
    },
    {
      "name": "Kierownik Robót Drogowych lub Torowych/Inżynier Budowy",
      "company": "KZN RAIL Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=fe99701bd1cf7c37&fccid=be21bffde79d2ca7&vjs=3"
    },
    {
      "name": "Kierownik robót / inżynier budowy ds. elektroenergetycznych",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com/viewjob?jk=a107187dbce3bb50&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "INŻYNIER DS. WSPARCIA TECHNICZNEGO",
      "company": "Awex",
      "urls": "https://pl.indeed.com/viewjob?jk=c53c91b7d2204066&fccid=27a13086689515e8&vjs=3"
    },
    {
      "name": "Asystent specjalisty Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=dc8e82ea96d316d6&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "F5 Engineer - Global F5 Centric Footprint",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=d9bb1a6473ca6702&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Inżynier Systemów Elektronicznych",
      "company": "Knorr-Bremse",
      "urls": "https://pl.indeed.com/viewjob?jk=7eb2acdb5809182c&fccid=a23b36e1d6d2d53f&vjs=3"
    },
    {
      "name": "Security Engineer Zscaler",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=3add5ef8110732b9&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Specjalista Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=8447c63c8105e086&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Delivery Manager",
      "company": "j-labs",
      "urls": "https://pl.indeed.com/viewjob?jk=b2aa9eeada8b4637&fccid=a4750d1f1c80cb70&vjs=3"
    },
    {
      "name": "Inżynier Automatyk - Archiwum",
      "company": "K&K Selekt",
      "urls": "https://pl.indeed.com/viewjob?jk=83145046eb598162&fccid=afe1f520a63ae3d3&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Ochrony Środowiska...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=315cad0381ee06a8&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Inżynier sprzedaży systemów bezpieczeństwa przemysłowego",
      "company": "GRUPA WOLFF",
      "urls": "https://pl.indeed.com/viewjob?jk=d85a4988a3bbd086&fccid=3d99fb61e9e62f24&vjs=3"
    },
    {
      "name": "Network & Security IT Infrastructure Engineers",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=7a893ebad30c92c9&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Inżynier Produktu - transformatory i przekaźniki",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?jk=5c4eba35016d76ab&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Senior Engineer - Firewall",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=11ff1eb2acbd80df&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Senior Engineer - Zscaler",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=18c74018c01b8f91&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Technik Serwisu",
      "company": "PKE Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?/PKE-Polska-Sp.-z-o.o./jobs/Technik-Serwisu-985e717835e5d7be?fccid=03a872a0073870f1&vjs=3"
    },
    {
      "name": "Inżynier ds kalkulacji / przygotowania produkcji (m / k",
      "company": "STRABAG Infrastruktura Południe Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=e67453e66a025c10&fccid=91ff00d5203b00da&vjs=3"
    },
    {
      "name": "Inżynier Jakości - oferta z pakietem relokacyjnym",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=a66331984ffbbc59&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Inżynier ds. Testów",
      "company": "Grupa Unity",
      "urls": "https://pl.indeed.com/viewjob?jk=1f2ed1cc4252a137&fccid=9a34138d512ebeaf&vjs=3"
    },
    {
      "name": "KEY ACCOUNT MANAGER",
      "company": "IT FORCE",
      "urls": "https://pl.indeed.com/viewjob?jk=c21b723d3430859d&fccid=ce0f058ecc872287&vjs=3"
    },
    {
      "name": "System Engineer / Support Analyst",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=8588890611fa51b8&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Kierownik/Inżynier ds. teletechnicznych i/lub elektrycznych",
      "company": "P.U.T INTERCOR",
      "urls": "https://pl.indeed.com/viewjob?jk=40d97171e6c3f4af&fccid=7e97b2d9f0af32d4&vjs=3"
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
      "name": "Programista Android",
      "company": "JSAN Consulting Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=d64487daffd548ce&fccid=e6c493542b893459&vjs=3"
    },
    {
      "name": "Software Engineer",
      "company": "Moyyn",
      "urls": "https://pl.indeed.com/viewjob?/Moyyn-Group/jobs/Software-Engineer-2b8f8c1ad63eb565?fccid=6cb95f95e73cdc07&vjs=3"
    },
    {
      "name": "QA Engineer",
      "company": "S-Labs",
      "urls": "https://pl.indeed.com/viewjob?jk=3300678035fa06a4&fccid=ce4f4701fb5e9335&vjs=3"
    },
    {
      "name": "Senior Engineer – F5",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=a5a0ee9c0889b08b&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "IT Quality & Test Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=77440be268a48a2e&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Test Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=d02bbc2622234f68&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "DevOps Engineer with GCP",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=bb2427305a7d5720&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Senior Software Testing Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=c4bd8a9ad0997555&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Pracownia Wentylacji Kopalń - stanowisko inżynieryjno-techni...",
      "company": "Instytut Mechaniki Górotworu Polskiej Akademii Nau...",
      "urls": "https://pl.indeed.com/viewjob?jk=16ccd6f2e8921554&fccid=01a46517c78ecb1c&vjs=3"
    },
    {
      "name": "Senior ETL Developer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=6037b9c19177ed07&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Account manager/inżynier sprzedaży",
      "company": "AMC TECH Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=3d5b339baae31c7e&fccid=9ea9ac0db41cd67b&vjs=3"
    },
    {
      "name": "Projektant Sieci Wodno-Kanalizacyjnych",
      "company": "K&K Selekt",
      "urls": "https://pl.indeed.com/viewjob?jk=463d53c18493e1ea&fccid=afe1f520a63ae3d3&vjs=3"
    },
    {
      "name": "Inżynier Procesu / Produkcji - oferta z pakietem relokacyjny...",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=eba88f7f76130589&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "KIEROWNIK ROBÓT SANITARNYCH / HVAC",
      "company": "ACE Group Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=c3d5f59730eeba99&fccid=9c25831738ee5606&vjs=3"
    },
    {
      "name": "SysOps Engineer",
      "company": "Transmission Dynamics Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?/Transmission-Dynamics-Poland-Sp.-z-o.o./jobs/Sysops-Engineer-a0430a2f02f16537?fccid=71edca8a792a88bd&vjs=3"
    },
    {
      "name": "Full Stack Engineer - IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=c4dde19424a8a8f0&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Senior Big Data Developer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=6c053339660c79e7&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Senior Network Engineer for Remote Access Services",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=22e9fa8b6f4d3372&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Pracownik pompowni na plantacji truskawek",
      "company": "Polski Instytut Truskawki",
      "urls": "https://pl.indeed.com/viewjob?jk=9fcf93e7aa0b97c5&fccid=960c74acaf07f159&vjs=3"
    },
    {
      "name": "Senior Front End Software Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=23ca5b18ef86f3b8&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "DevOps - Site Reliability Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=79f8370551cad57e&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead .NET Engineer",
      "company": "VSoft",
      "urls": "https://pl.indeed.com/viewjob?jk=8166e48816d8c6b6&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Software Automation Engineer",
      "company": "SKELIA",
      "urls": "https://pl.indeed.com/viewjob?jk=b331cc71439dbe8b&fccid=4b7f4b3718395175&vjs=3"
    },
    {
      "name": "Lead / Senior Test Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=eb6fc96496fef00f&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Big Data – Senior Systems Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=4097dcda43e67034&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "DevOps Engineer",
      "company": "Accenture",
      "urls": "https://pl.indeed.com/viewjob?jk=b948b73b9e7969cd&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Senior System Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=1ecef9ed69a02b4c&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Test Automation Engineer",
      "company": "VSoft",
      "urls": "https://pl.indeed.com/viewjob?jk=b4827e645cd8df91&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Senior DevOps Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=3156f24e20870fbe&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Software Engineer in Test | Kraków",
      "company": "Vsoft",
      "urls": "https://pl.indeed.com/viewjob?jk=ee63930a2a2139bc&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "System Engineer / DevOps",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=15e2e2b68fc96136&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead/Senior FullStack Developer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=58c8a6b0776b300a&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead Systems Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=26e5af3a72eb7fb8&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Java Developer",
      "company": "TalentU",
      "urls": "https://pl.indeed.com/viewjob?jk=2c1ab5b1bbaf1101&fccid=ca5f1e138a78fd90&vjs=3"
    },
    {
      "name": "Lead Full Stack Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=6a9407d74379504d&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead / Senior Software Engineer in Test",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=4434f382028c2dda&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Software Engineer in Test with manual QA background",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=48701fc98a5fb56b&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead/Senior Test Automation Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=74132a55a97b887d&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "QA Automation Engineer with travel/airline experience/Kraków",
      "company": "NewPerspective",
      "urls": "https://pl.indeed.com/viewjob?jk=1ef8f4f17587f141&fccid=659d40811d5fc07a&vjs=3"
    },
    {
      "name": "Senior Full Stack Software Engineer (Java and/or Angular)",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=21cb3a753bdbd2cf&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Java Full Stack Developer with Angular/React",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=cd25e2d51a0a578f&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead/Senior Java Software Developer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=8aad2d6a5441beef&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Linux Engineer / DevOps",
      "company": "EuroLinux",
      "urls": "https://pl.indeed.com/viewjob?jk=8b01b29c719cc453&fccid=d91fbdc82addbd64&vjs=3"
    },
    {
      "name": "Lead JavaScript Developer with Angular",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=a7561ed7a2f41388&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Senior Full Stack Developer (Java+Angular)",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=740ebb8454fe6faf&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "QA Automation Engineer / Kraków (aktualnie zdalnie)",
      "company": "NewPerspective",
      "urls": "https://pl.indeed.com/viewjob?jk=209f361bf869ac31&fccid=659d40811d5fc07a&vjs=3"
    },
    {
      "name": "Java Full Stack Lead Software Engineer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=d4af96d0b85ba8d8&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Expired: DevOps Engineer",
      "company": "Moorgate",
      "urls": "https://pl.indeed.com/viewjob?jk=a102f09f32086a58&fccid=f9e2ae1d4db307bf&vjs=3"
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
      "name": "Inżynier Systemowy",
      "company": "ailleron",
      "urls": "https://pl.indeed.com/viewjob?jk=7e4df9c000dd5319&fccid=e008354530941776&vjs=3"
    },
    {
      "name": "Inżynier Systemowy",
      "company": "Ailleron SA",
      "urls": "https://pl.indeed.com/viewjob?jk=faa4a3e9afa89c68&fccid=e008354530941776&vjs=3"
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
      "name": "Systems Engineer - Advanced Safety",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=9fdd7d1ebbee0aca&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "C++ Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=e00def048e72773c&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Active Safety Systems Engineer",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Regular/Senior Front-end Engineer",
      "company": "Link Group Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=88d0e4742346bebc&fccid=ec288624c0917878&vjs=3"
    },
    {
      "name": "Specialized Software Engineer",
      "company": "ESET",
      "urls": "https://pl.indeed.com/viewjob?jk=1322adda79909f76&fccid=8e1474db6974999b&vjs=3"
    },
    {
      "name": "Agile Test Engineer II (Enterprise team)",
      "company": "ESET",
      "urls": "https://pl.indeed.com/viewjob?jk=7e770c4f4da27f39&fccid=8e1474db6974999b&vjs=3"
    },
    {
      "name": "Inżynier ds. integracji i testowania sieci 4G/5G - KRAKÓW",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=3dc0d8f7a439242b&fccid=062f71e131e87cf0&vjs=3"
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
      "name": "Product Owner",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com/viewjob?jk=b4746daed12ac439&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Programista C++",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=68be23111168efe6&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": ".Net Software Engineer (Audiovideo)",
      "company": "Ailleron SA",
      "urls": "https://pl.indeed.com/viewjob?/Ailleron/jobs/Net-Software-Engineer-cc8a8c81e61536d7?fccid=e008354530941776&vjs=3"
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
      "name": "Senior Commodity Buyer",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSId6wgXXoO5zMOosFaGDBAEZSMgjia_kpug22xxwquACwsMac591cr65VWeoMlA58tilmX8Qt1UGrYIysgP0-nR_OYqz-1MM2n5vgDS4XXR3SOxslLPwmHp_l8hW8cftKnNnlrXdUrTLFACJFjQgmoJR0KR_xaoiMXav6pL2NJ8yJmVnsulJ9GOGYE4EyY-9fQMfrGj5CEeKTwv8r97OALqikpkBeYN0Vr8qEOf1064ez99nb3Pf3N9LfvkssQO-MWQxbbqB0bE0tUfyk40FAqG6Jgr7ZHjfwRqr0JWa2CdiekxaVTaQWBTPf38lNYdJbmj1VDto3pigFYux_3NJxSa16w7stTJvWL-JzZBq3RLzvqg_cj04temf-cAoCWX-Vxg4nd3YzG0XE8qzGZXfmSeKiKUPR_s6qtRvHZUMIvuby1HLd5aCMhHtRQun3s0-SDZxyEjMNSYneQUDroTGBoit2rbVUzO4-OgXu3g0FCEOVXqyaf0s1TrQTp3mNj1HxpjIBIrl1m6qO6tU-aTcKttUg0SQbEmgrUNqT-Ckfo355fD6zMA87NAJMllXmU9iVurewweC_KZbORdQNRpJtXwi3N1sug2NCUJjuIhW1Cr8e45n-_uyMjbtSLnHI2QOxb9-TLBkwnoENkeovFbtl-eJ&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Stażysta w dziale technicznym (fotowoltaika)",
      "company": "ELVE",
      "urls": "https://pl.indeed.com/viewjob?jk=17e737db51523a0c&fccid=6eccb2cdf52a7832&vjs=3"
    },
    {
      "name": "Administrator Biura",
      "company": "Sweco",
      "urls": "https://pl.indeed.com/viewjob?jk=ae316ec505b738ce&fccid=be715873206f5872&vjs=3"
    },
    {
      "name": "Staż lub praktyka zdalna, 14 kierunków i więcej do wyboru",
      "company": "Krajowy Instytut Rozwoju Gospodarki",
      "urls": "https://pl.indeed.com/viewjob?jk=1c5dd6a055dcfbbb&fccid=5429572581cdb0aa&vjs=3"
    },
    {
      "name": "PRAKTYKANT/STAŻYSTA DS. OCHRONY ŚRODOWISKA",
      "company": "Future Green Innovations",
      "urls": "https://pl.indeed.com/viewjob?jk=58177fbf054c4edd&fccid=5981b74173f9ac17&vjs=3"
    },
    {
      "name": "Asystent projektanta instalacji sanitarnych",
      "company": "PRACOWNIA PROJEKTOWA",
      "urls": "https://pl.indeed.com/viewjob?jk=7f0d0faa7b64ae80&fccid=1323085d7566e336&vjs=3"
    },
    {
      "name": "stanowisko Asystenta/ki projektanta melioracyjnego/hydrotech...",
      "company": "WTU",
      "urls": "https://pl.indeed.com/viewjob?jk=bbec6ae89ebbe480&fccid=2ae63731d99baae6&vjs=3"
    },
    {
      "name": "staż/praktykę studencką",
      "company": "WTU",
      "urls": "https://pl.indeed.com/viewjob?jk=a8737bed0342ffc9&fccid=2ae63731d99baae6&vjs=3"
    },
    {
      "name": "Python Developer",
      "company": "S-Labs",
      "urls": "https://pl.indeed.com/viewjob?jk=835901db346dc65f&fccid=ce4f4701fb5e9335&vjs=3"
    },
    {
      "name": "ASYSTENT PROJEKTANTA / PROJEKTANT",
      "company": "SPRINGAP",
      "urls": "https://pl.indeed.com/viewjob?jk=0b65fe4820457332&fccid=5e7110847abc8027&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Infrastruktury w Kr...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=5fb98467260afae4&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Koordynator ds. fotowoltaiki",
      "company": "ELVE",
      "urls": "https://pl.indeed.com/viewjob?jk=880dfc22883dede1&fccid=6eccb2cdf52a7832&vjs=3"
    },
    {
      "name": "Asystent Projektanta (branża sanitarna)",
      "company": "P3 Projekt Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=3d33dc1bfacfc9a6&fccid=60b9b6db9314e9bf&vjs=3"
    },
    {
      "name": "Inżynier Budowy - Mistrz budowy",
      "company": "Przedsiębiorstwo Robót Inżynieryjnych INKOP",
      "urls": "https://pl.indeed.com/viewjob?jk=1d3dd98638ee466d&fccid=a695411d8904b8ca&vjs=3"
    },
    {
      "name": "SPECJALISTA DS. PROJEKTÓW ŚRODOWISKOWYCH",
      "company": "Future Green Innovations",
      "urls": "https://pl.indeed.com/viewjob?jk=e6795431a27d1b55&fccid=5981b74173f9ac17&vjs=3"
    },
    {
      "name": "Specjalista ds. układów kogeneracyjnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=a5f702f39c8819b4&fccid=1cd754675a5b8353&vjs=3"
    },
    {
      "name": "Doradca techniczno-handlowy",
      "company": "Kliweko",
      "urls": "https://pl.indeed.com/viewjob?jk=6a0b41e389e2d73b&fccid=9a2758de8b1030b8&vjs=3"
    },
    {
      "name": "stanowisko BIM Modeler",
      "company": "WTU",
      "urls": "https://pl.indeed.com/viewjob?jk=2acf29ac609eb1b3&fccid=2ae63731d99baae6&vjs=3"
    },
    {
      "name": "Pracownia Wentylacji Kopalń - stanowisko inżynieryjno-techni...",
      "company": "Instytut Mechaniki Górotworu Polskiej Akademii Nau...",
      "urls": "https://pl.indeed.com/viewjob?jk=16ccd6f2e8921554&fccid=01a46517c78ecb1c&vjs=3"
    },
    {
      "name": "Technical Product Manager",
      "company": "HRO Digital dla klienta z branży bankowej",
      "urls": "https://pl.indeed.com/viewjob?jk=f6329ce8b231dcf0&fccid=d1b438001cc64a55&vjs=3"
    },
    {
      "name": "Projektant Instalacji HVAC",
      "company": "CAVATINA HOLDING",
      "urls": "https://pl.indeed.com/viewjob?jk=5c438a9386bf6e8c&fccid=a5285ec97fd9b16f&vjs=3"
    },
    {
      "name": "Asystent projektanta branży sanitarnej",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com/viewjob?jk=3f5aa6028c2bbdd9&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Doradca Techniczno-Handlowy (HVAC)",
      "company": "Business Bridge Group",
      "urls": "https://pl.indeed.com/viewjob?jk=b48343c6f3be6089&fccid=569f2bbcd274ba32&vjs=3"
    },
    {
      "name": "Doradca Techniczno-Handlowy (HVAC)",
      "company": "Business Bridge Group Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=3a90ac5240dc195f&fccid=49d7637e841a56e6&vjs=3"
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
      "name": "Projektant Instalacji HVAC",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-instalacji-hvac_3425568.html#a3352288f100c079b8a51937b244d276"
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
      "name": "Inżynier robót budowlanych",
      "company": "Climatic Sp. z o.o. Sp. k.",
      "urls": "https://www.praca.pl/inzynier-robot-budowlanych_3436914.html#c28a76f90fec6aedd7dee160bde9e0cc"
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
      "name": "INSPEKTOR TERENOWY- Atrakcyjne wynagrodzenie",
      "company": "Mateusz Biedka MATGAB",
      "urls": "https://pl.indeed.com/viewjob?jk=dedb70017ec63eaa&fccid=b0b10848ce8f4228&vjs=3"
    }
  ],
  "35": [],
  "36": [],
  "37": [],
  "38": [
    {
      "name": "STAŻ Z MOŻLIWOŚCIĄ ZATRUDNIENIA",
      "company": "Instytut Turystyki w Krakowie",
      "urls": "https://pl.indeed.com/viewjob?jk=56e835d05825fde7&fccid=ff85af71cf18f107&vjs=3"
    }
  ],
  "39": [
    {
      "name": "Pracownik Fizyczny (recykling kabli miedzianych)",
      "company": "TP Teltech Sp. z o.o.",
      "urls": "https://www.praca.pl/pracownik-fizyczny-recykling-kabli-miedzianych_3434132.html#ceefa5070190b65ebfde5568dbc9c916"
    }
  ],
  "40": [],
  "41": [
    {
      "name": "Inżynier Sprzedaży",
      "company": "Charlie works Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-sprzedazy_3443622.html#b5a297eb139d10eb0004edfed3b7ee46"
    }
  ],
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
      "name": "Magento Backend Developer (Mid/Senior)",
      "company": "Exorigo-Upos S.A.",
      "urls": "https://www.praca.pl/magento-backend-developer-mid-senior_3416848.html#d5c9d0080dca6b1cb827a34a86e91f2c"
    },
    {
      "name": "QA Lead Consultant",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/qa-lead-consultant_3428178.html#d5c9d0080dca6b1cb827a34a86e91f2c"
    }
  ],
  "46": [
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#649452e956a828e4b810c6b5b30c0095"
    },
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#649452e956a828e4b810c6b5b30c0095"
    },
    {
      "name": "Wiceprezes / Członek Zarządu firmy świadczącej usługi zarządzania i nadzoru (inżyniera kontraktu) nad kontraktami budowlanymi w sektorze ochrony środowiska, przemysłu, transportu, energetyki i innych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/wiceprezes-czlonek-zarzadu-firmy-swiadczacej-uslugi-zarzadzania-i-nadzoru-inzyniera-kontraktu-nad-kontraktami-budowlanymi-w-sektorze-ochrony-srodowiska,przemyslu,transportu,energetyki-i-innych_3423180.html#649452e956a828e4b810c6b5b30c0095"
    },
    {
      "name": "Elektromonter",
      "company": "Eltel Networks Energetyka S.A.",
      "urls": "https://www.praca.pl/elektromonter_3370354.html#649452e956a828e4b810c6b5b30c0095"
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
      "name": "Monter urządzeń energetyki odnawialnej",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/monter-urzadzen-energetyki-odnawialnej_3445052.html#649452e956a828e4b810c6b5b30c0095"
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
      "name": "Linux Platform Engineer",
      "company": "Power Media",
      "urls": "https://www.praca.pl/linux-platform-engineer_3386258.html#5762b554a8fb4df0655169e6f92640bb"
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
      "name": "IAM Security Analyst",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/iam-security-analyst_3436258.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "Staż w dziale programistycznym C# / .NET SQL ",
      "company": "Elettric 80 Sp. z o.o.",
      "urls": "https://www.praca.pl/staz-w-dziale-programistycznym-c-net-sql_3436760.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "IAM Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/iam-architect_3436814.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "IAM Omada Security Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/iam-omada-security-architect_3436826.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "IAM Security Consultant",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/iam-security-consultant_3436846.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "IAM Senior Security Consultant",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/iam-senior-security-consultant_3436852.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "Linux Engineer [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/linux-engineer-rekrutacja-online_3437622.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "Serwisant urządzeń klimatyzacyjnych oraz grzewczo-wentylacyjnych",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://www.praca.pl/serwisant-urzadzen-klimatyzacyjnych-oraz-grzewczo-wentylacyjnych_3343490.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "Technik serwisu / Specjalista do spraw serwisu",
      "company": "EuroClean Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-serwisu-specjalista-do-spraw-serwisu_3420790.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "Mechanik / Elektronik / Specjalista IT",
      "company": "Diskus Polska sp. z o.o.",
      "urls": "https://www.praca.pl/mechanik-elektronik-specjalista-it_3386324.html#5762b554a8fb4df0655169e6f92640bb"
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
      "name": "Stażysta w dziale technicznym (fotowoltaika)",
      "company": "ELVE",
      "urls": "https://pl.indeed.com/viewjob?jk=17e737db51523a0c&fccid=6eccb2cdf52a7832&vjs=3"
    },
    {
      "name": "Grafik",
      "company": "MIA Sp. z o.o",
      "urls": "https://pl.indeed.com/viewjob?jk=6b0aae393150895d&fccid=a1f3754022e4d5ad&vjs=3"
    },
    {
      "name": "Specjalista ds. marketingu internetowego",
      "company": "New Men Style",
      "urls": "https://pl.indeed.com/viewjob?jk=707d9d7aae83b23b&fccid=eb74c6649c374260&vjs=3"
    },
    {
      "name": "Młodszy Konstruktor CAD",
      "company": "GROS Engineering",
      "urls": "https://pl.indeed.com/viewjob?jk=b2cc3d07a98c79a1&fccid=83800432e0dffe2b&vjs=3"
    },
    {
      "name": "Programista .NET Intern",
      "company": "Dassault Systèmes",
      "urls": "https://pl.indeed.com/viewjob?jk=5a8cf8d1157feb31&fccid=29d37d43c382c8fe&vjs=3"
    },
    {
      "name": "Grafik",
      "company": "GoPOS",
      "urls": "https://pl.indeed.com/viewjob?jk=23580d662dd555fe&fccid=cf3c5390bbff0279&vjs=3"
    },
    {
      "name": "Graphic Web Designer",
      "company": "Veneo",
      "urls": "https://pl.indeed.com/viewjob?jk=b7cc2c69cb58e66b&fccid=d055a1ba91135454&vjs=3"
    },
    {
      "name": "Konstruktor CATIA V5",
      "company": "GROS Engineering",
      "urls": "https://pl.indeed.com/viewjob?jk=5e1f6738935f23bd&fccid=83800432e0dffe2b&vjs=3"
    },
    {
      "name": "Grafik",
      "company": "COGNITY Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=e68c8478f4bad17d&fccid=d372ef98837e041a&vjs=3"
    },
    {
      "name": "Projektant grafiki 2D",
      "company": "FIUFIUSHOP",
      "urls": "https://pl.indeed.com/viewjob?jk=386bade1eee192fb&fccid=6ae33b64cc9d5fe6&vjs=3"
    },
    {
      "name": "Projektant CAD",
      "company": "MONIT SHM",
      "urls": "https://pl.indeed.com/viewjob?jk=895adc8f07624a4b&fccid=d9567c6e655060a8&vjs=3"
    },
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
      "name": "MŁODSZY PROJEKTANT ODZIEŻY",
      "company": "MEDICINE",
      "urls": "https://pl.indeed.com/viewjob?jk=f785b2d99928f61c&fccid=e8cb31a8be7fc5c7&vjs=3"
    },
    {
      "name": "Grafik komputerowy / operator DTP",
      "company": "PANCZAKIEWICZ ART.DESIGN",
      "urls": "https://pl.indeed.com/viewjob?jk=29773dd1b44fe2ac&fccid=3ebbf63f5e8abcb2&vjs=3"
    },
    {
      "name": "Graphic Designer",
      "company": "CITY",
      "urls": "https://pl.indeed.com/viewjob?jk=6e15c17b8905306e&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "PROJEKTANT ODZIEŻY",
      "company": "MEDICINE",
      "urls": "https://pl.indeed.com/viewjob?jk=cb917f9c01df473a&fccid=e8cb31a8be7fc5c7&vjs=3"
    },
    {
      "name": "Specjalista ds. Marketingu",
      "company": "Newmor Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=1671cdea8078c2a7&fccid=de2d92b88af935c2&vjs=3"
    },
    {
      "name": "Grafik komputerowy - Web designer",
      "company": "NaviGate Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=eb78d0be222b6acc&fccid=18c2bb665d2fd2d5&vjs=3"
    },
    {
      "name": "PROJEKTANT STOISK TARGOWYCH",
      "company": "Amako Expo",
      "urls": "https://pl.indeed.com/viewjob?jk=b524601c9e09c29a&fccid=4d85297f8aba692e&vjs=3"
    },
    {
      "name": "Game Marketing Artist",
      "company": "GameDesire",
      "urls": "https://pl.indeed.com/viewjob?jk=c74a589752d6175c&fccid=4c5cbe838d83783e&vjs=3"
    },
    {
      "name": "Senior Front-End Developer | React, Google Cloud Platform",
      "company": "Jcommerce",
      "urls": "https://pl.indeed.com/viewjob?jk=347ebc457e9c07c7&fccid=99a536694443ad83&vjs=3"
    },
    {
      "name": "Architekt",
      "company": "Cavatina Holding",
      "urls": "https://pl.indeed.com/viewjob?jk=95a3a5803256dbe6&fccid=a5285ec97fd9b16f&vjs=3"
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
      "name": "Programista .NET",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=b1c938a9b7c1bc8a&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Asystent Projektanta Technologa",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com/viewjob?jk=4a5f55654c2c7d6d&fccid=5c065c1c92843790&vjs=3"
    },
    {
      "name": "Staż w Zespole R&D, Industrial Designu, Logistyki, IT, Finan...",
      "company": "Green Cell",
      "urls": "https://pl.indeed.com/viewjob?jk=a8bea13316b4b94e&fccid=7520988c97ff0996&vjs=3"
    },
    {
      "name": "Projektant - Technolog",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com/viewjob?jk=d28797d8ccec234f&fccid=5c065c1c92843790&vjs=3"
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
      "name": "Młodszy programista Java/Scala w Telco BSS",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=d7949852202824e4&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Analityk Systemów Informatycznych",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=1cf477ef5681870a&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista backend",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=566ca7dd3181aab6&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Konsultant ds. wdrożeń (moduł Kadry Płace i HR)",
      "company": "enova365",
      "urls": "https://pl.indeed.com/viewjob?jk=617f2b3b339d0c72&fccid=84584f1aa6973ca8&vjs=3"
    },
    {
      "name": "Scala developer - IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=2e54e0eb0e7c6ea2&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Starszy konsultant projektu księgowość",
      "company": "enova365",
      "urls": "https://pl.indeed.com/viewjob?jk=43a847df99809592&fccid=84584f1aa6973ca8&vjs=3"
    },
    {
      "name": "Programista backend (bankowość)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=713c0aa3b7241615&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Kierownik projektu IT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=fc4d070c679ac3ee&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Operator obrabiarek CNC",
      "company": "Bamet",
      "urls": "https://pl.indeed.com/viewjob?jk=0cd40272cb997607&fccid=55f842c9b66dbe5b&vjs=3"
    },
    {
      "name": "Technolog Procesu",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=cad1d7c6f30b2502&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Full Stack Engineer - IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=c4dde19424a8a8f0&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Operator szlifierki CNC",
      "company": "Bamet",
      "urls": "https://pl.indeed.com/viewjob?jk=687e1ecd956daac9&fccid=55f842c9b66dbe5b&vjs=3"
    },
    {
      "name": "Java Developer",
      "company": "Citycom",
      "urls": "https://pl.indeed.com/viewjob?jk=401efb906feef79f&fccid=8744805f51010781&vjs=3"
    },
    {
      "name": "Product Owner",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com/viewjob?jk=b4746daed12ac439&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Senior .Net",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com/viewjob?jk=d4077fa00ea254a3&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "Software Engineer in Test | Kraków",
      "company": "Vsoft",
      "urls": "https://pl.indeed.com/viewjob?jk=ee63930a2a2139bc&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Expired: QA Engineer",
      "company": "Moorgate",
      "urls": "https://pl.indeed.com/viewjob?jk=ac0581821b0efafb&fccid=f9e2ae1d4db307bf&vjs=3"
    },
    {
      "name": "Inżynier Systemowy - DevOps IoT Platform",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=2cebae1656b21935&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "59": [
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Praktykant Salesforce - get the HOT Salesforce skill!",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,1000276362"
    },
    {
      "name": "Praktykant/Junior Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,1000278106"
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
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000270049"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
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
      "name": "Praktykant Salesforce - get the HOT Salesforce skill!",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,1000276362"
    },
    {
      "name": "Praktykant/Junior Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,1000278106"
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
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Working Student - Software Test Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-test-engineer-krakow,oferta,1000270053"
    },
    {
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000270049"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
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
    }
  ],
  "61": [
    {
      "name": "Salesforce Developer",
      "company": "Frank Recruitment Group",
      "urls": "https://www.praca.pl/salesforce-developer_3443982.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "System Administrator Linux",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/system-administrator-linux_3413118.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Administrator Oracle",
      "company": "Core Services Sp. z o.o.",
      "urls": "https://www.praca.pl/administrator-oracle_3443262.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "File Transfer Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/file-transfer-engineer_3413000.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "System Administrator with Wintel/Unix",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/system-administrator-with-wintel-unix_3441286.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://www.praca.pl/administrator-it-specjalista-it_3399002.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Data Center Engineer",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/data-center-engineer_3347770.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Specjalista ds. utrzymania baz danych",
      "company": "MOTOKARIERA S.C.",
      "urls": "https://www.praca.pl/specjalista-ds-utrzymania-baz-danych_3416378.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Cloud Database Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-database-architect_3415430.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Administrator baz danych (DBA) / SQL Developer",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/administrator-baz-danych-dba-sql-developer_3396678.html#4dfda4bb11f7b9d46579d2e61821394d"
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
      "name": "Administrator Baz Danych PostgreSQL",
      "company": "Solid Security Sp. z o.o.",
      "urls": "https://www.praca.pl/administrator-baz-danych-postgresql_3333996.html#4dfda4bb11f7b9d46579d2e61821394d"
    }
  ],
  "62": [
    {
      "name": "React Native Developer [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/react-native-developer-rekrutacja-online_3383578.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "Senior Full-stack Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-full-stack-developer_3429030.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "Laravel Fullstack Developer [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/laravel-fullstack-developer-rekrutacja-online_3380656.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "Workflow Developer",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/workflow-developer_3420392.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "Symfony Fullstack Developer [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/symfony-fullstack-developer-rekrutacja-online_3420696.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "Web Magento Developer (Mid/Senior) ",
      "company": "Exorigo-Upos S.A.",
      "urls": "https://www.praca.pl/web-magento-developer-mid-senior_3416886.html#319721ddd3ff5aa49d12cd5362dfc0f8"
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
    },
    {
      "name": "Grafik",
      "company": "PRZEDSIĘBIORSTWO BUDOWLANE START G. SZMOLKE,M. SZMOLKE SPÓŁKA JAWNA",
      "urls": "https://www.praca.pl/grafik_3409376.html#97678f7786db6bd26378e94bb723a9bb"
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
      "name": "Projektant [rekrutacja online]",
      "company": "Impel Tech Solutions Sp. Z o.o. Sp. K",
      "urls": "https://www.praca.pl/projektant-rekrutacja-online_3378674.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "P1 CAD Software Test Automation Engineer (C#) [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/p1-cad-software-test-automation-engineer-c-rekrutacja-online_3407616.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Projektant Instalacji HVAC",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/projektant-instalacji-hvac_3425568.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Konstruktor",
      "company": "TNS Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor_3398606.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Asystent Technologa / Technolog",
      "company": "Euronova Sp.z o.o. Sp.k.",
      "urls": "https://www.praca.pl/asystent-technologa-technolog_3348164.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Inżynier Budowy / Kontroler Jakości [rekrutacja online]",
      "company": "JT S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy-kontroler-jakosci-rekrutacja-online_3348204.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "Inżynier w Dziale Inwestycji i Eksploatacji",
      "company": "Instytut Fizyki Jądrowej PAN",
      "urls": "https://www.praca.pl/inzynier-w-dziale-inwestycji-i-eksploatacji_3389454.html#849ede6d971d66992625aa386af538a2"
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
      "urls": "https://pl.indeed.com/viewjob?jk=6cd8122e22bcd3d7&fccid=52d48f1974e43ed4&vjs=3"
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
      "name": "Nauczyciel przedmiotów zawodowych",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-zawodowych_3433206.html#1a327aa0388a8f8114b0719fcc488baa"
    },
    {
      "name": "Nauczyciel przedmiotów ogólnokształcących",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-ogolnoksztalcacych_3433238.html#1a327aa0388a8f8114b0719fcc488baa"
    }
  ],
  "67": [
    {
      "name": "Praktykant Salesforce - get the HOT Salesforce skill!",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,1000276362"
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
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
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
      "name": "Junior Accountant  German speaker",
      "company": "People Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-accountant-german-speaker-krakow,oferta,1000194275"
    },
    {
      "name": "Salesforce Developer",
      "company": "Frank Recruitment Group",
      "urls": "https://www.praca.pl/salesforce-developer_3443982.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "CE Digital Learning Design Manager",
      "company": "Tesco Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/ce-digital-learning-design-manager_3383684.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "QA Automation Engineer (Java/Python)",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/qa-automation-engineer-java-python_3443922.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Senior Java Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-java-developer_3420190.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Ruby on Rails Developer",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/ruby-on-rails-developer_3413394.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "System Administrator Linux",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/system-administrator-linux_3413118.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Administrator Oracle",
      "company": "Core Services Sp. z o.o.",
      "urls": "https://www.praca.pl/administrator-oracle_3443262.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "File Transfer Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/file-transfer-engineer_3413000.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Regular/Senior Java Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/regular-senior-java-developer_3443082.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Senior Full-stack Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-full-stack-developer_3429030.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "System Administrator with Wintel/Unix",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/system-administrator-with-wintel-unix_3441286.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Laravel Fullstack Developer [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/laravel-fullstack-developer-rekrutacja-online_3380656.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "SharePoint Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/sharepoint-architect_3436878.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Magento/PHP Developer",
      "company": "Power Media",
      "urls": "https://www.praca.pl/magento-php-developer_3437220.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Video Content Analyst with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/video-content-analyst-with-french_3422886.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Full Stack .Net Developer ",
      "company": "TKM Consulting Tomasz Machowski",
      "urls": "https://www.praca.pl/full-stack-net-developer_3407466.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Data Associate with German",
      "company": "ManpowerGroup",
      "urls": "https://www.praca.pl/data-associate-with-german_3422244.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen-systemow-analitycznych_3405276.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "ETL Developer",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/etl-developer_3420402.html#cb4b6710a47123eafde81a931a85ab0c"
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
      "name": "Senior Software Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-software-engineer_3426464.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://www.praca.pl/administrator-it-specjalista-it_3399002.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Ruby on Rails Developer",
      "company": "Power Media",
      "urls": "https://www.praca.pl/ruby-on-rails-developer_3372994.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "C# .NET Developer ",
      "company": "Wojciech Martko Software Development",
      "urls": "https://www.praca.pl/c-net-developer_3420210.html#cb4b6710a47123eafde81a931a85ab0c"
    }
  ],
  "68": [
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Praktykant Salesforce - get the HOT Salesforce skill!",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,1000276362"
    },
    {
      "name": "Praktykant/Junior Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,1000278106"
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
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000270049"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
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
      "name": "Administrator systemów IT",
      "company": "Core Logic",
      "urls": "https://pl.indeed.com/viewjob?jk=bde5b539ade97c2e&fccid=67e7d62a7f3782fd&vjs=3"
    },
    {
      "name": "Database Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com/viewjob?jk=a28966ef7a30b164&fccid=e6ed5490b8bccdea&vjs=3"
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
      "name": "PRACA: Specjalista ds. sprzedaży systemów GIS",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=72e1402fc1022a52&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "Administrator DB2",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=9f869437ba043921&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Key Account Manager",
      "company": "Unima 2000",
      "urls": "https://pl.indeed.com/viewjob?jk=8630ed50ee083c5e&fccid=c554e56e32acd5b0&vjs=3"
    },
    {
      "name": "Senior Administrator IT",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com/viewjob?jk=3fd43b821d3b8916&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "Administrator baz danych PostgreSQL",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com/viewjob?jk=9e48f67dd7c81c5c&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://pl.indeed.com/viewjob?jk=a2d8276d0b025799&fccid=3080be87afc8f4e8&vjs=3"
    },
    {
      "name": "Administrator Baz Danych PostgreSQL",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=0a7610c0f3795a6c&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator systemów Linux",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com/viewjob?jk=d4c9c5f23fa99f77&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator IT",
      "company": "TRAX elektronik",
      "urls": "https://pl.indeed.com/viewjob?jk=7936623bf2cea870&fccid=a938d49a88a78b9e&vjs=3"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=8b9014a2145ea0aa&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Konsultant Systemów ERP",
      "company": "IT Vision Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=184423f0229d73fa&fccid=320aada005441815&vjs=3"
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
      "name": "Database Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com/viewjob?jk=a28966ef7a30b164&fccid=e6ed5490b8bccdea&vjs=3"
    },
    {
      "name": "Linux Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com/viewjob?jk=9736159eca14bfe1&fccid=e6ed5490b8bccdea&vjs=3"
    },
    {
      "name": "administrator lokalnej sieci komputerowej w Dziale Informaty...",
      "company": "Politechnika Krakowska",
      "urls": "https://pl.indeed.com/viewjob?jk=e10a11bf01e66b14&fccid=dbf078d8db93f693&vjs=3"
    },
    {
      "name": "Administrator Oracle",
      "company": "CORE SERVICES",
      "urls": "https://pl.indeed.com/viewjob?jk=0c54fdb00e11ba4d&fccid=3fc973dd259e27b8&vjs=3"
    },
    {
      "name": "Administrator IT",
      "company": "TRAX elektronik",
      "urls": "https://pl.indeed.com/viewjob?jk=7936623bf2cea870&fccid=a938d49a88a78b9e&vjs=3"
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
      "name": "Software Developer QA",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=a1f1df050441fdc4&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Junior/Specialist IT Support with German",
      "company": "QVC POLAND GLOBAL SERVICES SP Z O O",
      "urls": "https://pl.indeed.com/viewjob?jk=82cb5f10bd543d1a&fccid=d82b729ef7602eb5&vjs=3"
    },
    {
      "name": "Software Development Manager",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=2fde0bae5be91402&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "DB2 Support Engineer",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=ea619088c13a4668&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Software Developer JavaScript/React",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=323e237b9797c4ff&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Technical Support Engineer",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=bb0348a019bc196d&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Młodszy administrator / serwisant",
      "company": "Softelnet spółka akcyjna sp.k.",
      "urls": "https://pl.indeed.com/viewjob?jk=c3de9f0405325c9a&fccid=c120232169b76303&vjs=3"
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
      "name": "Administrator systemów IT",
      "company": "Core Logic",
      "urls": "https://pl.indeed.com/viewjob?jk=bde5b539ade97c2e&fccid=67e7d62a7f3782fd&vjs=3"
    },
    {
      "name": "Database Administrator",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com/viewjob?jk=a28966ef7a30b164&fccid=e6ed5490b8bccdea&vjs=3"
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
      "name": "PRACA: Specjalista ds. sprzedaży systemów GIS",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=72e1402fc1022a52&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "Administrator DB2",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=9f869437ba043921&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Key Account Manager",
      "company": "Unima 2000",
      "urls": "https://pl.indeed.com/viewjob?jk=8630ed50ee083c5e&fccid=c554e56e32acd5b0&vjs=3"
    },
    {
      "name": "Senior Administrator IT",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com/viewjob?jk=3fd43b821d3b8916&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "Administrator baz danych PostgreSQL",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com/viewjob?jk=9e48f67dd7c81c5c&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://pl.indeed.com/viewjob?jk=a2d8276d0b025799&fccid=3080be87afc8f4e8&vjs=3"
    },
    {
      "name": "Administrator Baz Danych PostgreSQL",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=0a7610c0f3795a6c&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator systemów Linux",
      "company": "UNITY-T",
      "urls": "https://pl.indeed.com/viewjob?jk=d4c9c5f23fa99f77&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Administrator IT",
      "company": "TRAX elektronik",
      "urls": "https://pl.indeed.com/viewjob?jk=7936623bf2cea870&fccid=a938d49a88a78b9e&vjs=3"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "UNITY-T Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=8b9014a2145ea0aa&fccid=ad28d495ba09dbe8&vjs=3"
    },
    {
      "name": "Konsultant Systemów ERP",
      "company": "IT Vision Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=184423f0229d73fa&fccid=320aada005441815&vjs=3"
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
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#c6e7b152e38eedf796af0676ce8eadd2"
    },
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#c6e7b152e38eedf796af0676ce8eadd2"
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
      "name": "Senior NLP / AI Data Scientist",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-nlp-ai-data-scientist_3382962.html#a5cd6f0f36cc1be2cd76846ca8f85df7"
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
      "name": "Praktykant/Junior Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,1000278106"
    },
    {
      "name": "Senior Automation QA Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-automation-qa-engineer_3440080.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Technik Mechanik (K/M)  [rekrutacja online]",
      "company": "Apleona HSG Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-mechanik-k-m-rekrutacja-online_3436516.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Automatyk",
      "company": "Bilfinger Industrial Services Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/automatyk_3411550.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Młodszy Inżynier",
      "company": "Gegenbauer Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/mlodszy-inzynier_3425890.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Test Automation Engineer (Java) [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/test-automation-engineer-java-rekrutacja-online_3407618.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Senior/Regular QA Automation Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-regular-qa-automation-engineer_3437262.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Staż w dziale programistycznym C# / .NET SQL ",
      "company": "Elettric 80 Sp. z o.o.",
      "urls": "https://www.praca.pl/staz-w-dziale-programistycznym-c-net-sql_3436760.html#08421fbf2061793ed97761471aad46e0"
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
      "name": "Video Solutions Firmware Senior Test Engineer (Python) [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/video-solutions-firmware-senior-test-engineer-python-rekrutacja-online_3416964.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Business Developer OPEX (oil&gas, chemical)",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/business-developer-opex-oil-gas,chemical_3385702.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Technik – Automatyk (K/M)  [rekrutacja online]",
      "company": "Apleona HSG Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-automatyk-k-m-rekrutacja-online_3378226.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Mechanik / Elektronik / Specjalista IT",
      "company": "Diskus Polska sp. z o.o.",
      "urls": "https://www.praca.pl/mechanik-elektronik-specjalista-it_3386324.html#08421fbf2061793ed97761471aad46e0"
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
      "name": "Modszy Administrator ds. Funduszy Inwestycyjnych",
      "company": "HedgeServ",
      "urls": "https://www.pracuj.pl/praca/mlodszy-administrator-ds-funduszy-inwestycyjnych-krakow,oferta,1000275635"
    },
    {
      "name": "Platform Operations Technician (III shift)",
      "company": "Znajd wymarzonego pracodawc",
      "urls": "https://www.pracuj.pl/praca/platform-operations-technician-iii-shift-krakow,oferta,7521969"
    },
    {
      "name": "Modszy Specjalista ds. Rozlicze i Analiz ",
      "company": "Aterima Sp. z o.o. Sp.K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-rozliczen-i-analiz-krakow,oferta,1000274862"
    },
    {
      "name": "Modszy specjalista ds. zamwie publicznych",
      "company": "AMLUX Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-zamowien-publicznych-krakow,oferta,1000273289"
    },
    {
      "name": "Modszy specjalista ds. obsugi klienta wgierskojzycznego i tumacz",
      "company": "Marketing Investment Group S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-wegierskojezycznego-i-tlumacz-krakow,oferta,1000258752"
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
      "name": "Kierownik ds. E-commerce",
      "company": "heban sp. z o.o. sp. komandytowa",
      "urls": "https://www.praca.pl/kierownik-ds-e-commerce_3404394.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Senior DevOps Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-devops-engineer_3383732.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "L 1 Security Engineer ",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/l-1-security-engineer_3355836.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Administrator Sieci",
      "company": "Solid Security Sp. z o.o.",
      "urls": "https://www.praca.pl/administrator-sieci_3334000.html#afa6638b90a471dbf4fa517b806872ca"
    }
  ],
  "90": [
    {
      "name": "Modszy Projekt Manager",
      "company": "JANTAR Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-projekt-manager-krakow,oferta,1000263878"
    },
    {
      "name": "Lekarza specjalista w radiologii i diagnostyki obrazowej - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/lekarza-specjalista-w-radiologii-i-diagnostyki-obrazowej-branza-medyczna_3443656.html#1b16b0fb89813537b5dcefaaac466ca8"
    },
    {
      "name": "Technik Mechanik (K/M)  [rekrutacja online]",
      "company": "Apleona HSG Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-mechanik-k-m-rekrutacja-online_3436516.html#1b16b0fb89813537b5dcefaaac466ca8"
    },
    {
      "name": "Przedstawiciel Handlowy Systemy Diagnostyki Pojazdów Wow ",
      "company": "Wurth Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy-systemy-diagnostyki-pojazdow-wow_3406956.html#1b16b0fb89813537b5dcefaaac466ca8"
    },
    {
      "name": "Technik – Automatyk (K/M)  [rekrutacja online]",
      "company": "Apleona HSG Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-automatyk-k-m-rekrutacja-online_3378226.html#1b16b0fb89813537b5dcefaaac466ca8"
    }
  ],
  "91": [
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    },
    {
      "name": "Working Student - Software Test Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-test-engineer-krakow,oferta,1000270053"
    },
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
      "name": "Inżynier robót budowlanych",
      "company": "Climatic Sp. z o.o. Sp. k.",
      "urls": "https://www.praca.pl/inzynier-robot-budowlanych_3436914.html#11f7293a565ea6e3c1cf8f956026adf1"
    }
  ],
  "92": [
    {
      "name": "C++ developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/c-developer_3437288.html#8700aba4dd2cea5d16e8dd0e95cb8625"
    },
    {
      "name": "Stolarz meblowy / Operator CNC",
      "company": "Euronova Sp.z o.o. Sp.k.",
      "urls": "https://www.praca.pl/stolarz-meblowy-operator-cnc_3348166.html#8700aba4dd2cea5d16e8dd0e95cb8625"
    },
    {
      "name": "Drukarz / Specjalista do obsługi ploterów",
      "company": "Drops Print Sp. z o.o.",
      "urls": "https://www.praca.pl/drukarz-specjalista-do-obslugi-ploterow_3381552.html#8700aba4dd2cea5d16e8dd0e95cb8625"
    },
    {
      "name": "Operator maszyn cnc- operator maszyn do obróbki skrawaniem",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/operator-maszyn-cnc-operator-maszyn-do-obrobki-skrawaniem_3430982.html#8700aba4dd2cea5d16e8dd0e95cb8625"
    }
  ],
  "93": [
    {
      "name": "Inżynier Utrzymania Ruchu – Nowe uruchomienia (mechanika lub automatyka)",
      "company": "Moltton",
      "urls": "https://www.praca.pl/inzynier-utrzymania-ruchu-nowe-uruchomienia-mechanika-lub-automatyka_3404300.html#70c8bdcb4dd39940089c496cad819ba8"
    },
    {
      "name": "Technik – Automatyk (K/M)  [rekrutacja online]",
      "company": "Apleona HSG Sp. z o.o.",
      "urls": "https://www.praca.pl/technik-automatyk-k-m-rekrutacja-online_3378226.html#70c8bdcb4dd39940089c496cad819ba8"
    },
    {
      "name": "Inżynier Utrzymania Ruchu [rekrutacja online]",
      "company": "Moltton",
      "urls": "https://www.praca.pl/inzynier-utrzymania-ruchu-rekrutacja-online_3337244.html#70c8bdcb4dd39940089c496cad819ba8"
    },
    {
      "name": "Elektryk",
      "company": "Gi Group Sp z o.o.",
      "urls": "https://www.praca.pl/elektryk_3360022.html#70c8bdcb4dd39940089c496cad819ba8"
    },
    {
      "name": "Inżynier Automatyk PLC",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-automatyk-plc_3339232.html#70c8bdcb4dd39940089c496cad819ba8"
    }
  ],
  "94": [
    {
      "name": "Inżynier Automatyk - Administrator Systemów MES  [rekrutacja online]",
      "company": "INTITEK Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-automatyk-administrator-systemow-mes-rekrutacja-online_3443700.html#79fdc0d63a86e0913fff301dbcfe219a"
    }
  ],
  "95": [
    {
      "name": "Service Integration / ServiceNow Solution Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/service-integration-servicenow-solution-architect_3428122.html#d9a9fa3f92e7917e050de2a76db4fad0"
    },
    {
      "name": "Virtual Platform Systems Administrator",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/virtual-platform-systems-administrator_3429028.html#d9a9fa3f92e7917e050de2a76db4fad0"
    },
    {
      "name": "Administrator Systemów Linux",
      "company": "Solid Security Sp. z o.o.",
      "urls": "https://www.praca.pl/administrator-systemow-linux_3333998.html#d9a9fa3f92e7917e050de2a76db4fad0"
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
      "urls": "https://www.pracuj.pl/praca/securities-operations-junior-analyst-krakow,oferta,1000273321"
    },
    {
      "name": "Lease Administrator/Junior Property Accountant",
      "company": "Ceres Management Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/lease-administrator-junior-property-accountant-krakow,oferta,1000268764"
    },
    {
      "name": "Sta z Lwem w Sieci Detalicznej - edycja letnia",
      "company": "ING Bank lski S.A.",
      "urls": "https://www.pracuj.pl/praca/staz-z-lwem-w-sieci-detalicznej-edycja-letnia-krakow,oferta,1000258945"
    },
    {
      "name": "Investment Operations Officer ",
      "company": "Antal International Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/investment-operations-officer-krakow,oferta,1000266489"
    },
    {
      "name": "Senior Financial Accountant",
      "company": "Network eG",
      "urls": "https://www.pracuj.pl/praca/senior-financial-accountant-krakow,oferta,1000233731"
    },
    {
      "name": "Accounts Payable Associate - Junior",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/accounts-payable-associate-junior-krakow,oferta,1000197328"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#a9c91d76c72a3acb877897b0b7a390a3"
    },
    {
      "name": "Dyrektor Placówki Bankowej",
      "company": "Credit Agricole Bank Polska S.A.",
      "urls": "https://www.praca.pl/dyrektor-placowki-bankowej_3437206.html#a9c91d76c72a3acb877897b0b7a390a3"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#a9c91d76c72a3acb877897b0b7a390a3"
    }
  ],
  "97": [
    {
      "name": "Modszy Specjalista ds. Rozlicze i Analiz ",
      "company": "Aterima Sp. z o.o. Sp.K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-rozliczen-i-analiz-krakow,oferta,1000274862"
    },
    {
      "name": "Asystent/ka Zarzdu z j. angielskim",
      "company": "W.KRUK S.A.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-zarzadu-z-j-angielskim-krakow,oferta,1000256472"
    },
    {
      "name": "Asystentka Zarzdu",
      "company": "INTERIM PM sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-zarzadu-krakow,oferta,1000267866"
    },
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
      "name": "Asystent Biznesowy - Business Assistant (MBA/MS/MA)",
      "company": "Humtap Inc.",
      "urls": "https://www.pracuj.pl/praca/asystent-biznesowy-business-assistant-mba-ms-ma-krakow,oferta,1000201645"
    }
  ],
  "98": [
    {
      "name": "Modszy specjalista ds. zamwie publicznych",
      "company": "AMLUX Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-zamowien-publicznych-krakow,oferta,1000273289"
    }
  ],
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
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3"
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
      "name": "Working Student - FPGA Design Verification Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-design-verification-engineer-krakow,oferta,1000256977"
    },
    {
      "name": "Working Student - FPGA Algorithm Modeling Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-algorithm-modeling-engineer-krakow,oferta,1000256972"
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
  "106": [
    {
      "name": "Diagnostyka laboratoryjny - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.linkedin.com/jobs/view/1871616508"
    },
    {
      "name": "Kierownik Sekcji Administracyjno-Technicznej",
      "company": "Samodzielny Publiczny Zespół Opieki Zdrowotnej w Proszowicach",
      "urls": "https://www.linkedin.com/jobs/view/1885847778"
    }
  ],
  "107": [],
  "108": [],
  "109": [],
  "110": [
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
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#8c7f6c4ecbdac056738f9d6526320c31"
    },
    {
      "name": "ServiceNow Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/servicenow-architect_3436186.html#8c7f6c4ecbdac056738f9d6526320c31"
    },
    {
      "name": "SharePoint Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/sharepoint-architect_3436878.html#8c7f6c4ecbdac056738f9d6526320c31"
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
      "name": "BI Azure Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/bi-azure-architect_3429124.html#8c7f6c4ecbdac056738f9d6526320c31"
    }
  ],
  "111": [
    {
      "name": "Menadżer IT plus eCommerce",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcl7SaLP_MpaOcC0R1fREk1o9tOKV_PSlZgoYyESvbDEc98tycvB0Ry408scwOFYAiwNaCggxKhWhkZhVFIaAhgiwgfPIM8AA5zXBMQp2C_XtAjgI0I3jr3eRlxiDfC69MdIMm3uG4ywzW9mNP3VCtqXDo2Tfv7QfPDbZpMoq2GNJqOQAJ_1RTMUEdtIoL4FPF3CAJym2-GWW6fqqKtKxu7-rF27dWxZwReZTJW8JZLxeRLwcjVwG5ggiG-_iqMl8ktWD48qeOCk3WYIVC5M6du8J9soPNhD0J4DNJMTSdZcWPyDcoNYGSoQ2g9dn8pIv1L-t2eSN3uYyeDkL27KlldYcxsAP4etENDDxA_eQhLuCks7mnJJI3bjVek4gBp90XSQHl87gcKJY6PH8Pi1aYGFfdt4YSAriRplX-ulHSzD7lLppFpofJPe_ZI7R1zhpTGMrG5kbgwdZ8Adgf_4pboIi7orbz0FCsEsk17tiKLeMkXFbuKCzB8o-74jCNrY0zmzMqityz5j1ioQKm3sSbP-ru2N24e0gstZchbQjO6LQHeNmsLyf8QVlVfnh7KuIp4YP6cF-dngDiVLbWudzCGdXxf4C3VXAIvDoIpE3neh8sG4Po6mCq9f5kihjcHLQCIzBl6zHuC9_mfMVnfLyHQfvihbVzWG4Q=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Kierownik Zmiany",
      "company": "FIEGE Logistik Stiftung & Co. KG",
      "urls": "https://pl.indeed.com/viewjob?jk=2de8f5b4cc3c48c3&fccid=c21abee0de715f4a&vjs=3"
    },
    {
      "name": "Kierownik projektów marketingowych",
      "company": "AKRA Polska",
      "urls": "https://pl.indeed.com/viewjob?/Akra-Polska/jobs/Kierownik-Projekt%C3%B3w-Marketingowych-89bc7aa040bf07a8?fccid=d270f52b1f6ccba6&vjs=3"
    },
    {
      "name": "Kierownik projektu IT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=fc4d070c679ac3ee&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Kierownik Zespołu Handlowego - rekrutacja prowadzona zdalnie",
      "company": "Futuriti",
      "urls": "https://pl.indeed.com/viewjob?jk=8199866ac6429e4d&fccid=14f634228675fb3a&vjs=3"
    },
    {
      "name": "Product Manager (biura rachunkowe)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=692ebe743f5a7a7a&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Menadżer IT plus eCommerce NOWA",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=588a10cfd05ac937&fccid=503ed6c94c8786f6&vjs=3"
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
      "name": "Senior Project Manager",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-project-manager_3440034.html#8340b7c0fa56d555f2ad6e3d20e2a4a4"
    },
    {
      "name": "Project Accounting Manager [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/project-accounting-manager-rekrutacja-online_3394348.html#8340b7c0fa56d555f2ad6e3d20e2a4a4"
    },
    {
      "name": "IT Project Manager [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/it-project-manager-rekrutacja-online_3407364.html#8340b7c0fa56d555f2ad6e3d20e2a4a4"
    },
    {
      "name": "Cybersecurity Managing Consultant",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cybersecurity-managing-consultant_3436496.html#8340b7c0fa56d555f2ad6e3d20e2a4a4"
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
    }
  ],
  "113": [
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Praktykant Salesforce - get the HOT Salesforce skill!",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,1000276362"
    },
    {
      "name": "Praktykant/Junior Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,1000278106"
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
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000270049"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
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
    }
  ],
  "114": [
    {
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Praktykant Salesforce - get the HOT Salesforce skill!",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,1000276362"
    },
    {
      "name": "Praktykant/Junior Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,1000278106"
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
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000270049"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
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
      "name": " C/C++ Embedded Senior Software Developer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/c-c-embedded-senior-software-developer-rekrutacja-online_3415764.html#ee277a6c055d2b7dabe1e040f80c0613"
    }
  ],
  "115": [
    {
      "name": " C/C++ Embedded Senior Software Developer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/c-c-embedded-senior-software-developer-rekrutacja-online_3415764.html#777869ed96b80987a8e46258f867cca3"
    }
  ],
  "116": [
    {
      "name": "Starszy Specjalista ds. Rozwoju Zasobów Ludzkich",
      "company": "Mota-Engil Central Europe S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=fc9c92711fa49dbc&fccid=bcf0bf1f4707d6c6&vjs=3"
    },
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
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Modszy Specjalista ds. obsugi Klienta",
      "company": "FarmaProm Polska Sp. z o.o. Sp. K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-krakow,oferta,1000259564"
    },
    {
      "name": "Praktykant Salesforce - get the HOT Salesforce skill!",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,1000276362"
    },
    {
      "name": "Praktykant/Junior Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,1000278106"
    },
    {
      "name": "Desktop Support Engineer",
      "company": "NOVOMATIC Technologies Poland S.A.",
      "urls": "https://www.pracuj.pl/praca/desktop-support-engineer-zabierzow-pow-krakowski,oferta,7529383"
    },
    {
      "name": "Junior Business Analyst",
      "company": "Nowe Motywacje Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-business-analyst-krakow,oferta,1000278449"
    },
    {
      "name": "(FCR Ops) Assistant Manager - FCC Operations with German",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fcr-ops-assistant-manager-fcc-operations-with-german-krakow,oferta,1000260227"
    },
    {
      "name": "Junior Customer Support",
      "company": "Reality Games Polska sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-customer-support-krakow,oferta,1000238785"
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
      "name": "Power Grids  Internship  Business Analyst/Application Specialist",
      "company": "ABB PG BUSINESS SERVICES SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/power-grids-internship-business-analyst-application-specialist-krakow,oferta,1000275600"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "Platform Operations Technician (III shift)",
      "company": "Znajd wymarzonego pracodawc",
      "urls": "https://www.pracuj.pl/praca/platform-operations-technician-iii-shift-krakow,oferta,7521969"
    },
    {
      "name": "Working Student - FPGA Algorithm Modeling Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-algorithm-modeling-engineer-krakow,oferta,1000256972"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Modszy Specjalista ds. Technicznej Obsugi Klienta",
      "company": "nazwa.pl Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-technicznej-obslugi-klienta-krakow,oferta,1000257596"
    },
    {
      "name": "Working Student - Software Test Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-test-engineer-krakow,oferta,1000270053"
    },
    {
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000270049"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Investment Operations Officer ",
      "company": "Antal International Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/investment-operations-officer-krakow,oferta,1000266489"
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
      "name": "Lead Scala consultant",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/lead-scala-consultant_3443078.html#53bd8c377d38166ec24900205dfb63ba"
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
      "name": "Cybersecurity Managing Consultant",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cybersecurity-managing-consultant_3436496.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Senior Cybersecurity Consultant",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-cybersecurity-consultant_3436870.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Cybersecurity Consultant",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cybersecurity-consultant_3436490.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://www.praca.pl/administrator-it-specjalista-it_3399002.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Freelancer - Specjalista ds. Rekrutacji IT",
      "company": "Power Media",
      "urls": "https://www.praca.pl/freelancer-specjalista-ds-rekrutacji-it_3405216.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Specialist (Senior Analyst) (L2 Support) with English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-specialist-senior-analyst-l2-support-with-english_3389752.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Specjalista ds. Wdrożeń ",
      "company": "Konica Minolta Business Solutions Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen_3373040.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/it-support-analyst_3401260.html#53bd8c377d38166ec24900205dfb63ba"
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
      "name": "IT Analyst with German & English ",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-german-english_3341804.html#53bd8c377d38166ec24900205dfb63ba"
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
      "name": "Senior IT Rekruter / Starszy Specjalista ds. Rekrutacji IT",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-it-rekruter-starszy-specjalista-ds-rekrutacji-it_3357798.html#53bd8c377d38166ec24900205dfb63ba"
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
      "company": "UNICARD",
      "urls": "https://pl.indeed.com/viewjob?jk=282e7cff0c77523e&fccid=6ec19a37860139d8&vjs=3"
    },
    {
      "name": "Programista Embedded",
      "company": "Green Cell",
      "urls": "https://pl.indeed.com/viewjob?jk=8c1525665ce0cb01&fccid=7520988c97ff0996&vjs=3"
    },
    {
      "name": "Programista Embedded C/C++",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=9b169d1843e0fb48&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista aplikacji mobilnych Android- IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=0066fb4d9d8fdbc9&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista embedded IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=3cfd39e2b6e9f689&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista aplikacji mobilnych iOS - IoT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=93b24dfedaf9c272&fccid=68b975ecbbd7a58d&vjs=3"
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
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#c6e7b152e38eedf796af0676ce8eadd2"
    },
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#c6e7b152e38eedf796af0676ce8eadd2"
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
    },
    {
      "name": "Inżynier systemowy - Service Desk",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?/Comarch/jobs/In%C5%BCynier-Systemowy-d9c42efcb11f03be?fccid=650619ff89ad0142&vjs=3"
    }
  ],
  "136": [
    {
      "name": "PROJEKTANT INSTALACJI FOTOWOLTAICZNEJ",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=9e39e1810c029b8a&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Projektant instalacji elektrycznych",
      "company": "Cavatina&Partners",
      "urls": "https://pl.indeed.com/viewjob?jk=4ee4bd00e4f102a9&fccid=2dca8a291e4b100a&vjs=3"
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
      "name": "Projektant/Konstruktor mebli",
      "company": "Alnag",
      "urls": "https://pl.indeed.com/viewjob?jk=564564d332fce676&fccid=bf5c9a6dbdd0922b&vjs=3"
    },
    {
      "name": "Elektromonter instalacji fotowoltaicznych",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=c2a6d2d934717452&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Elektromonter sieci SN i nN w Jednostce Terenowej Nowa Huta",
      "company": "TAURON Dystrybucja S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=fee0afaceaac8eb8&fccid=5a376901cebad8b2&vjs=3"
    },
    {
      "name": "Elektryk – monter instalacji",
      "company": "DC Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=0761574bb77f2628&fccid=102922c917c5bfe4&vjs=3"
    },
    {
      "name": "Inżynier Budowy - Mistrz budowy",
      "company": "Przedsiębiorstwo Robót Inżynieryjnych INKOP",
      "urls": "https://pl.indeed.com/viewjob?jk=1d3dd98638ee466d&fccid=a695411d8904b8ca&vjs=3"
    },
    {
      "name": "Pomiarowiec - Kierowca kat. B",
      "company": "Sanpro Synergy Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=4fd6f4259177a4fe&fccid=6af571eef33d6b4d&vjs=3"
    },
    {
      "name": "STARSZY ASYSTENT PROJEKTANTA BRANŻY MOSTOWEJ",
      "company": "REJPROJECT",
      "urls": "https://pl.indeed.com/viewjob?jk=fafe0e31168e602b&fccid=7606770ec5e96388&vjs=3"
    },
    {
      "name": "Monter instalacji fotowoltaicznych",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=f86bb269d7d12e01&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Szlifierz",
      "company": "Bamet",
      "urls": "https://pl.indeed.com/viewjob?jk=146cd26516c29922&fccid=55f842c9b66dbe5b&vjs=3"
    },
    {
      "name": "Technik / Inżynier serwisu",
      "company": "SUPO Cerber Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=25f67765ab24d930&fccid=f4a1a5f8d716fe58&vjs=3"
    },
    {
      "name": "Monter / Serwisant - instalacji z zakresu telekomunikacji",
      "company": "OPTIMA",
      "urls": "https://pl.indeed.com/viewjob?jk=b8bb773291188d51&fccid=5cdf4ecfa8db6b9c&vjs=3"
    },
    {
      "name": "Specjalista ds. światłowodowych technik pomiarowych",
      "company": "SHM System Sp. z o.o. Sp. kom.",
      "urls": "https://pl.indeed.com/viewjob?jk=c6990eca8feb3614&fccid=0d0b93e7fe8514c2&vjs=3"
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
  "143": [],
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
      "name": "Praktykant Salesforce - get the HOT Salesforce skill!",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,1000276362"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Fullstack .NET Developer (Regular / Senior)",
      "company": "Power Media",
      "urls": "https://www.praca.pl/fullstack-net-developer-regular-senior_3422794.html#01a3e5422ba1d5a5567c06a9f205565b"
    },
    {
      "name": "Python Developer (Django + Django Rest Framework)",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/python-developer-django-django-rest-framework_3433326.html#01a3e5422ba1d5a5567c06a9f205565b"
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
      "name": "Java Developer (Mid)",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/java-developer-mid_3396308.html#01a3e5422ba1d5a5567c06a9f205565b"
    },
    {
      "name": "Angular Developer (Junior/Mid)",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/angular-developer-junior-mid_3420188.html#01a3e5422ba1d5a5567c06a9f205565b"
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
      "name": "Front-end Developer",
      "company": "Dotlinkers",
      "urls": "https://pl.indeed.com/viewjob?jk=984df2d96643e03f&fccid=c62351057abf05f6&vjs=3"
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
      "name": "Integrated Catchment Modeller (InfoWorks ICM)",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/integrated-catchment-modeller-infoworks-icm_3396890.html#9571477933dca269f999e1ac25c31844"
    },
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
    }
  ],
  "152": [],
  "153": [
    {
      "name": "Network Engineer",
      "company": "Frank Recruitment Group",
      "urls": "https://www.praca.pl/network-engineer_3444412.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Service Integration / ServiceNow Solution Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/service-integration-servicenow-solution-architect_3428122.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Virtual Platform Systems Administrator",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/virtual-platform-systems-administrator_3429028.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "System Administrator with Wintel/Unix",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/system-administrator-with-wintel-unix_3441286.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Service Delivery Administrator",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/service-delivery-administrator_3441288.html#571e3ad5364317747c2506f7998d9538"
    },
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
      "name": "Data Center Engineer",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/data-center-engineer_3347770.html#571e3ad5364317747c2506f7998d9538"
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
      "name": "Power Grids - Internship - User Experience Engineer",
      "company": "ABB PG BUSINESS SERVICES SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/power-grids-internship-user-experience-engineer-krakow,oferta,1000275618"
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
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3415642.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Analityk Finansowy",
      "company": "Fagron sp. z o.o.",
      "urls": "https://www.praca.pl/analityk-finansowy_3409816.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Video Content Analyst with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/video-content-analyst-with-french_3422886.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-business-analyst_3393580.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Data Associate with German",
      "company": "ManpowerGroup",
      "urls": "https://www.praca.pl/data-associate-with-german_3422244.html#930e3ab82934b374718d73e23d781eb3"
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
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen-systemow-analitycznych_3405276.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Data Center Engineer",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/data-center-engineer_3347770.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Business Analyst [rekrutacja online]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/business-analyst-rekrutacja-online_3343528.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Expert in Pricing with Hungarian [online recruitment]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/expert-in-pricing-with-hungarian-online-recruitment_3359952.html#930e3ab82934b374718d73e23d781eb3"
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
    }
  ],
  "158": [
    {
      "name": "Junior Graphic Designer",
      "company": "Morele.net Sp. z o.o. ",
      "urls": "https://www.pracuj.pl/praca/junior-graphic-designer-krakow,oferta,1000257192"
    },
    {
      "name": "Projektant grafiki",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/projektant-grafiki_3429884.html#6e67580038dc35ccf651da95cc8ddaf7"
    }
  ],
  "159": [
    {
      "name": "C++ Developer",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIdmL4h2EI-6MQT2MYWoVlecMS8xnsoteCGiEtSz-foVW7HkJMHDsENdzpVrc7Li9PFtd06QpKc6HANdp6RnYHds8HxRwTRrIj5sZq32AxO1xeEPeK7Xc5jb4DYBGHgtOyvmMFAXVHvdIed34zIQwt7yimG-JR2FJuRius9LaaJG4zx62xJnhJPDpBQcTQZaWrwtfQ9MfG8PQiHwDl2DR45njFUxd3yUzrfjVXxbg2g1N_2I7epK0Q-fu841-mVYYfo1IJ2DNYTWzVV-_C7SdDD-z1Niw1SHNBWYWNpxMOmQ21AAZvGR492eUsnXbbacIo_9ztreXX0ZUdLGziuE0RbaZ8w_TkhTNXNnPLvW--UhjRADUc5TXr6TtV4p6z44x27MYNak-LagexXo00GB8aBdV5qlWkbjhssE4yYCcUm8KhBeNVfmvrAJtDfIKE_W4krk9fR-9dPWbOfrGgJHzbJzI13q350y_DXz635-UeCZQVl4Dk00pOvq5duJJtOhTDuH9FTPdZzPswn7yHrw6_UFadtmTi8w4rSothpkj8RrJlM1MCbFW8w2soJASmrMwVfPMR1aWt-YdDCrCDJB2fZ9z78_Zi1KN53krlmZ7SjeM224tOQFoRQu&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Unity Developer",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIdmL4h2EI-6MRw8RO0nGTpT8vVegrXL598BCXOuZn_EVvK3v4yyJTLHuvbPXyZqzaVcSn0l4WMoPN9P4S-o6u5YlF9_emmxrkfExOBOS1l4WYxolO6A4BWWFcmZ4ILTXgP_aEOaJq7f3mrpXfyaIhESR9dk4W0W8NPUUbKXWOa4xLx5p0HZgydZpgsDjoR49Z3dRcHI-CJzuq7EUM6J_tEZMd8PDWa4b6aZ4kaJG5NT-9tt77RAoStdxkLQZfrWDf1TGYGGx_cahrlKVC0jE3QK7rDCXV5YLr8swyZe1qyX5d2LJtCorJDrwrLAJ7dp6-YnV4bgzG9ua9zmhNwMNRb-OCaKw0bnA9SgVaaBWbX5Y8F-7wtYy4R5jAR8K33mV9_hqVjjN29nSqnPYC_jhFwiw_wToKKasaz6Uabczp5xpz6rzS1Fpx4dCXzeuvjASYxqADlHVhwNO-6JXKSd11OoU5ZgVaSHWR3BujVNEUUSFIOU1AtsXoVDrB5_YBsT6XqkagT-jpDi-CRpQF4G15DKan8QD9PXxfsSVgXVHhjA-Dgwa7tUsHAeofJHDqTO4yYaWzgX4VlWUtPY-mBNKRHJS7Ff-iDB5iIEsridAgPGARq7SwlBUkGr&p=1&fvj=0&vjs=3"
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
      "name": "Junior Ruby on Rails Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=3ee2b30b299dfdcc&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Java Game Developer",
      "company": "NetEnt",
      "urls": "https://pl.indeed.com/viewjob?jk=23714aef762b6f70&fccid=594e59f84614d19c&vjs=3"
    },
    {
      "name": "Senior Frontend Developer",
      "company": "Columbus",
      "urls": "https://pl.indeed.com/viewjob?jk=32266f8fdd1392f9&fccid=dd616958bd9ddc12&vjs=3"
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
      "name": "Senior Fullstack Developer",
      "company": "NetEnt",
      "urls": "https://pl.indeed.com/viewjob?jk=822e15a43ff1b9fc&fccid=594e59f84614d19c&vjs=3"
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
      "name": "UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=be38b941f8b99086&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Unity Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=0e322586897ab54a&fccid=5b6b859587be5ef0&vjs=3"
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
      "name": "Senior Android Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=09f391641b2871d2&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Senior Front End Developer",
      "company": "Grand Parade",
      "urls": "https://pl.indeed.com/viewjob?jk=c4cb2108e96e2df5&fccid=05868c54e0d72a0d&vjs=3"
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
      "name": "Fullstack Developer - Portfolio Team",
      "company": "NetEnt",
      "urls": "https://pl.indeed.com/viewjob?jk=4b37a6dde9f7ba3e&fccid=594e59f84614d19c&vjs=3"
    },
    {
      "name": "Senior C++/UE4 Software Developer",
      "company": "Sperasoft",
      "urls": "https://pl.indeed.com/viewjob?jk=3f2ff4a02e96a4b8&fccid=72575fa3d1ce8c23&vjs=3"
    },
    {
      "name": "React Native Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=1580b5bf1a221038&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Software Engineer - Developer Productivity",
      "company": "Pegasystems",
      "urls": "https://pl.indeed.com/viewjob?jk=fb197a9f582e0bb8&fccid=1b567d66763b30ee&vjs=3"
    },
    {
      "name": "Android Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=2476a52e4e64bd39&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Senior Front End Developer",
      "company": "William Hill",
      "urls": "https://pl.indeed.com/viewjob?jk=a27daada7ed9e008&fccid=8cb222cc2614b8d7&vjs=3"
    },
    {
      "name": "IOS Developer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=33b966b3e7110a7e&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Backend Developer [online recruitment]",
      "company": "Two Up Digital",
      "urls": "https://pl.indeed.com/viewjob?jk=a76cabc1a51e85a2&fccid=50829994782ef656&vjs=3"
    },
    {
      "name": "Senior Unity 3DDeveloper",
      "company": "Swift Apps",
      "urls": "https://pl.indeed.com/viewjob?jk=39aa5f08bc35feeb&fccid=3950800b528a0e46&vjs=3"
    },
    {
      "name": "Senior Front-End Developer (Angular)",
      "company": "Sperasoft",
      "urls": "https://pl.indeed.com/viewjob?jk=33985f3223f960bc&fccid=72575fa3d1ce8c23&vjs=3"
    },
    {
      "name": "Senior Java Developer",
      "company": "SolarWinds",
      "urls": "https://pl.indeed.com/viewjob?jk=6526d6eed334c475&fccid=8fac7c785ef64f5e&vjs=3"
    },
    {
      "name": "Senior SW Test Developer",
      "company": "Nordic Semiconductor",
      "urls": "https://pl.indeed.com/viewjob?jk=fb9e906eb4e2477d&fccid=d468e34edcbad731&vjs=3"
    },
    {
      "name": "Senior React Developer",
      "company": "Software Mansion",
      "urls": "https://pl.indeed.com/viewjob?jk=7320ad74de304c3b&fccid=9b0e62e4834badc9&vjs=3"
    },
    {
      "name": "Senior SQL//VBA/Coric developer",
      "company": "Luxoft Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=31adeec521c28893&fccid=8f1b5b8da4c009f1&vjs=3"
    },
    {
      "name": "Senior C# Developer",
      "company": "Verita HR Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=52c17df4e65aad8f&fccid=e265b982603f34bc&vjs=3"
    },
    {
      "name": "Magento 2 Developer",
      "company": "Jobs",
      "urls": "https://pl.indeed.com/viewjob?jk=9f331fd549e9d967&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Senior 2D Artist",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIe2p3w8AVQ8AF1CNKCocOR5N61pW2gIho3cmGXMIgrg--EuYi0bCDiJu02KGoEmjdKUh39RPm4vQK5LjwhCZvlgKWaPPf5kGRJc4ajDVfEdxInduTsu5ZYlGXQEWQSbpTQRdZ-P12UL1v5gF0dSLtdYbEq2suI8bc16lS1AHMZzTWEtbG4cuMshg-lUdrLX9URYcpz-meQfKk6uKSwX2FIdIcmMoJ5ob0C3ehdnBjMtqvMqa4bJUPZZB6XqqtUd0doszwije6y0I3toL6X69ZNBkZTT_VtQKrghsFn-ZBE1cLRrdxM5bp7nLwMvcP0X014jvFplaWiu2f9dM2qIGcqlkGbLK8cB9tiiroPi8P2GinyAVyK8fFZgzlYXlBpOA1Rjmmbk-LXXH4gbkobc4d4UPJBuQNBfrjUqqlxnxxP0ppP3TLiF74ao7iqR9WGcB2l6so3OUU8JixvpMiYQpZSQHre4G_xwqjDa8PKi0SFQp4WrPobgCGamE32QZAU3Oi4uwS2NXiLFdU-Tif-oc-Q2p-gYiQpr-Z7Gd1mleqS9cl2m8heAG7d1kirO28ZhUchBoyYGwJY_-F3qS3hmVwwVdNJ3bq1n_EEFDTXtZZH5Wcxu0WhHpu8g&p=2&fvj=0&vjs=3"
    },
    {
      "name": "Unity Developer NOWA",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=5821fd7c8edaa4b6&fccid=503ed6c94c8786f6&vjs=3"
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
      "name": "Regular or Senior Java Developer",
      "company": "Verita HR Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=cae688964a729524&fccid=e265b982603f34bc&vjs=3"
    },
    {
      "name": "Integration Support Engineer",
      "company": "Yggdrasil Gaming Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=200de0fb631639ab&fccid=fe29cc37d9c271c4&vjs=3"
    },
    {
      "name": "Senior C++ Game Engine Developer",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com/viewjob?jk=b4c805aa2f542eac&fccid=c26d104f25f1364f&vjs=3"
    },
    {
      "name": "C# Azure Developer for ABB Marine",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=3e5d6b58db40c1a5&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Sr Java Developer- NetEnt Live (back-end/platform)",
      "company": "NetEnt",
      "urls": "https://pl.indeed.com/viewjob?jk=65bd51100a25331c&fccid=594e59f84614d19c&vjs=3"
    },
    {
      "name": "Lead KDB/Q Developer",
      "company": "Luxoft Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=949b6d6a5d2beea7&fccid=8f1b5b8da4c009f1&vjs=3"
    },
    {
      "name": "Rendering Software Developer",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com/viewjob?jk=543335685ca43dc0&fccid=c26d104f25f1364f&vjs=3"
    },
    {
      "name": "UE4/C++ Software Developer",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com/viewjob?jk=34ff09ac29e580a2&fccid=c26d104f25f1364f&vjs=3"
    },
    {
      "name": "Senior C++/UE4 Software Developer",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com/viewjob?jk=935d5f2e38592a67&fccid=c26d104f25f1364f&vjs=3"
    },
    {
      "name": "Senior FE Developer (Angular) with UX experience",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com/viewjob?jk=874cd0439c8dbb8f&fccid=c26d104f25f1364f&vjs=3"
    }
  ],
  "160": [
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
      "name": "Specjalista ds. Marketingu",
      "company": "Stowarzyszenie Manko",
      "urls": "https://pl.indeed.com/viewjob?jk=7dcc6b5226196f35&fccid=d6f2dc62b6541590&vjs=3"
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
      "name": "Księgowy/Księgowa",
      "company": "Eurovia",
      "urls": "https://pl.indeed.com/viewjob?jk=0c4da2de1b207fec&fccid=6df22a29a2de0162&vjs=3"
    },
    {
      "name": "Dyrektor Zakładu Produkcyjnego",
      "company": "hrnavigator.com.pl",
      "urls": "https://pl.indeed.com/viewjob?jk=4e228a33f9243ebf&fccid=8374be60c0e8f2ad&vjs=3"
    },
    {
      "name": "Dyrektor Finansowy / CFO",
      "company": "Green Cell",
      "urls": "https://pl.indeed.com/viewjob?jk=659af5fff5832af5&fccid=7520988c97ff0996&vjs=3"
    },
    {
      "name": "Pracownik restauracji – pełny lub niepełny etat",
      "company": "McDonalds Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=08f6ddf575583919&fccid=f753bb1a40104d82&vjs=3"
    },
    {
      "name": "Pracownik produkcji",
      "company": "Pilkington",
      "urls": "https://pl.indeed.com/viewjob?jk=c5ab79c07079aa5f&fccid=59d593c4eb037805&vjs=3"
    },
    {
      "name": "Project manager/Koordynator projektu",
      "company": "Agencja Harmonic",
      "urls": "https://pl.indeed.com/viewjob?jk=ddc15c77b703c093&fccid=c9d938964f9d001d&vjs=3"
    },
    {
      "name": "Doradca Klienta Biznesowego Orange",
      "company": "OPTIMO Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=96819f6adc707674&fccid=ddd1f6c57c0cb5c1&vjs=3"
    },
    {
      "name": "AGENT OCHRONY",
      "company": "Hipermarket Auchan",
      "urls": "https://pl.indeed.com/viewjob?jk=996c4f56faac24ae&fccid=591ff26ed17ce192&vjs=3"
    },
    {
      "name": "Opiekun/Opiekunka Medyczny/Medyczna",
      "company": "Scanmed S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=534248c88c23fd92&fccid=5baf87fca2a86ad0&vjs=3"
    },
    {
      "name": "inspektor",
      "company": "Kancelaria Prezesa Rady Ministrów",
      "urls": "https://pl.indeed.com/viewjob?jk=640383fea1ae4d42&fccid=5565c12aed7d6662&vjs=3"
    },
    {
      "name": "Pracownik restauracji",
      "company": "McDonalds Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=a5aedbecb6eba549&fccid=f753bb1a40104d82&vjs=3"
    },
    {
      "name": "Mechanik maszyn produkcyjnych",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=23814c08b5e9cc4a&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Pracownik restauracji McDonald’s Galeria Bronowice – zmiana...",
      "company": "McDonalds Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=9dc80b3074aad08a&fccid=f753bb1a40104d82&vjs=3"
    },
    {
      "name": "Backend Developer",
      "company": "ASTEK Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=9fc3a00c23d13ec4&fccid=bade360f8bbb30c6&vjs=3"
    },
    {
      "name": "Wychowawca kolonijny",
      "company": "English Immersion American Camps",
      "urls": "https://pl.indeed.com/viewjob?/English-Immersion-American-Camps/jobs/Wychowawca-Kolonijny-4e632dc8786d453c?fccid=135bd608892caf6e&vjs=3"
    },
    {
      "name": "Wordpress Developer",
      "company": "SKM Group",
      "urls": "https://pl.indeed.com/viewjob?/Skm-Group/jobs/Wordpress-Developer-4f351ed90144c4c4?fccid=0db111b751ec04e1&vjs=3"
    },
    {
      "name": "Kierownik Robót Drogowych lub Torowych/Inżynier Budowy",
      "company": "KZN RAIL Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=fe99701bd1cf7c37&fccid=be21bffde79d2ca7&vjs=3"
    },
    {
      "name": "Network Designer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=233bc43d4a0c3cc6&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Cloud Sales Specialist - praca zdalna",
      "company": "Fly on the cloud",
      "urls": "https://pl.indeed.com/viewjob?jk=fd6556889f8eb894&fccid=ca95fa460a86e499&vjs=3"
    },
    {
      "name": "Specjalista ds. bezpieczeństwa IT - Pentester",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?/Comarch/jobs/Specjalista-Do-Spraw-Bezpiecze%C5%84stwa-IT-a2084dec085acde3?fccid=650619ff89ad0142&vjs=3"
    },
    {
      "name": "Elektromechanik",
      "company": "LafargeHolcim",
      "urls": "https://pl.indeed.com/viewjob?/LafargeHolcim/jobs/Elektromechanik-fd4d5d0b77e928d7?fccid=7618bab885a58aa7&vjs=3"
    },
    {
      "name": "Menadżer IT plus eCommerce NOWA",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=588a10cfd05ac937&fccid=503ed6c94c8786f6&vjs=3"
    },
    {
      "name": "Inżynier sprzedaży systemów bezpieczeństwa przemysłowego",
      "company": "GRUPA WOLFF",
      "urls": "https://pl.indeed.com/viewjob?jk=d85a4988a3bbd086&fccid=3d99fb61e9e62f24&vjs=3"
    },
    {
      "name": "Senior iOS Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=f2c79a96074148e7&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Wordpress Developer",
      "company": "Amsterdam Standard Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=bce63c99351ac966&fccid=fb1b22023a56f66a&vjs=3"
    },
    {
      "name": "Senior Engineer - Zscaler",
      "company": "NEXT TECHNOLOGY PROFESSIONALS SPÓŁKA Z OGRANICZONĄ...",
      "urls": "https://pl.indeed.com/viewjob?jk=62cb83177c4aaaf4&fccid=cf2c9f69c3e83d61&vjs=3"
    },
    {
      "name": "Specjalisty ds. Obsługi Klienta z językiem słoweńskim",
      "company": "Elefanco Sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?/Elefanco-Sp.-z-o.-o./jobs/Specjalisty-Do-Spraw-Obs%C5%82ugi-Klienta-Z-J%C4%99zykiem-S%C5%82owe%C5%84skim-65147b5faf394926?fccid=2e2e58fb05ca54d0&vjs=3"
    },
    {
      "name": "Programista Systemów audiowizualnych / CRESTRON",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com/viewjob?jk=97f5a0f322033bad&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Inżynier ds. Testów",
      "company": "Grupa Unity",
      "urls": "https://pl.indeed.com/viewjob?jk=1f2ed1cc4252a137&fccid=9a34138d512ebeaf&vjs=3"
    },
    {
      "name": "Administrator Systemowo-Sieciowy",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=f48d068553c6e9d6&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Menadżer IT plus eCommerce",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcl7SaLP_MpaOcC0R1fREk1o9tOKV_PSlZgoYyESvbDEc98tycvB0Ry408scwOFYAiwNaCggxKhWhkZhVFIaAhgGY7aNB0-FpgYEPELmYoUIY1jEf8UR4IcpJ4eqn27zLNYYFZ1Ix3GEqUkCANDfi6oWB4pql6NfJjIYSw0MejynpaoHp2WgHB6HSNjiNRk2JvHZgQd1k8gxzcVuuwfMNGnEWG9Hm_msXTVUl9yMqSNw5qlmfnhC5g7mc1GKn0dh83PmbrlFydmmvAvvGEPZyTW3e_8HsN723LKzXXxb7CavLCVgYKisPJaGuyq7cA_-4H-2rm6C3-aSSGslLHuZt4iUiGRouT2lWsouS-vG3BM-ums3sMYJCKHuk1uGySlCENjmCt4_nsWKPx-3Q2r75nYxOh82Xm-1a6z1XvOUd3Esj5PVXa9od1hwR1zrt-Oxv653qV6YT04mSiyRWkPPZdxNXI0EGBM_AhSU3uqtJIuUsgvK5e9yEeUZNlW3YCRdcoLZAv3ztoDxxfr7QRuwYCX4P3CJvSqFWKEVgplL3-LF1Z0J52MDs2ea-rNG8pgqfZS1mUuP2rxcQ1qxuFgD6Nz4_sfTkd9XG-uM_FYTgO2uJDWDg3sCa5r2yUJ17LF--rZRw5MZVSSIyf9jBc_BnYe&p=10&fvj=0&vjs=3"
    },
    {
      "name": "Kierownik Projektu (Contact Center)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=77d3d8045b8d70e3&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Core Software Engineer",
      "company": "ESET",
      "urls": "https://pl.indeed.com/viewjob?jk=679d04578bab853a&fccid=8e1474db6974999b&vjs=3"
    },
    {
      "name": "Senior Network Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=bb0af94e2bcc84b1&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Specjalisty ds. Obsługi Klienta z językiem fińskim",
      "company": "Elefanco Sp. z o. o.",
      "urls": "https://pl.indeed.com/viewjob?/Elefanco-Sp.-z-o.-o./jobs/Specjalisty-Do-Spraw-Obs%C5%82ugi-Klienta-Z-J%C4%99zykiem-Fi%C5%84skim-5bab2b692e7df5bb?fccid=2e2e58fb05ca54d0&vjs=3"
    },
    {
      "name": "Full-Stack Developer | React, Node.js",
      "company": "Jcommerce",
      "urls": "https://pl.indeed.com/viewjob?jk=01fd8fe3d05d0a53&fccid=99a536694443ad83&vjs=3"
    },
    {
      "name": "Pilot Turystyczny/Kierownik Turystyczny",
      "company": "Poltur Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=60e4be1302387e9d&fccid=91af239b1666ea7e&vjs=3"
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
      "name": "DevOps Engineer",
      "company": "AUTENTI Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=e04b9be8f24aaf24&fccid=5fc90b16cbf43e55&vjs=3"
    },
    {
      "name": "Full Stack JavaScript node.js/react developer",
      "company": "NBC Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=ce2f0c70d0e5cce6&fccid=2f45a6829d6c88f6&vjs=3"
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
      "name": "Praca: opieka / pomoc: od końca czerwca",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com/viewjob?jk=f2c2bfe2982cdff4&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Network Engineer / Inżynier sieci",
      "company": "Washington Frank",
      "urls": "https://pl.indeed.com/viewjob?jk=5fcad688fe10a7d9&fccid=cb9285e8f83d93f4&vjs=3"
    },
    {
      "name": "Przedstawiciel handlowy / Handlowiec / Business Development...",
      "company": "Futurum Technology Ltd.",
      "urls": "https://pl.indeed.com/viewjob?jk=580e48f49f7a4bc6&fccid=228edc79f2ff9b7a&vjs=3"
    },
    {
      "name": "Fullstack Developer",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com/viewjob?jk=d663cc7049b01d6a&fccid=4fcb59d2ba8f65d1&vjs=3"
    },
    {
      "name": "Full-Stack Developer (PHP)",
      "company": "Dotlinkers",
      "urls": "https://pl.indeed.com/viewjob?jk=df048f3e979c321e&fccid=c62351057abf05f6&vjs=3"
    },
    {
      "name": "DevOps Engineer (Senior)",
      "company": "Edge Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=2668fcd9c6bd2fef&fccid=b18ecb623e949f74&vjs=3"
    },
    {
      "name": "Inżynier sieci / Network Engineer - Kraków",
      "company": "FRG Technology Consulting",
      "urls": "https://pl.indeed.com/viewjob?jk=20e6d13e23b4bf6a&fccid=79a4f894c1383f39&vjs=3"
    },
    {
      "name": "Network Engineer / Inżynier sieci",
      "company": "FRG Technology Consulting",
      "urls": "https://pl.indeed.com/viewjob?jk=8e4724c72dd3e0f9&fccid=79a4f894c1383f39&vjs=3"
    },
    {
      "name": "Inżynier sieci, Network Engineer",
      "company": "Dynamics Jobs",
      "urls": "https://pl.indeed.com/viewjob?jk=7d6046df99c179ce&fccid=e7223e3ece47a796&vjs=3"
    },
    {
      "name": "Network Engineer, Inżynier sieci",
      "company": "Dynamics Jobs",
      "urls": "https://pl.indeed.com/viewjob?jk=94e68e21c80930c6&fccid=e7223e3ece47a796&vjs=3"
    },
    {
      "name": "C++ Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=47c1a64d70ecbd81&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Linux Engineer / DevOps",
      "company": "EuroLinux",
      "urls": "https://pl.indeed.com/viewjob?jk=8b01b29c719cc453&fccid=d91fbdc82addbd64&vjs=3"
    },
    {
      "name": "C#/.NET Software Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=e93aa1aa69a78a4f&fccid=cfa2a094a933b6fb&vjs=3"
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
      "name": "Systems Engineer - Advanced Safety",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com/viewjob?jk=4ee81201a3beef10&fccid=8d390ab1843cb8bd&vjs=3"
    },
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
      "name": "Praktykant/Junior Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,1000278106"
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
      "name": "Pracownik Produkcyjny Obsługujący Podstawowe Maszyny",
      "company": "Bell Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=4d56b7a17e0cabd5&fccid=53e80b846e1fa8b5&vjs=3"
    },
    {
      "name": "Specjalista Obsługi Klienta",
      "company": "FERRO Spółka Akcyjna",
      "urls": "https://pl.indeed.com/viewjob?jk=77db2cd1042c73d3&fccid=0c21ba394b07d11a&vjs=3"
    },
    {
      "name": "Koordynator Procesu Obsługi Reklamacji",
      "company": "FERRO Spółka Akcyjna",
      "urls": "https://pl.indeed.com/viewjob?jk=3369a5c04a7bff64&fccid=0c21ba394b07d11a&vjs=3"
    },
    {
      "name": "Mistrz / Supervisor",
      "company": "Takeda Pharmaceuticals",
      "urls": "https://pl.indeed.com/viewjob?jk=8b20e3233fae44f7&fccid=4819693c833d5b6e&vjs=3"
    },
    {
      "name": "Product Manager HVAC",
      "company": "FERRO Spółka Akcyjna",
      "urls": "https://pl.indeed.com/viewjob?jk=34c861688e97022c&fccid=0c21ba394b07d11a&vjs=3"
    },
    {
      "name": "Specjalista ds. opakowań / Packaging Specialist",
      "company": "Takeda Pharmaceuticals",
      "urls": "https://pl.indeed.com/viewjob?jk=066c5924a83e78df&fccid=4819693c833d5b6e&vjs=3"
    },
    {
      "name": "Starszy Specjalista ds. Rachunkowości i Podatków",
      "company": "FERRO Spółka Akcyjna",
      "urls": "https://pl.indeed.com/viewjob?jk=30fe968a538a1977&fccid=0c21ba394b07d11a&vjs=3"
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
      "urls": "https://pl.indeed.com/viewjob?jk=6cd8122e22bcd3d7&fccid=52d48f1974e43ed4&vjs=3"
    }
  ],
  "187": [],
  "188": [
    {
      "name": "EMBEDDED SOFTWARE ENGINEER",
      "company": "Loycon",
      "urls": "https://pl.indeed.com/viewjob?jk=ea6bcccc13cf9ce4&fccid=7129a6c6479d89d1&vjs=3"
    },
    {
      "name": "C# DEVELOPER",
      "company": "Loycon",
      "urls": "https://pl.indeed.com/viewjob?jk=7992640fdefd0c02&fccid=7129a6c6479d89d1&vjs=3"
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
      "name": "Automatyk",
      "company": "Bilfinger Industrial Services Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/automatyk_3411550.html#c3465a1e3e55ad12e63a45c23ac18a4e"
    },
    {
      "name": "Młodszy Inżynier",
      "company": "Gegenbauer Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/mlodszy-inzynier_3425890.html#c3465a1e3e55ad12e63a45c23ac18a4e"
    },
    {
      "name": "Staż w dziale programistycznym C# / .NET SQL ",
      "company": "Elettric 80 Sp. z o.o.",
      "urls": "https://www.praca.pl/staz-w-dziale-programistycznym-c-net-sql_3436760.html#c3465a1e3e55ad12e63a45c23ac18a4e"
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
      "name": "KONSTRUKTOR MASZYN I URZĄDZEŃ",
      "company": "SANT-TECH",
      "urls": "https://pl.indeed.com/viewjob?jk=7a2e68957957539e&fccid=4cff40bef3e8ba30&vjs=3"
    },
    {
      "name": "Młodszy Konstruktor CAD",
      "company": "GROS Engineering",
      "urls": "https://pl.indeed.com/viewjob?jk=b2cc3d07a98c79a1&fccid=83800432e0dffe2b&vjs=3"
    },
    {
      "name": "Konstruktor CATIA V5",
      "company": "GROS Engineering",
      "urls": "https://pl.indeed.com/viewjob?jk=5e1f6738935f23bd&fccid=83800432e0dffe2b&vjs=3"
    },
    {
      "name": "INŻYNIER KONSTRUKTOR w dziale R&D",
      "company": "EC Engineering",
      "urls": "https://pl.indeed.com/viewjob?jk=c3afdef0a16e8ffd&fccid=dd2bc65880e72b4a&vjs=3"
    },
    {
      "name": "KONSTRUKTOR CAD",
      "company": "NEWAG GROUP",
      "urls": "https://pl.indeed.com/viewjob?jk=1a2ae86b043ab153&fccid=b1b38fabe5e92cf0&vjs=3"
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
    },
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Konstruktor",
      "company": "Bamet",
      "urls": "https://pl.indeed.com/viewjob?jk=7d5976e66bee868c&fccid=55f842c9b66dbe5b&vjs=3"
    },
    {
      "name": "Inżynier konstruktor hardware",
      "company": "dataconsult",
      "urls": "https://pl.indeed.com/viewjob?jk=15df3a55808d8f83&fccid=45d5bb47777eab56&vjs=3"
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
      "name": "Junior Graphic Designer",
      "company": "Morele.net Sp. z o.o. ",
      "urls": "https://www.pracuj.pl/praca/junior-graphic-designer-krakow,oferta,1000257192"
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
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    },
    {
      "name": "Projektant - Asystent sieci gazowych i cieplnych",
      "company": "BBF Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/projektant-asystent-sieci-gazowych-i-cieplnych-krakow,oferta,1000267556"
    },
    {
      "name": "Integrated Catchment Modeller (InfoWorks ICM)",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/integrated-catchment-modeller-infoworks-icm_3396890.html#b88b03819a9dfb57bab9964aaadd03a3"
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
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Asystent Projektanta Mostowego",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/asystent-projektanta-mostowego_3391896.html#b88b03819a9dfb57bab9964aaadd03a3"
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
      "urls": "https://www.praca.pl/asystent-technologa-technolog_3348164.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Architekt",
      "company": "Cavatina GW Sp. z o.o.",
      "urls": "https://www.praca.pl/architekt_3405096.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Konstruktor - Technolog",
      "company": "KMW INVEST SP. Z O.O.",
      "urls": "https://www.praca.pl/konstruktor-technolog_3368046.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Senior Teradata Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-teradata-developer_3337184.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Konstruktor / Projektant",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor-projektant_3339236.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Projektant grafiki",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/projektant-grafiki_3429884.html#b88b03819a9dfb57bab9964aaadd03a3"
    }
  ],
  "212": [
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    },
    {
      "name": "Konstruktor",
      "company": "TNS Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor_3398606.html#269c3ee803dee6dedf08d2382347530c"
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
      "name": "Konstruktor - Technolog",
      "company": "KMW INVEST SP. Z O.O.",
      "urls": "https://www.praca.pl/konstruktor-technolog_3368046.html#269c3ee803dee6dedf08d2382347530c"
    },
    {
      "name": "Teradata Technical Analyst ",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/teradata-technical-analyst_3337152.html#269c3ee803dee6dedf08d2382347530c"
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
      "name": "Koordynator ds. fotowoltaiki",
      "company": "ELVE",
      "urls": "https://pl.indeed.com/viewjob?jk=880dfc22883dede1&fccid=6eccb2cdf52a7832&vjs=3"
    },
    {
      "name": "Doradca Energetyczny ds. fotowoltaiki",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=3da517f5b6b5a3a4&fccid=689c8978b4a0506b&vjs=3"
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
      "name": "Konsultant ds. realizacji",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=33f285a610ec0c64&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Monter instalacji fotowoltaicznych",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=f86bb269d7d12e01&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Dyrektor ds Sprzedaży | Regionu Południe | PV",
      "company": "Kelly Services PL",
      "urls": "https://pl.indeed.com/viewjob?jk=28f15d9891e16360&fccid=9c463817fb3ddf30&vjs=3"
    },
    {
      "name": "Dyrektor ds Sprzedaży | Regionu Południe | PV",
      "company": "Kelly Services",
      "urls": "https://pl.indeed.com/viewjob?jk=5c2b7fd4bafec090&fccid=9c463817fb3ddf30&vjs=3"
    },
    {
      "name": "Przedstawiciel Handlowy ds. Fotowoltaiki (B2B)",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com/viewjob?jk=db6cf90593a8d111&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Doradca sprzedaży instalacji fotowoltaicznych",
      "company": "H4H Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=376b7066727cd13c&fccid=4f9cb417d6f6258b&vjs=3"
    },
    {
      "name": "Senior Engineer (Renewable Energy)",
      "company": "Devire",
      "urls": "https://pl.indeed.com/viewjob?jk=49b765392196258d&fccid=dac7798bc9cb142c&vjs=3"
    },
    {
      "name": "Doradca Energetyczny – Przedstawiciel ds. Fotowoltaiki",
      "company": "Hymon Energy Sp z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=f8ee21d7e6363eef&fccid=2da66c87c199269b&vjs=3"
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
      "name": "Inżynier Elektryk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=2aba904252e64b02&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Specjalista ds. światłowodowych technik pomiarowych",
      "company": "SHM System Sp. z o.o. Sp. kom.",
      "urls": "https://pl.indeed.com/viewjob?jk=c6990eca8feb3614&fccid=0d0b93e7fe8514c2&vjs=3"
    }
  ],
  "225": [],
  "226": [],
  "227": [],
  "228": [],
  "229": [],
  "230": [
    {
      "name": "Inżynier robót budowlanych",
      "company": "Climatic Sp. z o.o. Sp. k.",
      "urls": "https://www.praca.pl/inzynier-robot-budowlanych_3436914.html#0e2a990a13378c31c963f05cff55ac1d"
    }
  ],
  "231": [],
  "232": [
    {
      "name": "Integrated Catchment Modeller (InfoWorks ICM)",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/integrated-catchment-modeller-infoworks-icm_3396890.html#f06205909efcc4197a4a85ccb9d56501"
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
      "name": "Junior Associate",
      "company": "Janowski Markiewicz sp.j.",
      "urls": "https://www.pracuj.pl/praca/junior-associate-krakow,oferta,1000273832"
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
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Modszy Specjalista ds. obsugi Klienta",
      "company": "FarmaProm Polska Sp. z o.o. Sp. K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-krakow,oferta,1000259564"
    },
    {
      "name": "Praktykant Salesforce - get the HOT Salesforce skill!",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,1000276362"
    },
    {
      "name": "Praktykant/Junior Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,1000278106"
    },
    {
      "name": "Working Student - FPGA Design Verification Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-design-verification-engineer-krakow,oferta,1000256977"
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
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Working Student - Software Test Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-test-engineer-krakow,oferta,1000270053"
    },
    {
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000270049"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
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
    }
  ],
  "249": [
    {
      "name": "Junior Business Analyst",
      "company": "Nowe Motywacje Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-business-analyst-krakow,oferta,1000278449"
    },
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
      "name": "Desktop Support Engineer",
      "company": "NOVOMATIC Technologies Poland S.A.",
      "urls": "https://www.pracuj.pl/praca/desktop-support-engineer-zabierzow-pow-krakowski,oferta,7529383"
    },
    {
      "name": "Sta z Lwem w Sieci Korporacyjnej",
      "company": "ING Bank lski S.A.",
      "urls": "https://www.pracuj.pl/praca/staz-z-lwem-w-sieci-korporacyjnej-krakow,oferta,1000262894"
    },
    {
      "name": "Platform Operations Technician (III shift)",
      "company": "Znajd wymarzonego pracodawc",
      "urls": "https://www.pracuj.pl/praca/platform-operations-technician-iii-shift-krakow,oferta,7521969"
    },
    {
      "name": "Sta z Lwem w Sieci Detalicznej - edycja letnia",
      "company": "ING Bank lski S.A.",
      "urls": "https://www.pracuj.pl/praca/staz-z-lwem-w-sieci-detalicznej-edycja-letnia-krakow,oferta,1000258945"
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
      "name": "Asystentka / Sekretarka - Concierge online",
      "company": "Recruit Europe Takeshige Yokota",
      "urls": "https://www.pracuj.pl/praca/asystentka-sekretarka-concierge-online-krakow,oferta,1000227254"
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
      "name": "Network Engineer",
      "company": "Frank Recruitment Group",
      "urls": "https://www.praca.pl/network-engineer_3444412.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "R&D Lab Support Engineer [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/r-d-lab-support-engineer-rekrutacja-online_3425380.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Doradca Klienta",
      "company": "Adreams",
      "urls": "https://www.praca.pl/doradca-klienta_3378790.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Service Integration / ServiceNow Solution Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/service-integration-servicenow-solution-architect_3428122.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Cloud Oriented Network Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-oriented-network-architect_3409108.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "System Administrator with Wintel/Unix",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/system-administrator-with-wintel-unix_3441286.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Virtual Platform Systems Administrator",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/virtual-platform-systems-administrator_3429028.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Scrum Master/Project Manager",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/scrum-master-project-manager_3429550.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Service Delivery Administrator",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/service-delivery-administrator_3441288.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Linux Platform Engineer",
      "company": "Power Media",
      "urls": "https://www.praca.pl/linux-platform-engineer_3386258.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Test Automation Engineer (Java) [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/test-automation-engineer-java-rekrutacja-online_3407618.html#6df9b2ae561bff7346a0d9ee4f5acf22"
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
      "name": "Przedstawiciel handlowy",
      "company": "MADEX Henryk Mrowiec",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy_3439898.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Przedstawiciel Handlowy - Ogrodzenia / kanał B2B",
      "company": "Work & Business Solutions",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy-ogrodzenia-kanal-b2b_3394316.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3406854.html#6df9b2ae561bff7346a0d9ee4f5acf22"
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
      "name": "Key Account Manager",
      "company": "Eurocash S.A.",
      "urls": "https://www.praca.pl/key-account-manager_3411412.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": "Kierownik Oddziałów Serwisu Maszyn",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/kierownik-oddzialow-serwisu-maszyn_3425552.html#6df9b2ae561bff7346a0d9ee4f5acf22"
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
      "name": "Senior Support Engineer with Unix",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-support-engineer-with-unix_3436832.html#6df9b2ae561bff7346a0d9ee4f5acf22"
    },
    {
      "name": " Wordpress Developer",
      "company": "Amsterdam Standard Sp. z o.o.",
      "urls": "https://www.praca.pl/wordpress-developer_3392102.html#6df9b2ae561bff7346a0d9ee4f5acf22"
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
      "name": "Specjalista ds. gospodarki materiałowej i gospodarki odpadam...",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com/viewjob?jk=939dc9366899963f&fccid=092d1ee1c3a73e20&vjs=3"
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
  "268": [
    {
      "name": "Konsultant Asysty Technicznej (Telekomunikacja, BSS)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=61e3d7eade51641a&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Administrator systemów IT",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=875beb0934c9602f&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "ORNITOLOG/PRZYRODNIK",
      "company": "Future Green Innovations",
      "urls": "https://pl.indeed.com/viewjob?jk=2b0968afbc1faf41&fccid=5981b74173f9ac17&vjs=3"
    },
    {
      "name": "Koordynator ds. Infrastruktury",
      "company": "HRWISE",
      "urls": "https://pl.indeed.com/viewjob?jk=8d0b6a1cc2632713&fccid=e834468dcd30ed28&vjs=3"
    }
  ],
  "269": [],
  "270": [],
  "271": [],
  "272": [],
  "273": [],
  "274": [],
  "275": [
    {
      "name": "Pracownik biurowy",
      "company": "Greifbau",
      "urls": "https://pl.indeed.com/viewjob?jk=6907b4acb312f882&fccid=39a7f86e54a19f83&vjs=3"
    }
  ],
  "276": [],
  "277": [],
  "278": [
    {
      "name": "Nauczyciel przedmiotów zawodowych",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-zawodowych_3433206.html#de9a9175b007100a828145b8829da531"
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
      "name": "Recepcjonistka - Asystent biura",
      "company": "Doniec Grecki & Partnerzy Sp.k. ",
      "urls": "https://www.pracuj.pl/praca/recepcjonistka-asystent-biura-krakow,oferta,500035089"
    },
    {
      "name": "Asystent ds. zdalnej obsugi biura",
      "company": "ULTIMA PACK sp. z o.o. SPӣKA KOMANDYTOWA",
      "urls": "https://www.pracuj.pl/praca/asystent-ds-zdalnej-obslugi-biura-krakow,oferta,500036867"
    },
    {
      "name": "Asystentka rady nadzorczej",
      "company": "GD&K Consulting Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-rady-nadzorczej-krakow,oferta,1000251661"
    },
    {
      "name": "Staysta ds. marketingowo-administracyjnych",
      "company": "COPA-DATA Polska Sp. z o.o. ",
      "urls": "https://www.pracuj.pl/praca/stazysta-ds-marketingowo-administracyjnych-krakow,oferta,500037707"
    },
    {
      "name": "Board Assistant",
      "company": "ALL IN! GAMES SPӣKA AKCYJNA",
      "urls": "https://www.pracuj.pl/praca/board-assistant-krakow,oferta,1000273638"
    },
    {
      "name": "Office Assistant",
      "company": "ALL IN! GAMES SPӣKA AKCYJNA",
      "urls": "https://www.pracuj.pl/praca/office-assistant-krakow,oferta,1000273642"
    },
    {
      "name": "Asystent/ka Oddziau",
      "company": "Nowodworski Estates Sp. z o.o. Sp. k.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-oddzialu-krakow,oferta,1000237166"
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
      "name": "Asystent biurowy",
      "company": "Focus POS Services S.C.",
      "urls": "https://www.pracuj.pl/praca/asystent-biurowy-krakow,oferta,500037126"
    },
    {
      "name": "Sta w Dziale Finansowym i Administracji",
      "company": "Nordkalk Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/staz-w-dziale-finansowym-i-administracji-krakow,oferta,1000257079"
    },
    {
      "name": "Asystent/ka Zarzdu z j. angielskim",
      "company": "W.KRUK S.A.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-zarzadu-z-j-angielskim-krakow,oferta,1000256472"
    },
    {
      "name": "Asystentka ds. administracyjno-personalnych",
      "company": "SWIETELSKY RAIL POLSKA Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-ds-administracyjno-personalnych-krakow,oferta,1000254635"
    },
    {
      "name": "Asystentka - Tumaczka",
      "company": "FPH METAL - TECH",
      "urls": "https://www.pracuj.pl/praca/asystentka-tlumaczka-krakow,oferta,1000235380"
    },
    {
      "name": "Asystentka Zarzdu",
      "company": "INTERIM PM sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-zarzadu-krakow,oferta,1000267866"
    },
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
      "name": "Asystent /-ka Kierownika Projektu",
      "company": "Enervigo sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-kierownika-projektu-krakow,oferta,1000223118"
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
      "name": "Office Assistant / Asystent/ka Biura",
      "company": "People Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/office-assistant-asystent-ka-biura-krakow,oferta,1000192663"
    },
    {
      "name": "Back Office Specialist with Swedish",
      "company": "Genpact PL",
      "urls": "https://www.praca.pl/back-office-specialist-with-swedish_3444376.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Specjalista ds. Personalnych",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-personalnych_3396854.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Listonosz samochodowy",
      "company": "Fundacja Aktywizacja",
      "urls": "https://www.praca.pl/listonosz-samochodowy_3444312.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "IT Analyst with Italian & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-italian-english_3376422.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "IT Analyst with French & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-french-english_3376426.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "CE Operations Support Specialist",
      "company": "Tesco Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/ce-operations-support-specialist_3420908.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Service Management SACM Consultant",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/service-management-sacm-consultant_3406630.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Project Management Assistant",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/project-management-assistant_3426364.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Asystentka / Asystent",
      "company": "Gegenbauer Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/asystentka-asystent_3404354.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Asystent / Asystentka Oddziału",
      "company": "Expander",
      "urls": "https://www.praca.pl/asystent-asystentka-oddzialu_3404452.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Administrator IT / Specjalista IT",
      "company": "LaboArt",
      "urls": "https://www.praca.pl/administrator-it-specjalista-it_3399002.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "IT Specialist (Senior Analyst) (L2 Support) with English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-specialist-senior-analyst-l2-support-with-english_3389752.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Specjalista ds. Wdrożeń ",
      "company": "Konica Minolta Business Solutions Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen_3373040.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Asystent / Asystentka ds. administracji (z językiem niemieckim)",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/asystent-asystentka-ds-administracji-z-jezykiem-niemieckim_3370308.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Pracownik w Sekcji Administracji",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://www.praca.pl/pracownik-w-sekcji-administracji_3345160.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/it-support-analyst_3401260.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Axway Secure Specialist (Tumbleweed)",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/axway-secure-specialist-tumbleweed_3369740.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Pracownik biurowy z j. hiszpańskim (student/ka)",
      "company": "Genpact PL",
      "urls": "https://www.praca.pl/pracownik-biurowy-z-j-hiszpanskim-student-ka_3393774.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Korporacyjny Pracownik Biurowy",
      "company": "EDUEXPRESS sp. z o.o.",
      "urls": "https://www.praca.pl/korporacyjny-pracownik-biurowy_3388822.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "IT Analyst with German & English ",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-german-english_3341804.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Pracownik Administracyjny – Sekcja Administracji",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://www.praca.pl/pracownik-administracyjny-sekcja-administracji_3359184.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "IT Analyst with Dutch and English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-dutch-and-english_3339228.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Specjalista IT [rekrutacja prowadzona online]",
      "company": "ZIKO Apteka Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-it-rekrutacja-prowadzona-online_3356916.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Starszy referent",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/starszy-referent_3443026.html#6aee704a6dceb4f4fcecc0241b19ea4d"
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
      "name": "Pośrednik Agent Nieruchomości",
      "company": "Salwator Nieruchomości",
      "urls": "https://pl.indeed.com/viewjob?/Salwator-Nieruchomo%C5%9Bci/jobs/Po%C5%9Brednik-Agent-Nieruchomo%C5%9Bci-bb717cab5ffd1245?fccid=42d61b576b8e9b4e&vjs=3"
    },
    {
      "name": "Zarządca/Administrator Nieruchomości KRAKÓW",
      "company": "Piotr Bondal",
      "urls": "https://pl.indeed.com/viewjob?jk=0dab6d83ceb7bb07&fccid=ec7868fb5eee7c1d&vjs=3"
    },
    {
      "name": "Menedżer w Dziale Galerii Handlowych ds. Zarządzania Galeria...",
      "company": "Carrefour",
      "urls": "https://pl.indeed.com/viewjob?jk=eece2c7d9e166ce8&fccid=669350d87ae4a4a6&vjs=3"
    }
  ],
  "287": [
    {
      "name": "Pośrednik Agent Nieruchomości",
      "company": "Salwator Nieruchomości",
      "urls": "https://pl.indeed.com/viewjob?/Salwator-Nieruchomo%C5%9Bci/jobs/Po%C5%9Brednik-Agent-Nieruchomo%C5%9Bci-bb717cab5ffd1245?fccid=42d61b576b8e9b4e&vjs=3"
    },
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
      "name": "Dyrektor ds. rozwoju rynku - finansowanie przedsiębiorców",
      "company": "Monument Support Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=af0492e6b15ab635&fccid=1f0952e23cca8b8c&vjs=3"
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
      "name": "Pośrednik / Doradca ds. Nieruchomości",
      "company": "GRUPA NIERUCHOMOŚCI KRAKÓW",
      "urls": "https://pl.indeed.com/viewjob?jk=1c222ef944f9feb8&fccid=6996c5e19b48c9db&vjs=3"
    },
    {
      "name": "Doradca Klienta",
      "company": "Phinance S.A.",
      "urls": "https://pl.indeed.com/viewjob?jk=7e991055ead73b43&fccid=14c5790bc3c37481&vjs=3"
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
      "name": "Specjalista ds. Sprzedaży",
      "company": "STOWARZYSZENIE INSTYTUT KOSCIUSZKI",
      "urls": "https://pl.indeed.com/viewjob?jk=be643eeb423e30d5&fccid=e6b265f5aeb2a147&vjs=3"
    }
  ],
  "288": [],
  "289": [],
  "290": [],
  "291": [
    {
      "name": "STAŻ: Dział Przetwarzania Danych",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=072ae257db6a8cef&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "PRACA: Dział Przetwarzania Danych – Zespół Terenowy",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=b57c65db31653072&fccid=66c9a4575f419c1c&vjs=3"
    },
    {
      "name": "Senior JavaScript Developer",
      "company": "j-labs",
      "urls": "https://pl.indeed.com/viewjob?jk=c4d6013e661ccd5b&fccid=a4750d1f1c80cb70&vjs=3"
    },
    {
      "name": "PRACA: Specjalista ds. sprzedaży systemów GIS",
      "company": "GISON Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=72e1402fc1022a52&fccid=66c9a4575f419c1c&vjs=3"
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
      "name": "Technolog Piekarnictwa",
      "company": "MA-TRANS Stachecki Sp.k.",
      "urls": "https://www.praca.pl/technolog-piekarnictwa_3410852.html#cf32a7e1e1249a31dced6f86de8d2bac"
    },
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3410136.html#cf32a7e1e1249a31dced6f86de8d2bac"
    },
    {
      "name": "Asystent Technologa / Technolog",
      "company": "Euronova Sp.z o.o. Sp.k.",
      "urls": "https://www.praca.pl/asystent-technologa-technolog_3348164.html#cf32a7e1e1249a31dced6f86de8d2bac"
    },
    {
      "name": "Konstruktor - Technolog",
      "company": "KMW INVEST SP. Z O.O.",
      "urls": "https://www.praca.pl/konstruktor-technolog_3368046.html#cf32a7e1e1249a31dced6f86de8d2bac"
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
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-ogolnoksztalcacych_3433238.html#8e12ab6f4ef7b3ad6612c7ed841f8383"
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
      "name": "Doradca Techniczno-Handlowy (materiały budowlane)",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=12cd1acc985da782&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Przedstawiciel handlowy (materiały budowlane) - Kraków",
      "company": "Alhar Klinkier",
      "urls": "https://pl.indeed.com/viewjob?jk=fd29de4ae89af837&fccid=557d3d9263148d15&vjs=3"
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
      "name": "Tester w sektorze administracji publicznej",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=b0030f2096e9e74e&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "306": [
    {
      "name": "Stażysta ds. bezzałogowych statków powietrznych UAV",
      "company": "NaviGate Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=9ffc0acb0f9f90b9&fccid=18c2bb665d2fd2d5&vjs=3"
    },
    {
      "name": "Inżynier techniczny ds. bezzałogowych statków powietrznych",
      "company": "NaviGate Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=ad79f2b338b5c50c&fccid=18c2bb665d2fd2d5&vjs=3"
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
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-ogolnoksztalcacych_3433238.html#2f00bda55a8ab0cf534130ec5db5bebc"
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
      "name": " Diagnosta laboratoryjny - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/diagnosta-laboratoryjny-branza-medyczna_3443664.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Asystent Genetyka - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/asystent-genetyka-branza-medyczna_3443662.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
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
      "name": "Laborant",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/laborant_3404996.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Analityk laboratoryjny",
      "company": "Philip Morris International",
      "urls": "https://www.praca.pl/analityk-laboratoryjny_3339282.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
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
      "name": "Specjalista ds. marketingu internetowego",
      "company": "New Men Style",
      "urls": "https://pl.indeed.com/viewjob?jk=707d9d7aae83b23b&fccid=eb74c6649c374260&vjs=3"
    },
    {
      "name": "Junior Full Stack Developer",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com/viewjob?jk=346cc28ca0d2e4cc&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "Kierownik Produkcji",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=54538c6e8ce1c13e&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Dyrektor ds. Sprzedaży - produkcja prefabrykowanych konstruk...",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com/viewjob?jk=09b3123c70bbdca1&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Specjalista ds. Finansowo-Księgowych",
      "company": "AERO-GSE",
      "urls": "https://pl.indeed.com/viewjob?/AERO--GSE-Sp.-z-o.o.-Sp.-K./jobs/Specjalista-Do-Spraw-Finansowo-Ksi%C4%99gowych-af77ea3cf7793208?fccid=d906003c284344e7&vjs=3"
    },
    {
      "name": "Regular PHP Developer",
      "company": "Mobilem Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=6a771b72c07c33b3&fccid=18942caf6173fed4&vjs=3"
    },
    {
      "name": "Brand Manager",
      "company": "HEADHUNTERS GROUP",
      "urls": "https://pl.indeed.com/viewjob?jk=962d397e2ef9ab2c&fccid=2626896dbec10c5d&vjs=3"
    },
    {
      "name": "Konsultant pomocy technicznej systemu ERP Streamsoft Prestiż",
      "company": "Streamsoft",
      "urls": "https://pl.indeed.com/viewjob?jk=2d62f62131c64c6f&fccid=1240fd6f430e60df&vjs=3"
    },
    {
      "name": "Senior Full Stack Developer",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com/viewjob?jk=663aad59306ff336&fccid=64e33cf5dc4a100d&vjs=3"
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
      "name": "Inżynier Elektronik – Konstruktor",
      "company": "2Bora",
      "urls": "https://pl.indeed.com/viewjob?jk=1412ed0791ddda41&fccid=81eeaa9aaf867a65&vjs=3"
    },
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier ds kalkulacji / przygotowania produkcji (m / k",
      "company": "STRABAG Infrastruktura Południe Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=e67453e66a025c10&fccid=91ff00d5203b00da&vjs=3"
    },
    {
      "name": "Praktyki dla studentów ze specjalizacją kolejową",
      "company": "Budimex",
      "urls": "https://pl.indeed.com/viewjob?jk=4cd9c0f30b46e8a5&fccid=5d51f1a9a1d3d458&vjs=3"
    },
    {
      "name": "Inżynier Jakości - oferta z pakietem relokacyjnym",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=a66331984ffbbc59&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Inżynier Procesu Automotive Greenfield",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=83af8b65d67f08d7&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Inżynier Procesu / Produkcji - oferta z pakietem relokacyjny...",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=eba88f7f76130589&fccid=062f71e131e87cf0&vjs=3"
    }
  ],
  "335": [
    {
      "name": "Mechanik, Serwisant wózków widłowych",
      "company": "Emtor Spółka z o.o.",
      "urls": "https://www.praca.pl/mechanik,serwisant-wozkow-widlowych_3389614.html#931435cae6afd62258f90d68dda88132"
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
      "name": " Diagnosta laboratoryjny - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/diagnosta-laboratoryjny-branza-medyczna_3443664.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Asystent Genetyka - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/asystent-genetyka-branza-medyczna_3443662.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
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
      "name": "Laborant",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/laborant_3404996.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Analityk laboratoryjny",
      "company": "Philip Morris International",
      "urls": "https://www.praca.pl/analityk-laboratoryjny_3339282.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    }
  ],
  "339": [],
  "340": [],
  "341": [],
  "342": [],
  "343": [
    {
      "name": "Export Assistant",
      "company": "Maspex",
      "urls": "https://www.pracuj.pl/praca/export-assistant-krakow-okolice,oferta,1000234122"
    },
    {
      "name": "Referent ds. Spedycji Krajowej",
      "company": "JAS-FBG S.A.",
      "urls": "https://www.pracuj.pl/praca/referent-ds-spedycji-krajowej-krakow,oferta,1000264546"
    },
    {
      "name": "Kierowca / Magazynier",
      "company": "MGsolutions MGJJ Sp. z o. o.  Sp. k.",
      "urls": "https://www.praca.pl/kierowca-magazynier_3413790.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Spedytor Drogowy Międzynarodowy ",
      "company": "PBSG Spółka Komandytowa",
      "urls": "https://www.praca.pl/spedytor-drogowy-miedzynarodowy_3413558.html#f039daed501b9d552e9f6ed171a37da2"
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
      "name": "Kierowca C+E CE (międzynarodowy - EU Europa)",
      "company": "MAGTRANS Sp. z o. o.",
      "urls": "https://www.praca.pl/kierowca-c-e-ce-miedzynarodowy-eu-europa_3378348.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Wiceprezes / Członek Zarządu firmy świadczącej usługi zarządzania i nadzoru (inżyniera kontraktu) nad kontraktami budowlanymi w sektorze ochrony środowiska, przemysłu, transportu, energetyki i innych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/wiceprezes-czlonek-zarzadu-firmy-swiadczacej-uslugi-zarzadzania-i-nadzoru-inzyniera-kontraktu-nad-kontraktami-budowlanymi-w-sektorze-ochrony-srodowiska,przemyslu,transportu,energetyki-i-innych_3423180.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca Międzynarodowy C+E",
      "company": "H&S Transport Sp. z o.o.",
      "urls": "https://www.praca.pl/kierowca-miedzynarodowy-c-e_3437482.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Logistyk / Magazynier",
      "company": "Leroy Merlin Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/logistyk-magazynier_3385108.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Program Praktyk Letnich",
      "company": "ROHLIG SUUS Logistics SA",
      "urls": "https://www.praca.pl/program-praktyk-letnich_3410442.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Przedstawiciel Handlowy",
      "company": "E100 International Trade sp. z o.o",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy_3390054.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Praktyki dla studentów ze specjalizacją kolejową ",
      "company": "Budimex SA",
      "urls": "https://www.praca.pl/praktyki-dla-studentow-ze-specjalizacja-kolejowa_3433478.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Specjalista ds. certyfikacji TSI",
      "company": "NES Global Talent",
      "urls": "https://www.praca.pl/specjalista-ds-certyfikacji-tsi_3433582.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Mechanik - Elektromechanik",
      "company": "SETMIL Sp. z o.o.",
      "urls": "https://www.praca.pl/mechanik-elektromechanik_3372726.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Spedytor międzynarodowy",
      "company": "Globetek Sp. z o.o.",
      "urls": "https://www.praca.pl/spedytor-miedzynarodowy_3404358.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/it-support-analyst_3401260.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca międzynarodowy kat. B",
      "company": "WISE INVESTMENTS SP Z O O SPÓŁKA KOMANDYTOWA",
      "urls": "https://www.praca.pl/kierowca-miedzynarodowy-kat-b_3398460.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Elektryk Przemysłowy",
      "company": "PERFECT TEAM Marcin Kaszta",
      "urls": "https://www.praca.pl/elektryk-przemyslowy_3396140.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca kat. C+E",
      "company": "Nowak-Mosty Sp. z o.o.",
      "urls": "https://www.praca.pl/kierowca-kat-c-e_3335298.html#f039daed501b9d552e9f6ed171a37da2"
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
      "name": "Kierowca międzynarodowy z kategorią C+E i ADR [rekrutacja prowadzona online]",
      "company": "Professional Thermo Logistics Sp. z o.o",
      "urls": "https://www.praca.pl/kierowca-miedzynarodowy-z-kategoria-c-e-i-adr-rekrutacja-prowadzona-online_3380868.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Dostawca",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/dostawca_3441806.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Dostawca potraw",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/dostawca-potraw_3424320.html#f039daed501b9d552e9f6ed171a37da2"
    },
    {
      "name": "Kierowca",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/kierowca_3417696.html#f039daed501b9d552e9f6ed171a37da2"
    }
  ],
  "344": [
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    },
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
      "name": "Asystent Projektanta Instalatora",
      "company": "OTS-IP sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-instalatora-krakow,oferta,500033908"
    },
    {
      "name": "Inżynier robót budowlanych",
      "company": "Climatic Sp. z o.o. Sp. k.",
      "urls": "https://www.praca.pl/inzynier-robot-budowlanych_3436914.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    }
  ],
  "345": [],
  "346": [],
  "347": [
    {
      "name": "Nauczyciel przedmiotów ogólnokształcących",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-ogolnoksztalcacych_3433238.html#4baee2d36736a8d1c17df099730fa50d"
    }
  ],
  "348": [
    {
      "name": "Specjalista ds. dokumentacji technicznej z jęz. angielskim (...",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=65fbe80ad0e233b0&fccid=68b975ecbbd7a58d&vjs=3"
    }
  ],
  "349": [],
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
      "name": "Praktykant Salesforce - get the HOT Salesforce skill!",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,1000276362"
    },
    {
      "name": "Desktop Support Engineer",
      "company": "NOVOMATIC Technologies Poland S.A.",
      "urls": "https://www.pracuj.pl/praca/desktop-support-engineer-zabierzow-pow-krakowski,oferta,7529383"
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
      "name": "Business Process Improvement Manager",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com/viewjob?jk=c6488853f704b583&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "Kierownik Projektu",
      "company": "EC Engineering",
      "urls": "https://pl.indeed.com/viewjob?jk=7aae45b0fed6b2fa&fccid=dd2bc65880e72b4a&vjs=3"
    },
    {
      "name": "Dyrektor Finansowy",
      "company": "haer",
      "urls": "https://pl.indeed.com/viewjob?jk=0320c522a9eb9b66&fccid=8625236625141912&vjs=3"
    },
    {
      "name": "Senior Business Controller – Kraków",
      "company": "People Service Recruitment Group",
      "urls": "https://pl.indeed.com/viewjob?jk=c5745aa8a0cd9280&fccid=b2795a71c9d1222d&vjs=3"
    },
    {
      "name": "Doświadczony Asystent/Senior, Business Tax Advisory, Kraków/...",
      "company": "EY",
      "urls": "https://pl.indeed.com/viewjob?jk=24d4bcdc2792fbfe&fccid=1544766d4c2915b0&vjs=3"
    },
    {
      "name": "Pracownik administracyjny",
      "company": "Collegium Medicum Uniwersytetu Jagiellońskiego w K...",
      "urls": "https://pl.indeed.com/viewjob?jk=8416e8d4ab908cf4&fccid=f0638f9cf4b08fa5&vjs=3"
    },
    {
      "name": "Social Media Specialist",
      "company": "Veneo",
      "urls": "https://pl.indeed.com/viewjob?jk=4c363984e58a6a2b&fccid=d055a1ba91135454&vjs=3"
    },
    {
      "name": "Koordynator Testów",
      "company": "ProData Consult",
      "urls": "https://pl.indeed.com/viewjob?jk=8236f470a9027b02&fccid=fa336ade0bd80ccd&vjs=3"
    },
    {
      "name": "Senior .NET Developer",
      "company": "NBC Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=664456908584e3e9&fccid=2f45a6829d6c88f6&vjs=3"
    },
    {
      "name": "Product Implementation Specialist",
      "company": "Dotlinkers",
      "urls": "https://pl.indeed.com/viewjob?jk=2baf7071b198aece&fccid=c62351057abf05f6&vjs=3"
    },
    {
      "name": "Kierownik projektu (bankowość)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=8641baceed963f2f&fccid=68b975ecbbd7a58d&vjs=3"
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
      "name": "Global Injection Molding Expert for Supplier Quality",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=f3464b3a6356f584&fccid=31670bef3ae6497b&vjs=3"
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
      "name": "Business Process Improvement Manager",
      "company": "Mercator Medical",
      "urls": "https://pl.indeed.com/viewjob?jk=c6488853f704b583&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "Lean Six Sigma Black Belt",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=87294ff6effd6333&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Pracownik Działu Magazynu",
      "company": "Alfa Laval",
      "urls": "https://pl.indeed.com/viewjob?jk=e0e0427218496ece&fccid=ec4917fdb79e20eb&vjs=3"
    },
    {
      "name": "Specjalista ds. Obsługi Klienta z jęz. niemieckim C1",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=5d48ab48926b2611&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Tokarz",
      "company": "Alfa Laval",
      "urls": "https://pl.indeed.com/viewjob?jk=33e12058e4c2a749&fccid=ec4917fdb79e20eb&vjs=3"
    },
    {
      "name": "Praca w j. obcych: niderlandzki / czeski",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=a751f995651b5d10&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Transformation Coordinator - PMO",
      "company": "PepsiCo",
      "urls": "https://pl.indeed.com/viewjob?jk=4af96b7c26ffbf3f&fccid=2973259ddc967948&vjs=3"
    },
    {
      "name": "GBS Procure to Pay (P2P) Lead",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=1bf9012768a5586a&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Quality and Continuous Improvement Senior Specialist",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=e3cb6013f28c01a5&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Aftermarket Sales Account Manager",
      "company": "Cummins Inc.",
      "urls": "https://pl.indeed.com/viewjob?jk=b8534e75d0fcecf9&fccid=36ccedc5bfdf19b1&vjs=3"
    },
    {
      "name": "Global Customer Service Manager",
      "company": "Accenture",
      "urls": "https://pl.indeed.com/viewjob?jk=17fc9d817015d098&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "GL Accountant with English",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=84707b02c58483e7&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Technology Risk Management Regional Lead",
      "company": "UBS",
      "urls": "https://pl.indeed.com/viewjob?jk=85a82c4bd4b12308&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Senior Quality and Technology Engineer",
      "company": "Motorola Solutions",
      "urls": "https://pl.indeed.com/viewjob?jk=afde5e76332b3188&fccid=22ec6ef3cc441ac2&vjs=3"
    },
    {
      "name": "CONTINUOUS IMPROVEMENT MANAGER",
      "company": "ENGINEERINGjobs",
      "urls": "https://pl.indeed.com/viewjob?jk=baaa2ca228514c09&fccid=6b8601288f8172d5&vjs=3"
    },
    {
      "name": "Order to Cash (AR) Manager",
      "company": "Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=b5de0e6d32b0bf1f&fccid=eb3baf007981cd9e&vjs=3"
    },
    {
      "name": "Procure to Pay (P2P) Project Specialist",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=410f6ed5770f38b2&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Senior Procurement Analyst",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com/viewjob?jk=0c5268c3deb19212&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "Praca w językach obcych: niemiecki i angielski",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=12e8add399599ee4&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Customer Operations Specialist - Dutch / Czech Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=cc47f69968015c3c&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Manager Supplier Partnerships",
      "company": "Pontoon Solutions",
      "urls": "https://pl.indeed.com/viewjob?jk=40fc0f60850bd967&fccid=4a96194bafd8dbb0&vjs=3"
    },
    {
      "name": "Transition Manager",
      "company": "Lobo HR",
      "urls": "https://pl.indeed.com/viewjob?jk=10d7615c6b0054de&fccid=42ea513863db8ce0&vjs=3"
    },
    {
      "name": "Customer Service Professional - Dutch / Czech Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=111399b68cac266a&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Procurement Process Manager with German(m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?jk=a44b398c47317f40&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Quality Team Leader",
      "company": "Devire",
      "urls": "https://pl.indeed.com/viewjob?jk=a474307fdfc2adad&fccid=dac7798bc9cb142c&vjs=3"
    },
    {
      "name": "Credit Assessment Analyst - German Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=55ed90ecf2c3d1f3&fccid=868f0a680c88fba8&vjs=3"
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
      "name": "Supv Partner Setup",
      "company": "MoneyGram",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0BEhGvx0zGXfLkTTmikvtHKrs-4kgm1e_Zh29k8f9sMVkyVya5alfL1EkzNHGueCTPr8Qpd0sd1JxG2sBKj2_s1OjFF8bBV_sJschjjTf9HZlN8n1M-y2f9F6X-rEuZJnwzMAI8YWTKgvbO0XbXgDeRXluxrTdETiMGOlwW5FrY6ZwqbGvPOSirHj7EjG7eJBRHjNPP3z08F4US5-RP1s9bNZ_1JLAJGYKd7sQ33cS474QXYET7OT58iJ-sgiD8k6YYla6mWuigzLIIO6xBwnlkrst9zkKdDeDC52JxiY2x-R6aINhmDIgfIx_TpaVhtHJ5VETbKqnPnXFnikw4Z7GHkSFYevpchyijxpeF_kIDrouzIr4uvbwjS9NkZoBeAIrC_Rsp7uikmKJn9ORBIPYMIAD96vqrIGg9LqeaY1aG5UYmBNs290fOJVAkgr7i6woGoo_srqboVmjrSwu3vxuELQYrdGFzMsllOFrKdZQkA45AhKlZntubayF-_AuqpPFObSxMScxQEtInD2ciMwd4VcFdmv_UYFVtb47axKw7UdXX78jQnHxeSa4_25wYaPDDloL6T9Y2mPv2YNU8T-4DgROv7cbXTSzz3UEGd2K3l9ZTIyzmNdrJmSWcTaCiMhIoenImhlSuwuWnFUIJCHzCoT-SCb3LlNXdGGPa0YMthO1Lp34opj4pBjYKey1Fsa17o5hDdxZfkM47oV5UTStboz49cJJ2y7WT5vkSAC5CuzlLTCLz_SHIg7ZnuEHTzujsHObh1FVVbuZLFTNVNbtL98sPhznVqVxwyOWxNk5HsqJX7Fq4gOjW8rtALh7Q4j29fCfhyqsyn8OV1cvM-QgVp-d6lEJ7mQ4HWR22BJ5bd8DnkLgIjyoeoa8OpPPehbUENxkonX4XMFtWqaxBIoEQulBpDKP9nvZJovO8mvNbrIQDnxWGYvBzkoOwmryZHeKH7RMpq7HA_LsAehdNxmRBhn4Z9OHRXvGZWYRYwz4UVA==&p=10&fvj=0&vjs=3"
    },
    {
      "name": "Customer Operations Specialist - German Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=ec764ac10fababf9&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Customer Service Professional - German Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com/viewjob?jk=4fef3ac07ce82bc5&fccid=868f0a680c88fba8&vjs=3"
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
      "urls": "https://pl.indeed.com/viewjob?jk=c6488853f704b583&fccid=8f8a55b7a7525063&vjs=3"
    },
    {
      "name": "Kierownik Działu Marketingu",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com/viewjob?jk=514f21a3f3227484&fccid=7ba137e236695657&vjs=3"
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
      "name": "Staż w dziale programistycznym C# / .NET SQL",
      "company": "Elettric 80 Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=21b8ff6c0551897e&fccid=1252f01c877795d8&vjs=3"
    },
    {
      "name": "BI Consultant / Data Analyst",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com/viewjob?jk=2cf8a0c761706e63&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "Full Stack Developer - rekrutacja prowadzona online",
      "company": "Fitech",
      "urls": "https://pl.indeed.com/viewjob?jk=b1a566a4f363f736&fccid=52d48f1974e43ed4&vjs=3"
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
      "name": "Inżynier Elektryk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=2aba904252e64b02&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier Automatyk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=0f9e18031e6d937f&fccid=0881f6d660552bf7&vjs=3"
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
      "name": "Asystent/ka Kierownika Projektu",
      "company": "Madkom S.A.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-kierownika-projektu-krakow,oferta,1000265954"
    },
    {
      "name": "Modszy Projekt Manager",
      "company": "JANTAR Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-projekt-manager-krakow,oferta,1000263878"
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
      "name": "Inżynier systemowy w kulturze DevOps",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=08b9aa853b5c438b&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Inżynier Utrzymania Ruchu - oferta z pakietem relokacyjnym",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=8cc9df27a319674b&fccid=062f71e131e87cf0&vjs=3"
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
      "name": "Projektant Sieci Wodno-Kanalizacyjnych",
      "company": "K&K Selekt",
      "urls": "https://pl.indeed.com/viewjob?jk=463d53c18493e1ea&fccid=afe1f520a63ae3d3&vjs=3"
    },
    {
      "name": "SysOps Engineer",
      "company": "Transmission Dynamics Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?/Transmission-Dynamics-Poland-Sp.-z-o.o./jobs/Sysops-Engineer-a0430a2f02f16537?fccid=71edca8a792a88bd&vjs=3"
    },
    {
      "name": "Inżynier Procesu / Produkcji - oferta z pakietem relokacyjny...",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=eba88f7f76130589&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Automatyk PLC",
      "company": "Axamo Recruitment",
      "urls": "https://pl.indeed.com/viewjob?jk=f79baa9790b90f7c&fccid=f86175c7ba708305&vjs=3"
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
      "name": "Network Engineer / Inżynier sieci",
      "company": "Washington Frank",
      "urls": "https://pl.indeed.com/viewjob?jk=5fcad688fe10a7d9&fccid=cb9285e8f83d93f4&vjs=3"
    },
    {
      "name": "Inżynier sieci / Network Engineer - Kraków",
      "company": "FRG Technology Consulting",
      "urls": "https://pl.indeed.com/viewjob?jk=20e6d13e23b4bf6a&fccid=79a4f894c1383f39&vjs=3"
    },
    {
      "name": "Network Engineer / Inżynier sieci",
      "company": "FRG Technology Consulting",
      "urls": "https://pl.indeed.com/viewjob?jk=8e4724c72dd3e0f9&fccid=79a4f894c1383f39&vjs=3"
    },
    {
      "name": "Inżynier sieci, Network Engineer",
      "company": "Dynamics Jobs",
      "urls": "https://pl.indeed.com/viewjob?jk=7d6046df99c179ce&fccid=e7223e3ece47a796&vjs=3"
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
      "name": "Data Science Engineer",
      "company": "Spring Professional",
      "urls": "https://pl.indeed.com/viewjob?jk=8593ed384a623ca7&fccid=5b9b13c05b84001b&vjs=3"
    },
    {
      "name": "Software Engineer in Test | Kraków",
      "company": "Vsoft",
      "urls": "https://pl.indeed.com/viewjob?jk=ee63930a2a2139bc&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Oracle Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com/viewjob?jk=939751af5d5af958&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "388": [
    {
      "name": "Magento Backend Developer (Mid/Senior)",
      "company": "Exorigo-Upos S.A.",
      "urls": "https://www.praca.pl/magento-backend-developer-mid-senior_3416848.html#1cfcda44ac5207c38ac4bebe38ef711d"
    },
    {
      "name": "Senior Xceptor Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-xceptor-developer_3338594.html#1cfcda44ac5207c38ac4bebe38ef711d"
    }
  ],
  "389": [
    {
      "name": "Junior Business Analyst",
      "company": "Nowe Motywacje Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-business-analyst-krakow,oferta,1000278449"
    },
    {
      "name": "(FCR Ops) Assistant Manager - FCC Operations with German",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fcr-ops-assistant-manager-fcc-operations-with-german-krakow,oferta,1000260227"
    },
    {
      "name": "Power Grids  Internship  Business Analyst/Application Specialist",
      "company": "ABB PG BUSINESS SERVICES SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/power-grids-internship-business-analyst-application-specialist-krakow,oferta,1000275600"
    },
    {
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3415642.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-business-analyst_3393580.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Business Analyst [rekrutacja online]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/business-analyst-rekrutacja-online_3343528.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior Xceptor Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-xceptor-developer_3338594.html#0f62d1b55b419916af66d52811ec7c83"
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
      "name": "Inżynier Robót Elektrycznych",
      "company": "FBserwis",
      "urls": "https://pl.indeed.com/viewjob?jk=6b222268a55e6851&fccid=729181a9f999c28d&vjs=3"
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
      "urls": "https://pl.indeed.com/viewjob?jk=3d33dc1bfacfc9a6&fccid=60b9b6db9314e9bf&vjs=3"
    }
  ],
  "397": [],
  "398": [
    {
      "name": "Inżynier Budowy / Kontroler Jakości [rekrutacja online]",
      "company": "JT S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy-kontroler-jakosci-rekrutacja-online_3348204.html#8e352a8af0c281e6c707e1886cd00a6f"
    },
    {
      "name": "Kontroler jakości",
      "company": "PGNiG Technologie S.A.",
      "urls": "https://www.praca.pl/kontroler-jakosci_3385844.html#8e352a8af0c281e6c707e1886cd00a6f"
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
      "name": "Specjalista ds. gospodarki materiałowej i gospodarki odpadam...",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com/viewjob?jk=939dc9366899963f&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Ochrony Środowiska...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com/viewjob?jk=315cad0381ee06a8&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Referent ds. logistyki odpadów specjalnych",
      "company": "REMONDIS Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=cdbbed117d36ce4b&fccid=e18a11f1af6d217e&vjs=3"
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
      "name": "Java Web Developer",
      "company": "Visiona Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/java-web-developer-krakow,oferta,7518933"
    },
    {
      "name": "Praktykant Salesforce - get the HOT Salesforce skill!",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,1000276362"
    },
    {
      "name": "Praktykant/Junior Test Automation Developer (DevOps)",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,1000278106"
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
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Asystent/-ka Projektanta Brany Mostowej",
      "company": "MOSTOVIA sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-projektanta-branzy-mostowej-krakow,oferta,500035322"
    },
    {
      "name": "Power Grids - Internship - User Experience Engineer",
      "company": "ABB PG BUSINESS SERVICES SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/power-grids-internship-user-experience-engineer-krakow,oferta,1000275618"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "Modszy Inynier",
      "company": "Gegenbauer Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-inzynier-krakow,oferta,1000267545"
    },
    {
      "name": "Working Student - FPGA Algorithm Modeling Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-fpga-algorithm-modeling-engineer-krakow,oferta,1000256972"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Customer Service Junior Specialist",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/customer-service-junior-specialist-krakow,oferta,1000243672"
    },
    {
      "name": "Working Student - Software Test Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-test-engineer-krakow,oferta,1000270053"
    },
    {
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000270049"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Asystent Inyniera Projektu  Patny Sta",
      "company": "Real Construct Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-inzyniera-projektu-platny-staz-krakow,oferta,500036363"
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
    }
  ],
  "406": [],
  "407": [],
  "408": [],
  "409": [
    {
      "name": "Pulmonolog - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/pulmonolog-branza-medyczna_3443558.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Lekarz - specjalista chorób zakaźnych - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/lekarz-specjalista-chorob-zakaznych-branza-medyczna_3443654.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Lekarza specjalista w radiologii i diagnostyki obrazowej - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/lekarza-specjalista-w-radiologii-i-diagnostyki-obrazowej-branza-medyczna_3443656.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Pielęgniarka - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/pielegniarka-branza-medyczna_3443658.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Lekarz specjalista w dziedzinie anestezjologii i intensywnej terapii lub chorób wewnętrznych lub kardiologii - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/lekarz-specjalista-w-dziedzinie-anestezjologii-i-intensywnej-terapii-lub-chorob-wewnetrznych-lub-kardiologii-branza-medyczna_3443660.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Asystent Genetyka - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/asystent-genetyka-branza-medyczna_3443662.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": " Diagnosta laboratoryjny - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/diagnosta-laboratoryjny-branza-medyczna_3443664.html#43cf8f196d336d38543b2eea0fb50c1d"
    },
    {
      "name": "Lekarz onkologii klinicznej - branża medyczna",
      "company": "LEVEL WORK",
      "urls": "https://www.praca.pl/lekarz-onkologii-klinicznej-branza-medyczna_3443666.html#43cf8f196d336d38543b2eea0fb50c1d"
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
    },
    {
      "name": "Pracownik Administracyjny – Sekcja Administracji",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://www.praca.pl/pracownik-administracyjny-sekcja-administracji_3359184.html#43cf8f196d336d38543b2eea0fb50c1d"
    }
  ],
  "410": [
    {
      "name": "Modszy Specjalista ds. Rozlicze i Analiz ",
      "company": "Aterima Sp. z o.o. Sp.K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-rozliczen-i-analiz-krakow,oferta,1000274862"
    },
    {
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3415642.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior Product Owner",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-product-owner_3413396.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior SQL//VBA/Coric developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-sql-vba-coric-developer_3409588.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-business-analyst_3393580.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Test Manager",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/test-manager_3393584.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Resource Management Lead",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/resource-management-lead_3406628.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen-systemow-analitycznych_3405276.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "ETL Developer",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/etl-developer_3420402.html#6b69987c8a278d258930347b01de8034"
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
      "name": "Przedstawiciel Handlowy ds. Horeca",
      "company": "MAKRO Cash and Carry Polska S.A.",
      "urls": "https://www.praca.pl/przedstawiciel-handlowy-ds-horeca_3345436.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "BI Azure Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/bi-azure-architect_3429124.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Business Analyst [rekrutacja online]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/business-analyst-rekrutacja-online_3343528.html#6b69987c8a278d258930347b01de8034"
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
      "name": "Bioinformatyk",
      "company": "Vendo Krzysztof Domagała",
      "urls": "https://www.praca.pl/bioinformatyk_3385522.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#6b69987c8a278d258930347b01de8034"
    }
  ],
  "411": [
    {
      "name": "Junior Business Analyst",
      "company": "Nowe Motywacje Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-business-analyst-krakow,oferta,1000278449"
    }
  ],
  "412": [
    {
      "name": "BI Azure Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/bi-azure-architect_3429124.html#e45a85cfe0ab0419c9c27b162f63d4ae"
    },
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
    },
    {
      "name": "Grafik",
      "company": "PRZEDSIĘBIORSTWO BUDOWLANE START G. SZMOLKE,M. SZMOLKE SPÓŁKA JAWNA",
      "urls": "https://www.praca.pl/grafik_3409376.html#246b35f55cc1bcd1bfe973a8708cd36b"
    },
    {
      "name": "Konsultant Sprzedaży - Doradca Edukacyjny",
      "company": "Wydawnictwa Szkolne i Pedagogiczne S.A.",
      "urls": "https://www.praca.pl/konsultant-sprzedazy-doradca-edukacyjny_3394110.html#246b35f55cc1bcd1bfe973a8708cd36b"
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
      "urls": "https://www.praca.pl/technik-mechanik-k-m-rekrutacja-online_3436516.html#e47a11504f3229f5dbc4e8d13678ece5"
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
      "name": "Doradca Techniczno-Handlowy",
      "company": "SMART-HR",
      "urls": "https://pl.indeed.com/viewjob?/Smart--HR/jobs/Doradca-Techniczno-Handlowy-9cc2cf2aaaac6f7b?fccid=2ad7bb13c81995c1&vjs=3"
    },
    {
      "name": "Specjalista techniczno-handlowy",
      "company": "Level Work",
      "urls": "https://pl.indeed.com/viewjob?jk=2b26b6d7eed77a74&fccid=e92a6365b8535226&vjs=3"
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
      "name": "Senior/Regular QA Automation Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-regular-qa-automation-engineer_3420972.html#ae141d5b766b2fd8895bba9750612037"
    },
    {
      "name": "Senior/Regular QA Automation",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-regular-qa-automation_3443464.html#ae141d5b766b2fd8895bba9750612037"
    },
    {
      "name": "Cloud Oriented Network Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/cloud-oriented-network-architect_3409108.html#ae141d5b766b2fd8895bba9750612037"
    },
    {
      "name": "BI Azure Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/bi-azure-architect_3429124.html#ae141d5b766b2fd8895bba9750612037"
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
      "name": "Nauczyciel Technik masażysta",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-technik-masazysta_3440432.html#b85418b7ea7ccf98185b756124bcf26a"
    },
    {
      "name": "Nauczyciel przedmiotów ogólnokształcących",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-przedmiotow-ogolnoksztalcacych_3433238.html#b85418b7ea7ccf98185b756124bcf26a"
    }
  ],
  "431": [
    {
      "name": "Junior Business Analyst",
      "company": "Nowe Motywacje Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-business-analyst-krakow,oferta,1000278449"
    },
    {
      "name": "(FCR Ops) Assistant Manager - FCC Operations with German",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fcr-ops-assistant-manager-fcc-operations-with-german-krakow,oferta,1000260227"
    },
    {
      "name": "Modszy Administrator ds. Funduszy Inwestycyjnych",
      "company": "HedgeServ",
      "urls": "https://www.pracuj.pl/praca/mlodszy-administrator-ds-funduszy-inwestycyjnych-krakow,oferta,1000275635"
    },
    {
      "name": "Power Grids  Internship  Business Analyst/Application Specialist",
      "company": "ABB PG BUSINESS SERVICES SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/power-grids-internship-business-analyst-application-specialist-krakow,oferta,1000275600"
    },
    {
      "name": "Power Grids - Internship - User Experience Engineer",
      "company": "ABB PG BUSINESS SERVICES SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/power-grids-internship-user-experience-engineer-krakow,oferta,1000275618"
    },
    {
      "name": "Modszy Specjalista ds. Rozlicze i Analiz ",
      "company": "Aterima Sp. z o.o. Sp.K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-rozliczen-i-analiz-krakow,oferta,1000274862"
    },
    {
      "name": "Junior Financial Analyst",
      "company": "ArcelorMittal Tubular Products Krakw Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-financial-analyst-krakow,oferta,1000256444"
    },
    {
      "name": "Securities Operations Junior Analyst",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/securities-operations-junior-analyst-krakow,oferta,1000273321"
    },
    {
      "name": "Junior Reporting Analyst with French",
      "company": "PepsiCo GBS Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-reporting-analyst-with-french-krakow,oferta,1000272939"
    },
    {
      "name": "Junior Medical Data Analyst",
      "company": "Cardiomatics sp.z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-medical-data-analyst-krakow,oferta,1000238986"
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
      "name": "Data Management Junior Analyst with Spanish",
      "company": "PepsiCo GBS Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/data-management-junior-analyst-with-spanish-krakow,oferta,1000220916"
    },
    {
      "name": "Tax Analyst - Intern",
      "company": "Znajd wymarzonego pracodawc",
      "urls": "https://www.pracuj.pl/praca/tax-analyst-intern-krakow,oferta,1000201333"
    },
    {
      "name": "Benefit Policy Analyst with Spanish [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/benefit-policy-analyst-with-spanish-rekrutacja-online_3379030.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3415642.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Senior Process Engineering Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-process-engineering-analyst_3396702.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Młodszy Specjalista Analityk w Laboratorium Biologicznym Działu Kontroli Jakości",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/mlodszy-specjalista-analityk-w-laboratorium-biologicznym-dzialu-kontroli-jakosci_3396516.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Analyst - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-french-speaker-online-recruitment_3410740.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Analyst - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-german-speaker-online-recruitment_3410746.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Analyst - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-italian-speaker-online-recruitment_3410748.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Analyst - Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-russian-speaker-online-recruitment_3410750.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Analyst - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-spanish-speaker-online-recruitment_3410752.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Reviewer - Dutch Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-dutch-speaker-online-recruitment_3410756.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Reviewer - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-french-speaker-online-recruitment_3410758.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Reviewer - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-german-speaker-online-recruitment_3410760.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Reviewer - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-online-recruitment_3410762.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Reviewer - Russian or Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-russian-or-ukrainian-speaker-online-recruitment_3410764.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Reviewer - Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-slovak-speaker-online-recruitment_3410766.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Reviewer - Czech Speaker  [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-czech-speaker-online-recruitment_3410768.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Content Reviewer Polish Speaker - shift support [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-shift-support-online-recruitment_3410770.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": " Content Reviewer Russian Speaker - shift support [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-russian-speaker-shift-support-online-recruitment_3410772.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "CSR Online Advertising Specialist - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-bulgarian-speaker-online-recruitment_3410774.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "CSR Online Advertising Specialist – Czech or Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-czech-or-slovak-speaker-online-recruitment_3410776.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "CSR Online Advertising Specialist - Lithuanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-lithuanian-speaker-online-recruitment_3410778.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "CSR Online Advertising Specialist - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3410782.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "CSR Online Advertising Specialist – Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-speaker-online-recruitment_3410788.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "CSR Online Advertising Specialist - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-spanish-speaker-online-recruitment_3410794.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "CSR Online Advertising Specialist - Russian/Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-ukrainian-speaker-online-recruitment_3410798.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    }
  ],
  "432": [
    {
      "name": "Modszy Logistyk",
      "company": "PARETTI spka z ograniczon odpowiedzialnoci spka komandytowa",
      "urls": "https://www.pracuj.pl/praca/mlodszy-logistyk-krakow,oferta,1000257240"
    },
    {
      "name": "Junior Logistics Operator",
      "company": "Veritas Alpha ltd sk",
      "urls": "https://www.pracuj.pl/praca/junior-logistics-operator-krakow,oferta,1000257762"
    },
    {
      "name": "Logistyk / Magazynier",
      "company": "Leroy Merlin Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/logistyk-magazynier_3385108.html#00a848f9498101b0d4989a79ebe59fc5"
    },
    {
      "name": "Kierownik magazynu / Koordynator działu logistyki",
      "company": "Drops Print Sp. z o.o.",
      "urls": "https://www.praca.pl/kierownik-magazynu-koordynator-dzialu-logistyki_3381488.html#00a848f9498101b0d4989a79ebe59fc5"
    },
    {
      "name": "Młodszy Specjalista ds. Logistyki",
      "company": "Smart - HR",
      "urls": "https://www.praca.pl/mlodszy-specjalista-ds-logistyki_3420186.html#00a848f9498101b0d4989a79ebe59fc5"
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
      "name": "Młodszy Specjalista ds. Rozliczeń i Analiz",
      "company": "Grupa Aterima",
      "urls": "https://pl.indeed.com/viewjob?jk=300d39f185590501&fccid=8b76fd1a75b90709&vjs=3"
    }
  ],
  "440": [],
  "441": [
    {
      "name": "Doradca ds. Klientów Zamożnych [rekrutacja online]",
      "company": "Aragonit Asset Management Sàrl",
      "urls": "https://www.praca.pl/doradca-ds-klientow-zamoznych-rekrutacja-online_3396840.html#152f4815b528e41a17bc4bbdc1ccfc85"
    },
    {
      "name": "Doradca Techniczny ds. Inwestycji",
      "company": "4INSTALL Sp. z o.o.",
      "urls": "https://www.praca.pl/doradca-techniczny-ds-inwestycji_3391856.html#152f4815b528e41a17bc4bbdc1ccfc85"
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
      "name": "Partner ds. Sprzedaży produktów inwestycyjnych [rekrutacja online]",
      "company": "LEXITOR SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "urls": "https://www.praca.pl/partner-ds-sprzedazy-produktow-inwestycyjnych-rekrutacja-online_3335484.html#152f4815b528e41a17bc4bbdc1ccfc85"
    }
  ],
  "442": [],
  "443": [],
  "444": [
    {
      "name": "Junior Business Analyst",
      "company": "Nowe Motywacje Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-business-analyst-krakow,oferta,1000278449"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Referent ds. Spedycji Krajowej",
      "company": "JAS-FBG S.A.",
      "urls": "https://www.pracuj.pl/praca/referent-ds-spedycji-krajowej-krakow,oferta,1000264546"
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
      "name": "Copywriter SEO / Redaktor portalu Geex [rekrutacja online]",
      "company": "X-KOM Sp. z o.o.",
      "urls": "https://www.praca.pl/copywriter-seo-redaktor-portalu-geex-rekrutacja-online_3426280.html#d05c698fb6d4bfb447052f9fc4f80d75"
    },
    {
      "name": "Specjalista ds. SEM",
      "company": "X-KOM Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-sem_3432858.html#d05c698fb6d4bfb447052f9fc4f80d75"
    }
  ],
  "445": [
    {
      "name": "Junior Graphic Designer",
      "company": "Morele.net Sp. z o.o. ",
      "urls": "https://www.pracuj.pl/praca/junior-graphic-designer-krakow,oferta,1000257192"
    }
  ],
  "446": [],
  "447": [
    {
      "name": "Specjalista ds. marketingu internetowego",
      "company": "New Men Style",
      "urls": "https://pl.indeed.com/viewjob?jk=707d9d7aae83b23b&fccid=eb74c6649c374260&vjs=3"
    },
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
      "name": "Staż lub praktyka zdalna, 14 kierunków i więcej do wyboru",
      "company": "Krajowy Instytut Rozwoju Gospodarki",
      "urls": "https://pl.indeed.com/viewjob?jk=1c5dd6a055dcfbbb&fccid=5429572581cdb0aa&vjs=3"
    },
    {
      "name": "Specjalista ds. SEM",
      "company": "Marketing Investment Group",
      "urls": "https://pl.indeed.com/viewjob?jk=a06ca781ae7fe113&fccid=0ee62b7fa1ca038c&vjs=3"
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
      "name": "Staż lub praktyka zdalna, 14 kierunków i więcej do wyboru",
      "company": "Krajowy Instytut Rozwoju Gospodarki",
      "urls": "https://pl.indeed.com/viewjob?jk=1c5dd6a055dcfbbb&fccid=5429572581cdb0aa&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja aranżacja wnętrz",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com/viewjob?jk=c9c057e9413611c2&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja medycyna",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com/viewjob?jk=212407a166cb424b&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja język angielski",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com/viewjob?jk=9e98f59d7644521c&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja rolnictwo",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com/viewjob?jk=ba4e4a6ba6e51be7&fccid=ab8a0dae1fe54ce8&vjs=3"
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
      "name": "Kierownik Zespołu Marketingu",
      "company": "Talent IN sp. z o.o.",
      "urls": "https://www.praca.pl/kierownik-zespolu-marketingu_3425734.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Rekruter terenowy [rekrutacja online]",
      "company": "INSPIRO TEAM SP. Z O.O",
      "urls": "https://www.praca.pl/rekruter-terenowy-rekrutacja-online_3353550.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Analyst - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-french-speaker-online-recruitment_3410740.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Analyst - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-german-speaker-online-recruitment_3410746.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Analyst - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-italian-speaker-online-recruitment_3410748.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Analyst - Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-russian-speaker-online-recruitment_3410750.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Analyst - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-spanish-speaker-online-recruitment_3410752.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - Dutch Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-dutch-speaker-online-recruitment_3410756.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-french-speaker-online-recruitment_3410758.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-german-speaker-online-recruitment_3410760.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-online-recruitment_3410762.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - Russian or Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-russian-or-ukrainian-speaker-online-recruitment_3410764.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-slovak-speaker-online-recruitment_3410766.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - Czech Speaker  [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-czech-speaker-online-recruitment_3410768.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer Polish Speaker - shift support [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-shift-support-online-recruitment_3410770.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": " Content Reviewer Russian Speaker - shift support [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-russian-speaker-shift-support-online-recruitment_3410772.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "CSR Online Advertising Specialist - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-bulgarian-speaker-online-recruitment_3410774.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "CSR Online Advertising Specialist – Czech or Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-czech-or-slovak-speaker-online-recruitment_3410776.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "CSR Online Advertising Specialist - Lithuanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-lithuanian-speaker-online-recruitment_3410778.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "CSR Online Advertising Specialist - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3410782.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "CSR Online Advertising Specialist – Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-speaker-online-recruitment_3410788.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "CSR Online Advertising Specialist - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-spanish-speaker-online-recruitment_3410794.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "CSR Online Advertising Specialist - Russian/Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-ukrainian-speaker-online-recruitment_3410798.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Inside Sales Representative with Arabic and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-arabic-and-english-online-recruitment_3393648.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Inside Sales Representative with Czech / Slovak and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-czech-slovak-and-english-online-recruitment_3393650.html#7202358ecfe053a90fe6f1f9060b86e5"
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
      "name": "Modszy Specjalista ds. Rekrutacji z Jzykiem Niemieckim ",
      "company": "Aterima Sp. z o.o. Sp.K.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-rekrutacji-z-jezykiem-niemieckim-krakow,oferta,1000274478"
    },
    {
      "name": "Asystentka ds. administracyjno-personalnych",
      "company": "SWIETELSKY RAIL POLSKA Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-ds-administracyjno-personalnych-krakow,oferta,1000254635"
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
      "name": "Modszy specjalista ds. obsugi klienta z j. holenderskim",
      "company": "PRIORITY SALE - MARCIN SOJKA",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-z-j-holenderskim-krakow,oferta,1000191851"
    },
    {
      "name": "Benefit Policy Analyst with Spanish [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/benefit-policy-analyst-with-spanish-rekrutacja-online_3379030.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specjalista ds. Personalnych",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-personalnych_3396854.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Konsultant SAP (moduł PA, PY) [rekrutacja online]",
      "company": "Crowe Poland",
      "urls": "https://www.praca.pl/konsultant-sap-modul-pa,py-rekrutacja-online_3443754.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specialist with Dutch (Work Opportunities for School Graduates)",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/specialist-with-dutch-work-opportunities-for-school-graduates_3413078.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "HR Process Junior Specialist Dutch Speaker",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/hr-process-junior-specialist-dutch-speaker_3412950.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Service Integration / ServiceNow Solution Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/service-integration-servicenow-solution-architect_3428122.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Senior Project Manager",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-project-manager_3440034.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Kierownik Działu Zatrudnienia i Płac ",
      "company": "KRAKBAU S.A.",
      "urls": "https://www.praca.pl/kierownik-dzialu-zatrudnienia-i-plac_3394258.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Talent Acquisition & HR Specialist with German",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/talent-acquisition-hr-specialist-with-german_3437552.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Resource Management Lead",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/resource-management-lead_3406628.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "ServiceNow Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/servicenow-architect_3436186.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Service Integration Process Solution Architect",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/service-integration-process-solution-architect_3436886.html#ef711b463501f14e78e697a3ad0f8263"
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
      "name": "Specjalista ds. rekrutacji z językiem angielskim",
      "company": "DEKRA Praca Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-rekrutacji-z-jezykiem-angielskim_3426094.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specjalista ds. Kadr i Płac",
      "company": "Services Center",
      "urls": "https://www.praca.pl/specjalista-ds-kadr-i-plac_3345394.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Payroll Senior Specialist/Team Leader/Process Owner - nowy projekt (m/k)",
      "company": "CPL JOBS Sp. z o.o.",
      "urls": "https://www.praca.pl/payroll-senior-specialist-team-leader-process-owner-nowy-projekt-m-k_3392056.html#ef711b463501f14e78e697a3ad0f8263"
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
      "name": "Specjalista ds. Kadr i Płac [rekrutacja prowadzona online]",
      "company": "ZIKO Apteka Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-kadr-i-plac-rekrutacja-prowadzona-online_3333604.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specjalista ds. hr",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/specjalista-ds-hr_3445024.html#ef711b463501f14e78e697a3ad0f8263"
    }
  ],
  "459": [
    {
      "name": "Asystent/ka Dziau Wsparcia Sprzeday Projektowej",
      "company": "ROMI Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-dzialu-wsparcia-sprzedazy-projektowej-krakow,oferta,500035780"
    },
    {
      "name": "Sta z Lwem w Sieci Detalicznej - edycja letnia",
      "company": "ING Bank lski S.A.",
      "urls": "https://www.pracuj.pl/praca/staz-z-lwem-w-sieci-detalicznej-edycja-letnia-krakow,oferta,1000258945"
    },
    {
      "name": "Specjalista ds. Obsugi Klienta",
      "company": "InPost",
      "urls": "https://www.pracuj.pl/praca/specjalista-ds-obslugi-klienta-krakow,oferta,1000270315"
    },
    {
      "name": "Asystentka - Tumaczka",
      "company": "FPH METAL - TECH",
      "urls": "https://www.pracuj.pl/praca/asystentka-tlumaczka-krakow,oferta,1000235380"
    },
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
      "name": "Full Time Administrative Assistant - Remote",
      "company": "WEB BESPOKERS FILIP KOTLARZ",
      "urls": "https://www.pracuj.pl/praca/full-time-administrative-assistant-remote-krakow-okolice,oferta,1000204756"
    }
  ],
  "460": [
    {
      "name": "Intern in Marketing",
      "company": "International Paper Kwidzyn Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/intern-in-marketing-krakow,oferta,1000280940"
    },
    {
      "name": "Asystentka Dziau Marketingu",
      "company": "TACTICA Pharmaceuticals Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-dzialu-marketingu-krakow,oferta,1000266871"
    },
    {
      "name": "Staysta ds. marketingowo-administracyjnych",
      "company": "COPA-DATA Polska Sp. z o.o. ",
      "urls": "https://www.pracuj.pl/praca/stazysta-ds-marketingowo-administracyjnych-krakow,oferta,500037707"
    },
    {
      "name": "Modszy specjalista ds. obsugi klienta wgierskojzycznego i tumacz",
      "company": "Marketing Investment Group S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-wegierskojezycznego-i-tlumacz-krakow,oferta,1000258752"
    },
    {
      "name": "Junior Customer Success Specialist",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-customer-success-specialist-krakow,oferta,1000236667"
    },
    {
      "name": "Staysta ds. marketingu",
      "company": "CCC S.A.",
      "urls": "https://www.pracuj.pl/praca/stazysta-ds-marketingu-krakow,oferta,1000254190"
    },
    {
      "name": "Junior Marketing Automation Specialist",
      "company": "Dreamcommerce S.A.",
      "urls": "https://www.pracuj.pl/praca/junior-marketing-automation-specialist-krakow,oferta,1000226401"
    },
    {
      "name": "Retail Marketing Executive Assistant",
      "company": "Shell Business Operations",
      "urls": "https://www.pracuj.pl/praca/retail-marketing-executive-assistant-krakow,oferta,1000255364"
    },
    {
      "name": "Modszy Specjalista ds. Obsugi Klienta z jzykiem rumuskim",
      "company": "Marketing Investment Group S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-z-jezykiem-rumunskim-krakow,oferta,1000218174"
    },
    {
      "name": "Specjalista ds. SEM",
      "company": "X-KOM Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-sem_3432858.html#c07a636253615519fbd73fb82da5263d"
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
      "name": "Przedstawiciel Ubezpieczeniowy Premium ",
      "company": "Nationale-Nederlanden",
      "urls": "https://www.praca.pl/przedstawiciel-ubezpieczeniowy-premium_3436464.html#0359d24e18f4ecf5d79ebd232be56407"
    },
    {
      "name": "Doradca Ubezpieczeniowy [rekrutacja online]",
      "company": "PZU Życie S.A.",
      "urls": "https://www.praca.pl/doradca-ubezpieczeniowy-rekrutacja-online_3426012.html#0359d24e18f4ecf5d79ebd232be56407"
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
      "name": "CSR Online Advertising Specialist - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3410782.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-bulgarian-speaker-online-recruitment_3410774.html#7641eb0788d0c3bc1469f61984eb5bdc"
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
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3426290.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "Moderator treści w social media z językiem niemieckim (m/k)",
      "company": "CPL JOBS Sp. z o.o.",
      "urls": "https://www.praca.pl/moderator-tresci-w-social-media-z-jezykiem-niemieckim-m-k_3407172.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3410826.html#7641eb0788d0c3bc1469f61984eb5bdc"
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
      "name": "Stażysta ds. marketingu",
      "company": "CCC S.A.",
      "urls": "https://www.praca.pl/stazysta-ds-marketingu_3405302.html#7641eb0788d0c3bc1469f61984eb5bdc"
    }
  ],
  "467": [
    {
      "name": "Summer Internship in HR Administration",
      "company": "State Street Bank Poland",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSId6wgXXoO5zMEYkcgXL98U2bDYYCk8F0c3GIiDNv7SmtuJC2qW3J5YjH_ZCQNjFLTaqEj73G9d3n5ezds-wP4Nf8gbrpsgW8iwLaliy9fwyM7ammaWPiiDDXtJLo4auEJ331DI504vc0aJVfutUtOuEZdCNNubYTMveBG7orBBJVQjxtv8iPAfRjE5BJ2U--rqrx2pelWx1gkXv5dzP9oWOr4tT1P0SXfQYGr6YgpbFW-Iigy0djvTcY31g2TYN_g3rK0gt-q_nxp8A1c7jB6d1bCLTxeC12fcklheMcYcfOGvBmg_mPDlCGoV0f9sS16GrhIAcx2nW3XQLxG99wCQvJzoZB267FpplxcpL8OJ_EQ234JjSc-mS8gd2t2sYgNj0qBe-l7_VsAgok9QG9cny5FBvUVpp8YrYOmRoS1PYZF9nZpxUZSUqB6coK3XVmh-mEaXYHbbD5fdWY54r8HWsDM-SrV_Dg46N3HL1-YX6ErNzmi52_VwdxAZaMfQiNObzt43a-P6YkpB9QADe2AJ0wnE893ZRfglZfBk3T6Y-7rXG0DVCsyHlwwX6apJEn0et3L6B6-dC9iW3ImVMEiv-A5L7hm3Vr00EXivg53RKLwspMJMt_yki3YSnXZnLM9EFAF4noBEe_BM5RnpXD3vg&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Global Customer Service Manager",
      "company": "Accenture Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfbky0Q4V8_qA3LkMKFNe6k8yBDkMflz49F0cU8uHECpHv_v7-r3KSu077dY4VNgszpQ7gXKQweV3cfgpugdZhaenqPXTdJw46rkWdi_Xb0uxo8OK1RV76djA1Vxddb3ADSJF52ZbghkTmSW08CErvr-2cMrnOczoF0U1B_BvCchfIEo9eJjV1KC8evtLNoJTG0NFkc4-nH9RzUVW7lYMS0mf7-rAEZ8eAPxrgjngQmgWtUr1172ullPcW9CtWupriolCBGUuVsG-3h_-lWKi0FA98kQB7apgguVLNi3ZKgJ6YN425ql7PJzQ6Y0KdJk-Bue9sDkuLYScZYNGyE9MxnJECDoEUEjKZWLBioigeFBvfTurX6czS9HNZkjk96QRxn6J5xGBIr9Ny340Pm7GbxRTg3NXhgDpYijKkfAcYacdgD5iSUtgYNEWoLOVmg0dTiyjBhZat1LJqC80ctg5Tfy7oR5cTB81TrLdI7yIc8ucDJzpxkYAUV6IG88g5VuZzS6noSgqFyKHobC35RdhcT1Ew13DQRezVwOKM7-4Pal-J2dAFM3Om2_DcO3rhaL0qxPs2M1fV0d4kwDXwx4HTkoPCu2Y-Oxn35Hi08EOfYNW8oB_P_-lETg22-I9_T20yKqRyQT62jGnR_fPZEMrGl&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Alliance Manager",
      "company": "Ardigen",
      "urls": "https://pl.indeed.com/viewjob?jk=62be891a69ab27ba&fccid=0caf54c974d1fc7f&vjs=3"
    },
    {
      "name": "Social Media Manager & Strategist",
      "company": "Funktional",
      "urls": "https://pl.indeed.com/viewjob?jk=a7f84b363a02db6b&fccid=014e16512e5e89bd&vjs=3"
    },
    {
      "name": "Client Success Manager",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com/viewjob?jk=b9999e64aef721d6&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "TEAM",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com/viewjob?jk=c9c4c99adb4009f6&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "Summer Internship in HR Administration",
      "company": "State Street",
      "urls": "https://pl.indeed.com/viewjob?jk=9c6861aaa9c22306&fccid=92f1ccd9154b0139&vjs=3"
    },
    {
      "name": "Duty Operations Manager - Krakow",
      "company": "Discovery Communications",
      "urls": "https://pl.indeed.com/viewjob?jk=a98e8ee03e26eac8&fccid=f17180ffbe436a3c&vjs=3"
    },
    {
      "name": "Product Manager",
      "company": "Caspio",
      "urls": "https://pl.indeed.com/viewjob?jk=f3f99abdc985be44&fccid=204aafbc9b36f228&vjs=3"
    },
    {
      "name": "Demand Center Manager",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=919eb17bd825b859&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Senior Facilities Manager",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com/viewjob?jk=1b9df29dcbe1cf7b&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "Sales Support Team Manager",
      "company": "PepsiCo",
      "urls": "https://pl.indeed.com/viewjob?jk=1bb4f1edd9688a74&fccid=2973259ddc967948&vjs=3"
    },
    {
      "name": "New Business Manager",
      "company": "Funktional",
      "urls": "https://pl.indeed.com/viewjob?jk=8f1cdf8b8304a759&fccid=014e16512e5e89bd&vjs=3"
    },
    {
      "name": "CTO Agile Team Manager",
      "company": "Motorola Solutions",
      "urls": "https://pl.indeed.com/viewjob?jk=e3d0616dede13931&fccid=22ec6ef3cc441ac2&vjs=3"
    },
    {
      "name": "Project Manager",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=585f27dc3417fa82&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "CSR and Communications Internship",
      "company": "UBS",
      "urls": "https://pl.indeed.com/viewjob?jk=c63c24a76f90ee5c&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=223e749b80e8beb0&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Global Process & Control Improvement Manager",
      "company": "HEINEKEN Kraków",
      "urls": "https://pl.indeed.com/viewjob?jk=9bb48cdf54aaeebf&fccid=9d3fc2c7bbc80ecb&vjs=3"
    },
    {
      "name": "Network Implementation Manager",
      "company": "Akamai",
      "urls": "https://pl.indeed.com/viewjob?jk=5d08568ad2230f76&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Manager - Talent Acquisition Global Sourcing Hub",
      "company": "QVC",
      "urls": "https://pl.indeed.com/viewjob?jk=cc1d503d88ad3105&fccid=8a4535c948d32e2a&vjs=3"
    },
    {
      "name": "Global Customer Service Manager",
      "company": "Accenture",
      "urls": "https://pl.indeed.com/viewjob?jk=17fc9d817015d098&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Product Manager",
      "company": "WorldRemit",
      "urls": "https://pl.indeed.com/viewjob?jk=087ecfb805c28f7f&fccid=507acd357fe68a6f&vjs=3"
    },
    {
      "name": "HR Manager (m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfAI6fxB1XP-YvUy0b7utziOC8GwtUolm25Z1pr20B8BC5dRZjx7C8CAIzG8LoE243lvpcXJwuk1RFj_72LHK2yf0yLH8PgBog0ZWgULgZtfyxxSOHNO-MCoo1SlanG061__NT8Jduf7ZJbEPDMYqRKqPkZjvbu8p0lTsXfIKgVljOKVLVv1FvWG0Osy40A6-OJendXbcqz2Mc-WbWLiXSNKccvkqZF0LNz8FmuDmveRODzs4BxA0l2sDgEB_jaXC75A9l9lpQQausuR6SKXNFdCC1Ali0oXuTXYqAZKHj1p303OEdapUKpYso-cyrOfQINNfx9AClMdGgRy40E_03NhvfJNB0wDr-YYmLDghJw5ciz9EqxmhwtJ-YNfdJZ4MT5EVMRfEiimew5A67Lux6vDI5NPKxmFu2e4S6tni0gaWraViWEcD-cSx18eAKZMdOpFnvY-u_OwsAd0QVnFv4G2cgwueuj0oqXBtYeNxYSSGb7PQmNUFOLSQJICysiOXPrcF9-HjuJ1XfsalyPJImwdEvtUU9w4hhX0Rk_5FIEsD6OF89zwqgjiBpsiLhd_ce58zdZms0ry2EVQ9kJeNHWbHXa0jvriuZzH5Mk3FFVM4QbZ6WzMW0mITWfrXqLG9Y=&p=10&fvj=0&vjs=3"
    },
    {
      "name": "Risk Manager",
      "company": "Brown Brothers Harriman",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqcnL7Z32D0mKD8hW9DUcGT8WJoTOsPdEBkmF4hDmllWxS0mNMYMMqzaJR70liAw7mj5_uYczh1Z92FdQFj766M2Y700dFDrfAl84FeDMJ34oQtD28jqEyGTG_m_1scWIo1ipFtizikIcvl-eMqD_wZG-nzvUOrThXpifvKfR_xpqxlmrUaCJoKqJAcvXnkvzetL8B9lYBFVzBKhk49ZL1hUMIYTD01GdkLSP5zmjHFfCumZUbKk14ExI4kozA7bq_sD79Gs3xuU7Rp_EdZx-juBmTftHn24c_LKfAc__CYxK_aYKRb7A4mnG0O_JIUBPNmeg7JCvdOFhptM6tQhmoYgJniTDGOLahmhQdyO9WJm467kMqw6F4pbLF2r1wvfo4lI1LcbpN88Zo4MboCEOoaFBq6RfC_J14V-7zHFVlJVVFzwD8hQuX76PDj7ldfFBbx1zU6AhFfCOID1f6e-1cUDsH1Xc5Bk5MaDyOkquunjLyOfrQNowhNC5r7782GVvgByYTBj3ZWMY-Hjx3YQlIStVQx6x_HAJrVpSbjkp1CowglpEN7c1FXZQTJZch3LEkwwHRIfN0-fiVaER_oVTFPKFUQ0BuGwt-_Xc_r-eWHut0hNyLh0yINH7ViWtxwtYPpjaX15_UrN6y2LeN_xynfJWVgE0ZXYwSSd9hBaj0zui1z8LyAwLpD0L7Bd26YztUd_MrHZQDiC&p=11&fvj=0&vjs=3"
    },
    {
      "name": "Freelancer Publicist",
      "company": "TOP Agency",
      "urls": "https://pl.indeed.com/viewjob?jk=6a37f8dab922c48a&fccid=95ba0f0f3bc059a8&vjs=3"
    },
    {
      "name": "Process Manager PTP",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=227acb7253867431&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Product Development Team",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com/viewjob?jk=6553258faf5f1535&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com/viewjob?jk=f906cf3cfe85651a&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Manager InfoSec Training and Awareness",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=a92c714df5563e3c&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Infrastructure Delivery Manager",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com/viewjob?/HRO-Digital/jobs/Infrastructure-Delivery-Manager-5f15cbc8bd9ab683?fccid=4fcb59d2ba8f65d1&vjs=3"
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
      "name": "EMEA Logistics Manager",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=e74d3d5583294b7c&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "IT Program Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=ef3c8c56cc9c5b26&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Staff Technical Product Manager, eDMS",
      "company": "Cytiva",
      "urls": "https://pl.indeed.com/viewjob?jk=ae4996794427da0e&fccid=c46411dafcae5d08&vjs=3"
    },
    {
      "name": "Program Test Manager",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=9d7ab35a6b96d02f&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Senior Manager, Digital Operations",
      "company": "Cytiva",
      "urls": "https://pl.indeed.com/viewjob?jk=049feeaa7d9804d6&fccid=c46411dafcae5d08&vjs=3"
    },
    {
      "name": "Project Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=99054ffcffc4070d&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Manager InfoSec Global IT Controls",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=0ee8f87a7d997391&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Business Development Manager",
      "company": "Go Global Services",
      "urls": "https://pl.indeed.com/viewjob?jk=63532278a698d471&fccid=07981464a31ce167&vjs=3"
    },
    {
      "name": "Infrastructure Delivery Manager",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=8e513b4ccfef4bb3&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "IT Project Leader/Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=598ff89cac1e7ffe&fccid=4141256365dbb7d7&vjs=3"
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
      "name": "Associate Project Manager",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=b4b92b1dc5b646f3&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Junior Project Manager",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=7d9c91bd296a415f&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Senior PR Manager",
      "company": "Bidroom Poland",
      "urls": "https://pl.indeed.com/viewjob?jk=18700326f3ece834&fccid=3661982007b43fee&vjs=3"
    },
    {
      "name": "Internal Control over Financial Reporting Team Manager",
      "company": "Zurich Insurance Group",
      "urls": "https://pl.indeed.com/viewjob?jk=121b9150a15feea3&fccid=40f6e1ba1aac8472&vjs=3"
    },
    {
      "name": "Senior Product Manager",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com/viewjob?jk=b1a26f8b9145c41f&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "Clinical Project Manager",
      "company": "Ardigen",
      "urls": "https://pl.indeed.com/viewjob?jk=4e307bb2f390b172&fccid=0caf54c974d1fc7f&vjs=3"
    },
    {
      "name": "Information Security Manager for Third Party Information Ris...",
      "company": "UBS",
      "urls": "https://pl.indeed.com/viewjob?jk=ea9bd601f4e36f21&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Security Technical Project Manager",
      "company": "Akamai",
      "urls": "https://pl.indeed.com/viewjob?jk=cde9a8d8aa34cad6&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Senior Delivery Manager",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=7c959fbf65bf488c&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Business Change Manager",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=3033122a08b22199&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Customer Experience Manager with Dutch",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=260feccc0aa5f271&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "PLEC - Project Director",
      "company": "Air Liquide",
      "urls": "https://pl.indeed.com/viewjob?jk=fac34a13dfcde33b&fccid=0bfc42f123844c30&vjs=3"
    },
    {
      "name": "Marketing Automation Specialist",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=3e0fbc67c95568e5&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Account Strategist",
      "company": "Strike Social",
      "urls": "https://pl.indeed.com/viewjob?jk=743e3c2f13fca29c&fccid=cf4976b1a250fb07&vjs=3"
    },
    {
      "name": "Senior Technical Product Manager, MES BA",
      "company": "Cytiva",
      "urls": "https://pl.indeed.com/viewjob?jk=798e7752fce79ede&fccid=c46411dafcae5d08&vjs=3"
    },
    {
      "name": "CRM & Lead Generation Manager",
      "company": "Goodminds",
      "urls": "https://pl.indeed.com/viewjob?jk=3ae9b6871fb43fab&fccid=11f0d4057730c23d&vjs=3"
    },
    {
      "name": "Training and Quality Analyst",
      "company": "Splunk",
      "urls": "https://pl.indeed.com/viewjob?jk=3be782a1f20f660d&fccid=aef928e89977f7f0&vjs=3"
    },
    {
      "name": "Chief Accountant, Accounting to Reporting",
      "company": "Lundbeck",
      "urls": "https://pl.indeed.com/viewjob?jk=d79b9f54d9f22ae0&fccid=884e0310e97a8b3a&vjs=3"
    },
    {
      "name": "Internal Control Expert",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqDUsVUkfH4EkrN84Gz9KZxfTNKGDbceuFgVKP__EcoUq1VCYNkQ2Mt2fu7q3ynIywXEnKyFHdVb47sP44_nhLig9wWvYGUl-9rd1Zf-LUTDHlmrTP4q41nHnrXlCZAH0u1m2WeYHOm2-mwGZPVA5Orm5jCenkgCY4KQpX4qAXK660WJsS1UY0KBoociqxQ4KjIv3XZIcfJdQbWjKyp1Y8eiXc35d2sUCydaMFsTVt3uhG21YZAcFTnFlVKTaa0dL1Lag7Qyi5z28pT2r1AR8NyEHpN9JZxy0I9HBV-oZDYAul70kVuNaianySkch5PloAy3-JGwXJDSYfatqv8XjeBJcJULbK2rtAPe8ZHABoT2ds9RWpW2kohwsVky61eB3ez5XCiD9jpcyTnGuJDmFwVbsaCzVsEaRtWakp3brRyaA3I6pT5mI9KLXMX6bBR6DL5kvKyYId6Plp4E3O9qP-Kd-xIstleuoTzoKHvUFlpGREp5hAQE9YAz6V1VTc-YNE1OxAUdRp_wYfUjFh3IX_WCpwfum2GigY_nudhyNeMUM09_0O90w87c7Nh-dmvMBS0wm9hHhYccbvBg4xZ7K9TYqcH1tODyH-9YBs2ELD4w5YJ8vrcEJQWV6DN52zbXCD6rXbyxcssKEJgClY32Lg-fq0lWx1ieYqAgiP5SwOpg&p=10&fvj=0&vjs=3"
    },
    {
      "name": "Global Project Manager of Talent Acquisition and Development",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeLBcVY6sRL-4D6o1idFR5weTHlYU4GwZ9Mx9yiW9uWdgae6WNBkYnK6RKEydEEqVr03gwjyRFE_iqkTxJ-6BcUCzqjh4F9WUBr4S-IQ6VAh1IxYqSqkECmkosNQ74k6DRCN7DUIO1_rEZgRP3dktf9df20_pRgi6tgsdbsxe3t2VmD0nOWgc4P2buF9fd_CZ6DjNVnOFT0yzFpZHEACCrTx1rDzupGJ46vZDqmg9qy0KqPOzY-DlWQPv2RCW-5MAaTjuW5lWcJiosIi514VhnPQw8I8u3aN58yEZuBWQjMXp4cVau8tmQhQbM-PLge3eW65CuJzZ0hcKjJjokz9SrNsfygtceuFiOaSsz76C3KUaEgBZDxfZcAhD1T8pQRqW526CfM0tGTrE9036VLkebtSIpnKr3efz2ZaVFJEVQRQA1bPZ6Dnh3jjbWH4Uqi5NYjm-3I6jxUGZcBj25-3iARnmt46mFe3Ss1tuRAe0VRvA8QDk30-S1IuO3zC5ekPny4PRogdSNiVSDQveGtmaraF2qHu7PiveVb-0_2Z-brZ8XB5PLKmmblq8ARoErapjU7Jl3p_04h6Va7-MGfBYGsp05iNIWv3k9jMZq3nU8bNytFsQK6PeK1UNtbNeBusilymv-uQuLGwN4lGKOn2TD2MNL3lFe1Eo-_Zl0TA9Sh972PP0rN6Hdn3I9mS-3qozs=&p=13&fvj=0&vjs=3"
    },
    {
      "name": "Customer Experience Manager with Dutch",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeLBcVY6sRL-0XMa5oE6oB7e5sebT4Y_MJA7Y4njKFlG7Q_bt_l79bWZDFJT8ARPPk7VDFZXLUyZT1InMXwBU1OcbB9C-MZnR_fy8GLHyeX90GHat9SoVhVMq6izHpkcVF01uQJboaFhU0Ppr0Frvz8TpgP1CRVgHynIDVC69mWnDoSbdZxqbu71CoA2Jhz9yQh1eiQ3RIEomzXfebRVkTyqt58XcvTTtWpFTxsAEdgDWDxn-x9XQ75vH3GzXVji22kIOZ8yrujf-Yof7LX2sOvBIF7fAkk6TuHvGCOTRLfpZFftIBGeXi1kCZgVhziPCPHXGx0ru9xjyGUgYuxzD_anPkxa_scTnlkAxUhtTnb3kCjjugc27tomKNrgdSnQGKJTYpX8hYz3bjuBo5IQ5z4A1CoTvUyWsk0n62tWPsBifOMHrUshXYmKQoiMrjOeXiQCPecKTFMQSAjUWKEsISmK9xrbZd9_Q7guNBTfXw49gcQpIEz8ZL6jS0RUZ95YxjHo-mPCjRTWPzlY16cd-iEbIXXmAo_6Det7a2XghTEHnTzfr9hRWkwS8v6K-4zhAzNAcJQpm-1QaYpVDGguK6P2x4g5R_3RRpByyIANmnbjTZits4YwuTwzHGUirtrOIV5rDqVFJvYov0tf4cEBG6wo6s6DRf2wZQ=&p=14&fvj=0&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "HCM Deck",
      "urls": "https://pl.indeed.com/viewjob?jk=16eeaa9db7daf93b&fccid=183a60f9194ba681&vjs=3"
    },
    {
      "name": "Finance Project Manager",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=b6a0dadfb078d607&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Service Delivery Manager - Salesforce",
      "company": "IBM",
      "urls": "https://pl.indeed.com/viewjob?jk=f54b2e3adbb2f40e&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Performance Marketing Specialist",
      "company": "Funktional",
      "urls": "https://pl.indeed.com/viewjob?jk=9465348003acef44&fccid=014e16512e5e89bd&vjs=3"
    },
    {
      "name": "Operations Support Intern",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=ae80507a7d2c7239&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Procurement Business Process Expert",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com/viewjob?jk=53eb823859017842&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "Business Development Manager (HR Solutions)",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=1fe408682bda58b8&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Customer Experience Engineer - Collaboration (Customer Succe...",
      "company": "Cisco Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=33f7a65e9d3eead3&fccid=dfc44f3b8c44a6db&vjs=3"
    },
    {
      "name": "Senior Talent Acquisition Partner",
      "company": "PepsiCo",
      "urls": "https://pl.indeed.com/viewjob?jk=9b4c09f9d4a21151&fccid=2973259ddc967948&vjs=3"
    },
    {
      "name": "Procurement Process Manager with German(m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?jk=a44b398c47317f40&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Junior AR Analyst OTC Italian",
      "company": "IBM",
      "urls": "https://pl.indeed.com/viewjob?jk=c79f0303cf9fe34e&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Team Lead",
      "company": "Working Smart Limited",
      "urls": "https://pl.indeed.com/viewjob?jk=a0e31eef6dd61352&fccid=eb81f98123301883&vjs=3"
    },
    {
      "name": "Workday Financials Data Solutions Lead Consultant",
      "company": "Alight",
      "urls": "https://pl.indeed.com/viewjob?jk=193a7f106db385c4&fccid=c35833abe06c86e0&vjs=3"
    },
    {
      "name": "Operational Buyer Spanish",
      "company": "IBM",
      "urls": "https://pl.indeed.com/viewjob?jk=c59f7db620804b71&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Operational Buyer Italian",
      "company": "IBM",
      "urls": "https://pl.indeed.com/viewjob?jk=85d5e4b7de94751c&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Director for the Centre for Computational Medicine – Interna...",
      "company": "ExecMind Life Science Executive Search",
      "urls": "https://pl.indeed.com/viewjob?jk=87b9a2ac226f6051&fccid=4dda44caa328da25&vjs=3"
    },
    {
      "name": "Delivery Lead",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com/viewjob?/HRO-Digital/jobs/Delivery-Lead-886e6c2ba3c53aea?fccid=4fcb59d2ba8f65d1&vjs=3"
    },
    {
      "name": "IT Buyer",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=5015a8e3d058ce00&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Junior Ruby on Rails Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=3ee2b30b299dfdcc&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "R2R Team Leader with French",
      "company": "TE Connectivity",
      "urls": "https://pl.indeed.com/viewjob?jk=480e4ee516fd0a03&fccid=adb7c04d7caa1bd2&vjs=3"
    },
    {
      "name": "Senior Talent Partner",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=774aba820bf5c07b&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Ruby on Rails Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=6f7e6c22857a22b8&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "EMEA Senior Accounting (RtR) Manager",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?jk=3146c38a0287073f&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Technical Marketing Manager - Automotive Electronics ( f/m)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?jk=43efdbb974beda71&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "InfoSec Senior Analyst Risk Awareness",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=9ae39cf3803b8f46&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Global Senior Risk and Internal Control Manager",
      "company": "Goodminds",
      "urls": "https://pl.indeed.com/viewjob?jk=df109f7a62d6c8ae&fccid=11f0d4057730c23d&vjs=3"
    },
    {
      "name": "Solution Engineer – Business Application Services",
      "company": "ALK-Abelló",
      "urls": "https://pl.indeed.com/viewjob?jk=5b0bff2ff8beffba&fccid=b534993dafd4bb7f&vjs=3"
    },
    {
      "name": "React Native Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com/viewjob?jk=1580b5bf1a221038&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Senior Software Engineer - Mulesoft",
      "company": "QVC",
      "urls": "https://pl.indeed.com/viewjob?jk=4a0941d4fbb67e1f&fccid=8a4535c948d32e2a&vjs=3"
    },
    {
      "name": "SEO Copywriter (Spanish)",
      "company": "Azimo",
      "urls": "https://pl.indeed.com/viewjob?jk=b19bfbd17aa598d6&fccid=61900a33c3bbbbb6&vjs=3"
    },
    {
      "name": "Senior Service Analyst (Accounting & Transactional Finance)",
      "company": "HEINEKEN Kraków",
      "urls": "https://pl.indeed.com/viewjob?jk=dc1558ffc27f7459&fccid=9d3fc2c7bbc80ecb&vjs=3"
    },
    {
      "name": "Senior Software Engineer - React",
      "company": "WP Engine",
      "urls": "https://pl.indeed.com/viewjob?jk=1979abe89866df75&fccid=966a8dd715d10eb7&vjs=3"
    },
    {
      "name": "Marketing Automation Specialist",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeYC8izo8kVgSPErBS1SFXQfIRrKfg_28WJqNWhTKLQpbZkDzclwr1s-TPqGu1xZOBz3jHgI3oHQWRVU18oGiu_IT7jrW77FlAydFYhpWxYVhDna33KhSewc2b45TO43JkNNqH_lgCK1D7BKnxgc9Ul2lUagqTXVQipCn8633nvI2BwyojOd7fY6nW4mkgtcZkc1WUU8YW6fYeLc9VtvHJFjJ-UwqSvLJx0zSlvFJRNV3gi3_cd5ZkGvbs0-cCBqrtXxyFbSNRA4jyKlbLOXwcu9wXD-JpBLmlapK8AudQ744bBCCd3AXcv3LWCRha4NfM52jTvpkXnmIXgQXq6S0oeEPzHOhxSeijiQLz83gN0_im2WPPs4NnIxuR5eAlasUqv-qhWsUJva5daTuDmgZUDjyb3OW_OQwz0RayMNdcf-vX-Jf8NisVi0BnehaLd8y3kPs2J6oXPtFe-CgaI1NLP5p9MwWD73W7mid4efqxAy5JyEfvjBV4rPGXKumvXYWQYAr8CA8w1Ky6mJwShjPS5c7VwkfPrerKUNQAgecQhSsDiFxgWBc8JVOhNX1IxXOAeMYMtkWIh3eS6SI2EWMgAF0MF8UDiz6rDuYvUmcDrzyKIsGTcZSW9TzTPMCKGh7fJTKjxJqSs7R3ml76VAy49&p=10&fvj=0&vjs=3"
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
      "name": "Python Senior Developer",
      "company": "Investio",
      "urls": "https://pl.indeed.com/viewjob?jk=81de3d8912c00032&fccid=c5b0414455b5af46&vjs=3"
    },
    {
      "name": "Specjalista ds. nowych biznesów",
      "company": "Mia Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=6d5cb76e96f658d5&fccid=0c143c026c0aaa11&vjs=3"
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
      "urls": "https://pl.indeed.com/viewjob?jk=310b6c5353e175a7&fccid=3661982007b43fee&vjs=3"
    }
  ],
  "471": [],
  "472": [],
  "473": [
    {
      "name": "Creative Account Manager (PM)",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIf9gYzjrBuqZegRuvJY1X2BJba1L0drXkBA85WKoobz7J2Vm7oTBF_tlv3Yb-Hff84TDBBLs-HHfHmPrBllENKucxXVYtP6cY5aVB6nyWLvnWlqnOqyFItXJTvhiLOlSFkz5-Jj5v-Q2WFEA8P_kweyl0t66pW-piBIJXo0gAvMdQxw7BazOD3Ha5Qbcoi3VV9hdFk7Mg8UYVdvWLqUbi2YqoUuA9uWsOodmBizFU8AJyxLVvOfDrxjmCzzGjlSf8eHbG_vcvYbCI2OLRSTDgYk72h5HbmZzokPfuP1wxva8rYENqmeSI-Sy3C3QrpAUPqPtTRKfGSSosllTghWP6jcogMxnHgPImtAjv0YIxGyEAdbxiLsfnnRi16rPA1OQfsSZPQF5DxsR1fMMo0vwmhB35MDhOgIeD7D-yWLPsT3ss76GBXuLUQC6akr7YALVYwmY7PNg4QuHveNvW0jqPm0dyRg1m3Z55K40YqfZ7zuEy_-qBQ6HL5qH-pkUS_OZLtcwKrins5c0iueK4L91yOWeZlczs_G8STNLIwcYSMhwKz6fBZnIelmID6Z8QGB-0BR5H5W_8rY0o4qr6mUZkt7zY_NxMvsWev-sLsemOkT3xRpuWueDpt0RtXp7wukYaQ=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Customer Experience Manager with Dutch",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeLBcVY6sRL-0XMa5oE6oB7e5sebT4Y_MJA7Y4njKFlG7Q_bt_l79bWZDFJT8ARPPk7VDFZXLUyZT1InMXwBU1OHsjd7OiDcvC6k_PJV-jZMwzn41JPBuOX_L-syOGH-PyTDD4ltgNlycO-9IEd_tFRnjOaaaDH5mrNud98VcJPrC25hubna69j3J4taAmD8K-MovP54nP-DSJUO4kpaecb1O3TFEwDZlvYZSzWLLIIi1pjsbOu-0anIE3u1uhCRpN5uH8OjQ3lPILLT5fUt2TwqHvOInwfqOvjehLR8TkNDr8yQrmFZxr5IBHP4juAkc6zerjc1H0FNclEp8SMCMz5s4WKLAzUEPX3xJ4kDpTcvR2m7lQsT8W-yc_FK34nV0RCopxXNiyVs12S1p1JYd_l0DH2gMbImPeJFfm5XZMc1ublBkrOTfNdR9ufX0ZbK22-uCoxhoaCAWhuLGQgjpdIcFPH8E3kXbgsiDQ-xQaqjt7yDIQsKbZ8vu5m_MDolsCohztD6jYkH5sYknDyAS2VK50HuT1OYkTnY93XA8adqHnAFQ9gXOIcNHvlcyjWW9wUtsr0CevdAAB84ionv8n1sYeLZM6LE_Gvi0Rtv9iglWn9azN8VDarbT95qRkT377ZniO-VnvMQcI4uqVsjav0hRgIAOT4BYs=&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Global Process & Control Improvement Manager",
      "company": "HEINEKEN Kraków",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeK4Ua-GAZKMJzrCaubrT9mtvUK-6LFgdN1o30UP3gH83eY7Rt7z2s6Qd3cWkKCwklH-M71U2C9T22slcis0tb5jmJyyK7l8X9HIcd_7SsyPs0xcp9NhXFiaaSeZXobBtj2RC5xIKt9k5HTRtwtszj4LCpwUelgW3m1JeHLy15Gd1NqkM9gE3Bdq1HraxGwAGL0o4eOBjBu8k53eGTS4oK2aL988Wee0Dps13IOy6SLMMm7b7kd0IPPKoICcF6tRE9hbXHvEiMuR41MAh-pzNkraGKqFXQr8AR3dlTCV1vs6FjIcgwPZFIv_6CZNQkp354_Wwo2kV-CfxL-r4RhPIcRVi9SQnZJj4A605qAZiDH0Fp7tV62C-aUR9VGH2i3AndI3zFJ-HANlSytQGeQj9OjkisLQ1wGyCUCdH0Hss3T9-BxkMiOrJYZ97fUHbnTRr2SMzBEUmNrEaIgNoPH3Kc0rkw7C6MncRei1K8HbScuLpV2DrBGv7ULRZj4VzUJHQVMFCoYO5qm9UcUkMCp4JA5yTc_kqSwk1SmdKjOvaITICmC-m5m5EMes12S9o0woH0IIH5x9HbRYKdwc63860EKyUD0FtV09-3PWmf-CDcztwyxELtlSsqfRPC3yVYiqfWrb4HNZhL6yPd-452W7fKaQA6o9gfv2ow=&p=2&fvj=0&vjs=3"
    },
    {
      "name": "Brand Manager",
      "company": "Laboratorium Kosmetyków Naturalnych Farmona",
      "urls": "https://pl.indeed.com/viewjob?jk=b84538d5abc290d2&fccid=1fcd609f9838946b&vjs=3"
    },
    {
      "name": "Brand Manager",
      "company": "HEADHUNTERS GROUP",
      "urls": "https://pl.indeed.com/viewjob?jk=962d397e2ef9ab2c&fccid=2626896dbec10c5d&vjs=3"
    },
    {
      "name": "Social Media Manager & Strategist",
      "company": "Funktional",
      "urls": "https://pl.indeed.com/viewjob?jk=a7f84b363a02db6b&fccid=014e16512e5e89bd&vjs=3"
    },
    {
      "name": "Manager Invoice to Cash Projects",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=b08c9f748b562d82&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Creative Account Manager",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=ac0a92d4bb9d6c3e&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Senior Brand Manager CEE",
      "company": "HEADHUNTERS GROUP",
      "urls": "https://pl.indeed.com/viewjob?jk=fee091c2def42c3f&fccid=2626896dbec10c5d&vjs=3"
    },
    {
      "name": "Sales & Marketing Manager",
      "company": "Sim Property Group",
      "urls": "https://pl.indeed.com/viewjob?jk=8bfeeac3a4fc4fbd&fccid=dc84386765200d3a&vjs=3"
    },
    {
      "name": "Demand Center Manager",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=919eb17bd825b859&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Freelancer Publicist",
      "company": "TOP Agency",
      "urls": "https://pl.indeed.com/viewjob?jk=6a37f8dab922c48a&fccid=95ba0f0f3bc059a8&vjs=3"
    },
    {
      "name": "Marketing Automation Specialist",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeYC8izo8kVgSPErBS1SFXQfIRrKfg_28WJqNWhTKLQpbZkDzclwr1s-TPqGu1xZOBz3jHgI3oHQWRVU18oGiu_bHOCMNGkV7Sh5MoCy1VbIEiolI03E0sm-ITy2ybFvRJPRlx51CzN96OYe0e-3vatxvJr5GkQkeXzZ31oiSZpgWC4qiU0KuLYR0evkzwdmlHe-PVILdWgqEWhXR6N5IzdWOvaWUS9SS-E8t9rkQE50jQS-A2UOApWTM62XenowKrG0PMOiubBPnJFxXzF5ZnTc-2g3ImasX3SoJquBoiG5daQiKIN28-V1-1muUWl_9V4mgplJ3rx2BeFLvSuTcbMwqurTircErYu618jhkKdURV0N7R9rCf0YTh2Bst-EffcyPdRWgZ32mE06uSzAPWBAp_XfV7dGngb9qqHPdmZAnp0Vcb79L5VZ-apERECgDe2BciE-0GIbBCpjB2L4DgIHkrgcGGnVaI-AVf3Y3Ivdw41f_5PO1R7QPH_hYa7zNgBWy6bdb7Qy3CT5H9WicooNrPh89Vp2CTEMcu7tQZHa4mrk0XD60nCdQkYHEwg0H3GukKcTOhE96xuL7He04dH8tm8BtrLGx47OEU_Vm00CUvHEO2bm9o44nAm6xPa3NvhVAmCY8mJMaffK4zbpoS1&p=13&fvj=0&vjs=3"
    },
    {
      "name": "Manager - Talent Acquisition Global Sourcing Hub",
      "company": "QVC",
      "urls": "https://pl.indeed.com/viewjob?jk=cc1d503d88ad3105&fccid=8a4535c948d32e2a&vjs=3"
    },
    {
      "name": "Business Continuity Manager",
      "company": "Aon Corporation",
      "urls": "https://pl.indeed.com/viewjob?jk=2608efab4392be9b&fccid=dc08cb56cb2d6276&vjs=3"
    },
    {
      "name": "Senior Manager for Pricing Operations",
      "company": "Kimberly-Clark",
      "urls": "https://pl.indeed.com/viewjob?jk=a7085938094821c3&fccid=d5e3dc20c284054b&vjs=3"
    },
    {
      "name": "Manager InfoSec Training and Awareness",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=a92c714df5563e3c&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com/viewjob?jk=f906cf3cfe85651a&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "specjalista ds. marketingu",
      "company": "Sapiency",
      "urls": "https://pl.indeed.com/viewjob?jk=3ddd06dc42ba99da&fccid=82c3403e8ba49adf&vjs=3"
    },
    {
      "name": "Quality Engineering Manager",
      "company": "Qualtrics",
      "urls": "https://pl.indeed.com/viewjob?jk=eb6943dff959f1f6&fccid=10db9f943841d5db&vjs=3"
    },
    {
      "name": "Marketing Manager",
      "company": "Jobs",
      "urls": "https://pl.indeed.com/viewjob?jk=cbe10898719a1fa0&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Manager InfoSec Global IT Controls",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=0ee8f87a7d997391&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "IT Program Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=ef3c8c56cc9c5b26&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Technical Program Manager - Customer Experience Team",
      "company": "Qualtrics",
      "urls": "https://pl.indeed.com/viewjob?jk=faef51db825a2903&fccid=10db9f943841d5db&vjs=3"
    },
    {
      "name": "Associate Project Manager",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=b4b92b1dc5b646f3&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Clinical Manager (project management)",
      "company": "Kimberly-Clark",
      "urls": "https://pl.indeed.com/viewjob?jk=460e7744e2c6359b&fccid=d5e3dc20c284054b&vjs=3"
    },
    {
      "name": "Information Security Manager for Third Party Information Ris...",
      "company": "UBS",
      "urls": "https://pl.indeed.com/viewjob?jk=ea9bd601f4e36f21&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Marketing Automation Specialist",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=3e0fbc67c95568e5&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Customer Experience Manager with Dutch",
      "company": "Shell",
      "urls": "https://pl.indeed.com/viewjob?jk=260feccc0aa5f271&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Crisis Management Coordinator - Global Emergency Operations...",
      "company": "Aon Corporation",
      "urls": "https://pl.indeed.com/viewjob?jk=77cec73e8ec632b6&fccid=dc08cb56cb2d6276&vjs=3"
    },
    {
      "name": "Scrum Master",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=15ce215428f32989&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Manager Supplier Partnerships",
      "company": "Pontoon Solutions",
      "urls": "https://pl.indeed.com/viewjob?jk=40fc0f60850bd967&fccid=4a96194bafd8dbb0&vjs=3"
    },
    {
      "name": "CRM & Lead Generation Manager",
      "company": "Goodminds",
      "urls": "https://pl.indeed.com/viewjob?jk=3ae9b6871fb43fab&fccid=11f0d4057730c23d&vjs=3"
    },
    {
      "name": "Global Project Manager of Talent Acquisition and Development",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIeLBcVY6sRL-4D6o1idFR5weTHlYU4GwZ9Mx9yiW9uWdgae6WNBkYnK6RKEydEEqVr03gwjyRFE_iqkTxJ-6BcUFf6D0SqFZKEQmac_bnAGkZEEpzFAgyw_hccfEbnQgMN0SV8i1JAZQdJEQfV4Vk6xrtcTnjFRqIEIcHvHKMk2LB-cUd5rx1TweJXoaZyKVFVcGgCEpCMTpTegiFcO5HGgAy6sdkzzUNMgCozf79uRtMqEtzyaJXNaHLucoGEW3F4Jb-pOe8B_w-Vp0sfGZBwkcaD1FuHycJxgGffHkGRL_jaYp3OTNgIsS1VAaHBOk-bcUKtNUYSHgSnje6XAr3DJA3cqZa7Tzae4uKe7fwV_9PcQ_0kHL53X141EnazCHvqFmByIErlbiTd2cJdaunaFlkspRJNhII1yAF7jW5tpMW5R6MTSRgoQdX-SOEfcd6xdqwcbCWcfPxlcgEcWuhc3YrnlhylX7O-4RgYRYpxFedYfFrMc7NALnyk8_FSEh1VXke96-NZLIZlz4u4qX2AI3whTLGFfvNzGDF65stvGsDCribX7pbr2bGGHoNQxYGG7FJTAfvPmXrl-l4JAyGOxOf6TUqtO7bxsEpINA4gA_BbziTAolX3BeCwxYR7CivQ374upTUuf_xPwGzbBPEYXG3Qqe0qwc2zemJUhWk7U4XDC2PgCpDuk&p=14&fvj=0&vjs=3"
    },
    {
      "name": "Specjalista Social Media",
      "company": "Brand Bay",
      "urls": "https://pl.indeed.com/viewjob?jk=4a45e26023b54fd0&fccid=5283c6207741c7cc&vjs=3"
    },
    {
      "name": "Systems Specialist",
      "company": "MOTIFE",
      "urls": "https://pl.indeed.com/viewjob?jk=571f6f1803a8cb8b&fccid=4c6f3b2aba1982e4&vjs=3"
    },
    {
      "name": "Marketing Automation Specialist",
      "company": "MOTIFE",
      "urls": "https://pl.indeed.com/viewjob?jk=3324d396b39ca815&fccid=4c6f3b2aba1982e4&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "HCM Deck",
      "urls": "https://pl.indeed.com/viewjob?jk=16eeaa9db7daf93b&fccid=183a60f9194ba681&vjs=3"
    },
    {
      "name": "Head of Customer Service",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=8f76443813697e66&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Tech Project Management",
      "company": "Verita HR Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=518d8eb2e76db2c4&fccid=e265b982603f34bc&vjs=3"
    },
    {
      "name": "Engineer IT Consumer, GC Solutions",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=56bb6e598e56d1b6&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Marketing Procurement Specialist with Romanian",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=a5c4c3351cbac009&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Master Data Manager",
      "company": "Antal International",
      "urls": "https://pl.indeed.com/viewjob?/Antal-International/jobs/Master-Data-Manager-61743fb83697331c?fccid=3a29873f6a9d4607&vjs=3"
    },
    {
      "name": "IT Functional Analyst- SAP Manufacturing",
      "company": "Kimberly-Clark",
      "urls": "https://pl.indeed.com/viewjob?jk=045944cb19a51e03&fccid=d5e3dc20c284054b&vjs=3"
    },
    {
      "name": "General Legder Manager with German",
      "company": "Antal International",
      "urls": "https://pl.indeed.com/viewjob?/Antal-International/jobs/General-Legder-Manager-German-1801975e4fd774d3?fccid=3a29873f6a9d4607&vjs=3"
    },
    {
      "name": "Machine Learning Engineer (Artificial Intelligence)",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=33bf15f77e79435c&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Lead Software Engineer",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=2ce5bfca8c216a6d&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "InfoSec Senior Analyst Risk Awareness",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com/viewjob?jk=9ae39cf3803b8f46&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "SEO Copywriter (Spanish)",
      "company": "Azimo",
      "urls": "https://pl.indeed.com/viewjob?jk=b19bfbd17aa598d6&fccid=61900a33c3bbbbb6&vjs=3"
    },
    {
      "name": "IT Recruitment Consultant",
      "company": "SmartWays",
      "urls": "https://pl.indeed.com/viewjob?jk=4e7fa9d37e28e95a&fccid=8ca578989fbb1986&vjs=3"
    },
    {
      "name": "Senior Service Analyst (Accounting & Transactional Finance)",
      "company": "HEINEKEN Kraków",
      "urls": "https://pl.indeed.com/viewjob?jk=dc1558ffc27f7459&fccid=9d3fc2c7bbc80ecb&vjs=3"
    },
    {
      "name": "IT Functional Analyst- SAP Manufacturing",
      "company": "KIMBERLY CLARK Sp. z o.o",
      "urls": "https://pl.indeed.com/viewjob?jk=ce87af0931386f62&fccid=d5e3dc20c284054b&vjs=3"
    },
    {
      "name": "Chief Software Architect for ABB Marine",
      "company": "ABB",
      "urls": "https://pl.indeed.com/viewjob?jk=ca0ec72c8a6c3bba&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Demand Center Team Lead (Global Marketing)",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfAI6fxB1XP-U3OH6mw9KWN3wAQaBk0fvCfDE9rpVbmtO80UBocVrfAvGq9efCb7BiGNrX_wSih22C_6ilcXy7-dGHYX7ibyjKvHb5OKV01XFRMKhC21KycPDfyvqIwSj6F-mXKYXc0wBJ5S_HdYwSGxhgoBf-QPtj6HavWQtboY1o8ih5JwXikr97fz5mxFYzAZ4k0AXl_f-NLOVOp4_WJ6kmCUhKI6hDWe_UtljKbVg298150oRXD_0ajGgPuL7cYPtrvEkcjQbySxpW3CeaedrXcsx1n1VNLSWWwesR2Tb_rNLD9745LCb_DKqQegSpTqjc2jD9XPpImluzqYEPdh8yFD6MuYxVm6fgG0lxI41L7VYYGbamVx7-PJ_-9LmAz3MHZ1q1YOUEmr_vwxcLqI66a2LzVtcY7cPQp3y-92bYn4UJBSdK8AlAmmM5gLDFo3tTd9JSh9g7nOhYJbtHrru1Prkja4ePNPFne8PQEVAjzjOpofmIq7DQTCvISGvu-jbhhLM6idOew6Kt9XSSltqvC3AcUR3s4kci5lSQI-i79F2yF_lE2ZsiIcEHH35uLD4D2cnNDIadCvVs1ISLl6JxBxGWz385LFeKDRRr5unzXo32fhzpoB45i8j8l7nMX5o5X1lj8o4b2aGNRnTHC&p=5&fvj=0&vjs=3"
    }
  ],
  "474": [
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
    },
    {
      "name": "Content Reviewer Polish Speaker - shift support [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-shift-support-online-recruitment_3410770.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": " Content Reviewer Russian Speaker - shift support [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-russian-speaker-shift-support-online-recruitment_3410772.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Dutch Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-dutch-speaker-online-recruitment_3410756.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-online-recruitment_3410762.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Czech Speaker  [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-czech-speaker-online-recruitment_3410768.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "CSR Online Advertising Specialist - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-bulgarian-speaker-online-recruitment_3410774.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "CSR Online Advertising Specialist – Czech or Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-czech-or-slovak-speaker-online-recruitment_3410776.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "CSR Online Advertising Specialist - Lithuanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-lithuanian-speaker-online-recruitment_3410778.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "CSR Online Advertising Specialist - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3410782.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "CSR Online Advertising Specialist – Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-speaker-online-recruitment_3410788.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "CSR Online Advertising Specialist - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-spanish-speaker-online-recruitment_3410794.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "CSR Online Advertising Specialist - Russian/Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-ukrainian-speaker-online-recruitment_3410798.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3426290.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Moderator treści w social media z językiem niemieckim (m/k)",
      "company": "CPL JOBS Sp. z o.o.",
      "urls": "https://www.praca.pl/moderator-tresci-w-social-media-z-jezykiem-niemieckim-m-k_3407172.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Moderator treści z językiem niemieckim (m/k)",
      "company": "CPL JOBS Sp. z o.o.",
      "urls": "https://www.praca.pl/moderator-tresci-z-jezykiem-niemieckim-m-k_3407214.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Analyst - Portuguese Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-portuguese-speaker-online-recruitment_3410800.html#55a0434a5c48694965301d14f33b295c"
    }
  ],
  "475": [
    {
      "name": "Copywriter SEO / Redaktor portalu Geex [rekrutacja online]",
      "company": "X-KOM Sp. z o.o.",
      "urls": "https://www.praca.pl/copywriter-seo-redaktor-portalu-geex-rekrutacja-online_3426280.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    }
  ],
  "476": [
    {
      "name": "Power Grids - Internship - User Experience Engineer",
      "company": "ABB PG BUSINESS SERVICES SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/power-grids-internship-user-experience-engineer-krakow,oferta,1000275618"
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
      "name": "Benefit Policy Analyst with Spanish [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/benefit-policy-analyst-with-spanish-rekrutacja-online_3379030.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Senior Financial Analyst (Business Controllership) [Rekrutacja prowadzona online]",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-financial-analyst-business-controllership-rekrutacja-prowadzona-online_3411258.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Analityk Finansowy",
      "company": "Fagron sp. z o.o.",
      "urls": "https://www.praca.pl/analityk-finansowy_3409816.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Video Content Analyst with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/video-content-analyst-with-french_3422886.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#35149d941c62dd9bfa41889f97912f14"
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
      "name": "Senior Business Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-business-analyst_3383726.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Teradata Technical Analyst ",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/teradata-technical-analyst_3337152.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Analityk finansowy- produkcja",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/analityk-finansowy-produkcja_3427084.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Analityk ds. transakcji rynku finansowego",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/analityk-ds-transakcji-rynku-finansowego_3438138.html#35149d941c62dd9bfa41889f97912f14"
    }
  ],
  "477": [
    {
      "name": "Specjalista ds. SEM",
      "company": "X-KOM Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-sem_3432858.html#a0e5184996d917155857d91461689a30"
    }
  ],
  "478": [
    {
      "name": "2D Motion Graphic Designer (Remote job)",
      "company": "BlueNovius B.V.",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0CxWL70UE5jkIv_noKNDoLK8y6OxADWStmAjDo5aoL6r4ENk27nIgGDBPxdr_lAbfesDglkbXJwCcdQXo9SLFmTVzjlMWDbbM8Gx-Rfwfw26QjghnUCp4nSdSyvCgaRhmJDZzhh5Dz6nO3SL7yyLMOnX9lVJvah5h3MHkBg83MtGplaQxCmEXzeeyUxHYyNj3gYE8Gbol-oisIYwWVyXt5U2_pVrOecPQmqX_46c4BgD9vUXdt3JrdLaHm-N_O1BFhs3Dx6plGW-qpOB8_TnF2kE2zy1jgfD0r3WBA3vc8t1G6IBBMulL7JN-QFV4Vu3exq5ZiQVhgfBn6G-BCsUWc2g8w4PJf-yjGjQgTw8GKvuRoaxHDkJQU8f-YOUukjvvrZRDcUAuPvxNdnGkiT3zrJgsCEVa8Ae1gstgerwLw_BLS90i3j8zXZjuBIi-croYuN88bTvnZL-yhgK1Vp3WZXpoFFQ5hEWck=&p=0&fvj=1&vjs=3"
    },
    {
      "name": "UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=be38b941f8b99086&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Visual Designer (Freelancer)",
      "company": "Miquido",
      "urls": "https://pl.indeed.com/viewjob?jk=775a02a02a2720b8&fccid=b7117f8974cf5be7&vjs=3"
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
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfN7IR8G37v-c8dsh7Me_BkIY-G6Ks5y8G-fdlyy7ndDdukxOzR7ITx1bl3BheSYL1VblLAEcl8nybcIUEszD8HdZEf0_0MAoJ_1NImVgAGT8_uAq4-YmGiHDzuxRB3o5z5QVE1my2Uf7ITfyBEyB0m22LCD-6TI8tEr0TPFP1Kg_rNux71EphA7vHdEqQ3AYdNkVKylMT2-Cd2KfnvwKG3N_NRxe2631G8tQijzltPHqCG-j7kxBAKQcaGXYdIPm1tjJJU1S4-fYreQlFX6wDcd6Va98MiaWcTfE_9uiKt7CA7zY_wZqa_fegskiMTXwImcvMY-c42Ez1t4eVE-u1NATlP_zkbLIfDKngvB18MEKnpfjXd0QUX1zjChmssFzaMPH063Xx2vylqXw71T8REcmMVOU7lKuf2M4Nq8uIRBqqenFqHNGAUl3ropEEYZkSopUXuX4qrhfac0hACWb8-JjERUOu2uEmdhpsD2YG_H-2T-OKyw3nW11cYFpM2n2h3u_oc9OlbtVKIzmJ-goH-aRRZrSXHTKKSG5uwLn2n3hfAZEpKoT73ZXhewCDHPowR2uoDHg5AtImL0TvbW7QXE_4GONfpil4vGFfwraKBvrp_DAy86eqgcz6ps1g1MHlWVvyaX_kuOmv5hwjfcNwZCAFYp4-dOJI=&p=0&fvj=0&vjs=3"
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
      "name": "SEO Copywriter (Spanish)",
      "company": "Azimo",
      "urls": "https://pl.indeed.com/viewjob?jk=b19bfbd17aa598d6&fccid=61900a33c3bbbbb6&vjs=3"
    }
  ],
  "482": [
    {
      "name": "Senior Product Owner",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-product-owner_3413396.html#58ec3734becff61310d83aee90bba3f5"
    },
    {
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#58ec3734becff61310d83aee90bba3f5"
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
    }
  ],
  "483": [
    {
      "name": "CSR Online Advertising Specialist - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-bulgarian-speaker-online-recruitment_3410774.html#f6165d6af9b20f1fdaeaf0cd71539960"
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
    },
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3410826.html#f6165d6af9b20f1fdaeaf0cd71539960"
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
    }
  ],
  "484": [
    {
      "name": "CSR Online Advertising Specialist - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3410782.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-bulgarian-speaker-online-recruitment_3410774.html#02df4f061b58bf8b20fd41aba0c30fb6"
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
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3426290.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "Moderator treści w social media z językiem niemieckim (m/k)",
      "company": "CPL JOBS Sp. z o.o.",
      "urls": "https://www.praca.pl/moderator-tresci-w-social-media-z-jezykiem-niemieckim-m-k_3407172.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3410826.html#02df4f061b58bf8b20fd41aba0c30fb6"
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
    }
  ],
  "485": [
    {
      "name": "Specjalista ds. marketingu internetowego",
      "company": "New Men Style",
      "urls": "https://pl.indeed.com/viewjob?jk=707d9d7aae83b23b&fccid=eb74c6649c374260&vjs=3"
    },
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
    },
    {
      "name": "Technik Serwisu",
      "company": "PKE Polska Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?/PKE-Polska-Sp.-z-o.o./jobs/Technik-Serwisu-985e717835e5d7be?fccid=03a872a0073870f1&vjs=3"
    }
  ],
  "487": [
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
      "name": "Service Transition Manager",
      "company": "Mindbox S.A.",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0BaDYljZMhkKDnc4AqWj36yHFwjJEy2Z3ebLnKcx54z9u5ukLvEIsA3ULbuXq8IiDyt5e0lZSyqY4Q81MG9RZSAUJKqJ1QdJmovzl3GwSFf8JHEjRNodKizTsgrXDfLxQ_BHqhalxjpajpa9-Hf_3nh1e7jyr0l8svGjESyDOCZ2RmnKmyg_SrRNctl6Jw83iHcVTAB0_UygCGrakX_rGmZLEekRoGAFP_O_yba-8bEfEyg1oxa6oMR2Z8BkqWQpT58VpBvUo70ZbSdKliDEfbN82McKGvdYWAw5MmfbSStc_onZAKEkcPEbJgbebu27y_G0iiHEpWpDPQ8sQi6ue4YJ6ShekTirELuo2mUMiuh3dCThhJ9dShvDtcn8rvkEjT6lll_qCoRGdbHKE0PIFdkQIexJvNYj539NfZYJK_3Y5faO1x_qZ-kojGa1DkVIiQJs0otB0jOUFNy0NDouBOWMmQlNIbOSN9Ym5MC2GcqCDXjbde5ht6im1HxtnlLHJ5msGiDejKmcH3KZBcEYYCfYeliYkO75zKucFcNSpMwap6FZw9GbDnPT_24ok7ka-wQghZFYhwkkBIBa4UzNJNdpaPjZmHY0Bp30NJgaVG6qmC4hdD3KiwBFBDILgBPRIgqwYHiUj_f4nrUo0BJChoBBkzzjOCeqTKA0xAIJ8JmxBif6FwZZklzRNKt5ZON7Ac=&p=0&fvj=0&vjs=3"
    },
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
      "name": "Project Manager - Infrastructure Delivery",
      "company": "Akamai",
      "urls": "https://pl.indeed.com/viewjob?jk=a6dcf4accd3d66de&fccid=9c094dedde5fb497&vjs=3"
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
      "name": "Security Engineer Zscaler",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com/viewjob?jk=3add5ef8110732b9&fccid=0a4ad7ebd9b0c8ee&vjs=3"
    },
    {
      "name": "Digital Analytics Specialist",
      "company": "Bidroom Poland",
      "urls": "https://pl.indeed.com/viewjob?jk=310b6c5353e175a7&fccid=3661982007b43fee&vjs=3"
    },
    {
      "name": "E-commerce Marketing Specialist",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com/viewjob?jk=81c413859cfc1c03&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Kierownik Robót (Solution Deployment Manager)",
      "company": "Thales Group",
      "urls": "https://pl.indeed.com/viewjob?jk=71ab7b696762fe62&fccid=b920aab5fd60595d&vjs=3"
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
      "name": "JD for Senior Consulting Engineer DC Compute",
      "company": "Tech Talent Consulting",
      "urls": "https://pl.indeed.com/viewjob?jk=8cef2a87c2d17f6c&fccid=3bf38324457ca337&vjs=3"
    },
    {
      "name": "Senior Software Engineer - React",
      "company": "WP Engine",
      "urls": "https://pl.indeed.com/viewjob?jk=1979abe89866df75&fccid=966a8dd715d10eb7&vjs=3"
    }
  ],
  "489": [
    {
      "name": "User Experience Designer",
      "company": "Akamai",
      "urls": "https://pl.indeed.com/viewjob?jk=b3906c9801f98ae2&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "User Experience Designer",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com/viewjob?jk=3639792924b8f77b&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Junior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=05561223627ea708&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=be38b941f8b99086&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Product Designer",
      "company": "Motorola Solutions",
      "urls": "https://pl.indeed.com/viewjob?jk=dc9bd51d858022fa&fccid=22ec6ef3cc441ac2&vjs=3"
    },
    {
      "name": "Senior Product Designer",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com/viewjob?jk=5834b9e123fc4492&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "UX Designer (Finanse)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com/viewjob?jk=e92f69f00f53fe48&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=e60f52063a358e4d&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "UX Designer",
      "company": "HR CONTACT",
      "urls": "https://pl.indeed.com/viewjob?jk=ef13b2cb2726990e&fccid=d63766611dda30e3&vjs=3"
    },
    {
      "name": "Visual Product Designer",
      "company": "HR CONTACT",
      "urls": "https://pl.indeed.com/viewjob?jk=59f860b326efd7a4&fccid=d63766611dda30e3&vjs=3"
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
      "name": "UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=be38b941f8b99086&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Senior Javascript Developer",
      "company": "ProData Consult",
      "urls": "https://pl.indeed.com/viewjob?jk=4a6eb7a2b0ff7fed&fccid=fa336ade0bd80ccd&vjs=3"
    },
    {
      "name": "Frontend Developer",
      "company": "ManpowerGroup Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=18f63657b6889da6&fccid=1a17983a910f73d8&vjs=3"
    },
    {
      "name": "Web Developer",
      "company": "Working Smart Limited",
      "urls": "https://pl.indeed.com/viewjob?jk=5527b145aa3574c1&fccid=eb81f98123301883&vjs=3"
    },
    {
      "name": "React Developer",
      "company": "Making Waves",
      "urls": "https://pl.indeed.com/viewjob?jk=d3f63dcb1100ffc1&fccid=eb14cce8232d9a6c&vjs=3"
    },
    {
      "name": "Frontend Developer",
      "company": "Experis",
      "urls": "https://pl.indeed.com/viewjob?jk=70625b732d603d00&fccid=ca2b244e2a15ca5c&vjs=3"
    },
    {
      "name": "Software Developer Level",
      "company": "CRIF",
      "urls": "https://pl.indeed.com/viewjob?jk=72594e5ab1bb228c&fccid=7a2798bb3678d68a&vjs=3"
    },
    {
      "name": "iOS Developer",
      "company": "Transmission Dynamics Poland",
      "urls": "https://pl.indeed.com/viewjob?jk=24249325e6f6d631&fccid=d16fad9e34ef4b1e&vjs=3"
    },
    {
      "name": "Software Developer II",
      "company": "CRIF",
      "urls": "https://pl.indeed.com/viewjob?jk=1349d8bf9d6ef3f9&fccid=7a2798bb3678d68a&vjs=3"
    },
    {
      "name": "Front End Software Developer - (Krakow)",
      "company": "h2o.ai",
      "urls": "https://pl.indeed.com/viewjob?jk=cfbb605157c80b53&fccid=41a5a100828398e1&vjs=3"
    },
    {
      "name": "Full Stack Developer(Polish)",
      "company": "JSAN Consulting",
      "urls": "https://pl.indeed.com/viewjob?/JSAN-Consulting-Ltd/jobs/Full-Stack-Developer-35144e007ff455fc?fccid=e6c493542b893459&vjs=3"
    },
    {
      "name": "iOS Developer",
      "company": "Net2source Global Workforce Solutions Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=9f9718eed86b11da&fccid=96ad8dbc86ceeb6e&vjs=3"
    },
    {
      "name": "Java Developer",
      "company": "DCV Technologies",
      "urls": "https://pl.indeed.com/viewjob?/DCV-Technologies/jobs/Java-Developer-5a540baf80bc3aab?fccid=7a4f1a3ffc0f5eec&vjs=3"
    },
    {
      "name": "ReactJS Software Engineer",
      "company": "Pulsate Mobile",
      "urls": "https://pl.indeed.com/viewjob?jk=8c4d9b58f1ecece7&fccid=b4056e2de55537c8&vjs=3"
    },
    {
      "name": "AngularJS Developer",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=30da4a75737f2bc7&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Java Fullstack Developer",
      "company": "Sii Polska",
      "urls": "https://pl.indeed.com/viewjob?jk=9723661dd6a44c00&fccid=291f67da0c0c0d67&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com/viewjob?jk=e60f52063a358e4d&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Full Stack Developer",
      "company": "Try Codnet",
      "urls": "https://pl.indeed.com/viewjob?jk=8017d91a0e626e42&fccid=6938dd7585d85504&vjs=3"
    },
    {
      "name": "Mid Full Stack Developer",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=b17119c38db3e8f2&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Senior Front-End Developer",
      "company": "Webchefs",
      "urls": "https://pl.indeed.com/viewjob?jk=d1154792805ef342&fccid=458dd1bc5b9928b4&vjs=3"
    },
    {
      "name": "Microservices Integration Engineer",
      "company": "Amway Global Business Services",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIdMwMc7ezk_p_PkoolEgBmKR83BBGTCCDQM4nphSgDarbGN7399hkJjUAmutZUxvjS5Hegv_4q140K2yUWF6FzczI2CcwdiRvxw6xp8_WdNJeJ4bh8MJGBVkVZ_FaO-HQZyrlE0_euFoXaLj6oCNEpkIB4RcHnSE83hxorylVPVw5ejxgtDK4jnEfWGZc26LuCNuifjXVApFJJ1yePzZf9qoNottAuLflcX5NBWcthV-rn_8v_fsdln0eVAdwczPAT0hz7hFWHFPXkirENymEX-Xq-w0N_DCQU85sg_Fjb7BunZdABCEY1HT0J4GwGaFs8a45lfQgqmvdlZKD0qt1omsqP_WysmwtHfvuC1eF71Jf93OBvYgw34kCu4EBXGujLep9BtQ5-wPDYVpkbg1Rxtvn1u_W8FI2aKzVivT6SoUJr-V3_nmjaOkntFOmB86jc-Ymgmi8ZAJgr1DijWLmfuyYSpaTUOTjdwmmyg-k2DyPWG3SNgSa_dOZFIqIMcfdYpVewhhgiLcyTTil4TP09TKwWWmzqX56RqcXYHVC8kv4qSzzuL6EvlM3Nh1FpklackTzF9rT4387WiY2vG4XJETcryNqejCK4I_2iufxUIr1xuhIBy43LYf-j3kbuQSPvOLvNbFpoCiUolx_rUQWiR&p=10&fvj=0&vjs=3"
    },
    {
      "name": "API / Microservices Integration Engineer",
      "company": "Amway Global Business Services",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIe8teuQF_6LdakARRgEohZHICrnz84_fBqEj0p7PLXIfltdUz7pCh8GeAQhGighDB6NuU9OhZEJ8uMhn6SjQs7DJ3DxbvhNiUx78MlAqrIciOieXXIVCIJr-KP5mySMLUnnH_AbaX0JnOYrLs33Ffruy3q4AsMJ-Bm_92KEyZQLbLE3YSRlEn-IWRTRgUzZH5zUzXuHgI_9JSERSxO2f9x6w5M7F9EFSCI2xWoOvEyTH67W7Z6gOhfGRqtSvQk7SkwMu18pO-kv3pmmYOAAZ7vcZWH6UcqLhDKhQy73drIDTc_IZZ2Vjt79uEfnPXxq-EKmOmsxh0_4ApLdNwxjfNcXNQYxL03d7EhAd4kWwLfRTUzKZtVJuLHMavl54QdjwNzfm0IybJTwIg8TyGNlF8KJYb5WRDuPM3JU4yHjTc9D3BsYvnEtQ-d9wsy8FQCQJX5XpLUSLKOek7Kn3TxJiCs_T4RSM87fI3tz4J2CZk6iIPQn2GdDMgHlfeGENizGsUZEVsIDVhUM9g9dSmm9LIc5XwQVRdNJULH9E2eFJzR9DMGbk_FmVLlqsoPDUmTitH5w0YRbAtmHioLywUa9E9eg6GSmyi79MJbqMcKcQv91rzromGavEctQO3GcFVBl6zAtTAaR5r-ccgTRJHNA-uf0ib0gkh6MdpU=&p=11&fvj=0&vjs=3"
    },
    {
      "name": "Microservices Integration Engineer",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIedI4sSciZdaKzWKVg_T1zuyhd9feKXm3basbMG59gzq1gS21GAqSJ_K7dFzUvkpHWX6E7e-Ngf4uiCTPQmtne56-1PleQl1SSYQ2dqJOYgc7M-lBwrceXYV_lYt-vLkyaf1egGirPb0LREFmV78HaiFmUB1Qt1uCHD8gWfPOZsTlRNRxuK-RicDSdGYwJ2MVvA1JYF2rg5mJhT-XNu1I1h_boFEhnam9gGIIoFYD2QI1DAnvYorEPiyCPbE5gpzeDKASBLVC4fszkNb-NCge1E5tj-x3dGPx00svtPpHUqP70whWqcCmu_I0bpLdOt3sPlB11YDoMINXw6zwVR2bSIxPwO-N4op4AOPyWsewGMBow9uBTv4TSOETOHX58Ilz0YvKlXKbxglLalpHeDbRiw_bhW-0pYjHXOC98awAhAYI8DCDL3U6K_aUkWIvsGXd9bbIWK71C8ViQdRmC9UqgETqBbeHjq998jo0Jz41YyBDuwj1nz9VUL70-LSvcOSKLYZJ0bP_C-JTti-mjPKELVJybeyfhRNpjAvHPEYPhz9I2NnOsLZxtuClVMl5ie1Z5HMGkvlTpFQUSuRjmVJHl3qs0JYIBbDrqGNCx5boA43cPGoOfx7mRG3g2pq4VIdHq_0xIuxmQW9Gd9l6xAtLvOhdv3154Obvdm0wzsazM2VQ==&p=12&fvj=0&vjs=3"
    },
    {
      "name": "IOS Developer",
      "company": "Hays",
      "urls": "https://pl.indeed.com/viewjob?jk=e6bd5b7e408cbb4d&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Microservices Integration Engineer",
      "company": "WIP jobs",
      "urls": "https://pl.indeed.com/viewjob?jk=07883aba2d9d6d92&fccid=e26768993f4f83e8&vjs=3"
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
    },
    {
      "name": "C/C++ Windows Driver Developer (f/m/x) (relocated to Germany...",
      "company": "Avira Operations GmbH & Co. KG",
      "urls": "https://pl.indeed.com/viewjob?clk?mo=r&ad=-6NYlbfkN0DVAdzec4bw6rQ4FO3PDdwz3gCZ43d7Gsr17jnu3o1g5JTNhwfE3RbVHY0lVPlBBqNPXOIYj1Ezd9hghtzsq8nw-lyWiuVbADOnxDLALfCXrZnGGv7njdcRjzViB5CZFWUKexML_nNhSvnAhN2AopMT433wenNf0umcxzpkx3UvxHwN-HEsjUVtKD4uA70odB3aYbwez6KuajPvSH3iE8I34yHqE5bf4yoRMLXAauEy_onXFkgMg3c9vd-VBXpWEiOYOacWsz_8gXY8l1NjWZDqCtPLxEmk1qfeabUK3zgj-VuzRqih-bgiHffjjJlnO7Uxa6nHNnexSfSWOX6UNgus1xAWFNs2s2m9SfAdKvvQLi3xkT76Lh8AdGsrGa9rXYtIviKo3-a2Qi6L7D95raq-2oTSdv6UWLUiHOuPMdh9zQwA1T4TVh3SbPv_tmF36reZz87Um3-i4vipXKofo0l0&p=8&fvj=0&vjs=3"
    }
  ],
  "491": [
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
      "name": "pracownik biurowy z j. niemieckim",
      "company": "Eko-Term",
      "urls": "https://pl.indeed.com/viewjob?jk=e0786907e9723e50&fccid=8ba8ec6375eb2c2a&vjs=3"
    },
    {
      "name": "Szef Działu Wentylacji i Klimatyzacji",
      "company": "Proguest Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=66916e99a659fd5b&fccid=e9bc886abaa81536&vjs=3"
    },
    {
      "name": "Spawacz-Monter rurociągów technologicznych met",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com/viewjob?jk=78e7690d2989ffdf&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Inżynier sprzedaży, branża HVAC",
      "company": "Proguest Sp. z o.o.",
      "urls": "https://pl.indeed.com/viewjob?jk=974674f4ab75c076&fccid=e9bc886abaa81536&vjs=3"
    }
  ]
}
