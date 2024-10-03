q = [
    [
    'Water fleas, wood lice and barnacles belong to the group',
    'insecta',
    'chilopoda',
    'crustacea',
    'arachnida.'
    ],
    [
    'Which of the following organisms does not exist as a single free living cell? ',
    'volvox',
    'amoeba',
    'chlamydomonas',
    'paramecium.'
    ],
    [
    'An association between the root nodule of a leguminous plant and Rhizobium sp. is known as',
    'parasitism',
    'symbiosis',
    'commensalism',
    'mycorrhiza'
    ],
    [
    'Which of the following groups is the most advanced?',
    'Thallophytes',
    'Pteridophytes',
    'Gymnosperms',
    'Bryophytes'
    ],
    [//5
    'The mode of feeding in Amoeba and Hydra is',
    'autotrophic',
    'heterotrophic',
    'symbiotic',
    'holophytic.'
    ],
    [
    'Viviparity occurs mainly in the',
    'aves',
    'amphibians',
    'mammals',
    'reptiles'
    ],
    [
    'Use the diagram below to answer the question.<br /><img src="../past/images/biology1.jpg" width="100%" /><br />7. In ferns, the structure above is equivalent to the',
    'gametophyte generation of a moss',
    'sporophyte generation of a moss',
    'sporangium of a moss',
    'zygote of a moss'
    ],
    [
    'Use the diagram below to answer the question.<br /><img src="../past/images/biology1.jpg" width="100%" /><br />8. The structures labeled II and III respectively are',
    'sporophyte and sori',
    'annulus and stalk of sporangium',
    'female organs and rhizoid',
    'male organs and rhizoid.'
    ],
    [
    'Most monocots are easily recognized by their',
    'long and sword-like leaves',
    'long and palm-like leaves ',
    'short leaves with petioles',
    'short leaves with many veinlets.'
    ],
    [//10
    'Amphibians are normally found',
    'in water',
    'on moist land',
    'in water and moist land',
    'on dry land and in water.'
    ],
    [
    'The jointed structure in insects that bears organs which are sensitive to touch, smell and vibration is the',
    'antenna',
    'abdomen',
    'maxilla',
    'labium'
    ],
    [
    'The veins of the leaf are formed by the',
    'spongy mesophyll',
    'palisade tissue ',
    'cambium cells',
    'vascular bundles.'
    ],
    [
    'When specimen X is mixed with few drops of iodine solution, the appearance of a blue-black colour confirms X is',
    'sucrose',
    'glucose',
    'starch',
    'galactose.'
    ],
    [
    'The enzyme invertase will hydrolyze sucrose to give',
    'mannose and galactose',
    'glucose and fructose ',
    'maltose and glucose',
    'glycerol and fatty acid.'
    ],
    [//....15
    'Salts and water are absorbed in the roots and transported to the leaves by',
    'osmosis through the phloem tissues',
    'diffusion through the phloem tissues',
    'osmosis through the xylem tissues',
    'diffusion through the xylem tissues.'
    ],
    [
    'The transportation of oxygen and carbon (IV) oxide in mammals is carried out by',
    'phagocytes',
    'leucocytes',
    'erythrocytes',
    'thrombocytes.'
    ],
    [
    'The gas produced during tissues respiration can be identified by using',
    'sodium hydroxide',
    'calcium carbonate',
    'copper sulphate',
    'calcium hydroxide'
    ],
    [
    'When yeast respires anaerobically it converts simple sugars to carbon (IV) oxide and',
    'acid',
    'water',
    'oxygen',
    'alcohol.'
    ],
    [
    'Urea formation occurs in the',
    'liver',
    'kidney',
    'heart',
    'lung.'
    ],
    [//...20
    'Use the diagram below to answer questions 20.<Br /><img src="../past/images/BIO2.jpg" width="100%" alt="biology diagram" /><br />The structure above represents a',
    'thoracic vertebra',
    'cervical vertebra',
    'caudal vertebra',
    'lumbar vertebra.'
    ],
    [
    'A seedling grown in the dark is likely to be',
    'sturdy',
    'stunted',
    'dormant',
    'etiolated.'
    ],
    [
    'The center for learning and memory in the human brain is the',
    'olfactory lobe',
    'cerebrum',
    'medulla oblongata',
    'cerebellum.'
    ],
    [
    'The physical space occupied by an organism together with its functional role in the community can be described as',
    'niche',
    'environment',
    'habitat',
    'biome.'
    ],
    [
    'The hygrometer is used for measuring',
    'rainfall',
    'relative humidity',
    'salinity',
    'specific gravity.'
    ],
    [//...25
    'The highest percentage of energy in an ecosystem occurs at level of the',
    'producers',
    'primary consumers',
    'secondary consumers ',
    'decomposer.'
    ]
];
//debugiing
// q=[
// 	['1','1','1','1','1'],
// 	['2','2','2','2','2'],
// 	['3','3','3','3','3'],
// 	['4','4','4','4','4'],
// ];
c_sc=0;guage=2;
var A='A';B='B';C='C';D='D';mk=0;ANS_handle=0;
var ANS = [
C,A,B,C,B,
C,A,D,A,C,
A,D,C,B,C,
C,C,C,D,B,
D,B,A,B,A];
//ANS = [A,B,C,D];
function opBtn(o){
    console.log(ANS[(rAN[(ANS_handle)])]+'--'+n);
	if(o==ANS[(rAN[(ANS_handle)])]){mk++;
		mk2='correctx';
		c_sc++;
		if(c_sc > guage){
			guage=guage+2;
			$('#card_entrance').slideDown();
            //http://localhost/00dracapp00drac/win_recharge/fname/lname/score/pnumber

            ph =localStorage.txtPhone;
            nama = localStorage.txtName;
            nna = nama.split('_');
            send_sco(nna[0],nna[1],mk+'_'+(n+1),ph);
			last_question='off';
			document.getElementById('sl').style.display='none';
			document.getElementById('sl2').style.display='none';
		}
	}else{mk2='wrongx';c_sc=0;}
	var scot=document.getElementById('sco').innerHTML;
	document.getElementById('sco').innerHTML='<tr><td>'+(ANS_handle+1)+'</td><td>'+o+'</td><td><img src="image/'+mk2+'.jpg" /></td></tr>'+scot;
	$('#sco2').html('<sup>'+mk+'</sup>/<sub>50</sub>')
	//document.getElementById('quePanel').style.display='none';
	next();
}
