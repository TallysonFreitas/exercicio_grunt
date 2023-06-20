document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sorteador').addEventListener('submit',function(e){
        e.preventDefault()
        let maxNum = document.getElementById('max')
        const sorte = document.getElementById('sorte')
        const res = document.getElementsByClassName('resultado')[0]

        res.style.display = 'block'
        maxNum = parseInt(maxNum.value)

        let random = Math.random() * maxNum
        random = Math.ceil(random)

        sorte.innerHTML = random
    })
})