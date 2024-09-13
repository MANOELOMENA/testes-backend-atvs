function filtraPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
  }
  
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numerosPares = filtraPares(numeros);
  
  test("Verificado",()=>{
    expect(numerosPares).toContainEqual(2);
  expect(numerosPares).toContainEqual(4);
  expect(numerosPares).toContainEqual(6);
  expect(numerosPares).toContainEqual(8);
  })
  
  test("Verificado",()=>{
     expect(numerosPares).toEqual([2, 4, 6, 8]);
  })
 