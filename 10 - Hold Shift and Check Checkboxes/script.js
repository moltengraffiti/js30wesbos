const boxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(boxes);

let lastChecked;

boxes.forEach(box => box.addEventListener('click', handleCheck));

function handleCheck(e) {
    // console.log(e);
    // lastChecked = this;

    let inBetween = false;
    // if the shift key is down && they're checking the box
    if (e.shiftKey && this.checked) {
        //loop over boxes to see if in between
        boxes.forEach(box => {
            console.log(box);
            if (box === this || box === lastChecked) {
                inBetween = !inBetween;
                console.log(box);
                console.log(inBetween);
            }

            if (inBetween) {
                box.checked = true;
            }

        });

    }
    lastChecked = this;
    //TODO - review this
}