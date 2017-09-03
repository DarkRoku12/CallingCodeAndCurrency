var COUNTRIES = [{"code":"BD","name":"Bangladesh","dial":"880","currency":"BDT"},{"code":"BE","name":"Belgium","dial":"32","currency":"EUR"},{"code":"BF","name":"Burkina Faso","dial":"226","currency":"XOF"},{"code":"BG","name":"Bulgaria","dial":"359","currency":"BGN"},{"code":"BA","name":"Bosnia and Herzegovina","dial":"387","currency":"BAM"},{"code":"BB","name":"Barbados","dial":"+1-246","currency":"BBD"},{"code":"WF","name":"Wallis and Futuna","dial":"681","currency":"XPF"},{"code":"BL","name":"Saint Barthelemy","dial":"590","currency":"EUR"},{"code":"BM","name":"Bermuda","dial":"+1-441","currency":"BMD"},{"code":"BN","name":"Brunei","dial":"673","currency":"BND"},{"code":"BO","name":"Bolivia","dial":"591","currency":"BOB"},{"code":"BH","name":"Bahrain","dial":"973","currency":"BHD"},{"code":"BI","name":"Burundi","dial":"257","currency":"BIF"},{"code":"BJ","name":"Benin","dial":"229","currency":"XOF"},{"code":"BT","name":"Bhutan","dial":"975","currency":"BTN"},{"code":"JM","name":"Jamaica","dial":"+1-876","currency":"JMD"},{"code":"BV","name":"Bouvet Island","dial":"+55","currency":"NOK"},{"code":"BW","name":"Botswana","dial":"267","currency":"BWP"},{"code":"WS","name":"Samoa","dial":"685","currency":"WST"},{"code":"BQ","name":"Bonaire, Saint Eustatius and Saba ","dial":"599","currency":"USD"},{"code":"BR","name":"Brazil","dial":"55","currency":"BRL"},{"code":"BS","name":"Bahamas","dial":"+1-242","currency":"BSD"},{"code":"JE","name":"Jersey","dial":"+44-1534","currency":"GBP"},{"code":"BY","name":"Belarus","dial":"375","currency":"BYR"},{"code":"BZ","name":"Belize","dial":"501","currency":"BZD"},{"code":"RU","name":"Russia","dial":"7","currency":"RUB"},{"code":"RW","name":"Rwanda","dial":"250","currency":"RWF"},{"code":"RS","name":"Serbia","dial":"381","currency":"RSD"},{"code":"TL","name":"East Timor","dial":"670","currency":"USD"},{"code":"RE","name":"Reunion","dial":"262","currency":"EUR"},{"code":"TM","name":"Turkmenistan","dial":"993","currency":"TMT"},{"code":"TJ","name":"Tajikistan","dial":"992","currency":"TJS"},{"code":"RO","name":"Romania","dial":"40","currency":"RON"},{"code":"TK","name":"Tokelau","dial":"690","currency":"NZD"},{"code":"GW","name":"Guinea-Bissau","dial":"245","currency":"XOF"},{"code":"GU","name":"Guam","dial":"+1-671","currency":"USD"},{"code":"GT","name":"Guatemala","dial":"502","currency":"GTQ"},{"code":"GS","name":"South Georgia and the South Sandwich Islands","dial":"+500","currency":"GBP"},{"code":"GR","name":"Greece","dial":"30","currency":"EUR"},{"code":"GQ","name":"Equatorial Guinea","dial":"240","currency":"XAF"},{"code":"GP","name":"Guadeloupe","dial":"590","currency":"EUR"},{"code":"JP","name":"Japan","dial":"81","currency":"JPY"},{"code":"GY","name":"Guyana","dial":"592","currency":"GYD"},{"code":"GG","name":"Guernsey","dial":"+44-1481","currency":"GBP"},{"code":"GF","name":"French Guiana","dial":"594","currency":"EUR"},{"code":"GE","name":"Georgia","dial":"995","currency":"GEL"},{"code":"GD","name":"Grenada","dial":"+1-473","currency":"XCD"},{"code":"GB","name":"United Kingdom","dial":"44","currency":"GBP"},{"code":"GA","name":"Gabon","dial":"241","currency":"XAF"},{"code":"SV","name":"El Salvador","dial":"503","currency":"USD"},{"code":"GN","name":"Guinea","dial":"224","currency":"GNF"},{"code":"GM","name":"Gambia","dial":"220","currency":"GMD"},{"code":"GL","name":"Greenland","dial":"299","currency":"DKK"},{"code":"GI","name":"Gibraltar","dial":"350","currency":"GIP"},{"code":"GH","name":"Ghana","dial":"233","currency":"GHS"},{"code":"OM","name":"Oman","dial":"968","currency":"OMR"},{"code":"TN","name":"Tunisia","dial":"216","currency":"TND"},{"code":"JO","name":"Jordan","dial":"962","currency":"JOD"},{"code":"HR","name":"Croatia","dial":"385","currency":"HRK"},{"code":"HT","name":"Haiti","dial":"509","currency":"HTG"},{"code":"HU","name":"Hungary","dial":"36","currency":"HUF"},{"code":"HK","name":"Hong Kong","dial":"852","currency":"HKD"},{"code":"HN","name":"Honduras","dial":"504","currency":"HNL"},{"code":"HM","name":"Heard Island and McDonald Islands","dial":" ","currency":"AUD"},{"code":"VE","name":"Venezuela","dial":"58","currency":"VEF"},{"code":"PR","name":"Puerto Rico","dial":"+1-787 and 1-939","currency":"USD"},{"code":"PS","name":"Palestinian Territory","dial":"970","currency":"ILS"},{"code":"PW","name":"Palau","dial":"680","currency":"USD"},{"code":"PT","name":"Portugal","dial":"351","currency":"EUR"},{"code":"SJ","name":"Svalbard and Jan Mayen","dial":"47","currency":"NOK"},{"code":"PY","name":"Paraguay","dial":"595","currency":"PYG"},{"code":"IQ","name":"Iraq","dial":"964","currency":"IQD"},{"code":"PA","name":"Panama","dial":"507","currency":"PAB"},{"code":"PF","name":"French Polynesia","dial":"689","currency":"XPF"},{"code":"PG","name":"Papua New Guinea","dial":"675","currency":"PGK"},{"code":"PE","name":"Peru","dial":"51","currency":"PEN"},{"code":"PK","name":"Pakistan","dial":"92","currency":"PKR"},{"code":"PH","name":"Philippines","dial":"63","currency":"PHP"},{"code":"PN","name":"Pitcairn","dial":"870","currency":"NZD"},{"code":"PL","name":"Poland","dial":"48","currency":"PLN"},{"code":"PM","name":"Saint Pierre and Miquelon","dial":"508","currency":"EUR"},{"code":"ZM","name":"Zambia","dial":"260","currency":"ZMK"},{"code":"EH","name":"Western Sahara","dial":"212","currency":"MAD"},{"code":"EE","name":"Estonia","dial":"372","currency":"EUR"},{"code":"EG","name":"Egypt","dial":"20","currency":"EGP"},{"code":"ZA","name":"South Africa","dial":"27","currency":"ZAR"},{"code":"EC","name":"Ecuador","dial":"593","currency":"USD"},{"code":"IT","name":"Italy","dial":"39","currency":"EUR"},{"code":"VN","name":"Vietnam","dial":"84","currency":"VND"},{"code":"SB","name":"Solomon Islands","dial":"677","currency":"SBD"},{"code":"ET","name":"Ethiopia","dial":"251","currency":"ETB"},{"code":"SO","name":"Somalia","dial":"252","currency":"SOS"},{"code":"ZW","name":"Zimbabwe","dial":"263","currency":"ZWL"},{"code":"SA","name":"Saudi Arabia","dial":"966","currency":"SAR"},{"code":"ES","name":"Spain","dial":"34","currency":"EUR"},{"code":"ER","name":"Eritrea","dial":"291","currency":"ERN"},{"code":"ME","name":"Montenegro","dial":"382","currency":"EUR"},{"code":"MD","name":"Moldova","dial":"373","currency":"MDL"},{"code":"MG","name":"Madagascar","dial":"261","currency":"MGA"},{"code":"MF","name":"Saint Martin","dial":"590","currency":"EUR"},{"code":"MA","name":"Morocco","dial":"212","currency":"MAD"},{"code":"MC","name":"Monaco","dial":"377","currency":"EUR"},{"code":"UZ","name":"Uzbekistan","dial":"998","currency":"UZS"},{"code":"MM","name":"Myanmar","dial":"95","currency":"MMK"},{"code":"ML","name":"Mali","dial":"223","currency":"XOF"},{"code":"MO","name":"Macao","dial":"853","currency":"MOP"},{"code":"MN","name":"Mongolia","dial":"976","currency":"MNT"},{"code":"MH","name":"Marshall Islands","dial":"692","currency":"USD"},{"code":"MK","name":"Macedonia","dial":"389","currency":"MKD"},{"code":"MU","name":"Mauritius","dial":"230","currency":"MUR"},{"code":"MT","name":"Malta","dial":"356","currency":"EUR"},{"code":"MW","name":"Malawi","dial":"265","currency":"MWK"},{"code":"MV","name":"Maldives","dial":"960","currency":"MVR"},{"code":"MQ","name":"Martinique","dial":"596","currency":"EUR"},{"code":"MP","name":"Northern Mariana Islands","dial":"+1-670","currency":"USD"},{"code":"MS","name":"Montserrat","dial":"+1-664","currency":"XCD"},{"code":"MR","name":"Mauritania","dial":"222","currency":"MRO"},{"code":"IM","name":"Isle of Man","dial":"+44-1624","currency":"GBP"},{"code":"UG","name":"Uganda","dial":"256","currency":"UGX"},{"code":"TZ","name":"Tanzania","dial":"255","currency":"TZS"},{"code":"MY","name":"Malaysia","dial":"60","currency":"MYR"},{"code":"MX","name":"Mexico","dial":"52","currency":"MXN"},{"code":"IL","name":"Israel","dial":"972","currency":"ILS"},{"code":"FR","name":"France","dial":"33","currency":"EUR"},{"code":"IO","name":"British Indian Ocean Territory","dial":"246","currency":"USD"},{"code":"SH","name":"Saint Helena","dial":"290","currency":"SHP"},{"code":"FI","name":"Finland","dial":"358","currency":"EUR"},{"code":"FJ","name":"Fiji","dial":"679","currency":"FJD"},{"code":"FK","name":"Falkland Islands","dial":"500","currency":"FKP"},{"code":"FM","name":"Micronesia","dial":"691","currency":"USD"},{"code":"FO","name":"Faroe Islands","dial":"298","currency":"DKK"},{"code":"NI","name":"Nicaragua","dial":"505","currency":"NIO"},{"code":"NL","name":"Netherlands","dial":"31","currency":"EUR"},{"code":"NO","name":"Norway","dial":"47","currency":"NOK"},{"code":"NA","name":"Namibia","dial":"264","currency":"NAD"},{"code":"VU","name":"Vanuatu","dial":"678","currency":"VUV"},{"code":"NC","name":"New Caledonia","dial":"687","currency":"XPF"},{"code":"NE","name":"Niger","dial":"227","currency":"XOF"},{"code":"NF","name":"Norfolk Island","dial":"672","currency":"AUD"},{"code":"NG","name":"Nigeria","dial":"234","currency":"NGN"},{"code":"NZ","name":"New Zealand","dial":"64","currency":"NZD"},{"code":"NP","name":"Nepal","dial":"977","currency":"NPR"},{"code":"NR","name":"Nauru","dial":"674","currency":"AUD"},{"code":"NU","name":"Niue","dial":"683","currency":"NZD"},{"code":"CK","name":"Cook Islands","dial":"682","currency":"NZD"},{"code":"XK","name":"Kosovo","dial":"+383","currency":"EUR"},{"code":"CI","name":"Ivory Coast","dial":"225","currency":"XOF"},{"code":"CH","name":"Switzerland","dial":"41","currency":"CHF"},{"code":"CO","name":"Colombia","dial":"57","currency":"COP"},{"code":"CN","name":"China","dial":"86","currency":"CNY"},{"code":"CM","name":"Cameroon","dial":"237","currency":"XAF"},{"code":"CL","name":"Chile","dial":"56","currency":"CLP"},{"code":"CC","name":"Cocos Islands","dial":"61","currency":"AUD"},{"code":"CA","name":"Canada","dial":"1","currency":"CAD"},{"code":"CG","name":"Republic of the Congo","dial":"242","currency":"XAF"},{"code":"CF","name":"Central African Republic","dial":"236","currency":"XAF"},{"code":"CD","name":"Democratic Republic of the Congo","dial":"243","currency":"CDF"},{"code":"CZ","name":"Czech Republic","dial":"420","currency":"CZK"},{"code":"CY","name":"Cyprus","dial":"357","currency":"EUR"},{"code":"CX","name":"Christmas Island","dial":"61","currency":"AUD"},{"code":"CR","name":"Costa Rica","dial":"506","currency":"CRC"},{"code":"CW","name":"Curacao","dial":"599","currency":"ANG"},{"code":"CV","name":"Cape Verde","dial":"238","currency":"CVE"},{"code":"CU","name":"Cuba","dial":"53","currency":"CUP"},{"code":"SZ","name":"Swaziland","dial":"268","currency":"SZL"},{"code":"SY","name":"Syria","dial":"963","currency":"SYP"},{"code":"SX","name":"Sint Maarten","dial":"599","currency":"ANG"},{"code":"KG","name":"Kyrgyzstan","dial":"996","currency":"KGS"},{"code":"KE","name":"Kenya","dial":"254","currency":"KES"},{"code":"SS","name":"South Sudan","dial":"211","currency":"SSP"},{"code":"SR","name":"Suriname","dial":"597","currency":"SRD"},{"code":"KI","name":"Kiribati","dial":"686","currency":"AUD"},{"code":"KH","name":"Cambodia","dial":"855","currency":"KHR"},{"code":"KN","name":"Saint Kitts and Nevis","dial":"+1-869","currency":"XCD"},{"code":"KM","name":"Comoros","dial":"269","currency":"KMF"},{"code":"ST","name":"Sao Tome and Principe","dial":"239","currency":"STD"},{"code":"SK","name":"Slovakia","dial":"421","currency":"EUR"},{"code":"KR","name":"South Korea","dial":"82","currency":"KRW"},{"code":"SI","name":"Slovenia","dial":"386","currency":"EUR"},{"code":"KP","name":"North Korea","dial":"850","currency":"KPW"},{"code":"KW","name":"Kuwait","dial":"965","currency":"KWD"},{"code":"SN","name":"Senegal","dial":"221","currency":"XOF"},{"code":"SM","name":"San Marino","dial":"378","currency":"EUR"},{"code":"SL","name":"Sierra Leone","dial":"232","currency":"SLL"},{"code":"SC","name":"Seychelles","dial":"248","currency":"SCR"},{"code":"KZ","name":"Kazakhstan","dial":"7","currency":"KZT"},{"code":"KY","name":"Cayman Islands","dial":"+1-345","currency":"KYD"},{"code":"SG","name":"Singapore","dial":"65","currency":"SGD"},{"code":"SE","name":"Sweden","dial":"46","currency":"SEK"},{"code":"SD","name":"Sudan","dial":"249","currency":"SDG"},{"code":"DO","name":"Dominican Republic","dial":"+1-809 and 1-829","currency":"DOP"},{"code":"DM","name":"Dominica","dial":"+1-767","currency":"XCD"},{"code":"DJ","name":"Djibouti","dial":"253","currency":"DJF"},{"code":"DK","name":"Denmark","dial":"45","currency":"DKK"},{"code":"VG","name":"British Virgin Islands","dial":"+1-284","currency":"USD"},{"code":"DE","name":"Germany","dial":"49","currency":"EUR"},{"code":"YE","name":"Yemen","dial":"967","currency":"YER"},{"code":"DZ","name":"Algeria","dial":"213","currency":"DZD"},{"code":"US","name":"United States","dial":"1","currency":"USD"},{"code":"UY","name":"Uruguay","dial":"598","currency":"UYU"},{"code":"YT","name":"Mayotte","dial":"262","currency":"EUR"},{"code":"UM","name":"United States Minor Outlying Islands","dial":"1","currency":"USD"},{"code":"LB","name":"Lebanon","dial":"961","currency":"LBP"},{"code":"LC","name":"Saint Lucia","dial":"+1-758","currency":"XCD"},{"code":"LA","name":"Laos","dial":"856","currency":"LAK"},{"code":"TV","name":"Tuvalu","dial":"688","currency":"AUD"},{"code":"TW","name":"Taiwan","dial":"886","currency":"TWD"},{"code":"TT","name":"Trinidad and Tobago","dial":"+1-868","currency":"TTD"},{"code":"TR","name":"Turkey","dial":"90","currency":"TRY"},{"code":"LK","name":"Sri Lanka","dial":"94","currency":"LKR"},{"code":"LI","name":"Liechtenstein","dial":"423","currency":"CHF"},{"code":"LV","name":"Latvia","dial":"371","currency":"EUR"},{"code":"TO","name":"Tonga","dial":"676","currency":"TOP"},{"code":"LT","name":"Lithuania","dial":"370","currency":"LTL"},{"code":"LU","name":"Luxembourg","dial":"352","currency":"EUR"},{"code":"LR","name":"Liberia","dial":"231","currency":"LRD"},{"code":"LS","name":"Lesotho","dial":"266","currency":"LSL"},{"code":"TH","name":"Thailand","dial":"66","currency":"THB"},{"code":"TF","name":"French Southern Territories","dial":"+262","currency":"EUR"},{"code":"TG","name":"Togo","dial":"228","currency":"XOF"},{"code":"TD","name":"Chad","dial":"235","currency":"XAF"},{"code":"TC","name":"Turks and Caicos Islands","dial":"+1-649","currency":"USD"},{"code":"LY","name":"Libya","dial":"218","currency":"LYD"},{"code":"VA","name":"Vatican","dial":"379","currency":"EUR"},{"code":"VC","name":"Saint Vincent and the Grenadines","dial":"+1-784","currency":"XCD"},{"code":"AE","name":"United Arab Emirates","dial":"971","currency":"AED"},{"code":"AD","name":"Andorra","dial":"376","currency":"EUR"},{"code":"AG","name":"Antigua and Barbuda","dial":"+1-268","currency":"XCD"},{"code":"AF","name":"Afghanistan","dial":"93","currency":"AFN"},{"code":"AI","name":"Anguilla","dial":"+1-264","currency":"XCD"},{"code":"VI","name":"U.S. Virgin Islands","dial":"+1-340","currency":"USD"},{"code":"IS","name":"Iceland","dial":"354","currency":"ISK"},{"code":"IR","name":"Iran","dial":"98","currency":"IRR"},{"code":"AM","name":"Armenia","dial":"374","currency":"AMD"},{"code":"AL","name":"Albania","dial":"355","currency":"ALL"},{"code":"AO","name":"Angola","dial":"244","currency":"AOA"},{"code":"AQ","name":"Antarctica","dial":"+672","currency":"A"},{"code":"AS","name":"American Samoa","dial":"+1-684","currency":"USD"},{"code":"AR","name":"Argentina","dial":"54","currency":"ARS"},{"code":"AU","name":"Australia","dial":"61","currency":"AUD"},{"code":"AT","name":"Austria","dial":"43","currency":"EUR"},{"code":"AW","name":"Aruba","dial":"297","currency":"AWG"},{"code":"IN","name":"India","dial":"91","currency":"INR"},{"code":"AX","name":"Aland Islands","dial":"+358-18","currency":"EUR"},{"code":"AZ","name":"Azerbaijan","dial":"994","currency":"AZN"},{"code":"IE","name":"Ireland","dial":"353","currency":"EUR"},{"code":"ID","name":"Indonesia","dial":"62","currency":"IDR"},{"code":"UA","name":"Ukraine","dial":"380","currency":"UAH"},{"code":"QA","name":"Qatar","dial":"974","currency":"QAR"},{"code":"MZ","name":"Mozambique","dial":"258","currency":"MZN"}]
