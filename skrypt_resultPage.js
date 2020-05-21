window.onload = function()
{ 
	var wdata = datavar;
	var tag = localStorage.getItem("FacultyID");
	document.getElementById("content").innerHTML=("Znalezionych ofert: "+wdata.WGiG_B.length+"<br><br>");
	
	for(var element in wdata.WGiG_B)
	{
		var offer = document.createElement("div");
		offer.setAttribute('class','offer_pane');
		var name = document.createElement("p");
		name.innerHTML = wdata.WGiG_B[element].name;
		var company = document.createElement("p");
		company.innerHTML = wdata.WGiG_B[element].company;
		offer.appendChild(name);
		offer.appendChild(company);
		var a = document.createElement("a");
		a.setAttribute('class','offer_href');
		a.appendChild(document.createTextNode("Sprawdź ofertę!"));
		a.href = wdata.WGiG_B[element].urls;
		offer.appendChild(a);

		document.getElementById("content").appendChild(offer);
	}


}

var datavar ={
  "WGiG_B": 
    [
      {
        "name": "Projektant Drogowy [{rekrutacja online}]",
        "company": "SYSTRA S.A. ODDZIAŁ W POLSCE",
        "urls": [ "https://www.praca.pl/projektant-drogowy-rekrutacja-online_3337230.html#e74e44fa57f1b17b1241aeb592c4df29" ]
      },
      {
        "name": "Projektant Mostowy [{rekrutacja online}]",
        "company": "SYSTRA S.A. ODDZIAŁ W POLSCE",
        "urls": [ "https://www.praca.pl/projektant-mostowy-rekrutacja-online_3337294.html#e74e44fa57f1b17b1241aeb592c4df29" ]
      },
      {
        "name": "Projektant Konstrukcji [{rekrutacja online}]",
        "company": "SYSTRA S.A. ODDZIAŁ W POLSCE",
        "urls": [ "https://www.praca.pl/projektant-konstrukcji-rekrutacja-online_3337328.html#e74e44fa57f1b17b1241aeb592c4df29" ]
      },
      {
        "name": "Inżynier budownictwa - projektant",
        "company": "Elsta",
        "urls": [ "https://www.linkedin.com/jobs/view/1764557984/?eBP=NotAvailableFromVoyagerAPI&recommendedFlavor=SCHOOL_RECRUIT&refId=6304aa8b-dc08-49d5-9116-46508111121d&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Working Student - Software Test Engineer",
        "company": "Nokia",
        "urls": [ "https://www.linkedin.com/jobs/view/1846518470/?eBP=JYMBII_JOBS_HOME_ORGANIC&recommendedFlavor=COMPANY_RECRUIT&refId=bf325970-70a0-44bd-bf7a-fffc332b517b&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Development Internship",
        "company": "Grand Parade",
        "urls": [ "https://www.linkedin.com/jobs/view/1833969832/?eBP=JYMBII_JOBS_HOME_ORGANIC&recommendedFlavor=SCHOOL_RECRUIT&refId=bf325970-70a0-44bd-bf7a-fffc332b517b&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Application Support Specialist",
        "company": "Ericsson",
        "urls": [ "https://www.linkedin.com/jobs/view/1864677486/?eBP=JYMBII_JOBS_HOME_ORGANIC&recommendedFlavor=COMPANY_RECRUIT&refId=bf325970-70a0-44bd-bf7a-fffc332b517b&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "IT Support Specialist (Remote) - $30,000/year USD",
        "company": "Crossover for Work",
        "urls": [ "https://www.linkedin.com/jobs/view/1867641316/?eBP=JYMBII_JOBS_HOME_ORGANIC&refId=bf325970-70a0-44bd-bf7a-fffc332b517b&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "DevOps Engineer",
        "company": "Sii Poland",
        "urls": [ "https://www.linkedin.com/jobs/view/1800943125/?eBP=CwEAAAFyMnUsMkdVNK0v2ywBO2dgULOHSGi1R19u9r0Lozw13wAHqnt_vjQKYG9ApMoO_Vp3jNADPpdLozm4SByNNzFcWMmB4HS25q0uBZfM16e4aAiPcx4ZUp90O0sbOEKdIE31AuBucrqo4MjAH-7gHZT1hCuIovOsYnU16D_e-uyuDr_WUqZG94lpMCs-8PjWD5AReLHvW-PZDl3AorMTw1QGu1ghIA3Sz9i4Odlllm68i4dzSXahecn-ABtaSY4B4ugvdJ6WJWO7pGYYimTtsxgo8agbAmLG5kB0EhzfM_xoWA6A-CR5pQO2OVXmhz4laxJ8nh_yn83aYU9FT0lj&recommendedFlavor=COMPANY_RECRUIT&refId=bf325970-70a0-44bd-bf7a-fffc332b517b&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Tester Automatyzujący w Javie",
        "company": "Sii Poland",
        "urls": [ "https://www.linkedin.com/jobs/view/1844828949/?eBP=CwEAAAFyMnUsMhhuHOu1TYCZHyUevNCa3cXjcUJpzm0U6ZAR33XvNiF-JBBR-1owLxkJEO4_idTSbC02JGgGD32VTJ68uApRAaP99_O5GaMQozcO73ANAcsasm-W1CMjwaBStfmm1piIjkIbUClWoEb_dIdf916dXBycsa3E1UnQVf48DiayPPgdP79p4a_WRSJBuKWqZH9EBcfnmduDk0MJto3qOZOss--VqxidDpfZWmRzseyvjOQA07xlI-dkyH4HGPnndZrtbw5933LgXUzRtdJolqsb23YLmKZ9Uw-n1TOXagn8SKVY75GuHg-zwrSqpwnbDJ2vCZwn9HnQRtk3-UniQ3fQ3Aqio8dXLCDIz3RKjAWZlNEQvnI&recommendedFlavor=COMPANY_RECRUIT&refId=bf325970-70a0-44bd-bf7a-fffc332b517b&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "R Developer (Risk IT management)",
        "company": "Accenture",
        "urls": [ "https://www.linkedin.com/jobs/view/1830505495/?eBP=CwEAAAFyMnUsMys-7uuiVYctKTM5zUWlyrclWuOxBXIn3oIA8HjRfkdZfw8gOrvwUnQJHBCleu_FPTgovywKfbUwjxnjQA3HBIip5dH8dHfnCei9DztDFw8gtDbVY3Mk36e_Hk_hVe7cjyArg6bo6NCclUISkMHUUVTIzKdseNmNIB7OPJyFFOk6nLSiWjejJknN-YQWgN14seIknG1pNCpcgoMqSKmw-z_uT89UbvLPQeYNNjUURvTRVsReC55uQwf-TGYv_Pu3XFSkGSJYMrcezmY0f00melxFZkpyIrvLG2yTzwJVNJufp9taCEsTv7sEUb4gziUr34wl1cnwkvg7&recommendedFlavor=COMPANY_RECRUIT&refId=bf325970-70a0-44bd-bf7a-fffc332b517b&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Inżynier Automatyk",
        "company": "",
        "urls": [ "https://www.linkedin.com/jobs/view/1868834930/?eBP=NotAvailableFromVoyagerAPI&refId=055cf316-df75-4755-b7b2-c96784eabbcf&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Inżynier w Zespole Automatyki i Pomiarów",
        "company": "Elsta",
        "urls": [ "https://www.linkedin.com/jobs/view/1764560376/?eBP=NotAvailableFromVoyagerAPI&recommendedFlavor=SCHOOL_RECRUIT&refId=055cf316-df75-4755-b7b2-c96784eabbcf&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Kierownik kontraktu/ inżynier budowy (O)",
        "company": "Przedsiębiorstwo Budowlane DREWLAND",
        "urls": [ "https://www.linkedin.com/jobs/view/1865055559/?eBP=NotAvailableFromVoyagerAPI&refId=055cf316-df75-4755-b7b2-c96784eabbcf&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Inżynier Budowy",
        "company": "",
        "urls": [ "https://www.linkedin.com/jobs/view/1839454213/?eBP=NotAvailableFromVoyagerAPI&refId=055cf316-df75-4755-b7b2-c96784eabbcf&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Kierownik kontraktu/ inżynier budowy (O)",
        "company": "",
        "urls": [ "https://www.linkedin.com/jobs/view/1851251514/?eBP=NotAvailableFromVoyagerAPI&refId=055cf316-df75-4755-b7b2-c96784eabbcf&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "SysOps Engineer",
        "company": "",
        "urls": [ "https://www.linkedin.com/jobs/view/1870571095/?eBP=NotAvailableFromVoyagerAPI&refId=055cf316-df75-4755-b7b2-c96784eabbcf&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Inżynier Budowy Elektroenergetyka",
        "company": "",
        "urls": [ "https://www.linkedin.com/jobs/view/1820322827/?eBP=NotAvailableFromVoyagerAPI&refId=055cf316-df75-4755-b7b2-c96784eabbcf&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Inżynier budowy (infrastruktura kolejowa)",
        "company": "GK ZUE",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=8ff37e86b231019e&fccid=092d1ee1c3a73e20&vjs=3" ]
      },
      {
        "name": "Inżynier budowy ds. harmonogramowania",
        "company": "GK ZUE",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=d6477185d20a40e6&fccid=092d1ee1c3a73e20&vjs=3" ]
      },
      {
        "name": "Inżynier budowy",
        "company": "Leaderteam Sp. z o.o.",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=766fffa27fabcd4e&fccid=42a633d01a284c44&vjs=3" ]
      },
      {
        "name": "Inżynier budowy ds. elektrycznych (kolejowa sieć trakcyjna)",
        "company": "GK ZUE",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=547e48eef077b940&fccid=092d1ee1c3a73e20&vjs=3" ]
      },
      {
        "name": "Inżynier budowy",
        "company": "TOR-KRAK",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=45ea9c17e10c90e6&fccid=7b6043ac7d4ffc11&vjs=3" ]
      },
      {
        "name": "Specjalista ds. ofertowania robót budowlanych / Inżynier bud...",
        "company": "controlprocess",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=33087ec420542a12&fccid=66aef5497a72caee&vjs=3" ]
      },
      {
        "name": "Inżynier budowy",
        "company": "General Automatic",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=d4934c90208a0436&fccid=e71c30062ae7e5a9&vjs=3" ]
      },
      {
        "name": "Inżynier Budowy",
        "company": "PILE ELBUD S.A.",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=b33a4ff0806cab3b&fccid=f5334a5ccb5ec050&vjs=3" ]
      },
      {
        "name": "Inżynier budowy ds. elektrycznych",
        "company": "BDTS",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=b50ef90fa1e5eae6&fccid=9da4ff6c9be7bd07&vjs=3" ]
      },
      {
        "name": "Inżynier/Specjalista ds. Planowania i Harmonogramowania [{rek...",
        "company": "Mostostal Warszawa",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=8f27125f2f8fade3&fccid=e5bae4b00e887d24&vjs=3" ]
      },
      {
        "name": "Inżynier budowy",
        "company": "Dach i Strych Sp. z o. o.",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=286f2594883a40b4&fccid=36f7cb5ddf6bcdf3&vjs=3" ]
      },
      {
        "name": "Inżynier Budowy - Mistrz budowy",
        "company": "Przedsiębiorstwo Robót Inżynieryjnych INKOP",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=1d3dd98638ee466d&fccid=a695411d8904b8ca&vjs=3" ]
      },
      {
        "name": "Inżynier budowy – Kierownik robót w specjalności konstrukcyj...",
        "company": "MKBUD SP. Z O.O.",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=860f2474b6a58a9c&fccid=b47f5492509d49c9&vjs=3" ]
      },
      {
        "name": "Inżynier Budowy - elewacje klinkierowe",
        "company": "Stone Group Klinkier",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=2446c33a55ad38da&fccid=678c79800cc6fc48&vjs=3" ]
      },
      {
        "name": "OFERTA PRACY - Inżynier budowy",
        "company": "Inwentech Group Sp. z o.o.",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=51950aebbc989897&fccid=c52b280a1b651574&vjs=3" ]
      },
      {
        "name": "Poszukiwany Kierownik / Inżynier",
        "company": "PL-WIDOK",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=e406076015282562&fccid=dbf779e523c7d93b&vjs=3" ]
      },
      {
        "name": "Inżynier Budowy/Zastępca Kierownika",
        "company": "TALENTHOUSE HR Advisory",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=8a66c91fd25dfbb9&fccid=7ba137e236695657&vjs=3" ]
      },
      {
        "name": "Inżynier budowy",
        "company": "Pracownicy budowlani Sp. z o.o.",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=c0bca329583f7a61&fccid=923c922bcd18b6be&vjs=3" ]
      },
      {
        "name": "Inżynier I linii wsparcia",
        "company": "\nComarch",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=595ec5364fb4bfbb&fccid=68b975ecbbd7a58d&vjs=3" ]
      },
      {
        "name": "Inżynier uczenia maszynowego",
        "company": "\nComarch",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=784586f09a63ea3e&fccid=68b975ecbbd7a58d&vjs=3" ]
      },
      {
        "name": "Kierownik budowy (infrastruktura miejska)",
        "company": "GK ZUE",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=07959f5272c9a2a7&fccid=092d1ee1c3a73e20&vjs=3" ]
      },
      {
        "name": "Inżynier Budowy ds. Instalacji Sanitarnych",
        "company": "CAVATINA HOLDING",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=8ec06f0f488cfb9b&fccid=a5285ec97fd9b16f&vjs=3" ]
      },
      {
        "name": "Inżynier budowy – branża elektryczna",
        "company": "Pracownicy budowlani Sp. z o.o.",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=c3eb3025aa50246d&fccid=923c922bcd18b6be&vjs=3" ]
      },
      {
        "name": "Kierownik Robót Drogowych lub Torowych/Inżynier Budowy",
        "company": "KZN RAIL Sp. z o.o.",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=fe99701bd1cf7c37&fccid=be21bffde79d2ca7&vjs=3" ]
      },
      {
        "name": "Inżynier Robót Elektrycznych (branża kubaturowa)",
        "company": "\nMota-Engil Central Europe S.A.",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=896d7eb034c481ad&fccid=bcf0bf1f4707d6c6&vjs=3" ]
      },
      {
        "name": "Inżynier Niezawodności",
        "company": "HRWISE",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=7f83c74c7de57131&fccid=e834468dcd30ed28&vjs=3" ]
      },
      {
        "name": "Inżynier Robót Sanitarnych",
        "company": "AQUA-SOLARTECH",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=5f6c128c10f35005&fccid=80c3b7f29739d547&vjs=3" ]
      },
      {
        "name": "INŻYNIER / KIEROWNIK ROBÓT SANITARNYCH",
        "company": "AQUA-SOLARTECH",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=8ee5ff8cfebde752&fccid=80c3b7f29739d547&vjs=3" ]
      },
      {
        "name": "Kierownik budowy",
        "company": "TOR-KRAK",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=e18bb3b66aa35ff6&fccid=7b6043ac7d4ffc11&vjs=3" ]
      },
      {
        "name": "opis oferty",
        "company": "MAXTO",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=d8971c1ec7df1655&fccid=6e3a4fe249b84d43&vjs=3" ]
      },
      {
        "name": "inżynier wsparcia technicznego HVAC",
        "company": "HVACR W",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=99800f77179232cd&fccid=95624a472b76b809&vjs=3" ]
      },
      {
        "name": "Kierownik Projektu Budowlanego",
        "company": "DZMT Sp.z o.o Sp.k",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=43560b633efa15ea&fccid=6d7ee6846966e4c1&vjs=3" ]
      },
      {
        "name": "Kierownik robót drogowych i torowych",
        "company": "GK ZUE",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=373d3be4d9cd22f2&fccid=092d1ee1c3a73e20&vjs=3" ]
      },
      {
        "name": "Data Engineer (Teradata, Informatica PC)",
        "company": "OnWelo",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=5992d662ea093be9&fccid=f0576bc2d3ad81bd&vjs=3" ]
      },
      {
        "name": "KIEROWNIK ROBÓT SANITARNYCH / HVAC",
        "company": "ACE Group Sp. z o.o.",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=88733c1dac2bec17&fccid=9c25831738ee5606&vjs=3" ]
      },
      {
        "name": "Working Student - Software Test Engineer",
        "company": "Nokia",
        "urls": [ "https://www.linkedin.com/jobs/view/1846518470/?eBP=JYMBII_JOBS_HOME_ORGANIC&recommendedFlavor=COMPANY_RECRUIT&refId=d7ba88d4-d2a0-4911-9b4d-09c59416a951&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Development Internship",
        "company": "Grand Parade",
        "urls": [ "https://www.linkedin.com/jobs/view/1833969832/?eBP=JYMBII_JOBS_HOME_ORGANIC&recommendedFlavor=SCHOOL_RECRUIT&refId=d7ba88d4-d2a0-4911-9b4d-09c59416a951&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Application Support Specialist",
        "company": "Ericsson",
        "urls": [ "https://www.linkedin.com/jobs/view/1864677486/?eBP=JYMBII_JOBS_HOME_ORGANIC&recommendedFlavor=COMPANY_RECRUIT&refId=d7ba88d4-d2a0-4911-9b4d-09c59416a951&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "IT Support Specialist (Remote) - $30,000/year USD",
        "company": "Crossover for Work",
        "urls": [ "https://www.linkedin.com/jobs/view/1867641316/?eBP=JYMBII_JOBS_HOME_ORGANIC&refId=d7ba88d4-d2a0-4911-9b4d-09c59416a951&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "DevOps Engineer",
        "company": "Sii Poland",
        "urls": [ "https://www.linkedin.com/jobs/view/1800943125/?eBP=CwEAAAFyMnXlZmUoAXFi1G7ZYKhOyMBc21RnMF8uzydId4BCluWh17jXYPMwGouJRZXaCZfaPFIlX5WgnGOPUglteYLhpRQ6789JZ-IQFJSUUsdMLBCp83IkWAxcnQgDTgIVkSJnWv02agptobgfLgqQn-yj1N1Tszn-5rq94hm2PONWK0HE1KsQF3ZUmh9kmTw4Y_jFsvrAAYB1_b_gHirf6JE9wwe0YmZPQIdZtMo_IHr-4b_2E8Ir2-BAcWP-Q9BC0v99MAW9ckLOsrwywQQrKYE6GeiWOwC-W5SoQtEkAZCILrVoHCLsYhOLGWNZaaoSm2efp2txURa9EnDRiTal&recommendedFlavor=COMPANY_RECRUIT&refId=d7ba88d4-d2a0-4911-9b4d-09c59416a951&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Tester Automatyzujący w Javie",
        "company": "Sii Poland",
        "urls": [ "https://www.linkedin.com/jobs/view/1844828949/?eBP=CwEAAAFyMnXlZvxbl-0856Z_WSjdZEwVzK-qu2maeoSA2Ki7PyHOTbt6w0Q0BnaNNY6ZPhdK5sBlDGGtTF2VSGC6sCPnDPFfrRgj9gS1GsGWB57IJCp3oTvGc7swZln-gNDIqps6lqxrDrjBB-Fj3fOhanq9ufo_i83hHSvUVrRSoYpl67RVWJk5Lqmpy4gbgn6_GcDQGQaIDIcxet7TXXTUM4pHy4nLvkWB5TplSS8uI9iS5342MOrEjBgdRsspZk307wll2FLRxjNb5sJo8cOGd4meBXVhWTZG0ph2qvZF6W7FsCVy3RgDwU2ikGGrHGwYJEDpp6hArTm_ogvKH52anXO6qNBDlKaJn1rRETwHWoQGOPRBXYIJeOk&recommendedFlavor=COMPANY_RECRUIT&refId=d7ba88d4-d2a0-4911-9b4d-09c59416a951&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "R Developer (Risk IT management)",
        "company": "Accenture",
        "urls": [ "https://www.linkedin.com/jobs/view/1830505495/?eBP=CwEAAAFyMnXlZj6NMV7U5z7p1asuYNb-gJupbH9M_uC6aJ1Uycy2QCS7xM-fYvGWmi5X59mqXCFnoDGRlfBQoewBK9_bL960Xc74wur7ps3F8_45tZDot10jhp_GEpDIOPJab6d4bLkwIQALSgKkvPMjUkjxPwg_XT8aaQUCDpuwp0mrDQ0nsehu_n6Xof7Ya98qWK8JlTfJYZVUR7SkyJG1K5fDOkS0uE3R5KSHuC0KY8bBPeBCjRw01M-U6jmdAXupmP0ZLQbZthxi20cDlylDzfN_IaaGVFaQnUqIgNIlhEJfynLankanuaMELXp-1QUAC9MpqptBmae9nQbGhjU4&recommendedFlavor=COMPANY_RECRUIT&refId=d7ba88d4-d2a0-4911-9b4d-09c59416a951&trk=flagship3_search_srp_jobs" ]
      },
      {
        "name": "Kierownik Budowy",
        "company": "EPCM",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=2d57e544bd1aeef8&fccid=a877bb8252ef54dd&vjs=3" ]
      },
      {
        "name": "Starszy Specjalista ds Ofertowania",
        "company": "controlprocess",
        "urls": [ "https://pl.indeed.com//rc/clk?jk=d1e2f39450f2d69c&fccid=66aef5497a72caee&vjs=3" ]
      }
    ]
  
	
}



