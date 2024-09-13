function media (a,b,c){
    return (a + b + c) / 3
}
test("Verificar média",()=>{
    expect(media(5,6,5)).toBeCloseTo(5.33)
})