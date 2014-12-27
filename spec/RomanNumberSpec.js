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
  it("should return X for 10", function() {
    expect(RomanNumber(10)).toEqual('X');
    }
  );
  it("should return L for 50", function() {
    expect(RomanNumber(50)).toEqual('L');
    }
  );
  it("should return IV for 4", function() {
    expect(RomanNumber(4)).toEqual('IV');
    }
  );
  it("should return IX for 9", function() {
    expect(RomanNumber(9)).toEqual('IX');
    }
  );
  it("should return XL for 40", function() {
    expect(RomanNumber(40)).toEqual('XL');
    }
  );
  it("should return C for 100", function() {
    expect(RomanNumber(100)).toEqual('C');
    }
  );
  it("should return XIV for 14", function() {
    expect(RomanNumber(14)).toEqual('XIV');
    }
  );
  it("shloud convert more arabic to roman number", function() {
    expect(RomanNumber(16)).toEqual('XVI');
    expect(RomanNumber(12)).toEqual('XII');
    expect(RomanNumber(90)).toEqual('XC')
  });
});
