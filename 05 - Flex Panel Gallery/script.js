const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}


    // const panels = document.querySelectorAll('.panel');

    // function toggleOpen() {
    //   console.log('Hello');
    //   this.classList.toggle('open');
    // }

    // function toggleActive(e) {
    //   console.log(e.propertyName);
    //   if (e.propertyName.includes('flex')) {
    //     this.classList.toggle('open-active');
    //   }
    // }

    // panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    // panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

   