var ratings_concreteness = '';

var headings_concreteness = '<tr>'+
'<th></th>'+
'<th class="outlined">abstraktní<br/>1</th>'+
'<th>2</th>'+
'<th>3</th>'+
'<th>4</th>'+
'<th>konkrétní<br/>5</th>'+
'<th class="outlined1" style="color: #9F1F41;">Toto slovo<br/>neznám</th>'+
'</tr>'

ratings_concreteness += '<table class="responsive-table-input-matrix">'+
  '<thead>'+
  headings_concreteness+
  '</thead>'+
  '<tbody>'+
  
  '<tr>'+
  '<td style="text-align: left; width: 250px;">'+'teorie'+'</td>'+
  '<td class="outlined"><input type="radio" name="'+'teorie'+'" value="1" required></td>'+
  '<td><input type="radio" name="'+'teorie'+'" value="2"></td>'+
  '<td><input type="radio" name="'+'teorie'+'" value="3"></td>'+
  '<td><input type="radio" name="'+'teorie'+'" value="4"></td>'+
  '<td><input type="radio" name="'+'teorie'+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+'teorie'+'" value="unkown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[0]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[0]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[0]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[0]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[0]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[0]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[0]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[1]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[1]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[1]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[1]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[1]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[1]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[1]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[2]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[2]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[2]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[2]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[2]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[2]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[2]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[3]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[3]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[3]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[3]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[3]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[3]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[3]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[4]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[4]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[4]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[4]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[4]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[4]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[4]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[5]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[5]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[5]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[5]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[5]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[5]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[5]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[6]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[6]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[6]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[6]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[6]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[6]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[6]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[7]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[7]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[7]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[7]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[7]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[7]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[7]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[8]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[8]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[8]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[8]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[8]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[8]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[8]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[9]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[9]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[9]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[9]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[9]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[9]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[9]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[10]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[10]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[10]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[10]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[10]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[10]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[10]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[11]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[11]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[11]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[11]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[11]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[11]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[11]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[12]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[12]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[12]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[12]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[12]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[12]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[12]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[13]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[13]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[13]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[13]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[13]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[13]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[13]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[14]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[14]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[14]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[14]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[14]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[14]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[14]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[15]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[15]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[15]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[15]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[15]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[15]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[15]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[16]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[16]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[16]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[16]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[16]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[16]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[16]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[17]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[17]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[17]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[17]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[17]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[17]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[17]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[18]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[18]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[18]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[18]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[18]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[18]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[18]+'" value="unknown"></td>'+
'</tr>'+


headings_concreteness+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[19]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[19]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[19]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[19]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[19]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[19]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[19]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[20]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[20]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[20]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[20]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[20]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[20]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[20]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[21]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[21]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[21]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[21]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[21]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[21]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[21]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[22]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[22]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[22]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[22]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[22]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[22]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[22]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[23]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[23]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[23]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[23]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[23]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[23]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[23]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[24]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[24]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[24]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[24]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[24]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[24]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[24]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[25]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[25]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[25]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[25]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[25]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[25]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[25]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[26]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[26]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[26]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[26]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[26]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[26]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[26]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[27]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[27]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[27]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[27]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[27]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[27]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[27]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[28]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[28]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[28]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[28]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[28]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[28]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[28]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[29]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[29]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[29]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[29]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[29]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[29]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[29]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[30]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[30]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[30]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[30]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[30]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[30]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[30]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[31]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[31]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[31]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[31]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[31]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[31]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[31]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[32]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[32]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[32]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[32]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[32]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[32]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[32]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[33]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[33]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[33]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[33]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[33]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[33]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[33]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[34]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[34]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[34]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[34]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[34]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[34]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[34]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[35]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[35]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[35]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[35]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[35]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[35]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[35]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[36]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[36]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[36]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[36]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[36]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[36]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[36]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[37]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[37]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[37]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[37]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[37]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[37]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[37]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[38]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[38]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[38]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[38]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[38]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[38]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[38]+'" value="unknown"></td>'+
'</tr>'+


headings_concreteness+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[39]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[39]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[39]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[39]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[39]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[39]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[39]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[40]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[40]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[40]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[40]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[40]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[40]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[40]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[41]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[41]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[41]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[41]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[41]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[41]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[41]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[42]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[42]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[42]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[42]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[42]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[42]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[42]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[43]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[43]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[43]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[43]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[43]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[43]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[43]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[44]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[44]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[44]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[44]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[44]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[44]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[44]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[45]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[45]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[45]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[45]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[45]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[45]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[45]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[46]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[46]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[46]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[46]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[46]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[46]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[46]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[47]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[47]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[47]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[47]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[47]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[47]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[47]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[48]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[48]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[48]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[48]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[48]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[48]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[48]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[49]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[49]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[49]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[49]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[49]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[49]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[49]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[50]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[50]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[50]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[50]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[50]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[50]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[50]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[51]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[51]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[51]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[51]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[51]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[51]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[51]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[52]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[52]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[52]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[52]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[52]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[52]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[52]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[53]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[53]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[53]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[53]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[53]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[53]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[53]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[54]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[54]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[54]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[54]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[54]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[54]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[54]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[55]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[55]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[55]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[55]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[55]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[55]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[55]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[56]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[56]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[56]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[56]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[56]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[56]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[56]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[57]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[57]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[57]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[57]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[57]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[57]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[57]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[58]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[58]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[58]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[58]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[58]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[58]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[58]+'" value="unknown"></td>'+
'</tr>'+


headings_concreteness+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[59]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[59]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[59]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[59]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[59]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[59]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[59]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[60]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[60]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[60]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[60]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[60]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[60]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[60]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[61]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[61]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[61]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[61]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[61]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[61]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[61]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[62]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[62]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[62]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[62]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[62]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[62]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[62]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[63]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[63]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[63]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[63]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[63]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[63]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[63]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[64]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[64]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[64]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[64]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[64]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[64]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[64]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[65]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[65]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[65]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[65]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[65]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[65]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[65]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[66]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[66]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[66]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[66]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[66]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[66]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[66]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[67]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[67]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[67]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[67]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[67]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[67]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[67]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[68]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[68]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[68]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[68]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[68]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[68]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[68]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[69]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[69]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[69]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[69]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[69]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[69]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[69]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[70]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[70]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[70]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[70]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[70]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[70]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[70]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[71]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[71]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[71]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[71]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[71]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[71]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[71]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[72]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[72]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[72]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[72]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[72]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[72]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[72]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[73]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[73]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[73]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[73]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[73]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[73]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[73]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[74]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[74]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[74]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[74]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[74]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[74]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[74]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[75]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[75]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[75]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[75]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[75]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[75]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[75]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[76]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[76]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[76]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[76]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[76]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[76]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[76]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[77]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[77]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[77]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[77]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[77]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[77]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[77]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[78]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[78]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[78]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[78]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[78]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[78]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[78]+'" value="unknown"></td>'+
'</tr>'+


headings_concreteness+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[79]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[79]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[79]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[79]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[79]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[79]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[79]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[80]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[80]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[80]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[80]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[80]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[80]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[80]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[81]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[81]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[81]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[81]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[81]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[81]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[81]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[82]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[82]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[82]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[82]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[82]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[82]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[82]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[83]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[83]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[83]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[83]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[83]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[83]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[83]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[84]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[84]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[84]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[84]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[84]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[84]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[84]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[85]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[85]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[85]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[85]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[85]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[85]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[85]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[86]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[86]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[86]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[86]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[86]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[86]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[86]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[87]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[87]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[87]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[87]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[87]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[87]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[87]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[88]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[88]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[88]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[88]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[88]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[88]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[88]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[89]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[89]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[89]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[89]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[89]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[89]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[89]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[90]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[90]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[90]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[90]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[90]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[90]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[90]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[91]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[91]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[91]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[91]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[91]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[91]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[91]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[92]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[92]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[92]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[92]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[92]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[92]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[92]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[93]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[93]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[93]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[93]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[93]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[93]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[93]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[94]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[94]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[94]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[94]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[94]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[94]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[94]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[95]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[95]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[95]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[95]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[95]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[95]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[95]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[96]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[96]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[96]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[96]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[96]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[96]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[96]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[97]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[97]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[97]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[97]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[97]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[97]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[97]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[98]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[98]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[98]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[98]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[98]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[98]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[98]+'" value="unknown"></td>'+
'</tr>'+


headings_concreteness+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[99]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[99]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[99]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[99]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[99]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[99]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[99]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[100]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[100]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[100]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[100]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[100]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[100]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[100]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[101]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[101]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[101]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[101]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[101]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[101]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[101]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[102]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[102]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[102]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[102]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[102]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[102]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[102]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[103]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[103]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[103]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[103]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[103]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[103]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[103]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[104]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[104]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[104]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[104]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[104]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[104]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[104]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[105]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[105]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[105]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[105]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[105]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[105]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[105]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[106]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[106]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[106]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[106]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[106]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[106]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[106]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[107]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[107]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[107]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[107]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[107]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[107]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[107]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[108]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[108]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[108]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[108]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[108]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[108]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[108]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[109]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[109]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[109]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[109]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[109]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[109]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[109]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[110]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[110]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[110]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[110]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[110]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[110]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[110]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[111]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[111]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[111]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[111]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[111]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[111]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[111]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[112]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[112]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[112]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[112]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[112]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[112]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[112]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[113]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[113]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[113]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[113]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[113]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[113]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[113]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[114]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[114]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[114]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[114]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[114]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[114]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[114]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[115]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[115]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[115]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[115]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[115]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[115]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[115]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[116]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[116]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[116]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[116]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[116]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[116]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[116]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[117]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[117]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[117]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[117]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[117]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[117]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[117]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[118]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[118]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[118]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[118]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[118]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[118]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[118]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[119]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[119]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[119]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[119]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[119]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[119]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[119]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[120]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[120]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[120]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[120]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[120]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[120]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[120]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[121]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[121]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[121]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[121]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[121]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[121]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[121]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[122]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[122]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[122]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[122]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[122]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[122]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[122]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[123]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[123]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[123]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[123]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[123]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[123]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[123]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[124]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[124]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[124]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[124]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[124]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[124]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[124]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[125]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[125]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[125]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[125]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[125]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[125]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[125]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[126]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[126]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[126]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[126]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[126]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[126]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[126]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_concreteness[127]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_concreteness[127]+'" value="1" required></td>'+
  '<td><input type="radio" name="'+word_concreteness[127]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_concreteness[127]+'" value="3"></td>'+
  '<td><input type="radio" name="'+word_concreteness[127]+'" value="4"></td>'+
  '<td><input type="radio" name="'+word_concreteness[127]+'" value="5"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_concreteness[127]+'" value="unknown"></td>'+
'</tr>'+

'</tbody>'+
'</table>';