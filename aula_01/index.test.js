function soma (a, b){
    return a+b
}

/** MATCHERS para números */

test("Soma 1 + 4 e retorna 5", () =>{
    expect(soma(1, 4)).toBe(5)
    expect(soma(2, 3)).toBe(5)
    expect(soma(2.5, 2.5)).toEqual(5)
})

test("18 é maior de idade", () =>{
    const numero = 18
    expect(20).toBeGreaterThan(numero)
    expect(18).toBeGreaterThanOrEqual(numero)
})

/** Matchers para string */

test("Procura letra I na palavra", () => {
    const nome = "Igor"

    expect(nome).toMatch(/I/)
    expect(nome).not.toMatch(/Y/)
})