// const index = require("./index")
import { debounce } from "../index"

jest.useFakeTimers()
// utilizar los fake timers para testear lo que pasa en el tiempo

describe("should call a function with debounce", () => {
    it("should call the function 2 times, reseting with each call", () =>{
        const func = jest.fn()
        let debouncedFunc = debounce(func, 500)

        debouncedFunc()

        jest.advanceTimersByTime(500)

        expect(func).toHaveBeenCalledTimes(1)

        debouncedFunc()
        debouncedFunc()
        debouncedFunc()

        expect(func).toHaveBeenCalledTimes(1)

        jest.advanceTimersByTime(500)

        jest.runAllTimers()

        expect(func).toHaveBeenCalledTimes(2)
    })
})