//div main
var body = document.body;
var mainDiv = document.createElement('div');
var mainDivAttrId = document.createAttribute('id');
mainDivAttrId.value = 'main';
mainDiv.setAttributeNode(mainDivAttrId);
body.appendChild(mainDiv);

// div header
var header = document.header;
var headerDiv = document.createElement('div');
headerDiv.setAttribute('id', 'header-div');
mainDiv.appendChild(headerDiv);
var headerTitle = document.createElement('h1');
var headerTitleText = document.createTextNode('Binary Clock');
headerTitle.appendChild(headerTitleText);
headerDiv.appendChild(headerTitle);
