# score-or-die
"Score or Die" is a game which you can guess proper format to answer. 

## Launch the app on local server
Type this command below on terminal:
```terminal
npm dev
```
 
## Regex for validation 
### Zip code
[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]  
[link](https://stackoverflow.com/questions/1146202/canadian-postal-code-validation) 
 
### Name
/^[a-zA-Z]+ [a-zA-Z]+$/  
[link](https://www.codexworld.com/how-to/validate-first-last-name-with-regular-expression-using-javascript/) 
 
### Country
Search from a list which country names are stored.  
Afghanistan,Albania,Algeria,Andorra,Angola,Antigua and Barbuda,Argentina,Armenia,Australia,Austria,Austrian Empire,Azerbaijan,Baden*,Bahrain,Bangladesh,Barbados,Bavaria*,Belarus,Belgium,Belize,Benin (Dahomey),Bolivia,Bosnia and Herzegovina,Botswana,Brazil,Brunei,Brunswick and Lüneburg,Bulgaria,Burkina Faso (Upper Volta),Burma,Burundi,Cabo Verde,Cambodia,Cameroon,Canada,Central African Republic,Central American Federation*,Chad,Chile,China,Colombia,Comoros,Costa Rica,Cote d’Ivoire (Ivory Coast),Croatia,Cuba,Cyprus,Czechia,Czechoslovakia,Democratic Republic of the Congo,Denmark,Djibouti,Dominica,Dominican Republic,East Germany (German Democratic Republic),Ecuador,Egypt,El Salvador,Equatorial Guinea,Eritrea,Estonia,Eswatini,Ethiopia,Federal Government of Germany (1848-49)*,Fiji,Finland,France,Gabon,Georgia,Germany,Ghana,Greece,Grenada,Guatemala,Guinea,Guinea-Bissau,Guyana,Haiti,Hanover*,Hanseatic Republics*,Hawaii*,Hesse*,Holy See,Honduras,Hungary,Iceland,India,Indonesia,Iran,Iraq,Ireland,Israel,Italy,Jamaica,Japan,Jordan,Kazakhstan,Kenya,Kingdom of Serbia/Yugoslavia*,Kiribati,Korea,Kosovo,Kuwait,Kyrgyzstan,Laos,Latvia,Lebanon,Lesotho,Lew Chew (Loochoo)*,Liberia,Libya,Liechtenstein,Lithuania,Luxembourg,Madagascar,Malawi,Malaysia,Maldives,Mali,Malta,Marshall Islands,Mauritania,Mauritius,Mecklenburg-Schwerin*,Mecklenburg-Strelitz*,Mexico,Micronesia,Moldova,Monaco,Mongolia,Montenegro,Morocco,Mozambique,Namibia,Nassau*,Nauru,Nepal,New Zealand,Nicaragua,Niger,Nigeria,North German Confederation*,North German Union*,North Macedonia,Norway,Oldenburg*,Oman,Orange Free State*,Pakistan,Palau,Panama,Papal States*,Papua New Guinea,Paraguay,Peru,Philippines,Piedmont-Sardinia*,Poland,Portugal,Qatar,Republic of Genoa*,Republic of Korea (South Korea),Republic of the Congo,Romania,Russia,Rwanda,Saint Kitts and Nevis,Saint Lucia,Saint Vincent and the Grenadines,Samoa,San Marino,Sao Tome and Principe,Saudi Arabia,Schaumburg-Lippe*,Senegal,Serbia,Seychelles,Sierra Leone,Singapore,Slovakia,Slovenia,Somalia,South Africa,South Sudan,Spain,Sri Lanka,Sudan,Suriname,Sweden,Switzerland,Syria,Tajikistan,Tanzania,Texas*,Thailand,The Bahamas,The Cayman Islands,The Congo Free State,The Duchy of Parma*,The Gambia,The Grand Duchy of Tuscany*,The Netherlands,The Solomon Islands,The United Arab Emirates,The United Kingdom,Timor-Leste,Togo,Tonga,Trinidad and Tobago,Tunisia,Turkey,Turkmenistan,Tuvalu,Two Sicilies*,Uganda,Ukraine,Union of Soviet Socialist Republics*,Uruguay,Uzbekistan,Vanuatu,Venezuela,Vietnam,Württemberg*,Yemen,Zambia,Zimbabwe
[Country names](https://history.state.gov/countries/all)
 
### Age
Integer ranged 0 - 150, can be if statement 
``` JavaScript
if(age >= 0 &&  age <= 200)  
{
   //code
}
```  
[link](https://stackoverflow.com/questions/29467075/regex-for-age-validation-that-accepts-an-age-between-0-200-using-javascript-only)
 
### Year
```
^\d{4}$
```  
[link](https://stackoverflow.com/questions/4374185/regular-expression-match-to-test-for-a-valid-year)

### Phone Number 
```
/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
```  
[link](https://regexr.com/3c53v)