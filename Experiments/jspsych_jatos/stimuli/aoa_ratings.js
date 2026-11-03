var ratings_aoa = '';

var headings_aoa = '<tr>'+
'<th></th>'+
'<th class="outlined">věk</th>'+
'<th class="outlined1" style="color: #9F1F41;">Toto slovo<br/>neznám</th>'+
'</tr>'

ratings_aoa += '<table class="responsive-table-input-matrix" style="width:50%" id="aoa_ratings_table">'+
  '<thead>'+
  headings_aoa+
  '</thead>'+
  '<tbody>'+

  '<tr>'+
  '<td style="text-align: left; width: 250px;">'+'pejsek'+'</td>'+
  '<td class="outlined"><input type="number" name="'+'pejsek'+'" required></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+'pejsek'+'" value="unkown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[0]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[0]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[0]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[1]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[1]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[1]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[2]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[2]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[2]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[3]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[3]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[3]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[4]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[4]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[4]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[5]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[5]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[5]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[6]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[6]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[6]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[7]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[7]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[7]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[8]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[8]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[8]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[9]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[9]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[9]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[10]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[10]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[10]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[11]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[11]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[11]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[12]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[12]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[12]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[13]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[13]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[13]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[14]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[14]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[14]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[15]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[15]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[15]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[16]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[16]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[16]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[17]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[17]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[17]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[18]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[18]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[18]+'" value="unknown"></td>'+
'</tr>'+


headings_aoa+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[19]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[19]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[19]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[20]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[20]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[20]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[21]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[21]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[21]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[22]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[22]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[22]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[23]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[23]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[23]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[24]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[24]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[24]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[25]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[25]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[25]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[26]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[26]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[26]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[27]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[27]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[27]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[28]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[28]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[28]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[29]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[29]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[29]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[30]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[30]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[30]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[31]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[31]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[31]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[32]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[32]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[32]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[33]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[33]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[33]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[34]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[34]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[34]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[35]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[35]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[35]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[36]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[36]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[36]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[37]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[37]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[37]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[38]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[38]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[38]+'" value="unknown"></td>'+
'</tr>'+


headings_aoa+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[39]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[39]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[39]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[40]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[40]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[40]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[41]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[41]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[41]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[42]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[42]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[42]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[43]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[43]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[43]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[44]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[44]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[44]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[45]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[45]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[45]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[46]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[46]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[46]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[47]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[47]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[47]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[48]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[48]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[48]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[49]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[49]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[49]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[50]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[50]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[50]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[51]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[51]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[51]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[52]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[52]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[52]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[53]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[53]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[53]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[54]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[54]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[54]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[55]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[55]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[55]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[56]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[56]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[56]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[57]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[57]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[57]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[58]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[58]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[58]+'" value="unknown"></td>'+
'</tr>'+


headings_aoa+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[59]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[59]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[59]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[60]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[60]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[60]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[61]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[61]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[61]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[62]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[62]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[62]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[63]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[63]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[63]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[64]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[64]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[64]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[65]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[65]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[65]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[66]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[66]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[66]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[67]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[67]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[67]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[68]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[68]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[68]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[69]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[69]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[69]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[70]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[70]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[70]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[71]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[71]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[71]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[72]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[72]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[72]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[73]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[73]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[73]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[74]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[74]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[74]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[75]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[75]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[75]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[76]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[76]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[76]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[77]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[77]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[77]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[78]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[78]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[78]+'" value="unknown"></td>'+
'</tr>'+


headings_aoa+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[79]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[79]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[79]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[80]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[80]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[80]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[81]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[81]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[81]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[82]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[82]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[82]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[83]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[83]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[83]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[84]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[84]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[84]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[85]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[85]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[85]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[86]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[86]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[86]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[87]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[87]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[87]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[88]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[88]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[88]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[89]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[89]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[89]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[90]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[90]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[90]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[91]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[91]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[91]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[92]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[92]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[92]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[93]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[93]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[93]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[94]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[94]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[94]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[95]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[95]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[95]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[96]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[96]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[96]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[97]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[97]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[97]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[98]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[98]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[98]+'" value="unknown"></td>'+
'</tr>'+


headings_aoa+


'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[99]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[99]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[99]+'" value="unknown"></td>'+
'</tr>'+'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[100]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[100]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[100]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[101]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[101]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[101]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[102]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[102]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[102]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[103]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[103]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[103]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[104]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[104]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[104]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[105]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[105]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[105]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[106]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[106]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[106]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[107]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[107]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[107]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[108]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[108]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[108]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[109]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[109]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[109]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[110]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[110]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[110]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[111]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[111]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[111]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[112]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[112]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[112]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[113]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[113]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[113]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[114]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[114]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[114]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[115]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[115]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[115]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[116]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[116]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[116]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[117]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[117]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[117]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[118]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[118]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[118]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[119]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[119]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[119]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[120]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[120]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[120]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[121]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[121]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[121]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[122]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[122]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[122]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[123]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[123]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[123]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[124]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[124]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[124]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[125]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[125]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[125]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[126]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[126]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[126]+'" value="unknown"></td>'+
'</tr>'+
'<tr>'+
  '<td style="text-align: left; width: 250px;">'+word_aoa[127]+'</td>'+
  '<td class="outlined"><input type="number" name="'+word_aoa[127]+'"></td>'+
  '<td class="outlined1"><input type="radio" style="border:2px solid #9F1F41;" name="'+word_aoa[127]+'" value="unknown"></td>'+
'</tr>'+

'</tbody>'+
'</table>';
