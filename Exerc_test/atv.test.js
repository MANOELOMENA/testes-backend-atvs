function area (a){
    return a * a 
}

test("Soma de a + a = 16", () =>{
    expect(area(4)).toBe(16)
    
})