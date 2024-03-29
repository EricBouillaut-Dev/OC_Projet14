const users = [
  {
    firstName: "Jessica",
    lastName: "Jackson",
    dateOfBirth: "17/03/1991",
    startDate: "24/08/1992",
    department: "Finance",
    street: "411 Aspen Street",
    city: "Kingswood",
    state: "GA",
    zipCode: "33905",
  },
  {
    firstName: "Susan",
    lastName: "Martinez",
    dateOfBirth: "25/06/1975",
    startDate: "10/11/1985",
    department: "Logistique",
    street: "992 Birch Street",
    city: "Rosewood",
    state: "AL",
    zipCode: "83236",
  },
  {
    firstName: "Robert",
    lastName: "Martinez",
    dateOfBirth: "09/10/1992",
    startDate: "03/08/1997",
    department: "Logistique",
    street: "725 Elm Street",
    city: "Greenwood",
    state: "AL",
    zipCode: "67875",
  },
  {
    firstName: "Karen",
    lastName: "Davis",
    dateOfBirth: "10/10/1978",
    startDate: "15/07/1992",
    department: "Marketing",
    street: "716 Pine Street",
    city: "Kingswood",
    state: "GA",
    zipCode: "21040",
  },
  {
    firstName: "William",
    lastName: "Jackson",
    dateOfBirth: "22/05/1996",
    startDate: "15/06/1984",
    department: "Logistique",
    street: "540 Elm Street",
    city: "Greenwood",
    state: "AR",
    zipCode: "17820",
  },
  {
    firstName: "Jennifer",
    lastName: "Martinez",
    dateOfBirth: "15/11/1984",
    startDate: "04/05/2008",
    department: "Ventes",
    street: "820 Maple Street",
    city: "Lakewood",
    state: "CA",
    zipCode: "33095",
  },
  {
    firstName: "Karen",
    lastName: "Garcia",
    dateOfBirth: "15/06/1971",
    startDate: "27/11/1988",
    department: "Administration",
    street: "396 Oak Street",
    city: "Westwood",
    state: "CA",
    zipCode: "95176",
  },
  {
    firstName: "Charles",
    lastName: "Jones",
    dateOfBirth: "27/01/1966",
    startDate: "11/10/1992",
    department: "Production",
    street: "517 Aspen Street",
    city: "Westwood",
    state: "AZ",
    zipCode: "20102",
  },
  {
    firstName: "Susan",
    lastName: "Moore",
    dateOfBirth: "29/05/1995",
    startDate: "22/10/2007",
    department: "Administration",
    street: "817 Cedar Street",
    city: "Millbrook",
    state: "CA",
    zipCode: "34375",
  },
  {
    firstName: "Richard",
    lastName: "Brown",
    dateOfBirth: "26/09/1997",
    startDate: "05/01/1967",
    department: "R&D",
    street: "337 Spring Street",
    city: "Westwood",
    state: "CA",
    zipCode: "38710",
  },
  {
    firstName: "James",
    lastName: "Garcia",
    dateOfBirth: "19/03/1982",
    startDate: "22/10/1999",
    department: "Logistique",
    street: "752 Spring Street",
    city: "Riverside",
    state: "CT",
    zipCode: "61221",
  },
  {
    firstName: "Karen",
    lastName: "Taylor",
    dateOfBirth: "16/12/1997",
    startDate: "18/09/1985",
    department: "Support",
    street: "137 Laurel Street",
    city: "Rosewood",
    state: "FL",
    zipCode: "97169",
  },
  {
    firstName: "Jennifer",
    lastName: "Wilson",
    dateOfBirth: "09/11/1980",
    startDate: "24/07/1984",
    department: "R&D",
    street: "639 Pine Street",
    city: "Westwood",
    state: "CO",
    zipCode: "95790",
  },
  {
    firstName: "Mary",
    lastName: "Jones",
    dateOfBirth: "18/12/1992",
    startDate: "07/12/1991",
    department: "Finance",
    street: "295 Maple Street",
    city: "Eastwood",
    state: "CT",
    zipCode: "16317",
  },
  {
    firstName: "John",
    lastName: "Jackson",
    dateOfBirth: "23/08/1994",
    startDate: "07/10/1960",
    department: "R&D",
    street: "895 Elm Street",
    city: "Westwood",
    state: "AZ",
    zipCode: "46719",
  },
  {
    firstName: "Susan",
    lastName: "Anderson",
    dateOfBirth: "30/01/1973",
    startDate: "28/09/2004",
    department: "Logistique",
    street: "359 Pine Street",
    city: "Kingswood",
    state: "AZ",
    zipCode: "34617",
  },
  {
    firstName: "Jennifer",
    lastName: "Johnson",
    dateOfBirth: "17/05/1973",
    startDate: "04/02/1995",
    department: "Administration",
    street: "698 Oak Street",
    city: "Eastwood",
    state: "AL",
    zipCode: "45507",
  },
  {
    firstName: "Charles",
    lastName: "Lopez",
    dateOfBirth: "02/10/1996",
    startDate: "15/03/1980",
    department: "RH",
    street: "976 Aspen Street",
    city: "Riverside",
    state: "DE",
    zipCode: "72835",
  },
  {
    firstName: "Michael",
    lastName: "Jones",
    dateOfBirth: "11/11/1965",
    startDate: "28/12/2002",
    department: "R&D",
    street: "135 Spring Street",
    city: "Eastwood",
    state: "DE",
    zipCode: "77790",
  },
  {
    firstName: "Charles",
    lastName: "Miller",
    dateOfBirth: "12/11/1975",
    startDate: "30/10/1969",
    department: "Administration",
    street: "844 Laurel Street",
    city: "Fairview",
    state: "AZ",
    zipCode: "81049",
  },
  {
    firstName: "Richard",
    lastName: "Wilson",
    dateOfBirth: "02/06/1983",
    startDate: "10/03/2016",
    department: "R&D",
    street: "793 Willow Street",
    city: "Rosewood",
    state: "AZ",
    zipCode: "58318",
  },
  {
    firstName: "James",
    lastName: "Johnson",
    dateOfBirth: "18/01/1972",
    startDate: "04/06/1961",
    department: "Administration",
    street: "519 Aspen Street",
    city: "Eastwood",
    state: "DE",
    zipCode: "10432",
  },
  {
    firstName: "James",
    lastName: "Martin",
    dateOfBirth: "08/07/1974",
    startDate: "01/02/1968",
    department: "Finance",
    street: "229 Elm Street",
    city: "Lakewood",
    state: "FL",
    zipCode: "86575",
  },
  {
    firstName: "Susan",
    lastName: "Miller",
    dateOfBirth: "02/12/1973",
    startDate: "24/06/1971",
    department: "R&D",
    street: "524 Birch Street",
    city: "Millbrook",
    state: "AK",
    zipCode: "92840",
  },
  {
    firstName: "Linda",
    lastName: "Garcia",
    dateOfBirth: "26/06/1998",
    startDate: "09/03/1964",
    department: "Production",
    street: "379 Maple Street",
    city: "Rosewood",
    state: "CO",
    zipCode: "93686",
  },
  {
    firstName: "Robert",
    lastName: "Moore",
    dateOfBirth: "19/05/1987",
    startDate: "29/05/1990",
    department: "Finance",
    street: "872 Aspen Street",
    city: "Kingswood",
    state: "AK",
    zipCode: "25608",
  },
  {
    firstName: "Karen",
    lastName: "Martinez",
    dateOfBirth: "01/05/1997",
    startDate: "29/05/2001",
    department: "RH",
    street: "918 Aspen Street",
    city: "Westwood",
    state: "CA",
    zipCode: "21807",
  },
  {
    firstName: "Susan",
    lastName: "Garcia",
    dateOfBirth: "30/07/1986",
    startDate: "22/12/1977",
    department: "Marketing",
    street: "180 Laurel Street",
    city: "Kingswood",
    state: "AZ",
    zipCode: "77505",
  },
  {
    firstName: "Karen",
    lastName: "Anderson",
    dateOfBirth: "21/12/1986",
    startDate: "15/05/2004",
    department: "R&D",
    street: "207 Birch Street",
    city: "Westwood",
    state: "CT",
    zipCode: "60352",
  },
  {
    firstName: "Michael",
    lastName: "Rodriguez",
    dateOfBirth: "16/11/1968",
    startDate: "08/11/1966",
    department: "Ventes",
    street: "650 Willow Street",
    city: "Millbrook",
    state: "AZ",
    zipCode: "59210",
  },
  {
    firstName: "Charles",
    lastName: "Thomas",
    dateOfBirth: "28/06/1970",
    startDate: "15/05/1969",
    department: "Marketing",
    street: "929 Elm Street",
    city: "Kingswood",
    state: "AZ",
    zipCode: "89787",
  },
  {
    firstName: "Mary",
    lastName: "Rodriguez",
    dateOfBirth: "08/04/1982",
    startDate: "05/05/1961",
    department: "Ventes",
    street: "530 Cedar Street",
    city: "Kingswood",
    state: "AK",
    zipCode: "85633",
  },
  {
    firstName: "Michael",
    lastName: "Hernandez",
    dateOfBirth: "12/01/1973",
    startDate: "04/09/2007",
    department: "Ventes",
    street: "905 Cedar Street",
    city: "Riverside",
    state: "FL",
    zipCode: "17930",
  },
  {
    firstName: "William",
    lastName: "Hernandez",
    dateOfBirth: "03/02/2002",
    startDate: "21/02/2016",
    department: "Support",
    street: "309 Laurel Street",
    city: "Lakewood",
    state: "AL",
    zipCode: "37318",
  },
  {
    firstName: "William",
    lastName: "Martinez",
    dateOfBirth: "26/05/1980",
    startDate: "16/12/2002",
    department: "R&D",
    street: "771 Willow Street",
    city: "Millbrook",
    state: "AL",
    zipCode: "92738",
  },
  {
    firstName: "Patricia",
    lastName: "Jones",
    dateOfBirth: "06/12/1964",
    startDate: "07/06/1962",
    department: "Ventes",
    street: "766 Elm Street",
    city: "Fairview",
    state: "CA",
    zipCode: "47694",
  },
  {
    firstName: "William",
    lastName: "Anderson",
    dateOfBirth: "24/04/1981",
    startDate: "03/10/1992",
    department: "R&D",
    street: "548 Oak Street",
    city: "Kingswood",
    state: "GA",
    zipCode: "96872",
  },
  {
    firstName: "Jennifer",
    lastName: "Martinez",
    dateOfBirth: "15/11/1992",
    startDate: "15/06/2014",
    department: "Finance",
    street: "403 Aspen Street",
    city: "Greenwood",
    state: "DE",
    zipCode: "24559",
  },
  {
    firstName: "Mary",
    lastName: "Moore",
    dateOfBirth: "27/06/1983",
    startDate: "04/01/1994",
    department: "Finance",
    street: "801 Maple Street",
    city: "Millbrook",
    state: "DE",
    zipCode: "98218",
  },
  {
    firstName: "David",
    lastName: "Martin",
    dateOfBirth: "29/04/1999",
    startDate: "20/10/2002",
    department: "R&D",
    street: "960 Birch Street",
    city: "Greenwood",
    state: "AK",
    zipCode: "44814",
  },
  {
    firstName: "Michael",
    lastName: "Martinez",
    dateOfBirth: "20/06/1990",
    startDate: "11/11/1980",
    department: "IT",
    street: "617 Willow Street",
    city: "Greenwood",
    state: "AL",
    zipCode: "10077",
  },
  {
    firstName: "Joseph",
    lastName: "Moore",
    dateOfBirth: "15/05/1968",
    startDate: "18/11/1996",
    department: "Finance",
    street: "857 Laurel Street",
    city: "Riverside",
    state: "CA",
    zipCode: "29809",
  },
  {
    firstName: "Sarah",
    lastName: "Thomas",
    dateOfBirth: "25/12/1985",
    startDate: "15/10/1982",
    department: "Logistique",
    street: "608 Aspen Street",
    city: "Fairview",
    state: "CT",
    zipCode: "23840",
  },
  {
    firstName: "James",
    lastName: "Lopez",
    dateOfBirth: "24/02/1982",
    startDate: "18/10/1962",
    department: "IT",
    street: "508 Birch Street",
    city: "Greenwood",
    state: "AK",
    zipCode: "51232",
  },
  {
    firstName: "Elizabeth",
    lastName: "Smith",
    dateOfBirth: "22/06/1962",
    startDate: "02/07/2012",
    department: "Ventes",
    street: "911 Spring Street",
    city: "Millbrook",
    state: "DE",
    zipCode: "39811",
  },
  {
    firstName: "John",
    lastName: "Hernandez",
    dateOfBirth: "08/05/1989",
    startDate: "15/12/2020",
    department: "RH",
    street: "541 Aspen Street",
    city: "Millbrook",
    state: "AR",
    zipCode: "11091",
  },
  {
    firstName: "Susan",
    lastName: "Jones",
    dateOfBirth: "27/10/2001",
    startDate: "29/07/2019",
    department: "RH",
    street: "922 Cedar Street",
    city: "Eastwood",
    state: "CO",
    zipCode: "22052",
  },
  {
    firstName: "Mary",
    lastName: "Smith",
    dateOfBirth: "18/11/1977",
    startDate: "20/08/2002",
    department: "R&D",
    street: "469 Aspen Street",
    city: "Riverside",
    state: "CO",
    zipCode: "59555",
  },
  {
    firstName: "Charles",
    lastName: "Anderson",
    dateOfBirth: "11/06/1979",
    startDate: "21/08/2018",
    department: "Administration",
    street: "715 Elm Street",
    city: "Rosewood",
    state: "AR",
    zipCode: "84663",
  },
  {
    firstName: "Sarah",
    lastName: "Gonzalez",
    dateOfBirth: "01/01/1964",
    startDate: "25/10/2003",
    department: "Support",
    street: "971 Pine Street",
    city: "Riverside",
    state: "GA",
    zipCode: "23729",
  },
  {
    firstName: "Mary",
    lastName: "Taylor",
    dateOfBirth: "26/02/1987",
    startDate: "16/07/2017",
    department: "Ventes",
    street: "813 Aspen Street",
    city: "Lakewood",
    state: "DE",
    zipCode: "52460",
  },
  {
    firstName: "Charles",
    lastName: "Hernandez",
    dateOfBirth: "05/04/2001",
    startDate: "05/01/1962",
    department: "Support",
    street: "724 Maple Street",
    city: "Eastwood",
    state: "AL",
    zipCode: "74070",
  },
  {
    firstName: "James",
    lastName: "Gonzalez",
    dateOfBirth: "05/05/1961",
    startDate: "27/03/1982",
    department: "IT",
    street: "624 Elm Street",
    city: "Westwood",
    state: "CO",
    zipCode: "22196",
  },
  {
    firstName: "Sarah",
    lastName: "Smith",
    dateOfBirth: "10/09/1991",
    startDate: "02/08/1983",
    department: "Administration",
    street: "414 Aspen Street",
    city: "Fairview",
    state: "AR",
    zipCode: "20335",
  },
  {
    firstName: "Robert",
    lastName: "Miller",
    dateOfBirth: "27/09/1992",
    startDate: "01/09/1996",
    department: "Finance",
    street: "382 Laurel Street",
    city: "Greenwood",
    state: "AR",
    zipCode: "13556",
  },
  {
    firstName: "Patricia",
    lastName: "Miller",
    dateOfBirth: "12/07/1982",
    startDate: "30/10/1983",
    department: "Support",
    street: "358 Birch Street",
    city: "Kingswood",
    state: "AL",
    zipCode: "75374",
  },
  {
    firstName: "Richard",
    lastName: "Thomas",
    dateOfBirth: "18/06/1987",
    startDate: "14/12/1980",
    department: "R&D",
    street: "213 Laurel Street",
    city: "Brookside",
    state: "CA",
    zipCode: "91068",
  },
  {
    firstName: "Michael",
    lastName: "Jackson",
    dateOfBirth: "06/08/1974",
    startDate: "15/04/1987",
    department: "R&D",
    street: "191 Willow Street",
    city: "Millbrook",
    state: "DE",
    zipCode: "35552",
  },
  {
    firstName: "Robert",
    lastName: "Gonzalez",
    dateOfBirth: "21/01/1998",
    startDate: "10/04/1963",
    department: "Administration",
    street: "671 Willow Street",
    city: "Fairview",
    state: "CT",
    zipCode: "59177",
  },
  {
    firstName: "James",
    lastName: "Thomas",
    dateOfBirth: "20/12/1966",
    startDate: "15/03/2014",
    department: "Ventes",
    street: "391 Elm Street",
    city: "Greenwood",
    state: "GA",
    zipCode: "65134",
  },
  {
    firstName: "Joseph",
    lastName: "Smith",
    dateOfBirth: "22/03/1993",
    startDate: "21/09/2016",
    department: "Logistique",
    street: "313 Spring Street",
    city: "Lakewood",
    state: "AR",
    zipCode: "79519",
  },
  {
    firstName: "Michael",
    lastName: "Moore",
    dateOfBirth: "15/08/1977",
    startDate: "13/03/1998",
    department: "Logistique",
    street: "444 Aspen Street",
    city: "Westwood",
    state: "AZ",
    zipCode: "61764",
  },
  {
    firstName: "Richard",
    lastName: "Williams",
    dateOfBirth: "05/02/1967",
    startDate: "06/04/1988",
    department: "Support",
    street: "365 Willow Street",
    city: "Westwood",
    state: "AK",
    zipCode: "53546",
  },
  {
    firstName: "Jessica",
    lastName: "Thomas",
    dateOfBirth: "18/06/1987",
    startDate: "27/02/1997",
    department: "R&D",
    street: "660 Laurel Street",
    city: "Riverside",
    state: "AL",
    zipCode: "51157",
  },
  {
    firstName: "David",
    lastName: "Moore",
    dateOfBirth: "04/10/1983",
    startDate: "15/02/1985",
    department: "R&D",
    street: "802 Spring Street",
    city: "Millbrook",
    state: "CT",
    zipCode: "56192",
  },
  {
    firstName: "David",
    lastName: "Garcia",
    dateOfBirth: "05/12/1999",
    startDate: "19/09/1965",
    department: "Logistique",
    street: "397 Maple Street",
    city: "Fairview",
    state: "DE",
    zipCode: "63081",
  },
  {
    firstName: "Richard",
    lastName: "Jones",
    dateOfBirth: "09/02/1975",
    startDate: "03/01/1980",
    department: "Support",
    street: "720 Cedar Street",
    city: "Westwood",
    state: "CA",
    zipCode: "47883",
  },
  {
    firstName: "Sarah",
    lastName: "Miller",
    dateOfBirth: "28/11/1983",
    startDate: "17/06/1977",
    department: "RH",
    street: "358 Pine Street",
    city: "Fairview",
    state: "CO",
    zipCode: "25578",
  },
  {
    firstName: "Mary",
    lastName: "Smith",
    dateOfBirth: "29/04/1978",
    startDate: "07/06/1990",
    department: "IT",
    street: "532 Pine Street",
    city: "Millbrook",
    state: "DE",
    zipCode: "59239",
  },
  {
    firstName: "John",
    lastName: "Wilson",
    dateOfBirth: "26/07/1987",
    startDate: "05/07/1977",
    department: "Production",
    street: "650 Pine Street",
    city: "Brookside",
    state: "AZ",
    zipCode: "22007",
  },
  {
    firstName: "Jennifer",
    lastName: "Taylor",
    dateOfBirth: "03/06/1976",
    startDate: "09/11/2007",
    department: "RH",
    street: "302 Cedar Street",
    city: "Fairview",
    state: "FL",
    zipCode: "77384",
  },
  {
    firstName: "Patricia",
    lastName: "Garcia",
    dateOfBirth: "17/08/1960",
    startDate: "04/06/1984",
    department: "R&D",
    street: "557 Spring Street",
    city: "Eastwood",
    state: "CO",
    zipCode: "42445",
  },
  {
    firstName: "Robert",
    lastName: "Gonzalez",
    dateOfBirth: "06/10/2001",
    startDate: "11/03/2019",
    department: "RH",
    street: "486 Pine Street",
    city: "Greenwood",
    state: "CA",
    zipCode: "19793",
  },
  {
    firstName: "Patricia",
    lastName: "Smith",
    dateOfBirth: "30/05/1986",
    startDate: "11/02/2020",
    department: "Marketing",
    street: "722 Birch Street",
    city: "Greenwood",
    state: "AZ",
    zipCode: "33446",
  },
  {
    firstName: "William",
    lastName: "Thomas",
    dateOfBirth: "15/02/1998",
    startDate: "21/11/1998",
    department: "R&D",
    street: "658 Pine Street",
    city: "Brookside",
    state: "GA",
    zipCode: "50043",
  },
  {
    firstName: "Linda",
    lastName: "Gonzalez",
    dateOfBirth: "06/03/1975",
    startDate: "13/05/1981",
    department: "Administration",
    street: "769 Elm Street",
    city: "Kingswood",
    state: "AZ",
    zipCode: "81911",
  },
  {
    firstName: "Jennifer",
    lastName: "Jackson",
    dateOfBirth: "25/01/1994",
    startDate: "21/07/1981",
    department: "Ventes",
    street: "110 Willow Street",
    city: "Eastwood",
    state: "CA",
    zipCode: "70007",
  },
  {
    firstName: "David",
    lastName: "Jackson",
    dateOfBirth: "12/08/1967",
    startDate: "01/08/1986",
    department: "Ventes",
    street: "128 Aspen Street",
    city: "Westwood",
    state: "FL",
    zipCode: "47293",
  },
  {
    firstName: "Thomas",
    lastName: "Rodriguez",
    dateOfBirth: "08/09/1962",
    startDate: "31/07/1996",
    department: "Production",
    street: "784 Laurel Street",
    city: "Eastwood",
    state: "CT",
    zipCode: "67829",
  },
  {
    firstName: "Elizabeth",
    lastName: "Miller",
    dateOfBirth: "26/05/1979",
    startDate: "30/05/1965",
    department: "Logistique",
    street: "809 Pine Street",
    city: "Rosewood",
    state: "AL",
    zipCode: "59141",
  },
  {
    firstName: "James",
    lastName: "Wilson",
    dateOfBirth: "16/06/1984",
    startDate: "10/12/2022",
    department: "Marketing",
    street: "475 Pine Street",
    city: "Riverside",
    state: "CO",
    zipCode: "75081",
  },
  {
    firstName: "Patricia",
    lastName: "Jones",
    dateOfBirth: "19/10/1977",
    startDate: "10/03/1989",
    department: "Marketing",
    street: "341 Elm Street",
    city: "Lakewood",
    state: "CA",
    zipCode: "12249",
  },
  {
    firstName: "Jessica",
    lastName: "Smith",
    dateOfBirth: "23/02/1981",
    startDate: "23/10/2009",
    department: "Marketing",
    street: "458 Birch Street",
    city: "Lakewood",
    state: "FL",
    zipCode: "54711",
  },
  {
    firstName: "Jennifer",
    lastName: "Thomas",
    dateOfBirth: "07/02/1999",
    startDate: "29/11/1962",
    department: "Marketing",
    street: "982 Pine Street",
    city: "Lakewood",
    state: "CT",
    zipCode: "91558",
  },
  {
    firstName: "Susan",
    lastName: "Martinez",
    dateOfBirth: "28/08/1984",
    startDate: "13/12/2008",
    department: "IT",
    street: "839 Pine Street",
    city: "Lakewood",
    state: "CT",
    zipCode: "11487",
  },
  {
    firstName: "Charles",
    lastName: "Garcia",
    dateOfBirth: "16/05/2001",
    startDate: "02/12/1989",
    department: "Support",
    street: "142 Elm Street",
    city: "Greenwood",
    state: "CT",
    zipCode: "99275",
  },
  {
    firstName: "Jennifer",
    lastName: "Thomas",
    dateOfBirth: "07/01/1988",
    startDate: "09/11/2021",
    department: "Ventes",
    street: "793 Birch Street",
    city: "Kingswood",
    state: "FL",
    zipCode: "97714",
  },
  {
    firstName: "Michael",
    lastName: "Moore",
    dateOfBirth: "07/03/1983",
    startDate: "17/10/1969",
    department: "IT",
    street: "730 Aspen Street",
    city: "Brookside",
    state: "AR",
    zipCode: "78265",
  },
  {
    firstName: "Thomas",
    lastName: "Davis",
    dateOfBirth: "12/11/1975",
    startDate: "23/09/1969",
    department: "Production",
    street: "926 Laurel Street",
    city: "Eastwood",
    state: "AZ",
    zipCode: "92473",
  },
  {
    firstName: "Barbara",
    lastName: "Moore",
    dateOfBirth: "19/06/1974",
    startDate: "30/01/2013",
    department: "RH",
    street: "711 Oak Street",
    city: "Brookside",
    state: "CO",
    zipCode: "21902",
  },
  {
    firstName: "David",
    lastName: "Jones",
    dateOfBirth: "16/11/1980",
    startDate: "01/12/1982",
    department: "Marketing",
    street: "107 Maple Street",
    city: "Greenwood",
    state: "FL",
    zipCode: "20326",
  },
  {
    firstName: "Elizabeth",
    lastName: "Wilson",
    dateOfBirth: "23/09/1975",
    startDate: "04/05/2014",
    department: "RH",
    street: "294 Aspen Street",
    city: "Eastwood",
    state: "AR",
    zipCode: "52817",
  },
  {
    firstName: "Karen",
    lastName: "Williams",
    dateOfBirth: "17/06/1998",
    startDate: "30/08/1971",
    department: "Marketing",
    street: "313 Cedar Street",
    city: "Rosewood",
    state: "CT",
    zipCode: "60836",
  },
  {
    firstName: "Thomas",
    lastName: "Gonzalez",
    dateOfBirth: "15/12/1983",
    startDate: "01/08/2004",
    department: "RH",
    street: "221 Willow Street",
    city: "Riverside",
    state: "CA",
    zipCode: "49656",
  },
  {
    firstName: "Jennifer",
    lastName: "Rodriguez",
    dateOfBirth: "26/01/1984",
    startDate: "29/12/1964",
    department: "Marketing",
    street: "628 Birch Street",
    city: "Kingswood",
    state: "AR",
    zipCode: "14295",
  },
  {
    firstName: "Richard",
    lastName: "Lopez",
    dateOfBirth: "03/08/1994",
    startDate: "02/09/1980",
    department: "Support",
    street: "506 Aspen Street",
    city: "Riverside",
    state: "CA",
    zipCode: "43051",
  },
  {
    firstName: "Thomas",
    lastName: "Anderson",
    dateOfBirth: "06/02/1972",
    startDate: "14/12/2018",
    department: "Support",
    street: "238 Maple Street",
    city: "Riverside",
    state: "DE",
    zipCode: "38664",
  },
  {
    firstName: "David",
    lastName: "Moore",
    dateOfBirth: "07/03/1971",
    startDate: "13/01/1989",
    department: "Marketing",
    street: "660 Spring Street",
    city: "Riverside",
    state: "CT",
    zipCode: "30358",
  },
  {
    firstName: "Jessica",
    lastName: "Gonzalez",
    dateOfBirth: "30/05/1963",
    startDate: "08/07/1985",
    department: "Marketing",
    street: "105 Pine Street",
    city: "Brookside",
    state: "AL",
    zipCode: "41359",
  },
  {
    firstName: "David",
    lastName: "Jackson",
    dateOfBirth: "04/06/1999",
    startDate: "31/05/1969",
    department: "R&D",
    street: "623 Pine Street",
    city: "Westwood",
    state: "CO",
    zipCode: "98098",
  },
];
export default users;
