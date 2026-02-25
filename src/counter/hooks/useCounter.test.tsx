import { beforeEach, describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";

describe('useCounter', () => {
    test('should initialize with default value of 10', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10)
    });
    test('should initialize with default value of 20', () => {
        const initialValue = 20;
        const { result } = renderHook(() => useCounter(initialValue));
        expect(result.current.counter).toBe(20)
    });
    test('should increment counter when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter());
       act(() => {
           result.current.handleAdd();
       })
       expect(result.current.counter).toBe(11);
    });
    test('should decrement counter when handleSubstract is called', () => {
        const { result } = renderHook(() => useCounter());
       act(() => {
           result.current.handleSubstract();
       })
       expect(result.current.counter).toBe(9);
    });

    test('should reset counter when handleReset is called', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.handleSubstract();
        })
        expect(result.current.counter).toBe(9);
        act(() => {
           result.current.handleReset();
        })
        expect(result.current.counter).toBe(10);
    });
})