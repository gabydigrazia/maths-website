// Display the form for the shape selected 
document.getElementById('meanBtn').style.display = 'block';
document.getElementById('medianBtn').style.display = 'none';
document.getElementById('modeBtn').style.display = 'none';

// Show or hide form depend on the select option selected
const selectShape = document.querySelector('.select');

selectShape.addEventListener('click', (event) => {
    const OPTION_SELECTED = event.target.value;
    document.getElementById('numbersInput').value = '';
    document.getElementById('errorMessage').innerHTML = '';

    switch (OPTION_SELECTED) {
        case 'value1':
            document.getElementById('meanBtn').style.display = 'block';
            document.getElementById('medianBtn').style.display = 'none';
            document.getElementById('modeBtn').style.display = 'none';
            document.getElementById('statisticResult').innerHTML = 'Mean selected';
            break;
        case 'value2':
            document.getElementById('meanBtn').style.display = 'none';
            document.getElementById('medianBtn').style.display = 'block';
            document.getElementById('modeBtn').style.display = 'none';
            document.getElementById('statisticResult').innerHTML = 'Median selected';
            break;
        case 'value3':
            document.getElementById('meanBtn').style.display = 'none';
            document.getElementById('medianBtn').style.display = 'none';
            document.getElementById('modeBtn').style.display = 'block';
            document.getElementById('statisticResult').innerHTML = 'Mode selected';
            break;
      }
});

// Helpers
const convertStringToArr = listStr => {
    const listArr = listStr.split(',');
    let COUNT = 0;

    listArr.map(
        function(element) {
            if (!isNaN(element)) COUNT++;
        }
    )

    if (COUNT < listArr.length) {
        document.getElementById('errorMessage').innerHTML = 'You must enter a valid list of numbers separated by commas.'
        document.getElementById('errorMessage').style.display = 'block';
        return null;
    } else {
        return listArr;
    }
}

// Get input list of number
const  getNumbers = () => {
    document.getElementById('errorMessage').style.display = 'none';

    const numbersStr = document.getElementById('numbersInput').value;
    return listNumbers = convertStringToArr(numbersStr.replace(/\s+/g, ''));
}

// Calculate Mean
const calculateMean = meanInit => {
    let listNumbers; // = getNumbers();

    meanInit === undefined ? listNumbers = getNumbers() : listNumbers = meanInit;

    if (listNumbers === null) {
        return
    } else {
        const sum = listNumbers.reduce(function(valorAnterior, valorActual){
            return parseInt(valorAnterior) + parseInt(valorActual);
        })

        const mean = sum%listNumbers.length === 0 ? sum/listNumbers.length : (sum/listNumbers.length).toFixed(2);

        meanInit === undefined ? 
            document.getElementById('statisticResult').innerHTML = `The mean (average) of the number set is: ${mean}` :
            document.getElementById('statisticResult').innerHTML = `The median of the number set is: ${mean}`;
    }
}

// Calculate Median
const calculateMedian = () => {
    const listNumbers = getNumbers();

    if (listNumbers === null ) {
        return
    } else {
        const middle = Math.floor(listNumbers.length/2);
        let median = [];

        if (listNumbers.sort((a,b) => a-b).length%2 === 0) {
            median.push(listNumbers[middle-1], listNumbers[middle]);
            calculateMean(median);
        } else {
            median = listNumbers[middle];
            document.getElementById('statisticResult').innerHTML = `The median of the number set is: ${median}`;
        }
    }
}

// Calculate Mode
const calculateMode = () => {
    const listNumbers = getNumbers();
    const mode = {};
    let count = 0, result = 0;

    if (listNumbers === null) {
        return;
    } else {
        for (let i = 0; i < listNumbers.length; i++) {
            const element = listNumbers[i];

            if (mode[element]) {
                mode[element]++
            } else {
                mode[element] = 1;
            }

            if (count < mode[element]) {
                result = element;
                count = mode[element];
            }
        }
        document.getElementById('statisticResult').innerHTML = `The mode of the number set is: ${result}`;
    }
}
