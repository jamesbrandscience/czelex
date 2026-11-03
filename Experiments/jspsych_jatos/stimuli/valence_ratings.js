var ratings_valence = '';

var headings_valence = '<tr>'+
'<th></th>'+
'<th class="outlined">velmi<br/>negativní</th>'+
'<th>negativní</th>'+
'<th>spíše<br/>negativní</th>'+
'<th class="outlined1">neutrální</th>'+
'<th>spíše<br/>pozitivní</th>'+
'<th>pozitivní</th>'+
'<th>velmi<br/>pozitivní</th>'+
'<th class="outlined1" style="color: #9F1F41;">Toto slovo<br/>neznám</th>'+
'</tr>'

ratings_valence += '<table class="responsive-table-input-matrix">'+
  '<thead>'+
  headings_valence+
  '</thead>'+
  '<tbody>'+
  
  '<tr>'+
  '<td style="text-align: left; width: 250px;">'+'šikanovat'+'</td>'+
  '<td class="outlined"><input type="radio" name="'+'šikanovat'+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+'šikanovat'+'" value="-2"></td>'+
  '<td><input type="radio" name="'+'šikanovat'+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+'šikanovat'+'" value="0"></td>'+
  '<td><input type="radio" name="'+'šikanovat'+'" value="1"></td>'+
  '<td><input type="radio" name="'+'šikanovat'+'" value="2"></td>'+
  '<td><input type="radio" name="'+'šikanovat'+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+'šikanovat'+'" value="unkown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[0]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[0]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[0]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[0]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[0]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[0]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[0]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[0]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[0]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[1]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[1]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[1]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[1]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[1]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[1]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[1]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[1]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[1]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[2]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[2]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[2]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[2]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[2]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[2]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[2]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[2]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[2]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[3]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[3]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[3]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[3]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[3]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[3]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[3]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[3]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[3]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[4]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[4]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[4]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[4]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[4]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[4]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[4]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[4]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[4]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[5]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[5]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[5]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[5]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[5]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[5]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[5]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[5]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[5]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[6]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[6]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[6]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[6]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[6]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[6]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[6]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[6]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[6]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[7]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[7]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[7]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[7]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[7]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[7]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[7]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[7]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[7]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[8]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[8]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[8]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[8]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[8]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[8]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[8]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[8]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[8]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[9]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[9]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[9]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[9]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[9]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[9]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[9]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[9]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[9]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[10]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[10]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[10]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[10]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[10]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[10]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[10]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[10]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[10]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[11]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[11]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[11]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[11]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[11]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[11]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[11]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[11]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[11]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[12]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[12]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[12]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[12]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[12]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[12]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[12]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[12]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[12]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[13]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[13]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[13]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[13]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[13]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[13]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[13]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[13]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[13]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[14]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[14]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[14]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[14]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[14]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[14]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[14]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[14]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[14]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[15]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[15]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[15]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[15]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[15]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[15]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[15]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[15]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[15]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[16]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[16]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[16]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[16]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[16]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[16]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[16]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[16]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[16]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[17]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[17]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[17]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[17]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[17]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[17]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[17]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[17]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[17]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[18]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[18]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[18]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[18]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[18]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[18]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[18]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[18]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[18]+'" value="unknown"></td>'+
'</tr>'+


headings_valence+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[19]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[19]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[19]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[19]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[19]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[19]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[19]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[19]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[19]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[20]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[20]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[20]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[20]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[20]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[20]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[20]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[20]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[20]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[21]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[21]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[21]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[21]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[21]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[21]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[21]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[21]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[21]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[22]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[22]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[22]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[22]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[22]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[22]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[22]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[22]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[22]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[23]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[23]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[23]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[23]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[23]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[23]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[23]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[23]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[23]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[24]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[24]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[24]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[24]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[24]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[24]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[24]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[24]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[24]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[25]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[25]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[25]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[25]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[25]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[25]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[25]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[25]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[25]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[26]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[26]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[26]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[26]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[26]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[26]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[26]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[26]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[26]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[27]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[27]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[27]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[27]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[27]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[27]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[27]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[27]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[27]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[28]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[28]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[28]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[28]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[28]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[28]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[28]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[28]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[28]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[29]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[29]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[29]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[29]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[29]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[29]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[29]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[29]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[29]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[30]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[30]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[30]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[30]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[30]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[30]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[30]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[30]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[30]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[31]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[31]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[31]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[31]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[31]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[31]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[31]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[31]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[31]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[32]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[32]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[32]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[32]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[32]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[32]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[32]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[32]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[32]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[33]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[33]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[33]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[33]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[33]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[33]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[33]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[33]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[33]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[34]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[34]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[34]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[34]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[34]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[34]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[34]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[34]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[34]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[35]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[35]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[35]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[35]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[35]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[35]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[35]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[35]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[35]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[36]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[36]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[36]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[36]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[36]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[36]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[36]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[36]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[36]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[37]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[37]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[37]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[37]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[37]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[37]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[37]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[37]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[37]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[38]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[38]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[38]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[38]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[38]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[38]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[38]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[38]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[38]+'" value="unknown"></td>'+
'</tr>'+


headings_valence+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[39]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[39]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[39]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[39]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[39]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[39]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[39]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[39]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[39]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[40]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[40]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[40]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[40]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[40]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[40]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[40]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[40]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[40]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[41]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[41]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[41]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[41]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[41]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[41]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[41]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[41]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[41]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[42]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[42]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[42]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[42]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[42]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[42]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[42]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[42]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[42]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[43]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[43]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[43]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[43]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[43]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[43]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[43]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[43]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[43]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[44]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[44]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[44]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[44]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[44]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[44]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[44]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[44]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[44]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[45]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[45]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[45]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[45]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[45]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[45]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[45]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[45]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[45]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[46]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[46]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[46]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[46]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[46]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[46]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[46]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[46]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[46]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[47]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[47]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[47]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[47]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[47]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[47]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[47]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[47]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[47]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[48]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[48]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[48]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[48]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[48]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[48]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[48]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[48]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[48]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[49]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[49]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[49]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[49]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[49]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[49]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[49]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[49]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[49]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[50]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[50]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[50]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[50]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[50]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[50]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[50]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[50]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[50]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[51]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[51]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[51]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[51]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[51]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[51]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[51]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[51]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[51]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[52]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[52]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[52]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[52]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[52]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[52]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[52]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[52]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[52]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[53]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[53]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[53]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[53]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[53]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[53]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[53]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[53]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[53]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[54]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[54]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[54]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[54]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[54]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[54]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[54]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[54]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[54]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[55]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[55]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[55]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[55]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[55]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[55]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[55]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[55]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[55]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[56]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[56]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[56]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[56]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[56]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[56]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[56]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[56]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[56]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[57]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[57]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[57]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[57]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[57]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[57]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[57]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[57]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[57]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[58]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[58]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[58]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[58]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[58]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[58]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[58]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[58]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[58]+'" value="unknown"></td>'+
'</tr>'+


headings_valence+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[59]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[59]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[59]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[59]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[59]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[59]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[59]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[59]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[59]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[60]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[60]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[60]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[60]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[60]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[60]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[60]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[60]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[60]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[61]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[61]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[61]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[61]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[61]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[61]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[61]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[61]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[61]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[62]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[62]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[62]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[62]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[62]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[62]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[62]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[62]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[62]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[63]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[63]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[63]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[63]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[63]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[63]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[63]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[63]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[63]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[64]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[64]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[64]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[64]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[64]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[64]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[64]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[64]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[64]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[65]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[65]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[65]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[65]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[65]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[65]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[65]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[65]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[65]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[66]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[66]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[66]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[66]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[66]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[66]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[66]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[66]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[66]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[67]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[67]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[67]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[67]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[67]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[67]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[67]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[67]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[67]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[68]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[68]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[68]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[68]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[68]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[68]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[68]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[68]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[68]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[69]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[69]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[69]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[69]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[69]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[69]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[69]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[69]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[69]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[70]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[70]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[70]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[70]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[70]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[70]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[70]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[70]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[70]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[71]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[71]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[71]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[71]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[71]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[71]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[71]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[71]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[71]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[72]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[72]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[72]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[72]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[72]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[72]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[72]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[72]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[72]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[73]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[73]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[73]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[73]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[73]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[73]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[73]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[73]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[73]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[74]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[74]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[74]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[74]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[74]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[74]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[74]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[74]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[74]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[75]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[75]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[75]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[75]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[75]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[75]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[75]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[75]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[75]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[76]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[76]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[76]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[76]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[76]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[76]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[76]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[76]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[76]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[77]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[77]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[77]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[77]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[77]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[77]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[77]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[77]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[77]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[78]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[78]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[78]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[78]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[78]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[78]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[78]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[78]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[78]+'" value="unknown"></td>'+
'</tr>'+


headings_valence+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[79]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[79]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[79]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[79]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[79]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[79]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[79]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[79]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[79]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[80]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[80]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[80]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[80]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[80]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[80]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[80]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[80]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[80]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[81]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[81]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[81]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[81]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[81]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[81]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[81]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[81]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[81]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[82]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[82]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[82]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[82]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[82]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[82]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[82]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[82]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[82]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[83]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[83]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[83]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[83]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[83]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[83]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[83]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[83]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[83]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[84]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[84]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[84]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[84]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[84]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[84]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[84]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[84]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[84]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[85]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[85]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[85]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[85]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[85]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[85]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[85]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[85]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[85]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[86]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[86]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[86]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[86]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[86]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[86]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[86]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[86]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[86]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[87]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[87]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[87]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[87]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[87]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[87]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[87]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[87]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[87]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[88]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[88]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[88]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[88]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[88]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[88]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[88]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[88]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[88]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[89]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[89]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[89]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[89]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[89]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[89]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[89]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[89]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[89]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[90]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[90]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[90]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[90]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[90]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[90]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[90]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[90]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[90]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[91]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[91]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[91]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[91]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[91]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[91]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[91]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[91]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[91]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[92]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[92]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[92]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[92]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[92]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[92]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[92]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[92]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[92]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[93]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[93]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[93]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[93]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[93]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[93]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[93]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[93]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[93]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[94]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[94]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[94]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[94]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[94]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[94]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[94]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[94]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[94]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[95]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[95]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[95]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[95]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[95]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[95]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[95]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[95]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[95]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[96]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[96]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[96]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[96]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[96]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[96]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[96]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[96]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[96]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[97]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[97]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[97]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[97]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[97]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[97]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[97]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[97]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[97]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[98]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[98]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[98]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[98]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[98]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[98]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[98]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[98]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[98]+'" value="unknown"></td>'+
'</tr>'+


headings_valence+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[99]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[99]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[99]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[99]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[99]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[99]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[99]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[99]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[99]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[100]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[100]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[100]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[100]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[100]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[100]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[100]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[100]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[100]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[101]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[101]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[101]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[101]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[101]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[101]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[101]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[101]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[101]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[102]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[102]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[102]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[102]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[102]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[102]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[102]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[102]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[102]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[103]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[103]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[103]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[103]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[103]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[103]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[103]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[103]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[103]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[104]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[104]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[104]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[104]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[104]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[104]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[104]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[104]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[104]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[105]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[105]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[105]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[105]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[105]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[105]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[105]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[105]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[105]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[106]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[106]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[106]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[106]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[106]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[106]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[106]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[106]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[106]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[107]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[107]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[107]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[107]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[107]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[107]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[107]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[107]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[107]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[108]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[108]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[108]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[108]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[108]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[108]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[108]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[108]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[108]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[109]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[109]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[109]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[109]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[109]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[109]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[109]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[109]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[109]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[110]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[110]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[110]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[110]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[110]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[110]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[110]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[110]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[110]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[111]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[111]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[111]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[111]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[111]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[111]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[111]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[111]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[111]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[112]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[112]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[112]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[112]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[112]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[112]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[112]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[112]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[112]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[113]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[113]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[113]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[113]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[113]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[113]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[113]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[113]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[113]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[114]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[114]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[114]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[114]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[114]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[114]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[114]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[114]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[114]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[115]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[115]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[115]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[115]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[115]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[115]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[115]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[115]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[115]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[116]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[116]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[116]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[116]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[116]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[116]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[116]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[116]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[116]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[117]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[117]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[117]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[117]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[117]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[117]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[117]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[117]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[117]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[118]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[118]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[118]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[118]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[118]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[118]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[118]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[118]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[118]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[119]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[119]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[119]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[119]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[119]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[119]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[119]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[119]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[119]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[120]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[120]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[120]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[120]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[120]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[120]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[120]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[120]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[120]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[121]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[121]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[121]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[121]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[121]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[121]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[121]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[121]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[121]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[122]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[122]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[122]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[122]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[122]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[122]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[122]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[122]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[122]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[123]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[123]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[123]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[123]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[123]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[123]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[123]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[123]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[123]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[124]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[124]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[124]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[124]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[124]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[124]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[124]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[124]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[124]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[125]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[125]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[125]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[125]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[125]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[125]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[125]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[125]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[125]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[126]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[126]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[126]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[126]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[126]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[126]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[126]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[126]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[126]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_valence[127]+'</td>'+
  '<td class="outlined"><input type="radio" name="'+word_valence[127]+'" value="-3" required></td>'+
  '<td><input type="radio" name="'+word_valence[127]+'" value="-2"></td>'+
  '<td><input type="radio" name="'+word_valence[127]+'" value="-1"></td>'+
  '<td class="outlined1"><input type="radio" name="'+word_valence[127]+'" value="0"></td>'+
  '<td><input type="radio" name="'+word_valence[127]+'" value="1"></td>'+
  '<td><input type="radio" name="'+word_valence[127]+'" value="2"></td>'+
  '<td><input type="radio" name="'+word_valence[127]+'" value="3"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_valence[127]+'" value="unknown"></td>'+
'</tr>'+

'</tbody>'+
'</table>';