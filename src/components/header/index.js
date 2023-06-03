import * as React from 'react'
import './index.scss'

export default function PrimarySearchAppBar() {
    let searchRef = React.useRef()
    let inputRef = React.useRef()
    const elementIsInFocus = (el) => el === document.activeElement
    React.useEffect(() => {
        searchRef.current.onmouseenter = function () {
            inputRef.current.style.opacity = 1
            inputRef.current.style.width = '100%'
            searchRef.current.style.zIndex = '3'
        }
        searchRef.current.onmouseleave = function () {
            if (!elementIsInFocus(inputRef.current)) {
                inputRef.current.style.opacity = 0
                inputRef.current.style.width = '20%'
                searchRef.current.style.zIndex = 0
            }
        }
        inputRef.current.onblur = function () {
            inputRef.current.style.opacity = 0
            inputRef.current.style.width = '20%'
            searchRef.current.style.zIndex = 0
        }
    }, [])
    const [muneBoxShow, setMuneBoxShow] = React.useState(false)
    function handleStopWheel(e) {
        e.preventDefault()
    }
    function onScrollTo() {
        window.scrollTo({ top: 0, left: 0 })
    }
    return (
        <header className="header-box d-flex-between-center">
            <div
                className="d-flex-align-center overflow-hidden d-none d-md-flex"
                style={{ height: 18 }}>
                <div className="border-effect"></div>
                <p
                    className="ms-5 effect-text cursor-pointer overflow-hidden"
                    data-text="KASHIWA SATO"
                    style={{ width: 120 }}>
                    KASHIWA SATO
                </p>
                <p
                    className="ms-1 d-none d-lg-block cursor-pointer overflow-hidden"
                    style={{ color: '#999', width: 150 }}>
                    SAMURAI INC. &nbsp;TOKYO
                </p>
            </div>
            <div className="d-flex-center d-flex d-md-none">
                <div className="border-effect" style={{ width: 11, height: 28 }}></div>
                <div className="ms-3 cursor-pointer">
                    <p className="fw-bold" style={{ fontSize: 18, marginTop: '-5px' }}>
                        KASHIWA SATO
                    </p>
                    <p
                        className="fs-8 text-999"
                        style={{ transform: 'scale(0.8, 0.8)', margin: '-5px -16px' }}>
                        SAMURAI INC. &nbsp;TOKYO
                    </p>
                </div>
            </div>
            <div className="d-flex-align-center d-none d-md-flex">
                <ul className="d-flex-align-center z-1">
                    <li
                        className="cursor-pointer overflow-hidden"
                        style={{ width: 64, height: 18 }}>
                        <span className="effect-text" data-text="PROJECT">
                            PROJECT
                        </span>
                    </li>
                    <li className="line"></li>
                    <li
                        className="cursor-pointer overflow-hidden"
                        style={{ width: 60, height: 18 }}>
                        <span className="text-999 effect-text" data-text="PROFILE">
                            PROFILE
                        </span>
                    </li>
                    <li className="line"></li>
                    <li
                        className="cursor-pointer overflow-hidden"
                        style={{ width: 64, height: 18 }}>
                        <span className="text-999 effect-text" data-text="CONTACT">
                            CONTACT
                        </span>
                    </li>
                </ul>
                <ul className="d-flex-align-center ms-5 z-1" style={{ height: 30 }}>
                    <li style={{ width: 60, height: 18 }}>
                        <span className="effect-text text-999" data-text="ENGLISH">
                            ENGLISH
                        </span>
                    </li>
                    <li className="line"></li>
                    <li style={{ width: 70, height: 18 }}>
                        <span className="effect-text text-999" data-text="JAPANESE">
                            JAPANESE
                        </span>
                    </li>
                    <li className="line"></li>
                    <li style={{ width: 60, height: 18 }}>
                        <span className="effect-text" data-text="CHINESE">
                            CHINESE
                        </span>
                    </li>
                </ul>
                <div ref={searchRef} className="search d-flex-center">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="PLEASE INPUT KEYWORD"
                        className="ps-3"
                    />
                    <div className="button"></div>
                </div>
            </div>
            <div className="menu-button d-flex d-md-none">
                {!muneBoxShow ? (
                    <div
                        className="open-menu"
                        onClick={() => {
                            setMuneBoxShow(true)
                            onScrollTo()
                        }}></div>
                ) : (
                    <div
                        className="close-menu"
                        onClick={() => {
                            setMuneBoxShow(false)
                            onScrollTo()
                        }}></div>
                )}
            </div>
            {muneBoxShow && (
                <div className="side-menu">
                    <p>PROJECT</p>
                    <p className="text-999">PROFILE</p>
                    <p className="text-999">CONTACT</p>

                    <p className="mt-7 text-999">ENGLISH</p>
                    <p className="text-999">JAPANESE</p>
                    <p>CHINESE</p>

                    <div className="d-flex mt-9 position-relative">
                        <input
                            type="text"
                            placeholder="PLEASE INPUT KEYWORD"
                            className="ps-3"
                            style={{ width: 215, height: 33, border: '1px solid #ccc' }}
                        />
                        <div className="close-input"></div>
                        <div
                            className="d-flex-center"
                            style={{
                                width: 82,
                                height: 33,
                                color: '#fff',
                                backgroundColor: '#ccc'
                            }}>
                            SEARCH
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
