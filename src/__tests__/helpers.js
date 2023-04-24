import "@testing-library/jest-dom";
import {sortTaskByData, sortTaskByGroup} from "../helpers";

describe("funcSortTaskByData", ()=>{
    test("should exist", ()=>{
        expect(sortTaskByData([])).toBeDefined();
    });
    test("should return sort data",()=>{
        const mockTask = [{created: 1666714119}, {created: 1666714134}, {created: 1666714140}];
        const mockTaskExpected = [{created: 1666714140}, {created: 1666714134}, {created: 1666714119}];
        expect(sortTaskByData(mockTask)).toStrictEqual(mockTaskExpected); //сравниваем вернет нам функция массив или нет
        expect(sortTaskByData(mockTask)).not.toBe(undefined);
        expect(sortTaskByData(mockTask)).not.toEqual([]);
    })
});

describe("funcSortTaskByGroup", ()=> {
    test("should exist", () => {
        expect(sortTaskByGroup([])).toBeDefined();
    });
    test("should return [{favorite}, {unChecked}, {completed}]", () => {
        const mockTask = [{favorite: true, completed: false}, {favorite: false, completed: true}, {
            favorite: false,
            completed: false
        }];
        const mockTaskExpected = [{favorite: true, completed: false}, {
            favorite: false,
            completed: false
        }, {favorite: false, completed: true}];
        expect(sortTaskByGroup(mockTask)).toStrictEqual(mockTaskExpected);
        expect(sortTaskByGroup(mockTask)).not.toBe(undefined);
        expect(sortTaskByGroup(mockTask)).not.toEqual([]);
    })
    test('should return [{unChecked}, {unChecked}, {completed}]', () => {
        const mockTask = [{favorite: false, completed: true}, {favorite: false, completed: false}, {
            favorite: false,
            completed: false
        }];
        const mockTaskExpected = [{favorite: false, completed: false}, {
            favorite: false,
            completed: false
        }, {favorite: false, completed: true}];
        expect(sortTaskByGroup(mockTask)).toStrictEqual(mockTaskExpected);
        expect(sortTaskByGroup(mockTask)).not.toBe(undefined);
        expect(sortTaskByGroup(mockTask)).not.toEqual([]);
    })
    test('should return [{favorite}, {favorite}, {completed}]', () => {
        const mockTask = [{favorite: true, completed: false}, {favorite: true, completed: false}, {
            favorite: false,
            completed: true
        }];
        const mockTaskExpected = [{favorite: true, completed: false}, {
            favorite: true,
            completed: false
        }, {favorite: false, completed: true}];
        expect(sortTaskByGroup(mockTask)).toStrictEqual(mockTaskExpected);
        expect(sortTaskByGroup(mockTask)).not.toBe(undefined);
        expect(sortTaskByGroup(mockTask)).not.toEqual([]);
    })
    test('should return [{completed}, {completed}, {completed}]', () => {
        const mockTask = [{favorite: false, completed: true}, {favorite: false, completed: true}, {
            favorite: false,
            completed: true
        }];
        const mockTaskExpected = [{favorite: false, completed: true}, {
            favorite: false,
            completed: true
        }, {favorite: false, completed: true}];
        expect(sortTaskByGroup(mockTask)).toStrictEqual(mockTaskExpected);
        expect(sortTaskByGroup(mockTask)).not.toBe(undefined);
        expect(sortTaskByGroup(mockTask)).not.toEqual([]);
    })

    test('should return [{favorite}, {completed}, {completed}]', () => {
        const mockTask = [{favorite: false, completed: true}, {favorite: true, completed: true}, {favorite: false, completed: true}];
        const mockTaskExpected = [{favorite: true, completed: true}, {favorite: false, completed: true}, {favorite: false, completed: true}];
        expect(sortTaskByGroup(mockTask)).toStrictEqual(mockTaskExpected);
        expect(sortTaskByGroup(mockTask)).not.toBe(undefined);
        expect(sortTaskByGroup(mockTask)).not.toEqual([]);
    })
})

