function AreaQ(numero){
    return numero * numero
}

test("Verificar área do quadrado", ()=>{
    expect(AreaQ(4)).toBe(16)
    expect(AreaQ(4)).toBeGreaterThan(15)
    expect(AreaQ(4)).toBeLessThan(17)
})