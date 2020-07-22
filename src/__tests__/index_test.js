import validator from '../js/index';

test('name = Anna_193--anna', () => {
    expect(validator.validateUsername('Anna_193--anna')).toBe('Имя Anna_193--anna соответсвует требованием');
});

test('name = AL', () => {
    expect(validator.validateUsername('AL')).toBe('Имя AL соответсвует требованием');
});

test('name = R0b0t', () => {
    expect(validator.validateUsername('R0b0t')).toBe('Имя R0b0t соответсвует требованием');
});

test('name = OBI-1C', () => {
    expect(validator.validateUsername('OBI-1C')).toBe('Имя OBI-1C соответсвует требованием');
});

test('name = Anna_19--anna', () => {
    expect(validator.validateUsername('Anna_19--anna')).toBe('Имя Anna_19--anna соответсвует требованием');
});

test('name = Anna_1--anna', () => {
    expect(validator.validateUsername('Anna_1--anna')).toBe('Имя Anna_1--anna соответсвует требованием');
});

test('name = Anna-anna', () => {
    expect(validator.validateUsername('Anna-anna')).toBe('Имя Anna-anna соответсвует требованием');
});

test('name = Anna_anna', () => {
    expect(validator.validateUsername('Anna_anna')).toBe('Имя Anna_anna соответсвует требованием');
});

test('name = AnnaAanna', () => {
    expect(validator.validateUsername('AnnaAanna')).toBe('Имя AnnaAanna соответсвует требованием');
});

test('name = annabanna', () => {
    expect(validator.validateUsername('annabanna')).toBe('Имя annabanna соответсвует требованием');
});

test('wrong name = 123asd', () => {
    expect(validator.validateUsername('123asd')).toBe('Имя 123asd не соответсвует требованием');
});

test('wrong name = adg123', () => {
    expect(validator.validateUsername('adg123')).toBe('Имя adg123 не соответсвует требованием');
});

test('wrong name = shdf-', () => {
    expect(validator.validateUsername('shdf-')).toBe('Имя shdf- не соответсвует требованием');
});

test('wrong name = _sdg', () => {
    expect(validator.validateUsername('_sdg')).toBe('Имя _sdg не соответсвует требованием');
});

test('wrong name = 123', () => {
    expect(validator.validateUsername('123')).toBe('Имя 123 не соответсвует требованием');
});

test('wrong name = -_', () => {
    expect(validator.validateUsername('-_')).toBe('Имя -_ не соответсвует требованием');
});

test('wrong name = dfhf({', () => {
    expect(validator.validateUsername('dfhf({')).toBe('Имя dfhf({ не соответсвует требованием');
});