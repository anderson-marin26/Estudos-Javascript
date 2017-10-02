'use strict';

class Cat
{
	constructor(name, color)
	{
		this.name = name
		this.color = color
	}

	speak()
	{
		display('Meow')
	}
}

var dog = {
	name: 'dogo',
	color: 'black'
}

/*
** With enumerable false you cannot iterate on a for loop or serialize or see the key
*/
Object.defineProperty(dog, 'name', {enumerable: false})

display(Object.keys(dog))

// loops
for (var propertyName in dog)
{
	display(propertyName + ': ' + dog[propertyName])
}