import * as React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Loading from '@/components/loading'

function App() {
    function randCharAnother(length, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#=/[]') {
        //length为所需长度，characters为所包含的所有字符，默认为字母+数字。
        let charactersList = characters.split('') //分割字符。
        let result = '' //返回的结果。
        while (result.length < length)
            result += charactersList[Math.floor(Math.random() * charactersList.length)]
        return result
    }
    function characterJitter(targetE) {
        if (!targetE) return
        let thisTarget = targetE
        let currentInnerHTML = thisTarget.getAttribute('data-text')
        let currentLength = thisTarget.innerHTML.length + 5
        let currentIndex = 0
        thisTarget.innerHTML = ''
        let timers = setInterval(() => {
            currentIndex++
            if (currentIndex >= currentLength) {
                thisTarget.innerHTML = currentInnerHTML
                clearInterval(timers)
                return
            }
            if (currentIndex <= 5) {
                thisTarget.innerHTML = thisTarget.innerHTML + randCharAnother(1)
            } else {
                let currentOperation = currentIndex - 5
                thisTarget.innerHTML =
                    currentInnerHTML.substr(0, currentOperation) +
                    randCharAnother(currentInnerHTML.length - currentOperation)
            }
        }, 20)
    }

    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            // 遍历监听鼠标移入事件
            for (const iterator of document.querySelectorAll('.effect-text')) {
                iterator.parentNode.onmouseenter = function (e) {
                    characterJitter(e.target.querySelector('.effect-text'))
                }
            }
            // 依次加载入场动画
            for (let index = 0; index < 30; index++) {
                setTimeout(() => {
                    characterJitter(document.querySelectorAll('.effect-text')[index])
                }, 100 * index)
            }
        }, 2000)
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {isLoading ? (
                <Loading></Loading>
            ) : (
                <div>
                    <Header></Header>
                    <Outlet />
                    <Footer></Footer>
                </div>
            )}
        </div>
    )
}

export default App
