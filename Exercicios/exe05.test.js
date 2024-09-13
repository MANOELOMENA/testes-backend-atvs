function ContemValor(arr, valor) {
    return arr.includes(valor);
}
test('Verifica se o valor está presente no array com toHaveLength', () => {
    const arr = [1, 2, 3, 4, 5];
    const PresenteNaArr = 4
    expect(ContemValor(arr,PresenteNaArr)).toBe(true); 
    
})