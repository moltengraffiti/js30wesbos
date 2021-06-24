const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => input.addEventListener('change', handleChange));

function handleChange() {
    // console.log(`Slider value is: ${this.value}`);
    // console.log(`Dataset value is: ${this.dataset}`);
    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    // console.log(this.name);

    //use name, not class or id here 
    //TODO - why?
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);




}