const data1 = [
  [5, 9],
  [1, 4],
  [3, 7],
];

const data2 = [
  "6077888 6090064",
  "4871999 4878615",
  "6946038 6955143",
  "4328881 4337634",
  "1931352 1940408",
  "454117 462732",
  "6296524 6307990",
  "7212884 7222635",
  "6199142 6211836",
  "2544278 2551731",
  "5138514 5144975",
  "768019 777521",
  "3349408 3360238",
  "6502417 6515212",
  "2671322 2679911",
  "5679621 5689974",
  "5064564 5076236",
  "3342118 3352147",
  "1387927 1397756",
  "2457400 2463717",
  "3848970 3856134",
  "116341 128077",
  "5937389 5945447",
  "4127349 4134028",
  "6184191 6192933",
  "4858173 4866819",
  "7374961 7384469",
  "87442 97361",
  "6575998 6586073",
  "5383593 5392982",
  "2131167 2136700",
  "2395079 2403449",
  "3995848 4007209",
  "2550877 2560559",
  "1542385 1547530",
  "1659048 1668747",
  "4677195 4683751",
  "7383165 7391593",
  "1679902 1687976",
  "3898350 3905038",
  "5151582 5158637",
  "6155355 6164593",
  "4244672 4256559",
  "2143137 2150638",
  "334878 343910",
  "6126558 6137353",
  "5461990 5472535",
  "2603720 2615290",
  "282961 293556",
  "7166949 7174721",
  "606581 613329",
  "7020310 7028944",
  "4866181 4873395",
  "3298037 3308939",
  "417901 424897",
  "3397083 3408596",
  "2832591 2841639",
  "1729236 1735714",
  "1162944 1171699",
  "2204180 2211483",
  "6088716 6095570",
  "4831319 4842933",
  "3744638 3751970",
  "1457395 1465909",
  "5044336 5051538",
  "7342144 7351222",
  "6511024 6524651",
  "3185626 3193858",
  "6100885 6107670",
  "5128514 5138655",
  "2759588 2768201",
  "537080 545920",
  "6629512 6640383",
  "6569159 6576770",
  "3034610 3041720",
  "753241 763462",
  "7098673 7111139",
  "1417868 1424680",
  "7221454 7231293",
  "5709800 5717896",
  "7028716 7034194",
  "1723755 1730461",
  "7405991 7414456",
  "5995908 6007299",
  "5733513 5743264",
  "1505123 1512289",
  "2621144 2633123",
  "3990382 3998375",
  "5188115 5196507",
  "2315355 2326534",
  "4952906 4961662",
  "7256151 7263923",
  "6763167 6772231",
  "348712 358637",
  "1867294 1873974",
  "7142886 7155483",
  "1152655 1163161",
  "683885 691124",
  "7270363 7279350",
  "7292028 7304089",
  "1605964 1616860",
  "4690413 4700376",
  "17932 24173",
  "2310665 2316964",
  "4713074 4721659",
  "6385892 6396322",
  "5100236 5111253",
  "2583452 2593069",
  "899186 908811",
  "30444 36594",
  "2018172 2027986",
  "5180029 5189717",
  "4286471 4296782",
  "7062949 7071928",
  "1208517 1217586",
  "7011798 7021598",
  "6177278 6185702",
  "2410647 2419368",
  "4028445 4039142",
  "3314788 3324840",
  "5339971 5346737",
  "4203966 4214773",
  "6017972 6026304",
  "6392978 6403268",
  "3374689 3385187",
  "7173309 7181623",
  "6473931 6486046",
  "3666124 3678415",
  "2062423 2070945",
  "389448 398462",
  "3055355 3063931",
  "3487089 3494822",
  "1381154 1391136",
  "4991187 5000715",
  "1862643 1868378",
  "1894655 1903025",
  "3143365 3151346",
  "4943193 4955573",
  "292986 301653",
  "2710494 2723355",
  "6868560 6878062",
  "3135663 3143612",
  "4697641 4707846",
  "1558135 1565655",
  "2077844 2088064",
  "6779500 6788832",
  "1987154 1999487",
  "2367739 2376491",
  "6352059 6358536",
  "2485204 2496856",
  "4932221 4939358",
  "4889958 4896138",
  "164059 172151",
  "2192581 2204521",
  "6823442 6831046",
  "1552624 1560634",
  "3886609 3898523",
  "3841637 3849821",
  "4375986 4383769",
  "5872595 5878860",
  "4683104 4691248",
  "4461901 4472406",
  "6246271 6255888",
  "2106401 2112659",
  "4133348 4142766",
  "5612104 5620493",
  "5208536 5220542",
  "2215805 2223568",
  "1254682 1262840",
  "3041570 3050153",
  "7134770 7146071",
  "949089 957895",
  "6585470 6594180",
  "2172484 2181275",
  "5563741 5574865",
  "5513171 5521423",
  "4794082 4802727",
  "4140272 4148639",
  "4254325 4262049",
  "1516219 1526652",
  "2330265 2338892",
  "7048241 7056314",
  "3207721 3215775",
  "3128866 3138208",
  "4274039 4282317",
  "3200514 3209196",
  "3463489 3474541",
  "3540250 3547601",
  "470640 477668",
  "1023892 1032625",
  "551774 560150",
  "4261490 4267998",
  "2746050 2755343",
  "1695221 1706483",
  "4180481 4190866",
  "4443236 4453793",
  "6593500 6602906",
  "6037736 6047016",
  "5427679 5438291",
  "3231375 3243097",
  "4213056 4219887",
  "1039581 1049512",
  "7358227 7369169",
  "2703267 2714042",
  "1359411 1369162",
  "1339434 1351321",
  "321762 329554",
  "2866683 2876550",
  "5050374 5061484",
  "921740 933910",
  "7435054 7444486",
  "2514421 2522407",
  "1770568 1776762",
  "1489759 1498097",
  "512914 519770",
  "2660887 2672942",
  "5921350 5929779",
  "4753275 4760472",
  "372707 382855",
  "6654117 6662553",
  "798225 806412",
  "6638519 6645787",
  "6112076 6117985",
  "240822 248052",
  "4351001 4362152",
  "4049271 4058983",
  "1714584 1725335",
  "2010350 2018333",
  "2086909 2096442",
  "7054838 7064651",
  "140886 148037",
  "7231053 7236776",
  "4539504 4548252",
  "931349 942760",
  "94184 103590",
  "2914186 2920825",
  "6423869 6431888",
  "5773811 5782583",
  "6877682 6883248",
  "275369 283827",
  "5805651 5812424",
  "882125 894412",
  "4469367 4479379",
  "6379095 6388418",
  "3651589 3663068",
  "4501408 4510984",
  "1105548 1114704",
  "3788110 3799210",
  "2721473 2733304",
  "7261406 7272556",
  "1829315 1838329",
  "1511551 1517858",
  "1751287 1758993",
  "1276549 1284158",
  "157859 166027",
  "4190848 4199277",
  "6991643 6999733",
  "485760 496640",
  "7469542 7480983",
  "2632225 2640661",
  "4895735 4903022",
  "61197 71034",
  "366041 374404",
  "5655026 5660385",
  "611457 620934",
  "5722852 5733945",
  "575728 587985",
  "3472829 3480493",
  "6279872 6290428",
  "3813033 3822502",
  "3255464 3264937",
  "7204413 7214478",
  "3618806 3626772",
  "4295512 4303548",
  "7420592 7426453",
  "5790308 5799133",
  "6539759 6546485",
  "7349655 7360882",
  "3819448 3831135",
  "6960020 6971000",
  "6544485 6552714",
  "6094675 6100969",
  "3626152 3635074",
  "4808574 4815406",
  "3512814 3522876",
  "5171223 5180440",
  "1837770 1846197",
  "2382219 2392398",
  "3556845 3568862",
  "2375411 2385467",
  "1195354 1202737",
  "2907571 2914877",
  "7285887 7294312",
  "3071164 3078481",
  "2788916 2799439",
  "5022736 5031340",
  "745936 753706",
  "2805835 2817884",
  "4640414 4649174",
  "6807056 6816701",
  "1465565 1475380",
  "6430638 6437763",
  "3329080 3336570",
  "1624353 1633721",
  "80577 88905",
  "2222094 2231950",
  "1995708 2006944",
  "3879511 3888771",
  "1184838 1191430",
  "5605160 5614938",
  "1451132 1460431",
  "6003518 6013609",
  "1247025 1257480",
  "4103663 4115491",
  "5142985 5151663",
  "2520769 2528580",
  "3242536 3249483",
  "4309332 4315421",
  "711885 721094",
  "3807669 3813074",
  "1926780 1933378",
  "3334981 3343222",
  "593060 602161",
  "4088870 4098466",
  "6058589 6064221",
  "2347303 2354790",
  "3149100 3156781",
  "4389708 4398100",
  "4418440 4430713",
  "4882638 4890902",
  "2185895 2194813",
  "2738918 2747057",
  "6218660 6227947",
  "3160516 3172252",
  "6266413 6274941",
  "2920130 2929854",
  "4831 10888",
  "5202106 5210914",
  "10034 18681",
  "7455520 7463790",
  "4742123 4748381",
  "1569926 1576034",
  "206139 215494",
  "6031437 6040466",
  "40847 47870",
  "585918 594333",
  "4961570 4970620",
  "2479067 2486871",
  "940763 950902",
  "1331574 1341690",
  "1430389 1442684",
  "7034042 7041747",
  "2237413 2249724",
  "4156203 4167490",
  "6441683 6453259",
  "2874755 2886123",
  "1441292 1451142",
  "6117530 6127764",
  "1633385 1643480",
  "998107 1008433",
  "7318209 7330399",
  "4564569 4572451",
  "1641219 1651979",
  "2686238 2694821",
  "2389566 2397497",
  "3478716 3488939",
  "2885970 2892248",
  "3713584 3725961",
  "5828000 5838910",
  "6815400 6826004",
  "3642821 3653149",
  "3390759 3399254",
  "4968881 4975995",
  "3324711 3331011",
  "2117067 2126171",
  "6845220 6854102",
  "2156610 2165558",
  "4476217 4487550",
  "7181144 7190229",
  "5117279 5128724",
  "3601041 3612317",
  "7162039 7168597",
  "3584746 3592921",
  "7398917 7406796",
  "1845496 1855203",
  "2825567 2832973",
  "5540862 5548024",
  "6134571 6142600",
  "1190150 1197394",
  "5750387 5762040",
  "3100111 3109567",
  "1178548 1185926",
  "2771896 2783478",
  "7412126 7421329",
  "7425107 7436398",
  "6436228 6444382",
  "5526665 5535202",
  "3214862 3224153",
  "1135337 1146659",
  "6304534 6315728",
  "2967712 2976439",
  "4655753 4662902",
  "3634505 3644665",
  "2817278 2826017",
  "4842768 4849889",
  "3013288 3023353",
  "5311376 5321219",
  "1372838 1383862",
  "5498528 5507961",
  "299604 307328",
  "1733970 1743528",
  "4337021 4345362",
  "5220139 5226070",
  "1763826 1771071",
  "7478568 7488917",
  "439148 450582",
  "6614770 6624079",
  "1047507 1054880",
  "1424304 1432739",
  "5006591 5015454",
  "265500 275383",
  "3545598 3553708",
  "47369 55437",
  "431620 442307",
  "2537280 2546694",
  "1812406 1821689",
  "182069 191880",
  "4079879 4090951",
  "5948768 5957102",
  "866823 876215",
  "558264 569936",
  "2574039 2583552",
  "3284290 3293605",
  "2994700 3006587",
  "4802049 4809249",
  "2645363 2654591",
  "5978295 5989022",
  "5253870 5261079",
  "3725845 3732466",
  "7448846 7455854",
  "2677208 2687532",
  "5454033 5465054",
  "1239301 1248248",
  "1261338 1269601",
  "5091084 5101563",
  "3864184 3874225",
  "153846 159298",
  "6259781 6267185",
  "5898726 5907045",
  "2951220 2961361",
  "3659430 3668596",
  "5389931 5398641",
  "3782679 3790712",
  "4923963 4932247",
  "5225935 5235946",
  "4404256 4411769",
  "4313785 4321708",
  "1820165 1831478",
  "6449851 6462939",
  "5659662 5668219",
  "3433560 3441233",
  "704461 713098",
  "5395944 5405442",
  "1066459 1077208",
  "1267533 1277791",
  "3684180 3692177",
  "4147479 4157807",
  "196568 207740",
  "24153 31535",
  "4492768 4502204",
  "7091638 7101237",
  "3115012 3124433",
];

const fs = require("fs");
var data = fs.readFileSync("1.in", "utf-8").split("\n");
var newTest = [];
for (let i = 1; i < data.length - 1; i++) {
  data[i] = data[i].split(/[ ,]+/).join(",");
  data[i] = data[i].replace(/'/, "[").replace(/'/, "]");
  newTest.push(data[i]);
}

const newArray = data2.sort((a, b) => a[0] - b[0]);
const logic = () => {
  var allDetail = [];

  for (let i = 0; i < newArray.length; i++) {
    if (i === 0) {
      if (newArray[i][1] > newArray[i + 1][0]) {
        allDetail.push(
          newArray[i][1] -
            newArray[i][0] -
            (newArray[i][1] - newArray[i + 1][0])
        );
      } else {
        allDetail.push(newArray[i][1] - newArray[i][0]);
      }
    } else if (i > 0 && i < newArray.length - 1) {
      if (
        newArray[i - 1][1] > newArray[i][0] &&
        newArray[i + 1][0] < newArray[i][1]
      ) {
        allDetail.push(
          newArray[i][1] -
            newArray[i][0] -
            (newArray[i - 1][1] - newArray[i][0]) -
            (newArray[i][1] - newArray[i + 1][0])
        );
      } else if (
        newArray[i - 1][1] > newArray[i][0] &&
        newArray[i + 1][0] > newArray[i][1]
      ) {
        allDetail.push(
          newArray[i][1] -
            newArray[i][0] -
            (newArray[i - 1][1] - newArray[i][0])
        );
      } else if (
        newArray[i - 1][1] < newArray[i][0] &&
        newArray[i + 1][0] < newArray[i][1]
      ) {
        allDetail.push(
          newArray[i][1] -
            newArray[i][0] -
            (newArray[i][1] - newArray[i + 1][0])
        );
      } else if (
        newArray[i - 1][1] < newArray[i][0] &&
        newArray[i + 1][0] > newArray[i][1]
      ) {
        allDetail.push(allDetail.push(newArray[i][1] - newArray[i][0]));
      }
    } else if (i === newArray.length - 1) {
      if (newArray[i - 1][1] > newArray[i][0]) {
        allDetail.push(
          newArray[i][1] -
            newArray[i][0] -
            (newArray[i - 1][1] - newArray[i][0])
        );
      } else {
        allDetail.push(newArray[i][1] - newArray[i][0]);
      }
    }
  }

  var test = Math.min(...allDetail);
  var index = allDetail.indexOf(test);
  console.log(test);
  testArray = newArray.filter(function (item) {
    return item !== newArray[index];
  });

  var final = 0;
  for (let j = 0; j < testArray.length; j++) {
    if (j === 0) {
      final += testArray[0][1] - testArray[0][0];
    } else if (j > 0 && j < testArray.length - 1) {
      if (testArray[j + 1][0] < testArray[j][1]) {
        if (testArray[j + 1][1] > testArray[j][1]) {
          final += testArray[j][1] - testArray[j + 1][0];
        } else {
          final = final;
        }
      }
    } else if (j === testArray.length - 1) {
      if (testArray[j][0] < testArray[j - 1][1]) {
        if (testArray[j][1] > testArray[j - 1][1]) {
          final += testArray[j][1] - testArray[j - 1][1];
        } else {
          final = final;
        }
      } else {
        final += testArray[j][1] - testArray[j][0];
      }
    }
  }
  console.log(`final: ${final}`);
};

logic();
