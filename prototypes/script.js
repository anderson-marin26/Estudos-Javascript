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

Object.defineProperty(dog, 'name', {writable: false})

display(Object.getOwnPropertyDescriptor(dog, 'name'))