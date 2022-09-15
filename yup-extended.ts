import * as yup from "yup";
import { Schedule } from "./";

declare module "yup" {
  interface ArraySchema<T> {
   validateScheduleMasterList(): ArraySchema<T>;
  }
}

yup.addMethod(yup.array, 'validateScheduleMasterList', function() {
    return this.test('validateScheduleMasterList', 'Must have at least one working day', function (value): (boolean | yup.ValidationError) {
        const { path } = this
        const payload = (value as Schedule[]).map(val => val.isWorking)
        const res = payload.reduce((prevValue, currentValue) => {
            return prevValue || currentValue
        }, false)
        return res || this.createError({ path, message: 'must have at least one working day' })
    })
})

export default yup;