document.addEventListener('DOMContentLoaded', function(){

  const innerWrapper = document.querySelector('.wrapper__inner');
  const textBlock = document.createElement('div');
  const textEditor = document.createElement('textarea');  

  textBlock.classList.add('wrapper__text-block');
  textEditor.classList.add('wrapper__text-editor');

  innerWrapper.prepend(textBlock); 

  //CTRL + E event
  document.addEventListener('keydown', (e) => {    
    if (e.code === 'KeyE' && e.ctrlKey && textBlock.parentElement != null) {
      e.preventDefault();
      textBlock.replaceWith(textEditor);
    }
  });
  
  //CTRL + S event
  document.addEventListener('keydown', (e) => {    
    if (e.code === 'KeyS' && e.ctrlKey && textEditor.parentElement != null) {
      e.preventDefault();
      const textValue = textEditor.value;
      textEditor.replaceWith(textBlock);
      textBlock.innerText = textValue;
    }
  });

  //Escape event
  document.addEventListener('keydown', (e) => {    
    if (e.code === 'Escape' && textEditor.parentElement != null ) {
      textEditor.value = textBlock.innerText;
      textEditor.replaceWith(textBlock);      
    }
  });  
});
  


