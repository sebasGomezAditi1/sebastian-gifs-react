import { useCounter } from '../hooks/useCounter'

export const MyCounterApp = () => {
    const { counter, handleSubstract, handleAdd, handleReset } = useCounter(5)
    return (
        <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Counter: { counter }</h1>
            <div style = {{ display: 'flex', gap: '10px'}}>
                <button onClick ={ handleSubstract }>-1</button>
                <button onClick ={ handleReset }>Reset</button>
                <button onClick ={ handleAdd }>+1</button>
            </div>
        </div>
    )
}
