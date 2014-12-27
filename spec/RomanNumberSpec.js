describe("RomanNumber", function() {
  it("should return I for 1", function() {
    expect(RomanNumber(1)).toEqual('I');
    }
  );
  it("should return II for 2", function() {
    expect(RomanNumber(2)).toEqual('II');
    }
  );
  it("should return V for 5", function() {
    expect(RomanNumber(5)).toEqual('V');
    }
  );
});
