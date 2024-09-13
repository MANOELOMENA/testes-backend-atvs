function ValidaEmail(email) {
    const regex  = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email)
}
test("Verificar E-mail carlos123@gmail",()=>{
    expect(ValidaEmail("carlos123gmail.com")).toEqual(false)
    expect(ValidaEmail("carlos123@gmail.com")).toEqual(true)
    expect(ValidaEmail("carlos123@gmail.com")).not.toEqual(false)
    expect(ValidaEmail("carlos123gmail.com")).not.toEqual(true)
})