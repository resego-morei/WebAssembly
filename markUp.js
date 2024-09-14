let retailPriceModule;

document.getElementById('calculateButton').addEventListener('click', () => {
    const wholesaleCost = parseFloat(document.getElementById('wholesaleCost').value);
    const markupPercentage = parseFloat(document.getElementById('markupPercentage').value);

    if (isNaN(wholesaleCost) || isNaN(markupPercentage) || wholesaleCost < 0 || markupPercentage < 0) {
        alert('Please enter valid positive numbers.');
        return;
    }

    const retailPrice = retailPriceModule.calculateRetail(wholesaleCost, markupPercentage);
    document.getElementById('retailPrice').textContent = retailPrice.toFixed(2);
});

fetch('retail_price.wasm')
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.instantiate(buffer, {
        env: {
            __memory_base: 0,
            __table_base: 0,
            memory: new WebAssembly.Memory({ initial: 256 }),
            table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
        }
    }))
    .then(wasmModule => {
        console.log(wasmModule.instance.exports);
        
        retailPriceModule = wasmModule.instance.exports;
    })
    .catch(console.error);