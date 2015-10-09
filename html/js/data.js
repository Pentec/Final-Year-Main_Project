/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
*/

var globalData;
function CollectDataFromClient(data)
{
	globalData =  data;		
	alert(globalData);
}

var managementData = {
    yearlySalesSummaryCategories: [{
        "label": "None"
    }, {
        "label": "Bladder injury"
    }, {
        "label": "Bowel injury"
    }, {
        "label": "Ureteric injury"
    }, {
        "label": "Anaesthetic complication"
    }, {
        "label": "Procedure not completed"
    }, {
        "label": "Bleeding requiring unplanned blood transfusion"
    }, {
        "label": "Vascular injury"
    }],
    yearlySalesSummaryData: [{
        "data": [{
            "value": "68"
        }, {
            "value": "12"
        }, {
            "value": "11"
        }, {
            "value": "68"
        }, {
            "value": "10"
        }, {
            "value": "11"
        }, {
            "value": "5"
        }, {
            "value": "16"
        }]
    }, {
        "data": [{
            "value": "68"
        }, {
            "value": "12"
        }, {
            "value": "11"
        }, {
            "value": "68"
        }, {
            "value": "10"
        }, {
            "value": "11"
        }, {
            "value": "5"
        }, {
            "value": "16"
        }]
    }],
    topProductsSummaryCategories: {
        "2014": {
            "all": [{
                "label": "Côte de Blaye"
            }, {
                "label": "Thüringer Rostbratwurst"
            }, {
                "label": "Mishi Kobe Niku"
            }, {
                "label": "Sir Rodney's Marmalade"
            }, {
                "label": "Carnarvon Tigers"
            }, {
                "label": "Raclette Courdavault"
            }, {
                "label": "Manjimup Dried Apples"
            }, {
                "label": "Tarte au sucre"
            }, {
                "label": "Ipoh Coffee"
            }, {
                "label": "Rössle Sauerkraut"
            }]
        },
        "2013": {
            "all": [{
                "label": "Côte de Blaye"
            }, {
                "label": "Thüringer Rostbratwurst"
            }, {
                "label": "Mishi Kobe Niku"
            }, {
                "label": "Sir Rodney's Marmalade"
            }, {
                "label": "Carnarvon Tigers"
            }, {
                "label": "Raclette Courdavault"
            }, {
                "label": "Manjimup Dried Apples"
            }, {
                "label": "Tarte au sucre"
            }, {
                "label": "Ipoh Coffee"
            }, {
                "label": "Rössle Sauerkraut"
            }]
        },
        "2012": {
            "all": [{
                "label": "Côte de Blaye"
            }, {
                "label": "Thüringer Rostbratwurst"
            }, {
                "label": "Mishi Kobe Niku"
            }, {
                "label": "Sir Rodney's Marmalade"
            }, {
                "label": "Carnarvon Tigers"
            }, {
                "label": "Raclette Courdavault"
            }, {
                "label": "Manjimup Dried Apples"
            }, {
                "label": "Tarte au sucre"
            }, {
                "label": "Ipoh Coffee"
            }, {
                "label": "Rössle Sauerkraut"
            }]
        }
    },
    topRevenuesCountriesSummaryCategories: {
        "2014": {
            "all": [{
                "label": "USA"
            }, {
                "label": "Germany"
            }, {
                "label": "Brazil"
            }, {
                "label": "France"
            }, {
                "label": "UK"
            }, {
                "label": "Venezuela"
            }, {
                "label": "Italy"
            }, {
                "label": "Austria"
            }, {
                "label": "Mexico"
            }, {
                "label": "Denmark"
            }, {
                "label": "Portugal"
            }, {
                "label": "Canada"
            }, {
                "label": "Argentina"
            }, {
                "label": "Spain"
            }, {
                "label": "Finland"
            }, {
                "label": "Sweden"
            }, {
                "label": "Ireland"
            }, {
                "label": "Norway"
            }, {
                "label": "Belgium"
            }, {
                "label": "Switzerland"
            }, {
                "label": "Poland"
            }]
        }
    },
    topCustomersSummaryCategories: {
        "2014": {
            "all": [{
                "label": "White Clover Markets"
            }, {
                "label": "Ernst Handel"
            }, {
                "label": "QUICK-Stop"
            }, {
                "label": "Rattlesnake Canyon Grocery"
            }, {
                "label": "Furia Bacalhau e Frutos do Mar"
            }, {
                "label": "Victuailles en stock"
            }, {
                "label": "Save-a-lot Markets"
            }, {
                "label": "HILARIÓN-Abastos"
            }, {
                "label": "Split Rail Beer & Ale"
            }, {
                "label": "LINO-Delicateses"
            }]
        },
        "2013": {
            "all": [{
                "label": "Ernst Handel"
            }, {
                "label": "QUICK-Stop"
            }, {
                "label": "Save-a-lot Markets"
            }, {
                "label": "Rattlesnake Canyon Grocery"
            }, {
                "label": "Hanari Carnes"
            }, {
                "label": "Hungry Owl All-Night Grocers"
            }, {
                "label": "White Clover Markets"
            }, {
                "label": "Königlich Essen"
            }, {
                "label": "Folk och fä HB"
            }, {
                "label": "Lehmanns Marktstand"
            }]
        },
        "2012": {
            "all": [{
                "label": "Save-a-lot Markets"
            }, {
                "label": "QUICK-Stop"
            }, {
                "label": "Ernst Handel"
            }, {
                "label": "Mère Paillarde"
            }, {
                "label": "Hungry Owl All-Night Grocers"
            }, {
                "label": "Queen Cozinha"
            }, {
                "label": "Rattlesnake Canyon Grocery"
            }, {
                "label": "Berglunds snabbköp"
            }, {
                "label": "Simons bistro"
            }, {
                "label": "HILARIÓN-Abastos"
            }]
        }
    },
    topRevenuesCountriesSummaryData: {
        "2014": {
            "all": [{
                data: [{
                    "value": "225541"
                }, {
                    "value": "175133"
                }, {
                    "value": "109641"
                }, {
                    "value": "101114"
                }, {
                    "value": "78386"
                }, {
                    "value": "66299"
                }, {
                    "value": "49014"
                }, {
                    "value": "46450"
                }, {
                    "value": "41431"
                }, {
                    "value": "37526"
                }, {
                    "value": "36230"
                }, {
                    "value": "30879"
                }, {
                    "value": "28994"
                }, {
                    "value": "27561"
                }, {
                    "value": "24034"
                }, {
                    "value": "20330"
                }, {
                    "value": "18234"
                }, {
                    "value": "13974"
                }, {
                    "value": "13586"
                }, {
                    "value": "9974"
                }, {
                    "value": "5997"
                }]
            }, {
                "data": [{
                    "tooltext": "Units sold in USA : 6685",
                    "value": "6685"
                }, {
                    "tooltext": "Units sold in Germany : 5916",
                    "value": "5916"
                }, {
                    "tooltext": "Units sold in Brazil : 3838",
                    "value": "3838"
                }, {
                    "tooltext": "Units sold in France : 3341",
                    "value": "3341"
                }, {
                    "tooltext": "Units sold in UK : 2681",
                    "value": "2681"
                }, {
                    "tooltext": "Units sold in Venezuela : 2213",
                    "value": "2213"
                }, {
                    "tooltext": "Units sold in Italy : 1666",
                    "value": "1666"
                }, {
                    "tooltext": "Units sold in Austria : 1978",
                    "value": "1978"
                }, {
                    "tooltext": "Units sold in Mexico : 1301",
                    "value": "1301"
                }, {
                    "tooltext": "Units sold in Denmark : 1366",
                    "value": "1366"
                }, {
                    "tooltext": "Units sold in Portugal : 908",
                    "value": "908"
                }, {
                    "tooltext": "Units sold in Canada : 1098",
                    "value": "1098"
                }, {
                    "tooltext": "Units sold in Argentina : 1180",
                    "value": "1180"
                }, {
                    "tooltext": "Units sold in Spain : 784",
                    "value": "784"
                }, {
                    "tooltext": "Units sold in Finland : 730",
                    "value": "730"
                }, {
                    "tooltext": "Units sold in Sweden : 842",
                    "value": "842"
                }, {
                    "tooltext": "Units sold in Ireland : 515",
                    "value": "515"
                }, {
                    "tooltext": "Units sold in Norway : 526",
                    "value": "526"
                }, {
                    "tooltext": "Units sold in Belgium : 372",
                    "value": "372"
                }, {
                    "tooltext": "Units sold in Switzerland : 367",
                    "value": "367"
                }, {
                    "tooltext": "Units sold in Poland : 309",
                    "value": "309"
                }]
            }]
        },
        "2013": {
            "all": [{
                "data": [{
                    "value": "212005"
                }, {
                    "value": "209957"
                }, {
                    "value": "134655"
                }, {
                    "value": "111059"
                }, {
                    "value": "79129"
                }, {
                    "value": "76909"
                }, {
                    "value": "55957"
                }, {
                    "value": "43679"
                }, {
                    "value": "35316"
                }, {
                    "value": "35260"
                }, {
                    "value": "28307"
                }, {
                    "value": "26507"
                }, {
                    "value": "24939"
                }, {
                    "value": "24289"
                }, {
                    "value": "24011"
                }, {
                    "value": "22495"
                }, {
                    "value": "19997"
                }, {
                    "value": "14604"
                }, {
                    "value": "14151"
                }, {
                    "value": "13143"
                }, {
                    "value": "6481"
                }]
            }, {
                "data": [{
                        "tooltext": "Units sold in USA : 7629",
                        "value": "7629"
                    }, {
                        "tooltext": "Units sold in Germany : 6829",
                        "value": "6829"
                    }, {
                        "tooltext": "Units sold in Brazil : 4486",
                        "value": "4486"
                    }, {
                        "tooltext": "Units sold in Austria : 3712",
                        "value": "3712"
                    }, {
                        "tooltext": "Units sold in France : 2937",
                        "value": "2937"
                    }, {
                        "tooltext": "Units sold in UK : 3172",
                        "value": "3172"
                    }, {
                        "tooltext": "Units sold in Venezuela : 2524",
                        "value": "2524"
                    }, {
                        "tooltext": "Units sold in Sweden : 1719",
                        "value": "1719"
                    }, {
                        "tooltext": "Units sold in Ireland : 866",
                        "value": "866"
                    }, {
                        "tooltext": "Units sold in Italy : 1455",
                        "value": "1455"
                    }, {
                        "tooltext": "Units sold in Canada : 1070",
                        "value": "1070"
                    }, {
                        "tooltext": "Units sold in Spain : 1102",
                        "value": "1102"
                    }, {
                        "tooltext": "Units sold in Denmark : 943",
                        "value": "943"
                    }, {
                        "tooltext": "Units sold in Argentina : 850",
                        "value": "850"
                    }, {
                        "tooltext": "Units sold in Mexico : 962",
                        "value": "962"
                    }, {
                        "tooltext": "Units sold in Belgium : 996",
                        "value": "996"
                    }, {
                        "tooltext": "Units sold in Switzerland : 797",
                        "value": "797"
                    }, {
                        "tooltext": "Units sold in Finland : 593",
                        "value": "593"
                    }, {
                        "tooltext": "Units sold in Portugal : 491",
                        "value": "491"
                    }, {
                        "tooltext": "Units sold in Norway : 278",
                        "value": "278"
                    }, {
                        "tooltext": "Units sold in Poland : 299",
                        "value": "299"
                    }

                ]
            }]
        },
        "2012": {
            "all": [{
                "data": [{
                    "value": "128877"
                }, {
                    "value": "109842"
                }, {
                    "value": "54839"
                }, {
                    "value": "51742"
                }, {
                    "value": "41502"
                }, {
                    "value": "37860"
                }, {
                    "value": "27788"
                }, {
                    "value": "26767"
                }, {
                    "value": "26200"
                }, {
                    "value": "25198"
                }, {
                    "value": "24167"
                }, {
                    "value": "20302"
                }, {
                    "value": "14664"
                }, {
                    "value": "13500"
                }, {
                    "value": "10025"
                }, {
                    "value": "8191"
                }, {
                    "value": "7091"
                }, {
                    "value": "4036"
                }, {
                    "value": "2024"
                }, {
                    "value": "1996"
                }, {
                    "value": "1382"
                }]
            }, {
                "data": [{
                        "tooltext": "Units sold in USA : 5004",
                        "value": "5004"
                    }, {
                        "tooltext": "Units sold in Germany : 4408",
                        "value": "4408"
                    }, {
                        "tooltext": "Units sold in Austria : 2180",
                        "value": "2180"
                    }, {
                        "tooltext": "Units sold in Brazil : 2055",
                        "value": "2055"
                    }, {
                        "tooltext": "Units sold in France : 1582",
                        "value": "1582"
                    }, {
                        "tooltext": "Units sold in Canada : 1372",
                        "value": "1372"
                    }, {
                        "tooltext": "Units sold in Venezuela : 1430",
                        "value": "1430"
                    }, {
                        "tooltext": "Units sold in UK : 1195",
                        "value": "1195"
                    }, {
                        "tooltext": "Units sold in Denmark : 705",
                        "value": "705"
                    }, {
                        "tooltext": "Units sold in Sweden : 802",
                        "value": "802"
                    }, {
                        "tooltext": "Units sold in Ireland : 1003",
                        "value": "1003"
                    }, {
                        "tooltext": "Units sold in Switzerland : 693",
                        "value": "693"
                    }, {
                        "tooltext": "Units sold in Mexico : 551",
                        "value": "551"
                    }, {
                        "tooltext": "Units sold in Finland : 546",
                        "value": "546"
                    }, {
                        "tooltext": "Units sold in Belgium : 432",
                        "value": "432"
                    }, {
                        "tooltext": "Units sold in Portugal : 370",
                        "value": "370"
                    }, {
                        "tooltext": "Units sold in Italy : 361",
                        "value": "361"
                    }, {
                        "tooltext": "Units sold in Spain : 80",
                        "value": "80"
                    }, {
                        "tooltext": "Units sold in Norway : 69",
                        "value": "69"
                    }, {
                        "tooltext": "Units sold in Argentina : 93",
                        "value": "93"
                    }, {
                        "tooltext": "Units sold in Poland : 76",
                        "value": "76"
                    }

                ]
            }]
        }
    },
    topCustomersSummaryData: {
        "2014": {
            "all": [{
                data: [{
                    "value": "58012.43000"
                }, {
                    "value": "43047.47000"
                }, {
                    "value": "40205.45000"
                }, {
                    "value": "39127.28000"
                }, {
                    "value": "31683.94000"
                }, {
                    "value": "28569.24000"
                }, {
                    "value": "28136.55000"
                }, {
                    "value": "26037.15000"
                }, {
                    "value": "25656.18000"
                }, {
                    "value": "25403.01000"
                }]
            }, {
                "data": [{
                    "tooltext": "Units sold to White Clover Markets : 1652",
                    "value": "1652"
                }, {
                    "tooltext": "Units sold to Ernst Handel : 1855",
                    "value": "1855"
                }, {
                    "tooltext": "Units sold to QUICK-Stop : 1450",
                    "value": "1450"
                }, {
                    "tooltext": "Units sold to Rattlesnake Canyon Grocery : 1126",
                    "value": "1126"
                }, {
                    "tooltext": "Units sold to Furia Bacalhau e Frutos do Mar : 757",
                    "value": "757"
                }, {
                    "tooltext": "Units sold to Victuailles en stock : 900",
                    "value": "900"
                }, {
                    "tooltext": "Units sold to Save-a-lot Markets : 1021",
                    "value": "1021"
                }, {
                    "tooltext": "Units sold to HILARIÓN-Abastos : 892",
                    "value": "892"
                }, {
                    "tooltext": "Units sold to Split Rail Beer & Ale : 836",
                    "value": "836"
                }, {
                    "tooltext": "Units sold to LINO-Delicateses : 750",
                    "value": "750"
                }]
            }]
        },
        "2013": {
            "all": [{
                    data: [{
                        "value": "105300.70000"
                    }, {
                        "value": "80791.27000"
                    }, {
                        "value": "59245.14000"
                    }, {
                        "value": "47239.74000"
                    }, {
                        "value": "38531.90000"
                    }, {
                        "value": "37710.29000"
                    }, {
                        "value": "33056.93000"
                    }, {
                        "value": "30544.20000"
                    }, {
                        "value": "29281.85000"
                    }, {
                        "value": "28306.14000"
                    }]
                }, {
                    "data": [{
                        "tooltext": "Units sold to Ernst Handel : 3440",
                        "value": "3440"
                    }, {
                        "tooltext": "Units sold to QUICK-Stop : 2411",
                        "value": "2411"
                    }, {
                        "tooltext": "Units sold to Save-a-lot Markets : 2525",
                        "value": "2525"
                    }, {
                        "tooltext": "Units sold to Rattlesnake Canyon Grocery : 1531",
                        "value": "1531"
                    }, {
                        "tooltext": "Units sold to Hanari Carnes : 875",
                        "value": "875"
                    }, {
                        "tooltext": "Units sold to Hungry Owl All-Night Grocers : 866",
                        "value": "866"
                    }, {
                        "tooltext": "Units sold to White Clover Markets : 1044",
                        "value": "1044"
                    }, {
                        "tooltext": "Units sold to Königlich Essen : 850",
                        "value": "850"
                    }, {
                        "tooltext": "Units sold to Folk och fä HB : 1095",
                        "value": "1095"
                    }, {
                        "tooltext": "Units sold to Lehmanns Marktstand : 758",
                        "value": "758"
                    }]
                }

            ]
        },
        "2012": {
            "all": [{
                "data": [{
                    "value": "70214.15000"
                }, {
                    "value": "63308.45000"
                }, {
                    "value": "48193.39000"
                }, {
                    "value": "29756.10000"
                }, {
                    "value": "28308.07000"
                }, {
                    "value": "25122.40000"
                }, {
                    "value": "22622.92000"
                }, {
                    "value": "17519.80000"
                }, {
                    "value": "16379.20000"
                }, {
                    "value": "15222.50000"
                }]
            }, {
                "data": [{
                    "tooltext": "Units sold to Save-a-lot Markets : 2900",
                    "value": "2900"
                }, {
                    "tooltext": "Units sold to QUICK-Stop : 2002",
                    "value": "2002"
                }, {
                    "tooltext": "Units sold to Ernst Handel : 1733",
                    "value": "1733"
                }, {
                    "tooltext": "Units sold to Mère Paillarde : 792",
                    "value": "792"
                }, {
                    "tooltext": "Units sold to Hungry Owl All-Night Grocers : 1003",
                    "value": "1003"
                }, {
                    "tooltext": "Units sold to Queen Cozinha : 604",
                    "value": "604"
                }, {
                    "tooltext": "Units sold to Rattlesnake Canyon Grocery : 487",
                    "value": "487"
                }, {
                    "tooltext": "Units sold to Berglunds snabbköp : 514",
                    "value": "514"
                }, {
                    "tooltext": "Units sold to Simons bistro : 227",
                    "value": "227"
                }, {
                    "tooltext": "Units sold to HILARIÓN-Abastos : 666",
                    "value": "666"
                }]
            }]
        }
    },
    topSalesPerformersSummaryCategories: {
        "2014": {
            "all": [{
                "label": "Fuller"
            }, {
                "label": "Suyama"
            }, {
                "label": "Peacock"
            }, {
                "label": "Callahan"
            }, {
                "label": "Dodsworth"
            }, {
                "label": "Buchanan"
            }, {
                "label": "Davolio"
            }, {
                "label": "King"
            }, {
                "label": "Leverling"
            }]
        },
        "2013": {
            "all": [{
                "label": "Davolio"
            }, {
                "label": "Fuller"
            }, {
                "label": "Leverling"
            }, {
                "label": "Callahan"
            }, {
                "label": "King"
            }, {
                "label": "Peacock"
            }, {
                "label": "Dodsworth"
            }, {
                "label": "Suyama"
            }, {
                "label": "Buchanan"
            }]
        },
        "2012": {
            "all": [{
                "label": "Peacock"
            }, {
                "label": "Leverling"
            }, {
                "label": "Davolio"
            }, {
                "label": "Fuller"
            }, {
                "label": "King"
            }, {
                "label": "Callahan"
            }, {
                "label": "Buchanan"
            }, {
                "label": "Suyama"
            }, {
                "label": "Dodsworth"
            }]
        }
    },
    topSalesPerformersSummaryData: {
        "2014": {
            "all": [{
                data: [{
                    "label": "Fuller",
                    "value": "152924.82000"
                }, {
                    "label": "Suyama",
                    "value": "144772.94000"
                }, {
                    "label": "Peacock",
                    "value": "134881.25000"
                }, {
                    "label": "Callahan",
                    "value": "132725.65000"
                }, {
                    "label": "Dodsworth",
                    "value": "126226.60000"
                }, {
                    "label": "Buchanan",
                    "value": "125683.59000"
                }, {
                    "label": "Davolio",
                    "value": "117867.02000"
                }, {
                    "label": "King",
                    "value": "113017.48000"
                }, {
                    "label": "Leverling",
                    "value": "112227.94000"
                }]
            }, {
                "data": [{
                    "tooltext": "Units Sold by Fuller : 4271",
                    "value": "4271"
                }, {
                    "tooltext": "Units Sold by Suyama : 4678",
                    "value": "4678"
                }, {
                    "tooltext": "Units Sold by Peacock : 4370",
                    "value": "4370"
                }, {
                    "tooltext": "Units Sold by Callahan : 4786",
                    "value": "4786"
                }, {
                    "tooltext": "Units Sold by Dodsworth : 4475",
                    "value": "4475"
                }, {
                    "tooltext": "Units Sold by Buchanan : 4328",
                    "value": "4328"
                }, {
                    "tooltext": "Units Sold by Davolio : 4176",
                    "value": "4176"
                }, {
                    "tooltext": "Units Sold by King : 3784",
                    "value": "3784"
                }, {
                    "tooltext": "Units Sold by Leverling : 3748",
                    "value": "3748"
                }]
            }]
        },
        "2013": {
            "all": [{
                "data": [{
                    "label": "Davolio",
                    "value": "174845.56000"
                }, {
                    "label": "Fuller",
                    "value": "166873.77000"
                }, {
                    "label": "Leverling",
                    "value": "159897.55000"
                }, {
                    "label": "Callahan",
                    "value": "159205.32000"
                }, {
                    "label": "King",
                    "value": "148553.31000"
                }, {
                    "label": "Peacock",
                    "value": "148496.39000"
                }, {
                    "label": "Dodsworth",
                    "value": "124034.28000"
                }, {
                    "label": "Suyama",
                    "value": "83300.29000"
                }, {
                    "label": "Buchanan",
                    "value": "82871.38000"
                }]
            }, {
                data: [{
                    "tooltext": "Units Sold by Davolio : 5973",
                    "value": "5973"
                }, {
                    "tooltext": "Units Sold by Fuller : 5379",
                    "value": "5379"
                }, {
                    "tooltext": "Units Sold by Leverling : 5480",
                    "value": "5480"
                }, {
                    "tooltext": "Units Sold by Callahan : 5529",
                    "value": "5529"
                }, {
                    "tooltext": "Units Sold by King : 5351",
                    "value": "5351"
                }, {
                    "tooltext": "Units Sold by Peacock : 5565",
                    "value": "5565"
                }, {
                    "tooltext": "Units Sold by Dodsworth : 3866",
                    "value": "3866"
                }, {
                    "tooltext": "Units Sold by Suyama : 3563",
                    "value": "3563"
                }, {
                    "tooltext": "Units Sold by Buchanan : 3004",
                    "value": "3004"
                }]
            }]
        },
        "2012": {
            "all": [{
                "data": [{
                    "label": "Peacock",
                    "value": "140305.00000"
                }, {
                    "label": "Leverling",
                    "value": "104474.78000"
                }, {
                    "label": "Davolio",
                    "value": "97253.38000"
                }, {
                    "label": "Fuller",
                    "value": "77058.81000"
                }, {
                    "label": "King",
                    "value": "71533.34000"
                }, {
                    "label": "Callahan",
                    "value": "68158.44000"
                }, {
                    "label": "Buchanan",
                    "value": "49164.65000"
                }, {
                    "label": "Suyama",
                    "value": "46255.69000"
                }, {
                    "label": "Dodsworth",
                    "value": "28592.00000"
                }]
            }, {
                "data": [{
                    "tooltext": "Units Sold by Peacock : 5086",
                    "value": "5086"
                }, {
                    "tooltext": "Units Sold by Leverling : 3853",
                    "value": "3853"
                }, {
                    "tooltext": "Units Sold by Davolio : 3830",
                    "value": "3830"
                }, {
                    "tooltext": "Units Sold by Fuller : 2748",
                    "value": "2748"
                }, {
                    "tooltext": "Units Sold by King : 2243",
                    "value": "2243"
                }, {
                    "tooltext": "Units Sold by Callahan : 2947",
                    "value": "2947"
                }, {
                    "tooltext": "Units Sold by Buchanan : 1616",
                    "value": "1616"
                }, {
                    "tooltext": "Units Sold by Suyama : 1786",
                    "value": "1786"
                }, {
                    "tooltext": "Units Sold by Dodsworth : 898",
                    "value": "898"
                }]
            }]
        }
    },
    topProductsSummaryData: {
        "2014": {
            "all": [{
                "data": [{
                    "value": "263.50000"
                }, {
                    "value": "123.79000"
                }, {
                    "value": "97.00000"
                }, {
                    "value": "81.00000"
                }, {
                    "value": "62.50000"
                }, {
                    "value": "55.00000"
                }, {
                    "value": "53.00000"
                }, {
                    "value": "49.30000"
                }, {
                    "value": "46.00000"
                }, {
                    "value": "45.60000"
                }]
            }, {
                "data": [{
                    "tooltext": "Côte de Blaye, Units sold : 618",
                    "value": "618"
                }, {
                    "tooltext": "Thüringer Rostbratwurst, Units sold : 525",
                    "value": "525"
                }, {
                    "tooltext": "Mishi Kobe Niku, Units sold : 625",
                    "value": "625"
                }, {
                    "tooltext": "Sir Rodney's Marmalade, Units sold : 532",
                    "value": "532"
                }, {
                    "tooltext": "Carnarvon Tigers, Units sold : 443",
                    "value": "443"
                }, {
                    "tooltext": "Raclette Courdavault, Units sold : 641",
                    "value": "641"
                }, {
                    "tooltext": "Manjimup Dried Apples, Units sold : 378",
                    "value": "378"
                }, {
                    "tooltext": "Tarte au sucre, Units sold : 630",
                    "value": "630"
                }, {
                    "tooltext": "Ipoh Coffee, Units sold : 406",
                    "value": "406"
                }, {
                    "tooltext": "Rössle Sauerkraut, Units sold : 526",
                    "value": "526"
                }]
            }]
        },
        "2013": {
            "all": [{
                "data": [{
                    "value": "263.50000"
                }, {
                    "value": "123.79000"
                }, {
                    "value": "97.00000"
                }, {
                    "value": "81.00000"
                }, {
                    "value": "62.50000"
                }, {
                    "value": "55.00000"
                }, {
                    "value": "53.00000"
                }, {
                    "value": "49.30000"
                }, {
                    "value": "46.00000"
                }, {
                    "value": "45.60000"
                }]
            }, {
                "data": [{
                    "tooltext": "Côte de Blaye, Units sold : 589",
                    "value": "589"
                }, {
                    "tooltext": "Thüringer Rostbratwurst, Units sold : 720",
                    "value": "720"
                }, {
                    "tooltext": "Mishi Kobe Niku, Units sold : 287",
                    "value": "287"
                }, {
                    "tooltext": "Sir Rodney's Marmalade, Units sold : 385",
                    "value": "385"
                }, {
                    "tooltext": "Carnarvon Tigers, Units sold : 556",
                    "value": "556"
                }, {
                    "tooltext": "Raclette Courdavault, Units sold : 739",
                    "value": "739"
                }, {
                    "tooltext": "Manjimup Dried Apples, Units sold : 752",
                    "value": "752"
                }, {
                    "tooltext": "Tarte au sucre, Units sold : 757",
                    "value": "757"
                }, {
                    "tooltext": "Ipoh Coffee, Units sold : 542",
                    "value": "542"
                }, {
                    "tooltext": "Rössle Sauerkraut, Units sold : 376",
                    "value": "376"
                }]
            }]
        },
        "2012": {
            "all": [{
                "data": [{
                    "value": "263.50000"
                }, {
                    "value": "123.79000"
                }, {
                    "value": "97.00000"
                }, {
                    "value": "81.00000"
                }, {
                    "value": "62.50000"
                }, {
                    "value": "55.00000"
                }, {
                    "value": "53.00000"
                }, {
                    "value": "49.30000"
                }, {
                    "value": "46.00000"
                }, {
                    "value": "45.60000"
                }]
            }, {
                "data": [{
                    "tooltext": "Côte de Blaye, Units sold : 248",
                    "value": "248"
                }, {
                    "tooltext": "Thüringer Rostbratwurst, Units sold : 267",
                    "value": "267"
                }, {
                    "tooltext": "Mishi Kobe Niku, Units sold : 92",
                    "value": "92"
                }, {
                    "tooltext": "Sir Rodney's Marmalade, Units sold : 136",
                    "value": "136"
                }, {
                    "tooltext": "Carnarvon Tigers, Units sold : 261",
                    "value": "261"
                }, {
                    "tooltext": "Raclette Courdavault, Units sold : 699",
                    "value": "699"
                }, {
                    "tooltext": "Manjimup Dried Apples, Units sold : 331",
                    "value": "331"
                }, {
                    "tooltext": "Tarte au sucre, Units sold : 470",
                    "value": "470"
                }, {
                    "tooltext": "Ipoh Coffee, Units sold : 228",
                    "value": "228"
                }, {
                    "tooltext": "Rössle Sauerkraut, Units sold : 346",
                    "value": "346"
                }]
            }]
        }
    },
    topSalesCategoriesSummaryData: {
        "2014": {
            "all": [{
                "data": {
                    "label": "Beverages",
                    "value": "256957.25000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Confections",
                    "value": "176918.92000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Meat/Poultry",
                    "value": "174995.20000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Dairy Products",
                    "value": "148607.60000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Condiments",
                    "value": "141611.45000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Seafood",
                    "value": "124437.27000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Produce",
                    "value": "71436.85000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Grains/Cereals",
                    "value": "65362.75000",
                    "link": "#"

                }
            }]
        },
        "2013": {
            "all": [{
                "data": {
                    "label": "Beverages",
                    "value": "278908.00000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Meat/Poultry",
                    "value": "175454.25000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Confections",
                    "value": "172986.16000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Dairy Products",
                    "value": "167400.80000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Seafood",
                    "value": "145863.84000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Condiments",
                    "value": "135713.70000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Produce",
                    "value": "86443.35000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Grains/Cereals",
                    "value": "85307.75000",
                    "link": "#"

                }
            }]
        },
        "2012": {
            "all": [{
                "data": {
                    "label": "Dairy Products",
                    "value": "135164.00000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Beverages",
                    "value": "123044.25000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Confections",
                    "value": "91525.68000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Meat/Poultry",
                    "value": "89595.78000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Seafood",
                    "value": "71428.83000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Grains/Cereals",
                    "value": "61267.00000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Condiments",
                    "value": "59164.95000",
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Produce",
                    "value": "51605.60000",
                    "link": "#"

                }
            }]
        }
    },
    topRevenuesCitiesSummaryData: {
        "2014": {
            "all": [{
                "data": {
                    "label": "Rio de Janeiro",
                    "color": "",
                    "value": "62029.75"
                }
            }, {
                "data": {
                    "label": "Seattle",
                    "color": "",
                    "value": "58012.43"
                }
            }, {
                "data": {
                    "label": "London",
                    "color": "",
                    "value": "55649.87"
                }
            }, {
                "data": {
                    "label": "Graz",
                    "color": "",
                    "value": "43047.47"
                }
            }, {
                "data": {
                    "label": "México D.F.",
                    "color": "",
                    "value": "41430.72"
                }
            }, {
                "data": {
                    "label": "São Paulo",
                    "color": "",
                    "value": "40412.16"
                }
            }, {
                "data": {
                    "label": "Cunewalde",
                    "color": "",
                    "value": "40205.45"
                }
            }, {
                "data": {
                    "label": "Albuquerque",
                    "color": "",
                    "value": "39127.28"
                }
            }, {
                "data": {
                    "label": "Lisboa",
                    "color": "",
                    "value": "36229.74"
                }
            }, {
                "data": {
                    "label": "Buenos Aires",
                    "color": "",
                    "value": "28993.71"
                }
            }, {
                "data": {
                    "label": "Lyon",
                    "color": "",
                    "value": "28569.24"
                }
            }, {
                "data": {
                    "label": "Boise",
                    "color": "",
                    "value": "28136.55"
                }
            }, {
                "data": {
                    "label": "San Cristóbal",
                    "color": "",
                    "value": "26037.15"
                }
            }, {
                "data": {
                    "label": "Lander",
                    "color": "",
                    "value": "25656.18"
                }
            }, {
                "data": {
                    "label": "I. de Margarita",
                    "color": "",
                    "value": "25403.01"
                }
            }, {
                "data": {
                    "label": "København",
                    "color": "",
                    "value": "23963.65"
                }
            }, {
                "data": {
                    "label": "Frankfurt a.M.",
                    "color": "",
                    "value": "23248.94"
                }
            }, {
                "data": {
                    "label": "Torino",
                    "color": "",
                    "value": "22800.36"
                }
            }, {
                "data": {
                    "label": "Cowes",
                    "color": "",
                    "value": "22736.38"
                }
            }, {
                "data": {
                    "label": "Brandenburg",
                    "color": "",
                    "value": "22538.91"
                }
            }, {
                "data": {
                    "label": "Stuttgart",
                    "color": "",
                    "value": "20462.27"
                }
            }, {
                "data": {
                    "label": "Oulu",
                    "color": "",
                    "value": "19860.45"
                }
            }, {
                "data": {
                    "label": "Montréal",
                    "color": "",
                    "value": "18842.97"
                }
            }, {
                "data": {
                    "label": "Anchorage",
                    "color": "",
                    "value": "18815.34"
                }
            }, {
                "data": {
                    "label": "Marseille",
                    "color": "",
                    "value": "18554.2"
                }
            }, {
                "data": {
                    "label": "Cork",
                    "color": "",
                    "value": "18233.57"
                }
            }, {
                "data": {
                    "label": "Strasbourg",
                    "color": "",
                    "value": "16673.14"
                }
            }, {
                "data": {
                    "label": "Eugene",
                    "color": "",
                    "value": "16200.35"
                }
            }, {
                "data": {
                    "label": "Münster",
                    "color": "",
                    "value": "15833.86"
                }
            }, {
                "data": {
                    "label": "Reggio Emilia",
                    "color": "",
                    "value": "15249.65"
                }
            }, {
                "data": {
                    "label": "Barcelona",
                    "color": "",
                    "value": "15182.85"
                }
            }, {
                "data": {
                    "label": "Stavern",
                    "color": "",
                    "value": "13974.15"
                }
            }, {
                "data": {
                    "label": "Århus",
                    "color": "",
                    "value": "13562.66"
                }
            }, {
                "data": {
                    "label": "Aachen",
                    "color": "",
                    "value": "13038.71"
                }
            }, {
                "data": {
                    "label": "Toulouse",
                    "color": "",
                    "value": "12178.95"
                }
            }, {
                "data": {
                    "label": "Barquisimeto",
                    "color": "",
                    "value": "11917.15"
                }
            }, {
                "data": {
                    "label": "Walla Walla",
                    "color": "",
                    "value": "11498.87"
                }
            }, {
                "data": {
                    "label": "Bergamo",
                    "color": "",
                    "value": "10964.15"
                }
            }, {
                "data": {
                    "label": "Sevilla",
                    "color": "",
                    "value": "10340.98"
                }
            }, {
                "data": {
                    "label": "Luleå",
                    "color": "",
                    "value": "10225.33"
                }
            }, {
                "data": {
                    "label": "Bräcke",
                    "color": "",
                    "value": "10104.67"
                }
            }, {
                "data": {
                    "label": "Köln",
                    "color": "",
                    "value": "9301.1"
                }
            }, {
                "data": {
                    "label": "Tsawassen",
                    "color": "",
                    "value": "9004.52"
                }
            }, {
                "data": {
                    "label": "Leipzig",
                    "color": "",
                    "value": "8545.12"
                }
            }, {
                "data": {
                    "label": "Berlin",
                    "color": "",
                    "value": "8287.3"
                }
            }, {
                "data": {
                    "label": "Nantes",
                    "color": "",
                    "value": "8271.85"
                }
            }, {
                "data": {
                    "label": "Kirkland",
                    "color": "",
                    "value": "7992"
                }
            }, {
                "data": {
                    "label": "Genève",
                    "color": "",
                    "value": "7520.3"
                }
            }, {
                "data": {
                    "label": "Mannheim",
                    "color": "",
                    "value": "7353"
                }
            }, {
                "data": {
                    "label": "Elgin",
                    "color": "",
                    "value": "7204"
                }
            }, {
                "data": {
                    "label": "Bruxelles",
                    "color": "",
                    "value": "6871.9"
                }
            }, {
                "data": {
                    "label": "Charleroi",
                    "color": "",
                    "value": "6714.54"
                }
            }, {
                "data": {
                    "label": "München",
                    "color": "",
                    "value": "6318.65"
                }
            }, {
                "data": {
                    "label": "Portland",
                    "color": "",
                    "value": "6297.1"
                }
            }, {
                "data": {
                    "label": "Paris",
                    "color": "",
                    "value": "6036.95"
                }
            }, {
                "data": {
                    "label": "Warszawa",
                    "color": "",
                    "value": "5996.96"
                }
            }, {
                "data": {
                    "label": "Butte",
                    "color": "",
                    "value": "5498"
                }
            }, {
                "data": {
                    "label": "Resende",
                    "color": "",
                    "value": "5444.45"
                }
            }, {
                "data": {
                    "label": "Versailles",
                    "color": "",
                    "value": "5173.65"
                }
            }, {
                "data": {
                    "label": "Reims",
                    "color": "",
                    "value": "4428"
                }
            }, {
                "data": {
                    "label": "Helsinki",
                    "color": "",
                    "value": "4173.25"
                }
            }, {
                "data": {
                    "label": "Salzburg",
                    "color": "",
                    "value": "3402.75"
                }
            }, {
                "data": {
                    "label": "Vancouver",
                    "color": "",
                    "value": "3031.1"
                }
            }, {
                "data": {
                    "label": "Caracas",
                    "color": "",
                    "value": "2941.64"
                }
            }, {
                "data": {
                    "label": "Bern",
                    "color": "",
                    "value": "2453.27"
                }
            }, {
                "data": {
                    "label": "Madrid",
                    "color": "",
                    "value": "2037"
                }
            }, {
                "data": {
                    "label": "Campinas",
                    "color": "",
                    "value": "1754.4"
                }
            }, {
                "data": {
                    "label": "Lille",
                    "color": "",
                    "value": "1227.97"
                }
            }, {
                "data": {
                    "label": "San Francisco",
                    "color": "",
                    "value": "1103.3"
                }
            }]
        },
        "2013": {
            "all": [{
                "data": {
                    "label": "Graz",
                    "color": "",
                    "value": "105191.399997175"
                }
            }, {
                "data": {
                    "label": "Cunewalde",
                    "color": "",
                    "value": "80673.3199989242"
                }
            }, {
                "data": {
                    "label": "London",
                    "color": "",
                    "value": "70719.7199998018"
                }
            }, {
                "data": {
                    "label": "Rio de Janeiro",
                    "color": "",
                    "value": "63232.189999512"
                }
            }, {
                "data": {
                    "label": "Boise",
                    "color": "",
                    "value": "59037.2899977932"
                }
            }, {
                "data": {
                    "label": "Albuquerque",
                    "color": "",
                    "value": "47207.5799998713"
                }
            }, {
                "data": {
                    "label": "Cork",
                    "color": "",
                    "value": "37670.389999778"
                }
            }, {
                "data": {
                    "label": "São Paulo",
                    "color": "",
                    "value": "35882.9399991566"
                }
            }, {
                "data": {
                    "label": "Seattle",
                    "color": "",
                    "value": "33056.93"
                }
            }, {
                "data": {
                    "label": "Brandenburg",
                    "color": "",
                    "value": "30516.7499989092"
                }
            }, {
                "data": {
                    "label": "Bräcke",
                    "color": "",
                    "value": "29217.2999992281"
                }
            }, {
                "data": {
                    "label": "Frankfurt a.M.",
                    "color": "",
                    "value": "28291.8899994524"
                }
            }, {
                "data": {
                    "label": "Resende",
                    "color": "",
                    "value": "26275.6099999449"
                }
            }, {
                "data": {
                    "label": "Lander",
                    "color": "",
                    "value": "24605.51"
                }
            }, {
                "data": {
                    "label": "Buenos Aires",
                    "color": "",
                    "value": "24288.61"
                }
            }, {
                "data": {
                    "label": "Tsawassen",
                    "color": "",
                    "value": "24159.72"
                }
            }, {
                "data": {
                    "label": "San Cristóbal",
                    "color": "",
                    "value": "24125.3499995708"
                }
            }, {
                "data": {
                    "label": "México D.F.",
                    "color": "",
                    "value": "24010.62"
                }
            }, {
                "data": {
                    "label": "Köln",
                    "color": "",
                    "value": "23604.1799997586"
                }
            }, {
                "data": {
                    "label": "I. de Margarita",
                    "color": "",
                    "value": "23006.3599994516"
                }
            }, {
                "data": {
                    "label": "Reggio Emilia",
                    "color": "",
                    "value": "21109.8299998257"
                }
            }, {
                "data": {
                    "label": "Toulouse",
                    "color": "",
                    "value": "19078.9899997266"
                }
            }, {
                "data": {
                    "label": "Luleå",
                    "color": "",
                    "value": "18039.0099998942"
                }
            }, {
                "data": {
                    "label": "Eugene",
                    "color": "",
                    "value": "14931.7299998733"
                }
            }, {
                "data": {
                    "label": "Marseille",
                    "color": "",
                    "value": "14631.4999998465"
                }
            }, {
                "data": {
                    "label": "Charleroi",
                    "color": "",
                    "value": "14605.1499998212"
                }
            }, {
                "data": {
                    "label": "Århus",
                    "color": "",
                    "value": "14539.0899999531"
                }
            }, {
                "data": {
                    "label": "Lyon",
                    "color": "",
                    "value": "14470.0399993324"
                }
            }, {
                "data": {
                    "label": "Lisboa",
                    "color": "",
                    "value": "14160.7799999881"
                }
            }, {
                "data": {
                    "label": "München",
                    "color": "",
                    "value": "13833.6599998659"
                }
            }, {
                "data": {
                    "label": "Stavern",
                    "color": "",
                    "value": "13143.4"
                }
            }, {
                "data": {
                    "label": "Sevilla",
                    "color": "",
                    "value": "12711.4099999508"
                }
            }, {
                "data": {
                    "label": "Bern",
                    "color": "",
                    "value": "11796.2499997675"
                }
            }, {
                "data": {
                    "label": "Campinas",
                    "color": "",
                    "value": "11672.4099996424"
                }
            }, {
                "data": {
                    "label": "Anchorage",
                    "color": "",
                    "value": "11660.279999471"
                }
            }, {
                "data": {
                    "label": "Bergamo",
                    "color": "",
                    "value": "11614.2799995112"
                }
            }, {
                "data": {
                    "label": "København",
                    "color": "",
                    "value": "11428.3999999896"
                }
            }, {
                "data": {
                    "label": "Portland",
                    "color": "",
                    "value": "11039.66"
                }
            }, {
                "data": {
                    "label": "Stuttgart",
                    "color": "",
                    "value": "10311.6499999605"
                }
            }, {
                "data": {
                    "label": "Barquisimeto",
                    "color": "",
                    "value": "9823.75999982193"
                }
            }, {
                "data": {
                    "label": "Mannheim",
                    "color": "",
                    "value": "9552.08"
                }
            }, {
                "data": {
                    "label": "Strasbourg",
                    "color": "",
                    "value": "9077.98"
                }
            }, {
                "data": {
                    "label": "Madrid",
                    "color": "",
                    "value": "8984.53999988079"
                }
            }, {
                "data": {
                    "label": "Genève",
                    "color": "",
                    "value": "8944.48999928847"
                }
            }, {
                "data": {
                    "label": "Salzburg",
                    "color": "",
                    "value": "8868.99999982119"
                }
            }, {
                "data": {
                    "label": "Leipzig",
                    "color": "",
                    "value": "8849.05"
                }
            }, {
                "data": {
                    "label": "Bruxelles",
                    "color": "",
                    "value": "8767.72999957681"
                }
            }, {
                "data": {
                    "label": "Elgin",
                    "color": "",
                    "value": "8760.79"
                }
            }, {
                "data": {
                    "label": "Nantes",
                    "color": "",
                    "value": "8756.2"
                }
            }, {
                "data": {
                    "label": "Oulu",
                    "color": "",
                    "value": "7627.09999988675"
                }
            }, {
                "data": {
                    "label": "Helsinki",
                    "color": "",
                    "value": "7156.15"
                }
            }, {
                "data": {
                    "label": "Cowes",
                    "color": "",
                    "value": "6845.18"
                }
            }, {
                "data": {
                    "label": "Lille",
                    "color": "",
                    "value": "6829.5"
                }
            }, {
                "data": {
                    "label": "Warszawa",
                    "color": "",
                    "value": "6481.25"
                }
            }, {
                "data": {
                    "label": "Kirkland",
                    "color": "",
                    "value": "6396.6"
                }
            }, {
                "data": {
                    "label": "Barcelona",
                    "color": "",
                    "value": "6039.44"
                }
            }, {
                "data": {
                    "label": "Montréal",
                    "color": "",
                    "value": "4809.53"
                }
            }, {
                "data": {
                    "label": "Aachen",
                    "color": "",
                    "value": "4027.11"
                }
            }, {
                "data": {
                    "label": "Paris",
                    "color": "",
                    "value": "3369"
                }
            }, {
                "data": {
                    "label": "Torino",
                    "color": "",
                    "value": "3082.5"
                }
            }, {
                "data": {
                    "label": "Berlin",
                    "color": "",
                    "value": "2988.67999995232"
                }
            }, {
                "data": {
                    "label": "Münster",
                    "color": "",
                    "value": "2541.25"
                }
            }, {
                "data": {
                    "label": "Versailles",
                    "color": "",
                    "value": "2190.05"
                }
            }, {
                "data": {
                    "label": "Reims",
                    "color": "",
                    "value": "2169.5"
                }
            }, {
                "data": {
                    "label": "San Francisco",
                    "color": "",
                    "value": "1446.94999994561"
                }
            }, {
                "data": {
                    "label": "Caracas",
                    "color": "",
                    "value": "996.4"
                }
            }, {
                "data": {
                    "label": "Butte",
                    "color": "",
                    "value": "945"
                }
            }, {
                "data": {
                    "label": "Walla Walla",
                    "color": "",
                    "value": "760"
                }
            }, {
                "data": {
                    "label": "Vancouver",
                    "color": "",
                    "value": "187"
                }
            }]
        },
        "2012": {
            "all": [{
                "data": {
                    "label": "Boise",
                    "color": "",
                    "value": "66530.6899974511"
                }
            }, {
                "data": {
                    "label": "Cunewalde",
                    "color": "",
                    "value": "61664.099997025"
                }
            }, {
                "data": {
                    "label": "Graz",
                    "color": "",
                    "value": "43908.879997475"
                }
            }, {
                "data": {
                    "label": "São Paulo",
                    "color": "",
                    "value": "27464.4499991909"
                }
            }, {
                "data": {
                    "label": "Cork",
                    "color": "",
                    "value": "26953.5999983571"
                }
            }, {
                "data": {
                    "label": "Montréal",
                    "color": "",
                    "value": "26459.3999992892"
                }
            }, {
                "data": {
                    "label": "London",
                    "color": "",
                    "value": "22830.8499990672"
                }
            }, {
                "data": {
                    "label": "Albuquerque",
                    "color": "",
                    "value": "19019.8499998607"
                }
            }, {
                "data": {
                    "label": "Luleå",
                    "color": "",
                    "value": "16641.3499998659"
                }
            }, {
                "data": {
                    "label": "México D.F.",
                    "color": "",
                    "value": "14822.4499994755"
                }
            }, {
                "data": {
                    "label": "København",
                    "color": "",
                    "value": "13538.899999851"
                }
            }, {
                "data": {
                    "label": "San Cristóbal",
                    "color": "",
                    "value": "13470.5999998406"
                }
            }, {
                "data": {
                    "label": "Rio de Janeiro",
                    "color": "",
                    "value": "13376.9799994934"
                }
            }, {
                "data": {
                    "label": "Marseille",
                    "color": "",
                    "value": "12414.3999992415"
                }
            }, {
                "data": {
                    "label": "München",
                    "color": "",
                    "value": "12388.2499997191"
                }
            }, {
                "data": {
                    "label": "Genève",
                    "color": "",
                    "value": "12037.5999998927"
                }
            }, {
                "data": {
                    "label": "Oulu",
                    "color": "",
                    "value": "11950.6499991238"
                }
            }, {
                "data": {
                    "label": "Salzburg",
                    "color": "",
                    "value": "11105.4499997705"
                }
            }, {
                "data": {
                    "label": "Frankfurt a.M.",
                    "color": "",
                    "value": "10785.9499995306"
                }
            }, {
                "data": {
                    "label": "Tsawassen",
                    "color": "",
                    "value": "10328.9999997199"
                }
            }, {
                "data": {
                    "label": "Seattle",
                    "color": "",
                    "value": "10201.3999984108"
                }
            }, {
                "data": {
                    "label": "Århus",
                    "color": "",
                    "value": "9748.24999966323"
                }
            }, {
                "data": {
                    "label": "Eugene",
                    "color": "",
                    "value": "9132.2999996461"
                }
            }, {
                "data": {
                    "label": "Bräcke",
                    "color": "",
                    "value": "8370.04999983758"
                }
            }, {
                "data": {
                    "label": "Strasbourg",
                    "color": "",
                    "value": "8350.44999948442"
                }
            }, {
                "data": {
                    "label": "Brandenburg",
                    "color": "",
                    "value": "8279.49999955073"
                }
            }, {
                "data": {
                    "label": "Lisboa",
                    "color": "",
                    "value": "8082.74999887943"
                }
            }, {
                "data": {
                    "label": "Bern",
                    "color": "",
                    "value": "7821.64999971986"
                }
            }, {
                "data": {
                    "label": "I. de Margarita",
                    "color": "",
                    "value": "7771.94999980628"
                }
            }, {
                "data": {
                    "label": "Lille",
                    "color": "",
                    "value": "7363.9"
                }
            }, {
                "data": {
                    "label": "Campinas",
                    "color": "",
                    "value": "7074.73"
                }
            }, {
                "data": {
                    "label": "Charleroi",
                    "color": "",
                    "value": "6354.54999918342"
                }
            }, {
                "data": {
                    "label": "Lander",
                    "color": "",
                    "value": "6338.19999968708"
                }
            }, {
                "data": {
                    "label": "Köln",
                    "color": "",
                    "value": "6081.89999990016"
                }
            }, {
                "data": {
                    "label": "Anchorage",
                    "color": "",
                    "value": "5868.5"
                }
            }, {
                "data": {
                    "label": "Lyon",
                    "color": "",
                    "value": "5519.39999988079"
                }
            }, {
                "data": {
                    "label": "Barquisimeto",
                    "color": "",
                    "value": "5298.59999940395"
                }
            }, {
                "data": {
                    "label": "Stuttgart",
                    "color": "",
                    "value": "5174.69999960959"
                }
            }, {
                "data": {
                    "label": "Toulouse",
                    "color": "",
                    "value": "4766.94999975413"
                }
            }, {
                "data": {
                    "label": "Sevilla",
                    "color": "",
                    "value": "3521.64999996424"
                }
            }, {
                "data": {
                    "label": "Resende",
                    "color": "",
                    "value": "3454.59999988824"
                }
            }, {
                "data": {
                    "label": "Bergamo",
                    "color": "",
                    "value": "3338.14999988824"
                }
            }, {
                "data": {
                    "label": "Reggio Emilia",
                    "color": "",
                    "value": "3192.79999982417"
                }
            }, {
                "data": {
                    "label": "Elgin",
                    "color": "",
                    "value": "3063.2"
                }
            }, {
                "data": {
                    "label": "Bruxelles",
                    "color": "",
                    "value": "2380"
                }
            }, {
                "data": {
                    "label": "Berlin",
                    "color": "",
                    "value": "2284.5"
                }
            }, {
                "data": {
                    "label": "Leipzig",
                    "color": "",
                    "value": "2261.4"
                }
            }, {
                "data": {
                    "label": "Münster",
                    "color": "",
                    "value": "2162.69999977648"
                }
            }, {
                "data": {
                    "label": "Cowes",
                    "color": "",
                    "value": "2113.9"
                }
            }, {
                "data": {
                    "label": "San Francisco",
                    "color": "",
                    "value": "2023.46999996722"
                }
            }, {
                "data": {
                    "label": "Portland",
                    "color": "",
                    "value": "2017.6"
                }
            }, {
                "data": {
                    "label": "Buenos Aires",
                    "color": "",
                    "value": "1804.1"
                }
            }, {
                "data": {
                    "label": "Stavern",
                    "color": "",
                    "value": "1758.4"
                }
            }, {
                "data": {
                    "label": "Nantes",
                    "color": "",
                    "value": "1407.1"
                }
            }, {
                "data": {
                    "label": "Butte",
                    "color": "",
                    "value": "1393.24"
                }
            }, {
                "data": {
                    "label": "Kirkland",
                    "color": "",
                    "value": "1333.3"
                }
            }, {
                "data": {
                    "label": "Warszawa",
                    "color": "",
                    "value": "1267"
                }
            }, {
                "data": {
                    "label": "Helsinki",
                    "color": "",
                    "value": "1174.35"
                }
            }, {
                "data": {
                    "label": "Mannheim",
                    "color": "",
                    "value": "1079.8"
                }
            }, {
                "data": {
                    "label": "Barcelona",
                    "color": "",
                    "value": "493.2"
                }
            }, {
                "data": {
                    "label": "Reims",
                    "color": "",
                    "value": "379.8"
                }
            }, {
                "data": {
                    "label": "Walla Walla",
                    "color": "",
                    "value": "357"
                }
            }, {
                "data": {
                    "label": "Vancouver",
                    "color": "",
                    "value": "335.5"
                }
            }, {
                "data": {
                    "label": "Torino",
                    "color": "",
                    "value": "231.3"
                }
            }, {
                "data": {
                    "label": "Aachen",
                    "color": "",
                    "value": "86.4"
                }
            }, {
                "data": {
                    "label": "Paris",
                    "color": "",
                    "value": "52.35"
                }
            }]
        }
    },
    topCategoriesSalesTabCategories: {
        "2014": [{
            "label": "Beverages"
        }, {
            "label": "Confections"
        }, {
            "label": "Meat/Poultry"
        }, {
            "label": "Dairy Products"
        }, {
            "label": "Condiments"
        }, {
            "label": "Seafood"
        }, {
            "label": "Produce"
        }, {
            "label": "Grains/Cereals"
        }],
        "2013": [{
            "label": "Beverages"
        }, {
            "label": "Meat/Poultry"
        }, {
            "label": "Confections"
        }, {
            "label": "Dairy Products"
        }, {
            "label": "Seafood"
        }, {
            "label": "Condiments"
        }, {
            "label": "Produce"
        }, {
            "label": "Grains/Cereals"
        }],
        "2012": [{
            "label": "Dairy Products"
        }, {
            "label": "Beverages"
        }, {
            "label": "Confections"
        }, {
            "label": "Meat/Poultry"
        }, {
            "label": "Seafood"
        }, {
            "label": "Grains/Cereals"
        }, {
            "label": "Condiments"
        }, {
            "label": "Produce"
        }, ]
    },
    topCategoriesSalesTabData: {
        "2014": [{
            "data": [{
                "label": "Beverages",
                "value": "256957.25000",
                "link": "#sales"
            }, {
                "label": "Confections",
                "value": "176918.92000",
                "link": "#sales"
            }, {
                "label": "Meat/Poultry",
                "value": "174995.20000",
                "link": "#sales"
            }, {
                "label": "Dairy Products",
                "value": "148607.60000",
                "link": "#sales"
            }, {
                "label": "Condiments",
                "value": "141611.45000",
                "link": "#sales"
            }, {

                "label": "Seafood",
                "value": "124437.27000",
                "link": "#sales"
            }, {

                "label": "Produce",
                "value": "71436.85000",
                "link": "#sales"
            }, {

                "label": "Grains / Cereals",
                "value": "65362.75000",
                "link": "#sales"
            }]
        }],
        "2013": [{
            "data": [{
                "label": "Beverages",
                "value": "278908.00000",
                "link": "#sales"
            }, {
                "label": "Meat/Poultry",
                "value": "175454.25000",
                "link": "#sales"
            }, {
                "label": "Confections",
                "value": "172986.16000",
                "link": "#sales"
            }, {
                "label": "Dairy Products",
                "value": "167400.80000",
                "link": "#sales"
            }, {
                "label": "Seafood",
                "value": "145863.84000",
                "link": "#sales"
            }, {
                "label": "Condiments",
                "value": "135713.70000",
                "link": "#sales"
            }, {
                "label": "Produce",
                "value": "86443.35000",
                "link": "#sales"
            }, {
                "label": "Grains/Cereals",
                "value": "85307.75000",
                "link": "#sales"
            }]
        }],
        "2012": [{
            "data": [{
                "label": "Dairy Products",
                "value": "135164.00000",
                "link": "#sales"
            }, {
                "label": "Beverages",
                "value": "123044.25000",
                "link": "#sales"
            }, {
                "label": "Confections",
                "value": "91525.68000",
                "link": "#sales"
            }, {
                "label": "Meat/Poultry",
                "value": "89595.78000",
                "link": "#sales"
            }, {
                "label": "Seafood",
                "value": "71428.83000",
                "link": "#sales"
            }, {
                "label": "Grains/Cereals",
                "value": "61267.00000",
                "link": "#sales"
            }, {
                "label": "Condiments",
                "value": "59164.95000",
                "link": "#sales"
            }, {
                "label": "Produce",
                "value": "51605.60000",
                "link": "#sales"
            }]
        }]
    },
    topPerformersSalesTabData: {
        "2014": [{
            "data": {
                "label": "Fuller",
                "value": "152924.82000",
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Suyama",
                "value": "144772.94000",
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Peacock",
                "value": "134881.25000",
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Callahan",
                "value": "132725.65000",
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Dodsworth",
                "value": "126226.60000",
                "link": "#sales"
            }
        }],
        "2013": [{
            "data": {
                "label": "Davolio",
                "value": "174845.56000",
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Fuller",
                "value": "166873.77000",
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Leverling",
                "value": "159897.55000",
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Callahan",
                "value": "159205.32000",
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "King",
                "value": "148553.31000",
                "link": "#sales"
            }
        }],
        "2012": [{
            "data": {
                "label": "Peacock",
                "value": "140305.00000",
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Leverling",
                "value": "104474.78000",
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Davolio",
                "value": "97253.38000",
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Fuller",
                "value": "77058.81000",
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "King",
                "value": "71533.34000",
                "link": "#sales"
            }
        }]
    },
    singleSalePerformerSalesTabCategories: [{
        "label": "2012"
    }, {
        "label": "2013"
    }, {
        "label": "2014"
    }],
    singleSalePerformerSalesTabData: {
        "fuller": [{
            "data": [{
                "value": "77058.81000"
            }, {
                "value": "166873.77000"
            }, {
                "value": "152924.82000"
            }]
        }, {
            "data": [{
                "value": "12"
            }, {
                "value": "40"
            }, {
                "value": "122"
            }]
        }],
        "suyama": [{
            "data": [{
                "value": "46255.69000"
            }, {
                "value": "83300.29000"
            }, {
                "value": "144772.94000"
            }]
        }, {
            "data": [{
                "value": "12"
            }, {
                "value": "31"
            }, {
                "value": "90"
            }]
        }],
        "peacock": [{
            "data": [{
                "value": "140305.00000"
            }, {
                "value": "148496.39000"
            }, {
                "value": "134881.25000"
            }]
        }, {
            "data": [{
                "value": "28"
            }, {
                "value": "74"
            }, {
                "value": "122"
            }]
        }],
        "callahan": [{
            "data": [{
                "value": "68158.44000"
            }, {
                "value": "159205.32000"
            }, {
                "value": "132725.65000"
            }]
        }, {
            "data": [{
                "value": "15"
            }, {
                "value": "55"
            }, {
                "value": "112"
            }]
        }],
        "dodsworth": [{
            "data": [{
                "value": "28592.00000"
            }, {
                "value": "124034.28000"
            }, {
                "value": "126226.60000"
            }]
        }, {
            "data": [{
                "value": "4"
            }, {
                "value": "17"
            }, {
                "value": "90"
            }]
        }],
        "davolio": [{
            "data": [{
                "value": "97253.38000"
            }, {
                "value": "174845.56000"
            }, {
                "value": "117867.02000"
            }]
        }, {
            "data": [{
                "value": "17"
            }, {
                "value": "57"
            }, {
                "value": "120"
            }]
        }],
        "leverling": [{
            "data": [{
                "value": "104474.78000"
            }, {
                "value": "159897.55000"
            }, {
                "value": "112227.94000"
            }]
        }, {
            "data": [{
                "value": "14"
            }, {
                "value": "64"
            }, {
                "value": "112"
            }]
        }],
        "king": [{
            "data": [{
                "value": "71533.34000"
            }, {
                "value": "148553.31000"
            }, {
                "value": "113017.48000"
            }]
        }, {
            "data": [{
                "value": "11"
            }, {
                "value": "33"
            }, {
                "value": "107"
            }]
        }]

    },
    employeeDetails: {
        "fuller": {
            "name": "Andrew Fuller"
        },
        "suyama": {
            "name": "Michael Suyama"
        },
        "peacock": {
            "name": "Margaret Peacock"
        },
        "callahan": {
            "name": "Laura Callahan"
        },
        "dodsworth": {
            "name": "Anne Dodsworth"
        },
        "king": {
            "name": 'Robert King'
        },
        "leverling": {
            "name": 'Janet Leverling'
        },
        "davolio": {
            "name": 'Nancy Davolio'
        }
    },
    productWiseSalesCategories: {
        "2014": {
            "beverages": [{
                "label": "Chai",
                "toolText": "Chai"
            }, {
                "label": "Chang",
                "toolText": "Chang"
            }, {
                "label": "Chartreu...",
                "toolText": "Chartreuse verte"
            }, {
                "label": "Côte de...",
                "toolText": "Côte de Blaye"
            }, {
                "label": "Guaraná...",
                "toolText": "Guaraná Fantástica"
            }, {
                "label": "Ipoh Cof...",
                "toolText": "Ipoh Coffee"
            }, {
                "label": "Lakkalik...",
                "toolText": "Lakkalikööri"
            }, {
                "label": "Laughing...",
                "toolText": "Laughing Lumberjack Lager"
            }, {
                "label": "Outback ...",
                "toolText": "Outback Lager"
            }, {
                "label": "Rhönbräu ...",
                "toolText": "Rhönbräu Klosterbier"
            }, {
                "label": "Sasquatc...",
                "toolText": "Sasquatch Ale"
            }, {
                "label": "Steeleye...",
                "toolText": "Steeleye Stout"
            }],
            "confections": [{
                "label": "Chocolad...",
                "toolText": "Chocolade"
            }, {
                "label": "Gumbär ...",
                "toolText": "Gumbär Gummibärchen"
            }, {
                "label": "Maxilaku",
                "toolText": "Maxilaku"
            }, {
                "label": "NuNuCa N...",
                "toolText": "NuNuCa Nuß-Nougat-Creme"
            }, {
                "label": "Pavlova",
                "toolText": "Pavlova"
            }, {
                "label": "Schoggi ...",
                "toolText": "Schoggi Schokolade"
            }, {
                "label": "Scottish...",
                "toolText": "Scottish Longbreads"
            }, {
                "label": "Sir Rodn...",
                "toolText": "Sir Rodney's Marmalade"
            }, {
                "label": "Sir Rodn...",
                "toolText": "Sir Rodney's Scones"
            }, {
                "label": "Tarte au...",
                "toolText": "Tarte au sucre"
            }, {
                "label": "Teatime ...",
                "toolText": "Teatime Chocolate Biscuits"
            }, {
                "label": "Valkoine...",
                "toolText": "Valkoinen suklaa"
            }, {
                "label": "Zaanse k...",
                "toolText": "Zaanse koeken"
            }],
            "meat_poultry": [{
                "label": "Alice Mu...",
                "toolText": "Alice Mutton"
            }, {
                "label": "Mishi Ko...",
                "toolText": "Mishi Kobe Niku"
            }, {
                "label": "Pâté c...",
                "toolText": "Pâté chinois"
            }, {
                "label": "Perth Pa...",
                "toolText": "Perth Pasties"
            }, {
                "label": "Thüring...",
                "toolText": "Thüringer Rostbratwurst"
            }, {
                "label": "Tourtiè...",
                "toolText": "Tourtière"
            }],
            "dairy_products": [{
                "label": "Camember...",
                "toolText": "Camembert Pierrot"
            }, {
                "label": "Fløtemy...",
                "toolText": "Fløtemysost"
            }, {
                "label": "Geitost",
                "toolText": "Geitost"
            }, {
                "label": "Gorgonzo...",
                "toolText": "Gorgonzola Telino"
            }, {
                "label": "Gudbrand...",
                "toolText": "Gudbrandsdalsost"
            }, {
                "label": "Mascarpo...",
                "toolText": "Mascarpone Fabioli"
            }, {
                "label": "Mozzarel...",
                "toolText": "Mozzarella di Giovanni"
            }, {
                "label": "Queso Ca...",
                "toolText": "Queso Cabrales"
            }, {
                "label": "Queso Ma...",
                "toolText": "Queso Manchego La Pastora"
            }, {
                "label": "Raclette...",
                "toolText": "Raclette Courdavault"
            }],
            "condiments": [{
                "label": "Aniseed ...",
                "toolText": "Aniseed Syrup"
            }, {
                "label": "Chef Ant...",
                "toolText": "Chef Anton's Cajun Seasoning"
            }, {
                "label": "Chef Ant...",
                "toolText": "Chef Anton's Gumbo Mix"
            }, {
                "label": "Genen Sh...",
                "toolText": "Genen Shouyu"
            }, {
                "label": "Grandma'...",
                "toolText": "Grandma's Boysenberry Spread"
            }, {
                "label": "Gula Mal...",
                "toolText": "Gula Malacca"
            }, {
                "label": "Louisian...",
                "toolText": "Louisiana Fiery Hot Pepper Sauce"
            }, {
                "label": "Louisian...",
                "toolText": "Louisiana Hot Spiced Okra"
            }, {
                "label": "Northwoo...",
                "toolText": "Northwoods Cranberry Sauce"
            }, {
                "label": "Original...",
                "toolText": "Original Frankfurter grüne Soße"
            }, {
                "label": "Sirop d'...",
                "toolText": "Sirop d'érable"
            }, {
                "label": "Vegie-sp...",
                "toolText": "Vegie-spread"
            }],
            "seafood": [{
                "label": "Boston C...",
                "toolText": "Boston Crab Meat"
            }, {
                "label": "Carnarvo...",
                "toolText": "Carnarvon Tigers"
            }, {
                "label": "Escargot...",
                "toolText": "Escargots de Bourgogne"
            }, {
                "label": "Gravad l...",
                "toolText": "Gravad lax"
            }, {
                "label": "Ikura",
                "toolText": "Ikura"
            }, {
                "label": "Inlagd S...",
                "toolText": "Inlagd Sill"
            }, {
                "label": "Jack's N...",
                "toolText": "Jack's New England Clam Chowder"
            }, {
                "label": "Konbu",
                "toolText": "Konbu"
            }, {
                "label": "Nord-Ost...",
                "toolText": "Nord-Ost Matjeshering"
            }, {
                "label": "Röd Kav...",
                "toolText": "Röd Kaviar"
            }, {
                "label": "Røgede ...",
                "toolText": "Røgede sild"
            }, {
                "label": "Spegesil...",
                "toolText": "Spegesild"
            }],
            "produce": [{
                "label": "Longlife...",
                "toolText": "Longlife Tofu"
            }, {
                "label": "Manjimup...",
                "toolText": "Manjimup Dried Apples"
            }, {
                "label": "Rössle ...",
                "toolText": "Rössle Sauerkraut"
            }, {
                "label": "Tofu",
                "toolText": "Tofu"
            }, {
                "label": "Uncle Bo...",
                "toolText": "Uncle Bob's Organic Dried Pears"
            }],
            "grains_cereals": [{
                "label": "Filo Mix",
                "toolText": "Filo Mix"
            }, {
                "label": "Gnocchi ...",
                "toolText": "Gnocchi di nonna Alice"
            }, {
                "label": "Gustaf's...",
                "toolText": "Gustaf's Knäckebröd"
            }, {
                "label": "Ravioli ...",
                "toolText": "Ravioli Angelo"
            }, {
                "label": "Singapor...",
                "toolText": "Singaporean Hokkien Fried Mee"
            }, {
                "label": "Tunnbrö...",
                "toolText": "Tunnbröd"
            }, {
                "label": "Wimmers ...",
                "toolText": "Wimmers gute Semmelknödel"
            }]
        },
        "2013": {
            "beverages": [{
                "label": "Chai",
                "toolText": "Chai"
            }, {
                "label": "Chang",
                "toolText": "Chang"
            }, {
                "label": "Chartreu...",
                "toolText": "Chartreuse verte"
            }, {
                "label": "Côte de...",
                "toolText": "Côte de Blaye"
            }, {
                "label": "Guaraná...",
                "toolText": "Guaraná Fantástica"
            }, {
                "label": "Ipoh Cof...",
                "toolText": "Ipoh Coffee"
            }, {
                "label": "Lakkalik...",
                "toolText": "Lakkalikööri"
            }, {
                "label": "Laughing...",
                "toolText": "Laughing Lumberjack Lager"
            }, {
                "label": "Outback ...",
                "toolText": "Outback Lager"
            }, {
                "label": "Rhönbr�...",
                "toolText": "Rhönbräu Klosterbier"
            }, {
                "label": "Sasquatc...",
                "toolText": "Sasquatch Ale"
            }, {
                "label": "Steeleye...",
                "toolText": "Steeleye Stout"
            }],
            "meat_poultry": [{
                "label": "Alice Mu...",
                "toolText": "Alice Mutton"
            }, {
                "label": "Mishi Ko...",
                "toolText": "Mishi Kobe Niku"
            }, {
                "label": "Pâté c...",
                "toolText": "Pâté chinois"
            }, {
                "label": "Perth Pa...",
                "toolText": "Perth Pasties"
            }, {
                "label": "Thüring...",
                "toolText": "Thüringer Rostbratwurst"
            }, {
                "label": "Tourtiè...",
                "toolText": "Tourtière"
            }],
            "confections": [{
                "label": "Chocolad...",
                "toolText": "Chocolade"
            }, {
                "label": "Gumbär ...",
                "toolText": "Gumbär Gummibärchen"
            }, {
                "label": "Maxilaku",
                "toolText": "Maxilaku"
            }, {
                "label": "NuNuCa N...",
                "toolText": "NuNuCa Nuß-Nougat-Creme"
            }, {
                "label": "Pavlova",
                "toolText": "Pavlova"
            }, {
                "label": "Schoggi ...",
                "toolText": "Schoggi Schokolade"
            }, {
                "label": "Scottish...",
                "toolText": "Scottish Longbreads"
            }, {
                "label": "Sir Rodn...",
                "toolText": "Sir Rodney's Marmalade"
            }, {
                "label": "Sir Rodn...",
                "toolText": "Sir Rodney's Scones"
            }, {
                "label": "Tarte au...",
                "toolText": "Tarte au sucre"
            }, {
                "label": "Teatime ...",
                "toolText": "Teatime Chocolate Biscuits"
            }, {
                "label": "Valkoine...",
                "toolText": "Valkoinen suklaa"
            }, {
                "label": "Zaanse k...",
                "toolText": "Zaanse koeken"
            }],
            "dairy_products": [{
                "label": "Camember...",
                "toolText": "Camembert Pierrot"
            }, {
                "label": "Fløtemy...",
                "toolText": "Fløtemysost"
            }, {
                "label": "Geitost",
                "toolText": "Geitost"
            }, {
                "label": "Gorgonzo...",
                "toolText": "Gorgonzola Telino"
            }, {
                "label": "Gudbrand...",
                "toolText": "Gudbrandsdalsost"
            }, {
                "label": "Mascarpo...",
                "toolText": "Mascarpone Fabioli"
            }, {
                "label": "Mozzarel...",
                "toolText": "Mozzarella di Giovanni"
            }, {
                "label": "Queso Ca...",
                "toolText": "Queso Cabrales"
            }, {
                "label": "Queso Ma...",
                "toolText": "Queso Manchego La Pastora"
            }, {
                "label": "Raclette...",
                "toolText": "Raclette Courdavault"
            }],
            "seafood": [{
                "label": "Boston C...",
                "toolText": "Boston Crab Meat"
            }, {
                "label": "Carnarvo...",
                "toolText": "Carnarvon Tigers"
            }, {
                "label": "Escargot...",
                "toolText": "Escargots de Bourgogne"
            }, {
                "label": "Gravad l...",
                "toolText": "Gravad lax"
            }, {
                "label": "Ikura",
                "toolText": "Ikura"
            }, {
                "label": "Inlagd S...",
                "toolText": "Inlagd Sill"
            }, {
                "label": "Jack's N...",
                "toolText": "Jack's New England Clam Chowder"
            }, {
                "label": "Konbu",
                "toolText": "Konbu"
            }, {
                "label": "Nord-Ost...",
                "toolText": "Nord-Ost Matjeshering"
            }, {
                "label": "Röd Kav...",
                "toolText": "Röd Kaviar"
            }, {
                "label": "Røgede ...",
                "toolText": "Røgede sild"
            }, {
                "label": "Spegesil...",
                "toolText": "Spegesild"
            }],
            "condiments": [{
                "label": "Aniseed ...",
                "toolText": "Aniseed Syrup"
            }, {
                "label": "Chef Ant...",
                "toolText": "Chef Anton's Cajun Seasoning"
            }, {
                "label": "Chef Ant...",
                "toolText": "Chef Anton's Gumbo Mix"
            }, {
                "label": "Genen Sh...",
                "toolText": "Genen Shouyu"
            }, {
                "label": "Grandma'...",
                "toolText": "Grandma's Boysenberry Spread"
            }, {
                "label": "Gula Mal...",
                "toolText": "Gula Malacca"
            }, {
                "label": "Louisian...",
                "toolText": "Louisiana Fiery Hot Pepper Sauce"
            }, {
                "label": "Louisian...",
                "toolText": "Louisiana Hot Spiced Okra"
            }, {
                "label": "Northwoo...",
                "toolText": "Northwoods Cranberry Sauce"
            }, {
                "label": "Original...",
                "toolText": "Original Frankfurter grüne Soße"
            }, {
                "label": "Sirop d'...",
                "toolText": "Sirop d'érable"
            }, {
                "label": "Vegie-sp...",
                "toolText": "Vegie-spread"
            }],
            "produce": [{
                "label": "Longlife...",
                "toolText": "Longlife Tofu"
            }, {
                "label": "Manjimup...",
                "toolText": "Manjimup Dried Apples"
            }, {
                "label": "Rössle ...",
                "toolText": "Rössle Sauerkraut"
            }, {
                "label": "Tofu",
                "toolText": "Tofu"
            }, {
                "label": "Uncle Bo...",
                "toolText": "Uncle Bob's Organic Dried Pears"
            }, ],
            "grains_cereals": [{
                "label": "Filo Mix",
                "toolText": "Filo Mix"
            }, {
                "label": "Gnocchi ...",
                "toolText": "Gnocchi di nonna Alice"
            }, {
                "label": "Gustaf's...",
                "toolText": "Gustaf's Knäckebröd"
            }, {
                "label": "Ravioli ...",
                "toolText": "Ravioli Angelo"
            }, {
                "label": "Singapor...",
                "toolText": "Singaporean Hokkien Fried Mee"
            }, {
                "label": "Tunnbrö...",
                "toolText": "Tunnbröd"
            }, {
                "label": "Wimmers ...",
                "toolText": "Wimmers gute Semmelknödel"
            }]
        },
        "2012": {
            "beverages": [{
                "label": "Chai",
                "toolText": "Chai"
            }, {
                "label": "Chang",
                "toolText": "Chang"
            }, {
                "label": "Chartreu...",
                "toolText": "Chartreuse verte"
            }, {
                "label": "Côte de...",
                "toolText": "Côte de Blaye"
            }, {
                "label": "Guaraná...",
                "toolText": "Guaraná Fantástica"
            }, {
                "label": "Ipoh Cof...",
                "toolText": "Ipoh Coffee"
            }, {
                "label": "Lakkalik...",
                "toolText": "Lakkalikööri"
            }, {
                "label": "Laughing...",
                "toolText": "Laughing Lumberjack Lager"
            }, {
                "label": "Outback ...",
                "toolText": "Outback Lager"
            }, {
                "label": "Rhönbr�...",
                "toolText": "Rhönbräu Klosterbier"
            }, {
                "label": "Sasquatc...",
                "toolText": "Sasquatch Ale"
            }, {
                "label": "Steeleye...",
                "toolText": "Steeleye Stout"
            }],
            "meat_poultry": [{
                "label": "Alice Mu...",
                "toolText": "Alice Mutton"
            }, {
                "label": "Mishi Ko...",
                "toolText": "Mishi Kobe Niku"
            }, {
                "label": "Pâté c...",
                "toolText": "Pâté chinois"
            }, {
                "label": "Perth Pa...",
                "toolText": "Perth Pasties"
            }, {
                "label": "Thüring...",
                "toolText": "Thüringer Rostbratwurst"
            }, {
                "label": "Tourtiè...",
                "toolText": "Tourtière"
            }],
            "confections": [{
                "label": "Chocolad...",
                "toolText": "Chocolade"
            }, {
                "label": "Gumbär ...",
                "toolText": "Gumbär Gummibärchen"
            }, {
                "label": "Maxilaku",
                "toolText": "Maxilaku"
            }, {
                "label": "NuNuCa N...",
                "toolText": "NuNuCa Nuß-Nougat-Creme"
            }, {
                "label": "Pavlova",
                "toolText": "Pavlova"
            }, {
                "label": "Schoggi ...",
                "toolText": "Schoggi Schokolade"
            }, {
                "label": "Scottish...",
                "toolText": "Scottish Longbreads"
            }, {
                "label": "Sir Rodn...",
                "toolText": "Sir Rodney's Marmalade"
            }, {
                "label": "Sir Rodn...",
                "toolText": "Sir Rodney's Scones"
            }, {
                "label": "Tarte au...",
                "toolText": "Tarte au sucre"
            }, {
                "label": "Teatime ...",
                "toolText": "Teatime Chocolate Biscuits"
            }, {
                "label": "Valkoine...",
                "toolText": "Valkoinen suklaa"
            }, {
                "label": "Zaanse k...",
                "toolText": "Zaanse koeken"
            }],
            "dairy_products": [{
                "label": "Camember...",
                "toolText": "Camembert Pierrot"
            }, {
                "label": "Fløtemy...",
                "toolText": "Fløtemysost"
            }, {
                "label": "Geitost",
                "toolText": "Geitost"
            }, {
                "label": "Gorgonzo...",
                "toolText": "Gorgonzola Telino"
            }, {
                "label": "Gudbrand...",
                "toolText": "Gudbrandsdalsost"
            }, {
                "label": "Mascarpo...",
                "toolText": "Mascarpone Fabioli"
            }, {
                "label": "Mozzarel...",
                "toolText": "Mozzarella di Giovanni"
            }, {
                "label": "Queso Ca...",
                "toolText": "Queso Cabrales"
            }, {
                "label": "Queso Ma...",
                "toolText": "Queso Manchego La Pastora"
            }, {
                "label": "Raclette...",
                "toolText": "Raclette Courdavault"
            }],
            "seafood": [{
                "label": "Boston C...",
                "toolText": "Boston Crab Meat"
            }, {
                "label": "Carnarvo...",
                "toolText": "Carnarvon Tigers"
            }, {
                "label": "Escargot...",
                "toolText": "Escargots de Bourgogne"
            }, {
                "label": "Gravad l...",
                "toolText": "Gravad lax"
            }, {
                "label": "Ikura",
                "toolText": "Ikura"
            }, {
                "label": "Inlagd S...",
                "toolText": "Inlagd Sill"
            }, {
                "label": "Jack's N...",
                "toolText": "Jack's New England Clam Chowder"
            }, {
                "label": "Konbu",
                "toolText": "Konbu"
            }, {
                "label": "Nord-Ost...",
                "toolText": "Nord-Ost Matjeshering"
            }, {
                "label": "Röd Kav...",
                "toolText": "Röd Kaviar"
            }, {
                "label": "Røgede ...",
                "toolText": "Røgede sild"
            }, {
                "label": "Spegesil...",
                "toolText": "Spegesild"
            }],
            "condiments": [{
                "label": "Aniseed ...",
                "toolText": "Aniseed Syrup"
            }, {
                "label": "Chef Ant...",
                "toolText": "Chef Anton's Cajun Seasoning"
            }, {
                "label": "Chef Ant...",
                "toolText": "Chef Anton's Gumbo Mix"
            }, {
                "label": "Genen Sh...",
                "toolText": "Genen Shouyu"
            }, {
                "label": "Grandma'...",
                "toolText": "Grandma's Boysenberry Spread"
            }, {
                "label": "Gula Mal...",
                "toolText": "Gula Malacca"
            }, {
                "label": "Louisian...",
                "toolText": "Louisiana Fiery Hot Pepper Sauce"
            }, {
                "label": "Louisian...",
                "toolText": "Louisiana Hot Spiced Okra"
            }, {
                "label": "Northwoo...",
                "toolText": "Northwoods Cranberry Sauce"
            }, {
                "label": "Original...",
                "toolText": "Original Frankfurter grüne Soße"
            }, {
                "label": "Sirop d'...",
                "toolText": "Sirop d'érable"
            }, {
                "label": "Vegie-sp...",
                "toolText": "Vegie-spread"
            }],
            "produce": [{
                "label": "Longlife...",
                "toolText": "Longlife Tofu"
            }, {
                "label": "Manjimup...",
                "toolText": "Manjimup Dried Apples"
            }, {
                "label": "Rössle ...",
                "toolText": "Rössle Sauerkraut"
            }, {
                "label": "Tofu",
                "toolText": "Tofu"
            }, {
                "label": "Uncle Bo...",
                "toolText": "Uncle Bob's Organic Dried Pears"
            }],
            "grains_cereals": [{
                "label": "Filo Mix",
                "toolText": "Filo Mix"
            }, {
                "label": "Gnocchi ...",
                "toolText": "Gnocchi di nonna Alice"
            }, {
                "label": "Gustaf's...",
                "toolText": "Gustaf's Knäckebröd"
            }, {
                "label": "Ravioli ...",
                "toolText": "Ravioli Angelo"
            }, {
                "label": "Singapor...",
                "toolText": "Singaporean Hokkien Fried Mee"
            }, {
                "label": "Tunnbrö...",
                "toolText": "Tunnbröd"
            }, {
                "label": "Wimmers ...",
                "toolText": "Wimmers gute Semmelknödel"
            }]
        }
    },
    productWiseSalesData: {
        "2014": {
            "beverages": [{
                "data": [{
                    "value": "10890"
                }, {
                    "value": "11077"
                }, {
                    "value": "8208"
                }, {
                    "value": "162843"
                }, {
                    "value": "1773"
                }, {
                    "value": "18676"
                }, {
                    "value": "9468"
                }, {
                    "value": "6678"
                }, {
                    "value": "8280"
                }, {
                    "value": "2410"
                }, {
                    "value": "8302"
                }, {
                    "value": "8352"
                }]
            }, {
                "data": [{
                    "tooltext": "Chai, Units Sold : 605",
                    "value": "605"
                }, {
                    "tooltext": "Chang, Units Sold : 583",
                    "value": "583"
                }, {
                    "tooltext": "Chartreuse verte, Units Sold : 456",
                    "value": "456"
                }, {
                    "tooltext": "Côte de Blaye, Units Sold : 618",
                    "value": "618"
                }, {
                    "tooltext": "Guaraná Fantástica, Units Sold : 394",
                    "value": "394"
                }, {
                    "tooltext": "Ipoh Coffee, Units Sold : 406",
                    "value": "406"
                }, {
                    "tooltext": "Lakkalikööri, Units Sold : 526",
                    "value": "526"
                }, {
                    "tooltext": "Laughing Lumberjack Lager, Units Sold : 477",
                    "value": "477"
                }, {
                    "tooltext": "Outback Lager, Units Sold : 552",
                    "value": "552"
                }, {
                    "tooltext": "Rhönbräu Klosterbier, Units Sold : 311",
                    "value": "311"
                }, {
                    "tooltext": "Sasquatch Ale, Units Sold : 593",
                    "value": "593"
                }, {
                    "tooltext": "Steeleye Stout, Units Sold : 464",
                    "value": "464"
                }]
            }],
            "confections": [{
                "data": [{
                    "value": "5623"
                }, {
                    "value": "21049"
                }, {
                    "value": "7340"
                }, {
                    "value": "9324"
                }, {
                    "value": "11308"
                }, {
                    "value": "20545"
                }, {
                    "value": "7175"
                }, {
                    "value": "43092"
                }, {
                    "value": "4850"
                }, {
                    "value": "31059"
                }, {
                    "value": "4030"
                }, {
                    "value": "8076"
                }, {
                    "value": "3449"
                }]
            }, {
                "data": [{
                    "tooltext": "Chocolade, Units Sold : 441",
                    "value": "441"
                }, {
                    "tooltext": "Gumbär Gummibärchen, Units Sold : 674",
                    "value": "674"
                }, {
                    "tooltext": "Maxilaku, Units Sold : 367",
                    "value": "367"
                }, {
                    "tooltext": "NuNuCa Nuß-Nougat-Creme, Units Sold : 666",
                    "value": "666"
                }, {
                    "tooltext": "Pavlova, Units Sold : 648",
                    "value": "648"
                }, {
                    "tooltext": "Schoggi Schokolade, Units Sold : 468",
                    "value": "468"
                }, {
                    "tooltext": "Scottish Longbreads, Units Sold : 574",
                    "value": "574"
                }, {
                    "tooltext": "Sir Rodney's Marmalade, Units Sold : 532",
                    "value": "532"
                }, {
                    "tooltext": "Sir Rodney's Scones, Units Sold : 485",
                    "value": "485"
                }, {
                    "tooltext": "Tarte au sucre, Units Sold : 630",
                    "value": "630"
                }, {
                    "tooltext": "Teatime Chocolate Biscuits, Units Sold : 438",
                    "value": "438"
                }, {
                    "tooltext": "Valkoinen suklaa, Units Sold : 497",
                    "value": "497"
                }, {
                    "tooltext": "Zaanse koeken, Units Sold : 363",
                    "value": "363"
                }]
            }],
            "meat_poultry": [{
                "data": [{
                    "value": "17823"
                }, {
                    "value": "60625"
                }, {
                    "value": "10176"
                }, {
                    "value": "17023"
                }, {
                    "value": "64990"
                }, {
                    "value": "4358"
                }]
            }, {
                "data": [{
                    "tooltext": "Alice Mutton, Units Sold : 457",
                    "value": "457"
                }, {
                    "tooltext": "Mishi Kobe Niku, Units Sold : 625",
                    "value": "625"
                }, {
                    "tooltext": "Pâté chinois, Units Sold : 424",
                    "value": "424"
                }, {
                    "tooltext": "Perth Pasties, Units Sold : 519",
                    "value": "519"
                }, {
                    "tooltext": "Thüringer Rostbratwurst, Units Sold : 525",
                    "value": "525"
                }, {
                    "tooltext": "Tourtière, Units Sold : 585",
                    "value": "585"
                }]
            }],
            "dairy_products": [{
                "data": [{
                    "value": "15878"
                }, {
                    "value": "12148"
                }, {
                    "value": "1318"
                }, {
                    "value": "7900"
                }, {
                    "value": "14148"
                }, {
                    "value": "16224"
                }, {
                    "value": "16948"
                }, {
                    "value": "9030"
                }, {
                    "value": "19760"
                }, {
                    "value": "35255"
                }]
            }, {
                "data": [{
                    "tooltext": "Camembert Pierrot, Units Sold : 467",
                    "value": "467"
                }, {
                    "tooltext": "Fløtemysost, Units Sold : 565",
                    "value": "565"
                }, {
                    "tooltext": "Geitost, Units Sold : 527",
                    "value": "527"
                }, {
                    "tooltext": "Gorgonzola Telino, Units Sold : 632",
                    "value": "632"
                }, {
                    "tooltext": "Gudbrandsdalsost, Units Sold : 393",
                    "value": "393"
                }, {
                    "tooltext": "Mascarpone Fabioli, Units Sold : 507",
                    "value": "507"
                }, {
                    "tooltext": "Mozzarella di Giovanni, Units Sold : 487",
                    "value": "487"
                }, {
                    "tooltext": "Queso Cabrales, Units Sold : 430",
                    "value": "430"
                }, {
                    "tooltext": "Queso Manchego La Pastora, Units Sold : 520",
                    "value": "520"
                }, {
                    "tooltext": "Raclette Courdavault, Units Sold : 641",
                    "value": "641"
                }]
            }],
            "condiments": [{
                "data": [{
                    "value": "6940"
                }, {
                    "value": "10758"
                }, {
                    "value": "13792"
                }, {
                    "value": "9517"
                }, {
                    "value": "11650"
                }, {
                    "value": "10425"
                }, {
                    "value": "8525"
                }, {
                    "value": "8415"
                }, {
                    "value": "25360"
                }, {
                    "value": "6578"
                }, {
                    "value": "11828"
                }, {
                    "value": "17823"
                }]
            }, {
                "data": [{
                    "tooltext": "Aniseed Syrup, Units Sold : 694",
                    "value": "694"
                }, {
                    "tooltext": "Chef Anton's Cajun Seasoning, Units Sold : 489",
                    "value": "489"
                }, {
                    "tooltext": "Chef Anton's Gumbo Mix, Units Sold : 646",
                    "value": "646"
                }, {
                    "tooltext": "Genen Shouyu, Units Sold : 614",
                    "value": "614"
                }, {
                    "tooltext": "Grandma's Boysenberry Spread, Units Sold : 466",
                    "value": "466"
                }, {
                    "tooltext": "Gula Malacca, Units Sold : 536",
                    "value": "536"
                }, {
                    "tooltext": "Louisiana Fiery Hot Pepper Sauce, Units Sold : 405",
                    "value": "405"
                }, {
                    "tooltext": "Louisiana Hot Spiced Okra, Units Sold : 495",
                    "value": "495"
                }, {
                    "tooltext": "Northwoods Cranberry Sauce, Units Sold : 634",
                    "value": "634"
                }, {
                    "tooltext": "Original Frankfurter grüne Soße, Units Sold : 506",
                    "value": "506"
                }, {
                    "tooltext": "Sirop d'érable, Units Sold : 415",
                    "value": "415"
                }, {
                    "tooltext": "Vegie-spread, Units Sold : 406",
                    "value": "406"
                }]
            }],
            "seafood": [{
                "data": [{
                    "value": "10838"
                }, {
                    "value": "27688"
                }, {
                    "value": "7473"
                }, {
                    "value": "12974"
                }, {
                    "value": "16058"
                }, {
                    "value": "9424"
                }, {
                    "value": "3484"
                }, {
                    "value": "2928"
                }, {
                    "value": "17295"
                }, {
                    "value": "6210"
                }, {
                    "value": "4655"
                }, {
                    "value": "5412"
                }]
            }, {
                "data": [{
                    "tooltext": "Boston Crab Meat, Units Sold : 589",
                    "value": "589"
                }, {
                    "tooltext": "Carnarvon Tigers, Units Sold : 443",
                    "value": "443"
                }, {
                    "tooltext": "Escargots de Bourgogne, Units Sold : 564",
                    "value": "564"
                }, {
                    "tooltext": "Gravad lax, Units Sold : 499",
                    "value": "499"
                }, {
                    "tooltext": "Ikura, Units Sold : 518",
                    "value": "518"
                }, {
                    "tooltext": "Inlagd Sill, Units Sold : 496",
                    "value": "496"
                }, {
                    "tooltext": "Jack's New England Clam Chowder, Units Sold : 361",
                    "value": "361"
                }, {
                    "tooltext": "Konbu, Units Sold : 488",
                    "value": "488"
                }, {
                    "tooltext": "Nord-Ost Matjeshering, Units Sold : 668",
                    "value": "668"
                }, {
                    "tooltext": "Röd Kaviar, Units Sold : 414",
                    "value": "414"
                }, {
                    "tooltext": "Røgede sild, Units Sold : 490",
                    "value": "490"
                }, {
                    "tooltext": "Spegesild, Units Sold : 451",
                    "value": "451"
                }]
            }],
            "produce": [{
                "data": [{
                    "value": "3220"
                }, {
                    "value": "20034"
                }, {
                    "value": "23986"
                }, {
                    "value": "9137"
                }, {
                    "value": "15060"
                }]
            }, {
                "data": [{
                    "tooltext": "Longlife Tofu, Units Sold : 322",
                    "value": "322"
                }, {
                    "tooltext": "Manjimup Dried Apples, Units Sold : 378",
                    "value": "378"
                }, {
                    "tooltext": "Rössle Sauerkraut, Units Sold : 526",
                    "value": "526"
                }, {
                    "tooltext": "Tofu, Units Sold : 393",
                    "value": "393"
                }, {
                    "tooltext": "Uncle Bob's Organic Dried Pears, Units Sold : 502",
                    "value": "502"
                }]
            }],
            "grains_cereals": [{
                "data": [{
                    "value": "2702"
                }, {
                    "value": "18848"
                }, {
                    "value": "9555"
                }, {
                    "value": "9204"
                }, {
                    "value": "5544"
                }, {
                    "value": "4248"
                }, {
                    "value": "15262"
                }]
            }, {
                "data": [{
                    "tooltext": "Filo Mix, Units Sold : 386",
                    "value": "386"
                }, {
                    "tooltext": "Gnocchi di nonna Alice, Units Sold : 496",
                    "value": "496"
                }, {
                    "tooltext": "Gustaf's Knäckebröd, Units Sold : 455",
                    "value": "455"
                }, {
                    "tooltext": "Ravioli Angelo, Units Sold : 472",
                    "value": "472"
                }, {
                    "tooltext": "Singaporean Hokkien Fried Mee, Units Sold : 396",
                    "value": "396"
                }, {
                    "tooltext": "Tunnbröd, Units Sold : 472",
                    "value": "472"
                }, {
                    "tooltext": "Wimmers gute Semmelknödel, Units Sold : 459",
                    "value": "459"
                }]
            }]
        },
        "2013": {
            "beverages": [{
                "data": [{
                    "value": "14346"
                }, {
                    "value": "15219"
                }, {
                    "value": "14022"
                }, {
                    "value": "155202"
                }, {
                    "value": "3960"
                }, {
                    "value": "24932"
                }, {
                    "value": "9792"
                }, {
                    "value": "5572"
                }, {
                    "value": "8250"
                }, {
                    "value": "6154"
                }, {
                    "value": "9814"
                }, {
                    "value": "11646"
                }]
            }, {
                "data": [{
                    "tooltext": "Chai, Units Sold : 797",
                    "value": "797"
                }, {
                    "tooltext": "Chang, Units Sold : 801",
                    "value": "801"
                }, {
                    "tooltext": "Chartreuse verte, Units Sold : 779",
                    "value": "779"
                }, {
                    "tooltext": "Côte de Blaye, Units Sold : 589",
                    "value": "589"
                }, {
                    "tooltext": "Guaraná Fantástica, Units Sold : 880",
                    "value": "880"
                }, {
                    "tooltext": "Ipoh Coffee, Units Sold : 542",
                    "value": "542"
                }, {
                    "tooltext": "Lakkalikööri, Units Sold : 544",
                    "value": "544"
                }, {
                    "tooltext": "Laughing Lumberjack Lager, Units Sold : 398",
                    "value": "398"
                }, {
                    "tooltext": "Outback Lager, Units Sold : 550",
                    "value": "550"
                }, {
                    "tooltext": "Rhönbräu Klosterbier, Units Sold : 794",
                    "value": "794"
                }, {
                    "tooltext": "Sasquatch Ale, Units Sold : 701",
                    "value": "701"
                }, {
                    "tooltext": "Steeleye Stout, Units Sold : 647",
                    "value": "647"
                }]
            }],
            "meat_poultry": [{
                "data": [{
                    "value": "22191"
                }, {
                    "value": "27839"
                }, {
                    "value": "16968"
                }, {
                    "value": "15744"
                }, {
                    "value": "89129"
                }, {
                    "value": "3583"
                }]
            }, {
                "data": [{
                    "tooltext": "Alice Mutton, Units Sold : 569",
                    "value": "569"
                }, {
                    "tooltext": "Mishi Kobe Niku, Units Sold : 287",
                    "value": "287"
                }, {
                    "tooltext": "Pâté chinois, Units Sold : 707",
                    "value": "707"
                }, {
                    "tooltext": "Perth Pasties, Units Sold : 480",
                    "value": "480"
                }, {
                    "tooltext": "Thüringer Rostbratwurst, Units Sold : 720",
                    "value": "720"
                }, {
                    "tooltext": "Tourtière, Units Sold : 481",
                    "value": "481"
                }]
            }],
            "confections": [{
                "data": [{
                    "value": "4973"
                }, {
                    "value": "16302"
                }, {
                    "value": "12080"
                }, {
                    "value": "7490"
                }, {
                    "value": "14239"
                }, {
                    "value": "18921"
                }, {
                    "value": "6325"
                }, {
                    "value": "31185"
                }, {
                    "value": "7380"
                }, {
                    "value": "37320"
                }, {
                    "value": "6228"
                }, {
                    "value": "5850"
                }, {
                    "value": "4693"
                }]
            }, {
                "data": [{
                    "tooltext": "Chocolade, Units Sold : 390",
                    "value": "390"
                }, {
                    "tooltext": "Gumbär Gummibärchen, Units Sold : 522",
                    "value": "522"
                }, {
                    "tooltext": "Maxilaku, Units Sold : 604",
                    "value": "604"
                }, {
                    "tooltext": "NuNuCa Nuß-Nougat-Creme, Units Sold : 535",
                    "value": "535"
                }, {
                    "tooltext": "Pavlova, Units Sold : 816",
                    "value": "816"
                }, {
                    "tooltext": "Schoggi Schokolade, Units Sold : 431",
                    "value": "431"
                }, {
                    "tooltext": "Scottish Longbreads, Units Sold : 506",
                    "value": "506"
                }, {
                    "tooltext": "Sir Rodney's Marmalade, Units Sold : 385",
                    "value": "385"
                }, {
                    "tooltext": "Sir Rodney's Scones, Units Sold : 738",
                    "value": "738"
                }, {
                    "tooltext": "Tarte au sucre, Units Sold : 757",
                    "value": "757"
                }, {
                    "tooltext": "Teatime Chocolate Biscuits, Units Sold : 677",
                    "value": "677"
                }, {
                    "tooltext": "Valkoinen suklaa, Units Sold : 360",
                    "value": "360"
                }, {
                    "tooltext": "Zaanse koeken, Units Sold : 494",
                    "value": "494"
                }]
            }],
            "dairy_products": [{
                "data": [{
                    "value": "29172"
                }, {
                    "value": "11868"
                }, {
                    "value": "1438"
                }, {
                    "value": "10313"
                }, {
                    "value": "18288"
                }, {
                    "value": "13120"
                }, {
                    "value": "19001"
                }, {
                    "value": "11739"
                }, {
                    "value": "11818"
                }, {
                    "value": "40645"
                }]
            }, {
                "data": [{
                    "tooltext": "Camembert Pierrot, Units Sold : 858",
                    "value": "858"
                }, {
                    "tooltext": "Fløtemysost, Units Sold : 552",
                    "value": "552"
                }, {
                    "tooltext": "Geitost, Units Sold : 575",
                    "value": "575"
                }, {
                    "tooltext": "Gorgonzola Telino, Units Sold : 825",
                    "value": "825"
                }, {
                    "tooltext": "Gudbrandsdalsost, Units Sold : 508",
                    "value": "508"
                }, {
                    "tooltext": "Mascarpone Fabioli, Units Sold : 410",
                    "value": "410"
                }, {
                    "tooltext": "Mozzarella di Giovanni, Units Sold : 546",
                    "value": "546"
                }, {
                    "tooltext": "Queso Cabrales, Units Sold : 559",
                    "value": "559"
                }, {
                    "tooltext": "Queso Manchego La Pastora, Units Sold : 311",
                    "value": "311"
                }, {
                    "tooltext": "Raclette Courdavault, Units Sold : 739",
                    "value": "739"
                }]
            }],
            "seafood": [{
                "data": [{
                    "value": "13892"
                }, {
                    "value": "34750"
                }, {
                    "value": "8864"
                }, {
                    "value": "11154"
                }, {
                    "value": "22692"
                }, {
                    "value": "9709"
                }, {
                    "value": "6784"
                }, {
                    "value": "6486"
                }, {
                    "value": "14913"
                }, {
                    "value": "6315"
                }, {
                    "value": "3933"
                }, {
                    "value": "6372"
                }]
            }, {
                "data": [{
                    "tooltext": "Boston Crab Meat, Units Sold : 755",
                    "value": "755"
                }, {
                    "tooltext": "Carnarvon Tigers, Units Sold : 556",
                    "value": "556"
                }, {
                    "tooltext": "Escargots de Bourgogne, Units Sold : 669",
                    "value": "669"
                }, {
                    "tooltext": "Gravad lax, Units Sold : 429",
                    "value": "429"
                }, {
                    "tooltext": "Ikura, Units Sold : 732",
                    "value": "732"
                }, {
                    "tooltext": "Inlagd Sill, Units Sold : 511",
                    "value": "511"
                }, {
                    "tooltext": "Jack's New England Clam Chowder, Units Sold : 703",
                    "value": "703"
                }, {
                    "tooltext": "Konbu, Units Sold : 1081",
                    "value": "1081"
                }, {
                    "tooltext": "Nord-Ost Matjeshering, Units Sold : 576",
                    "value": "576"
                }, {
                    "tooltext": "Röd Kaviar, Units Sold : 421",
                    "value": "421"
                }, {
                    "tooltext": "Røgede sild, Units Sold : 414",
                    "value": "414"
                }, {
                    "tooltext": "Spegesild, Units Sold : 531",
                    "value": "531"
                }]
            }],
            "condiments": [{
                "data": [{
                    "value": "5080"
                }, {
                    "value": "8382"
                }, {
                    "value": "7451"
                }, {
                    "value": "2635"
                }, {
                    "value": "12700"
                }, {
                    "value": "7060"
                }, {
                    "value": "11283"
                }, {
                    "value": "6120"
                }, {
                    "value": "19600"
                }, {
                    "value": "7683"
                }, {
                    "value": "19580"
                }, {
                    "value": "28140"
                }]
            }, {
                "data": [{
                    "tooltext": "Aniseed Syrup, Units Sold : 508",
                    "value": "508"
                }, {
                    "tooltext": "Chef Anton's Cajun Seasoning, Units Sold : 381",
                    "value": "381"
                }, {
                    "tooltext": "Chef Anton's Gumbo Mix, Units Sold : 349",
                    "value": "349"
                }, {
                    "tooltext": "Genen Shouyu, Units Sold : 170",
                    "value": "170"
                }, {
                    "tooltext": "Grandma's Boysenberry Spread, Units Sold : 508",
                    "value": "508"
                }, {
                    "tooltext": "Gula Malacca, Units Sold : 363",
                    "value": "363"
                }, {
                    "tooltext": "Louisiana Fiery Hot Pepper Sauce, Units Sold : 536",
                    "value": "536"
                }, {
                    "tooltext": "Louisiana Hot Spiced Okra, Units Sold : 360",
                    "value": "360"
                }, {
                    "tooltext": "Northwoods Cranberry Sauce, Units Sold : 490",
                    "value": "490"
                }, {
                    "tooltext": "Original Frankfurter grüne Soße, Units Sold : 591",
                    "value": "591"
                }, {
                    "tooltext": "Sirop d'érable, Units Sold : 687",
                    "value": "687"
                }, {
                    "tooltext": "Vegie-spread, Units Sold : 641",
                    "value": "641"
                }]
            }],
            "produce": [{
                "data": [{
                    "value": "3140"
                }, {
                    "value": "39856"
                }, {
                    "value": "17146"
                }, {
                    "value": "6022"
                }, {
                    "value": "20280"
                }]
            }, {
                "data": [{
                    "tooltext": "Longlife Tofu, Units Sold : 314",
                    "value": "314"
                }, {
                    "tooltext": "Manjimup Dried Apples, Units Sold : 752",
                    "value": "752"
                }, {
                    "tooltext": "Rössle Sauerkraut, Units Sold : 376",
                    "value": "376"
                }, {
                    "tooltext": "Tofu, Units Sold : 259",
                    "value": "259"
                }, {
                    "tooltext": "Uncle Bob's Organic Dried Pears, Units Sold : 676",
                    "value": "676"
                }]
            }],
            "grains_cereals": [{
                "data": [{
                    "value": "3612"
                }, {
                    "value": "22534"
                }, {
                    "value": "11970"
                }, {
                    "value": "7254"
                }, {
                    "value": "9912"
                }, {
                    "value": "4257"
                }, {
                    "value": "25769"
                }]
            }, {
                "data": [{
                    "tooltext": "Filo Mix, Units Sold : 516",
                    "value": "516"
                }, {
                    "tooltext": "Gnocchi di nonna Alice, Units Sold : 593",
                    "value": "593"
                }, {
                    "tooltext": "Gustaf's Knäckebröd, Units Sold : 570",
                    "value": "570"
                }, {
                    "tooltext": "Ravioli Angelo, Units Sold : 372",
                    "value": "372"
                }, {
                    "tooltext": "Singaporean Hokkien Fried Mee, Units Sold : 708",
                    "value": "708"
                }, {
                    "tooltext": "Tunnbröd, Units Sold : 473",
                    "value": "473"
                }, {
                    "tooltext": "Wimmers gute Semmelknödel, Units Sold : 775",
                    "value": "775"
                }]
            }]
        },
        "2012": {
            "beverages": [{
                "data": [{
                    "value": "5742"
                }, {
                    "value": "7125"
                }, {
                    "value": "2790"
                }, {
                    "value": "65348"
                }, {
                    "value": "1850"
                }, {
                    "value": "10488"
                }, {
                    "value": "8676"
                }, {
                    "value": "868"
                }, {
                    "value": "6570"
                }, {
                    "value": "3976"
                }, {
                    "value": "2394"
                }, {
                    "value": "7218"
                }]
            }, {
                "data": [{
                    "tooltext": "Chai, Units Sold : 319",
                    "value": "319"
                }, {
                    "tooltext": "Chang, Units Sold : 375",
                    "value": "375"
                }, {
                    "tooltext": "Chartreuse verte, Units Sold : 155",
                    "value": "155"
                }, {
                    "tooltext": "Côte de Blaye, Units Sold : 248",
                    "value": "248"
                }, {
                    "tooltext": "Guaraná Fantástica, Units Sold : 411",
                    "value": "411"
                }, {
                    "tooltext": "Ipoh Coffee, Units Sold : 228",
                    "value": "228"
                }, {
                    "tooltext": "Lakkalikööri, Units Sold : 482",
                    "value": "482"
                }, {
                    "tooltext": "Laughing Lumberjack Lager, Units Sold : 62",
                    "value": "62"
                }, {
                    "tooltext": "Outback Lager, Units Sold : 438",
                    "value": "438"
                }, {
                    "tooltext": "Rhönbräu Klosterbier, Units Sold : 513",
                    "value": "513"
                }, {
                    "tooltext": "Sasquatch Ale, Units Sold : 171",
                    "value": "171"
                }, {
                    "tooltext": "Steeleye Stout, Units Sold : 401",
                    "value": "401"
                }]
            }],
            "meat_poultry": [{
                "data": [{
                    "value": "16341"
                }, {
                    "value": "8924"
                }, {
                    "value": "11856"
                }, {
                    "value": "15810"
                }, {
                    "value": "33052"
                }, {
                    "value": "3613"
                }]
            }, {
                "data": [{
                    "tooltext": "Alice Mutton, Units Sold : 419",
                    "value": "419"
                }, {
                    "tooltext": "Mishi Kobe Niku, Units Sold : 92",
                    "value": "92"
                }, {
                    "tooltext": "Pâté chinois, Units Sold : 494",
                    "value": "494"
                }, {
                    "tooltext": "Perth Pasties, Units Sold : 482",
                    "value": "482"
                }, {
                    "tooltext": "Thüringer Rostbratwurst, Units Sold : 267",
                    "value": "267"
                }, {
                    "tooltext": "Tourtière, Units Sold : 485",
                    "value": "485"
                }]
            }],
            "confections": [{
                "data": [{
                    "value": "1658"
                }, {
                    "value": "13460"
                }, {
                    "value": "3580"
                }, {
                    "value": "1358"
                }, {
                    "value": "8481"
                }, {
                    "value": "9658"
                }, {
                    "value": "4750"
                }, {
                    "value": "11016"
                }, {
                    "value": "5800"
                }, {
                    "value": "23171"
                }, {
                    "value": "2788"
                }, {
                    "value": "2681"
                }, {
                    "value": "3126"
                }]
            }, {
                "data": [{
                    "tooltext": "Chocolade, Units Sold : 130",
                    "value": "130"
                }, {
                    "tooltext": "Gumbär Gummibärchen, Units Sold : 431",
                    "value": "431"
                }, {
                    "tooltext": "Maxilaku, Units Sold : 179",
                    "value": "179"
                }, {
                    "tooltext": "NuNuCa Nuß-Nougat-Creme, Units Sold : 97",
                    "value": "97"
                }, {
                    "tooltext": "Pavlova, Units Sold : 486",
                    "value": "486"
                }, {
                    "tooltext": "Schoggi Schokolade, Units Sold : 220",
                    "value": "220"
                }, {
                    "tooltext": "Scottish Longbreads, Units Sold : 380",
                    "value": "380"
                }, {
                    "tooltext": "Sir Rodney's Marmalade, Units Sold : 136",
                    "value": "136"
                }, {
                    "tooltext": "Sir Rodney's Scones, Units Sold : 580",
                    "value": "580"
                }, {
                    "tooltext": "Tarte au sucre, Units Sold : 470",
                    "value": "470"
                }, {
                    "tooltext": "Teatime Chocolate Biscuits, Units Sold : 303",
                    "value": "303"
                }, {
                    "tooltext": "Valkoinen suklaa, Units Sold : 165",
                    "value": "165"
                }, {
                    "tooltext": "Zaanse koeken, Units Sold : 329",
                    "value": "329"
                }]
            }],
            "dairy_products": [{
                "data": [{
                    "value": "25874"
                }, {
                    "value": "12621"
                }, {
                    "value": "1040"
                }, {
                    "value": "8388"
                }, {
                    "value": "16704"
                }, {
                    "value": "3136"
                }, {
                    "value": "13920"
                }, {
                    "value": "6069"
                }, {
                    "value": "8968"
                }, {
                    "value": "38445"
                }]
            }, {
                "data": [{
                    "tooltext": "Camembert Pierrot, Units Sold : 761",
                    "value": "761"
                }, {
                    "tooltext": "Fløtemysost, Units Sold : 587",
                    "value": "587"
                }, {
                    "tooltext": "Geitost, Units Sold : 416",
                    "value": "416"
                }, {
                    "tooltext": "Gorgonzola Telino, Units Sold : 671",
                    "value": "671"
                }, {
                    "tooltext": "Gudbrandsdalsost, Units Sold : 464",
                    "value": "464"
                }, {
                    "tooltext": "Mascarpone Fabioli, Units Sold : 98",
                    "value": "98"
                }, {
                    "tooltext": "Mozzarella di Giovanni, Units Sold : 400",
                    "value": "400"
                }, {
                    "tooltext": "Queso Cabrales, Units Sold : 289",
                    "value": "289"
                }, {
                    "tooltext": "Queso Manchego La Pastora, Units Sold : 236",
                    "value": "236"
                }, {
                    "tooltext": "Raclette Courdavault, Units Sold : 699",
                    "value": "699"
                }]
            }],
            "seafood": [{
                "data": [{
                    "value": "10948"
                }, {
                    "value": "16313"
                }, {
                    "value": "3604"
                }, {
                    "value": "728"
                }, {
                    "value": "9610"
                }, {
                    "value": "6726"
                }, {
                    "value": "4661"
                }, {
                    "value": "1020"
                }, {
                    "value": "6265"
                }, {
                    "value": "3840"
                }, {
                    "value": "3610"
                }, {
                    "value": "4104"
                }]
            }, {
                "data": [{
                    "tooltext": "Boston Crab Meat, Units Sold : 595",
                    "value": "595"
                }, {
                    "tooltext": "Carnarvon Tigers, Units Sold : 261",
                    "value": "261"
                }, {
                    "tooltext": "Escargots de Bourgogne, Units Sold : 272",
                    "value": "272"
                }, {
                    "tooltext": "Gravad lax, Units Sold : 28",
                    "value": "28"
                }, {
                    "tooltext": "Ikura, Units Sold : 310",
                    "value": "310"
                }, {
                    "tooltext": "Inlagd Sill, Units Sold : 354",
                    "value": "354"
                }, {
                    "tooltext": "Jack's New England Clam Chowder, Units Sold : 483",
                    "value": "483"
                }, {
                    "tooltext": "Konbu, Units Sold : 170",
                    "value": "170"
                }, {
                    "tooltext": "Nord-Ost Matjeshering, Units Sold : 242",
                    "value": "242"
                }, {
                    "tooltext": "Röd Kaviar, Units Sold : 256",
                    "value": "256"
                }, {
                    "tooltext": "Røgede sild, Units Sold : 380",
                    "value": "380"
                }, {
                    "tooltext": "Spegesild, Units Sold : 342",
                    "value": "342"
                }]
            }],
            "condiments": [{
                "data": [{
                    "value": "1700"
                }, {
                    "value": "5808"
                }, {
                    "value": "1089"
                }, {
                    "value": "1504"
                }, {
                    "value": "2500"
                }, {
                    "value": "7508"
                }, {
                    "value": "9009"
                }, {
                    "value": "2686"
                }, {
                    "value": "3360"
                }, {
                    "value": "5603"
                }, {
                    "value": "10716"
                }, {
                    "value": "7683"
                }]
            }, {
                "data": [{
                    "tooltext": "Aniseed Syrup, Units Sold : 170",
                    "value": "170"
                }, {
                    "tooltext": "Chef Anton's Cajun Seasoning, Units Sold : 264",
                    "value": "264"
                }, {
                    "tooltext": "Chef Anton's Gumbo Mix, Units Sold : 51",
                    "value": "51"
                }, {
                    "tooltext": "Genen Shouyu, Units Sold : 97",
                    "value": "97"
                }, {
                    "tooltext": "Grandma's Boysenberry Spread, Units Sold : 100",
                    "value": "100"
                }, {
                    "tooltext": "Gula Malacca, Units Sold : 386",
                    "value": "386"
                }, {
                    "tooltext": "Louisiana Fiery Hot Pepper Sauce, Units Sold : 428",
                    "value": "428"
                }, {
                    "tooltext": "Louisiana Hot Spiced Okra, Units Sold : 158",
                    "value": "158"
                }, {
                    "tooltext": "Northwoods Cranberry Sauce, Units Sold : 84",
                    "value": "84"
                }, {
                    "tooltext": "Original Frankfurter grüne Soße, Units Sold : 431",
                    "value": "431"
                }, {
                    "tooltext": "Sirop d'érable, Units Sold : 376",
                    "value": "376"
                }, {
                    "tooltext": "Vegie-spread, Units Sold : 175",
                    "value": "175"
                }]
            }],
            "produce": [{
                "data": [{
                    "value": "1500"
                }, {
                    "value": "17543"
                }, {
                    "value": "15778"
                }, {
                    "value": "7905"
                }, {
                    "value": "8880"
                }]
            }, {
                "data": [{
                    "tooltext": "Longlife Tofu, Units Sold : 150",
                    "value": "150"
                }, {
                    "tooltext": "Manjimup Dried Apples, Units Sold : 331",
                    "value": "331"
                }, {
                    "tooltext": "Rössle Sauerkraut, Units Sold : 346",
                    "value": "346"
                }, {
                    "tooltext": "Tofu, Units Sold : 340",
                    "value": "340"
                }, {
                    "tooltext": "Uncle Bob's Organic Dried Pears, Units Sold : 296",
                    "value": "296"
                }]
            }],
            "grains_cereals": [{
                "data": [{
                    "value": "2170"
                }, {
                    "value": "34542"
                }, {
                    "value": "4179"
                }, {
                    "value": "2418"
                }, {
                    "value": "5838"
                }, {
                    "value": "2943"
                }, {
                    "value": "9177"
                }, {
                    "tooltext": "Filo Mix, Units Sold : 310",
                    "value": "310"
                }]
            }, {
                "data": [{
                    "tooltext": "Gnocchi di nonna Alice, Units Sold : 909",
                    "value": "909"
                }, {
                    "tooltext": "Gustaf's Knäckebröd, Units Sold : 199",
                    "value": "199"
                }, {
                    "tooltext": "Ravioli Angelo, Units Sold : 124",
                    "value": "124"
                }, {
                    "tooltext": "Singaporean Hokkien Fried Mee, Units Sold : 417",
                    "value": "417"
                }, {
                    "tooltext": "Tunnbröd, Units Sold : 327",
                    "value": "327"
                }, {
                    "tooltext": "Wimmers gute Semmelknödel, Units Sold : 276",
                    "value": "276"
                }]
            }]
        }
    },
    inventoryByProductCategoriesCategories: [{
        "label": "Seafood"
    }, {
        "label": "Beverages"
    }, {
        "label": "Condiments"
    }, {
        "label": "Dairy Products"
    }, {
        "label": "Confections"
    }, {
        "label": "Meat/Poultry"
    }, {
        "label": "Grains/Cereals"
    }, {
        "label": "Produce"
    }],
    inventoryByProductCategoriesData: [{
        "data": [{
            "label": "Seafood",
            "value": "13010"
        }, {
            "label": "Beverages",
            "value": "12480"
        }, {
            "label": "Condiments",
            "value": "12024"
        }, {
            "label": "Dairy Products",
            "value": "11271"
        }, {
            "label": "Confections",
            "value": "10392"
        }, {
            "label": "Meat/Poultry",
            "value": "5729"
        }, {
            "label": "Grains/Cereals",
            "value": "5595"
        }, {
            "label": "Produce",
            "value": "3549"
        }]
    }],
    "averageShippingTimeData": {
        "2014": [{
            "data": {
                "label": "Poland",
                "color": "",
                "value": "10",

                "tooltip": {
                    "Warszawa": "10 days"
                }
            }
        }, {
            "data": {
                "label": "Canada",
                "color": "",
                "value": "9",

                "tooltip": {
                    "Vancouver": "17 days",
                    "Tsawassen": "8 days",
                    "Montréal": "3 days"
                }
            }
        }, {
            "data": {
                "label": "Sweden",
                "color": "",
                "value": "8",

                "tooltip": {
                    "Luleå": "9 days",
                    "Bräcke": "7 days"
                }
            }
        }, {
            "data": {
                "label": "Germany",
                "color": "",
                "value": "5",

                "tooltip": {
                    "München": "14 days",
                    "Aachen": "7 days",
                    "Köln": "5 days",
                    "Münster": "4 days",
                    "Brandenburg": "4 days",
                    "Frankfurt a.M.": "4 days",
                    "Cunewalde": "4 days",
                    "Leipzig": "3 days",
                    "Stuttgart": "3 days",
                    "Mannheim": "2 days"
                }
            }
        }, {
            "data": {
                "label": "USA",
                "color": "",
                "value": "5",

                "tooltip": {
                    "Lander": "8 days",
                    "Butte": "8 days",
                    "Elgin": "7 days",
                    "Seattle": "6 days",
                    "Boise": "6 days",
                    "Portland": "5 days",
                    "Albuquerque": "5 days",
                    "Kirkland": "4 days",
                    "Anchorage": "3 days",
                    "Eugene": "2 days",
                    "Walla Walla": "1 days"
                }
            }
        }, {
            "data": {
                "label": "Denmark",
                "color": "",
                "value": "4",

                "tooltip": {
                    "Århus": "4 days",
                    "København": "4 days"
                }
            }
        }, {
            "data": {
                "label": "Argentina",
                "color": "",
                "value": "4",

                "tooltip": {
                    "Buenos Aires": "4 days"
                }
            }
        }, {
            "data": {
                "label": "UK",
                "color": "",
                "value": "4",

                "tooltip": {
                    "Cowes": "6 days",
                    "London": "4 days",
                    "Colchester": "3 days"
                }
            }
        }, {
            "data": {
                "label": "Italy",
                "color": "",
                "value": "4",

                "tooltip": {
                    "Reggio Emilia": "6 days",
                    "Bergamo": "5 days",
                    "Torino": "3 days"
                }
            }
        }, {
            "data": {
                "label": "Norway",
                "color": "",
                "value": "3",

                "tooltip": {
                    "Stavern": "3 days"
                }
            }
        }, {
            "data": {
                "label": "Austria",
                "color": "",
                "value": "3",

                "tooltip": {
                    "Graz": "3 days"
                }
            }
        }, {
            "data": {
                "label": "Finland",
                "color": "",
                "value": "3",

                "tooltip": {
                    "Oulu": "4 days",
                    "Helsinki": "3 days"
                }
            }
        }, {
            "data": {
                "label": "Belgium",
                "color": "",
                "value": "3",

                "tooltip": {
                    "Charleroi": "3 days"
                }
            }
        }, {
            "data": {
                "label": "Ireland",
                "color": "",
                "value": "3",

                "tooltip": {
                    "Cork": "3 days"
                }
            }
        }, {
            "data": {
                "label": "Brazil",
                "color": "",
                "value": "3",

                "tooltip": {
                    "SÃ£o Paulo": "5 days",
                    "Resende": "5 days",
                    "São Paulo": "4 days",
                    "Rio de Janeiro": "4 days",
                    "Campinas": "1 days"
                }
            }
        }, {
            "data": {
                "label": "Venezuela",
                "color": "",
                "value": "3",

                "tooltip": {
                    "San Cristóbal": "6 days",
                    "Caracas": "2 days",
                    "I. de Margarita": "2 days",
                    "Barquisimeto": "2 days"
                }
            }
        }, {
            "data": {
                "label": "Spain",
                "color": "",
                "value": "3",

                "tooltip": {
                    "Madrid": "7 days",
                    "Barcelona": "2 days",
                    "Sevilla": "2 days"
                }
            }
        }, {
            "data": {
                "label": "Portugal",
                "color": "",
                "value": "2",

                "tooltip": {
                    "Lisboa": "2 days"
                }
            }
        }, {
            "data": {
                "label": "Mexico",
                "color": "",
                "value": "2",

                "tooltip": {
                    "MÃ©xico D.F.": "3 days",
                    "México D.F.": "1 days"
                }
            }
        }, {
            "data": {
                "label": "France",
                "color": "",
                "value": "2",

                "tooltip": {
                    "Lyon": "6 days",
                    "Torino": "5 days",
                    "Toulouse": "4 days",
                    "Paris": "4 days",
                    "Marseille": "3 days",
                    "Lille": "2 days",
                    "Strasbourg": "2 days",
                    "Versailles": "2 days",
                    "Reims": "2 days",
                    "Nantes": "1 days"
                }
            }
        }, {
            "data": {
                "label": "Switzerland",
                "color": "",
                "value": "2",

                "tooltip": {
                    "Bern": "4 days",
                    "Genève": "1 days"
                }
            }
        }],
        "2013": [{
            "data": {
                "label": "Belgium",
                "color": "",
                "value": "10",

                "tooltip": {
                    "Charleroi": "11 days",
                    "Bruxelles": "9 days"
                }
            }
        }, {
            "data": {
                "label": "Poland",
                "color": "",
                "value": "9",

                "tooltip": {
                    "Warszawa": "9 days"
                }
            }
        }, {
            "data": {
                "label": "Ireland",
                "color": "",
                "value": "8",

                "tooltip": {
                    "Cork": "8 days"
                }
            }
        }, {
            "data": {
                "label": "USA",
                "color": "",
                "value": "8",

                "tooltip": {
                    "Anchorage": "20 days",
                    "Butte": "12 days",
                    "Portland": "11 days",
                    "Boise": "9 days",
                    "Seattle": "8 days",
                    "Albuquerque": "8 days",
                    "Eugene": "7 days",
                    "Kirkland": "6 days",
                    "San Francisco": "5 days",
                    "Lander": "3 days",
                    "Elgin": "2 days"
                }
            }
        }, {
            "data": {
                "label": "Brazil",
                "color": "",
                "value": "8",

                "tooltip": {
                    "Resende": "11 days",
                    "São Paulo": "11 days",
                    "Rio de Janeiro": "9 days",
                    "SÃ£o Paulo": "6 days",
                    "Campinas": "3 days"
                }
            }
        }, {
            "data": {
                "label": "Venezuela",
                "color": "",
                "value": "8",

                "tooltip": {
                    "Caracas": "14 days",
                    "I. de Margarita": "7 days",
                    "San Cristóbal": "7 days",
                    "Barquisimeto": "4 days"
                }
            }
        }, {
            "data": {
                "label": "Spain",
                "color": "",
                "value": "8",

                "tooltip": {
                    "Sevilla": "9 days",
                    "Barcelona": "9 days",
                    "Madrid": "7 days"
                }
            }
        }, {
            "data": {
                "label": "Portugal",
                "color": "",
                "value": "7",

                "tooltip": {
                    "Lisboa": "7 days"
                }
            }
        }, {
            "data": {
                "label": "Argentina",
                "color": "",
                "value": "7",

                "tooltip": {
                    "Buenos Aires": "7 days"
                }
            }
        }, {
            "data": {
                "label": "Sweden",
                "color": "",
                "value": "7",

                "tooltip": {
                    "Bräcke": "9 days",
                    "Luleå": "6 days"
                }
            }
        }, {
            "data": {
                "label": "Mexico",
                "color": "",
                "value": "7",

                "tooltip": {
                    "México D.F.": "10 days",
                    "MÃ©xico D.F.": "4 days"
                }
            }
        }, {
            "data": {
                "label": "Finland",
                "color": "",
                "value": "7",

                "tooltip": {
                    "Helsinki": "10 days",
                    "Oulu": "5 days"
                }
            }
        }, {
            "data": {
                "label": "Italy",
                "color": "",
                "value": "6",

                "tooltip": {
                    "Torino": "7 days",
                    "Bergamo": "7 days",
                    "Reggio Emilia": "6 days"
                }
            }
        }, {
            "data": {
                "label": "France",
                "color": "",
                "value": "6",

                "tooltip": {
                    "Marseille": "11 days",
                    "Paris": "9 days",
                    "Toulouse": "9 days",
                    "Torino": "8 days",
                    "Versailles": "8 days",
                    "Lille": "6 days",
                    "Lyon": "4 days",
                    "Nantes": "3 days",
                    "Reims": "3 days",
                    "Strasbourg": "2 days"
                }
            }
        }, {
            "data": {
                "label": "UK",
                "color": "",
                "value": "6",

                "tooltip": {
                    "Colchester": "7 days",
                    "Cowes": "7 days",
                    "London": "4 days"
                }
            }
        }, {
            "data": {
                "label": "Norway",
                "color": "",
                "value": "5",

                "tooltip": {
                    "Stavern": "5 days"
                }
            }
        }, {
            "data": {
                "label": "Switzerland",
                "color": "",
                "value": "5",

                "tooltip": {
                    "Bern": "6 days",
                    "Genève": "4 days"
                }
            }
        }, {
            "data": {
                "label": "Germany",
                "color": "",
                "value": "5",

                "tooltip": {
                    "Berlin": "9 days",
                    "Aachen": "8 days",
                    "Frankfurt a.M.": "8 days",
                    "Brandenburg": "5 days",
                    "Cunewalde": "5 days",
                    "Köln": "5 days",
                    "Mannheim": "4 days",
                    "München": "4 days",
                    "Leipzig": "4 days",
                    "Stuttgart": "2 days",
                    "Münster": "1 days"
                }
            }
        }, {
            "data": {
                "label": "Canada",
                "color": "",
                "value": "4",

                "tooltip": {
                    "Tsawassen": "4 days",
                    "Montréal": "4 days"
                }
            }
        }, {
            "data": {
                "label": "Denmark",
                "color": "",
                "value": "4",

                "tooltip": {
                    "Århus": "6 days",
                    "København": "3 days"
                }
            }
        }, {
            "data": {
                "label": "Austria",
                "color": "",
                "value": "4",

                "tooltip": {
                    "Graz": "4 days",
                    "Salzburg": "4 days"
                }
            }
        }],
        "2012": [{
            "data": {
                "label": "Sweden",
                "color": "",
                "value": "13",

                "tooltip": {
                    "Luleå": "14 days",
                    "Bräcke": "13 days"
                }
            }
        }, {
            "data": {
                "label": "Switzerland",
                "color": "",
                "value": "13",

                "tooltip": {
                    "Genève": "17 days",
                    "Bern": "10 days"
                }
            }
        }, {
            "data": {
                "label": "Argentina",
                "color": "",
                "value": "12",

                "tooltip": {
                    "Buenos Aires": "12 days"
                }
            }
        }, {
            "data": {
                "label": "USA",
                "color": "",
                "value": "12",

                "tooltip": {
                    "Butte": "19 days",
                    "San Francisco": "17 days",
                    "Eugene": "14 days",
                    "Lander": "14 days",
                    "Boise": "13 days",
                    "Portland": "13 days",
                    "Anchorage": "12 days",
                    "Elgin": "11 days",
                    "Seattle": "9 days",
                    "Albuquerque": "8 days",
                    "Walla Walla": "8 days"
                }
            }
        }, {
            "data": {
                "label": "Portugal",
                "color": "",
                "value": "11",

                "tooltip": {
                    "Lisboa": "11 days"
                }
            }
        }, {
            "data": {
                "label": "Mexico",
                "color": "",
                "value": "11",

                "tooltip": {
                    "MÃ©xico D.F.": "11 days",
                    "México D.F.": "11 days"
                }
            }
        }, {
            "data": {
                "label": "France",
                "color": "",
                "value": "11",

                "tooltip": {
                    "Lyon": "17 days",
                    "Strasbourg": "13 days",
                    "Nantes": "12 days",
                    "Reims": "12 days",
                    "Paris": "11 days",
                    "Marseille": "11 days",
                    "Lille": "10 days",
                    "Toulouse": "8 days"
                }
            }
        }, {
            "data": {
                "label": "Canada",
                "color": "",
                "value": "11",

                "tooltip": {
                    "Vancouver": "14 days",
                    "Tsawassen": "11 days",
                    "Montréal": "10 days"
                }
            }
        }, {
            "data": {
                "label": "Denmark",
                "color": "",
                "value": "10",

                "tooltip": {
                    "Århus": "13 days",
                    "København": "7 days"
                }
            }
        }, {
            "data": {
                "label": "Ireland",
                "color": "",
                "value": "10",

                "tooltip": {
                    "Cork": "10 days"
                }
            }
        }, {
            "data": {
                "label": "Poland",
                "color": "",
                "value": "10",

                "tooltip": {
                    "Warszawa": "10 days"
                }
            }
        }, {
            "data": {
                "label": "Austria",
                "color": "",
                "value": "10",

                "tooltip": {
                    "Graz": "11 days",
                    "Salzburg": "9 days"
                }
            }
        }, {
            "data": {
                "label": "Brazil",
                "color": "",
                "value": "10",

                "tooltip": {
                    "SÃ£o Paulo": "12 days",
                    "Campinas": "12 days",
                    "São Paulo": "11 days",
                    "Rio de Janeiro": "8 days"
                }
            }
        }, {
            "data": {
                "label": "Germany",
                "color": "",
                "value": "9",

                "tooltip": {
                    "Stuttgart": "15 days",
                    "Berlin": "14 days",
                    "Münster": "11 days",
                    "Mannheim": "11 days",
                    "Brandenburg": "10 days",
                    "Frankfurt a.M.": "10 days",
                    "Cunewalde": "10 days",
                    "München": "9 days",
                    "Leipzig": "8 days",
                    "Köln": "1 days"
                }
            }
        }, {
            "data": {
                "label": "Venezuela",
                "color": "",
                "value": "9",

                "tooltip": {
                    "I. de Margarita": "10 days",
                    "San Cristóbal": "9 days",
                    "Barquisimeto": "8 days"
                }
            }
        }, {
            "data": {
                "label": "Finland",
                "color": "",
                "value": "9",

                "tooltip": {
                    "Oulu": "10 days",
                    "Helsinki": "8 days"
                }
            }
        }, {
            "data": {
                "label": "Italy",
                "color": "",
                "value": "8",

                "tooltip": {
                    "Reggio Emilia": "10 days",
                    "Bergamo": "9 days",
                    "Torino": "7 days"
                }
            }
        }, {
            "data": {
                "label": "Norway",
                "color": "",
                "value": "8",

                "tooltip": {
                    "Stavern": "8 days"
                }
            }
        }, {
            "data": {
                "label": "UK",
                "color": "",
                "value": "8",

                "tooltip": {
                    "Colchester": "10 days",
                    "London": "10 days",
                    "Cowes": "6 days"
                }
            }
        }, {
            "data": {
                "label": "Spain",
                "color": "",
                "value": "6",

                "tooltip": {
                    "Sevilla": "11 days",
                    "Barcelona": "1 days"
                }
            }
        }, {
            "data": {
                "label": "Belgium",
                "color": "",
                "value": "5",

                "tooltip": {
                    "Bruxelles": "6 days",
                    "Charleroi": "5 days"
                }
            }
        }]
    },
    customerSatisfactionData: {
        "2014": [{
            "data": {
                "label": "Very Satisfied",
                "value": "36"
            }
        }, {
            "data": {
                "label": "Satisfied",
                "value": "25"
            }
        }, {
            "data": {
                "label": "Neutral",
                "value": "25"
            }
        }, {
            "data": {
                "label": "Unsatisfied",
                "value": "10"
            }
        }, {
            "data": {
                "label": "Very Unsatisfied",
                "value": "4"
            }
        }],
        "2013": [{
            "data": {
                "label": "Very Satisfied",
                "value": "26"

            }
        }, {
            "data": {
                "label": "Satisfied",
                "value": "35"

            }
        }, {
            "data": {
                "label": "Neutral",
                "value": "20"

            }
        }, {
            "data": {
                "label": "Unsatisfied",
                "value": "15"

            }
        }, {
            "data": {
                "label": "Very Unsatisfied",
                "value": "4"

            }
        }],
        "2012": [{
            "data": {
                "label": "Very Satisfied",
                "value": "42"

            }
        }, {
            "data": {
                "label": "Satisfied",
                "value": "35"

            }
        }, {
            "data": {
                "label": "Neutral",
                "value": "15"

            }
        }, {
            "data": {
                "label": "Unsatisfied",
                "value": "4"

            }
        }, {
            "data": {
                "label": "Very Unsatisfied",
                "value": "4"

            }
        }]
    },
    "costOfGoodsSoldCategories": [{
        "label": "Jan"
    }, {
        "label": "Feb"
    }, {
        "label": "Mar"
    }, {
        "label": "Apr"
    }, {
        "label": "May"
    }, {
        "label": "Jun"
    }, {
        "label": "Jul"
    }, {
        "label": "Aug"
    }, {
        "label": "Sep"
    }, {
        "label": "Oct"
    }, {
        "label": "Nov"
    }, {
        "label": "Dec"
    }],
    "costOfGoodsSoldData": {
        "2014": [{
            "data": [{
                "value": "37229.40171"
            }, {
                "value": "43775.851"
            }, {
                "value": "34916.48286"
            }, {
                "value": "30259.44826"
            }, {
                "value": "40846.82723"
            }, {
                "value": "41368.33652"
            }, {
                "value": "41387.82917"
            }, {
                "value": "47728.93959"
            }, {
                "value": "34475.26346"
            }, {
                "value": "46419.05641"
            }, {
                "value": "41482.03932"
            }, {
                "value": "4324.59866"
            }]
        }, {
            "data": [{
                "value": "28061.17936"
            }, {
                "value": "33563.58983"
            }, {
                "value": "26016.47785"
            }, {
                "value": "23510.47899"
            }, {
                "value": "31206.1037"
            }, {
                "value": "31509.4745"
            }, {
                "value": "31470.0167"
            }, {
                "value": "37245.53295"
            }, {
                "value": "27134.70131"
            }, {
                "value": "34764.99948"
            }, {
                "value": "31201.39721"
            }, {
                "value": "3321.3255"
            }]
        }, {
            "data": [{
                "value": "17440.25889"
            }, {
                "value": "20866.28487"
            }, {
                "value": "16690.92485"
            }, {
                "value": "13856.99203"
            }, {
                "value": "20533.52924"
            }, {
                "value": "18935.72225"
            }, {
                "value": "19201.83351"
            }, {
                "value": "22068.58806"
            }, {
                "value": "16383.33025"
            }, {
                "value": "21002.71899"
            }, {
                "value": "18829.14661"
            }, {
                "value": "2294.64564"
            }]
        }],
        "2013": [{
            "data": [{
                "value": "29697.22519"
            }, {
                "value": "37071.9649"
            }, {
                "value": "40917.92266"
            }, {
                "value": "41829.86942"
            }, {
                "value": "52873.88829"
            }, {
                "value": "34530.21759"
            }, {
                "value": "40793.46123"
            }, {
                "value": "39468.89088"
            }, {
                "value": "42067.58682"
            }, {
                "value": "39200.78414"
            }, {
                "value": "42221.76818"
            }, {
                "value": "36460.35215"
            }]
        }, {
            "data": [{
                "value": "22792.34427"
            }, {
                "value": "28084.67769"
            }, {
                "value": "31893.86823"
            }, {
                "value": "32112.59147"
            }, {
                "value": "40324.53964"
            }, {
                "value": "25918.21766"
            }, {
                "value": "31044.001"
            }, {
                "value": "30029.22732"
            }, {
                "value": "32121.15782"
            }, {
                "value": "29928.53006"
            }, {
                "value": "32676.20025"
            }, {
                "value": "27741.68969"
            }]
        }, {
            "data": [{
                "value": "13295.34554"
            }, {
                "value": "17658.32547"
            }, {
                "value": "20031.21571"
            }, {
                "value": "20061.15945"
            }, {
                "value": "25417.58034"
            }, {
                "value": "15151.43379"
            }, {
                "value": "18305.75877"
            }, {
                "value": "18654.47276"
            }, {
                "value": "20056.36916"
            }, {
                "value": "18364.32439"
            }, {
                "value": "19524.72793"
            }, {
                "value": "16178.64327"
            }]
        }],
        "2012": [{
            "data": [{
                "value": "24232.19967"
            }, {
                "value": "26438.92904"
            }, {
                "value": "24616.48143"
            }, {
                "value": "17330.6769"
            }, {
                "value": "23175.62711"
            }, {
                "value": "21775.02895"
            }, {
                "value": "14902.05662"
            }, {
                "value": "21366.32493"
            }, {
                "value": "19238.55547"
            }, {
                "value": "22999.57301"
            }, {
                "value": "26592.29947"
            }, {
                "value": "17545.01932"
            }]
        }, {
            "data": [{
                "value": "18422.0472"
            }, {
                "value": "19852.52341"
            }, {
                "value": "19281.63545"
            }, {
                "value": "13042.32018"
            }, {
                "value": "18364.6353"
            }, {
                "value": "16529.48057"
            }, {
                "value": "11424.70136"
            }, {
                "value": "16430.55251"
            }, {
                "value": "15012.33586"
            }, {
                "value": "18085.67714"
            }, {
                "value": "20463.18106"
            }, {
                "value": "13429.10072"
            }]
        }, {
            "data": [{
                "value": "11542.06553"
            }, {
                "value": "13548.43655"
            }, {
                "value": "11270.91182"
            }, {
                "value": "8331.63654"
            }, {
                "value": "10693.83463"
            }, {
                "value": "10507.37188"
            }, {
                "value": "6774.07983"
            }, {
                "value": "9543.05286"
            }, {
                "value": "8426.58307"
            }, {
                "value": "9770.13894"
            }, {
                "value": "12103.90351"
            }, {
                "value": "8120.26072"
            }]
        }]
    },
    "topMonthlySalesTabCategories": [{
        "label": "Jan"
    }, {
        "label": "Feb"
    }, {
        "label": "Mar"
    }, {
        "label": "Apr"
    }, {
        "label": "May"
    }, {
        "label": "Jun"
    }, {
        "label": "Jul"
    }, {
        "label": "Aug"
    }, {
        "label": "Sep"
    }, {
        "label": "Oct"
    }, {
        "label": "Nov"
    }, {
        "label": "Dec"
    }],
    "topMonthlySalesTabData": {
        "2014": [{
            "data": [{
                "tooltext": "Beverages, $28,232, Jan, 559 Units",
                "value": "28232.50000"
            }, {
                "tooltext": "Beverages, $26,882, Feb, 591 Units",
                "value": "26882.50000"
            }, {
                "tooltext": "Beverages, $26,146, Mar, 519 Units",
                "value": "26146.50000"
            }, {
                "tooltext": "Beverages, $14,817, Apr, 512 Units",
                "value": "14817.00000"
            }, {
                "tooltext": "Beverages, $21,292, May, 539 Units",
                "value": "21292.50000"
            }, {
                "tooltext": "Beverages, $16,521, Jun, 652 Units",
                "value": "16521.25000"
            }, {
                "tooltext": "Beverages, $27,814, Jul, 503 Units",
                "value": "27814.75000"
            }, {
                "tooltext": "Beverages, $19,981, Aug, 611 Units",
                "value": "19981.25000"
            }, {
                "tooltext": "Beverages, $13,447, Sep, 402 Units",
                "value": "13447.00000"
            }, {
                "tooltext": "Beverages, $30,582, Oct, 584 Units",
                "value": "30582.00000"
            }, {
                "tooltext": "Beverages, $27,272, Nov, 497 Units",
                "value": "27272.50000"
            }, {
                "tooltext": "Beverages, $3,967, Dec, 16 Units",
                "value": "3967.50000"
            }]
        }, {
            "data": [{
                "tooltext": "Condiments, $12,050, Jan, 595 Units",
                "value": "12050.55000"
            }, {
                "tooltext": "Condiments, $14,895, Feb, 634 Units",
                "value": "14895.75000"
            }, {
                "tooltext": "Condiments, $9,000, Mar, 499 Units",
                "value": "9000.55000"
            }, {
                "tooltext": "Condiments, $13,034, Apr, 558 Units",
                "value": "13034.95000"
            }, {
                "tooltext": "Condiments, $14,484, May, 576 Units",
                "value": "14484.05000"
            }, {
                "tooltext": "Condiments, $14,161, Jun, 614 Units",
                "value": "14161.55000"
            }, {
                "tooltext": "Condiments, $13,213, Jul, 546 Units",
                "value": "13213.65000"
            }, {
                "tooltext": "Condiments, $15,199, Aug, 655 Units",
                "value": "15199.55000"
            }, {
                "tooltext": "Condiments, $10,011, Sep, 477 Units",
                "value": "10011.30000"
            }, {
                "tooltext": "Condiments, $13,613, Oct, 610 Units",
                "value": "13613.25000"
            }, {
                "tooltext": "Condiments, $10,433, Nov, 492 Units",
                "value": "10433.60000"
            }, {
                "tooltext": "Condiments, $1,512, Dec, 50 Units",
                "value": "1512.70000"
            }]
        }, {
            "data": [{
                "tooltext": "Confections, $11,504, Jan, 513 Units",
                "value": "11504.28000"
            }, {
                "tooltext": "Confections, $17,863, Feb, 680 Units",
                "value": "17863.12000"
            }, {
                "tooltext": "Confections, $15,363, Mar, 543 Units",
                "value": "15363.21000"
            }, {
                "tooltext": "Confections, $10,930, Apr, 567 Units",
                "value": "10930.41000"
            }, {
                "tooltext": "Confections, $20,562, May, 597 Units",
                "value": "20562.53000"
            }, {
                "tooltext": "Confections, $17,460, Jun, 626 Units",
                "value": "17460.22000"
            }, {
                "tooltext": "Confections, $18,681, Jul, 732 Units",
                "value": "18681.61000"
            }, {
                "tooltext": "Confections, $20,556, Aug, 753 Units",
                "value": "20556.10000"
            }, {
                "tooltext": "Confections, $12,619, Sep, 458 Units",
                "value": "12619.28000"
            }, {
                "tooltext": "Confections, $16,010, Oct, 648 Units",
                "value": "16010.37000"
            }, {
                "tooltext": "Confections, $12,606, Nov, 544 Units",
                "value": "12606.79000"
            }, {
                "tooltext": "Confections, $2,761, Dec, 122 Units",
                "value": "2761.00000"
            }]
        }, {
            "data": [{
                "tooltext": "Dairy Products, $14,588, Jan, 488 Units",
                "value": "14588.20000"
            }, {
                "tooltext": "Dairy Products, $13,870, Feb, 483 Units",
                "value": "13870.60000"
            }, {
                "tooltext": "Dairy Products, $10,904, Mar, 471 Units",
                "value": "10904.40000"
            }, {
                "tooltext": "Dairy Products, $11,087, Apr, 359 Units",
                "value": "11087.80000"
            }, {
                "tooltext": "Dairy Products, $17,507, May, 537 Units",
                "value": "17507.90000"
            }, {
                "tooltext": "Dairy Products, $12,242, Jun, 472 Units",
                "value": "12242.30000"
            }, {
                "tooltext": "Dairy Products, $8,492, Jul, 337 Units",
                "value": "8492.60000"
            }, {
                "tooltext": "Dairy Products, $18,104, Aug, 636 Units",
                "value": "18104.90000"
            }, {
                "tooltext": "Dairy Products, $11,972, Sep, 365 Units",
                "value": "11972.10000"
            }, {
                "tooltext": "Dairy Products, $15,091, Oct, 505 Units",
                "value": "15091.20000"
            }, {
                "tooltext": "Dairy Products, $14,059, Nov, 489 Units",
                "value": "14059.10000"
            }, {
                "tooltext": "Dairy Products, $686, Dec, 27 Units",
                "value": "686.50000"
            }]
        }, {
            "data": [{
                "tooltext": "Grains/Cereals, $6,074, Jan, 273 Units",
                "value": "6074.25000"
            }, {
                "tooltext": "Grains/Cereals, $4,151, Feb, 232 Units",
                "value": "4151.00000"
            }, {
                "tooltext": "Grains/Cereals, $5,332, Mar, 232 Units",
                "value": "5332.00000"
            }, {
                "tooltext": "Grains/Cereals, $3,648, Apr, 212 Units",
                "value": "3648.75000"
            }, {
                "tooltext": "Grains/Cereals, $6,256, May, 273 Units",
                "value": "6256.25000"
            }, {
                "tooltext": "Grains/Cereals, $4,937, Jun, 256 Units",
                "value": "4937.50000"
            }, {
                "tooltext": "Grains/Cereals, $4,881, Jul, 230 Units",
                "value": "4881.25000"
            }, {
                "tooltext": "Grains/Cereals, $8,429, Aug, 337 Units",
                "value": "8429.25000"
            }, {
                "tooltext": "Grains/Cereals, $7,916, Sep, 402 Units",
                "value": "7916.25000"
            }, {
                "tooltext": "Grains/Cereals, $7,319, Oct, 359 Units",
                "value": "7319.00000"
            }, {
                "tooltext": "Grains/Cereals, $5,577, Nov, 270 Units",
                "value": "5577.25000"
            }, {
                "tooltext": "Grains/Cereals, $840, Dec, 60 Units",
                "value": "840.00000"
            }]
        }, {
            "data": [{
                "tooltext": "Meat/Poultry, $9,260, Jan, 247 Units",
                "value": "9260.15000"
            }, {
                "tooltext": "Meat/Poultry, $16,732, Feb, 254 Units",
                "value": "16732.02000"
            }, {
                "tooltext": "Meat/Poultry, $4,958, Mar, 158 Units",
                "value": "4958.00000"
            }, {
                "tooltext": "Meat/Poultry, $12,497, Apr, 200 Units",
                "value": "12497.67000"
            }, {
                "tooltext": "Meat/Poultry, $9,752, May, 287 Units",
                "value": "9752.56000"
            }, {
                "tooltext": "Meat/Poultry, $16,959, Jun, 317 Units",
                "value": "16959.10000"
            }, {
                "tooltext": "Meat/Poultry, $20,050, Jul, 314 Units",
                "value": "20050.20000"
            }, {
                "tooltext": "Meat/Poultry, $26,100, Aug, 382 Units",
                "value": "26100.87000"
            }, {
                "tooltext": "Meat/Poultry, $20,612, Sep, 289 Units",
                "value": "20612.76000"
            }, {
                "tooltext": "Meat/Poultry, $19,577, Oct, 339 Units",
                "value": "19577.01000"
            }, {
                "tooltext": "Meat/Poultry, $17,902, Nov, 343 Units",
                "value": "17902.70000"
            }, {
                "tooltext": "Meat/Poultry, $592, Dec, 5 Units",
                "value": "592.16000"
            }]
        }, {
            "data": [{
                "tooltext": "Produce, $5,763, Jan, 191 Units",
                "value": "5763.30000"
            }, {
                "tooltext": "Produce, $5,123, Feb, 141 Units",
                "value": "5123.90000"
            }, {
                "tooltext": "Produce, $10,050, Mar, 300 Units",
                "value": "10050.85000"
            }, {
                "tooltext": "Produce, $1,705, Apr, 79 Units",
                "value": "1705.70000"
            }, {
                "tooltext": "Produce, $7,609, May, 239 Units",
                "value": "7609.75000"
            }, {
                "tooltext": "Produce, $7,969, Jun, 219 Units",
                "value": "7969.20000"
            }, {
                "tooltext": "Produce, $6,573, Jul, 198 Units",
                "value": "6573.80000"
            }, {
                "tooltext": "Produce, $4,455, Aug, 138 Units",
                "value": "4455.70000"
            }, {
                "tooltext": "Produce, $7,222, Sep, 194 Units",
                "value": "7222.95000"
            }, {
                "tooltext": "Produce, $7,920, Oct, 231 Units",
                "value": "7920.45000"
            }, {
                "tooltext": "Produce, $6,723, Nov, 185 Units",
                "value": "6723.25000"
            }, {
                "tooltext": "Produce, $318, Dec, 6 Units",
                "value": "318.00000"
            }]
        }, {
            "data": [{
                "tooltext": "Seafood, $9,571, Jan, 550 Units",
                "value": "9571.15000"
            }, {
                "tooltext": "Seafood, $15,309, Feb, 644 Units",
                "value": "15309.94000"
            }, {
                "tooltext": "Seafood, $8,876, Mar, 472 Units",
                "value": "8876.65000"
            }, {
                "tooltext": "Seafood, $11,849, Apr, 562 Units",
                "value": "11849.41000"
            }, {
                "tooltext": "Seafood, $10,632, May, 585 Units",
                "value": "10632.93000"
            }, {
                "tooltext": "Seafood, $17,241, Jun, 741 Units",
                "value": "17241.36000"
            }, {
                "tooltext": "Seafood, $7,672, Jul, 466 Units",
                "value": "7672.07000"
            }, {
                "tooltext": "Seafood, $12,716, Aug, 579 Units",
                "value": "12716.21000"
            }, {
                "tooltext": "Seafood, $8,058, Sep, 366 Units",
                "value": "8058.41000"
            }, {
                "tooltext": "Seafood, $9,239, Oct, 537 Units",
                "value": "9239.58000"
            }, {
                "tooltext": "Seafood, $12,409, Nov, 440 Units",
                "value": "12409.65000"
            }, {
                "tooltext": "Seafood, $859, Dec, 39 Units",
                "value": "859.91000"
            }]
        }, {
            "data": [{
                "value": "3416",
                "toolText": "Total Units sold in Jan : 3,416"
            }, {
                "value": "3659",
                "toolText": "Total Units sold in Feb : 3,659"
            }, {
                "value": "3194",
                "toolText": "Total Units sold in Mar : 3,194"
            }, {
                "value": "3049",
                "toolText": "Total Units sold in Apr : 3,049"
            }, {
                "value": "3633",
                "toolText": "Total Units sold in May : 3,633"
            }, {
                "value": "3897",
                "toolText": "Total Units sold in Jun : 3,897"
            }, {
                "value": "3326",
                "toolText": "Total Units sold in Jul : 3,326"
            }, {
                "value": "4091",
                "toolText": "Total Units sold in Aug : 4,091"
            }, {
                "value": "2953",
                "toolText": "Total Units sold in Sep : 2,953"
            }, {
                "value": "3813",
                "toolText": "Total Units sold in Oct : 3,813"
            }, {
                "value": "3260",
                "toolText": "Total Units sold in Nov : 3,260"
            }, {
                "value": "325",
                "toolText": "Total Units sold in Dec : 325"
            }]
        }],
        "2013": [{
            "data": [{
                "tooltext": "Beverages, $11,675, Jan, 498 Units",
                "value": "11675.25000"
            }, {
                "tooltext": "Beverages, $28,558, Feb, 622 Units",
                "value": "28558.00000"
            }, {
                "tooltext": "Beverages, $35,869, Mar, 834 Units",
                "value": "35869.50000"
            }, {
                "tooltext": "Beverages, $28,729, Apr, 925 Units",
                "value": "28729.25000"
            }, {
                "tooltext": "Beverages, $24,960, May, 1127 Units",
                "value": "24960.00000"
            }, {
                "tooltext": "Beverages, $17,364, Jun, 562 Units",
                "value": "17364.75000"
            }, {
                "tooltext": "Beverages, $16,646, Jul, 580 Units",
                "value": "16646.00000"
            }, {
                "tooltext": "Beverages, $24,372, Aug, 568 Units",
                "value": "24372.00000"
            }, {
                "tooltext": "Beverages, $35,939, Sep, 710 Units",
                "value": "35939.75000"
            }, {
                "tooltext": "Beverages, $22,370, Oct, 616 Units",
                "value": "22370.75000"
            }, {
                "tooltext": "Beverages, $21,602, Nov, 589 Units",
                "value": "21602.25000"
            }, {
                "tooltext": "Beverages, $10,820, Dec, 391 Units",
                "value": "10820.50000"
            }]
        }, {
            "data": [{
                "tooltext": "Condiments, $6,252, Jan, 257 Units",
                "value": "6252.60000"
            }, {
                "tooltext": "Condiments, $5,000, Feb, 269 Units",
                "value": "5000.45000"
            }, {
                "tooltext": "Condiments, $6,727, Mar, 289 Units",
                "value": "6727.20000"
            }, {
                "tooltext": "Condiments, $11,018, Apr, 378 Units",
                "value": "11018.30000"
            }, {
                "tooltext": "Condiments, $10,737, May, 446 Units",
                "value": "10737.50000"
            }, {
                "tooltext": "Condiments, $13,289, Jun, 585 Units",
                "value": "13289.75000"
            }, {
                "tooltext": "Condiments, $14,312, Jul, 638 Units",
                "value": "14312.25000"
            }, {
                "tooltext": "Condiments, $17,143, Aug, 617 Units",
                "value": "17143.40000"
            }, {
                "tooltext": "Condiments, $14,628, Sep, 560 Units",
                "value": "14628.30000"
            }, {
                "tooltext": "Condiments, $15,177, Oct, 640 Units",
                "value": "15177.70000"
            }, {
                "tooltext": "Condiments, $11,183, Nov, 469 Units",
                "value": "11183.55000"
            }, {
                "tooltext": "Condiments, $10,242, Dec, 436 Units",
                "value": "10242.70000"
            }]
        }, {
            "data": [{
                "tooltext": "Confections, $9,191, Jan, 471 Units",
                "value": "9191.98000"
            }, {
                "tooltext": "Confections, $11,839, Feb, 440 Units",
                "value": "11839.85000"
            }, {
                "tooltext": "Confections, $10,574, Mar, 475 Units",
                "value": "10574.05000"
            }, {
                "tooltext": "Confections, $24,302, Apr, 880 Units",
                "value": "24302.85000"
            }, {
                "tooltext": "Confections, $10,309, May, 538 Units",
                "value": "10309.78000"
            }, {
                "tooltext": "Confections, $10,083, Jun, 414 Units",
                "value": "10083.90000"
            }, {
                "tooltext": "Confections, $19,939, Jul, 733 Units",
                "value": "19939.16000"
            }, {
                "tooltext": "Confections, $14,074, Aug, 682 Units",
                "value": "14074.22000"
            }, {
                "tooltext": "Confections, $13,414, Sep, 508 Units",
                "value": "13414.35000"
            }, {
                "tooltext": "Confections, $16,094, Oct, 559 Units",
                "value": "16094.54000"
            }, {
                "tooltext": "Confections, $16,438, Nov, 704 Units",
                "value": "16438.82000"
            }, {
                "tooltext": "Confections, $16,722, Dec, 811 Units",
                "value": "16722.66000"
            }]
        }, {
            "data": [{
                "tooltext": "Dairy Products, $10,590, Jan, 406 Units",
                "value": "10590.50000"
            }, {
                "tooltext": "Dairy Products, $18,835, Feb, 562 Units",
                "value": "18835.50000"
            }, {
                "tooltext": "Dairy Products, $11,889, Mar, 506 Units",
                "value": "11889.50000"
            }, {
                "tooltext": "Dairy Products, $14,990, Apr, 581 Units",
                "value": "14990.80000"
            }, {
                "tooltext": "Dairy Products, $36,452, May, 1005 Units",
                "value": "36452.10000"
            }, {
                "tooltext": "Dairy Products, $8,864, Jun, 322 Units",
                "value": "8864.50000"
            }, {
                "tooltext": "Dairy Products, $12,196, Jul, 433 Units",
                "value": "12196.70000"
            }, {
                "tooltext": "Dairy Products, $11,643, Aug, 500 Units",
                "value": "11643.50000"
            }, {
                "tooltext": "Dairy Products, $7,656, Sep, 281 Units",
                "value": "7656.00000"
            }, {
                "tooltext": "Dairy Products, $6,880, Oct, 292 Units",
                "value": "6880.70000"
            }, {
                "tooltext": "Dairy Products, $12,401, Nov, 458 Units",
                "value": "12401.80000"
            }, {
                "tooltext": "Dairy Products, $14,999, Dec, 537 Units",
                "value": "14999.20000"
            }]
        }, {
            "data": [{
                "tooltext": "Grains/Cereals, $5,810, Jan, 202 Units",
                "value": "5810.75000"
            }, {
                "tooltext": "Grains/Cereals, $12,517, Feb, 536 Units",
                "value": "12517.75000"
            }, {
                "tooltext": "Grains/Cereals, $4,183, Mar, 219 Units",
                "value": "4183.75000"
            }, {
                "tooltext": "Grains/Cereals, $3,510, Apr, 189 Units",
                "value": "3510.50000"
            }, {
                "tooltext": "Grains/Cereals, $5,789, May, 297 Units",
                "value": "5789.25000"
            }, {
                "tooltext": "Grains/Cereals, $10,504, Jun, 478 Units",
                "value": "10504.50000"
            }, {
                "tooltext": "Grains/Cereals, $9,581, Jul, 444 Units",
                "value": "9581.50000"
            }, {
                "tooltext": "Grains/Cereals, $7,089, Aug, 397 Units",
                "value": "7089.75000"
            }, {
                "tooltext": "Grains/Cereals, $7,420, Sep, 336 Units",
                "value": "7420.75000"
            }, {
                "tooltext": "Grains/Cereals, $6,872, Oct, 306 Units",
                "value": "6872.75000"
            }, {
                "tooltext": "Grains/Cereals, $7,513, Nov, 340 Units",
                "value": "7513.25000"
            }, {
                "tooltext": "Grains/Cereals, $4,513, Dec, 263 Units",
                "value": "4513.25000"
            }]
        }, {
            "data": [{
                "tooltext": "Meat/Poultry, $14,706, Jan, 259 Units",
                "value": "14706.43000"
            }, {
                "tooltext": "Meat/Poultry, $3,965, Feb, 91 Units",
                "value": "3965.17000"
            }, {
                "tooltext": "Meat/Poultry, $25,377, Mar, 344 Units",
                "value": "25377.86000"
            }, {
                "tooltext": "Meat/Poultry, $4,203, Apr, 92 Units",
                "value": "4203.66000"
            }, {
                "tooltext": "Meat/Poultry, $26,680, May, 531 Units",
                "value": "26680.88000"
            }, {
                "tooltext": "Meat/Poultry, $13,850, Jun, 289 Units",
                "value": "13850.65000"
            }, {
                "tooltext": "Meat/Poultry, $11,824, Jul, 196 Units",
                "value": "11824.72000"
            }, {
                "tooltext": "Meat/Poultry, $13,188, Aug, 313 Units",
                "value": "13188.16000"
            }, {
                "tooltext": "Meat/Poultry, $13,462, Sep, 283 Units",
                "value": "13462.22000"
            }, {
                "tooltext": "Meat/Poultry, $11,383, Oct, 212 Units",
                "value": "11383.41000"
            }, {
                "tooltext": "Meat/Poultry, $23,605, Nov, 359 Units",
                "value": "23605.76000"
            }, {
                "tooltext": "Meat/Poultry, $13,205, Dec, 275 Units",
                "value": "13205.33000"
            }]
        }, {
            "data": [{
                "tooltext": "Produce, $13,047, Jan, 315 Units",
                "value": "13047.15000"
            }, {
                "tooltext": "Produce, $1,639, Feb, 58 Units",
                "value": "1639.00000"
            }, {
                "tooltext": "Produce, $1,202, Mar, 37 Units",
                "value": "1202.80000"
            }, {
                "tooltext": "Produce, $13,168, Apr, 351 Units",
                "value": "13168.00000"
            }, {
                "tooltext": "Produce, $15,073, May, 367 Units",
                "value": "15073.00000"
            }, {
                "tooltext": "Produce, $4,898, Jun, 126 Units",
                "value": "4898.30000"
            }, {
                "tooltext": "Produce, $5,790, Jul, 148 Units",
                "value": "5790.50000"
            }, {
                "tooltext": "Produce, $5,717, Aug, 144 Units",
                "value": "5717.40000"
            }, {
                "tooltext": "Produce, $5,261, Sep, 203 Units",
                "value": "5261.20000"
            }, {
                "tooltext": "Produce, $7,427, Oct, 220 Units",
                "value": "7427.40000"
            }, {
                "tooltext": "Produce, $4,894, Nov, 184 Units",
                "value": "4894.30000"
            }, {
                "tooltext": "Produce, $8,324, Dec, 224 Units",
                "value": "8324.30000"
            }]
        }, {
            "data": [{
                "tooltext": "Seafood, $6,201, Jan, 274 Units",
                "value": "6201.60000"
            }, {
                "tooltext": "Seafood, $14,394, Feb, 715 Units",
                "value": "14394.60000"
            }, {
                "tooltext": "Seafood, $12,841, Mar, 584 Units",
                "value": "12841.69000"
            }, {
                "tooltext": "Seafood, $9,902, Apr, 669 Units",
                "value": "9902.09000"
            }, {
                "tooltext": "Seafood, $10,531, May, 646 Units",
                "value": "10531.66000"
            }, {
                "tooltext": "Seafood, $9,224, Jun, 478 Units",
                "value": "9224.93000"
            }, {
                "tooltext": "Seafood, $15,285, Jul, 763 Units",
                "value": "15285.30000"
            }, {
                "tooltext": "Seafood, $10,009, Aug, 520 Units",
                "value": "10009.03000"
            }, {
                "tooltext": "Seafood, $12,069, Sep, 678 Units",
                "value": "12069.40000"
            }, {
                "tooltext": "Seafood, $16,146, Oct, 715 Units",
                "value": "16146.48000"
            }, {
                "tooltext": "Seafood, $13,015, Nov, 644 Units",
                "value": "13015.83000"
            }, {
                "tooltext": "Seafood, $16,241, Dec, 692 Units",
                "value": "16241.23000"
            }]
        }, {
            "data": [{
                "value": "2682",
                "toolText": "Total Units sold in Jan : 2,682"
            }, {
                "value": "3293",
                "toolText": "Total Units sold in Feb : 3,293"
            }, {
                "value": "3288",
                "toolText": "Total Units sold in Mar : 3,288"
            }, {
                "value": "4065",
                "toolText": "Total Units sold in Apr : 4,065"
            }, {
                "value": "4957",
                "toolText": "Total Units sold in May : 4,957"
            }, {
                "value": "3254",
                "toolText": "Total Units sold in Jun : 3,254"
            }, {
                "value": "3935",
                "toolText": "Total Units sold in Jul : 3,935"
            }, {
                "value": "3741",
                "toolText": "Total Units sold in Aug : 3,741"
            }, {
                "value": "3559",
                "toolText": "Total Units sold in Sep : 3,559"
            }, {
                "value": "3560",
                "toolText": "Total Units sold in Oct : 3,560"
            }, {
                "value": "3747",
                "toolText": "Total Units sold in Nov : 3,747"
            }, {
                "value": "3629",
                "toolText": "Total Units sold in Dec : 3,629"
            }]
        }],
        "2012": [{
            "data": [{
                "tooltext": "Beverages, $14,710, Jan, 305 Units",
                "value": "14710.00000"
            }, {
                "tooltext": "Beverages, $30,280, Feb, 330 Units",
                "value": "30280.50000"
            }, {
                "tooltext": "Beverages, $3,863, Mar, 220 Units",
                "value": "3863.00000"

            }, {
                "tooltext": "Beverages, $13,505, Apr, 435 Units",
                "value": "13505.00000"

            }, {
                "tooltext": "Beverages, $7,656, May, 304 Units",
                "value": "7656.50000"

            }, {
                "tooltext": "Beverages, $15,654, Jun, 322 Units",
                "value": "15654.00000"

            }, {
                "tooltext": "Beverages, $3,602, Jul, 313 Units",
                "value": "3602.00000"

            }, {
                "tooltext": "Beverages, $8,343, Aug, 327 Units",
                "value": "8343.50000"

            }, {
                "tooltext": "Beverages, $6,154, Sep, 334 Units",
                "value": "6154.00000"

            }, {
                "tooltext": "Beverages, $6,198, Oct, 174 Units",
                "value": "6198.75000"

            }, {
                "tooltext": "Beverages, $9,043, Nov, 491 Units",
                "value": "9043.00000"

            }, {
                "tooltext": "Beverages, $4,034, Dec, 248 Units",
                "value": "4034.00000"

            }]
        }, {
            "data": [{
                "tooltext": "Condiments, $1,988, Jan, 82 Units",
                "value": "1988.60000"

            }, {
                "tooltext": "Condiments, $5,593, Feb, 236 Units",
                "value": "5593.50000"

            }, {
                "tooltext": "Condiments, $9,820, Mar, 428 Units",
                "value": "9820.15000"

            }, {
                "tooltext": "Condiments, $2,000, Apr, 128 Units",
                "value": "2000.90000"

            }, {
                "tooltext": "Condiments, $6,461, May, 281 Units",
                "value": "6461.50000"

            }, {
                "tooltext": "Condiments, $5,728, Jun, 300 Units",
                "value": "5728.80000"

            }, {
                "tooltext": "Condiments, $1,886, Jul, 95 Units",
                "value": "1886.85000"

            }, {
                "tooltext": "Condiments, $6,798, Aug, 300 Units",
                "value": "6798.70000"

            }, {
                "tooltext": "Condiments, $4,501, Sep, 206 Units",
                "value": "4501.80000"

            }, {
                "tooltext": "Condiments, $3,748, Oct, 222 Units",
                "value": "3748.90000"

            }, {
                "tooltext": "Condiments, $6,780, Nov, 270 Units",
                "value": "6780.45000"

            }, {
                "tooltext": "Condiments, $3,854, Dec, 172 Units",
                "value": "3854.80000"

            }]
        }, {
            "data": [{
                "tooltext": "Confections, $8,196, Jan, 240 Units",
                "value": "8196.85000"

            }, {
                "tooltext": "Confections, $10,246, Feb, 493 Units",
                "value": "10246.61000"

            }, {
                "tooltext": "Confections, $11,033, Mar, 555 Units",
                "value": "11033.93000"

            }, {
                "tooltext": "Confections, $3,790, Apr, 235 Units",
                "value": "3790.20000"

            }, {
                "tooltext": "Confections, $12,257, May, 424 Units",
                "value": "12257.65000"

            }, {
                "tooltext": "Confections, $7,997, Jun, 291 Units",
                "value": "7997.50000"

            }, {
                "tooltext": "Confections, $2,494, Jul, 107 Units",
                "value": "2494.40000"

            }, {
                "tooltext": "Confections, $6,968, Aug, 210 Units",
                "value": "6968.03000"

            }, {
                "tooltext": "Confections, $8,025, Sep, 335 Units",
                "value": "8025.30000"

            }, {
                "tooltext": "Confections, $7,192, Oct, 371 Units",
                "value": "7192.50000"

            }, {
                "tooltext": "Confections, $8,051, Nov, 390 Units",
                "value": "8051.55000"

            }, {
                "tooltext": "Confections, $5,271, Dec, 255 Units",
                "value": "5271.16000"

            }]
        }, {
            "data": [{
                "tooltext": "Dairy Products, $15,211, Jan, 653 Units",
                "value": "15211.10000"

            }, {
                "tooltext": "Dairy Products, $8,490, Feb, 378 Units",
                "value": "8490.00000"

            }, {
                "tooltext": "Dairy Products, $10,872, Mar, 318 Units",
                "value": "10872.50000"

            }, {
                "tooltext": "Dairy Products, $9,005, Apr, 251 Units",
                "value": "9005.50000"

            }, {
                "tooltext": "Dairy Products, $10,244, May, 291 Units",
                "value": "10244.00000"

            }, {
                "tooltext": "Dairy Products, $11,491, Jun, 494 Units",
                "value": "11491.50000"

            }, {
                "tooltext": "Dairy Products, $9,507, Jul, 405 Units",
                "value": "9507.70000"

            }, {
                "tooltext": "Dairy Products, $13,570, Aug, 374 Units",
                "value": "13570.10000"

            }, {
                "tooltext": "Dairy Products, $7,375, Sep, 256 Units",
                "value": "7375.50000"

            }, {
                "tooltext": "Dairy Products, $12,054, Oct, 435 Units",
                "value": "12054.00000"

            }, {
                "tooltext": "Dairy Products, $13,745, Nov, 422 Units",
                "value": "13745.00000"

            }, {
                "tooltext": "Dairy Products, $13,597, Dec, 344 Units",
                "value": "13597.10000"

            }]
        }, {
            "data": [{
                "tooltext": "Grains/Cereals, $2,941, Jan, 128 Units",
                "value": "2941.50000"

            }, {
                "tooltext": "Grains/Cereals, $4,572, Feb, 202 Units",
                "value": "4572.75000"

            }, {
                "tooltext": "Grains/Cereals, $7,444, Mar, 246 Units",
                "value": "7444.25000"

            }, {
                "tooltext": "Grains/Cereals, $4,187, Apr, 174 Units",
                "value": "4187.50000"

            }, {
                "tooltext": "Grains/Cereals, $6,964, May, 240 Units",
                "value": "6964.00000"

            }, {
                "tooltext": "Grains/Cereals, $2,551, Jun, 149 Units",
                "value": "2551.50000"

            }, {
                "tooltext": "Grains/Cereals, $6,882, Jul, 292 Units",
                "value": "6882.50000"

            }, {
                "tooltext": "Grains/Cereals, $4,780, Aug, 243 Units",
                "value": "4780.00000"

            }, {
                "tooltext": "Grains/Cereals, $5,529, Sep, 204 Units",
                "value": "5529.25000"

            }, {
                "tooltext": "Grains/Cereals, $5,755, Oct, 262 Units",
                "value": "5755.75000"

            }, {
                "tooltext": "Grains/Cereals, $3,364, Nov, 108 Units",
                "value": "3364.00000"

            }, {
                "tooltext": "Grains/Cereals, $6,294, Dec, 314 Units",
                "value": "6294.00000"

            }]
        }, {
            "data": [{
                "tooltext": "Meat/Poultry, $11,787, Jan, 309 Units",
                "value": "11787.36000"

            }, {
                "tooltext": "Meat/Poultry, $5,722, Feb, 84 Units",
                "value": "5722.29000"

            }, {
                "tooltext": "Meat/Poultry, $14,568, Mar, 515 Units",
                "value": "14568.41000"

            }, {
                "tooltext": "Meat/Poultry, $4,093, Apr, 102 Units",
                "value": "4093.42000"

            }, {
                "tooltext": "Meat/Poultry, $6,846, May, 93 Units",
                "value": "6846.24000"

            }, {
                "tooltext": "Meat/Poultry, $3,548, Jun, 136 Units",
                "value": "3548.05000"

            }, {
                "tooltext": "Meat/Poultry, $5,006, Jul, 130 Units",
                "value": "5006.30000"

            }, {
                "tooltext": "Meat/Poultry, $4,902, Aug, 179 Units",
                "value": "4902.30000"

            }, {
                "tooltext": "Meat/Poultry, $4,943, Sep, 105 Units",
                "value": "4943.64000"

            }, {
                "tooltext": "Meat/Poultry, $12,406, Oct, 176 Units",
                "value": "12406.54000"

            }, {
                "tooltext": "Meat/Poultry, $14,559, Nov, 372 Units",
                "value": "14559.23000"

            }, {
                "tooltext": "Meat/Poultry, $1,212, Dec, 38 Units",
                "value": "1212.00000"

            }]
        }, {
            "data": [{
                "tooltext": "Produce, $4,604, Jan, 195 Units",
                "value": "4604.85000"

            }, {
                "tooltext": "Produce, $3,622, Feb, 124 Units",
                "value": "3622.95000"

            }, {
                "tooltext": "Produce, $3,379, Mar, 103 Units",
                "value": "3379.20000"

            }, {
                "tooltext": "Produce, $4,597, Apr, 122 Units",
                "value": "4597.80000"

            }, {
                "tooltext": "Produce, $6,137, May, 186 Units",
                "value": "6137.10000"

            }, {
                "tooltext": "Produce, $3,481, Jun, 71 Units",
                "value": "3481.20000"

            }, {
                "tooltext": "Produce, $6,231, Jul, 149 Units",
                "value": "6231.00000"

            }, {
                "tooltext": "Produce, $1,650, Aug, 55 Units",
                "value": "1650.00000"

            }, {
                "tooltext": "Produce, $4,455, Sep, 119 Units",
                "value": "4455.00000"

            }, {
                "tooltext": "Produce, $2,887, Oct, 73 Units",
                "value": "2887.25000"

            }, {
                "tooltext": "Produce, $7,291, Nov, 185 Units",
                "value": "7291.00000"

            }, {
                "tooltext": "Produce, $3,268, Dec, 81 Units",
                "value": "3268.25000"

            }]
        }, {
            "data": [{
                "tooltext": "Seafood, $4,280, Jan, 288 Units",
                "value": "4280.97000"

            }, {
                "tooltext": "Seafood, $1,675, Feb, 104 Units",
                "value": "1675.07000"

            }, {
                "tooltext": "Seafood, $3,776, Mar, 197 Units",
                "value": "3776.42000"

            }, {
                "tooltext": "Seafood, $4,475, Apr, 175 Units",
                "value": "4475.52000"

            }, {
                "tooltext": "Seafood, $4,557, May, 241 Units",
                "value": "4557.30000"

            }, {
                "tooltext": "Seafood, $6,371, Jun, 401 Units",
                "value": "6371.15000"

            }, {
                "tooltext": "Seafood, $3,477, Jul, 144 Units",
                "value": "3477.25000"

            }, {
                "tooltext": "Seafood, $8,452, Aug, 366 Units",
                "value": "8452.30000"

            }, {
                "tooltext": "Seafood, $8,997, Sep, 302 Units",
                "value": "8997.20000"

            }, {
                "tooltext": "Seafood, $9,489, Oct, 630 Units",
                "value": "9489.33000"

            }, {
                "tooltext": "Seafood, $7,206, Nov, 419 Units",
                "value": "7206.47000"

            }, {
                "tooltext": "Seafood, $8,669, Dec, 426 Units",
                "value": "8669.85000"

            }]
        }, {
            "data": [{
                "value": "2200",
                "toolText": "Total Units sold in Jan : 2,200"
            }, {
                "value": "1951",
                "toolText": "Total Units sold in Feb : 1,951"
            }, {
                "value": "2582",
                "toolText": "Total Units sold in Mar : 2,582"
            }, {
                "value": "1622",
                "toolText": "Total Units sold in Apr : 1,622"
            }, {
                "value": "2060",
                "toolText": "Total Units sold in May : 2,060"
            }, {
                "value": "2164",
                "toolText": "Total Units sold in Jun : 2,164"
            }, {
                "value": "1635",
                "toolText": "Total Units sold in Jul : 1,635"
            }, {
                "value": "2054",
                "toolText": "Total Units sold in Aug : 2,054"
            }, {
                "value": "1861",
                "toolText": "Total Units sold in Sep : 1,861"
            }, {
                "value": "2343",
                "toolText": "Total Units sold in Oct : 2,343"
            }, {
                "value": "2657",
                "toolText": "Total Units sold in Nov : 2,657"
            }, {
                "value": "1878",
                "toolText": "Total Units sold in Dec : 1,878"
            }]
        }]
    }
};
module.exports = router;
