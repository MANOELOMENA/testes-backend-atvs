/* PROCURA ITENS EM UM ARRAY */

const lista = ["Banana", "Melão", "Melancia", "Maçã"]

test("Identifica 'maçã' no array", () =>{
    expect(lista).toContain("Maçã")
    expect(lista).not.toContain("Jabuticaba")
    expect(lista).toHaveLength(4)
})

function retornaErro() {
    throw new Error
}

test("Retorna um Erro", () =>{
    expect(()=> retornaErro()).toThrow()
})

/** Testando funções assincromas */

const fetchData = async () => "Ford Ka"

test("Espera que o dado seja um 'Ford Ka'", async() =>{
    const carro = await fetchData()
    expect(carro).toBe("Ford Ka")
})