var ratings_imageability = '';

var headings_imageability = '<tr>'+
'<th></th>'+
'<th class="outlined">těžko si<br/>představit<br/>1</th>'+
'<th>2</th>'+
'<th>3</th>'+
'<th>4</th>'+
'<th>5</th>'+
'<th>6</th>'+
'<th>snadno si<br/>představit<br/>7</th>'+
'<th class="outlined1" style="color: #9F1F41;">Toto slovo<br/>neznám</th>'+
'</tr>'

ratings_imageability += '<table class="responsive-table-input-matrix">'+
  '<thead>'+
  headings_imageability+
  '</thead>'+
  '<tbody>'+
  
  '<tr>'+
  '<td style="text-align: left; width: 250px;">'+'orel'+'</td>'+
  '<td class="outlined"><input type="radio" name="'+'orel'+'" value="1" required></td>'+
  '<td><input type="radio" name="'+'orel'+'" value="2"></td>'+
  '<td><input type="radio" name="'+'orel'+'" value="3"></td>'+
  '<td><input type="radio" name="'+'orel'+'" value="4"></td>'+
  '<td><input type="radio" name="'+'orel'+'" value="5"></td>'+
  '<td><input type="radio" name="'+'orel'+'" value="6"></td>'+
  '<td><input type="radio" name="'+'orel'+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+'orel'+'" value="unkown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[0]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[0]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[0]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[0]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[0]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[0]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[0]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[0]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[0]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[1]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[1]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[1]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[1]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[1]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[1]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[1]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[1]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[1]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[2]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[2]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[2]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[2]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[2]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[2]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[2]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[2]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[2]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[3]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[3]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[3]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[3]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[3]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[3]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[3]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[3]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[3]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[4]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[4]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[4]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[4]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[4]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[4]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[4]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[4]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[4]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[5]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[5]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[5]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[5]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[5]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[5]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[5]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[5]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[5]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[6]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[6]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[6]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[6]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[6]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[6]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[6]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[6]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[6]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[7]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[7]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[7]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[7]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[7]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[7]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[7]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[7]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[7]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[8]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[8]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[8]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[8]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[8]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[8]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[8]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[8]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[8]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[9]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[9]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[9]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[9]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[9]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[9]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[9]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[9]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[9]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[10]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[10]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[10]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[10]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[10]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[10]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[10]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[10]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[10]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[11]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[11]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[11]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[11]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[11]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[11]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[11]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[11]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[11]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[12]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[12]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[12]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[12]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[12]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[12]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[12]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[12]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[12]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[13]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[13]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[13]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[13]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[13]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[13]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[13]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[13]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[13]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[14]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[14]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[14]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[14]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[14]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[14]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[14]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[14]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[14]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[15]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[15]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[15]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[15]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[15]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[15]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[15]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[15]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[15]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[16]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[16]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[16]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[16]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[16]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[16]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[16]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[16]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[16]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[17]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[17]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[17]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[17]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[17]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[17]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[17]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[17]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[17]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[18]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[18]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[18]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[18]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[18]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[18]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[18]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[18]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[18]+'" value="unknown"></td>'+
'</tr>'+


headings_imageability+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[19]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[19]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[19]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[19]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[19]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[19]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[19]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[19]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[19]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[20]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[20]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[20]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[20]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[20]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[20]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[20]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[20]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[20]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[21]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[21]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[21]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[21]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[21]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[21]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[21]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[21]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[21]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[22]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[22]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[22]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[22]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[22]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[22]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[22]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[22]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[22]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[23]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[23]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[23]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[23]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[23]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[23]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[23]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[23]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[23]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[24]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[24]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[24]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[24]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[24]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[24]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[24]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[24]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[24]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[25]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[25]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[25]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[25]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[25]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[25]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[25]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[25]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[25]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[26]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[26]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[26]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[26]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[26]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[26]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[26]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[26]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[26]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[27]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[27]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[27]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[27]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[27]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[27]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[27]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[27]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[27]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[28]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[28]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[28]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[28]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[28]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[28]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[28]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[28]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[28]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[29]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[29]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[29]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[29]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[29]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[29]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[29]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[29]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[29]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[30]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[30]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[30]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[30]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[30]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[30]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[30]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[30]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[30]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[31]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[31]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[31]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[31]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[31]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[31]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[31]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[31]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[31]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[32]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[32]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[32]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[32]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[32]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[32]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[32]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[32]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[32]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[33]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[33]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[33]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[33]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[33]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[33]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[33]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[33]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[33]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[34]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[34]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[34]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[34]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[34]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[34]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[34]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[34]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[34]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[35]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[35]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[35]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[35]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[35]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[35]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[35]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[35]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[35]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[36]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[36]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[36]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[36]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[36]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[36]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[36]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[36]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[36]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[37]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[37]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[37]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[37]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[37]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[37]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[37]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[37]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[37]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[38]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[38]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[38]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[38]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[38]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[38]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[38]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[38]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[38]+'" value="unknown"></td>'+
'</tr>'+


headings_imageability+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[39]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[39]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[39]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[39]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[39]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[39]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[39]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[39]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[39]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[40]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[40]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[40]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[40]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[40]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[40]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[40]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[40]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[40]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[41]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[41]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[41]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[41]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[41]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[41]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[41]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[41]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[41]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[42]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[42]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[42]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[42]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[42]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[42]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[42]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[42]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[42]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[43]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[43]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[43]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[43]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[43]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[43]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[43]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[43]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[43]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[44]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[44]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[44]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[44]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[44]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[44]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[44]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[44]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[44]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[45]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[45]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[45]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[45]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[45]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[45]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[45]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[45]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[45]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[46]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[46]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[46]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[46]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[46]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[46]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[46]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[46]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[46]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[47]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[47]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[47]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[47]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[47]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[47]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[47]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[47]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[47]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[48]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[48]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[48]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[48]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[48]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[48]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[48]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[48]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[48]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[49]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[49]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[49]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[49]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[49]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[49]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[49]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[49]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[49]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[50]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[50]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[50]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[50]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[50]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[50]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[50]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[50]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[50]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[51]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[51]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[51]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[51]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[51]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[51]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[51]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[51]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[51]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[52]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[52]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[52]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[52]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[52]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[52]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[52]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[52]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[52]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[53]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[53]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[53]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[53]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[53]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[53]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[53]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[53]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[53]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[54]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[54]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[54]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[54]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[54]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[54]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[54]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[54]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[54]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[55]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[55]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[55]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[55]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[55]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[55]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[55]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[55]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[55]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[56]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[56]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[56]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[56]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[56]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[56]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[56]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[56]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[56]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[57]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[57]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[57]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[57]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[57]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[57]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[57]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[57]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[57]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[58]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[58]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[58]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[58]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[58]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[58]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[58]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[58]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[58]+'" value="unknown"></td>'+
'</tr>'+


headings_imageability+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[59]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[59]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[59]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[59]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[59]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[59]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[59]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[59]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[59]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[60]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[60]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[60]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[60]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[60]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[60]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[60]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[60]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[60]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[61]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[61]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[61]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[61]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[61]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[61]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[61]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[61]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[61]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[62]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[62]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[62]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[62]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[62]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[62]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[62]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[62]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[62]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[63]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[63]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[63]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[63]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[63]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[63]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[63]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[63]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[63]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[64]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[64]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[64]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[64]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[64]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[64]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[64]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[64]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[64]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[65]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[65]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[65]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[65]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[65]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[65]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[65]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[65]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[65]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[66]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[66]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[66]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[66]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[66]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[66]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[66]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[66]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[66]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[67]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[67]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[67]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[67]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[67]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[67]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[67]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[67]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[67]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[68]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[68]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[68]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[68]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[68]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[68]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[68]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[68]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[68]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[69]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[69]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[69]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[69]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[69]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[69]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[69]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[69]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[69]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[70]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[70]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[70]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[70]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[70]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[70]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[70]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[70]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[70]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[71]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[71]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[71]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[71]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[71]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[71]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[71]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[71]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[71]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[72]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[72]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[72]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[72]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[72]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[72]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[72]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[72]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[72]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[73]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[73]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[73]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[73]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[73]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[73]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[73]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[73]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[73]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[74]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[74]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[74]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[74]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[74]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[74]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[74]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[74]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[74]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[75]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[75]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[75]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[75]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[75]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[75]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[75]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[75]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[75]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[76]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[76]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[76]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[76]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[76]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[76]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[76]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[76]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[76]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[77]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[77]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[77]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[77]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[77]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[77]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[77]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[77]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[77]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[78]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[78]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[78]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[78]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[78]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[78]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[78]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[78]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[78]+'" value="unknown"></td>'+
'</tr>'+


headings_imageability+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[79]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[79]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[79]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[79]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[79]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[79]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[79]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[79]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[79]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[80]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[80]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[80]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[80]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[80]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[80]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[80]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[80]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[80]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[81]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[81]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[81]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[81]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[81]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[81]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[81]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[81]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[81]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[82]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[82]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[82]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[82]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[82]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[82]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[82]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[82]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[82]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[83]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[83]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[83]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[83]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[83]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[83]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[83]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[83]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[83]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[84]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[84]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[84]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[84]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[84]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[84]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[84]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[84]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[84]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[85]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[85]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[85]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[85]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[85]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[85]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[85]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[85]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[85]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[86]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[86]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[86]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[86]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[86]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[86]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[86]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[86]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[86]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[87]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[87]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[87]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[87]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[87]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[87]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[87]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[87]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[87]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[88]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[88]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[88]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[88]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[88]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[88]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[88]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[88]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[88]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[89]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[89]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[89]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[89]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[89]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[89]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[89]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[89]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[89]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[90]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[90]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[90]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[90]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[90]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[90]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[90]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[90]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[90]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[91]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[91]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[91]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[91]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[91]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[91]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[91]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[91]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[91]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[92]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[92]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[92]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[92]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[92]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[92]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[92]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[92]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[92]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[93]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[93]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[93]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[93]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[93]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[93]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[93]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[93]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[93]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[94]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[94]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[94]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[94]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[94]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[94]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[94]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[94]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[94]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[95]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[95]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[95]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[95]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[95]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[95]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[95]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[95]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[95]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[96]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[96]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[96]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[96]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[96]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[96]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[96]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[96]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[96]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[97]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[97]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[97]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[97]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[97]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[97]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[97]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[97]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[97]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[98]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[98]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[98]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[98]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[98]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[98]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[98]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[98]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[98]+'" value="unknown"></td>'+
'</tr>'+


headings_imageability+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[99]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[99]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[99]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[99]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[99]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[99]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[99]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[99]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[99]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[100]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[100]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[100]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[100]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[100]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[100]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[100]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[100]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[100]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[101]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[101]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[101]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[101]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[101]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[101]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[101]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[101]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[101]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[102]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[102]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[102]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[102]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[102]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[102]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[102]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[102]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[102]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[103]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[103]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[103]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[103]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[103]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[103]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[103]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[103]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[103]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[104]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[104]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[104]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[104]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[104]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[104]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[104]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[104]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[104]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[105]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[105]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[105]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[105]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[105]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[105]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[105]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[105]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[105]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[106]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[106]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[106]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[106]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[106]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[106]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[106]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[106]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[106]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[107]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[107]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[107]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[107]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[107]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[107]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[107]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[107]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[107]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[108]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[108]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[108]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[108]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[108]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[108]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[108]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[108]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[108]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[109]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[109]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[109]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[109]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[109]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[109]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[109]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[109]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[109]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[110]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[110]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[110]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[110]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[110]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[110]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[110]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[110]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[110]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[111]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[111]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[111]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[111]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[111]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[111]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[111]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[111]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[111]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[112]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[112]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[112]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[112]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[112]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[112]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[112]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[112]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[112]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[113]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[113]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[113]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[113]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[113]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[113]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[113]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[113]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[113]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[114]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[114]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[114]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[114]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[114]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[114]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[114]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[114]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[114]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[115]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[115]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[115]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[115]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[115]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[115]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[115]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[115]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[115]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[116]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[116]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[116]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[116]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[116]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[116]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[116]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[116]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[116]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[117]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[117]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[117]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[117]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[117]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[117]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[117]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[117]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[117]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[118]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[118]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[118]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[118]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[118]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[118]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[118]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[118]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[118]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[119]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[119]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[119]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[119]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[119]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[119]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[119]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[119]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[119]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[120]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[120]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[120]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[120]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[120]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[120]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[120]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[120]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[120]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[121]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[121]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[121]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[121]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[121]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[121]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[121]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[121]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[121]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[122]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[122]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[122]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[122]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[122]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[122]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[122]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[122]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[122]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[123]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[123]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[123]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[123]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[123]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[123]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[123]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[123]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[123]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[124]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[124]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[124]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[124]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[124]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[124]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[124]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[124]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[124]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[125]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[125]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[125]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[125]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[125]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[125]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[125]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[125]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[125]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[126]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[126]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[126]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[126]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[126]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[126]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[126]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[126]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[126]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_imageability[127]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_imageability[127]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_imageability[127]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_imageability[127]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_imageability[127]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_imageability[127]+'" value="5"></td>'+
  '<td><input type="radio" name="'+word_imageability[127]+'" value="6"></td>'+
  '<td><input type="radio" name="'+word_imageability[127]+'" value="7"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_imageability[127]+'" value="unknown"></td>'+
'</tr>'+

'</tbody>'+
'</table>';