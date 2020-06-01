window.onload = function()
{ 
	var tag = localStorage.getItem("FacultyID");
	var outLibrary = library[tag];
	
	var outContent ={"offers":[]};
	var counter = 0;
	//data=getJSON();
	
	alert(tag);
	
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
  "WGiG_B ": [ "1", "2", "3", "4", "5", "6" ],
  "WGiG_IG ": [ "7", "8", "9", "10", "11", "12" ],
  "WGiG_IiZPP ": [ "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25" ],
  "WGiG_IKS ": [ "26", "27", "28", "29", "30", "31", "28", "32", "33", "34", "35" ],
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
      "name": " Junior AIOps Software Consultant  NOWA ",
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
      "name": " Junior Fullstack Java Developer ",
      "company": " Metrosoft ",
      "urls": "https://nofluffjobs.com//pl/job/junior-fullstack-java-developer-metrosoft-krakow-9okg1hms"
    },
    {
      "name": " Voice Support Engineer ",
      "company": " Collabera Poland Sp. z o.o. ",
      "urls": "https://nofluffjobs.com//pl/job/voice-support-engineer-collabera-poland-krakow-sqeybypt"
    },
    {
      "name": " Junior RPA Developer ",
      "company": " ESGROUP ",
      "urls": "https://nofluffjobs.com//pl/job/junior-rpa-developer-esgroup-krakow-lacjmjb6"
    },
    {
      "name": " Atlassian Support Engineer ",
      "company": " Mindbox S.A. ",
      "urls": "https://nofluffjobs.com//pl/job/atlassian-support-engineer-mindbox-krakow-coitnsbl"
    },
    {
      "name": " Specjalista ds. bezpieczestwa IT - Pentester ",
      "company": " Comarch ",
      "urls": "https://nofluffjobs.com//pl/job/specjalista-ds-bezpieczenstwa-it-pentester-comarch-krakow-ytgnjgqk"
    },
    {
      "name": " Software Developer in Test ",
      "company": " Akamai Technologies ",
      "urls": "https://nofluffjobs.com//pl/job/software-developer-in-test-akamai-technologies-krakow-r6pfykqu"
    },
    {
      "name": "IT Analyst with Italian & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-italian-english_3376422.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "IT Analyst with French & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-french-english_3376426.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Office 365 Migration Engineer",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/office-365-migration-engineer_3348286.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Senior DevOps Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-devops-engineer_3383732.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Senior Subject Matter Expert – VDI & SRA [rekrutacja online]",
      "company": "ING Tech Poland",
      "urls": "https://www.praca.pl/senior-subject-matter-expert-vdi-sra-rekrutacja-online_3361102.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "IT Specialist (Senior Analyst) (L2 Support) with English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-specialist-senior-analyst-l2-support-with-english_3389752.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Configuration Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/configuration-engineer_3382860.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Senior L2 Support Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-l2-support-engineer_3382876.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Senior Back-End .Net Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-back-end-net-developer_3382878.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Senior Oracle DB Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-oracle-db-developer_3382924.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/it-support-analyst_3401260.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Tech Lead/Expert/Senior Full-Stack Developer ",
      "company": "IT CONNECT Sp. z o.o.",
      "urls": "https://www.praca.pl/tech-lead-expert-senior-full-stack-developer_3327020.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "CE Digital Learning Design Manager",
      "company": "Tesco Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/ce-digital-learning-design-manager_3383684.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Security / Network Engineer",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/security-network-engineer_3326828.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Specjalista ds. Wdrożeń ",
      "company": "Konica Minolta Business Solutions Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen_3373040.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Project Management Officer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/project-management-officer_3388214.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Regular DevOps Enigneer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/regular-devops-enigneer_3378516.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Python Developer (Django + Django Rest Framework)",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/python-developer-django-django-rest-framework_3372540.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Koordynator projektów IT",
      "company": "Porta KMI Poland",
      "urls": "https://www.praca.pl/koordynator-projektow-it_3383112.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "IT Support Analyst with Hungarian & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-support-analyst-with-hungarian-english_3322704.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "IT Support Analyst with Romanian & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-support-analyst-with-romanian-english_3323824.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "IT Support Analyst with Czech & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-support-analyst-with-czech-english_3323834.html#2482b9eba8079ab26612d9fd0b21b75b"
    },
    {
      "name": "Project Accounting Manager [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/project-accounting-manager-rekrutacja-online_3394348.html#2482b9eba8079ab26612d9fd0b21b75b"
    }
  ],
  "1": [],
  "2": [],
  "3": [
    {
      "name": "Inspektor nadzoru w branży budowlano- konstrukcyjnej/ sanita...",
      "company": "IWNISE Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=c4d3b811151bb832&fccid=6fd4736b600aef50&vjs=3"
    },
    {
      "name": "Kierownik ds. Budowlanych",
      "company": "Arche Consulting",
      "urls": "https://pl.indeed.com//rc/clk?jk=e446b6d8a26b391e&fccid=c665c35cf349dff1&vjs=3"
    },
    {
      "name": "Inspektor Nadzoru Elektrycznego [rekrutacja prowadzona onlin...",
      "company": "CAVATINA HOLDING",
      "urls": "https://pl.indeed.com//rc/clk?jk=a53a129d299b13fd&fccid=a5285ec97fd9b16f&vjs=3"
    },
    {
      "name": "Kierownik robót drogowych i torowych",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=373d3be4d9cd22f2&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Kierownik budowy (infrastruktura miejska)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=07959f5272c9a2a7&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "C++ Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=e00def048e72773c&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Kierownik budowy",
      "company": "TOR-KRAK",
      "urls": "https://pl.indeed.com//rc/clk?jk=e18bb3b66aa35ff6&fccid=7b6043ac7d4ffc11&vjs=3"
    },
    {
      "name": "DevSecOps",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=8151141c348c9c23&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "System Configuration Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=f1ca667f6be02989&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "KIEROWNIK ROBÓT SANITARNYCH / HVAC",
      "company": "ACE Group Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=88733c1dac2bec17&fccid=9c25831738ee5606&vjs=3"
    },
    {
      "name": "Security Automation Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=a43b26820e0dc126&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "4": [
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
      "name": "Inżynier budowy ds. elektrycznych (kolejowa sieć trakcyjna)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=547e48eef077b940&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier budowy",
      "company": "TOR-KRAK",
      "urls": "https://pl.indeed.com//rc/clk?jk=45ea9c17e10c90e6&fccid=7b6043ac7d4ffc11&vjs=3"
    },
    {
      "name": "Kierownik robót / inżynier budowy ds. elektroenergetycznych",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=a107187dbce3bb50&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier Budowy",
      "company": "PILE ELBUD S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=b33a4ff0806cab3b&fccid=f5334a5ccb5ec050&vjs=3"
    },
    {
      "name": "Specjalista ds. ofertowania robót budowlanych / Inżynier bud...",
      "company": "controlprocess",
      "urls": "https://pl.indeed.com//rc/clk?jk=33087ec420542a12&fccid=66aef5497a72caee&vjs=3"
    },
    {
      "name": "Inżynier budowy",
      "company": "General Automatic",
      "urls": "https://pl.indeed.com//rc/clk?jk=d4934c90208a0436&fccid=e71c30062ae7e5a9&vjs=3"
    },
    {
      "name": "Inżynier budowy ds. elektrycznych",
      "company": "BDTS",
      "urls": "https://pl.indeed.com//rc/clk?jk=b50ef90fa1e5eae6&fccid=9da4ff6c9be7bd07&vjs=3"
    },
    {
      "name": "Inżynier budowy",
      "company": "Leaderteam Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=646f337b813039d6&fccid=ca2bb2dd5bb0bd13&vjs=3"
    },
    {
      "name": "Inżynier budowy",
      "company": "Dach i Strych Sp. z o. o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=286f2594883a40b4&fccid=36f7cb5ddf6bcdf3&vjs=3"
    },
    {
      "name": "Kierownik Robót Drogowych lub Torowych/Inżynier Budowy",
      "company": "KZN RAIL Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=fe99701bd1cf7c37&fccid=be21bffde79d2ca7&vjs=3"
    },
    {
      "name": "Inżynier Budowy - Mistrz budowy",
      "company": "Przedsiębiorstwo Robót Inżynieryjnych INKOP",
      "urls": "https://pl.indeed.com//rc/clk?jk=1d3dd98638ee466d&fccid=a695411d8904b8ca&vjs=3"
    },
    {
      "name": "Inżynier uczenia maszynowego",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=784586f09a63ea3e&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Inżynier Robót Elektrycznych (branża kubaturowa)",
      "urls": ""
    },
    {
      "name": "Mota-Engil Central Europe S.A.",
      "company": "https://pl.indeed.com//rc/clk?jk=896d7eb034c481ad&fccid=bcf0bf1f4707d6c6&vjs=3",
      "urls": "Inżynier I linii wsparcia"
    },
    {
      "name": "",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=595ec5364fb4bfbb&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Inżynier Robót Sanitarnych",
      "company": "AQUA-SOLARTECH",
      "urls": "https://pl.indeed.com//rc/clk?jk=5f6c128c10f35005&fccid=80c3b7f29739d547&vjs=3"
    },
    {
      "name": "Kierownik ds. Budowlanych",
      "company": "Arche Consulting",
      "urls": "https://pl.indeed.com//rc/clk?jk=e446b6d8a26b391e&fccid=c665c35cf349dff1&vjs=3"
    },
    {
      "name": "Poszukiwany Kierownik / Inżynier",
      "company": "PL-WIDOK",
      "urls": "https://pl.indeed.com//rc/clk?jk=e406076015282562&fccid=dbf779e523c7d93b&vjs=3"
    },
    {
      "name": "Kierownik budowy (infrastruktura miejska)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=07959f5272c9a2a7&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier Budowy/Zastępca Kierownika",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com//rc/clk?jk=8a66c91fd25dfbb9&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Inżynier budowy",
      "company": "Pracownicy budowlani Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=c0bca329583f7a61&fccid=923c922bcd18b6be&vjs=3"
    },
    {
      "name": "Kierownik/Inżynier ds. teletechnicznych i/lub elektrycznych",
      "company": "P.U.T INTERCOR",
      "urls": "https://pl.indeed.com//rc/clk?jk=40d97171e6c3f4af&fccid=7e97b2d9f0af32d4&vjs=3"
    },
    {
      "name": "INŻYNIER / KIEROWNIK ROBÓT SANITARNYCH",
      "company": "AQUA-SOLARTECH",
      "urls": "https://pl.indeed.com//rc/clk?jk=8ee5ff8cfebde752&fccid=80c3b7f29739d547&vjs=3"
    },
    {
      "name": "Kierownik budowy",
      "company": "TOR-KRAK",
      "urls": "https://pl.indeed.com//rc/clk?jk=e18bb3b66aa35ff6&fccid=7b6043ac7d4ffc11&vjs=3"
    },
    {
      "name": "Inżynier do Działu logistyczno-technicznego",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com//rc/clk?jk=c0e0140722009047&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Inżynier budowy – branża elektryczna",
      "company": "Pracownicy budowlani Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=c3eb3025aa50246d&fccid=923c922bcd18b6be&vjs=3"
    },
    {
      "name": "Kierownik robót drogowych i torowych",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=373d3be4d9cd22f2&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier Niezawodności",
      "company": "HRWISE",
      "urls": "https://pl.indeed.com//rc/clk?jk=7f83c74c7de57131&fccid=e834468dcd30ed28&vjs=3"
    },
    {
      "name": "inżynier wsparcia technicznego HVAC",
      "company": "HVACR W",
      "urls": "https://pl.indeed.com//rc/clk?jk=99800f77179232cd&fccid=95624a472b76b809&vjs=3"
    },
    {
      "name": "opis oferty",
      "company": "MAXTO",
      "urls": "https://pl.indeed.com//rc/clk?jk=d8971c1ec7df1655&fccid=6e3a4fe249b84d43&vjs=3"
    },
    {
      "name": "Inżynier Budowy - elewacje klinkierowe",
      "company": "Stone Group Klinkier",
      "urls": "https://pl.indeed.com//rc/clk?jk=2446c33a55ad38da&fccid=678c79800cc6fc48&vjs=3"
    },
    {
      "name": "Data Engineer (Teradata, Informatica PC)",
      "company": "OnWelo",
      "urls": "https://pl.indeed.com//rc/clk?jk=5992d662ea093be9&fccid=f0576bc2d3ad81bd&vjs=3"
    },
    {
      "name": "Inspektor Nadzoru Elektrycznego [rekrutacja prowadzona onlin...",
      "company": "CAVATINA HOLDING",
      "urls": "https://pl.indeed.com//rc/clk?jk=a53a129d299b13fd&fccid=a5285ec97fd9b16f&vjs=3"
    },
    {
      "name": "Kierownik Projektu Budowlanego",
      "company": "DZMT Sp.z o.o Sp.k",
      "urls": "https://pl.indeed.com//rc/clk?jk=43560b633efa15ea&fccid=6d7ee6846966e4c1&vjs=3"
    },
    {
      "name": "Kierownik Robót (Solution Deployment Manager)",
      "company": "Thales Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=71ab7b696762fe62&fccid=b920aab5fd60595d&vjs=3"
    },
    {
      "name": "KIEROWNIK ROBÓT SANITARNYCH / HVAC",
      "company": "ACE Group Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=88733c1dac2bec17&fccid=9c25831738ee5606&vjs=3"
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
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier budowy",
      "company": "TOR-KRAK",
      "urls": "https://pl.indeed.com//rc/clk?jk=45ea9c17e10c90e6&fccid=7b6043ac7d4ffc11&vjs=3"
    },
    {
      "name": "Inżynier Elektronik – Konstruktor",
      "company": "2Bora",
      "urls": "https://pl.indeed.com//rc/clk?jk=1412ed0791ddda41&fccid=81eeaa9aaf867a65&vjs=3"
    },
    {
      "name": "Koordynator Projektu",
      "company": "Alten",
      "urls": "https://pl.indeed.com//rc/clk?jk=b22ca8167afccd81&fccid=f452ff89851e4578&vjs=3"
    },
    {
      "name": "Inżynier ds kalkulacji / przygotowania produkcji (m / k",
      "company": "STRABAG Infrastruktura Południe Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=e67453e66a025c10&fccid=91ff00d5203b00da&vjs=3"
    },
    {
      "name": "Inżynier Automatyk PLC",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=db5567b482026e7b&fccid=8768f8af165a1d65&vjs=3"
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
      "name": "Mistrz Produkcji",
      "company": "Myworknet Sylwia Ottka",
      "urls": "https://pl.indeed.com//company/Myworknet-Sylwia-Ottka/jobs/Mistrz-Produkcji-3435f660d9377a14?fccid=056638f96335ad64&vjs=3"
    },
    {
      "name": "Inzynier ds. Konfiguracji Projektu Softwarowego",
      "company": "",
      "urls": "Aptiv"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=4587003a356b5b6f&fccid=8d390ab1843cb8bd&vjs=3",
      "company": "Inżynier Procesu / Produkcji - oferta z pakietem relokacyjny...",
      "urls": "Grafton Recruitment Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=525bfd3e48fc6f63&fccid=062f71e131e87cf0&vjs=3",
      "company": "Inżynier Wsparcia Technicznego IP - z językiem angielskim",
      "urls": "ELFON"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=39bc98f15c46bec1&fccid=2c4afa11216a4599&vjs=3",
      "company": "Active Safety Systems Engineer",
      "urls": ""
    },
    {
      "name": "Aptiv",
      "company": "https://pl.indeed.com//rc/clk?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3",
      "urls": "Senior Software Engineer"
    },
    {
      "name": "Varroc Lighting",
      "company": "https://pl.indeed.com//rc/clk?jk=562c72dc7345b279&fccid=fb8205a78aa01509&vjs=3",
      "urls": "Lider Działu Inżynierii Procesu"
    },
    {
      "name": "Grafton Recruitment Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=c94802d34ca011fe&fccid=062f71e131e87cf0&vjs=3",
      "urls": "EMBEDDED SOFTWARE ENGINEER"
    },
    {
      "name": "Loycon",
      "company": "https://pl.indeed.com//rc/clk?jk=ea6bcccc13cf9ce4&fccid=7129a6c6479d89d1&vjs=3",
      "urls": "Sales Engineer"
    },
    {
      "name": "CELLCO COMMUNICATIONS",
      "company": "https://pl.indeed.com//rc/clk?jk=0525b90c6ac868da&fccid=b4f11fc1f32b29f5&vjs=3",
      "urls": "Frontend Software Engineer"
    },
    {
      "name": "Grafton Recruitment Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=f9282b19d2eca2cf&fccid=062f71e131e87cf0&vjs=3",
      "urls": "Java Software Engineer"
    },
    {
      "name": "Grafton Recruitment Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=036ee4e6506ca4c2&fccid=062f71e131e87cf0&vjs=3",
      "urls": "Service Engineer"
    },
    {
      "name": "",
      "company": "Manpower",
      "urls": "https://pl.indeed.com//rc/clk?jk=c29a6065307d745d&fccid=1a17983a910f73d8&vjs=3"
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
      "name": "Credit & Collections Junior Specialist with Slovenian",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/credit-collections-junior-specialist-with-slovenian-krakow,oferta,1000211903"
    },
    {
      "name": "Opiekun Finansowy",
      "company": "Stefczyk Finanse",
      "urls": "https://www.praca.pl/opiekun-finansowy_3391926.html#2640201031278b6ee74c7ef09d9df650"
    },
    {
      "name": "Starszy Opiekun Finansowy",
      "company": "Stefczyk Finanse",
      "urls": "https://www.praca.pl/starszy-opiekun-finansowy_3391924.html#2640201031278b6ee74c7ef09d9df650"
    }
  ],
  "16": [
    {
      "name": "Modszy Specjalista - Specjalista w Zespole ds. Kontroli i Audytu",
      "company": "Narodowe Centrum Nauki",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-specjalista-w-zespole-ds-kontroli-i-audytu-krakow,oferta,1000240165"
    },
    {
      "name": "Starszy Asystent / Supervisor w Dziale Audytu Ogólnego",
      "company": "KPMG",
      "urls": "https://www.praca.pl/starszy-asystent-supervisor-w-dziale-audytu-ogolnego_3381340.html#c07039fb3869757a41e934ab1e2dd177"
    },
    {
      "name": "Senior w Dziale Audytu [rekrutacja online]",
      "company": "BDO Spółka z ograniczoną odpowiedzialnością Sp.k.",
      "urls": "https://www.praca.pl/senior-w-dziale-audytu-rekrutacja-online_3313902.html#c07039fb3869757a41e934ab1e2dd177"
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
      "name": "Power Grids  Internship  Controlling Support",
      "company": "ABB PG BUSINESS SERVICES SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/power-grids-internship-controlling-support-krakow,oferta,1000250561"
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
      "name": "Tax Analyst - Intern",
      "company": "AKAMAI TECHNOLOGIES POLAND SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/tax-analyst-intern-krakow,oferta,1000201333"
    },
    {
      "name": "Junior Reporting Analyst with Spanish",
      "company": "PepsiCo GBS Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-reporting-analyst-with-spanish-krakow,oferta,1000220904"
    },
    {
      "name": "Junior AML Compliance Analyst",
      "company": "BROWN BROTHERS HARRIMAN (POLAND) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-aml-compliance-analyst-krakow,oferta,7461666"
    },
    {
      "name": "Financial Junior Analyst",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/financial-junior-analyst-krakow,oferta,7462319"
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
      "name": "Project Controls Specialist",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/project-controls-specialist_3389654.html#eba3e508dad11bda6148877019662394"
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
      "company": "",
      "urls": "Majorel"
    },
    {
      "name": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0CNK_eYI_piGz_o9hgXSGx7T7x29qxg32K7jE7Cx6W9IvzrK4I0F6Q0jhCMwvliNANl9aJhI3Oy0OkguyTpkQ2CzVIpuxQRZSQanwFhWJv1hRDe0Jhp8k1QrW6f6canFICqihJYZhtF40hFHoGdq92GH7YbUt75wn7VLcUfH5F3RRDlN8q5ssQdjHrdKlpZE0gHfirruBT0cvtUblAPX0pcuoEc5V5P6Z5ATwmLYmAPAzkQnAj6W0uFM327UZWPULW1h4YgXjoyXMHDGCOmGX_fGcmf37FB8jnDqP0da9CPJkPkXZd9N3EzUq8b0mR4jrVXDaYIpY9T4iwqAUK29xut6zh1ifGA9nZ4FIv-mY73wDhdmddUOxj8csl84RHfHWOlCfw5MljpQjMiRdO7bZdF8Mb1zU4mQa5w7BCcOteDnvve7Tv2EkSR--sErKPWtR0F479kplhzha_YFw4RB_oQRpDnuPb1QdMbsmLAIdItgj5sIiXh-VRr85BnHkMcOhmZvzGtuxG4VdmgCCl3wafdlW3lBYZ0MJZKT3Nb37qALVeEfXEjP9XjgLNCWy7Cg2JJhf0m-aPc8rZUuK3Ld7xKUYQtPp_WrMSl1dWMbZS3BQ==&p=0&fvj=0&vjs=3",
      "company": "Analityk treści (Content Analyst) - język hiszpański [Online...",
      "urls": ""
    },
    {
      "name": "Majorel",
      "company": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0CNK_eYI_piGz_o9hgXSGx7T7x29qxg32K7jE7Cx6W9IvzrK4I0F6Q0jhCMwvliNANl9aJhI3Oy0Cl_L9F-2LIMFCpEdFQ5FSxsHDJGS88GXpy7zawOufZsRAwSQlXKqc4czsP0DSpM1FdJY52HIsIJI_AFV9dNxQB0VJ5N1Ivu7VQH54joQaSFRMJAz0b45EEBVkueUUPoNgRUwnCVyl-PV5XUCFLkMMFU6cmfjENBzUpmBMV9kdHP5RNnJmzzE0mnnAZOmYNWqKXvdHIEEfISUQbTaT6eIJfLRV4B_3ox5nzYYCaJ3vGLdd5Vc_vrkEYq14DyMwlE2PTGNj0WM-tT2JzJxHYibg_ttdV8EDGqYEyuxMUdH8zlWt-RXVhjUeZaY8cul_oR9z-lUlVOS0osJO0GcNSpKkSSsbNMnL1VK1wR61WoExln1DEfmjQfbPoRxbBOsPJCyfVxj0J6oaZS-c-okcZJHyvz01jscYTP2bkrLP-6L-Z_XDvJUZyOcRXcyFbPBPZFgnaP3mB9BiVOg1Sh4RYO31Sg9N2uWNQKB6HCaNeek5KOSMJd8Hsq-J7yu1ctu1JMOnKoMnGRrXAS&p=1&fvj=0&vjs=3",
      "urls": "Pełnomocnik ds. systemów zarządzania jakością"
    },
    {
      "name": "FOODjobs",
      "company": "https://pl.indeed.com//rc/clk?jk=9a1658aee4e0b149&fccid=5f6e0f1f9bb64728&vjs=3",
      "urls": "Zastępca Kierownika w Wydziale Preparatów Bakteryjnych więce..."
    },
    {
      "name": "IBSS BIOMED",
      "company": "https://pl.indeed.com//rc/clk?jk=c584d1a5acaa878f&fccid=d5b1c5b53431984f&vjs=3",
      "urls": "Koordynator Testów"
    },
    {
      "name": "ProData Consult",
      "company": "https://pl.indeed.com//rc/clk?jk=8236f470a9027b02&fccid=fa336ade0bd80ccd&vjs=3",
      "urls": "Kierownik Jakości - Konstrukcje Metalowe - Automotive - Truc..."
    },
    {
      "name": "Michael Page",
      "company": "https://pl.indeed.com//rc/clk?jk=fca22cd6ecdaaac9&fccid=77087bd1709a8148&vjs=3",
      "urls": "Szef Kuchni - renomowany catering dietetyczny"
    },
    {
      "name": "Strategie Personalne",
      "company": "https://pl.indeed.com//company/Strategie-Personalne/jobs/Szef-Kuchni-5cb4f3497d90ba49?fccid=29ef11a4e93c431f&vjs=3",
      "urls": "Szef Kuchni (Lider zmiany)"
    },
    {
      "name": "Strategie Personalne",
      "company": "https://pl.indeed.com//rc/clk?jk=18a47788b2739be7&fccid=29ef11a4e93c431f&vjs=3",
      "urls": "Kierownik BOK"
    },
    {
      "name": "TALENTHOUSE HR Advisory",
      "company": "https://pl.indeed.com//rc/clk?jk=745e25df06f008d4&fccid=7ba137e236695657&vjs=3",
      "urls": "Inżynier Budowy - elewacje klinkierowe"
    },
    {
      "name": "Stone Group Klinkier",
      "company": "https://pl.indeed.com//rc/clk?jk=2446c33a55ad38da&fccid=678c79800cc6fc48&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "20",
      "company": "CSR Online Advertising Specialist - Bulgarian Speaker [Online Recruitment]",
      "urls": "MAJOREL POLSKA"
    },
    {
      "name": "https://www.praca.pl/csr-online-advertising-specialist-bulgarian-speaker-online-recruitment_3355416.html#033436968b55cbe2d68d9311f368a9e5",
      "company": "CSR Online Advertising Specialist – Czech or Slovak Speaker [Online Recruitment]",
      "urls": "MAJOREL POLSKA"
    },
    {
      "name": "https://www.praca.pl/csr-online-advertising-specialist-czech-or-slovak-speaker-online-recruitment_3355418.html#033436968b55cbe2d68d9311f368a9e5",
      "company": "CSR Online Advertising Specialist - Lithuanian Speaker [Online Recruitment]",
      "urls": "MAJOREL POLSKA"
    },
    {
      "name": "https://www.praca.pl/csr-online-advertising-specialist-lithuanian-speaker-online-recruitment_3355422.html#033436968b55cbe2d68d9311f368a9e5",
      "company": "CSR Online Advertising Specialist - Polish Speaker [Online Recruitment]",
      "urls": "MAJOREL POLSKA"
    },
    {
      "name": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3355424.html#033436968b55cbe2d68d9311f368a9e5",
      "company": "CSR Online Advertising Specialist – Russian Speaker [Online Recruitment]",
      "urls": "MAJOREL POLSKA"
    },
    {
      "name": "https://www.praca.pl/csr-online-advertising-specialist-russian-speaker-online-recruitment_3355430.html#033436968b55cbe2d68d9311f368a9e5",
      "company": "CSR Online Advertising Specialist - Spanish Speaker [Online Recruitment]",
      "urls": "MAJOREL POLSKA"
    },
    {
      "name": "https://www.praca.pl/csr-online-advertising-specialist-spanish-speaker-online-recruitment_3355434.html#033436968b55cbe2d68d9311f368a9e5",
      "company": "CSR Online Advertising Specialist - Russian/Ukrainian Speaker [Online Recruitment]",
      "urls": "MAJOREL POLSKA"
    },
    {
      "name": "https://www.praca.pl/csr-online-advertising-specialist-russian-ukrainian-speaker-online-recruitment_3355440.html#033436968b55cbe2d68d9311f368a9e5",
      "company": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "urls": "MAJOREL POLSKA"
    },
    {
      "name": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3357212.html#033436968b55cbe2d68d9311f368a9e5",
      "company": "CSR Online Advertising Specialist - Latvian Speaker [Online Recruitment]",
      "urls": "MAJOREL POLSKA"
    },
    {
      "name": "https://www.praca.pl/csr-online-advertising-specialist-latvian-speaker-online-recruitment_3357222.html#033436968b55cbe2d68d9311f368a9e5",
      "company": "CSR Online Advertising Specialist - Romanian Speaker [Online Recruitment]",
      "urls": "MAJOREL POLSKA"
    },
    {
      "name": "https://www.praca.pl/csr-online-advertising-specialist-romanian-speaker-online-recruitment_3357226.html#033436968b55cbe2d68d9311f368a9e5",
      "company": "xxx",
      "urls": "21"
    },
    {
      "name": "IT Program Manager",
      "company": "",
      "urls": "Philip Morris International Service Center Europe"
    },
    {
      "name": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNVjPnChRBZnMERNPcTynIfRiordl17P-gMfMQwHMh26EBm3_B-ffofw0W_WgiaYv3dNVt5xiTfystMb5n-GbbHbWzO1hidmudbfGrctXGdDNbE4CZL-s5QU9lJTz_hRodHAytAN3j0ajkX8zrPcbaXTcISF3YHOyKSm1HXD4n4mfx28BftjNsXAW4aZzfH_OfVQJloB6oOlLB7VuZao_AeCMRBbD_32WSEXgPqkT17m1f1PRyhHmHjuTL79-EZF_s0UfqwFuptg-x8Nrmzit8DDjOqwPpUIp1jExQLrLTkrCnZxhduClebrYglmSl9JzA7JHNK1Et9dABCkquhZg6aNhCF6VuRFgnB9NGOpg_b-O6S_dXcSQcF7pib-AaiEiXfjYYJhujCEqbHhlcTLGWQuf2MeINpCL5cERrgaqfFaL3xpS_nOFtreDmZT4QFtJkJexKbOzpN6rRQY0Wj5pypnCovwHqCS6lzsf6qHaJ5kYQ9ZNzMvl9_2CNBF3rLx8uWjZivHEkoXUVknFIPnONV5X1mr4QlBRC7qkPjre8oAQjcHrWModPRKtu9xv2rnFyI342Q88njC5_UWapjHkYl9hC-5rYYNEL1pkXkopqSCdiSegE_cBPRM&p=0&fvj=0&vjs=3",
      "company": "GL Accountant",
      "urls": ""
    },
    {
      "name": "International Paper Polska",
      "company": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNVZRp1cHiLMI_vDc3XlIgB_2O2XWO471t0A5Fret3HbcXJgBwLvH6_EWKWKBSP_BKa4loC9KfBTrw0Lm-18r14KnZ9bwzX9XNlQwoDWVg6_Ma2fd6Od_JYXcUwjKRLzjEPS-P86JmzBWHuV0kO6MpciubnyYjS5494YkfOf0E4klvjJX1pFwt9qPLK9Iwok4hYZLT6Xz2sLMbvWSJrrc9BBMcnpHWZN45kyrysVHbO1y6Kt7LiKL9I3dAwdoq7EEcadRZQdORhyu3V5Rho4qFP5YVnkAdyo3WphHYR7g1F3TUq7d41tHVm54BuONtNnSmlit0RgvT-O10jmT3Ks7jF9TY-b3gIQlxpsyAE0qelgDjVluolIJoIxnn2rt8_7l-2t2ipv5Jpmy7KDZ5WuGlryD9pRz052QvqicP-sB9UNgiVxkA3flqLHdZ6QyOIK9eCLKfGqZIdKLbVdwll15gdVINhW22m2LSqDHvCeKpS1SRJA9m3gcosWcwG87hC-hh9s0L4d2miu53eb7Hztv4O2iXVgojDRC_lBrGFXFUZDXqE9jSHUlYArKb-tz5SOBIZXsFtfjPFAc3glimO_iKhUgq8eqesIyYzOnAe-ECN9LQ==&p=1&fvj=0&vjs=3",
      "urls": "Senior Finance Analyst - Manufacturing"
    },
    {
      "name": "",
      "company": "Philip Morris International Service Center Europe",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNV5I7l44WJxP8XKO1FxFzaUhxfk3dmRKPI4WiV3mBwC7n1v3U4TJd2Ayr0IcesdtazwzSOujjYVJKu8xzbpd7Wu345YoEG1PkE8ckOi9yZlJsoRPgOb8MW1PCfb77auxB8QNJcvpDzUivSRbf3xvf20jjp2tmMxH3kJ41aHAC05c-grEq6TdE3O6veJtMviGHUu1JECrDY6e_HbKCfY_7ixHHQoAcU_WKVQtR5DoiU3zkK932ZjNoGNZOdt9KBlGOWy9irfkifLF7vCKkzCGQLv_UkcmzEIH9P4qYazleUE0Mezrt7gFaGRgItmphjlFdFX69HNk8OcjIZQVdr1EpzGLM30erl3WOVO73_Nen5kxLd4F5nqfQvhWXirzf37JhQ85Grp0UAR1VFTyycKvxmry-czFcFQBKtTGvVmLFy0EyP5DeBQ0Fe7B-Ps_1wIiAWJnX6lFOSbbu9XI51nEob9Dyddya_E_WfUNgKjoa-O_kjdb7Z2EAN1kkI11PyOojVD9zREB_ASxXAfvmbIUhTQ_nmXdFnF2ePRRvIlYmyeShn6rnOtHwByiYi5itIkQaBtkv-STDDQorGPUJ6RbJca7Rs0pL-BxREpdBNgE-unn6HQ0H5_dJgSou8uw2lGMI-U_s4v0nd1Bw==&p=2&fvj=0&vjs=3"
    },
    {
      "name": "Specjalista ds. Procesów Magazynowych",
      "company": "",
      "urls": "FIEGE Logistik Stiftung & Co. KG"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=ad5637f900265eef&fccid=c21abee0de715f4a&vjs=3",
      "company": "Transformation Coordinator - PMO",
      "urls": ""
    },
    {
      "name": "PepsiCo",
      "company": "https://pl.indeed.com//rc/clk?jk=4af96b7c26ffbf3f&fccid=2973259ddc967948&vjs=3",
      "urls": "Quality and Continuous Improvement Practice Manager"
    },
    {
      "name": "",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=3a7300b24f986f89&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Project Manager",
      "company": "Grape Up",
      "urls": "https://pl.indeed.com//rc/clk?jk=9dd3e9dfc8a55e7d&fccid=cb56c19f081a65a1&vjs=3"
    },
    {
      "name": "Finance Automation Program Manager",
      "company": "",
      "urls": "Google"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=687fc6faec5bd0c9&fccid=a5b4499d9e91a5c6&vjs=3",
      "company": "Technology Risk Management Regional Lead",
      "urls": ""
    },
    {
      "name": "UBS",
      "company": "https://pl.indeed.com//rc/clk?jk=85a82c4bd4b12308&fccid=1c76c3a36f6c7557&vjs=3",
      "urls": "Cyber Insider Threat Analyst"
    },
    {
      "name": "",
      "company": "UBS",
      "urls": "https://pl.indeed.com//rc/clk?jk=75bf34e864036e30&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Global Customer Service Manager",
      "company": "",
      "urls": "Accenture"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=17fc9d817015d098&fccid=a4e4e2eaf26690c9&vjs=3",
      "company": "L1 Local Product Owner",
      "urls": ""
    },
    {
      "name": "NOKIA",
      "company": "https://pl.indeed.com//rc/clk?jk=6785edf2e1227ddc&fccid=3444e7c94299ba32&vjs=3",
      "urls": "Strategic Buyer - Electro Mechanics"
    },
    {
      "name": "Varroc Lighting",
      "company": "https://pl.indeed.com//rc/clk?jk=8a4ffcfde3f127e6&fccid=fb8205a78aa01509&vjs=3",
      "urls": "Scrum Master"
    },
    {
      "name": "TechRecruiters",
      "company": "https://pl.indeed.com//company/TechRecruiters/jobs/Scrum-Master-4266128d04b816ed?fccid=ed77772f31d2b9b9&vjs=3",
      "urls": "Lean Management Coordinator"
    },
    {
      "name": "Grafton Recruitment Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=8e1c711f30e4c0b7&fccid=062f71e131e87cf0&vjs=3",
      "urls": "Procurement Business Process Expert"
    },
    {
      "name": "Danish Crown",
      "company": "https://pl.indeed.com//rc/clk?jk=53eb823859017842&fccid=f80f74464b038a3f&vjs=3",
      "urls": "Lean Six Sigma Black Belt"
    },
    {
      "name": "Klient Advisory Group TEST Human Resources",
      "company": "https://pl.indeed.com//rc/clk?jk=87294ff6effd6333&fccid=3e41fd04722e7f1d&vjs=3",
      "urls": "Engineering Team Manager (Configuration Management Core Team..."
    },
    {
      "name": "",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=617b22d01e445391&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Lean Finance Champion",
      "company": "",
      "urls": "ABB"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=cd300873b4bc839d&fccid=38b4474838e7b7a1&vjs=3",
      "company": "GL Accountant",
      "urls": ""
    },
    {
      "name": "International Paper",
      "company": "https://pl.indeed.com//rc/clk?jk=c58e63d8e66faa13&fccid=deb8e33e6d024fdf&vjs=3",
      "urls": "Delivery Manager"
    },
    {
      "name": "",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=7665c948967f4ece&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "IT Program Manager",
      "company": "",
      "urls": "Philip Morris International"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=ef3c8c56cc9c5b26&fccid=4141256365dbb7d7&vjs=3",
      "company": "Business Analyst",
      "urls": ""
    },
    {
      "name": "Shell",
      "company": "https://pl.indeed.com//rc/clk?jk=5a29a012e62e2d94&fccid=167aa4ca2fe7d8e6&vjs=3",
      "urls": "Command Centre Junior Manager"
    },
    {
      "name": "",
      "company": "Capgemini Poland",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNXwcrkJgNEIktQW7JpngzbfNPRUgXo76GqgE8BhlxLiqHzgecjJA_BEG224Su8nZ1BVm6I5GC9-jJQqAk2tMMthzXNm4j2FSO5qUeosziUdb5N2G054bLT_uBTN8FGzXAe9pdvMe8rzmu1lVdL8orwMN3ttwz-abNbt1_mFwaqWw-YdNUHeioPEgXnOYenkurFjU5ks74KKbkdxaQDfo3qzBk--3QQtmYFxU7hx2tt3QmVbQOzhWWJNXVGVCRkdx9NAlbvghSgIeaq4a8EfrMPP7dAdxGvNHFCyT_0XjkzTsX85yRBhf6IqnREaCF7UA0I6qPR_UCoxcULh8NFfEBcw0jEAR8IJSq1hCj4CBw6-JZOSvYKXUQf5bAHZO_oG1_XTR1iX_25AZw-jn32-RrMRZRNKirsSXRUR-n8Cq6sGTcof1g3txvF4YKcdAh0hrLcR6FLDGb-QIrZetDBWy-3mi8lkkGQa4TQG9RNJgT8xvJlK001gpdHjJtCunlcrf3An5St7c4hkYntyBZ5X7PWvuxiyjW1SqEGzXs7nzeQmBpW-dedAc--ihaPjQMIns51UNv2dvq0QxP4n1pEJ-mmVcVQd42P6-pnrMxNYCAyv1NfTdbSYqfsLqprbrIndA_N42rWKTolsvw==&p=11&fvj=0&vjs=3"
    },
    {
      "name": "Business Analyst",
      "company": "",
      "urls": "Shell Business Operations"
    },
    {
      "name": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhrtRRmQ3h3W1lCx0Yy-pvYTUWLLJ2xRfoisCz8YC824Ycd_LKy-qdgxnelQGL8wnOej-6d6pMfmRqskaY_BEGmf7_2Yt9AfukNwFo4ipu1sthzm0wk1kqCd2RZDs-8D_8beUtJbw25nMR13P5DCDQpjhw33WJqnvpMuys_Y963lzBP33bMY8S-vdlZIwRAoPBcjap8M5eQY2gDN_v6mjzjhjibipvIy1dVjasdg9P5ccA7x9y7kNVlaDMZd0nG0nnoEm1DWjZiGWL7LV4i7liZMvso_wIxYsIQBoviW2TxQ9gE2OZvdBigfIw5TUmWttuh6YQdoMq87rKDCAIa4rQT3s6dJZnAzUs4hOXix6K_5HKW0V6ub_DkCbUTvrucoCBQXd9Xr8vkuNmXH9vUOxclPH1TYDEI8rmb5g5a1N7VoxxaD1tp6Z1n4oO5sRxxtYA2gEro07ImQI2B1tTxqF4WLzP5vXCVQOQlpF59sZxWKoadyQ-Z-BnFJpnhUA7eqa9LNCmIzvEjgMz1rJR_dtNVjdUsfWr1deu3B-WbAk5ZHU_QL9bBUT7vlnxYBLVpW-HNmhmiqvbfdrpwwBr8wvYM_-cB7G-x_YtdbeiPKI5VbWEtBkCEqG-KnSxE7p2Htivw==&p=12&fvj=0&vjs=3",
      "company": "Project Manager IT Methods Transformation",
      "urls": ""
    },
    {
      "name": "Philip Morris International Service Center Europe",
      "company": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNXE2dIlGGKYL4Xsne8UVUNz-c0nyMByZKGO4d5VbSfm9M0TDpZCT5G6AbXH90z0M_FFNTxJyZSvRQhK3OQoqR2F1rICr1bUde26ePCTYV6avID-xr0aV-ytO6wc56Q4sC9SNcAzJ5B5ZOIzGom_pNJlXnEtCTBylDb-51OPtqxFFqsaBmz6OI-IJU6E0q8Q5TDz3JLz240rO-1G2mWu7Yqu6PzZzg80k4EFm9ednaMUfNUgg6Yq_WuS7wIr7qmNSrwp1FfoXPHfj_KjaM9lbkFh03XV_Vvj7z_nkex567VKj9SA9qXi4PNGAyqUeR02w3bZLrX_tbD-7Nhx1_iinx13g6f6wxBeiemErPd1Skr1v2emX_4_Qev6PaBYb-F65AkwPxYBwCZ53s6NoWVx2XLY5nEemU2DoM9FjLqB2GgSPZhHPVlYLRHXTZpGnkOGd9E74X4AT1qjJDWei20wIQkUkJIjwdqvo-rNnr2uYkdaeSm2-g7BpoWSnFBMm5uVV-QKbZHy2z8Z9egIbMwcKXTFR-m6jvbu_1odX_ToyYk-ZWT58SR6Dk7iaXejQBDNJuahA0_3rfmOZeX8wSEndaeqGcLs4s7cWLv3WLqdEiBH3zRo4G7Wrzyx2qRREgtwpXQ2hjbyFOJyEH2XBrumqVj2&p=0&fvj=0&vjs=3",
      "urls": "Scrum Master IT Methods Transformation"
    },
    {
      "name": "",
      "company": "Philip Morris International Service Center Europe",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNXE2dIlGGKYL8nU629JFCaTcBzNolxP7VZgm6-ASXZECB9i2SjQXWJCk4gY94e78ouluMpc_uuJXAVzbkqpT-Yf_nKJJHh7atpG4Dnr9YdQrxnaGv60mwKv0P7AG2_1Dr9ruqW5dEMQu6L-NRmAb_WGrLsfwkgjHf4-_1tuwu-EwdUwcARx-PuRNTSUW2cYGINr-MtXc4PUkLgb2HpMgeQBd86afBXl5SLNcty26278VIKDHbBaxTL-pi-p-59BpjTRlZb3DQuNQtPAKKLilMeLfebTCxvtGiJnIVv1d2UOTQG3jJJlmDDJ_yS1MxqK2rO2C8Gjm-ccbe7ls30q46TfyE8qlkDXnssFDNKGCxndrpNgy8um2-d4ajv9yWOloxw-uTg5QEJ3hCEOF8mqrQzBNzOsNyDDFj5w6TTaD7qX8WtVvMO-5XMV2Vc6tHL0UloO7WwEDSVPmtyZ9x86y2zUImlnaYudWiU052IIYhazu06IFkAnmJwVCHIiH_CroLATOpxduXYpuHFcnumtci7f7lSGKSaindRzlQGxk00FqI-5pYkRlEEE8CkqZWRXjEMIbo4qnQECSFIm8UkJ0G8Cj48ySqDjKIw4irdiyaStev9D-SqsBdWTHheU-kPTPmrKwT7PSWQr7w==&p=1&fvj=0&vjs=3"
    },
    {
      "name": "GLOBAL COMPLIANCE & TRADE COMPLIANCE MONITORING & AUDIT LEAD...",
      "company": "Cytiva",
      "urls": "https://pl.indeed.com//rc/clk?jk=954c65303ee4cc83&fccid=c46411dafcae5d08&vjs=3"
    },
    {
      "name": "Finance Manager",
      "company": "Zurich",
      "urls": "https://pl.indeed.com//rc/clk?jk=4ef3ca1f88812291&fccid=34938366d45106af&vjs=3"
    },
    {
      "name": "Agile Coach (HID-944)",
      "company": "HID Global",
      "urls": "https://pl.indeed.com//rc/clk?jk=14e08f891e31f4f7&fccid=b51a93b6defb2a2e&vjs=3"
    },
    {
      "name": "Scrum Master",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=69e10406280091df&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Power Grids - HR Operations - Delivery Process Expert Cracow...",
      "company": "",
      "urls": "ABB"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=9fb801811ae349b0&fccid=38b4474838e7b7a1&vjs=3",
      "company": "iOS Developer",
      "urls": "Untitled Kingdom sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=91880854e40498a9&fccid=d922f8f253da1011&vjs=3",
      "company": "Finance Manager",
      "urls": "Zurich Insurance Group"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=fe7b3569335cf178&fccid=40f6e1ba1aac8472&vjs=3",
      "company": "SUPPLY CHAIN IMPROVEMENT MANAGER",
      "urls": "Wyser"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=b86e234b0b7effa6&fccid=4a8713d2b6afc645&vjs=3",
      "company": "Manager IT Methods Transformation",
      "urls": ""
    },
    {
      "name": "Philip Morris International",
      "company": "https://pl.indeed.com//rc/clk?jk=223e749b80e8beb0&fccid=4141256365dbb7d7&vjs=3",
      "urls": "Quality and Continuous Improvement Senior Specialist"
    },
    {
      "name": "",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=e3cb6013f28c01a5&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Senior Finance Analyst",
      "company": "",
      "urls": "Philip Morris International Service Center Europe"
    },
    {
      "name": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNXwuIzjifuV1TBqBPHXQzakrIyV3SXPXKnt23ze787NeFfmaH0SKZ_Dcz6b78o6lsY2ZJp4K6ehPEJ--HmJqE5Q076Ib-X8pv_TbPgwHln_jGo0baiEDlIVVBpMJfzEIPohbts5xAyPLp9lEcfjNfwNvqC-SWN3eC2FMN2OdSV14vbieAEsSkK2bSEY8XCSnak8Lz3g0y9oQnDbnseqErlQ4bDHzajB4Pyasi-OdQ8qc_TS4_ChfH5pcJTx42WZjDVfTCCdzFT--lxp0T32YYIHIfhGH_ZQ-OsOn00KCGS40gqGwtlTI2LHeoPGjEZoyh85qJngtLLsZwY05RJI__B4-z2rWko5K5oBXxEhCAjwZdJN5vUqpqardTZE8sQi2JhN6Gxb2zLsJ14ffAlppY1i53GIhiZm-6MkZhRnfJVnOpeIF-irfCcR4s9gcwJ1BxJXIf9HACeDDeHbh7MTwmmiQPgX1zbMkCYXtlBfsK2-87MjvAqWDWd3bqyvavspF8LpzOsQnZGpmRoEw3lKmoeqDtpScmJVEo2SjGKJJj3_eY_zACbWS5rRMGXNEFOcCBSPQljUwO4CDYN2PN-2Hjt52606y54LHtHM9FifZTKrWti7GbS_hjDK&p=12&fvj=0&vjs=3",
      "company": "Power Grids - Quality and Continuous Improvement Specialist",
      "urls": ""
    },
    {
      "name": "ABB",
      "company": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqDUsVUkfH4EkrN84Gz9KZzMWLpWhyY86qBLFyf-lZ5_fhPr0f8HZO_XXiGXp7BNC9cAkHDzsSB9KHk6nTcvhXp0OjBk17CLkjWapyd5cEZ0akMe5ILURWq4qMyEl4vZl8VsWyLe1WP0tRQgWWcpSXZeRQ5cfMcs8Un9Zgo0zoSR8ApwXQ1eYRrjHU2BgiQ36ueRt9suGYGZVTnxHfQrIYAsSuuhPlLhPdax2fFylG3XUzjDq-BrzEX6Ue_k3ahasvevUnAip2EV5Rhi6qmpAvMJe4R-Fg0GDccGT9kr5KZo7aVFaZO-BcJm2oQaSdknpHF1duFOESh4ePmTPArNspfjEYY32-7WFtBzNkGSbXb_X1L_Te6almdLI_kGT6Rx8cJ2hZ8I3Uh15eT9GmilZExh6ZptSNN_wrs3RPZLCZ3-GL02TJEd5t_yL5nLuiHYRXKy4bq-lpOfbxQJ2qCwHbWLRDvaP4za2mGES43Dn9zxDmHggw6bcxfq9k3zAtEpxSKn_AHOfwEVx-JmRAYEMrq9hOXSBHMYz_3n6QHD5CVh5pVUFsS-HHsFrn888lASJbB43aPlfEk51UCJ_pjJazxnZgCSsXZlNBD4avVWEa_131o_gE0iyoQLfcCvyLHOqevEj2Ka1nCPpLGrm_laIs3GFex061ACoU57sDmUAUy43-Sg0AN2zZhcOiw8kVsYcdM37yhyidjYikLn6hPbVrA=&p=13&fvj=0&vjs=3",
      "urls": "Senior Business Analyst"
    },
    {
      "name": "",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhrtRRmQ3h3W1lCx0Yy-pvYTUWLLJ2xRfoqF6nxpY2qQhCLGj8rZENdl9ZZTZ85wDfXtVZJ1TACBlbQVmW4mwgp40hzR-BQAlkBozycqtpnhNrm4OQWw_fzpeTBIVr-5iTCKCBIpp2JxPlcIXdwGmdGk0KX-O356Pfo2fAxDykQiJbt-ZAj6rgrdrKAke8v6kKJJPT2fQJR6mKJBEymb5iHjFIfeNNNLuci748738_094A9kVOO6wg0n-ysVec3XSl1bjplbk2XF7MAZTYeexCagREpGj8ROGbbSRq2vyQ0Tl_XheySq0nNY7nICTFBQ2ZqTZYkv9CK4wtbA8pKZoVNLZx2N5DTNZRuVUhKPYIrFdHnmTM9UEPTKlUjvcnGu8VP-GgCayVtGR5qkRBtRWHAKSbGLn5MY5fSkEORjV7dyRXL_4OKte3POoYz8i6IMLfQU0A7eHTrtmn0nNCDV6DCbtbOIAl4J-fnKQA26UkuOfxKVdixat4mgEu3Evq20WzcI9MVCT2H41CfzIPJU9c-cqub5Sc4Tx0iOeX9lERaVgqIAX4ZxXuV3bHPact26K2z28oON5cauXI_RBLuH4FKs-qWO3yoUDraLFGDJSksS5YRB-qyOOGfBnwEURqKqnJVfzkQGz8t1HuX9VDmsftvQ=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Fullstack Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=5f5b61ba67911394&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Process Engineer",
      "company": "",
      "urls": "Philip Morris International"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=7e368bdf7ed10e38&fccid=4141256365dbb7d7&vjs=3",
      "company": "Mobile Application Development",
      "urls": "Pragmatic Coders"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=795a6f0c9f4ce820&fccid=c1b8ef077cc6a8a5&vjs=3",
      "company": "Power Grids - Continuous Improvement Specialist - Business C...",
      "urls": ""
    },
    {
      "name": "ABB",
      "company": "https://pl.indeed.com//rc/clk?jk=db7601bb62b98850&fccid=38b4474838e7b7a1&vjs=3",
      "urls": "Senior Procurement Analyst"
    },
    {
      "name": "Danish Crown",
      "company": "https://pl.indeed.com//rc/clk?jk=0c5268c3deb19212&fccid=f80f74464b038a3f&vjs=3",
      "urls": "Kierownik Budowy - Hydrotechnika (m / k)"
    },
    {
      "name": "STRABAG Sp. z o.o. / Dyrekcja Budownictwa Ogólnego...",
      "company": "https://pl.indeed.com//rc/clk?jk=a469b27a8e6b9cb1&fccid=8fdcbe58c8fef8e5&vjs=3",
      "urls": "Head of DevOps"
    },
    {
      "name": "SmartRecruiters Inc",
      "company": "https://pl.indeed.com//rc/clk?jk=f95952d7b035a618&fccid=52cec6b1d315185a&vjs=3",
      "urls": "Project Manager IT Methods Transformation"
    },
    {
      "name": "",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=99054ffcffc4070d&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Android Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=a5022fcbd93500b1&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Senior Product Manager",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com//rc/clk?jk=b1a26f8b9145c41f&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "GL Accountant with English",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=84707b02c58483e7&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Order to Cash (AR) Manager",
      "company": "Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=b5de0e6d32b0bf1f&fccid=eb3baf007981cd9e&vjs=3"
    },
    {
      "name": "Senior Business Analyst in Credit Risk Change Management",
      "company": "",
      "urls": "UBS"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=1d32618821d90eff&fccid=1c76c3a36f6c7557&vjs=3",
      "company": "Senior Business Analyst",
      "urls": ""
    },
    {
      "name": "Shell",
      "company": "https://pl.indeed.com//rc/clk?jk=870ff626a78c8081&fccid=167aa4ca2fe7d8e6&vjs=3",
      "urls": "Senior Commodity Segement Leader - Electronics"
    },
    {
      "name": "Varroc Lighting",
      "company": "https://pl.indeed.com//rc/clk?jk=e5fc283856da5b31&fccid=fb8205a78aa01509&vjs=3",
      "urls": "Advanced Safety Domain Controllers Systems Engineering Inter..."
    },
    {
      "name": "",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=99b1253fc10dc208&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Scrum Master IT Methods Transformation",
      "company": "",
      "urls": "Philip Morris International"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=da10fa8c9a262518&fccid=4141256365dbb7d7&vjs=3",
      "company": "Java Team Lead",
      "urls": "Verita HR Polska Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=2d6026d11d864db3&fccid=e265b982603f34bc&vjs=3",
      "company": "Scrum Master (Google Cloud)",
      "urls": "ITDS Business Consultants"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=dd89ff2701c9413b&fccid=21699bef93fe8799&vjs=3",
      "company": "Senior iOS Developer",
      "urls": "Untitled Kingdom sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=f2c79a96074148e7&fccid=d922f8f253da1011&vjs=3",
      "company": "Command Centre Junior Manager",
      "urls": ""
    },
    {
      "name": "Capgemini Polska",
      "company": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIflbWC5aKnzWI_AdCcZnwhuteY1fCyrPgxFQpyhKJHPEn_YKZYZNPyCFdhUSpPiswtdeU7C4ECV0vjP9HyzmXLtmGXtiiZaIGPvom24G04lgb4b3OzFEPFpRHkHHWvkzXwS_kA6K96CvTD7L5nZLi9zCXOO8kJaVo0VwY0pdQdqVpvmOQ2ZHW5McngTfDxl1KnX7caBKVA7gNxypD4GBBx4E6a7yXV7vMX6gR_3zFhwgqBqHzec3F00NzJikszYLEnp-CmddMRL1D5jGBdhDBkY1ntjIbSOpT7JDjYRYC2slfbMlmU5Gx6dRwaQj81NHadial7QSrgC_mWYmuJH0rwKN8gu8301f4F0Rvr2K61Je-euiRriUvRM9UGehEWKcuSCLthA9_DqGMFDrsyo-dyljvGML4a8lRLMamil7vABjMOcf_pZPXs047x55BZwrw4-EhQ7y4ONMII_HYsCTmwllEoXs1OSGyU9jv8WTa4HzLn5G22ZBbFbVyFD0Fs2G3D_4_tol8H4s9FT5kDswMfeshka2JRW9S_rHMvL6pUZ9c4kgD3kcohgWV-n4XU_myRbpX6FcApTEhFEiYfXeOLYu_l40TJAmpkijibCivmOcmxa8uTY4AOyVBSl4okhPDs=&p=11&fvj=0&vjs=3",
      "urls": "Business Process Analyst II (Setup & Control, Onboarding Dep..."
    },
    {
      "name": "",
      "company": "MoneyGram",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0BEhGvx0zGXfLkTTmikvtHKrs-4kgm1e_Zh29k8f9sMVkyVya5alfL1EkzNHGueCTMgaM55JSy7j9hnRIlKp06FnaHipWrt6VjfSBzG3a9BOitCy9AQl4a8WGeUGvNVlM7IMVkdODKoQf0Gz-iw6sqXYZdd9ByIaeHy5tTnSXAtwtBIAGX5yQsUT4wNdsE0EMPKFL1BBJxEh6FPb69zBla6i2BsycF5DgsdRRQG5Hz0P7ElxzOxCPC0BBtXx3WGHco7l-V8LH7VI347sYKPkVyPnVReXL8oEwPwfO33JiRekKIu-mpsJjJt4lTJmJ-PCUCof5PRWO8fb91q7SJtnRXAvjght8wDi72jIIgP-XpN703L0Y5qgEkRGIg87bfPaTbMLrpatt2jkrNMVSkRl6rt5VA8EY7qgheCAleoV0fiNQWONZUwigSAZXjC_7Dw_Ks4an2xypnOVIYNS_Vw1KDweO7mhXCL_qmXm6EXk0fxkZc5GFoVKCKhRCjdQIJP6k3IN5FKM93AlCQQzXpJwRAtIPuWhSdP3hCtaRf4OIXB1AkrGQOyMonCTU7_busRynqyIFihfGERmHiCAohIMbystuq0wkvDmw9owI7Zip8LYmYpKxW-k-WtQI7DlcGX6_F36R_f5JseaBHfrxhERQUogd17tfV962rCrPdWEXC2MtPAxVoUBgtEnwYQJc5baUSmKvNokckODuoUaHAko2DMgV8kw2kOxObnxEs4TjGjRetUYyn-DAIDZd2MrGVF12WiazuREoKYxC__whpYBXRu8I_hIKU-GtA_xHfyJ1QEaUbU40_kmB9c8mdtP2W4xYW0MgwhJqNl74QTg96gVdl4Sju9a6CHqE6k1VsbHUsu9MUN8lZgq1LA12kFO43Me8Kf9QYGdQgRXvPRMsHPXND8llebqI_1v2p__GyqV3kVSDX8RVWqbWqw8gW4aebw7hXEZLxgtWIuJxlnwBbAVlBFBwrMAWzp9EofExzjeY_8L2Q5gBcEyUpuUjx3oJlvjvM=&p=13&fvj=0&vjs=3"
    },
    {
      "name": "CI/CD Solution Architect",
      "company": "",
      "urls": "Aptiv"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=4644e01c7ca93530&fccid=8d390ab1843cb8bd&vjs=3",
      "company": "Senior Finance Analyst - Manufacturing",
      "urls": ""
    },
    {
      "name": "Philip Morris International",
      "company": "https://pl.indeed.com//rc/clk?jk=d3a4a5ecfc758ccd&fccid=4141256365dbb7d7&vjs=3",
      "urls": "How to go-live with your product in less than 3 months?"
    },
    {
      "name": "Pragmatic Coders",
      "company": "https://pl.indeed.com//rc/clk?jk=d46b35a9e6f85c13&fccid=c1b8ef077cc6a8a5&vjs=3",
      "urls": "Backend Developer (Ruby on Rails or Node.js)"
    },
    {
      "name": "Untitled Kingdom sp. z o.o.",
      "company": "https://pl.indeed.com//rc/clk?jk=a5a2d4703d45a641&fccid=d922f8f253da1011&vjs=3",
      "urls": "Sr Risk Analyst (Information Security & Compliance)"
    },
    {
      "name": "GE Healthcare",
      "company": "https://pl.indeed.com//rc/clk?jk=944c7b6997c3b1a5&fccid=65b5f2aba4dbd31f&vjs=3",
      "urls": "Procure to Pay (P2P) Project Specialist"
    },
    {
      "name": "",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=410f6ed5770f38b2&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Senior Android Developer",
      "company": "Untitled Kingdom sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=9272dfdc35a5629e&fccid=d922f8f253da1011&vjs=3"
    },
    {
      "name": "Process Lead Global IM&S Source-to-Pay",
      "company": "",
      "urls": "ABB"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=160bd361a453c522&fccid=38b4474838e7b7a1&vjs=3",
      "company": "Senior AWS Solution Architect",
      "urls": ""
    },
    {
      "name": "Aptiv",
      "company": "https://pl.indeed.com//rc/clk?jk=7a9b7fd0be9cd606&fccid=8d390ab1843cb8bd&vjs=3",
      "urls": "Procurement Process Manager with German(m/f)"
    },
    {
      "name": "Michael Page",
      "company": "https://pl.indeed.com//rc/clk?jk=a44b398c47317f40&fccid=77087bd1709a8148&vjs=3",
      "urls": "Senior Java Application Engineer"
    },
    {
      "name": "",
      "company": "UBS",
      "urls": "https://pl.indeed.com//rc/clk?jk=f11bb8dee68dd141&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Credit Assessment Analyst - German Speaker",
      "company": "Talent Place",
      "urls": "https://pl.indeed.com//rc/clk?jk=23e05716598e9cd1&fccid=868f0a680c88fba8&vjs=3"
    },
    {
      "name": "Web Application Engineer",
      "company": "",
      "urls": "UBS"
    },
    {
      "name": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNWJR8exoSmSlYMLAMXeIvRgVivvl20vHqq2p8sA921EbAbI2V-Iax0Xa7pcD-Y4QPMzrMZ_Kd0Q72YpjnlUL2rpwT4gjlltXuXhzK23Sy6-h3JBKZOLqQcMiPkh_PLrxo1d8_zTiUCznlFNxV1ykequh4zV0K3rvIh9_GJqiqhSNxoj0Gdgdlz6Bb-nPFqm3X5XFB9V9HplE-5MLmLGCQ8eAATeZxibnOtn9q-kjk98BjxHDtnHCcdteFB_aIYgwTjGOuQp5wfMWVRnv01dAZ1jAl-I_vmhP_q4_H421OVbRq8VOrLZGnZBOzIKM6q6v-B2QFd0UneiyDdCUmm6YgxTsEbkb3s0G32vb3cKRz-vO8j0WpvEE_VkkKe2tiaTG9_dpN2c58_c5eDCHtu7fuWOM5tnxFlt0nqXgdwJ4djTZWdv8H-i6-7juhPtNkOvcUUHWcM0bPMe9k1wI2rUA0VMVJkjRdJcwebR3EYHApPMhDq_MEBRwoOupEb7BoVVUOMWOoc6Ril-s92cOk2qNKGauL1UtuCpKSwFfzhwEL5LQctF_4VNhuXiFTh-Qeznesly082veCnbnY1CJS7El-TNt644LRcMVKPKNvVq60pBuJ1fTaymGk9tQ7nQtS4Xt24=&p=9&fvj=0&vjs=3",
      "company": "xxx",
      "urls": "22"
    },
    {
      "name": "Modszy Mechanik",
      "company": "Instytut Biotechnologii Surowic i Szczepionek BIOMED S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-mechanik-krakow,oferta,7462457"
    },
    {
      "name": "Inżynier Budowy / Kontroler Jakości [rekrutacja online]",
      "company": "JT S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy-kontroler-jakosci-rekrutacja-online_3348204.html#2c3b7be57c6c0efeda4047e48a3a806d"
    },
    {
      "name": "Aparatowy mycia w Wydziale Produkcji Szczepionek",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/aparatowy-mycia-w-wydziale-produkcji-szczepionek_3369922.html#2c3b7be57c6c0efeda4047e48a3a806d"
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
      "name": "Workday Integration Developer (System Support Area) [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/workday-integration-developer-system-support-area-rekrutacja-online_3355572.html#2c3b7be57c6c0efeda4047e48a3a806d"
    },
    {
      "name": "Produkt Manager w segmencie systemów rurowych",
      "company": "RADPOL S.A.",
      "urls": "https://www.praca.pl/produkt-manager-w-segmencie-systemow-rurowych_3389062.html#2c3b7be57c6c0efeda4047e48a3a806d"
    },
    {
      "name": "Młodszy Ustawiacz",
      "company": "Lajkonik Snacks Sp. z o.o.",
      "urls": "https://www.praca.pl/mlodszy-ustawiacz_3378560.html#2c3b7be57c6c0efeda4047e48a3a806d"
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
      "name": "Process Analyst – Internship",
      "company": "",
      "urls": "UBS"
    },
    {
      "name": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNWWz4pyQPLrf70Ohd_v_AsRWkvU5q6E0NXGfbQroBl6ZXOXC9SqtKJSrfRnIK-vmXlE-fqmdAuR-ai9jD8WAnbxP8A-VSt4b2YN7I0dkws2xYRco8G0CHLPHU1Z19xLp3Y5tGF2Ms71SEz5Zl73ZQjxQKw2hUH8G-qVdK2znOslZrmSG5amCR8uN_vLX2KaVZA9efW4_U4ja5PkaosgcBenH8ULs59UDIaixk935qFAfb7UpaOaw-9tiWKlZJiF0nmRyL0zpA66aEktaf-JQIufWElnBP4nU7pgwSXvWjWZzc1XctAUPR3OWuvLjLi-xNyYu5nOQr7fM5Jm8D6D5VcNliE-W9-LUle0OxrfG7XzUSjE4bBp9CpiICys7c477g5KbBRlXtK9ROXSrOil_76qictENWyr5yMXIxRixufvo09llrc16iBrSWyDvbULXSzvTSGRX09CyFQ-S0bl1OkTiqJcqgftJVF_ShqBUBRV47wQlhQYPLwYNChBl8KUQ9sJVgjSGRMncz3G1qZse3Q89I2D87rd0OW_7Uu49adc8vEyI5Tm4DE9MHe0folmVyKoQmLKbR0g533ly2cgJ4C9907SFdjXWpZuZ-ZR2t0NEEAFUKdiLvRPCpUJVjH8IHt_J5THbQL1dw==&p=0&fvj=0&vjs=3",
      "company": "System Threat Resiliency Director",
      "urls": ""
    },
    {
      "name": "UBS",
      "company": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNWYshXehV_2jCu5cmt4VDfwrJUi2x_J-Vu0SWnHQklFWh1JJFT5AAHkk5b5NYgQ9xpHe4cx8pwQUKAKRnK-XlNUAGQ3zM8JiJAKwgrbNslF93vX38pbqzSZrdBk46cc56lciJlOLd4TvQIiGMSGF5kKxOto9aFJidk20kXLWbYH-fNzjMU0MePR5fMfYFvoR_MW5nZRKDBrrC3yZFczj34obVvE-bxQ6rmBnJARQyAyfwUYaj6CdYzZEE_Wofhb0uRfXCkrkvBWRyF3WpTEp9NHUSPUn7BmbNiu5RPwcNDFOHLnFL3-cTm9Zjh9EElI_4U5tU_SvSwmkQh3aoSzoNRU-tPprKsJmYnr0BuPCSMURIro_nwF06SXeKDhndsmPDxwGss88IJbFhV3zbkacMHjIdDCxQVnNxnubvfJmdrDk6Y0-h8bUboKprw0jNvUsLxDDAfz3Y75Mf3HPNK6yGR1zvFm1ozl7Nn2jw8VrLpWJItEq2mJgvZEcCdOidDk9FOH8vIrkXG2QoF9KazxOtP0LjfEWMLZX16GpVV3XLzixgjxoiqgQVlQId13kOsKllfbALsZxycUaBbTACPpwRV8S8WrboUXxb3js7AcTIgu7snlI62MtYi2OCUQIM1XeKITouXbVhOobs7NgMjpwXf_k1Iz4VZ0HZs=&p=1&fvj=0&vjs=3",
      "urls": "Network DevOps Engineer"
    },
    {
      "name": "",
      "company": "UBS",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNVblaCqSDubmhwNQirxRjHaOoY2Ls-ybIMkH5rHJc2n41QQZjHH4SM-5gbVvKN6SAIERliBUkVzotRehOArmNoJRpXnKktOsPwB_YTf0lyQBg7o8KKaiM-8YQouxJTICuJ5PQpd7e3kcgya5YpvGfs-Z3-UK_M1JAgxq_Jloiq1uADhXscUkwZQ9mDT8ToSa-Yb0hCq8LlbUlThWrgM1HH2I9hKtfS4uok9FTbvw9IFz8HZDqBWzM6zAfYgat0SvMBYr2v9bN_30Sh_-hPmVE3L8a2lqMdBOSRWlMbSpVoD94Quu7yoZNmvebEszN2wR3BA6vNDphqb0ZZk6aP0zfSrafcV5Quf-lDQAHefWCh_DlRwogY-MI_oPCaVi_dTWnKh1pAthH-Dk4QWuiSq0BZ8aVCbKzKwtbT0G9iiEx39GnVU-OQZ44dOJ7hduIBqxh3HQzVGCIlgUHGhUK_8plym2r3HIJHi-j6Fxp9TVA2v5eCmr5URXrs0xKR-oODWkjBfdELx6pjb5QNPQUIUuph2_I8Q8FtK5SzD-rQ420Nf-hcMnb4Ie6W-iqcoTMsOWj6oaJPo0MvmbmNsAh7I0udAsijrFYioPai6795zvEEqEe2eyFKHzA4izamtRs-gAX4=&p=2&fvj=0&vjs=3"
    },
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
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier budowy ds. elektrycznych (kolejowa sieć trakcyjna)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=547e48eef077b940&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier Elektronik – Konstruktor",
      "company": "2Bora",
      "urls": "https://pl.indeed.com//rc/clk?jk=1412ed0791ddda41&fccid=81eeaa9aaf867a65&vjs=3"
    },
    {
      "name": "Kierownik robót / inżynier budowy ds. elektroenergetycznych",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=a107187dbce3bb50&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Inżynier Elektryk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=2aba904252e64b02&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier budowy",
      "company": "General Automatic",
      "urls": "https://pl.indeed.com//rc/clk?jk=d4934c90208a0436&fccid=e71c30062ae7e5a9&vjs=3"
    },
    {
      "name": "Asystent specjalisty Dział: Ochrony Środowiska",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=dc8e82ea96d316d6&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Inżynier Automatyk - rekrutacja prowadzona online",
      "company": "Fitech",
      "urls": "https://pl.indeed.com//rc/clk?jk=d8931e2ecdfc3385&fccid=52d48f1974e43ed4&vjs=3"
    },
    {
      "name": "Video Conferencing Engineer",
      "company": "",
      "urls": "UBS"
    },
    {
      "name": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNUPiuo3w94gRtgQ4D_KHN0spQ5aAOXGTPVaMobYdwmoyeDGDc1Ek8mvegkUkZ5PP3i9TqE7AhXFbALm6oyXaWX-W2Bppg-Easy81vU3iSc-3XovVfJdyOwSxbORh5nbC3eLXnxh6a9f4JKNXqIRruM32Sml42fPd-rMG3SWhToA5WXF6vzsCjWi9CU7IpXE2wHxHVDPdp_pOjQaFH5fgEDClZuRO4Y6LT1iRolrLSxMMY0v7usY5-6grxzMSXVFd20VE1IpqkbGNqRgpDHE8Wdy37EQBASEoDsGMSmMMfTxyKIVFtXf7CUt4kZMog29AEplIqQnNK1kztBE-aptZ7ep9z50WuYRecdAMCnZPChewR_WK18Zx3Q6ZYTvUNbSkWXc1O9Rw_TML-oVjcFe3XTuN6IJy4v73mc-AGJp3hCJ69g3LHcdbO46YfskQ-DOL5_PPHrjDgOBpAtHB5dLbc87tj3qMosvkRWNDZEis8fk_boAe7K36IRKmWcW7LY95rJtDvqkooDyDLM545K8h4MEOcL2LhcQ1NtRsiru2hUQZ3ksa9g1eMdjFBcbFxS5TU-UCzVvcDfauaGmkSRvRKTd4PRNOFS13aImNuD6uFEdMkcvLJNujhkPUXvjeKjNiYvWqa_LCtPenA==&p=13&fvj=0&vjs=3",
      "company": "Video Conferencing and Streaming Engineer",
      "urls": ""
    },
    {
      "name": "UBS",
      "company": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNVR_SXyRh_OUdxFuiJBeb4zytZiTocCpHptRT_iuEaXwPiqRJV58ggR5k7tv1bAhJ98P40dBWlNcIVm72hYyoXzbh6x5W8ZV_u3kmD8aEmvpbaxXg8jyORnPV86s5z1KtgR68puQJMN2zOI1dA8HqQt87l09KCbKhFnYMcLMRo97iIPOCibDDSYeM_itNqdmqlcpQZ0hT8TsTuNRdDU8mwEM0xGpFuF2eYwLt25S-qn6hKp1r3-9QCUklQqEmpej_21ETwrMR9vGye6MARlt7qLGzeLj6D3WMb7hlRjP5eI4ZK0L0ng859VRILRlW7Wu5K8zSyE_RJ6ZyMhJq5VXch7-j0UKoVBWFyMPYzt9sojGtvpdRMX4hd92O0QmZfPZpOFSLWW2FsY6Qq5O5cx-GHwp-KSO8YMWOzrQ0cA2POYC76s38gTLKlocO_C2E3EIRbB4ZG4eoaffdBWP67uEkJ41-ynq4XXB76s0IWUDIynXvVUka8mI_mNpSlKH9Ykw4pEtL_9J4GzleOtQV7okdkUkGsijtjSsCu0DjcKfj-25ksvDdL07RDtKWbaT_QRBvRPba1BZdkj__hL4Y3bQQtj-pcXjD37WVvcql_3z_wq1mfqCEizzM4ZSnc3NEgG5-bPo_gLNDFTXjy_sAQS1ScKyKc6xjqwMcI=&p=0&fvj=0&vjs=3",
      "urls": "IT Business Analyst"
    },
    {
      "name": "",
      "company": "UBS",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNWZTV30kQvwwtvxBEVHsVKWs36zUppMrs6oYtKP4yFGeiufq93BksguciHMR3a8kAEn-SVDrNjbq3ZQXjA4WbaqdtGm2yoQU-J2A_8ApnHY0oIkTxiOVmkU3mx0oe6NuK6Sc6Mh4ZHkLrP_QMbc_fqUMQbOAr5QDoT1UlYiMTjf8z49lsNHOzkI3-z66UYd54uSkaVIkPkFHeC2q0_ydtHYuDp4vmTOBfm_3soimJBEZC4F6w2aeabTpELZjD3BRO1a0mf29R2VUzNCuGAtJpi1O1PS3chciCTM32g-7sA9n085NzWWgQmxcISSc31WkcJUvvGzParWh9GoU0j728iF2T9vM58gOYllT-PnYNnGiFuCMex5Hu9s2k0oSRMldnZDVod8vtccwx4C2Sct5holxd0KgKbgzsbz27GP14Je5a1KLtoI-4ryCH2JG7gzZ8tl6hy-SEO_phCtFRfKpLC81nNNF8mjezAKdCPnVuDk3VOEQuBAvlAcWTQgKxNjVaod2Ejkue3jA6U1rjcEUDkYmmS9ctfGhefjwBwKtb9-ocDLDG2Ey8CkE7EpPKQQynvA_EUElUWDZmfU2YJfSNT0y7M9fjEp0QIlaQbRycbsGkPmPmAWG49qUSoVWVx7cHA=&p=1&fvj=0&vjs=3"
    },
    {
      "name": "IT Software Engineer Lead (Monitoring & Oversight)",
      "company": "",
      "urls": "UBS"
    },
    {
      "name": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNXDbhUwN_Z3ey575kDfB-gz58oRXPrOidq2GpZpsoeAXIPrfwBCZAbMvMnFcLGBukPrOEhQU4oF00S1c-2BPhDc5VthqIspsP89icThYkxzQgv5uBcOvV7RSuSNaW3PLaCj7IkBTwv4GZmdECuWJ-FxDIaZ6Yw69kV1gwPDpoMFQ81tYpbBZaqPDMe0rm3_ZPtKafjDHt0nyIbyxGZ_f_wQLwhWcFj-wLTe6IDQj-xCLYH54gBeNxfF1NoR9cIcQUXx98MRv_SriYEVPjBXY5Vwr3aQNacT8sHWYv62UK0tMeetyTcmencHgEmoJe9ggeWJXoGwcWz1nahjVof-evzAYa06HrvteCUCTMM6hSD6_Bi3PwteresUudFYvWm_7Znr1BeBL-iDYsHtgcHIqes_LNc_H_WA5ftppSPAYlUTFXKayk_7Ngj87BoHNja-dAUefg4NpkmsdorC7tgOWM2tc0BZSrQaiVyZ8TKQcfisSIGmKSjaNE1rKQFHirVATqx8Pu6bwnGmIKIiILkZ5wjDGkAUA-uOOR_hz1E7gPEPUTWelZedA36k3wIoWAdfjTAmeXoauDrj--gDkOzL-Ark_YCQZynoGwgffP_mmpg-dBBLbwS9_wP1XSpBKm9EtTaFbTMwJHMLkcTBU--sBSzc3O0p-7uF7S8=&p=2&fvj=0&vjs=3",
      "company": "Inżynier sprzedaży systemów bezpieczeństwa przemysłowego",
      "urls": "GRUPA WOLFF"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d85a4988a3bbd086&fccid=3d99fb61e9e62f24&vjs=3",
      "company": "Inżynier ds kalkulacji / przygotowania produkcji (m / k",
      "urls": "STRABAG Infrastruktura Południe Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=e67453e66a025c10&fccid=91ff00d5203b00da&vjs=3",
      "company": "Specjalista Dział: Ochrony Środowiska",
      "urls": "EKKOM"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=8447c63c8105e086&fccid=8ab640d69ddcb83d&vjs=3",
      "company": "F5 Engineer - Global F5 Centric Footprint",
      "urls": "Assa Abloy"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d9bb1a6473ca6702&fccid=0a4ad7ebd9b0c8ee&vjs=3",
      "company": "Inżynier Systemów Elektronicznych",
      "urls": "Knorr-Bremse"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=7eb2acdb5809182c&fccid=a23b36e1d6d2d53f&vjs=3",
      "company": "KEY ACCOUNT MANAGER",
      "urls": "IT FORCE"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=c21b723d3430859d&fccid=ce0f058ecc872287&vjs=3",
      "company": "Kierownik Robót Drogowych lub Torowych/Inżynier Budowy",
      "urls": "KZN RAIL Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=fe99701bd1cf7c37&fccid=be21bffde79d2ca7&vjs=3",
      "company": "Inżynier Automatyk",
      "urls": "ENKI Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=0f9e18031e6d937f&fccid=0881f6d660552bf7&vjs=3",
      "company": "Inżynier Produktu - transformatory i przekaźniki",
      "urls": "Michael Page"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=5c4eba35016d76ab&fccid=77087bd1709a8148&vjs=3",
      "company": "Inżynier Procesu Automotive Greenfield",
      "urls": "Grafton Recruitment Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=83af8b65d67f08d7&fccid=062f71e131e87cf0&vjs=3",
      "company": "Quality Assurance Internship",
      "urls": ""
    },
    {
      "name": "UBS",
      "company": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNVZRp1cHiLMIzT7sAMnkhKUGdgLBhr0T8IHzSUha_TLQPk5lvKZlUrLR8EZ4e-6TxPJXVW0Ril4icwX-Fv3sayG6KTPZVtg4xGl1C1-ZIXtCYHIkK8rH0vM5wo_WkgmRlK0itdTuczkHnmyRjIJSDz7wYGtuBElhqw2grqcA7RSM0-Fpjr95Kn-87DlgtON2xvLq9I3JuuzQhTTSFrmRLM4D1HzopBtQp25aKIxY_aPale3PYh-o34Il6MJHQ_l7eXUTZ-jmdO_KGcPOIi1vZBzbJPtW_2gl0CWB6vYF4_KsQdr6nXiaGJxch257T8B4oNc0r5rnMrpU2xqaLB2aDKhwZ_AXTUAUSewa9pbqniW90yb1UoZsEGsLaWjnxN_RI77jFN-cYlFwJiuVJ7oPZUcO0WqL7grIVov0LZ3tP6luFwweR6cakF9YkZ2GjxiOi8DInlFuXiEWguu2AW-708Lbh5fKQHvS1tQnRKvxdsHO21Dk1IqE0436lwcGJRhVnL6WsepvmX7eepTAZdbPJt2BnW4dxzJfHIKLqcyOiQ_SwUI2iBeoT1PcdDbPxdyA8zkNJpr8osF1KdBVwfkBsPLRj6Ml7cj7Lb2VMNWSugQGoj9EomIcoTyphxSDffPnxU=&p=13&fvj=0&vjs=3",
      "urls": "Network Implementation Engineer"
    },
    {
      "name": "",
      "company": "UBS",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNWQgsJQ7-ArhkxfKeVFUazwiCqcxf4uUwqLf5Mc6L-rUg5qweFgCzNuDLKWjGbJoyJsfBIxQdnS2p09wKjA0uuUJxWtBe39BhsGp9sEKUUOVVgoXx1RwMKaLpfqRUX6aiftj_QJ8KfDI9yWUKLl3jjbFp1NmxKewytm1qtClVLZX14RLCpABVQ39IeJuU7CzHG6qDrJICs7IaRj0PjyXwVSSQujb1Nc8Y7vvQDEFnV8QztOsxNXGE6vt5vWk6jWJ_3UiVCweXiaHBDsg13V-Z7yL7fV2dQF7ZjNZbbISR-pXU56go_X6pui4S5x48TUD7s_r0QaJn_9i93Ssia-qMbmXNFy2d7CHeKc6GIgAG5oLsjji_fj6qnV3-19Xe-W7JQzP07lkDVsitRO9HmvbONPwr4oZZYLnf-nC2gxr1gswqi297Dz01BU76piNo63WqZ0KNULKXZcY6gHcyscYkmF1o79b1lN9BCgjpfNRLyX7s_YXek7t_PPDduY__wP8lhZU2tR-YKrynnYNnYllE-IND1H53KwzvaNhsAmkt_OdAj3ta3pMzak1cZ9TJx44oJ5STCeYM-SNAbwxHvJs6yDxy0bPoVgpR2XuvmeGkLfhzAzKNoFGeTS2VtyrN8Z4b0XvNwwBRDWLg==&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Ochrony Środowiska...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=315cad0381ee06a8&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "Support and Test Engineer Intern - EasyLobby (HID)",
      "company": "HID Global",
      "urls": "https://pl.indeed.com//rc/clk?jk=62a793ae15ca1df6&fccid=b51a93b6defb2a2e&vjs=3"
    },
    {
      "name": "Kierownik/Inżynier ds. teletechnicznych i/lub elektrycznych",
      "company": "P.U.T INTERCOR",
      "urls": "https://pl.indeed.com//rc/clk?jk=40d97171e6c3f4af&fccid=7e97b2d9f0af32d4&vjs=3"
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
      "name": "Inżynier ds. Testów",
      "company": "Grupa Unity",
      "urls": "https://pl.indeed.com//rc/clk?jk=1f2ed1cc4252a137&fccid=9a34138d512ebeaf&vjs=3"
    },
    {
      "name": "Account manager/inżynier sprzedaży",
      "company": "AMC TECH Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=3d5b339baae31c7e&fccid=9ea9ac0db41cd67b&vjs=3"
    },
    {
      "name": "Lider Działu Inżynierii Procesu",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c94802d34ca011fe&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Inżynier Jakości - oferta z pakietem relokacyjnym",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c335b71aa6443013&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Software Engineer",
      "company": "",
      "urls": "UBS"
    },
    {
      "name": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNV3kZ-ySeRapt1yQy-sk6SjTAPgJrVtSFIAzpi2kyGMa61e9cwYFYIhRuhpKSouXiTUnQpLO6pFhLsC-SDG-8B_VG--L2BDEdGcPQV8FJNXT3-qsJ3IcQmWSOIpKVc3_gVvR5sdMuWVLD8Sja6bH_YQXTd-l091DnFCBuL2FRbodUGuiyVnIETxnrzQLpzHmBRHk2dMiuldyHDz0TFeSsr-u-wm_221k9fRg1q2Lnx67XyOsC7AO1wzzEDXY0TSurE4g53QSpsjzxYprhZH9LDZ_qJWojEupqDcn11j0uomZAYyyHGSsi9T8ZqYTvG8tdAW9dSpB5lw102x4qSj1EjA8V3mVg0zrjF0_zLs6AWfziBzVs5nEVtpUy3c3kcsiaBaA7hShHZ1ugCFGXzFr1cihce5J91tnGk7dFqSxPPaPWMq1-9ONcvgJwPkJDo8arSGXWQ5SBjqbZPPTZjZfAi0ZJzmZSVNCbNijteIeRnIZkYEtujx8P9XtFzoyMg5q9h8bci2DMI0XFdji5o3xNpSlw6RufZ9LIHiLwFTJ2OwVrh1zZtK9QYv_AC1fkNMiQL4RLcOw9oPLzoaNPdOp59orWIVP8aZwAg4KxyP8ERrgR_Ku-tJQh1leWdc-cF4UDY=&p=12&fvj=0&vjs=3",
      "company": "L3 Support Engineer (Client LifeCycle Management)",
      "urls": ""
    },
    {
      "name": "UBS",
      "company": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNWC0HBh0lEGjhZUxqQ_sC3tUoA4oYaYeAc9_FCVQH3p8jnXGVSziUA9gd5_jXruA9C7BHOhqNvZESqKNKP-h4u-zhi4aiwQdXDjLFZP06zb4KRONcHLRdX7cl1uUrooruSwd8UR-viELdO3sIThvxSROJwHxov0DwTkuIZcuplLDUCXCrrFsEPdoti86Lbv7IdVJrVfxJU3Mc2hqb2tGbkwRVbIyKjS-ACRaAP3Veolo1txf15uL2fvdON9IW9Kta1unAMVhxWoJa-H8iylTUPNY9Tdi5Y-NSFLx6f7SlKQV15F4RNeelSFVhYEU3CEF97SjYQ8bRxF5rey_7aIjM6iKOGtLeOG7-c2f_ILZXZD9gWTa_J1d2g-POJKBb__maMyLreJKQUmU7lsuvtaWUahd2niWJjX_WqOQKrR13YB67VGDEkKLYZABoew25w1LuxdkzVLtS-9QLm9_e7ReLVM3F-BqldncoUywYfuRe7nv2fk3GdFcmOJiDPdy-31wAnmsk4Ko4aS2Z31ZMr2Px7-aXKOCpyAdpS4b0bGHyH7ucInHAo9bSSukr9ivVds9-1xsq4RlxN088FC8dY4y5ZwUm1fkhlybHcqaQujpJc-dbcFDerUqX3E9s_XyQ2JQkFFCXuxHehdbCsZAhVkLK2NwctN9i93x1o=&p=0&fvj=0&vjs=3",
      "urls": "Senior Software Engineer - Ref Data"
    },
    {
      "name": "",
      "company": "UBS",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNXZiwoOD6ER0Td1A-sLYcXmrvly7bKsHK_b75T-4ykcKNlBodJlnAS4tq1j7q3pxczuWKHyOgrrtwGBnQC8VrxYzdbANr2gdYwdOif64o09HzZhgijE0h_wxbEvVTVreh857t44sOk7rq7mZIsXnkPdLzbWexZKSJ60GUtsHuegwOvSK_sszOnRfhiI4YLLAHYGMPObUSvZ4P7bZ92fetv0c_aVjScz366xbQTUVSpDGY97r_qv0qRGrUeh43_oLAoqW7NS7IFXLpl_BGCZgPvUz8YMGCH8WI0_jEPLYosPCzt7u7T7Z5hBsCDb0YbAyoCrjbWxbV0HP0O0NiR2HUe67XNUdnpGkzU6OR1ySxcUqPpI1JCGVZchwH3YLI2CUbZ8KUjJ4hMa3-3JI30OF9fpL4vzp5_ms3nkFLRU6NjbHim_7pt4j0rDUvMI_nLo590H9tJJGMkwG6E2iMiCy0Z2AOWstEWoM3PoWJ5GZ0gPnjWig0o_FgyESqlMzSpW60b3pkLO4ztQhiGQWE7hZjfpRKfdK30nVJE5IC-FDr2HZhl59ZREtJ_3daC16-Wm3GqhiH9vS_hFa4Hzf9zmNj0YrzwYwxgPnm8KRkO5JPPrSDIAo5LnUDwPI_XUh4B1GfBlG2zX8n4oHe5QY9yVQT0p&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Inzynier ds. Konfiguracji Projektu Softwarowego",
      "company": "",
      "urls": "Aptiv"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=4587003a356b5b6f&fccid=8d390ab1843cb8bd&vjs=3",
      "company": "INŻYNIER DS. WSPARCIA TECHNICZNEGO",
      "urls": "Awex"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=c53c91b7d2204066&fccid=27a13086689515e8&vjs=3",
      "company": "Kierownik robót drogowych i torowych",
      "urls": "GK ZUE"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=373d3be4d9cd22f2&fccid=092d1ee1c3a73e20&vjs=3",
      "company": "Senior Engineer - Zscaler",
      "urls": "Assa Abloy"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=18c74018c01b8f91&fccid=0a4ad7ebd9b0c8ee&vjs=3",
      "company": "Kierownik budowy (infrastruktura miejska)",
      "urls": "GK ZUE"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=07959f5272c9a2a7&fccid=092d1ee1c3a73e20&vjs=3",
      "company": "Inżynier Procesu / Produkcji - oferta z pakietem relokacyjny...",
      "urls": "Grafton Recruitment Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=525bfd3e48fc6f63&fccid=062f71e131e87cf0&vjs=3",
      "company": "System Engineer / Support Analyst",
      "urls": ""
    },
    {
      "name": "EPAM Systems",
      "company": "https://pl.indeed.com//rc/clk?jk=1a9b99fe113be0a2&fccid=532afac41b2663f7&vjs=3",
      "urls": "Software Engineer"
    },
    {
      "name": "Moyyn",
      "company": "https://pl.indeed.com//company/Moyyn-Group/jobs/Software-Engineer-2b8f8c1ad63eb565?fccid=6cb95f95e73cdc07&vjs=3",
      "urls": "QA Engineer"
    },
    {
      "name": "S-Labs",
      "company": "https://pl.indeed.com//rc/clk?jk=3300678035fa06a4&fccid=ce4f4701fb5e9335&vjs=3",
      "urls": "DevOps"
    },
    {
      "name": "Alten",
      "company": "https://pl.indeed.com//rc/clk?jk=39b85c2d1f1e1daa&fccid=f452ff89851e4578&vjs=3",
      "urls": "Network & Security IT Infrastructure Engineers"
    },
    {
      "name": "Assa Abloy",
      "company": "https://pl.indeed.com//rc/clk?jk=7a893ebad30c92c9&fccid=0a4ad7ebd9b0c8ee&vjs=3",
      "urls": "Inżynier Budowy - elewacje klinkierowe"
    },
    {
      "name": "Stone Group Klinkier",
      "company": "https://pl.indeed.com//rc/clk?jk=2446c33a55ad38da&fccid=678c79800cc6fc48&vjs=3",
      "urls": "Full Stack Engineer - IoT"
    },
    {
      "name": "",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=c4dde19424a8a8f0&fccid=68b975ecbbd7a58d&vjs=3"
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
      "company": "",
      "urls": "EPAM Systems"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=79f8370551cad57e&fccid=532afac41b2663f7&vjs=3",
      "company": "(Senior) Software Engineer (HID-807)",
      "urls": "HID Global"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=50585db785cd8c12&fccid=b51a93b6defb2a2e&vjs=3",
      "company": "QA Engineer",
      "urls": "KUBO Sp. z o. o. Spółka komandytowa"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=31e8d7ac4e0e6fa5&fccid=3192074ede128056&vjs=3",
      "company": "Software Automation Engineer",
      "urls": "SKELIA"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=6343f202af9a99cf&fccid=4b7f4b3718395175&vjs=3",
      "company": "Senior ETL Developer",
      "urls": ""
    },
    {
      "name": "EPAM Systems",
      "company": "https://pl.indeed.com//rc/clk?jk=6037b9c19177ed07&fccid=532afac41b2663f7&vjs=3",
      "urls": "Kierownik sekcji jakości"
    },
    {
      "name": "RANDSTAD POLSKA SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALN...",
      "company": "https://pl.indeed.com//rc/clk?jk=8ae60db4d7d4f6d4&fccid=2e3c949643904937&vjs=3",
      "urls": "Pracownik pompowni na plantacji truskawek"
    },
    {
      "name": "Polski Instytut Truskawki",
      "company": "https://pl.indeed.com//rc/clk?jk=9fcf93e7aa0b97c5&fccid=960c74acaf07f159&vjs=3",
      "urls": "Senior Engineer – F5"
    },
    {
      "name": "Assa Abloy",
      "company": "https://pl.indeed.com//rc/clk?jk=a5a0ee9c0889b08b&fccid=0a4ad7ebd9b0c8ee&vjs=3",
      "urls": "Lean Management Coordinator"
    },
    {
      "name": "Grafton Recruitment Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=8e1c711f30e4c0b7&fccid=062f71e131e87cf0&vjs=3",
      "urls": "Test Automation Engineer"
    },
    {
      "name": "VSoft",
      "company": "https://pl.indeed.com//rc/clk?jk=b4827e645cd8df91&fccid=310d47694055bd6e&vjs=3",
      "urls": "Senior Big Data Developer"
    },
    {
      "name": "",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=6c053339660c79e7&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Consultant Engineer (m/f/d)",
      "company": "FM Insurance Europe",
      "urls": "https://pl.indeed.com//rc/clk?jk=73ed1a754671f517&fccid=61e8892c332e49a1&vjs=3"
    },
    {
      "name": "DevOps Engineer (with Python)",
      "company": "",
      "urls": "Aptiv"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=38a6b7e8c809aee8&fccid=8d390ab1843cb8bd&vjs=3",
      "company": "DevOps Engineer",
      "urls": ""
    },
    {
      "name": "Accenture",
      "company": "https://pl.indeed.com//rc/clk?jk=b948b73b9e7969cd&fccid=a4e4e2eaf26690c9&vjs=3",
      "urls": "Software Engineer in Test with manual QA background"
    },
    {
      "name": "",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=48701fc98a5fb56b&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Senior Software Test Engineer (HID-1026)",
      "company": "HID Global",
      "urls": "https://pl.indeed.com//rc/clk?jk=b63076526d515169&fccid=b51a93b6defb2a2e&vjs=3"
    },
    {
      "name": "Senior DevOps Engineer",
      "company": "",
      "urls": "EPAM Systems"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=3156f24e20870fbe&fccid=532afac41b2663f7&vjs=3",
      "company": "KIEROWNIK ROBÓT SANITARNYCH / HVAC",
      "urls": "ACE Group Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=88733c1dac2bec17&fccid=9c25831738ee5606&vjs=3",
      "company": "Lead / Senior Test Engineer",
      "urls": ""
    },
    {
      "name": "EPAM Systems",
      "company": "https://pl.indeed.com//rc/clk?jk=eb6fc96496fef00f&fccid=532afac41b2663f7&vjs=3",
      "urls": "Java Developer"
    },
    {
      "name": "TalentU",
      "company": "https://pl.indeed.com//rc/clk?jk=2c1ab5b1bbaf1101&fccid=ca5f1e138a78fd90&vjs=3",
      "urls": "Lead .NET Engineer"
    },
    {
      "name": "VSoft",
      "company": "https://pl.indeed.com//rc/clk?jk=8166e48816d8c6b6&fccid=310d47694055bd6e&vjs=3",
      "urls": "Senior Software Engineer in Test"
    },
    {
      "name": "",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=3eac3c710811f004&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Lead Systems Engineer",
      "company": "",
      "urls": "EPAM Systems"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=26e5af3a72eb7fb8&fccid=532afac41b2663f7&vjs=3",
      "company": "Lead/Senior FullStack Developer",
      "urls": ""
    },
    {
      "name": "EPAM Systems",
      "company": "https://pl.indeed.com//rc/clk?jk=58c8a6b0776b300a&fccid=532afac41b2663f7&vjs=3",
      "urls": "kierownik sekcji jakości"
    },
    {
      "name": "",
      "company": "Randstad",
      "urls": "https://pl.indeed.com//rc/clk?jk=543e3323d59d343d&fccid=f8b265243da9f9d7&vjs=3"
    },
    {
      "name": "Software Engineer in Test | Kraków",
      "company": "Vsoft",
      "urls": "https://pl.indeed.com//rc/clk?jk=ee63930a2a2139bc&fccid=310d47694055bd6e&vjs=3"
    },
    {
      "name": "Senior Java/AWS Developer",
      "company": "",
      "urls": "EPAM Systems"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=928ee7981e6e1e98&fccid=532afac41b2663f7&vjs=3",
      "company": "Lead/Senior Test Automation Engineer",
      "urls": ""
    },
    {
      "name": "EPAM Systems",
      "company": "https://pl.indeed.com//rc/clk?jk=74132a55a97b887d&fccid=532afac41b2663f7&vjs=3",
      "urls": "Java Full Stack Developer with Angular/React"
    },
    {
      "name": "",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=cd25e2d51a0a578f&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "QA Automation Engineer / Kraków (aktualnie zdalnie)",
      "company": "NewPerspective",
      "urls": "https://pl.indeed.com//rc/clk?jk=1ef8f4f17587f141&fccid=659d40811d5fc07a&vjs=3"
    },
    {
      "name": "Software Engineer in Test",
      "company": "TalentU",
      "urls": "https://pl.indeed.com//rc/clk?jk=e3c6a80fe694419a&fccid=ca5f1e138a78fd90&vjs=3"
    },
    {
      "name": "Linux Engineer / DevOps",
      "company": "EuroLinux",
      "urls": "https://pl.indeed.com//rc/clk?jk=8b01b29c719cc453&fccid=d91fbdc82addbd64&vjs=3"
    },
    {
      "name": "Lead JavaScript Developer with Angular",
      "company": "",
      "urls": "EPAM Systems"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=a7561ed7a2f41388&fccid=532afac41b2663f7&vjs=3",
      "company": "Lead / Senior Software Engineer in Test",
      "urls": ""
    },
    {
      "name": "EPAM Systems",
      "company": "https://pl.indeed.com//rc/clk?jk=4434f382028c2dda&fccid=532afac41b2663f7&vjs=3",
      "urls": "Lead/Senior Java Software Developer"
    },
    {
      "name": "",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=8aad2d6a5441beef&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Expired: DevOps Engineer",
      "company": "Moorgate",
      "urls": "https://pl.indeed.com//rc/clk?jk=a102f09f32086a58&fccid=f9e2ae1d4db307bf&vjs=3"
    },
    {
      "name": "Senior Full Stack Software Engineer (Java and/or Angular)",
      "company": "",
      "urls": "EPAM Systems"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=21cb3a753bdbd2cf&fccid=532afac41b2663f7&vjs=3",
      "company": "Software Test Automation Engineer – C#",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=ac5a57dd0d23435f&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "Lead Cloud DevOps & Infrastructure Engineer",
      "urls": ""
    },
    {
      "name": "EPAM Systems",
      "company": "https://pl.indeed.com//rc/clk?jk=25c4208c381e90f1&fccid=532afac41b2663f7&vjs=3",
      "urls": "Software Engineer - Account (Client Lifecycle Management)"
    },
    {
      "name": "",
      "company": "UBS",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNXIpH0zm3dZ4PukkhQwmzg_BKJMySPSXHQAtJqXz0RZyW9KRXRPLJUn-2Q3Zn91eomdDXk5NGvzl862x-ZnBNpfdXkwaDh070rLysA6CEltaZK8jWZYN2NdsXurgIFkRVHe_IyBO4Ii3NbNoKr2pjnLylKKeaLmE8Cv3UqW-TjiihZTUtJyvUUG3YIoJ2gQMs6hy5mBXGRBFuKk-Wsvy0kWOO3dEJK9LhQrft-hrF1Gf85iCaGOSF9fRb6-iWgUrtEYbw5QgUYpT0Tby3ZBEncDNYuWrk1BC7ckDWOypsOj0NSkQyl0gOyycYBHbNDQG0y8zBTyK701ciRWpmxHzqLPhCfz79eGTU6J4C56PaRmKmn95nrbrq0t-hML7isN99I6qeYu-rasWSWGU-JXwOXpW8DNJIpOhor1GlvTfKpELs9EdE9U5CN8KtGT1ow6vysxJ1YfqgPCT-J7UfO_WraKkZOeMla8oCfQ7ytkvdWbUryLNSYhqWtegA5Etzy-6Vc4hZUfoYGkXbzOKG1MR2kNckbOVNzBMG572r978KVCk1IO0ShVNojBqrV0GIEyH8sZmCoHD21DiCv9AC3vVsTwSSFI6ZoMCaceuDK1O2nzCmG642CraUgQrnb8683qtVofUbR3P4K804oRclgVuCSSOK6Ot3fz0a2ddp-DK8Sluw==&p=9&fvj=0&vjs=3"
    },
    {
      "name": "Web Application Engineer",
      "company": "",
      "urls": "UBS"
    },
    {
      "name": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNWJR8exoSmSlYMLAMXeIvRgVivvl20vHqq2p8sA921EbAbI2V-Iax0Xa7pcD-Y4QPMzrMZ_Kd0Q72YpjnlUL2rpwT4gjlltXuUSdJALSwY-z42vqdNfFcHonw4ERnGhG1e62_rnJesDRLd8jXSifyS252s3pgA8_a2ZIbffRFulCotvluvdoHGhbVx8zYfw9w9VDtbJNNEvhp8mq1ewhJ18tPpj8JaFXg5sz2ahnh_PvnT7JNm4WduZzdj-txBi0yLEblY-K50kmosA-2Zdf_e5YYJWWUq0JbfCg0JzJoOXEBGg0ysQ0Z6uI-o-P1Li8xU4PwX5KgCEsiEL81rRRmP-ZBLe0y-ZPcZx0j-VSNH2j9NABb_6TlQvoC8hnQBAj1WUPTTj5jqOQdR0SRhv5c6teMS9ll8JcsYjjSOB_e3STqtsjMZwpL_enngtNOZqXBobUVpsr3-agbuBXylzOsHmuJzW9lMAGqV1qpb-CV3m_sq_zF1yVDz59yaJXtbKdwfFJqNCs8PBuNW3UmFwReafbR-QF21tIj4ulIpRidjMDhe3ht1La_tiA7QVeOp63Awi-XSBDyuiJrOtu0tc3sj-9QaTQ5PPIXLKazOH3HG3lAWYMHTsQvCQPDO68VH5o83DryrQwkUrOg==&p=12&fvj=0&vjs=3",
      "company": "xxx",
      "urls": "25"
    },
    {
      "name": "Inżynier Produktu - transformatory i przekaźniki",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//rc/clk?jk=5c4eba35016d76ab&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Inżynier wsparcia technicznego (f/m/d)",
      "company": "Zuken",
      "urls": "https://pl.indeed.com//rc/clk?jk=f4a6b201c652db65&fccid=8b93b2b181fbb926&vjs=3"
    },
    {
      "name": "Inżynier Automatyk PLC",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=db5567b482026e7b&fccid=8768f8af165a1d65&vjs=3"
    },
    {
      "name": "Systems Engineer",
      "company": "",
      "urls": "Aptiv"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=c6fb2d101a650acb&fccid=8d390ab1843cb8bd&vjs=3",
      "company": "Inżynier Systemowy",
      "urls": "WebCon"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=8b18c4dea14c573b&fccid=9a428be99da93220&vjs=3",
      "company": "C++ Developer",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=e00def048e72773c&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "Inżynier ds. integracji i testowania sieci 4G/5G - KRAKÓW",
      "urls": "Grafton Recruitment Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=3dc0d8f7a439242b&fccid=062f71e131e87cf0&vjs=3",
      "company": "Specialized Software Engineer",
      "urls": "ESET"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=1322adda79909f76&fccid=8e1474db6974999b&vjs=3",
      "company": "Active Safety Systems Engineer",
      "urls": ""
    },
    {
      "name": "Aptiv",
      "company": "https://pl.indeed.com//rc/clk?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3",
      "urls": "Kierownik sekcji jakości"
    },
    {
      "name": "RANDSTAD POLSKA SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALN...",
      "company": "https://pl.indeed.com//rc/clk?jk=8ae60db4d7d4f6d4&fccid=2e3c949643904937&vjs=3",
      "urls": "Systems Engineer - Advanced Safety"
    },
    {
      "name": "",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=9fdd7d1ebbee0aca&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Agile Test Engineer II (Enterprise team)",
      "company": "ESET",
      "urls": "https://pl.indeed.com//rc/clk?jk=7e770c4f4da27f39&fccid=8e1474db6974999b&vjs=3"
    },
    {
      "name": "DevOps Engineer",
      "company": "",
      "urls": "Accenture"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=b948b73b9e7969cd&fccid=a4e4e2eaf26690c9&vjs=3",
      "company": "Product Owner",
      "urls": "New-Invest Business Support"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=b4746daed12ac439&fccid=45c7d019cc96de8e&vjs=3",
      "company": ".Net Software Engineer (Audiovideo)",
      "urls": "Ailleron SA"
    },
    {
      "name": "https://pl.indeed.com//company/Ailleron/jobs/Net-Software-Engineer-cc8a8c81e61536d7?fccid=e008354530941776&vjs=3",
      "company": "Programista C++",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=68be23111168efe6&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "kierownik sekcji jakości",
      "urls": ""
    },
    {
      "name": "Randstad",
      "company": "https://pl.indeed.com//rc/clk?jk=543e3323d59d343d&fccid=f8b265243da9f9d7&vjs=3",
      "urls": "Oracle Developer"
    },
    {
      "name": "Power Media",
      "company": "https://pl.indeed.com//rc/clk?jk=939751af5d5af958&fccid=cfa2a094a933b6fb&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "26",
      "company": "xxx",
      "urls": "27"
    },
    {
      "name": "PRAKTYKANT/STAŻYSTA DS. OCHRONY ŚRODOWISKA",
      "company": "Future Green Innovations",
      "urls": "https://pl.indeed.com//rc/clk?jk=58177fbf054c4edd&fccid=5981b74173f9ac17&vjs=3"
    },
    {
      "name": "Asystent projektanta instalacji sanitarnych",
      "company": "PRACOWNIA PROJEKTOWA",
      "urls": "https://pl.indeed.com//rc/clk?jk=7f0d0faa7b64ae80&fccid=1323085d7566e336&vjs=3"
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
      "name": "ASYSTENT PROJEKTANTA / PROJEKTANT",
      "company": "SPRINGAP",
      "urls": "https://pl.indeed.com//rc/clk?jk=0b65fe4820457332&fccid=5e7110847abc8027&vjs=3"
    },
    {
      "name": "Poszukujemy kandydatów do pracy w Dziale Infrastruktury w Kr...",
      "company": "EKKOM",
      "urls": "https://pl.indeed.com//rc/clk?jk=5fb98467260afae4&fccid=8ab640d69ddcb83d&vjs=3"
    },
    {
      "name": "starszy specjalista w Instytucie Projektowania Urbanistyczne...",
      "company": "",
      "urls": "Politechnika Krakowska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=798d00d49d6fd7cd&fccid=dbf078d8db93f693&vjs=3",
      "company": "Specjalista ds. układów kogeneracyjnych",
      "urls": "CONTROL PROCESS S.A."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=a5f702f39c8819b4&fccid=1cd754675a5b8353&vjs=3",
      "company": "Asystent Projektanta (branża sanitarna)",
      "urls": "P3 Projekt Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=2da7111ea96bc1c9&fccid=60b9b6db9314e9bf&vjs=3",
      "company": "SPECJALISTA DS. PROJEKTÓW ŚRODOWISKOWYCH",
      "urls": "Future Green Innovations"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=e6795431a27d1b55&fccid=5981b74173f9ac17&vjs=3",
      "company": "Inżynier Budowy - Mistrz budowy",
      "urls": "Przedsiębiorstwo Robót Inżynieryjnych INKOP"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=1d3dd98638ee466d&fccid=a695411d8904b8ca&vjs=3",
      "company": "stanowisko BIM Modeler",
      "urls": "WTU"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=2acf29ac609eb1b3&fccid=2ae63731d99baae6&vjs=3",
      "company": "Python Developer",
      "urls": "S-Labs"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=835901db346dc65f&fccid=ce4f4701fb5e9335&vjs=3",
      "company": "Doradca techniczno-handlowy",
      "urls": "Kliweko"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=6a0b41e389e2d73b&fccid=9a2758de8b1030b8&vjs=3",
      "company": "Specjalista ds. modernizacji ewidencji gruntów i budynków",
      "urls": ""
    },
    {
      "name": "MGGP S.A.",
      "company": "https://pl.indeed.com//rc/clk?jk=97072176d204c3c0&fccid=2d0f4f48587e250d&vjs=3",
      "urls": "Doradca Techniczno-Handlowy"
    },
    {
      "name": "Business Bridge Group Sp. z o.o.",
      "company": "https://pl.indeed.com//company/Business-Bridge-Group/jobs/Doradca-Techniczno-Handlowy-abffbce389e00f77?fccid=8bf73af96425da0b&vjs=3",
      "urls": "Technical Product Manager"
    },
    {
      "name": "HRO Digital dla klienta z branży bankowej",
      "company": "https://pl.indeed.com//rc/clk?jk=f6329ce8b231dcf0&fccid=d1b438001cc64a55&vjs=3",
      "urls": "Software Developer- AUTOSAR [rekrutacja online]"
    },
    {
      "name": "INTITEK Polska Sp. z o.o.",
      "company": "https://pl.indeed.com//rc/clk?jk=2d20c0604b9e0c27&fccid=a2489b6ad2bfce33&vjs=3",
      "urls": "Doradca Techniczno-Handlowy (HVAC)"
    },
    {
      "name": "Business Bridge Group",
      "company": "https://pl.indeed.com//rc/clk?jk=b48343c6f3be6089&fccid=569f2bbcd274ba32&vjs=3",
      "urls": "Doradca Techniczno-Handlowy (HVAC)"
    },
    {
      "name": "Business Bridge Group Sp. z o.o.",
      "company": "https://pl.indeed.com//rc/clk?jk=3a90ac5240dc195f&fccid=49d7637e841a56e6&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "28",
      "company": "Pracownik w Sekcji Administracji",
      "urls": "SP ZOZ Szpital Uniwersytecki w Krakowie"
    },
    {
      "name": "https://www.praca.pl/pracownik-w-sekcji-administracji_3345160.html#4dd372c997467f9144dfd16a8191deb6",
      "company": "xxx",
      "urls": "29"
    }
  ],
  "30": [
    {
      "name": "Asystent Projektanta Instalatora",
      "company": "OTS-IP sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-instalatora-krakow,oferta,500033908"
    },
    {
      "name": "Kierownik budowy \\ Kierownik robót",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-kierownik-robot_3359428.html#a3352288f100c079b8a51937b244d276"
    },
    {
      "name": "Kierownik Robót Mechanicznych i Sanitarnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-robot-mechanicznych-i-sanitarnych_3359460.html#a3352288f100c079b8a51937b244d276"
    }
  ],
  "31": [],
  "32": [
    {
      "name": "Kierownik Budowy branży elektrycznej",
      "company": "INERGIS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-branzy-elektrycznej_3348340.html#c28a76f90fec6aedd7dee160bde9e0cc"
    },
    {
      "name": "Kierownik Robót Drogowych",
      "company": "GruntBudowa",
      "urls": "https://www.praca.pl/kierownik-robot-drogowych_3396248.html#c28a76f90fec6aedd7dee160bde9e0cc"
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
      "name": "Inspektor nadzoru w branży budowlano- konstrukcyjnej/ sanita...",
      "company": "IWNISE Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=c4d3b811151bb832&fccid=6fd4736b600aef50&vjs=3"
    },
    {
      "name": "Kierownik ds. Budowlanych",
      "company": "Arche Consulting",
      "urls": "https://pl.indeed.com//rc/clk?jk=e446b6d8a26b391e&fccid=c665c35cf349dff1&vjs=3"
    },
    {
      "name": "Inspektor Nadzoru Elektrycznego [rekrutacja prowadzona onlin...",
      "company": "CAVATINA HOLDING",
      "urls": "https://pl.indeed.com//rc/clk?jk=a53a129d299b13fd&fccid=a5285ec97fd9b16f&vjs=3"
    },
    {
      "name": "Kierownik robót drogowych i torowych",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=373d3be4d9cd22f2&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Kierownik budowy (infrastruktura miejska)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=07959f5272c9a2a7&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "C++ Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=e00def048e72773c&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Kierownik budowy",
      "company": "TOR-KRAK",
      "urls": "https://pl.indeed.com//rc/clk?jk=e18bb3b66aa35ff6&fccid=7b6043ac7d4ffc11&vjs=3"
    },
    {
      "name": "DevSecOps",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=8151141c348c9c23&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "System Configuration Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=f1ca667f6be02989&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "KIEROWNIK ROBÓT SANITARNYCH / HVAC",
      "company": "ACE Group Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=88733c1dac2bec17&fccid=9c25831738ee5606&vjs=3"
    },
    {
      "name": "Security Automation Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=a43b26820e0dc126&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "44": [],
  "45": [
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    }
  ],
  "46": [
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
      "name": "FPGA Design Verification Engineer  Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-design-verification-engineer-working-student-krakow,oferta,1000197226"
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
      "name": "Serwisant urządzeń klimatyzacyjnych oraz grzewczo-wentylacyjnych",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://www.praca.pl/serwisant-urzadzen-klimatyzacyjnych-oraz-grzewczo-wentylacyjnych_3343490.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "Płatne praktyki dla studentów na kierunku elektronika, elektrotechnika itp.",
      "company": "Budimex SA",
      "urls": "https://www.praca.pl/platne-praktyki-dla-studentow-na-kierunku-elektronika,elektrotechnika-itp_3391812.html#5762b554a8fb4df0655169e6f92640bb"
    },
    {
      "name": "Test Automation Engineer (Java) [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/test-automation-engineer-java-rekrutacja-online_3353736.html#5762b554a8fb4df0655169e6f92640bb"
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
      "name": "Ślusarz / Spawacz",
      "company": "TNS Sp. z o.o.",
      "urls": "https://www.praca.pl/slusarz-spawacz_3398542.html#e52eb953462ac72e4fa2b600c711715a"
    },
    {
      "name": "Spawacz metodą TIG+MIG",
      "company": "Gastop Production Sp. z o.o.",
      "urls": "https://www.praca.pl/spawacz-metoda-tig-mig_3378858.html#e52eb953462ac72e4fa2b600c711715a"
    }
  ],
  "53": [],
  "54": [],
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
      "name": "Staż w Zespole R&D, Industrial Designu, Logistyki, IT, Finan...",
      "company": "Green Cell",
      "urls": "https://pl.indeed.com//rc/clk?jk=a8bea13316b4b94e&fccid=7520988c97ff0996&vjs=3"
    },
    {
      "name": "Analityk Systemów Informatycznych",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=1cf477ef5681870a&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Młodszy programista Java/Scala w Telco BSS",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=d7949852202824e4&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Asystent Projektanta Technologa"
    },
    {
      "name": "AMK Kraków",
      "company": "https://pl.indeed.com//rc/clk?jk=4a5f55654c2c7d6d&fccid=5c065c1c92843790&vjs=3",
      "urls": "Płatny staż w Zespole R&D, Industrial Design, Prawnym, Finan..."
    },
    {
      "name": "Świat Baterii",
      "company": "https://pl.indeed.com//rc/clk?jk=2e1540d8c32bb5c8&fccid=88fb836afb9cbe07&vjs=3",
      "urls": "Młodszy konsultant wsparcia technicznego"
    },
    {
      "name": "enova365",
      "company": "https://pl.indeed.com//rc/clk?jk=7f504c9f85e6734b&fccid=84584f1aa6973ca8&vjs=3",
      "urls": "Programista backend"
    },
    {
      "name": "",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=566ca7dd3181aab6&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Projektant - Technolog",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com//rc/clk?jk=d28797d8ccec234f&fccid=5c065c1c92843790&vjs=3"
    },
    {
      "name": "Starszy konsultant projektu księgowość",
      "company": "enova365",
      "urls": "https://pl.indeed.com//rc/clk?jk=43a847df99809592&fccid=84584f1aa6973ca8&vjs=3"
    },
    {
      "name": "Konsultant ds. wdrożeń (moduł Kadry Płace i HR)",
      "company": "enova365",
      "urls": "https://pl.indeed.com//rc/clk?jk=617f2b3b339d0c72&fccid=84584f1aa6973ca8&vjs=3"
    },
    {
      "name": "Scala developer - IoT",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=2e54e0eb0e7c6ea2&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Programista backend (bankowość)",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=713c0aa3b7241615&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Technolog Procesu"
    },
    {
      "name": "Hays",
      "company": "https://pl.indeed.com//rc/clk?jk=cad1d7c6f30b2502&fccid=31670bef3ae6497b&vjs=3",
      "urls": "Operator obrabiarek CNC"
    },
    {
      "name": "Bamet",
      "company": "https://pl.indeed.com//rc/clk?jk=0cd40272cb997607&fccid=55f842c9b66dbe5b&vjs=3",
      "urls": "Full Stack Engineer - IoT"
    },
    {
      "name": "",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=c4dde19424a8a8f0&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Kierownik projektu IT",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=fc4d070c679ac3ee&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Operator szlifierki CNC",
      "urls": "Bamet"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=687e1ecd956daac9&fccid=55f842c9b66dbe5b&vjs=3",
      "company": "Product Owner",
      "urls": "New-Invest Business Support"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=b4746daed12ac439&fccid=45c7d019cc96de8e&vjs=3",
      "company": "Senior Java Developer",
      "urls": "Citycom"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=adb81d8d6476d0a2&fccid=8744805f51010781&vjs=3",
      "company": "Senior .Net",
      "urls": "New-Invest Business Support"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d4077fa00ea254a3&fccid=45c7d019cc96de8e&vjs=3",
      "company": "Inżynier Systemowy - DevOps IoT Platform",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=2cebae1656b21935&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Software Engineer in Test | Kraków"
    },
    {
      "name": "Vsoft",
      "company": "https://pl.indeed.com//rc/clk?jk=ee63930a2a2139bc&fccid=310d47694055bd6e&vjs=3",
      "urls": "Expired: QA Engineer"
    },
    {
      "name": "Moorgate",
      "company": "https://pl.indeed.com//rc/clk?jk=ac0581821b0efafb&fccid=f9e2ae1d4db307bf&vjs=3",
      "urls": "Senior Consultant – Java Developer"
    },
    {
      "name": "Grafton Recruitment Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=258dcab56c00b82a&fccid=062f71e131e87cf0&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "59",
      "company": "FPGA Algorithm Modeling Engineer Working Student",
      "urls": "Nokia Solutions and Networks Sp. z o.o."
    },
    {
      "name": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954",
      "company": "Modszy Programista (k/m)",
      "urls": "GS Software Sp. z o.o."
    },
    {
      "name": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320",
      "company": "Junior Java Developer",
      "urls": "Benhauer Sp. z o.o."
    },
    {
      "name": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033",
      "company": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "urls": "CSG S.A."
    },
    {
      "name": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135",
      "company": "Junior C# Developer",
      "urls": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c."
    },
    {
      "name": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433",
      "company": "Junior PHP Developer - Full Stack",
      "urls": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c."
    },
    {
      "name": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117",
      "company": "Working Student - Software Engineer C/C++",
      "urls": "Nokia Solutions and Networks Sp. z o.o."
    },
    {
      "name": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000196951",
      "company": "Junior PHP Developer",
      "urls": "Benhauer Sp. z o.o."
    },
    {
      "name": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860",
      "company": "Developer.Net",
      "urls": "FUTURITI SP. Z O.O. "
    },
    {
      "name": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800",
      "company": "Praktyki letnie w obszarze Machine Learning i Artificial Intelligence",
      "urls": "Ericsson"
    },
    {
      "name": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-machine-learning-i-artificial-intelligence-krakow,oferta,7473411",
      "company": "Praktyki letnie w obszarze programowania i testowania",
      "urls": "Ericsson"
    },
    {
      "name": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-programowania-i-testowania-krakow,oferta,7473426",
      "company": "Junior SQL Developer",
      "urls": "AG TEST HR Spka z ograniczon odpowiedzialnoci sp.k."
    },
    {
      "name": "https://www.pracuj.pl/praca/junior-sql-developer-krakow,oferta,1000194416",
      "company": "Praktykant Salesforce  get the HOT Salesforce skill",
      "urls": "Accenture Sp. z o.o."
    },
    {
      "name": "https://www.pracuj.pl/praca/praktykant-salesforce-get-the-hot-salesforce-skill-krakow,oferta,7468135",
      "company": "Praktykant/ Junior - Test Automation Developer (DevOps)",
      "urls": "Accenture Sp. z o.o."
    },
    {
      "name": "https://www.pracuj.pl/praca/praktykant-junior-test-automation-developer-devops-krakow,oferta,7468131",
      "company": "Junior .NET Developer (fullstack) [online recruitment]",
      "urls": "Grafton Recruitment Polska Sp. z o.o."
    },
    {
      "name": "https://www.pracuj.pl/praca/junior-net-developer-fullstack-online-recruitment-krakow,oferta,7464661",
      "company": "FPGA DSP Designer [rekrutacja online]",
      "urls": "Nokia Solutions and Networks Sp. z o.o."
    },
    {
      "name": "https://www.praca.pl/fpga-dsp-designer-rekrutacja-online_3393862.html#7c55e5aaf0f590efa0698495dc21f21f",
      "company": "xxx",
      "urls": "60"
    },
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "FPGA Test Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-test-engineer-working-student-krakow,oferta,1000197217"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
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
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000196951"
    },
    {
      "name": "Working Student - Software Test Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-test-engineer-krakow,oferta,1000197209"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "RF Test Engineer - Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/rf-test-engineer-working-student-krakow,oferta,1000197222"
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
      "name": "Praktyki letnie w obszarze Machine Learning i Artificial Intelligence",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-machine-learning-i-artificial-intelligence-krakow,oferta,7473411"
    },
    {
      "name": "Praktyki letnie w obszarze programowania i testowania",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-programowania-i-testowania-krakow,oferta,7473426"
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
      "name": "Junior .NET Developer (fullstack) [online recruitment]",
      "company": "Grafton Recruitment Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-net-developer-fullstack-online-recruitment-krakow,oferta,7464661"
    }
  ],
  "61": [
    {
      "name": "Modszy specjalista ds. integracji danych",
      "company": "Maspex",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-integracji-danych-krakow-okolice,oferta,1000196270"
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
    },
    {
      "name": "Specjalista IT [rekrutacja prowadzona online]",
      "company": "ZIKO Apteka Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-it-rekrutacja-prowadzona-online_3356916.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Database Administrator",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/database-administrator_3313952.html#4dfda4bb11f7b9d46579d2e61821394d"
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
      "name": "Administrator Baz Danych PostgreSQL",
      "company": "Solid Security Sp. z o.o.",
      "urls": "https://www.praca.pl/administrator-baz-danych-postgresql_3333996.html#4dfda4bb11f7b9d46579d2e61821394d"
    },
    {
      "name": "Databases Administrator MySQL/PostgreSQL",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/databases-administrator-mysql-postgresql_3376656.html#4dfda4bb11f7b9d46579d2e61821394d"
    }
  ],
  "62": [
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
      "name": "Symfony Fullstack Developer [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/symfony-fullstack-developer-rekrutacja-online_3361700.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "Angular Developer",
      "company": "Power Media",
      "urls": "https://www.praca.pl/angular-developer_3335760.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    },
    {
      "name": "Web Design Developer",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/web-design-developer_3378608.html#319721ddd3ff5aa49d12cd5362dfc0f8"
    }
  ],
  "63": [
    {
      "name": "Nauczyciel grafiki komputerowej",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-grafiki-komputerowej_3355084.html#97678f7786db6bd26378e94bb723a9bb"
    },
    {
      "name": "Grafik komputerowy dtp",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/grafik-komputerowy-dtp_3397354.html#97678f7786db6bd26378e94bb723a9bb"
    },
    {
      "name": "Doradca klienta o specjalności projektant grafik",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/doradca-klienta-o-specjalnosci-projektant-grafik_3390434.html#97678f7786db6bd26378e94bb723a9bb"
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
      "name": "Projektant [rekrutacja online]",
      "company": "Impel Tech Solutions Sp. Z o.o. Sp. K",
      "urls": "https://www.praca.pl/projektant-rekrutacja-online_3378674.html#849ede6d971d66992625aa386af538a2"
    },
    {
      "name": "P1 CAD Software Test Automation Engineer (C#) [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/p1-cad-software-test-automation-engineer-c-rekrutacja-online_3353744.html#849ede6d971d66992625aa386af538a2"
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
      "name": "Specjalista ds. Badawczych",
      "company": "Cebrio",
      "urls": "https://pl.indeed.com//rc/clk?jk=0bcbb25d41fdae14&fccid=1cd25ec87a06c80b&vjs=3"
    },
    {
      "name": "Inżynier Automatyk - rekrutacja prowadzona online",
      "company": "Fitech",
      "urls": "https://pl.indeed.com//rc/clk?jk=d8931e2ecdfc3385&fccid=52d48f1974e43ed4&vjs=3"
    },
    {
      "name": "PROGRAMISTA/OPERATOR TOKARKI CNC",
      "company": "SpecialTech",
      "urls": "https://pl.indeed.com//rc/clk?jk=1b2937533654c0e7&fccid=7c5949c4b44aef0d&vjs=3"
    },
    {
      "name": "Asset Manager (Russian or German Speaker preferred)",
      "company": "",
      "urls": "Cisco Systems"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=b85ab3783c32dc83&fccid=dfc44f3b8c44a6db&vjs=3",
      "company": "Programista CNC",
      "urls": "Kolejowe Zakłady Nawierzchniowe"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d1d0859a7d3ec611&fccid=640acb9e5c3b5646&vjs=3",
      "company": "xxx",
      "urls": "66"
    },
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
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "Junior Customer Support",
      "company": "Reality Games Polska sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-customer-support-krakow,oferta,1000238785"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Accounts Payable Associate - Junior",
      "company": "QVC Poland Global Services Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/accounts-payable-associate-junior-krakow,oferta,1000197328"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
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
      "name": "Ruby on Rails Developer",
      "company": "Power Media",
      "urls": "https://www.praca.pl/ruby-on-rails-developer_3380544.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Data Analyst with Python",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/data-analyst-with-python_3372270.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Senior Oracle DB Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-oracle-db-developer_3382924.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Senior Java Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-java-developer_3382906.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Lead .NET Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/lead-net-developer_3382862.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Java Developer / Python Developer",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/java-developer-python-developer_3372238.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Technical Project Manager",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/technical-project-manager_3382918.html#cb4b6710a47123eafde81a931a85ab0c"
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
      "name": "Specjalista ds. rozwoju portfolio",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-rozwoju-portfolio_3369914.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Projektant Java [rekrutacja online]",
      "company": "Asseco Poland S.A.",
      "urls": "https://www.praca.pl/projektant-java-rekrutacja-online_3330020.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "CE Digital Learning Design Manager",
      "company": "Tesco Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/ce-digital-learning-design-manager_3383684.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Tech Lead/Expert/Senior Full-Stack Developer ",
      "company": "IT CONNECT Sp. z o.o.",
      "urls": "https://www.praca.pl/tech-lead-expert-senior-full-stack-developer_3327020.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Data Center Engineer",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/data-center-engineer_3347770.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Administrator baz danych (DBA) / SQL Developer",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/administrator-baz-danych-dba-sql-developer_3396678.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Senior Full-stack Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-full-stack-developer_3368710.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Laravel Fullstack Developer [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/laravel-fullstack-developer-rekrutacja-online_3380656.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Specjalista IT [rekrutacja prowadzona online]",
      "company": "ZIKO Apteka Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-it-rekrutacja-prowadzona-online_3356916.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Senior Ruby on Rails Developer",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/senior-ruby-on-rails-developer_3366410.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Bioinformatyk",
      "company": "Vendo Krzysztof Domagała",
      "urls": "https://www.praca.pl/bioinformatyk_3385522.html#cb4b6710a47123eafde81a931a85ab0c"
    },
    {
      "name": "Database Administrator",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/database-administrator_3313952.html#cb4b6710a47123eafde81a931a85ab0c"
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
    }
  ],
  "68": [
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
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
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000196951"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Praktyki letnie w obszarze Machine Learning i Artificial Intelligence",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-machine-learning-i-artificial-intelligence-krakow,oferta,7473411"
    },
    {
      "name": "Praktyki letnie w obszarze programowania i testowania",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-programowania-i-testowania-krakow,oferta,7473426"
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
      "name": "Junior .NET Developer (fullstack) [online recruitment]",
      "company": "Grafton Recruitment Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-net-developer-fullstack-online-recruitment-krakow,oferta,7464661"
    },
    {
      "name": "FPGA DSP Designer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/fpga-dsp-designer-rekrutacja-online_3393862.html#7c55e5aaf0f590efa0698495dc21f21f"
    }
  ],
  "69": [
    {
      "name": "Modszy Administrator IT",
      "company": "POLSKA PRESS SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/mlodszy-administrator-it-krakow,oferta,1000221960"
    }
  ],
  "70": [
    {
      "name": "Modszy Administrator IT",
      "company": "POLSKA PRESS SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/mlodszy-administrator-it-krakow,oferta,1000221960"
    }
  ],
  "71": [],
  "72": [],
  "73": [
    {
      "name": "Specjalista ds. Wsparcia Technicznego IT z językiem niemieck...",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIczjBpMsplYC-tdu2ES2BVxhiar79OoBogfZvw_mjR5o_Cd5o52GhBuve0zqGqz0Sy5-QXZIw2XTvfZp-uPvpX_hqoBYJqXSrjfX1aY9HpysXe8p5NY659YeyJLov4fOn-7vhRegXurlh78HExtRALaparniEAmXEvdXW88CjBXoZHimHYYLxwOQWizDVr3edou-j9BKWqDr4UncnMAefpqsNRAmDDeTSRFCq4eH8yDH47McIhAYZs9R_lOqL0c87NDk5zqOZVH4SJT0n8q_MmPJMGQz_rSAywKm9fWzhC-XZbGLcsXcl_Ein1GhWKa0lwhz_NTDqUx6GuG07Su2UZlzdKucb90gG97sdRbg74oWz_c0cI_UQVSbVodcsNDMtKXGCbCM9wRsc_PIr3V75HJOdOcoR4vzarlfGPvwZlnl-SLwIzM0lP4av0INozhwbLVKCk9X2FJhMrK4KdonXyB1VUZEuPS5fCrQ-wQoxSb2bCNxYnuQJe7Mnw8pUQuXa7Cg0yhrVrtxH-wEgP62bxexE2sBbslJPNLFFI-Dxg0xDqyQBavhzaUzmnU7digQ3dtUadrfCz7V_8g5e6VaaWn6nur7Q64MwmsBS-kHiIPGCnaabnZgO739qiiJiEjaMN_JE7HC2wVDIUjyovif_ZPUi5kRfGXaE48sBNjaAnElMlS1zGaQ1x4KbYY_l6Z6Hk=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Specjalista ds. komunikacji",
      "company": "",
      "urls": "Eurovia Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=8865b386b0e44f0c&fccid=6df22a29a2de0162&vjs=3",
      "company": "Lider Działu Inżynierii Procesu",
      "urls": "Grafton Recruitment Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=c94802d34ca011fe&fccid=062f71e131e87cf0&vjs=3",
      "company": "IT Support Technician",
      "urls": "New-Invest Business Support"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=0842ddbe0837035a&fccid=45c7d019cc96de8e&vjs=3",
      "company": "Starszy Programista Java (lider techniczny)",
      "urls": "Asseco Poland"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=2abf15e40e09d936&fccid=50ff968648ffa038&vjs=3",
      "company": "LIDER ZESPOŁU WDROŻENIOWEGO ERP",
      "urls": "POLKAS"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=52f21e8904610eef&fccid=34152a3d3613ca17&vjs=3",
      "company": "Tester Automatyzujący w Javie",
      "urls": "Sii Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=23f45d86c429e5d5&fccid=291f67da0c0c0d67&vjs=3",
      "company": "Performance Media Team Leader",
      "urls": "Intredo"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=cabdd414a6bf76b2&fccid=ddeef73797f17f05&vjs=3",
      "company": "Programista C/C++",
      "urls": "Sii Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=7c9781e8291cf057&fccid=291f67da0c0c0d67&vjs=3",
      "company": "xxx",
      "urls": "74"
    },
    {
      "name": "Inżynier elektryk / Projektant instalacji elektrycznych",
      "company": "ELSTA",
      "urls": "https://pl.indeed.com//rc/clk?jk=10d6f43157880baf&fccid=507fba9e43be3921&vjs=3"
    }
  ],
  "75": [
    {
      "name": "IBM Poland Internship - Watson Machine Learning/Watson OpenS...",
      "company": "",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=8b999a8552cd5d4a&fccid=de71a49b535e21cb&vjs=3",
      "company": "PLANISTA/ WDROŻENIOWIEC SYSTEMÓW OPARTYCH NA QGIS ORAZ CAD",
      "urls": "GLOBAL SOFTELNET"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=60c8b70adc91d110&fccid=87f74a987fba589f&vjs=3",
      "company": "FTM QA Developer",
      "urls": ""
    },
    {
      "name": "IBM Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=607e5080e4790e02&fccid=de71a49b535e21cb&vjs=3",
      "urls": "Software Developer"
    },
    {
      "name": "",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=6e68974b0364eb94&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Dział ds. Osób Niepełnosprawnych - Pracownik IT",
      "company": "Uniwersytet Jagielloński - Dział ds. Osób Niepełno...",
      "urls": "https://pl.indeed.com//rc/clk?jk=1882a228597ed431&fccid=4cfdfea619565a49&vjs=3"
    },
    {
      "name": "Software Developer QA",
      "company": "",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=a1f1df050441fdc4&fccid=de71a49b535e21cb&vjs=3",
      "company": "Data & AI Architect",
      "urls": ""
    },
    {
      "name": "IBM Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=03552730e217d16e&fccid=de71a49b535e21cb&vjs=3",
      "urls": "Software Developer JavaScript/React"
    },
    {
      "name": "",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=323e237b9797c4ff&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Software Development Manager",
      "company": "",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=2fde0bae5be91402&fccid=de71a49b535e21cb&vjs=3",
      "company": "Młodszy administrator / serwisant",
      "urls": "Softelnet spółka akcyjna sp.k."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=c3de9f0405325c9a&fccid=c120232169b76303&vjs=3",
      "company": "DB2 Support Engineer",
      "urls": ""
    },
    {
      "name": "IBM Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=ea619088c13a4668&fccid=de71a49b535e21cb&vjs=3",
      "urls": "Technical Support Engineer"
    },
    {
      "name": "",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=bb0348a019bc196d&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Technical Support Engineer - Business Analytics",
      "company": "",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=e18d27d97990badc&fccid=de71a49b535e21cb&vjs=3",
      "company": "Software Developer - Quality Assurance",
      "urls": ""
    },
    {
      "name": "IBM Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=268fc67f4b8a5f35&fccid=de71a49b535e21cb&vjs=3",
      "urls": "C++ Software Developer - Database Engine"
    },
    {
      "name": "",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c6c57ce3d0c70fbf&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Junior/Specialist IT Support with German",
      "company": "QVC POLAND GLOBAL SERVICES SP Z O O",
      "urls": "https://pl.indeed.com//rc/clk?jk=82cb5f10bd543d1a&fccid=d82b729ef7602eb5&vjs=3"
    },
    {
      "name": "Cloud DevOps Site Reliability Engineering (SRE) Developer",
      "company": "",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=ab59f9eb24f5b6d8&fccid=de71a49b535e21cb&vjs=3",
      "company": "xxx",
      "urls": "76"
    },
    {
      "name": "PROJEKTANT - DESIGNER",
      "company": "NEWAG GROUP",
      "urls": "https://pl.indeed.com//rc/clk?jk=24c2ff2105232369&fccid=b1b38fabe5e92cf0&vjs=3"
    },
    {
      "name": "Projektant - Technolog",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com//rc/clk?jk=d28797d8ccec234f&fccid=5c065c1c92843790&vjs=3"
    }
  ],
  "77": [],
  "78": [],
  "79": [
    {
      "name": "Modszy Administrator IT",
      "company": "POLSKA PRESS SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/mlodszy-administrator-it-krakow,oferta,1000221960"
    }
  ],
  "80": [],
  "81": [
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3359394.html#c6e7b152e38eedf796af0676ce8eadd2"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3353118.html#c6e7b152e38eedf796af0676ce8eadd2"
    }
  ],
  "82": [],
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
      "name": "Elektromechanik [rekrutacja online]",
      "company": "Lafarge",
      "urls": "https://www.praca.pl/elektromechanik-rekrutacja-online_3373114.html#08421fbf2061793ed97761471aad46e0"
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
      "name": "Test Automation Engineer (Java) [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/test-automation-engineer-java-rekrutacja-online_3353736.html#08421fbf2061793ed97761471aad46e0"
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
      "name": "Dyrektor Sprzedaży / Sales manager",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/dyrektor-sprzedazy-sales-manager_3017216.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Inżynier Automatyk PLC",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/inzynier-automatyk-plc_3339232.html#08421fbf2061793ed97761471aad46e0"
    },
    {
      "name": "Automatyk",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/automatyk_3397384.html#08421fbf2061793ed97761471aad46e0"
    }
  ],
  "89": [
    {
      "name": "Staysta w Dziale Finansw",
      "company": "Sappi Europe (Polska)",
      "urls": "https://www.pracuj.pl/praca/stazysta-w-dziale-finansow-krakow,oferta,1000228597"
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
      "name": "Specjalista ds. e-Commerce - Sta",
      "company": "NAKDCOM PL Sp. z o.o. ",
      "urls": "https://www.pracuj.pl/praca/specjalista-ds-e-commerce-staz-krakow,oferta,1000209179"
    },
    {
      "name": "Full Time Administrative Assistant - Remote",
      "company": "WEB BESPOKERS FILIP KOTLARZ",
      "urls": "https://www.pracuj.pl/praca/full-time-administrative-assistant-remote-krakow-okolice,oferta,1000204756"
    },
    {
      "name": "Asystent /-ka Kierownika Projektu",
      "company": "Enervigo sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-kierownika-projektu-krakow,oferta,1000223118"
    },
    {
      "name": "Asystentka / Sekretarka - Concierge online",
      "company": "Recruit Europe Takeshige Yokota",
      "urls": "https://www.pracuj.pl/praca/asystentka-sekretarka-concierge-online-krakow,oferta,1000227254"
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
      "name": "Junior HR Business Partner",
      "company": "ZAMEK KRLEWSKI NA WAWELU - PASTWOWE ZBIORY SZTUKI",
      "urls": "https://www.pracuj.pl/praca/junior-hr-business-partner-krakow,oferta,7471096"
    },
    {
      "name": "Modszy Mechanik",
      "company": "Instytut Biotechnologii Surowic i Szczepionek BIOMED S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-mechanik-krakow,oferta,7462457"
    },
    {
      "name": "Senior DevOps Engineer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-devops-engineer_3383732.html#afa6638b90a471dbf4fa517b806872ca"
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
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#afa6638b90a471dbf4fa517b806872ca"
    },
    {
      "name": "Administrator Sieci",
      "company": "Solid Security Sp. z o.o.",
      "urls": "https://www.praca.pl/administrator-sieci_3334000.html#afa6638b90a471dbf4fa517b806872ca"
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
    }
  ],
  "91": [
    {
      "name": "Working Student - Software Test Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-test-engineer-krakow,oferta,1000197209"
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
      "name": "Praktykant na kontrakcie kolejowym",
      "company": "Trakcja PRKil S.A. ",
      "urls": "https://www.pracuj.pl/praca/praktykant-na-kontrakcie-kolejowym-krakow,oferta,1000190148"
    },
    {
      "name": "Kierownik Budowy branży elektrycznej",
      "company": "INERGIS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-branzy-elektrycznej_3348340.html#11f7293a565ea6e3c1cf8f956026adf1"
    },
    {
      "name": "Kierownik Robót Drogowych",
      "company": "GruntBudowa",
      "urls": "https://www.praca.pl/kierownik-robot-drogowych_3396248.html#11f7293a565ea6e3c1cf8f956026adf1"
    }
  ],
  "92": [
    {
      "name": "Stolarz meblowy / Operator CNC",
      "company": "Euronova Sp.z o.o. Sp.k.",
      "urls": "https://www.praca.pl/stolarz-meblowy-operator-cnc_3348166.html#8700aba4dd2cea5d16e8dd0e95cb8625"
    },
    {
      "name": "Drukarz / Specjalista do obsługi ploterów",
      "company": "Drops Print Sp. z o.o.",
      "urls": "https://www.praca.pl/drukarz-specjalista-do-obslugi-ploterow_3381552.html#8700aba4dd2cea5d16e8dd0e95cb8625"
    }
  ],
  "93": [
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
      "name": "Inżynier Utrzymania Ruchu [rekrutacja online]",
      "company": "Moltton",
      "urls": "https://www.praca.pl/inzynier-utrzymania-ruchu-rekrutacja-online_3337244.html#70c8bdcb4dd39940089c496cad819ba8"
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
      "name": "Automatyk-Programista",
      "company": "",
      "urls": "Frapol"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=86eb220d2ea80d09&fccid=9c2047b7b01199b2&vjs=3",
      "company": "Power Grids - Data Engineer",
      "urls": ""
    },
    {
      "name": "ABB",
      "company": "https://pl.indeed.com//rc/clk?jk=25f1a14f57adb6a4&fccid=38b4474838e7b7a1&vjs=3",
      "urls": "Power Grids - Proposal Manager"
    },
    {
      "name": "",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=2f9a7e357a85f330&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Inżynier Automatyk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=0f9e18031e6d937f&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Power Grids - Senior System Integrator",
      "company": "",
      "urls": "ABB"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=3316025abf771154&fccid=38b4474838e7b7a1&vjs=3",
      "company": "C++ Software Developer [online recruitment]",
      "urls": "FEV Polska sp. z.o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=52ce9e669f910ec9&fccid=55e92ccd2de02ad4&vjs=3",
      "company": "Software Automation Engineer",
      "urls": "SKELIA"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=6343f202af9a99cf&fccid=4b7f4b3718395175&vjs=3",
      "company": "Embedded Engineer",
      "urls": "KUBO Sp. z o. o. Spółka komandytowa"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=13cbfc06446848ec&fccid=3192074ede128056&vjs=3",
      "company": "Power Grids - Full Stack Developer for SDM600 Solutions",
      "urls": ""
    },
    {
      "name": "ABB",
      "company": "https://pl.indeed.com//rc/clk?jk=337b9ca850f242ac&fccid=38b4474838e7b7a1&vjs=3",
      "urls": "Senior Solar Engineer – Due Diligence"
    },
    {
      "name": "The Green Recruitment Company",
      "company": "https://pl.indeed.com//rc/clk?jk=a4362774ce0a52d4&fccid=55ab05b56eddf8a9&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "95",
      "company": "Modszy Administrator IT",
      "urls": "POLSKA PRESS SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI"
    },
    {
      "name": "https://www.pracuj.pl/praca/mlodszy-administrator-it-krakow,oferta,1000221960",
      "company": "Virtual Platform Systems Administrator",
      "urls": "Luxoft"
    },
    {
      "name": "https://www.praca.pl/virtual-platform-systems-administrator_3368708.html#d9a9fa3f92e7917e050de2a76db4fad0",
      "company": "Administrator Systemów Linux",
      "urls": "Solid Security Sp. z o.o."
    },
    {
      "name": "https://www.praca.pl/administrator-systemow-linux_3333998.html#d9a9fa3f92e7917e050de2a76db4fad0",
      "company": "xxx",
      "urls": "96"
    },
    {
      "name": "Securities Operations Junior Analyst",
      "company": "HSBC Service Delivery (Polska) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/securities-operations-junior-analyst-krakow,oferta,1000227196"
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
      "name": "Senior Financial Accountant",
      "company": "Network eG",
      "urls": "https://www.pracuj.pl/praca/senior-financial-accountant-krakow,oferta,1000233731"
    },
    {
      "name": "Junior AML Compliance Analyst",
      "company": "BROWN BROTHERS HARRIMAN (POLAND) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-aml-compliance-analyst-krakow,oferta,7461666"
    },
    {
      "name": "Doradca Klienta",
      "company": "Credit Agricole Bank Polska S.A.",
      "urls": "https://www.praca.pl/doradca-klienta_3326722.html#a9c91d76c72a3acb877897b0b7a390a3"
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
    }
  ],
  "97": [
    {
      "name": "Asystent/ka Zarzdu",
      "company": "MKS Cracovia Sportowa Spka Akcyjna",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-zarzadu-krakow,oferta,1000234174"
    },
    {
      "name": "Asystent Biznesowy - Business Assistant (MBA/MS/MA)",
      "company": "Humtap Inc.",
      "urls": "https://www.pracuj.pl/praca/asystent-biznesowy-business-assistant-mba-ms-ma-krakow,oferta,1000201645"
    },
    {
      "name": "Asystentka/Asystent Zarzdu",
      "company": "Columbus Energy S.A.",
      "urls": "https://www.pracuj.pl/praca/asystentka-asystent-zarzadu-krakow,oferta,7462222"
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
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "xxx",
      "urls": "102"
    },
    {
      "name": "Trader / Specjalista ds. rynku energii i gazu",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/trader-specjalista-ds-rynku-energii-i-gazu_3361562.html#13bb3b6ed16456dfdeb65e09556f884c"
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
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3359394.html#8c7f6c4ecbdac056738f9d6526320c31"
    },
    {
      "name": "Integrated Catchment Modeller (InfoWorks ICM)",
      "company": "Jacobs",
      "urls": "https://www.praca.pl/integrated-catchment-modeller-infoworks-icm_3396890.html#8c7f6c4ecbdac056738f9d6526320c31"
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
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcl7SaLP_MpaOcC0R1fREk1o9tOKV_PSlZgoYyESvbDEc98tycvB0Ry408scwOFYAiwNaCggxKhWhkZhVFIaAhgX-E2LmPKWZJA_Dp4wPEF4028mkVNNprJjN6-P96Lknx8WlkTfpNyWxBouAovaRaCRrOcQR4H-NDwcFkLsGFZnZws6k7S8OEd7rEvkVpgkpSlVI1KAMZtQbNbzWmG-DCMrNgbNY-39X4_FmU_ceiBPYaLIKolw1nJ5R4nDcQYVAQ9G2uWyl3rMIr0TuMfY0QbUEbermhNXPvnZ0pDS-TWEFZBTdIwIKGh-m2w3Ez0a5VjxHLcUrHhX5-wzRorhrbLHkz9y_rh7fvOvAeQYaQI0Gn3M1QQ9PweU7I8yUj6o9RczVgYeqosbSNLyngossaKBGNqSuuqdLvZc9otGaTdBekHbAi83BzTbo1tNHvAoo0Lufu676bnX60r35xb6MY1dKOZZa-l86_eHmvxnXYjR1PUCTUuLtTZd8j29uAGfJb1EkJkSQEvxqoNbFSnHpwU0EMN3QfjpqnyEQRBwTczzLIE0L4T5Sf9hOZa92sJ5-tpIXTV_XLrJA1Tq2qxYVN3ftaFVglCW6yzum9QZxfSin62updWoOn3Vt7-s-R_wLCOP-bygES2jwCLdEelzwbN&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Kierownik Zespołu Handlowego - rekrutacja prowadzona zdalnie",
      "company": "Futuriti",
      "urls": "https://pl.indeed.com//rc/clk?jk=8199866ac6429e4d&fccid=14f634228675fb3a&vjs=3"
    },
    {
      "name": "Product Manager (biura rachunkowe)",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=692ebe743f5a7a7a&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Kierownik projektu IT",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=fc4d070c679ac3ee&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Menadżer IT plus eCommerce NOWA"
    },
    {
      "name": "Goldman Recruitment",
      "company": "https://pl.indeed.com//rc/clk?jk=588a10cfd05ac937&fccid=503ed6c94c8786f6&vjs=3",
      "urls": "Kierownik działu AI/ML"
    },
    {
      "name": "",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=255b72eba3edc3ec&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Cloud Product Manager",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=593d5b3ac0507a69&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Kierownik ds. rozwoju biznesu IoT",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=9406f6cc7a335725&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Programista C embedded"
    },
    {
      "name": "New-Invest Business Support",
      "company": "https://pl.indeed.com//rc/clk?jk=3cc3f8784b0e4603&fccid=45c7d019cc96de8e&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "112",
      "company": "Senior Subject Matter Expert – VDI & SRA [rekrutacja online]",
      "urls": "ING Tech Poland"
    },
    {
      "name": "https://www.praca.pl/senior-subject-matter-expert-vdi-sra-rekrutacja-online_3361102.html#8340b7c0fa56d555f2ad6e3d20e2a4a4",
      "company": "Project Management Officer",
      "urls": "Luxoft"
    },
    {
      "name": "https://www.praca.pl/project-management-officer_3388214.html#8340b7c0fa56d555f2ad6e3d20e2a4a4",
      "company": "Project Accounting Manager [rekrutacja online]",
      "urls": "Motorola Solutions"
    },
    {
      "name": "https://www.praca.pl/project-accounting-manager-rekrutacja-online_3394348.html#8340b7c0fa56d555f2ad6e3d20e2a4a4",
      "company": "IT Projekt Manager",
      "urls": "ASTEK Polska"
    },
    {
      "name": "https://www.praca.pl/it-projekt-manager_3364422.html#8340b7c0fa56d555f2ad6e3d20e2a4a4",
      "company": "IT Transition Manager Lead",
      "urls": "Capgemini Polska Sp. z o.o."
    },
    {
      "name": "https://www.praca.pl/it-transition-manager-lead_3354888.html#8340b7c0fa56d555f2ad6e3d20e2a4a4",
      "company": "xxx",
      "urls": "113"
    },
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
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
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000196951"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Praktyki letnie w obszarze Machine Learning i Artificial Intelligence",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-machine-learning-i-artificial-intelligence-krakow,oferta,7473411"
    },
    {
      "name": "Praktyki letnie w obszarze programowania i testowania",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-programowania-i-testowania-krakow,oferta,7473426"
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
      "name": "Junior .NET Developer (fullstack) [online recruitment]",
      "company": "Grafton Recruitment Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-net-developer-fullstack-online-recruitment-krakow,oferta,7464661"
    }
  ],
  "114": [
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
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
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000196951"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "Praktyki letnie w obszarze Machine Learning i Artificial Intelligence",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-machine-learning-i-artificial-intelligence-krakow,oferta,7473411"
    },
    {
      "name": "Praktyki letnie w obszarze programowania i testowania",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-programowania-i-testowania-krakow,oferta,7473426"
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
      "name": "Junior .NET Developer (fullstack) [online recruitment]",
      "company": "Grafton Recruitment Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-net-developer-fullstack-online-recruitment-krakow,oferta,7464661"
    },
    {
      "name": "Angular Developer [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/angular-developer-rekrutacja-online_3372364.html#ee277a6c055d2b7dabe1e040f80c0613"
    },
    {
      "name": "Lead KDB/Q Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/lead-kdb-q-developer_3382856.html#ee277a6c055d2b7dabe1e040f80c0613"
    },
    {
      "name": "Senior Back-End .Net Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-back-end-net-developer_3382878.html#ee277a6c055d2b7dabe1e040f80c0613"
    },
    {
      "name": "Senior Java Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-java-developer_3382906.html#ee277a6c055d2b7dabe1e040f80c0613"
    },
    {
      "name": "Senior / Advanced Software Developer",
      "company": "Merit Poland Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-advanced-software-developer_3365188.html#ee277a6c055d2b7dabe1e040f80c0613"
    },
    {
      "name": "Back-End Regular .Net Developer",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/back-end-regular-net-developer_3360108.html#ee277a6c055d2b7dabe1e040f80c0613"
    },
    {
      "name": "L1 Embedded Senior Software Developer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/l1-embedded-senior-software-developer-rekrutacja-online_3314158.html#ee277a6c055d2b7dabe1e040f80c0613"
    },
    {
      "name": "Software Developer - Embedded Automotive [rekrutacja online]",
      "company": "INTITEK Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/software-developer-embedded-automotive-rekrutacja-online_3299224.html#ee277a6c055d2b7dabe1e040f80c0613"
    },
    {
      "name": "Software Developer- AUTOSAR [rekrutacja online]",
      "company": "INTITEK Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/software-developer-autosar-rekrutacja-online_3299226.html#ee277a6c055d2b7dabe1e040f80c0613"
    }
  ],
  "115": [
    {
      "name": "Modszy Administrator IT",
      "company": "POLSKA PRESS SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/mlodszy-administrator-it-krakow,oferta,1000221960"
    },
    {
      "name": "Modszy specjalista ds. integracji danych",
      "company": "Maspex",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-integracji-danych-krakow-okolice,oferta,1000196270"
    },
    {
      "name": "Senior Subject Matter Expert – VDI & SRA [rekrutacja online]",
      "company": "ING Tech Poland",
      "urls": "https://www.praca.pl/senior-subject-matter-expert-vdi-sra-rekrutacja-online_3361102.html#777869ed96b80987a8e46258f867cca3"
    },
    {
      "name": "Security / Network Engineer",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/security-network-engineer_3326828.html#777869ed96b80987a8e46258f867cca3"
    },
    {
      "name": "Specjalista ds. Wdrożeń ",
      "company": "Konica Minolta Business Solutions Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-wdrozen_3373040.html#777869ed96b80987a8e46258f867cca3"
    },
    {
      "name": "Virtual Platform Systems Administrator",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/virtual-platform-systems-administrator_3368708.html#777869ed96b80987a8e46258f867cca3"
    },
    {
      "name": "Specjalista IT [rekrutacja prowadzona online]",
      "company": "ZIKO Apteka Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-it-rekrutacja-prowadzona-online_3356916.html#777869ed96b80987a8e46258f867cca3"
    },
    {
      "name": "Teradata Technical Analyst ",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/teradata-technical-analyst_3337152.html#777869ed96b80987a8e46258f867cca3"
    },
    {
      "name": "L1 Embedded Senior Software Developer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/l1-embedded-senior-software-developer-rekrutacja-online_3314158.html#777869ed96b80987a8e46258f867cca3"
    },
    {
      "name": "System Administrator / Data Analyst [Rekrutacja prowadzona online]",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.praca.pl/system-administrator-data-analyst-rekrutacja-prowadzona-online_3353278.html#777869ed96b80987a8e46258f867cca3"
    }
  ],
  "116": [
    {
      "name": "Starszy Specjalista ds. Rekrutacji",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=c842a1edfae83a3f&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Senior IT Recruiter/ Starszy Specjalista ds. Rekrutacji IT",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=16254ea575b179ad&fccid=062f71e131e87cf0&vjs=3"
    }
  ],
  "117": [
    {
      "name": "Support Specialist with Dutch",
      "company": "Skelia Poland Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/support-specialist-with-dutch-krakow,oferta,7508819"
    },
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "FPGA Test Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-test-engineer-working-student-krakow,oferta,1000197217"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Modszy Administrator IT",
      "company": "POLSKA PRESS SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/mlodszy-administrator-it-krakow,oferta,1000221960"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "Modszy Specjalista Serwisu",
      "company": "IMS r&d Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-serwisu-krakow,oferta,1000218461"
    },
    {
      "name": "Junior Specialist with German",
      "company": "Antal International Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-specialist-with-german-krakow,oferta,1000251890"
    },
    {
      "name": "Junior Customer Support",
      "company": "Reality Games Polska sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-customer-support-krakow,oferta,1000238785"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
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
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000196951"
    },
    {
      "name": "Working Student - Software Test Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-test-engineer-krakow,oferta,1000197209"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "RF Test Engineer - Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/rf-test-engineer-working-student-krakow,oferta,1000197222"
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
      "name": "Praktyki letnie w obszarze Machine Learning i Artificial Intelligence",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-machine-learning-i-artificial-intelligence-krakow,oferta,7473411"
    },
    {
      "name": "Praktyki letnie w obszarze programowania i testowania",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-programowania-i-testowania-krakow,oferta,7473426"
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
      "name": "Junior .NET Developer (fullstack) [online recruitment]",
      "company": "Grafton Recruitment Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-net-developer-fullstack-online-recruitment-krakow,oferta,7464661"
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
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Specialist (Senior Analyst) (L2 Support) with English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-specialist-senior-analyst-l2-support-with-english_3389752.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/it-support-analyst_3401260.html#53bd8c377d38166ec24900205dfb63ba"
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
      "name": "Workday Integration Developer (System Support Area) [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/workday-integration-developer-system-support-area-rekrutacja-online_3355572.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "Specjalista IT [rekrutacja prowadzona online]",
      "company": "ZIKO Apteka Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-it-rekrutacja-prowadzona-online_3356916.html#53bd8c377d38166ec24900205dfb63ba"
    },
    {
      "name": "IT Analyst with German & English ",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-german-english_3341804.html#53bd8c377d38166ec24900205dfb63ba"
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
      "name": "Specjalista IT ds. Systemów Kamsoft [rekrutacja prowadzona online]",
      "company": "ZIKO Apteka Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-it-ds-systemow-kamsoft-rekrutacja-prowadzona-online_3302376.html#53bd8c377d38166ec24900205dfb63ba"
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
      "name": "Elektryk",
      "company": "Gi Group Sp z o.o.",
      "urls": "https://www.praca.pl/elektryk_3360022.html#3b40509fce3183c1f28d4a4a26e15118"
    },
    {
      "name": "Mechanik / Elektronik / Specjalista IT",
      "company": "Diskus Polska sp. z o.o.",
      "urls": "https://www.praca.pl/mechanik-elektronik-specjalista-it_3386324.html#3b40509fce3183c1f28d4a4a26e15118"
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
      "company": "UNICARD",
      "urls": "https://pl.indeed.com//rc/clk?jk=282e7cff0c77523e&fccid=6ec19a37860139d8&vjs=3"
    },
    {
      "name": "Programista Embedded",
      "company": "Green Cell",
      "urls": "https://pl.indeed.com//rc/clk?jk=342be23884ec2555&fccid=7520988c97ff0996&vjs=3"
    },
    {
      "name": "Programista Embedded C/C++",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=9b169d1843e0fb48&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Programista embedded IoT",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=3cfd39e2b6e9f689&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Programista aplikacji mobilnych Android- IoT"
    },
    {
      "name": "",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=0066fb4d9d8fdbc9&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Programista aplikacji mobilnych iOS - IoT",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=93b24dfedaf9c272&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "xxx",
      "urls": "125"
    }
  ],
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
      "urls": "https://www.praca.pl/projektant-technolog_3359394.html#c6e7b152e38eedf796af0676ce8eadd2"
    },
    {
      "name": "Kierownik budowy / robót  - branża elektryczna",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/kierownik-budowy-robot-branza-elektryczna_3353118.html#c6e7b152e38eedf796af0676ce8eadd2"
    }
  ],
  "130": [],
  "131": [],
  "132": [],
  "133": [
    {
      "name": "Konstruktor Mechanik",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d2f21857a73242bf&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Dokumentalista urządzeń medycznych",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=462582c3fee8f4f4&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Tester urządzeń medycznych"
    },
    {
      "name": "",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=a0cad3e097038a81&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Konstruktor Elektronik",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Inspektor ochrony przeciwpożarowej",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=719fbd25dbd10ed9&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Programista Embedded C/C++"
    },
    {
      "name": "",
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
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "xxx",
      "urls": "139"
    },
    {
      "name": "Elektryk / Elektronik",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=e24a25c607b2349d&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Elektryk – monter instalacji",
      "company": "DC Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=0761574bb77f2628&fccid=102922c917c5bfe4&vjs=3"
    },
    {
      "name": "robotnik wysokowykwalifikowany - elektryk w Dziale Eksploata...",
      "company": "",
      "urls": "Politechnika Krakowska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=bc63abd9c5f023df&fccid=dbf078d8db93f693&vjs=3",
      "company": "Elektromonter instalacji fotowoltaicznych",
      "urls": "Columbus Energy"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=c2a6d2d934717452&fccid=689c8978b4a0506b&vjs=3",
      "company": "Technik Telekomunikacji",
      "urls": "TP TELTECH Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=f7fa3c5448f08089&fccid=0de7b0e6198b73e8&vjs=3",
      "company": "Inne",
      "urls": ""
    },
    {
      "name": "IMPEL",
      "company": "https://pl.indeed.com//rc/clk?jk=9267d1e9d7b77c31&fccid=815131eaa5532c78&vjs=3",
      "urls": "Monter instalacji fotowoltaicznych"
    },
    {
      "name": "Columbus Energy",
      "company": "https://pl.indeed.com//rc/clk?jk=f86bb269d7d12e01&fccid=689c8978b4a0506b&vjs=3",
      "urls": "STARSZY ASYSTENT PROJEKTANTA BRANŻY MOSTOWEJ"
    },
    {
      "name": "REJPROJECT",
      "company": "https://pl.indeed.com//rc/clk?jk=fafe0e31168e602b&fccid=7606770ec5e96388&vjs=3",
      "urls": "Inżynier Budowy - Mistrz budowy"
    },
    {
      "name": "Przedsiębiorstwo Robót Inżynieryjnych INKOP",
      "company": "https://pl.indeed.com//rc/clk?jk=1d3dd98638ee466d&fccid=a695411d8904b8ca&vjs=3",
      "urls": "Specjalista ds. Zasilania i Klimatyzacji"
    },
    {
      "name": "EmiTel S.A.",
      "company": "https://pl.indeed.com//rc/clk?jk=aef465a36f333ca5&fccid=2b7614ab81f2843c&vjs=3",
      "urls": "Szlifierz"
    },
    {
      "name": "Bamet",
      "company": "https://pl.indeed.com//rc/clk?jk=146cd26516c29922&fccid=55f842c9b66dbe5b&vjs=3",
      "urls": "Monter / Serwisant - instalacji z zakresu telekomunikacji"
    },
    {
      "name": "OPTIMA",
      "company": "https://pl.indeed.com//rc/clk?jk=b8bb773291188d51&fccid=5cdf4ecfa8db6b9c&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "140",
      "company": "Kierownik projektu IT",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=fc4d070c679ac3ee&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "141",
      "company": "Asystent Projektanta w brany elektrycznej",
      "urls": "Inter-Raf P.E.S. Polska Spka z ograniczon odpowiedzialnoci Spka Komandytowa "
    },
    {
      "name": "https://www.pracuj.pl/praca/asystent-projektanta-w-branzy-elektrycznej-krakow,oferta,1000222835",
      "company": "Modszy Mechanik",
      "urls": "Instytut Biotechnologii Surowic i Szczepionek BIOMED S.A."
    },
    {
      "name": "https://www.pracuj.pl/praca/mlodszy-mechanik-krakow,oferta,7462457",
      "company": "xxx",
      "urls": "142"
    }
  ],
  "143": [
    {
      "name": "Specjalista ds. Zarządzania Systemami Informatycznymi",
      "company": "EmiTel S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=6e3c42055e6c585a&fccid=2b7614ab81f2843c&vjs=3"
    }
  ],
  "144": [
    {
      "name": "Full Stack Developer",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/full-stack-developer_3352976.html#46c75effafa1661a16731f20d88d3756"
    },
    {
      "name": "React Native Developer [Rekrutacja online]",
      "company": "Polcode Sp. z o.o.",
      "urls": "https://www.praca.pl/react-native-developer-rekrutacja-online_3383578.html#46c75effafa1661a16731f20d88d3756"
    }
  ],
  "145": [
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
    },
    {
      "name": "Modszy Mechanik",
      "company": "Instytut Biotechnologii Surowic i Szczepionek BIOMED S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-mechanik-krakow,oferta,7462457"
    }
  ],
  "148": [],
  "149": [
    {
      "name": "Dokumentalista urządzeń medycznych",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=462582c3fee8f4f4&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Tester urządzeń medycznych",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=a0cad3e097038a81&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Konstruktor Mechanik"
    },
    {
      "name": "",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=d2f21857a73242bf&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Konstruktor Elektronik",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Front-end Developer",
      "urls": "Dotlinkers"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=984df2d96643e03f&fccid=c62351057abf05f6&vjs=3",
      "company": "Programista Embedded C/C++",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=9b169d1843e0fb48&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Java Developer"
    },
    {
      "name": "Dotlinkers",
      "company": "https://pl.indeed.com//rc/clk?jk=e456367b46634ea3&fccid=c62351057abf05f6&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "150",
      "company": "Kierownik Projektu (Contact Center)",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=77d3d8045b8d70e3&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "151",
      "company": "Projektant Technolog",
      "urls": "CONTROL PROCESS S.A."
    },
    {
      "name": "https://www.praca.pl/projektant-technolog_3359394.html#9571477933dca269f999e1ac25c31844",
      "company": "Integrated Catchment Modeller (InfoWorks ICM)",
      "urls": "Jacobs"
    },
    {
      "name": "https://www.praca.pl/integrated-catchment-modeller-infoworks-icm_3396890.html#9571477933dca269f999e1ac25c31844",
      "company": "Asystent Projektanta Mostowego",
      "urls": "Globetek Sp. z o.o."
    },
    {
      "name": "https://www.praca.pl/asystent-projektanta-mostowego_3391896.html#9571477933dca269f999e1ac25c31844",
      "company": "Projektant Mostowy",
      "urls": "Globetek Sp. z o.o."
    },
    {
      "name": "https://www.praca.pl/projektant-mostowy_3391892.html#9571477933dca269f999e1ac25c31844",
      "company": "xxx",
      "urls": "152"
    }
  ],
  "153": [
    {
      "name": "Modszy Administrator IT",
      "company": "POLSKA PRESS SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/mlodszy-administrator-it-krakow,oferta,1000221960"
    },
    {
      "name": "Security / Network Engineer",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/security-network-engineer_3326828.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Data Center Engineer",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/data-center-engineer_3347770.html#571e3ad5364317747c2506f7998d9538"
    },
    {
      "name": "Virtual Platform Systems Administrator",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/virtual-platform-systems-administrator_3368708.html#571e3ad5364317747c2506f7998d9538"
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
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=47fcb3de2f8ac0e5&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Linux Platform Engineer",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=116274200f0a0fb2&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "xxx",
      "urls": "155"
    }
  ],
  "156": [
    {
      "name": "Projektant sieci sanitarnych",
      "company": "Lobo HR",
      "urls": "https://pl.indeed.com//rc/clk?jk=761d971eaf07ae0c&fccid=42ea513863db8ce0&vjs=3"
    },
    {
      "name": "Projektant w branży elektronergetycznej",
      "company": "MLElectric Sp. z o.o.",
      "urls": "https://pl.indeed.com//company/Mlelectric-Sp.-z-o.o./jobs/Projektant-W-Bran%C5%BCy-Elektronergetycznej-afc44b00e11824a2?fccid=19f4a348bbabfcc0&vjs=3"
    },
    {
      "name": "Projektant Sieci Wodno-Kanalizacyjnych",
      "company": "K&K Selekt",
      "urls": "https://pl.indeed.com//rc/clk?jk=80c55476fee329df&fccid=afe1f520a63ae3d3&vjs=3"
    },
    {
      "name": "Projektant FTTH Kraków",
      "company": "Electronic Control Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=3a33fa5cf06de182&fccid=9e826fe22370d20d&vjs=3"
    },
    {
      "name": "IBM Poland Internship - Watson Machine Learning/Watson OpenS...",
      "company": "",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=8b999a8552cd5d4a&fccid=de71a49b535e21cb&vjs=3",
      "company": "PLANISTA/ WDROŻENIOWIEC SYSTEMÓW OPARTYCH NA QGIS ORAZ CAD",
      "urls": "GLOBAL SOFTELNET"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=60c8b70adc91d110&fccid=87f74a987fba589f&vjs=3",
      "company": "Projektant branży elektrycznej",
      "urls": "Lobo HR"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=09595878d58aa570&fccid=42ea513863db8ce0&vjs=3",
      "company": "FTM QA Developer",
      "urls": ""
    },
    {
      "name": "IBM Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=607e5080e4790e02&fccid=de71a49b535e21cb&vjs=3",
      "urls": "Projektant"
    },
    {
      "name": "Grupa Projekt",
      "company": "https://pl.indeed.com//rc/clk?jk=e16befb455fe6d1e&fccid=37607da95fc8dee9&vjs=3",
      "urls": "Software Developer"
    },
    {
      "name": "",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=6e68974b0364eb94&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Inżynier/ Elektryk Projektant E-PLAN",
      "company": "Axamo Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=494a424cfbfab4d1&fccid=f86175c7ba708305&vjs=3"
    },
    {
      "name": "Dział ds. Osób Niepełnosprawnych - Pracownik IT",
      "company": "Uniwersytet Jagielloński - Dział ds. Osób Niepełno...",
      "urls": "https://pl.indeed.com//rc/clk?jk=1882a228597ed431&fccid=4cfdfea619565a49&vjs=3"
    },
    {
      "name": "Software Developer QA",
      "company": "",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=a1f1df050441fdc4&fccid=de71a49b535e21cb&vjs=3",
      "company": "Data & AI Architect",
      "urls": ""
    },
    {
      "name": "IBM Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=03552730e217d16e&fccid=de71a49b535e21cb&vjs=3",
      "urls": "Software Developer JavaScript/React"
    },
    {
      "name": "",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=323e237b9797c4ff&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Software Development Manager",
      "company": "",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=2fde0bae5be91402&fccid=de71a49b535e21cb&vjs=3",
      "company": "Młodszy administrator / serwisant",
      "urls": "Softelnet spółka akcyjna sp.k."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=c3de9f0405325c9a&fccid=c120232169b76303&vjs=3",
      "company": "DB2 Support Engineer",
      "urls": ""
    },
    {
      "name": "IBM Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=ea619088c13a4668&fccid=de71a49b535e21cb&vjs=3",
      "urls": "Technical Support Engineer"
    },
    {
      "name": "",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=bb0348a019bc196d&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Technical Support Engineer - Business Analytics",
      "company": "",
      "urls": "IBM Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=e18d27d97990badc&fccid=de71a49b535e21cb&vjs=3",
      "company": "Software Developer - Quality Assurance",
      "urls": ""
    },
    {
      "name": "IBM Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=268fc67f4b8a5f35&fccid=de71a49b535e21cb&vjs=3",
      "urls": "C++ Software Developer - Database Engine"
    },
    {
      "name": "",
      "company": "IBM Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=c6c57ce3d0c70fbf&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Junior/Specialist IT Support with German",
      "company": "QVC POLAND GLOBAL SERVICES SP Z O O",
      "urls": "https://pl.indeed.com//rc/clk?jk=82cb5f10bd543d1a&fccid=d82b729ef7602eb5&vjs=3"
    },
    {
      "name": "Cloud DevOps Site Reliability Engineering (SRE) Developer",
      "company": "",
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
      "name": "Junior Analyst with French",
      "company": "Antal International Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-analyst-with-french-krakow,oferta,7462901"
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
      "name": "Senior Business Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-business-analyst_3393580.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Data Analyst with Python",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/data-analyst-with-python_3372270.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#930e3ab82934b374718d73e23d781eb3"
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
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3342178.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "System Architect / Manager (System Support Area) [recruitment online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/system-architect-manager-system-support-area-recruitment-online_3355564.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Programista / Integrator Sytemów Biznesowych [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/programista-integrator-sytemow-biznesowych-rekrutacja-online_3355568.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "BI Analyst / Expert [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/bi-analyst-expert-rekrutacja-online_3355558.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Senior Business Analyst",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/senior-business-analyst_3365278.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3361498.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "IT Business Analyst",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/it-business-analyst_3362050.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Teradata Technical Analyst ",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/teradata-technical-analyst_3337152.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Starszy Konsultant w Dziale Cen Transferowych i Wycen | Transfer Pricing & Valuations Senior Consultant",
      "company": "Arena Tax Sp. z o.o.",
      "urls": "https://www.praca.pl/starszy-konsultant-w-dziale-cen-transferowych-i-wycen-transfer-pricing-valuations-senior-consultant_3361038.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Expert in Pricing with Hungarian [online recruitment]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/expert-in-pricing-with-hungarian-online-recruitment_3359952.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Senior Xceptor Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-xceptor-developer_3338594.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Financial Junior Analyst [Rekrutacja prowadzona online]",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.praca.pl/financial-junior-analyst-rekrutacja-prowadzona-online_3355508.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Analityk Danych Terenowych FOTO / LiDAR ",
      "company": "Vimap Sp. z o.o.",
      "urls": "https://www.praca.pl/analityk-danych-terenowych-foto-lidar_3326748.html#930e3ab82934b374718d73e23d781eb3"
    },
    {
      "name": "Command Center Senior Analyst",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/command-center-senior-analyst_3354842.html#930e3ab82934b374718d73e23d781eb3"
    }
  ],
  "158": [
    {
      "name": "Doradca klienta o specjalności projektant grafik",
      "company": "",
      "urls": "https://www.praca.pl/doradca-klienta-o-specjalnosci-projektant-grafik_3390434.html#6e67580038dc35ccf651da95cc8ddaf7"
    }
  ],
  "159": [
    {
      "name": "BI Analyst / Expert [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/bi-analyst-expert-rekrutacja-online_3355558.html#44bf77c7dda91475da57867f8637c9a8"
    }
  ],
  "160": [
    {
      "name": "Menadżer IT plus eCommerce",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcl7SaLP_MpaOcC0R1fREk1o9tOKV_PSlZgoYyESvbDEc98tycvB0Ry408scwOFYAiwNaCggxKhWhkZhVFIaAhgvyCQJBUoBBmhhHD9Q_kqIZ27rQ21LYcHxG7vAG73klzPyQdNLmlQdDD04VpAa0TOZ4p_I9LserYTpgKKVXuj3tHB-hwS2AVWYPYf1oTexK40PWi6BdTs8CSS8FY1XY5OC0p1it5kJ8lnUYDS0D6_re0-UG9djmE7wDijOUgqRVII9adsoBV6K676P3Nu74sBVjaw8VMctWQVmj0NYuVmkyGZAjriQkKO1Zx5jttvlCyEBMrl6AhPmWLUBtNXAPHEmd97Rh5ZA90GDAoI6QXgkylKJCe7faXVK8NgY0UcsJmiK1amTyGnApVdqS7MXTM8e6K-irNlfUtIM8Z7M7ybTpSXGJg2gLQupzorjPKjU2eRUALkrePRtFm3KOUJEQHzD5gwVhXFhxLeiH7MARGLXBwplAtvR8huWwukI2JLom9nM2cSAoq4xSXvlFu16UTCdZjofnbNiTN1s7W6Bz9eZiGMxmitm00MxrTlIpYGCrvqxGOFGa2MBmc7rwiiRVFv50id4d8PxHWwtX_S0tP9VpcQCcO-_M5OufcpXDozOOvtAuaXcfIDW0DKjVr3bbNE&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Młodszy specjalista ds. projektów lingwistycznych",
      "company": "veroling",
      "urls": "https://pl.indeed.com//rc/clk?jk=28dadac6ce8b7c35&fccid=b145498432b1897b&vjs=3"
    },
    {
      "name": "Junior IT Project Manager",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=2e41d83352ae3142&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Specjalista ds. Procesów Magazynowych",
      "urls": ""
    },
    {
      "name": "FIEGE Logistik Stiftung & Co. KG",
      "company": "https://pl.indeed.com//rc/clk?jk=ad5637f900265eef&fccid=c21abee0de715f4a&vjs=3",
      "urls": "Account Manager"
    },
    {
      "name": "",
      "company": "Shoper",
      "urls": "https://pl.indeed.com//rc/clk?jk=2fcbf82d7f5288d0&fccid=49e74efc00a52447&vjs=3"
    },
    {
      "name": "Młodszy kierownik projektu",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=98fc311dd0e49999&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Kierownik projektu IT",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=fc4d070c679ac3ee&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Administrator Systemu Windows"
    },
    {
      "name": "New-Invest Business Support",
      "company": "https://pl.indeed.com//rc/clk?jk=18644513f89f8584&fccid=45c7d019cc96de8e&vjs=3",
      "urls": "Tester .Net"
    },
    {
      "name": "New-Invest Business Support",
      "company": "https://pl.indeed.com//rc/clk?jk=5774b8d562de52f1&fccid=45c7d019cc96de8e&vjs=3",
      "urls": "Senior .Net"
    },
    {
      "name": "New-Invest Business Support",
      "company": "https://pl.indeed.com//rc/clk?jk=d4077fa00ea254a3&fccid=45c7d019cc96de8e&vjs=3",
      "urls": "Programista C embedded"
    },
    {
      "name": "New-Invest Business Support",
      "company": "https://pl.indeed.com//rc/clk?jk=3cc3f8784b0e4603&fccid=45c7d019cc96de8e&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "161",
      "company": "Programista / Integrator Sytemów Biznesowych [rekrutacja online]",
      "urls": "PwC"
    },
    {
      "name": "https://www.praca.pl/programista-integrator-sytemow-biznesowych-rekrutacja-online_3355568.html#e0cba21fbf1455247dad00de786a475b",
      "company": "xxx",
      "urls": "162"
    },
    {
      "name": "Trener Wewnętrzny",
      "company": "",
      "urls": "Shoper"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=cf58d1f369365be6&fccid=49e74efc00a52447&vjs=3",
      "company": "Młodszy redaktor Głosu Seniora",
      "urls": "Stowarzyszenie Manko"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d100a78f03b99569&fccid=d6f2dc62b6541590&vjs=3",
      "company": "Główny Technolog",
      "urls": "HRWISE"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=05cacf566091a547&fccid=e834468dcd30ed28&vjs=3",
      "company": "Specjalista ds. Marketingu i PR",
      "urls": "FiberLink"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=6638adf262b414f4&fccid=c72cb3bd11befc58&vjs=3",
      "company": "xxx",
      "urls": "163"
    }
  ],
  "164": [],
  "165": [],
  "166": [],
  "167": [],
  "168": [],
  "169": [],
  "170": [
    {
      "name": "Menadżer IT plus eCommerce",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcl7SaLP_MpaOcC0R1fREk1o9tOKV_PSlZgoYyESvbDEc98tycvB0Ry408scwOFYAiwNaCggxKhWhkZhVFIaAhgo4UmL2GFjSOFX_ornDUJgoLfkR4RI7iZzVu7JmJoPpok8bgQIf8mEXk89l_o_cwx4uRmRvWvFpuWQfwXidh3DgT1ALtZ9u_CINMOk2d44oY_uSXKEVTJf59H1gtNHtozgYOrllwGoZSWM-IX_AoUE0p2AUjy15Y0daNvL2tMp_i2WreFxJ_hkGI08yFnKU4SvyvyI6QZCIB18smn5okJ2JZ0LY3rV9rSeMOvxxX8l7nq2hYBBRYkFRA3Hdw_k9-6Ma4hX8U0tPLnUv-qpPia1YnZdL1McdqNG_zdXUIcwQa6gQzGW4uUVwNNECwzOkIollfGEGcRdJGeN7FWoIuqAgNW5giw4p2FRYeZt6EW3Ag67c2inRLkvNANDJLg9CN_MdNdRJL3X6wvDMGVux5GcCtoqQb5ROjjw4WsRVd3uCanexNr4OWRA4lG_QM7-U2vzZnyCy6O8kHVwtrbbBOH_DXeQY00PC6-iKv7pboavDBdtKZOKLvSbdvYbnU1LcDxG3YkvL8loAx3Gsdgsur-g7ps3MzLEHr4EKK0B8iZRwUuaFiEyqOwhA==&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Pracownik produkcji",
      "company": "",
      "urls": "Pilkington"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=5eb230dc6d343e54&fccid=59d593c4eb037805&vjs=3",
      "company": "Opiekun/Opiekunka Medyczny/Medyczna",
      "urls": "Scanmed S.A."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=534248c88c23fd92&fccid=5baf87fca2a86ad0&vjs=3",
      "company": "Project manager/Koordynator projektu",
      "urls": "Agencja Harmonic"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=307043beeac6b2aa&fccid=c9d938964f9d001d&vjs=3",
      "company": "Specjalista ds. komunikacji",
      "urls": ""
    },
    {
      "name": "Eurovia Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=8865b386b0e44f0c&fccid=6df22a29a2de0162&vjs=3",
      "urls": "Specjalista ds. systemu zarządzania"
    },
    {
      "name": "",
      "company": "Eurovia Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=f281babe523d5627&fccid=6df22a29a2de0162&vjs=3"
    },
    {
      "name": "Elektromechanik",
      "company": "",
      "urls": "LafargeHolcim"
    },
    {
      "name": "https://pl.indeed.com//company/LafargeHolcim/jobs/Elektromechanik-fd4d5d0b77e928d7?fccid=7618bab885a58aa7&vjs=3",
      "company": "AGENCJA NIANIA z POWOŁANIA zaprasza szukające pracy Nianie",
      "urls": "NIANIA z POWOŁANIA"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d4bffbb80303f8f1&fccid=e9dbfd3fc0c21bdc&vjs=3",
      "company": "Cloud Sales Specialist - praca zdalna",
      "urls": "Fly on the cloud"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=fd6556889f8eb894&fccid=ca95fa460a86e499&vjs=3",
      "company": "Wychowawca kolonijny",
      "urls": "English Immersion American Camps"
    },
    {
      "name": "https://pl.indeed.com//company/English-Immersion-American-Camps/jobs/Wychowawca-Kolonijny-4e632dc8786d453c?fccid=135bd608892caf6e&vjs=3",
      "company": "Inżynier sprzedaży systemów bezpieczeństwa przemysłowego",
      "urls": "GRUPA WOLFF"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d85a4988a3bbd086&fccid=3d99fb61e9e62f24&vjs=3",
      "company": "Wordpress Developer",
      "urls": "Amsterdam Standard Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=bce63c99351ac966&fccid=fb1b22023a56f66a&vjs=3",
      "company": "Network Designer",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=233bc43d4a0c3cc6&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "SDM Zscaler",
      "urls": "NEXT TECHNOLOGY PROFESSIONALS SPÓŁKA Z OGRANICZONĄ..."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=b25cf6a3a9efe382&fccid=cf2c9f69c3e83d61&vjs=3",
      "company": "Kierownik Robót Drogowych lub Torowych/Inżynier Budowy",
      "urls": "KZN RAIL Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=fe99701bd1cf7c37&fccid=be21bffde79d2ca7&vjs=3",
      "company": "Specjalista ds. bezpieczeństwa IT - Pentester",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=24eedc38ba74a46d&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Ekspert ds. Rozwoju Cyber Defence"
    },
    {
      "name": "",
      "company": "Alior Bank",
      "urls": "https://pl.indeed.com//rc/clk?jk=b142f28e4539458a&fccid=e6ed5490b8bccdea&vjs=3"
    },
    {
      "name": "Szukam kochającej dzieci niani dla 4 letniego synka! - Krakó...",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com//rc/clk?jk=8bffd0772830087e&fccid=dd616958bd9ddc12&vjs=3"
    },
    {
      "name": "Menadżer IT plus eCommerce NOWA",
      "company": "Goldman Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=588a10cfd05ac937&fccid=503ed6c94c8786f6&vjs=3"
    },
    {
      "name": "Full stack Python Developer",
      "company": "OnWelo",
      "urls": "https://pl.indeed.com//rc/clk?jk=25ecc715ae546e6e&fccid=f0576bc2d3ad81bd&vjs=3"
    },
    {
      "name": "Programista Systemów audiowizualnych / CRESTRON",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com//rc/clk?jk=97f5a0f322033bad&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Kierownik Projektu (Contact Center)",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=77d3d8045b8d70e3&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Inżynier ds. Testów",
      "urls": "Grupa Unity"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=1f2ed1cc4252a137&fccid=9a34138d512ebeaf&vjs=3",
      "company": "Core Software Engineer",
      "urls": "ESET"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=679d04578bab853a&fccid=8e1474db6974999b&vjs=3",
      "company": "Full Stack JavaScript node.js/react developer",
      "urls": "NBC Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=ce2f0c70d0e5cce6&fccid=2f45a6829d6c88f6&vjs=3",
      "company": "Administrator Systemowo-Sieciowy",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=f48d068553c6e9d6&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "DevOps Engineer",
      "urls": "AUTENTI Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=e04b9be8f24aaf24&fccid=5fc90b16cbf43e55&vjs=3",
      "company": "Przedstawiciel handlowy / Handlowiec / Business Development...",
      "urls": "Futurum Technology Ltd."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=580e48f49f7a4bc6&fccid=228edc79f2ff9b7a&vjs=3",
      "company": "Senior iOS Developer",
      "urls": "Untitled Kingdom sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=f2c79a96074148e7&fccid=d922f8f253da1011&vjs=3",
      "company": "Cieśla – stolarz (zakład prefabrykacji)",
      "urls": "Exbud Konstrukcje"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=43c911afc457cf2e&fccid=ee8699c4d4b9889c&vjs=3",
      "company": "System Configuration Engineer",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=f1ca667f6be02989&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "Fullstack Developer",
      "urls": "HRO Digital"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d663cc7049b01d6a&fccid=4fcb59d2ba8f65d1&vjs=3",
      "company": "SysOps / DevOps",
      "urls": "Sky Shop"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=16fb8082519ca0a1&fccid=1772abda90a2c59d&vjs=3",
      "company": "DevOps/SysOps",
      "urls": "Sief-IT Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=c1ba92948133a271&fccid=fccd8f2c3bb330e6&vjs=3",
      "company": "Full-Stack Developer (PHP)",
      "urls": "Dotlinkers"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=df048f3e979c321e&fccid=c62351057abf05f6&vjs=3",
      "company": "Senior Network Engineer",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=bb0af94e2bcc84b1&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "Pilot Turystyczny/Kierownik Turystyczny",
      "urls": "Poltur Polska Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=60e4be1302387e9d&fccid=91af239b1666ea7e&vjs=3",
      "company": "Network Engineer / Inżynier sieci",
      "urls": "Washington Frank"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=5fcad688fe10a7d9&fccid=cb9285e8f83d93f4&vjs=3",
      "company": "Inżynier sieci / Network Engineer - Kraków",
      "urls": "FRG Technology Consulting"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=20e6d13e23b4bf6a&fccid=79a4f894c1383f39&vjs=3",
      "company": "Network Engineer / Inżynier sieci",
      "urls": "FRG Technology Consulting"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=8e4724c72dd3e0f9&fccid=79a4f894c1383f39&vjs=3",
      "company": "Inżynier sieci, Network Engineer",
      "urls": "Dynamics Jobs"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=7d6046df99c179ce&fccid=e7223e3ece47a796&vjs=3",
      "company": "C++ Engineer",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=47c1a64d70ecbd81&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "Network Engineer, Inżynier sieci",
      "urls": "Dynamics Jobs"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=94e68e21c80930c6&fccid=e7223e3ece47a796&vjs=3",
      "company": "Linux Engineer / DevOps",
      "urls": "EuroLinux"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=8b01b29c719cc453&fccid=d91fbdc82addbd64&vjs=3",
      "company": "DevOps Engineer (Senior)",
      "urls": "Edge Recruitment"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=2668fcd9c6bd2fef&fccid=b18ecb623e949f74&vjs=3",
      "company": "C#/.NET Software Engineer",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=e93aa1aa69a78a4f&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "Fullstack Java Developer (Spring, Angular)",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=9ea1966a6d7e2882&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "JAVA Software Engineer",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=821fc79b534c0c18&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "DevOps / Java Developer",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=25d6aad26c03ae89&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "xxx",
      "urls": "171"
    },
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
      "company": "",
      "urls": "Aptiv"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3",
      "company": "Systems Engineer - Advanced Safety",
      "urls": ""
    },
    {
      "name": "Aptiv",
      "company": "https://pl.indeed.com//rc/clk?jk=9fdd7d1ebbee0aca&fccid=8d390ab1843cb8bd&vjs=3",
      "urls": "DevOps Engineer"
    },
    {
      "name": "",
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
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=a0cad3e097038a81&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Młodszy Programista Java (Telekomunikacja)",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=5c9e473ed9230c95&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Programista C/C++"
    },
    {
      "name": "AFA Polska Sp. Z O.O.",
      "company": "https://pl.indeed.com//company/AFA-Polska-Sp.-Z-O.O./jobs/Programista-C-C++-2ec03acf738fb287?fccid=41029eff8c311fca&vjs=3",
      "urls": "Firmware Developer"
    },
    {
      "name": "S-Labs",
      "company": "https://pl.indeed.com//rc/clk?jk=bb00bd7b7f7d3aba&fccid=ce4f4701fb5e9335&vjs=3",
      "urls": "Technik Instalator Kraków"
    },
    {
      "name": "Electronic Control Systems",
      "company": "https://pl.indeed.com//rc/clk?jk=9189559198aae9be&fccid=9e826fe22370d20d&vjs=3",
      "urls": "Inżynier/ Elektryk Projektant E-PLAN"
    },
    {
      "name": "Axamo Recruitment",
      "company": "https://pl.indeed.com//rc/clk?jk=494a424cfbfab4d1&fccid=f86175c7ba708305&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "175",
      "company": "Inżynier ds. Laboratorium",
      "urls": "Nidec"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=53b0c6ef005c0330&fccid=ab31e8d9e75d2fe7&vjs=3",
      "company": "xxx",
      "urls": "176"
    }
  ],
  "177": [
    {
      "name": "Sprzątanie, system zmianowy – Kraków, ul. Mogilska",
      "company": "Hr for Business sp.z o.o",
      "urls": "https://pl.indeed.com//rc/clk?jk=2c98ff1ecb3a1e67&fccid=dbee9686c2bb2e7b&vjs=3"
    }
  ],
  "178": [],
  "179": [],
  "180": [],
  "181": [
    {
      "name": "Automatyk-Programista",
      "company": "",
      "urls": "Frapol"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=86eb220d2ea80d09&fccid=9c2047b7b01199b2&vjs=3",
      "company": "xxx",
      "urls": "182"
    }
  ],
  "183": [],
  "184": [
    {
      "name": "Inspektor nadzoru w branży budowlano- konstrukcyjnej/ sanita...",
      "company": "IWNISE Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=c4d3b811151bb832&fccid=6fd4736b600aef50&vjs=3"
    },
    {
      "name": "Kierownik ds. Budowlanych",
      "company": "Arche Consulting",
      "urls": "https://pl.indeed.com//rc/clk?jk=e446b6d8a26b391e&fccid=c665c35cf349dff1&vjs=3"
    },
    {
      "name": "Inspektor Nadzoru Elektrycznego [rekrutacja prowadzona onlin...",
      "company": "CAVATINA HOLDING",
      "urls": "https://pl.indeed.com//rc/clk?jk=a53a129d299b13fd&fccid=a5285ec97fd9b16f&vjs=3"
    },
    {
      "name": "Kierownik robót drogowych i torowych",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=373d3be4d9cd22f2&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "Kierownik budowy (infrastruktura miejska)",
      "company": "GK ZUE",
      "urls": "https://pl.indeed.com//rc/clk?jk=07959f5272c9a2a7&fccid=092d1ee1c3a73e20&vjs=3"
    },
    {
      "name": "C++ Developer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=e00def048e72773c&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "Kierownik budowy",
      "company": "TOR-KRAK",
      "urls": "https://pl.indeed.com//rc/clk?jk=e18bb3b66aa35ff6&fccid=7b6043ac7d4ffc11&vjs=3"
    },
    {
      "name": "DevSecOps",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=8151141c348c9c23&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "System Configuration Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=f1ca667f6be02989&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "KIEROWNIK ROBÓT SANITARNYCH / HVAC",
      "company": "ACE Group Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=88733c1dac2bec17&fccid=9c25831738ee5606&vjs=3"
    },
    {
      "name": "Security Automation Engineer",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=a43b26820e0dc126&fccid=cfa2a094a933b6fb&vjs=3"
    }
  ],
  "185": [
    {
      "name": "Inzynier ds. Konfiguracji Projektu Softwarowego",
      "company": "",
      "urls": "Aptiv"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=4587003a356b5b6f&fccid=8d390ab1843cb8bd&vjs=3",
      "company": "Java Architect | Architekt Java",
      "urls": "HRO Digital"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=b8884d3fc88b47a5&fccid=4fcb59d2ba8f65d1&vjs=3",
      "company": "xxx",
      "urls": "186"
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
      "company": "",
      "urls": "Aptiv"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d89f2c573aac6f9d&fccid=8d390ab1843cb8bd&vjs=3",
      "company": "xxx",
      "urls": "204"
    },
    {
      "name": "PROJEKTANT INSTALACJI FOTOWOLTAICZNEJ",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=9e39e1810c029b8a&fccid=689c8978b4a0506b&vjs=3"
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
      "name": "Elektronik/projektant",
      "company": "AMC TECH Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=38e50a4fcae071f9&fccid=9ea9ac0db41cd67b&vjs=3"
    },
    {
      "name": "Projektant w branży elektronergetycznej",
      "company": "MLElectric Sp. z o.o.",
      "urls": "https://pl.indeed.com//company/Mlelectric-Sp.-z-o.o./jobs/Projektant-W-Bran%C5%BCy-Elektronergetycznej-afc44b00e11824a2?fccid=19f4a348bbabfcc0&vjs=3"
    },
    {
      "name": "Projektant - Technolog",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com//rc/clk?jk=d28797d8ccec234f&fccid=5c065c1c92843790&vjs=3"
    },
    {
      "name": "Inżynier/ Elektryk Projektant E-PLAN",
      "company": "Axamo Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=494a424cfbfab4d1&fccid=f86175c7ba708305&vjs=3"
    },
    {
      "name": "Projektant",
      "company": "Grupa Projekt",
      "urls": "https://pl.indeed.com//rc/clk?jk=e16befb455fe6d1e&fccid=37607da95fc8dee9&vjs=3"
    },
    {
      "name": "Projektant Instalacji Wodnych",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com//rc/clk?jk=e9b178b66a2ccaa7&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Pracownik produkcji - praca z zamieszkaniem (wielkopolskie,...",
      "company": "Projektanci Kariery",
      "urls": "https://pl.indeed.com//rc/clk?jk=d91ae3ea1b5c99c6&fccid=b65cab7ed2a9ca3b&vjs=3"
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
      "name": "Konstruktor Mechanik",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d2f21857a73242bf&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "KONSTRUKTOR MASZYN I URZĄDZEŃ",
      "urls": "SANT-TECH"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=7a2e68957957539e&fccid=4cff40bef3e8ba30&vjs=3",
      "company": "INŻYNIER KONSTRUKTOR w dziale R&D",
      "urls": ""
    },
    {
      "name": "EC Engineering",
      "company": "https://pl.indeed.com//rc/clk?jk=c3afdef0a16e8ffd&fccid=dd2bc65880e72b4a&vjs=3",
      "urls": "Konstruktor Elektronik"
    },
    {
      "name": "",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=db62689c1d0b89cb&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Projektant – Konstruktor / Inżynier Projektu",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Konstruktor CATIA V5",
      "company": "GROS Engineering",
      "urls": "https://pl.indeed.com//rc/clk?jk=5e1f6738935f23bd&fccid=83800432e0dffe2b&vjs=3"
    },
    {
      "name": "KONSTRUKTOR CAD",
      "company": "NEWAG GROUP",
      "urls": "https://pl.indeed.com//rc/clk?jk=1a2ae86b043ab153&fccid=b1b38fabe5e92cf0&vjs=3"
    },
    {
      "name": "Młodszy Konstruktor CAD",
      "company": "GROS Engineering",
      "urls": "https://pl.indeed.com//rc/clk?jk=b2cc3d07a98c79a1&fccid=83800432e0dffe2b&vjs=3"
    },
    {
      "name": "Konstruktor",
      "company": "Bamet",
      "urls": "https://pl.indeed.com//rc/clk?jk=7d5976e66bee868c&fccid=55f842c9b66dbe5b&vjs=3"
    },
    {
      "name": "Konstruktor",
      "company": "Arche Consulting",
      "urls": "https://pl.indeed.com//rc/clk?jk=a042c6832bf9f7aa&fccid=c665c35cf349dff1&vjs=3"
    },
    {
      "name": "Inżynier konstruktor hardware",
      "company": "dataconsult",
      "urls": "https://pl.indeed.com//rc/clk?jk=15df3a55808d8f83&fccid=45d5bb47777eab56&vjs=3"
    }
  ],
  "207": [
    {
      "name": "Inżynier Niezawodności",
      "company": "HRWISE",
      "urls": "https://pl.indeed.com//rc/clk?jk=7f83c74c7de57131&fccid=e834468dcd30ed28&vjs=3"
    },
    {
      "name": "Kierownik sekcji jakości",
      "company": "RANDSTAD POLSKA SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALN...",
      "urls": "https://pl.indeed.com//rc/clk?jk=8ae60db4d7d4f6d4&fccid=2e3c949643904937&vjs=3"
    },
    {
      "name": "kierownik sekcji jakości",
      "company": "",
      "urls": "Randstad"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=543e3323d59d343d&fccid=f8b265243da9f9d7&vjs=3",
      "company": "xxx",
      "urls": "208"
    }
  ],
  "209": [],
  "210": [],
  "211": [
    {
      "name": "Asystent Technologa / Technolog",
      "company": "Euronova Sp.z o.o. Sp.k.",
      "urls": "https://www.praca.pl/asystent-technologa-technolog_3324544.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3359394.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Projektant Java [rekrutacja online]",
      "company": "Asseco Poland S.A.",
      "urls": "https://www.praca.pl/projektant-java-rekrutacja-online_3330020.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "CE Digital Learning Design Manager",
      "company": "Tesco Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/ce-digital-learning-design-manager_3383684.html#b88b03819a9dfb57bab9964aaadd03a3"
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
      "name": "Konstruktor - Technolog",
      "company": "KMW INVEST SP. Z O.O.",
      "urls": "https://www.praca.pl/konstruktor-technolog_3368046.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3361498.html#b88b03819a9dfb57bab9964aaadd03a3"
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
      "name": "Projektant",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/projektant_3386712.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Inżynier konstruktor - projektant",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/inzynier-konstruktor-projektant_3381986.html#b88b03819a9dfb57bab9964aaadd03a3"
    },
    {
      "name": "Doradca klienta o specjalności projektant grafik",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/doradca-klienta-o-specjalnosci-projektant-grafik_3390434.html#b88b03819a9dfb57bab9964aaadd03a3"
    }
  ],
  "212": [
    {
      "name": "Konstruktor - Technolog",
      "company": "KMW INVEST SP. Z O.O.",
      "urls": "https://www.praca.pl/konstruktor-technolog_3368046.html#269c3ee803dee6dedf08d2382347530c"
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
      "name": "Konstruktor / Projektant",
      "company": "ISL Innowacyjne Systemy Logistyczne Sp. z o.o.",
      "urls": "https://www.praca.pl/konstruktor-projektant_3339236.html#269c3ee803dee6dedf08d2382347530c"
    },
    {
      "name": "Inżynier konstruktor - projektant",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/inzynier-konstruktor-projektant_3381986.html#269c3ee803dee6dedf08d2382347530c"
    }
  ],
  "213": [
    {
      "name": "Młodszy Koordynator Operacyjny",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=b66c7ff9f63fa7b3&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Doradca Energetyczny ds. fotowoltaiki",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=3da517f5b6b5a3a4&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Przedstawiciel Handlowy ds. Fotowoltaiki (B2B)",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=db6cf90593a8d111&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Elektryka lub/i montera instalacji grzewczych OZE",
      "company": "ECO-TECHNIKA Piotr Dunas",
      "urls": "https://pl.indeed.com//rc/clk?jk=d45df006c66a91cd&fccid=0991c0a1f1fdf628&vjs=3"
    },
    {
      "name": "Monter instalacji fotowoltaicznych",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=f86bb269d7d12e01&fccid=689c8978b4a0506b&vjs=3"
    },
    {
      "name": "Konsultant ds. realizacji",
      "company": "Columbus Energy",
      "urls": "https://pl.indeed.com//rc/clk?jk=33f285a610ec0c64&fccid=689c8978b4a0506b&vjs=3"
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
      "name": "Doradca Energetyczny – Przedstawiciel ds. Fotowoltaiki",
      "company": "Hymon Energy Sp z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=f8ee21d7e6363eef&fccid=2da66c87c199269b&vjs=3"
    },
    {
      "name": "Doradca sprzedaży instalacji fotowoltaicznych",
      "company": "H4H Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=c57b6d08798e2dfd&fccid=4f9cb417d6f6258b&vjs=3"
    },
    {
      "name": "Senior Engineer (Renewable Energy)",
      "company": "Devire",
      "urls": "https://pl.indeed.com//rc/clk?jk=49b765392196258d&fccid=dac7798bc9cb142c&vjs=3"
    }
  ],
  "214": [
    {
      "name": "Instalator wodny / grzewczy ",
      "company": "PERFECT TEAM Marcin Kaszta",
      "urls": "https://www.praca.pl/instalator-wodny-grzewczy_3357828.html#7198f02b84992d3e184d5d7b2013b316"
    }
  ],
  "215": [
    {
      "name": "Modszy Administrator IT",
      "company": "POLSKA PRESS SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/mlodszy-administrator-it-krakow,oferta,1000221960"
    }
  ],
  "216": [],
  "217": [],
  "218": [],
  "219": [],
  "220": [],
  "221": [],
  "222": [],
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
      "name": "Kierownik Robót Drogowych",
      "company": "GruntBudowa",
      "urls": "https://www.praca.pl/kierownik-robot-drogowych_3396248.html#0e2a990a13378c31c963f05cff55ac1d"
    },
    {
      "name": "Regionalny Przedstawiciel Handlowy na rynek Europy Zachodniej",
      "company": "Termika Sp. z o.o.",
      "urls": "https://www.praca.pl/regionalny-przedstawiciel-handlowy-na-rynek-europy-zachodniej_3393756.html#0e2a990a13378c31c963f05cff55ac1d"
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
  "233": [
    {
      "name": "BI Analyst / Expert [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/bi-analyst-expert-rekrutacja-online_3355558.html#80b342a392d7e88515d1e70374f9201d"
    }
  ],
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
    },
    {
      "name": "Specjalista ds. modernizacji ewidencji gruntów i budynków",
      "company": "",
      "urls": "MGGP S.A."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=97072176d204c3c0&fccid=2d0f4f48587e250d&vjs=3",
      "company": "xxx",
      "urls": "238"
    }
  ],
  "239": [],
  "240": [],
  "241": [],
  "242": [],
  "243": [],
  "244": [],
  "245": [
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "Modszy Administrator IT",
      "company": "POLSKA PRESS SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/mlodszy-administrator-it-krakow,oferta,1000221960"
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
    }
  ],
  "248": [
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "FPGA Test Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-test-engineer-working-student-krakow,oferta,1000197217"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "FPGA Design Verification Engineer  Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-design-verification-engineer-working-student-krakow,oferta,1000197226"
    },
    {
      "name": "Junior Investment Solutions Group Portfolio Management Analyst with State Street Global Advisors, Officer",
      "company": "State Street Bank Polska",
      "urls": "https://www.pracuj.pl/praca/junior-investment-solutions-group-portfolio-management-analyst-with-state-street-krakow,oferta,1000219275"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000196951"
    },
    {
      "name": "Working Student - Software Test Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-test-engineer-krakow,oferta,1000197209"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Developer.Net",
      "company": "FUTURITI SP. Z O.O. ",
      "urls": "https://www.pracuj.pl/praca/developer-net-krakow,oferta,7506800"
    },
    {
      "name": "RF Test Engineer - Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/rf-test-engineer-working-student-krakow,oferta,1000197222"
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
      "name": "Praktyki letnie w obszarze Machine Learning i Artificial Intelligence",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-machine-learning-i-artificial-intelligence-krakow,oferta,7473411"
    },
    {
      "name": "Praktyki letnie w obszarze programowania i testowania",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-programowania-i-testowania-krakow,oferta,7473426"
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
      "name": "Junior .NET Developer (fullstack) [online recruitment]",
      "company": "Grafton Recruitment Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-net-developer-fullstack-online-recruitment-krakow,oferta,7464661"
    }
  ],
  "249": [
    {
      "name": "Senior Process Engineering Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-process-engineering-analyst_3396702.html#11723b3082ffeaefebb47759d4100709"
    },
    {
      "name": "Business Analyst [rekrutacja online]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/business-analyst-rekrutacja-online_3343528.html#11723b3082ffeaefebb47759d4100709"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#11723b3082ffeaefebb47759d4100709"
    },
    {
      "name": "Associate Manager Business Intelligence",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/associate-manager-business-intelligence_3313950.html#11723b3082ffeaefebb47759d4100709"
    }
  ],
  "250": [
    {
      "name": "Security Solutions Consultant",
      "company": "Power Media",
      "urls": "https://www.praca.pl/security-solutions-consultant_3383016.html#c9f3717e4ee48e0ae35bb371e45c32e3"
    },
    {
      "name": "Video Full Stack (.NET C#/Angular) Software Engineer [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/video-full-stack-net-c-angular-software-engineer-rekrutacja-online_3355870.html#c9f3717e4ee48e0ae35bb371e45c32e3"
    },
    {
      "name": "Video .NET(C#) Software Engineer [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/video-net-c-software-engineer-rekrutacja-online_3355872.html#c9f3717e4ee48e0ae35bb371e45c32e3"
    },
    {
      "name": "Specjalista ds. bezpieczeństwa",
      "company": "Power Media",
      "urls": "https://www.praca.pl/specjalista-ds-bezpieczenstwa_3366746.html#c9f3717e4ee48e0ae35bb371e45c32e3"
    },
    {
      "name": "Video Solutions - Media Streaming Expert [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/video-solutions-media-streaming-expert-rekrutacja-online_3378106.html#c9f3717e4ee48e0ae35bb371e45c32e3"
    },
    {
      "name": "L1 Embedded Senior Software Developer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/l1-embedded-senior-software-developer-rekrutacja-online_3314158.html#c9f3717e4ee48e0ae35bb371e45c32e3"
    }
  ],
  "251": [
    {
      "name": "Modszy Specjalista ds. Wsparcia Agencyjnych Sieci Sprzeday",
      "company": "Columbus Energy S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-wsparcia-agencyjnych-sieci-sprzedazy-krakow,oferta,1000220310"
    },
    {
      "name": "Modszy Administrator IT",
      "company": "POLSKA PRESS SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/mlodszy-administrator-it-krakow,oferta,1000221960"
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
      "name": "Asystentka / Sekretarka - Concierge online",
      "company": "Recruit Europe Takeshige Yokota",
      "urls": "https://www.pracuj.pl/praca/asystentka-sekretarka-concierge-online-krakow,oferta,1000227254"
    },
    {
      "name": "Asystent Projektanta Instalatora",
      "company": "OTS-IP sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-instalatora-krakow,oferta,500033908"
    },
    {
      "name": "Praktyki letnie w obszarze Machine Learning i Artificial Intelligence",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-machine-learning-i-artificial-intelligence-krakow,oferta,7473411"
    },
    {
      "name": "Modszy Specjalista ds. Technicznego Wsparcia Sprzeday",
      "company": "BAKOTECH Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-technicznego-wsparcia-sprzedazy-krakow,oferta,7471445"
    },
    {
      "name": "Doradca Biznesowy sieci PLAY [Rekrutacja prowadzona online]",
      "company": "m-PLAY",
      "urls": "https://www.praca.pl/doradca-biznesowy-sieci-play-rekrutacja-prowadzona-online_3385438.html#6df9b2ae561bff7346a0d9ee4f5acf22"
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
  "253": [],
  "254": [],
  "255": [],
  "256": [
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Java Developer (Mid)",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/java-developer-mid_3396308.html#192bc54349cbae22e6fdd9549a384c0d"
    },
    {
      "name": "Video .NET(C#) Software Engineer [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/video-net-c-software-engineer-rekrutacja-online_3355872.html#192bc54349cbae22e6fdd9549a384c0d"
    },
    {
      "name": "Video Solutions - Media Streaming Expert [rekrutacja online]",
      "company": "Motorola Solutions",
      "urls": "https://www.praca.pl/video-solutions-media-streaming-expert-rekrutacja-online_3378106.html#192bc54349cbae22e6fdd9549a384c0d"
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
      "name": "Elektronik/projektant",
      "company": "AMC TECH Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=38e50a4fcae071f9&fccid=9ea9ac0db41cd67b&vjs=3"
    },
    {
      "name": "Projektant w branży elektronergetycznej",
      "company": "MLElectric Sp. z o.o.",
      "urls": "https://pl.indeed.com//company/Mlelectric-Sp.-z-o.o./jobs/Projektant-W-Bran%C5%BCy-Elektronergetycznej-afc44b00e11824a2?fccid=19f4a348bbabfcc0&vjs=3"
    },
    {
      "name": "Projektant - Technolog",
      "company": "AMK Kraków",
      "urls": "https://pl.indeed.com//rc/clk?jk=d28797d8ccec234f&fccid=5c065c1c92843790&vjs=3"
    },
    {
      "name": "Inżynier/ Elektryk Projektant E-PLAN",
      "company": "Axamo Recruitment",
      "urls": "https://pl.indeed.com//rc/clk?jk=494a424cfbfab4d1&fccid=f86175c7ba708305&vjs=3"
    },
    {
      "name": "Projektant",
      "company": "Grupa Projekt",
      "urls": "https://pl.indeed.com//rc/clk?jk=e16befb455fe6d1e&fccid=37607da95fc8dee9&vjs=3"
    },
    {
      "name": "Projektant Instalacji Wodnych",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com//rc/clk?jk=e9b178b66a2ccaa7&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Pracownik produkcji - praca z zamieszkaniem (wielkopolskie,...",
      "company": "Projektanci Kariery",
      "urls": "https://pl.indeed.com//rc/clk?jk=d91ae3ea1b5c99c6&fccid=b65cab7ed2a9ca3b&vjs=3"
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
  "264": [
    {
      "name": "Asystent Projektanta Instalatora",
      "company": "OTS-IP sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-instalatora-krakow,oferta,500033908"
    }
  ],
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
      "name": "Specjalista ds. układów kogeneracyjnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=a5f702f39c8819b4&fccid=1cd754675a5b8353&vjs=3"
    },
    {
      "name": "GEODETA/Specjalista ds. detekcji infrastruktury podziemnej",
      "company": "GISonLine",
      "urls": "https://pl.indeed.com//rc/clk?jk=0752b9dea00bed12&fccid=f3a59a13accc2eb6&vjs=3"
    },
    {
      "name": "Specjalista ds. modernizacji ewidencji gruntów i budynków",
      "company": "",
      "urls": "MGGP S.A."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=97072176d204c3c0&fccid=2d0f4f48587e250d&vjs=3",
      "company": "GEODETA/Specjalista ds. baz danych GESUT i BDOT",
      "urls": "GISonLine"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d6ce492234ce6414&fccid=f3a59a13accc2eb6&vjs=3",
      "company": "xxx",
      "urls": "268"
    },
    {
      "name": "Konsultant Asysty Technicznej (Telekomunikacja, BSS)",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=61e3d7eade51641a&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Administrator systemów IT",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=875beb0934c9602f&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "ORNITOLOG/PRZYRODNIK"
    },
    {
      "name": "Future Green Innovations",
      "company": "https://pl.indeed.com//rc/clk?jk=2b0968afbc1faf41&fccid=5981b74173f9ac17&vjs=3",
      "urls": "Koordynator ds. Infrastruktury"
    },
    {
      "name": "HRWISE",
      "company": "https://pl.indeed.com//rc/clk?jk=8d0b6a1cc2632713&fccid=e834468dcd30ed28&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "269",
      "company": "xxx",
      "urls": "270"
    }
  ],
  "271": [
    {
      "name": "Junior Project Manager / Project Manager – Kraków/Rzeszów",
      "company": "HR Design Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=a1e0b2971ed6e546&fccid=bbb0d4b7a797817a&vjs=3"
    }
  ],
  "272": [
    {
      "name": "Młodszy Operator Urządzeń",
      "company": "Teva Pharmaceuticals",
      "urls": "https://pl.indeed.com//rc/clk?jk=e661622a4aac8b5a&fccid=898362c5e54ec4c7&vjs=3"
    },
    {
      "name": "Doradca Techniczno-Handlowy",
      "company": "Business Bridge Group Sp. z o.o.",
      "urls": "https://pl.indeed.com//company/Business-Bridge-Group/jobs/Doradca-Techniczno-Handlowy-abffbce389e00f77?fccid=8bf73af96425da0b&vjs=3"
    }
  ],
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
      "name": "Geodeta / Inżynier Budowy",
      "company": "GruntBudowa",
      "urls": "https://www.praca.pl/geodeta-inzynier-budowy_3355898.html#e49c363a49ea008ad82b8057827dcbfb"
    }
  ],
  "284": [
    {
      "name": "Asystent/ka Oddziau",
      "company": "Nowodworski Estates Sp. z o.o. Sp. k.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-oddzialu-krakow,oferta,1000237166"
    },
    {
      "name": "Asystentka rady nadzorczej",
      "company": "GD&K Consulting Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystentka-rady-nadzorczej-krakow,oferta,1000251661"
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
      "name": "Asystentka - Tumaczka",
      "company": "FPH METAL - TECH",
      "urls": "https://www.pracuj.pl/praca/asystentka-tlumaczka-krakow,oferta,1000235380"
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
      "name": "Asystent /-ka Kierownika Projektu",
      "company": "Enervigo sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-kierownika-projektu-krakow,oferta,1000223118"
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
      "name": "Asystent Biura z bieg znajomoci jzyka angielskiego ",
      "company": "PI MANAGEMENT SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/asystent-biura-z-biegla-znajomoscia-jezyka-angielskiego-krakow,oferta,500033363"
    },
    {
      "name": "Pracownik do obsugi klienta biznesowego z jzykiem fiskim (M/K)",
      "company": "CPL Jobs Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/pracownik-do-obslugi-klienta-biznesowego-z-jezykiem-finskim-m-k-krakow,oferta,1000228407"
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
      "name": "Asystentka biura - Doradca ds. nieruchomoci",
      "company": "AP7 Sp. z o.o",
      "urls": "https://www.pracuj.pl/praca/asystentka-biura-doradca-ds-nieruchomosci-krakow,oferta,7462659"
    },
    {
      "name": "Asystentka/Asystent Zarzdu",
      "company": "Columbus Energy S.A.",
      "urls": "https://www.pracuj.pl/praca/asystentka-asystent-zarzadu-krakow,oferta,7462222"
    },
    {
      "name": "Modszy Specialista w dziale HR z jzykiem niemieckim (m/k)",
      "company": "CPL Jobs Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specialista-w-dziale-hr-z-jezykiem-niemieckim-m-k-krakow,oferta,7464992"
    },
    {
      "name": "Modszy Specjalista ds. Administracji z jzykiem francuskim",
      "company": "Antal International Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-administracji-z-jezykiem-francuskim-krakow,oferta,7462158"
    },
    {
      "name": "Sekretarka medyczna",
      "company": "Narodowy Instytut Onkologii im. Marii Skodowskiej-Curie - Pastwowy Instytut Badawczy",
      "urls": "https://www.pracuj.pl/praca/sekretarka-medyczna-krakow,oferta,7462543"
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
      "name": "Pracownik biurowy",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/pracownik-biurowy_3361570.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "IT Specialist (Senior Analyst) (L2 Support) with English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-specialist-senior-analyst-l2-support-with-english_3389752.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/it-support-analyst_3401260.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Specjalista / Specjalistka ds. Kadr [rekrutacja online]",
      "company": "Crowe Poland",
      "urls": "https://www.praca.pl/specjalista-specjalistka-ds-kadr-rekrutacja-online_3372792.html#6aee704a6dceb4f4fcecc0241b19ea4d"
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
      "name": "Specjalista ds. Personalnych",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-personalnych_3396854.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Listonosz samochodowy",
      "company": "Fundacja Aktywizacja",
      "urls": "https://www.praca.pl/listonosz-samochodowy_3370052.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Pracownik biurowy w międzynarodowej firmie z językiem węgierskim (m/k)",
      "company": "CPL JOBS Sp. z o.o.",
      "urls": "https://www.praca.pl/pracownik-biurowy-w-miedzynarodowej-firmie-z-jezykiem-wegierskim-m-k_3345460.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Pracownik Administracyjny – Sekcja Administracji",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://www.praca.pl/pracownik-administracyjny-sekcja-administracji_3359184.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "IT Support Analyst with Hungarian & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-support-analyst-with-hungarian-english_3322704.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "IT Support Analyst with Romanian & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-support-analyst-with-romanian-english_3323824.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "IT Support Analyst with Czech & English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-support-analyst-with-czech-english_3323834.html#6aee704a6dceb4f4fcecc0241b19ea4d"
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
      "name": "Workday Integration Developer (System Support Area) [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/workday-integration-developer-system-support-area-rekrutacja-online_3355572.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "IT Analyst with German & English ",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-german-english_3341804.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "Specjalista IT [rekrutacja prowadzona online]",
      "company": "ZIKO Apteka Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-it-rekrutacja-prowadzona-online_3356916.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    },
    {
      "name": "IT Analyst with Dutch and English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-analyst-with-dutch-and-english_3339228.html#6aee704a6dceb4f4fcecc0241b19ea4d"
    }
  ],
  "285": [
    {
      "name": "stanowisko urzędnicze ds. dochodzenia zwrotu należności",
      "company": "",
      "urls": "Wojewódzki Urząd Pracy"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=81350e339fac5205&fccid=bc471191f6853dba&vjs=3",
      "company": "Analityk IT (systemy ERP)",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=5fef55ba2379d594&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Stanowisko urzędnicze ds. wdrażania (projektów EFS)"
    },
    {
      "name": "Wojewódzki Urząd Pracy w Krakowie",
      "company": "https://pl.indeed.com//rc/clk?jk=be5a4bfcbeb51cc2&fccid=d81219123eed79f6&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "286",
      "company": "Administrator nieruchomości mieszkaniowych",
      "urls": "PROMOS Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//company/PROMOS-Facility-Services/jobs/Administrator-Nieruchomo%C5%9Bci-Mieszkaniowych-e5691a9ca97e20c2?fccid=4670259d1e1c248e&vjs=3",
      "company": "Menedżer w Dziale Galerii Handlowych ds. Zarządzania Galeria...",
      "urls": ""
    },
    {
      "name": "Carrefour",
      "company": "https://pl.indeed.com//rc/clk?jk=eece2c7d9e166ce8&fccid=669350d87ae4a4a6&vjs=3",
      "urls": "Zarządca/Administrator Nieruchomości KRAKÓW"
    },
    {
      "name": "Piotr Bondal",
      "company": "https://pl.indeed.com//rc/clk?jk=0dab6d83ceb7bb07&fccid=ec7868fb5eee7c1d&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "287",
      "company": "Asystentka biura - Doradca ds. nieruchomoci",
      "urls": "AP7 Sp. z o.o"
    },
    {
      "name": "https://www.pracuj.pl/praca/asystentka-biura-doradca-ds-nieruchomosci-krakow,oferta,7462659",
      "company": "xxx",
      "urls": "288"
    }
  ],
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
      "name": "Asystent Technologa / Technolog",
      "company": "Euronova Sp.z o.o. Sp.k.",
      "urls": "https://www.praca.pl/asystent-technologa-technolog_3324544.html#cf32a7e1e1249a31dced6f86de8d2bac"
    },
    {
      "name": "Projektant Technolog",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://www.praca.pl/projektant-technolog_3359394.html#cf32a7e1e1249a31dced6f86de8d2bac"
    },
    {
      "name": "Młodszy projektant odzieży marki Wólczanka",
      "company": "VRG S.A.",
      "urls": "https://www.praca.pl/mlodszy-projektant-odziezy-marki-wolczanka_3368456.html#cf32a7e1e1249a31dced6f86de8d2bac"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=fd1547044be442bc&fccid=f21426e8a7bce1ed&vjs=3"
    },
    {
      "name": "Wychowawca - Instruktor zajęć plastycznych",
      "company": "Stowarzyszenie SIEMACHA",
      "urls": "https://pl.indeed.com//rc/clk?jk=766a7ee62db3a6d8&fccid=277d9d49eab72fcb&vjs=3"
    }
  ],
  "301": [],
  "302": [
    {
      "name": "DORADCA KLIENTA – SEKTOR TECHNIKA",
      "company": "",
      "urls": "Leroy Merlin Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=eb2997d215e3ea42&fccid=cd30c4ea8664400d&vjs=3",
      "company": "DORADCA KLIENTA",
      "urls": ""
    },
    {
      "name": "Leroy Merlin Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=d4cab9cf32984d3a&fccid=cd30c4ea8664400d&vjs=3",
      "urls": "PRACOWNIK GRUPY TOWARUJĄCEJ"
    },
    {
      "name": "",
      "company": "Leroy Merlin Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=a751bb5a4be2de03&fccid=cd30c4ea8664400d&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=031ca4d13fea65bf&fccid=7e6b573a8cbf605a&vjs=3"
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
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=b83dd00cf2be1af4&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "xxx",
      "urls": "308"
    }
  ],
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
      "name": "Workday Integration Developer (System Support Area) [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/workday-integration-developer-system-support-area-rekrutacja-online_3355572.html#b0149aa83a7ebf6909dcc7b3964f89cd"
    },
    {
      "name": "Inżynier Budowy",
      "company": "Chemobudowa Kraków S.A.",
      "urls": "https://www.praca.pl/inzynier-budowy_3338932.html#b0149aa83a7ebf6909dcc7b3964f89cd"
    },
    {
      "name": "Ślusarz Narzędziowy",
      "company": "Schwinn Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/slusarz-narzedziowy_3315924.html#b0149aa83a7ebf6909dcc7b3964f89cd"
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
      "name": "Młodszy Specjalista Analityk w Laboratorium Biologicznym Działu Kontroli Jakości",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/mlodszy-specjalista-analityk-w-laboratorium-biologicznym-dzialu-kontroli-jakosci_3396516.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Specjalista od titratorów [rekrutacja online]",
      "company": "Labindex",
      "urls": "https://www.praca.pl/specjalista-od-titratorow-rekrutacja-online_3370450.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Analityk laboratoryjny",
      "company": "Philip Morris International",
      "urls": "https://www.praca.pl/analityk-laboratoryjny_3339282.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
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
      "name": "Junior Full Stack Developer",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com//rc/clk?jk=346cc28ca0d2e4cc&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "Brand Manager",
      "company": "HEADHUNTERS GROUP",
      "urls": "https://pl.indeed.com//rc/clk?jk=962d397e2ef9ab2c&fccid=2626896dbec10c5d&vjs=3"
    },
    {
      "name": "Konsultant pomocy technicznej systemu ERP Streamsoft Prestiż",
      "company": "Streamsoft",
      "urls": "https://pl.indeed.com//rc/clk?jk=2d62f62131c64c6f&fccid=1240fd6f430e60df&vjs=3"
    },
    {
      "name": "Specjalista ds. Finansowo-Księgowych",
      "company": "AERO-GSE",
      "urls": "https://pl.indeed.com//company/AERO--GSE-Sp.-z-o.o./jobs/Specjalista-Do-Spraw-Finansowo-Ksi%C4%99gowych-af77ea3cf7793208?fccid=f93698bcb0cc9059&vjs=3"
    },
    {
      "name": "Dyrektor ds. Sprzedaży - produkcja prefabrykowanych konstruk...",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com//rc/clk?jk=09b3123c70bbdca1&fccid=7ba137e236695657&vjs=3"
    },
    {
      "name": "Chief Operating Officer",
      "company": "OneMoreGame.STUDIO Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=4b9eb66949656491&fccid=6ccc6ece55eac261&vjs=3"
    },
    {
      "name": "Regular PHP Developer",
      "company": "Mobilem Poland Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=6a771b72c07c33b3&fccid=18942caf6173fed4&vjs=3"
    },
    {
      "name": "Key Account Manager - Project Manager",
      "company": "Klient firmy Talenthouse",
      "urls": "https://pl.indeed.com//rc/clk?jk=41d921305563df2f&fccid=e73219c89efeb2f6&vjs=3"
    },
    {
      "name": "Pracownik biurowy z j. hiszpańskim (student/ka)",
      "company": "",
      "urls": "Genpact PL"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=70f331d8e9cf4c0b&fccid=afe30394bfba1470&vjs=3",
      "company": "Senior Full Stack Developer",
      "urls": "Sofyne"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=663aad59306ff336&fccid=64e33cf5dc4a100d&vjs=3",
      "company": "Full Stack PHP Developer",
      "urls": "Mobilem Poland Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=eabfdbe67971e30c&fccid=18942caf6173fed4&vjs=3",
      "company": "Specjalista ds. Projektów UE",
      "urls": "OneMoreGame.STUDIO Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=3e0a0615bf6bcb8c&fccid=6ccc6ece55eac261&vjs=3",
      "company": "Senior User Acquisition Manager",
      "urls": "Strategie Personalne"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=2ec69d0c1f94999e&fccid=29ef11a4e93c431f&vjs=3",
      "company": "xxx",
      "urls": "333"
    }
  ],
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
    },
    {
      "name": "Inzynier ds. Konfiguracji Projektu Softwarowego",
      "company": "",
      "urls": "Aptiv"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=4587003a356b5b6f&fccid=8d390ab1843cb8bd&vjs=3",
      "company": "xxx",
      "urls": "335"
    },
    {
      "name": "Mechanik, Serwisant wózków widłowych",
      "company": "Emtor Spółka z o.o.",
      "urls": "https://www.praca.pl/mechanik,serwisant-wozkow-widlowych_3389614.html#931435cae6afd62258f90d68dda88132"
    },
    {
      "name": "Senior / Advanced Software Developer",
      "company": "Merit Poland Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-advanced-software-developer_3365188.html#931435cae6afd62258f90d68dda88132"
    },
    {
      "name": "Handlowiec",
      "company": "OPOLTRANS Spółka z o.o.",
      "urls": "https://www.praca.pl/handlowiec_3378358.html#931435cae6afd62258f90d68dda88132"
    },
    {
      "name": "Kierownik strefy – menadżer ds. sprzedaży w sieci dealerskiej",
      "company": "mFinanse S.A.",
      "urls": "https://www.praca.pl/kierownik-strefy-menadzer-ds-sprzedazy-w-sieci-dealerskiej_3378960.html#931435cae6afd62258f90d68dda88132"
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
      "company": "",
      "urls": "FIEGE Logistik Stiftung & Co. KG"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=ad5637f900265eef&fccid=c21abee0de715f4a&vjs=3",
      "company": "Kierownik ds. Logistyki",
      "urls": "Advisory Group TEST Human Resources"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=f0cb1db02f3b3d64&fccid=eb3baf007981cd9e&vjs=3",
      "company": "Kierownik ds. rozwoju biznesu (international sales)",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=558013ecbe824cb6&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "337",
      "company": "Asystent/ka ds. Exportu umowa o pracę",
      "urls": "Euro-Trade"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=f6585873e3a0de3f&fccid=2eeccc37137128ae&vjs=3",
      "company": "xxx",
      "urls": "338"
    },
    {
      "name": "Asystent(ka) Dziau Handlowego",
      "company": "ZAMAK MERCATOR SP. Z O.O.",
      "urls": "https://www.pracuj.pl/praca/asystent-ka-dzialu-handlowego-krakow-okolice,oferta,1000198624"
    },
    {
      "name": "Młodszy Specjalista Analityk w Laboratorium Biologicznym Działu Kontroli Jakości",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/mlodszy-specjalista-analityk-w-laboratorium-biologicznym-dzialu-kontroli-jakosci_3396516.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Specjalista od titratorów [rekrutacja online]",
      "company": "Labindex",
      "urls": "https://www.praca.pl/specjalista-od-titratorow-rekrutacja-online_3370450.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
    },
    {
      "name": "Analityk laboratoryjny",
      "company": "Philip Morris International",
      "urls": "https://www.praca.pl/analityk-laboratoryjny_3339282.html#7dbd8bb194d9fef9d154c3caecd5fc0a"
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
      "name": "Elektryk Przemysłowy",
      "company": "PERFECT TEAM Marcin Kaszta",
      "urls": "https://www.praca.pl/elektryk-przemyslowy_3396140.html#f039daed501b9d552e9f6ed171a37da2"
    }
  ],
  "344": [
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
      "name": "Asystent projektanta konstrukcji budowlanych",
      "company": "HW constructions, Henryk Wrbel",
      "urls": "https://www.pracuj.pl/praca/asystent-projektanta-konstrukcji-budowlanych-krakow,oferta,500033646"
    },
    {
      "name": "Regionalny Przedstawiciel Handlowy na rynek Europy Zachodniej",
      "company": "Termika Sp. z o.o.",
      "urls": "https://www.praca.pl/regionalny-przedstawiciel-handlowy-na-rynek-europy-zachodniej_3393756.html#f1adf226fe906beeaf8fa26cfe8bfae3"
    },
    {
      "name": "Geodeta / Inżynier Budowy",
      "company": "GruntBudowa",
      "urls": "https://www.praca.pl/geodeta-inzynier-budowy_3355898.html#f1adf226fe906beeaf8fa26cfe8bfae3"
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
      "company": "",
      "urls": "EC Engineering"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=7aae45b0fed6b2fa&fccid=dd2bc65880e72b4a&vjs=3",
      "company": "Audytor Wewnętrzny",
      "urls": "Mercator Medical"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=fa73fd44a3ff0faf&fccid=8f8a55b7a7525063&vjs=3",
      "company": "Business Process Improvement Manager",
      "urls": "Mercator Medical"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=64e5a4c6893162f1&fccid=8f8a55b7a7525063&vjs=3",
      "company": "Social Media Specialist",
      "urls": "Veneo"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=4c363984e58a6a2b&fccid=d055a1ba91135454&vjs=3",
      "company": "IT Project Manager",
      "urls": "Hays"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=074cde2431e93e05&fccid=31670bef3ae6497b&vjs=3",
      "company": "Senior Business Controller – Kraków",
      "urls": "People Service Recruitment Group"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=c5745aa8a0cd9280&fccid=b2795a71c9d1222d&vjs=3",
      "company": "Koordynator Testów",
      "urls": "ProData Consult"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=8236f470a9027b02&fccid=fa336ade0bd80ccd&vjs=3",
      "company": "Doświadczony Asystent/Senior, Business Tax Advisory, Kraków/...",
      "urls": ""
    },
    {
      "name": "EY",
      "company": "https://pl.indeed.com//rc/clk?jk=24d4bcdc2792fbfe&fccid=1544766d4c2915b0&vjs=3",
      "urls": "Lider Działu Inżynierii Procesu"
    },
    {
      "name": "Grafton Recruitment Polska",
      "company": "https://pl.indeed.com//rc/clk?jk=c94802d34ca011fe&fccid=062f71e131e87cf0&vjs=3",
      "urls": "Kierownik projektu (bankowość)"
    },
    {
      "name": "",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=8641baceed963f2f&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Global Injection Molding Expert for Supplier Quality",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=f3464b3a6356f584&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Assistant Manager z j. niemieckim",
      "company": "dotCommunity",
      "urls": "https://pl.indeed.com//company/dotCommunity/jobs/Assistant-Manager-Z-Niemieckim-1c159297550ea523?fccid=b24c832dd0dc2a5d&vjs=3"
    },
    {
      "name": "Specjalista ds. Wdrożeń Systemów Analitycznych",
      "company": "Power Media",
      "urls": "https://pl.indeed.com//rc/clk?jk=0dbe208d18437dbd&fccid=cfa2a094a933b6fb&vjs=3"
    },
    {
      "name": "IT Support Technician",
      "company": "New-Invest Business Support",
      "urls": "https://pl.indeed.com//rc/clk?jk=0842ddbe0837035a&fccid=45c7d019cc96de8e&vjs=3"
    },
    {
      "name": "IT Project Manager",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com//rc/clk?jk=e14af56a0c91384f&fccid=4fcb59d2ba8f65d1&vjs=3"
    }
  ],
  "356": [
    {
      "name": "Power Grids - Quality and Continuous Improvement Specialist",
      "company": "",
      "urls": "ABB"
    },
    {
      "name": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqDUsVUkfH4EkrN84Gz9KZzMWLpWhyY86qBLFyf-lZ5_fhPr0f8HZO_XXiGXp7BNC9cAkHDzsSB9KHk6nTcvhXp0OjBk17CLkjWapyd5cEZ0GTHoP3jNsix06zpZux1pRLlr_AaI9A__oHGGEShe0zxlilePS8vX2Q0Ee1BExOZRMgibFYBOV2RDe167a4Fva1MYNew_x11GPIrpXaOKU1r6xXu3RlcJ0nSuOI_58NVodtOcH4mSQD8OYFHJFaRAer0ag4jVyxqdBQ6qTQEs7SHvWyp6uqkoWuoZOgh8ny5GDU5qKp6-Xvwj_7Tyxb-7s-uswwmzYQwlAoy69zUl9eViSNYV1IMWS1yvgp8xeCE7_EHQZbQhTO-7Gjw-47ftojdf9KYgbDERpwlvh2G22tdn8wNSOXYv3hmsMybOM8GN_beMLBWwYEQGICTWV9IlhA4MNkC2OQRdG4zihtAxdlL_SrAvLs1NxsU6sXqW1rCnTefDBcp7ll9eKrpUlmV2538-oY9JLRc8XXC47V_Gtg_1h2WSTZHohuCAOkoFLYltFQJJrWAH-lMBXj0Rqdwn8GcsUW4u0X-d2hC6cAxQkWRgMyT6UWqAWOX48wvXsVyJ2snGe_YPLktDNfJjjiq0-lYgpBk6fDN-foISDHN4J9OkLbxcC8Ham8kSfyjZMhHhuUbYOpkglfBwoJuQ6Zzbp_wZ1ta6hNNWv3PX_5axvAHhqY_lMF7Txw==&p=0&fvj=0&vjs=3",
      "company": "Supv Partner Setup",
      "urls": ""
    },
    {
      "name": "MoneyGram",
      "company": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0BEhGvx0zGXfLkTTmikvtHKrs-4kgm1e_Zh29k8f9sMVsWIVUaHpSLkaOFnUAAyyKTehZJTAhnRKBfBTwRISxfLX03-5_kxEigmqCCpGTprj6FrD0kuHE_vH8ocKhylUA8cqV2dLm44IPxtf_y3Br_juyBuMGmNiLFgMaMUQMLnA4OoRMkmKRpkI8kBVIeUPw4el2UZLz7LaNE_U-tZrzDgEejh8R-YvSnQecoxJGmuNboJP0V7kELaIMeKgakT4SAGrbAnvzsBUGDKuIx2pau1N5OqJ26v3NEqcsPDxDGqjRxGNAAwBH1EV66A9Fo-vMb0CaWNDrlSf_vMbtK3_d97xZuGHMzI-p0tF2wA1NAvTVKIdC0zHVHETQOEBi5C6zCETgxbjNq3_qrvKSf_jDegPS4LziTIlbzfLLkHFNRCGDMTn-qr0FcjPo3anUKJf6oOafrmfq67nVa44z8ZH9Qc4qS4L_mKnMISuZWmuFidZcMjGIHZnCxl3vGRas_E62H2VLOUgZ8Ta6DOePAM0eQRDNiss9WX8xTVgQ8YpXvf3eyP0pm0i4Zp5Buj5QZubWOTJnchMkc4twpO85MsfjMVsJ8AbEWDbQrGWsHMFYI85ayWo1kdKl4AhFU02f9M8oUM6Mbw25JUvxSSytVbXhwKXBDtvD1atS_cmnZuJ4ai0vzXKEAHKyUKJM0cPgZRqKPPaSpT6_sobczrdLGgYVTHWFUjFdfWpMz2fmevdxk9RzcCNmve9vjm7wz9cUFTRd2G44_iIlKAsxUHZ889xSb59kebxUgwhwCOkDqzSppnJpkZtohFD-4LawejnOSdF-Dk35YATaxeGfiTACokzScXUALBNqlPVGaq8MHaky5Lx4qBQRnJKgYpaDgMD6_nwe-6TBki5GYams8g-QNxog8KGgfJLGVz6qg1rcQ7HRImrCrhHehv49WXyCLROYeI9LduDeQ5aQEteVBNae881BFAZod8EEuK3UBtcq-06qvbym-4IOfVKKmx&p=1&fvj=0&vjs=3",
      "urls": "Specjalista ds. Procesów Magazynowych"
    },
    {
      "name": "",
      "company": "FIEGE Logistik Stiftung & Co. KG",
      "urls": "https://pl.indeed.com//rc/clk?jk=ad5637f900265eef&fccid=c21abee0de715f4a&vjs=3"
    },
    {
      "name": "Pracownik Działu Magazynu",
      "company": "Alfa Laval",
      "urls": "https://pl.indeed.com//rc/clk?jk=e0e0427218496ece&fccid=ec4917fdb79e20eb&vjs=3"
    },
    {
      "name": "Lean Six Sigma Black Belt",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=87294ff6effd6333&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Transformation Coordinator - PMO",
      "company": "",
      "urls": "PepsiCo"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=4af96b7c26ffbf3f&fccid=2973259ddc967948&vjs=3",
      "company": "Specjalista ds. Obsługi Klienta z jęz. niemieckim C1",
      "urls": ""
    },
    {
      "name": "Shell",
      "company": "https://pl.indeed.com//rc/clk?jk=5d48ab48926b2611&fccid=167aa4ca2fe7d8e6&vjs=3",
      "urls": "Tokarz"
    },
    {
      "name": "Alfa Laval",
      "company": "https://pl.indeed.com//rc/clk?jk=33e12058e4c2a749&fccid=ec4917fdb79e20eb&vjs=3",
      "urls": "Global Customer Service Manager"
    },
    {
      "name": "",
      "company": "Accenture",
      "urls": "https://pl.indeed.com//rc/clk?jk=17fc9d817015d098&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Quality and Continuous Improvement Practice Manager",
      "company": "",
      "urls": "ABB"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=3a7300b24f986f89&fccid=38b4474838e7b7a1&vjs=3",
      "company": "Business Process Analyst",
      "urls": ""
    },
    {
      "name": "UBS",
      "company": "https://pl.indeed.com//rc/clk?jk=876bf16f049f5920&fccid=1c76c3a36f6c7557&vjs=3",
      "urls": "Finance Automation Program Manager"
    },
    {
      "name": "",
      "company": "Google",
      "urls": "https://pl.indeed.com//rc/clk?jk=687fc6faec5bd0c9&fccid=a5b4499d9e91a5c6&vjs=3"
    },
    {
      "name": "GL Accountant",
      "company": "",
      "urls": "International Paper"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=c58e63d8e66faa13&fccid=deb8e33e6d024fdf&vjs=3",
      "company": "Business Process Improvement Manager",
      "urls": "Mercator Medical"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=64e5a4c6893162f1&fccid=8f8a55b7a7525063&vjs=3",
      "company": "Procurement Business Process Expert",
      "urls": "Danish Crown"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=53eb823859017842&fccid=f80f74464b038a3f&vjs=3",
      "company": "Aftermarket Sales Account Manager",
      "urls": "Cummins Inc."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=b8534e75d0fcecf9&fccid=36ccedc5bfdf19b1&vjs=3",
      "company": "Power Grids - HR Operations - Delivery Process Expert Cracow...",
      "urls": ""
    },
    {
      "name": "ABB",
      "company": "https://pl.indeed.com//rc/clk?jk=9fb801811ae349b0&fccid=38b4474838e7b7a1&vjs=3",
      "urls": "Praca w językach obcych: niemiecki i angielski"
    },
    {
      "name": "Talent Place",
      "company": "https://pl.indeed.com//rc/clk?jk=12e8add399599ee4&fccid=868f0a680c88fba8&vjs=3",
      "urls": "Senior Procurement Analyst"
    },
    {
      "name": "Danish Crown",
      "company": "https://pl.indeed.com//rc/clk?jk=0c5268c3deb19212&fccid=f80f74464b038a3f&vjs=3",
      "urls": "Quality and Continuous Improvement Senior Specialist"
    },
    {
      "name": "",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=e3cb6013f28c01a5&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "CONTINUOUS IMPROVEMENT MANAGER",
      "company": "ENGINEERINGjobs",
      "urls": "https://pl.indeed.com//rc/clk?jk=baaa2ca228514c09&fccid=6b8601288f8172d5&vjs=3"
    },
    {
      "name": "GL Accountant with English",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=84707b02c58483e7&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "GL Accountant",
      "company": "",
      "urls": "International Paper Polska"
    },
    {
      "name": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNVZRp1cHiLMI_vDc3XlIgB_2O2XWO471t0A5Fret3HbcXJgBwLvH6_EWKWKBSP_BKa4loC9KfBTrw0Lm-18r14KnZ9bwzX9XNn9AHom9tDSkjNTT3h0BDfE3wbg1mogj21nY9myLxVR7lDpHzuFoNOKA8GuLRUo3YP8V2TPEkocas6Ped2P6Up3AyUbpFezANo4aYs9Ab60j8erGtMwbboYd7-YHua_NzihGLBtwg9YJvcRJ3yodGKcR8uiuwEUvxXS6Qz4_azVlic1DKnPycCa-N0y3f0LLdb6j_7Fy6tVdrry4jCyoY06vzGOzSYgT5EvKOmw7xxW2EmKAIc3U1ifTmgU-15Lmhg7ZtllA1335t_OR9Du3IpyfQG-gOwVjLnuFDffRxNCz2GjfN3y-IETtG8QsA15J-TpKiC0y8102y5TGzEA8OlKBiERd_uLU1Wem-Pu8kqSB2NhSmzhivN4jCys0zbXbT93aVmfDG-FCHoV8rEVNZ7LhaDGgTOa_amR_ryLd2pwaq7c63AKitFrL2E9EDN8iwLyjCi3w8p1c8zJTmI7lofpUD9veHmxXPUhLfEAtoCk2zcrK4wePmDo_f-isHUyODU=&p=10&fvj=0&vjs=3",
      "company": "Procurement Process Manager with German(m/f)",
      "urls": "Michael Page"
    },
    {
      "name": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfucIIF8zkAKeR29XnHrb3EEZ-bm54Fw-xMGpP9_toSXcGQEiLzHfbL7aNA0B38KmURasfOOYuL8KejputNyDSdMAVD0c-KlicXxk7hXltvDBkAmtTYhTsW-lDckkA00-uJo9GCk1VEubRSIoaG9cPs68l1p23HzmmjD1CgC8OP3qn1vbnOAZ7a4rjk9WtGykWqp4ngf6EhzxrqHUeRWRnNtCeX8b3k0cTtiE8IOcAcwKjkUT1A0Z0psKfx88L-h4Gzdc1hRY2cTK1CjU_AKH9FlBiNhZL1BcGjkVidGiovLn3Cl37U_MmPnqL-3apaeYdfL4koYVPveUB7SZpM3_hQc8gS8a741UEADNO16tz46OPHDB5zKqhijBPi9YWTheV6X6KPp9GsPfIqJS5iEDwe4gDGHEzDwyaUQdBhezlLdfW7oLbnjaaj5dP8fK3lIFdRnoZF7XR2Q64bti8R5wJeYW1xdtDvqDdYj5jkCXHf4h36RSxKDZoC6C9NGmqC4CkugdLvXVKsPsJi0cdn-O4Veo9i7GBN_b4GZuFsCflQNIZhppZBFCWScPFHrjzVkv3phEHUmtXjIiHseWUQCFu3ovIW8F4H7jhk0HEjdM4KUJbz-RwBJKDYzETJd4cG3ArPHFq6rCZH586W0vUikRNs&p=11&fvj=0&vjs=3",
      "company": "Power Grids - Continuous Improvement Specialist - Business C...",
      "urls": ""
    },
    {
      "name": "ABB",
      "company": "https://pl.indeed.com//rc/clk?jk=db7601bb62b98850&fccid=38b4474838e7b7a1&vjs=3",
      "urls": "Technology Risk Management Regional Lead"
    },
    {
      "name": "",
      "company": "UBS",
      "urls": "https://pl.indeed.com//rc/clk?jk=85a82c4bd4b12308&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "Asset Manager (Russian or German Speaker preferred)",
      "company": "",
      "urls": "Cisco Systems"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=b85ab3783c32dc83&fccid=dfc44f3b8c44a6db&vjs=3",
      "company": "Transition Manager",
      "urls": "Lobo HR"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=10d7615c6b0054de&fccid=42ea513863db8ce0&vjs=3",
      "company": "Order to Cash (AR) Manager",
      "urls": "Advisory Group TEST Human Resources"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=b5de0e6d32b0bf1f&fccid=eb3baf007981cd9e&vjs=3",
      "company": "Business Process and Data Analyst",
      "urls": "Hays"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=0d5eb26cd1e21d14&fccid=31670bef3ae6497b&vjs=3",
      "company": "Senior Quality and Technology Engineer",
      "urls": ""
    },
    {
      "name": "Motorola Solutions",
      "company": "https://pl.indeed.com//rc/clk?jk=afde5e76332b3188&fccid=22ec6ef3cc441ac2&vjs=3",
      "urls": "Procure to Pay (P2P) Project Specialist"
    },
    {
      "name": "",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=410f6ed5770f38b2&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Senior Asset Manager (Russian Speaker)",
      "company": "",
      "urls": "Cisco Systems"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=6332738215460463&fccid=dfc44f3b8c44a6db&vjs=3",
      "company": "Customer Service Professional - German Speaker",
      "urls": "Talent Place"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=4fef3ac07ce82bc5&fccid=868f0a680c88fba8&vjs=3",
      "company": "(Senior) IT Business Analyst",
      "urls": "HRO Digital"
    },
    {
      "name": "https://pl.indeed.com//company/HRO-Digital/jobs/IT-Business-Analyst-7fb7704b0368f151?fccid=a625a1c5dd0c3aed&vjs=3",
      "company": "Customer Operations Specialist - German Speaker",
      "urls": "Talent Place"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=ec764ac10fababf9&fccid=868f0a680c88fba8&vjs=3",
      "company": "Credit Assessment Analyst - German Speaker",
      "urls": "Talent Place"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=23e05716598e9cd1&fccid=868f0a680c88fba8&vjs=3",
      "company": "xxx",
      "urls": "357"
    },
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
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfucIIF8zkAKeR29XnHrb3EEZ-bm54Fw-xMGpP9_toSXcGQEiLzHfbL7aNA0B38KmURasfOOYuL8KejputNyDSdMAVD0c-Klicqh1fXm_Y4XPoYN_uSK-31xtl3JP-Jj3mK5Su4vnbr44q5PcbzMHflADBRXvmQyfis0AMOZaT2TBtxPcajH1w9OBjHLvOjWLLlup21BSgAf06Wp-QUH92ggYpWi5uxd37jeBbGNQiiPb3wl_maelTUSH4mEVYRT4lydVAbf8TVCltQhh14gYqgzdGhWxnCPfGzE_zrfaZmY3Ax0HRF9MiOl7p9y34bao5MZbIzAQeAGzuuDpRj-KtPvy6pBVV8dIcwxx0ketl4xIirXRdIwbvB9-q25xExhVSHwKDCQWOz9YjOGzxI9c21qbVuL7BuPPmAhmfajbFWvH1FE6kFgCe7ohWzzm74dUakHg0OFyMLuSuIdEcumG_0g_D4ABaMp6LKyf32VJKusLbXR_ffnXgx6iE67BU1wsVHcon-AHDd459Hf_Kg0N7pa7nG3HbpMgvbYJowLmyuK5rzUv00DsbH8cxOPKw_cOD76mvB5KT35W855RT9_LNCm91bw52a9R2dfQ0zBkuT9rujwZXDiidyhtZCr5cRTpM2tWkCp5cNNA==&p=0&fvj=0&vjs=3"
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
      "name": "Kierownik BOK",
      "company": "TALENTHOUSE HR Advisory",
      "urls": "https://pl.indeed.com//rc/clk?jk=745e25df06f008d4&fccid=7ba137e236695657&vjs=3"
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
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=7d4ed6e6853f9d9a&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Tester Automatyzujący - rekrutacja prowadzona online",
      "urls": "Fitech"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=aca13f17601ca2b2&fccid=52d48f1974e43ed4&vjs=3",
      "company": "Client Success Manager",
      "urls": "Sofyne"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=b9999e64aef721d6&fccid=64e33cf5dc4a100d&vjs=3",
      "company": "Specjalista ds dokumentacji technicznej - rekrutacja prowadz...",
      "urls": "Fitech"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=6cd8122e22bcd3d7&fccid=52d48f1974e43ed4&vjs=3",
      "company": "Full Stack Developer - rekrutacja prowadzona online",
      "urls": "Fitech"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=b1a566a4f363f736&fccid=52d48f1974e43ed4&vjs=3",
      "company": "BI Consultant / Data Analyst",
      "urls": "Sofyne"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=2cf8a0c761706e63&fccid=64e33cf5dc4a100d&vjs=3",
      "company": "Industralization Engineer",
      "urls": "OCTOPUS Recruitment Agency"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=cc1c9fd7dff9cce0&fccid=b51d728789e5a630&vjs=3",
      "company": "Kierownik ds. rozwoju biznesu IoT",
      "urls": ""
    },
    {
      "name": "Comarch",
      "company": "https://pl.indeed.com//rc/clk?jk=9406f6cc7a335725&fccid=68b975ecbbd7a58d&vjs=3",
      "urls": "Java Developer (ERP)"
    },
    {
      "name": "OnWelo",
      "company": "https://pl.indeed.com//rc/clk?jk=a272cfa66555d017&fccid=f0576bc2d3ad81bd&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "360",
      "company": "xxx",
      "urls": "361"
    }
  ],
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
      "name": "Inżynier sprzedaży systemów bezpieczeństwa przemysłowego",
      "company": "GRUPA WOLFF",
      "urls": "https://pl.indeed.com//rc/clk?jk=d85a4988a3bbd086&fccid=3d99fb61e9e62f24&vjs=3"
    },
    {
      "name": "Inżynier Automatyk",
      "company": "ENKI Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=0f9e18031e6d937f&fccid=0881f6d660552bf7&vjs=3"
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
      "urls": "https://pl.indeed.com//rc/clk?jk=e1ca76724adec42e&fccid=0881f6d660552bf7&vjs=3"
    },
    {
      "name": "Inżynier systemowy w kulturze DevOps",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=08b9aa853b5c438b&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Inżynier Procesu Automotive Greenfield",
      "urls": "Grafton Recruitment Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=83af8b65d67f08d7&fccid=062f71e131e87cf0&vjs=3",
      "company": "Inżynier Utrzymania Ruchu - oferta z pakietem relokacyjnym",
      "urls": "Grafton Recruitment Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=9c070024a06d86bb&fccid=062f71e131e87cf0&vjs=3",
      "company": "Kierownik robót drogowych i torowych",
      "urls": "GK ZUE"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=373d3be4d9cd22f2&fccid=092d1ee1c3a73e20&vjs=3",
      "company": "Kierownik budowy (infrastruktura miejska)",
      "urls": "GK ZUE"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=07959f5272c9a2a7&fccid=092d1ee1c3a73e20&vjs=3",
      "company": "SysOps Engineer",
      "urls": "Transmission Dynamics Poland Sp. z o.o."
    },
    {
      "name": "https://pl.indeed.com//company/Transmission-Dynamics-Poland-Sp.-z-o.o./jobs/Sysops-Engineer-a0430a2f02f16537?fccid=71edca8a792a88bd&vjs=3",
      "company": "Projektant Sieci Wodno-Kanalizacyjnych",
      "urls": "K&K Selekt"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=80c55476fee329df&fccid=afe1f520a63ae3d3&vjs=3",
      "company": "Inżynier Procesu / Produkcji - oferta z pakietem relokacyjny...",
      "urls": "Grafton Recruitment Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=525bfd3e48fc6f63&fccid=062f71e131e87cf0&vjs=3",
      "company": "Lider Działu Inżynierii Procesu",
      "urls": "Grafton Recruitment Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=c94802d34ca011fe&fccid=062f71e131e87cf0&vjs=3",
      "company": "Kierownik sekcji jakości",
      "urls": "RANDSTAD POLSKA SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALN..."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=8ae60db4d7d4f6d4&fccid=2e3c949643904937&vjs=3",
      "company": "Lean Management Coordinator",
      "urls": "Grafton Recruitment Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=8e1c711f30e4c0b7&fccid=062f71e131e87cf0&vjs=3",
      "company": "Automatyk PLC",
      "urls": "Axamo Recruitment"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=f79baa9790b90f7c&fccid=f86175c7ba708305&vjs=3",
      "company": "DevOps Engineer (ELK Stack)",
      "urls": "EuroLinux"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=899a325ee5bed5a2&fccid=d91fbdc82addbd64&vjs=3",
      "company": "kierownik sekcji jakości",
      "urls": ""
    },
    {
      "name": "Randstad",
      "company": "https://pl.indeed.com//rc/clk?jk=543e3323d59d343d&fccid=f8b265243da9f9d7&vjs=3",
      "urls": "xxx"
    },
    {
      "name": "384",
      "company": "Inżynier Wsparcia Technicznego IP - z językiem angielskim",
      "urls": "ELFON"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=39bc98f15c46bec1&fccid=2c4afa11216a4599&vjs=3",
      "company": "xxx",
      "urls": "385"
    }
  ],
  "386": [
    {
      "name": "Inżynier ds. integracji i testowania sieci 4G/5G - KRAKÓW",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=3dc0d8f7a439242b&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "QA Engineer",
      "company": "S-Labs",
      "urls": "https://pl.indeed.com//rc/clk?jk=3300678035fa06a4&fccid=ce4f4701fb5e9335&vjs=3"
    },
    {
      "name": "QA Automation Engineer / Kraków (aktualnie zdalnie)",
      "company": "NewPerspective",
      "urls": "https://pl.indeed.com//rc/clk?jk=1ef8f4f17587f141&fccid=659d40811d5fc07a&vjs=3"
    }
  ],
  "387": [
    {
      "name": "Inżynier Systemowy DevOps - Business Support Systems",
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=fc035be427bad32e&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "Network Engineer / Inżynier sieci",
      "urls": "Washington Frank"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=5fcad688fe10a7d9&fccid=cb9285e8f83d93f4&vjs=3",
      "company": "Inżynier sieci / Network Engineer - Kraków",
      "urls": "FRG Technology Consulting"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=20e6d13e23b4bf6a&fccid=79a4f894c1383f39&vjs=3",
      "company": "Network Engineer / Inżynier sieci",
      "urls": "FRG Technology Consulting"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=8e4724c72dd3e0f9&fccid=79a4f894c1383f39&vjs=3",
      "company": "Data Science Engineer",
      "urls": "Spring Professional"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=8593ed384a623ca7&fccid=5b9b13c05b84001b&vjs=3",
      "company": "Inżynier sieci, Network Engineer",
      "urls": "Dynamics Jobs"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=7d6046df99c179ce&fccid=e7223e3ece47a796&vjs=3",
      "company": "Network Engineer, Inżynier sieci",
      "urls": "Dynamics Jobs"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=94e68e21c80930c6&fccid=e7223e3ece47a796&vjs=3",
      "company": "Senior Full Stack .NET Developer | Kraków",
      "urls": "VSOFT"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=eaaafaa77c430288&fccid=310d47694055bd6e&vjs=3",
      "company": "Software Engineer in Test | Kraków",
      "urls": "Vsoft"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=ee63930a2a2139bc&fccid=310d47694055bd6e&vjs=3",
      "company": "Oracle Developer",
      "urls": "Power Media"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=939751af5d5af958&fccid=cfa2a094a933b6fb&vjs=3",
      "company": "xxx",
      "urls": "388"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Programista / Integrator Sytemów Biznesowych [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/programista-integrator-sytemow-biznesowych-rekrutacja-online_3355568.html#1cfcda44ac5207c38ac4bebe38ef711d"
    },
    {
      "name": "Senior Xceptor Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-xceptor-developer_3338594.html#1cfcda44ac5207c38ac4bebe38ef711d"
    }
  ],
  "389": [
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
      "name": "Programista / Integrator Sytemów Biznesowych [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/programista-integrator-sytemow-biznesowych-rekrutacja-online_3355568.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3342178.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "System Architect / Manager (System Support Area) [recruitment online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/system-architect-manager-system-support-area-recruitment-online_3355564.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "BI Analyst / Expert [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/bi-analyst-expert-rekrutacja-online_3355558.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior Business Analyst",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/senior-business-analyst_3365278.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Analityk biznesowy korporacyjny",
      "company": "Bank Ochrony Środowiska S.A.",
      "urls": "https://www.praca.pl/analityk-biznesowy-korporacyjny_3389020.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3361498.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "IT Business Analyst",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/it-business-analyst_3362050.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Starszy Konsultant w Dziale Cen Transferowych i Wycen | Transfer Pricing & Valuations Senior Consultant",
      "company": "Arena Tax Sp. z o.o.",
      "urls": "https://www.praca.pl/starszy-konsultant-w-dziale-cen-transferowych-i-wycen-transfer-pricing-valuations-senior-consultant_3361038.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "Senior Xceptor Developer",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-xceptor-developer_3338594.html#0f62d1b55b419916af66d52811ec7c83"
    },
    {
      "name": "RTR Business Transformation Senior Analyst",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/rtr-business-transformation-senior-analyst_3354838.html#0f62d1b55b419916af66d52811ec7c83"
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
      "company": "",
      "urls": "Comarch"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d23cc3f39a81bc9a&fccid=68b975ecbbd7a58d&vjs=3",
      "company": "xxx",
      "urls": "392"
    }
  ],
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
      "name": "Koordynator Projektu",
      "company": "Alten",
      "urls": "https://pl.indeed.com//rc/clk?jk=b22ca8167afccd81&fccid=f452ff89851e4578&vjs=3"
    },
    {
      "name": "Kierownik projektu/montażu/budowy",
      "company": "GRUPA WOLFF",
      "urls": "https://pl.indeed.com//rc/clk?jk=0bc000c39cdbf8e9&fccid=3d99fb61e9e62f24&vjs=3"
    },
    {
      "name": "Kierownik Budowy",
      "company": "",
      "urls": "ABB"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d897c188d7601168&fccid=38b4474838e7b7a1&vjs=3",
      "company": "Kierownik robót elektrycznych (infrastruktura miejska)",
      "urls": "GK ZUE"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=513a71b7c97067b6&fccid=092d1ee1c3a73e20&vjs=3",
      "company": "Projektant procesów technologicznych",
      "urls": "Devire"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=f62d862eae7aa79e&fccid=dac7798bc9cb142c&vjs=3",
      "company": "xxx",
      "urls": "396"
    },
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
      "name": "Specjalista ds. układów kogeneracyjnych",
      "company": "CONTROL PROCESS S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=a5f702f39c8819b4&fccid=1cd754675a5b8353&vjs=3"
    },
    {
      "name": "GEODETA/Specjalista ds. detekcji infrastruktury podziemnej",
      "company": "GISonLine",
      "urls": "https://pl.indeed.com//rc/clk?jk=0752b9dea00bed12&fccid=f3a59a13accc2eb6&vjs=3"
    },
    {
      "name": "Specjalista ds. modernizacji ewidencji gruntów i budynków",
      "company": "",
      "urls": "MGGP S.A."
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=97072176d204c3c0&fccid=2d0f4f48587e250d&vjs=3",
      "company": "GEODETA/Specjalista ds. baz danych GESUT i BDOT",
      "urls": "GISonLine"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=d6ce492234ce6414&fccid=f3a59a13accc2eb6&vjs=3",
      "company": "xxx",
      "urls": "401"
    }
  ],
  "402": [],
  "403": [],
  "404": [],
  "405": [
    {
      "name": "FPGA Algorithm Modeling Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-algorithm-modeling-engineer-working-student-krakow,oferta,1000196954"
    },
    {
      "name": "Modszy Programista (k/m)",
      "company": "GS Software Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-programista-k-m-krakow,oferta,1000248320"
    },
    {
      "name": "FPGA Test Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-test-engineer-working-student-krakow,oferta,1000197217"
    },
    {
      "name": "Junior Java Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-java-developer-krakow,oferta,1000212033"
    },
    {
      "name": "Patny sta w Zespole R&D, Industrial Design, Prawnym, Finansowym, Ksigowym, IT, Logistyki i Zakupw",
      "company": "CSG S.A.",
      "urls": "https://www.pracuj.pl/praca/platny-staz-w-zespole-r-d-industrial-design-prawnym-finansowym-ksiegowym-it-logi-krakow,oferta,1000228135"
    },
    {
      "name": "Junior C# Developer",
      "company": "YOSI.PL WADYSAW KU, WOJCIECH MAZGAJ s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-c%23-developer-krakow,oferta,7507433"
    },
    {
      "name": "FPGA Design Verification Engineer  Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-design-verification-engineer-working-student-krakow,oferta,1000197226"
    },
    {
      "name": "Junior PHP Developer - Full Stack",
      "company": "FLUM SZYMON FABIASKI, MICHA JANECZEK s.c.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-full-stack-krakow,oferta,7498117"
    },
    {
      "name": "Working Student - Software Engineer C/C++",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-engineer-c-c++-krakow,oferta,1000196951"
    },
    {
      "name": "Working Student - Software Test Engineer",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/working-student-software-test-engineer-krakow,oferta,1000197209"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
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
      "name": "FPGA Syntheses Engineer Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/fpga-syntheses-engineer-working-student-krakow,oferta,1000204681"
    },
    {
      "name": "RF Test Engineer - Working Student",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/rf-test-engineer-working-student-krakow,oferta,1000197222"
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
      "name": "Praktyki letnie w obszarze Machine Learning i Artificial Intelligence",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-machine-learning-i-artificial-intelligence-krakow,oferta,7473411"
    },
    {
      "name": "Praktyki letnie w obszarze programowania i testowania",
      "company": "Ericsson",
      "urls": "https://www.pracuj.pl/praca/praktyki-letnie-w-obszarze-programowania-i-testowania-krakow,oferta,7473426"
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
      "name": "Junior .NET Developer (fullstack) [online recruitment]",
      "company": "Grafton Recruitment Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-net-developer-fullstack-online-recruitment-krakow,oferta,7464661"
    }
  ],
  "406": [],
  "407": [],
  "408": [],
  "409": [
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
      "name": "Konserwator urządzeń technicznych",
      "company": "SP ZOZ Szpital Uniwersytecki w Krakowie",
      "urls": "https://www.praca.pl/konserwator-urzadzen-technicznych_3304518.html#43cf8f196d336d38543b2eea0fb50c1d"
    }
  ],
  "410": [
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
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3342178.html#6b69987c8a278d258930347b01de8034"
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
      "name": "Analityk Biznesowy / Projektant",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/analityk-biznesowy-projektant_3361498.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "IT Business Analyst",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/it-business-analyst_3362050.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "RTR Business Transformation Senior Analyst",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/rtr-business-transformation-senior-analyst_3354838.html#6b69987c8a278d258930347b01de8034"
    },
    {
      "name": "System Administrator / Data Analyst [Rekrutacja prowadzona online]",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.praca.pl/system-administrator-data-analyst-rekrutacja-prowadzona-online_3353278.html#6b69987c8a278d258930347b01de8034"
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
      "name": "BI Analyst / Expert [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/bi-analyst-expert-rekrutacja-online_3355558.html#e45a85cfe0ab0419c9c27b162f63d4ae"
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
      "name": "Nauczyciel grafiki komputerowej",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-grafiki-komputerowej_3355084.html#246b35f55cc1bcd1bfe973a8708cd36b"
    },
    {
      "name": "Konsultant Sprzedaży - Doradca Edukacyjny",
      "company": "Wydawnictwa Szkolne i Pedagogiczne S.A.",
      "urls": "https://www.praca.pl/konsultant-sprzedazy-doradca-edukacyjny_3394110.html#246b35f55cc1bcd1bfe973a8708cd36b"
    },
    {
      "name": "Web Design Developer",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/web-design-developer_3378608.html#246b35f55cc1bcd1bfe973a8708cd36b"
    },
    {
      "name": "Grafik komputerowy dtp",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/grafik-komputerowy-dtp_3397354.html#246b35f55cc1bcd1bfe973a8708cd36b"
    },
    {
      "name": "Doradca klienta o specjalności projektant grafik",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/doradca-klienta-o-specjalnosci-projektant-grafik_3390434.html#246b35f55cc1bcd1bfe973a8708cd36b"
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
      "urls": "https://pl.indeed.com//company/Smart--HR/jobs/Doradca-Techniczno-Handlowy-cf5b280021d2902b?fccid=2ad7bb13c81995c1&vjs=3"
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
      "name": "Nauczyciel na kierunku Trener personalny",
      "company": "Centrum Nauki i Biznesu Żak Sp. z o.o.",
      "urls": "https://www.praca.pl/nauczyciel-na-kierunku-trener-personalny_3396408.html#b85418b7ea7ccf98185b756124bcf26a"
    }
  ],
  "431": [
    {
      "name": "Junior Medical Data Analyst",
      "company": "Cardiomatics sp.z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-medical-data-analyst-krakow,oferta,1000238986"
    },
    {
      "name": "Junior Investment Solutions Group Portfolio Management Analyst with State Street Global Advisors, Officer",
      "company": "State Street Bank Polska",
      "urls": "https://www.pracuj.pl/praca/junior-investment-solutions-group-portfolio-management-analyst-with-state-street-krakow,oferta,1000219275"
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
      "name": "Tax Analyst - Intern",
      "company": "AKAMAI TECHNOLOGIES POLAND SPӣKA Z OGRANICZON ODPOWIEDZIALNOCI",
      "urls": "https://www.pracuj.pl/praca/tax-analyst-intern-krakow,oferta,1000201333"
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
      "name": "Credit and Collections Junior Specialist with Dutch",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/credit-and-collections-junior-specialist-with-dutch-krakow,oferta,7469720"
    },
    {
      "name": "Credit & Collections Junior Specialist with Slovenian",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/credit-collections-junior-specialist-with-slovenian-krakow,oferta,1000211903"
    },
    {
      "name": "Junior AML Compliance Analyst",
      "company": "BROWN BROTHERS HARRIMAN (POLAND) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-aml-compliance-analyst-krakow,oferta,7461666"
    },
    {
      "name": "Financial Junior Analyst",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/financial-junior-analyst-krakow,oferta,7462319"
    },
    {
      "name": "Junior Analyst with French",
      "company": "Antal International Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-analyst-with-french-krakow,oferta,7462901"
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
      "name": "Senior Business Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-business-analyst_3393580.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Data Analyst with Python",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/data-analyst-with-python_3372270.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Senior IT Support Analyst",
      "company": "Luxoft",
      "urls": "https://www.praca.pl/senior-it-support-analyst_3382864.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "IT Specialist (Senior Analyst) (L2 Support) with English",
      "company": "HCL Poland",
      "urls": "https://www.praca.pl/it-specialist-senior-analyst-l2-support-with-english_3389752.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Junior AR Analyst with Italian",
      "company": "IBM BTO Business Consulting Services Sp. z o.o.",
      "urls": "https://www.praca.pl/junior-ar-analyst-with-italian_3398878.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Data Center Engineer",
      "company": "Oxford Global Resources",
      "urls": "https://www.praca.pl/data-center-engineer_3347770.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Analityk biznesowy / Business Analyst ESG",
      "company": "Sustainalytics",
      "urls": "https://www.praca.pl/analityk-biznesowy-business-analyst-esg_3322480.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Młodszy Specjalista Analityk w Laboratorium Biologicznym Działu Kontroli Jakości",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/mlodszy-specjalista-analityk-w-laboratorium-biologicznym-dzialu-kontroli-jakosci_3396516.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Senior Process Engineering Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-process-engineering-analyst_3396702.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Business Analyst [rekrutacja online]",
      "company": "Grafton Recruitment Sp. z o.o.",
      "urls": "https://www.praca.pl/business-analyst-rekrutacja-online_3343528.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3342178.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "BI Analyst / Expert [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/bi-analyst-expert-rekrutacja-online_3355558.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Workday Integration Developer (System Support Area) [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/workday-integration-developer-system-support-area-rekrutacja-online_3355572.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Benefit Policy Analyst with Spanish [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/benefit-policy-analyst-with-spanish-rekrutacja-online_3379030.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "System Architect / Manager (System Support Area) [recruitment online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/system-architect-manager-system-support-area-recruitment-online_3355564.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Programista / Integrator Sytemów Biznesowych [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/programista-integrator-sytemow-biznesowych-rekrutacja-online_3355568.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Workstream Lead",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/workstream-lead_3391708.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    },
    {
      "name": "Senior Business Analyst",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/senior-business-analyst_3365278.html#8c9b3a464c9e7dd63e0594687b65fd0f"
    }
  ],
  "432": [
    {
      "name": "Modszy Specjalista ds. Wsparcia i zamwie",
      "company": "Sunday Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-wsparcia-i-zamowien-krakow,oferta,1000224892"
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
      "company": "",
      "urls": "BNP Paribas Bank Polska"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=da5e07bd7b02f36f&fccid=1392500f835bba92&vjs=3",
      "company": "Młodszy Analityk Danych",
      "urls": "Grupa Aterima"
    },
    {
      "name": "https://pl.indeed.com//rc/clk?jk=57289c4c22c91cbe&fccid=8b76fd1a75b90709&vjs=3",
      "company": "xxx",
      "urls": "440"
    }
  ],
  "441": [
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
      "name": "Modszy specjalista ds. przygotowania produkcji",
      "company": "Pilkington IGP Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-przygotowania-produkcji-krakow,oferta,1000224390"
    },
    {
      "name": "Junior PHP Developer",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-php-developer-krakow,oferta,1000234860"
    },
    {
      "name": "Full Time Administrative Assistant - Remote",
      "company": "WEB BESPOKERS FILIP KOTLARZ",
      "urls": "https://www.pracuj.pl/praca/full-time-administrative-assistant-remote-krakow-okolice,oferta,1000204756"
    },
    {
      "name": "Kierownik Robót Drogowych",
      "company": "GruntBudowa",
      "urls": "https://www.praca.pl/kierownik-robot-drogowych_3396248.html#d05c698fb6d4bfb447052f9fc4f80d75"
    },
    {
      "name": "FPGA DSP Designer [rekrutacja online]",
      "company": "Nokia Solutions and Networks Sp. z o.o.",
      "urls": "https://www.praca.pl/fpga-dsp-designer-rekrutacja-online_3393862.html#d05c698fb6d4bfb447052f9fc4f80d75"
    }
  ],
  "445": [
    {
      "name": "Projektant Java [rekrutacja online]",
      "company": "Asseco Poland S.A.",
      "urls": "https://www.praca.pl/projektant-java-rekrutacja-online_3330020.html#23a9ad297403a7ca2eee3e2a374e4f94"
    },
    {
      "name": "Doradca klienta o specjalności projektant grafik",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/doradca-klienta-o-specjalnosci-projektant-grafik_3390434.html#23a9ad297403a7ca2eee3e2a374e4f94"
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
      "name": "Specjalista ds. SEM",
      "company": "Marketing Investment Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=a06ca781ae7fe113&fccid=0ee62b7fa1ca038c&vjs=3"
    },
    {
      "name": "Specjalista ds. obsługi klienta / tłumacz",
      "company": "inTurs.net",
      "urls": "https://pl.indeed.com//rc/clk?jk=95b1c40a0545553e&fccid=8d74c43df3dcb871&vjs=3"
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
      "name": "Manager ds",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com//rc/clk?jk=636962593cc605b5&fccid=dd616958bd9ddc12&vjs=3"
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
      "name": "Dziennikarz / specjalizacja język angielski",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com//rc/clk?jk=9e98f59d7644521c&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Staż lub praktyka zdalna, 14 kierunków i więcej do wyboru",
      "company": "Krajowy Instytut Rozwoju Gospodarki",
      "urls": "https://pl.indeed.com//rc/clk?jk=1c5dd6a055dcfbbb&fccid=5429572581cdb0aa&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja A. I.",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com//rc/clk?jk=b42bf38433fda4d3&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja aranżacja wnętrz",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com//rc/clk?jk=c9c057e9413611c2&fccid=ab8a0dae1fe54ce8&vjs=3"
    },
    {
      "name": "Dziennikarz / specjalizacja medycyna",
      "company": "ContentHouse",
      "urls": "https://pl.indeed.com//rc/clk?jk=212407a166cb424b&fccid=ab8a0dae1fe54ce8&vjs=3"
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
      "name": "Product Manager HVAC",
      "company": "FERRO Spółka Akcyjna",
      "urls": "https://www.praca.pl/product-manager-hvac_3383660.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Telemarketer",
      "company": "Private Corporate Consulting Sp. z o.o.",
      "urls": "https://www.praca.pl/telemarketer_3372202.html#7202358ecfe053a90fe6f1f9060b86e5"
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
    },
    {
      "name": "Inside Sales Representative with German and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-german-and-english-online-recruitment_3393652.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Inside Sales Representative with Hungarian and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-hungarian-and-english-online-recruitment_3393660.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Inside Sales Representative with Polish and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-polish-and-english-online-recruitment_3393666.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Inside Sales Representative with Romanian and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-romanian-and-english-online-recruitment_3393674.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Inside Sales Representative with Russian and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-russian-and-english-online-recruitment_3393676.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Inside Sales Representative with Turkish and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-turkish-and-english-online-recruitment_3393678.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Inside Sales Representative with Ukrainian and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-ukrainian-and-english-online-recruitment_3393686.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Rekruter terenowy [rekrutacja online]",
      "company": "INSPIRO TEAM SP. Z O.O",
      "urls": "https://www.praca.pl/rekruter-terenowy-rekrutacja-online_3353550.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Analyst - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-french-speaker-online-recruitment_3355370.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Analyst - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-german-speaker-online-recruitment_3355380.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Analyst - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-italian-speaker-online-recruitment_3355382.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Analyst - Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-russian-speaker-online-recruitment_3355388.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Analyst - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-spanish-speaker-online-recruitment_3355390.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - Czech Speaker  [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-czech-speaker-online-recruitment_3355398.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - Dutch Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-dutch-speaker-online-recruitment_3355400.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-french-speaker-online-recruitment_3355402.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-german-speaker-online-recruitment_3355404.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-online-recruitment_3355406.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - Russian or Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-russian-or-ukrainian-speaker-online-recruitment_3355408.html#7202358ecfe053a90fe6f1f9060b86e5"
    },
    {
      "name": "Content Reviewer - Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-slovak-speaker-online-recruitment_3355410.html#7202358ecfe053a90fe6f1f9060b86e5"
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
      "name": "Internship in Talent Acquisition",
      "company": "BROWN BROTHERS HARRIMAN (POLAND) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/internship-in-talent-acquisition-krakow,oferta,1000233962"
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
      "name": "Junior HR Business Partner",
      "company": "ZAMEK KRLEWSKI NA WAWELU - PASTWOWE ZBIORY SZTUKI",
      "urls": "https://www.pracuj.pl/praca/junior-hr-business-partner-krakow,oferta,7471096"
    },
    {
      "name": "Modszy specjalista ds. obsugi klienta z j. holenderskim",
      "company": "PRIORITY SALE - MARCIN SOJKA",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-z-j-holenderskim-krakow,oferta,1000191851"
    },
    {
      "name": "Junior HRConnect Consultant - Customer Experience",
      "company": "AbbVie Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-hrconnect-consultant-customer-experience-krakow,oferta,7465220"
    },
    {
      "name": "Modszy Specialista w dziale HR z jzykiem niemieckim (m/k)",
      "company": "CPL Jobs Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specialista-w-dziale-hr-z-jezykiem-niemieckim-m-k-krakow,oferta,7464992"
    },
    {
      "name": "Junior Accountant with German (online recruitment)",
      "company": "Grafton Recruitment Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-accountant-with-german-online-recruitment-krakow,oferta,7400451"
    },
    {
      "name": "Junior Accountant with French (online recruitment)",
      "company": "Grafton Recruitment Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-accountant-with-french-online-recruitment-krakow,oferta,7462940"
    },
    {
      "name": "Specjalista ds. Kadr i Płac",
      "company": "Services Center",
      "urls": "https://www.praca.pl/specjalista-ds-kadr-i-plac_3345394.html#ef711b463501f14e78e697a3ad0f8263"
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
      "name": "Praktykant / Praktykantka w Dziale Kadr i Płac [rekrutacja prowadzona on-line]",
      "company": "Abra S.A.",
      "urls": "https://www.praca.pl/praktykant-praktykantka-w-dziale-kadr-i-plac-rekrutacja-prowadzona-on-line_3361728.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specjalista ds. Personalnych",
      "company": "IBSS BIOMED S.A.",
      "urls": "https://www.praca.pl/specjalista-ds-personalnych_3396854.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "(Senior) Payroll Specialist",
      "company": "ManpowerGroup",
      "urls": "https://www.praca.pl/senior-payroll-specialist_3370552.html#ef711b463501f14e78e697a3ad0f8263"
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
      "name": "Payroll Senior Specialist/Team Leader/Process Owner - nowy projekt (m/k)",
      "company": "CPL JOBS Sp. z o.o.",
      "urls": "https://www.praca.pl/payroll-senior-specialist-team-leader-process-owner-nowy-projekt-m-k_3392056.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Specjalista ds. kadr i płac ",
      "company": "Gegenbauer Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/specjalista-ds-kadr-i-plac_3390004.html#ef711b463501f14e78e697a3ad0f8263"
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
      "name": "Recruitment Junior Team Leader",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/recruitment-junior-team-leader_3354866.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Payroll Senior Specialist",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/payroll-senior-specialist_3354890.html#ef711b463501f14e78e697a3ad0f8263"
    },
    {
      "name": "Starszy koordynator ds. hr / hr operations senior coordinator",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/starszy-koordynator-ds-hr-hr-operations-senior-coordinator_3397378.html#ef711b463501f14e78e697a3ad0f8263"
    }
  ],
  "459": [
    {
      "name": "Asystent ds. obsugi klienta biznesowego",
      "company": "EWA BIE EWA BIEN",
      "urls": "https://www.pracuj.pl/praca/asystent-ds-obslugi-klienta-biznesowego-krakow-okolice,oferta,1000251625"
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
      "name": "Full Time Administrative Assistant - Remote",
      "company": "WEB BESPOKERS FILIP KOTLARZ",
      "urls": "https://www.pracuj.pl/praca/full-time-administrative-assistant-remote-krakow-okolice,oferta,1000204756"
    },
    {
      "name": "Modszy specjalista ds. e-commerce",
      "company": "Berner Polska Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-e-commerce-krakow,oferta,7468266"
    },
    {
      "name": "Asystentka/Asystent Zarzdu",
      "company": "Columbus Energy S.A.",
      "urls": "https://www.pracuj.pl/praca/asystentka-asystent-zarzadu-krakow,oferta,7462222"
    }
  ],
  "460": [
    {
      "name": "Modszy Specjalista ds. Obsugi Klienta z jzykiem rumuskim",
      "company": "Marketing Investment Group S.A.",
      "urls": "https://www.pracuj.pl/praca/mlodszy-specjalista-ds-obslugi-klienta-z-jezykiem-rumunskim-krakow,oferta,1000218174"
    },
    {
      "name": "Junior Customer Success Specialist",
      "company": "Benhauer Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-customer-success-specialist-krakow,oferta,1000236667"
    },
    {
      "name": "Junior Marketing Automation Specialist",
      "company": "Dreamcommerce S.A.",
      "urls": "https://www.pracuj.pl/praca/junior-marketing-automation-specialist-krakow,oferta,1000226401"
    },
    {
      "name": "Ambasador Poziom Wyej",
      "company": "EY Polska",
      "urls": "https://www.pracuj.pl/praca/ambasador-poziom-wyzej-krakow,oferta,1000211984"
    },
    {
      "name": "Pardavimų ir klientų aptarnavimo specialistas",
      "company": "BPO International",
      "urls": "https://www.praca.pl/pardavimu-ir-klientu-aptarnavimo-specialistas_3376178.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Chief Operating Officer",
      "company": "OneMoreGame.STUDIO Sp. z o.o.",
      "urls": "https://www.praca.pl/chief-operating-officer_3386216.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Product Manager HVAC",
      "company": "FERRO Spółka Akcyjna",
      "urls": "https://www.praca.pl/product-manager-hvac_3383660.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Telemarketer",
      "company": "Private Corporate Consulting Sp. z o.o.",
      "urls": "https://www.praca.pl/telemarketer_3372202.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Regionalny Menadżer ds. Sprzedaży",
      "company": "AxPro Concept Sp. zo.o",
      "urls": "https://www.praca.pl/regionalny-menadzer-ds-sprzedazy_3348232.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Specjalista ds. obsługi klienta i sprzedaży - język holenderski",
      "company": "BPO International",
      "urls": "https://www.praca.pl/specjalista-ds-obslugi-klienta-i-sprzedazy-jezyk-holenderski_3396574.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Inside Sales Representative with Czech / Slovak and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-czech-slovak-and-english-online-recruitment_3393650.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Inside Sales Representative with German and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-german-and-english-online-recruitment_3393652.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Inside Sales Representative with Hungarian and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-hungarian-and-english-online-recruitment_3393660.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Inside Sales Representative with Polish and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-polish-and-english-online-recruitment_3393666.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Inside Sales Representative with Romanian and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-romanian-and-english-online-recruitment_3393674.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Inside Sales Representative with Russian and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-russian-and-english-online-recruitment_3393676.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Inside Sales Representative with Arabic and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-arabic-and-english-online-recruitment_3393648.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Inside Sales Representative with Turkish and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-turkish-and-english-online-recruitment_3393678.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Inside Sales Representative with Ukrainian and English [online recruitment]",
      "company": "TTEC",
      "urls": "https://www.praca.pl/inside-sales-representative-with-ukrainian-and-english-online-recruitment_3393686.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Rekruter terenowy [rekrutacja online]",
      "company": "INSPIRO TEAM SP. Z O.O",
      "urls": "https://www.praca.pl/rekruter-terenowy-rekrutacja-online_3353550.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Sales Consultant and Customer Service Specialist with Latvian language",
      "company": "BPO International",
      "urls": "https://www.praca.pl/sales-consultant-and-customer-service-specialist-with-latvian-language_3391402.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Specjalista ds. obsługi klienta i sprzedaży - jęz. Łotewski",
      "company": "BPO International",
      "urls": "https://www.praca.pl/specjalista-ds-obslugi-klienta-i-sprzedazy-jez-lotewski_3391450.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Analyst - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-french-speaker-online-recruitment_3355370.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Analyst - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-german-speaker-online-recruitment_3355380.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Analyst - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-italian-speaker-online-recruitment_3355382.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Analyst - Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-russian-speaker-online-recruitment_3355388.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Analyst - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-spanish-speaker-online-recruitment_3355390.html#c07a636253615519fbd73fb82da5263d"
    },
    {
      "name": "Content Reviewer - Czech Speaker  [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-czech-speaker-online-recruitment_3355398.html#c07a636253615519fbd73fb82da5263d"
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
    },
    {
      "name": "Doradca Ubezpieczeniowy [rekrutacja online]",
      "company": "PZU Życie S.A.",
      "urls": "https://www.praca.pl/doradca-ubezpieczeniowy-rekrutacja-online_3313866.html#0359d24e18f4ecf5d79ebd232be56407"
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
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3355424.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-bulgarian-speaker-online-recruitment_3355416.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist – Czech or Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-czech-or-slovak-speaker-online-recruitment_3355418.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Lithuanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-lithuanian-speaker-online-recruitment_3355422.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist – Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-speaker-online-recruitment_3355430.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-spanish-speaker-online-recruitment_3355434.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Russian/Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-ukrainian-speaker-online-recruitment_3355440.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3357212.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Latvian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-latvian-speaker-online-recruitment_3357222.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "CSR Online Advertising Specialist - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-romanian-speaker-online-recruitment_3357226.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3376758.html#7641eb0788d0c3bc1469f61984eb5bdc"
    },
    {
      "name": "Specjalista ds. Mediów Społecznościowych [rekrutacja online]",
      "company": "PORTFEL INWESTYCYJNY SP. Z O.O",
      "urls": "https://www.praca.pl/specjalista-ds-mediow-spolecznosciowych-rekrutacja-online_3314128.html#7641eb0788d0c3bc1469f61984eb5bdc"
    }
  ],
  "467": [
    {
      "name": "Risk Manager",
      "company": "Brown Brothers Harriman",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqcnL7Z32D0mKD8hW9DUcGT8WJoTOsPdEBkmF4hDmllWxS0mNMYMMqzaJR70liAw7mj5_uYczh1Z92FdQFj766M2Y700dFDrfAl84FeDMJ34i41-2_74n3MXRp-RYuKEEGpoNCezaicAKzvtos6FXKjIWGZTeKw4En8ZOoL6F6Z3fZFdIfOL-kMsuVG_tWJbIssxrv-y17_ozwdak1JQGwMT0u6QHzut8f9JDvWidMLT4cKVUfPWcyShPG3jdmwXY4hEZoXizk_K78pmDVO1f_ebsJXcfeSsnbI9WwEJDA0td5NKLiaVtGm3Clp8m_2Q49gFgErv2fScZ0qriw1R4RMmKbXDckhXDEzGEYtknOc6LSs9wg_1sZ2m0I-i-9u06Ad5l62Hmw0tlja7eHtzxcyDbOvtf4bUWYVO3VzInqvJfW4cNywJ5ETxc4naH6QquwsMI_TLh4STark7Y1ZeZw4vxPjxnjh2_Cl1N8DrMfrLbZj6Tv9-WiCS42vA_pt5fu_xojNbvyQOfDv6BIa4Vet7Gc5T2hvd2-LUBvsWSX1MIlQmk9dHGNzbOt77Bd8swzz8LaZKSa8tmcb467PoJCwYXr0oBVzcKIyv1piFoAH5I-t9Kxt6kLgSUMvFrdcsOUn8nbGe7mXBrqj0a5KQM7vvLiChHE7J3-pQLKtPw8OzCwznN5lJOrQuQGTPMadvOw==&p=0&fvj=0&vjs=3"
    },
    {
      "name": "OTC Operations Manager with English",
      "company": "Accenture Operations",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNXKcDS5cKXxOvF3do241ohkpYK4FpUOSVbwiFtbU4hhKW5YtfioQNaDhmw1afF05PY_1KLZIxHZBDRhFPekN4Cwom67K3B6ScO-RTKyAYqElouc_2uVlwx32VA2nrxaFLg73f4hYYaoAQdtapE2ECSLxARoTamVthB5X2oQvC5p0Sy77kuTLEXp5K-AOr72BO2ejjv6JSkB38kYGSfFIxpJ0KeAFCHmG4rCLXKHYppBMergfWdT2oYZjdA2iupCX4WAhWRyI1-jD28E3Xjvx985XcPyBAlF-EcqP4Vyd8PA7wzZqOn8tFe12-fnVKQxMjcOInezv2CbUR39NJnrvFp6-DX550WSK4fY7DX9KIuwO-m7Vhm6mlAtvFTcTjDB-IR0BSo9ofdnnQRx640drkXB2m5gT-3gECgqW1XRu3np51jMC0zElG38tHdnauBt7xPkyD-2VTcgzy6ILMqcDvjRMzZ2tciz3jb3BHrPpCUdkmbJs3Y3IvjHOxci1VY7-gPMadsfqgidFWAcGw8tsqh_eoS9VocY738HQNoSN03g1dq3O7CdKl9TFD4TCY4O0HdYmsYXWNp5CU22E7-9AoXrGUTprZtt_-A7fyJtewCRGYQG_zU1pFYKxm8nTB76uT04EMiRt-Zzyg==&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Collections Regional Manager (shift 15.00 - 23.30)",
      "company": "Accenture Operations",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNWvzOIbTqu5DOdPssPVp6ofBBoZc0p8PDNmjjso5-YCtb8Hqi6EBLVd_SYKmnF4ECfj8wFoU8MmiDvxesY2b33lDvri2rgL2oERA3kIFUPsQUrl0Tc33zS63enaOB_je-cmUFUtAPuLhV9DqLYimWDbgKglMkhgJ4Ld9k6jtgJWV9txmSn6v1Nds_wjOZrIU59n3ue2IvyhNyegLg-5sCZAGsX28bKavXVzscRhcegpSYCwKIMdGtwf1rkmDIWbZ51XLL6i5UQYt4FMANIOlCLKk_LG82Kw4fz2BaI81rBHfZQI-mjL166zONtjPLYv6z3QJGgJpCOBq-T4zLDnMtmkQdhibjVdWUl6B1quv0k8eMfaDNa6lTmRWl3EglwitV7bkTQdOe4X-dXDmA0tVirQvyqx6WUwAFgl1m4fZem0-6JZEcKVfbC0-BSWyC2REa4ZWYVo79CDhqh17P2BfXVGP0F2iYHpir4angpOrZsXiiCRWoIPtq8EJ30oaCHQ1OcpyGzGNLVvdFDCBngoK1oWzeUnKCXoHUf7F8tWLrrFGI_FgqFAeP54x_WesVdSf83rqYgPzbgSHh9fjGyhWnSqtA10a1w_Ogwha9cPl5FSWycyRBbAC--oYhbxQPThJbzOOy8wyQ0dwbJTg_v5GlSQ&p=2&fvj=0&vjs=3"
    },
    {
      "name": "HR Manager (m/f)",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIfAI6fxB1XP-YvUy0b7utziOC8GwtUolm25Z1pr20B8BC5dRZjx7C8CAIzG8LoE243lvpcXJwuk1RFj_72LHK2yTe6gFvaLbOVuRJbUgazwNB17uDgSxMRUk_OX1d_Jidp-_mJwhn2cNRioznav4VW4NzF_y2f2GU6Qvri60xKMFRV-JiI6C1DrbVBhBiPQOBXr3REMdRgHO68JLipYEoXZy76SkWbDO_Re87yLusuvS89z4iwuZqov0Ozc67fSiet76YGESLbSWFeC9_K96rqS_FWtmp99FYT9GcnCjbqg0PdST-PSyIghp7_HLyent8OM87XfYj1Ucx3tV2JUsCHBdcasJ-14fjgp7hb2bUnJLvG6-KWyuacl9QvpTmR8erfImB85RvWLQcDws5vvmp56ZBYxYkuMkgTBvR7RGnIkk1sxY1oAthtuxeBD8sStsojgVx8SmgXZ670aVQ4dk_Jinm_PuUOuHG0ka-qQT39iMFsmoQ9QmBWIxn8QjVUcfngmlJIUBBQbST086cKaBaGacaUokbqfzEcMNznG4vVOevvJCA1n5G1ok4_pliAFhq9lRlqtJObSDURG4H4c6EObLZ8nsbM4fQ_hu1sdb3qZDi2csM11Pnue&p=3&fvj=0&vjs=3"
    },
    {
      "name": "Sales Support Team Manager",
      "company": "PepsiCo",
      "urls": "https://pl.indeed.com//rc/clk?jk=1bb4f1edd9688a74&fccid=2973259ddc967948&vjs=3"
    },
    {
      "name": "CSR and Communications Internship",
      "company": "UBS",
      "urls": "https://pl.indeed.com//rc/clk?jk=c63c24a76f90ee5c&fccid=1c76c3a36f6c7557&vjs=3"
    },
    {
      "name": "TEAM",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com//rc/clk?jk=c9c4c99adb4009f6&fccid=c1b8ef077cc6a8a5&vjs=3"
    },
    {
      "name": "Alliance Manager",
      "company": "Ardigen",
      "urls": "https://pl.indeed.com//rc/clk?jk=62be891a69ab27ba&fccid=0caf54c974d1fc7f&vjs=3"
    },
    {
      "name": "ICFR (SOX) Manager",
      "company": "Zurich Insurance Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=55dd493e244fc77d&fccid=40f6e1ba1aac8472&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com//rc/clk?jk=f906cf3cfe85651a&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Duty Operations Manager - Krakow",
      "company": "Discovery Communications",
      "urls": "https://pl.indeed.com//rc/clk?jk=a98e8ee03e26eac8&fccid=f17180ffbe436a3c&vjs=3"
    },
    {
      "name": "CTO Agile Team Manager",
      "company": "Motorola Solutions",
      "urls": "https://pl.indeed.com//rc/clk?jk=e3d0616dede13931&fccid=22ec6ef3cc441ac2&vjs=3"
    },
    {
      "name": "Product Line Manager, Readers NPI (HID5704)",
      "company": "HID Global",
      "urls": "https://pl.indeed.com//rc/clk?jk=54711ff9322e0735&fccid=b51a93b6defb2a2e&vjs=3"
    },
    {
      "name": "New Business Manager",
      "company": "Funktional",
      "urls": "https://pl.indeed.com//rc/clk?jk=8f1cdf8b8304a759&fccid=014e16512e5e89bd&vjs=3"
    },
    {
      "name": "Project Manager (Oracle Implementation), Kraków",
      "company": "HCL Poland",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNVZRp1cHiLMIyfGfv4W-qwsFNne80MuK0PtSXbveIGk8VUruT5JcsLI--AJop4jcTqB9I77vvKHy9MJzxvF65D3c6isI3BIgVfC4Galde5CXvKdmJEff-zdHAoaJSVFn1X5UBgQ3txaDdra2khzj_66AAGdXrL2bLiYyK6u7-OXCtRpQkVsjW3hx7DXR5EZ7dfmSbYp5PLAtoqKRNg1mbIddyXoUrj4ZvEZQJ1NvSlAgW2QfdqWzBMIEtEdbi118_FwbOIusybZEL5sVRvee6cihXAPBHRQr-ycOOR3XBUWU7fEdOofCU_0iOGqytkZcwy86NvuEBwcwEahxVJ0wNkm1vU6wBF0PXE2yN_lemCleRUkQUMCckEK_-TxJMWlO1XLjlXacwM-qrlLYwcsuaXszujR2Nb0NJT0ln8SkKs8vg5EZJIs4jONXvz9rHaoc20gDquX8Bej60H8PipyjyhJg-MqwXc99QLY5fsVyQFiWZ_YP_Rk9u21gBM-ZN_15qTOB24K8A1Kc7YbmZ2JS6Nyds-i8mDxPXIWEK4JdJQA9rXTSfVATL43thhXqnVf0NgpmHADPPI8ttFbKKRIQJ0uMz1fxzu5e7sTXHsVf3xbLQd0xjTT8udnXq0n9wfPKhyxmfQddZYJaA==&p=14&fvj=0&vjs=3"
    },
    {
      "name": "Internal Control Expert",
      "company": "ABB",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqDUsVUkfH4EkrN84Gz9KZxfTNKGDbceuFgVKP__EcoUq1VCYNkQ2Mt2fu7q3ynIywXEnKyFHdVb47sP44_nhLig9wWvYGUl-9rd1Zf-LUTDjEaft7Ob3NhDL0RNVt191Ts7sTvXCffMGH1AcmX8Xnk88pKMkcn0fxBCRFsQuKm-6qxa0Hfpylvihz0AN9npbBmwKi8Ep4BzdC9K7UsI3AyUz4s1HyrC5aeQ0PK9WuCDxM3E2wrnAZPhcSHqhFdo5vyJ9OPPp54v30sUS04dJYuAKvst8NYtK7LLTU62fX8XDzk2SYyxrwh_BJrs5hR1z7_O3X_v0PuLdr8HDyn3UTNhG6_fU5DcjfWj-V-xKNHTbPaOQlcOWHTEl9OZo27NXAs-Yv_zsmEqwSSVlnfbVREASVfSt2OrIMy268ftlYTbpOC9WV1dAHULwrhhqW9zq2EvF1lMWbSCuakyDPVckukSwKIZDduW6lsyF2rEyYHB9NMc9xvbOciGwMYbUW0dgIKwcbr4OWn_-Fkhw8gbf88wxq4K2fCypg3h0qoeTMtrq6C_hwFmclL3BxrRrLRjDdKzSRn2D0nMEX8O51U8v-R50WHLYpvPZa_t_JhBq8X-zb3Gs4znnqMA5H3XsuUlNfv998q3wLxSPD95ddi8_KrOTGwOPKryAg==&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Marketing Automation Specialist",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhrtRRmQ3h3W1lCx0Yy-pvYR-A1MCk8gST0MuH8VKnK208x3urzkuDK4Lx5qezC7tsPxvLD6HVthH2NE227vee5N1Kh4CwyJ4vtd9xp640vYUXhUmSzuGuBt9rgUFBXiQm3eu3_xedZZDpbtmeHKfBQb3FM8BRX8_Rr_7NSR-FCQDMVxn8lWPt8aAnClq-AdGKtXOcKV84nwjwPvSTU4ZIEfJXLHmac5cSDvMYZHwwmV1DJRuCY7VA_iATYvS3MOaKKpjFvb2ktdyi4cHJVkcD7oPtUT6_huYJc0xeGiqxSUcfPiFuKaiW5_RSe2eStyqlQJAO2bsFtezOwZtToO2VLLrqWnm9VWExDhZ4EH5wdfkygcJoCGTUfKsDy392sHKQmYrtsgtcy5gtsjycpE3mFz5aLEF_PWDqzrxMyBmeDMDvjuCXCe9AF5SGMUHrLOVVckrPmXSDnXfkzgVqibmI7t7WDP3ZfAAL1ehoFOMpNnqLr7Rm7moZ3_vtsMX1wOnFnWGfLUYhfxY_DpMEchexlGzmExWXOZrclaS8N7txtzeDQfy6rXP715FC393xu83v_QxeaAO0LkNg-3xA8__Y_Ijj2kQIwdnAXCBLcQ8b2qEYsGmft2k0RdO64M4KY83S-FhQ2wjGx2vZZkbqv2eQZrvXnnVLA-d7w==&p=2&fvj=0&vjs=3"
    },
    {
      "name": "Customer Experience Manager with Dutch",
      "company": "Shell Business Operations",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhrtRRmQ3h3W1lCx0Yy-pvYRdcHiuFYu5qH3TC1beWmwv5UJr7ArAih7Izu8bqWC_tpwxDps38QI2R-xszXK2hPrUQY0JvdCMCks-kw_NIEVFs2DC3LLOQgUq6k9ar5AD_gjNUeYBpofQml1-SSmkmgzsx__OTZSHlQHKpQ230P_KmCmk5154q7uMSHEzz1BRowBpilOyEldbBLXIhqjuZ2Ph8gSHXZkRFlqVcTMFq5AcXd1B77ZOo_rfoLiahi832tlLYdtjrhQwhmI9DsvZ-QlsM0nTc702hz3X7T3W8_DmPjxpFvtOZcbz1PPaAH2sYRfDGwSnObNTdFm8-nNF23FSd2h0cCm9Dx7sS3rU0pQbxslne5Lao6s2VW6reHRFzWy0kYGZUQKR6QsitZ3yMLFw8-ZzorhPb1MXppUAPQOg14VRAp-Uc5Y7jTVS5cK6r2QBAwac_y9mP-cSDbN1NRdFmP_PQhdVZpNHAoP8EJ-Dt2bfZnZ3rZPBM3eOGSHPdHol_AAq6F_1nxtwEoYh-YTNaZgc_UxSH7WyA9Lv9x-WW7RI1nmTb9nBUwjAjgl-SXh3ea_-52qL2UWQXGf41TnfDaQyQiSUp77MikETEP33wnuP1KgXCiWa7UsAa0IKeGEgEuYFu77In4RWTglvLmhWN-ZFlsH8M-30_QLc6EsQ&p=3&fvj=0&vjs=3"
    },
    {
      "name": "Demand Center Manager",
      "company": "Shell",
      "urls": "https://pl.indeed.com//rc/clk?jk=919eb17bd825b859&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Product Manager (Tutoring Team)",
      "company": "Brainly",
      "urls": "https://pl.indeed.com//rc/clk?jk=f91aaf79e429bfcd&fccid=0087ede1ae181969&vjs=3"
    },
    {
      "name": "Global Customer Service Manager",
      "company": "Accenture",
      "urls": "https://pl.indeed.com//rc/clk?jk=17fc9d817015d098&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Business Development Manager (Creative Labs)",
      "company": "Admind",
      "urls": "https://pl.indeed.com//rc/clk?jk=c6153234186361f7&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Global Process & Control Improvement Manager",
      "company": "HEINEKEN Kraków",
      "urls": "https://pl.indeed.com//rc/clk?jk=9bb48cdf54aaeebf&fccid=9d3fc2c7bbc80ecb&vjs=3"
    },
    {
      "name": "Client Success Manager",
      "company": "Sofyne",
      "urls": "https://pl.indeed.com//rc/clk?jk=b9999e64aef721d6&fccid=64e33cf5dc4a100d&vjs=3"
    },
    {
      "name": "IT Program Manager",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=ef3c8c56cc9c5b26&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Product Manager",
      "company": "Caspio",
      "urls": "https://pl.indeed.com//rc/clk?jk=f3f99abdc985be44&fccid=204aafbc9b36f228&vjs=3"
    },
    {
      "name": "Global Training and Metrics Manager",
      "company": "Splunk",
      "urls": "https://pl.indeed.com//rc/clk?jk=3be782a1f20f660d&fccid=aef928e89977f7f0&vjs=3"
    },
    {
      "name": "Senior Facilities Manager",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com//rc/clk?jk=1b9df29dcbe1cf7b&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "Category Buyer",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=ac1fb4cae9395e26&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Power Grids - Configuration Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=8f17c992abd511ba&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Product Manager",
      "company": "WorldRemit",
      "urls": "https://pl.indeed.com//rc/clk?jk=26be318be11499ce&fccid=507acd357fe68a6f&vjs=3"
    },
    {
      "name": "Business Development Manager (Global Role - remote or HID re...",
      "company": "HID Global",
      "urls": "https://pl.indeed.com//rc/clk?jk=8799fc40015e66f5&fccid=b51a93b6defb2a2e&vjs=3"
    },
    {
      "name": "Junior AR Analyst OTC Italian",
      "company": "IBM",
      "urls": "https://pl.indeed.com//rc/clk?jk=4286adc5a1bb1644&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Junior AR Analyst/ AR Analyst OTC Spanish",
      "company": "IBM",
      "urls": "https://pl.indeed.com//rc/clk?jk=c394da4bf1d0b604&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "Business Development Manager",
      "company": "Go Global Services",
      "urls": "https://pl.indeed.com//rc/clk?jk=63532278a698d471&fccid=07981464a31ce167&vjs=3"
    },
    {
      "name": "Customer Experience Manager with Dutch",
      "company": "Shell",
      "urls": "https://pl.indeed.com//rc/clk?jk=260feccc0aa5f271&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Collections Regional Manager (shift 15.00 - 23.30)",
      "company": "Accenture",
      "urls": "https://pl.indeed.com//rc/clk?jk=e391dd9cb8682912&fccid=a4e4e2eaf26690c9&vjs=3"
    },
    {
      "name": "Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=223e749b80e8beb0&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Power Grids - Hub Compensation&Benefits Manager Eastern Euro...",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=0519e95803901c7b&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Network Implementation Manager",
      "company": "Akamai",
      "urls": "https://pl.indeed.com//rc/clk?jk=5d08568ad2230f76&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Web Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com//rc/clk?jk=9bd2b12f90e69e28&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Customer Success Specialist Collaboration",
      "company": "Cisco Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=db55569bfff111b6&fccid=dfc44f3b8c44a6db&vjs=3"
    },
    {
      "name": "HR & PAYROLL MANAGER EASTERN EUROPE (f/m/d)",
      "company": "beeline Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=e2ea808b0aa8024f&fccid=3f24b309557a3d43&vjs=3"
    },
    {
      "name": "Process Manager PTP",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=227acb7253867431&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Project Manager",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=585f27dc3417fa82&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Performance Marketing Specialist",
      "company": "Funktional",
      "urls": "https://pl.indeed.com//rc/clk?jk=9465348003acef44&fccid=014e16512e5e89bd&vjs=3"
    },
    {
      "name": "Business Change Manager",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=3033122a08b22199&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Software Engineering Manager, PL",
      "company": "QVC",
      "urls": "https://pl.indeed.com//rc/clk?jk=d26c2d49561fd0dd&fccid=8a4535c948d32e2a&vjs=3"
    },
    {
      "name": "Aftermarket Sales Account Manager",
      "company": "Cummins Inc.",
      "urls": "https://pl.indeed.com//rc/clk?jk=b8534e75d0fcecf9&fccid=36ccedc5bfdf19b1&vjs=3"
    },
    {
      "name": "Freelancer Publicist",
      "company": "TOP Agency",
      "urls": "https://pl.indeed.com//rc/clk?jk=6a37f8dab922c48a&fccid=95ba0f0f3bc059a8&vjs=3"
    },
    {
      "name": "IS Change Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=0a6c6c32c3da08dd&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Service Delivery Manager - Salesforce",
      "company": "IBM",
      "urls": "https://pl.indeed.com//rc/clk?jk=f54b2e3adbb2f40e&fccid=de71a49b535e21cb&vjs=3"
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
      "name": "Power Grids - Global IS Service Manager in Quality Domain",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=2669dee0e1731bd3&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Associate Project Manager",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=b4b92b1dc5b646f3&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Junior AR Analyst OTC French",
      "company": "IBM",
      "urls": "https://pl.indeed.com//rc/clk?jk=8b87ab12f769b28b&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "IT Program Manager",
      "company": "Philip Morris International Service Center Europe",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNVjPnChRBZnMERNPcTynIfRiordl17P-gMfMQwHMh26EBm3_B-ffofw0W_WgiaYv3dNVt5xiTfystMb5n-GbbHbWzO1hidmudZWNKU_5_TRWXbrJDN79S1hc2wv6L5eJbDNq2SNI5o4-ySMiWuHSZB1ox1oSL_s0SFMQZo9h3cXqFoYn-WfzGfZqzrEg94ZHxKxO2mHJp229P5z_2i526eIePzk2sETPhMBvLlK5zsZcDSuqnPj1vQ-TJK3corpNxe4pj0KvZI1lSPNxAcRgKhYm9vjbJ8cdpnHsrVivDtLcbAHFM6tpHmc-Bip6PtpDAYk14HgYIUZa5UHxsxIpZ3yEfJvLKYahL6UD6df8FhWTVY048G2vrQWvmL09SZigr6b6tGL9QaiEG5LNo_ASVjrmxEcoogQgXBlvsoF-iNWYojtMoT-N1sajjncfgehwJrxgaZqXnHhVumGwVUkFNKiOgTs6hM4nB8T-_xzGi1s3fGmhqXNT4V28I4CYNep2tdLIkPKF-I8Fq2CN0y04x2nTLv8fb93K7-XXGTdnTJLykC96fw7jF-Xlrrrr1PRut688oG2HrLftcG_GC9HGV0-8B7GzeuyWEqfzDiQ0ZJbgg_TAJxBO-RL&p=10&fvj=0&vjs=3"
    },
    {
      "name": "R2R Team Leader",
      "company": "TE Connectivity",
      "urls": "https://pl.indeed.com//rc/clk?jk=d49f03bfd53644f6&fccid=adb7c04d7caa1bd2&vjs=3"
    },
    {
      "name": "Project Manager IT Methods Transformation",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=99054ffcffc4070d&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Global Warehouse and Packaging Manager 80-100%",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=b7bc0a4093e8790d&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "EMEA Logistics Manager",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=e74d3d5583294b7c&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Senior PR Manager",
      "company": "Bidroom Poland",
      "urls": "https://pl.indeed.com//rc/clk?jk=18700326f3ece834&fccid=3661982007b43fee&vjs=3"
    },
    {
      "name": "Manager, Finance.Finance & Accounting.Financial Control & An...",
      "company": "Ansell",
      "urls": "https://pl.indeed.com//rc/clk?jk=c020932218e61c95&fccid=855ada5a46319c08&vjs=3"
    },
    {
      "name": "License Business Process Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=b41c0ada009670c6&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Power Grids – IS Digital Adoption Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=2d74ef63028ef9af&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "PLEC - Project Director",
      "company": "Air Liquide",
      "urls": "https://pl.indeed.com//rc/clk?jk=fac34a13dfcde33b&fccid=0bfc42f123844c30&vjs=3"
    },
    {
      "name": "Senior Product Manager",
      "company": "Railsware Solutions FZ",
      "urls": "https://pl.indeed.com//rc/clk?jk=b1a26f8b9145c41f&fccid=5388737f85b7985c&vjs=3"
    },
    {
      "name": "Strategic Sourcing Analyst - Spanish or Portuguese Speaker (...",
      "company": "Hitachi Vantara",
      "urls": "https://pl.indeed.com//rc/clk?jk=a7d8192f2b118c4d&fccid=9536dde6bb34eec9&vjs=3"
    },
    {
      "name": "Power Grids - Head of Customer Connect Team",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=fdd67b45c05621ee&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Engineering Team Manager (Configuration Management Core Team...",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=617b22d01e445391&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Senior Talent Partner",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=774aba820bf5c07b&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Power Grids - Strategic IT Vendor Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=12ba922f28e200aa&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Procurement Business Process Expert",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com//rc/clk?jk=53eb823859017842&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "Senior Internal Control Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=78fc7028fc8ec26c&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Account Strategist",
      "company": "Strike Social",
      "urls": "https://pl.indeed.com//rc/clk?jk=743e3c2f13fca29c&fccid=cf4976b1a250fb07&vjs=3"
    },
    {
      "name": "Marketing Automation Specialist",
      "company": "Shell",
      "urls": "https://pl.indeed.com//rc/clk?jk=3e0fbc67c95568e5&fccid=167aa4ca2fe7d8e6&vjs=3"
    },
    {
      "name": "Global Project Manager of Talent Acquisition and Development",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//rc/clk?jk=d693889779268a46&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Senior Delivery Manager",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=7c959fbf65bf488c&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Finance Project Manager",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=b6a0dadfb078d607&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "GL Business Process Expert",
      "company": "Danish Crown",
      "urls": "https://pl.indeed.com//rc/clk?jk=1014d0dfc859b23c&fccid=f80f74464b038a3f&vjs=3"
    },
    {
      "name": "R2R Team Leader with French",
      "company": "TE Connectivity",
      "urls": "https://pl.indeed.com//rc/clk?jk=480e4ee516fd0a03&fccid=adb7c04d7caa1bd2&vjs=3"
    },
    {
      "name": "Power Grids - IS Manager Security Architecture",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=48ef3b45ef1e6dfe&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Technical Enablement Architect",
      "company": "Akamai",
      "urls": "https://pl.indeed.com//rc/clk?jk=bed70b761bbe28c3&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "InfoSec Analyst Risk Awareness",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=9ae39cf3803b8f46&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Customer Experience Engineer - Collaboration (Customer Succe...",
      "company": "Cisco Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=33f7a65e9d3eead3&fccid=dfc44f3b8c44a6db&vjs=3"
    },
    {
      "name": "Power Grids - ERP Master Data Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=29d7eccdab0557d9&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "CRM & Lead Generation Manager",
      "company": "Goodminds",
      "urls": "https://pl.indeed.com//rc/clk?jk=3ae9b6871fb43fab&fccid=11f0d4057730c23d&vjs=3"
    },
    {
      "name": "Business Development Manager (HR Solutions)",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=1fe408682bda58b8&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Delivery Lead",
      "company": "HRO Digital",
      "urls": "https://pl.indeed.com//company/HRO-Digital/jobs/Delivery-Lead-886e6c2ba3c53aea?fccid=a625a1c5dd0c3aed&vjs=3"
    },
    {
      "name": "IT Buyer",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=5015a8e3d058ce00&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Junior Ruby on Rails Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com//rc/clk?jk=3ee2b30b299dfdcc&fccid=ea407b3586382717&vjs=3"
    },
    {
      "name": "Team Lead",
      "company": "Working Smart Limited",
      "urls": "https://pl.indeed.com//rc/clk?jk=a0e31eef6dd61352&fccid=eb81f98123301883&vjs=3"
    },
    {
      "name": "Workday Financials Data Solutions Lead Consultant",
      "company": "Alight",
      "urls": "https://pl.indeed.com//rc/clk?jk=193a7f106db385c4&fccid=c35833abe06c86e0&vjs=3"
    },
    {
      "name": "Power Grids - Service Management Solution Architect",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=e7e0e48cd53f715c&fccid=38b4474838e7b7a1&vjs=3"
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
      "name": "Ruby on Rails Developer",
      "company": "Railwaymen",
      "urls": "https://pl.indeed.com//rc/clk?jk=6f7e6c22857a22b8&fccid=ea407b3586382717&vjs=3"
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
      "name": "EMEA Senior Accounting (RtR) Manager",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//rc/clk?jk=3146c38a0287073f&fccid=77087bd1709a8148&vjs=3"
    },
    {
      "name": "Power Grids - Global IS Service Manager for Audit, Real Esta...",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=f802b091a97439bc&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Senior Software Engineer - React",
      "company": "WP Engine",
      "urls": "https://pl.indeed.com//rc/clk?jk=1979abe89866df75&fccid=966a8dd715d10eb7&vjs=3"
    }
  ],
  "468": [],
  "469": [
    {
      "name": "opis oferty",
      "company": "MAXTO",
      "urls": "https://pl.indeed.com//rc/clk?jk=9b1ab4b7fbde4e55&fccid=6e3a4fe249b84d43&vjs=3"
    },
    {
      "name": "Specjalista ds. nowych biznesów",
      "company": "Mia Sp. z o.o.",
      "urls": "https://pl.indeed.com//rc/clk?jk=6d5cb76e96f658d5&fccid=0c143c026c0aaa11&vjs=3"
    },
    {
      "name": "Python Senior Developer",
      "company": "Investio",
      "urls": "https://pl.indeed.com//rc/clk?jk=81de3d8912c00032&fccid=c5b0414455b5af46&vjs=3"
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
  "471": [
    {
      "name": "Junior AML Compliance Analyst",
      "company": "BROWN BROTHERS HARRIMAN (POLAND) Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-aml-compliance-analyst-krakow,oferta,7461666"
    }
  ],
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
      "name": "Content Analyst - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-german-speaker-online-recruitment_3355380.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Analyst - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-french-speaker-online-recruitment_3355370.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Analyst - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-italian-speaker-online-recruitment_3355382.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Analyst - Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-russian-speaker-online-recruitment_3355388.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Analyst - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-spanish-speaker-online-recruitment_3355390.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-french-speaker-online-recruitment_3355402.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-german-speaker-online-recruitment_3355404.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Russian or Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-russian-or-ukrainian-speaker-online-recruitment_3355408.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-slovak-speaker-online-recruitment_3355410.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer Polish Speaker - shift support [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-shift-support-online-recruitment_3355412.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": " Content Reviewer Russian Speaker - shift support [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-russian-speaker-shift-support-online-recruitment_3355414.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Analyst - Portuguese Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-portuguese-speaker-online-recruitment_3357150.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3376758.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Czech Speaker  [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-czech-speaker-online-recruitment_3355398.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Dutch Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-dutch-speaker-online-recruitment_3355400.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-online-recruitment_3355406.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-bulgarian-speaker-online-recruitment_3357154.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Finnish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-finnish-speaker-online-recruitment_3357186.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Greek Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-greek-speaker-online-recruitment_3357190.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-italian-speaker-online-recruitment_3357200.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Norwegian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-norwegian-speaker-online-recruitment_3357202.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-romanian-speaker-online-recruitment_3357204.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-spanish-speaker-online-recruitment_3357206.html#55a0434a5c48694965301d14f33b295c"
    },
    {
      "name": "Content Reviewer - Turkish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-turkish-speaker-online-recruitment_3357208.html#55a0434a5c48694965301d14f33b295c"
    }
  ],
  "475": [
    {
      "name": "Content Analyst - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-french-speaker-online-recruitment_3355370.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Analyst - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-german-speaker-online-recruitment_3355380.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Analyst - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-italian-speaker-online-recruitment_3355382.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Analyst - Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-russian-speaker-online-recruitment_3355388.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Analyst - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-spanish-speaker-online-recruitment_3355390.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Czech Speaker  [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-czech-speaker-online-recruitment_3355398.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Dutch Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-dutch-speaker-online-recruitment_3355400.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-french-speaker-online-recruitment_3355402.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-german-speaker-online-recruitment_3355404.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-online-recruitment_3355406.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Russian or Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-russian-or-ukrainian-speaker-online-recruitment_3355408.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-slovak-speaker-online-recruitment_3355410.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer Polish Speaker - shift support [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-shift-support-online-recruitment_3355412.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": " Content Reviewer Russian Speaker - shift support [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-russian-speaker-shift-support-online-recruitment_3355414.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "CSR Online Advertising Specialist - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-bulgarian-speaker-online-recruitment_3355416.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "CSR Online Advertising Specialist – Czech or Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-czech-or-slovak-speaker-online-recruitment_3355418.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "CSR Online Advertising Specialist - Lithuanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-lithuanian-speaker-online-recruitment_3355422.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "CSR Online Advertising Specialist - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3355424.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "CSR Online Advertising Specialist – Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-speaker-online-recruitment_3355430.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "CSR Online Advertising Specialist - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-spanish-speaker-online-recruitment_3355434.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "CSR Online Advertising Specialist - Russian/Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-ukrainian-speaker-online-recruitment_3355440.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Analyst - Portuguese Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-portuguese-speaker-online-recruitment_3357150.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-bulgarian-speaker-online-recruitment_3357154.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Finnish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-finnish-speaker-online-recruitment_3357186.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
    },
    {
      "name": "Content Reviewer - Greek Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-greek-speaker-online-recruitment_3357190.html#2bdb8f7bd4a53f87a07c62d7226cc05a"
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
      "name": "Junior Analyst with French",
      "company": "Antal International Sp. z o.o.",
      "urls": "https://www.pracuj.pl/praca/junior-analyst-with-french-krakow,oferta,7462901"
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
      "name": "Data Analyst with Python",
      "company": "ASTEK Polska",
      "urls": "https://www.praca.pl/data-analyst-with-python_3372270.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "BI Analyst / Expert [rekrutacja online]",
      "company": "PwC",
      "urls": "https://www.praca.pl/bi-analyst-expert-rekrutacja-online_3355558.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Benefit Policy Analyst with Spanish [rekrutacja online]",
      "company": "Aon",
      "urls": "https://www.praca.pl/benefit-policy-analyst-with-spanish-rekrutacja-online_3379030.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Senior Business Analyst",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/senior-business-analyst_3391606.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Teradata Technical Analyst ",
      "company": "Be | Shaping the Future Poland",
      "urls": "https://www.praca.pl/teradata-technical-analyst_3337152.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Financial Junior Analyst [Rekrutacja prowadzona online]",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.praca.pl/financial-junior-analyst-rekrutacja-prowadzona-online_3355508.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Cash Operations Junior Analyst - Entry Level",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.praca.pl/cash-operations-junior-analyst-entry-level_3355512.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Command Center Senior Analyst",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/command-center-senior-analyst_3354842.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Senior Financial Analyst",
      "company": "Capgemini Polska Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-financial-analyst_3354824.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "System Administrator / Data Analyst [Rekrutacja prowadzona online]",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.praca.pl/system-administrator-data-analyst-rekrutacja-prowadzona-online_3353278.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Senior Financial Analyst (Business Controllership) [Rekrutacja prowadzona online]",
      "company": "Accenture Sp. z o.o.",
      "urls": "https://www.praca.pl/senior-financial-analyst-business-controllership-rekrutacja-prowadzona-online_3353194.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Analityk ilościowy",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/analityk-ilosciowy_3384074.html#35149d941c62dd9bfa41889f97912f14"
    },
    {
      "name": "Analityk finansowy",
      "company": "brak nazwy",
      "urls": "https://www.praca.pl/analityk-finansowy_3384070.html#35149d941c62dd9bfa41889f97912f14"
    }
  ],
  "477": [
    {
      "name": "Content Analyst - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-french-speaker-online-recruitment_3355370.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Analyst - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-german-speaker-online-recruitment_3355380.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Analyst - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-italian-speaker-online-recruitment_3355382.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Analyst - Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-russian-speaker-online-recruitment_3355388.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Analyst - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-spanish-speaker-online-recruitment_3355390.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Czech Speaker  [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-czech-speaker-online-recruitment_3355398.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Dutch Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-dutch-speaker-online-recruitment_3355400.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - French Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-french-speaker-online-recruitment_3355402.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - German Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-german-speaker-online-recruitment_3355404.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-online-recruitment_3355406.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Russian or Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-russian-or-ukrainian-speaker-online-recruitment_3355408.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-slovak-speaker-online-recruitment_3355410.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer Polish Speaker - shift support [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-polish-speaker-shift-support-online-recruitment_3355412.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": " Content Reviewer Russian Speaker - shift support [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-russian-speaker-shift-support-online-recruitment_3355414.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Analyst - Portuguese Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-analyst-portuguese-speaker-online-recruitment_3357150.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-bulgarian-speaker-online-recruitment_3357154.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Finnish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-finnish-speaker-online-recruitment_3357186.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Greek Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-greek-speaker-online-recruitment_3357190.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Italian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-italian-speaker-online-recruitment_3357200.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Norwegian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-norwegian-speaker-online-recruitment_3357202.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-romanian-speaker-online-recruitment_3357204.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-spanish-speaker-online-recruitment_3357206.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Turkish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-turkish-speaker-online-recruitment_3357208.html#a0e5184996d917155857d91461689a30"
    },
    {
      "name": "Content Reviewer - Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/content-reviewer-ukrainian-speaker-online-recruitment_3357210.html#a0e5184996d917155857d91461689a30"
    }
  ],
  "478": [
    {
      "name": "Visual Media Designer",
      "company": "Jacobs",
      "urls": "https://pl.indeed.com//rc/clk?jk=9b3ba8c1b66b6a33&fccid=de56d7554bea5214&vjs=3"
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
      "name": "Visual Designer (Freelancer)",
      "company": "Miquido",
      "urls": "https://pl.indeed.com//rc/clk?jk=775a02a02a2720b8&fccid=b7117f8974cf5be7&vjs=3"
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
      "name": "Solution Architect Track & Trace",
      "company": "Philip Morris International Service Center Europe",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNWZTV30kQvwwrn9tg91UQuAGOBu2Zhh-nfwVa6nMTqZy3mI_5bJK_3J6kg2SeYb0nxmxK0sTcc896C5Ib4o7y8ce20LUr4XIsEUBQdqbLu36ojToENWepTLu3cJWRogl0kQ8jwOl3fQTpZw2bK7UmJzaIm9JnFshis5K9SYwwhkYfhFreXJn6nT52BFEL8VdUKFmtvZy-wuK94oGai4OwDOOaGGD_xecUTnd2ajDOSwS7GfD105xgMNwD5M_jgS7RB7CfQUPLyjjJYkGoap_BDe0ZlGTY6PmSzJvvTAXQdMO8Zva8WIWa_iVvcHbeE3AhQ6PUTiF8bnwgLFvIcK8gKJuunlcxuSgR-aBYcS67BZJyHQ_2tTcnt3UrGxREFuIkSTP36lUsrq9Rh3zeZPG-k8lHoo711X3Df1BX8OozlXVwKECRhmShW8red6vh5-lzK4kPBB-R4wZzhwjbW2Vzl_3QmeQqbP119GCGI0xwfY3rlFm17vNoh511jtaz9jlFeFLSJgM1Y7uVVna6RamTl0jd-tVsOuAbgDq0aXrb-ADQRhr-23Tj989kC8meiUKT_FoKf6YIog8bSSGgWSwkwH2m8odXwF2QGWYpuR0fu4HnBx5GATAcRy2a6eymQzv-o=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Solution Architect Connectivity",
      "company": "Philip Morris International Service Center Europe",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNWnRPiMuVM8ZH97daySQUvTqRucbQuB5RGKRtc2dwpHAuqfCRIRiTqDJBeRY2jFnW63i0VAv3sOkuLYm4E7CYlkpkpgccPSPMGJwJwhYg74ABaC8qgFR_9IlZnKdsX2m2kvV4wW682bBV2715D-JRc7GXM4_QpjZTBDybs5Yjv0agvsfiHaK8ohdixBjc2yFVPhPxr8JJ4KrCVdSqQjzjOiW3A_TYr4rE9HHYg9pS3E6mNkpt5Tpmc-7L1d4pT0_dqQQMQi21VAUAo1HCO55MlJlL11nwe01ffoW5PZNr_qLD0l6ndWuBs6eFmFugR_zTndzfgaRc8CamMeUXzJck0z0_cRpRBQKaD616-0e8XFM5FPtFG0FaiQYOSWMldUWQWdxs4iGos51GFwyABPG6STo2JGEF1RX839UpojpEiiehjm-tAfEsMjm-SAgS_ZWEB-a3z_4rHstlvcWaGeicuty6auN7XF7DebDQc5obJG3a9mpfkMEzMN5r9sKmG3jsjBIjnbnpBJ1UdgDKtm0Couu2roa4H6t4-TMr3Q3Dd4oSJfqBBts-4LMVjruj7cd3ByCJqisymQmXvVnDCVGBluyec_j5McwVislMdoR5_MIDxyaRKQiSSdvpELHoKYIhj5Jh1BfKzWkw==&p=1&fvj=0&vjs=3"
    },
    {
      "name": "Solution Architect",
      "company": "Amway Global Business Services",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNXiK92hjGCwzvib977movJJ9KbA-UcoAnSkFdh4Fgko37mvJK39RUYbSG-acB71p52TY-WYFRE8ekcKxihJF8m0vvJm2bG3MJ122EB3R3Vbff2brtKfpScEpgJUaVO9xJEq2WZj92uhrgHm2ts3H0LwVLiDoPcxkvq7EKYYMhJi5YNouZY_y761uGgIDMIb0IgLWkFxlv4_m1afKJZkJaNGwrRRQi9IwQqb4Kya4iOGulLrBl3uJrGHpRGybo-ILovDC07XuLuXf6C-2O7zOBD7fXSfCqHiHHSm9E7KFkB-0n1ksQATUBOrI9qW9tfm27zei4UT8GZ_3oz08iAuHMIvQvmWlG7EYwjY5RN544lD9LJqk4XLqTBc9FTm7NePMS7tJqNjWU2_Vhd2bOX0DHQHqgmhI6eYJdEAhMorTvGaVxTctV0Ps6rbR1yYgiE7g7RZQUcUY7ISX2Wt3EA0cSKExHFDKTsTdi8kK_wz3L53vEV26FxqKsKlt4MbAGI7281JLBkH8KKhhCVHYwGWUXk8B-HFfAS4n0tbQHZC5DV277PxqygALUA_kV-90zj0Gju60BG1TYRt2c0PhA3ebxkAfIosTTRbxl5u-TI4TGx-bhemERT5-R9jKo2b6rf0cak=&p=2&fvj=0&vjs=3"
    },
    {
      "name": "Solution Architect Supply Chain",
      "company": "Philip Morris International Service Center Europe",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNUSAqhygYBSlMsprHctAKMiZvKPZvjUh-F-y2LYnjqgj4KUSYtWmX0YOk-pjeptbLlZ9C-X8x5NIehUITcITjWKMrYPoEBtpdEvybqdK7c4FIRoiA-utMMRnByhgwTLiIzCfPHrfR60074VOXy2VCh4COVDwypraXZdGCPTOsxtb_mROe7nSgSaSmBeTk3k5ucz-zQft0mxxe4cFFnD8DgntGlrzD5lhcLCHR_VNMxlB-U9Y9JnW_tAgWsRoT-q1lguzcRIa3Poxj0lS4bHJWvJkb54D9t5Hd9wXXEq25e3vJn3dDRd8LnlVStwMSU8WDfNsHBIGk3TMhegGLLpqZ7fAkjHgJWVny0W9nDPWxmqPF_Hnd2mlI0GrAHeYGJJE5-ElfMmQFkyBVh1vaImYu-UBIAipEiEwTTg6Zzeymdw_P42LnRIviwTmaQDPtd3YTSuDVRYymBRx3CxAUj8hK6v2IgDQjOFLNut8iEPrMXlNF1PKl68dK0mp2Sx2Rd72_Tvu82JqovZgAi79YSo1CM5jR9SL7paAcepSjPVy2H2GyIsXlrUbLSiAo6t9o56Hh296F0WTmK5M8lSz4Y2JGMVJOwciWAzOP2HERNjN8k5m2DPSxo9ShnLQb9j9fqtTF8WpQg2STN-pA==&p=3&fvj=0&vjs=3"
    },
    {
      "name": "System Architect/Manager",
      "company": "PwC Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=39a9525933e48d22&fccid=5e964c4afc56b180&vjs=3"
    },
    {
      "name": "Data Architect",
      "company": "IBM",
      "urls": "https://pl.indeed.com//rc/clk?jk=80609700436554a2&fccid=de71a49b535e21cb&vjs=3"
    },
    {
      "name": "IS Solution Architect (R&D Domain)",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=313554c95601765f&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "User Experience Architect",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=6719116cd999191d&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Solution Architect Connectivity",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=c36575ac2c77e077&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Global IT Infrastructure & Operations Architect",
      "company": "Varroc Lighting",
      "urls": "https://pl.indeed.com//rc/clk?jk=26287c1578acd85b&fccid=fb8205a78aa01509&vjs=3"
    },
    {
      "name": "UX Designer",
      "company": "Qualtrics",
      "urls": "https://pl.indeed.com//rc/clk?jk=d9c095b50bc4cbc8&fccid=10db9f943841d5db&vjs=3"
    },
    {
      "name": "Solution Architect",
      "company": "EPAM Systems",
      "urls": "https://pl.indeed.com//rc/clk?jk=223e8ba9a192a002&fccid=532afac41b2663f7&vjs=3"
    },
    {
      "name": "Power Grids - ERP Solution Architect Issue-to-Resolution",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=788189e36218b680&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Solution Architect IT (HR Systems)",
      "company": "Philip Morris International Service Center Europe",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNWnRPiMuVM8ZMjLU4LHY-ijOgs1FTroC4Nci6dMoA1wyxFME24qnDL-wa_43t7rpwxmT1Y-5xfbhJpIbIdb7l3XroYUPktEXkbTSo34LNJS6evaCRyvC8AgtRAD1gn24FDd5TecuN9cFKlpCV3UDWrgJU6cRoprjNCBFMc61MiySr6ARlGVB-bF5WIuGjvURKCffFg-uBDj6Vq-HcZxezd5E60UluDB-R5_w9R2LPRbjZXFNgev8VC29pvenFKur48GyjMoc5vcs7oTzgryPtqdFkMwnYlphjJuwLhkRU6kz01Jz74XE-387HrYz8aPxp9R8m70pnRzqqatdpsW2pN9U3AG1-8P2uitS-DYg4qdipoy1OwKlts4NAiMtvZ-TN65q0URRkKMkJ_u01U6qGiB6QJ0431T33prURm8x1Frx0XyC7lM7umPirhg1PJV9DlmPFrN4RwLxHwU1TCmiQw_ucIteuHrx_d6T1i9f81adXx5rvCr9OBQHjVJCcNHfE69hKGksudOPfvZ5PiAusQid75AxSJGKywZ8Q9S9ZIN2O7WemRV1Mp0qEh17bgefW1kq1K3o0q7iscrpRQBaAB6tgiec4SroLrNyNpjmbFOiHwpyXEWkdTHjABkBfpFVH84gwLUGPnrTQ==&p=14&fvj=0&vjs=3"
    },
    {
      "name": "IT Solution Architect (QA Manufacturing Systems)",
      "company": "Philip Morris International Service Center Europe",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNU1nMLKt_AynZE9MPRJFmYjPnkwCKjsSh0FPCFShq4s49FytZI7hEw_pbTTKgx8r3PBDgx0f_b3TTR2MJimWP4wkedEKM1V5aoNmJNDQnnF1IRCsF34phMnN6uBXjhmzVYH40niJr0R9Z4ELHbuoqYDNG78RPQQDU-5zXWmcpYg9czXWoqvFTkFwx0eNP_j3QBTd7Tx3iC5p9aicOrd5ODRXgeqVBS4XpjxPMfOee0oQoNjOJmmWV2RDz6hOaflnYsfX4UW9FExJvxbCeMR9NgxOR2xQARgl1s-unOeraxnh2hxYO5EIQyfNPObNgGHIC1EisuP_dlEFRQMD21sVBCCnjnn9T-CDqRik9YWCy-Mo0wxfxTUXWU9NefQ-ryIWc2LisUHXlb3XxpyqKsZoALVpc9CcDUzpljb2ELPISW2NePycpR-XRITh-zJCX_CDcOusF6BfGU_qIihIuWiaemPlpf80UdKxfxiqjmC42nAuaGh8sPx0ZKYhuRPQ1M6XFpHFzkbQ8tT8Pgzua1_01PUyozy3nUWTRIfdj_EWA9pu9JiCju_mAzZSQg-tStinxeNFA_SR28BF2x2_peuCesDj0dA4I1f--Rbij_TaRaHAlcEnjsikeetUVQ86KmsJnxPbiSHEbSyEK3-Qexz0zElAB01knj9KTs=&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Solution Architect Track & Trace",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=0fe0e214eeeee23e&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Power Grids - Global IT Architect for Application Security",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=1f6733965dfebec4&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "CI/CD Solution Architect",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=4644e01c7ca93530&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "IS Service Manager for ABB Web portal",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=e4be05a7480e41c5&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Sr Cyber Security Architect",
      "company": "GE Healthcare",
      "urls": "https://pl.indeed.com//rc/clk?jk=2eb7b60eb809c144&fccid=65b5f2aba4dbd31f&vjs=3"
    },
    {
      "name": "Senior Network Delivery Architect",
      "company": "Akamai",
      "urls": "https://pl.indeed.com//rc/clk?jk=026b4ee595cc0c73&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Senior Security Researcher / Architect",
      "company": "Akamai",
      "urls": "https://pl.indeed.com//rc/clk?jk=4351fb6158deaf44&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Senior Data Architect",
      "company": "Grand Parade",
      "urls": "https://pl.indeed.com//rc/clk?jk=f0518a0e90f9ee44&fccid=05868c54e0d72a0d&vjs=3"
    },
    {
      "name": "IT Solution Architect (QA Manufacturing Systems)",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=5153c699ad454cf6&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Power Grids - ERP Data Analytics Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=6c35ff9d9f6e96c6&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Senior InfoSec Engineer Analystics",
      "company": "Philip Morris International Service Center Europe",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNV3kZ-ySeRapqlS5uPYk703-inI9lkwENFy_alVeTYnkuK-E0B3GEQoysJ1gEsvcpx5AArCn066lGha1kmKbvSU8w8DCmR1Efrc9W-L-ZuV1yaU9z0MfUNMyV1AnuYUaGb2U7-rU3j1ZeUlj6las21oqtxMveKWpLLIQa-8QNPHunJbU1VIuh9z-nNjcY-wUS20yQQaWo0WPrg7dMMQRyxCBWHic9TIDPSd5WI2bEJvd0fHGu-T4b_KlnVI2lhsobukGhk1OY2DKJOMOfYFna_V6FiedPi6XKr6wlS6uaI-02VaqKBkVr_zpXb9zMDPcExR2fR18-0dOX3PYb-IZdQPPXPG7gWK6CnEgrMkYny3aBv-TcDe21PlafAKuN9zP4-FD67vlSTuS1uFPY1vuX63nWQiEaBF3vVRMCHsXw0g7oLrxDOFIJHfUElhGe3z4lSVSwbY3c-cj5yeofEf1fy7vY7VD7fvtTEarKDB1KQmLn1v9ooweD5599YUJc3iHhOuFFuewLtYZuyCyFTQZs486-HLAhUhjaEnVIT51-2iB_Jxjm1Khdc1yScmrVDtb07TaTL1qQrFfJJV1NXcvlWnjHovhCTyYNVagdDVj3KnBdGJKSJ2cTjfXuVB09w54DjYoJPYyHM1mA9GNYpJpLVX&p=1&fvj=0&vjs=3"
    },
    {
      "name": "F&A Solution Architect",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=f45feb8b6be4421f&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "IT Solution Architect Supply Chain and Product Development",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=3f5caf8d59aa4eee&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Power Grids - ERP Integration Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=763a6e1d0dba60ea&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Senior AWS Solution Architect",
      "company": "Aptiv",
      "urls": "https://pl.indeed.com//rc/clk?jk=7a9b7fd0be9cd606&fccid=8d390ab1843cb8bd&vjs=3"
    },
    {
      "name": "Senior Curriculum Developer - Platform",
      "company": "Pegasystems",
      "urls": "https://pl.indeed.com//rc/clk?jk=1b914ef4f9ceec89&fccid=1b567d66763b30ee&vjs=3"
    },
    {
      "name": "Lead Software Engineer",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=2ce5bfca8c216a6d&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Senior Data Architect",
      "company": "William Hill",
      "urls": "https://pl.indeed.com//rc/clk?jk=dd942ea69cc63d77&fccid=8cb222cc2614b8d7&vjs=3"
    },
    {
      "name": "Senior SIEM Engineer",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=db31e68b835402b5&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "System Analyst",
      "company": "ITDS Business Consultants",
      "urls": "https://pl.indeed.com//rc/clk?jk=7fcc5a90766a005f&fccid=21699bef93fe8799&vjs=3"
    },
    {
      "name": "Senior UX Designer 20-0115",
      "company": "Relativity",
      "urls": "https://pl.indeed.com//rc/clk?jk=24c1268416bd29ad&fccid=fba55399536c27ec&vjs=3"
    },
    {
      "name": ".NET Developer (Architect)",
      "company": "Grafton Recruitment Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=1a358b5afe0d2ac7&fccid=062f71e131e87cf0&vjs=3"
    },
    {
      "name": "Power Grids - IT Solution Architect – Advanced Analytics",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=5c1e17db943e94b9&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Solution Architect (IRAM)",
      "company": "Rekrutacyjny.pl",
      "urls": "https://pl.indeed.com//rc/clk?jk=e5a937dfd014f4b7&fccid=a7ccffe70c57a06a&vjs=3"
    },
    {
      "name": "System Architect/Manager",
      "company": "PwC",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIcGkfgc9BXq0zvsg2O_fnrH96ulgABgyeY2sPMw2LzZuMchY1RPHOH2NWwfGxpIstxNhRBwOSa89HLr35IV7J9I923o9YMnBAEk4HcTuXQSrGMRnB2Z4mtkbtfVHyq80oxTEadh86xCls5BGIlu4mBOXZiVCfu-PiWvgVZ3JcUTlCcpISmGGPQ86H3_K_1Ln1B2b1EMC7pwcQzkwNo4_L5B-5r36j3vrT9SFgytK1cRQ8AdutjPD5wNLsTLR0tGDd-M2fR8RhU9E9Xbz5Jn7BpUfaBahYwoC1Cvtc3mIFADRHpOf2Q4Os-WxBhNiZPO-QP5uwN9oIgAEJnm8TC9Vhum8qFpV8391HGvGtX4tNlHFrFZ5P3o6Pt0fTu40RnM7KRes852TgwOWpiPGwmSm9Ln5pTgttPbCma3nyDLOxTlrMn3s7ehGxJpQOsuB-ilkTdTIkMpqtHb8mQvbdWeny9PsMJQH2yto6HR5bH_1ZU4FQUXgf--iTbMMH_iXeqbULMmmj4EIn0W-I4zROwJj1Yi2aVYxQ6PdVtC8J3JIanVmRZLW81pZ_iEbdb7HYCG4fqyx2KFA81B2AX_k-8AT7FuviKXVLzcbma7svsb9Kxk8hgJQMcbCNkn5Nd8lOxfD4jBuIXU2c9deg==&p=7&fvj=0&vjs=3"
    },
    {
      "name": "Lead Software Engineer",
      "company": "Philip Morris International Service Center Europe",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNVqADdA9oChXBm0t9sQuwTI3xEAfN1TzAChYg4r-OuK-IODsKG-OE9JmZBCbaJ_YE-PXeRXzzI1GbvnG6Hn9Lqnj66E7klKGUyjb1OvLAdJtaX5mbCvjVCf9Ak-hE_GGjoOpn31h2j40_ttjfQfIXhxyGPlMAN-LfYmVvCCP7O_9f8p86SXVpzYSr2FbCdB-rLXh0pI7ZSjxT_TpM0x4DP40DQgdME8mBH2SSZJEpT1QG7tq-61nA3xRM4--EDQaubWpK4u_-dT5ZsfklpMr9UEIIfX91dtzInEL2hSJ_j4DMLurZI-cg0eijmid2yT1BlU_V2fiyTSnsPKK9X3XikgYj_ewQoH1ezbbLte5raxGrO9jWn73toCT13_f822fnpW2w-zIEWuiGfoflVApf3p-mFWKZeNoPa4F54yGGJ_SDLfMtJaAyLjwDHgBKxd-f3JE_-r-2qhwwnuMOBaUiD6-AznKtjOLGfSVLyF_mPOQdazteW1jMqYa9pSb2BkppHkev3ZTGQg3CNj-T65nQ0R__TdBqacAQRG5U4YS8u8ySk2xNEP60iSdS038pnryuo21P7xZb5bcfvg8OzTFLlx2qSAs7W9l_cJ4TQCNYLPNbgMlm_xvXyInFM3FN5c9Uc=&p=8&fvj=0&vjs=3"
    }
  ],
  "480": [
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
      "name": "Senior UX Designer 20-0115",
      "company": "Relativity",
      "urls": "https://pl.indeed.com//rc/clk?jk=24c1268416bd29ad&fccid=fba55399536c27ec&vjs=3"
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
    },
    {
      "name": "UI/UX Designer",
      "company": "Humtap",
      "urls": "https://pl.indeed.com//rc/clk?jk=3318c9a630ae826a&fccid=4ec77f48dd6cf243&vjs=3"
    }
  ],
  "482": [
    {
      "name": "Product Manager HVAC",
      "company": "FERRO Spółka Akcyjna",
      "urls": "https://www.praca.pl/product-manager-hvac_3383660.html#58ec3734becff61310d83aee90bba3f5"
    },
    {
      "name": "Product Manager (k/m)  j. niemiecki lub j. angielski",
      "company": "PROFIT HR ALEKSANDRA KNAPCZYK",
      "urls": "https://www.praca.pl/product-manager-k-m-j-niemiecki-lub-j-angielski_3364852.html#58ec3734becff61310d83aee90bba3f5"
    },
    {
      "name": "Junior/ Mid Scrum Product Owner",
      "company": "TeamQuest",
      "urls": "https://www.praca.pl/junior-mid-scrum-product-owner_3379050.html#58ec3734becff61310d83aee90bba3f5"
    }
  ],
  "483": [
    {
      "name": "CSR Online Advertising Specialist - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-bulgarian-speaker-online-recruitment_3355416.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist – Czech or Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-czech-or-slovak-speaker-online-recruitment_3355418.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Lithuanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-lithuanian-speaker-online-recruitment_3355422.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3355424.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist – Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-speaker-online-recruitment_3355430.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-spanish-speaker-online-recruitment_3355434.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Russian/Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-ukrainian-speaker-online-recruitment_3355440.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3357212.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Latvian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-latvian-speaker-online-recruitment_3357222.html#f6165d6af9b20f1fdaeaf0cd71539960"
    },
    {
      "name": "CSR Online Advertising Specialist - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-romanian-speaker-online-recruitment_3357226.html#f6165d6af9b20f1fdaeaf0cd71539960"
    }
  ],
  "484": [
    {
      "name": "CSR Online Advertising Specialist - Polish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-polish-speaker-online-recruitment_3355424.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Bulgarian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-bulgarian-speaker-online-recruitment_3355416.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist – Czech or Slovak Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-czech-or-slovak-speaker-online-recruitment_3355418.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Lithuanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-lithuanian-speaker-online-recruitment_3355422.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist – Russian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-speaker-online-recruitment_3355430.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Spanish Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-spanish-speaker-online-recruitment_3355434.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Russian/Ukrainian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-russian-ukrainian-speaker-online-recruitment_3355440.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Estonian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-estonian-speaker-online-recruitment_3357212.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Latvian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-latvian-speaker-online-recruitment_3357222.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "CSR Online Advertising Specialist - Romanian Speaker [Online Recruitment]",
      "company": "MAJOREL POLSKA",
      "urls": "https://www.praca.pl/csr-online-advertising-specialist-romanian-speaker-online-recruitment_3357226.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "Web Content Reviewer with French",
      "company": "COGNIZANT TECHNOLOGY SOLUTIONS POLAND SP Z O O",
      "urls": "https://www.praca.pl/web-content-reviewer-with-french_3376758.html#02df4f061b58bf8b20fd41aba0c30fb6"
    },
    {
      "name": "Specjalista ds. Mediów Społecznościowych [rekrutacja online]",
      "company": "PORTFEL INWESTYCYJNY SP. Z O.O",
      "urls": "https://www.praca.pl/specjalista-ds-mediow-spolecznosciowych-rekrutacja-online_3314128.html#02df4f061b58bf8b20fd41aba0c30fb6"
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
      "name": "Specjalista ds. Mediów Społecznościowych [rekrutacja online]",
      "company": "PI MANAGEMENT SP. Z O.O.",
      "urls": "https://pl.indeed.com//rc/clk?jk=78f1128ee0688a51&fccid=116d318ce6f2c81d&vjs=3"
    },
    {
      "name": "Specjalista ds. kampanii marketingowych (SEM)",
      "company": "PromoTraffic",
      "urls": "https://pl.indeed.com//rc/clk?jk=01fecd4da9a94534&fccid=e29fd57cbddac110&vjs=3"
    },
    {
      "name": "Specjalista ds",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com//rc/clk?jk=f22871bdfe9abed5&fccid=dd616958bd9ddc12&vjs=3"
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
      "company": "Philip Morris International Service Center Europe",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNXE2dIlGGKYL617mrMSCZXJEXSVyafURYSoGWRYpHlRO_3h7yVi8v9VbZ_cx-cXpIKO1y1LUCbEP9VlCyDLCXQjO6ZkB1zgWidZYdwn_12SieEzj0sMd4sirWHgF0YxoTKv7spAU_I8YH3aHmJHtSCYY4LwW99s__WUgirKS40QHh5ljgmrSUpsOde9jv31Gcj_twOITXfc_0Qpg3srWx2GGwNwG0di7w320C8WSk2X8n3XgC2R4ppi0DuX9QtK1Rbjc482qJWEPf1FQsForPL-Z3DGZrN9Jpmg0orc_-M72bXPOrNd-6DL2-2gZfK6JhL-51Yxx8j4l3EU8kXJ3esL3WTNBh-YZ_Z8ODnSzAzZe2SrA7YB5FfoXn2iReQaO8NQKwG-5vnzbuybyb9stErdL5_2V4lgO90Qd9-ZS6DJbUpVqZw18QDmm0hy8Tekl3yU3rF2jWm_uemak57PcoKNStU4T9-bjbNQGK9ptYD0g0_fmgW9zA1tvysw3EC43rRmN6NGlA0xT3tJK_SY4HO62TUvLWaupnkcNB1DQfPWl3W1ZjnhFRxJOSOaUzIYpm-FmU_eD8HTWHIO9cCif-dJqvQzVFIkVy59SI1sv-iszGb-fLpC77ys&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Strategic Planner",
      "company": "Admind",
      "urls": "https://pl.indeed.com//rc/clk?jk=2752f0b14716c99e&fccid=a7f110d3869433f8&vjs=3"
    },
    {
      "name": "Fulfilment Planner",
      "company": "Philip Morris International",
      "urls": "https://pl.indeed.com//rc/clk?jk=4529547ae3200662&fccid=4141256365dbb7d7&vjs=3"
    },
    {
      "name": "Content Manager",
      "company": "Admind",
      "urls": "https://pl.indeed.com//rc/clk?jk=f906cf3cfe85651a&fccid=a7f110d3869433f8&vjs=3"
    }
  ],
  "488": [
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
      "name": "Service Transition Manager",
      "company": "Mindbox S.A.",
      "urls": "https://pl.indeed.com//rc/clk?jk=fe37d45fdb9ebd8a&fccid=90b22c4f2ae1e58b&vjs=3"
    },
    {
      "name": "Logistics Specialist",
      "company": "Akamai",
      "urls": "https://pl.indeed.com//rc/clk?jk=5d55e66d613ca9f5&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "Infrastructure Delivery Manager",
      "company": "Akamai",
      "urls": "https://pl.indeed.com//rc/clk?jk=a6dcf4accd3d66de&fccid=9c094dedde5fb497&vjs=3"
    },
    {
      "name": "F5 Engineer - Global F5 Centric Footprint",
      "company": "Assa Abloy",
      "urls": "https://pl.indeed.com//rc/clk?jk=d9bb1a6473ca6702&fccid=0a4ad7ebd9b0c8ee&vjs=3"
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
      "name": "E-commerce Marketing Specialist",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=81c413859cfc1c03&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Kierownik Robót (Solution Deployment Manager)",
      "company": "Thales Group",
      "urls": "https://pl.indeed.com//rc/clk?jk=71ab7b696762fe62&fccid=b920aab5fd60595d&vjs=3"
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
      "name": "Senior Network Delivery Architect",
      "company": "Akamai",
      "urls": "https://pl.indeed.com//rc/clk?jk=026b4ee595cc0c73&fccid=9c094dedde5fb497&vjs=3"
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
      "name": "UX Designer",
      "company": "Qualtrics",
      "urls": "https://pl.indeed.com//rc/clk?jk=d9c095b50bc4cbc8&fccid=10db9f943841d5db&vjs=3"
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
      "name": "Senior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=e60f52063a358e4d&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "UI/UX Designer",
      "company": "Humtap",
      "urls": "https://pl.indeed.com//rc/clk?jk=3318c9a630ae826a&fccid=4ec77f48dd6cf243&vjs=3"
    },
    {
      "name": "UX Designer (ERP)",
      "company": "Comarch",
      "urls": "https://pl.indeed.com//rc/clk?jk=0bad393ae110a11c&fccid=68b975ecbbd7a58d&vjs=3"
    },
    {
      "name": "Senior Product designer",
      "company": "unatrix",
      "urls": "https://pl.indeed.com//rc/clk?jk=fde36f7e3231afa1&fccid=04a193c8b03a233d&vjs=3"
    },
    {
      "name": "Web Designer / UX specialist",
      "company": "Webchefs",
      "urls": "https://pl.indeed.com//rc/clk?jk=cdf0c98992eb4aa5&fccid=458dd1bc5b9928b4&vjs=3"
    },
    {
      "name": "Senior UX Designer 20-0115",
      "company": "Relativity",
      "urls": "https://pl.indeed.com//rc/clk?jk=24c1268416bd29ad&fccid=fba55399536c27ec&vjs=3"
    },
    {
      "name": "ABOUT US",
      "company": "Pragmatic Coders",
      "urls": "https://pl.indeed.com//rc/clk?jk=59c0c356987323eb&fccid=c1b8ef077cc6a8a5&vjs=3"
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
      "name": "Learning Designer&Training System Specialist",
      "company": "Klient Advisory Group TEST Human Resources",
      "urls": "https://pl.indeed.com//rc/clk?jk=1426a67502f515f9&fccid=3e41fd04722e7f1d&vjs=3"
    },
    {
      "name": "Senior Game Designer",
      "company": "Keywords Studios",
      "urls": "https://pl.indeed.com//rc/clk?jk=5ee6464614937cb7&fccid=c26d104f25f1364f&vjs=3"
    }
  ],
  "490": [
    {
      "name": "C/C++ Windows Kernel Security Expert (f/m/x) (relocated to G...",
      "company": "Avira Operations GmbH & Co. KG",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0DVAdzec4bw6rQ4FO3PDdwz3gCZ43d7Gsr17jnu3o1g5JTNhwfE3RbVHY0lVPlBBqMLV94yfnUX5IQFwZ-4RnwLyCYE0wqwFYXTrxVNJwGtBFdNhn-jhPIrvKLOxhKuv7N3hu_yLjAENHCuRKCM5U4CXccBVVprtmdBY7tn2KlZwYXALgcdJxz7NMlWivvAo3QoI8VWLUMhOJ0h8WxYRstF9AtZQZY5cjSfPVXDz0AneQHSBOanh25ODQMF0pD4wJx-BMOL892U9TyUMf1CVzakXViuZKj9l0HcdnZFq_giWjuZJTZ5wi5sxJlf9LsKu5lFLMJq9XVBVUdw8v1kfXWVaTw_ET96AeY-FJ5LEByy9uBCYfCexlTYqekwJ3m1Gb7Z9woS9EX897v--IwJvk_L6-W7OHnhohPa_KGo9XJRZsiup3De-L9_xAZqddn0vyszpuMUgnO9QA==&p=0&fvj=0&vjs=3"
    },
    {
      "name": "Microservices Integration Engineer",
      "company": "Amway Global Business Services",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNUVhvFO1pn3PQgp48CUF-3lDTaHyiUhT8ZZD7riUPhEYSIGoykvNOOwzZ-ucMJTTO9_o32XobS_n7xoz8IzhYX3cFaxpNq7vzYvNf3dhFDiSJ168rRo5FrmMwJj4gP4e0PSb0z5ZTPQYvUmFTwpyQntotDppb2YxP3B1ucP7NveKXYBlxBIw-XTQoiKG69mL9S02UgOKuKAVUOjK2sskQQZV48qJmIavu9iGb5My3vzGuIRuEHegAOz45Gazvv6J7_5eaBYno6F2iphE2C0wsLB9XmBt8_zPWiiucUw6i_5blC59ifSew2AP13RaN2nN8n37MbiZTf3SNQ6gLYzwlBWL2r2EyBy7VdB_IKtjAI-0X4FtXbJ4jMmcpHOeUCcxmwudYitzXr-dThIBR1nWUzZIcA8w--jFbBvSXgH2KPvuyaNNsbr6BgxXnf1zsn9zPgjmc_QIbKy_gvKynFSB2T1Ohccc5pCbFsSWFgxSCNJw7Lso-tR3o8pnZdFlkSzcIvNfrujO8CdjuLvDn1ti1zluSN_sSnBCK5bdYvjpaGWgsEIFVW6OVg0aQbgNugbFaVhvc43jzmCoMTcrWuPgYSYSL3iU2a_5H41jZhgQ7LA-bj_BpyeQu6kbLICyHCs6_6MZNqQJxUzew==&p=1&fvj=0&vjs=3"
    },
    {
      "name": "UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=be38b941f8b99086&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "React Developer",
      "company": "Making Waves",
      "urls": "https://pl.indeed.com//rc/clk?jk=d3f63dcb1100ffc1&fccid=eb14cce8232d9a6c&vjs=3"
    },
    {
      "name": "Software Developer Level",
      "company": "CRIF",
      "urls": "https://pl.indeed.com//rc/clk?jk=72594e5ab1bb228c&fccid=7a2798bb3678d68a&vjs=3"
    },
    {
      "name": "Front End Software Developer - (Krakow)",
      "company": "h2o.ai",
      "urls": "https://pl.indeed.com//rc/clk?jk=cfbb605157c80b53&fccid=41a5a100828398e1&vjs=3"
    },
    {
      "name": "Software Developer II",
      "company": "CRIF",
      "urls": "https://pl.indeed.com//rc/clk?jk=1349d8bf9d6ef3f9&fccid=7a2798bb3678d68a&vjs=3"
    },
    {
      "name": "AngularJS Developer(Polish)",
      "company": "JSAN Consulting",
      "urls": "https://pl.indeed.com//company/JSAN-Consulting-Ltd/jobs/Angularjs-Developer-15603b840c418088?fccid=e6c493542b893459&vjs=3"
    },
    {
      "name": "Full Stack Developer(Polish)",
      "company": "JSAN Consulting",
      "urls": "https://pl.indeed.com//company/JSAN-Consulting-Ltd/jobs/Full-Stack-Developer-35144e007ff455fc?fccid=e6c493542b893459&vjs=3"
    },
    {
      "name": "Power Grids - Full Stack Developer for Microgrids Solutions",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=f794ea613276aa92&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Power Grids - C#/.NET Developer for Network Manager",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=4edfed7f8a320bcb&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "ReactJS Software Engineer",
      "company": "Pulsate Mobile",
      "urls": "https://pl.indeed.com//rc/clk?jk=8c4d9b58f1ecece7&fccid=b4056e2de55537c8&vjs=3"
    },
    {
      "name": "Angular Developer",
      "company": "At provider Poland sp.z.o.o.",
      "urls": "https://pl.indeed.com//company/At-provider-Poland-sp.z.o.o./jobs/Angular-Developer-df588b893954ff5a?fccid=3cb053f83959b623&vjs=3"
    },
    {
      "name": "Senior Javascript Developer",
      "company": "ProData Consult",
      "urls": "https://pl.indeed.com//rc/clk?jk=4a6eb7a2b0ff7fed&fccid=fa336ade0bd80ccd&vjs=3"
    },
    {
      "name": "Web Developer",
      "company": "Working Smart Limited",
      "urls": "https://pl.indeed.com//rc/clk?jk=5527b145aa3574c1&fccid=eb81f98123301883&vjs=3"
    },
    {
      "name": "iOS Developer",
      "company": "Net2source Global Workforce Solutions Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=9f9718eed86b11da&fccid=96ad8dbc86ceeb6e&vjs=3"
    },
    {
      "name": "Full Stack Developer",
      "company": "Try Codnet",
      "urls": "https://pl.indeed.com//rc/clk?jk=8017d91a0e626e42&fccid=6938dd7585d85504&vjs=3"
    },
    {
      "name": "AngularJS Developer",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=30da4a75737f2bc7&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Java Developer",
      "company": "Devire",
      "urls": "https://pl.indeed.com//rc/clk?jk=03ff31a72cddc973&fccid=dac7798bc9cb142c&vjs=3"
    },
    {
      "name": "Mid Full Stack Developer",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=b17119c38db3e8f2&fccid=31670bef3ae6497b&vjs=3"
    },
    {
      "name": "Senior UI/UX Designer",
      "company": "Reality Games Ltd",
      "urls": "https://pl.indeed.com//rc/clk?jk=e60f52063a358e4d&fccid=5b6b859587be5ef0&vjs=3"
    },
    {
      "name": "Principal Front-End Developer",
      "company": "Oracle",
      "urls": "https://pl.indeed.com//rc/clk?jk=0b6f831ee394e9a2&fccid=cd22d01053af7669&vjs=3"
    },
    {
      "name": "Microservices Integration Engineer",
      "company": "Michael Page",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhqEHhHUWsXOM4sFn7RcMSIedI4sSciZdaKzWKVg_T1zuyhd9feKXm3basbMG59gzq1gS21GAqSJ_K7dFzUvkpHWX6E7e-Ngf4uiCTPQmtne5hil1UjEUgA48wkbxFnk8f5f7BWo4Q6TAKYl7w49i8rOAevOALqXLhtYCNnvqGBEqVK2pUCAz_tHqVtkrw0wBHveSHnD-ACKztgbe9i4l0-k-Z0gNwKeWWzDJrz0lMIOyALRzJdV8x2kQVKl2xKg1PhEhe5kIL9DrwNHxDnh1bWuL7ro55YZ9WVVbG60INSbOJ8h8-AJ6qzJD-NPQSEaTlD-HQWKEoSSrZ4zsv2LUm59fPLTQQ0wYmdsdN11KK8dnfqf_D3e9K3OqqNofw0gSoBTwUIjb0qeGGr2Uhn_n459dG9uYy9SuzOB_g_uPdQxDazP4J4RN9AG8IT7t89TFKDattiLLJUgl11Igyqq7hgOHtr07-zzns5Nnst8sxxvlD1Uyg1hbgSimYbJJCLIq24M5NnXG4qtIbryhBc2TquS-WHEMFP6SbNvE5qKdQDd6xruqgR90LubAfOmjyFCWnVcy1OF2S77i9TOZ7pFSOw7b1AehVBVP5grSuhZ47BCx_SBsqd_oOHKwHZnqll-OuzoBv1TPDD6-lJV3DLDYoc1hp3xuOIHhZ9bp_IEqX_Lw3nMBQ1mNLyY=&p=10&fvj=0&vjs=3"
    },
    {
      "name": "API / Microservices Integration Engineer",
      "company": "Amway Global Business Services",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0Cbe0x8UHkXp8LlKiVzpYxP6pMbfnGq7o-nssb_TROrhsnsMEB6EBgL0O5pwyB6QNWFBD6euqwrtOxdLi0_vPinviMZw32BIkDoBL_I7sKvZQFc3a8DsiFRDqgQ0DqCuNkW4aixaULKaqWmXwd12KTJ4CW6I3KatvzDW4DaytLBaS4k6n3AeEfbbmCzjuia0poL9-AyJ0G3CNfCDAwE9Xy6MT9QcuzuMwMlwIS9bQqH2yjuVlqoG2k5D_aqSYaptPmACgjoq8jYrxcPCKq6EpoOB4oTFrZ3018MvVgHCKEU-upnG1Ix13WqW-7fOo4zd9XrqP-YI1rDZ3JIvjQIZ0Qx09mV05SeHhHYuUOijoLYjqSoACcGCtK356wooXzJaRrr6yiesDG9RANM4wvvTCXQ1QNbt89gcAJlO6-DV-iQ8-0zt3xTu3S_5j9n6jEBr85gHM4QnNOiIJ42bnznVhhSNczsOW1ylPeMl1Dwe3pwiE4ZMDRGlbojkOtRsk3Htxg5ITJfjxF6fkYQMVJeR_TqZELhnvn2_LBL4QQkKFuB_uBM525nT1o4ni-dzPjPLdvR_O8MrKVV08V_is1bLhOczrh8dzym1lTmeq6LVXzVdJPq5lzdlpevqVKgS9y4j3K5mOi7p7fsFfJtoarHW04RdY4q6_HMg7V6iZim6Nj-iL8pnxD7PPf3kikJCEMLBbDjalJRiWIZFzNCM_S0S1kT&p=11&fvj=0&vjs=3"
    },
    {
      "name": "Java Fullstack Developer",
      "company": "Sii Polska",
      "urls": "https://pl.indeed.com//rc/clk?jk=fe548fe8d4b2d9de&fccid=291f67da0c0c0d67&vjs=3"
    },
    {
      "name": "Power Grids - Web Integration Engineer – Java Developer",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=df09cfd3edd95c71&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "Power Grids - Full Stack Developer for SDM600 Solutions",
      "company": "ABB",
      "urls": "https://pl.indeed.com//rc/clk?jk=337b9ca850f242ac&fccid=38b4474838e7b7a1&vjs=3"
    },
    {
      "name": "IOS Developer",
      "company": "Hays",
      "urls": "https://pl.indeed.com//rc/clk?jk=e6bd5b7e408cbb4d&fccid=31670bef3ae6497b&vjs=3"
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
      "name": "C/C++ Windows Driver Developer (f/m/x) (relocated to Germany...",
      "company": "Avira Operations GmbH & Co. KG",
      "urls": "https://pl.indeed.com//pagead/clk?mo=r&ad=-6NYlbfkN0DVAdzec4bw6rQ4FO3PDdwz3gCZ43d7Gsr17jnu3o1g5JTNhwfE3RbVHY0lVPlBBqNPXOIYj1Ezd9hghtzsq8nw-lyWiuVbADOnxDLALfCXrZnGGv7njdcRjzViB5CZFWUKexML_nNhSvnAhN2AopMT433wenNf0uleBQRVoi_BaV0lX6HOZCvJz3BCV4IOXAP7dIpkXRH_CtdVqmPWjhwfM3rT8EgZcVbGc5IvKQMCbEq03keegXhQPFp5IKFwVvwY_10ECJRemnfoTNsN7ZUqcYTwUMr6vvvpDSVw507aw8E-bN48a5p_cMgOll3szFnwZyYbAiBX3iJfxklV6exrnVtmZsaYUZ22XCC28D5bsPC8PZiKghy9Ea8GkEG8dTpivYCMqtty0y8Y5B5yqzGxOUaJaBK0F0UP3WgPmSvIFT8fsPx4DHbvytLfxjAQap7QHcIpcltDig==&p=3&fvj=0&vjs=3"
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
    },
    {
      "name": "Technik Serwisant",
      "company": "brak nazwy",
      "urls": "https://pl.indeed.com//rc/clk?jk=f4ad0b5aeac181d2&fccid=dd616958bd9ddc12&vjs=3"
    }
  ]
}
