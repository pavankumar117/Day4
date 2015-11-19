var arr = [7,1,6,2,3];//Array creation
var dvv = document.getElementById('mytable'); //getting the value
var tab = document.createElement('table');//table creation
tab.setAttribute('border' , '1');
tab.setAttribute('id' , 'tab');
var row = document.createElement('tr');//table row creation
for(var i=0; i<arr.length;i++){   //loop for printing the array elements
  var col = document.createElement('td');//table data creation
  var colText = document.createTextNode(arr[i]);//giving data to be printed in table data
  col.appendChild(colText);//appending td data into td
  row.appendChild(col);//appending td in row
  tab.appendChild(row);// appending row in table
}
dvv.appendChild(tab);// appending row in div tag
for (var i = 0; i < (arr.length); i++) {//loop for sorting the array elements
   for (j = i+1; j < arr.length; j++) {
     if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
     }
   }
 }
 var tab1 = document.createElement('table') ;
 tab1.setAttribute('border','1');
 tab1.setAttribute('id' , 'tab');
 var row1 = document.createElement('tr');
 for(var i=0; i<arr.length;i++) {//loop for printing the sorted elements
   var col1 = document.createElement('td');
   var col1Text = document.createTextNode(arr[i]);
   col1.appendChild(col1Text);
   row1.appendChild(col1);
   tab1.appendChild(row1);
 }
 dvv.appendChild(tab1);
