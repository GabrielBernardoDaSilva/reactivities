using FluentValidation;

namespace Application.Validators
{
    public static class ValidatorExtensions
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var options = ruleBuilder
            .NotEmpty()
            .MinimumLength(6)
            .Matches("[A-Z]").WithMessage("Must contain 1 uppercase letter")
            .Matches("[a-z]").WithMessage("Must contain 1 lowercase letter")
            .Matches("[0-9]").WithMessage("Must contain 1 number")
            .Matches("^a-zA-Z0-9").WithMessage("Must contain 1 non-alphanumeric character");

            return options;
        }
    }
}