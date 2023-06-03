import * as React from 'react'
export default function Loading() {
    const [drop, setDrop] = React.useState('.')
    setTimeout(() => {
        if (drop.length >= 3) {
            setDrop('.')
        } else {
            setDrop((now) => {
                return now + '.'
            })
        }
    }, 80)
    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#fff' }}>
            <div className="text-999" style={{ padding: '70px 40px' }}>
                NOW LOADING{drop}
            </div>
        </div>
    )
}
