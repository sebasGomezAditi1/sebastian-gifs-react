import { describe, expect, test } from "vitest";
import { useGifs } from './useGifs';
import { renderHook } from "@testing-library/react";
import { act } from "react";

describe('useGifs', () => {
    test('should return default values and methods', () => {
        const { result } = renderHook(() => useGifs())
        expect(result.current.previousTerms).toStrictEqual([]);
        expect(result.current.gifs).toStrictEqual([]);
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.handleTermClick).toBeDefined();
    })

    test('should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs());
        await act(async () => {
            await result.current.handleSearch('goku');
        })
        expect(result.current.gifs.length).toBe(10)
    });

    test('should return a list of gif when handleTermiClicked is called', async () => {
        const { result } = renderHook(() => useGifs());
        await act(async () => {
            await result.current.handleTermClick('goku');
        })
        expect(result.current.gifs.length).toBe(10)
    })

    test('should return a list of gifs from cache', async () => {
        const { result } = renderHook(() => useGifs());
        await act(async () => {
            await result.current.handleTermClick('goku');
        })
        expect(result.current.gifs.length).toBe(10)
    })
})