# Changelog

## [3.0.0] - 20.02.2023

### Change

- `ReturnType` now specifies base return type (without being covered in `Promise`, etc...)
- `Args` are replaced with single `Arg` and represents a type of first and the only argument
- Functions take only one argument which is of type `Arg`
- Function return type is now `Promise<ReturnType>`

## [2.2.1] - 13.10.2022

### Fix

- Versioning mismatch

## [2.2.0] - 13.10.2022

### Add

- Define `GetFullQuizee` cloud function
- Define `GetPublicQuizee` cloud function

## [2.0.1] - 06.07.2022

### Fix

- Rename namespaces

## [2.0.0] - 06.07.2022

### Change

- Export set of namespaces with args, return type and function instead of just function type

### Fix

- Add `publishQuizee` to `QuizeeCloudFunction` type

## [1.1.0] - 05.07.2022

### Add

- Add `PublishQuizeeFunction` type

## [1.0.2] - 05.07.2022

### Fix

- Omit `config` prop in answers field of the `data` of the `CheckAnswersFunction`

## [1.0.1] - 30.06.2022

### Fix

- Cover return types with Promise

## [1.0.0] - 30.06.2022

First version
