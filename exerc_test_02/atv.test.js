function media (a, b, c){
    return (a + b + c) / 3
}

test("A média é", () =>{
    expect(media(7, 8, 6)).toBeCloseTo(7)
    
})