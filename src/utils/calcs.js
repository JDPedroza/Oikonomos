export function BBVA(dataDB, dataSimulation) {
	const line = dataSimulation.line;
	const creditValue = parseInt(dataSimulation.creditValue);
	const houseValue = parseInt(dataSimulation.houseValue);
	const term = parseInt(dataSimulation.term);
	const age = parseInt(dataSimulation.age);
	const ageHolder2 = parseInt(dataSimulation.ageHolder2);
	const ageHolder3 = parseInt(dataSimulation.ageHolder3);
	const nHolders = parseInt(dataSimulation.nHolders);
	const salary = parseInt(dataSimulation.salary);
	const vis = dataSimulation.vis === "vis" ? true : false;
  
	//
	if (nHolders < 1) {
	  return {
		shareValue: 0,
		rateValue: "0%",
		observation: "El numero minimo de titulares debe ser 1",
	  };
	} else if (nHolders > 3) {
	  return {
		shareValue: 0,
		rateValue: "0%",
		observation: "El numero maximo de titulares debe ser 3",
	  };
	}
	if (line === "usedHousing" || line === "newHome") {
	  if (vis) {
		//term
		if (term < 60 || term > 360) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation: "El plazo debe ser desde 60, hasta 360",
		  };
		}
		if (creditValue < 6000000 && creditValue > 98120808) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation:
			  "El Valor del credito debe ser desde $6.000.000, hasta $98.120.808",
		  };
		}
		if (creditValue > houseValue * 0.8) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation: `El Valor del credito no debe superar el 80% del valor de la vivienda, ${new Intl.NumberFormat(
			  "es-CO",
			  {
				style: "currency",
				currency: "COP",
			  }
			).format(houseValue * 0.8)}`,
		  };
		}
	  } else {
		if (term < 60 || term > 360) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation: "El plazo debe ser desde 60, hasta 360",
		  };
		}
		if (creditValue < 15000000) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation: "El Valor del credito debe ser desde $15.000.000",
		  };
		}
		if (creditValue > houseValue * 0.7) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation: `El Valor del credito no debe superar el 70% del valor de la vivienda, ${new Intl.NumberFormat(
			  "es-CO",
			  {
				style: "currency",
				currency: "COP",
			  }
			).format(houseValue * 0.7)}`,
		  };
		}
	  }
	} else if (line === "portfolioPurchase") {
	  if (vis) {
		if (term < 60 || term > 240) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation: "El plazo debe ser desde 60, hasta 240",
		  };
		}
		if (creditValue < 6000000 && creditValue > 98120808) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation:
			  "El Valor del credito debe ser desde $6.000.000, hasta $98.120.808",
		  };
		}
		if (creditValue > houseValue * 0.7) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation: `El Valor del credito no debe superar el 70% del valor de la vivienda, ${new Intl.NumberFormat(
			  "es-CO",
			  {
				style: "currency",
				currency: "COP",
			  }
			).format(houseValue * 0.7)}`,
		  };
		}
	  } else {
		if (term < 60 || term > 240) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation: "El plazo debe ser desde 60, hasta 240",
		  };
		}
		if (creditValue < 15000000) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation: "El Valor del credito debe ser desde $15.000.000",
		  };
		}
		if (creditValue > houseValue * 0.7) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation: `El Valor del credito no debe superar el 70% del valor de la vivienda, ${new Intl.NumberFormat(
			  "es-CO",
			  {
				style: "currency",
				currency: "COP",
			  }
			).format(houseValue * 0.7)}`,
		  };
		}
	  }
	} else {
	  if (vis) {
		return {
		  shareValue: 0,
		  rateValue: "0%",
		  observation: `No se maneja, Vis Leasing Habitacional Usada/Nueva`,
		};
	  } else {
		if (term < 60 || term > 240) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation: "El plazo debe ser desde 60, hasta 240",
		  };
		}
		if (creditValue < 50000000) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation: "El Valor del credito debe ser desde $50.000.000",
		  };
		}
		if (creditValue > houseValue * 0.85) {
		  return {
			shareValue: 0,
			rateValue: "0%",
			observation: `El Valor del credito no debe superar el 85% del valor de la vivienda, ${new Intl.NumberFormat(
			  "es-CO",
			  {
				style: "currency",
				currency: "COP",
			  }
			).format(houseValue * 0.85)}`,
		  };
		}
	  }
	}
  
	let rate = 0;
  
	if (line === "usedHousing" || line === "newHome") {
	  if (vis) {
		rate = 10.99;
	  } else {
		if (salary > 10000000) {
		  rate = 9.8;
		} else {
		  rate = 10;
		}
	  }
	} else if (line === "portfolioPurchase") {
	  if (vis) {
		rate = 10;
	  } else {
		console.log(term);
		if (term >= 240) {
		  rate = 8.2;
		} else if (term >= 180) {
		  rate = 7.8;
		} else if (term >= 132) {
		  rate = 7.65;
		} else if (term >= 72) {
		  rate = 7.05;
		} else if (term >= 60) {
		  rate = 6.6;
		}
	  }
	} else {
	  if (vis) {
		rate = 0;
	  } else {
		if (salary >= 20000000) {
		  rate = 8.4;
		} else if (salary >= 12000000) {
		  rate = 8.8;
		} else if (salary >= 5000000) {
		  rate = 9.1;
		} else {
		  rate = 9.3;
		}
	  }
	}
  
	let endRate = rate / 100;
	//const BBVA
	const primaAgeBBVANP = [
	  3.7702,
	  3.1963,
	  3.2221,
	  2.8937,
	  2.5545,
	  3.3981,
	  2.864,
	  2.9534,
	  3.0806,
	  2.5233,
	  2.7252,
	  2.9581,
	  2.536,
	  2.3309,
	  2.4487,
	  2.4844,
	  2.6235,
	  2.63568,
	  2.7946,
	  2.9217,
	  3.0674,
	  3.1506,
	  2.9989,
	  3.0133,
	  2.8933,
	  3.4001,
	  3.2304,
	  3.6195,
	  3.3767,
	  3.3083,
	  3.8281,
	  3.2734,
	  3.4197,
	  3.4433,
	  3.9308,
	  3.6431,
	  4.0116,
	  4.7056,
	  4.6125,
	  5.0133,
	  5.9117,
	  6.1448,
	  6.9011,
	  6.7714,
	  7.2788,
	  9.0512,
	  7.7229,
	  9.1043,
	  9.8422,
	  10.8525,
	  11.0009,
	  11.999,
	  13.6152,
	  14.8717,
	  12.9206,
	  13.0668,
	  17.4849,
	  13.7482,
	  18.0503,
	  21.9524,
	  23.7475,
	  23.8999,
	  96.5421,
	  136.8793,
	  120.9477,
	  164.0636,
	  187.3165,
	  212.2135,
	  242.0856,
	  277.5042,
	  317.5494,
	  363.3924,
	  413.8991,
	];
  
	const primaAgeBBVAP = [
	  3.3932,
	  2.8766,
	  2.8999,
	  2.6043,
	  2.2991,
	  3.0583,
	  2.5776,
	  2.658,
	  2.7726,
	  2.2709,
	  2.4527,
	  2.6623,
	  2.2824,
	  2.0978,
	  2.2039,
	  2.236,
	  2.3612,
	  2.3721,
	  2.5151,
	  2.6296,
	  2.7606,
	  2.8355,
	  2.699,
	  2.7119,
	  2.6039,
	  3.0601,
	  2.9074,
	  3.2576,
	  3.039,
	  2.9775,
	  3.4452,
	  2.946,
	  3.0777,
	  3.099,
	  3.5377,
	  3.2788,
	  3.6104,
	  4.2351,
	  4.1512,
	  4.5119,
	  5.3205,
	  5.5303,
	  6.211,
	  6.0942,
	  6.5509,
	  8.1461,
	  6.9506,
	  8.1939,
	  8.858,
	  9.7672,
	  9.9008,
	  10.7991,
	  12.2537,
	  13.3845,
	  11.6286,
	  11.7601,
	  15.7364,
	  12.3734,
	  16.2453,
	  19.7571,
	  21.3728,
	  21.5099,
	  86.8879,
	  123.1913,
	  108.8529,
	  147.6573,
	  168.5848,
	  190.9921,
	  217.8771,
	  249.7537,
	  285.7944,
	  327.0532,
	  372.5092,
	];
  
	let subTotalLifeBBVA = 0;
	console.log(salary);
	if (salary > 10000000) {
	  console.log("Premium");
	  if (nHolders === 1) {
		subTotalLifeBBVA =
		  (parseInt(creditValue) * primaAgeBBVAP[parseInt(age) - 18]) / 10000;
	  } else if (nHolders === 2) {
		subTotalLifeBBVA =
		  (parseInt(creditValue) * primaAgeBBVAP[parseInt(age) - 18]) / 10000 +
		  (parseInt(creditValue) * primaAgeBBVAP[parseInt(ageHolder2) - 18]) /
			10000;
	  } else {
		subTotalLifeBBVA =
		  (parseInt(creditValue) * primaAgeBBVAP[parseInt(age) - 18]) / 10000 +
		  (parseInt(creditValue) * primaAgeBBVAP[parseInt(ageHolder2) - 18]) /
			10000 +
		  (parseInt(creditValue) * primaAgeBBVAP[parseInt(ageHolder3) - 18]) /
			10000;
	  }
	} else {
	  console.log("NoPremium");
	  if (nHolders === 1) {
		subTotalLifeBBVA =
		  (parseInt(creditValue) * primaAgeBBVANP[parseInt(age) - 18]) / 10000;
	  } else if (nHolders === 2) {
		subTotalLifeBBVA =
		  (parseInt(creditValue) * primaAgeBBVANP[parseInt(age) - 18]) / 10000 +
		  (parseInt(creditValue) * primaAgeBBVANP[parseInt(ageHolder2) - 18]) /
			10000;
	  } else {
		subTotalLifeBBVA =
		  (parseInt(creditValue) * primaAgeBBVANP[parseInt(age) - 18]) / 10000 +
		  (parseInt(creditValue) * primaAgeBBVANP[parseInt(ageHolder2) - 18]) /
			10000 +
		  (parseInt(creditValue) * primaAgeBBVANP[parseInt(ageHolder3) - 18]) /
			10000;
	  }
	}
  
	let subTotalHouseBBVA = ((parseInt(houseValue) * 0.7 * 2.57) / 10000) * 1.19;
  
	let totalSureBBVA = subTotalLifeBBVA + subTotalHouseBBVA;
  
	let imBBVA = Math.pow(1 + endRate, 1 / 12) - 1;
	let shareBBVA = PMT(imBBVA, term, -creditValue);
	return {
	  shareValue: new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
	  }).format(Math.round(shareBBVA + totalSureBBVA)),
	  rateValue: `${rate}%`,
	  subTotalLife: new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
	  }).format(subTotalLifeBBVA),
	  subTotalHouse: new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
	  }).format(subTotalHouseBBVA),
	};
  }
  
  export function Itau(dataDB, dataSimulation) {
	const line = dataSimulation.line;
	const creditValue = parseInt(dataSimulation.creditValue);
	const houseValue = parseInt(dataSimulation.houseValue);
	const term = parseInt(dataSimulation.term);
	const vis = dataSimulation.vis === "vis" ? true : false;
	const nHolders = parseInt(dataSimulation.nHolders);
  
	if (nHolders < 1) {
	  return {
		shareValue: 0,
		rateValue: "0%",
		observation: "El numero minimo de titulares debe ser 1",
	  };
	} else if (nHolders > 3) {
	  return {
		shareValue: 0,
		rateValue: "0%",
		observation: "El numero maximo de titulares debe ser 3",
	  };
	}
	//validations
	if (vis) {
	  return {
		shareValue: 0,
		rateValue: "0%",
		observation: "No se maneja VIS, en ninguna de lineas de credito",
	  };
	} else if (
	  line === "usedHousing" ||
	  line === "newHome" ||
	  line === "portfolioPurchase"
	) {
	  console.log("No vis itau");
	  if (creditValue > houseValue * 0.7) {
		return {
		  shareValue: 0,
		  rateValue: "0%",
		  observation: `El Valor del credito no debe superar el 70% del valor de la vivienda, ${new Intl.NumberFormat(
			"es-CO",
			{
			  style: "currency",
			  currency: "COP",
			}
		  ).format(houseValue * 0.7)}`,
		};
	  }
	} else if (creditValue > houseValue * 0.8) {
	  return {
		shareValue: 0,
		rateValue: "0%",
		observation: `El Valor del credito no debe superar el 80% del valor de la vivienda, ${new Intl.NumberFormat(
		  "es-CO",
		  {
			style: "currency",
			currency: "COP",
		  }
		).format(houseValue * 0.8)}`,
	  };
	}
  
	let rate = 0;
	if (line === "usedHousing" || line === "newHome") {
	  rate = 9.5;
	} else if (line === "portfolioPurchase") {
	  rate = 9;
	} else {
	  rate = 9.4;
	}
	let endRate = rate / 100;
  
	//calc Itau
	let imItau = Math.pow(1 + endRate, 1 / 12) - 1;
	let subTotalLifeItau = ((creditValue * 0.17) / 1000) * nHolders;
  
	let subTotalHouseItau =
	  (Math.round(houseValue * 1.411765) / 1000 / 12) * 0.19 +
	  Math.round(houseValue * 1.411765) / 1000 / 12;
  
	let totalSureItau = subTotalLifeItau + subTotalHouseItau;
	let shareItau = PMT(
	  imItau,
	  term,
	  -creditValue,
	  Math.round(creditValue * 0.0001),
	  0
	);
	return {
	  shareValue: new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
	  }).format(Math.round(shareItau + totalSureItau)),
	  rateValue: `${rate}%`,
	  incomeProve: (shareItau + totalSureItau) / 0.3,
	  subTotalLife: new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
	  }).format(subTotalLifeItau),
	  subTotalHouse: new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
	  }).format(subTotalHouseItau),
	};
  }
  
  export function Colpatria(dataDB, dataSimulation) {
	const line = dataSimulation.line;
	const creditValue = parseInt(dataSimulation.creditValue);
	const houseValue = parseInt(dataSimulation.houseValue);
	const term = parseInt(dataSimulation.term);
	const age = parseInt(dataSimulation.age);
	const ageHolder2 = parseInt(dataSimulation.ageHolder2);
	const ageHolder3 = parseInt(dataSimulation.ageHolder3);
	const nHolders = parseInt(dataSimulation.nHolders);
	const vis = dataSimulation.vis === "vis" ? true : false;
  
	if (nHolders < 1) {
	  return {
		shareValue: 0,
		rateValue: "0%",
		observation: "El numero minimo de titulares debe ser 1",
	  };
	} else if (nHolders > 3) {
	  return {
		shareValue: 0,
		rateValue: "0%",
		observation: "El numero maximo de titulares debe ser 3",
	  };
	}
	//validations
	if (vis) {
	  if (
		line === "portfolioPurchase" ||
		line === "newHousingLeasing" ||
		line === "usedHousingLeasing"
	  ) {
		return {
		  shareValue: 0,
		  rateValue: "0%",
		  observation: `No se maneja "VIS", en Compra de Cartera y Leasing Habitacional Usada/Nueva`,
		};
	  }
	} else if (
	  line === "usedHousing" ||
	  line === "newHome" ||
	  line === "portfolioPurchase"
	) {
	  if (creditValue > houseValue * 0.7) {
		return {
		  shareValue: 0,
		  rateValue: "0%",
		  observation: `El Valor del credito no debe superar el 70% del valor de la vivienda, ${new Intl.NumberFormat(
			"es-CO",
			{
			  style: "currency",
			  currency: "COP",
			}
		  ).format(houseValue * 0.7)}`,
		};
	  }
	} else {
	  if (creditValue > houseValue * 0.8) {
		return {
		  shareValue: 0,
		  rateValue: "0%",
		  observation: `El Valor del credito no debe superar el 80% del valor de la vivienda, ${new Intl.NumberFormat(
			"es-CO",
			{
			  style: "currency",
			  currency: "COP",
			}
		  ).format(houseValue * 0.8)}`,
		};
	  }
	}
  
	let rate = 0;
  
	let ltv = false;
	if (creditValue <= houseValue / 2) {
	  ltv = true;
	} else {
	  ltv = false;
	}
  
	if (line === "usedHousing" || line === "newHome") {
	  if (vis) {
		if (ltv) {
		  rate = 11.5;
		} else {
		  rate = 12.0;
		}
	  } else {
		if (creditValue < 160000000) {
		  if (ltv) {
			rate = 11.3;
		  } else {
			rate = 11.7;
		  }
		} else {
		  if (creditValue < 500000000) {
			if (ltv) {
			  rate = 10.5;
			} else {
			  rate = 10.8;
			}
		  } else {
			if (ltv) {
			  rate = 9.3;
			} else {
			  rate = 10;
			}
		  }
		}
	  }
	} else if (line === "portfolioPurchase") {
	  if (vis) {
		rate = 0;
	  } else {
		if (ltv) {
		  rate = 9.8;
		} else {
		  rate = 10;
		}
	  }
	} else {
	  if (vis) {
		rate = 0;
	  } else if (creditValue < 160000000) {
		if (ltv) {
		  rate = 11.4;
		} else {
		  rate = 12.2;
		}
	  } else {
		if (creditValue < 500000000) {
		  if (ltv) {
			rate = 11;
		  } else {
			rate = 11.1;
		  }
		} else {
		  if (ltv) {
			rate = 10.4;
		  } else {
			rate = 10.7;
		  }
		}
	  }
	}
  
	let endRate = rate / 100;
  
	//calc Colpatria
	const primaAgeColpatria = [
	  0.000155,
	  0.000155,
	  0.000155,
	  0.000156,
	  0.000158,
	  0.00016,
	  0.00016,
	  0.000164,
	  0.000168,
	  0.000173,
	  0.000174,
	  0.000177,
	  0.000185,
	  0.00019,
	  0.000204,
	  0.00021,
	  0.000214,
	  0.000219,
	  0.000238,
	  0.000245,
	  0.000251,
	  0.000258,
	  0.000266,
	  0.000271,
	  0.000338,
	  0.000327,
	  0.000341,
	  0.000358,
	  0.000381,
	  0.000411,
	  0.000448,
	  0.000489,
	  0.000534,
	  0.000582,
	  0.000629,
	  0.000674,
	  0.000683,
	  0.000717,
	  0.000745,
	  0.000765,
	  0.000792,
	  0.000815,
	  0.000861,
	  0.000953,
	  0.001041,
	  0.001106,
	  0.001225,
	  0.001358,
	  0.001505,
	  0.001661,
	  0.001818,
	  0.001975,
	  0.002086,
	  0.002261,
	  0.002436,
	  0.002657,
	  0.002958,
	  0.003313,
	  0.003803,
	  0.004141,
	  0.004633,
	  0.00537,
	  0.006068,
	  0.006858,
	  0.00775,
	  0.008602,
	  0.009549,
	  0.009549,
	  0.010599,
	  0.010599,
	  0.011765,
	  0.011765,
	  0.011765,
	];
  
	let subTotalLifeColpatria = 0;
	if (nHolders === 1) {
	  subTotalLifeColpatria = creditValue * primaAgeColpatria[age - 18];
	} else if (nHolders === 2) {
	  subTotalLifeColpatria =
		creditValue * primaAgeColpatria[age - 18] +
		creditValue * primaAgeColpatria[ageHolder2 - 18];
	} else {
	  subTotalLifeColpatria =
		creditValue * primaAgeColpatria[age - 18] +
		creditValue * primaAgeColpatria[ageHolder2 - 18] +
		creditValue * primaAgeColpatria[ageHolder3 - 18];
	}
	let subTotalHouseColpatria = (180 / 1000000) * houseValue;
	let totalSureColpatria = subTotalLifeColpatria + subTotalHouseColpatria;
  
	let imColpatria = Math.pow(1 + endRate, 1 / 12) - 1;
	let desplamientoValue = Math.round(
	  (Math.pow(1 + endRate, 1 / 360) - 1) * creditValue * 2
	);
	let shareColpatria = PMT(
	  imColpatria,
	  term,
	  -(creditValue + desplamientoValue)
	);
	return {
	  shareValue: new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
	  }).format(Math.round(shareColpatria + totalSureColpatria)),
	  rateValue: `${rate}%`,
	  subTotalLife: new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
	  }).format(subTotalLifeColpatria),
	  subTotalHouse: new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
	  }).format(subTotalHouseColpatria),
	};
  }
  
  function PMT(rate, nper, pv, fv, type) {
	if (!fv) fv = 0;
	if (!type) type = 0;
  
	if (rate === 0) return -(pv + fv) / nper;
  
	var pvif = Math.pow(1 + rate, nper);
	var pmt = (rate / (pvif - 1)) * -(pv * pvif + fv);
  
	if (type === 1) {
	  pmt /= 1 + rate;
	}
  
	return pmt;
  }
  