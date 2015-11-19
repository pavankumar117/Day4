var arr = [{
'id' : '3',
'name' : 'pavan'
},
{
  'id' : '1',
  'name' : 'akhil'
},
{
  'id' : '2',
  'name' : 'kumar'
}
];
var keys = Object.keys(arr[0]);
var length=keys.length;
//creation of table done

var dvv = document.getElementById('mytable');
var tab = document.createElement('table');
tab.setAttribute('border','1');
var row = document.createElement('tr');
for( var i=0; i<length;i++){
  var head = document.createElement('th');
  var headText = document.createTextNode(keys[i]);
  head.setAttribute('onclick','mysort()');
  head.setAttribute('id','sort');
  head.appendChild(headText);
  row.appendChild(head);
  tab.appendChild(row);
}
for(var i = 0; i <arr.length; i++) {
  var row1 = document.createElement('tr');
  for(var j=0; j<length; j++) {
    var col = document.createElement('td');
    var colText = document.createTextNode(arr[i][keys[j]]);
    col.appendChild(colText);
    row1.appendChild(col);
    }
    tab.appendChild(row1);
  }
dvv.appendChild(tab);

// End of creation of table


//creation of sort function

function mysort(){
console.log('read');
for(var i=0; i<arr.length;i++){
  for(var j=i+1; j<arr.length;j++){
    if(arr[i]>arr[j]){
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      console.log('hello');
    }
  }
}
}

function myfilter(){
  var x = (document.getElementById('search').value);
    /*  if(x==arr[i][k[j]]){
        console.log("i found that");
        else{
          console.log('nothing found');
        }
      }
  }*/
  console.log('you entered the value:'+x);
}
