var getItem = document.getElementById('add--item');
var Start = document.getElementById('start');

Start.addEventListener('click', function() {
    var startspace = document.getElementById('startspace');
    var name = prompt('What is your name?');
   
    //the if condition
   
    if(name !== '' && name !== null) {
        var space = document.createElement('p');
        var txt = document.createTextNode('Hi, ' + name  + '...Welcome to my App');
        space.appendChild(txt);
        space.style.color = 'white';
        startspace.appendChild(space);
        Start.remove();
        var focusItem = document.getElementById('input--field')
        focusItem.focus();
        //when ENTER key is being pressed
        document.addEventListener('keypress', function (event)
        {
            if (event.keyCode === 13 || event.which === 13) {
                var focusItem = document.getElementById('input--field');

                var item = document.getElementById('input--field').value;
                if (item !== "") {
                    var textCont = document.getElementById('text-contents');
                    var create = document.createElement('p');
                    var createbutton = document.createElement('button');
                    var renamebutton = document.createElement('button');
                    var renametext = document.createTextNode('Rename');
                    var textbutton = document.createTextNode('Delete');
                    createbutton.style.marginTop = '15px';
                    create.style.marginTop = '20px';
                    create.style.color = 'white';
                    createbutton.style.color = 'white';
                    createbutton.style.outline = 'none';
                    createbutton.style.border = 'none';
                    createbutton.style.backgroundColor = 'red';
                    renamebutton.style.color = 'white';
                    renamebutton.style.backgroundColor = 'green';
                    renamebutton.style.outline = 'none';
                    renamebutton.style.border = 'none';
                    createbutton.style.marginLeft = '50px';
                    createbutton.appendChild(textbutton);
                    renamebutton.appendChild(renametext);
                    var text = document.createTextNode(item);
                    create.appendChild(text);
                    textCont.appendChild(create);
                    textCont.appendChild(renamebutton);
                    textCont.appendChild(createbutton);
                    document.getElementById('input--field').value = "";
                } else {
                    alert('You have not added an item');
                    focusItem.focus();
                }
                createbutton.addEventListener('click', function ()
                {
                    create.innerHTML = "";
                    createbutton.replaceWith('');
                    renamebutton.replaceWith('');
                    focusItem.focus();


                });



                renamebutton.addEventListener('click', function ()
                {
                    document.getElementById('input--field').value = create.innerHTML;
                    create.innerHTML = "";
                    renamebutton.replaceWith('');
                    createbutton.replaceWith('');
                    focusItem.focus();

                });
            }
        });

            //when ADD button is being pressed

        getItem.addEventListener('click', function ()
        {
            var focusItem = document.getElementById('input--field')

            var item = document.getElementById('input--field').value;

            if (item !== "" ) {
                var textCont = document.getElementById('text-contents');
                var create = document.createElement('p');
                var createbutton = document.createElement('button');
                var renamebutton = document.createElement('button');
                var renametext = document.createTextNode('Rename');
                var textbutton = document.createTextNode('Delete');
                createbutton.style.marginTop = '15px';
                create.style.marginTop = '20px';
                create.style.color = 'white';
                createbutton.style.color = 'white';
                createbutton.style.outline = 'none';
                createbutton.style.border = 'none';
                createbutton.style.backgroundColor = 'red';
                renamebutton.style.color = 'white';
                renamebutton.style.backgroundColor = 'green';
                renamebutton.style.outline = 'none';
                renamebutton.style.border = 'none';
                createbutton.style.marginLeft = '50px';
                createbutton.appendChild(textbutton);
                renamebutton.appendChild(renametext);
                var text = document.createTextNode(item);
                create.appendChild(text);
                textCont.appendChild(create);
                textCont.appendChild(renamebutton);
                textCont.appendChild(createbutton);
                document.getElementById('input--field').value = "";


                createbutton.addEventListener('click', function ()
                {
                    create.innerHTML = "";
                    createbutton.replaceWith('');
                    renamebutton.replaceWith('');
                    focusItem.focus();


                });

                renamebutton.addEventListener('click', function ()
                {
                    document.getElementById('input--field').value = create.innerHTML;
                    create.innerHTML = "";
                    renamebutton.replaceWith('');
                    createbutton.replaceWith('');
                    focusItem.focus();

                });

                focusItem.focus();
            } else {
                alert('You have not added an item');
                focusItem.focus();
            }

        });
        //the else condition
    }else{
        var html = '<button id="start">Start</button>';
        startspace.insertAdjacentHTML(html);
    }
});

































