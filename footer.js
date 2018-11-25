//div main
var footerDiv = document.createElement('div');
var footerDivAttrId = document.createAttribute('id');
footerDivAttrId.value = 'footer';
footerDiv.setAttributeNode(footerDivAttrId);
body.appendChild(footerDiv);

// div header
var footer = document.footer;
var footerInsideDiv = document.createElement('div');
footerInsideDiv.setAttribute('id', 'footer-div');
footerDiv.appendChild(footerInsideDiv);
var footerTitle = document.createElement('h6');
var footerTitleText = document.createTextNode('Luthfi Arfiansyah');
footerTitle.appendChild(footerTitleText);
footerInsideDiv.appendChild(footerTitle);
