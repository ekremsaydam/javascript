let value;

value = document.scripts;
value = document.scripts.length;
value = document.scripts[0];

value = document.links;
value = document.links.length;
value = document.links[4];
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].getAttribute("href");
value = document.links[document.links.length - 1].classList;

value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms["form"]


console.log(value);