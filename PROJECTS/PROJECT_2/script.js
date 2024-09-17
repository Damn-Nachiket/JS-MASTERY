const form = document.querySelector('form')
// This is wrong because it will give us empty value.
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit' , function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')
    const reports = document.querySelector('#report')

    if( height === "" || height < 0 || isNaN(height)){
        results.innerHTML = `Please Enter Valid Height ${height}`
    } else if( weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please Enter Valid Weight ${weight}`
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span> ${bmi}</span>`

        const bmiValue = parseFloat(bmi);

        if (bmiValue < 18.6) {
            reports.innerHTML = "You are underweight";
        } else if (bmiValue >= 18.6 && bmiValue <= 24.9) {
            reports.innerHTML = "You are fit and normal weight";
        } else if (bmiValue > 24.9) {
            reports.innerHTML = "You are overweight";
        }
    }
})