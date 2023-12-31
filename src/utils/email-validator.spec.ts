import { EmailValidatorAdapter } from './email-validator';
import validator from 'validator';

jest.mock('validator', () => ({
    isEmail (): boolean {
        return true;
    }
}));

const makeSut = (): EmailValidatorAdapter => {
    return new EmailValidatorAdapter();
}


describe('Email Validator', () => {
    test('Should return true if validator returns true', () => {
        const sut = makeSut();
        const isEmailValid = sut.isValid('valid_email@mail.com');
        expect(isEmailValid).toBe(true);
    });

    test('Should return false if validator returns false', () => {
        const sut = makeSut();
        jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
        const isEmailValid = sut.isValid('invalid_email@mail.com');
        expect(isEmailValid).toBe(false);
    });

    test('Should call validator with correct email', () => {
        const sut = makeSut();
        const isEmailValidSpy = jest.spyOn(validator, 'isEmail');
        sut.isValid('any_email@mail.com');
        expect(isEmailValidSpy).toHaveBeenCalledWith('any_email@mail.com');
    });

});