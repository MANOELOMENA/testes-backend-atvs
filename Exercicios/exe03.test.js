function Saudacao (nome){
    return `Olá, ${nome}`
}
test("Verifica Saudação, 'Olá, Carlos'", ()=>{

    expect(Saudacao("Carlos")).toMatch("Olá, Carlos")
    //Neste exemplo, Jest verifica se o array/caracteres possui exatamente  elementos. Se o comprimento não corresponder ao valor esperado, o teste falhará
    expect(Saudacao("Carlos")).toHaveLength(11)
})

